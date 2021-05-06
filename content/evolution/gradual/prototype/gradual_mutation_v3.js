var stage, background, genomeViewer1, genomeViewer2;
var board = [];
var organisms = [];
var maxOrganisms = 30;
var sunlight = 1;
var nutrients = 1;
var h2o = 1;
var reproduceTime = 2.5;
var growTime = 0.5;
var fps = 32;
var deltaTime = 1 / fps;
var masterTicker = 0;
var generations = 0;
var viewerNumber = 0;
var selectedOrganisms = [];

function Organism(coord, preferences, color, index) {
	this.index = index;
	this.survivalAdvantage;
	this.color = color;
	this.coord = coord;
	this.coord.occupied = true;
	this.sunPref = preferences[0];
	this.nutrientsPref = preferences[1];
	this.h2oPref = preferences[2];
	this.diceRoll = 0;
	this.ticker = 0;
	this.diameter = 10;
	this.circle = new createjs.Shape();
	this.circle.regX = 0;
	this.circle.regY = 0;
	this.circle.graphics.beginFill(color).drawCircle(0, 0, this.diameter / 2);
	this.circle.x = this.coord.x;
	this.circle.y = this.coord.y;
	this.circle.scaleX = 1;
	this.circle.scaleY = 1;
	this.listener = this.circle.on("click", handleClick, null, false, {organism:this});
	stage.addChild(this.circle);
	// Called each tick
	this.update = function() {
		this.ticker ++;
		
		if (this.ticker > reproduceTime * fps) { // Die of old age
			this.die();
		} else if (this.ticker === reproduceTime * fps) { // Reproduce
			this.reproduce();
		} else if (this.ticker >= growTime * fps) { // 'Hatch' and start growing
			this.grow();
		}
	}
	// Make the organism become larger
	this.grow = function() {
		if (this.circle.scaleX < 2) {
			this.circle.scaleX += (1 / (reproduceTime * 0.5)) * deltaTime;
			this.circle.scaleY += (1 / (reproduceTime * 0.5)) * deltaTime;
			this.radius = 5 * this.circle.scaleX;
		}
	}
	// Set the survival advantage for this animal based on its prefs and environmental conditions
	this.setAdvantage = function() {
		var newAdvantage = 0;
		var diff;
		
		diff = Math.abs(sunlight - this.sunPref);
		newAdvantage += 1 - diff;
		diff = Math.abs(h2o - this.h2oPref);
		newAdvantage += 1 - diff;
		diff = Math.abs(nutrients - this.nutrientsPref);
		newAdvantage += 1 - diff;
		
		this.survivalAdvantage = newAdvantage;
		this.circle.off("click", this.listener);
		this.listener = this.circle.on("click", handleClick, null, false, {organism:this});
	}
	// Make two new organisms in a random location
	this.reproduce = function() {
		for (var i = 0; i < 2; i ++) {
			var coordinates = generateCoordinates(this.coord);
			var prefs = setPreferences(this.sunPref, this.nutrientsPref, this.h2oPref);
			var color = setColor(prefs);
			var baby = new Organism(coordinates, prefs, color, organisms.length);
			baby.setAdvantage();
			organisms.push(baby);
		}
	}
	// Remove this organism from the list of organisms and the stage
	this.die = function() {
		if (this.circle.alpha > 0.01) {
			if (reproduceTime === 2.5 || reproduceTime === 5) {
				this.circle.alpha -= (1 / (growTime)) * deltaTime;
			}
			else {
				this.circle.alpha -= (1 / ((reproduceTime - growTime) / 3)) * deltaTime;
			}
		} else {
			this.coord.occupied = false;
			stage.removeChild(this.circle);
			organisms.splice(this.index, 1);
			for (var i = 0; i < organisms.length; i++) {
				organisms[i].index = i;
			}
		}
	}
}

function Coordinate(row, col, x, y) {
	// The index of this coordinate in the board array
	this.row = row;
	this.col = col;
	// The pixel coordinates of this coordinate on the canvas
	this.x = x;
	this.y = y;
	// Whether or not this location is occupied
	this.occupied = false;
}

var init = function() {
    stage = new createjs.Stage("main");
	background = new createjs.Shape();
	background.graphics.beginFill("white").drawRect(0, 0, 800, 500);
	background.on("click", deselect);
	stage.addChild(background);
	genomeViewer1 = document.getElementById("genomeViewer1");
	genomeViewer2 = document.getElementById("genomeViewer2");
	document.getElementById("start").disabled = false;
	var sunDropdown = document.getElementById("sun");
	sunlight = sunDropdown.options[sunDropdown.selectedIndex].value;
	var nutrientsDropdown = document.getElementById("nutrients");
	nutrients = nutrientsDropdown.options[nutrientsDropdown.selectedIndex].value;
	var h2oDropdown = document.getElementById("water");
	h2o = h2oDropdown.options[h2oDropdown.selectedIndex].value;
	
	changeSpeed();
	
	var possibleXs = [];
	var possibleYs = [];
	for (var i = 0; i < 39; i++) {
		possibleXs[i] = 10 + 20 * i;
	}
	for (var i = 0; i < 24; i++) {
		possibleYs[i] = 10 + 20 * i;
	}
	for (var i = 0; i < possibleYs.length; i++) {
		var newRow = [];
		for (var j = 0; j < possibleXs.length; j++) {
			newRow.push(new Coordinate(i, j, possibleXs[j], possibleYs[i]));
		}
		board.push(newRow);
	}
	
	populateStage();
}

var start = function() {
	var startButton = document.getElementById("start");
	startButton.disabled = true;
    createjs.Ticker.on("tick", tick);
    createjs.Ticker.setFPS(fps);
}

var pause = function() {
	var startButton = document.getElementById("start");
	startButton.disabled = false;
    createjs.Ticker.removeAllEventListeners("tick");
}

var reset = function() {
	var startButton = document.getElementById("start");
	startButton.disabled = false;
	createjs.Ticker.removeAllEventListeners("tick");
	masterTicker = 0;
	generations = 0;
	document.getElementById("generations").innerHTML = "Generations: " + generations;
	deselect();
		
	// Reset organisms
	for (var i = 0; i < organisms.length; i++) {
		stage.removeChild(organisms[i].circle);
	}
	organisms = [];
	
	// Reset the board
	for (var i = 0; i < board.length; i++) {
		for (var j = 0; j < board[0].length; j++) {
			board[i][j].occupied = false;
		}
	}
		
	populateStage();
}

var randomize = function() {
	var allCoordinates = [];
	for (var i = 0; i < board.length; i++) {
		for (var j = 0; j < board[0].length; j++) {
			allCoordinates.push(board[i][j]);
			board[i][j].occupied = false;
		}
	}
	allCoordinates = shuffle(allCoordinates);
	for (var i = 0; i < organisms.length; i++) {
		organisms[i].coord = allCoordinates[i];
		organisms[i].coord.occupied = true;
		organisms[i].circle.x = organisms[i].coord.x;
		organisms[i].circle.y = organisms[i].coord.y;
	}
	stage.update();
}

var changeSpeed = function() {
	var speedDropdown = document.getElementById("speed");
	var speed = speedDropdown.options[speedDropdown.selectedIndex].value;
	var oldRTime = reproduceTime;
	
	switch(speed) {
		case "fast":
		reproduceTime = 1;
		growTime = 0;
		break;
		
		case "medium":
		reproduceTime = 2.5;
		growTime = 0.5;
		break;
		
		case "slow":
		reproduceTime = 5;
		growTime = 1;
		break;
	}
	
	masterTicker = Math.floor(masterTicker * (reproduceTime / oldRTime));
	for (var i = 0; i < organisms.length; i++) {
		organisms[i].ticker = Math.floor(organisms[i].ticker * (reproduceTime / oldRTime));
	}
}

var changeSun = function() {
	var sunDropdown = document.getElementById("sun");
	sunlight = sunDropdown.options[sunDropdown.selectedIndex].value;
	setAllAdvantages();
}

var changeNutrients = function() {
	var nutrientsDropdown = document.getElementById("nutrients");
	nutrients = nutrientsDropdown.options[nutrientsDropdown.selectedIndex].value;
	setAllAdvantages();
}

var changeH2O = function() {
	var h2oDropdown = document.getElementById("water");
	h2o = h2oDropdown.options[h2oDropdown.selectedIndex].value;
	setAllAdvantages();
}

var populateStage = function() {
	
	var prefs = [randomFloat(1, 3), randomFloat(1, 3), randomFloat(1, 3)];
	var color = setColor(prefs);
	organisms.push()
	
	for (var i = 1; i < maxOrganisms; i++) {
		var row = randomInt(0, 23);
		var col = randomInt(0, 38);
		var coordinate = board[row][col];
		coordinate = generateCoordinates(coordinate);
		organisms.push(new Organism(coordinate, prefs, color, i));
	}
	setAllAdvantages();
	stage.update();
}

// Calls all the necessary functions to draw a genome when an organism is clicked on
var handleClick = function(evt, data) {
	selectedOrganisms.push(data.organism);
	data.organism.circle.graphics.clear();
	data.organism.circle.graphics.beginStroke("black").beginFill(data.organism.color).drawCircle(0, 0, data.organism.diameter / 2);
	stage.update();
	displayGenome(data.organism.color, data.organism.survivalAdvantage);
}

// Draws a blown up version of the organism along with its % advantage and a representation of its genome
var displayGenome = function(rgbString, survivalAdvantage) {
	// Decide which canvas to draw on
	if (viewerNumber === 2) {
		viewerNumber = 0;
		deselect();
	}
	var canvas;
	switch (viewerNumber) {
		case 0:
			canvas = genomeViewer1;
			break;
		
		case 1:
			canvas = genomeViewer2;
			break;
	}
	
	// Draw the organism
	var context = canvas.getContext("2d");
	context.fillStyle = rgbString;
	context.arc(canvas.width / 2, 95, 60, 0, 2 * Math.PI);
	context.fill();
	context.closePath();
	context.font = "20px Arial";
	context.textAlign = "center";
	context.textBaseline = "middle";
	context.fillStyle = "black";
	context.fillText(calcPercentAdvantage(survivalAdvantage), canvas.width / 2, 95);
	
	// Draws the organism's chromosomes
	var rgbVals = extractRGB(rgbString);
	for (var i = 0; i < 3; i++) {
		createChromosome(i, rgbVals[i], context)
	}
	
	viewerNumber++;
}

// Draws the nucleotide bases making up one of an organism's three chromosomes
var createChromosome = function(number, rgbVal, ctx) {
	var nucleotideArray = genotypeArray[rgbVal].split(",");
	ctx.font = "30px Arial";
	ctx.textAlign = "left";
	ctx.textBaseline = "alphabetic";
	for (var i = 0; i < 4; i++) {
		var complement;
		var topFill;
		var botFill;
		switch (nucleotideArray[i]) {
			case "A":
				complement = "T";
				topFill = "blue";
				botFill = "orange";
				break;
			case "T":
				complement = "A";
				topFill = "orange";
				botFill = "blue";
				break;
			case "G":
				complement = "C";
				topFill = "green";
				botFill = "red";
				break;
			case "C":
				complement = "G";
				topFill = "red";
				botFill = "green";
				break;
		}
		
		var top = 190;
		var space = 100;
		ctx.fillStyle = topFill;
		ctx.fillText(nucleotideArray[i], 65 + i * 50, top + 35 + space * number);
		ctx.fillStyle = botFill;
		ctx.fillText(complement, 65 + i * 50, top + 75 + space * number);
		ctx.fillStyle = "black";
		ctx.beginPath();
		ctx.moveTo(40, top + space * number);
		ctx.lineTo(260, top + space * number);
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(40, top + 85 + space * number);
		ctx.lineTo(260, top + 85 + space * number);
		ctx.stroke();
		ctx.closePath();
	}
}

// Updates the canvas 30 times every second, and makes the organisms do things
var tick = function(event) {
	masterTicker ++;
	if (masterTicker >= (growTime + reproduceTime) / 2 * fps + reproduceTime * fps - 0.25 * fps) {
		generations++;
		document.getElementById("generations").innerHTML = "Generations: " + generations;
		cull();
		masterTicker = (growTime + reproduceTime) / 2 * fps;
	}
	
    for (var i = 0; i < organisms.length; i++) {
		organisms[i].update();
	}
    stage.update(event);
}

// Clears the genotype panels and unhighlights any selected organisms
var deselect = function() {
	var s = selectedOrganisms;
	viewerNumber = 0;
	eraseCanvas(genomeViewer1);
	eraseCanvas(genomeViewer2);
	for (var i = 0; i < selectedOrganisms.length; i++) {
		if (i < 2) {
			selectedOrganisms[i].circle.graphics.clear();
			selectedOrganisms[i].circle.graphics.beginFill(selectedOrganisms[i].color).drawCircle(0, 0,selectedOrganisms[i].diameter / 2);
		} else {
			selectedOrganisms[i].circle.graphics.clear();
			selectedOrganisms[i].circle.graphics.beginStroke("black").beginFill(selectedOrganisms[i].color).drawCircle(0, 0,selectedOrganisms[i].diameter / 2);
		}
	}
	if (selectedOrganisms.length === 3) {
		var temp = [];
		temp[0] = selectedOrganisms[2];
		selectedOrganisms = temp;
	} else {
		selectedOrganisms = [];
	}
		stage.update();
}

// Calculates how much of an advantage an organism has over the average advantage of all the other organisms on the stage and returns it as a string
var calcPercentAdvantage = function(adv) {
	var sumAdvantage = 0;
	for (var i = 0; i < organisms.length; i++) {
		sumAdvantage += organisms[i].survivalAdvantage;
	}
	var average = sumAdvantage / organisms.length;
	var percent = ((adv - average) / Math.abs(average)) * 100;
	percent = Math.round(percent * 10) / 10;
	return percent + "%";
}

// Takes a string representing an organism's RGB value, and returns it as an array of ints
var extractRGB = function(string) {
	var s1 = string.substring(4);
	var s2 = s1.substring(0, s1.length - 1);
	var s3 = s2.split(", ");
	var s4 = [];
	for (var i = 0; i < s3.length; i++) {
		s4.push(parseInt(s3[i]));
	}
	return s4;
}

// Sets the survival advantages for all living organisms
var setAllAdvantages = function() {
	for (var i = 0; i < organisms.length; i++) {
		organisms[i].setAdvantage();
	}
}

// If there are more organisms than the environment can support, culls some of them
var cull = function() {
	var juveniles = new Array(0);
	for (var i = 0; i < organisms.length; i ++) {
		if (organisms[i].ticker < reproduceTime * fps) {
			organisms[i].ticker = (growTime + reproduceTime) / 2 * fps;
			juveniles.push(organisms[i]);
		}
	}
	
	if (juveniles.length > maxOrganisms) {
		var cullNumber = juveniles.length - maxOrganisms;
		var lowestDiceRolls = new Array(0);
		for (var i = 0; i < juveniles.length; i ++) {
			juveniles[i].diceRoll = Math.random() + juveniles[i].survivalAdvantage;
		}
		for (var z = 0; z < cullNumber; z ++) {
			var lowestDice = 10;
			var lowestIndex = -1;
			for (var j = 0; j < juveniles.length; j ++) {
				if (juveniles[j].diceRoll < lowestDice && doesNotEqualAny(lowestDiceRolls, juveniles[j].diceRoll)) {
					lowestDice = juveniles[j].diceRoll;
					lowestIndex = j;
				}
			}
			lowestDiceRolls.push(lowestDice);
			juveniles[lowestIndex].ticker = 100 * fps;
		}
		
	}
}

// Determines what conditions the organism will do best in
var setPreferences = function(parentSun, parentNutrients, parentH2O) {
	var preferences = [parentSun, parentNutrients, parentH2O];
	var mutationRate = 0.2;
	var r = randomInt(1, 3);
	
	switch (r) {
		case 1:
			preferences[0] += randomFloat(-mutationRate, mutationRate);
			break;
		case 2:
			preferences[1] += randomFloat(-mutationRate, mutationRate);
			break;
		case 3:
			preferences[2] += randomFloat(-mutationRate, mutationRate);
			break;
	}

	for (var i = 0; i < preferences.length; i++) {
		if (preferences[i] > 3)
			preferences[i] = 3;
		if (preferences[i] < 1)
			preferences[i] = 1;
	}
	
	return preferences;
}

// Determines which color this organism should be based on its preferences
var setColor = function(preferences) {
	var red = Math.floor(scaleNumber(preferences[0], 1, 3, 0, 230));
	var green = Math.floor(scaleNumber(preferences[1], 1, 3, 0, 230));
	var blue = Math.floor(scaleNumber(preferences[2], 1, 3, 0, 230));
	
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}

// If the coordinate is taken, returns the next open coordinate near it
var generateCoordinates = function(coordObj) {
	if (coordObj.occupied === false) {
		return coordObj;
	} else {
		var cols = shuffle([-2, -1, 0, 1, 2]);
		var rows = shuffle(cols);
		var multiplier = 2;
		while(true) {
			for (var i = 0; i < rows.length; i++) {
				for (var j = 0; j < cols.length; j++) {
					if (0 <= rows[i] + coordObj.row && rows[i] + coordObj.row < board.length && 0 <= cols[j] + coordObj.col && cols[j] + coordObj.col < board[0].length) {
						try {
							var nextCoord = board[rows[i] + coordObj.row][cols[j] + coordObj.col];
						}
						catch (err) {
							console.log("rows[i]: " + rows[i]);
							console.log("coordObj.row: " + coordObj.row);
							console.log("cols[j]: " + cols[j]);
							console.log("coordObj.col: " + coordObj.col);
						}
						if (nextCoord.occupied === false) {
							return nextCoord;
						}
					}
				}
			}
			multiplier++;
			var toConcat = [multiplier, -multiplier];
			cols = cols.concat(toConcat);
			cols = shuffle(cols);
			rows = rows.concat(toConcat);
			rows = shuffle(rows);
		}
	}
}































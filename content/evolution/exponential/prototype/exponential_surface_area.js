// This simulation works in a stepwise fashion, since, in order to make a smooth simulation, you would need data on population increase rates, which are not available for many species.
// The simulation breaks individuals into groups: infants, sexually mature individuals, and individuals who are about to die.
// Each step, the simulation moves each group forward: infants -> mature group 1 -> mature group 2 -> etc. -> elderly -> dead.
// The simualtion adds new individuals to the infants group as members of each mature group reproduce. Individuals in the elderly group are removed from the population after reproducing one more time.
// The simulation assumes that there are exactly the same number of males and females born, individuals live as long as possible, individuals have as many progeny as possible each time they mate, and females reproduce their entire lives

// Global Variables
var hours = 0;
var locations = [];
var index = 0;
var incrementer = 1;
var earthArea = 5.2 * Math.pow(10, 14);
var animalImgSrc = "";
var stage, selectedAnimal, earth, numLocations;

// Animal objects represent a type of animal.
// Animal objects contain data about that animal, including how much space they take up, how many offspring they can have at once, how often they reproduce, the age at which they can begin reproducing, and how long they usually live.
function Animal(type, surfaceArea, litterSize, reproductionRate, sexualMaturity, lifespan) {
    this.type = type;
    this.surfaceArea = surfaceArea;
    this.litterSize = litterSize;
    this.reproductionRate = reproductionRate;
    this.sexualMaturity = sexualMaturity;
    this.lifespan = lifespan;
    this.cohorts = new Array(Math.round(lifespan / sexualMaturity));
    this.cohorts[0] = 0;
    this.cohorts[1] = 2;
    for (i = 2; i < this.cohorts.length; i++) {
        this.cohorts[i] = 0;
    }
    this.calcIndividuals = function(numGenerations) {
        var time = numGenerations * this.sexualMaturity;
        var individuals = (2 + this.litterSize) * Math.pow(1 + (this.litterSize / 2), numGenerations - 1);
        return individuals;
    };
    this.calcCohort = function() {
        var tempCohorts = new Array(this.cohorts.length);
        var babies = 0;
        for (i = 1; i < this.cohorts.length; i++) {
            babies += Math.round(this.cohorts[i] / 2) * this.litterSize;
        }
        tempCohorts[0] = babies;
        for (i = 0; i < this.cohorts.length - 1; i++) {
            tempCohorts[i + 1] = this.cohorts[i];
        }
        var population = 0;
        for (i = 0; i < tempCohorts.length; i++) {
            population += tempCohorts[i];
        }
        this.cohorts = tempCohorts;
        return population;
    };
}

// Initialize the animal objects
var krill = new Animal("Krill", 0.0005, 20000, 8760, 8760, 87600);
var fly = new Animal("Housefly", 0.0000014, 100, 146, 240, 720);
var cockroach = new Animal("Cockroach", 0.0008, 90, 2190, 730, 13140);
var stickleback = new Animal("Stickleback", 0.0014, 300, 8760, 8760, 26280);
var mouse = new Animal("Mouse", 0.000635, 6, 674, 730, 26280);
var rat = new Animal("Rat", 0.0073, 11, 1752, 840, 35040);
var elephant = new Animal("Elephant", 1.39, 1, 17520, 131400, 613200);
var human = new Animal("Human", 0.11, 1, 8760, 113880, 613200);

// Initialize the stage and the scale
function init() {
	document.getElementById("start").disabled = false;
	stage = new createjs.Stage("canvas");
	initLocations();
	numLocations = locations.length;
	
	earth = new createjs.Bitmap("earth.png");
	earth.regX = 400;
	earth.regY = 400;
	earth.x = 400;
	earth.y = 400;
	stage.addChild(earth);
		
	stage.update();
}

// Adds images to the screen depending on how close surface area is to the surface area of the earth
// If the number of animals onscreen were a direct reflection of how many animals were present, no animals would appear on the screen until the last few steps.
// Because of this, I had to add the strange incrememter modification, so that animals would be added smoothly as the simulation progressed
function addAnimalImages(surfaceArea) {
	while (incrementer < surfaceArea && index < 188) {
		incrementer *= 1 + 8.794 / (index + 1);
		
		var loc = locations[index];
		var newImage = new createjs.Bitmap(animalImgSrc);
		newImage.x = loc[0];
		newImage.y = loc[1];
		stage.addChild(newImage);
		
		index++;
	}
	
	stage.update();
}

// Randomly shuffles the contents of an array
function shuffle(array) {
	for (var i = 0; i < array.length; i++) {
		var r1 = randomInt(0, array.length - 1);
		var r2 = randomInt(0, array.length - 1);
		var temp = array[r1];
		array[r1] = array[r2];
		array[r2] = temp;
	}
	return array;
}

// Returns a random integer between min and max
function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Creates an array representing a grid covering the earth. The array contains 7 other arrays, each containing the x coordinate where an animal picture should be placed
// to fill that space on the grid.
function initLocations() {
	for (var i = 0; i <= 750; i += 750) {
		for (var j = 0; j < 4; j++) {
			var temp = [i, 300 + j * 50];
			locations.push(temp);
		}
	}
	for (var i = 50; i <= 700; i += 650) {
		for (var j = 0; j < 8; j++) {
			var temp = [i, 200 + j * 50];
			locations.push(temp);
		}
	}
	for (var i = 100; i <= 650; i += 550) {
		for (var j = 0; j < 10; j++) {
			var temp = [i, 150 + j * 50];
			locations.push(temp);
		}
	}
	for (var i = 150; i <= 600; i += 450) {
		for (var j = 0; j < 12; j++) {
			var temp = [i, 100 + 50 * j];
			locations.push(temp);
		}
	}
	for (var i = 200; i <= 250; i += 50) {
		for (var j = 0; j < 14; j++) {
			var temp = [i, 50 + j * 50];
			locations.push(temp);
		}
	}
	for (var i = 500; i <= 550; i += 50) {
		for (var j = 0; j < 14; j++){
			var temp = [i, 50 + j * 50];
			locations.push(temp);
		}
	}
	for (var i = 300; i <= 450; i += 50) {
		for (var j = 0; j < 16; j++) {
			var temp = [i, 0 + j * 50];
			locations.push(temp);
		}
	}
	
	locations = shuffle(locations);
}

// Creates a string representing 'num' in scientific notation
function convertToSciNotation (num) {
    var p = 0;
    while (Math.pow(10, p) <= num) {
        p += 1;
    }
    p -= 1;
    num /= Math.pow(10, p);
    var decimal = num.toFixed(2);
    return decimal + " x 10<sup>" + p + "</sup>";
}

// Called when the user presses the 'start' button
// Begins the simulation
function start() {
	document.getElementById("start").disabled = true;
    var e = document.getElementById("animal");
    var selection = e.options[e.selectedIndex].value;
    if (selection == "none") {
        alert("Please choose an animal!!");
    }
    else {
        switch(selection) {
            case "krill":
                selectedAnimal = krill;
                break;
            case "fly":
                selectedAnimal = fly;
                break;
            case "cockroach":
                selectedAnimal = cockroach;
                break;
            case "stickleback":
                selectedAnimal = stickleback;
                break;
            case "mouse":
                selectedAnimal = mouse;
                break;
            case "rat":
                selectedAnimal = rat;
                break;
            case "elephant":
                selectedAnimal = elephant;
                break;
            case "human":
                selectedAnimal = human;
                break;
        }
		animalImgSrc = selectedAnimal.type.toLowerCase() + ".png";
        document.getElementById("result").innerHTML = "";
        createjs.Ticker.on("tick", tick);
        createjs.Ticker.setFPS(2);
    }
	stage.update();
}

// Called when the user presses the pause button
// Pauses the simulation
function pause() {
	var startButton = document.getElementById("start");
	startButton.disabled = false;
    createjs.Ticker.removeAllEventListeners("tick");
}

// Called when the user presses the reset button
// Resets the simulation
function reset() {
	hours = 0;
	if (selectedAnimal != null && selectedAnimal != "none") {
		for (i = 0; i < selectedAnimal.cohorts.length; i++) {
			selectedAnimal.cohorts[i] = 0;
		}
		selectedAnimal.cohorts[1] = 2;
	}
    selectedAnimal = "none";
	index = 0;
	incrementer = 1;
    createjs.Ticker.removeAllEventListeners("tick");
	stage.removeAllChildren();
	stage.addChild(earth);
	stage.update();
	animalImgSrc = "https://graphics.gslc.utah.edu:5001/volume1/Graphics/Curriculum/Learn/Biology/Evolution/Exponential Growth Simulation/";
	locations = shuffle(locations);
	var startButton = document.getElementById("start");
	startButton.disabled = false;
    document.getElementById("time").innerHTML = "0 Years 0 Days";
    document.getElementById("individuals").innerHTML = "2 Individuals";
    document.getElementById("area").innerHTML = "0 m<sup>2</sup>";
    document.getElementById("result").innerHTML = "";
}

function end(result) {
    document.getElementById("result").innerHTML = "It would take approximately " + result + " for " + selectedAnimal.type + "s to cover the earth";
    createjs.Ticker.removeAllEventListeners("tick");
}

function tick(event) {
    hours += selectedAnimal.sexualMaturity;
    var h = hours;
    var years = Math.floor(h / 8760);
    h = h % 8760;
    var days = Math.floor(h / 24);
    var displayTime =  years + " Years " + days + " Days";
    document.getElementById("time").innerHTML = displayTime;
    var individuals = selectedAnimal.calcCohort();
    var displayInd;
    if (individuals > 1000)
        displayInd = convertToSciNotation(individuals);
    else
        displayInd = Math.round(individuals);
    document.getElementById("individuals").innerHTML = displayInd + " " + selectedAnimal.type +"s";
    var surfaceArea = individuals * selectedAnimal.surfaceArea;
    var displayArea;
    if (surfaceArea > 1000)
        displayArea = convertToSciNotation(surfaceArea);
    else
        displayArea = Math.round(surfaceArea);
    document.getElementById("area").innerHTML = displayArea + " m<sup>2</sup>";
	
    if (surfaceArea > earthArea)
        end(displayTime);
	
	addAnimalImages(surfaceArea);
}
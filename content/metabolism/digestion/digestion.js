
var canvas, stage, exportRoot, progressBar, fakeProgress, fpVal;

$(document).ready(function () {
	progressBar = document.getElementById("progressBar");

	var preloadScript = new createjs.LoadQueue();
	preloadScript.addEventListener("complete", jsLoaded);

	preloadScript.loadFile("DigestionFinal.js");

	fakeProgress = setInterval(jsFakeProgress, 1500);
	fpVal = 5.75;
});

function jsFakeProgress() {
	if(fpVal < 50) {
		fpVal += 5.75;
		progressBar.style.width = fpVal.toString() + "%";
	}
}

function jsLoaded() {
	clearInterval(fakeProgress);

	createjs.MotionGuidePlugin.install();

	canvas = document.getElementById("canvas");
	images = images||{};

	var loader = new createjs.LoadQueue(false);
	loader.installPlugin(createjs.Sound);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest(lib.properties.manifest);

	loader.addEventListener("progress", handleProgress);
}

function handleProgress(event) {
    progressBar.style.width = ((50 * (event.loaded / event.total))+50).toString() + "%";
}

function handleFileLoad(evt) {
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function handleComplete() {
	progressBar.parentNode.style.display = "none";
	exportRoot = new lib.DigestionFinal();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();
	stage.enableMouseOver();

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
}

function playSound(id, loop) {
	createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
}

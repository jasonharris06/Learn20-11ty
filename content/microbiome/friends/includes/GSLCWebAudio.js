var isMobile = false;
var unlocked = false;
var GWAContext;

var names = [];
var soundInfo = [];
var buzzObjs = [];



window.AudioContext = window.AudioContext || window.webkitAudioContext;
GWAContext = new AudioContext();
if(navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)){
	isMobile = true;
    document.getElementById("testButton").innerHTML=navigator.userAgent.toString();
}





//------------  Add new sound  -------------//

function _desktopSound (name, url, wantLoop) {
	names.push(name);
	var newSound = new buzz.sound(url, {
	    formats: [ "m4a", "ogg" ],
	    loop: wantLoop
	});
	buzzObjs.push(newSound);
}

function _mobileSound (name, url, loop) {
	names.push(name);
	var newGainNode = GWAContext.createGain();
	var newSoundInfo = {
		'url' : url,
		'gainNode' : newGainNode,
		'loop' : loop,
		'isPlaying' : false,
		'isPaused' : false,
		'startTime' : 0,
        'pauseTime' : 0,
		'sourceObj' : null
	}
	soundInfo.push(newSoundInfo);
}

function GWASound (name, url, loop){
	if(isMobile == true){
		_mobileSound(name, url, loop);
	}else{
		_desktopSound(name, url, loop);
	}
}




//------------  Play sound  -------------//

function _desktopPlay (name) {
	buzzObjs[names.indexOf(name)].play();
	//buzzObjs[names.indexOf(name)].sound.currentTime(0);
}

function _mobilePlay (name, time) {
    if(unlocked == false){
        unlockMobile();
        setTimeout(function () {
        	_loadSound();
        }, 200);
    }else{
        _loadSound();
    }

	var soundBuffer = null;
	function _loadSound() {
		var request = new XMLHttpRequest();
		request.open('GET', soundInfo[names.indexOf(name)].url + ".m4a", true);
		request.responseType = 'arraybuffer';

		// Decode asynchronously
		request.onload = function() {
			GWAContext.decodeAudioData(request.response, function(buffer) {
				soundBuffer = buffer;
				_createSource(soundBuffer);
			}, function onError () {
				console.log("error decoding audio data");
			});
		}
		request.send();
	}

	function _createSource(buffer) {
        var source = GWAContext.createBufferSource();
        source.buffer = buffer;
        source.loop = soundInfo[names.indexOf(name)].loop;
        var gn = soundInfo[names.indexOf(name)].gainNode;
        source.connect(gn);
        gn.connect(GWAContext.destination);

        soundInfo[names.indexOf(name)].sourceObj = source;

        _playSound();
	}

    function _playSound() {
    	soundInfo[names.indexOf(name)].isPlaying = true;
        soundInfo[names.indexOf(name)].isPaused = false;
    	soundInfo[names.indexOf(name)].startTime = GWAContext.currentTime;
        soundInfo[names.indexOf(name)].sourceObj.start(0, time); // note: on older systems, may have to use deprecated noteOn(time);
	}
}

function GWAPlay (name) {
	if(isMobile == true){
		if(soundInfo[names.indexOf(name)].isPaused == true){
			_mobileTogglePause(name);
		}else{
            if(soundInfo[names.indexOf(name)].isPlaying == false){
			    _mobilePlay(name, 0);
            }
		}
	}else{
		_desktopPlay(name);
	}
}






//------------  Stop a Sound  -------------//

function _desktopStop (name) {
	//buzzObjs[names.indexOf(name)].setTime(0);
	buzzObjs[names.indexOf(name)].stop();
}
function _mobileStop (name) {
    soundInfo[names.indexOf(name)].isPlaying = false;
    soundInfo[names.indexOf(name)].startTime = 0;
    soundInfo[names.indexOf(name)].pauseTime = 0;
	soundInfo[names.indexOf(name)].sourceObj.stop(0);
}
function GWAStop (name) {
	if(isMobile == true){
		_mobileStop(name);
	}else{
		_desktopStop(name);
	}
}





//------------  Set Volume of a Sound  -------------//

function _desktopSetVol (name, volume) {
	buzzObjs[names.indexOf(name)].setVolume(volume*100);
}
function _mobileSetVol (name, volume) {
	soundInfo[names.indexOf(name)].gainNode.gain.value = volume;
}
function GWASetVol (name, volume) {
	if(isMobile == true){
		_mobileSetVol(name, volume);
	}else{
		_desktopSetVol(name, volume);
	}
}





//------------  Set Time of a Sound  -------------//

function _desktopSetTime (name, time) {
	buzzObjs[names.indexOf(name)].play().setTime(time);
}
function _mobileSetTime (name, time) {
	if(soundInfo[names.indexOf(name)].isPlaying == true) {
		soundInfo[names.indexOf(name)].sourceObj.stop(0);
	}
	soundInfo[names.indexOf(name)].isPlaying = true;
    soundInfo[names.indexOf(name)].isPaused = false;
	_mobilePlay(name, time);
}
function GWASetTime (name, time) {
	if(isMobile == true){
		_mobileSetTime(name, time);
	}else{
		_desktopSetTime(name, time);
	}
}





//------------  Pause/Unpause a Sound  -------------//

function _desktopTogglePause (name) {
	buzzObjs[names.indexOf(name)].togglePlay();
}
function _mobileTogglePause (name) {
	if(soundInfo[names.indexOf(name)].isPaused == true) {
		soundInfo[names.indexOf(name)].isPlaying = true;
		soundInfo[names.indexOf(name)].isPaused = false;
		_mobilePlay(name, soundInfo[names.indexOf(name)].pauseTime);
	}else{
        if(soundInfo[names.indexOf(name)].isPlaying == true){
		    soundInfo[names.indexOf(name)].isPaused = true;
		    soundInfo[names.indexOf(name)].isPlaying = false;
			soundInfo[names.indexOf(name)].pauseTime = GWAContext.currentTime - soundInfo[names.indexOf(name)].startTime + soundInfo[names.indexOf(name)].pauseTime;
		    soundInfo[names.indexOf(name)].sourceObj.stop(0);
        }else{
            _mobilePlay(name, 0);
        }
	}
}
function GWATogglePause (name, time) {
	if(isMobile == true){
		_mobileTogglePause (name);
	}else{
		_desktopTogglePause(name);
	}
}





//------------  Utility Functions  -------------//

function unlockMobile() {
    // create empty buffer and play it
    var buffer = GWAContext.createBuffer(1, 1, 22050);
    var source = GWAContext.createBufferSource();
    source.buffer = buffer;
    source.connect(GWAContext.destination);
    source.noteOn(0);

    // by checking the play state after some time, we know if we're really unlocked
    setTimeout(function () {
        if ((source.playbackState === source.PLAYING_STATE || source.playbackState === source.FINISHED_STATE)) {
            unlocked = true;
        }else{
            
        }
    }, 100);
}
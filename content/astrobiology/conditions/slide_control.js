// JavaScript Document

//$(document).ready(function(e) {


	var totalNumSlides = 18;
	var currSlide = 0;

	var video = document.getElementById("video");
	video.volume = 0.6;
	video.pause();
	
	/*video.onpause = video.onplay = function(e) {
		playpause.value = video.paused ? 'Play' : 'Pause';
		}*/
		
	var a =document.getElementById("music");
	a.volume =.2;

	/*function playOrPause() {
			if (video.ended || video.paused) {
			video.play();
			document.getElementById("playpause").value="PAUSE";
			} else {
			video.pause();
			document.getElementById("playpause").value="PLAY";
					}	
		}*/
	
	/*var m = document.getElementById('mutebutton')[0];
	video.onvolumechange = function(e) {
		mutebutton.value = video.muted ? 'Unmute' : 'Mute';
		}*/
		

	function toggleMute() {
		if (video.muted) {
			video.muted = false;
			a.muted = false;
			$("#muteButton").css('background-image','url(images/not_muted.png)');
			} else {
			video.muted = true;
			a.muted = true;
			$("#muteButton").css('background-image','url(images/muted.png)');
		}
	}

	function setVol(level) {
		var vVol = 1;
		var mVol = 1;
		switch(level){
			case 1:
				vVol = 0.2;
				mVol = 0;
				$("#volumeBar1").css("opacity", "0.9");
				$("#volumeBar2").css("opacity", "0.4");
				$("#volumeBar3").css("opacity", "0.4");
				$("#volumeBar4").css("opacity", "0.4");
				$("#volumeBar5").css("opacity", "0.4");
				break;
			case 2:
				vVol = 0.4;
				mVol = 0.2;
				$("#volumeBar1").css("opacity", "0.9");
				$("#volumeBar2").css("opacity", "0.9");
				$("#volumeBar3").css("opacity", "0.4");
				$("#volumeBar4").css("opacity", "0.4");
				$("#volumeBar5").css("opacity", "0.4");
				break;
			case 3:
				vVol = 0.6;
				mVol = 0.4;
				$("#volumeBar1").css("opacity", "0.9");
				$("#volumeBar2").css("opacity", "0.9");
				$("#volumeBar3").css("opacity", "0.9");
				$("#volumeBar4").css("opacity", "0.4");
				$("#volumeBar5").css("opacity", "0.4");
				break;
			case 4:
				vVol = 0.8;
				mVol = 0.6;
				$("#volumeBar1").css("opacity", "0.9");
				$("#volumeBar2").css("opacity", "0.9");
				$("#volumeBar3").css("opacity", "0.9");
				$("#volumeBar4").css("opacity", "0.9");
				$("#volumeBar5").css("opacity", "0.4");
				break;
			case 5:
				vVol = 1;
				mVol = 0.8;
				$("#volumeBar1").css("opacity", "0.9");
				$("#volumeBar2").css("opacity", "0.9");
				$("#volumeBar3").css("opacity", "0.9");
				$("#volumeBar4").css("opacity", "0.9");
				$("#volumeBar5").css("opacity", "0.9");
				break;
			default:
				console.log("unhandled volume level");
				break;
		}

		document.getElementById('video').volume = vVol;
		document.getElementById('music').volume = mVol;
	}
	
	function Rew(){
		if(video.currentTime < 0.1) return;

		if (video.currentTime <= 17.91 && video.currentTime >= 0)
		{ (video.currentTime = 0);
				currSlide = 0;
		}
		else if (video.currentTime <= 35.94 && video.currentTime > 17.91)
		{ (video.currentTime = 0);
				currSlide = 0;
		}
		else if (video.currentTime <= 52.55 && video.currentTime > 35.94)
		{ (video.currentTime = 17.92);
				currSlide = 1;
		}
		else if (video.currentTime <= 67.13 && video.currentTime > 52.55)
		{ (video.currentTime = 35.94);
				currSlide = 2;
		}
		else if (video.currentTime <= 88.42 && video.currentTime > 67.13)
		{ (video.currentTime = 52.56);
				currSlide = 3;
		}
		else if (video.currentTime <= 103.44 && video.currentTime > 88.42)
		{ (video.currentTime = 67.14);
				currSlide = 4;
		}
		else if (video.currentTime <= 137.11 && video.currentTime > 103.44)
		{ (video.currentTime = 88.44);
				currSlide = 5;
		}
		else if (video.currentTime <= 162.09 && video.currentTime > 137.11)
		{ (video.currentTime = 103.45);
				currSlide = 6;
		}
		else if (video.currentTime <= 177.11 && video.currentTime > 162.1)
		{ (video.currentTime = 137.12);
				currSlide = 7;
		}
		else if (video.currentTime <= 200.73 && video.currentTime > 177.11)
		{ (video.currentTime = 162.11);
				currSlide = 8;
		}
		else if (video.currentTime <= 218.22 && video.currentTime > 200.73)
		{ (video.currentTime = 177.12);
				currSlide = 9;
		}
		else if (video.currentTime <= 248.82 && video.currentTime > 218.22)
		{ (video.currentTime = 200.74);
				currSlide = 10;
		}
		else if (video.currentTime <= 266.94 && video.currentTime > 248.82)
		{ (video.currentTime = 218.23);
				currSlide = 11;
		}
		else if (video.currentTime <= 283.76 && video.currentTime > 266.94)
		{ (video.currentTime = 248.83);
				currSlide = 12;
		}
		else if (video.currentTime <= 300.67 && video.currentTime > 283.76)
		{ (video.currentTime = 266.95);
				currSlide = 13;
		}
		else if (video.currentTime <= 318.86 && video.currentTime > 300.67)
		{ (video.currentTime = 283.77);
				currSlide = 14;
		}
		else if (video.currentTime <= 340.51 && video.currentTime > 318.86)
		{ (video.currentTime = 300.68);
				currSlide = 15;
		}
		else if (video.currentTime <= 353.89 && video.currentTime > 340.51)
		{ (video.currentTime = 318.87);
				currSlide = 16;
		}
		else if (video.currentTime <= 400 && video.currentTime > 353.89)
		{ (video.currentTime = 340.52)
				currSlide = 17;
				$("#fwdIcon").css("background-image", "url(images/fwd.png)");
		}
		if(video.paused){
			video.play();
			checkForStop();
		}
	}
	
	
	function Fwd(){
		
		if(currSlide >= totalNumSlides) return;

		if (video.currentTime <= 0.1 && video.currentTime >= 0) { 
			//(video.currentTime = 0.1);
			(a.play());
			$("#rewIcon").css("background-image", "url(images/rew.png)");
		}
		else if (video.currentTime <= 17.91 && video.currentTime > 0.1) { 
			(video.currentTime = 17.92);
			currSlide = 1;
		}
		else if (video.currentTime <= 35.93 && video.currentTime > 17.91) { 
			(video.currentTime = 35.94);
			currSlide=2;
		}
		else if (video.currentTime <= 52.55 && video.currentTime > 35.93) { 
			(video.currentTime = 52.56);
			currSlide = 3;
		}
		else if (video.currentTime <= 67.13 && video.currentTime > 52.55) { 
			(video.currentTime = 67.14);
			currSlide = 4;
		}
		else if (video.currentTime <= 88.42 && video.currentTime > 67.13) { 
			(video.currentTime = 88.43)
			currSlide = 5;
		}
		else if (video.currentTime <= 103.43 && video.currentTime > 88.42) { 
			(video.currentTime = 103.44);
			currSlide = 6;
		}
		else if (video.currentTime <= 137.1 && video.currentTime > 103.43) {	
			(video.currentTime = 137.11);
			currSlide = 7;
		}
		else if (video.currentTime <= 162.09 && video.currentTime > 137.1) { 
			(video.currentTime = 162.1);
			currSlide = 8;
		}
		else if (video.currentTime <= 177.11 && video.currentTime > 162.09) { 
			(video.currentTime = 177.12);
			currSlide = 9;
		}
		else if (video.currentTime <= 200.73 && video.currentTime > 177.1) { 
			(video.currentTime = 200.74);
			currSlide = 10;
		}
		else if (video.currentTime <= 218.21 && video.currentTime > 200.72)
		{ (video.currentTime = 218.22);
			currSlide = 11;
		}
		else if (video.currentTime <= 248.81 && video.currentTime > 218.21)
		{ (video.currentTime = 248.82);
			currSlide = 12;
		}
		else if (video.currentTime <= 266.93 && video.currentTime > 248.81)
		{ (video.currentTime = 266.94);
			currSlide = 13;
		}
		else if (video.currentTime <= 283.75 && video.currentTime > 266.93)
		{ (video.currentTime = 283.76);
			currSlide = 14;
		}
		else if (video.currentTime <= 300.66 && video.currentTime > 283.75)
		{ (video.currentTime = 300.67);
			currSlide = 15;
		}
		else if (video.currentTime <= 318.85 && video.currentTime > 300.66)
		{ (video.currentTime = 318.86);
			currSlide = 16;
		}
		else if (video.currentTime <= 340.5 && video.currentTime > 318.84)
		{ (video.currentTime = 340.51);
			currSlide = 17;
		}
		else if (video.currentTime <= 353.88 && video.currentTime > 340.5)
		{ (video.currentTime = 353.89);
			currSlide = 18;
			$("#fwdIcon").css("background-image", "url(images/no_fwd.png)");
		}
		if(video.paused){
			video.play();
			checkForStop();
		}
	}

	
	function checkForStop() {
		
		switch(currSlide){
		case 0:
			if(video.currentTime > 17.81){
				video.pause();
				video.currentTime = 17.9;
			}
			break;
		case 1:
			if(video.currentTime > 35.83){
				video.pause();
				video.currentTime = 35.92;
			}
			break;
			
		case 2:
			if(video.currentTime > 52.45){
				video.pause();
				video.currentTime = 52.54;
				
			}
			break;
		case 3:
			if(video.currentTime > 67.03){
				video.pause();
				video.currentTime = 67.12;
				
			}
			break;
		case 4:
			if(video.currentTime > 88.32){
				video.pause();
				video.currentTime = 88.41;
			}
			break;
		case 5:
			if(video.currentTime > 103.33){
				video.pause();
				video.currentTime = 103.42;
			}
			break;
		case 6:
			if(video.currentTime > 137.0){
				video.pause();
				video.currentTime = 137.09;
			}
			break;
		case 7:
			if(video.currentTime > 161.98){
				video.pause();
				video.currentTime = 162.07;
			}
			break;
		case 8:
			if(video.currentTime > 177.0){
				video.pause();
				video.currentTime = 177.09;
			}
			break;
		case 9:
			if(video.currentTime > 200.63){
				video.pause();
				video.currentTime = 200.72;
			}
			break;
		case 10:
			if(video.currentTime > 218.11){
				video.pause();
				video.currentTime = 218.2;
			}
			break;
		case 11:
			if(video.currentTime > 248.71){
				video.pause();
				video.currentTime = 248.8;
			}
			break;
		case 12:
			if(video.currentTime > 266.83){
				video.pause();
				video.currentTime = 266.92;
			}
			break;
		case 13:
			if(video.currentTime > 283.64){
				video.pause();
				video.currentTime = 283.73;
			}
			break;
		case 14:
			if(video.currentTime > 300.56){
				video.pause();
				video.currentTime = 300.65;
			}
			break;
		case 15:
			if(video.currentTime > 318.75){
				video.pause();
				video.currentTime = 318.84;
			}
			break;
		case 16:
			if(video.currentTime > 340.4){
				video.pause();
				video.currentTime = 340.49;
			}
			break;
		case 17:
			if(video.currentTime > 353.78){
				video.pause();
				video.currentTime = 353.87;
			}
			break;
		case 18:
			if(video.currentTime > 369.4){
				video.pause();
				video.currentTime = 369.49;
			}
			break;
		default:
			//nothing
			break;
		}
		
		if(!video.paused) {
			setTimeout(checkForStop, 70);
		}
	}

//});
var diagramAnimation = (function () {
	"use strict";

	var ArmPosition = {
		rotation: 0,
		extension: 0
	}

	var ShortTermSlot = {
		rotation: 0,
		full: false,
		elmnt: null
	}

	var SMBall = {
		elmnt: null,
		paused: false,
		colorClass: "cls-22"
	}

	var Sequences = {
		Type1: function() {
			CreateType1Sequence();
		},
		Type2: function() {
			CreateType2Sequence();
		}
	}

	$(document).ready(function () {
		$('#cb').on({
			'show.uk.modal': function(){
				pauseTimeline();
			},

			'hide.uk.modal': function(){
				unpauseTimeline();
			}
		});

		$('#SM_Container').click(function(){ SectionClick(1) });
		$('#STM_Container').click(function(){ SectionClick(2) });
		$('#WM_Container').click(function(){ SectionClick(3) });
		$('#LTM_Bottom').click(function(){ SectionClick(4) });
		$('#Episodic_Hit').click(function(){ SectionClick(5) });
		$('#Semantic_Hit').click(function(){ SectionClick(6) });
		$('#Procedural_Hit').click(function(){ SectionClick(7) });

		AnimSetup();
		CreateNewSequence();
	});

	function SectionClick (index) {
		memswitch(index);
	}


	var tl = new TimelineMax({autoRemoveChildren:true});


	function AnimSetup () {
		for(var i = 0; i<SMBalls.length; i++) {
			SMBalls[i].elmnt = $('#SM' + (i + 1).toString());
			SMBalls[i].colorClass = SMBalls[i].elmnt.attr("class");
			SensoryLoopSegement(SMBalls[i], ballInitOffsets[i]);
		}

		for(var i = 0; i<shortTermSlots.length; i++) {
			shortTermSlots[i].elmnt = $('#STM' + (i + 1).toString());
			SlotStatus(shortTermSlots[i], false);
		}

		TweenMax.set($('#Arm'), {x:-130});
		TweenMax.set($('#Arm_Shadow'), {x:-130});
		TweenMax.set($('#Attention_Clip'), {x:130});
		TweenMax.set($('#Pincer1'), {rotation:"-30_ccw", svgOrigin:"390.4 336.082"});
		TweenMax.set($('#Pincer2'), {rotation:"30_cw", svgOrigin:"390.4 371.689"});
		TweenMax.set($('#Pincer1_Shadow'), {rotation:"-30_ccw", svgOrigin:"387.4 340.082"});
		TweenMax.set($('#Pincer2_Shadow'), {rotation:"30_cw", svgOrigin:"387.4 375.689"});
		TweenMax.set($('#WM_Ball'), {opacity:0});
	}

	function CreateNewSequence () {
		var randVal = Math.floor((Math.random() * 2));
		switch (randVal) {
			case 0:
				Sequences.Type1();
				break;
			case 1:
				Sequences.Type1();
				break;
			default:
				console.log("unhandle sequence");
		}
	}

	function CreateType1Sequence () {
		labIterator = 0;
		clusterIterator = 0;
		var randVal = Math.floor((Math.random() * 5)) + 1;
		for(var i = 0; i<randVal; i++) {
			GrabFromSensory(tl);
			tl.add(function(){ PositionShortTermToOpen() });
			MoveToShortTerm(tl);
		}
		GrabFromSensory(tl);
		tl.add(function(){ $('#cluster_group').clone().attr({id:"CG_Clone"}).insertAfter($("#Arm_Bolt")) });
		MoveToWorking(tl, "+=0");
		for(var i = 0; i<randVal; i++) {
			tl.add(function(){ PositionShortTermToFull() });
			GrabFromShortTerm(tl, "+=0.6");
			MoveToWorking(tl, "-=0.1");
		}
		ReturnToDefault(tl);
		tl.add(function(){ TweenMax.to($('#CG_Clone'), 0.15, {scaleX:1.2, scaleY:0.75, svgOrigin:"130 360", yoyo:true, repeat:7}) });
		RotateGears(tl);
		tl.add(function(){ TweenMax.to($('#CG_Clone'), 0.3, {x:166, ease: Power4.easeOut}) }, "-=0.75");
		tl.add(function(){ $("#CG_Clone").insertAfter($("#WM_Ball")).attr("transform","matrix(1,0,0,1,295,0)"); TweenMax.set($("#CG_Clone"), {x:295, y:0}) }, "+=0.35");
		ClosePincer(tl, "-=1", false);
		if(Math.random() >= 0.5) {
			MoveToEpisodic(tl);
			tl.add(function(){ TweenMax.fromTo($('#CG_Clone'), 0.5, {x:295, y:0}, {x:500, y:-40, ease: Power4.easeIn}) }, "-=0.4");
		}else{
			MoveToSemantic(tl);
			tl.add(function(){ TweenMax.fromTo($('#CG_Clone'), 0.5, {x:295, y:0}, {x:400, y:90, ease: Power4.easeIn}) }, "-=0.4");
		}
		tl.add(function(){ $('#CG_Clone').remove() }, "+=0.45");
		ReturnToDefault(tl);
		tl.add(function(){ CreateNewSequence() });
	}

	function CreateType2Sequence () {
		labIterator = 0;
	}

	function GrabFromSensory (tl) {
		var randVal = Math.floor((Math.random() * 5));
		var cc = SMBalls[randVal].colorClass;
		var cc2 = randVal.toString();
		TLBallPause(tl, SMBalls[randVal], true);
		ExtendArm (tl, "-100", "+=0");
		RotateArm(tl, armPositions[randVal].rotation.toString() + "_ccw", "-=0.2");
		OpenPincer(tl, "-=0.2", true);
		ExtendArm (tl, armPositions[randVal].extension.toString(), "-=0.2");
		tl.add(function(){ $('#WM_Ball').attr("class", cc) });
		ClosePincer(tl, "+=0.1");
		TLBallPause(tl, SMBalls[randVal], false);
	}

	function GrabFromShortTerm (tl, offset) {
		ExtendArm (tl, "-100", "+=0");
		RotateArm(tl, shortTermAP.rotation.toString() + "_short", "-=0.4");
		OpenPincer(tl, "-=0.2", true);
		ExtendArm (tl, shortTermAP.extension.toString(), "-=0.2");
		tl.add(function(){ $('#WM_Ball').attr("class", currShortTermSlot.elmnt.attr("class")) });
		ClosePincer(tl, "+=0.1");
		tl.add(function(){ SlotStatus(currShortTermSlot, false) });
	}

	function MoveToShortTerm (tl) {
		ExtendArm (tl, "-100", "+=0");
		RotateArm(tl, shortTermAP.rotation.toString() + "_short", "-=0.2");
		ExtendArm (tl, shortTermAP.extension.toString(), "-=0.2");
		OpenPincer(tl, "+=0.1", true);
		tl.add(function(){ currShortTermSlot.elmnt.attr("class", $('#WM_Ball').attr("class")); SlotStatus(currShortTermSlot, true) }, "-=0.3");
	}

	function MoveToWorking (tl, offset) {
		ExtendArm (tl, "-190", offset);
		OpenPincer(tl, "-=0.13", false);
		tl.add(function(){ MakeClusterBall() }, "-=0.25");
	}

	function RotateArm (tl, rotVal, offset) {
		// maybe add label here for synching
		tl.add(TweenMax.to($('#Attention_Arm'), 0.75, {rotation:rotVal, svgOrigin:"141.511 354.175", ease: Power2.easeInOut}), offset);
		tl.add(TweenMax.to($('#Attention_Shadow'), 0.75, {rotation:rotVal, svgOrigin:"138.511 358.175", ease: Power2.easeInOut}), "-=0.75");
	}

	function ExtendArm (tl, extVal, offset) {
		tl.addLabel("extend" + (++labIterator).toString(), offset);
		tl.add(TweenMax.to($('#Arm'), 0.5, {x:extVal, ease: Power2.easeInOut}), "extend" + (labIterator).toString());
		tl.add(TweenMax.to($('#Arm_Shadow'), 0.5, {x:extVal, ease: Power2.easeInOut}), "extend" + (labIterator).toString());
		tl.add(TweenMax.to($('#Attention_Clip'), 0.5, {x:-extVal, ease: Power2.easeInOut}), "extend" + (labIterator).toString());
	}

	function OpenPincer (tl, offset, ballFade) {
		tl.addLabel("pincerOpen" + (++labIterator).toString(), offset);
		tl.add(TweenMax.to($('#Pincer1'), 0.25, {rotation:"-30_ccw", svgOrigin:"390.4 336.082", ease: Elastic.easeOut.config(1, 0.4)}), "pincerOpen" + (labIterator).toString());
		tl.add(TweenMax.to($('#Pincer2'), 0.25, {rotation:"30_cw", svgOrigin:"390.4 371.689", ease: Elastic.easeOut.config(1, 0.4)}), "pincerOpen" + (labIterator).toString());
		tl.add(TweenMax.to($('#Pincer1_Shadow'), 0.25, {rotation:"-30_ccw", svgOrigin:"387.4 340.082", ease: Elastic.easeOut.config(1, 0.4)}), "pincerOpen" + (labIterator).toString());
		tl.add(TweenMax.to($('#Pincer2_Shadow'), 0.25, {rotation:"30_cw", svgOrigin:"387.4 375.689", ease: Elastic.easeOut.config(1, 0.4)}), "pincerOpen" + (labIterator).toString());
		tl.add(TweenMax.to($('#WM_Ball'), (ballFade)? 0.25 : 0, {opacity:0}), "pincerOpen" + (labIterator).toString());
	}

	function ClosePincer (tl, offset, showBall) {
		showBall = typeof showBall !== 'undefined' ? showBall : true;
		tl.addLabel("pincerClose" + (++labIterator).toString(), offset);
		tl.add(TweenMax.to($('#Pincer1'), 0.25, {rotation:"0_cw", svgOrigin:"390.4 336.082", ease: Elastic.easeOut.config(1, 0.4)}), "pincerClose" + (labIterator).toString());
		tl.add(TweenMax.to($('#Pincer2'), 0.25, {rotation:"0_ccw", svgOrigin:"390.4 371.689", ease: Elastic.easeOut.config(1, 0.4)}), "pincerClose" + (labIterator).toString());
		tl.add(TweenMax.to($('#Pincer1_Shadow'), 0.25, {rotation:"0_cw", svgOrigin:"387.4 340.082", ease: Elastic.easeOut.config(1, 0.4)}), "pincerClose" + (labIterator).toString());
		tl.add(TweenMax.to($('#Pincer2_Shadow'), 0.25, {rotation:"0_ccw", svgOrigin:"387.4 375.689", ease: Elastic.easeOut.config(1, 0.4)}), "pincerClose" + (labIterator).toString());
		if(!showBall) return;
		tl.add(TweenMax.to($('#WM_Ball'), 0.25, {opacity:1}), "pincerClose" + (labIterator).toString());
	}

	function SlotStatus (slot, isFull) {
		slot.full = isFull;
		TweenMax.set(slot.elmnt, {opacity: slot.full ? 1 : 0});
	}

	function PositionShortTermToOpen () {
		for(var i = 0; i<6; i++) {
			if(!shortTermSlots[i].full) {
				currShortTermSlot = shortTermSlots[i];
				break;
			}
		}
		TweenMax.to($('#STM'), 0.8, {rotation:currShortTermSlot.rotation.toString() + "_short", svgOrigin:"486.388 355.154", ease: Elastic.easeOut.config(1, 0.4)});
		TweenMax.to($('#STM_Shadow'), 0.8, {rotation:currShortTermSlot.rotation.toString() + "_short", svgOrigin:"484.388 358.154", ease: Elastic.easeOut.config(1, 0.4)});
	}

	function PositionShortTermToFull () {
		for(var i = 0; i<6; i++) {
			if(shortTermSlots[i].full) {
				currShortTermSlot = shortTermSlots[i];
				break;
			}
		}
		TweenMax.to($('#STM'), 0.8, {rotation:currShortTermSlot.rotation.toString() + "_short", svgOrigin:"486.388 355.154", ease: Elastic.easeOut.config(1, 0.4)});
		TweenMax.to($('#STM_Shadow'), 0.8, {rotation:currShortTermSlot.rotation.toString() + "_short", svgOrigin:"484.388 358.154", ease: Elastic.easeOut.config(1, 0.4)});
	}

	function ReturnToDefault (tl) {
		ExtendArm (tl, "-130", "+=0");
		RotateArm(tl, shortTermAP.rotation, "+=0");
		OpenPincer(tl, "+=0", false);
	}

	function TLBallPause (tl, ball, wantPause) {
		tl.add(function(){ BallPause(ball, wantPause) });
	}

	function BallPause (ball, wantPause) {
		if (wantPause){
			ball.paused = true;
			// TweenMax.killTweensOf(ball.elmnt);
		}else{
			ball.paused = false;
			ResetSensoryLoop(ball);
		}
	}

	function SensoryLoopSegement (ball, offset) {
		if(ball.paused) return;
		offset = typeof offset !== 'undefined' ? offset : 0.5;
		TweenMax.to(ball.elmnt, 1.5, {opacity:0, delay:1 + offset});
		TweenMax.set(ball.elmnt, {y:-60, delay:2.5 + offset});
		TweenMax.to(ball.elmnt, 0.3, {opacity:1, delay:2.5 + offset});
		TweenMax.to(ball.elmnt, 0.75, {y:0, ease: Bounce.easeOut, delay:2.51 + offset, onComplete: function(){ SensoryLoopSegement(ball) } });
	}

	function ResetSensoryLoop (ball) {
		TweenMax.killTweensOf(ball.elmnt);
		TweenMax.set(ball.elmnt, {y:-60, opacity:0});
		TweenMax.to(ball.elmnt, 0.3, {opacity:1, delay:0.5});
		TweenMax.to(ball.elmnt, 0.75, {y:0, ease: Bounce.easeOut, delay:0.5, onComplete: function(){ SensoryLoopSegement(ball) } });
	}

	function MakeClusterBall () {
		var clusterID = "cluster_ball"+(clusterIterator++).toString();
		$('#WM_Ball').clone().attr({id:clusterID, style:"opacity: 1"}).prependTo("#CG_Clone");
		TweenMax.set($("#"+clusterID), {x:-175, opacity:1});
		var newClass;
		switch ($("#"+clusterID).attr("class")) {
			case "cls-22":
				newClass = "cls-4";
				break;
			case "cls-21":
				newClass = "cls-6";
				break;
			case "cls-14":
				newClass = "cls-7";
				break;
			case "cls-42":
				newClass = "cls-8";
				break;
			case "cls-43":
				newClass = "cls-5";
				break;
			default:
				console.log("unhandled class switch");
		}
		TweenMax.to($("#"+clusterID), 1, {className: newClass, x:clusterLocations[clusterIterator-1][0], y:clusterLocations[clusterIterator-1][1], ease: Power4.easeOut});
	}

	function RotateGears(tl) {
		tl.addLabel("gearSpin" + (++labIterator).toString());
		tl.add(TweenMax.to($('#Gear1'), 1, {rotation:(360).toString() + "_cw", svgOrigin:"141.511 354.146", yoyo:true, repeat:1}), "gearSpin" + (labIterator).toString());
		tl.add(TweenMax.to($('#Gear1_Shadow'), 1, {rotation:(360).toString() + "_cw", svgOrigin:"138.508 358.15", yoyo:true, repeat:1}), "gearSpin" + (labIterator).toString());
		tl.add(TweenMax.to($('#Gear2'), 1, {rotation:(720).toString() + "_ccw", svgOrigin:"200.622 306.758", yoyo:true, repeat:1}), "gearSpin" + (labIterator).toString());
		tl.add(TweenMax.to($('#Gear2_Shadow'), 1, {rotation:(720).toString() + "_ccw", svgOrigin:"197.62 310.761", yoyo:true, repeat:1}), "gearSpin" + (labIterator).toString());
		tl.add(TweenMax.to($('#Gear3'), 1, {rotation:(540).toString() + "_ccw", svgOrigin:"91.926 320.005", yoyo:true, repeat:1}), "gearSpin" + (labIterator).toString());
		tl.add(TweenMax.to($('#Gear3_Shadow'), 1, {rotation:(540).toString() + "_ccw", svgOrigin:"88.923 324.008", yoyo:true, repeat:1}), "gearSpin" + (labIterator).toString());
	}

	function MoveToEpisodic(tl) {
		ExtendArm (tl, "-100", "+=0");
		RotateArm(tl, episodicAP.rotation.toString() + "_short", "-=0.2");
		ExtendArm (tl, episodicAP.extension.toString(), "-=0.2");
		OpenPincer(tl, "+=0.1", false);
		tl.add(function(){  }, "+=0");
	}

	function MoveToSemantic(tl) {
		ExtendArm (tl, "-100", "+=0");
		RotateArm(tl, semanticAP.rotation.toString() + "_short", "-=0.2");
		ExtendArm (tl, semanticAP.extension.toString(), "-=0.2");
		OpenPincer(tl, "+=0.1", false);
		tl.add(function(){  }, "+=0");
	}


	var fingerAP = Object.create(ArmPosition);
	fingerAP.rotation = 250.42;
	fingerAP.extension = -58;

	var mouthAP = Object.create(ArmPosition);
	mouthAP.rotation = 283;
	mouthAP.extension = -66;

	var noseAP = Object.create(ArmPosition);
	noseAP.rotation = 309.25;
	noseAP.extension = -7.5;

	var eyeAP = Object.create(ArmPosition);
	eyeAP.rotation = 324.57;
	eyeAP.extension = 87;

	var earAP = Object.create(ArmPosition);
	earAP.rotation = 333.37;
	earAP.extension = 197;

	var shortTermAP = Object.create(ArmPosition);
	shortTermAP.rotation = 0;
	shortTermAP.extension = 0;

	var episodicAP = Object.create(ArmPosition);
	episodicAP.rotation = 102;
	episodicAP.extension = -60;

	var semanticAP = Object.create(ArmPosition);
	semanticAP.rotation = 50;
	semanticAP.extension = 30;

	var armPositions = [
		fingerAP,
		mouthAP,
		noseAP,
		eyeAP,
		earAP,
		shortTermAP,
		episodicAP,
		semanticAP
	];


	var slot1 = Object.create(ShortTermSlot);
	var slot2 = Object.create(ShortTermSlot);
	slot2.rotation = 300;
	var slot3 = Object.create(ShortTermSlot);
	slot3.rotation = 240;
	var slot4 = Object.create(ShortTermSlot);
	slot4.rotation = 180;
	var slot5 = Object.create(ShortTermSlot);
	slot5.rotation = 120;
	var slot6 = Object.create(ShortTermSlot);
	slot6.rotation = 60;

	var shortTermSlots = [
		slot1,
		slot2,
		slot3,
		slot4,
		slot5,
		slot6
	];

	var SMBalls = [
		Object.create(SMBall),
		Object.create(SMBall),
		Object.create(SMBall),
		Object.create(SMBall),
		Object.create(SMBall)
	];

	var ballInitOffsets = [2.8, 0.8, 0, 2.1, 1.1];
	var clusterLocations = [[-295,0], [-300,-9.5], [-299,10.5], [-288,-7], [-304,1], [-288,4.5]];

	var currArmPosition = shortTermAP;
	var currShortTermSlot = slot1;
	var labIterator = 0;
	var clusterIterator = 0;

	var rootTimeline;


	function pauseTimeline () {
		rootTimeline = TimelineLite.exportRoot();
		rootTimeline.pause();
	};
	function unpauseTimeline () {
		rootTimeline.resume();
	};

	var returnObj = {};
	returnObj.pauseAnimation = pauseTimeline;
	returnObj.unpauseAnimation = unpauseTimeline;

	return returnObj;

})();

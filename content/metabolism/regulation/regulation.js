(function () {

	// base slide objects //

	var SlideObject =  {
		concentrationActive: true,
		insulinLevel: 0.8,
		glucagonLevel: 0.2,
		modeActive: true,
		mode: 0.2,
		digestionActive: false,

		muscleActive: true,
		muscleStoreActive: false,
		muscleStoreLevel: 0,
		muscleStoreDelay: 0,
		muscleBurnActive: false,
		muscleBuildActive: false,

		liverActive: true,
		liverConvertActive: false,
		liverStoreActive: false,
		liverStoreLevel: 0,
		liverStoreDelay: 0,
		liverBurnActive: false,
		liverBuildActive: false,

		brainActive: true,
		brainBurnActive: false,
		brainBuildActive: false,

		fatActive: true,
		fatConvertActive: false,
		fatStoreActive: false,
		fatStoreLevel: 0,
		fatStoreDelay: 0,
		fatBurnActive: false,
		fatBuildActive: false,

		slideText: "",
		lineAnimDuration: 1.6,
		lineAnimDelay: 0,
		customAnimations: undefined,
	}

	var SlideObjectAllActive =  {
		concentrationActive: true,
		insulinLevel: 0.8,
		glucagonLevel: 0.2,
		modeActive: true,
		mode: 0.2,
		digestionActive: true,

		muscleActive: true,
		muscleStoreActive: true,
		muscleStoreLevel: 0,
		muscleBurnActive: true,
		muscleBuildActive: true,

		liverActive: true,
		liverConvertActive: true,
		liverStoreActive: true,
		liverStoreLevel: 0,
		liverBurnActive: true,
		liverBuildActive: true,

		brainActive: true,
		brainBurnActive: true,
		brainBuildActive: true,

		fatActive: true,
		fatConvertActive: true,
		fatStoreActive: true,
		fatStoreLevel: 0,
		fatBurnActive: true,
		fatBuildActive: true,

		slideText: "",
		lineAnimDuration: 1.6,
		lineAnimDelay: 0,
		customAnimations: undefined,
	}


	var viewModel;

	$(document).ready(function () {
		ko.subscribable.fn.subscribeChanged = function (callback) {
			var savedValue = this.peek();
			return this.subscribe(function (latestValue) {
				var oldValue = savedValue;
				savedValue = latestValue;
				callback(latestValue, oldValue);
			});
		};

		// knockout viewmodel //

		function vm() {
			var self = this;

			self._section = ko.observable("intro");
			self.section = ko.pureComputed({
				read: function() { return self._section() },
				write: function(value) { self._section(value); self.slide(1); },
				owner: self
			});
			self.slide = ko.observable(1);

			self.sectionSlides = ko.computed(function () {
				return allSections[self.section()];
			});
			self.currentSlideObject = ko.computed(function () {
				return self.sectionSlides()[self.slide()-1];
			}, self).extend({ rateLimit: 0 });

			self.concentrationActive = ko.computed(function(){ return self.currentSlideObject().concentrationActive });
			self.insulinLevel = ko.computed(function(){ return self.currentSlideObject().insulinLevel });
			self.glucagonLevel = ko.computed(function(){ return self.currentSlideObject().glucagonLevel });
			self.modeActive = ko.computed(function(){ return self.currentSlideObject().modeActive });
			self.mode = ko.computed(function(){ return self.currentSlideObject().mode });
			self.digestionActive = ko.computed(function(){ return self.currentSlideObject().digestionActive });

			self.muscleActive = ko.computed(function(){ return self.currentSlideObject().muscleActive });
			self.muscleStoreActive = ko.computed(function(){ return self.currentSlideObject().muscleStoreActive });
			self.muscleStoreLevel = ko.computed(function(){ return self.currentSlideObject().muscleStoreLevel });
			self.muscleBurnActive = ko.computed(function(){ return self.currentSlideObject().muscleBurnActive });
			self.muscleBuildActive = ko.computed(function(){ return self.currentSlideObject().muscleBuildActive });

			self.liverActive = ko.computed(function(){ return self.currentSlideObject().liverActive });
			self.liverConvertActive = ko.computed(function(){ return self.currentSlideObject().liverConvertActive });
			self.liverStoreActive = ko.computed(function(){ return self.currentSlideObject().liverStoreActive });
			self.liverStoreLevel = ko.computed(function(){ return self.currentSlideObject().liverStoreLevel });
			self.liverBurnActive = ko.computed(function(){ return self.currentSlideObject().liverBurnActive });
			self.liverBuildActive = ko.computed(function(){ return self.currentSlideObject().liverBuildActive });

			self.brainActive = ko.computed(function(){ return self.currentSlideObject().brainActive });
			self.brainBurnActive = ko.computed(function(){ return self.currentSlideObject().brainBurnActive });
			self.brainBuildActive = ko.computed(function(){ return self.currentSlideObject().brainBuildActive });

			self.fatActive = ko.computed(function(){ return self.currentSlideObject().fatActive });
			self.fatConvertActive = ko.computed(function(){ return self.currentSlideObject().fatConvertActive });
			self.fatStoreActive = ko.computed(function(){ return self.currentSlideObject().fatStoreActive });
			self.fatStoreLevel = ko.computed(function(){ return self.currentSlideObject().fatStoreLevel });
			self.fatBurnActive = ko.computed(function(){ return self.currentSlideObject().fatBurnActive });
			self.fatBuildActive = ko.computed(function(){ return self.currentSlideObject().fatBuildActive });


			self.slideText = ko.computed(function(){ return self.currentSlideObject().slideText });

			self.currentLines = ko.computed(function(){ return  $("#" + self.section() + "Lines .slide" + self.slide()); });
			// self.currentArrowheads = ko.computed(function(){ return $("#" + self.section() + self.slide() + " .arrowhead").toArray(); });


			self.nextDisabled = ko.computed(function(){
				if(self.section() == 'fed' || self.section() == 'post'){
					return false;
				}else{
					return self.slide() >= self.sectionSlides().length;
				}
			});
			self.prevDisabled = ko.computed(function(){
				if(self.section() == 'post' || self.section() == 'fast'){
					return false;
				}else{
					return self.slide() <= 1;
				}
			});
			self.nextSlide = function () {
				if(self.section.peek() == 'fed' || self.section.peek() == 'post'){
					if(self.slide.peek() >= self.sectionSlides.peek().length){
						// self.slide(1);
						self.section((self.section.peek() == 'fed') ? 'post' : 'fast');
					}else{
						self.slide(self.slide.peek()+1);
					}
				}else{
					self.slide(self.slide.peek()+1);
				}
			}
			self.prevSlide = function () {
				if(self.section.peek() == 'post' || self.section.peek() == 'fast'){
					if(self.slide.peek() <= 1){
						self.section((self.section.peek() == 'post') ? 'fed' : 'post');
						self.slide((self.section.peek() == 'post') ? allSections.post.length : allSections.fed.length);
					}else{
						self.slide(self.slide.peek()-1);
					}
				}else{
					self.slide(self.slide.peek()-1);
				}
			}
		}

		viewModel = new vm();
		ko.applyBindings(viewModel);



		// Line Animations //
		viewModel.currentLines.subscribe(function(newValue) {
			TweenMax.killTweensOf(newValue);

			var currArrowheads = $("#" + viewModel.section.peek() + viewModel.slide.peek() + " .arrowhead").toArray();

			for(var i = 0; i<newValue.length; i++){
				moveArrowheadToLength(newValue[i], 0, currArrowheads[i]);
				TweenMax.fromTo(newValue[i], viewModel.currentSlideObject().lineAnimDuration, {drawSVG:"0%"}, {drawSVG:"100%", delay:viewModel.currentSlideObject.peek().lineAnimDelay, onUpdate: updateArrowhead, onUpdateParams:[newValue[i], currArrowheads[i]]});
			}
		});

		function setArrowheadsToEnd () {
			var lineSets = $('#fedLines > g').toArray();
			lineSets = lineSets.concat($('#postLines > g').toArray());
			lineSets = lineSets.concat($('#fastLines > g').toArray());
			lineSets = lineSets.concat($('#starveLines > g').toArray());
			lineSets = lineSets.concat($('#aerobicLines > g').toArray());
			lineSets = lineSets.concat($('#anaerobicLines > g').toArray());
			lineSets = lineSets.concat($('#lowcarbLines > g').toArray());

			var allLines = $(lineSets[0]).find('path').toArray();
			for(var i = 1; i<lineSets.length; i++){
				allLines = allLines.concat($(lineSets[i]).find('path').toArray());
			}

			var allArrows = $(lineSets[0]).find('.arrowhead').toArray();
			for(var i = 1; i<lineSets.length; i++){
				allArrows = allArrows.concat($(lineSets[i]).find('.arrowhead').toArray());
			}

			for(i = 0; i<allLines.length; i++){
				moveArrowheadToLength(allLines[i], allLines[i].getTotalLength(), allArrows[i]);
			}
		}
		function moveArrowheadToLength(path, length, arrowhead) {
			var movePoint = path.getPointAtLength(length);
			var angleRefPoint = path.getPointAtLength(length-1);
			var angleString = angleInDeg(movePoint, angleRefPoint).toString();
			if(arrowhead.hasAttribute('data-targetscale')){
				arrowhead.setAttribute('data-targetscale', arrowScale[path.getAttribute("stroke-width")]);
			}
			arrowhead.setAttribute("transform", "translate(" + movePoint.x + "," + movePoint.y + ")" + " rotate(" + angleString + ")" + " scale(" + arrowScale[path.getAttribute("stroke-width")] + ")");
		}
		// old function that accepts a tween instead of the referenced line element
		// function updateArrowhead (tween, arrowhead) {
		// 	var len = tween.target.getTotalLength();
		// 	var currT = parseFloat(tween.target.style["stroke-dashoffset"]).toFixed(2);
		// 	var currPoint = tween.target.getPointAtLength(len-currT);
		// 	var angleRefPoint = tween.target.getPointAtLength(len-currT-1);
		// 	var angleString = angleInDeg(currPoint, angleRefPoint).toString();
		// 	if(arrowhead.hasAttribute('data-targetscale')){
		// 		arrowhead.setAttribute("transform", "translate(" + currPoint.x + "," + currPoint.y + ")" + " rotate(" + angleString + ")" + " scale(" + arrowScale.getAttribute('data-targetscale') + ")");
		// 	}else{
		// 		arrowhead.setAttribute("transform", "translate(" + currPoint.x + "," + currPoint.y + ")" + " rotate(" + angleString + ")" + " scale(" + arrowScale[tween.target.getAttribute("stroke-width")] + ")");
		// 	}
		// }

		setArrowheadsToEnd();


		// Insulin and Glucagon Level Animations //
		viewModel.insulinLevel.subscribe(function(newValue) {
			TweenMax.killTweensOf($('#insulinLevel'));
			TweenMax.to($('#insulinLevel'), 0.4, {drawSVG:(100 * newValue).toString() + "%"});
		});

		viewModel.glucagonLevel.subscribe(function(newValue) {
			TweenMax.killTweensOf($('#glucagonLevel'));
			TweenMax.to($('#glucagonLevel'), 0.4, {drawSVG:(100 * newValue).toString() + "%"});
		});

		TweenMax.to($('#insulinLevel'), 0, {drawSVG:(100 * viewModel.insulinLevel()).toString() + "%"});
		TweenMax.to($('#glucagonLevel'), 0, {drawSVG:(100 * viewModel.glucagonLevel()).toString() + "%"});


		// Store Tank Animation //
		viewModel.liverStoreLevel.extend({ notify:'always' });
		viewModel.muscleStoreLevel.extend({ notify:'always' });
		viewModel.fatStoreLevel.extend({ notify:'always' });

		viewModel.liverStoreLevel.subscribeChanged(function(newValue, oldValue){
			if(viewModel.slide.peek() != 1){
				if(allSections[viewModel.section.peek()][viewModel.slide.peek()-2].liverStoreLevel != newValue){
					oldValue = allSections[viewModel.section.peek()][viewModel.slide.peek()-2].liverStoreLevel;
				}
			}
			if(oldValue === newValue){ return }
			TweenMax.killTweensOf($('#liverStoreCover'));
			TweenMax.fromTo($('#liverStoreCover'), 0.8, {y:-25.1*oldValue}, {y:-25.1*newValue, delay: viewModel.currentSlideObject.peek().liverStoreDelay});
		});
		viewModel.muscleStoreLevel.subscribeChanged(function(newValue, oldValue){
			if(viewModel.slide.peek() != 1){
				if(allSections[viewModel.section.peek()][viewModel.slide.peek()-2].muscleStoreLevel != newValue){
					oldValue = allSections[viewModel.section.peek()][viewModel.slide.peek()-2].muscleStoreLevel;
				}
			}
			if(oldValue === newValue){ return }
			TweenMax.killTweensOf($('#muscleStoreCover'));
			TweenMax.fromTo($('#muscleStoreCover'), 0.8, {y:-25.1*oldValue}, {y:-25.1*newValue, delay: viewModel.currentSlideObject.peek().muscleStoreDelay});
		});
		viewModel.fatStoreLevel.subscribeChanged(function(newValue, oldValue){
			if(viewModel.slide.peek() != 1){
				if(allSections[viewModel.section.peek()][viewModel.slide.peek()-2].fatStoreLevel != newValue){
					oldValue = allSections[viewModel.section.peek()][viewModel.slide.peek()-2].fatStoreLevel;
				}
			}
			if(oldValue === newValue){ return }
			TweenMax.killTweensOf($('#fatStoreCover'));
			TweenMax.fromTo($('#fatStoreCover'), 0.8, {y:-25.1*oldValue}, {y:-25.1*newValue, delay: viewModel.currentSlideObject.peek().fatStoreDelay});
		});


		// Burn Icon Animations //
		var muscleBurnAnimation = TweenMax.to($('#muscleBurnIcon'), 0.5, {y:-16.445, repeat:-1, ease:Linear.easeNone});
		var liverBurnAnimation = TweenMax.to($('#liverBurnIcon'), 0.5, {y:-16.445, repeat:-1, ease:Linear.easeNone});
		var brainBurnAnimation = TweenMax.to($('#brainBurnIcon'), 0.5, {y:-16.445, repeat:-1, ease:Linear.easeNone});
		var fatBurnAnimation = TweenMax.to($('#fatBurnIcon'), 0.5, {y:-16.445, repeat:-1, ease:Linear.easeNone});

		viewModel.muscleBurnActive.subscribe(function(newValue) {
			(newValue) ? muscleBurnAnimation.play() : muscleBurnAnimation.pause();
		});
		viewModel.liverBurnActive.subscribe(function(newValue) {
			(newValue) ? liverBurnAnimation.play() : liverBurnAnimation.pause();
		});
		viewModel.brainBurnActive.subscribe(function(newValue) {
			(newValue) ? brainBurnAnimation.play() : brainBurnAnimation.pause();
		});
		viewModel.fatBurnActive.subscribe(function(newValue) {
			(newValue) ? fatBurnAnimation.play() : fatBurnAnimation.pause();
		});


		// Execute Custom Animations //
		viewModel.currentSlideObject.subscribe(function(newValue) {
			if(newValue.customAnimations !== undefined) {
				newValue.customAnimations();
			}
		});

		viewModel.section('title');
	});

	var arrowScale = {
		0: 0,
		6: 0.4,
		8: 0.463,
		10: 0.526,
		13: 0.621,
		16: 0.716,
		18: 0.779,
		20: 0.842,
		25: 1.1
	}

	// angle between two points (in radians) //
	function angleInRad (p1,p2) {
		return Math.atan2(p2.y - p1.y, p2.x - p1.x);
	}
	// angle between two points (in degrees) //
	function angleInDeg (p1,p2) {
		return Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
	}

	// animate line width and arrowhead //
	function animateLineWidth (line, arrowhead, linewidth, isAnimated, duration, delay) {
		// default for optional parameters //
		isAnimated = isAnimated !== false;
		duration = duration || 0.6;
		delay = delay || 0;


		TweenMax.killTweensOf(arrowhead);
		var transitionStyle;
		if(isAnimated){
			TweenMax.to(arrowhead, duration, {attr:{'data-targetscale':arrowScale[linewidth]}, delay: delay, onUpdate: updateArrowhead, onUpdateParams:[line, arrowhead]});
			transitionStyle = 'stroke-width ' + duration + 's ease ' + delay + 's';
		}else{
			arrowhead.setAttribute('data-targetscale', arrowScale[linewidth]);
			updateArrowhead(line, arrowhead);
			transitionStyle = 'none';
		}

		line.style.transition = transitionStyle;
		line.style.webkitTransition = transitionStyle;
		line.setAttribute('stroke-width', linewidth);
	}

	function updateArrowhead (line, arrowhead, t) {
		var len = line.getTotalLength();
		t = typeof t !== 'undefined' ?  t : parseFloat(line.style["stroke-dashoffset"]).toFixed(2);
		// var t = parseFloat(line.style["stroke-dashoffset"]).toFixed(2);
		var inv = (len - t) || 0;
		var currPoint = line.getPointAtLength(inv);
		var angleRefPoint = line.getPointAtLength(inv-1);
		var angleString = angleInDeg(currPoint, angleRefPoint).toString();
		if(arrowhead.hasAttribute('data-targetscale')){
			arrowhead.setAttribute("transform", "translate(" + currPoint.x + "," + currPoint.y + ")" + " rotate(" + angleString + ")" + " scale(" + arrowhead.getAttribute('data-targetscale') + ")");
		}else{
			arrowhead.setAttribute("transform", "translate(" + currPoint.x + "," + currPoint.y + ")" + " rotate(" + angleString + ")" + " scale(" + arrowScale[line.getAttribute("stroke-width")] + ")");
		}
	}






	/////// specific slide definitions ///////

	var intro1_tl = new TimelineMax({repeat:-1});
	var intro5_tl = new TimelineMax({repeat:-1});
	var intro6_tl = new TimelineMax({repeat:-1});
	var intro7_tl = new TimelineMax({repeat:-1});

	$(document).ready(function () {

		// intro1 timeline //

		intro1_tl.stop();
		intro1_tl.addLabel("fed", 0);
		intro1_tl.addLabel("post", 2);
		intro1_tl.addLabel("fast", 4);

		intro1_tl.call(function(){
			$("#fedButton_intro").attr("class", "sectionButton sectionGroup sectionSelected");
			$("#postButton_intro").attr("class", "sectionButton sectionGroup");
			$("#fastButton_intro").attr("class", "sectionButton sectionGroup");
			$("#fedIconIntro").attr("class", "stateIcon");
			$("#postIconIntro").attr("class", "stateIcon transparent");
			$("#fastIconIntro").attr("class", "stateIcon transparent");
		}, null, null, "fed");
		intro1_tl.call(function(){
			$("#fedButton_intro").attr("class", "sectionButton sectionGroup");
			$("#postButton_intro").attr("class", "sectionButton sectionGroup sectionSelected");
			$("#fastButton_intro").attr("class", "sectionButton sectionGroup");
			$("#fedIconIntro").attr("class", "stateIcon transparent");
			$("#postIconIntro").attr("class", "stateIcon");
			$("#fastIconIntro").attr("class", "stateIcon transparent");
		}, null, null, "post");
		intro1_tl.call(function(){
			$("#fedButton_intro").attr("class", "sectionButton sectionGroup");
			$("#postButton_intro").attr("class", "sectionButton sectionGroup");
			$("#fastButton_intro").attr("class", "sectionButton sectionGroup sectionSelected");
			$("#fedIconIntro").attr("class", "stateIcon transparent");
			$("#postIconIntro").attr("class", "stateIcon transparent");
			$("#fastIconIntro").attr("class", "stateIcon");
		}, null, null, "fast");
		intro1_tl.call(function(){ /*console.log("placeholder1");*/ }, null, null, 6);

		// intro5 timeline //

		intro5_tl.stop();
		intro5_tl.addLabel('fast', 0);
		intro5_tl.addLabel('aerobic', 2);
		intro5_tl.call(function() {
			$("#fastLinesIntro").attr("class", "");
			$("#fastButton_intro").attr("class", "sectionButton sectionGroup sectionSelected");
			$("#fastIconIntro").attr("class", "stateIcon");
			$("#feedingTitle_intro").attr("class", "sectionGroup");
			$("#aerobicLinesIntro").attr("class", "transparent");
			$("#aerobicButton_intro").attr("class", "sectionButton");
			$("#aerobicIconIntro").attr("class", "stateIcon transparent");
			$("#otherTitle_intro").attr("class", "");
		}, null, null, "fast");
		intro5_tl.call(function() {
			$("#fastLinesIntro").attr("class", "transparent");
			$("#fastButton_intro").attr("class", "sectionButton");
			$("#fastIconIntro").attr("class", "stateIcon transparent");
			$("#feedingTitle_intro").attr("class", "");
			$("#aerobicLinesIntro").attr("class", "");
			$("#aerobicButton_intro").attr("class", "sectionButton sectionGroup sectionSelected");
			$("#aerobicIconIntro").attr("class", "stateIcon");
			$("#otherTitle_intro").attr("class", "sectionGroup");
		}, null, null, "aerobic");
		intro5_tl.call(function(){ /*console.log("placeholder1");*/ }, null, null, 4);

		// intro6 timeline //

		intro6_tl.stop();
		intro6_tl.to($('#insulinLevel'), 2, {drawSVG:(100 * 0.3).toString() + "%"}, 0);
		intro6_tl.to($('#insulinLevel'), 2, {drawSVG:(100 * 0.8).toString() + "%"}, 2);
		intro6_tl.to($('#glucagonLevel'), 2, {drawSVG:(100 * 0.7).toString() + "%"}, 0);
		intro6_tl.to($('#glucagonLevel'), 2, {drawSVG:(100 * 0.2).toString() + "%"}, 2);
		intro6_tl.call(function() {
			$("#modeArrow").attr("style", "-webkit-transition: -webkit-transform 2s ease-out; transition: transform 2s ease-out; transform: translate(200px,0); -webkit-transform: 200px,0)");
		}, null, null, 0);
		intro6_tl.call(function() {
			$("#modeArrow").attr("style", "-webkit-transition: -webkit-transform 2s ease-out; transition: transform 2s ease-out; transform: translate(57px,0); -webkit-transform: 57px,0)");
		}, null, null, 2);

		// intro7 timeline //

		intro7_tl.stop();
		intro7_tl.call(function() {
			$("#fedButton_intro").attr("class", "sectionButton sectionGroup");
		}, null, null, 0);
		intro7_tl.call(function() {
			$("#fedButton_intro").attr("class", "sectionButton");
		}, null, null, 0.4);
		intro7_tl.call(function() { }, null, null, 0.8);
	});



	var title1 = Object.create(SlideObject);
	title1.customAnimations = function () {
		TweenMax.fromTo($("#title"), 2, {opacity:0}, {opacity:1, delay:.75});
		TweenMax.fromTo($("#titleRect"), 1, {opacity:0}, {opacity:1, delay:0.25});
		TweenMax.fromTo($("#arrowHider"), 1, {x:-750}, {x:50, delay:2});

		$("#Overlay").attr("class", "transparent");
		$("#modeMeter").attr("class", "transparent");
		$("#concentration").attr("class", "transparent");

		$("#digestion").attr("class", "transparent");
		// TweenMax.set($("#digestion"), {x:565, y:116, scale:1.8});


		// TweenMax.to($("#digest2"), 0, {opacity:0});
		// $("#digest2").hide();

		// TweenMax.set($("#fedIconIntro"), {x:535, y:150, scale:1.8});
		// TweenMax.set($("#postIconIntro"), {x:535, y:150, scale:1.8});
		// TweenMax.set($("#fastIconIntro"), {x:535, y:150, scale:1.8});
	}

	var titleSection = [title1];



	var intro1 = Object.create(SlideObject);
	intro1.customAnimations = function () {

		$("#titleSection").attr("class", "transparent");
		$("#feedingTitle_intro").attr("class", "sectionGroup");

		intro5_tl.stop();
		intro7_tl.stop();

		TweenMax.to($("#textBox"), 0, {x:55});
		TweenMax.to($("#feeding_intro"), 0, {x:355});
		$("#other_intro").attr("class", "transparent");

		TweenMax.to($("#postIconIntro"), 0.5, {x:600, y:225, scale:1.8});
		TweenMax.to($("#fastIconIntro"), 0.5, {x:600, y:225, scale:1.8});
		TweenMax.to($("#fedIconIntro"), 0.5, {x:600, y:225, scale:1.8});

		intro1_tl.restart();


		// going backwards //

		TweenMax.killTweensOf($("#digestion"), {opacity:true});
		TweenMax.to($("#digestion"), 0.25, {opacity:0});
	}
	intro1.slideText = "Our bodies are constantly alternating between feeding and fasting.";


	var intro2 = Object.create(SlideObject);
	intro2.customAnimations = function () {
		intro1_tl.pause('fed', false);
		// $("#feedingTitle_intro").attr("class", "");
		// $("#fedButton_intro").attr("class", "sectionButton");
		// $("#postButton_intro").attr("class", "sectionButton");
		// $("#fastButton_intro").attr("class", "sectionButton");
		// $("#fedIconIntro").attr("class", "stateIcon");
		// $("#postIconIntro").attr("class", "stateIcon transparent");
		// $("#fastIconIntro").attr("class", "stateIcon transparent");

		TweenMax.killTweensOf($("#digestion"));
		TweenMax.to($("#digestion"), 0.5, {x:565, y:116, scale:1.8, opacity:1, delay: 0.5});
		TweenMax.fromTo($("#digest1b"), 0.6, {x:0, opacity:1}, {x:15, opacity:0, delay:2.5});
		TweenMax.fromTo($("#digest1a"), 0.6, {x:0, opacity:1}, {x:15, opacity:0, delay:2.5});
		TweenMax.fromTo($("#digest2a"), 0.6, {x:15, opacity:0}, {x:0, opacity:1, delay:2.5});
		TweenMax.fromTo($("#digest2b"), 0.6, {x:15, opacity:0}, {x:0, opacity:1, delay:2.5});

		TweenMax.to($("#fedIconIntro"), 1, {x:0, y:0, scale:1});
		TweenMax.to($("#postIconIntro"), 1, {x:0, y:0, scale:1});
		TweenMax.to($("#fastIconIntro"), 1, {x:0, y:0, scale:1});

		// going backwards //
		$("#Overlay").attr("class", "transparent");
	}
	intro2.slideText = "During digestion, food is broken down into molecules our bodies can absorb: carbohydrates to sugars, proteins to amino acids, and fats are broken down and put back together as fats.";


	var intro3 = Object.create(SlideObject);
	intro3.customAnimations = function () {
		TweenMax.killTweensOf($("#digestion"));
		$("#Overlay").attr("class", "");
		TweenMax.to($("#digestion"), 1, {x:0, y:0, scale:1, opacity:1});

		TweenMax.fromTo([$("#introArrow1"),$("#introArrow2"),$("#introArrow3")], 0.4, {opacity:0}, {opacity:1, delay:1});
	}
	intro3.brainActive = false;
	intro3.muscleStoreActive = true;
	intro3.liverStoreActive = true;
	intro3.fatStoreActive = true;
	intro3.muscleStoreLevel = 1;
	intro3.liverStoreLevel = 1;
	intro3.fatStoreLevel = 1;
	intro3.muscleStoreDelay = 2.8;
	intro3.liverStoreDelay = 2.8;
	intro3.fatStoreDelay = 2.8;
	intro3.lineAnimDelay = 1;
	intro3.lineAnimDuration = 2;
	intro3.slideText = "After a meal, cells go into \"storage\" mode. They take up nutrients from food and store them away."


	var intro4 = Object.create(SlideObject);
	intro4.customAnimations = function () {
		// going backwards //
		TweenMax.to($("#feeding_intro"), 0.5, {x:355});
		$("#other_intro").attr("class", "transparent");
		intro5_tl.stop();
		// $("#fedIconIntro").attr("class", "stateIcon");
		$("#fastLinesIntro").attr("class", "transparent");
		// $("#fastButton_intro").attr("class", "sectionButton");
		// $("#fastIconIntro").attr("class", "stateIcon transparent");
		$("#aerobicLinesIntro").attr("class", "transparent");
		$("#aerobicButton_intro").attr("class", "sectionButton");
		$("#aerobicIconIntro").attr("class", "stateIcon transparent");
		// $("#feedingTitle_intro").attr("class", "");
		$("#otherTitle_intro").attr("class", "");
		//////////////////////


		intro1_tl.pause('post', false);
	}
	intro4.muscleStoreActive = true;
	intro4.muscleBurnActive = true;
	intro4.muscleStoreLevel = 0.5;
	intro4.liverStoreActive = true;
	intro4.liverStoreLevel = 0.5;
	intro4.fatStoreActive = true;
	intro4.fatBurnActive = true;
	intro4.fatStoreLevel = 0.5;
	intro4.brainBurnActive = true;

	intro4.slideText = "Between meals, cells go into \"mobilizing\" mode. Stored nutrients are released to keep cells supplied with fuel.";


	var intro5 = Object.create(SlideObject);
	intro5.customAnimations = function () {
		intro1_tl.pause('fast', false);
		intro5_tl.restart();

		$("#postButton_intro").attr("class", "sectionButton");
		$("#fedButton_intro").attr("class", "sectionButton");
		TweenMax.to($("#feeding_intro"), 0.5, {x:0});
		$("#other_intro").attr("class", "");
		updateArrowhead($("#an1")[0], $("#anArrow1")[0], 1);
		updateArrowhead($("#an2")[0], $("#anArrow2")[0], 1);
		updateArrowhead($("#an3")[0], $("#anArrow3")[0], 1);
		updateArrowhead($("#fa1")[0], $("#faArrow1")[0], 1);
		updateArrowhead($("#fa2")[0], $("#faArrow2")[0], 1);

		// going backwards //
		intro6_tl.stop();
		$("#Overlay").attr("class", "");
		$("#modeMeter").attr("class", "transparent");
		$("#concentration").attr("class", "transparent");
		$("#fedIconIntro").attr("class", "stateIcon transparent");
		TweenMax.to($("#concentration"), 0.4, {x:-716, y:286, scale:1.8});
		TweenMax.to($("#modeMeter"), 0.4, {x:-709, y:352, scale:1.8});
	}
	intro5.liverStoreActive = true;
	intro5.liverStoreLevel = 0.5;
	intro5.muscleStoreActive = true;
	intro5.muscleStoreLevel = 0.5;
	intro5.muscleBurnActive = true;
	intro5.brainBurnActive = true;
	intro5.slideText = "Our energy needs also vary throughout the day. For instance, we burn less fuel when we are sleeping and more when we are moving.";


	var intro6 = Object.create(SlideObject);
	intro6.customAnimations = function () {
		intro5_tl.stop();
		$("#fastLinesIntro").attr("class", "transparent");
		$("#fastButton_intro").attr("class", "sectionButton");
		$("#fastIconIntro").attr("class", "stateIcon transparent");
		$("#aerobicLinesIntro").attr("class", "transparent");
		$("#aerobicButton_intro").attr("class", "sectionButton");
		$("#aerobicIconIntro").attr("class", "stateIcon transparent");
		$("#feedingTitle_intro").attr("class", "");
		$("#otherTitle_intro").attr("class", "");

		$("#fedIconIntro").attr("class", "stateIcon");
		$("#Overlay").attr("class", "transparent");
		$("#modeMeter").attr("class", "");
		$("#concentration").attr("class", "");
		TweenMax.to($("#concentration"), 0.75, {x:-716, y:286, scale:1.8});
		TweenMax.to($("#modeMeter"), 0.75, {x:-709, y:352, scale:1.8});

		intro6_tl.restart();

		// going backwards //
		TweenMax.to($("#textBox"), 0.5, {x:55});
		$("#fedButton_intro").attr("style", "cursor: default; pointer-events: none;");
		$("#fedButton_intro").attr("class", "sectionButton");
		intro7_tl.stop();
	}
	intro6.slideText = "Two hormones\u2014\insulin and glucagon\u2014\keep the system in balance. They are the signals that tell our cells which metabolic pathways to activate. They ensure the right amount of fuel is available, no matter when we last ate or what our energy needs are.";


	var intro7 = Object.create(SlideObject);
	intro7.customAnimations = function () {
		$("#modeArrow").attr("style", "-webkit-transition: -webkit-transform 0.8s ease-out; transition: transform 0.8s ease-out;");

		$("#fedButton_intro").attr("style", "");

		intro6_tl.stop();
		intro7_tl.restart();
		TweenMax.to($("#concentration"), 0.75, {x:0, y:0, scale:1});
		TweenMax.to($("#modeMeter"), 0.75, {x:0, y:0, scale:1});
		TweenMax.to($("#textBox"), 0.5, {x:0});
		$("#Overlay").attr("class", "");
	}
	intro7.brainActive = false;
	intro7.liverActive = false;
	intro7.muscleActive = false;
	intro7.fatActive = false;
	intro7.slideText = "Select \"FED\" above to see what happens with these hormones and how they affect our cells during the feeding/fasting cycle.";

	var introSection = [intro1, intro2, intro3, intro4, intro5, intro6, intro7];


	// Fed Slides //

	var fed1 = Object.create(SlideObject);
	fed1.muscleActive = false;
	fed1.liverActive = false;
	fed1.brainActive = false;
	fed1.fatActive = false;
	fed1.digestionActive = true;
	fed1.concentrationActive = false;
	fed1.modeActive = false;
	fed1.insulinLevel = 0;
	fed1.glucagonLevel = 0;
	fed1.mode = 0.5;
	fed1.slideText = "As we eat dinner, fuel molecules from food enter the bloodstream. The focus during the fed state is packing these nutrients away in storage.";

	var fed2 = Object.create(SlideObject);
	fed2.muscleActive = false;
	fed2.liverActive = false;
	fed2.brainActive = false;
	fed2.fatActive = false;
	fed2.modeActive = false;
	fed2.mode = 0.5;
	fed2.slideText = "High glucose and amino acid levels stimulate insulin release.";

	var fed3 = Object.create(SlideObjectAllActive);
	fed3.digestionActive = true;
	fed3.mode = 0.15;
	fed3.slideText = "Insulin travels to all the body’s cells, relaying the message to enter storage mode.";

	var fed4 = Object.create(SlideObject);
	fed4.muscleBuildActive = true;
	fed4.liverBuildActive = true;
	fed4.brainBuildActive = true;
	fed4.fatBuildActive = true;
	fed4.digestionActive = true;
	fed4.mode = 0.15;
	fed4.slideText = "It causes the following changes: <br />1. All cells take up amino acids and start building proteins.";

	var fed5 = Object.create(SlideObject);
	fed5.muscleBurnActive = true;
	fed5.liverBurnActive = true;
	fed5.brainBurnActive = true;
	fed5.fatBurnActive = true;
	fed5.digestionActive = true;
	fed5.mode = 0.15;
	fed5.slideText = "2. Nearly all cell types take up glucose and start burning it for energy.";

	var fed6 = Object.create(SlideObject);
	fed6.muscleStoreActive = true;
	fed6.muscleStoreLevel = 1;
	fed6.liverStoreActive = true;
	fed6.liverStoreLevel = 1;
	fed6.fatStoreActive = true;
	fed6.fatStoreLevel = 0.5;
	fed6.digestionActive = true;
	fed6.mode = 0.15;
	fed6.liverStoreDelay = 1.3;
	fed6.muscleStoreDelay = 1.3;
	fed6.fatStoreDelay = 1.3;
	fed6.slideText = "3. Fat, liver, and muscle begin taking up nutreints from the bloodstream and converting them into glycogen and fat for storage.";

	var fed7 = Object.create(SlideObject);
	fed7.liverConvertActive = true;
	fed7.fatConvertActive = true;
	fed7.fatStoreActive = true;
	fed7.muscleStoreLevel = 1;
	fed7.liverStoreLevel = 1;
	fed7.fatStoreLevel = 1;
	fed7.digestionActive = true;
	fed7.mode = 0.15;
	fed7.lineAnimDuration = 2.1;
	fed7.fatStoreDelay = 1.8;
	fed7.slideText = "3. Fat, liver, and muscle begin taking up nutreints from the bloodstream and converting them into glycogen and fat for storage.";

	var fedSection = [fed1, fed2, fed3, fed4, fed5, fed6, fed7];

	///////////

	var post1 = Object.create(SlideObject);
	post1.muscleActive = false;
	post1.liverActive = false;
	post1.brainActive = false;
	post1.fatActive = false;
	post1.fatStoreActive = false;
	post1.fatStoreLevel = 1;
	post1.muscleStoreActive = false;
	post1.muscleStoreLevel = 1;
	post1.liverStoreActive = false;
	post1.liverStoreLevel = 1;
	post1.insulinLevel = 0.33;
	post1.glucagonLevel = 0.6;
	post1.mode = 0.65;
	post1.slideText = "After a few hours, the nutrients from the last meal have been absorbed. Insulin levels decrease and glucagon levels increase. This shift causes cells to switch from “storing” to “mobilizing” mode.";

	var post2 = Object.create(SlideObject);
	post2.muscleBurnActive = true;
	post2.liverBurnActive = true;
	post2.fatBurnActive = true;
	post2.brainActive = false;
	post2.fatStoreActive = true;
	post2.fatStoreLevel = 0.33;
	post2.muscleStoreActive = false;
	post2.muscleStoreLevel = 1;
	post2.liverStoreActive = false;
	post2.liverStoreLevel = 1;
	post2.insulinLevel = 0.33;
	post2.glucagonLevel = 0.6;
	post2.mode = 0.65;
	post2.lineAnimDuration = 2.1;
	post2.slideText = "Fat cells start releasing fatty acids, which most cell types (including muscle and liver) burn for energy.";

	var post3 = Object.create(SlideObject);
	post3.brainActive = false;
	post3.liverActive = false;
	post3.fatActive = false;
	post3.fatStoreActive = false;
	post3.fatStoreLevel = 0.33;
	post3.muscleStoreActive = true;
	post3.muscleStoreLevel = 0.65;
	post3.muscleBurnActive = true;
	post3.liverStoreActive = false;
	post3.liverStoreLevel = 1;
	post3.insulinLevel = 0.33;
	post3.glucagonLevel = 0.6;
	post3.mode = 0.65;
	post3.slideText = "When they’re active, muscle cells also burn some glucose, mostly from its glycogen storage.";

	var post4 = Object.create(SlideObject);
	post4.fatActive = false;
	post4.brainBurnActive = true;
	post4.muscleActive = false;
	post4.fatStoreActive = false;
	post4.fatStoreLevel = 0.33;
	post4.muscleStoreActive = false;
	post4.muscleStoreLevel = 0.65;
	post4.liverStoreActive = true;
	post4.liverStoreLevel = 0.5;
	post4.insulinLevel = 0.33;
	post4.glucagonLevel = 0.6;
	post4.mode = 0.65;
	post4.slideText = "To keep the brain supplied with fuel (it burns glucose almost exclusively), the liver releases glucose from stored glycogen.";

	var post5 = Object.create(SlideObject);
	post5.muscleActive = false;
	post5.brainBurnActive = true;
	post5.liverConvertActive = true;
	post5.fatStoreActive = true;
	post5.fatStoreLevel = 0;
	post5.muscleStoreActive = false;
	post5.muscleStoreLevel = 0.65;
	post5.liverStoreActive = false;
	post5.liverStoreLevel = 0.5;
	post5.insulinLevel = 0.33;
	post5.glucagonLevel = 0.6;
	post5.mode = 0.65;
	post5.lineAnimDuration = 3;
	post5.slideText = "Along with fatty acids, fat tissue also releases glycerol. The liver converts glycerol to glucose, which the brain can burn for fuel.";

	var postSection = [post1, post2, post3, post4, post5];

	///////////////

	var fast1 = Object.create(SlideObject);
	fast1.insulinLevel = 0.2;
	fast1.glucagonLevel = 0.75;
	fast1.brainActive = false;
	fast1.fatActive = false;
	fast1.liverStoreActive = true;
	fast1.liverStoreLevel = 0.25;
	fast1.muscleStoreActive = true;
	fast1.muscleStoreLevel = 0.25;
	fast1.mode = 0.85;
	fast1.slideText = "After several hours (depending on food intake and activity levels), and usually before morning, glycogen stores run low. Insulin drops further, and glucagon continues to rise.";

	var fast2 = Object.create(SlideObject);
	fast2.insulinLevel = 0.2;
	fast2.glucagonLevel = 0.75;
	fast2.brainBurnActive = true;
	fast2.fatActive = false;
	fast2.liverConvertActive = true;
	fast2.muscleBurnActive = true;
	fast2.lineAnimDuration = 2.1;
	fast2.mode = 0.85;
	fast2.slideText = "Muscles respond to these changing hormone levels by breaking glucose down part-way and releasing it as pyruvate or lactate. The liver takes it up and converts it back to glucose.";

	var fast3 = Object.create(SlideObject);
	fast3.insulinLevel = 0.2;
	fast3.glucagonLevel = 0.75;
	fast3.fatActive = false;
	fast3.muscleBuildActive = true;
	fast3.liverConvertActive = true;
	fast3.brainBurnActive = true;
	fast3.lineAnimDuration = 2.1;
	fast3.mode = 0.85;
	fast3.slideText = "Muscle cells also break down their proteins to amino acids and release them. The liver converts these amino acids to glucose, making more fuel available for the brain.";
	var fastSection = [fast1, fast2, fast3];

	var starve1 = Object.create(SlideObject);
	starve1.fatActive = false;
	starve1.brainActive = false;
	starve1.liverStoreActive = 0;
	starve1.muscleStoreActive = 0;
	starve1.insulinLevel = 0.15;
	starve1.glucagonLevel = 0.9;
	starve1.mode = 0.95;
	starve1.fatStoreLevel= 1;
	starve1.liverStoreActive = true;
	starve1.muscleStoreActive = true;
	starve1.slideText = "After about 24 hours without food, muscle and liver cells run out of stored glycogen.";

	var starve2 = Object.create(SlideObject);
	starve2.brainActive = false;
	starve2.muscleBurnActive = true;
	starve2.fatBurnActive = true;
	starve2.liverBurnActive = true;
	starve2.fatStoreActive = true;
	starve2.lineAnimDuration = 2.1;
	starve2.fatStoreLevel = 0.85;
	starve2.customAnimations = function () {
		animateLineWidth($('#starve2_1')[0],$('#starve2_1a')[0],13,false,1,0);
		animateLineWidth($('#starve2_2')[0],$('#starve2_2a')[0],13,false,1,0);
		animateLineWidth($('#starve2_3')[0],$('#starve2_3a')[0],8,false,1,0);
	}
	starve2.slideText = "Fat tissue supplies fatty acids for itself and for muscle and liver cells to burn.";

	var starve3 = Object.create(SlideObject);
	starve3.lineAnimDuration = 3;
	starve3.muscleBurnActive = true;
	starve3.brainBurnActive = true;
	starve3.liverConvertActive = true;
	starve3.fatBurnActive = true;
	starve3.fatStoreActive = true;
	starve3.fatStoreLevel = 0.7;
	starve3.customAnimations = function () {
		animateLineWidth($('#starve3_1')[0],$('#starve3_1a')[0],8,false,1,0);
	}
	starve3.slideText = "Along with fatty acids, fat tissue releases glycerol. The liver converts glycerol to glucose, providing a small amount of fuel for the brain.";

	var starve4 = Object.create(SlideObject);
	starve4.muscleBuildActive = true;
	starve4.muscleBurnActive = true;
	starve4.brainBurnActive = true;
	starve4.liverBurnActive = true;
	starve4.liverConvertActive = true;
	starve4.lineAnimDuration = 2.1;
	starve4.fatStoreLevel = 0.55;
	starve4.fatStoreActive = true;
	starve4.fatBurnActive = true;
	starve4.customAnimations = function () {
		animateLineWidth($('#starve4_1')[0],$('#starve4_1a')[0],13,false,1,0);
	}
	starve4.slideText = "Muscle cells provide most of the fuel for the brain. They break down proteins to amino acids, release them to the liver, where they are converted to glucose. This protein breakdown can lead to significant muscle loss.";

	var starve5 = Object.create(SlideObject);
	starve5.lineAnimDuration = 2;
	starve5.fatStoreActive = true;
	starve5.liverConvertActive = true;
	starve5.liverBurnActive = true;
	starve5.brainBurnActive = true;
	starve5.fatStoreLevel = 0.4;
	starve5.fatBurnActive = true;
	starve5.muscleBuildActive = true;
	starve5.muscleBurnActive = true;
	starve5.slideText = "After 2 days without food, the body starts to conserve amino acids. Muscle breakdown decreases, and the liver begins to release partially broken-down fatty acids as ketone bodies.";
	starve5.customAnimations = function () {
		animateLineWidth($('#starve2_1')[0],$('#starve2_1a')[0],13,true,1,0);
		animateLineWidth($('#starve2_2')[0],$('#starve2_2a')[0],13,true,1,0);
		animateLineWidth($('#starve2_3')[0],$('#starve2_3a')[0],8,true,1,0);
		animateLineWidth($('#starve3_1')[0],$('#starve3_1a')[0],8,true,1,0);
		animateLineWidth($('#starve5_1')[0],$('#starve5_1a')[0],13,true,1,0);
		animateLineWidth($('#starve4_1')[0],$('#starve4_1a')[0],13,true,1,0);
	}

	var starve6 = Object.create(SlideObject);
	starve6.fatStoreActive = true;
	starve6.fatBurnActive = true;
	starve6.brainBurnActive = true;
	starve6.liverConvertActive = true;
	starve6.liverBurnActive = true;
	starve6.fatStoreLevel = 0.25;
	starve6.muscleBuildActive = true;
	starve6.muscleBurnActive = true;
	starve6.slideText = "Stored fat can keep the body going for many weeks. But because the brain cannot function on ketone bodies alone, it still relies on proteins to supply glucose. Muscles become weaker, and organs may start to break down.";
	starve6.customAnimations = function () {
		animateLineWidth($('#starve2_1')[0],$('#starve2_1a')[0],6,true,1,0);
		animateLineWidth($('#starve2_2')[0],$('#starve2_2a')[0],6,true,1,0);
		animateLineWidth($('#starve2_3')[0],$('#starve2_3a')[0],6,true,1,0);
		animateLineWidth($('#starve3_1')[0],$('#starve3_1a')[0],6,true,1,0);
		animateLineWidth($('#starve4_1')[0],$('#starve4_1a')[0],10,true,1,0);
		animateLineWidth($('#starve5_1')[0],$('#starve5_1a')[0],6,true,1,0);
	}

	var starve7 = Object.create(SlideObject);
	starve7.fatStoreLevel = 0;
	starve7.muscleBuildActive = true;
	starve7.liverConvertActive = true;
	starve7.brainBurnActive = true;
	starve7.fatActive = false;
	starve7.slideText = "When fat runs out, the only fuel left is protein. Amino acids from tissue breakdown fuel the body until critical muscles or tissues can no longer function. (When people die from starvation, it's usually because of heart, respiratory muscles, kidney, or liver failure).";
	starve7.customAnimations = function () {
		animateLineWidth($('#starve2_1')[0],$('#starve2_1a')[0],0,true,1,0);
		animateLineWidth($('#starve2_2')[0],$('#starve2_2a')[0],0,true,1,0);
		animateLineWidth($('#starve2_3')[0],$('#starve2_3a')[0],0,true,1,0);
		animateLineWidth($('#starve3_1')[0],$('#starve3_1a')[0],0,true,1,0);
		animateLineWidth($('#starve4_1')[0],$('#starve4_1a')[0],6,true,1,0);
		animateLineWidth($('#starve5_1')[0],$('#starve5_1a')[0],0,true,1,0);
	}

	var starveSection = [starve1, starve2, starve3, starve4, starve5, starve6, starve7];

	////////////

	var anaerobic1 = Object.create(SlideObjectAllActive);
	anaerobic1.brainActive = false;
	anaerobic1.liverActive = false;
	anaerobic1.fatActive = false;
	anaerobic1.digestionActive = false;
	anaerobic1.muscleStoreLevel = 1;
	anaerobic1.slideText = "During anaerobic exercise, like a 100-meter sprint, metabolic regulation is focused within the working muscle cells themselves. In fact, for the first few seconds of activity, cells can use stored ATP.";


	var anaerobic2 = Object.create(SlideObject);
	anaerobic2.liverActive = false;
	anaerobic2.brainActive = false;
	anaerobic2.fatActive = false;
	anaerobic2.muscleBurnActive = true;
	anaerobic2.muscleStoreActive = true;
	anaerobic2.lineAnimDuration = 1;
	anaerobic2.muscleStoreLevel = 0.8;
	anaerobic2.customAnimations = function () {
		animateLineWidth($('#anaerobic2_1')[0],$('#anaerobic2_1a')[0],25,false,1,0);
	}
	anaerobic2.slideText = "Over the course of just a few seconds, glucose is released from glycogen storage, and the rate of glucose breakdown through glycolysis increases up to 1,000-fold.";

	var anaerobic3 = Object.create(SlideObject);
	anaerobic3.liverActive = false;
	anaerobic3.brainActive = false;
	anaerobic3.fatActive = false;
	anaerobic3.muscleBurnActive = true;
	anaerobic3.muscleStoreActive = true;
	anaerobic3.muscleStoreLevel = 0.6;
	anaerobic3.customAnimations = function () {
		animateLineWidth($('#anaerobic2_1')[0],$('#anaerobic2_1a')[0],25,false,1,0);
		TweenMax.fromTo($('#anaerobic3_1'), 1, {drawSVG:"0%"}, {drawSVG:"25%", onUpdate: updateArrowhead, onUpdateParams:[$('#anaerobic3_1')[0], $('#anaerobic3_1a')[0]]});
		animateLineWidth($('#anaerobic3_1')[0],$('#anaerobic3_1a')[0],25,false,1,0);
	}
	anaerobic3.slideText = "Glycolysis is quick, but later steps required for complete glucose breakdown are much slower. Partially broken down glucose bulds up as pyruvate and lactate (lactic acid), which muscle cells release into the bloodstream.";

	var anaerobic4 = Object.create(SlideObject);
	anaerobic4.liverActive = false;
	anaerobic4.brainActive = false;
	anaerobic4.fatActive = false;
	anaerobic4.muscleBurnActive = true;
	anaerobic4.muscleStoreActive = true;
	anaerobic4.muscleStoreLevel = 0.4;
	anaerobic4.customAnimations = function () {
		animateLineWidth($('#anaerobic2_1')[0],$('#anaerobic2_1a')[0],16,true,1,0);
		TweenMax.to($('#anaerobic3_1'), 0, {drawSVG:"25%", onUpdate: updateArrowhead, onUpdateParams:[$('#anaerobic3_1')[0], $('#anaerobic3_1a')[0]]});
		animateLineWidth($('#anaerobic3_1')[0],$('#anaerobic3_1a')[0],25,false,1,0);
	}
	anaerobic4.slideText = "Lactate build-up and a drop in pH contribute to muscle fatigue. Muscles can work at full power for only about 10 seconds, after which they must slow down and find another way to get energy.";

	var anaerobic5 = Object.create(SlideObject);
	anaerobic5.liverConvertActive = true;
	anaerobic5.muscleBurnActive = true;
	anaerobic5.fatActive = false;
	anaerobic5.brainActive = false;
	anaerobic5.muscleStoreActive = true;
	anaerobic5.lineAnimDuration = 2;
	anaerobic5.muscleStoreLevel = 0.2;
	anaerobic5.customAnimations = function () {
		animateLineWidth($('#anaerobic2_1')[0],$('#anaerobic2_1a')[0],16,false,1,0);
		TweenMax.fromTo($('#anaerobic3_1'), 2, {drawSVG:"25%"}, {drawSVG:"100%"});
		animateLineWidth($('#anaerobic3_1')[0],$('#anaerobic3_1a')[0],16,true,2,0);
	}
	anaerobic5.slideText = "Some cells, such as heart muscle, can take up lactate and burn it for fuel. But most of it goes to the liver, which converts it to glucose and returns it to the bloodstream.";

	var anaerobicSection = [anaerobic1, anaerobic2, anaerobic3, anaerobic4, anaerobic5];

	///////////////////

	var aerobic1 = Object.create(SlideObject);
	aerobic1.brainActive = false;
	aerobic1.liverActive = false;
	aerobic1.muscleBurnActive = true;
	aerobic1.muscleStoreActive = true;
	aerobic1.muscleStoreLevel = 0.8;
	aerobic1.liverStoreLevel = 0.8;
	aerobic1.fatStoreActive = true;
	aerobic1.fatStoreLevel = 0.8;
	aerobic1.lineAnimDuration = 2;
	anaerobic1.customAnimations = function () {
		animateLineWidth($('#aerobic1_1')[0],$('#aerobic1_1a')[0],25,false,1,0);
	}
	aerobic1.slideText = "During aerobic exercise, like long-distance running, muscle cells increase their fuel consumption by about 100-fold. They use a combination of fatty acids and glucose, which they break down completely to carbon dioxide, a process that requires oxygen.";

	var aerobic2 = Object.create(SlideObject);
	aerobic2.liverBurnActive = true;
	aerobic2.fatStoreActive = true;
	aerobic2.muscleBurnActive = true;
	aerobic2.muscleStoreActive = true;
	aerobic2.brainActive = false;
	aerobic2.fatBurnActive = true;
	aerobic2.fatStoreLevel = 0.75;
	aerobic2.customAnimations = function () {
		animateLineWidth($('#aerobic2_1')[0],$('#aerobic2_1a')[0],10,false,1,0);
	}
	aerobic2.slideText = "As in the fasting state, fat tissue also supplies fatty acids for itself and for liver cells to burn for fuel.";

	var aerobic3 = Object.create(SlideObject);
	aerobic3.lineAnimDuration = 2;
	aerobic3.brainBurnActive = true;
	aerobic3.liverBurnActive = true;
	aerobic3.fatStoreActive = true;
	aerobic3.muscleBurnActive = true;
	aerobic3.muscleStoreActive = true;
	aerobic3.fatBurnActive = true;
	aerobic3.liverStoreActive = true;
	aerobic3.fatStoreLevel = 0.7;
	aerobic3.customAnimations = function () {
		animateLineWidth($('#aerobic3_1')[0],$('#aerobic3_1a')[0],13,false,1,0);
		animateLineWidth($('#aerobic3_2')[0],$('#aerobic3_2a')[0],18,false,1,0);
	}
	aerobic3.slideText = "The liver shares the work of aerobic exercise, taking some of the burden off of the muscles. It releases glucose from stored glycogen not only for the brain and also for muscle.";

	var aerobic4 = Object.create(SlideObject);
	aerobic4.lineAnimDuration = 4;
	aerobic4.muscleBurnActive = true;
	aerobic4.liverConvertActive = true;
	aerobic4.fatStoreActive = true;
	aerobic4.liverStoreActive = true;
	aerobic4.muscleStoreActive = true;
	aerobic4.liverBurnActive = true;
	aerobic4.fatBurnActive = true;
	aerobic4.brainBurnActive = true;
	aerobic4.fatStoreLevel = 0.65;
	aerobic4.customAnimations = function () {
		animateLineWidth($('#aerobic4_1')[0],$('#aerobic4_1a')[0],10,false,1,0);
	}
	aerobic4.slideText = "Additional glucose comes from glycerol, which is released from fat tissue along with fatty acids.";

	var aerobic5 = Object.create(SlideObject);
	aerobic5.liverBurnActive = true;
	aerobic5.muscleBurnActive = true;
	aerobic5.liverConvertActive = true;
	aerobic5.liverStoreActive = true;
	aerobic5.fatBurnActive = true;
	aerobic5.fatStoreActive = true;
	aerobic5.brainBurnActive = true;
	aerobic5.fatStoreLevel = 0.6;
	aerobic5.customAnimations = function () {
		animateLineWidth($('#aerobic1_1')[0],$('#aerobic1_1a')[0],20,true,1,0);
		animateLineWidth($('#aerobic2_1')[0],$('#aerobic2_1a')[0],10,true,1,0);
		animateLineWidth($('#aerobic3_1')[0],$('#aerobic3_1a')[0],13,true,1,0);
		animateLineWidth($('#aerobic3_2')[0],$('#aerobic3_2a')[0],18,true,1,0);
		animateLineWidth($('#aerobic4_1')[0],$('#aerobic4_1a')[0],10,true,1,0);
		animateLineWidth($('#aerobic5_1')[0],$('#aerobic5_1a')[0],8,false,1,0);
	}
	aerobic5.slideText = "Some glucose is broken down only partially and released as pyruvate or lactate (lactic acid). The liver converts it back to glucose and sends it back out to the bloodstream.";

	var aerobic6 = Object.create(SlideObject);
	aerobic6.lineAnimDuration = 3;
	aerobic6.liverBurnActive = true;
	aerobic6.liverStoreActive = true;
	aerobic6.liverConvertActive = true;
	aerobic6.muscleBurnActive = true;
	aerobic6.brainBurnActive = true;
	aerobic6.fatBurnActive = true;
	aerobic6.fatStoreActive = true;
	aerobic6.fatStoreLevel = 0.55;
	aerobic6.customAnimations = function () {
		animateLineWidth($('#aerobic1_1')[0],$('#aerobic1_1a')[0],8,true,1,0);
		animateLineWidth($('#aerobic2_1')[0],$('#aerobic2_1a')[0],18,true,1,0);
		animateLineWidth($('#aerobic3_1')[0],$('#aerobic3_1a')[0],8,true,1,0);
		animateLineWidth($('#aerobic3_2')[0],$('#aerobic3_2a')[0],8,true,1,0);
		animateLineWidth($('#aerobic4_1')[0],$('#aerobic4_1a')[0],8,true,1,0);
		animateLineWidth($('#aerobic5_1')[0],$('#aerobic5_1a')[0],8,true,1,0);
	}
	aerobic6.slideText = "If aerobic exercise goes on for a long time, glycogen supplies get low. The liver starts converting some fatty acids to ketone bodies, which provide fuel for muscle, brain, and other tissues.";

	var aerobic7 = Object.create(SlideObject);
	aerobic7.fatStoreLevel = 0.5;
	aerobic7.muscleBurnActive = true;
	aerobic7.liverBurnActive = true;
	aerobic7.liverConvertActive = true;
	aerobic7.brainBurnActive = true;
	aerobic7.fatStoreActive = true;
	aerobic7.fatBurnActive = true;
	aerobic7.muscleStoreActive = true;
	aerobic7.liverStoreActive = true;
	aerobic7.customAnimations = function () {
		animateLineWidth($('#aerobic1_1')[0],$('#aerobic1_1a')[0],0,true,1,0);
		animateLineWidth($('#aerobic3_1')[0],$('#aerobic3_1a')[0],0,true,1,0);
		animateLineWidth($('#aerobic3_2')[0],$('#aerobic3_2a')[0],0,true,1,0);
		animateLineWidth($('#aerobic4_1')[0],$('#aerobic4_1a')[0],0,true,1,0);
		animateLineWidth($('#aerobic5_1')[0],$('#aerobic5_1a')[0],0,true,1,0);
	}
	aerobic7.slideText = "If glycogen runs out completely, athletes experience the sensation of “hitting the wall.” While muscles are very good at burning fatty acids, this fuel source burns much more slowly, providing a much more gradual energy output than glucose.";

	var aerobicSection = [aerobic1, aerobic2, aerobic3, aerobic4, aerobic5, aerobic6, aerobic7];

	var lowcarb1 = Object.create(SlideObject);
	var lowcarbSection = [lowcarb1];


	var allSections = {
		title: titleSection,
		intro: introSection,
		fed: fedSection,
		post: postSection,
		fast: fastSection,
		starve: starveSection,
		aerobic: aerobicSection,
		anaerobic: anaerobicSection,
		lowcarb: lowcarbSection,
	}

})();

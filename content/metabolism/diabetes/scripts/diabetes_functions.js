$(function() {
   var vidPlayer = $('#vidPlayer');
   var playerOrigin = '*';
   var playAfterLoad = false;
   var menuVO = new Audio('audio/Menu_VO.mp3');
   var currentvideoID = "166980886";

   function onReady() {
      post('addEventListener', 'finish');
      post('addEventListener', 'playProgress');
   }

   //--Functions--//

   TweenMax.to($('#Start_Button'), 0.7, {x:0, y:0, scale:1.05, repeat:-1, yoyo:true});
   //- TweenMax.to($('#Click_To_Start'), 1.5, {opacity:0, repeat:-1, yoyo:true});

   function hideTitle() {
      TweenMax.killTweensOf($('#Start_Button'));
      //- TweenMax.killTweensOf($('#Click_To_Start'));
      $('#Start_Button_BG').css('pointer-events', 'none');
      $('#Diabetes_Title').css('opacity', '0');
      TweenMax.to($("#radial-gradient"),1.2, {attr:{r:0}});
      TweenMax.to($("#baseColor"),1.2, {stopColor:"#000"});
   }

   function onFinish() {
      if (currentvideoID === '166980886') {
         showMenu_Intro()
      } else {
         showMenu();
      }
   }

   function noneButtz() {
      $("#Intro_BG").css("pointer-events", "none");
      $("#Exercise_BG").css("pointer-events", "none");
      $("#Sleep_BG").css("pointer-events", "none");
      $("#Metformin_BG").css("pointer-events", "none");
      $("#Insulin_BG").css("pointer-events", "none");
      $("#TZD_BG").css("pointer-events", "none");
      $("#Secretagogue_BG").css("pointer-events", "none");
      $("#Gliflozin_BG").css("pointer-events", "none");
      $("#Incretins_BG").css("pointer-events", "none");
   }

   function autoButtz() {
      $("#Intro_BG").css("pointer-events", "auto");
      $("#Exercise_BG").css("pointer-events", "auto");
      $("#Sleep_BG").css("pointer-events", "auto");
      $("#Metformin_BG").css("pointer-events", "auto");
      $("#Insulin_BG").css("pointer-events", "auto");
      $("#TZD_BG").css("pointer-events", "auto");
      $("#Secretagogue_BG").css("pointer-events", "auto");
      $("#Gliflozin_BG").css("pointer-events", "auto");
      $("#Incretins_BG").css("pointer-events", "auto");
   }

   function showMenu_Intro() {
      TweenMax.to($("#diabetes-menu"), 1.5, {top:"0px", ease: Bounce.easeOut});
      TweenMax.to($('#Arrow'), 0.35, {morphSVG:"#Arrow"});
      menuVO.play();
      noneButtz();
      var introMenu = new TimelineMax({delay:2.3});
      introMenu.to($("#Exercise_BG"),0.2, {className:"exercise-timeline"})
      .to($("#Exercise_BG"),0.2, {className:"exercise-button"}, "s1")
      .to($("#Metformin_BG"),0.2, {className:"green-timeline"}, "s1")
      .to($("#Metformin_BG"),0.2, {className:"green-button"}, "s2")
      .to($("#TZD_BG"),0.2, {className:"green-timeline"}, "s2")
      .to($("#TZD_BG"),0.2, {className:"green-button"}, "s3")
      .to($("#Gliflozin_BG"),0.2, {className:"green-timeline"}, "s3")
      .to($("#Gliflozin_BG"),0.2, {className:"green-button"}, "s4")
      .to($("#Sleep_BG"),0.2, {className:"sleep-timeline"}, "s4")
      .to($("#Sleep_BG"),0.2, {className:"sleep-button"}, "s5")
      .to($("#Insulin_BG"),0.2, {className:"green-timeline"}, "s5")
      .to($("#Insulin_BG"),0.2, {className:"green-button"}, "s6")
      .to($("#Secretagogue_BG"),0.2, {className:"green-timeline"}, "s6")
      .to($("#Secretagogue_BG"),0.2, {className:"green-button"}, "s7")
      .to($("#Incretins_BG"),0.2, {className:"green-timeline"}, "s7")
      .to($("#Incretins_BG"),0.2, {className:"green-button"})
      .to($("#Exercise_BG"), 0.2, {className:"exercise-timeline"}, "s8")
      .to($("#Metformin_BG"), 0.4, {className:"green-timeline"}, "s8")
      .to($("#TZD_BG"), 0.4, {className:"green-timeline"}, "s8")
      .to($("#Gliflozin_BG"), 0.4, {className:"green-timeline"}, "s8")
      .to($("#Sleep_BG"), 0.4, {className:"sleep-timeline"}, "s8")
      .to($("#Insulin_BG"), 0.4, {className:"green-timeline"}, "s8")
      .to($("#Secretagogue_BG"), 0.4, {className:"green-timeline"}, "s8")
      .to($("#Incretins_BG"), 0.4, {className:"green-timeline"}, "s8")
      .to($("#Exercise_BG"), 0.4, {className:"exercise-button"}, "s9")
      .to($("#Metformin_BG"), 0.4, {className:"green-button"}, "s9")
      .to($("#TZD_BG"), 0.4, {className:"green-button"}, "s9")
      .to($("#Gliflozin_BG"), 0.4, {className:"green-button"}, "s9")
      .to($("#Sleep_BG"), 0.4, {className:"sleep-button"}, "s9")
      .to($("#Insulin_BG"), 0.4, {className:"green-button"}, "s9")
      .to($("#Secretagogue_BG"), 0.4, {className:"green-button"}, "s9")
      .to($("#Incretins_BG"), 0.4, {className:"green-button"}, "s9")
      .call(function(){autoButtz();});
   };


   function showMenu() {
      TweenMax.to($("#diabetes-menu"), 1.5, {top:"0px", ease: Bounce.easeOut});
      TweenMax.to($('#Arrow'), 0.35, {morphSVG:"#Arrow"});
      autoButtz();
   }

   function dimButtonsExcept(selectedButtonName) {
      $('#diabetes-menu')[0].appendChild($('#Dimmer')[0]);
      $('#diabetes-menu')[0].appendChild($(selectedButtonName)[0]);
      TweenMax.to($('#Dimmer'), 0.5, {opacity:"0.8"});
   }

   function hideMenu() {
      TweenMax.to($("#diabetes-menu"), 1, {top:"-518px", ease: Quart.easeIn});
      TweenMax.to($('#Arrow'), 0.35, {morphSVG:"#DownArrow"});
   }

   function loadNewVideo(videoID) {
      var newSrc = 'https://player.vimeo.com/video/' + videoID + '?api=1';
      vidPlayer.attr('src', newSrc);
      playAfterLoad = false;
      currentvideoID = videoID;
   }

   function buttonBlink(){
      var buttonBlink = new TimelineMax({delay:0.5});
      buttonBlink.to($("#Intro_BG"), 0.1, {className:"intro-timeline"})
      .to($("#Intro_BG"), 0.2, {className:"intro-button"})
      .to($("#Intro_BG"), 0.1, {className:"intro-timeline"})
      .to($("#Intro_BG"), 0.2, {className:"intro-button"})
      .to($("#Intro_BG"), 0.1, {className:"intro-timeline"})
      return buttonBlink;
   }

   function buttonMouseover(buttonBG, baseClass, timelineClass) {
      TweenMax.to(buttonBG, 0.2, {className:baseClass + ' ' + timelineClass});
   }

   function buttonMouseout(buttonBG, baseClass) {
      TweenMax.to(buttonBG, 0.2, {className:baseClass});
   }

   function buttonClick (event, vidID, buttonBG, baseClass, timelineClass) {
      TweenMax.to($("#Intro_BG"),0.1, {className:"intro-button"});
      TweenMax.to($("#Exercise_BG"),0.1, {className:"exercise-button"});
      TweenMax.to($("#Metformin_BG"),0.1, {className:"green-button"});
      TweenMax.to($("#TZD_BG"),0.1, {className:"green-button"});
      TweenMax.to($("#Gliflozin_BG"),0.1, {className:"green-button"});
      TweenMax.to($("#Sleep_BG"),0.1, {className:"sleep-button"});
      TweenMax.to($("#Insulin_BG"),0.1, {className:"green-button"});
      TweenMax.to($("#Secretagogue_BG"),0.1, {className:"green-button"});
      TweenMax.to($("#Incretins_BG"),0.1, {className:"green-button"});
      dimButtonsExcept("#" + event.currentTarget.id);
      loadNewVideo(vidID);
      TweenMax.killTweensOf(buttonBG);
      noneButtz();
      menuVO.pause();
      menuVO.load();
      var Button_clk = new TimelineMax({onComplete:clickComplete});
      Button_clk.to(buttonBG, 0.1, {className:baseClass + ' ' + timelineClass})
      .to(buttonBG, 0.2, {className:baseClass})
      .to(buttonBG, 0.1, {className:baseClass + ' ' + timelineClass})
      .to(buttonBG, 0.2, {className:baseClass})
      .to(buttonBG, 0.1, {className:baseClass + ' ' + timelineClass})
      .to(buttonBG, 0.2, {className:baseClass})
      .to(buttonBG, 0.1, {className:timelineClass});
   }

   function clickComplete() {
      var clkCmplt = new TimelineMax();
      clkCmplt.to(hideMenu(),0, {onComplete:playVideo});
   }

   function playVideo() {
      post('play');
      $('#Gradient_BG').css('pointer-events', 'none');
      $('#Drop-Down_Handle').css('pointer-events', 'auto');
      TweenMax.to($('#Dimmer'), 3, {opacity:"0"});
   }

   function selectedButtonBehavior (vidID, buttonBG, timelineClass) {
      if (currentvideoID === vidID) {
         buttonBG.css("pointer-events", "none");
         TweenMax.to($(buttonBG), 0, {className:timelineClass});
      }
   }

   //--Button Commands--//

   $('#Start_Button').on('mouseover', function (){
      TweenMax.killTweensOf($('#Start_Button'));
      //- TweenMax.killTweensOf($('#Click_To_Start'));
      //- TweenMax.to($('#Click_To_Start'), 0, {opacity:0});
      TweenMax.to($('#Start_Button'),0, {scale:1.1});
   });

   $('#Start_Button').on('mouseout', function (){
      //- TweenMax.to($('#Click_To_Start'), 0, {opacity:1});
      TweenMax.to($('#Start_Button'),0, {scale:1});
      TweenMax.to($('#Start_Button'), 0.7, {x:0, y:0, scale:1.05, repeat:-1, yoyo:true});
      //- TweenMax.to($('#Click_To_Start'), 1.5, {opacity:0, repeat:-1, yoyo:true});
   });

   $('#Diabetes_Title').on('click', function(){
      hideTitle();
      noneButtz();
      $('#diabetes-menu')[0].appendChild($('#Dimmer')[0]);
      $('#diabetes-menu')[0].appendChild($('#Button_Intro')[0]);
      TweenMax.to($('#Dimmer'), 0.5, {opacity:"0.8"});
      var tl1 = new TimelineMax({delay:1.2});
      tl1.to($("#diabetes-menu"), 1.5, {top:"0px", ease: Bounce.easeOut}, "Arrow-Intro");
      tl1.to($('#Drop-Down_Handle'), 0.35, {opacity:"1"}, "Arrow-Intro");
      tl1.to($('#Arrow'), 0.35, {morphSVG:"#Arrow"}, "Arrow-Intro");
      tl1.to($('#Gradient_BG'),0, {opacity:"0"});
      tl1.add(buttonBlink());
      tl1.to($("#diabetes-menu"), 1, {top:"-518px", ease: Quart.easeIn});
      tl1.to($('#Arrow'), 0.35, {morphSVG:"#DownArrow", onComplete:playVideo});
   });


   $('#Frame').on('click', function() {
      if ($('#diabetes-menu').css('top') === '0px') {
         hideMenu();
         post('play');
         menuVO.pause();
         menuVO.load();
    } else if (currentvideoID === '166980886') {
         showMenu_Intro();
         post('pause');
         menuVO.play();
    } else {
         showMenu();
         post('pause');
      }
   });

   $('#Button_Intro').on('mouseover', function() {
      if (currentvideoID === '166980886')
      {}
      else {
         buttonMouseover($("#Intro_BG"), "intro-button", "intro-timeline");
      }
   });

   $('#Button_Intro').on('mouseout', function() {
      if (currentvideoID === '166980886')
      {}
      else {
         buttonMouseout($("#Intro_BG"), "intro-button", "intro-timeline");
      }
   });

   $('#Button_Intro').on('click', function(event) {
      buttonClick(event, '166980886', $("#Intro_BG"),  "intro-button", "intro-timeline");
   });




   $('#Button_Exercise').on('mouseover', function() {
      if (currentvideoID === '166981308')
      {}
      else {
         buttonMouseover($("#Exercise_BG"), "exercise-button", "exercise-timeline");
      }
   });

   $('#Button_Exercise').on('mouseout', function() {
      if (currentvideoID === '166981308')
      {}
      else {
         buttonMouseout($("#Exercise_BG"), "exercise-button");
      }
   });

   $('#Button_Exercise').on('click', function(event) {
      buttonClick(event, '166981308', $("#Exercise_BG"), "exercise-button", "exercise-timeline")
   });




   $('#Button_Sleep').on('mouseover', function() {
      if (currentvideoID === '166981571')
      {}
      else {
         buttonMouseover($("#Sleep_BG"), "sleep-button", "sleep-timeline");
      }
   });

   $('#Button_Sleep').on('mouseout', function() {
      if (currentvideoID === '166981571')
      {}
      else {
         buttonMouseout($("#Sleep_BG"), "sleep-button", "sleep-timeline");
      }
   });

   $('#Button_Sleep').on('click', function(event) {
      buttonClick(event,'166981571', $("#Sleep_BG"), "sleep-button", "sleep-timeline");
   });




   $('#Button_Metformin').on('mouseover', function() {
      if (currentvideoID === '166981833')
      {}
      else {
         buttonMouseover($("#Metformin_BG"), "green-button", "green-timeline");
      }
   });

   $('#Button_Metformin').on('mouseout', function() {
      if (currentvideoID === '166981833')
      {}
      else {
         buttonMouseout($("#Metformin_BG"), "green-button", "green-timeline");
      }
   });

   $('#Button_Metformin').on('click', function(event) {
      buttonClick(event,'166981833', $("#Metformin_BG"), "green-button", "green-timeline");
   });




   $('#Button_Insulin').on('mouseover', function() {
      if (currentvideoID === '166982038')
      {}
      else {
         buttonMouseover($("#Insulin_BG"), "green-button", "green-timeline");
      }
   });

   $('#Button_Insulin').on('mouseout', function() {
      if (currentvideoID === '166982038')
      {}
      else {
         buttonMouseout($("#Insulin_BG"), "green-button", "green-timeline");
      }
   });

   $('#Button_Insulin').on('click', function(event) {
      buttonClick(event,'166982038', $("#Insulin_BG"), "green-button", "green-timeline");
   });




   $('#Button_TZD').on('mouseover', function() {
      if (currentvideoID === '166982558')
      {}
      else {
         buttonMouseover($("#TZD_BG"), "green-button", "green-timeline");
      }
   });

   $('#Button_TZD').on('mouseout', function() {
      if (currentvideoID === '166982558')
      {}
      else {
         buttonMouseout($("#TZD_BG"), "green-button", "green-timeline");
      }
   });

   $('#Button_TZD').on('click', function(event) {
      buttonClick(event,'166982558', $("#TZD_BG"), "green-button", "green-timeline");
   });




   $('#Button_Secretagogue').on('mouseover', function() {
      if (currentvideoID === '166982236')
      {}
      else {
         buttonMouseover($("#Secretagogue_BG"), "green-button", "green-timeline");
      }
   });

   $('#Button_Secretagogue').on('mouseout', function() {
      if (currentvideoID === '166982236')
      {}
      else {
         buttonMouseout($("#Secretagogue_BG"), "green-button", "green-timeline");
      }
   });

   $('#Button_Secretagogue').on('click', function(event) {
      buttonClick(event,'166982236', $("#Secretagogue_BG"), "green-button", "green-timeline");
   });




   $('#Button_Gliflozin').on('mouseover', function() {
      if (currentvideoID === '166982832')
      {}
      else {
         buttonMouseover($("#Gliflozin_BG"), "green-button", "green-timeline");
      }
   });

   $('#Button_Gliflozin').on('mouseout', function() {
      if (currentvideoID === '166982832')
      {}
      else {
         buttonMouseout($("#Gliflozin_BG"), "green-button", "green-timeline");
      }
   });

   $('#Button_Gliflozin').on('click', function(event) {
      buttonClick(event,'166982832', $("#Gliflozin_BG"), "green-button", "green-timeline");
   });




   $('#Button_Incretins').on('mouseover', function() {
      if (currentvideoID === '166983195')
      {}
      else {
         buttonMouseover($("#Incretins_BG"), "green-button", "green-timeline");
      }
   });

   $('#Button_Incretins').on('mouseout', function() {
      if (currentvideoID === '166983195')
      {}
      else {
         buttonMouseout($("#Incretins_BG"), "green-button", "green-timeline");
      }
   });

   $('#Button_Incretins').on('click', function(event) {
      buttonClick(event,'166983195', $("#Incretins_BG"), "green-button", "green-timeline");
   });




   // ------- Vimeo API Setup ------- //
   window.addEventListener('message', onMessageReceived, false);

   function onMessageReceived(event) {
      // Handle messages from the vimeo player only
      if (!(/^https?:\/\/player.vimeo.com/).test(event.origin)) {
         return false;
      }

      if (playerOrigin === '*') {
         playerOrigin = event.origin;
      }

      var data = JSON.parse(event.data);

      switch (data.event) {
         case 'ready':
            onReady();
            break;

         case 'finish':
            onFinish();
            break;
      }
   }

   // Helper function for sending a message to the vimeo player
   function post(action, value) {
      var data = {
         method: action
      };
      if (value) {
         data.value = value;
      }
      var message = JSON.stringify(data);
      vidPlayer[0].contentWindow.postMessage(message, playerOrigin);
   }
   // ------------------------------- //

});

/* global $, Draggable, TimelineLite, TweenMax, Bounce, Power2, Linear, Elastic */
$(document).ready(function() {
  // var svg = document.getElementsByTagName('svg')[0];
  var svg = $('#ReproductiveAdvantage')[0];
  var rocks = $('#rocks')[0].childNodes;
  var sliderGroup = $('#sliderGroup')[0];
  var numMice = 80;
  var mousePool = [];
  var tanMice = [];
  var blackMice = [];
  var owlPool = [];
  var activeOwls = [];
  var owlShadowPool = [];
  var activeOwlShadows = [];
  var sliderValue = 0;
  var atLeastCheckFreq = 8000;

  var multiplyChance = 0.05;
  var deathChance = 0.09;
  var basePredationChance = 0.005;
  var maxPredationPressure = 0.1;

  var birthPositions = [
    [
      {x: -50, y: -64},
      {x: 52, y: -64},
      {x: -50, y: 38},
      {x: 52, y: 38},
    ],
    [
      {x: 3, y: -83},
      {x: -62, y: -35},
      {x: 70, y: -35},
      {x: -40, y: 42},
      {x: 47, y: 42},
    ],
    [
      {x: 3, y: -83},
      {x: -63, y: -43},
      {x: 69, y: -43},
      {x: -63, y: 25},
      {x: 69, y: 25},
      {x: 3, y: 59},
    ],
  ];

  var i = 0;

  var rockTl = new TimelineLite();
  var rockAnims = [];

  for(i = 0; i<rocks.length; i++) {
    rockAnims.push(TweenMax.from(rocks[i], (4.5 * (rocks.length - i)/rocks.length) + 0.1, {scale: 0, transformOrigin: 'center'}));
  }
  rockTl.add(rockAnims, 0, 'start', 0.08);
  rockTl.pause();

  for(i = 0; i<numMice; i++) {
    var newMouse = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    newMouse.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#tanMouse');
    newMouse.style.transform = 'matrix(1,0,0,1,'+(Math.round(Math.random() * 1900)+10)+','+(Math.round(Math.random() * 1060)+10)+')';
    // newMouse.style.transformOrigin = 'center bottom';
    // following code caused a very noticable pause
    // TweenMax.set(newMouse, {
    //    x: Math.round(Math.random() * 1900)+10,
    //    y: Math.round(Math.random() * 1060)+10,
    //    transformOrigin: 'center bottom',
    // });


    svg.insertBefore(newMouse, sliderGroup);
    TweenMax.set(newMouse, {
      transformOrigin: 'center bottom'
    });
    mousePool.push(newMouse);
  }

  for(i = 0; i<49; i++) {
    tanMice.push(mousePool[i]);
    mousePool[i].setAttribute('class', 'tanMouse');
  }

  blackMice.push(mousePool[49]);
  mousePool[49].setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#blackMouse');
  mousePool.splice(0, 50);

  for(i = 0; i<mousePool.length; i++) {
    mousePool[i].style.visibility = 'hidden';
  }

  for(i = 0; i<tanMice.length; i++) {
    TweenMax.to(tanMice[i], Math.random()*0.2+0.2, {
      x: '+='+ (Math.random() * 200 - 100),
      y: '+='+ (Math.random() * 80 - 40),
      // ease: Power1.easeInOut,
      delay: Math.random()*0.8,
      onComplete: MouseBehaviorTree,
      onCompleteParams: [tanMice[i]]
    });
  }

  TweenMax.to(blackMice[0], Math.random()*0.2+0.2, {
    x: '+='+ (Math.random() * 200 - 100),
    y: '+='+ (Math.random() * 80 - 40),
    // ease: Power1.easeInOut,
    delay: Math.random()*0.8,
    onComplete: MouseBehaviorTree,
    onCompleteParams: [blackMice[0]]
  });

  setTimeout(atLeastOneCheck, atLeastCheckFreq);











  // ----- functions ----- //

  function MouseBehaviorTree(mouse) {
    var r = Math.random();

    var p = (mouse.getAttribute('xlink:href') === '#tanMouse') ? sliderValue : 1-sliderValue;
    var pc = (maxPredationPressure * p) + basePredationChance;
    var mc = pc + multiplyChance;
    var dc = mc + deathChance;

    if(r < pc) {
      PreyOnMouse(mouse);
    } else if(r < mc) {
      GiveBirth(mouse);
    } else if(r < dc) {
      KillMouse(mouse);
    } else {
      MoveMouse(mouse);
    }
  }

  function KillMouse(mouse) {
    var activeArray = (mouse.getAttribute('xlink:href') === '#tanMouse') ? tanMice : blackMice;
    if(activeArray.length > 1) {
      TweenMax.to(mouse, 0.5, {transformOrigin: 'center bottom', scaleX: mouse._gsTransform.scaleX, scaleY:mouse._gsTransform.scaleY * 0.6, ease: Bounce.easeOut});
      TweenMax.to(mouse, 0.3, {opacity:0, delay: 0.4, onComplete:returnMouseToPool, onCompleteParams:[mouse]});
    }else{
      MouseBehaviorTree(mouse);
    }
  }

  function PreyOnMouse(mouse) {
    var activeArray = (mouse.getAttribute('xlink:href') === '#tanMouse') ? tanMice : blackMice;
    if(activeArray.length > 1) {
      if(owlPool.length < 1) AddOwl();
      AnimateOwl(mouse);
    }else{
      MouseBehaviorTree(mouse);
    }
  }

  function AddOwl() {
    var newOwl = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    newOwl.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#owl');
    newOwl.style.transform = 'matrix(1,0,0,1,-30,-30)';
    svg.insertBefore(newOwl, sliderGroup);
    owlPool.push(newOwl);

    var newShadow = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    newShadow.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#owlShadow');
    newShadow.style.transform = 'matrix(1,0,0,1,-30,-30)';
    svg.insertBefore(newShadow, sliderGroup);
    owlShadowPool.push(newShadow);
  }

  function AnimateOwl(mouse) {
    var fromLeft = (Math.random() > 0.5);
    var start = fromLeft ? -800 : 800;
    // var segLength = 1;

    var owl = owlPool[0];
    owlPool.splice(0,1);
    activeOwls.push(owl);

    var shadow = owlShadowPool[0];
    owlShadowPool.splice(0,1);
    activeOwlShadows.push(shadow);

    owl.style.visibility = 'visible';
    // owl.style.transform = 'matrix(1,0,0,1,'+ (mouse._gsTransform.x + start) +','+ (mouse._gsTransform.y - 1100) +')';
    shadow.style.visibility = 'visible';
    // shadow.style.opacity = '0';
    // shadow.style.transform = 'matrix(1,0,0,1,'+ mouse._gsTransform.x + start +','+ mouse._gsTransform.y +')';

    TweenMax.set(owl, {x: mouse._gsTransform.x + start, y: mouse._gsTransform.y - 1400});
    TweenMax.to(owl, 1, {y:mouse._gsTransform.y, ease: Power2.easeOut});
    TweenMax.to(owl, 1, {x:mouse._gsTransform.x, ease: Linear.easeNone});
    TweenMax.to(owl, 1, {x:mouse._gsTransform.x - start, delay:1, ease: Linear.easeNone});
    TweenMax.to(owl, 1, {y:mouse._gsTransform.y - 1400, delay:1, ease: Power2.easeIn, onComplete:returnOwlToPool, onCompleteParams:[owl]});

    TweenMax.set(shadow, {x: mouse._gsTransform.x + start, y: mouse._gsTransform.y, opacity: 0});
    TweenMax.to(shadow, 1, {x:mouse._gsTransform.x, opacity: 0.43, ease: Linear.easeNone});
    TweenMax.to(shadow, 1, {x:mouse._gsTransform.x - start, opacity: 0, delay:1, ease: Linear.easeNone, onComplete:returnOwlShadowToPool, onCompleteParams:[shadow]});

    TweenMax.to(mouse, 1, {x:mouse._gsTransform.x - start, delay:1, ease: Linear.easeNone});
    TweenMax.to(mouse, 1, {y:mouse._gsTransform.y - 1400, delay:1, ease: Power2.easeIn, onComplete:returnMouseToPool, onCompleteParams:[mouse]});
  }

  function GiveBirth(mama) {
    // this whole system could be more elegant but, eh, time makes fools of us all... //
    var mamaTan = (mama.getAttribute('xlink:href') === '#tanMouse');
    var tanPopulation = tanMice.length / (tanMice.length + blackMice.length);
    var papaTan = (Math.random() <= tanPopulation);
    var mix = (mamaTan !== papaTan);

    var totalPups = Math.ceil(Math.random()*3) + 3;

    if(totalPups > mousePool.length) {
      totalPups = mousePool.length;
    }

    var tanPups;
    if(mix){
      tanPups = Math.round((totalPups * 0.5)+(Math.random() - 0.5));
    }else{
      tanPups = mamaTan ? totalPups : 0;
    }
    var blackPups = totalPups - tanPups;

    var birthPattern = (totalPups-4 >= 0) ? totalPups-4 : 1;
    var birthPosition = 0;
    var pos;

    for(var t = 0; t<tanPups; t++) {
      pos = birthPositions[birthPattern][birthPosition];
      var tp = mousePool[0];
      tp.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#tanMouse');
      tp.style.visibility = 'visible';
      TweenMax.fromTo(tp, 0.6, {
        x: mama._gsTransform.x,
        y: mama._gsTransform.y,
      },{
        x: mama._gsTransform.x + pos.x,
        y: mama._gsTransform.y + pos.y,
        delay:0.6,
        onComplete: MouseBehaviorTree,
        onCompleteParams: [tp],
      });
      TweenMax.fromTo(tp, 3, {scale:0.25}, {scale:1});
      tanMice.push(tp);
      svg.insertBefore(tp, mama);
      mousePool.splice(0,1);
      birthPosition++;
    }
    for(var b = 0; b<blackPups; b++) {
      pos = birthPositions[birthPattern][birthPosition];
      var bp = mousePool[0];
      bp.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#blackMouse');
      bp.style.visibility = 'visible';
      TweenMax.fromTo(bp, 0.6, {
        x: mama._gsTransform.x,
        y: mama._gsTransform.y,
      },{
        x: mama._gsTransform.x + pos.x,
        y: mama._gsTransform.y + pos.y,
        delay:0.6,
        onComplete: MouseBehaviorTree,
        onCompleteParams: [bp],
      });
      TweenMax.fromTo(bp, 3, {scale:0.25}, {scale:1});
      blackMice.push(bp);
      svg.insertBefore(bp, mama);
      mousePool.splice(0,1);
      birthPosition++;
    }

    TweenMax.to(mama, 0.6, {scale:mama._gsTransform.scaleX * 0.7, ease: Bounce.easeOut});
    TweenMax.to(mama, 0.3, {scale:1, ease: Elastic.easeOut.config(1, 0.5), delay:0.6, onComplete: MouseBehaviorTree, onCompleteParams: [mama] });
  }

  function MoveMouse(mouse) {
    var xOffset = 100;
    var yOffset = 40;

    if(mouse._gsTransform.x > 1870) {
      xOffset += mouse._gsTransform.x - 1870;
    }else if(mouse._gsTransform.x < 50) {
      xOffset += mouse._gsTransform.x - 50;
    }

    if(mouse._gsTransform.y > 980) {
      yOffset += mouse._gsTransform.y - 980;
    }else if(mouse._gsTransform.y < 50) {
      yOffset += mouse._gsTransform.y - 50;
    }

    TweenMax.to(mouse, Math.random()*0.7+0.2, {
      x: '+='+ ((Math.random() * 200) - xOffset),
      y: '+='+ ((Math.random() * 80) - yOffset),
      // ease: Power1.easeInOut,
      delay: Math.random()*0.2+0.2,
      onComplete: MouseBehaviorTree,
      onCompleteParams: [mouse]
    });
  }

  function returnMouseToPool(mouse) {
    mouse.style.visibility = 'hidden';
    TweenMax.set(mouse, {opacity:1, scale:1});
    var activeArray = (mouse.getAttribute('xlink:href') === '#tanMouse') ? tanMice : blackMice;
    var mIndex = activeArray.indexOf(mouse);
    if(mIndex >= 0) {
      activeArray.splice(mIndex, 1);
    }else{
      // console.log('mouse wasnt in proper pool');
    }
    mousePool.push(mouse);
  }

  function returnOwlToPool(owl) {
    owl.style.visibility = 'hidden';
    var oIndex = activeOwls.indexOf(owl);
    if(oIndex >= 0) {
      activeOwls.splice(oIndex, 1);
    }else{
      // console.log('owl wasnt in proper pool');
    }
    owlPool.push(owl);
  }

  function returnOwlShadowToPool(shadow) {
    shadow.style.visibility = 'hidden';
    var sIndex = activeOwlShadows.indexOf(shadow);
    if(sIndex >= 0) {
      activeOwlShadows.splice(sIndex, 1);
    }else{
      // console.log('shadow wasnt in proper pool');
    }
    owlShadowPool.push(shadow);
  }

  function atLeastOneCheck() { // this whole function could be abstracted more, just didn't for time...
    var newMouse;
    if(blackMice.length < 1) {
      if(mousePool.length < 1) {
        newMouse = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        newMouse.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#blackMouse');
        newMouse.style.transform = 'matrix(1,0,0,1,-20,-20)';
        svg.insertBefore(newMouse, sliderGroup);
        blackMice.push(newMouse);
      }else{
        mousePool[0].setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#blackMouse');
        mousePool[0].style.visibility = 'visible';
        TweenMax.set(mousePool[0], {x: -20, y: -20});
        MoveMouse(mousePool[0]);
        blackMice.push(mousePool[0]);
        mousePool.splice(0,1);
      }
    }
    if(tanMice.length < 1) {
      if(mousePool.length < 1) {
        newMouse = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        newMouse.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#tanMouse');
        newMouse.style.transform = 'matrix(1,0,0,1,-20,-20)';
        svg.insertBefore(newMouse, sliderGroup);
        tanMice.push(newMouse);
      }else{
        mousePool[0].setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#tanMouse');
        mousePool[0].style.visibility = 'visible';
        TweenMax.set(mousePool[0], {x: -20, y: -20});
        MoveMouse(mousePool[0]);
        tanMice.push(mousePool[0]);
        mousePool.splice(0,1);
      }
    }
    setTimeout(atLeastOneCheck, atLeastCheckFreq);
  }


  // ----- slider stuff ----- //


  var darkSide = $('#sliderDarkSide')[0];
  var dragMin = 111;
  var dragMax = 1824;

  Draggable.create('#sliderHandle',{
    type: 'x',
    bounds: document.getElementById('sliderGroup'),
    cursor: 'ew-resize',
    onPress: function() {
      // svg.style.cursor = 'ew-resize';
    },
    onDrag: function() {
      darkSide.setAttributeNS(null, 'width', (this.x-105).toString());
      sliderValue = (this.x-dragMin)/(dragMax-dragMin);
      rockTl.progress(sliderValue);
    },
    onDragEnd: function() {
      // svg.style.cursor = 'default';
    },
  });
});

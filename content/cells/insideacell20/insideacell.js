let videoPlayer;
//--- vimeo ids ---//
const animalInstructionsId = 443046172;
const animalReadId = 443006450;
const animalContainerId = 443045320;
const animalEnergyId = 443006921;
const animalWasteId = 443049604;

const plantInstructionsId = 443207586;
const plantReadId = 442787779;
const plantContainerId = 442787780;
const plantEnergyId = 443520067;
const plantWasteId = 442787781;

const bacterialInstructionsId = 444532322;
const bacterialReadId = 444711674;
const bacterialContainerId = 445053210;
const bacterialEnergyId = 445521465;
const bacterialWasteId = 445689961;

let animalAnimations = [];
let plantAnimations = [];
let bacterialAnimations = [];


$(function() {
  initVimeoPlayer();
  initButtons();
  initMenuAnimations();
  hideMenu("animal", 0);
  hideMenu("plant", 0);
  hideMenu("bacterial", 0);
  initFirstMenu();
});

function initVimeoPlayer () {
  videoPlayer = new Vimeo.Player($('#video-player'), {id:animalInstructionsId, width:920});
  videoPlayer.on('ended', finishedVideo);
  $('#video-player').addClass('hidden');
  gsap.set($('#video-player'), {scale:0.1});
}

function initButtons () {
  $('#animal-bg').click(e => { showAnimalMenu(); });
  $('#animal-read-instructions-button').click(e => { showVideo(animalReadId); });
  $('#animal-instructions-button').click(e => { showVideo(animalInstructionsId); });
  $('#animal-container-button').click(e => { showVideo(animalContainerId); });
  $('#animal-energy-button').click(e => { showVideo(animalEnergyId); });
  $('#animal-waste-button').click(e => { showVideo(animalWasteId); });

  $('#plant-bg').click(e => { showPlantMenu(); });
  $('#plant-read-instructions-button').click(e => { showVideo(plantReadId); });
  $('#plant-instructions-button').click(e => { showVideo(plantInstructionsId); });
  $('#plant-container-button').click(e => { showVideo(plantContainerId); });
  $('#plant-energy-button').click(e => { showVideo(plantEnergyId); });
  $('#plant-waste-button').click(e => { showVideo(plantWasteId); });

  $('#bacterial-bg').click(e => { showBacterialMenu(); });
  $('#bacterial-read-instructions-button').click(e => { showVideo(bacterialReadId); });
  $('#bacterial-instructions-button').click(e => { showVideo(bacterialInstructionsId); });
  $('#bacterial-container-button').click(e => { showVideo(bacterialContainerId); });
  $('#bacterial-energy-button').click(e => { showVideo(bacterialEnergyId); });
  $('#bacterial-waste-button').click(e => { showVideo(bacterialWasteId); });

  $('#video-close').click(e => { finishedVideo(); });
}

function initMenuAnimations () {
  CustomEase.create("sineRepeat", "M1,0.5L1,0.5c-0.1-0.7-0.4-0.7-0.5,0l0,0C0.4,1.2,0.1,1.2,0,0.5l0,0");

  // animal animations
  document.querySelectorAll("#animal-title path").forEach(el => {
    animalAnimations.push(floaty(el, gsap.utils.random(4,6), "+=random(-20,20)", "+=random(-5,5)").seek(gsap.utils.random(0,2)));
  });
  document.querySelectorAll(".animal-protein").forEach(el => {
    animalAnimations.push(floaty(el, gsap.utils.random(4,6), "+=random(-30,30)", "+=random(-5,5)").seek(gsap.utils.random(0,2)));
  });

  animalAnimations.push(floaty($('#animal-read-instructions-button'), 5.5, "+=10", "-1.5").seek(gsap.utils.random(0,2)));
  animalAnimations.push(floaty($('#animal-instructions-button'), 4.4, "+=-15", "-1").seek(gsap.utils.random(0,2)));
  animalAnimations.push(floaty($('#animal-container-button'), 5.0, "+=20", "-1").seek(gsap.utils.random(0,2)));
  animalAnimations.push(floaty($('#animal-energy-button'), 4.2, "+=25", "1.2").seek(gsap.utils.random(0,2)));
  animalAnimations.push(floaty($('#animal-waste-button'), 5.8, "+=-20", "0.5").seek(gsap.utils.random(0,2)));

  // plant animations
  document.querySelectorAll("#plant-title path").forEach(el => {
    plantAnimations.push(floaty(el, gsap.utils.random(4,6), "+=random(-20,20)", "+=random(-5,5)").seek(gsap.utils.random(0,2)));
  });
  document.querySelectorAll(".plant-protein").forEach(el => {
    plantAnimations.push(floaty(el, gsap.utils.random(4,6), "+=random(-30,30)", "+=random(-5,5)").seek(gsap.utils.random(0,2)));
  });

  plantAnimations.push(floaty($('#plant-read-instructions-button'), 5.5, "+=10", "-1.5").seek(gsap.utils.random(0,2)));
  plantAnimations.push(floaty($('#plant-instructions-button'), 4.4, "+=-15", "-1").seek(gsap.utils.random(0,2)));
  plantAnimations.push(floaty($('#plant-container-button'), 5.0, "+=20", "-1").seek(gsap.utils.random(0,2)));
  plantAnimations.push(floaty($('#plant-energy-button'), 4.2, "+=25", "1.2").seek(gsap.utils.random(0,2)));
  plantAnimations.push(floaty($('#plant-waste-button'), 5.8, "+=-20", "0.5").seek(gsap.utils.random(0,2)));

  // bacterial animations
  document.querySelectorAll("#bacterial-title path").forEach(el => {
    bacterialAnimations.push(floaty(el, gsap.utils.random(4,6), "+=random(-20,20)", "+=random(-5,5)").seek(gsap.utils.random(0,2)));
  });
  document.querySelectorAll(".bacterial-protein").forEach(el => {
    bacterialAnimations.push(floaty(el, gsap.utils.random(4,6), "+=random(-30,30)", "+=random(-5,5)").seek(gsap.utils.random(0,2)));
  });

  bacterialAnimations.push(floaty($('#bacterial-read-instructions-button'), 5.5, "+=10", "-1.5").seek(gsap.utils.random(0,2)));
  bacterialAnimations.push(floaty($('#bacterial-instructions-button'), 4.4, "+=-15", "-1").seek(gsap.utils.random(0,2)));
  bacterialAnimations.push(floaty($('#bacterial-container-button'), 5.0, "+=20", "-1").seek(gsap.utils.random(0,2)));
  bacterialAnimations.push(floaty($('#bacterial-energy-button'), 4.2, "+=25", "1.2").seek(gsap.utils.random(0,2)));
  bacterialAnimations.push(floaty($('#bacterial-waste-button'), 5.8, "+=-20", "0.5").seek(gsap.utils.random(0,2)));
}

function floaty (target, duration, y, rotation) {
  let tl = gsap.timeline({paused:true});
  tl.to(target, {
    duration: duration/2,
    y: y,
    transformOrigin: "50%,50%",
    ease: Sine.easeInOut,
    repeat: -1,
    yoyo: true
  }, 0);

  tl.to(target, {
    duration: duration,
    rotation: rotation,
    transformOrigin: "50%,50%",
    ease: 'sineRepeat',
    repeat: -1
  }, 0);

  return tl;
}

function showVideo (id) {
  videoPlayer.loadVideo(id).then(function(id) {
    $('#video-player').removeClass('hidden');
    gsap.to($('#video-player'), 0.3, {scale:1, onComplete:()=>{
      videoPlayer.play();
    }});
  }).catch(function(error) {
    console.dir(error);
  });
}

function finishedVideo () {
  videoPlayer.pause();
  gsap.to($('#video-player'), 0.3, {scale:0.1, onComplete:()=>{
    videoPlayer.pause();
    $('#video-player').addClass('hidden');
  }});
}


function showMenu (cellType, duration) {
  gsap.to("#"+ cellType +"-title", {duration: duration, delay:0.15, opacity: 1, pointerEvents:'all'});
  gsap.to("#"+ cellType +"-subtitle", {duration: duration, delay:0.5, opacity: 1, pointerEvents:'all'});
  gsap.to("#"+ cellType +"-instructions-button", {duration: duration, delay:0.3, opacity: 1, pointerEvents:'all'});
  gsap.to("#"+ cellType +"-read-instructions-button", {duration: duration, delay:0.3, opacity: 1, pointerEvents:'all'});
  gsap.to("#"+ cellType +"-container-button", {duration: duration, delay:0.3, opacity: 1, pointerEvents:'all'});
  gsap.to("#"+ cellType +"-energy-button", {duration: duration, delay:0.3, opacity: 1, pointerEvents:'all'});
  gsap.to("#"+ cellType +"-waste-button", {duration: duration, delay:0.3, opacity: 1, pointerEvents:'all'});
  gsap.to($("."+ cellType +"-protein"), {duration: duration, stagger:0.03, delay:0.3, opacity: 1, pointerEvents:'all'});
}

function hideMenu (cellType, duration) {
  gsap.to("#"+ cellType +"-title", {duration: duration, opacity: 0, pointerEvents:'none'});
  gsap.to("#"+ cellType +"-subtitle", {duration: duration, opacity: 0, pointerEvents:'none'});
  gsap.to("#"+ cellType +"-instructions-button", {duration: duration, opacity: 0, pointerEvents:'none'});
  gsap.to("#"+ cellType +"-read-instructions-button", {duration: duration, opacity: 0, pointerEvents:'none'});
  gsap.to("#"+ cellType +"-container-button", {duration: duration, opacity: 0, pointerEvents:'none'});
  gsap.to("#"+ cellType +"-energy-button", {duration: duration, opacity: 0, pointerEvents:'none'});
  gsap.to("#"+ cellType +"-waste-button", {duration: duration, opacity: 0, pointerEvents:'none'});
  gsap.to($("."+ cellType +"-protein"), {duration: duration, opacity: 0, pointerEvents:'none'});
}

function initFirstMenu () {
  gsap.set("#animal-bg", {x:455, y:-268, scale: 0.42, fill:'#5CF0FF', svgOrigin: "960 540", pointerEvents: 'all', cursor: 'pointer'});
  gsap.set("#plant-bg", {x:-380, y:220, scale: 0.525, fill:'#45FFBC', svgOrigin: "960 540", pointerEvents: 'all', cursor: 'pointer'});
  gsap.set("#bacterial-bg", {x:500, y:140, scale: 0.108, fill:'#FFFB71', svgOrigin: "960 540", pointerEvents: 'all', cursor: 'pointer'});

  let atl = gsap.timeline({ paused:true });
  atl.to("#animal-bg", {duration:0.2, scale: 0.46});
  $("#animal-bg").hover(e => { atl.play(); }, e => { atl.reverse(); });

  let ptl = gsap.timeline({ paused:true });
  ptl.to("#plant-bg", {duration:0.2, scale: 0.55});
  $("#plant-bg").hover(e => { ptl.play(); }, e => { ptl.reverse(); });

  let btl = gsap.timeline({ paused:true });
  btl.to("#bacterial-bg", {duration:0.2, scale: 0.12});
  $("#bacterial-bg").hover(e => { btl.play(); }, e => { btl.reverse(); });
}

let firstMenuShown = true;
function hideFirstMenu () {
  if(!firstMenuShown) return;
  gsap.to("#bg", {duration: 0.3, backgroundColor:'#fff'});
  gsap.to("#start-labels", {duration: 0.3, opacity: 0});

  $("#animal-bg").unbind('mouseenter mouseleave');
  $("#plant-bg").unbind('mouseenter mouseleave');
  $("#bacterial-bg").unbind('mouseenter mouseleave');

  // let atl = gsap.timeline({ paused:true });
  // atl.to("#animal-bg", {duration:0.2, scale: 0.16});
  // $("#animal-bg").unbind('mouseenter mouseleave').hover(e => { atl.play(); }, e => { atl.reverse(); });

  // let ptl = gsap.timeline({ paused:true });
  // ptl.to("#plant-bg", {duration:0.2, scale: 0.16});
  // $("#plant-bg").unbind('mouseenter mouseleave').hover(e => { ptl.play(); }, e => { ptl.reverse(); });

  // let btl = gsap.timeline({ paused:true });
  // btl.to("#bacterial-bg", {duration:0.2, scale: 0.17});
  // $("#bacterial-bg").unbind('mouseenter mouseleave').hover(e => { btl.play(); }, e => { btl.reverse(); });

  firstMenuShown = false;
}

function showAnimalMenu () {
  hideFirstMenu();
  gsap.to("#plant-bg", {duration: 0.5, x:-820, y:-420, scale: 0.14, fill:'#45FFBC', pointerEvents:'all'});
  gsap.to("#bacterial-bg", {duration: 0.5, x:820, y:-420, scale: 0.15, fill:'#FFFB71', pointerEvents:'all'});
  gsap.to("#animal-small-label-l", {duration: 0.3, opacity: 0});
  gsap.to("#animal-small-label-r", {duration: 0.3, opacity: 0});
  gsap.to("#plant-small-label", {duration: 0.3, delay: 0.3, opacity: 1});
  gsap.to("#bacteria-small-label", {duration: 0.3, delay: 0.3, opacity: 1});

  gsap.to("#animal-bg", {duration: 0.5, x:0, y:0, scale: 1, fill:'#00473D', pointerEvents:'none'});
  showMenu("animal", 0.3);
  hideMenu("plant", 0.3);
  hideMenu("bacterial", 0.3);

  animalAnimations.forEach(tl => { tl.play(); });
  plantAnimations.forEach(tl => { tl.pause(); });
  bacterialAnimations.forEach(tl => { tl.pause(); });
}

function showPlantMenu () {
  hideFirstMenu();
  gsap.to("#animal-bg", {duration: 0.5, x:-825, y:-420, scale: 0.14, fill:'#5CF0FF', pointerEvents:'all'});
  gsap.to("#bacterial-bg", {duration: 0.5, x:820, y:-420, scale: 0.15, fill:'#FFFB71', pointerEvents:'all'});
  gsap.to("#animal-small-label-l", {duration: 0.3, delay: 0.3, opacity: 1});
  gsap.to("#animal-small-label-r", {duration: 0.3, opacity: 0});
  gsap.to("#plant-small-label", {duration: 0.3, opacity: 0});
  gsap.to("#bacteria-small-label", {duration: 0.3, delay: 0.3, opacity: 1});

  gsap.to("#plant-bg", {duration: 0.5, x:0, y:0, scale: 1, fill:'#00473D', pointerEvents:'none'});
  showMenu("plant", 0.3);
  hideMenu("animal", 0.3);
  hideMenu("bacterial", 0.3);

  plantAnimations.forEach(tl => { tl.play(); });
  animalAnimations.forEach(tl => { tl.pause(); });
  bacterialAnimations.forEach(tl => { tl.pause(); });
}

function showBacterialMenu () {
  hideFirstMenu();
  gsap.to("#plant-bg", {duration: 0.5, x:-820, y:-420, scale: 0.14, fill:'#45FFBC', pointerEvents:'all'});
  gsap.to("#animal-bg", {duration: 0.5, x:825, y:-420, scale: 0.14, fill:'#5CF0FF', pointerEvents:'all'});
  gsap.to("#animal-small-label-l", {duration: 0.3, opacity: 0});
  gsap.to("#animal-small-label-r", {duration: 0.3, delay: 0.3, opacity: 1});
  gsap.to("#plant-small-label", {duration: 0.3, delay: 0.3, opacity: 1});
  gsap.to("#bacteria-small-label", {duration: 0.3, opacity: 0});

  gsap.to("#bacterial-bg", {duration: 0.5, x:0, y:0, scale: 1, fill:'#00473D', pointerEvents:'none'});
  showMenu("bacterial", 0.3);
  hideMenu("plant", 0.3);
  hideMenu("animal", 0.3);

  bacterialAnimations.forEach(tl => { tl.play(); });
  animalAnimations.forEach(tl => { tl.pause(); });
  plantAnimations.forEach(tl => { tl.pause(); });
}
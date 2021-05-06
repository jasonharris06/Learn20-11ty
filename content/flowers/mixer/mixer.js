$(function(){
  $('#target-lewisii-petal').css('background-color', 'rgb(232,51,100)');
  $('#target-cardinalis-petal').css('background-color', 'rgb(212,6,4)');

  const petalLewis = $('#user-lewisii-petal');
  const guideLewis = $('#user-lewisii-guides');
  const petalCardin = $('#user-cardinalis-petal');
  const guideCardin = $('#user-cardinalis-guides');
  const petalAnthoGene = $('#petal-genes').find('.antho-gene');
  const petalCaroGene = $('#petal-genes').find('.caro-gene');
  const guideAnthoGene = $('#guide-genes').find('.antho-gene');
  const guideCaroGene = $('#guide-genes').find('.caro-gene');

  let petalAnthoProteins = $('#petal-proteins').find('.antho').toArray();
  let petalCaroProteins = $('#petal-proteins').find('.caro').toArray();
  let guideAnthoProteins = $('#guide-proteins').find('.antho').toArray();
  let guideCaroProteins = $('#guide-proteins').find('.caro').toArray();

  shuffleArray(petalAnthoProteins);
  shuffleArray(petalCaroProteins);
  shuffleArray(guideAnthoProteins);
  shuffleArray(guideCaroProteins);

  let lewValues = [[rando(),rando()],[rando(),rando()]];
  let carValues = [[rando(),rando()],[rando(),rando()]];

  let first = true;

  $('#lewisii-button').click(function(){
    $('#target-lewisii').show();
    $('#target-cardinalis').hide();
    $('#user-lewisii').show();
    $('#user-cardinalis').hide();

    currUserPetal = petalLewis;
    currUserGuides = guideLewis;
    swapSliderValues(carValues, lewValues, !first);
    if(first) unfadeElements();

    first = false;
  });
  $('#cardinalis-button').click(function(){
    $('#target-lewisii').hide();
    $('#target-cardinalis').show();
    $('#user-lewisii').hide();
    $('#user-cardinalis').show();

    currUserPetal = petalCardin;
    currUserGuides = guideCardin;
    swapSliderValues(lewValues, carValues, !first);
    if(first) unfadeElements();

    first = false;
  });

  $('#petal-antho-slider').on('input', function(e){
    if(e.target.value < 50)
      currAnthoP = interpolateColor(minAntho, midAntho, e.target.value/50);
    else
      currAnthoP = interpolateColor(midAntho, maxAntho, (e.target.value - 50)/50);
    currUserPetal.css('background-color', makeColorString(currAnthoP, currCaroP));
    petalAnthoGene.css('opacity', e.target.value/100);
    if(numPetalAnthoPro != calcProteinNumber(e.target.value)) {
      numPetalAnthoPro = calcProteinNumber(e.target.value);
      petalAnthoProteins.forEach(function(element, index){
        if(index < numPetalAnthoPro) $(element).addClass('visible');
        else $(element).removeClass('visible');
      });
    }
  });
  $('#petal-caro-slider').on('input', function(e){
    if(e.target.value < 50)
      currCaroP = interpolateColor(minCaro, midCaro, e.target.value/50);
    else
      currCaroP = interpolateColor(midCaro, maxCaro, (e.target.value - 50)/50);
    currUserPetal.css('background-color', makeColorString(currAnthoP, currCaroP));
    petalCaroGene.css('opacity', e.target.value/100);
    if(numPetalCaroPro != calcProteinNumber(e.target.value)) {
      numPetalCaroPro = calcProteinNumber(e.target.value);
      petalCaroProteins.forEach(function(element, index){
        if(index < numPetalCaroPro) $(element).addClass('visible');
        else $(element).removeClass('visible');
      });
    }
  });

  $('#guide-antho-slider').on('input', function(e){
    if(e.target.value < 50)
      currAnthoG = interpolateColor(minAntho, midAntho, e.target.value/50);
    else
      currAnthoG = interpolateColor(midAntho, maxAntho, (e.target.value - 50)/50);
    currUserGuides.css('background-color', makeColorString(currAnthoG, currCaroG));
    guideAnthoGene.css('opacity', e.target.value/100);
    if(numGuideAnthoPro != calcProteinNumber(e.target.value)) {
      numGuideAnthoPro = calcProteinNumber(e.target.value);
      guideAnthoProteins.forEach(function(element, index){
        if(index < numGuideAnthoPro) $(element).addClass('visible');
        else $(element).removeClass('visible');
      });
    }
  });
  $('#guide-caro-slider').on('input', function(e){
    if(e.target.value < 50)
      currCaroG = interpolateColor(minCaro, midCaro, e.target.value/50);
    else
      currCaroG = interpolateColor(midCaro, maxCaro, (e.target.value - 50)/50);
    currUserGuides.css('background-color', makeColorString(currAnthoG, currCaroG));
    guideCaroGene.css('opacity', e.target.value/100);
    if(numGuideCaroPro != calcProteinNumber(e.target.value)) {
      numGuideCaroPro = calcProteinNumber(e.target.value);
      guideCaroProteins.forEach(function(element, index){
        if(index < numGuideCaroPro) $(element).addClass('visible');
        else $(element).removeClass('visible');
      });
    }
  });


  const container = $('#daf-container')[0];
  const item = $('#daf-content')[0];

  function updateItemWidth () {
     var pad = parseInt(window.getComputedStyle(container).paddingLeft);
     var newScale = (container.offsetWidth - pad) / 865;
     item.style.transform = "scale(" + newScale + "," + newScale + ")";
  };

  updateItemWidth();
  window.addEventListener('resize', updateItemWidth);
});

let currUserPetal;
let currUserGuides;

const maxAntho = [0.9254901961,0.05882352941,0.4039215686];
const midAntho = [0.9607843137,0.4156862745,0.6705882353];
const minAntho = [1,0.9,1];
let currAnthoP = [];
let currAnthoG = [];

const maxCaro = [0.8980392157,0.4235294118,0.03921568627];
// const midCaro = [1,0.8784313725,0.262745098];
const midCaro = [1,0.8392156863,0];
const minCaro = [1,1,0.78];
let currCaroP = [];
let currCaroG = [];

let numPetalAnthoPro = 0;
let numPetalCaroPro = 0;
let numGuideAnthoPro = 0;
let numGuideCaroPro = 0;

function interpolateColor(color1, color2, factor) {
  var result = color1.slice();
  for (var i=0;i<3;i++) {
    result[i] = result[i] + factor*(color2[i]-color1[i]);
  }
  return result;
};

function makeColorString(antho, caro) {
  return `rgb(
    ${Math.round(antho[0]*caro[0]*255)},
    ${Math.round(antho[1]*caro[1]*255)},
    ${Math.round(antho[2]*caro[2]*255)})`;
}

// increment = maxValue/numProteins // 100/8 == 12.5; //
const increment = 12.5;
function calcProteinNumber(value) {
  return Math.round(value/increment);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function rando() {
  return Math.round(Math.random() * 100);
}

function swapSliderValues (prevSet, nextSet, shouldStore) {
  if(shouldStore) {
    prevSet[0][0] = $('#petal-antho-slider').val();
    prevSet[0][1] = $('#petal-caro-slider').val();
    prevSet[1][0] = $('#guide-antho-slider').val();
    prevSet[1][1] = $('#guide-caro-slider').val();
  }

  $('#petal-antho-slider').val(nextSet[0][0]).trigger('input');
  $('#petal-caro-slider').val(nextSet[0][1]).trigger('input');
  $('#guide-antho-slider').val(nextSet[1][0]).trigger('input');
  $('#guide-caro-slider').val(nextSet[1][1]).trigger('input');
}

function unfadeElements () {
  $('#target-container').removeClass('faded');
  $('#user-container').removeClass('faded');
  $('#row-2').removeClass('faded');
  $('#row-3').removeClass('faded');
  $('#pick-container').find('.daf-h2').removeClass('pulsate');
}

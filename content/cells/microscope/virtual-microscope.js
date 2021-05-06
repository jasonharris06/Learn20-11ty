const boxWidth = 801;

const iconSize = 94;
const iconY = 251;
const iconXOffset = 281;

const iconLabelSize = 133.5;
const iconLabelY = 208;
const iconLabelXOffset = 153.5;

const iconHitY = 262;
const iconHitXOffset = 1718;

const iconArrowXOffset = 26;

const boxLabelLetterCount = 31;

let selectedSet = "res";
let selectedMag = 0;
let infected = false;

const setTitles = {
  res: "Respiratory System",
  dig: "Digestive System",
  pl: "Plant Shoot System"
}

$(function() {
  var container = $('#container');
  var contents = $('#contents');

  function updateItemWidth () {
     var pad = parseInt(container.css('padding-left'));
     var newScale = (container.outerWidth() - pad) / 1130;
     contents.css('transform',`scale(${newScale}, ${newScale})`);
  };

  updateItemWidth();
  window.addEventListener('resize', updateItemWidth);


  gsap.set($("#magnification-box"), {y: 100});

  $('#drop-button').click(e => {
    $('#drop-menu').toggleClass('open');
  });

  $('.drop-menu-item').click(e => {
    selectedSet = $(e.target).attr('data-selection');
    $('#drop-button').text(setTitles[selectedSet]);
    // loadImages(magnifications[selectedMag]);
    $('#organism-hit').click();
  });

  $(window).click(e => {
    if(!e.target.matches('#drop-button')) {
      $('#drop-menu').removeClass('open');
    }
  });

  $('#infected-switch input').click(e => {
    infected = !infected;
    loadImages(magnifications[selectedMag]);
  });

  $('#labels-switch input').click(e => {
    $('#labels').toggleClass("hidden");
  });



  // var instance = panzoom($('#image')[0], {
  //   bounds: true,
  //   boundsPadding: 0.9,
  //   beforeWheel: function(e) {
  //     var shouldIgnore = !e.altKey;
  //     return shouldIgnore;
  //   }
  // });

  $('#atom-icon').hide();
  $('#atom-label').hide();
  $('#atom-hit').hide();

  $('#protein-icon').hide();
  $('#protein-label').hide();
  $('#protein-hit').hide();

  $('#molecule-icon').hide();
  $('#molecule-label').hide();
  $('#molecule-hit').hide();

  let magnifications = [
    {
      shortname: 'system',
      icon: $('#organism-icon'),
      label: $('#organism-label'),
      hit: $('#organism-hit'),
      title: 'organ system',
      resMainImage: 'images/Resp_System.jpg',
      resMiniImage: 'images/Human.jpg',
      resTitle: 'Organs of the Respiratory System',
      resBody: 'The respiratory system brings air in and out of the body, delivering oxygen and taking away carbon dioxide.',
      resMainImageI: 'images/Resp_System.jpg',
      resMiniImageI: 'images/Human.jpg',
      resTitleI: 'Organs of the Respiratory System',
      resBodyI: 'The flu makes you feel bad all over. Much of what you feel is from your immune system. Parts of your immune system move through the bloodstream around your whole body as they work to kill the virus.',
      digMainImage: 'images/Dig_System.jpg',
      digMiniImage: 'images/Human.jpg',
      digTitle: 'Organs of the Digestive System',
      digBody: 'The digestive system is a giant tube that takes in nutrients for the body.',
      digMainImageI: 'images/Dig_System.jpg',
      digMiniImageI: 'images/Human.jpg',
      digTitleI: 'Organs of the Digestive System',
      digBodyI: 'The digestive system is a giant tube that takes in nutrients for the body.',
      plMainImage: 'images/Plant_System.jpg',
      plMiniImage: 'images/Plant.jpg',
      plTitle: 'Organs of the Plant Shoot System',
      plBody: 'The shoot system includes the parts of a plant that are above the ground (or above the root system).',
      plMainImageI: 'images/Plant_System.jpg',
      plMiniImageI: 'images/Plant.jpg',
      plTitleI: 'Organs of the Plant Shoot System',
      plBodyI: 'The shoot system includes the parts of a plant that are above the ground (or above the root system).',
    },{
      shortname: 'organ',
      icon: $('#organ-icon'),
      label: $('#organ-label'),
      hit: $('#organ-hit'),
      title: 'organ',
      resMainImage: 'images/Resp_Organ.jpg',
      resMiniImage: 'images/Resp_System.jpg',
      resTitle: 'Tissues of the Bronchus',
      resBody: '(cross-section) (BRAHN-kus)',
      digMainImage: 'images/Dig_Organ.jpg',
      digMiniImage: 'images/Dig_System.jpg',
      digTitle: 'Tissues of the Small Intestine',
      digBody: '(cross-section) The inside of the small intestine is covered with finger-like structures called villi [VILL-ee]',
      plMainImage: 'images/Plant_Organ.jpg',
      plMiniImage: 'images/Plant_System.jpg',
      plTitle: 'Tissues of the Leaf',
      plBody: '(cross-section)',
    },{
      shortname: 'tissue',
      icon: $('#tissue-icon'),
      label: $('#tissue-label'),
      hit: $('#tissue-hit'),
      title: 'tissue',
      resMainImage: 'images/Resp_Tissue.jpg',
      resMiniImage: 'images/Resp_Organ.jpg',
      resTitle: 'Cell Types of the Airway Epithelium',
      resBody: 'These cells fit together tightly, forming a barrier that keeps harmful things away from the cells and tissues underneath.',
      digMainImage: 'images/Dig_Tissue.jpg',
      digMiniImage: 'images/Dig_Organ.jpg',
      digTitle: 'Cell Types of the Intestinal Epithelium',
      digBody: '',
      plMainImage: 'images/Plant_Tissue.jpg',
      plMiniImage: 'images/Plant_Organ.jpg',
      plTitle: 'Cell Types in Leaf Tissue',
      plBody: '(cross-section)',
    },{
      shortname: 'cell',
      icon: $('#cell-icon'),
      label: $('#cell-label'),
      hit: $('#cell-hit'),
      title: 'cell',
      resMainImage: 'images/Resp_Cell.jpg',
      resMiniImage: 'images/Resp_Tissue.jpg',
      resTitle: 'Ciliated Epithelial Cell',
      resBody: '',
      digMainImage: 'images/Dig_Cell.jpg',
      digMiniImage: 'images/Dig_Tissue.jpg',
      digTitle: 'Intestinal Absorptive Cell',
      digBody: '',
      plMainImage: 'images/Plant_Cell.jpg',
      plMiniImage: 'images/Plant_Tissue.jpg',
      plTitle: 'Spongy Parenchyma Cell',
      plBody: '',
    // },{
    //   icon: $('#protein-icon'),
    //   label: $('#protein-label'),
    //   hit: $('#protein-hit'),
    //   title: 'protein',
    //   mainImage: 'images/human.jpg',
    // },{
    //   icon: $('#molecule-icon'),
    //   label: $('#molecule-label'),
    //   hit: $('#molecule-hit'),
    //   title: 'molecule',
    //   mainImage: 'images/human.jpg',
    },
    // {
    //   icon: $('#atom-icon'),
    //   label: $('#atom-label'),
    //   hit: $('#atom-hit'),
    // }
  ];

  const leftoverSpace = boxWidth - (iconSize * magnifications.length);
  const perIcon = leftoverSpace / magnifications.length;

  magnifications.forEach((o,i) => {

    let indexOffset = i * (iconSize + perIcon);
    indexOffset += perIcon * 0.5;

    o.icon.css('transform',`translate(${iconXOffset + indexOffset}px, ${iconY}px)`);
    o.label.css('transform',`translate(${iconLabelXOffset + indexOffset}px, ${iconLabelY}px)`);
    o.hit.css('transform',`translate(${i * (iconSize + perIcon) + iconHitXOffset}px, 0px)`);
    o.hit.attr('width', iconSize + perIcon);
    o.hit.attr('y', iconHitY);

    if(i == 0) {
      $('#selection-arrow').css('transform',`translate(${iconArrowXOffset + indexOffset}px, 0px)`);
      $('#magnification-label').html(magString(o.title));
    }

    setTimeout(()=>{o.icon.addClass('icon')}, 0.1); // prevents animation from initial positions

    o.hit.hover(
      ()=>{
        o.icon.css('transform',`translate(${iconXOffset + indexOffset}px, ${iconY+15}px)`);
        o.label.addClass('visible');
      },()=>{
        o.icon.css('transform',`translate(${iconXOffset + indexOffset}px, ${iconY}px)`);
        o.label.removeClass('visible');
      }
    ).click(e=>{
      selectedMag = magnifications.indexOf(o);
      $('#selection-arrow').css('transform',`translate(${iconArrowXOffset + indexOffset}px, 0px)`);
      $('#magnification-label').html(magString(o.title));
      loadImages(o);
      updateLabels(o);
    });
  });
});

function loadImages (obj) {
  $('#bottom-slide').attr('xlink:href', $('#top-slide').attr('xlink:href'));
  gsap.to($('#bottom-slide'), 0, {opacity:1});
  const nfctd = infected ? "I" : "";
  $('#top-slide').attr('xlink:href', obj[selectedSet+"MainImage"+nfctd]);
  $('#minimap').attr('xlink:href', obj[selectedSet+"MiniImage"+nfctd]);
  $('#text-title').text(obj[selectedSet+"Title"+nfctd]);
  $('#text-body').text(obj[selectedSet+"Body"+nfctd]);
  gsap.fromTo($("#big-lens-mask2").find("ellipse"), 0.5, {rotation:90, transformOrigin:"1700px 1000px"}, {rotation:0, ease: "elastic.out(0.2, 0.25)", onComplete:function(){
    gsap.to($('#bottom-slide'), 0.3, {opacity:0});
  }});
}
function updateLabels (obj) {
  $('.current').removeClass('current');
  $(`#${selectedSet}-${obj.shortname}-labels`).addClass('current');
}

function magString (level) {
  let str = `MAGNIFICATION: ${level.toUpperCase()}`;
  let spaces = Math.floor((boxLabelLetterCount - str.length)/2);
  for(let i = 0; i<spaces; i++) {
    str = '&nbsp' + str;
    str += '&nbsp';
  }
  return str;
}
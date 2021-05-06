/* global $, MorphSVGPlugin, TweenMax, TimelineMax, RoughEase, Power3, Linear, Back */
$(function() {
  var currentSection = 1;

  /* ----- Video Setup/Functions ----- */
  var vidPlayer = $('#vidPlayer');
  var playerOrigin = '*';
  var videoIDs = {
    intro: '210665208',
    tx: '210665385',
    tl: '210665687',
    helicase: '230632852',
    proteasome: '230629398',
    synth: '230640153',
  };
  var proteinVideo = '';

  function loadNewVideo(videoID) {
    var newSrc = 'https://player.vimeo.com/video/' + videoID + '?api=1';
    vidPlayer.attr('src', newSrc);
  }
  function hideVideoPlayer() {
    vidPlayer.hide();
  }
  function showVideoPlayer() {
    vidPlayer.show();
  }
  function playVideo() {
    post('play');
  }

  /* ----- Skip Setup ----- */
  var skipButton = $('#Skip_Button').hide();
  skipButton.on('click', nextSection);
  TweenMax.set(skipButton, {opacity:0});
  var skipLoops = [
    TweenMax.to($('#Skip_A'), 1, {scale:1.15, transformOrigin: '50% 50%', repeat: -1, yoyo: true, paused: true}),
    TweenMax.to($('#Skip_B'), 1, {scale:1.15, transformOrigin: '50% 50%', repeat: -1, yoyo: true, paused: true}),
  ];
  function showSkipButton() {
    skipButton.show();
    TweenMax.to(skipButton, 0.4, {opacity: 1});
    skipLoops.forEach( function(loop) {
      loop.play();
    });
  }
  function hideSkipButton() {
    TweenMax.to(skipButton, 0.4, {opacity: 0, onComplete: function() {
      skipButton.hide();
    }});
    skipLoops.forEach( function(loop) {
      loop.pause();
    });
  }


  /* ----- Title Screen ----- */
  TweenMax.to($('#Start_Button'), 0.7, {
    scale: 1.05,
    transformOrigin: '50%,50%',
    repeat: -1,
    yoyo: true
  });

  $('#Start_Button').on('mouseover', function() {
    TweenMax.killTweensOf($('#Start_Button'));
    TweenMax.to($('#Start_Button'), 0.3, {
      scale: 1.1,
      transformOrigin: '50%,50%'
    });
  });

  $('#Start_Button').on('mouseout', function() {
    TweenMax.to($('#Start_Button'), 0.3, {scale: 1});
    TweenMax.to($('#Start_Button'), 0.7, {
      delay: 0.3,
      scale: 1.05,
      transformOrigin: '50%,50%',
      repeat: -1,
      yoyo: true
    });
  });

  $('#Start_Button').on('click', nextSection);



  /* ----- Gene Selection ----- */
  $('#Menu_BG').hide();
  $('#Menu_Buttons').hide();
  TweenMax.set('#Prompt1', {scale: '0.5', x: '-50px', y: '700px'});
  TweenMax.set('#A_tRNA_Synth', {xPercent: 50, yPercent: 50});
  TweenMax.set('#Proteasome', { scale: 0.7, x: 650, y: 275 });
  $('#Prompt1').hide();
  TweenMax.set('#Gene_1', {transformOrigin: 'center', x:'+=940px', y:'+=25px', rotation: '3'});
  TweenMax.set('#Gene_2', {transformOrigin: 'center', x:'+=790px', y:'+=550px', rotation: '-25'});
  TweenMax.set('#Gene_3', {transformOrigin: 'center', x:'+=390px', y:'+=215px'});
  var geneSelectionLoops = [
    TweenMax.to($('#A_tRNA_Synth'), 1, {scale: 1.1, transformOrigin: '50%, 50%', repeat: -1, yoyo: true, paused: true}),
    TweenMax.to($('#A_tRNA_Synth'), 20, {css:{rotation: 360}, ease: Linear.easeNone, repeat: -1, paused: true}),
    TweenMax.to($('#DNA_Helicase'), 1, {scale: 1.1, transformOrigin: '50%, 50%', repeat: -1, yoyo: true, paused: true}),
    TweenMax.to($('#DNA_Helicase'), 20, {css:{rotation: 360}, ease: Linear.easeNone, repeat: -1, paused: true}),
    TweenMax.to($('#Proteasome'), 1, {scale: 0.8, transformOrigin: '50%, 50%', repeat: -1, yoyo: true, paused: true}),
    TweenMax.to($('#Proteasome'), 20, {css:{rotation: 360}, ease: Linear.easeNone, repeat: -1, paused: true}),
  ];

  function menuButtonClick(num) {
    TweenMax.killTweensOf($('#Gene_'+num));
    var buttonLayer = $('#Gene_'+num+'_Glow');
    var Button_clk = new TimelineMax({ onComplete: function() {
      nextSection();
    }});
    Button_clk.to(buttonLayer, 0.1, {opacity: '0'}).to(buttonLayer, 0.2, {opacity: '1'}).to(buttonLayer, 0.1, {opacity: '0'});
    $('#Menu_BG').css('pointer-events', 'none');
    $('#MenuButtonPaths').css('pointer-events', 'none');
  }

  function geneSelectOver(num) {
    TweenMax.to($('#Gene_'+num+'_L1'), 0.3, {className: 'style_1_hover'});
    TweenMax.to($('#Gene_'+num+'_L2'), 0.3, {className: 'style_2_hover'});
    TweenMax.to($('#Gene_'+num+'_L3'), 0.3, {className: 'style_3_hover'});
    TweenMax.to($('#Gene_'+num+'_L4'), 0.3, {className: 'style_4_hover'});
    TweenMax.to($('#Gene_'+num+'_Glow'), 0.3, {opacity: '1'});
    TweenMax.to($('#Label-'+num+'_Circle'), 0.5, {opacity: '1'});
    TweenMax.to($('#Label-'+num+'_Circle'), 1.2, {morphSVG: '#Label-'+num+'_Rect',ease: Back.easeOut.config(2.5)});
    TweenMax.to($('#LabelInset_'+num), 0.3, {opacity: '1'});
    switch(num) {
    case '1':
      $('#DNA_Helicase').show();
      TweenMax.to($('#DNA_Helicase'), 0.3, {opacity: '1'});
      break;
    case '2':
      $('#Proteasome').show();
      TweenMax.to($('#Proteasome'), 0.3, {opacity: '1'});
      break;
    case '3':
      $('#A_tRNA_Synth').show();
      TweenMax.to($('#A_tRNA_Synth'), 0.3, {opacity: '1'});
      break;
    }
  }

  function geneSelectOut(num) {
    TweenMax.killTweensOf('#Menu_Buttons');
    TweenMax.to($('#Gene_'+num+'_L1'), 0.3, {className: 'style_1'});
    TweenMax.to($('#Gene_'+num+'_L2'), 0.3, {className: 'style_2'});
    TweenMax.to($('#Gene_'+num+'_L3'), 0.3, {className: 'style_3'});
    TweenMax.to($('#Gene_'+num+'_L4'), 0.3, {className: 'style_4'});
    TweenMax.to($('#Gene_'+num+'_Glow'), 0.3, {opacity: '0'});
    TweenMax.to($('#Label-'+num+'_Circle'), 0.5, {opacity: '0'});
    TweenMax.to($('#Label-'+num+'_Circle'), 0.8, {morphSVG: '#Label-'+num+'_Circle',ease: Back.easeIn.config(1.5)});
    TweenMax.to($('#LabelInset_'+num), 0.3, {opacity: '0'});
    switch(num) {
    case '1':
      TweenMax.to($('#DNA_Helicase'), 0.3, {opacity: '0', onComplete: function(){ $('#DNA_Helicase').hide(); }});
      break;
    case '2':
      TweenMax.to($('#Proteasome'), 0.3, {opacity: '0', onComplete: function(){ $('#Proteasome').hide(); }});
      break;
    case '3':
      TweenMax.to($('#A_tRNA_Synth'), 0.3, {opacity: '0', onComplete: function(){ $('#A_tRNA_Synth').hide(); }});
      break;
    }
  }

  $('#MenuButton_1').on('mouseover', function() { geneSelectOver('1'); });
  $('#MenuButton_1').on('mouseout', function() { geneSelectOut('1'); });
  $('#MenuButton_1').on('click', function() {
    menuButtonClick('1');
    proteinVideo = videoIDs.helicase;
  });

  $('#MenuButton_2').on('mouseover', function() { geneSelectOver('2'); });
  $('#MenuButton_2').on('mouseout', function() { geneSelectOut('2'); });
  $('#MenuButton_2').on('click', function() {
    menuButtonClick('2');
    proteinVideo = videoIDs.proteasome;
  });

  $('#MenuButton_3').on('mouseover', function() { geneSelectOver('3'); });
  $('#MenuButton_3').on('mouseout', function() { geneSelectOut('3'); });
  $('#MenuButton_3').on('click', function() {
    menuButtonClick('3');
    proteinVideo = videoIDs.synth;
  });



  /* ----- TX Interactive ----- */
  var dnaParentTX = document.getElementById('TX_DNA_Bases');
  var mrnaParentTX = document.getElementById('TX_mRNA_Bases');
  var svgNs = 'http://www.w3.org/2000/svg';
  var xlinkNs = 'http://www.w3.org/1999/xlink';
  var numDNAOnScreen = 21;
  var dnaBaseSpacing = 1/numDNAOnScreen;
  var dnaPosition = 0;
  var finishedAt = 15;
  var middleIndexTX = 10;
  var dnaOffset = 0.01;
  var mrnaBaseSpacingTX = 0.08;
  var clickEnabled = true;

  var DNA_Path = MorphSVGPlugin.pathDataToBezier('#Mopath_ALT', {align: '#DNA_Align', offsetX:-210, offsetY: -125});
  var mRNA_Path = MorphSVGPlugin.pathDataToBezier('#Mopath_2', {align: '#mRNA_Align', offsetX:-210, offsetY: -175});

  var dnaDictionary = {
    A:{ el:'DNA_A' },
    T:{ el:'DNA_T' },
    C:{ el:'DNA_C' },
    G:{ el:'DNA_G' }
  };

  var mrnaDictionary = {
    A:{ el:'mRNA_A' },
    U:{ el:'mRNA_U' },
    C:{ el:'mRNA_C' },
    G:{ el:'mRNA_G' }
  };

  var starterSequenceTX = randomSequence();
  var fullDNAArray = buildDNASequence(starterSequenceTX);
  var mrnaArray = [];
  var txLoops = [
    TweenMax.to($('#BG_TXCurrentLabel'), 0.7, {scale: 1.05, transformOrigin: '50%, 50%', repeat: -1, yoyo: true, paused: true}),
    TweenMax.to($('#QuestionMark'), 0.7, {scale: 1.05, transformOrigin: '50%, 50%', repeat: -1, yoyo: true, paused: true}),
  ];

  TweenMax.set($('#Prompt2'), {scale: 0.5, x: '-200px', y: '-720px'});
  $('#Prompt2').hide();

  function dnaBasePair(base) {
    switch(base) {
    case 'A':
      return 'U';
    case 'U':
      return 'A';
    case 'T':
      return 'A';
    case 'C':
      return 'G';
    case 'G':
      return 'C';
    }
  }

  function randBase(wantU) {
    var r = Math.ceil(Math.random()*4);
    switch(r) {
    case 1:
      return 'A';
    case 2:
      if(wantU) return 'U';
      else return 'T';
    case 3:
      return 'C';
    case 4:
      return 'G';
    }
  }

  function randomSequence() {
    var seq = [];
    for(var i = 0; i<35; i++) {
      seq.push({base:randBase(false)});
    }
    return seq;
  }

  function buildDNASequence(sequence) {
    return sequence.map(function(item) {
      var newBase = document.createElementNS(svgNs, 'use');
      newBase.setAttributeNS(xlinkNs, 'href', '#'+dnaDictionary[item.base].el);
      dnaParentTX.appendChild(newBase);

      TweenMax.set(newBase, { transformOrigin: '105px 130px'});

      var tl = new TimelineMax();
      tl.to(newBase, 5, {ease:Linear.easeNone, bezier: {values: DNA_Path, timeResolution:20, type: 'cubic', autoRotate: 180}});
      tl.progress(0.01);
      tl.pause();

      return {
        base: item.base,
        tl: tl,
        el: newBase
      };
    });
  }

  function newMRNABase(base) {
    var newBase = document.createElementNS(svgNs, 'use');
    newBase.setAttributeNS(xlinkNs, 'href', '#'+mrnaDictionary[base].el);
    mrnaParentTX.appendChild(newBase);

    TweenMax.set(newBase, {transformOrigin: '105px 130px'});

    var tl = new TimelineMax();
    tl.to(newBase, 5, {ease:Linear.easeNone, bezier: {values: mRNA_Path, timeResolution:20, type: 'cubic', autoRotate: true}});
    tl.progress(0.01);
    tl.pause();

    return {
      base: base,
      tl: tl,
      el: newBase
    };
  }

  function progressBases(duration) {
    var i;
    for(i = 0; i<mrnaArray.length; i++) {
      if(i<dnaPosition-6) {
        if(mrnaArray[i].el !== null) {
          $(mrnaArray[i].el).remove();
          mrnaArray[i].el = null;
        }
      }else{
        TweenMax.to(mrnaArray[i].tl, duration, {progress:1-((i+6-dnaPosition)*mrnaBaseSpacingTX), ease:Back.easeOut});
      }
      mrnaArray[i].tl.pause();
    }
    for(i = 0; i<fullDNAArray.length; i++) {
      if (i<dnaPosition) {
        if(fullDNAArray[i].el !== null) {
          $(fullDNAArray[i].el).remove();
          fullDNAArray[i].el = null;
        }
      } else if(i>dnaPosition+numDNAOnScreen) {
        if(fullDNAArray[i].tl.progress !== 0.01) {
          fullDNAArray[i].tl.progress(0.01);
          $(fullDNAArray[i].el).hide();
        }
      } else {
        if(i === dnaPosition+numDNAOnScreen) $(fullDNAArray[i].el).show();
        TweenMax.to(fullDNAArray[i].tl, duration, {progress:1-((i-dnaPosition)*dnaBaseSpacing)+dnaOffset, ease:Back.easeOut});
      }
    }
    hideBaseLabel(starterSequenceTX[dnaPosition+middleIndexTX].base);
    dnaPosition++;
    showBaseLabel(starterSequenceTX[dnaPosition+middleIndexTX].base);
  }

  function checkAnswer(answer) {
    if(!clickEnabled) return;
    if(answer === dnaBasePair(starterSequenceTX[dnaPosition+middleIndexTX].base)) {
      butt_clickTrue (answer);
      var newBase = newMRNABase(answer);
      newBase.tl.progress(1-(6*mrnaBaseSpacingTX));
      newBase.tl.pause();
      mrnaArray.push(newBase);
      clickEnabled = false;
      TweenMax.from(newBase.el, 0.3,{y:'+=250px',onComplete:function(){
        clickEnabled = true;
        if(dnaPosition === finishedAt) {
          finishTX();
        } else if(dnaPosition === 3) {
          showSkipButton();
          progressBases(0.5);
        } else {
          progressBases(0.5);
        }
      }});
    }else{
      butt_clickFalse (answer);
    }
  }

  function hideBaseLabel(base) {
    TweenMax.to($('#'+base+'_TXCurrentLabel'), 0.3, {opacity:'0'});
  }

  function showBaseLabel(base) {
    TweenMax.to($('#'+base+'_TXCurrentLabel'), 0.3, {opacity:'1'});
  }

  function butt_clickFalse (base) {
    var buttonWhole = $('#Button_'+base);
    var buttonShadow = $('#TX_Butt-'+base+'_Shadow');
    var buttonCore = $('#TX_Butt-'+base+'_Core');
    var buttonLetter = $('#TX_Butt-'+base+'_Letter');
    var buttonBase = $('#TX_Butt-'+base+'_Base');
    var baseClass = base+'-button';

    TweenMax.fromTo(buttonWhole, 0.5, {x:-2}, {x:2, ease:RoughEase.ease.config({strength:8, points:20, template:Linear.easeNone, randomize:false}) , clearProps:'x'});
    var buttonFalse = new TimelineMax();
    buttonFalse.to(buttonShadow, 0.1, {opacity:'0'}, 's1')
      .to(buttonCore, 0.1, {scale:'1.2', transformOrigin:'50% 50%'}, 's1')
      .to(buttonBase, 0.1, {className:baseClass + ' False-button'}, 's1')
      .to(buttonLetter, 0.1, {className:'TX-black TX-white'}, 's1')
      .to(buttonBase, 0.1, {className:baseClass}, '+=0.3', 's2')
      .to(buttonLetter, 0.1, {className:'TX-black'}, 's2')
      .to(buttonShadow, 0.1, {opacity:'1'}, 's2')
      .to(buttonCore, 0.1, {scale:'1', transformOrigin:'50% 50%'}, 's2');
  }

  function butt_clickTrue (base) {
    var buttonShadow = $('#TX_Butt-'+base+'_Shadow');
    var buttonCore = $('#TX_Butt-'+base+'_Core');
    var buttonBase = $('#TX_Butt-'+base+'_Base');
    var baseClass = base+'-button';
    var trueClass = base+'-button_True';
    var buttonTrue = new TimelineMax();

    buttonTrue.to(buttonShadow, 0.1, {opacity:'0'}, 's1')
      .to(buttonCore, 0.1, {scale:'1.2', transformOrigin:'50% 50%'}, 's1')
      .to(buttonBase, 0.1, {className:baseClass + ' ' + trueClass}, 's1')
      .to(buttonBase, 0.1, {className:baseClass}, '+=0.3', 's2')
      .to(buttonShadow, 0.1, {opacity:'1'}, 's2')
      .to(buttonCore, 0.1, {scale:'1', transformOrigin:'50% 50%'}, 's2');
  }

  $('#Button_A').on('click', function() {
    checkAnswer('A');
  });
  $('#Button_U').on('click', function() {
    checkAnswer('U');
  });
  $('#Button_C').on('click', function() {
    checkAnswer('C');
  });
  $('#Button_G').on('click', function() {
    checkAnswer('G');
  });

  function finishTX() {
    // prolly show something and push okay
    nextSection();
  }



  /* ----- TL Interactive ----- */
  var tlLoops = [
    TweenMax.fromTo($('#Ghost_Body'), 1.2, {scale: 0.96, transformOrigin: '50% 30%'}, {scale: 1.03, repeat: -1, yoyo: true, paused: true}),
  ];
  // TweenMax.to($('#Skip2_A'), 1, {scale:1.15, transformOrigin: '50%, 50%', repeat: -1, yoyo: true});
  // TweenMax.to($('#Skip2_B'), 1, {scale:1.15, transformOrigin: '50%, 50%', repeat: -1, yoyo: true});

  var basesParentTL = document.getElementById('TL_Bases');
  var aaParentTL = document.getElementById('Amino_Acids');
  var numMRNAOnScreen = 41;
  var mrnaBaseSpacingTL = 0.025;
  var tlPosition = 15;
  var tlFinishedAt = 51;
  var tlOffset = 0.03;
  var middleIndexTL = 12;

  var tRNA1 = $('#tRNA1')[0];
  var tRNA2 = $('#tRNA2')[0];
  var tRNA3 = $('#tRNA3')[0];
  var currTRNA = 2;

  var mRNA_Path_TL = MorphSVGPlugin.pathDataToBezier('#Mopath_4', {align: '#TL_Align', offsetX:20, offsetY:15});
  var tRNAMoPath = MorphSVGPlugin.pathDataToBezier('#Mopath_5', {align: tRNA1});
  var aaMopath = MorphSVGPlugin.pathDataToBezier('#Mopath_6', {align: '#AA_Align', offsetX:-41, offsetY:-36});

  TweenMax.set(tRNA1, {xPercent: -30, yPercent: -40});
  TweenMax.set(tRNA2, {xPercent: -30, yPercent: -40});
  TweenMax.set(tRNA3, {xPercent: -30, yPercent: -40});
  var tRNA1_tl = TweenMax.to(tRNA1, 5, {bezier: {values: tRNAMoPath, type: 'cubic', autoRotate: 180}, paused: true});
  var tRNA2_tl = TweenMax.to(tRNA2, 5, {bezier: {values: tRNAMoPath, type: 'cubic', autoRotate: 180}, paused: true});
  var tRNA3_tl = TweenMax.to(tRNA3, 5, {bezier: {values: tRNAMoPath, type: 'cubic', autoRotate: 180}, paused: true});

  function tlButtonSetup(num) {
    return {
      anticodon: '',
      el: $('#tl_button'+num)[0],
      aaLabel: $('#tl_aaLabel'+num)[0],
      aaElement: $('#tl_button'+num+'_aa')[0],
      acLabel: $('#tl_code'+num)[0],
      base1: $('#tl_button'+num+'_base1')[0],
      base2: $('#tl_button'+num+'_base2')[0],
      base3: $('#tl_button'+num+'_base3')[0],
      shadow: '',
      panel: $('#ColorPanel_'+num)[0],
    };
  }

  var tlButton1 = tlButtonSetup(1);
  var tlButton2 = tlButtonSetup(2);
  var tlButton3 = tlButtonSetup(3);
  var tlButton4 = tlButtonSetup(4);

  TweenMax.set(tlButton1.el, {x:1120, y:130});
  TweenMax.set(tlButton2.el, {x:1525, y:130});
  TweenMax.set(tlButton3.el, {x:1115, y:620});
  TweenMax.set(tlButton4.el, {x:1515, y:620});

  var aminoacidDictionary = {
    ALA:{ el:'ALA_Alanine', name:'Alanine' },
    ARG:{ el:'ARG_Arginine', name:'Arginine' },
    ASP:{ el:'ASP_Aspartic_Acid', name:'Aspartic Acid' },
    ASN:{ el:'ASN_Asparagine', name:'Asparagine' },
    CYS:{ el:'CYS_Cysteine', name:'Cysteine' },
    GLU:{ el:'GLU_Glutamic_Acid', name:'Glutamic Acid' },
    GLN:{ el:'GLN_Glutamine', name:'Glutamine' },
    GLY:{ el:'GLY_Glycine', name:'Glycine' },
    HIS:{ el:'HIS_Histidine', name:'Histidine' },
    ILE:{ el:'ILE_Isoleucine', name:'Isoleucine' },
    LEU:{ el:'LEU_Leucine', name:'Leucine' },
    LYS:{ el:'LYS_Lysine', name:'Lysine' },
    MET:{ el:'MET_Methionine', name:'Methionine' },
    PHE:{ el:'PHE_Phenylalanine', name:'Phenylalanine' },
    PRO:{ el:'PRO_Proline', name:'Proline' },
    SER:{ el:'SER_Serine', name:'Serine' },
    THR:{ el:'THR_Threonine', name:'Threonine' },
    TRP:{ el:'TRP_Tryptophan', name:'Tryptophan' },
    TYR:{ el:'TYR_Tyrosine', name:'Tyrosine' },
    VAL:{ el:'VAL_Valine', name:'Valine' },
  };

  var baseDictionaryTL = {
    A:{ el:'TL_A', buttonBase:'#A_base' },
    U:{ el:'TL_U', buttonBase:'#U_base' },
    C:{ el:'TL_C', buttonBase:'#C_base' },
    G:{ el:'TL_G', buttonBase:'#G_base' }
  };

  function anticodon(codon) {
    var bases = codon.split('');
    return dnaBasePair(bases[0]) + dnaBasePair(bases[1]) + dnaBasePair(bases[2]);
  }

  var anticodons = [
    'CGU', 'CGG', 'CGC', 'CGA', 'UCU', 'UCC', 'GCU', 'GCG', 'GCC', 'GCA', 'CUG', 'CUA', 'UUG', 'UUA', 'ACG',
    'ACA', 'CUU', 'CUC', 'GUU', 'GUC', 'CCU', 'CCG', 'CCC', 'CCA', 'GUG', 'GUA', 'UAU', 'UAG', 'UAA', 'AAU',
    'AAC', 'GAU', 'GAG', 'GAC', 'GAA', 'UUU', 'UUC', 'AAG', 'AAA', 'GGU', 'GGG', 'GGC', 'GGA', 'UCG', 'UCA',
    'AGU', 'AGG', 'AGC', 'AGA', 'UGU', 'UGG', 'UGC', 'UGA', 'AUG', 'AUA', 'CAU', 'CAG', 'CAC', 'CAA'
  ];

  function mrnaAAPair(codon) {
    switch(codon) {
    case 'UAA':
    case 'UAG':
    case 'UGA':
      return 'Stop';

    case 'GCA':
    case 'GCC':
    case 'GCG':
    case 'GCU':
      return 'ALA';

    case 'AGA':
    case 'AGG':
    case 'CGA':
    case 'CGC':
    case 'CGG':
    case 'CGU':
      return 'ARG';

    case 'GAC':
    case 'GAU':
      return 'ASP';

    case 'AAC':
    case 'AAU':
      return 'ASN';

    case 'UGC':
    case 'UGU':
      return 'CYS';

    case 'GAA':
    case 'GAG':
      return 'GLU';

    case 'CAA':
    case 'CAG':
      return 'GLN';

    case 'GGA':
    case 'GGC':
    case 'GGG':
    case 'GGU':
      return 'GLY';

    case 'CAC':
    case 'CAU':
      return 'HIS';

    case 'AUA':
    case 'AUC':
    case 'AUU':
      return 'ILE';

    case 'UUA':
    case 'UUG':
    case 'CUA':
    case 'CUC':
    case 'CUG':
    case 'CUU':
      return 'LEU';

    case 'AAA':
    case 'AAG':
      return 'LYS';

    case 'AUG':
      return 'MET';

    case 'UUC':
    case 'UUU':
      return 'PHE';

    case 'CCA':
    case 'CCC':
    case 'CCG':
    case 'CCU':
      return 'PRO';

    case 'AGC':
    case 'AGU':
    case 'UCA':
    case 'UCC':
    case 'UCG':
    case 'UCU':
      return 'SER';

    case 'ACA':
    case 'ACC':
    case 'ACG':
    case 'ACU':
      return 'THR';

    case 'UGG':
      return 'TRP';

    case 'UAC':
    case 'UAU':
      return 'TYR';

    case 'GUA':
    case 'GUC':
    case 'GUG':
    case 'GUU':
      return 'VAL';
    }
  }

  var starterSequenceTL = randomSequenceTL();
  var mrnaArrayTL = buildmRNASequenceTL(starterSequenceTL);
  var AAArray = [];

  function randomSequenceTL() {
    var s = '';
    var i;
    for(i = 0; i<30; i++) {
      s += anticodon(anticodons[Math.floor(Math.random()*anticodons.length)]);
    }
    var sa = s.split('');
    var seq = [];
    for(i = 0; i<sa.length; i++) {
      seq.push({base:sa[i]});
    }
    return seq;
  }

  function buildmRNASequenceTL(sequence) {
    return sequence.map(function(item) {
      var newBase = document.createElementNS(svgNs, 'use');
      newBase.setAttributeNS(xlinkNs, 'href', '#'+baseDictionaryTL[item.base].el);
      // newBase.setAttributeNS(xlinkNs, 'href', '#DNA_C');
      basesParentTL.appendChild(newBase);

      // TweenMax.set(newBase, { transformOrigin: '35px 18px'});

      var tl = new TimelineMax();
      tl.to(newBase, 5, {ease:Linear.easeNone, bezier: {values: mRNA_Path_TL, type: 'cubic', autoRotate: true}});
      tl.progress(0.01);
      tl.pause();

      return {
        base: item.base,
        tl: tl,
        el: newBase
      };
    });
  }

  function newAminoAcid(codon) {
    var aa = mrnaAAPair(codon);
    var newAA = document.createElementNS(svgNs, 'use');
    newAA.setAttributeNS(xlinkNs, 'href', '#'+aminoacidDictionary[aa].el);
    getTRNA().el.appendChild(newAA);

    TweenMax.set(newAA, {x: 150, y:-60, transformOrigin:'50% 50%', scale:0.6});
    var tl = new TimelineMax({paused: true});
    tl.to(newAA, 5, {ease:Linear.easeNone, bezier: {values: aaMopath, type: 'cubic', autoRotate: 180}});

    return {
      aa: aa,
      codon: codon,
      tl: tl,
      el: newAA
    };
  }

  function progressTLBases(duration) {
    var i;
    for(i = 0; i<mrnaArrayTL.length; i++) {
      if(i<tlPosition || i>tlPosition+numMRNAOnScreen) {
        mrnaArrayTL[i].tl.progress(0.0);
      }else{
        TweenMax.to(mrnaArrayTL[i].tl, duration, {progress:1-((i-tlPosition)*mrnaBaseSpacingTL)+tlOffset, ease:Back.easeOut});
      }
      mrnaArrayTL[i].tl.pause();
    }

    hideTLLabel(getCurrCodon());
    tlPosition+=3;
    showTLLabel(getCurrCodon());
  }

  function progressAA() {
    for(var i = 0; i<AAArray.length; i++) {
      TweenMax.to(AAArray[i].tl, 0.5, {progress:((AAArray.length-i)*0.07), ease:Back.easeOut, delay:0.4});
    }
  }

  function panel_Flash (colorPanel, panelFill) {
    TweenMax.to(colorPanel, 0, {fill: panelFill});
    var panelFlash = new TimelineMax ();
    panelFlash.to(colorPanel, 0.2, {opacity: '1'}, 's1')
      .to(colorPanel, 0.2, {'fill-opacity': '0.7'}, 's1')
      .to(colorPanel, 0.2, {opacity: '0'}, '+=0.1', 's2')
      .to(colorPanel, 0.2, {'fill-opacity': '0.5'}, 's2');
  }

  $('#Shadow-1').on('click', function() {
    checkAnswerTL(tlButton1);
  });
  $('#Shadow-2').on('click', function() {
    checkAnswerTL(tlButton2);
  });
  $('#Shadow-3').on('click', function() {
    checkAnswerTL(tlButton3);
  });
  $('#Shadow-4').on('click', function() {
    checkAnswerTL(tlButton4);
  });

  function tRNA_Reset(num) {
    TweenMax.set('#tRNA'+num+'_f1', {clearProps:'all'});
    TweenMax.set('#tRNA'+num+'_f2', {clearProps:'all'});
    TweenMax.set('#tRNA'+num+'_f3', {clearProps:'all'});
    TweenMax.set('#tRNA'+num+'_f4', {clearProps:'all'});
    TweenMax.set('#tRNA'+num+'_f5', {clearProps:'all'});
    TweenMax.set('#tRNA'+num+'_f6', {clearProps:'all'});
    TweenMax.set('#tRNA'+num+'_f7', {clearProps:'all'});
    TweenMax.set('#tRNA'+num+'_f8', {clearProps:'all'});
  }

  function tRNA_Turn(num) {
    var tRNABody_turn = new TimelineMax();
    tRNABody_turn.to($('#tRNA'+num+'_f1'), 0, {visibility:'hidden'}, '+=0.05', 's1')
      .to($('#tRNA'+num+'_f2'), 0, {visibility:'visible'}, 's1')
      .to($('#tRNA'+num+'_f2'), 0, {visibility:'hidden'}, '+=0.05', 's2')
      .to($('#tRNA'+num+'_f3'), 0, {visibility:'visible'}, 's2')
      .to($('#tRNA'+num+'_f3'), 0, {visibility:'hidden'}, '+=0.05', 's3')
      .to($('#tRNA'+num+'_f4'), 0, {visibility:'visible'}, 's3')
      .to($('#tRNA'+num+'_f4'), 0, {visibility:'hidden'}, '+=0.05', 's4')
      .to($('#tRNA'+num+'_f5'), 0, {visibility:'visible'}, 's4')
      .to($('#tRNA'+num+'_f5'), 0, {visibility:'hidden'}, '+=0.05', 's5')
      .to($('#tRNA'+num+'_f6'), 0, {visibility:'visible'}, 's5')
      .to($('#tRNA'+num+'_f6'), 0, {visibility:'hidden'}, '+=0.05', 's6')
      .to($('#tRNA'+num+'_f7'), 0, {visibility:'visible'}, 's6')
      .to($('#tRNA'+num+'_f7'), 0, {visibility:'hidden'}, '+=0.05', 's7')
      .to($('#tRNA'+num+'_f8'), 0, {visibility:'visible'}, 's7');
  }

  function checkAnswerTL(tlButton) {
    if(!clickEnabled) return;
    if(tlButton.anticodon === anticodon(getCurrCodon())) {
      correctAnswerTL(tlButton.anticodon, tlButton.panel);
    }else{
      panel_Flash(tlButton.panel, '#FF0000');
    }
  }

  function correctAnswerTL(answer, panel) {
    panel_Flash(panel, '#5ef95e');
    clickEnabled = false;

    var tRNA = nextTRNA();
    tRNA_Reset(currTRNA);
    tRNA.base1.setAttribute('xlink:href', baseDictionaryTL[answer.substr(0,1)].buttonBase);
    tRNA.base2.setAttribute('xlink:href', baseDictionaryTL[answer.substr(1,1)].buttonBase);
    tRNA.base3.setAttribute('xlink:href', baseDictionaryTL[answer.substr(2,1)].buttonBase);
    hideTLButtons();
    var newAA = newAminoAcid(anticodon(answer));
    TweenMax.fromTo(tRNA.tl, 0.95, {progress:0}, {progress:0.2985, ease:Back.easeOut.config(1), onComplete: function(){
      aaParentTL.appendChild(newAA.el);
      TweenMax.set(newAA.el, {x: 780, y: 340});
      tRNA_Turn(currTRNA);
      TweenMax.to(newAA.el, 0.35, {x: 610, y: 270, ease: Linear.easeNone});
      progressAA();
      TweenMax.to(newAA.el, 0.6, {x: 548.22, y: 264.94, rotation: 13.09, ease: Back.easeOut, delay: 0.35, onComplete: function(){
        progressTLBases(0.5);
        TweenMax.to(newAA.tl, 0.001, {progress:0.001});
        TweenMax.to(tRNA.tl, 0.5, {progress:0.34, ease: Back.easeOut.config(1)});
        TweenMax.to(tRNA.pos2, 0.5, {progress:0.385, delay:0.12, ease: Back.easeOut.config(1), onComplete: function(){
          AAArray.push(newAA);
          if(tlPosition === tlFinishedAt) {
            finishTL();
          } else if(tlPosition === 24) {
            showSkipButton();
            updateTLChoices();
            showTLButtons();
          }else {
            updateTLChoices();
            showTLButtons();
          }
        }});
        TweenMax.to(tRNA.pos3, 3, {progress:0.85, delay:0.25, ease: Power3.easeOut});
      }});
    }});
  }

  function updateTLChoices() {
    var a = [tlButton1, tlButton2, tlButton3, tlButton4];
    shuffleArray(a);
    var currAnticodon = anticodon(getCurrCodon());
    var choices = [];
    for(var i = 1; i<a.length; i++) {
      a[i].anticodon = currAnticodon;
      a[i].acLabel.innerHTML = a[i].anticodon;
      a[i].aaLabel.innerHTML = aminoacidDictionary[mrnaAAPair(anticodon(a[i].anticodon))].name;
      a[i].aaElement.setAttribute('xlink:href', '#'+ aminoacidDictionary[mrnaAAPair(anticodon(a[i].anticodon))].el);
      a[i].base1.setAttribute('xlink:href', baseDictionaryTL[a[i].anticodon.substr(0,1)].buttonBase);
      a[i].base2.setAttribute('xlink:href', baseDictionaryTL[a[i].anticodon.substr(1,1)].buttonBase);
      a[i].base3.setAttribute('xlink:href', baseDictionaryTL[a[i].anticodon.substr(2,1)].buttonBase);

      choices.push(currAnticodon);
      while(choices.includes(currAnticodon)) {
        currAnticodon = anticodons[Math.floor(Math.random() * anticodons.length)];
      }
    }
  }

  function hideTLButtons() {
    TweenMax.to($('#Ghost_Body'), 0.4, {opacity: 0});

    TweenMax.to('#Label-1', 0.4, {opacity:0, delay:0.1});
    TweenMax.to('#Label-2', 0.4, {opacity:0, delay:0.1});
    TweenMax.to('#Label-3', 0.4, {opacity:0, delay:0.1});
    TweenMax.to('#Label-4', 0.4, {opacity:0, delay:0.1});

    TweenMax.to('#Code-1', 0.4, {opacity:0, delay:0.25});
    TweenMax.to('#Code-2', 0.4, {opacity:0, delay:0.25});
    TweenMax.to('#Code-3', 0.4, {opacity:0, delay:0.25});
    TweenMax.to('#Code-4', 0.4, {opacity:0, delay:0.25});

    TweenMax.to('#tl_button1', 0.3, {opacity:0, scale:0.9, transformOrigin:'30% 50%', delay:0.4});
    TweenMax.to('#tl_button2', 0.3, {opacity:0, scale:0.9, transformOrigin:'30% 50%', delay:0.4});
    TweenMax.to('#tl_button3', 0.3, {opacity:0, scale:0.9, transformOrigin:'30% 50%', delay:0.4});
    TweenMax.to('#tl_button4', 0.3, {opacity:0, scale:0.9, transformOrigin:'30% 50%', delay:0.4});
  }
  function showTLButtons() {
    TweenMax.to($('#Ghost_Body'), 0.4, {opacity: 1});

    TweenMax.to('#Label-1', 0.4, {opacity:1, delay:0.3});
    TweenMax.to('#Label-2', 0.4, {opacity:1, delay:0.5});
    TweenMax.to('#Label-3', 0.4, {opacity:1, delay:0.7});
    TweenMax.to('#Label-4', 0.4, {opacity:1, delay:0.9});

    TweenMax.to('#Code-1', 0.4, {opacity:1, delay:0.3});
    TweenMax.to('#Code-2', 0.4, {opacity:1, delay:0.5});
    TweenMax.to('#Code-3', 0.4, {opacity:1, delay:0.7});
    TweenMax.to('#Code-4', 0.4, {opacity:1, delay:0.9});

    TweenMax.to('#tl_button1', 0.4, {opacity:1, scale:1});
    TweenMax.to('#tl_button2', 0.4, {opacity:1, scale:1, delay:0.2});
    TweenMax.to('#tl_button3', 0.4, {opacity:1, scale:1, delay:0.4});
    TweenMax.to('#tl_button4', 0.4, {opacity:1, scale:1, delay:0.6, onComplete:function(){
      clickEnabled = true;
    }});
  }

  function hideTLLabel(codon) {
    var bases = codon.split('');
    TweenMax.to($('#'+bases[0]+'-TL_Label1'), 0.3, {opacity:'0'});
    TweenMax.to($('#'+bases[1]+'-TL_Label2'), 0.3, {opacity:'0'});
    TweenMax.to($('#'+bases[2]+'-TL_Label3'), 0.3, {opacity:'0'});
  }

  function showTLLabel(codon) {
    var bases = codon.split('');
    TweenMax.to($('#'+bases[0]+'-TL_Label1'), 0.3, {opacity:'1'});
    TweenMax.to($('#'+bases[1]+'-TL_Label2'), 0.3, {opacity:'1'});
    TweenMax.to($('#'+bases[2]+'-TL_Label3'), 0.3, {opacity:'1'});
  }

  function getTRNA() {
    switch(currTRNA) {
    case 1:
      return {
        el: tRNA1,
        tl: tRNA1_tl,
        base1: $('#tRNA1_base1')[0],
        base2: $('#tRNA1_base2')[0],
        base3: $('#tRNA1_base3')[0],
        pos2: tRNA3_tl,
        pos3: tRNA2_tl
      };
    case 2:
      return {
        el: tRNA2,
        tl: tRNA2_tl,
        base1: $('#tRNA2_base1')[0],
        base2: $('#tRNA2_base2')[0],
        base3: $('#tRNA2_base3')[0],
        pos2: tRNA1_tl,
        pos3: tRNA3_tl
      };
    case 3:
      return {
        el: tRNA3,
        tl: tRNA3_tl,
        base1: $('#tRNA3_base1')[0],
        base2: $('#tRNA3_base2')[0],
        base3: $('#tRNA3_base3')[0],
        pos2: tRNA2_tl,
        pos3: tRNA1_tl
      };
    }
  }

  function nextTRNA() {
    if(++currTRNA > 3) currTRNA = 1;
    return getTRNA();
  }

  function getCurrCodon() {
    return starterSequenceTL[tlPosition+middleIndexTL].base +
           starterSequenceTL[tlPosition+middleIndexTL+1].base +
           starterSequenceTL[tlPosition+middleIndexTL+2].base;
  }

  function finishTL() {
    nextSection();
  }

  function shuffleArray(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
      j = Math.floor(Math.random() * i);
      x = a[i - 1];
      a[i - 1] = a[j];
      a[j] = x;
    }
  }


  // ------- Section Control ------- //
  var sections = [
    {
      name: 'title',
      sectionNum: 1,
      in: function() {
        $('#TXTL_Title').show();
        TweenMax.to($('#TXTL_Title'), 0.5, {opacity: '1'});
      },
      out: function() {
        TweenMax.killTweensOf($('#Start_Button'));
        TweenMax.to($('#TXTL_Title'), 1.2, {opacity: '0', onComplete: function() {
          $('#TXTL_Title').hide();
        }});
      },
      reset: function() {}
    },
    {
      name: 'intro video',
      sectionNum: 2,
      in: function() {
        showVideoPlayer();
        playVideo();
      },
      out: function() {
        hideVideoPlayer();
        loadNewVideo(videoIDs.tx);
      },
      reset: function() {
        loadNewVideo(videoIDs.intro);
      }
    },
    {
      name: 'gene selection',
      sectionNum: 3,
      in: function() {
        geneSelectionLoops.forEach( function(loop) {
          loop.play();
        });
        $('#Menu_BG').show();
        $('#Menu_Buttons').show();
        $('#Prompt1').show();
        TweenMax.to($('#Menu_BG'), 0.3, {opacity: '1', onComplete:function(){
          $('#Menu_BG').css('pointer-events', 'auto');
          $('#MenuButtonPaths').css('pointer-events', 'auto');
        }});
        TweenMax.to($('#Menu_Buttons'), 0.3, {opacity: '1'});
        TweenMax.to($('#Prompt1'), 1, {y: '425px', ease: Back.easeOut, delay: '0.6'});
      },
      out: function() {
        geneSelectionLoops.forEach( function(loop) {
          loop.pause();
        });
        TweenMax.killTweensOf('#Menu_BG');
        TweenMax.killTweensOf('#Menu_Buttons');
        TweenMax.to($('#Menu_BG'), 0.3, {opacity: '0', onComplete: function() {
          $('#Menu_BG').hide();
        }});
        TweenMax.to($('#Menu_Buttons'), 0.3, {opacity: '0', onComplete: function() {
          $('#Menu_Buttons').hide();
        }});
        TweenMax.to($('#Prompt1'), 0.5, {y: '975px', onComplete: function() {
          $('#Prompt1').hide();
        }});
        $('#Menu_BG').css('pointer-events', 'none');
        $('#MenuButtonPaths').css('pointer-events', 'none');
      },
      reset: function() {}
    },
    {
      name: 'tx video',
      sectionNum: 4,
      in: function() {
        showVideoPlayer();
        playVideo();
      },
      out: function() {
        hideVideoPlayer();
        loadNewVideo(videoIDs.tl);
      },
      reset: function() {}
    },
    {
      name: 'tx interactive',
      sectionNum: 5,
      in: function() {
        txLoops.forEach( function(loop) {
          loop.play();
        });
        TweenMax.set($('#TX_Interactive'), {opacity: 0});
        $('#TX_Interactive').show();
        TweenMax.to($('#TX_Interactive'), 0.5, {opacity: '1'});
        $('#Prompt2').show();
        TweenMax.to($('#Prompt2'), 1, {y: '-370px', ease: Back.easeOut, delay: '0.6'});
        progressBases(0);
        clickEnabled = true;
      },
      out: function() {
        txLoops.forEach( function(loop) {
          loop.pause();
        });
        TweenMax.to($('#TX_Interactive'), 0.5, {opacity: '0', onComplete: function(){
          $('#TX_Interactive').hide();
        }});
        TweenMax.to($('#Prompt2'), 0.5, {y: '-1070px', onComplete: function() {
          $('#Prompt2').hide();
        }});
        hideSkipButton();
        clickEnabled = false;
      },
      reset: function() {
        dnaPosition = 0;
        $('#TX_mRNA_Bases').empty();
        mrnaArray = [];
        $('#TX_DNA_Bases').empty();
        fullDNAArray = [];
        starterSequenceTX = randomSequence();
        fullDNAArray = buildDNASequence(starterSequenceTX);
        hideBaseLabel('A');
        hideBaseLabel('T');
        hideBaseLabel('C');
        hideBaseLabel('G');
      }
    },
    {
      name: 'tl video',
      sectionNum: 6,
      in: function() {
        showVideoPlayer();
        playVideo();
      },
      out: function() {
        hideVideoPlayer();
        loadNewVideo(proteinVideo);
      },
      reset: function() {}
    },
    {
      name: 'tl interactive',
      sectionNum: 7,
      in: function() {
        tlLoops.forEach( function(loop) {
          loop.play();
        });
        TweenMax.set($('#TL_Interactive'), {opacity: 0});
        $('#TL_Interactive').show();
        TweenMax.to($('#TL_Interactive'), 0.5, {opacity: '1'});
        progressTLBases(0);
        TweenMax.set($('#tRNA1_f1'), {visibility:'hidden'});
        TweenMax.set($('#tRNA1_f8'), {visibility:'visible'});
        TweenMax.set($('#tRNA2_f1'), {visibility:'hidden'});
        TweenMax.set($('#tRNA2_f8'), {visibility:'visible'});
        TweenMax.killTweensOf(tRNA1_tl);
        TweenMax.killTweensOf(tRNA2_tl);
        TweenMax.killTweensOf(tRNA3_tl);
        TweenMax.to(tRNA1_tl, 0.1, {progress:0.385}); // "set" doesn't work properly on these
        TweenMax.to(tRNA2_tl, 0.1, {progress:0.34}); //                                    //
        TweenMax.to(tRNA3_tl, 0.1, {progress:0.001}); //                                   //
        clickEnabled = true;
        updateTLChoices();
      },
      out: function() {
        clickEnabled = false;
        tlLoops.forEach( function(loop) {
          loop.pause();
        });
        TweenMax.to($('#TL_Interactive'), 0.5, {opacity: '0', onComplete: function(){
          $('#TL_Interactive').hide();
        }});
        hideSkipButton();
      },
      reset: function() {
        tlPosition = 15;
        $('#TL_Bases').empty();
        mrnaArrayTL = [];
        $('#Amino_Acids').empty();
        AAArray = [];
        starterSequenceTL = randomSequenceTL();
        mrnaArrayTL = buildmRNASequenceTL(starterSequenceTL);
        hideTLLabel('AAA');
        hideTLLabel('CCC');
        hideTLLabel('UUU');
        hideTLLabel('GGG');
        currTRNA = 2;
        showTLButtons();
      }
    },
    {
      name: 'proteins video',
      sectionNum: 8,
      in: function() {
        showVideoPlayer();
        playVideo();
      },
      out: function() {
        hideVideoPlayer();
        loadNewVideo(videoIDs.tx);
        sections.find(findSectionByName('tx interactive')).reset();
        sections.find(findSectionByName('tl interactive')).reset();
      },
      reset: function() {}
    },
  ];
  function findCurrentSection(section) {
    return section.sectionNum === currentSection;
  }
  function findSectionByName(name) {
    return function (section) {
      return section.name === name;
    };
  }
  function nextSection() {
    sections.find(findCurrentSection).out();
    if(currentSection < 8) currentSection++;
    else currentSection = 3;
    sections.find(findCurrentSection).in();
  }
  function prevSection() {
    sections.find(findCurrentSection).out();
    if(currentSection > 1) currentSection--;
    sections.find(findCurrentSection).reset();
    sections.find(findCurrentSection).in();
  }
  (function initialSectionSetup() {
    $('#TX_Interactive').hide();
    $('#TL_Interactive').hide();
    $('#Shadow-1').css('pointer-events', 'auto');
    $('#Shadow-2').css('pointer-events', 'auto');
    $('#Shadow-3').css('pointer-events', 'auto');
    $('#Shadow-4').css('pointer-events', 'auto');
  })();

  function onFinish() {
    nextSection();
  }
  function onReady() {
    post('addEventListener', 'finish');
    // post('addEventListener', 'playProgress'); // might need this for something?
  }

  // var tempSkip = document.createElement('button');
  // document.getElementsByTagName('article')[0].appendChild(tempSkip);
  // tempSkip.innerText = 'skip to tl';
  // $(tempSkip).css({'font-size':'20px', 'margin':'20px 500px', 'cursor':'pointer'});
  // tempSkip.addEventListener('click', function(){
  //   sections.find(findCurrentSection).out();
  //   hideVideoPlayer();
  //   currentSection = 7;
  //   sections.find(findCurrentSection).in();
  // });



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

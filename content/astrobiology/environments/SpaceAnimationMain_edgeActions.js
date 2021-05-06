
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;var currVO="none";
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_GreatSaltLakeButton}","click",function(sym,e){sym.play('SaltLakeClick');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",46500,function(sym,e){sym.stop();currVO="greatSaltLake";GWAPlay("greatSaltLake");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_YellowstoneButton}","click",function(sym,e){sym.play('YellowStoneClick');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",47250,function(sym,e){sym.stop();currVO="yellowStone";GWAPlay("yellowStone");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",48000,function(sym,e){sym.stop();currVO="villaLuz";GWAPlay("villaLuz");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_CuevaVillaLuzButton}","click",function(sym,e){sym.play('CuevaClick');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",48750,function(sym,e){sym.stop();currVO="tardigrades";GWAPlay("tardigrades");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TardigradesButton}","click",function(sym,e){sym.play('TardigradesClick');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",49500,function(sym,e){sym.stop();currVO="eastPacific";GWAPlay("eastPacific");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_EastPacificRiseButton}","click",function(sym,e){sym.play('EastPacificClick');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TardigradesText}","click",function(sym,e){window.open("http://tardigrades.bio.unc.edu/","_new");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_CuevaText}","click",function(sym,e){window.open("http://keninghamphoto.com","_new");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",50250,function(sym,e){sym.stop();currVO="pitchLake";GWAPlay("pitchLake");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_PitchLakeButton}","click",function(sym,e){sym.play('PitchLakeClick');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",51003,function(sym,e){sym.stop();currVO="atacama";GWAPlay("atacama");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_AtacamaButton}","click",function(sym,e){sym.play('AtacamaClick');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",51750,function(sym,e){sym.stop();currVO="lagunaVerde";GWAPlay("lagunaVerde");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_LagunaVerdeButton}","click",function(sym,e){sym.play('LagunaVerdeClick');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",52500,function(sym,e){sym.stop();currVO="seaIce";GWAPlay("seaIce");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_SeaIceButton}","click",function(sym,e){sym.play('SeaIceClick');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",53258,function(sym,e){sym.stop();currVO="bloodFalls";GWAPlay("bloodFalls");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BloodFallsButton}","click",function(sym,e){sym.play('BloodFallsClick');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",54000,function(sym,e){sym.stop();currVO="europa";GWAPlay("europa");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_EuropaButton}","click",function(sym,e){sym.play('EuropaClick');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",54760,function(sym,e){sym.stop();currVO="10Mars";GWAPlay("10Mars");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_MarsButton}","click",function(sym,e){sym.play('MarsClick');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",55510,function(sym,e){sym.stop();currVO="titan";GWAPlay("titan");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TitanButton}","click",function(sym,e){sym.play('TitanClick');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",45500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_SaltLakeClosebutton}","click",function(sym,e){sym.play('Normal');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_YellowStoneClosebutton}","click",function(sym,e){sym.play('Normal');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_CuevaClosebutton}","click",function(sym,e){sym.play('Normal');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TardigradesClosebutton}","click",function(sym,e){sym.play('Normal');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_EastPacificClosebutton}","click",function(sym,e){sym.play('Normal');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_PitchLakeClosebutton}","click",function(sym,e){sym.play('Normal');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_AtacamaClosebutton}","click",function(sym,e){sym.play('Normal');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TitanClosebutton}","click",function(sym,e){sym.play('Normal');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_MarsClosebutton}","click",function(sym,e){sym.play('Normal');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_EuropaClosebutton}","click",function(sym,e){sym.play('Normal');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BloodFallsClosebutton}","click",function(sym,e){sym.play('Normal');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_SeaIceClosebutton}","click",function(sym,e){sym.play('Normal');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_LagunaVerdeClosebutton}","click",function(sym,e){sym.play('Normal');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ExtremeRectangleBack}","click",function(sym,e){sym.play('ExtremeBack');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",56544,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",57297,function(sym,e){sym.play('Normal');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ExtremeRectangleClick}","click",function(sym,e){sym.play('ExtremeMove');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_HeatText}","click",function(sym,e){sym.play('Heat');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",58000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ColdText}","click",function(sym,e){sym.play('Cold');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_PressureText}","click",function(sym,e){sym.play('Pressure');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",58750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",59500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_LowOxygenText}","click",function(sym,e){sym.play('LowOxygen');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",60250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ToxinsText}","click",function(sym,e){sym.play('Toxins');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",61000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_SaltText}","click",function(sym,e){sym.play('Salt');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",61750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_UVLightText}","click",function(sym,e){sym.play('UVLight');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",62500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_pHText}","click",function(sym,e){sym.play('pH');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",63250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_DarknessText}","click",function(sym,e){sym.play('Darkness');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",64000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_LowWaterText}","click",function(sym,e){sym.play('LowWater');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",64750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_YellowStoneCOLOR}","click",function(sym,e){sym.play('YellowStoneClick');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_EastPacificCOLOR}","click",function(sym,e){sym.play('EastPacificClick');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_SeaIceCOLOR}","click",function(sym,e){sym.play('SeaIceClick');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BloodFallsCOLOR}","click",function(sym,e){sym.play('BloodFallsClick');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_PitchLakeCOLOR}","click",function(sym,e){sym.play('PitchLakeClick');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_LagunaVerdeCOLOR}","click",function(sym,e){sym.play('LagunaVerdeClick');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_GreatSaltLakeCOLOR}","click",function(sym,e){sym.play('SaltLakeClick');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_CuevaVillaCOLOR}","click",function(sym,e){sym.play('CuevaClick');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_AtacamaCOLOR}","click",function(sym,e){sym.play('AtacamaClick');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_PlayButton}","click",function(sym,e){sym.play('Play');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",44134,function(sym,e){sym.play('Normal');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_SkipButton}","click",function(sym,e){sym.play('DotsStart');currVO="none";GWAStop("intro");});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){var buzzLoaded=false;var gwaLoaded=false;yepnope({load:"includes/buzz.min.js",callback:function(){buzzLoaded=true;loadSounds();}});yepnope({load:"includes/GSLCWebAudio.js",callback:function(){gwaLoaded=true;loadSounds();}});function loadSounds(){if(buzzLoaded==true&&gwaLoaded==true){GWASound("intro","media/Introduction",false);GWASound("music","media/Soundscape",true);GWASound("yellowStone","media/YellowStone",false);GWASound("greatSaltLake","media/GreatSaltLake",false);GWASound("atacama","media/AtacamaDesert",false);GWASound("bloodFalls","media/BloodFalls",false);GWASound("villaLuz","media/CuevadeVillaLuz",false);GWASound("eastPacific","media/EastPacificRise",false);GWASound("europa","media/Europa",false);GWASound("lagunaVerde","media/LagunaVerde",false);GWASound("10Mars","media/10Mars",false);GWASound("pitchLake","media/PitchLake",false);GWASound("seaIce","media/SeaIce",false);GWASound("tardigrades","media/Tardigrades",false);GWASound("titan","media/Titan",false);GWASetVol("music",0.2);}}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",45250,function(sym,e){GWAStop(currVO);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",55802,function(sym,e){GWAStop(currVO);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",13919,function(sym,e){currVO="intro";GWAPlay("intro");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",46000,function(sym,e){GWAStop(currVO);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",46762,function(sym,e){GWAStop(currVO);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",47511,function(sym,e){GWAStop(currVO);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",48264,function(sym,e){GWAStop(currVO);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",49000,function(sym,e){GWAStop(currVO);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",49750,function(sym,e){GWAStop(currVO);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",50512,function(sym,e){GWAStop(currVO);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",51250,function(sym,e){GWAStop(currVO);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",52000,function(sym,e){GWAStop(currVO);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",52758,function(sym,e){GWAStop(currVO);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",53500,function(sym,e){GWAStop(currVO);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",54260,function(sym,e){GWAStop(currVO);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",55010,function(sym,e){GWAStop(currVO);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5663,function(sym,e){GWAPlay("music");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Mute}","click",function(sym,e){sym.$("Mute").hide();sym.$("Unmute").show();GWASetVol("intro",0);GWASetVol("music",0);GWASetVol("yellowStone",0);GWASetVol("greatSaltLake",0);GWASetVol("atacama",0);GWASetVol("bloodFalls",0);GWASetVol("villaLuz",0);GWASetVol("eastPacific",0);GWASetVol("europa",0);GWASetVol("lagunaVerde",0);GWASetVol("10Mars",0);GWASetVol("pitchLake",0);GWASetVol("seaIce",0);GWASetVol("tardigrades",0);GWASetVol("titan",0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Unmute}","click",function(sym,e){sym.$("Mute").show();sym.$("Unmute").hide();GWASetVol("intro",1);GWASetVol("music",0.2);GWASetVol("yellowStone",1);GWASetVol("greatSaltLake",1);GWASetVol("atacama",1);GWASetVol("bloodFalls",1);GWASetVol("villaLuz",1);GWASetVol("eastPacific",1);GWASetVol("europa",1);GWASetVol("lagunaVerde",1);GWASetVol("10Mars",1);GWASetVol("pitchLake",1);GWASetVol("seaIce",1);GWASetVol("tardigrades",1);GWASetVol("titan",1);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'GreatSaltLakeButton'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_GreatSaltLake}","mouseover",function(sym,e){sym.play("Grow");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_GreatSaltLake}","mouseout",function(sym,e){sym.play("Shrink");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",119,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",708,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_GreatSaltLake}","click",function(sym,e){sym.play("on");});
//Edge binding end
})("Button");
//Edge symbol end:'Button'

//=========================================================

//Edge symbol: 'Closebutton'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Group}","click",function(sym,e){});
//Edge binding end
})("Closebutton");
//Edge symbol end:'Closebutton'

//=========================================================

//Edge symbol: 'Symbol_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",119,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",369,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Ellipse}","mouseover",function(sym,e){sym.play('Grow1');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Ellipse}","mouseout",function(sym,e){sym.play('Shrink1');});
//Edge binding end
})("Symbol_1");
//Edge symbol end:'Symbol_1'

//=========================================================

//Edge symbol: 'ButtonON'
(function(symbolName){})("ButtonON");
//Edge symbol end:'ButtonON'

//=========================================================

//Edge symbol: 'StarsAndBackground'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",17750,function(sym,e){sym.play(0);});
//Edge binding end
})("StarsAndBackground");
//Edge symbol end:'StarsAndBackground'

//=========================================================

//Edge symbol: 'Symbol_2'
(function(symbolName){Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","complete",function(sym,e){sym.play(0);});
//Edge binding end
})("Asteroid");
//Edge symbol end:'Asteroid'
})(jQuery,AdobeEdge,"EDGE-6284994");
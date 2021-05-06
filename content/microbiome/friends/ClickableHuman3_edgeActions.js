
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;var currVO="none";
//Edge symbol: 'stage'
(function(symbolName){function fadeBackgroundImages(sym){if(sym.getVariable("gutVisible")){sym.getSymbol("GutRollover").playReverse();sym.setVariable("gutVisible",false);}
if(sym.getVariable("bloodVisible")){sym.getSymbol("Bloodstream").playReverse();sym.setVariable("bloodVisible",false);}
if(sym.getVariable("vaginaVisible")){sym.getSymbol("Vagina").playReverse();sym.setVariable("vaginaVisible",false);}
if(sym.getVariable("skinVisible")){sym.getSymbol("Skin").playReverse();sym.setVariable("skinVisible",false);}
if(sym.getVariable("skin2Visible")){sym.getSymbol("Skin2").playReverse();sym.setVariable("skin2Visible",false);}
if(sym.getVariable("sinusVisible")){sym.getSymbol("Sinus").playReverse();sym.setVariable("sinusVisible",false);}
if(sym.getVariable("brainVisible")){sym.getSymbol("Brain").playReverse();sym.setVariable("brainVisible",false);}
if(sym.getVariable("lymphVisible")){sym.getSymbol("Lymph").playReverse();sym.setVariable("lymphVisible",false);}
if(sym.getVariable("kidneysVisible")){sym.getSymbol("Kidneys").playReverse();sym.setVariable("kidneysVisible",false);}
if(sym.getVariable("gut2Visible")){sym.getSymbol("Gut2").playReverse();sym.setVariable("gut2Visible",false);}}
function hideAllDots(sym){sym.$("Nutrition1").hide();sym.$("Nutrition2").hide();sym.$("Nutrition3").hide();sym.$("Immunity1").hide();sym.$("Immunity2").hide();sym.$("Protect1").hide();sym.$("Protect2").hide();sym.$("Protect3").hide();sym.$("Maintenance1").hide();sym.$("Maintenance2").hide();sym.$("Maintenance3").hide();sym.$("Organ1").hide();sym.$("Organ2").hide();sym.$("AndMore1").hide();sym.$("AndMore2").hide();sym.$("NutritionLight").hide();sym.$("NutritionLightOn").hide();sym.$("ImmunityLight").hide();sym.$("ImmunityLightOn").hide();sym.$("ProtectionLight").hide();sym.$("ProtectionLightOn").hide();sym.$("MaintenanceLight").hide();sym.$("MaintenanceLightOn").hide();sym.$("OrganLight").hide();sym.$("OrganLightOn").hide();sym.$("AndMoreLight").hide();sym.$("AndMoreLightOn").hide();sym.$("Zoom").hide();}
Symbol.bindElementAction(compId,symbolName,"${_Nutrition1}","mouseover",function(sym,e){if(sym.getVariable("selectedItem")=="none"){sym.getSymbol("GutRollover").play();sym.setVariable("gutVisible",true);}
if(sym.getVariable("selectedItem")!="Nutrition1"){sym.getSymbol("Nutrition1").play("Rollover");}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Nutrition1}","mouseout",function(sym,e){if(sym.getVariable("selectedItem")=="none"){sym.getSymbol("GutRollover").playReverse();sym.setVariable("gutVisible",false);}
if(sym.getVariable("selectedItem")!="Nutrition1"){sym.getSymbol("Nutrition1").playReverse();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Nutrition1}","click",function(sym,e){if(sym.getVariable("selectedItem")!="none"){sym.getSymbol(sym.getVariable("selectedItem")).playReverse();sym.$(sym.getVariable("selectedItem")).css("pointer-events","auto");}
if(sym.getVariable("selectedItem")=="Nutrition3"){sym.getSymbol("Bloodstream").playReverse();sym.setVariable("bloodVisible",false);}
sym.getSymbol("Text").play("Produce");sym.setVariable("selectedItem","Nutrition1");sym.$("Nutrition1").css("pointer-events","none");GWAStop(currVO);});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){sym.setVariable("selectedItem","none");sym.setVariable("selectedTab","none");sym.$("Title2").css("pointer-events","none");sym.$("Text").css("pointer-events","none");sym.$("StartButton").css("pointer-events","none");sym.$("AndMoreLight").css("pointer-events","none");sym.$("NutritionLight").css("pointer-events","none");sym.$("ImmunityLight").css("pointer-events","none");sym.$("ProtectionLight").css("pointer-events","none");sym.$("MaintenanceLight").css("pointer-events","none");sym.$("MaintenanceLightOn").css("pointer-events","none");sym.$("OrganLight").css("pointer-events","none");sym.$("GutMicrobe1").css("pointer-events","none");sym.$("NextButton2").css("pointer-events","none");var buzzLoaded=false;var gwaLoaded=false;yepnope({load:"includes/buzz.min.js",callback:function(){buzzLoaded=true;loadSounds();}});yepnope({load:"includes/GSLCWebAudio.js",callback:function(){gwaLoaded=true;loadSounds();}});function loadSounds(){if(buzzLoaded==true&&gwaLoaded==true){GWASound("music","sound/yourMicrobialFriends",true);GWASetVol("music",0.1);GWASound("ocean","sound/Ocean",true);GWASetVol("ocean",0.03);GWASound("intro1","sound/Intro1",false);GWASound("intro2","sound/Intro2",false);GWASound("vo1","sound/vo1",false);GWASound("vo2","sound/vo2",false);GWASound("vo3","sound/vo3",false);GWASound("vo4","sound/vo4",false);GWASound("vo5","sound/vo5",false);GWASound("vo6","sound/vo6",false);GWASound("vo7","sound/vo7",false);GWASound("vo8","sound/vo8",false);GWASound("vo9","sound/vo9",false);GWASound("vo10","sound/vo10",false);GWASound("vo11","sound/vo11",false);GWASound("vo12","sound/vo12",false);GWASound("vo13","sound/vo13",false);GWASound("vo14","sound/vo14",false);GWASound("vo15","sound/vo15",false);}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Nutrition2}","mouseover",function(sym,e){if(sym.getVariable("selectedItem")=="none"||sym.getVariable("selectedItem")=="NutritionButton"){sym.getSymbol("GutRollover").play();sym.setVariable("gutVisible",true);}
if(sym.getVariable("selectedItem")!="Nutrition2"){sym.getSymbol("Nutrition2").play("Rollover");}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Nutrition2}","mouseout",function(sym,e){if(sym.getVariable("selectedItem")=="none"||sym.getSymbol("selectedItem")=="NutritionButton"){sym.getSymbol("GutRollover").playReverse();sym.setVariable("gutVisible",false);}
if(sym.getVariable("selectedItem")!="Nutrition2"){sym.getSymbol("Nutrition2").playReverse();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Nutrition2}","click",function(sym,e){if(sym.getVariable("selectedItem")!="none"){sym.getSymbol(sym.getVariable("selectedItem")).playReverse();sym.$(sym.getVariable("selectedItem")).css("pointer-events","auto");}
if(sym.getVariable("selectedItem")=="Nutrition3"){sym.getSymbol("Bloodstream").playReverse();sym.setVariable("bloodVisible",false);}
sym.getSymbol("Text").play("Extract");sym.setVariable("selectedItem","Nutrition2");sym.$("Nutrition2").css("pointer-events","none");GWAStop(currVO);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Nutrition3}","mouseover",function(sym,e){if(sym.getVariable("selectedItem")=="none"){sym.getSymbol("GutRollover").play();sym.setVariable("gutVisible",true);}
if(sym.getVariable("selectedItem")!="Nutrition3"){sym.getSymbol("Nutrition3").play("Rollover");sym.getSymbol("Bloodstream").play();sym.setVariable("bloodVisible",true);}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Nutrition3}","mouseout",function(sym,e){if(sym.getVariable("selectedItem")=="none"){sym.getSymbol("GutRollover").playReverse();sym.setVariable("gutVisible",false);}
if(sym.getVariable("selectedItem")!="Nutrition3"){sym.getSymbol("Nutrition3").playReverse();sym.getSymbol("Bloodstream").playReverse();sym.setVariable("bloodVisible",false);}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Nutrition3}","click",function(sym,e){if(sym.getVariable("selectedItem")!="none"){sym.getSymbol(sym.getVariable("selectedItem")).playReverse();sym.$(sym.getVariable("selectedItem")).css("pointer-events","auto");}
sym.getSymbol("Text").play("Control");sym.setVariable("selectedItem","Nutrition3");sym.$("Nutrition3").css("pointer-events","none");GWAStop(currVO);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Immunity1}","mouseover",function(sym,e){if(sym.getVariable("selectedItem")=="none"){sym.getSymbol("GutRollover").play();sym.setVariable("gutVisible",true);}
if(sym.getVariable("selectedItem")!="Immunity1"){sym.getSymbol("Immunity1").play("Rollover");}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Immunity1}","mouseout",function(sym,e){if(sym.getVariable("selectedItem")=="none"){sym.getSymbol("GutRollover").playReverse();sym.setVariable("gutVisible",false);}
if(sym.getVariable("selectedItem")!="Immunity1"){sym.getSymbol("Immunity1").playReverse();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Immunity2}","mouseover",function(sym,e){if(sym.getVariable("selectedItem")=="none"){sym.getSymbol("GutRollover").play();sym.setVariable("gutVisible",true);}
if(sym.getVariable("selectedItem")!="Immunity2"){sym.getSymbol("Immunity2").play("Rollover");}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Immunity2}","mouseout",function(sym,e){if(sym.getVariable("selectedItem")=="none"){sym.getSymbol("GutRollover").playReverse();sym.setVariable("gutVisible",false);}
if(sym.getVariable("selectedItem")!="Immunity2"){sym.getSymbol("Immunity2").playReverse();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Immunity2}","click",function(sym,e){if(sym.getVariable("selectedItem")!="none"){sym.getSymbol(sym.getVariable("selectedItem")).playReverse();sym.$(sym.getVariable("selectedItem")).css("pointer-events","auto");}
sym.getSymbol("Text").play("Decrease");sym.setVariable("selectedItem","Immunity2");sym.$("Immunity2").css("pointer-events","none");GWAStop(currVO);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Immunity1}","click",function(sym,e){if(sym.getVariable("selectedItem")!="none"){sym.getSymbol(sym.getVariable("selectedItem")).playReverse();sym.$(sym.getVariable("selectedItem")).css("pointer-events","auto");}
sym.getSymbol("Text").play("Train");sym.setVariable("selectedItem","Immunity1");sym.$("Immunity1").css("pointer-events","none");GWAStop(currVO);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Protect1}","click",function(sym,e){if(sym.getVariable("selectedItem")!="none"){sym.getSymbol(sym.getVariable("selectedItem")).playReverse();sym.$(sym.getVariable("selectedItem")).css("pointer-events","auto");}
if(sym.getVariable("selectedItem")=="Protect2"){sym.getSymbol("Skin").playReverse();sym.setVariable("skinVisible",false);}
if(sym.getVariable("selectedItem")=="Protect3"){sym.getSymbol("Vagina").playReverse();sym.setVariable("vaginaVisible",false);}
sym.getSymbol("Text").play("Competition");sym.setVariable("selectedItem","Protect1");sym.$("Protect1").css("pointer-events","none");GWAStop(currVO);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Protect1}","mouseover",function(sym,e){if(sym.getVariable("selectedItem")!="Protect1"){sym.getSymbol("Protect1").play("Rollover");sym.getSymbol("Sinus").play();sym.setVariable("sinusVisible",true);}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Protect1}","mouseout",function(sym,e){if(sym.getVariable("selectedItem")!="Protect1"){sym.getSymbol("Protect1").playReverse();sym.getSymbol("Sinus").playReverse();sym.setVariable("sinusVisible",false);}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Protect3}","click",function(sym,e){if(sym.getVariable("selectedItem")!="none"){sym.getSymbol(sym.getVariable("selectedItem")).playReverse();sym.$(sym.getVariable("selectedItem")).css("pointer-events","auto");}
if(sym.getVariable("selectedItem")=="Protect1"){sym.getSymbol("Sinus").playReverse();sym.setVariable("sinusVisible",false);}
if(sym.getVariable("selectedItem")=="Protect2"){sym.getSymbol("Skin").playReverse();sym.setVariable("skinVisible",false);}
sym.getSymbol("Text").play("Change");sym.setVariable("selectedItem","Protect3");sym.$("Protect3").css("pointer-events","none");GWAStop(currVO);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Protect3}","mouseover",function(sym,e){if(sym.getVariable("selectedItem")!="Protect3"){sym.getSymbol("Protect3").play("Rollover");sym.getSymbol("Vagina").play();sym.setVariable("vaginaVisible",true);}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Protect3}","mouseout",function(sym,e){if(sym.getVariable("selectedItem")!="Protect3"){sym.getSymbol("Protect3").playReverse();sym.getSymbol("Vagina").playReverse();sym.setVariable("vaginaVisible",false);}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Protect2}","click",function(sym,e){if(sym.getVariable("selectedItem")!="none"){sym.getSymbol(sym.getVariable("selectedItem")).playReverse();sym.$(sym.getVariable("selectedItem")).css("pointer-events","auto");}
if(sym.getVariable("selectedItem")=="Protect1"){sym.getSymbol("Sinus").playReverse();sym.setVariable("sinusVisible",false);}
if(sym.getVariable("selectedItem")=="Protect3"){sym.getSymbol("Vagina").playReverse();sym.setVariable("vaginaVisible",false);}
sym.getSymbol("Text").play("AntiMicrobe");sym.setVariable("selectedItem","Protect2");sym.$("Protect2").css("pointer-events","none");GWAStop(currVO);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Protect2}","mouseover",function(sym,e){if(sym.getVariable("selectedItem")!="Protect2"){sym.getSymbol("Protect2").play("Rollover");sym.getSymbol("Skin").play();sym.setVariable("skinVisible",true);}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Protect2}","mouseout",function(sym,e){if(sym.getVariable("selectedItem")!="Protect2"){sym.getSymbol("Protect2").playReverse();sym.getSymbol("Skin").playReverse();sym.setVariable("skinVisible",false);}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){hideAllDots(sym);sym.$("NutritionButton").hide();sym.$("ImmunityButton").hide();sym.$("MaintenanceButton").hide();sym.$("ProtectionButton").hide();sym.$("OrganButton").hide();sym.$("AndMoreButton").hide();sym.$("MicrobeDNA").hide();sym.$("GutMicrobe1").hide();sym.$("GutMicrobe2").hide();sym.$("NextButton1").hide();sym.$("NextButton2").hide();sym.$("Brain").hide();sym.$("Sinus").hide();sym.$("Gut2").hide();sym.$("Kidneys").hide();sym.$("Vagina").hide();sym.$("Skin2").hide();sym.$("Skin").hide();sym.$("Lymph").hide();sym.$("Bloodstream").hide();sym.$("Text").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Maintenance1}","click",function(sym,e){if(sym.getVariable("selectedItem")!="none"){sym.getSymbol(sym.getVariable("selectedItem")).playReverse();sym.$(sym.getVariable("selectedItem")).css("pointer-events","auto");}
if(sym.getVariable("selectedItem")=="Maintenance2"||sym.getVariable("selectedItem")=="Maintenance3"){sym.getSymbol("GutRollover").playReverse();sym.setVariable("gutVisible",false);}
sym.getSymbol("Text").play("Keep");sym.setVariable("selectedItem","Maintenance1");sym.$("Maintenance1").css("pointer-events","none");GWAStop(currVO);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Maintenance1}","mouseover",function(sym,e){if(sym.getVariable("selectedItem")!="Maintenance1"){sym.getSymbol("Maintenance1").play("Rollover");sym.getSymbol("Skin2").play();sym.setVariable("skin2Visible",true);}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Maintenance1}","mouseout",function(sym,e){if(sym.getVariable("selectedItem")!="Maintenance1"){sym.getSymbol("Maintenance1").playReverse();sym.getSymbol("Skin2").playReverse();sym.setVariable("skin2Visible",false);}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Maintenance2}","click",function(sym,e){if(sym.getVariable("selectedItem")!="none"){sym.getSymbol(sym.getVariable("selectedItem")).playReverse();sym.$(sym.getVariable("selectedItem")).css("pointer-events","auto");}
if(sym.getVariable("selectedItem")=="Maintenance1"){sym.getSymbol("Skin2").playReverse();sym.setVariable("skin2Visible",false);}
sym.getSymbol("Text").play("Promote");sym.setVariable("selectedItem","Maintenance2");sym.$("Maintenance2").css("pointer-events","none");GWAStop(currVO);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Maintenance2}","mouseover",function(sym,e){if(sym.getVariable("selectedItem")=="none"||sym.getVariable("selectedItem")=="Maintenance1"){sym.getSymbol("GutRollover").play();sym.setVariable("gutVisible",true);}
if(sym.getVariable("selectedItem")!="Maintenance2"){sym.getSymbol("Maintenance2").play("Rollover");}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Maintenance2}","mouseout",function(sym,e){if(sym.getVariable("selectedItem")=="none"){sym.getSymbol("GutRollover").playReverse();sym.setVariable("gutVisible",false);}
if(sym.getVariable("selectedItem")!="Maintenance2"){sym.getSymbol("Maintenance2").playReverse();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Maintenance3}","click",function(sym,e){if(sym.getVariable("selectedItem")!="none"){sym.getSymbol(sym.getVariable("selectedItem")).playReverse();sym.$(sym.getVariable("selectedItem")).css("pointer-events","auto");}
if(sym.getVariable("selectedItem")=="Maintenance1"){sym.getSymbol("Skin2").playReverse();sym.setVariable("skin2Visible",false);}
sym.getSymbol("Text").play("Maintain");sym.setVariable("selectedItem","Maintenance3");sym.$("Maintenance3").css("pointer-events","none");GWAStop(currVO);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Maintenance3}","mouseout",function(sym,e){if(sym.getVariable("selectedItem")=="none"){sym.getSymbol("GutRollover").playReverse();sym.setVariable("gutVisible",false);}
if(sym.getVariable("selectedItem")!="Maintenance3"){sym.getSymbol("Maintenance3").playReverse();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Maintenance3}","mouseover",function(sym,e){if(sym.getVariable("selectedItem")=="none"||sym.getVariable("selectedItem")=="Maintenance1"){sym.getSymbol("GutRollover").play();sym.setVariable("gutVisible",true);}
if(sym.getVariable("selectedItem")!="Maintenance3"){sym.getSymbol("Maintenance3").play("Rollover");}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Organ1}","click",function(sym,e){if(sym.getVariable("selectedItem")!="none"){sym.getSymbol(sym.getVariable("selectedItem")).playReverse();sym.$(sym.getVariable("selectedItem")).css("pointer-events","auto");}
if(sym.getVariable("selectedItem")=="Organ2"){sym.getSymbol("Lymph").playReverse();sym.setVariable("lymphVisible",false);}
sym.getSymbol("Text").play("Brain");sym.setVariable("selectedItem","Organ1");sym.$("Organ1").css("pointer-events","none");GWAStop(currVO);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Organ1}","mouseover",function(sym,e){if(sym.getVariable("selectedItem")!="Organ1"){sym.getSymbol("Organ1").play("Rollover");sym.getSymbol("Brain").play();sym.setVariable("brainVisible",true);}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Organ1}","mouseout",function(sym,e){if(sym.getVariable("selectedItem")!="Organ1"){sym.getSymbol("Organ1").playReverse();sym.getSymbol("Brain").playReverse();sym.setVariable("brainVisible",false);}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Organ2}","click",function(sym,e){if(sym.getVariable("selectedItem")!="none"){sym.getSymbol(sym.getVariable("selectedItem")).playReverse();sym.$(sym.getVariable("selectedItem")).css("pointer-events","auto");}
if(sym.getVariable("selectedItem")=="Organ1"){sym.getSymbol("Brain").playReverse();sym.setVariable("brainVisible",false);}
sym.getSymbol("Text").play("Lymph");sym.setVariable("selectedItem","Organ2");sym.$("Organ2").css("pointer-events","none");GWAStop(currVO);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Organ2}","mouseover",function(sym,e){if(sym.getVariable("selectedItem")!="Organ2"){sym.getSymbol("Organ2").play("Rollover");sym.getSymbol("Lymph").play();sym.setVariable("lymphVisible",true);}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Organ2}","mouseout",function(sym,e){if(sym.getVariable("selectedItem")!="Organ2"){sym.getSymbol("Organ2").playReverse();sym.getSymbol("Lymph").playReverse();sym.setVariable("lymphVisible",false);}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_AndMore1}","click",function(sym,e){if(sym.getVariable("selectedItem")!="none"){sym.getSymbol(sym.getVariable("selectedItem")).playReverse();sym.$(sym.getVariable("selectedItem")).css("pointer-events","auto");}
if(sym.getVariable("selectedItem")=="AndMore2"){sym.getSymbol("Gut2").playReverse();sym.setVariable("gut2Visible",false);}
sym.getSymbol("Text").play("Protect");sym.setVariable("selectedItem","AndMore1");sym.$("AndMore1").css("pointer-events","none");GWAStop(currVO);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_AndMore1}","mouseover",function(sym,e){if(sym.getVariable("selectedItem")!="AndMore1"){sym.getSymbol("AndMore1").play("Rollover");sym.getSymbol("Kidneys").play();sym.getSymbol("Bloodstream").play();sym.setVariable("kidneysVisible",true);sym.setVariable("bloodVisible",true);}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_AndMore1}","mouseout",function(sym,e){if(sym.getVariable("selectedItem")!="AndMore1"){sym.getSymbol("AndMore1").playReverse();sym.getSymbol("Kidneys").playReverse();sym.getSymbol("Bloodstream").playReverse();sym.setVariable("kidneysVisible",false);sym.setVariable("bloodVisible",false);}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_AndMore2}","click",function(sym,e){if(sym.getVariable("selectedItem")!="none"){sym.getSymbol(sym.getVariable("selectedItem")).playReverse();sym.$(sym.getVariable("selectedItem")).css("pointer-events","auto");}
if(sym.getVariable("selectedItem")=="AndMore1"){sym.getSymbol("Bloodstream").playReverse();sym.getSymbol("Kidneys").playReverse();sym.setVariable("bloodVisible",false);sym.setVariable("kidneysVisible",false);}
sym.getSymbol("Text").play("Blood");sym.setVariable("selectedItem","AndMore2");sym.$("AndMore2").css("pointer-events","none");GWAStop(currVO);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_AndMore2}","mouseover",function(sym,e){if(sym.getVariable("selectedItem")!="AndMore2"){sym.getSymbol("AndMore2").play("Rollover");sym.getSymbol("Gut2").play();sym.setVariable("gut2Visible",true);}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_AndMore2}","mouseout",function(sym,e){if(sym.getVariable("selectedItem")!="AndMore2"){sym.getSymbol("AndMore2").playReverse();sym.getSymbol("Gut2").playReverse();sym.setVariable("gut2Visible",false);}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_NutritionButton}","click",function(sym,e){hideAllDots(sym);sym.$("Nutrition1").show();sym.$("Nutrition2").show();sym.$("Nutrition3").show();sym.$("NutritionLightOn").show();if(sym.getVariable("selectedTab")!="NutritionButton"){sym.getSymbol("Nutrition1").play("Click");sym.getSymbol("Nutrition2").play("Click");sym.getSymbol("Nutrition3").play("Click");}
fadeBackgroundImages(sym);if(sym.getVariable("selectedItem")!="none"){sym.getSymbol(sym.getVariable("selectedItem")).stop(0);sym.$(sym.getVariable("selectedItem")).css("pointer-events","auto");}
sym.setVariable("selectedItem","none");sym.setVariable("selectedTab","NutritionButton");GWAStop(currVO);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ImmunityButton}","click",function(sym,e){hideAllDots(sym);sym.$("ImmunityLightOn").show();sym.$("ImmunityLight").hide();sym.$("Immunity1").show();sym.$("Immunity2").show();if(sym.getVariable("selectedTab")!="ImmunityButton"){sym.getSymbol("Immunity1").play("Click");sym.getSymbol("Immunity2").play("Click");}
fadeBackgroundImages(sym);if(sym.getVariable("selectedItem")!="none"){sym.getSymbol(sym.getVariable("selectedItem")).stop(0);sym.$(sym.getVariable("selectedItem")).css("pointer-events","auto");}
sym.setVariable("selectedItem","none");sym.setVariable("selectedTab","ImmunityButton");GWAStop(currVO);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ProtectionButton}","click",function(sym,e){hideAllDots(sym);sym.$("Protect1").show();sym.$("Protect2").show();sym.$("Protect3").show();sym.$("ProtectionLightOn").show();if(sym.getVariable("selectedTab")!="ProtectionButton"){sym.getSymbol("Protect1").play("Click");sym.getSymbol("Protect2").play("Click");sym.getSymbol("Protect3").play("Click");}
fadeBackgroundImages(sym);if(sym.getVariable("selectedItem")!="none"){sym.getSymbol(sym.getVariable("selectedItem")).stop(0);sym.$(sym.getVariable("selectedItem")).css("pointer-events","auto");}
sym.setVariable("selectedItem","none");sym.setVariable("selectedTab","ProtectionButton");GWAStop(currVO);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_MaintenanceButton}","click",function(sym,e){hideAllDots(sym);if(sym.getVariable("selectedTab")!="MaintenanceButton"){sym.getSymbol("Maintenance1").play("Click");sym.getSymbol("Maintenance2").play("Click");sym.getSymbol("Maintenance3").play("Click");sym.$("Maintenance1").show();sym.$("Maintenance2").show();sym.$("Maintenance3").show();sym.$("MaintenanceLightOn").show();}
fadeBackgroundImages(sym);if(sym.getVariable("selectedItem")!="none"){sym.getSymbol(sym.getVariable("selectedItem")).stop(0);sym.$(sym.getVariable("selectedItem")).css("pointer-events","auto");}
sym.setVariable("selectedItem","none");sym.setVariable("selectedTab","MaintenanceButton");GWAStop(currVO);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_OrganButton}","click",function(sym,e){hideAllDots(sym);sym.$("Organ1").show();sym.$("Organ2").show();sym.$("OrganLightOn").show();if(sym.getVariable("selectedTab")!="OrganButton"){sym.getSymbol("Organ1").play("Click");sym.getSymbol("Organ2").play("Click");}
fadeBackgroundImages(sym);if(sym.getVariable("selectedItem")!="none"){sym.getSymbol(sym.getVariable("selectedItem")).stop(0);sym.$(sym.getVariable("selectedItem")).css("pointer-events","auto");}
sym.setVariable("selectedItem","none");sym.setVariable("selectedTab","OrganButton");GWAStop(currVO);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_AndMoreButton}","click",function(sym,e){hideAllDots(sym);sym.$("AndMore1").show();sym.$("AndMore2").show();sym.$("AndMoreLightOn").show();if(sym.getVariable("selectedTab")!="AndMoreButton"){sym.getSymbol("AndMore1").play("Click");sym.getSymbol("AndMore2").play("Click");}
fadeBackgroundImages(sym);if(sym.getVariable("selectedItem")!="none"){sym.getSymbol(sym.getVariable("selectedItem")).stop(0);sym.$(sym.getVariable("selectedItem")).css("pointer-events","auto");}
sym.setVariable("selectedItem","none");sym.setVariable("selectedTab","AndMoreButton");GWAStop(currVO);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_NutritionButton}","mouseover",function(sym,e){sym.$("NutritionLight").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_NutritionButton}","mouseout",function(sym,e){if(sym.getVariable("selectedTab")!="NutritionButton"){sym.$("NutritionLight").hide();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ImmunityButton}","mouseover",function(sym,e){sym.$("ImmunityLight").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ImmunityButton}","mouseout",function(sym,e){if(sym.getVariable("selectedTab")!="ImmunityButton"){sym.$("ImmunityLight").hide();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ProtectionButton}","mouseover",function(sym,e){sym.$("ProtectionLight").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ProtectionButton}","mouseout",function(sym,e){if(sym.getVariable("selectedTab")!="ProtectionButton"){sym.$("ProtectionLight").hide();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_MaintenanceButton}","mouseout",function(sym,e){if(sym.getVariable("selectedTab")!="MaintenanceButton"){sym.$("MaintenanceLight").hide();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_MaintenanceButton}","mouseover",function(sym,e){if(sym.getVariable("selectedTab")!="MaintenanceButton"){sym.$("MaintenanceLight").show();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_AndMoreButton}","mouseover",function(sym,e){sym.$("AndMoreLight").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_AndMoreButton}","mouseout",function(sym,e){if(sym.getVariable("selectedTab")!="AndMoreButton"){sym.$("AndMoreLight").hide();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_OrganButton}","mouseout",function(sym,e){if(sym.getVariable("selectedTab")!="OrganButton"){sym.$("OrganLight").hide();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_OrganButton}","mouseover",function(sym,e){sym.$("OrganLight").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_GutZoomButton}","click",function(sym,e){sym.$("GutMicrobe1").show();sym.$("GutMicrobe2").show();sym.$("Text").show();sym.getSymbol("GutZoomButton").play();sym.getSymbol("GutMicrobe1").play();sym.getSymbol("GutMicrobe2").play();sym.getSymbol("Text").play("Intro1");sym.$("NextButton1").show();sym.getSymbol("NextButton1").play();sym.$("MicrobeDNA").show();sym.$("MicrobeDNA").css("pointer-events","auto");sym.$("GutZoomButton").css("pointer-events","none");GWAPlay("music");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_GutZoomButton}","mouseover",function(sym,e){sym.getSymbol("GutRollover").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_GutZoomButton}","mouseout",function(sym,e){if(sym.getVariable("selectedItem")!="GutZoomButton"){sym.getSymbol("GutRollover").playReverse();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_NextButton2}","click",function(sym,e){sym.getComposition().getStage().$("GutMicrobe1").show();sym.getComposition().getStage().$("GutMicrobe2").show();sym.$("GutMicrobe1").css("pointer-events","none");sym.$("NextButton2").css("pointer-events","none");sym.$("MicrobeDNA").css("pointer-events","none");sym.$("GutMicrobe2").css("pointer-events","none");sym.$("NextButton1").css("pointer-events","none");sym.$("StartButton").css("pointer-events","none");sym.$("Lady").show();sym.$("Nutrition1").show();sym.$("Nutrition2").show();sym.$("Nutrition3").show();sym.$("NutritionLightOn").show();sym.$("NutritionButton").show();sym.$("ImmunityButton").show();sym.$("MaintenanceButton").show();sym.$("ProtectionButton").show();sym.$("OrganButton").show();sym.$("AndMoreButton").show();sym.$("Brain").show();sym.$("Sinus").show();sym.$("Gut2").show();sym.$("Kidneys").show();sym.$("Vagina").show();sym.$("GutRollover").show();sym.$("Skin2").show();sym.$("Skin").show();sym.$("Lymph").show();sym.$("Bloodstream").show();sym.setVariable("selectedItem","none");sym.setVariable("selectedTab","NutritionButton");sym.getSymbol("NextButton2").playReverse();sym.getSymbol("MicrobeDNA").play("Second");sym.getSymbol("GutMicrobe2").play("Second");sym.getSymbol("GutMicrobe1").play("Second");sym.getSymbol("Text").play("Intro");GWAStop(currVO);GWAPlay("ocean");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'Nutrition1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",495,function(sym,e){sym.stop();});
//Edge binding end
})("Nutrition1");
//Edge symbol end:'Nutrition1'

//=========================================================

//Edge symbol: 'Nutrition2'
(function(symbolName){})("Nutrition2");
//Edge symbol end:'Nutrition2'

//=========================================================

//Edge symbol: 'GutRollover'
(function(symbolName){})("GutRollover");
//Edge symbol end:'GutRollover'

//=========================================================

//Edge symbol: 'NutritionText'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",131,function(sym,e){sym.stop();currVO="vo2";GWAPlay("vo2");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",344,function(sym,e){sym.stop();currVO="vo1";GWAPlay("vo1");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",594,function(sym,e){sym.stop();currVO="vo3";GWAPlay("vo3");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",844,function(sym,e){sym.stop();currVO="vo4";GWAPlay("vo4");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1094,function(sym,e){sym.stop();currVO="vo5";GWAPlay("vo5");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1344,function(sym,e){sym.stop();currVO="vo6";GWAPlay("vo6");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1594,function(sym,e){sym.stop();currVO="vo7";GWAPlay("vo7");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1844,function(sym,e){sym.stop();currVO="vo8";GWAPlay("vo8");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2094,function(sym,e){sym.stop();currVO="vo9";GWAPlay("vo9");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2344,function(sym,e){sym.stop();currVO="vo10";GWAPlay("vo10");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2594,function(sym,e){sym.stop();currVO="vo11";GWAPlay("vo11");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2844,function(sym,e){sym.stop();currVO="vo12";GWAPlay("vo12");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3094,function(sym,e){sym.stop();currVO="vo13";GWAPlay("vo13");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3344,function(sym,e){sym.stop();currVO="vo14";GWAPlay("vo14");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3594,function(sym,e){sym.stop();currVO="vo15";GWAPlay("vo15");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4862,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6480,function(sym,e){sym.stop();currVO="intro2";GWAPlay("intro2");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5689,function(sym,e){sym.stop();currVO="intro1";GWAPlay("intro1");});
//Edge binding end
})("NutritionText");
//Edge symbol end:'NutritionText'

//=========================================================

//Edge symbol: 'Nutrition3'
(function(symbolName){})("Nutrition3");
//Edge symbol end:'Nutrition3'

//=========================================================

//Edge symbol: 'Bloodstream'
(function(symbolName){})("Bloodstream");
//Edge symbol end:'Bloodstream'

//=========================================================

//Edge symbol: 'TextBackground'
(function(symbolName){})("TextBackground");
//Edge symbol end:'TextBackground'

//=========================================================

//Edge symbol: 'Ellipse2'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",495,function(sym,e){sym.stop();});
//Edge binding end
})("Ellipse2");
//Edge symbol end:'Ellipse2'

//=========================================================

//Edge symbol: 'Ellipse3'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",495,function(sym,e){sym.stop();});
//Edge binding end
})("Ellipse3");
//Edge symbol end:'Ellipse3'

//=========================================================

//Edge symbol: 'Sinus'
(function(symbolName){})("Sinus");
//Edge symbol end:'Sinus'

//=========================================================

//Edge symbol: 'Ellipse4'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",495,function(sym,e){sym.stop();});
//Edge binding end
})("Ellipse4");
//Edge symbol end:'Ellipse4'

//=========================================================

//Edge symbol: 'Ellipse5'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",495,function(sym,e){sym.stop();});
//Edge binding end
})("Ellipse5");
//Edge symbol end:'Ellipse5'

//=========================================================

//Edge symbol: 'Ellipse6'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",495,function(sym,e){sym.stop();});
//Edge binding end
})("Ellipse6");
//Edge symbol end:'Ellipse6'

//=========================================================

//Edge symbol: 'Skin'
(function(symbolName){})("Skin");
//Edge symbol end:'Skin'

//=========================================================

//Edge symbol: 'Vagina'
(function(symbolName){})("Vagina");
//Edge symbol end:'Vagina'

//=========================================================

//Edge symbol: 'Skin2'
(function(symbolName){})("Skin2");
//Edge symbol end:'Skin2'

//=========================================================

//Edge symbol: 'Brain'
(function(symbolName){})("Brain");
//Edge symbol end:'Brain'

//=========================================================

//Edge symbol: 'Lymph'
(function(symbolName){})("Lymph");
//Edge symbol end:'Lymph'

//=========================================================

//Edge symbol: 'LargeIntestine'
(function(symbolName){})("LargeIntestine");
//Edge symbol end:'LargeIntestine'

//=========================================================

//Edge symbol: 'Kidneys'
(function(symbolName){})("Kidneys");
//Edge symbol end:'Kidneys'

//=========================================================

//Edge symbol: 'NutritionLight'
(function(symbolName){Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","complete",function(sym,e){sym.play();});
//Edge binding end
})("NutritionLight");
//Edge symbol end:'NutritionLight'

//=========================================================

//Edge symbol: 'ImmunityLight'
(function(symbolName){Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","complete",function(sym,e){sym.play();});
//Edge binding end
})("ImmunityLight");
//Edge symbol end:'ImmunityLight'

//=========================================================

//Edge symbol: 'ProtectionLight'
(function(symbolName){Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","complete",function(sym,e){sym.play();});
//Edge binding end
})("ProtectionLight");
//Edge symbol end:'ProtectionLight'

//=========================================================

//Edge symbol: 'MaintenanceLight'
(function(symbolName){Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","complete",function(sym,e){sym.play();});
//Edge binding end
})("MaintenanceLight");
//Edge symbol end:'MaintenanceLight'

//=========================================================

//Edge symbol: 'OrganLight'
(function(symbolName){Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","complete",function(sym,e){sym.play();});
//Edge binding end
})("OrganLight");
//Edge symbol end:'OrganLight'

//=========================================================

//Edge symbol: 'AndMoreLight'
(function(symbolName){Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","complete",function(sym,e){sym.play();});
//Edge binding end
})("AndMoreLight");
//Edge symbol end:'AndMoreLight'

//=========================================================

//Edge symbol: 'Zoom'
(function(symbolName){})("Zoom");
//Edge symbol end:'Zoom'

//=========================================================

//Edge symbol: 'GutZoom'
(function(symbolName){})("GutZoom");
//Edge symbol end:'GutZoom'

//=========================================================

//Edge symbol: 'GutMicrobe'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.getComposition().getStage().$("Lady").hide();sym.getComposition().getStage().$("Title2").hide();sym.getComposition().getStage().$("StartButton").hide();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.getComposition().getStage().$("GutZoomButton").hide();});
//Edge binding end
})("GutMicrobe");
//Edge symbol end:'GutMicrobe'

//=========================================================

//Edge symbol: 'StartLight'
(function(symbolName){Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","complete",function(sym,e){sym.play();});
//Edge binding end
})("StartLight");
//Edge symbol end:'StartLight'

//=========================================================

//Edge symbol: 'nextButton'
(function(symbolName){})("NextButton");
//Edge symbol end:'NextButton'

//=========================================================

//Edge symbol: 'NextLight'
(function(symbolName){Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","complete",function(sym,e){sym.play();});
//Edge binding end
})("NextLight");
//Edge symbol end:'NextLight'

//=========================================================

//Edge symbol: 'NextButton1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",9000,function(sym,e){});
//Edge binding end
})("NextButton1");
//Edge symbol end:'NextButton1'

//=========================================================

//Edge symbol: 'GutMicrobeRollover'
(function(symbolName){})("GutMicrobeRollover");
//Edge symbol end:'GutMicrobeRollover'

//=========================================================

//Edge symbol: 'GutZoom2'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3000,function(sym,e){sym.stop();});
//Edge binding end
})("GutZoom2");
//Edge symbol end:'GutZoom2'

//=========================================================

//Edge symbol: 'GutMicrobe2'
(function(symbolName){})("GutMicrobe2");
//Edge symbol end:'GutMicrobe2'

//=========================================================

//Edge symbol: 'GutMicrobe3'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Microbe_Web4}","click",function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2500,function(sym,e){sym.stop();});
//Edge binding end
})("GutMicrobe3");
//Edge symbol end:'GutMicrobe3'

//=========================================================

//Edge symbol: 'MicrobeDNA'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Gut_Microbe3}","click",function(sym,e){sym.play();sym.getComposition().getStage().$("NextButton2").show();sym.getComposition().getStage().getSymbol("Text").play("Intro2");sym.getComposition().getStage().getSymbol("NextButton2").play();sym.getComposition().getStage().$("NextButton2").css("pointer-events","auto");GWAStop(currVO);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.getComposition().getStage().$("NextButton1").hide();sym.getComposition().getStage().$("GutMicrobe1").hide();sym.getComposition().getStage().$("GutMicrobe2").hide();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2750,function(sym,e){sym.getComposition().getStage().$("GutMicrobe1").hide();sym.getComposition().getStage().$("GutMicrobe2").hide();sym.getComposition().getStage().$("MicrobeDNA").hide();sym.getComposition().getStage().$("NextButton2").hide();});
//Edge binding end
})("MicrobeDNA");
//Edge symbol end:'MicrobeDNA'

//=========================================================

//Edge symbol: 'NextButton2'
(function(symbolName){})("NextButton2");
//Edge symbol end:'NextButton2'

//=========================================================

//Edge symbol: 'NextButton2b'
(function(symbolName){})("NextButton2b");
//Edge symbol end:'NextButton2b'

//=========================================================

//Edge symbol: 'ImmunityLightOn'
(function(symbolName){Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","complete",function(sym,e){sym.play();});
//Edge binding end
})("ImmunityLightOn");
//Edge symbol end:'ImmunityLightOn'

//=========================================================

//Edge symbol: 'MaintenanceLightOn'
(function(symbolName){Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","complete",function(sym,e){sym.play();});
//Edge binding end
})("MaintenanceLightOn");
//Edge symbol end:'MaintenanceLightOn'

//=========================================================

//Edge symbol: 'ProtectionLightOn'
(function(symbolName){Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","complete",function(sym,e){sym.play();});
//Edge binding end
})("ProtectionLightOn");
//Edge symbol end:'ProtectionLightOn'

//=========================================================

//Edge symbol: 'OrganLightOn'
(function(symbolName){Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","complete",function(sym,e){sym.play();});
//Edge binding end
})("OrganLightOn");
//Edge symbol end:'OrganLightOn'

//=========================================================

//Edge symbol: 'NutritionLightOn'
(function(symbolName){Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","complete",function(sym,e){sym.play();});
//Edge binding end
})("NutritionLightOn");
//Edge symbol end:'NutritionLightOn'

//=========================================================

//Edge symbol: 'AndMoreLightOn'
(function(symbolName){Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","complete",function(sym,e){sym.play();});
//Edge binding end
})("AndMoreLightOn");
//Edge symbol end:'AndMoreLightOn'

//=========================================================

//Edge symbol: 'Preloader'
(function(symbolName){})("Preloader");
//Edge symbol end:'Preloader'

//=========================================================

//Edge symbol: 'NewStartButton'
(function(symbolName){})("StartButton");
//Edge symbol end:'StartButton'
})(jQuery,AdobeEdge,"EDGE-15754422");
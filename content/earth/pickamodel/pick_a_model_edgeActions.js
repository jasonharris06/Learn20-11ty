
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();sym.getSymbol("scenario1_text1").stop(1);sym.getSymbol("scenario1_text2").stop(1);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_pick_model_buttonA1}","click",function(sym,e){sym.getSymbol("pick_model_buttonA1").stop("over");sym.getSymbol("pick_model_buttonA2").stop("up");sym.$("pick_model_buttonA1").hide();sym.$("pick_model_buttonA2").show();sym.getSymbol("scenario1_text1").play("open");sym.getSymbol("scenario1_text2").play("close");sym.$("Click_Sound")[0].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_pick_model_buttonA2}","click",function(sym,e){sym.getSymbol("pick_model_buttonA2").stop("over");sym.getSymbol("pick_model_buttonA1").stop("up");sym.$("pick_model_buttonA2").hide();sym.$("pick_model_buttonA1").show();sym.getSymbol("scenario1_text2").play("open");sym.getSymbol("scenario1_text1").play("close");sym.$("Click_Sound")[0].play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",529,function(sym,e){sym.stop();sym.getSymbol("scenario2_text1").stop(1);sym.getSymbol("scenario2_text2").stop(1);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_pick_model_buttonB2}","click",function(sym,e){sym.getSymbol("pick_model_buttonB2").stop("over");sym.getSymbol("pick_model_buttonB1").stop("up");sym.$("pick_model_buttonB2").hide();sym.$("pick_model_buttonB1").show();sym.getSymbol("scenario2_text2").play("open");sym.getSymbol("scenario2_text1").play("close");sym.$("Click_Sound")[0].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_pick_model_buttonB1}","click",function(sym,e){sym.getSymbol("pick_model_buttonB1").stop("over");sym.getSymbol("pick_model_buttonB2").stop("up");sym.$("pick_model_buttonB1").hide();sym.$("pick_model_buttonB2").show();sym.getSymbol("scenario2_text1").play("open");sym.getSymbol("scenario2_text2").play("close");sym.$("Click_Sound")[0].play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1058,function(sym,e){sym.stop();sym.getSymbol("scenario3_text1").stop(1);sym.getSymbol("scenario3_text2").stop(1);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_pick_model_buttonC1}","click",function(sym,e){sym.getSymbol("pick_model_buttonC1").stop("over");sym.getSymbol("pick_model_buttonC2").stop("up");sym.$("pick_model_buttonC1").hide();sym.$("pick_model_buttonC2").show();sym.getSymbol("scenario3_text1").play("open");sym.getSymbol("scenario3_text2").play("close");sym.$("Click_Sound")[0].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_pick_model_buttonC2}","click",function(sym,e){sym.getSymbol("pick_model_buttonC2").stop("over");sym.getSymbol("pick_model_buttonC1").stop("up");sym.$("pick_model_buttonC2").hide();sym.$("pick_model_buttonC1").show();sym.getSymbol("scenario3_text2").play("open");sym.getSymbol("scenario3_text1").play("close");sym.$("Click_Sound")[0].play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1557,function(sym,e){sym.stop();sym.getSymbol("scenario4_text1").stop(1);sym.getSymbol("scenario4_text2").stop(1);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_pick_model_buttonD1}","click",function(sym,e){sym.getSymbol("pick_model_buttonD1").stop("over");sym.getSymbol("pick_model_buttonD2").stop("up");sym.$("pick_model_buttonD1").hide();sym.$("pick_model_buttonD2").show();sym.getSymbol("scenario4_text1").play("open");sym.getSymbol("scenario4_text2").play("close");sym.$("Click_Sound")[0].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_pick_model_buttonD2}","click",function(sym,e){sym.getSymbol("pick_model_buttonD2").stop("over");sym.getSymbol("pick_model_buttonD1").stop("up");sym.$("pick_model_buttonD2").hide();sym.$("pick_model_buttonD1").show();sym.getSymbol("scenario4_text2").play("open");sym.getSymbol("scenario4_text1").play("close");sym.$("Click_Sound")[0].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_next_scenario}","click",function(sym,e){sym.play();sym.$("Click_Sound2")[0].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_start_over}","click",function(sym,e){sym.play();sym.$("Click_Sound2")[0].play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1828,function(sym,e){sym.stop("begin");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1566,function(sym,e){sym.getSymbol("scenario4_text1").stop(1);sym.getSymbol("scenario4_text2").stop(1);sym.getSymbol("pick_model_buttonD1").stop("up");sym.getSymbol("pick_model_buttonD2").stop("up");sym.$("pick_model_buttonD1").show();sym.$("pick_model_buttonD2").show();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",9,function(sym,e){sym.getSymbol("pick_model_buttonA1").stop("up");sym.getSymbol("pick_model_buttonA2").stop("up");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",539,function(sym,e){sym.getSymbol("pick_model_buttonB1").stop("up");sym.getSymbol("pick_model_buttonB2").stop("up");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1067,function(sym,e){sym.getSymbol("pick_model_buttonC1").stop("up");sym.getSymbol("pick_model_buttonC2").stop("up");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'pick_model_button'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",122,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",59,function(sym,e){sym.stop();});
//Edge binding end
})("pick_model_button");
//Edge symbol end:'pick_model_button'

//=========================================================

//Edge symbol: 'scenario1_text1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",75,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",75,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
})("scenario1_text1");
//Edge symbol end:'scenario1_text1'

//=========================================================

//Edge symbol: 'scenario1_text1_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",75,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
})("scenario1_text2");
//Edge symbol end:'scenario1_text2'

//=========================================================

//Edge symbol: 'scenario1_text1_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",75,function(sym,e){sym.stop();});
//Edge binding end
})("scenario2_text1");
//Edge symbol end:'scenario2_text1'

//=========================================================

//Edge symbol: 'scenario2_text1_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",75,function(sym,e){sym.stop();});
//Edge binding end
})("scenario2_text2");
//Edge symbol end:'scenario2_text2'

//=========================================================

//Edge symbol: 'scenario1_text1_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",75,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",75,function(sym,e){sym.stop();});
//Edge binding end
})("scenario3_text1");
//Edge symbol end:'scenario3_text1'

//=========================================================

//Edge symbol: 'scenario3_text1_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",75,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",75,function(sym,e){sym.stop();});
//Edge binding end
})("scenario3_text2");
//Edge symbol end:'scenario3_text2'

//=========================================================

//Edge symbol: 'scenario3_text1_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",75,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",75,function(sym,e){sym.stop();});
//Edge binding end
})("scenario4_text1");
//Edge symbol end:'scenario4_text1'

//=========================================================

//Edge symbol: 'scenario3_text2_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",75,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",75,function(sym,e){sym.stop();});
//Edge binding end
})("scenario4_text2");
//Edge symbol end:'scenario4_text2'

//=========================================================

//Edge symbol: 'next_scenario'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",45,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
})("next_scenario");
//Edge symbol end:'next_scenario'

//=========================================================

//Edge symbol: 'next_scenario_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",45,function(sym,e){sym.stop();});
//Edge binding end
})("start_over");
//Edge symbol end:'start_over'
})(jQuery,AdobeEdge,"EDGE-89257354");
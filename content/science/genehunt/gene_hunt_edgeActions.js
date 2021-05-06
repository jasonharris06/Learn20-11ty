
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();sym.$("<link rel='stylesheet' type='text/css' href='Styles/main.css'>").appendTo("#Stage");sym.$("highlight1").hide();sym.$("highlight2").hide();sym.$("highlight3").hide();sym.$("highlight4").hide();sym.$("highlight5").hide();sym.$("hotspot2").hide();sym.$("hotspot2a").hide();sym.$("hotspot3").hide();sym.$("hotspot3a").hide();sym.$("hotspot4").hide();sym.$("hotspot4a").hide();sym.$("hotspot5").hide();sym.$("hotspot5a").hide();sym.$("hotspot6").hide();sym.$("hotspot6a").hide();sym.$("hotspot7").hide();sym.$("hotspot7a").hide();sym.$("hotspot8").hide();sym.$("check_mark_animate").hide();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",501,function(sym,e){sym.$("hotspot2").show();sym.$("hotspot2a").show();sym.$("hotspot3").show();sym.$("hotspot3a").show();sym.$("hotspot4").show();sym.$("hotspot4a").show();sym.$("hotspot5").show();sym.$("hotspot5a").show();sym.$("hotspot6").show();sym.$("hotspot6a").show();sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4953,function(sym,e){sym.stop();sym.$("hotspot7").show();sym.$("hotspot7a").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_hotspot1}","click",function(sym,e){sym.play();sym.$("hotspot1").hide();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",513,function(sym,e){sym.stop();sym.$("number_left").html("1");sym.$("check_mark_animate").show();sym.getSymbol("check_mark_animate").play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",524,function(sym,e){sym.stop();sym.$("number_left").html("2");sym.getSymbol("check_mark_animate").play(1);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",532,function(sym,e){sym.stop();sym.$("number_left").html("3");sym.getSymbol("check_mark_animate").play(1);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",544,function(sym,e){sym.stop();sym.$("number_left").html("4");sym.getSymbol("check_mark_animate").play(1);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",558,function(sym,e){sym.$("number_left").html("5");sym.getSymbol("check_mark_animate").play(1);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_hotspot5}","click",function(sym,e){sym.play();sym.$("highlight4").show();sym.$("hotspot5").hide();sym.$("hotspot5a").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_hotspot5a}","click",function(sym,e){sym.play();sym.$("highlight4").show();sym.$("hotspot5a").hide();sym.$("hotspot5").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_hotspot4}","click",function(sym,e){sym.play();sym.$("highlight3").show();sym.$("hotspot4a").hide();sym.$("hotspot4").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_hotspot4a}","click",function(sym,e){sym.play();sym.$("highlight3").show();sym.$("hotspot4a").hide();sym.$("hotspot4").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_hotspot3a}","click",function(sym,e){sym.play();sym.$("highlight2").show();sym.$("hotspot3a").hide();sym.$("hotspot3").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_hotspot3}","click",function(sym,e){sym.play();sym.$("highlight2").show();sym.$("hotspot3a").hide();sym.$("hotspot3").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_hotspot2}","click",function(sym,e){sym.play();sym.$("highlight1").show();sym.$("hotspot2a").hide();sym.$("hotspot2").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_hotspot2a}","click",function(sym,e){sym.play();sym.$("highlight1").show();sym.$("hotspot2").hide();sym.$("hotspot2a").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_hotspot6}","click",function(sym,e){sym.play();sym.$("highlight5").show();sym.$("hotspot6a").hide();sym.$("hotspot6").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_hotspot6a}","click",function(sym,e){sym.play();sym.$("highlight5").show();sym.$("hotspot6a").hide();sym.$("hotspot6").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_hotspot7a}","click",function(sym,e){sym.play();sym.$("hotspot7a").hide();sym.$("hotspot7").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_hotspot7}","click",function(sym,e){sym.play();sym.$("hotspot7a").hide();sym.$("hotspot7").hide();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6000,function(sym,e){sym.stop();sym.$("hotspot8").show();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",9000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_hotspot8}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){yepnope({nope:['jquery-ui-1.10.3.custom.min.js','jquery.ui.touch-punch.min.js'],complete:init});sym.$('dotted_boxes2').droppable("disable");sym.$('dotted_boxes3').droppable("disable");function init(){   
sym.$('creatureD').draggable({opacity:.5,revert:'invalid',scope:"hairy"});   
sym.$('creatureB').draggable({opacity:.5,revert:'invalid',scope:"hairy"});sym.$('creatureF').draggable({opacity:.5,revert:'invalid',scope:"hairy"});sym.$('creatureA').draggable({opacity:.5,revert:'invalid'});sym.$('creatureC').draggable({opacity:.5,revert:'invalid'});sym.$('creatureE').draggable({opacity:.5,revert:'invalid'});   sym.$('dotted_boxes').droppable({scope:"hairy"},{drop:function(event,ui){     ui.draggable.css('left',234);     ui.draggable.css('top',605);  ui.draggable.css('cursor','default');     ui.draggable.draggable("disable");sym.$('dotted_boxes').droppable("disable");sym.$("dotted_boxes2").show();sym.$('dotted_boxes2').droppable("enable");}});sym.$('dotted_boxes2').droppable({scope:"hairy"},{drop:function(event,ui){     ui.draggable.css('left',392);     ui.draggable.css('top',605);  ui.draggable.css('cursor','default');     ui.draggable.draggable("disable");sym.$('dotted_boxes2').droppable("disable");sym.$("dotted_boxes3").show();sym.$('dotted_boxes3').droppable("enable");}});sym.$('dotted_boxes3').droppable({scope:"hairy"},{drop:function(event,ui){     ui.draggable.css('left',550);     ui.draggable.css('top',605);  ui.draggable.css('cursor','default');     ui.draggable.draggable("disable");sym.$('dotted_boxes3').droppable("disable");sym.$("gene_label_part2").show();sym.play();}});}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",9500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_button_gene1}","click",function(sym,e){sym.$("answer_gene1").show();sym.getSymbol("answer_gene1").play(2);sym.$("answer_gene2").hide();sym.$("answer_gene3").hide();sym.$("answer_gene4").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_button_gene2}","click",function(sym,e){sym.$("answer_gene2").show();sym.getSymbol("answer_gene2").play(2);sym.$("answer_gene1").hide();sym.$("answer_gene3").hide();sym.$("answer_gene4").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_button_gene3}","click",function(sym,e){sym.$("answer_gene3").show();sym.getSymbol("answer_gene3").play(2);sym.$("answer_gene1").hide();sym.$("answer_gene2").hide();sym.$("answer_gene4").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_button_gene4}","click",function(sym,e){sym.$("answer_gene4").show();sym.getSymbol("answer_gene4").play(2);sym.$("answer_gene1").hide();sym.$("answer_gene2").hide();sym.$("answer_gene3").hide();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'check_mark_animate'
(function(symbolName){})("check_mark_animate");
//Edge symbol end:'check_mark_animate'

//=========================================================

//Edge symbol: 'level_one_end_pop'
(function(symbolName){})("level_one_end_pop");
//Edge symbol end:'level_one_end_pop'

//=========================================================

//Edge symbol: 'gene_label_part2'
(function(symbolName){})("gene_label_part2");
//Edge symbol end:'gene_label_part2'

//=========================================================

//Edge symbol: 'stand_in_creatures'
(function(symbolName){})("stand_in_creatures");
//Edge symbol end:'stand_in_creatures'

//=========================================================

//Edge symbol: 'answer_gene1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",754,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
})("answer_gene1");
//Edge symbol end:'answer_gene1'

//=========================================================

//Edge symbol: 'answer_gene1_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",754,function(sym,e){sym.stop();});
//Edge binding end
})("answer_gene2");
//Edge symbol end:'answer_gene2'

//=========================================================

//Edge symbol: 'answer_gene1_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",754,function(sym,e){sym.stop();});
//Edge binding end
})("answer_gene3");
//Edge symbol end:'answer_gene3'

//=========================================================

//Edge symbol: 'answer_gene1_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",754,function(sym,e){sym.stop();});
//Edge binding end
})("answer_gene4");
//Edge symbol end:'answer_gene4'
})(jQuery,AdobeEdge,"EDGE-1372343075");
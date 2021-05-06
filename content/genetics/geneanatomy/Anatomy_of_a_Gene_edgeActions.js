
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;var layers;function resetLayers(sym){console.log(layers);for(var i=0;i<layers.length;i++){layers[i].css("z-index","0");}}

//Edge symbol: 'stage'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){layers=new Array(sym.getSymbol("box_1").getSymbolElement(),sym.getSymbol("box_2").getSymbolElement(),sym.getSymbol("box_3").getSymbolElement(),sym.getSymbol("box_4").getSymbolElement(),sym.getSymbol("box_5").getSymbolElement(),sym.getSymbol("box_6").getSymbolElement(),sym.getSymbol("box_7").getSymbolElement());});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_box_3}","click",function(sym,e){resetLayers(sym);sym.getSymbol("box_3").getSymbolElement().css("z-index","10");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_box_2}","click",function(sym,e){resetLayers(sym);sym.getSymbol("box_2").getSymbolElement().css("z-index","10");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_box_1}","click",function(sym,e){resetLayers(sym);sym.getSymbol("box_1").getSymbolElement().css("z-index","10");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_box_4}","click",function(sym,e){resetLayers(sym);sym.getSymbol("box_4").getSymbolElement().css("z-index","10");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_box_5}","click",function(sym,e){resetLayers(sym);sym.getSymbol("box_5").getSymbolElement().css("z-index","10");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_box_6}","click",function(sym,e){resetLayers(sym);sym.getSymbol("box_6").getSymbolElement().css("z-index","10");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_box_7}","click",function(sym,e){resetLayers(sym);sym.getSymbol("box_7").getSymbolElement().css("z-index","10");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'box_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_close}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",743,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Button12}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_titleCopy}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Promoter}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Red}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_title}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_body}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle10}","click",function(sym,e){sym.playReverse();});
//Edge binding end
})("box_1");
//Edge symbol end:'box_1'

//=========================================================

//Edge symbol: 'box_2'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",743,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_close2Copy6}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Button2}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TextCopy2}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text2Copy6}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TextCopy6}","click",function(sym,e){sym.playReverse();});
//Edge binding end
})("box_2");
//Edge symbol end:'box_2'

//=========================================================

//Edge symbol: 'box_3'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",743,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_close2Copy5}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Button3}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TextCopy3}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TextCopy5}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text2Copy5}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ProteinCodingRegion}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Blue}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle11}","click",function(sym,e){sym.playReverse();});
//Edge binding end
})("box_3");
//Edge symbol end:'box_3'

//=========================================================

//Edge symbol: 'box_4'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",743,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_close2Copy4}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Button4}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TextCopy5}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_box4}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TextCopy4}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text2Copy4}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_pre-mRNA}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_spliceosome}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_excised}","click",function(sym,e){sym.playReverse();});
//Edge binding end
})("box_4");
//Edge symbol end:'box_4'

//=========================================================

//Edge symbol: 'box_5'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_close2Copy3}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",743,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Button5}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TextCopy6}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_spliceosome}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_excised}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_pre-mRNA}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text2Copy3}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TextCopy3}","click",function(sym,e){sym.playReverse();});
//Edge binding end
})("box_5");
//Edge symbol end:'box_5'

//=========================================================

//Edge symbol: 'box_6'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_close2Copy2}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",641,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Button6}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TextCopy7}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text2Copy2}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TextCopy2}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_startcodon}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_box4}","click",function(sym,e){sym.playReverse();});
//Edge binding end
})("box_6");
//Edge symbol end:'box_6'

//=========================================================

//Edge symbol: 'box_7'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",743,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_close2Copy}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Button7}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TextCopy8}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_stopcodon}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_box4}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TextCopy}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text2Copy}","click",function(sym,e){sym.playReverse();});
//Edge binding end
})("box_7");
//Edge symbol end:'box_7'

//=========================================================

//Edge symbol: 'box_8'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_close2}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",743,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Button8}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TextCopy9}","click",function(sym,e){sym.play();});
//Edge binding end
})("box_8");
//Edge symbol end:'box_8'

//=========================================================

//Edge symbol: 'box_9'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_close2}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",743,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Button9}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TextCopy10}","click",function(sym,e){sym.play();});
//Edge binding end
})("box_9");
//Edge symbol end:'box_9'

//=========================================================

//Edge symbol: 'close'
(function(symbolName){})("close");
//Edge symbol end:'close'

//=========================================================

//Edge symbol: 'arrow'
(function(symbolName){})("arrow");
//Edge symbol end:'arrow'
})(jQuery,AdobeEdge,"EDGE-685030234");
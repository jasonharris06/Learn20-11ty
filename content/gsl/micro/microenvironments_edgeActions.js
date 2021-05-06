/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${_button-bear}", "mouseover", function(sym, e) {
         sym.getSymbol("button-bear").stop(250);
         sym.getSymbol("highlight-bear2").stop(250);
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-bear}", "mouseout", function(sym, e) {
         sym.getSymbol("button-bear").stop(0);
         sym.getSymbol("highlight-bear2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-gilbert}", "mouseover", function(sym, e) {
         sym.getSymbol("button-gilbert").stop(250);
         sym.getSymbol("highlight-gilbert2").stop(250);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-gilbert}", "mouseout", function(sym, e) {
         sym.getSymbol("button-gilbert").stop(0);
         sym.getSymbol("highlight-gilbert2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-gunnison}", "mouseover", function(sym, e) {
         sym.getSymbol("button-gunnison").stop(250);
         sym.getSymbol("highlight-gunnison2").stop(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-gunnison}", "mouseout", function(sym, e) {
         sym.getSymbol("button-gunnison").stop(0);
         sym.getSymbol("highlight-gunnison2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-farmington}", "mouseover", function(sym, e) {
         sym.getSymbol("button-farmington").stop(250);
         sym.getSymbol("highlight-farmington2").stop(250);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-farmington}", "mouseout", function(sym, e) {
         sym.getSymbol("button-farmington").stop(0);
         sym.getSymbol("highlight-farmington2").stop(0);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-ponds}", "mouseover", function(sym, e) {
         sym.getSymbol("button-ponds").stop(250);
         sym.getSymbol("highlight-ponds2").stop(250);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-ponds}", "mouseout", function(sym, e) {
         sym.getSymbol("button-ponds").stop(0);
         sym.getSymbol("highlight-ponds2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-wetlands}", "mouseover", function(sym, e) {
         sym.getSymbol("button-wetlands").stop(250);
         sym.getSymbol("highlight-wetlands2").stop(250);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-wetlands}", "mouseout", function(sym, e) {
         sym.getSymbol("button-wetlands").stop(0);
         sym.getSymbol("highlight-wetlands2").stop(0);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-bear}", "click", function(sym, e) {
         sym.$("info-bear").show();
         sym.getSymbol("info-bear").play(1);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-farmington}", "click", function(sym, e) {
         sym.$("info-farmington").show();
         sym.getSymbol("info-farmington").play(1);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-gilbert}", "click", function(sym, e) {
         sym.$("info-gilbert").show();
         sym.getSymbol("info-gilbert").play(1);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-gunnison}", "click", function(sym, e) {
         sym.$("info-gunnison").show();
         sym.getSymbol("info-gunnison").play(1);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-ponds}", "click", function(sym, e) {
         sym.$("info-ponds").show();
         sym.getSymbol("info-ponds").play(1);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-wetlands}", "click", function(sym, e) {
         sym.$("info-wetlands").show();
         sym.getSymbol("info-wetlands").play(1);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-ogden}", "click", function(sym, e) {
         sym.$("info-ogden").show();
         sym.getSymbol("info-ogden").play(1);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-ogden}", "mouseover", function(sym, e) {
         sym.getSymbol("button-ogden").stop(250);
         sym.getSymbol("highlight-ogden2").stop(250);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-ogden}", "mouseout", function(sym, e) {
         sym.getSymbol("button-ogden").stop(0);
         sym.getSymbol("highlight-ogden2").stop(0);
         
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'button-bear'
   (function(symbolName) {   
   
   })("button-bear");
   //Edge symbol end:'button-bear'

   //=========================================================
   
   //Edge symbol: 'button-farmington'
   (function(symbolName) {   
   
   })("button-farmington");
   //Edge symbol end:'button-farmington'

   //=========================================================
   
   //Edge symbol: 'button-gilbert'
   (function(symbolName) {   
   
   })("button-gilbert");
   //Edge symbol end:'button-gilbert'

   //=========================================================
   
   //Edge symbol: 'button-gunnison'
   (function(symbolName) {   
   
   })("button-gunnison");
   //Edge symbol end:'button-gunnison'

   //=========================================================
   
   //Edge symbol: 'button-ponds'
   (function(symbolName) {   
   
   })("button-ponds");
   //Edge symbol end:'button-ponds'

   //=========================================================
   
   //Edge symbol: 'button-wetlands'
   (function(symbolName) {   
   
   })("button-wetlands");
   //Edge symbol end:'button-wetlands'

   //=========================================================
   
   //Edge symbol: 'highlight-bear'
   (function(symbolName) {   
   
   })("highlight-bear");
   //Edge symbol end:'highlight-bear'

   //=========================================================
   
   //Edge symbol: 'highlight-farmington'
   (function(symbolName) {   
   
   })("highlight-farmington");
   //Edge symbol end:'highlight-farmington'

   //=========================================================
   
   //Edge symbol: 'highlight-gilbert'
   (function(symbolName) {   
   
   })("highlight-gilbert");
   //Edge symbol end:'highlight-gilbert'

   //=========================================================
   
   //Edge symbol: 'highlight-gunnison'
   (function(symbolName) {   
   
   })("highlight-gunnison");
   //Edge symbol end:'highlight-gunnison'

   //=========================================================
   
   //Edge symbol: 'highlight-ogden'
   (function(symbolName) {   
   
   })("highlight-ogden");
   //Edge symbol end:'highlight-ogden'

   //=========================================================
   
   //Edge symbol: 'highlight-ponds'
   (function(symbolName) {   
   
   })("highlight-ponds");
   //Edge symbol end:'highlight-ponds'

   //=========================================================
   
   //Edge symbol: 'highlight-wetlands'
   (function(symbolName) {   
   
   })("highlight-wetlands");
   //Edge symbol end:'highlight-wetlands'

   //=========================================================
   
   //Edge symbol: 'button-previous'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("button-previous");
   //Edge symbol end:'button-previous'

   //=========================================================
   
   //Edge symbol: 'cysts-info'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_button-close}", "mouseover", function(sym, e) {
         sym.getSymbol("button-close").stop(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-close}", "mouseout", function(sym, e) {
         sym.getSymbol("button-close").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-close}", "click", function(sym, e) {
         
         sym.getComposition().getStage().$("cysts-info").hide();
         sym.getComposition().getStage().$("cysts-info").stop(0);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-more}", "mouseover", function(sym, e) {
         sym.getSymbol("button-more").stop(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-more}", "mouseout", function(sym, e) {
         sym.getSymbol("button-more").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-more}", "click", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-previous}", "click", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-previous}", "mouseover", function(sym, e) {
         sym.getSymbol("button-previous").stop(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-previous}", "mouseout", function(sym, e) {
         sym.getSymbol("button-previous").stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("cysts-info");
   //Edge symbol end:'cysts-info'

   //=========================================================
   
   //Edge symbol: 'button-more'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("button-more");
   //Edge symbol end:'button-more'

   //=========================================================
   
   //Edge symbol: 'button-close'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("button-close");
   //Edge symbol end:'button-close'

   //=========================================================
   
   //Edge symbol: 'cysts-info_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-close}", "mouseover", function(sym, e) {
         sym.getSymbol("button-close").stop(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-close}", "mouseout", function(sym, e) {
         sym.getSymbol("button-close").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-close}", "click", function(sym, e) {
         
         sym.getComposition().getStage().$("info-bear").hide();
         sym.getComposition().getStage().$("info-bear").stop(0);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-more}", "mouseover", function(sym, e) {
         sym.getSymbol("button-more").stop(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-more}", "mouseout", function(sym, e) {
         sym.getSymbol("button-more").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-more}", "click", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-previous}", "click", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-previous}", "mouseover", function(sym, e) {
         sym.getSymbol("button-previous").stop(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-previous}", "mouseout", function(sym, e) {
         sym.getSymbol("button-previous").stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("info-bear");
   //Edge symbol end:'info-bear'

   //=========================================================
   
   //Edge symbol: 'info-bear_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-close}", "mouseover", function(sym, e) {
         sym.getSymbol("button-close").stop(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-close}", "mouseout", function(sym, e) {
         sym.getSymbol("button-close").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-close}", "click", function(sym, e) {
         
         sym.getComposition().getStage().$("info-farmington").hide();
         sym.getComposition().getStage().$("info-farmington").stop(0);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-more}", "mouseover", function(sym, e) {
         sym.getSymbol("button-more").stop(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-more}", "mouseout", function(sym, e) {
         sym.getSymbol("button-more").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-more}", "click", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-previous}", "click", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-previous}", "mouseover", function(sym, e) {
         sym.getSymbol("button-previous").stop(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-previous}", "mouseout", function(sym, e) {
         sym.getSymbol("button-previous").stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("info-farmington");
   //Edge symbol end:'info-farmington'

   //=========================================================
   
   //Edge symbol: 'info-bear_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-close}", "mouseover", function(sym, e) {
         sym.getSymbol("button-close").stop(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-close}", "mouseout", function(sym, e) {
         sym.getSymbol("button-close").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-close}", "click", function(sym, e) {
         
         sym.getComposition().getStage().$("info-gilbert").hide();
         sym.getComposition().getStage().$("info-gilbert").stop(0);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-more}", "mouseover", function(sym, e) {
         sym.getSymbol("button-more").stop(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-more}", "mouseout", function(sym, e) {
         sym.getSymbol("button-more").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-more}", "click", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-previous}", "click", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-previous}", "mouseover", function(sym, e) {
         sym.getSymbol("button-previous").stop(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-previous}", "mouseout", function(sym, e) {
         sym.getSymbol("button-previous").stop(0);

      });
      //Edge binding end

   })("info-gilbert");
   //Edge symbol end:'info-gilbert'

   //=========================================================
   
   //Edge symbol: 'info-farmington_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-close}", "mouseover", function(sym, e) {
         sym.getSymbol("button-close").stop(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-close}", "mouseout", function(sym, e) {
         sym.getSymbol("button-close").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-close}", "click", function(sym, e) {
         
         sym.getComposition().getStage().$("info-gunnison").hide();
         sym.getComposition().getStage().$("info-gunnison").stop(0);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-more}", "mouseover", function(sym, e) {
         sym.getSymbol("button-more").stop(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-more}", "mouseout", function(sym, e) {
         sym.getSymbol("button-more").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-more}", "click", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-previous}", "click", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-previous}", "mouseover", function(sym, e) {
         sym.getSymbol("button-previous").stop(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-previous}", "mouseout", function(sym, e) {
         sym.getSymbol("button-previous").stop(0);

      });
      //Edge binding end

   })("info-gunnison");
   //Edge symbol end:'info-gunnison'

   //=========================================================
   
   //Edge symbol: 'button-gunnison_1'
   (function(symbolName) {   
   
   })("button-ogden");
   //Edge symbol end:'button-ogden'

   //=========================================================
   
   //Edge symbol: 'info-gilbert_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-close}", "mouseover", function(sym, e) {
         sym.getSymbol("button-close").stop(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-close}", "mouseout", function(sym, e) {
         sym.getSymbol("button-close").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-close}", "click", function(sym, e) {
         
         sym.getComposition().getStage().$("info-ogden").hide();
         sym.getComposition().getStage().$("info-ogden").stop(0);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-more}", "mouseover", function(sym, e) {
         sym.getSymbol("button-more").stop(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-more}", "mouseout", function(sym, e) {
         sym.getSymbol("button-more").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-more}", "click", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-previous}", "click", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-previous}", "mouseover", function(sym, e) {
         sym.getSymbol("button-previous").stop(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-previous}", "mouseout", function(sym, e) {
         sym.getSymbol("button-previous").stop(0);

      });
      //Edge binding end

   })("info-ogden");
   //Edge symbol end:'info-ogden'

   //=========================================================
   
   //Edge symbol: 'info-gilbert_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-close}", "mouseover", function(sym, e) {
         sym.getSymbol("button-close").stop(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-close}", "mouseout", function(sym, e) {
         sym.getSymbol("button-close").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-close}", "click", function(sym, e) {
         
         sym.getComposition().getStage().$("info-ponds").hide();
         sym.getComposition().getStage().$("info-ponds").stop(0);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-more}", "mouseover", function(sym, e) {
         sym.getSymbol("button-more").stop(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-more}", "mouseout", function(sym, e) {
         sym.getSymbol("button-more").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-more}", "click", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-previous}", "click", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-previous}", "mouseover", function(sym, e) {
         sym.getSymbol("button-previous").stop(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-previous}", "mouseout", function(sym, e) {
         sym.getSymbol("button-previous").stop(0);

      });
      //Edge binding end

   })("info-ponds");
   //Edge symbol end:'info-ponds'

   //=========================================================
   
   //Edge symbol: 'info-gunnison_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-close}", "mouseover", function(sym, e) {
         sym.getSymbol("button-close").stop(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-close}", "mouseout", function(sym, e) {
         sym.getSymbol("button-close").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-close}", "click", function(sym, e) {
         
         sym.getComposition().getStage().$("info-wetlands").hide();
         sym.getComposition().getStage().$("info-wetlands").stop(0);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-more}", "mouseover", function(sym, e) {
         sym.getSymbol("button-more").stop(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-more}", "mouseout", function(sym, e) {
         sym.getSymbol("button-more").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-more}", "click", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-previous}", "click", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-previous}", "mouseover", function(sym, e) {
         sym.getSymbol("button-previous").stop(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-previous}", "mouseout", function(sym, e) {
         sym.getSymbol("button-previous").stop(0);

      });
      //Edge binding end

   })("info-wetlands");
   //Edge symbol end:'info-wetlands'

})(jQuery, AdobeEdge, "EDGE-109877476");
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
      
      
      Symbol.bindElementAction(compId, symbolName, "${_button-dna}", "click", function(sym, e) {
         sym.$("info-dna").show();
         sym.getSymbol("info-dna").play(1);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-mrna}", "click", function(sym, e) {
         sym.$("info-mrna").show();
         sym.getSymbol("info-mrna").play(1);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-rrna}", "click", function(sym, e) {
         sym.$("info-rrna").show();
         sym.getSymbol("info-rrna").play(1);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-trna}", "click", function(sym, e) {
         sym.$("info-trna").show();
         sym.getSymbol("info-trna").play(1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-rrna}", "mouseover", function(sym, e) {
         
         sym.$("rollover-rrna").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-rrna}", "mouseout", function(sym, e) {
         
         sym.$("rollover-rrna").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-trna}", "mouseover", function(sym, e) {
         sym.$("rollover-trna").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-trna}", "mouseout", function(sym, e) {
         sym.$("rollover-trna").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-mrna}", "mouseover", function(sym, e) {
         sym.$("rollover-mrna").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-mrna}", "mouseout", function(sym, e) {
         sym.$("rollover-mrna").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-dna}", "mouseover", function(sym, e) {
         sym.$("rollover-dna2").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-dna}", "mouseout", function(sym, e) {
         sym.$("rollover-dna2").hide();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'button-mrna'
   (function(symbolName) {   
   
   })("button-mrna");
   //Edge symbol end:'button-mrna'

   //=========================================================
   
   //Edge symbol: 'button-rrna'
   (function(symbolName) {   
   
   })("button-rrna");
   //Edge symbol end:'button-rrna'

   //=========================================================
   
   //Edge symbol: 'button-trna'
   (function(symbolName) {   
   
   })("button-trna");
   //Edge symbol end:'button-trna'

   //=========================================================
   
   //Edge symbol: 'button-dna'
   (function(symbolName) {   
   
   })("button-dna");
   //Edge symbol end:'button-dna'

   //=========================================================
   
   //Edge symbol: 'button-close'
   (function(symbolName) {   
   
   })("button-close");
   //Edge symbol end:'button-close'

   //=========================================================
   
   //Edge symbol: 'button-next'
   (function(symbolName) {   
   
   })("button-next");
   //Edge symbol end:'button-next'

   //=========================================================
   
   //Edge symbol: 'button-previous'
   (function(symbolName) {   
   
   })("button-previous");
   //Edge symbol end:'button-previous'

   //=========================================================
   
   //Edge symbol: 'info-trna'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_button-close}", "click", function(sym, e) {
         
         sym.getComposition().getStage().$("info-trna").hide();
         sym.getComposition().getStage().$("info-trna").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-next}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-previous}", "click", function(sym, e) {
         sym.playReverse();

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

   })("info-trna");
   //Edge symbol end:'info-trna'

   //=========================================================
   
   //Edge symbol: 'info-trna_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-close}", "click", function(sym, e) {
         
         sym.getComposition().getStage().$("info-rrna").hide();
         sym.getComposition().getStage().$("info-rrna").stop(0);

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-next}", "click", function(sym, e) {
         sym.play();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-previous}", "click", function(sym, e) {
         sym.playReverse();

      });
         //Edge binding end

      })("info-rrna");
   //Edge symbol end:'info-rrna'

   //=========================================================
   
   //Edge symbol: 'info-trna_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-close}", "click", function(sym, e) {
         
         sym.getComposition().getStage().$("info-mrna").hide();
         sym.getComposition().getStage().$("info-mrna").stop(0);

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-next}", "click", function(sym, e) {
         sym.play();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-previous}", "click", function(sym, e) {
         sym.playReverse();

      });
         //Edge binding end

      })("info-mrna");
   //Edge symbol end:'info-mrna'

   //=========================================================
   
   //Edge symbol: 'info-rrna_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-close}", "click", function(sym, e) {
         
         sym.getComposition().getStage().$("info-dna").hide();
         sym.getComposition().getStage().$("info-dna").stop(0);

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-next}", "click", function(sym, e) {
         sym.play();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-previous}", "click", function(sym, e) {
         sym.playReverse();

      });
         //Edge binding end

      })("info-dna");
   //Edge symbol end:'info-dna'

})(jQuery, AdobeEdge, "EDGE-202720348");
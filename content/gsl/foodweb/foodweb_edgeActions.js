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
      
      
      Symbol.bindElementAction(compId, symbolName, "${_rollover-bottommicrobes}", "mouseover", function(sym, e) {
         sym.getSymbol("rollover-bottommicrobes").stop(250);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rollover-bottommicrobes}", "mouseout", function(sym, e) {
         
         sym.getSymbol("rollover-bottommicrobes").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rollover-freemicrobes}", "mouseover", function(sym, e) {
         sym.getSymbol("rollover-freemicrobes").stop(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rollover-freemicrobes}", "mouseout", function(sym, e) {
         sym.getSymbol("rollover-freemicrobes").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rollover-shrimp}", "mouseover", function(sym, e) {
         sym.getSymbol("rollover-shrimp").stop(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rollover-shrimp}", "mouseout", function(sym, e) {
         sym.getSymbol("rollover-shrimp").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rollover-flies}", "mouseover", function(sym, e) {
         sym.getSymbol("rollover-flies").stop(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rollover-flies}", "mouseout", function(sym, e) {
         sym.getSymbol("rollover-flies").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rollover-birds}", "mouseover", function(sym, e) {
         sym.getSymbol("rollover-birds").stop(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rollover-birds}", "mouseout", function(sym, e) {
         sym.getSymbol("rollover-birds").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rollover-bottommicrobes}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("microbes/", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rollover-freemicrobes}", "click", function(sym, e) {
         window.open("ffmicrobes/", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rollover-flies}", "click", function(sym, e) {
         window.open("brine_flies/", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rollover-shrimp}", "click", function(sym, e) {
         window.open("brine_shrimp/", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rollover-birds}", "click", function(sym, e) {
         window.open("birds/", "_self");
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'rollover-flies'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("rollover-flies");
   //Edge symbol end:'rollover-flies'

   //=========================================================
   
   //Edge symbol: 'rollover-birds'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("rollover-birds");
   //Edge symbol end:'rollover-birds'

   //=========================================================
   
   //Edge symbol: 'rollover-shrimp'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("rollover-shrimp");
   //Edge symbol end:'rollover-shrimp'

   //=========================================================
   
   //Edge symbol: 'rollover-freemicrobes'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("rollover-freemicrobes");
   //Edge symbol end:'rollover-freemicrobes'

   //=========================================================
   
   //Edge symbol: 'rollover-bottommicrobes'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("rollover-bottommicrobes");
   //Edge symbol end:'rollover-bottommicrobes'

})(jQuery, AdobeEdge, "EDGE-56566140");
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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         var vid = sym.$("container");
         
         vid.html('<video width="480" height="515" poster="video/2008050.jpg" controls="controls"> <source src="video/gsl.mp4" type="video/mp4"> <source src="video/gsl.f4v" type="video/mp4"> <source src="video/gsl.webm" type="video/webm"></video>');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_inflow-button}", "click", function(sym, e) {
         sym.getSymbol("inflow-info").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_shoreline-button}", "click", function(sym, e) {
         
         sym.getSymbol("level-info").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_color-button}", "click", function(sym, e) {
         
         sym.getSymbol("color-info").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_vegetation-button}", "click", function(sym, e) {
         
         sym.getSymbol("vegetation-info").play();
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'inflow-button'
   (function(symbolName) {   
   
   })("inflow-button");
   //Edge symbol end:'inflow-button'

   //=========================================================
   
   //Edge symbol: 'inflow-button_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

   })("inflow-info");
   //Edge symbol end:'inflow-info'

   //=========================================================
   
   //Edge symbol: 'caution'
   (function(symbolName) {   
   
   })("caution");
   //Edge symbol end:'caution'

   //=========================================================
   
   //Edge symbol: 'shoreline-button'
   (function(symbolName) {   
   
   })("shoreline-button");
   //Edge symbol end:'shoreline-button'

   //=========================================================
   
   //Edge symbol: 'vegetation-button'
   (function(symbolName) {   
   
   })("vegetation-button");
   //Edge symbol end:'vegetation-button'

   //=========================================================
   
   //Edge symbol: 'color-button'
   (function(symbolName) {   
   
   })("color-button");
   //Edge symbol end:'color-button'

   //=========================================================
   
   //Edge symbol: 'color-info'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

   })("color-info");
   //Edge symbol end:'color-info'

   //=========================================================
   
   //Edge symbol: 'vegetation-info'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("vegetation-info");
   //Edge symbol end:'vegetation-info'

   //=========================================================
   
   //Edge symbol: 'level-info'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("level-info");
   //Edge symbol end:'level-info'

})(jQuery, AdobeEdge, "EDGE-169576360");
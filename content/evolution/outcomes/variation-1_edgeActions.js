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
      
      
      Symbol.bindElementAction(compId, symbolName, "${_sharpei-button}", "click", function(sym, e) {
         sym.$("sharpei-info").show();
         sym.getSymbol("sharpei-info").play(1);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_cf-button}", "click", function(sym, e) {
         sym.$("cf-info").show();
         sym.getSymbol("cf-info").play(1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_cows-button}", "click", function(sym, e) {
         sym.$("cows-info").show();
         sym.getSymbol("cows-info").play(1);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_cats-button}", "click", function(sym, e) {
         sym.$("cats-info").show();
         sym.getSymbol("cats-info").play(1);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_curly-button}", "click", function(sym, e) {
         sym.$("curly-info").show();
         sym.getSymbol("curly-info").play(1);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_peas-button}", "click", function(sym, e) {
         sym.$("peas-info").show();
         sym.getSymbol("peas-info").play(1);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_redhair-button}", "click", function(sym, e) {
         sym.$("redhair-info").show();
         sym.getSymbol("redhair-info").play(1);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_songbird-button}", "click", function(sym, e) {
         sym.$("songbird-info").show();
         sym.getSymbol("songbird-info").play(1);
         
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'sharpei'
   (function(symbolName) {   
   
   })("sharpei");
   //Edge symbol end:'sharpei'

   //=========================================================
   
   //Edge symbol: 'cows-button'
   (function(symbolName) {   
   
   })("cows-button");
   //Edge symbol end:'cows-button'

   //=========================================================
   
   //Edge symbol: 'cats-button'
   (function(symbolName) {   
   
   })("cats-button");
   //Edge symbol end:'cats-button'

   //=========================================================
   
   //Edge symbol: 'curly-button'
   (function(symbolName) {   
   
   })("curly-button");
   //Edge symbol end:'curly-button'

   //=========================================================
   
   //Edge symbol: 'peas-button'
   (function(symbolName) {   
   
   })("peas-button");
   //Edge symbol end:'peas-button'

   //=========================================================
   
   //Edge symbol: 'cf-button'
   (function(symbolName) {   
   
   })("cf-button");
   //Edge symbol end:'cf-button'

   //=========================================================
   
   //Edge symbol: 'redhair-button'
   (function(symbolName) {   
   
   })("redhair-button");
   //Edge symbol end:'redhair-button'

   //=========================================================
   
   //Edge symbol: 'songbird-button'
   (function(symbolName) {   
   
   })("songbird-button");
   //Edge symbol end:'songbird-button'

   //=========================================================
   
   //Edge symbol: 'sharpei-info'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_closeCopy}", "click", function(sym, e) {
         
         sym.getComposition().getStage().$("sharpei-info").hide();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-trait}", "click", function(sym, e) {
         sym.stop("trait");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-protein}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("protein");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-mutation}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("mutation");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-examples}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("examples");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-variation}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("variation");
         

      });
      //Edge binding end

   })("sharpei-info");
   //Edge symbol end:'sharpei-info'

   //=========================================================
   
   //Edge symbol: 'close'
   (function(symbolName) {   
   
   })("close");
   //Edge symbol end:'close'

   //=========================================================
   
   //Edge symbol: 'sharpei-info_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_closeCopy}", "click", function(sym, e) {
         
         sym.getComposition().getStage().$("cf-info").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-trait}", "click", function(sym, e) {
         sym.stop("trait");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-protein}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("protein");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-mutation}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("mutation");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-examples}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("examples");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-variation}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("variation");
         

      });
      //Edge binding end

   })("cf-info");
   //Edge symbol end:'cf-info'

   //=========================================================
   
   //Edge symbol: 'sharpei-info_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_closeCopy}", "click", function(sym, e) {
         
         sym.getComposition().getStage().$("cows-info").hide();
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-trait}", "click", function(sym, e) {
         sym.stop("trait");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-protein}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("protein");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-mutation}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("mutation");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-examples}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("examples");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-variation}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("variation");
         

      });
         //Edge binding end

      })("cows-info");
   //Edge symbol end:'cows-info'

   //=========================================================
   
   //Edge symbol: 'sharpei-info_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_closeCopy}", "click", function(sym, e) {
         
         sym.getComposition().getStage().$("cats-info").hide();
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-trait}", "click", function(sym, e) {
         sym.stop("trait");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-protein}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("protein");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-mutation}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("mutation");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-examples}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("examples");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-variation}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("variation");
         

      });
         //Edge binding end

      })("cats-info");
   //Edge symbol end:'cats-info'

   //=========================================================
   
   //Edge symbol: 'sharpei-info_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_closeCopy}", "click", function(sym, e) {
         
         sym.getComposition().getStage().$("curly-info").hide();
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-trait}", "click", function(sym, e) {
         sym.stop("trait");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-protein}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("protein");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-mutation}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("mutation");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-examples}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("examples");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-variation}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("variation");
         

      });
         //Edge binding end

      })("curly-info");
   //Edge symbol end:'curly-info'

   //=========================================================
   
   //Edge symbol: 'cows-info_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_closeCopy}", "click", function(sym, e) {
         
         sym.getComposition().getStage().$("peas-info").hide();
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-trait}", "click", function(sym, e) {
         sym.stop("trait");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-protein}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("protein");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-mutation}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("mutation");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-examples}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("examples");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-variation}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("variation");
         

      });
         //Edge binding end

      })("peas-info");
   //Edge symbol end:'peas-info'

   //=========================================================
   
   //Edge symbol: 'sharpei-info_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_closeCopy}", "click", function(sym, e) {
         
         sym.getComposition().getStage().$("redhair-info").hide();
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-trait}", "click", function(sym, e) {
         sym.stop("trait");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-protein}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("protein");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-mutation}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("mutation");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-examples}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("examples");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-variation}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("variation");
         

      });
         //Edge binding end

      })("redhair-info");
   //Edge symbol end:'redhair-info'

   //=========================================================
   
   //Edge symbol: 'cows-info_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_closeCopy}", "click", function(sym, e) {
         
         sym.getComposition().getStage().$("songbird-info").hide();
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-trait}", "click", function(sym, e) {
         sym.stop("trait");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-protein}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("protein");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-mutation}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("mutation");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-examples}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("examples");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-variation}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("variation");
         

      });
         //Edge binding end

      })("songbird-info");
   //Edge symbol end:'songbird-info'

   //=========================================================
   
   //Edge symbol: 'curly-examples'
   (function(symbolName) {   
   
   })("curly-examples");
   //Edge symbol end:'curly-examples'

   //=========================================================
   
   //Edge symbol: 'peas-s'
   (function(symbolName) {   
   
   })("peas-s");
   //Edge symbol end:'peas-s'

   //=========================================================
   
   //Edge symbol: 'peas-s_1'
   (function(symbolName) {   
   
   })("peas-r");
   //Edge symbol end:'peas-r'

   //=========================================================
   
   //Edge symbol: 'Preloader'
   (function(symbolName) {   
   
   })("Preloader");
   //Edge symbol end:'Preloader'

})(jQuery, AdobeEdge, "EDGE-10667135");
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
      
      
      Symbol.bindElementAction(compId, symbolName, "${_rollover-active2}", "mouseover", function(sym, e) {
         sym.getSymbol("rollover-active2").stop(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rollover-active2}", "mouseout", function(sym, e) {
         sym.getSymbol("rollover-active2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rollover-cysts2}", "mouseover", function(sym, e) {
         sym.getSymbol("rollover-cysts2").stop(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rollover-cysts2}", "mouseout", function(sym, e) {
         sym.getSymbol("rollover-cysts2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rollover-juveniles2}", "mouseover", function(sym, e) {
         sym.getSymbol("rollover-juveniles2").stop(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rollover-juveniles2}", "mouseout", function(sym, e) {
         sym.getSymbol("rollover-juveniles2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rollover-adults}", "mouseover", function(sym, e) {
         sym.getSymbol("rollover-adults").stop(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rollover-adults}", "mouseout", function(sym, e) {
         sym.getSymbol("rollover-adults").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rollover-naupliar}", "mouseover", function(sym, e) {
         sym.getSymbol("rollover-naupliar").stop(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rollover-naupliar}", "mouseout", function(sym, e) {
         sym.getSymbol("rollover-naupliar").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rollover-hatching2}", "mouseover", function(sym, e) {
         sym.getSymbol("rollover-hatching2").stop(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rollover-hatching2}", "mouseout", function(sym, e) {
         sym.getSymbol("rollover-hatching2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rollover-cysts2}", "click", function(sym, e) {
         sym.$("cysts-info").show();
         sym.getSymbol("cysts-info").play(1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rollover-active2}", "click", function(sym, e) {
         sym.$("active-info").show();
         sym.getSymbol("active-info").play(1);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rollover-hatching2}", "click", function(sym, e) {
         sym.$("hatching-info").show();
         sym.getSymbol("hatching-info").play(1);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rollover-naupliar}", "click", function(sym, e) {
         sym.$("naupliar-info").show();
         sym.getSymbol("naupliar-info").play(1);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rollover-juveniles2}", "click", function(sym, e) {
         sym.$("juveniles-info").show();
         sym.getSymbol("juveniles-info").play(1);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rollover-adults}", "click", function(sym, e) {
         sym.$("adults-info").show();
         sym.getSymbol("adults-info").play(1);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         var stageHeight = sym.$('Stage').height(); // Set a variable for the height of the stage
         
         sym.$("#Stage").css({ // Set the transform origin so we always scale to the top left corner of the stage
         "transform-origin":"0 0",
         "-ms-transform-origin":"0 0",
         "-webkit-transform-origin":"0 0",
         "-moz-transform-origin":"0 0",
         "-o-transform-origin":"0 0"
         });
         
         function scaleStage() {
             var stage = sym.$('Stage'); // Set a reusable variable to reference the stage
             var parent = sym.$('Stage').parent(); // Set a reusable variable to reference the parent container of the stage
         
             var parentWidth = stage.parent().width(); // Get the parent of the stage width
             var stageWidth = stage.width(); // Get the stage width
             var desiredWidth = Math.round(parentWidth * 1); // Set the new width of the stage as it scales
             var rescale = (desiredWidth / stageWidth); // Set a variable to calculate the new width of the stage as it scales
         
         // Rescale the stage!
         	 stage.css('transform', 'scale(' + rescale + ')'); 
             stage.css(  '-o-transform', 'scale(' + rescale + ')');
         	 stage.css('-ms-transform', 'scale(' + rescale + ')');
             stage.css('-webkit-transform', 'scale(' + rescale + ')');
         	 stage.css('-moz-transform', 'scale(' + rescale + ')');
             stage.css('-o-transform', 'scale(' + rescale + ')');
             parent.height(stageHeight * rescale); // Reset the height of the parent container so the objects below it will reflow as the height adjusts
         }
         
         // Make it happen when the browser resizes
         $(window).on('resize', function(){ 
         	 scaleStage(); 
         });
         
         // Make it happen when the page first loads
         $(document).ready(function(){
             scaleStage();
         });

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'rollover-cysts'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("rollover-cysts");
   //Edge symbol end:'rollover-cysts'

   //=========================================================
   
   //Edge symbol: 'rollover-active'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("rollover-active");
   //Edge symbol end:'rollover-active'

   //=========================================================
   
   //Edge symbol: 'rollover-hatching'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 281, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("rollover-hatching");
   //Edge symbol end:'rollover-hatching'

   //=========================================================
   
   //Edge symbol: 'rollover-naupliar'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("rollover-naupliar");
   //Edge symbol end:'rollover-naupliar'

   //=========================================================
   
   //Edge symbol: 'rollover-juveniles'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("rollover-juveniles");
   //Edge symbol end:'rollover-juveniles'

   //=========================================================
   
   //Edge symbol: 'rollover-adults'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("rollover-adults");
   //Edge symbol end:'rollover-adults'

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

   })("cysts-info");
   //Edge symbol end:'cysts-info'

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
   
   //Edge symbol: 'button-more_1'
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
         sym.getSymbol("button-close").play(1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-close}", "mouseout", function(sym, e) {
         sym.getSymbol("button-close").playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-close}", "click", function(sym, e) {
         
         sym.getComposition().getStage().$("active-info").hide();
         sym.getComposition().getStage().$("active-info").stop(0);
         
         

      });
      //Edge binding end

   })("active-info");
   //Edge symbol end:'active-info'

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

      Symbol.bindElementAction(compId, symbolName, "${_button-close}", "mouseover", function(sym, e) {
         sym.getSymbol("button-close").stop(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-close}", "mouseout", function(sym, e) {
         sym.getSymbol("button-close").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button-close}", "click", function(sym, e) {
         
         sym.getComposition().getStage().$("hatching-info").hide();
         sym.getComposition().getStage().$("hatching-info").stop(0);
         
         

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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("hatching-info");
   //Edge symbol end:'hatching-info'

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
         
         sym.getComposition().getStage().$("naupliar-info").hide();
         sym.getComposition().getStage().$("naupliar-info").stop(0);
         
         

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

   })("naupliar-info");
   //Edge symbol end:'naupliar-info'

   //=========================================================
   
   //Edge symbol: 'hatching-info_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
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
         
         sym.getComposition().getStage().$("juveniles-info").hide();
         sym.getComposition().getStage().$("juveniles-info").stop(0);
         
         

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

   })("juveniles-info");
   //Edge symbol end:'juveniles-info'

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
         
         sym.getComposition().getStage().$("adults-info").hide();
         sym.getComposition().getStage().$("adults-info").stop(0);
         
         

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

   })("adults-info");
   //Edge symbol end:'adults-info'

})(jQuery, AdobeEdge, "EDGE-65006748");
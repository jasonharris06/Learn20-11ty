/***********************
* Adobe Edge Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes
//Edge symbol: 'stage'
(function(symbolName) {





Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
sym.stop();
currentSlide = 0
prevSlide = "s0";

sym.getSymbol("slide1").stop(0);

});
//Edge binding end

Symbol.bindElementAction(compId, symbolName, "${_button_next}", "click", function(sym, e) {

//if (currentSlide < lastSlide) {
//	currentSlide++;
//	console.log("[Next] currentSlide="+currentSlide);
//	sym.play();
//}

console.log("[Next] currentSlide="+currentSlide);
sym.play();

});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4250, function(sym, e) {

sym.stop();

});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6250, function(sym, e) {

sym.stop();

});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10250, function(sym, e) {

sym.stop();

});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13750, function(sym, e) {
// insert code here
sym.stop();

});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15500, function(sym, e) {
// insert code here
sym.stop();

});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17250, function(sym, e) {
// insert code here
sym.stop();

});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20250, function(sym, e) {
// insert code here
sym.stop();

});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23250, function(sym, e) {
// insert code here
sym.stop();

});
//Edge binding end

Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym, e) {
// insert code to be run at timeline end here
// play the timeline from the given position (ms or label)
sym.stop(0);

});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
// Change an Element's contents.
//  (sym.$("name") resolves an Edge element name to a DOM
//  element that can be used with jQuery)
sym.$("count").html("1 / 8");

});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
sym.$("count").html("2 / 8");
sym.getSymbol("text_box").$("Text2").html("<strong>Similar</strong> <br /> <br /> Each nucleotide is made up of a <em>base</em> attached to a piece of <em>backbone</em>.");
currentSlide = 1;
prevSlide = "s1";

sym.getSymbol("slide3").stop(0);
sym.getSymbol("slide2").stop(0);
sym.getSymbol("slide1").stop("end");

});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7250, function(sym, e) {
sym.$("count").html("3 / 8");
sym.getSymbol("text_box").$("Text2").html("<strong>Different</strong> <br /> <br /> The backbones of DNA and RNA are slightly different in their chemical makeup.");
currentSlide = 2;
prevSlide = "s2";


sym.getSymbol("slide3").stop(0);
sym.getSymbol("slide4").stop(0);

});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11250, function(sym, e) {
sym.$("count").html("4 / 8");
sym.getSymbol("text_box").$("Text2").html("<strong>Different</strong> <br /> <br /> The bases in DNA are G, C, A, and <strong>T</strong>. <br /> <br /> The bases in RNA are G, C, A, and <strong>U</strong>.");
currentSlide = 3;
prevSlide = "s3";

sym.getSymbol("slide4").stop(0);

});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14750, function(sym, e) {
sym.$("count").html("5 / 8");
sym.getSymbol("text_box").$("Text2").html("<strong>Similar</strong> <br /> <br /> Nucleotides in both DNA and RNA form complementary base pairs: <br /> <br /> C pairs with G <br /> <br /> A pairs with T (DNA) or U (RNA).");
currentSlide = 4;
prevSlide = "s4";

});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16500, function(sym, e) {
sym.$("count").html("6 / 8");
sym.getSymbol("text_box").$("Text2").html("<strong>Different</strong> <br /> <br /> In DNA, each base is paired with another along the entire length of two strands. <br /> <br /> In RNA, only some of the bases are paired with their complement, and base-pairing occurs between nucleotides in the same strand.");
currentSlide = 5;
prevSlide = "s5";

});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {

sym.$("count").html("1 / 8");
sym.getSymbol("text_box").$("Text2").html("<strong>Similar</strong> <br /> <br /> DNA and RNA are both made of building blocks called <em>nucleotides</em>.");
currentSlide = 0;
prevSlide = "s0";


sym.getSymbol("slide1").stop(0);
sym.getSymbol("slide2").stop(0);
sym.getSymbol("slide3").stop(0);

});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18250, function(sym, e) {
sym.$("count").html("7 / 8");
sym.getSymbol("text_box").$("Text2").html("<strong>Different</strong> <br /> <br /> DNA molecules have a regular, uniform shape. <br /> <br /> RNA molecules have an irregular, varied shape.");
currentSlide = 6;
prevSlide = "s6";

});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20750, function(sym, e) {
sym.$("count").html("8 / 8");
sym.getSymbol("text_box").$("Text2").html("<strong>Different</strong> <br /> <br /> DNA molecules are huge, typically made up of millions of nucleotides. <br /> <br /> RNA molecules are much smaller, typically made up of hundreds or a few thousand nucleotides.");
currentSlide = 7;
prevSlide = "s7";

});
//Edge binding end

Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
// insert code for compositionReady event here
//currentSlide = 0;
lastSlide = 8;

});
//Edge binding end







Symbol.bindElementAction(compId, symbolName, "${_button_begin}", "click", function(sym, e) {
sym.play();

});
//Edge binding end





Symbol.bindElementAction(compId, symbolName, "${_button_next}", "mouseover", function(sym, e) {
sym.getSymbol("button_next").play(1);

});
//Edge binding end

Symbol.bindElementAction(compId, symbolName, "${_button_next}", "mouseout", function(sym, e) {
sym.getSymbol("button_next").playReverse(250);

});
//Edge binding end






      

      Symbol.bindElementAction(compId, symbolName, "${_pleasework}", "click", function(sym, e) {
         sym.play(prevSlide)

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pleasework}", "mouseover", function(sym, e) {
         sym.getSymbol("pleasework").play(1);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pleasework}", "mouseout", function(sym, e) {
         sym.getSymbol("pleasework").playReverse(250);

      });
      //Edge binding end

})("stage");
   //Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'slide1'
(function(symbolName) {
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
sym.stop();
// insert code here

});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
sym.stop();
// insert code here

});
//Edge binding end










})("slide1");
   //Edge symbol end:'slide1'

//=========================================================

//Edge symbol: 'button_back'
(function(symbolName) {
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
sym.stop();
// insert code here

});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
sym.stop();
// insert code here

});
//Edge binding end














})("button_back");
   //Edge symbol end:'button_back'

//=========================================================

//Edge symbol: 'button_next'
(function(symbolName) {
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
sym.stop();

});
//Edge binding end





Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
sym.stop();
// insert code here

});
//Edge binding end










      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.$("arrow_right").css("pointer-events","none");

      });
      //Edge binding end

})("button_next");
   //Edge symbol end:'button_next'

//=========================================================

//Edge symbol: 'text_box'
(function(symbolName) {









})("text_box");
   //Edge symbol end:'text_box'

//=========================================================

//Edge symbol: 'frame'
(function(symbolName) {









})("frame");
   //Edge symbol end:'frame'

//=========================================================

//Edge symbol: 'slide2'
(function(symbolName) {
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
// insert code here
sym.stop();

});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
// insert code here
sym.stop();

});
//Edge binding end










})("slide2");
   //Edge symbol end:'slide2'

//=========================================================

//Edge symbol: 'slide3'
(function(symbolName) {
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function defaultTriggerBinding(e) {

});
//Edge binding end










})("slide3");
   //Edge symbol end:'slide3'

//=========================================================

//Edge symbol: 'slide4'
(function(symbolName) {
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
// insert code here
sym.stop();

});
//Edge binding end










})("slide4");
   //Edge symbol end:'slide4'

//=========================================================

//Edge symbol: 'slide5'
(function(symbolName) {









})("slide5");
   //Edge symbol end:'slide5'

//=========================================================

//Edge symbol: 'slide6'
(function(symbolName) {









})("slide6");
   //Edge symbol end:'slide6'

//=========================================================

//Edge symbol: 'slide8'
(function(symbolName) {









})("slide8");
   //Edge symbol end:'slide8'

//=========================================================

//Edge symbol: 'button_begin'
(function(symbolName) {





})("button_begin");
   //Edge symbol end:'button_begin'

   //=========================================================
   
   //Edge symbol: 'button_next_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
sym.stop();
// insert code here

});
   //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
sym.stop();
// insert code here

});
   //Edge binding end

      

      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.$("arrow_left").css("pointer-events","none");

      });
      //Edge binding end

   })("button_backCLAIRE3");
   //Edge symbol end:'button_backCLAIRE3'

   //=========================================================
   
   //Edge symbol: 'button_reverse'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.$("arrow_rightCopy").css("pointer-events","none");

      });
      //Edge binding end

   })("button_reverse2");
   //Edge symbol end:'button_reverse2'

   //=========================================================
   
   //Edge symbol: 'pleasework'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.$("Text4").css("pointer-events","none");

      });
      //Edge binding end

   })("pleasework");
   //Edge symbol end:'pleasework'

})(jQuery, AdobeEdge, "EDGE-838644348");
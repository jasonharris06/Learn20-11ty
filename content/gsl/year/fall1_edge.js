/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Text5',
            type:'text',
            rect:['39px','42px','408px','247px','auto','auto'],
            text:"More Fall Migration Highlights<br><br>•  Wilson’s Phalaropes come to feed in July. Look for their circling feeding behavior.<br><br>•  Peak waterbird migration happens from mid-July through August, with some species extending into mid-October.<br><br>•  The second week of August is the best time to see shorebirds: American Avocets, Black-necked Stilts, Long-billed Curlews, phalaropes, sandpipers, yellowlegs. These birds can be seen wading through shallow water on their long legs as they forage for food.",
            align:"left",
            font:['Arial, Helvetica, sans-serif',14,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'_3-BirdsOnWires',
            type:'image',
            rect:['-3px','0px','495px','330px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"3-BirdsOnWires.jpg",'0px','0px']
         },
         {
            id:'Rectangle3',
            type:'rect',
            rect:['63px','299px','427px','30px','auto','auto'],
            opacity:0.43023681640625,
            fill:["rgba(255,255,255,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'text_blackbirds',
            type:'text',
            rect:['68px','300px','414px','46px','auto','auto'],
            text:"Red-winged Blackbirds gather near the lakeshore before migrating south for the winter. &gt;&gt;&gt;",
            align:"left",
            font:['Arial, Helvetica, sans-serif',12,"rgba(0,0,0,1.00)","500","none","normal"]
         },
         {
            id:'_2-White-faced_ibis',
            type:'image',
            rect:['-205px','0px','695px','330px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"2-White-faced%20ibis.png",'0px','0px']
         },
         {
            id:'text_ibis',
            type:'text',
            rect:['68px','300px','414px','41px','auto','auto'],
            text:"White-faced ibis leave in late summer. Look for them gathered in small groups in wetland areas. &gt;&gt;&gt;",
            align:"left",
            font:['Arial, Helvetica, sans-serif',12,"rgba(0,0,0,1.00)","500","none","normal"]
         },
         {
            id:'_1-stilts_and_avocets',
            type:'image',
            rect:['-125px','0px','634px','330px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"1-stilts%20and%20avocets.png",'0px','0px']
         },
         {
            id:'text_avocets',
            type:'text',
            rect:['68px','286px','414px','28px','auto','auto'],
            text:"American Avocets and Black-necked Stilts gather by the thousands in shallow water along the Antelope Island causeway. Look for Avocets’ sweeping feeding behavior. &gt;&gt;&gt;",
            align:"left",
            font:['Arial, Helvetica, sans-serif',12,"rgba(0,0,0,1)","500","none","normal"],
            textShadow:["rgba(255,255,255,0.79)",3,3,3]
         },
         {
            id:'RoundRect',
            type:'rect',
            rect:['7px','314px','10px','10px','auto','auto'],
            borderRadius:["5px 5px","5px 5px","5px 5px","5px 5px"],
            opacity:0.6,
            fill:["rgba(0,0,0,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'RoundRectCopy',
            type:'rect',
            rect:['21px','314px','10px','10px','auto','auto'],
            borderRadius:["5px 5px","5px 5px","5px 5px","5px 5px"],
            opacity:0.3,
            fill:["rgba(0,0,0,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'RoundRectCopy2',
            type:'rect',
            rect:['35px','314px','10px','10px','auto','auto'],
            borderRadius:["5px 5px","5px 5px","5px 5px","5px 5px"],
            opacity:0.3,
            fill:["rgba(0,0,0,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'RoundRectCopy3',
            type:'rect',
            rect:['48px','314px','10px','10px','auto','auto'],
            borderRadius:["5px 5px","5px 5px","5px 5px","5px 5px"],
            opacity:0.3,
            fill:["rgba(0,0,0,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Rectangle',
            type:'rect',
            rect:['0px','0px','490px','330px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(114,114,114,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_text_ibis}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '68px'],
            ["style", "width", '414px'],
            ["style", "top", '300px'],
            ["style", "height", '41px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "font-weight", '500'],
            ["style", "font-size", '12px']
         ],
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '0.7'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '10px'],
            ["style", "top", '314px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '10px'],
            ["style", "left", '7px']
         ],
         "${_RoundRectCopy3}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '0.3'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '10px'],
            ["style", "top", '314px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '10px'],
            ["style", "left", '48px']
         ],
         "${__1-stilts_and_avocets}": [
            ["style", "top", '0px'],
            ["style", "height", '330px'],
            ["style", "opacity", '1'],
            ["style", "left", '-125px'],
            ["style", "width", '634px']
         ],
         "${_Text5}": [
            ["style", "top", '42px'],
            ["style", "height", '247px'],
            ["style", "width", '408px'],
            ["style", "left", '39px'],
            ["style", "font-size", '14px']
         ],
         "${__2-White-faced_ibis}": [
            ["style", "top", '0px'],
            ["style", "height", '330px'],
            ["style", "opacity", '1'],
            ["style", "left", '-205px'],
            ["style", "width", '695px']
         ],
         "${__3-BirdsOnWires}": [
            ["style", "top", '0px'],
            ["style", "height", '330px'],
            ["style", "opacity", '1'],
            ["style", "left", '-3px'],
            ["style", "width", '495px']
         ],
         "${_Rectangle3}": [
            ["style", "height", '30px'],
            ["style", "opacity", '0.45623779296875'],
            ["style", "top", '299px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)']
         ],
         "${_RoundRectCopy2}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '0.3'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '10px'],
            ["style", "top", '314px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '10px'],
            ["style", "left", '35px']
         ],
         "${_RoundRectCopy}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '0.3'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '10px'],
            ["style", "top", '314px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '10px'],
            ["style", "left", '21px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '490px'],
            ["style", "height", '330px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Rectangle}": [
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '0']
         ],
         "${_text_avocets}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "opacity", '1'],
            ["style", "left", '68px'],
            ["style", "width", '414px'],
            ["style", "top", '286px'],
            ["style", "font-size", '12px'],
            ["style", "font-weight", '500'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["subproperty", "textShadow.color", 'rgba(255,255,255,0.79)'],
            ["subproperty", "textShadow.offsetV", '3px']
         ],
         "${_text_blackbirds}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '68px'],
            ["style", "width", '414px'],
            ["style", "top", '300px'],
            ["style", "height", '46px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "font-weight", '500'],
            ["style", "font-size", '12px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid55", tween: [ "style", "${_text_blackbirds}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 250 },
            { id: "eid83", tween: [ "style", "${_Rectangle3}", "opacity", '0', { fromValue: '0.45623779296875'}], position: 500, duration: 250 },
            { id: "eid51", tween: [ "style", "${_text_avocets}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 250 },
            { id: "eid56", tween: [ "style", "${_text_avocets}", "opacity", '1', { fromValue: '0.000000'}], position: 750, duration: 250 },
            { id: "eid9", tween: [ "style", "${_RoundRectCopy}", "opacity", '0.69982299804687', { fromValue: '0.30000001192092896'}], position: 0, duration: 250 },
            { id: "eid10", tween: [ "style", "${_RoundRectCopy}", "opacity", '0.3', { fromValue: '0.69982299804687'}], position: 250, duration: 250 },
            { id: "eid13", tween: [ "style", "${_RoundRectCopy3}", "opacity", '0.7', { fromValue: '0.30000001192092896'}], position: 500, duration: 250 },
            { id: "eid14", tween: [ "style", "${_RoundRectCopy3}", "opacity", '0.3', { fromValue: '0.7'}], position: 750, duration: 250 },
            { id: "eid54", tween: [ "style", "${_text_ibis}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 250 },
            { id: "eid85", tween: [ "style", "${__2-White-faced_ibis}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 250 },
            { id: "eid8", tween: [ "style", "${_RoundRect}", "opacity", '0.3', { fromValue: '0.7'}], position: 0, duration: 250 },
            { id: "eid20", tween: [ "style", "${_RoundRect}", "opacity", '0.7', { fromValue: '0.300000'}], position: 750, duration: 250 },
            { id: "eid11", tween: [ "style", "${_RoundRectCopy2}", "opacity", '0.7', { fromValue: '0.30000001192092896'}], position: 250, duration: 250 },
            { id: "eid12", tween: [ "style", "${_RoundRectCopy2}", "opacity", '0.3', { fromValue: '0.7'}], position: 500, duration: 250 },
            { id: "eid84", tween: [ "style", "${__3-BirdsOnWires}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 250 },
            { id: "eid86", tween: [ "style", "${__1-stilts_and_avocets}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 250 },
            { id: "eid92", tween: [ "style", "${__1-stilts_and_avocets}", "opacity", '1', { fromValue: '0.000000'}], position: 750, duration: 250 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-218487795");

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
            rect:['83px','66px','354px','171px','auto','auto'],
            text:"More Winter Highlights<br><br>•  Several species of ducks spend the winter at Great Salt Lake. When the wetlands freeze, they sometimes eat brine shrimp cysts, which wash up in windrows along the shoreline.<br><br>•  Common Goldeneye ducks spend their winter days eating brine fly larvae, which are plentiful near stromatolotes (aka Great Salt Lake coral).<br>",
            align:"left",
            font:['Arial, Helvetica, sans-serif',14,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'ShrimpHarvesting',
            type:'image',
            rect:['-3px','-2px','499px','333px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"4-ShrimpHarvesting.jpg",'0px','0px']
         },
         {
            id:'text_shrimpharvest',
            type:'text',
            rect:['83px','300px','399px','46px','auto','auto'],
            text:"Brine shrimp harvesting begins in October and usually extends through January. &gt;&gt;&gt;",
            align:"left",
            font:['Arial, Helvetica, sans-serif',12,"rgba(0,0,0,1)","500","none","normal"],
            textShadow:["rgba(255,255,255,0.73)",1,1,3]
         },
         {
            id:'TundraSwans',
            type:'image',
            rect:['-5px','0px','500px','357px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"3-BearTundraSwans.jpg",'0px','0px']
         },
         {
            id:'text_tundraswans',
            type:'text',
            rect:['83px','300px','399px','46px','auto','auto'],
            text:"Tundra Swans gather by the thousands at Bear River Migratory Bird Refuge, where their honking voices fill the air. &gt;&gt;&gt;",
            align:"left",
            font:['Arial, Helvetica, sans-serif',12,"rgba(0,0,0,1)","500","none","normal"],
            textShadow:["rgba(255,255,255,0.70)",1,1,3]
         },
         {
            id:'EaglesAndGulls',
            type:'image',
            rect:['0px','0px','500px','333px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"FarmingtonEaglesAndGulls.jpg",'0px','0px']
         },
         {
            id:'text_eagles',
            type:'text',
            rect:['83px','300px','399px','41px','auto','auto'],
            text:"Bald Eagles, Rough-legged Hawks, and other raptors hunt for smaller birds and fish throughout the winter. &gt;&gt;&gt;",
            align:"left",
            font:['Arial, Helvetica, sans-serif',12,"rgba(0,0,0,1)","500","none","normal"]
         },
         {
            id:'grebes',
            type:'image',
            rect:['-134px','0px','705px','330px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"1-Grebes.jpg",'0px','0px']
         },
         {
            id:'text_grebes',
            type:'text',
            rect:['83px','300px','399px','28px','auto','auto'],
            text:"Grebes are late migrators. Some stay until late November or early<br>December, when temperatures drop significantly. &gt;&gt;&gt;",
            align:"left",
            font:['Arial, Helvetica, sans-serif',12,"rgba(0,0,0,1)","500","none","normal"]
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
            id:'RoundRectCopy4',
            type:'rect',
            rect:['61px','314px','10px','10px','auto','auto'],
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
         "${_EaglesAndGulls}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
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
         "${_grebes}": [
            ["style", "top", '0px'],
            ["style", "height", '330px'],
            ["style", "opacity", '1'],
            ["style", "left", '-134px'],
            ["style", "width", '705px']
         ],
         "${_Text5}": [
            ["style", "top", '66px'],
            ["style", "height", '171px'],
            ["style", "width", '354px'],
            ["style", "left", '83px'],
            ["style", "font-size", '14px']
         ],
         "${_ShrimpHarvesting}": [
            ["style", "top", '-2px'],
            ["style", "height", '333px'],
            ["style", "opacity", '1'],
            ["style", "left", '-3px'],
            ["style", "width", '499px']
         ],
         "${_TundraSwans}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '-5px']
         ],
         "${_text_tundraswans}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '1px'],
            ["style", "opacity", '1'],
            ["style", "left", '83px'],
            ["style", "width", '399px'],
            ["style", "top", '300px'],
            ["style", "font-weight", '500'],
            ["style", "font-size", '12px'],
            ["style", "height", '46px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["subproperty", "textShadow.color", 'rgba(255,255,255,0.70)'],
            ["subproperty", "textShadow.offsetV", '1px']
         ],
         "${_text_grebes}": [
            ["style", "top", '300px'],
            ["style", "width", '399px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "opacity", '1'],
            ["style", "font-weight", '500'],
            ["style", "left", '83px'],
            ["style", "font-size", '12px']
         ],
         "${_text_shrimpharvest}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '1px'],
            ["style", "opacity", '1'],
            ["style", "left", '83px'],
            ["style", "width", '399px'],
            ["style", "top", '300px'],
            ["style", "font-weight", '500'],
            ["style", "font-size", '12px'],
            ["style", "height", '46px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["subproperty", "textShadow.color", 'rgba(255,255,255,0.73)'],
            ["subproperty", "textShadow.offsetV", '1px']
         ],
         "${_text_eagles}": [
            ["style", "top", '300px'],
            ["style", "width", '399px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "opacity", '1'],
            ["style", "height", '41px'],
            ["style", "font-weight", '500'],
            ["style", "left", '83px'],
            ["style", "font-size", '12px']
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
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '490px'],
            ["style", "height", '330px'],
            ["style", "overflow", 'hidden']
         ],
         "${_RoundRectCopy4}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '0.3'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '10px'],
            ["style", "top", '314px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '10px'],
            ["style", "left", '61px']
         ],
         "${_Rectangle}": [
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '0']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1250,
         autoPlay: true,
         timeline: [
            { id: "eid59", tween: [ "style", "${_grebes}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 250 },
            { id: "eid63", tween: [ "style", "${_grebes}", "opacity", '1', { fromValue: '0.000000'}], position: 1000, duration: 250 },
            { id: "eid62", tween: [ "style", "${_ShrimpHarvesting}", "opacity", '0', { fromValue: '1'}], position: 750, duration: 250 },
            { id: "eid9", tween: [ "style", "${_RoundRectCopy}", "opacity", '0.69982299804687', { fromValue: '0.30000001192092896'}], position: 0, duration: 250 },
            { id: "eid10", tween: [ "style", "${_RoundRectCopy}", "opacity", '0.3', { fromValue: '0.69982299804687'}], position: 250, duration: 250 },
            { id: "eid13", tween: [ "style", "${_RoundRectCopy3}", "opacity", '0.7', { fromValue: '0.30000001192092896'}], position: 500, duration: 250 },
            { id: "eid14", tween: [ "style", "${_RoundRectCopy3}", "opacity", '0.3', { fromValue: '0.7'}], position: 750, duration: 250 },
            { id: "eid54", tween: [ "style", "${_text_eagles}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 250 },
            { id: "eid15", tween: [ "style", "${_RoundRectCopy4}", "opacity", '0.7', { fromValue: '0.30000001192092896'}], position: 750, duration: 250 },
            { id: "eid16", tween: [ "style", "${_RoundRectCopy4}", "opacity", '0.3', { fromValue: '0.7'}], position: 1000, duration: 250 },
            { id: "eid8", tween: [ "style", "${_RoundRect}", "opacity", '0.3', { fromValue: '0.7'}], position: 0, duration: 250 },
            { id: "eid20", tween: [ "style", "${_RoundRect}", "opacity", '0.7', { fromValue: '0.300000'}], position: 1000, duration: 250 },
            { id: "eid60", tween: [ "style", "${_EaglesAndGulls}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 250 },
            { id: "eid11", tween: [ "style", "${_RoundRectCopy2}", "opacity", '0.7', { fromValue: '0.30000001192092896'}], position: 250, duration: 250 },
            { id: "eid12", tween: [ "style", "${_RoundRectCopy2}", "opacity", '0.3', { fromValue: '0.7'}], position: 500, duration: 250 },
            { id: "eid51", tween: [ "style", "${_text_grebes}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 250 },
            { id: "eid56", tween: [ "style", "${_text_grebes}", "opacity", '1', { fromValue: '0.000000'}], position: 1000, duration: 250 },
            { id: "eid53", tween: [ "style", "${_text_shrimpharvest}", "opacity", '0', { fromValue: '1'}], position: 750, duration: 250 },
            { id: "eid61", tween: [ "style", "${_TundraSwans}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 250 },
            { id: "eid55", tween: [ "style", "${_text_tundraswans}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 250 }         ]
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
})(jQuery, AdobeEdge, "EDGE-218487793");

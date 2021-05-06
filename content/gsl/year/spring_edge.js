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
            rect:['121px','79px','354px','171px','auto','auto'],
            text:"Shorebirds that pass through in April include:<br> <br>•  Greater and Lesser Yellowlegs<br>•  Willets<br>•  Marbled Godwits<br>•  Long-billed Dowitchers.<br>",
            align:"left",
            font:['Arial, Helvetica, sans-serif',14,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Egret',
            type:'image',
            rect:['-89px','-12px','671px','440px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"5-Snowy%20egret.png",'0px','0px']
         },
         {
            id:'text_egret',
            type:'text',
            rect:['94px','311px','388px','28px','auto','auto'],
            text:"Snowy egrets frequently visit the lake’s wetlands. &gt;&gt;&gt;",
            align:"left",
            font:['Arial, Helvetica, sans-serif',12,"rgba(253,253,253,1.00)","500","none","normal"]
         },
         {
            id:'nauplii',
            type:'image',
            rect:['-93px','0px','594px','330px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"4-naup2.jpg",'0px','0px']
         },
         {
            id:'text_nauplii',
            type:'text',
            rect:['94px','284px','388px','46px','auto','auto'],
            text:"Newly hatched brine shrimp nauplii (larvae)—greatly magnified in this photo—are visible as tiny white specks moving jerkily through the water. &gt;&gt;&gt;",
            align:"left",
            font:['Arial, Helvetica, sans-serif',12,"rgba(0,0,0,1)","500","none","normal"]
         },
         {
            id:'FranklinsGulls',
            type:'image',
            rect:['-134px','-13px','624px','344px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"3-Franklin\'s%20Gulls-breeding%20hood.png",'0px','0px']
         },
         {
            id:'text_franklinsgulls',
            type:'text',
            rect:['94px','284px','388px','46px','auto','auto'],
            text:"Franklin’s Gulls have black-hooded heads during the spring mating season. More than 30,000 of these birds stay through the summer to lay eggs and raise their young. &gt;&gt;&gt;",
            align:"left",
            font:['Arial, Helvetica, sans-serif',12,"rgba(0,0,0,1)","500","none","normal"],
            textShadow:["rgba(255,255,255,0.65)",1,1,3]
         },
         {
            id:'_2-cranes',
            type:'image',
            rect:['-73px','-13px','611px','344px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"2-cranes.png",'0px','0px']
         },
         {
            id:'text_sandhillcranes',
            type:'text',
            rect:['94px','284px','388px','41px','auto','auto'],
            text:"Sandhill Cranes visit Bear River Migratory Bird Refuge in the spring. The greatest numbers of migrating birds can usually be seen between mid-April and mid-May. &gt;&gt;&gt;",
            align:"left",
            font:['Arial, Helvetica, sans-serif',12,"rgba(0,0,0,1)","500","none","normal"],
            textShadow:["rgba(255,255,255,0.65)",1,1,3]
         },
         {
            id:'Avocets',
            type:'image',
            rect:['0px','-2px','490px','332px','auto','auto'],
            opacity:1,
            fill:["rgba(0,0,0,0)",im+"1-avocets.jpg",'0px','0px']
         },
         {
            id:'text_avocets',
            type:'text',
            rect:['94px','297px','388px','28px','auto','auto'],
            text:"During the spring and early summer, American Avocets have rust-colored heads (left), but in the fall their heads are white (right). &gt;&gt;&gt;<br>",
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
            id:'RoundRectCopy5',
            type:'rect',
            rect:['74px','314px','10px','10px','auto','auto'],
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
         "${_text_sandhillcranes}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '1px'],
            ["style", "opacity", '1'],
            ["style", "left", '94px'],
            ["style", "width", '388px'],
            ["style", "top", '284px'],
            ["style", "font-weight", '500'],
            ["style", "font-size", '12px'],
            ["style", "height", '41px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["subproperty", "textShadow.color", 'rgba(255,255,255,0.65)'],
            ["subproperty", "textShadow.offsetV", '1px']
         ],
         "${_Text5}": [
            ["style", "top", '79px'],
            ["style", "height", '171px'],
            ["style", "width", '354px'],
            ["style", "left", '121px'],
            ["style", "font-size", '14px']
         ],
         "${_nauplii}": [
            ["style", "top", '0px'],
            ["style", "height", '330px'],
            ["style", "opacity", '1'],
            ["style", "left", '-93px'],
            ["style", "width", '594px']
         ],
         "${_text_franklinsgulls}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '1px'],
            ["style", "opacity", '1'],
            ["style", "left", '94px'],
            ["style", "width", '388px'],
            ["style", "top", '284px'],
            ["style", "font-weight", '500'],
            ["style", "font-size", '12px'],
            ["style", "height", '46px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["subproperty", "textShadow.color", 'rgba(255,255,255,0.65)'],
            ["subproperty", "textShadow.offsetV", '1px']
         ],
         "${_Rectangle}": [
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '0']
         ],
         "${__2-cranes}": [
            ["style", "top", '-13px'],
            ["style", "height", '344px'],
            ["style", "opacity", '0'],
            ["style", "left", '-73px'],
            ["style", "width", '611px']
         ],
         "${_text_egret}": [
            ["style", "top", '311px'],
            ["style", "width", '388px'],
            ["style", "opacity", '1'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["color", "color", 'rgba(253,253,253,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '94px'],
            ["style", "font-size", '12px']
         ],
         "${_FranklinsGulls}": [
            ["style", "top", '-13px'],
            ["style", "height", '344px'],
            ["style", "opacity", '1'],
            ["style", "left", '-134px'],
            ["style", "width", '624px']
         ],
         "${_text_avocets}": [
            ["style", "top", '297px'],
            ["style", "width", '388px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "opacity", '1'],
            ["style", "font-weight", '500'],
            ["style", "left", '94px'],
            ["style", "font-size", '12px']
         ],
         "${_Avocets}": [
            ["style", "top", '-2px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${_text_nauplii}": [
            ["style", "top", '284px'],
            ["style", "width", '388px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "opacity", '1'],
            ["style", "height", '46px'],
            ["style", "font-weight", '500'],
            ["style", "left", '94px'],
            ["style", "font-size", '12px']
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
         "${_Egret}": [
            ["style", "top", '-12px'],
            ["style", "height", '440px'],
            ["style", "opacity", '1'],
            ["style", "left", '-89px'],
            ["style", "width", '671px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '490px'],
            ["style", "height", '330px'],
            ["style", "overflow", 'hidden']
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
         "${_RoundRectCopy5}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '0.3'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '10px'],
            ["style", "top", '314px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '10px'],
            ["style", "left", '74px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         timeline: [
            { id: "eid55", tween: [ "style", "${_text_franklinsgulls}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 250 },
            { id: "eid17", tween: [ "style", "${_RoundRectCopy5}", "opacity", '0.7', { fromValue: '0.30000001192092896'}], position: 1000, duration: 250 },
            { id: "eid18", tween: [ "style", "${_RoundRectCopy5}", "opacity", '0.3', { fromValue: '0.7'}], position: 1250, duration: 250 },
            { id: "eid11", tween: [ "style", "${_RoundRectCopy2}", "opacity", '0.7', { fromValue: '0.30000001192092896'}], position: 250, duration: 250 },
            { id: "eid12", tween: [ "style", "${_RoundRectCopy2}", "opacity", '0.3', { fromValue: '0.7'}], position: 500, duration: 250 },
            { id: "eid51", tween: [ "style", "${_text_avocets}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 250 },
            { id: "eid56", tween: [ "style", "${_text_avocets}", "opacity", '1', { fromValue: '0.000000'}], position: 1250, duration: 250 },
            { id: "eid3", tween: [ "style", "${_FranklinsGulls}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 250 },
            { id: "eid9", tween: [ "style", "${_RoundRectCopy}", "opacity", '0.69982299804687', { fromValue: '0.30000001192092896'}], position: 0, duration: 250 },
            { id: "eid10", tween: [ "style", "${_RoundRectCopy}", "opacity", '0.3', { fromValue: '0.69982299804687'}], position: 250, duration: 250 },
            { id: "eid13", tween: [ "style", "${_RoundRectCopy3}", "opacity", '0.7', { fromValue: '0.30000001192092896'}], position: 500, duration: 250 },
            { id: "eid14", tween: [ "style", "${_RoundRectCopy3}", "opacity", '0.3', { fromValue: '0.7'}], position: 750, duration: 250 },
            { id: "eid8", tween: [ "style", "${_RoundRect}", "opacity", '0.3', { fromValue: '0.7'}], position: 0, duration: 250 },
            { id: "eid20", tween: [ "style", "${_RoundRect}", "opacity", '0.7', { fromValue: '0.300000'}], position: 1250, duration: 250 },
            { id: "eid15", tween: [ "style", "${_RoundRectCopy4}", "opacity", '0.7', { fromValue: '0.30000001192092896'}], position: 750, duration: 250 },
            { id: "eid16", tween: [ "style", "${_RoundRectCopy4}", "opacity", '0.3', { fromValue: '0.7'}], position: 1000, duration: 250 },
            { id: "eid60", tween: [ "style", "${__2-cranes}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
            { id: "eid61", tween: [ "style", "${__2-cranes}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 250 },
            { id: "eid52", tween: [ "style", "${_text_egret}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 250 },
            { id: "eid7", tween: [ "style", "${_Egret}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 250 },
            { id: "eid1", tween: [ "style", "${_Avocets}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 250 },
            { id: "eid6", tween: [ "style", "${_Avocets}", "opacity", '1', { fromValue: '0.000000'}], position: 1250, duration: 250 },
            { id: "eid54", tween: [ "style", "${_text_sandhillcranes}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 250 },
            { id: "eid4", tween: [ "style", "${_nauplii}", "opacity", '0', { fromValue: '1'}], position: 750, duration: 250 },
            { id: "eid53", tween: [ "style", "${_text_nauplii}", "opacity", '0', { fromValue: '1'}], position: 750, duration: 250 }         ]
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
})(jQuery, AdobeEdge, "EDGE-218487792");

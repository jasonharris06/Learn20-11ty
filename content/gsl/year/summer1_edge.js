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
            rect:['39px','42px','419px','247px','auto','auto'],
            text:"More Nesting Season Highlights<br><br>•  Grebes swim with their young on their backs.<br><br>•  In May, Canada Geese gather in large numbers in open wetland areas. They start to look shabby as they molt: they lose their breeding plumage during the time that they care for their young.<br><br>•  Gulls run with open mouths through clouds of adult brine flies, swallowing any that land in their mouths.<br><br>•  Bison on Antelope Island bear their calves.",
            align:"left",
            font:['Arial, Helvetica, sans-serif',14,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'lake-may2',
            type:'image',
            rect:['-7px','0px','504px','330px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"4-lake-may2.jpg",'0px','0px']
         },
         {
            id:'Rectangle3',
            type:'rect',
            rect:['77px','278px','399px','53px','auto','auto'],
            opacity:0.4566650390625,
            fill:["rgba(255,255,255,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'text_green',
            type:'text',
            rect:['83px','285px','399px','46px','auto','auto'],
            text:"Newly hatched brine shrimp quickly eat phytoplankton that have accumulated over the winter, rapidly changing the water from green to blue. Migratory birds eat the brine shrimp. &gt;&gt;&gt;",
            align:"left",
            font:['Arial, Helvetica, sans-serif',12,"rgba(0,0,0,1)","500","none","normal"]
         },
         {
            id:'eggs',
            type:'image',
            rect:['-100px','0px','605px','330px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"3-nest%20speckled%20eggs.png",'0px','0px']
         },
         {
            id:'Rectangle2',
            type:'rect',
            rect:['0px','307px','76px','23px','auto','auto'],
            opacity:0.38507080078125,
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'text_raftnest',
            type:'text',
            rect:['83px','300px','399px','46px','auto','auto'],
            text:"Several species of birds, including ibis, herons, and egrets, lay their eggs in floating raft-like nests. &gt;&gt;&gt;",
            align:"left",
            font:['Arial, Helvetica, sans-serif',12,"rgba(255,255,255,1.00)","500","none","normal"]
         },
         {
            id:'HeronRookery',
            type:'image',
            rect:['-80px','0px','590px','330px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"1-HeronRookery.png",'0px','0px']
         },
         {
            id:'text_heronrookery',
            type:'text',
            rect:['83px','286px','399px','41px','auto','auto'],
            text:"This heron rookery sits near the Education Center at the Farmington Bay Bird Refuge. Egrets, herons, and ibis often nest together in colonies, which are very active during May and June. &gt;&gt;&gt;",
            align:"left",
            font:['Arial, Helvetica, sans-serif',12,"rgba(255,255,255,1.00)","500","none","normal"]
         },
         {
            id:'Pelicans',
            type:'image',
            rect:['-5px','0px','495px','330px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"1-Pelicans.jpg",'0px','0px']
         },
         {
            id:'text_pelicans',
            type:'text',
            rect:['92px','300px','390px','28px','auto','auto'],
            text:"American White Pelicans fly over Spiral Jetty as they travel between their island nesting colony and their freshwater feeding grounds. &gt;&gt;&gt;",
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
         "${_lake-may2}": [
            ["style", "top", '0px'],
            ["style", "height", '330px'],
            ["style", "opacity", '1'],
            ["style", "left", '-7px'],
            ["style", "width", '504px']
         ],
         "${_Rectangle2}": [
            ["style", "top", '307px'],
            ["style", "height", '23px'],
            ["style", "opacity", '0.5'],
            ["style", "left", '0px'],
            ["style", "width", '76px']
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
         "${_Text5}": [
            ["style", "top", '42px'],
            ["style", "height", '247px'],
            ["style", "font-size", '14px'],
            ["style", "left", '39px'],
            ["style", "width", '419px']
         ],
         "${_text_raftnest}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '83px'],
            ["style", "width", '399px'],
            ["style", "top", '300px'],
            ["style", "height", '46px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "font-size", '12px'],
            ["style", "font-weight", '500']
         ],
         "${_Rectangle}": [
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '0']
         ],
         "${_text_heronrookery}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '83px'],
            ["style", "width", '399px'],
            ["style", "top", '286px'],
            ["style", "height", '41px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "font-size", '12px'],
            ["style", "font-weight", '500']
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
         "${_eggs}": [
            ["style", "top", '0px'],
            ["style", "height", '330px'],
            ["style", "opacity", '1'],
            ["style", "left", '-100px'],
            ["style", "width", '605px']
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
         "${_Rectangle3}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0.4566650390625']
         ],
         "${_Pelicans}": [
            ["style", "top", '0px'],
            ["style", "height", '330px'],
            ["style", "opacity", '1'],
            ["style", "left", '-5px'],
            ["style", "width", '495px']
         ],
         "${_text_green}": [
            ["style", "top", '285px'],
            ["style", "font-size", '12px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "font-weight", '500'],
            ["style", "height", '46px'],
            ["style", "opacity", '1'],
            ["style", "left", '83px'],
            ["style", "width", '399px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '330px'],
            ["style", "width", '490px']
         ],
         "${_text_pelicans}": [
            ["style", "top", '300px'],
            ["style", "font-size", '12px'],
            ["style", "font-weight", '500'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "opacity", '1'],
            ["style", "left", '92px'],
            ["style", "width", '390px']
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
         "${_HeronRookery}": [
            ["style", "top", '0px'],
            ["style", "height", '330px'],
            ["style", "opacity", '1'],
            ["style", "left", '-80px'],
            ["style", "width", '590px']
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
            { id: "eid54", tween: [ "style", "${_text_heronrookery}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 250 },
            { id: "eid77", tween: [ "style", "${_eggs}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 250 },
            { id: "eid75", tween: [ "style", "${_Pelicans}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 250 },
            { id: "eid79", tween: [ "style", "${_Pelicans}", "opacity", '1', { fromValue: '0.000000'}], position: 1000, duration: 250 },
            { id: "eid76", tween: [ "style", "${_HeronRookery}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 250 },
            { id: "eid13", tween: [ "style", "${_RoundRectCopy3}", "opacity", '0.7', { fromValue: '0.30000001192092896'}], position: 500, duration: 250 },
            { id: "eid14", tween: [ "style", "${_RoundRectCopy3}", "opacity", '0.3', { fromValue: '0.7'}], position: 750, duration: 250 },
            { id: "eid9", tween: [ "style", "${_RoundRectCopy}", "opacity", '0.69982299804687', { fromValue: '0.30000001192092896'}], position: 0, duration: 250 },
            { id: "eid10", tween: [ "style", "${_RoundRectCopy}", "opacity", '0.3', { fromValue: '0.69982299804687'}], position: 250, duration: 250 },
            { id: "eid15", tween: [ "style", "${_RoundRectCopy4}", "opacity", '0.7', { fromValue: '0.30000001192092896'}], position: 750, duration: 250 },
            { id: "eid16", tween: [ "style", "${_RoundRectCopy4}", "opacity", '0.3', { fromValue: '0.7'}], position: 1000, duration: 250 },
            { id: "eid8", tween: [ "style", "${_RoundRect}", "opacity", '0.3', { fromValue: '0.7'}], position: 0, duration: 250 },
            { id: "eid20", tween: [ "style", "${_RoundRect}", "opacity", '0.7', { fromValue: '0.300000'}], position: 1000, duration: 250 },
            { id: "eid80", tween: [ "style", "${_Rectangle2}", "opacity", '0', { fromValue: '0.5'}], position: 500, duration: 250 },
            { id: "eid11", tween: [ "style", "${_RoundRectCopy2}", "opacity", '0.7', { fromValue: '0.30000001192092896'}], position: 250, duration: 250 },
            { id: "eid12", tween: [ "style", "${_RoundRectCopy2}", "opacity", '0.3', { fromValue: '0.7'}], position: 500, duration: 250 },
            { id: "eid78", tween: [ "style", "${_lake-may2}", "opacity", '0', { fromValue: '1'}], position: 750, duration: 250 },
            { id: "eid55", tween: [ "style", "${_text_raftnest}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 250 },
            { id: "eid51", tween: [ "style", "${_text_pelicans}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 250 },
            { id: "eid56", tween: [ "style", "${_text_pelicans}", "opacity", '1', { fromValue: '0.000000'}], position: 1000, duration: 250 },
            { id: "eid53", tween: [ "style", "${_text_green}", "opacity", '0', { fromValue: '1'}], position: 750, duration: 250 }         ]
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
})(jQuery, AdobeEdge, "EDGE-218487794");

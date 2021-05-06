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
            id:'build-12',
            type:'image',
            rect:['0px','0px','600px','604px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"build-1.jpg",'0px','0px']
         },
         {
            id:'build-2',
            type:'image',
            rect:['0px','0px','600px','604px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"build-2.jpg",'0px','0px']
         },
         {
            id:'build-3',
            type:'image',
            rect:['0px','0px','600px','604px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"build-3.jpg",'0px','0px']
         },
         {
            id:'build-4',
            type:'image',
            rect:['0px','0px','600px','604px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"build-4.jpg",'0px','0px']
         },
         {
            id:'build-5',
            type:'image',
            rect:['0px','0px','600px','604px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"build-5.jpg",'0px','0px']
         },
         {
            id:'build-6',
            type:'image',
            rect:['0px','0px','600px','604px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"build-6.jpg",'0px','0px']
         },
         {
            id:'build-7',
            type:'image',
            rect:['0px','0px','600px','604px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"build-7.jpg",'0px','0px']
         },
         {
            id:'rollover-hatching2',
            type:'rect',
            rect:['445','75','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'rollover-naupliar',
            type:'rect',
            rect:['309px','232px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'rollover-adults',
            type:'rect',
            rect:['13','3px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'rollover-juveniles2',
            type:'rect',
            rect:['65px','284px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'rollover-cysts2',
            type:'rect',
            rect:['331px','18px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'rollover-active2',
            type:'rect',
            rect:['365','112','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'cysts-info',
            display:'none',
            type:'rect',
            rect:['32','75','auto','auto','auto','auto']
         },
         {
            id:'active-info',
            type:'rect',
            rect:['31px','75px','auto','auto','auto','auto']
         },
         {
            id:'hatching-info',
            type:'rect',
            rect:['31px','75px','auto','auto','auto','auto']
         },
         {
            id:'naupliar-info',
            type:'rect',
            rect:['32px','76px','auto','auto','auto','auto']
         },
         {
            id:'juveniles-info',
            display:'none',
            type:'rect',
            rect:['32px','75px','auto','auto','auto','auto']
         },
         {
            id:'adults-info',
            display:'none',
            type:'rect',
            rect:['31px','75px','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'active-info',
            symbolName:'active-info'
         },
         {
            id:'rollover-adults',
            symbolName:'rollover-adults'
         },
         {
            id:'cysts-info',
            symbolName:'cysts-info'
         },
         {
            id:'juveniles-info',
            symbolName:'juveniles-info'
         },
         {
            id:'rollover-hatching2',
            symbolName:'rollover-hatching'
         },
         {
            id:'rollover-cysts2',
            symbolName:'rollover-cysts'
         },
         {
            id:'rollover-active2',
            symbolName:'rollover-active'
         },
         {
            id:'rollover-naupliar',
            symbolName:'rollover-naupliar'
         },
         {
            id:'adults-info',
            symbolName:'adults-info'
         },
         {
            id:'naupliar-info',
            symbolName:'naupliar-info'
         },
         {
            id:'hatching-info',
            symbolName:'hatching-info'
         },
         {
            id:'rollover-juveniles2',
            symbolName:'rollover-juveniles'
         }
         ]
      },
   states: {
      "Base State": {
         "${_rollover-juveniles2}": [
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '0']
         ],
         "${_build-7}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_build-12}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_build-2}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_rollover-hatching2}": [
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '0']
         ],
         "${_adults-info}": [
            ["style", "top", '75px'],
            ["style", "left", '31px'],
            ["style", "display", 'none']
         ],
         "${_cysts-info}": [
            ["style", "display", 'none']
         ],
         "${_rollover-naupliar}": [
            ["style", "top", '232px'],
            ["style", "opacity", '0'],
            ["style", "left", '309px'],
            ["style", "cursor", 'pointer']
         ],
         "${_build-4}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_naupliar-info}": [
            ["style", "top", '76px'],
            ["style", "left", '32px'],
            ["style", "display", 'block']
         ],
         "${_active-info}": [
            ["style", "top", '75px'],
            ["style", "left", '31px'],
            ["style", "display", 'block']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '604px'],
            ["style", "width", '600px']
         ],
         "${_rollover-cysts2}": [
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '0']
         ],
         "${_juveniles-info}": [
            ["style", "top", '75px'],
            ["style", "left", '32px'],
            ["style", "display", 'none']
         ],
         "${_rollover-active2}": [
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '0']
         ],
         "${_hatching-info}": [
            ["style", "top", '75px'],
            ["style", "left", '31px'],
            ["style", "display", 'block']
         ],
         "${_rollover-adults}": [
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '0']
         ],
         "${_build-5}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_build-3}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_build-6}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1750,
         autoPlay: true,
         timeline: [
            { id: "eid2", tween: [ "style", "${_build-2}", "opacity", '1', { fromValue: '0.000000'}], position: 250, duration: 250 },
            { id: "eid154", tween: [ "style", "${_active-info}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid8", tween: [ "style", "${_build-4}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 250 },
            { id: "eid84", tween: [ "style", "${_rollover-naupliar}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 250 },
            { id: "eid82", tween: [ "style", "${_rollover-hatching2}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 250 },
            { id: "eid157", tween: [ "style", "${_hatching-info}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid12", tween: [ "style", "${_build-6}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 250 },
            { id: "eid10", tween: [ "style", "${_build-5}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 250 },
            { id: "eid6", tween: [ "style", "${_build-3}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250 },
            { id: "eid184", tween: [ "style", "${_juveniles-info}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid190", tween: [ "style", "${_adults-info}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid86", tween: [ "style", "${_rollover-juveniles2}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 250 },
            { id: "eid88", tween: [ "style", "${_rollover-adults}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 250 },
            { id: "eid97", tween: [ "style", "${_cysts-info}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid80", tween: [ "style", "${_rollover-active2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250 },
            { id: "eid175", tween: [ "style", "${_naupliar-info}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid14", tween: [ "style", "${_build-7}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 250 },
            { id: "eid78", tween: [ "style", "${_rollover-cysts2}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 250 },
            { id: "eid89", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_rollover-cysts2}', [] ], ""], position: 0 },
            { id: "eid90", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_rollover-active2}', [] ], ""], position: 0 },
            { id: "eid91", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_rollover-naupliar}', [] ], ""], position: 0 }         ]
      }
   }
},
"rollover-cysts": {
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
      type: 'image',
      id: 'rollover-cysts',
      opacity: 1,
      rect: ['0px','25px','98px','61px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/rollover-cysts.jpg','0px','0px']
   },
   {
      type: 'text',
      rect: ['58px','0px','auto','auto','auto','auto'],
      id: 'Text',
      text: 'Dormant<br>Cysts',
      align: 'right',
      font: ['Arial, Helvetica, sans-serif',18,'rgba(125,62,28,1.00)','normal','none','']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_rollover-cysts}": [
            ["style", "top", '25px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_Text}": [
            ["style", "top", '0px'],
            ["style", "text-align", 'right'],
            ["color", "color", 'rgba(60,60,60,1.00)'],
            ["style", "left", '58px'],
            ["style", "font-size", '18px']
         ],
         "${symbolSelector}": [
            ["style", "height", '86px'],
            ["style", "width", '127px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: true,
         timeline: [
            { id: "eid42", tween: [ "style", "${_rollover-cysts}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
            { id: "eid44", tween: [ "color", "${_Text}", "color", 'rgba(125,62,28,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(60,60,60,1.00)'}], position: 0, duration: 250 }         ]
      }
   }
},
"rollover-active": {
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
      rect: ['3px','0px','105px','84px','auto','auto'],
      id: 'rollover-active',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/rollover-active.jpg','0px','0px']
   },
   {
      font: ['Arial, Helvetica, sans-serif',18,'rgba(125,62,28,1.00)','normal','none',''],
      id: 'TextCopy2',
      text: 'Active<br>young',
      type: 'text',
      rect: ['0px','38px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_TextCopy2}": [
            ["style", "top", '38px'],
            ["color", "color", 'rgba(60,60,60,1.00)'],
            ["style", "left", '0px'],
            ["style", "font-size", '18px']
         ],
         "${_rollover-active}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '3px']
         ],
         "${symbolSelector}": [
            ["style", "height", '84px'],
            ["style", "width", '108px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: true,
         timeline: [
            { id: "eid52", tween: [ "style", "${_rollover-active}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
            { id: "eid54", tween: [ "color", "${_TextCopy2}", "color", 'rgba(125,62,28,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(60,60,60,1.00)'}], position: 0, duration: 250 }         ]
      }
   }
},
"rollover-hatching": {
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
      type: 'image',
      id: 'rollover-hatching-1',
      opacity: 1,
      rect: ['56px','0px','58px','131px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/rollover-hatching-1.jpg','0px','0px']
   },
   {
      type: 'image',
      id: 'rollover-hatching-2',
      opacity: 1,
      rect: ['0px','0px','114px','70px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/rollover-hatching-2.jpg','0px','0px']
   },
   {
      type: 'text',
      id: 'TextCopy',
      text: 'Hatching',
      rect: ['56px','13px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',18,'rgba(125,62,28,1.00)','normal','none','']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_rollover-hatching-1}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '56px']
         ],
         "${_TextCopy}": [
            ["style", "top", '13px'],
            ["color", "color", 'rgba(60,60,60,1.00)'],
            ["style", "left", '56px'],
            ["style", "font-size", '18px']
         ],
         "${_rollover-hatching-2}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '131px'],
            ["style", "width", '127px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 281,
         autoPlay: false,
         timeline: [
            { id: "eid46", tween: [ "style", "${_rollover-hatching-2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 281 },
            { id: "eid48", tween: [ "style", "${_rollover-hatching-1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 281 },
            { id: "eid50", tween: [ "color", "${_TextCopy}", "color", 'rgba(125,62,28,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(60,60,60,1.00)'}], position: 0, duration: 281 }         ]
      }
   }
},
"rollover-naupliar": {
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
      type: 'image',
      id: 'rollover-nauplius-1',
      opacity: 1,
      rect: ['166px','-8px','121px','263px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/rollover-nauplius-1.jpg','0px','0px']
   },
   {
      type: 'image',
      id: 'rollover-nauplius-2',
      opacity: 1,
      rect: ['2px','243px','217px','123px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/rollover-nauplius-2.jpg','0px','0px']
   },
   {
      rect: ['147px','129px','auto','auto','auto','auto'],
      id: 'TextCopy3',
      text: 'Naupliar<br>stages',
      font: ['Arial, Helvetica, sans-serif',18,'rgba(125,62,28,1.00)','normal','none',''],
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_rollover-nauplius-1}": [
            ["style", "top", '-8px'],
            ["style", "opacity", '0'],
            ["style", "left", '166px']
         ],
         "${_rollover-nauplius-2}": [
            ["style", "top", '243px'],
            ["style", "opacity", '0'],
            ["style", "left", '2px']
         ],
         "${_TextCopy3}": [
            ["style", "top", '129px'],
            ["color", "color", 'rgba(60,60,60,1.00)'],
            ["style", "left", '147px'],
            ["style", "font-size", '18px']
         ],
         "${symbolSelector}": [
            ["style", "height", '372px'],
            ["style", "width", '284px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: true,
         timeline: [
            { id: "eid66", tween: [ "style", "${_rollover-nauplius-1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
            { id: "eid60", tween: [ "color", "${_TextCopy3}", "color", 'rgba(125,62,28,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(60,60,60,1.00)'}], position: 0, duration: 250 },
            { id: "eid64", tween: [ "style", "${_rollover-nauplius-2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 }         ]
      }
   }
},
"rollover-juveniles": {
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
      type: 'image',
      id: 'rollover-juveniles-1',
      opacity: 1,
      rect: ['0px','192px','204px','105px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/rollover-juveniles-1.jpg','0px','0px']
   },
   {
      type: 'image',
      id: 'rollover-juveniles-2',
      opacity: 1,
      rect: ['0px','0px','127px','297px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/rollover-juveniles-2.jpg','0px','0px']
   },
   {
      type: 'text',
      id: 'TextCopy4',
      text: 'Juveniles',
      rect: ['98px','100px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',18,'rgba(125,62,28,1.00)','normal','none','']
   },
   {
      type: 'text',
      id: 'TextCopy6',
      text: 'Female',
      rect: ['109px','168px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',12,'rgba(125,62,28,1.00)','normal','none','']
   },
   {
      type: 'text',
      id: 'TextCopy7',
      text: 'Male',
      rect: ['96px','277px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',12,'rgba(125,62,28,1.00)','normal','none','']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_TextCopy4}": [
            ["style", "top", '100px'],
            ["color", "color", 'rgba(60,60,60,1.00)'],
            ["style", "left", '98px'],
            ["style", "font-size", '18px']
         ],
         "${symbolSelector}": [
            ["style", "height", '297px'],
            ["style", "width", '204px']
         ],
         "${_rollover-juveniles-1}": [
            ["style", "top", '192px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_rollover-juveniles-2}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_TextCopy7}": [
            ["style", "top", '277px'],
            ["color", "color", 'rgba(60,60,60,1.00)'],
            ["style", "left", '96px'],
            ["style", "font-size", '12px']
         ],
         "${_TextCopy6}": [
            ["style", "top", '168px'],
            ["color", "color", 'rgba(60,60,60,1.00)'],
            ["style", "left", '109px'],
            ["style", "font-size", '12px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: false,
         timeline: [
            { id: "eid72", tween: [ "color", "${_TextCopy6}", "color", 'rgba(125,62,28,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(60,60,60,1.00)'}], position: 0, duration: 250 },
            { id: "eid74", tween: [ "color", "${_TextCopy7}", "color", 'rgba(125,62,28,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(60,60,60,1.00)'}], position: 0, duration: 250 },
            { id: "eid70", tween: [ "style", "${_rollover-juveniles-1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
            { id: "eid76", tween: [ "color", "${_TextCopy4}", "color", 'rgba(125,62,28,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(60,60,60,1.00)'}], position: 0, duration: 250 },
            { id: "eid68", tween: [ "style", "${_rollover-juveniles-2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 }         ]
      }
   }
},
"rollover-adults": {
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
      type: 'image',
      id: 'rollover-adult-1',
      opacity: 1,
      rect: ['0px','0px','150px','324px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/rollover-adult-1.jpg','0px','0px']
   },
   {
      type: 'image',
      id: 'rollover-adult-2',
      opacity: 1,
      rect: ['0px','0px','342px','174px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/rollover-adult-2.jpg','0px','0px']
   },
   {
      type: 'text',
      id: 'TextCopy9',
      text: 'Female',
      rect: ['170px','139px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',12,'rgba(125,62,28,1.00)','normal','none','']
   },
   {
      type: 'text',
      id: 'TextCopy8',
      text: 'Male',
      rect: ['45px','209px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',12,'rgba(125,62,28,1.00)','normal','none','']
   },
   {
      type: 'text',
      id: 'TextCopy5',
      text: 'Adults',
      rect: ['138px','174px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',18,'rgba(125,62,28,1.00)','normal','none','']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_TextCopy9}": [
            ["style", "top", '139px'],
            ["color", "color", 'rgba(61,61,61,1.00)'],
            ["style", "left", '170px'],
            ["style", "font-size", '12px']
         ],
         "${_TextCopy5}": [
            ["style", "top", '174px'],
            ["color", "color", 'rgba(61,61,61,1.00)'],
            ["style", "left", '138px'],
            ["style", "font-size", '18px']
         ],
         "${symbolSelector}": [
            ["style", "height", '324px'],
            ["style", "width", '342px']
         ],
         "${_TextCopy8}": [
            ["style", "top", '209px'],
            ["color", "color", 'rgba(61,61,61,1.00)'],
            ["style", "left", '45px'],
            ["style", "font-size", '12px']
         ],
         "${_rollover-adult-1}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_rollover-adult-2}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: false,
         timeline: [
            { id: "eid32", tween: [ "style", "${_rollover-adult-2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
            { id: "eid34", tween: [ "style", "${_rollover-adult-1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
            { id: "eid40", tween: [ "color", "${_TextCopy5}", "color", 'rgba(125,62,28,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(61,61,61,1.00)'}], position: 0, duration: 250 },
            { id: "eid36", tween: [ "color", "${_TextCopy9}", "color", 'rgba(125,62,28,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(61,61,61,1.00)'}], position: 0, duration: 250 },
            { id: "eid38", tween: [ "color", "${_TextCopy8}", "color", 'rgba(125,62,28,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(61,61,61,1.00)'}], position: 0, duration: 250 }         ]
      }
   }
},
"cysts-info": {
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
      rect: ['-32px','-76px','600px','605px','auto','auto'],
      stroke: [0,'rgb(0, 0, 0)','none'],
      id: 'Rectangle4',
      opacity: 0.6,
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['0px','0px','540px','454px','auto','auto'],
      boxShadow: ['',2,3,10,0,'rgba(0,0,0,0.40)'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(228,238,241,1.00)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',14,'rgba(60,60,60,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2Copy4',
      text: 'Inside dormant cysts* are embryos suspended at the gastrula stage of development. The embryos can remain dormant in harsh conditions for many years. On the shores of Great Salt Lake, they freeze in the winter and bake in the dry summer heat. They can even survive in outer space! ',
      align: 'left',
      rect: ['45px','274px','462px','72px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',12,'rgba(60,60,60,1)','normal','none','italic'],
      type: 'text',
      id: 'Text2Copy5',
      text: '* Dormant cysts are known by many names, including encysted embryos, winter cysts, or just plain cysts.<br>',
      align: 'left',
      rect: ['45px','368px','462px','62px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal'],
      type: 'text',
      id: 'Text2Copy3',
      text: '1 of 3',
      align: 'left',
      rect: ['45px','420px','auto','auto','auto','auto']
   },
   {
      id: 'cyst0025',
      type: 'image',
      rect: ['43px','51px','450px','207px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cyst0025.jpg','0px','0px']
   },
   {
      font: ['Arial, Helvetica, sans-serif',14,'rgba(60,60,60,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2Copy2',
      text: 'Cysts are tiny—just 0.2 to 0.25 mm across. They\'re also clingy, a characteristic that makes it easy for them to hitch a ride on migrating birds.<br>',
      align: 'left',
      rect: ['45px','344px','462px','72px','auto','auto']
   },
   {
      id: 'cysts-dime',
      type: 'image',
      rect: ['63px','51px','432px','280px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cysts-dime.jpg','0px','0px']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal'],
      type: 'text',
      id: 'Text2Copy',
      text: '2 of 3',
      align: 'left',
      rect: ['45px','420px','auto','auto','auto','auto']
   },
   {
      id: 'cysts-on-shore',
      type: 'image',
      rect: ['45px','51px','450px','235px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cysts-on-shore.jpg','0px','0px']
   },
   {
      font: ['Arial, Helvetica, sans-serif',14,'rgba(60,60,60,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2Copy7',
      text: 'In the fall, brine shrimp release huge quantities of cysts into Great Salt Lake. Massive clouds of cysts float on the water, and piles wash up on shore. Commercial fishing vessels collect tons of cysts in the fall and sell them as food to commercial fish hatcheries.',
      align: 'left',
      rect: ['45px','329px','462px','72px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',11,'rgba(60,60,60,1)','normal','none','italic'],
      type: 'text',
      id: 'Text2Copy8',
      text: 'Cysts wash up on shore forming dark bands along the water\'s edge, by Bonnie Baxter.',
      align: 'left',
      rect: ['45px','294px','455px','37px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal'],
      type: 'text',
      id: 'Text2Copy6',
      text: '3 of 3',
      align: 'left',
      rect: ['45px','420px','auto','auto','auto','auto']
   },
   {
      rect: ['123px','413px','auto','auto','auto','auto'],
      id: 'button-previous',
      display: 'none',
      cursor: ['pointer'],
      type: 'rect'
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','normal','none','italic'],
      type: 'text',
      id: 'Text2',
      text: 'Dormant cysts',
      align: 'left',
      rect: ['45px','19px','auto','auto','auto','auto']
   },
   {
      id: 'button-close',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['454px','10px','auto','auto','auto','auto']
   },
   {
      id: 'button-more',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['449px','412px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'button-previous',
      symbolName: 'button-previous'
   },
   {
      id: 'button-more',
      symbolName: 'button-more'
   },
   {
      id: 'button-close',
      symbolName: 'button-close'
   }   ]
   },
   states: {
      "Base State": {
         "${_Text2Copy}": [
            ["style", "top", '420px'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", 'bold'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '45px'],
            ["style", "font-size", '16px']
         ],
         "${_cyst0025}": [
            ["style", "top", '51px'],
            ["style", "opacity", '0'],
            ["style", "left", '43px']
         ],
         "${_Text2Copy2}": [
            ["style", "line-height", '18px'],
            ["style", "font-size", '14px'],
            ["style", "top", '344px'],
            ["style", "font-style", 'normal'],
            ["style", "height", '72px'],
            ["style", "opacity", '0'],
            ["style", "left", '45px'],
            ["style", "width", '462px']
         ],
         "${symbolSelector}": [
            ["style", "height", '454px'],
            ["style", "width", '540px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(228,238,241,1.00)'],
            ["subproperty", "boxShadow.blur", '10px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '540px'],
            ["style", "top", '0px'],
            ["style", "height", '454px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '2px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.40)']
         ],
         "${_Rectangle4}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '-76px'],
            ["style", "height", '605px'],
            ["style", "opacity", '0'],
            ["style", "left", '-32px'],
            ["style", "width", '600px']
         ],
         "${_cysts-on-shore}": [
            ["style", "top", '51px'],
            ["style", "opacity", '0'],
            ["style", "left", '45px']
         ],
         "${_cysts-dime}": [
            ["style", "top", '51px'],
            ["style", "opacity", '0'],
            ["style", "left", '63px']
         ],
         "${_button-more}": [
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text2Copy6}": [
            ["style", "top", '420px'],
            ["style", "text-align", 'left'],
            ["style", "opacity", '0'],
            ["style", "font-style", 'normal'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '45px'],
            ["style", "font-size", '16px']
         ],
         "${_button-previous}": [
            ["style", "top", '413px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '123px']
         ],
         "${_Text2Copy5}": [
            ["style", "line-height", '18px'],
            ["style", "font-size", '12px'],
            ["style", "top", '368px'],
            ["style", "height", '62px'],
            ["style", "font-style", 'italic'],
            ["style", "opacity", '0'],
            ["style", "left", '45px'],
            ["style", "width", '462px']
         ],
         "${_Text2Copy4}": [
            ["style", "top", '274px'],
            ["style", "width", '462px'],
            ["style", "line-height", '18px'],
            ["style", "height", '72px'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '45px'],
            ["style", "font-size", '14px']
         ],
         "${_Text2Copy8}": [
            ["style", "line-height", '18px'],
            ["style", "font-size", '11px'],
            ["style", "top", '294px'],
            ["style", "font-style", 'italic'],
            ["style", "height", '37px'],
            ["style", "opacity", '0'],
            ["style", "left", '45px'],
            ["style", "width", '455px']
         ],
         "${_button-close}": [
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '0']
         ],
         "${_Text2Copy7}": [
            ["style", "top", '329px'],
            ["style", "width", '462px'],
            ["style", "line-height", '18px'],
            ["style", "height", '72px'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '45px'],
            ["style", "font-size", '14px']
         ],
         "${_Text2}": [
            ["style", "top", '19px'],
            ["style", "font-style", 'italic'],
            ["style", "opacity", '0'],
            ["style", "left", '45px'],
            ["style", "font-size", '16px']
         ],
         "${_Text2Copy3}": [
            ["style", "top", '420px'],
            ["style", "text-align", 'left'],
            ["style", "opacity", '0'],
            ["style", "font-style", 'normal'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '45px'],
            ["style", "font-size", '16px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: false,
         timeline: [
            { id: "eid100", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid110", tween: [ "style", "${_Text2Copy5}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid125", tween: [ "style", "${_Text2Copy5}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid104", tween: [ "style", "${_Rectangle4}", "opacity", '0.6000000238418579', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid148", tween: [ "style", "${_Text2Copy6}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid170", tween: [ "style", "${_button-more}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
            { id: "eid151", tween: [ "style", "${_button-previous}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid102", tween: [ "style", "${_Text2Copy3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid126", tween: [ "style", "${_Text2Copy3}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid142", tween: [ "style", "${_Text2Copy8}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid116", tween: [ "style", "${_button-more}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid153", tween: [ "style", "${_button-more}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid117", tween: [ "style", "${_Text2Copy}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid136", tween: [ "style", "${_Text2Copy}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid114", tween: [ "style", "${_cyst0025}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid124", tween: [ "style", "${_cyst0025}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid112", tween: [ "style", "${_Text2Copy4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid123", tween: [ "style", "${_Text2Copy4}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid133", tween: [ "style", "${_Text2Copy2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid134", tween: [ "style", "${_Text2Copy2}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid169", tween: [ "style", "${_button-previous}", "display", 'block', { fromValue: 'none'}], position: 541, duration: 0 },
            { id: "eid146", tween: [ "style", "${_cysts-on-shore}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid131", tween: [ "style", "${_cysts-dime}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid135", tween: [ "style", "${_cysts-dime}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid108", tween: [ "style", "${_button-close}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid144", tween: [ "style", "${_Text2Copy7}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid106", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid94", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_button-close}', [] ], ""], position: 0 },
            { id: "eid96", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_button-more}', [] ], ""], position: 0 },
            { id: "eid152", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_button-previous}', [] ], ""], position: 0 }         ]
      }
   }
},
"button-close": {
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
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal'],
      type: 'text',
      id: 'Text2Copy',
      text: 'Close',
      align: 'right',
      rect: ['9px','9px','auto','auto','auto','auto']
   },
   {
      rect: ['0px','0px','62px','34px','auto','auto'],
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(228,238,241,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["style", "top", '0px'],
            ["style", "height", '34px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '62px']
         ],
         "${_Text2Copy}": [
            ["style", "top", '9px'],
            ["style", "text-align", 'right'],
            ["color", "color", 'rgba(60,60,60,1)'],
            ["style", "font-style", 'normal'],
            ["style", "font-weight", '700'],
            ["style", "left", '9px'],
            ["style", "font-size", '16px']
         ],
         "${symbolSelector}": [
            ["style", "height", '34px'],
            ["style", "width", '62px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: true,
         timeline: [
            { id: "eid93", tween: [ "color", "${_Text2Copy}", "color", 'rgba(20,118,165,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(60,60,60,1)'}], position: 0, duration: 250 }         ]
      }
   }
},
"button-more": {
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
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal'],
      type: 'text',
      id: 'Text2Copy2',
      text: 'More',
      align: 'right',
      rect: ['14px','8px','auto','auto','auto','auto']
   },
   {
      rect: ['0px','0px','68px','34px','auto','auto'],
      id: 'Rectangle3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(228,238,241,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text2Copy2}": [
            ["style", "top", '8px'],
            ["style", "text-align", 'right'],
            ["color", "color", 'rgba(60,60,60,1)'],
            ["style", "font-style", 'normal'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '14px'],
            ["style", "font-size", '16px']
         ],
         "${_Rectangle3}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '68px']
         ],
         "${symbolSelector}": [
            ["style", "height", '34px'],
            ["style", "width", '68px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: true,
         timeline: [
            { id: "eid95", tween: [ "color", "${_Text2Copy2}", "color", 'rgba(20,118,165,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(60,60,60,1)'}], position: 0, duration: 250 }         ]
      }
   }
},
"button-previous": {
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
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal'],
      type: 'text',
      id: 'Text2Copy2',
      text: 'Previous',
      align: 'right',
      rect: ['14px','8px','auto','auto','auto','auto']
   },
   {
      rect: ['0px','0px','96px','34px','auto','auto'],
      id: 'Rectangle3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(228,238,241,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text2Copy2}": [
            ["style", "top", '8px'],
            ["style", "text-align", 'right'],
            ["style", "font-style", 'normal'],
            ["color", "color", 'rgba(60,60,60,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '14px'],
            ["style", "font-size", '16px']
         ],
         "${_Rectangle3}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '96px']
         ],
         "${symbolSelector}": [
            ["style", "height", '34px'],
            ["style", "width", '68px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: true,
         timeline: [
            { id: "eid95", tween: [ "color", "${_Text2Copy2}", "color", 'rgba(20,118,165,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(60,60,60,1)'}], position: 0, duration: 250 }         ]
      }
   }
},
"active-info": {
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
      rect: ['-32px','-76px','600px','605px','auto','auto'],
      stroke: [0,'rgb(0, 0, 0)','none'],
      id: 'Rectangle4',
      opacity: 0.6,
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['0px','0px','540px','454px','auto','auto'],
      boxShadow: ['',2,3,10,0,'rgba(0,0,0,0.40)'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(228,238,241,1.00)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',14,'rgba(60,60,60,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2Copy4',
      text: 'Active young can be released as free-swimming nauplii or as thin-walled “summer cysts” that hatch soon after they are released. Regardless of whether they are released from summer cysts, from dormant cysts, or directly from the mother, all nauplii look the same.',
      align: 'left',
      rect: ['45px','274px','462px','72px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal'],
      type: 'text',
      id: 'Text2Copy3',
      text: '1 of 1',
      align: 'left',
      rect: ['45px','420px','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','normal','none','italic'],
      type: 'text',
      id: 'Text2',
      text: 'Active young',
      align: 'left',
      rect: ['45px','19px','auto','auto','auto','auto']
   },
   {
      id: 'active-image',
      type: 'image',
      rect: ['50px','60px','439px','199px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/active-image.jpg','0px','0px']
   },
   {
      id: 'button-close',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['454px','10px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'button-close',
      symbolName: 'button-close'
   }   ]
   },
   states: {
      "Base State": {
         "${_Rectangle4}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '-76px'],
            ["style", "height", '605px'],
            ["style", "opacity", '0'],
            ["style", "left", '-32px'],
            ["style", "width", '600px']
         ],
         "${_Text2}": [
            ["style", "top", '19px'],
            ["style", "font-style", 'italic'],
            ["style", "opacity", '0'],
            ["style", "left", '45px'],
            ["style", "font-size", '16px']
         ],
         "${_Text2Copy4}": [
            ["style", "line-height", '18px'],
            ["style", "font-size", '14px'],
            ["style", "top", '274px'],
            ["style", "font-style", 'normal'],
            ["style", "height", '72px'],
            ["style", "opacity", '0'],
            ["style", "left", '45px'],
            ["style", "width", '462px']
         ],
         "${symbolSelector}": [
            ["style", "height", '454px'],
            ["style", "width", '540px']
         ],
         "${_button-close}": [
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '0']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(228,238,241,1.00)'],
            ["subproperty", "boxShadow.blur", '10px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '540px'],
            ["style", "top", '0px'],
            ["style", "height", '454px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '2px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.40)']
         ],
         "${_Text2Copy3}": [
            ["style", "top", '420px'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", 'bold'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '45px'],
            ["style", "font-size", '16px']
         ],
         "${_active-image}": [
            ["style", "top", '60px'],
            ["style", "opacity", '0'],
            ["style", "left", '50px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: false,
         timeline: [
            { id: "eid100", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid112", tween: [ "style", "${_Text2Copy4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid123", tween: [ "style", "${_Text2Copy4}", "opacity", '1', { fromValue: '1'}], position: 500, duration: 0 },
            { id: "eid156", tween: [ "style", "${_active-image}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid102", tween: [ "style", "${_Text2Copy3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid126", tween: [ "style", "${_Text2Copy3}", "opacity", '1', { fromValue: '1'}], position: 500, duration: 0 },
            { id: "eid108", tween: [ "style", "${_button-close}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid104", tween: [ "style", "${_Rectangle4}", "opacity", '0.6000000238418579', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid106", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid94", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_button-close}', [] ], ""], position: 0 }         ]
      }
   }
},
"hatching-info": {
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
      rect: ['-32px','-76px','600px','605px','auto','auto'],
      stroke: [0,'rgb(0, 0, 0)','none'],
      id: 'Rectangle4',
      opacity: 0.6,
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['0px','0px','540px','454px','auto','auto'],
      boxShadow: ['',2,3,10,0,'rgba(0,0,0,0.40)'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(228,238,241,1.00)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',14,'rgba(60,60,60,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2Copy4',
      text: 'In Great Salt Lake, spring hatching begins when days become longer, water temperatures rise, and salinity decreases as melted snow arrives in the lake. <br><br>Cysts absorb water quickly and easily. If environmental conditions are favorable—proper temperature, salinity, sunlight, and oxygen—the embryos inside resume development and begin to grow.<br>',
      align: 'left',
      rect: ['45px','278px','462px','72px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',12,'rgba(60,60,60,1)','normal','none','italic'],
      type: 'text',
      id: 'Text2Copy5',
      text: 'Cysts, swollen after absorbing water<br>',
      align: 'left',
      rect: ['49px','240px','462px','34px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal'],
      type: 'text',
      id: 'Text2Copy3',
      text: '1 of 2',
      align: 'left',
      rect: ['45px','420px','auto','auto','auto','auto']
   },
   {
      id: 'CystsHydrated2',
      type: 'image',
      rect: ['49','49px','448px','185px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/CystsHydrated.jpg','0px','0px']
   },
   {
      font: ['Arial, Helvetica, sans-serif',14,'rgba(60,60,60,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2Copy2',
      text: 'The cyst continues to absorb water as the embryo inside grows. Within a day or two, the cyst bursts open, releasing the young brine shrimp still wrapped in its hatching membrane.',
      align: 'left',
      rect: ['45px','323px','462px','72px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',12,'rgba(60,60,60,1)','normal','none','italic'],
      type: 'text',
      id: 'Text2Copy9',
      text: 'Brine shrimp cysts at various stages of hatching',
      align: 'left',
      rect: ['45px','283px','462px','34px','auto','auto']
   },
   {
      id: 'HatchSeries',
      type: 'image',
      rect: ['45px','55px','450px','225px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/HatchSeries.jpg','0px','0px']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal'],
      type: 'text',
      id: 'Text2Copy',
      text: '2 of 2',
      align: 'left',
      rect: ['45px','420px','auto','auto','auto','auto']
   },
   {
      rect: ['123px','413px','auto','auto','auto','auto'],
      id: 'button-previous',
      display: 'none',
      cursor: ['pointer'],
      type: 'rect'
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','normal','none','italic'],
      type: 'text',
      id: 'Text2',
      text: 'Hatching',
      align: 'left',
      rect: ['45px','19px','auto','auto','auto','auto']
   },
   {
      id: 'button-close',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['452px','11px','auto','auto','auto','auto']
   },
   {
      id: 'button-more',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['449px','412px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'button-previous',
      symbolName: 'button-previous'
   },
   {
      id: 'button-more',
      symbolName: 'button-more'
   },
   {
      id: 'button-close',
      symbolName: 'button-close'
   }   ]
   },
   states: {
      "Base State": {
         "${_Text2}": [
            ["style", "top", '19px'],
            ["style", "font-style", 'italic'],
            ["style", "opacity", '0'],
            ["style", "left", '45px'],
            ["style", "font-size", '16px']
         ],
         "${_Text2Copy}": [
            ["style", "top", '420px'],
            ["style", "text-align", 'left'],
            ["style", "opacity", '0'],
            ["style", "font-style", 'normal'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '45px'],
            ["style", "font-size", '16px']
         ],
         "${_Rectangle4}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '-76px'],
            ["style", "height", '605px'],
            ["style", "opacity", '0'],
            ["style", "left", '-32px'],
            ["style", "width", '600px']
         ],
         "${_Text2Copy9}": [
            ["style", "line-height", '18px'],
            ["style", "font-size", '12px'],
            ["style", "top", '283px'],
            ["style", "font-style", 'italic'],
            ["style", "height", '34px'],
            ["style", "opacity", '0'],
            ["style", "left", '45px'],
            ["style", "width", '462px']
         ],
         "${_button-more}": [
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text2Copy3}": [
            ["style", "top", '420px'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", 'bold'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '45px'],
            ["style", "font-size", '16px']
         ],
         "${_HatchSeries}": [
            ["style", "top", '55px'],
            ["style", "opacity", '0'],
            ["style", "left", '45px']
         ],
         "${_Text2Copy2}": [
            ["style", "top", '323px'],
            ["style", "width", '462px'],
            ["style", "line-height", '18px'],
            ["style", "height", '72px'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '45px'],
            ["style", "font-size", '14px']
         ],
         "${_Text2Copy5}": [
            ["style", "top", '240px'],
            ["style", "width", '462px'],
            ["style", "line-height", '18px'],
            ["style", "font-style", 'italic'],
            ["style", "height", '34px'],
            ["style", "opacity", '0'],
            ["style", "left", '49px'],
            ["style", "font-size", '12px']
         ],
         "${_Text2Copy4}": [
            ["style", "line-height", '18px'],
            ["style", "font-size", '14px'],
            ["style", "top", '278px'],
            ["style", "font-style", 'normal'],
            ["style", "height", '72px'],
            ["style", "opacity", '0'],
            ["style", "left", '45px'],
            ["style", "width", '462px']
         ],
         "${symbolSelector}": [
            ["style", "height", '454px'],
            ["style", "width", '540px']
         ],
         "${_button-close}": [
            ["style", "top", '11px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '452px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(228,238,241,1.00)'],
            ["subproperty", "boxShadow.blur", '10px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '540px'],
            ["style", "top", '0px'],
            ["style", "height", '454px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '2px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.40)']
         ],
         "${_button-previous}": [
            ["style", "top", '413px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '123px']
         ],
         "${_CystsHydrated2}": [
            ["style", "top", '49px'],
            ["style", "opacity", '0']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: false,
         timeline: [
            { id: "eid133", tween: [ "style", "${_Text2Copy2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid134", tween: [ "style", "${_Text2Copy2}", "opacity", '1', { fromValue: '1'}], position: 1000, duration: 0 },
            { id: "eid117", tween: [ "style", "${_Text2Copy}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid136", tween: [ "style", "${_Text2Copy}", "opacity", '1', { fromValue: '1'}], position: 1000, duration: 0 },
            { id: "eid116", tween: [ "style", "${_button-more}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid153", tween: [ "style", "${_button-more}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid110", tween: [ "style", "${_Text2Copy5}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid125", tween: [ "style", "${_Text2Copy5}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid164", tween: [ "style", "${_Text2Copy9}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid108", tween: [ "style", "${_button-close}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid104", tween: [ "style", "${_Rectangle4}", "opacity", '0.6000000238418579', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid167", tween: [ "style", "${_HatchSeries}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid112", tween: [ "style", "${_Text2Copy4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid123", tween: [ "style", "${_Text2Copy4}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid172", tween: [ "style", "${_button-more}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid151", tween: [ "style", "${_button-previous}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid162", tween: [ "style", "${_CystsHydrated2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid163", tween: [ "style", "${_CystsHydrated2}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid102", tween: [ "style", "${_Text2Copy3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid126", tween: [ "style", "${_Text2Copy3}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid173", tween: [ "style", "${_button-previous}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid174", tween: [ "style", "${_button-previous}", "display", 'block', { fromValue: 'none'}], position: 539, duration: 0 },
            { id: "eid100", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid106", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid94", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_button-close}', [] ], ""], position: 0 },
            { id: "eid96", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_button-more}', [] ], ""], position: 0 },
            { id: "eid152", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_button-previous}', [] ], ""], position: 0 }         ]
      }
   }
},
"naupliar-info": {
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
      rect: ['-32px','-76px','600px','605px','auto','auto'],
      stroke: [0,'rgb(0, 0, 0)','none'],
      id: 'Rectangle4',
      opacity: 0.6,
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['0px','0px','540px','454px','auto','auto'],
      boxShadow: ['',2,3,10,0,'rgba(0,0,0,0.40)'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(228,238,241,1.00)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',14,'rgba(60,60,60,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2Copy4',
      text: 'A brine shrimp larva is called a nauplius (plural nauplii). The newly hatched nauplius looks nothing like an adult brine shrimp. Its is essentially a swimming head with a small and relatively undeveloped trunk.',
      align: 'left',
      rect: ['45px','314px','455px','72px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal'],
      type: 'text',
      id: 'Text2Copy3',
      text: '1 of 3',
      align: 'left',
      rect: ['45px','420px','auto','auto','auto','auto']
   },
   {
      id: 'nauplii-image1',
      type: 'image',
      rect: ['45','53px','449px','250px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/nauplii-image1.jpg','0px','0px']
   },
   {
      font: ['Arial, Helvetica, sans-serif',14,'rgba(60,60,60,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2Copy2',
      text: 'The young nauplius lives off of yolk stored in the cells of its body. Within a few days, its digestive system matures and it begins to feed. Its single naupliar eye helps it move toward light, where it is more likely to find food. It uses its antennae for swimming and for pushing food toward its mouth. It eats whatever algae, bacteria, and detritus it finds in the water.',
      align: 'left',
      rect: ['45px','312px','462px','99px','auto','auto']
   },
   {
      id: 'nauplii',
      type: 'image',
      rect: ['46px','53px','450px','246px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/nauplii.jpg','0px','0px']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal'],
      type: 'text',
      id: 'Text2Copy',
      text: '2 of 3',
      align: 'left',
      rect: ['45px','420px','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',14,'rgba(60,60,60,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2Copy7',
      text: 'As the nauplius continues to develop, its trunk grows longer and it begins to grow a series of paddle-like limbs called thoracopods. It also develops two compound eyes, allowing it to see more clearly.',
      align: 'left',
      rect: ['45px','316px','462px','72px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',11,'rgba(60,60,60,1)','normal','none','italic'],
      type: 'text',
      id: 'Text2Copy8',
      text: 'Naupliar stages of development from Heath (1924), J. of Morph. 38(4), 453. Bar = 0.5 mm',
      align: 'left',
      rect: ['18px','272px','455px','37px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal'],
      type: 'text',
      id: 'Text2Copy6',
      text: '3 of 3',
      align: 'left',
      rect: ['45px','420px','auto','auto','auto','auto']
   },
   {
      rect: ['123px','413px','auto','auto','auto','auto'],
      id: 'button-previous',
      display: 'none',
      cursor: ['pointer'],
      type: 'rect'
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','normal','none','italic'],
      type: 'text',
      id: 'Text2',
      text: 'Nauplii',
      align: 'left',
      rect: ['45px','19px','auto','auto','auto','auto']
   },
   {
      id: 'button-close',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['455px','11px','auto','auto','auto','auto']
   },
   {
      id: 'button-more',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['449px','412px','auto','auto','auto','auto']
   },
   {
      id: 'nauplii-development',
      type: 'image',
      rect: ['18px','63px','500px','201px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/nauplii-development.jpg','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'button-previous',
      symbolName: 'button-previous'
   },
   {
      id: 'button-more',
      symbolName: 'button-more'
   },
   {
      id: 'button-close',
      symbolName: 'button-close'
   }   ]
   },
   states: {
      "Base State": {
         "${_Text2Copy}": [
            ["style", "top", '420px'],
            ["style", "text-align", 'left'],
            ["style", "opacity", '0'],
            ["style", "font-style", 'normal'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '45px'],
            ["style", "font-size", '16px']
         ],
         "${_Text2Copy3}": [
            ["style", "top", '420px'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", 'bold'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '45px'],
            ["style", "font-size", '16px']
         ],
         "${_nauplii}": [
            ["style", "top", '53px'],
            ["style", "opacity", '0'],
            ["style", "left", '46px']
         ],
         "${_Text2Copy2}": [
            ["style", "top", '312px'],
            ["style", "width", '462px'],
            ["style", "line-height", '18px'],
            ["style", "height", '99px'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '45px'],
            ["style", "font-size", '14px']
         ],
         "${symbolSelector}": [
            ["style", "height", '454px'],
            ["style", "width", '540px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(228,238,241,1.00)'],
            ["subproperty", "boxShadow.blur", '10px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '540px'],
            ["style", "top", '0px'],
            ["style", "height", '454px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '2px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.40)']
         ],
         "${_Rectangle4}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '-76px'],
            ["style", "height", '605px'],
            ["style", "opacity", '0'],
            ["style", "left", '-32px'],
            ["style", "width", '600px']
         ],
         "${_button-more}": [
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text2Copy6}": [
            ["style", "top", '420px'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", 'bold'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '45px'],
            ["style", "font-size", '16px']
         ],
         "${_Text2Copy7}": [
            ["style", "line-height", '18px'],
            ["style", "font-size", '14px'],
            ["style", "top", '316px'],
            ["style", "font-style", 'normal'],
            ["style", "height", '72px'],
            ["style", "opacity", '0'],
            ["style", "left", '45px'],
            ["style", "width", '462px']
         ],
         "${_Text2Copy8}": [
            ["style", "top", '272px'],
            ["style", "width", '455px'],
            ["style", "line-height", '18px'],
            ["style", "height", '37px'],
            ["style", "font-style", 'italic'],
            ["style", "opacity", '0'],
            ["style", "left", '18px'],
            ["style", "font-size", '11px']
         ],
         "${_Text2Copy4}": [
            ["style", "line-height", '18px'],
            ["style", "font-size", '14px'],
            ["style", "top", '314px'],
            ["style", "font-style", 'normal'],
            ["style", "height", '72px'],
            ["style", "opacity", '0'],
            ["style", "left", '45px'],
            ["style", "width", '455px']
         ],
         "${_nauplii-development}": [
            ["style", "top", '63px'],
            ["style", "opacity", '0'],
            ["style", "left", '18px']
         ],
         "${_button-close}": [
            ["style", "top", '11px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '455px']
         ],
         "${_Text2}": [
            ["style", "top", '19px'],
            ["style", "font-style", 'italic'],
            ["style", "opacity", '0'],
            ["style", "left", '45px'],
            ["style", "font-size", '16px']
         ],
         "${_nauplii-image1}": [
            ["style", "top", '53px'],
            ["style", "opacity", '0']
         ],
         "${_button-previous}": [
            ["style", "top", '413px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '123px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: false,
         timeline: [
            { id: "eid133", tween: [ "style", "${_Text2Copy2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid134", tween: [ "style", "${_Text2Copy2}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid104", tween: [ "style", "${_Rectangle4}", "opacity", '0.6000000238418579', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid148", tween: [ "style", "${_Text2Copy6}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid170", tween: [ "style", "${_button-more}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
            { id: "eid151", tween: [ "style", "${_button-previous}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid102", tween: [ "style", "${_Text2Copy3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid126", tween: [ "style", "${_Text2Copy3}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid142", tween: [ "style", "${_Text2Copy8}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid116", tween: [ "style", "${_button-more}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid153", tween: [ "style", "${_button-more}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid180", tween: [ "style", "${_nauplii}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid181", tween: [ "style", "${_nauplii}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid177", tween: [ "style", "${_nauplii-image1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid178", tween: [ "style", "${_nauplii-image1}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid112", tween: [ "style", "${_Text2Copy4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid123", tween: [ "style", "${_Text2Copy4}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid117", tween: [ "style", "${_Text2Copy}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid136", tween: [ "style", "${_Text2Copy}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid169", tween: [ "style", "${_button-previous}", "display", 'block', { fromValue: 'none'}], position: 541, duration: 0 },
            { id: "eid100", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid183", tween: [ "style", "${_nauplii-development}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid144", tween: [ "style", "${_Text2Copy7}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid108", tween: [ "style", "${_button-close}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid106", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid94", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_button-close}', [] ], ""], position: 0 },
            { id: "eid96", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_button-more}', [] ], ""], position: 0 },
            { id: "eid152", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_button-previous}', [] ], ""], position: 0 }         ]
      }
   }
},
"juveniles-info": {
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
      rect: ['-32px','-76px','600px','605px','auto','auto'],
      stroke: [0,'rgb(0, 0, 0)','none'],
      id: 'Rectangle4',
      opacity: 0.6,
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['0px','0px','540px','454px','auto','auto'],
      boxShadow: ['',2,3,10,0,'rgba(0,0,0,0.40)'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(228,238,241,1.00)']
   },
   {
      type: 'text',
      rect: ['45px','289px','462px','72px','auto','auto'],
      id: 'Text2Copy4',
      text: 'Juvenile brine shrimp look like small adults. The limbs on the trunk (thoracopods) become fully functional, and they take over the jobs of feeding, swimming, and breathing. The antennae become smaller and no longer help the brine shrimp swim or feed as they did during the naupliar stages. ',
      align: 'left',
      font: ['Arial, Helvetica, sans-serif',14,'rgba(60,60,60,1)','normal','none','normal']
   },
   {
      type: 'text',
      rect: ['45px','391px','469px','34px','auto','auto'],
      id: 'Text2Copy5',
      text: '(The juvenile stages of brine shrimp development are also called post-larval stages)',
      align: 'left',
      font: ['Arial, Helvetica, sans-serif',12,'rgba(60,60,60,1)','normal','none','italic']
   },
   {
      type: 'text',
      rect: ['45px','420px','auto','auto','auto','auto'],
      id: 'Text2Copy3',
      text: '1 of 2',
      align: 'left',
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal']
   },
   {
      id: 'juvenile-image1',
      type: 'image',
      rect: ['45px','45px','450px','234px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/juvenile-image1.jpg','0px','0px']
   },
   {
      type: 'text',
      rect: ['45px','320px','462px','72px','auto','auto'],
      id: 'Text2Copy2',
      text: 'As they grow larger, males and females start to look different from one another. Females develop a swelling below their limbs, which will become the brood sac. On males, the second antennae grow into claspers, which will help hold onto the female during mating.',
      align: 'left',
      font: ['Arial, Helvetica, sans-serif',14,'rgba(60,60,60,1)','normal','none','normal']
   },
   {
      type: 'text',
      rect: ['45px','420px','auto','auto','auto','auto'],
      id: 'Text2Copy',
      text: '2 of 2',
      align: 'left',
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal']
   },
   {
      type: 'rect',
      display: 'none',
      id: 'button-previous',
      cursor: ['pointer'],
      rect: ['123px','413px','auto','auto','auto','auto']
   },
   {
      type: 'text',
      rect: ['45px','19px','auto','auto','auto','auto'],
      id: 'Text2',
      text: 'Juveniles',
      align: 'left',
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','normal','none','italic']
   },
   {
      id: 'button-close',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['452px','11px','auto','auto','auto','auto']
   },
   {
      id: 'button-more',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['449px','412px','auto','auto','auto','auto']
   },
   {
      id: 'juvenile-image2',
      type: 'image',
      rect: ['45','54px','448px','256px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/juvenile-image2.jpg','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'button-previous',
      symbolName: 'button-previous'
   },
   {
      id: 'button-more',
      symbolName: 'button-more'
   },
   {
      id: 'button-close',
      symbolName: 'button-close'
   }   ]
   },
   states: {
      "Base State": {
         "${_Text2Copy}": [
            ["style", "top", '420px'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", 'bold'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '45px'],
            ["style", "font-size", '16px']
         ],
         "${_juvenile-image1}": [
            ["style", "top", '45px'],
            ["style", "opacity", '0']
         ],
         "${_juvenile-image2}": [
            ["style", "top", '54px'],
            ["style", "opacity", '0']
         ],
         "${_button-more}": [
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text2}": [
            ["style", "top", '19px'],
            ["style", "font-style", 'italic'],
            ["style", "opacity", '0'],
            ["style", "left", '45px'],
            ["style", "font-size", '16px']
         ],
         "${_button-previous}": [
            ["style", "top", '413px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '123px']
         ],
         "${_Text2Copy2}": [
            ["style", "line-height", '18px'],
            ["style", "font-size", '14px'],
            ["style", "top", '320px'],
            ["style", "font-style", 'normal'],
            ["style", "height", '72px'],
            ["style", "opacity", '0'],
            ["style", "left", '45px'],
            ["style", "width", '462px']
         ],
         "${_Text2Copy5}": [
            ["style", "line-height", '18px'],
            ["style", "font-size", '12px'],
            ["style", "top", '391px'],
            ["style", "height", '34px'],
            ["style", "font-style", 'italic'],
            ["style", "opacity", '0'],
            ["style", "left", '45px'],
            ["style", "width", '469px']
         ],
         "${_Text2Copy4}": [
            ["style", "top", '289px'],
            ["style", "width", '462px'],
            ["style", "line-height", '18px'],
            ["style", "height", '72px'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '45px'],
            ["style", "font-size", '14px']
         ],
         "${symbolSelector}": [
            ["style", "height", '454px'],
            ["style", "width", '540px']
         ],
         "${_button-close}": [
            ["style", "top", '11px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '452px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(228,238,241,1.00)'],
            ["subproperty", "boxShadow.blur", '10px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '540px'],
            ["style", "top", '0px'],
            ["style", "height", '454px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '2px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.40)']
         ],
         "${_Rectangle4}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '-76px'],
            ["style", "height", '605px'],
            ["style", "opacity", '0'],
            ["style", "left", '-32px'],
            ["style", "width", '600px']
         ],
         "${_Text2Copy3}": [
            ["style", "top", '420px'],
            ["style", "text-align", 'left'],
            ["style", "opacity", '0'],
            ["style", "font-style", 'normal'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '45px'],
            ["style", "font-size", '16px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: false,
         timeline: [
            { id: "eid133", tween: [ "style", "${_Text2Copy2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid134", tween: [ "style", "${_Text2Copy2}", "opacity", '1', { fromValue: '1'}], position: 1000, duration: 0 },
            { id: "eid116", tween: [ "style", "${_button-more}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid153", tween: [ "style", "${_button-more}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid110", tween: [ "style", "${_Text2Copy5}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid125", tween: [ "style", "${_Text2Copy5}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid100", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid117", tween: [ "style", "${_Text2Copy}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid136", tween: [ "style", "${_Text2Copy}", "opacity", '1', { fromValue: '1'}], position: 1000, duration: 0 },
            { id: "eid104", tween: [ "style", "${_Rectangle4}", "opacity", '0.6000000238418579', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid186", tween: [ "style", "${_juvenile-image1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid187", tween: [ "style", "${_juvenile-image1}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid112", tween: [ "style", "${_Text2Copy4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid123", tween: [ "style", "${_Text2Copy4}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid172", tween: [ "style", "${_button-more}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid151", tween: [ "style", "${_button-previous}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid189", tween: [ "style", "${_juvenile-image2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid102", tween: [ "style", "${_Text2Copy3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid126", tween: [ "style", "${_Text2Copy3}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid108", tween: [ "style", "${_button-close}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid173", tween: [ "style", "${_button-previous}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid174", tween: [ "style", "${_button-previous}", "display", 'block', { fromValue: 'none'}], position: 539, duration: 0 },
            { id: "eid106", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid94", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_button-close}', [] ], ""], position: 0 },
            { id: "eid96", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_button-more}', [] ], ""], position: 0 },
            { id: "eid152", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_button-previous}', [] ], ""], position: 0 }         ]
      }
   }
},
"adults-info": {
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
      rect: ['-32px','-76px','600px','605px','auto','auto'],
      stroke: [0,'rgb(0, 0, 0)','none'],
      id: 'Rectangle4',
      opacity: 0.6,
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['0px','0px','540px','454px','auto','auto'],
      boxShadow: ['',2,3,10,0,'rgba(0,0,0,0.40)'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(228,238,241,1.00)']
   },
   {
      type: 'text',
      rect: ['45px','328px','462px','72px','auto','auto'],
      id: 'Text2Copy4',
      text: 'Male and female brine shrimp are easy to tell apart. Females are slightly larger than males, and their brood sacs are easily visible to the naked eye. Males do not have brood sacs, and they have large claspers sticking out of the tops of their heads.',
      align: 'left',
      font: ['Arial, Helvetica, sans-serif',14,'rgba(60,60,60,1)','normal','none','normal']
   },
   {
      type: 'text',
      rect: ['45px','420px','auto','auto','auto','auto'],
      id: 'Text2Copy3',
      text: '1 of 4',
      align: 'left',
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal']
   },
   {
      id: 'adults-image1',
      type: 'image',
      rect: ['45','51px','445px','264px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/adults-image1.jpg','0px','0px']
   },
   {
      type: 'text',
      rect: ['45px','330px','462px','60px','auto','auto'],
      id: 'Text2Copy2',
      text: 'During mating, the male holds onto the female with his claspers. He fertilizes the female’s eggs by depositing sperm into her.',
      align: 'left',
      font: ['Arial, Helvetica, sans-serif',14,'rgba(60,60,60,1)','normal','none','normal']
   },
   {
      type: 'text',
      rect: ['45px','295px','462px','35px','auto','auto'],
      id: 'Text2Copy10',
      text: 'The male uses his claspers to hold onto the female, just above her brood sac.',
      align: 'left',
      font: ['Arial, Helvetica, sans-serif',12,'rgba(60,60,60,1)','normal','none','italic']
   },
   {
      type: 'text',
      rect: ['45px','420px','auto','auto','auto','auto'],
      id: 'Text2Copy',
      text: '2 of 4',
      align: 'left',
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal']
   },
   {
      id: 'adults-image2',
      type: 'image',
      rect: ['45px','69px','450px','222px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/adults-image2.jpg','0px','0px']
   },
   {
      type: 'text',
      rect: ['45px','295px','462px','72px','auto','auto'],
      id: 'Text2Copy7',
      text: 'Females can live for as long as 4 months, and they can produce up to 300 offspring every 4 days.<br><br>When environmental conditions are good, females produce active embryos that hatch while they are still inside the brood sac or soon after they are released.<br>',
      align: 'left',
      font: ['Arial, Helvetica, sans-serif',14,'rgba(60,60,60,1)','normal','none','normal']
   },
   {
      type: 'text',
      rect: ['51px','258px','455px','37px','auto','auto'],
      id: 'Text2Copy8',
      text: 'Close-up of a brood sac producing actively developing young',
      align: 'left',
      font: ['Arial, Helvetica, sans-serif',11,'rgba(60,60,60,1)','normal','none','italic']
   },
   {
      type: 'text',
      rect: ['45px','420px','auto','auto','auto','auto'],
      id: 'Text2Copy6',
      text: '3 of 4',
      align: 'left',
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal']
   },
   {
      id: 'adults-image3',
      type: 'image',
      rect: ['51px','51px','439px','199px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/adults-image3.jpg','0px','0px']
   },
   {
      type: 'text',
      rect: ['45px','274px','462px','72px','auto','auto'],
      id: 'Text2Copy13',
      text: 'In stressful conditions such as high salinity, high or low temperature, or low oxygen, females release dormant cysts. Stress signals from the environment stop embryonic development and activate shell glands in the brood sac, which form a protective coating around the embryos. The dormant cysts are then released into the water.',
      align: 'left',
      font: ['Arial, Helvetica, sans-serif',14,'rgba(60,60,60,1)','normal','none','normal']
   },
   {
      id: 'adults-image4',
      type: 'image',
      rect: ['51px','51px','439px','199px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/adults-image4.jpg','0px','0px']
   },
   {
      type: 'text',
      rect: ['45px','420px','auto','auto','auto','auto'],
      id: 'Text2Copy11',
      text: '4 of 4',
      align: 'left',
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal']
   },
   {
      type: 'rect',
      display: 'none',
      id: 'button-previous',
      cursor: ['pointer'],
      rect: ['123px','413px','auto','auto','auto','auto']
   },
   {
      type: 'text',
      rect: ['45px','19px','auto','auto','auto','auto'],
      id: 'Text2',
      text: 'Adults',
      align: 'left',
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','normal','none','italic']
   },
   {
      id: 'button-close',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['454px','10px','auto','auto','auto','auto']
   },
   {
      id: 'button-more',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['449px','412px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'button-previous',
      symbolName: 'button-previous'
   },
   {
      id: 'button-more',
      symbolName: 'button-more'
   },
   {
      id: 'button-close',
      symbolName: 'button-close'
   }   ]
   },
   states: {
      "Base State": {
         "${_Text2Copy}": [
            ["style", "top", '420px'],
            ["style", "text-align", 'left'],
            ["style", "opacity", '0'],
            ["style", "font-style", 'normal'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '45px'],
            ["style", "font-size", '16px']
         ],
         "${_Text2Copy3}": [
            ["style", "top", '420px'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", 'bold'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '45px'],
            ["style", "font-size", '16px']
         ],
         "${_Text2Copy2}": [
            ["style", "top", '330px'],
            ["style", "width", '462px'],
            ["style", "line-height", '18px'],
            ["style", "height", '60px'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '45px'],
            ["style", "font-size", '14px']
         ],
         "${_Text2Copy11}": [
            ["style", "top", '420px'],
            ["style", "text-align", 'left'],
            ["style", "opacity", '0'],
            ["style", "font-style", 'normal'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '45px'],
            ["style", "font-size", '16px']
         ],
         "${symbolSelector}": [
            ["style", "height", '454px'],
            ["style", "width", '540px']
         ],
         "${_adults-image2}": [
            ["style", "top", '69px'],
            ["style", "opacity", '0']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(228,238,241,1.00)'],
            ["subproperty", "boxShadow.blur", '10px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '540px'],
            ["style", "top", '0px'],
            ["style", "height", '454px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '2px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.40)']
         ],
         "${_Rectangle4}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '-76px'],
            ["style", "height", '605px'],
            ["style", "opacity", '0'],
            ["style", "left", '-32px'],
            ["style", "width", '600px']
         ],
         "${_adults-image3}": [
            ["style", "top", '51px'],
            ["style", "opacity", '0'],
            ["style", "left", '51px']
         ],
         "${_adults-image4}": [
            ["style", "top", '51px'],
            ["style", "opacity", '0'],
            ["style", "left", '51px']
         ],
         "${_Text2}": [
            ["style", "top", '19px'],
            ["style", "font-style", 'italic'],
            ["style", "opacity", '0'],
            ["style", "left", '45px'],
            ["style", "font-size", '16px']
         ],
         "${_button-more}": [
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text2Copy6}": [
            ["style", "top", '420px'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", 'bold'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '45px'],
            ["style", "font-size", '16px']
         ],
         "${_adults-image1}": [
            ["style", "top", '51px'],
            ["style", "opacity", '0']
         ],
         "${_Text2Copy10}": [
            ["style", "line-height", '18px'],
            ["style", "font-size", '12px'],
            ["style", "top", '295px'],
            ["style", "font-style", 'italic'],
            ["style", "height", '35px'],
            ["style", "opacity", '0'],
            ["style", "left", '45px'],
            ["style", "width", '462px']
         ],
         "${_Text2Copy12}": [
            ["style", "top", '420px'],
            ["style", "opacity", '0'],
            ["style", "font-style", 'normal'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '45px'],
            ["style", "font-size", '16px']
         ],
         "${_Text2Copy4}": [
            ["style", "line-height", '18px'],
            ["style", "font-size", '14px'],
            ["style", "top", '328px'],
            ["style", "font-style", 'normal'],
            ["style", "height", '72px'],
            ["style", "opacity", '0'],
            ["style", "left", '45px'],
            ["style", "width", '462px']
         ],
         "${_Text2Copy13}": [
            ["style", "top", '274px'],
            ["style", "width", '462px'],
            ["style", "line-height", '18px'],
            ["style", "height", '72px'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '45px'],
            ["style", "font-size", '14px']
         ],
         "${_button-close}": [
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '0']
         ],
         "${_Text2Copy7}": [
            ["style", "line-height", '18px'],
            ["style", "font-size", '14px'],
            ["style", "top", '295px'],
            ["style", "font-style", 'normal'],
            ["style", "height", '72px'],
            ["style", "opacity", '0'],
            ["style", "left", '45px'],
            ["style", "width", '462px']
         ],
         "${_button-previous}": [
            ["style", "top", '413px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '123px']
         ],
         "${_Text2Copy8}": [
            ["style", "top", '258px'],
            ["style", "width", '455px'],
            ["style", "line-height", '18px'],
            ["style", "height", '37px'],
            ["style", "font-style", 'italic'],
            ["style", "opacity", '0'],
            ["style", "left", '51px'],
            ["style", "font-size", '11px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: false,
         timeline: [
            { id: "eid133", tween: [ "style", "${_Text2Copy2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid134", tween: [ "style", "${_Text2Copy2}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid194", tween: [ "style", "${_Text2Copy10}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid195", tween: [ "style", "${_Text2Copy10}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid104", tween: [ "style", "${_Rectangle4}", "opacity", '0.6000000238418579', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid148", tween: [ "style", "${_Text2Copy6}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid204", tween: [ "style", "${_Text2Copy6}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 500 },
            { id: "eid170", tween: [ "style", "${_button-more}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid151", tween: [ "style", "${_button-previous}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid200", tween: [ "style", "${_adults-image3}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid201", tween: [ "style", "${_adults-image3}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 500 },
            { id: "eid102", tween: [ "style", "${_Text2Copy3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid126", tween: [ "style", "${_Text2Copy3}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid142", tween: [ "style", "${_Text2Copy8}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid202", tween: [ "style", "${_Text2Copy8}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 500 },
            { id: "eid197", tween: [ "style", "${_adults-image2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid198", tween: [ "style", "${_adults-image2}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid205", tween: [ "style", "${_Text2Copy11}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500 },
            { id: "eid206", tween: [ "style", "${_Text2Copy11}", "opacity", '1', { fromValue: '1'}], position: 2000, duration: 0 },
            { id: "eid116", tween: [ "style", "${_button-more}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid153", tween: [ "style", "${_button-more}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 500 },
            { id: "eid117", tween: [ "style", "${_Text2Copy}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid136", tween: [ "style", "${_Text2Copy}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid212", tween: [ "style", "${_adults-image4}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500 },
            { id: "eid112", tween: [ "style", "${_Text2Copy4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid123", tween: [ "style", "${_Text2Copy4}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid100", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid169", tween: [ "style", "${_button-previous}", "display", 'block', { fromValue: 'none'}], position: 541, duration: 0 },
            { id: "eid214", tween: [ "style", "${_Text2Copy13}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500 },
            { id: "eid192", tween: [ "style", "${_adults-image1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid193", tween: [ "style", "${_adults-image1}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid144", tween: [ "style", "${_Text2Copy7}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid203", tween: [ "style", "${_Text2Copy7}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 500 },
            { id: "eid108", tween: [ "style", "${_button-close}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid106", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid94", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_button-close}', [] ], ""], position: 0 },
            { id: "eid96", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_button-more}', [] ], ""], position: 0 },
            { id: "eid152", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_button-previous}', [] ], ""], position: 0 }         ]
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
})(jQuery, AdobeEdge, "EDGE-65006748");

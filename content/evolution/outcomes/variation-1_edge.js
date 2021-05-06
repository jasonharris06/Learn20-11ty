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
            id:'Rectangle2',
            type:'rect',
            rect:['0px','0px','899px','599px','auto','auto'],
            fill:["rgba(245,245,245,1.00)"],
            stroke:[0,"rgba(79,79,79,1.00)","none"]
         },
         {
            id:'TextCopy',
            type:'text',
            rect:['11px','16px','358px','60px','auto','auto'],
            text:"Genetic Variation:",
            font:['Arial, Helvetica, sans-serif',40,"rgba(80,80,80,1.00)","600","none",""]
         },
         {
            id:'Text',
            type:'text',
            rect:['369px','24px','582px','60px','auto','auto'],
            text:"The Outcome of Mutation",
            font:['Arial, Helvetica, sans-serif',30,"rgba(80,80,80,1.00)","400","none","normal"]
         },
         {
            id:'Text2Copy',
            type:'text',
            rect:['20px','87px','845px','68px','auto','auto'],
            text:"Mutation is a process that changes a DNA sequence. But how does a difference in a gene’s DNA sequence (or genotype) lead to a difference in an observable trait (or phenotype)? <br>",
            align:"left",
            font:['Arial, Helvetica, sans-serif',18,"rgba(80,80,80,1.00)","normal","none","normal"]
         },
         {
            id:'Text2',
            type:'text',
            rect:['20px','158px','845px','47px','auto','auto'],
            text:"Learn more by exploring the examples below: ",
            align:"left",
            font:['Arial, Helvetica, sans-serif',18,"rgba(80,80,80,1.00)","normal","none","normal"]
         },
         {
            id:'Rectangle',
            type:'rect',
            rect:['0px','73px','900px','1px','auto','auto'],
            fill:["rgba(79,79,79,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'songbird-button',
            type:'rect',
            rect:['681','388','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'redhair-button',
            type:'rect',
            rect:['461','389','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'cf-button',
            type:'rect',
            rect:['242px','388px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'peas-button',
            type:'rect',
            rect:['23px','389','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'curly-button',
            type:'rect',
            rect:['681','209','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'cats-button',
            type:'rect',
            rect:['461','210','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'cows-button',
            type:'rect',
            rect:['242','209px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'sharpei-button',
            type:'rect',
            rect:['20','206','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'songbird-info',
            display:'none',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'redhair-info',
            display:'none',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'cf-info',
            display:'none',
            type:'rect',
            rect:['0px','0px','auto','auto','auto','auto']
         },
         {
            id:'peas-info',
            display:'none',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'curly-info',
            display:'none',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'cats-info',
            display:'none',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'cows-info',
            display:'none',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto'],
            opacity:1
         },
         {
            id:'sharpei-info',
            display:'none',
            type:'rect',
            rect:['0px','0','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'peas-info',
            symbolName:'peas-info'
         },
         {
            id:'sharpei-button',
            symbolName:'sharpei'
         },
         {
            id:'cows-info',
            symbolName:'cows-info'
         },
         {
            id:'cats-info',
            symbolName:'cats-info'
         },
         {
            id:'curly-info',
            symbolName:'curly-info'
         },
         {
            id:'cows-button',
            symbolName:'cows-button'
         },
         {
            id:'cf-button',
            symbolName:'cf-button'
         },
         {
            id:'redhair-button',
            symbolName:'redhair-button'
         },
         {
            id:'peas-button',
            symbolName:'peas-button'
         },
         {
            id:'curly-button',
            symbolName:'curly-button'
         },
         {
            id:'songbird-info',
            symbolName:'songbird-info'
         },
         {
            id:'songbird-button',
            symbolName:'songbird-button'
         },
         {
            id:'sharpei-info',
            symbolName:'sharpei-info'
         },
         {
            id:'cf-info',
            symbolName:'cf-info'
         },
         {
            id:'redhair-info',
            symbolName:'redhair-info'
         },
         {
            id:'cats-button',
            symbolName:'cats-button'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(245,245,245,1)'],
            ["style", "top", '0px'],
            ["style", "height", '599px'],
            ["color", "border-color", 'rgb(79, 79, 79)'],
            ["style", "left", '0px'],
            ["style", "width", '899px']
         ],
         "${_Text2Copy}": [
            ["style", "top", '87px'],
            ["color", "color", 'rgba(80,80,80,1)'],
            ["style", "line-height", '26px'],
            ["style", "height", '68px'],
            ["style", "font-size", '18px']
         ],
         "${_Text2}": [
            ["style", "top", '158px'],
            ["color", "color", 'rgba(80,80,80,1)'],
            ["style", "line-height", '26px'],
            ["style", "height", '47px'],
            ["style", "font-size", '18px']
         ],
         "${_cf-button}": [
            ["style", "cursor", 'pointer']
         ],
         "${_peas-info}": [
            ["style", "display", 'none']
         ],
         "${_cats-info}": [
            ["style", "display", 'none']
         ],
         "${_Rectangle}": [
            ["style", "top", '73px'],
            ["style", "height", '1px'],
            ["color", "background-color", 'rgba(79,79,79,1)'],
            ["style", "left", '0px'],
            ["style", "width", '900px']
         ],
         "${_cats-button}": [
            ["style", "cursor", 'pointer']
         ],
         "${_redhair-button}": [
            ["style", "cursor", 'pointer']
         ],
         "${_curly-info}": [
            ["style", "display", 'none']
         ],
         "${_songbird-info}": [
            ["style", "display", 'none']
         ],
         "${_songbird-button}": [
            ["style", "cursor", 'pointer']
         ],
         "${_sharpei-info}": [
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "overflow", 'hidden']
         ],
         "${_peas-button}": [
            ["style", "left", '23px'],
            ["style", "cursor", 'pointer']
         ],
         "${_curly-button}": [
            ["style", "cursor", 'pointer']
         ],
         "${_redhair-info}": [
            ["style", "display", 'none']
         ],
         "${_cows-button}": [
            ["style", "cursor", 'pointer']
         ],
         "${_Text}": [
            ["color", "color", 'rgba(80,80,80,1)'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '369px'],
            ["style", "font-size", '30px'],
            ["style", "top", '24px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "width", '582px']
         ],
         "${_sharpei-button}": [
            ["style", "top", '210px'],
            ["style", "cursor", 'pointer']
         ],
         "${_cf-info}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '900px'],
            ["style", "height", '600px'],
            ["style", "overflow", 'hidden']
         ],
         "${_TextCopy}": [
            ["style", "top", '16px'],
            ["style", "font-size", '40px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["color", "color", 'rgba(80,80,80,1)'],
            ["style", "font-weight", '600'],
            ["style", "left", '11px'],
            ["style", "width", '358px']
         ],
         "${_cows-info}": [
            ["style", "display", 'none']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
            { id: "eid2", tween: [ "style", "${_sharpei-info}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid152", tween: [ "style", "${_cows-info}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid156", tween: [ "style", "${_curly-info}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid153", tween: [ "style", "${_cf-info}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid162", tween: [ "style", "${_redhair-info}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid163", tween: [ "style", "${_songbird-info}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid158", tween: [ "style", "${_peas-info}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid154", tween: [ "style", "${_cats-info}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid151", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_cows-info}', [] ], ""], position: 0 },
            { id: "eid164", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_redhair-info}', [] ], ""], position: 0 },
            { id: "eid160", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_cf-info}', [] ], ""], position: 0 },
            { id: "eid161", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_sharpei-info}', [] ], ""], position: 0 },
            { id: "eid157", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_curly-info}', [] ], ""], position: 0 },
            { id: "eid159", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_peas-info}', [] ], ""], position: 0 },
            { id: "eid155", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_cats-info}', [] ], ""], position: 0 },
            { id: "eid165", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_songbird-info}', [] ], ""], position: 0 }         ]
      }
   }
},
"sharpei": {
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
      rect: ['2px','0px','195px','153px','auto','auto'],
      boxShadow: ['',2,2,7,0,'rgba(0,0,0,0.30)'],
      id: 'Rectangle3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'text',
      rect: ['0px','9px','196px','auto','auto','auto'],
      id: 'Text3',
      text: 'Shar Pei dogs',
      align: 'center',
      font: ['Arial, Helvetica, sans-serif',20,'rgba(89,89,89,1.00)','700','none','']
   },
   {
      id: 'sharpei-puppy',
      type: 'image',
      rect: ['34px','43px','132px','110px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/sharpei-puppy.jpg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "top", '9px'],
            ["style", "text-align", 'center'],
            ["style", "width", '196px'],
            ["color", "color", 'rgba(89,89,89,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '0px'],
            ["style", "font-size", '20px']
         ],
         "${_Rectangle3}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.30)'],
            ["style", "left", '2px'],
            ["style", "width", '195px'],
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.offsetV", '2px'],
            ["style", "height", '153px'],
            ["subproperty", "boxShadow.spread", '0px'],
            ["subproperty", "boxShadow.offsetH", '2px'],
            ["subproperty", "boxShadow.blur", '7px']
         ],
         "${_sharpei-puppy}": [
            ["style", "top", '43px'],
            ["style", "height", '110px'],
            ["style", "left", '34px'],
            ["style", "width", '132px']
         ],
         "${symbolSelector}": [
            ["style", "height", '153px'],
            ["style", "width", '197px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"cows-button": {
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
      rect: ['0px','0px','194px','153px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)'],
      id: 'Rectangle3Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      boxShadow: ['',2,2,7,0,'rgba(0,0,0,0.30)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',20,'rgba(89,89,89,1)','bold','none','normal'],
      type: 'text',
      id: 'Text5',
      text: 'Double-muscled cattle',
      align: 'center',
      rect: ['0px','8px','194px','auto','auto','auto']
   },
   {
      id: 'bull-white',
      type: 'image',
      rect: ['17px','48px','158px','105px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bull-white.jpg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_bull-white}": [
            ["style", "top", '48px'],
            ["style", "height", '105px'],
            ["style", "left", '17px'],
            ["style", "width", '158px']
         ],
         "${_Rectangle3Copy}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.296875)'],
            ["style", "left", '0px'],
            ["style", "width", '194px'],
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.spread", '0px'],
            ["style", "height", '153px'],
            ["subproperty", "boxShadow.offsetV", '2px'],
            ["subproperty", "boxShadow.offsetH", '2px'],
            ["subproperty", "boxShadow.blur", '7px']
         ],
         "${_Text5}": [
            ["style", "top", '8px'],
            ["style", "width", '194px'],
            ["style", "line-height", '20px'],
            ["style", "left", '0px'],
            ["style", "font-size", '20px']
         ],
         "${symbolSelector}": [
            ["style", "height", '153px'],
            ["style", "width", '194px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"cats-button": {
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
      rect: ['0px','0px','194px','153px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)'],
      id: 'Rectangle3Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      boxShadow: ['',2,2,7,0,'rgba(0,0,0,0.30)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',20,'rgba(89,89,89,1)','bold','none','normal'],
      type: 'text',
      id: 'Text5Copy',
      text: 'Extra-toed cats',
      align: 'center',
      rect: ['0px','8px','194px','auto','auto','auto']
   },
   {
      id: 'mitten-cat2Copy2',
      type: 'image',
      rect: ['402px','141px','400px','372px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/mitten-cat.jpg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle3Copy3}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["subproperty", "boxShadow.blur", '7px'],
            ["style", "left", '0px'],
            ["style", "width", '194px'],
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.spread", '0px'],
            ["style", "height", '153px'],
            ["subproperty", "boxShadow.offsetV", '2px'],
            ["subproperty", "boxShadow.offsetH", '2px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.296875)']
         ],
         "${_Text5Copy}": [
            ["style", "line-height", '20px'],
            ["style", "font-size", '20px'],
            ["style", "top", '8px'],
            ["style", "left", '0px'],
            ["style", "width", '194px']
         ],
         "${_mitten-cat2Copy2}": [
            ["style", "top", '32px'],
            ["style", "height", '120px'],
            ["style", "left", '44px'],
            ["style", "width", '128px']
         ],
         "${symbolSelector}": [
            ["style", "height", '153px'],
            ["style", "width", '194px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: true,
         timeline: [
            { id: "eid229", tween: [ "style", "${_mitten-cat2Copy2}", "left", '44px', { fromValue: '44px'}], position: 500, duration: 0 },
            { id: "eid227", tween: [ "style", "${_mitten-cat2Copy2}", "height", '120px', { fromValue: '120px'}], position: 500, duration: 0 },
            { id: "eid228", tween: [ "style", "${_mitten-cat2Copy2}", "top", '32px', { fromValue: '32px'}], position: 500, duration: 0 },
            { id: "eid230", tween: [ "style", "${_mitten-cat2Copy2}", "width", '128px', { fromValue: '128px'}], position: 500, duration: 0 }         ]
      }
   }
},
"curly-button": {
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
      rect: ['0px','0px','194px','153px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)'],
      id: 'Rectangle3Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      boxShadow: ['',2,2,7,0,'rgba(0,0,0,0.30)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',20,'rgba(89,89,89,1)','bold','none','normal'],
      type: 'text',
      id: 'Text5Copy2',
      text: 'Curly hair',
      align: 'center',
      rect: ['0px','10px','194px','auto','auto','auto']
   },
   {
      id: 'poodle2',
      type: 'image',
      rect: ['38px','33px','118px','120px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/poodle.jpg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle3Copy2}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["subproperty", "boxShadow.blur", '7px'],
            ["style", "left", '0px'],
            ["style", "width", '194px'],
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.292969)'],
            ["style", "height", '153px'],
            ["subproperty", "boxShadow.offsetV", '2px'],
            ["subproperty", "boxShadow.offsetH", '2px'],
            ["subproperty", "boxShadow.spread", '0px']
         ],
         "${_poodle2}": [
            ["style", "top", '33px'],
            ["style", "height", '120px'],
            ["style", "left", '38px'],
            ["style", "width", '118px']
         ],
         "${symbolSelector}": [
            ["style", "height", '153px'],
            ["style", "width", '194px']
         ],
         "${_Text5Copy2}": [
            ["style", "top", '10px'],
            ["style", "width", '194px'],
            ["style", "line-height", '20px'],
            ["style", "left", '0px'],
            ["style", "font-size", '20px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"peas-button": {
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
      rect: ['0px','0px','194px','153px','auto','auto'],
      boxShadow: ['',2,2,7,0,'rgba(0,0,0,0.30)'],
      stroke: [0,'rgb(0, 0, 0)','none'],
      id: 'Rectangle3Copy7',
      opacity: 1,
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',20,'rgba(89,89,89,1)','bold','none','normal'],
      type: 'text',
      align: 'center',
      id: 'Text5Copy3',
      opacity: 1,
      text: 'Mendel\'s wrinkled peas',
      rect: ['0px','10px','194px','auto','auto','auto']
   },
   {
      id: 'peas-wrinkled2',
      type: 'image',
      rect: ['42px','54px','112px','97px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/peas-wrinkled.jpg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_peas-wrinkled2}": [
            ["style", "top", '54px'],
            ["style", "height", '97px'],
            ["style", "left", '42px'],
            ["style", "width", '112px']
         ],
         "${_Rectangle3Copy7}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["subproperty", "boxShadow.blur", '7px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '194px'],
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.spread", '0px'],
            ["style", "height", '153px'],
            ["subproperty", "boxShadow.offsetV", '2px'],
            ["subproperty", "boxShadow.offsetH", '2px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.296875)']
         ],
         "${_Text5Copy3}": [
            ["style", "line-height", '20px'],
            ["style", "width", '194px'],
            ["style", "top", '10px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "font-size", '20px']
         ],
         "${symbolSelector}": [
            ["style", "height", '153px'],
            ["style", "width", '194px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"cf-button": {
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
      rect: ['0px','0px','194px','153px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)'],
      id: 'Rectangle3Copy6',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      boxShadow: ['',2,2,7,0,'rgba(0,0,0,0.30)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',18,'rgba(89,89,89,1)','bold','none','normal'],
      type: 'text',
      id: 'Text5Copy4',
      text: 'Disease resistance / Cystic Fibrosis',
      align: 'center',
      rect: ['0px','11px','194px','auto','auto','auto']
   },
   {
      id: 'mask',
      type: 'image',
      rect: ['37px','50px','120px','103px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/mask.jpg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle3Copy6}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["subproperty", "boxShadow.blur", '7px'],
            ["style", "left", '0px'],
            ["style", "width", '194px'],
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.292969)'],
            ["style", "height", '153px'],
            ["subproperty", "boxShadow.offsetV", '2px'],
            ["subproperty", "boxShadow.offsetH", '2px'],
            ["subproperty", "boxShadow.spread", '0px']
         ],
         "${_Text5Copy4}": [
            ["style", "line-height", '19px'],
            ["style", "font-size", '18px'],
            ["style", "top", '11px'],
            ["style", "left", '0px'],
            ["style", "width", '194px']
         ],
         "${_mask}": [
            ["style", "height", '103px'],
            ["style", "top", '50px'],
            ["style", "left", '37px'],
            ["style", "width", '120px']
         ],
         "${symbolSelector}": [
            ["style", "height", '153px'],
            ["style", "width", '194px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"redhair-button": {
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
      rect: ['0px','0px','194px','153px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)'],
      id: 'Rectangle3Copy5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      boxShadow: ['',2,2,7,0,'rgba(0,0,0,0.30)']
   },
   {
      type: 'text',
      rect: ['0px','10px','194px','auto','auto','auto'],
      id: 'Text5Copy5',
      text: 'Red hair',
      align: 'center',
      font: ['Arial, Helvetica, sans-serif',20,'rgba(89,89,89,1)','bold','none','normal']
   },
   {
      id: 'redhead',
      type: 'image',
      rect: ['42px','44px','109px','109px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/redhead.jpg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle3Copy5}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.292969)'],
            ["style", "left", '0px'],
            ["style", "width", '194px'],
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.offsetV", '2px'],
            ["style", "height", '153px'],
            ["subproperty", "boxShadow.spread", '0px'],
            ["subproperty", "boxShadow.offsetH", '2px'],
            ["subproperty", "boxShadow.blur", '7px']
         ],
         "${_Text5Copy5}": [
            ["style", "line-height", '20px'],
            ["style", "font-size", '20px'],
            ["style", "top", '10px'],
            ["style", "left", '0px'],
            ["style", "width", '194px']
         ],
         "${_redhead}": [
            ["style", "height", '109px'],
            ["style", "top", '44px'],
            ["style", "left", '42px'],
            ["style", "width", '109px']
         ],
         "${symbolSelector}": [
            ["style", "height", '153px'],
            ["style", "width", '194px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"songbird-button": {
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
      rect: ['0px','0px','194px','153px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)'],
      id: 'Rectangle3Copy4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      boxShadow: ['',2,2,7,0,'rgba(0,0,0,0.30)']
   },
   {
      type: 'text',
      rect: ['0px','11px','194px','auto','auto','auto'],
      id: 'Text5Copy6',
      text: 'Song learning in birds',
      align: 'center',
      font: ['Arial, Helvetica, sans-serif',20,'rgba(89,89,89,1)','bold','none','normal']
   },
   {
      id: 'bird',
      type: 'image',
      rect: ['46px','57px','112px','96px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bird.jpg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle3Copy4}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.292969)'],
            ["style", "left", '0px'],
            ["style", "width", '194px'],
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.spread", '0px'],
            ["style", "height", '153px'],
            ["subproperty", "boxShadow.offsetV", '2px'],
            ["subproperty", "boxShadow.offsetH", '2px'],
            ["subproperty", "boxShadow.blur", '7px']
         ],
         "${_Text5Copy6}": [
            ["style", "line-height", '20px'],
            ["style", "font-size", '20px'],
            ["style", "top", '11px'],
            ["style", "left", '0px'],
            ["style", "width", '194px']
         ],
         "${_bird}": [
            ["style", "height", '96px'],
            ["style", "top", '57px'],
            ["style", "left", '46px'],
            ["style", "width", '112px']
         ],
         "${symbolSelector}": [
            ["style", "height", '153px'],
            ["style", "width", '194px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"sharpei-info": {
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
      type: 'rect',
      id: 'black_bkgd',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','0px','900px','600px','auto','auto'],
      fill: ['rgba(61,61,61,1.00)']
   },
   {
      type: 'rect',
      borderRadius: ['4px 4px','4px 4px','0px 0px','0px 0px'],
      rect: ['71px','86px','97px','32px','auto','auto'],
      id: 'bkgd-trait',
      stroke: [0,'rgb(79, 79, 79)','none'],
      display: 'none',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'text',
      rect: ['71px','93px','97px','17px','auto','auto'],
      align: 'center',
      id: 'label-trait',
      display: 'none',
      text: 'Trait',
      cursor: ['pointer'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal']
   },
   {
      type: 'rect',
      borderRadius: ['4px 4px','4px 4px','0px 0px','0px 0px'],
      rect: ['168px','86px','97px','32px','auto','auto'],
      id: 'bkgd-protein',
      stroke: [0,'rgb(79, 79, 79)','none'],
      display: 'none',
      fill: ['rgba(169,169,169,1.00)']
   },
   {
      type: 'text',
      rect: ['168px','93px','97px','17px','auto','auto'],
      align: 'center',
      id: 'label-protein',
      display: 'none',
      text: 'Protein',
      cursor: ['pointer'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal']
   },
   {
      type: 'rect',
      borderRadius: ['4px 4px','4px 4px','0px 0px','0px 0px'],
      rect: ['265px','86px','97px','32px','auto','auto'],
      id: 'bkgd-mutation',
      stroke: [0,'rgb(79, 79, 79)','none'],
      display: 'none',
      fill: ['rgba(169,169,169,1.00)']
   },
   {
      type: 'text',
      rect: ['265px','93px','97px','17px','auto','auto'],
      align: 'center',
      id: 'label-mutation',
      display: 'none',
      text: 'DNA',
      cursor: ['pointer'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal']
   },
   {
      type: 'rect',
      borderRadius: ['4px 4px','4px 4px','0px 0px','0px 0px'],
      rect: ['362px','86px','218px','32px','auto','auto'],
      id: 'bkgd-examples',
      stroke: [0,'rgb(79, 79, 79)','none'],
      display: 'none',
      fill: ['rgba(169,169,169,1.00)']
   },
   {
      type: 'text',
      rect: ['362px','93px','218px','17px','auto','auto'],
      align: 'center',
      id: 'label-examples',
      display: 'none',
      text: 'Examples in Other Species',
      cursor: ['pointer'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal']
   },
   {
      type: 'rect',
      borderRadius: ['4px 4px','4px 4px','0px 0px','0px 0px'],
      rect: ['580px','86px','249px','32px','auto','auto'],
      id: 'bkgd-variation',
      stroke: [0,'rgb(79, 79, 79)','none'],
      display: 'none',
      fill: ['rgba(169,169,169,1.00)']
   },
   {
      type: 'text',
      rect: ['580px','93px','249px','17px','auto','auto'],
      align: 'center',
      id: 'label-variation',
      display: 'none',
      text: 'Variation, Disease, or Both?',
      cursor: ['pointer'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal']
   },
   {
      rect: ['23px','209px','195px','153px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)'],
      id: 'white_bkgd',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      boxShadow: ['',2,2,7,0,'rgba(0,0,0,0.30)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','400','none','normal'],
      type: 'text',
      display: 'none',
      id: 'text-trait',
      text: 'Thick, wrinkled skin defines the Shar Pei dog breed. Puppies partially grow into their skin, but wrinkles remain on the adult head, neck, and back.',
      align: 'left',
      rect: ['82px','187px','198px','306px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'text-protein',
      text: 'The affected protein in the Shar Pei dog is HAS2 (hyaluronan synthase 2). HAS2 is an enzyme that sits in the membrane of skin cells. It builds a large molecule called hyaluronan (HA) and releases it outside the cell.<br> <br>HA surrounds skin cells to provide structural support. It is also a signaling molecule. HA tells skin cells to divide, and it guides moving cells to their proper place during development and wound healing. ',
      align: 'left',
      rect: ['82px','188px','198px','225px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'text-mutation',
      text: 'Like all genes, HAS2 has switches that control when and where it\'s turned on and off. Here, an extra \"on\" switch makes the HAS2 gene more active in skin cells. <br><br>The Shar Pei makes too much HAS2 enzyme, and therefore too much hyaluronan (HA). The added HA thickens the skin and signals cells to divide more. The extra skin forms folds or wrinkles.',
      align: 'left',
      rect: ['83px','190px','209px','225px','auto','auto']
   },
   {
      type: 'rect',
      rect: ['71px','86px','97px','32px','auto','auto'],
      display: 'none',
      id: 'button-trait',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(61,61,61,0.00)']
   },
   {
      type: 'rect',
      rect: ['168px','86px','97px','32px','auto','auto'],
      display: 'none',
      id: 'button-protein',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(61,61,61,0.00)']
   },
   {
      type: 'rect',
      rect: ['265px','86px','97px','32px','auto','auto'],
      display: 'none',
      id: 'button-mutation',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(61,61,61,0.00)']
   },
   {
      type: 'rect',
      rect: ['362px','86px','218px','32px','auto','auto'],
      display: 'none',
      id: 'button-examples',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(61,61,61,0.00)']
   },
   {
      type: 'rect',
      rect: ['580px','86px','249px','32px','auto','auto'],
      display: 'none',
      id: 'button-variation',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(61,61,61,0.00)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'text-examples',
      text: 'All vertebrates have the HAS2 gene, and it is required for life. When researchers remove the gene from mice, they die as embryos.<br> <br>Like Shar Pei dogs, people who make too much hyaluronan (due to a rare genetic defect) also have thick, wrinkled skin.<br><br>Naked mole rats have a variation of HAS2 that codes for a more-active HAS2 enzyme—and helps make them resistant to cancer.',
      align: 'left',
      rect: ['82px','188px','198px','312px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'text-proteinCopy3',
      text: 'Both. <br><br>This variation in skin architecture is not a health problem. But excess hyaluronan can cause an immune response, leading to skin inflammation and fever.',
      align: 'left',
      rect: ['82px','188px','198px','225px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',20,'rgba(89,89,89,1.00)','700','none',''],
      type: 'text',
      id: 'Text3Copy2',
      text: 'Shar Pei dogs',
      align: 'center',
      rect: ['20px','219px','196px','auto','auto','auto']
   },
   {
      type: 'image',
      id: 'sharpei-puppy',
      opacity: 1,
      rect: ['54px','253px','132px','110px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/sharpei-puppy.jpg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['334px','179px','490px','322px','auto','auto'],
      id: 'sharpei-protein',
      fill: ['rgba(0,0,0,0)','images/sharpei-protein.jpg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['304px','137px','519px','381px','auto','auto'],
      id: 'sharpei-dna',
      fill: ['rgba(0,0,0,0)','images/sharpei-dna.jpg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['429px','273px','236px','255px','auto','auto'],
      id: 'sharpei-adult3',
      fill: ['rgba(0,0,0,0)','images/sharpei-adult.jpg','0px','0px']
   },
   {
      id: 'closeCopy',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['785px','122px','auto','auto','auto','auto']
   },
   {
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/molerat.jpg','0px','0px'],
      id: 'molerat',
      display: 'none',
      rect: ['380px','214px','390px','248px','auto','auto'],
      boxShadow: ['',3,3,5,0,'rgba(0,0,0,0.65)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(89,89,89,1)','500','none','normal'],
      type: 'text',
      display: 'none',
      id: 'Text3',
      text: 'Naked mole rat',
      align: 'center',
      rect: ['389px','473px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'closeCopy',
      symbolName: 'close'
   }   ]
   },
   states: {
      "Base State": {
         "${_button-trait}": [
            ["style", "display", 'none'],
            ["style", "top", '86px'],
            ["style", "cursor", 'pointer'],
            ["color", "background-color", 'rgba(61,61,61,0.00)']
         ],
         "${_text-examples}": [
            ["style", "top", '188px'],
            ["style", "display", 'none'],
            ["style", "height", '312px'],
            ["style", "left", '82px'],
            ["style", "width", '238px']
         ],
         "${_white_bkgd}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.296875)'],
            ["style", "opacity", '1'],
            ["style", "left", '22px'],
            ["style", "width", '195px'],
            ["style", "top", '210px'],
            ["subproperty", "boxShadow.blur", '7px'],
            ["style", "height", '153px'],
            ["subproperty", "boxShadow.offsetV", '2px'],
            ["subproperty", "boxShadow.offsetH", '2px'],
            ["subproperty", "boxShadow.spread", '0px']
         ],
         "${_bkgd-protein}": [
            ["color", "background-color", 'rgba(169,169,169,1)'],
            ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '168px'],
            ["style", "width", '97px'],
            ["style", "top", '119px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'none'],
            ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Text3}": [
            ["style", "top", '473px'],
            ["style", "display", 'none'],
            ["style", "font-weight", '500'],
            ["style", "left", '389px'],
            ["style", "font-size", '16px']
         ],
         "${_text-trait}": [
            ["style", "line-height", '20px'],
            ["color", "color", 'rgba(80,80,80,1)'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '82px'],
            ["style", "font-size", '16px'],
            ["style", "top", '187px'],
            ["style", "text-align", 'left'],
            ["style", "height", '306px'],
            ["style", "width", '198px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0']
         ],
         "${_sharpei-adult3}": [
            ["style", "top", '273px'],
            ["style", "left", '429px'],
            ["style", "display", 'none']
         ],
         "${_button-mutation}": [
            ["style", "top", '86px'],
            ["style", "display", 'none'],
            ["color", "background-color", 'rgba(61,61,61,0)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '265px']
         ],
         "${_button-protein}": [
            ["style", "top", '86px'],
            ["style", "display", 'none'],
            ["color", "background-color", 'rgba(61,61,61,0)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '168px']
         ],
         "${_button-variation}": [
            ["color", "background-color", 'rgba(61,61,61,0)'],
            ["style", "top", '86px'],
            ["style", "display", 'none'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '580px'],
            ["style", "width", '249px']
         ],
         "${_button-examples}": [
            ["color", "background-color", 'rgba(61,61,61,0)'],
            ["style", "top", '86px'],
            ["style", "display", 'none'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '362px'],
            ["style", "width", '218px']
         ],
         "${symbolSelector}": [
            ["style", "height", '600px'],
            ["style", "width", '900px']
         ],
         "${_Text3Copy2}": [
            ["style", "top", '219px'],
            ["style", "text-align", 'center'],
            ["style", "width", '196px'],
            ["color", "color", 'rgba(89,89,89,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '20px'],
            ["style", "font-size", '20px']
         ],
         "${_bkgd-examples}": [
            ["color", "background-color", 'rgba(169,169,169,1)'],
            ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '218px'],
            ["style", "top", '119px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'none'],
            ["style", "left", '362px']
         ],
         "${_closeCopy}": [
            ["style", "top", '122px'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "left", '785px'],
            ["style", "cursor", 'pointer']
         ],
         "${_sharpei-protein}": [
            ["style", "top", '179px'],
            ["style", "left", '334px'],
            ["style", "display", 'none']
         ],
         "${_black_bkgd}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(61,61,61,1.00)'],
            ["style", "height", '600px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '900px']
         ],
         "${_text-proteinCopy3}": [
            ["style", "top", '188px'],
            ["style", "display", 'none'],
            ["style", "height", '225px'],
            ["style", "left", '82px'],
            ["style", "width", '198px']
         ],
         "${_bkgd-mutation}": [
            ["color", "background-color", 'rgba(169,169,169,1)'],
            ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '265px'],
            ["style", "width", '97px'],
            ["style", "top", '119px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'none'],
            ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_text-mutation}": [
            ["style", "top", '190px'],
            ["style", "display", 'none'],
            ["style", "height", '225px'],
            ["style", "left", '83px'],
            ["style", "width", '209px']
         ],
         "${_label-trait}": [
            ["style", "top", '126px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "left", '71px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '97px']
         ],
         "${_label-variation}": [
            ["style", "top", '126px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "height", '17px'],
            ["style", "left", '580px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '249px']
         ],
         "${_sharpei-dna}": [
            ["style", "top", '137px'],
            ["style", "left", '304px'],
            ["style", "display", 'none']
         ],
         "${_text-protein}": [
            ["style", "top", '188px'],
            ["style", "height", '225px'],
            ["style", "display", 'none'],
            ["style", "left", '82px'],
            ["style", "width", '232px']
         ],
         "${_label-mutation}": [
            ["style", "top", '126px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "left", '265px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '97px']
         ],
         "${_bkgd-trait}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '71px'],
            ["style", "width", '97px'],
            ["style", "top", '119px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'none'],
            ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_sharpei-puppy}": [
            ["style", "top", '253px'],
            ["style", "display", 'block'],
            ["style", "height", '110px'],
            ["style", "opacity", '1'],
            ["style", "left", '54px'],
            ["style", "width", '132px']
         ],
         "${_bkgd-variation}": [
            ["color", "background-color", 'rgba(169,169,169,1)'],
            ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '580px'],
            ["style", "width", '249px'],
            ["style", "top", '119px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'none'],
            ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_text-traitCopy}": [
            ["style", "line-height", '20px'],
            ["color", "color", 'rgba(80,80,80,1)'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '82px'],
            ["style", "font-size", '16px'],
            ["style", "top", '187px'],
            ["style", "height", '306px'],
            ["style", "opacity", '0'],
            ["style", "display", 'none'],
            ["style", "width", '198px']
         ],
         "${_label-examples}": [
            ["style", "top", '126px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "height", '17px'],
            ["style", "left", '362px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '218px']
         ],
         "${_label-protein}": [
            ["style", "top", '126px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "left", '168px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '97px']
         ],
         "${_molerat}": [
            ["style", "top", '214px'],
            ["subproperty", "boxShadow.blur", '5px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "display", 'none'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "left", '380px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4000,
         autoPlay: true,
         labels: {
            "trait": 2000,
            "protein": 2500,
            "mutation": 3000,
            "examples": 3500,
            "variation": 4000
         },
         timeline: [
            { id: "eid120", tween: [ "style", "${_text-protein}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
            { id: "eid121", tween: [ "style", "${_text-protein}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
            { id: "eid96", tween: [ "color", "${_bkgd-protein}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 2000, duration: 0 },
            { id: "eid97", tween: [ "color", "${_bkgd-protein}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 2500, duration: 0 },
            { id: "eid98", tween: [ "color", "${_bkgd-protein}", "background-color", 'rgba(170,170,170,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 3000, duration: 0 },
            { id: "eid86", tween: [ "style", "${_button-trait}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid91", tween: [ "style", "${_button-trait}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid69", tween: [ "style", "${_label-examples}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid58", tween: [ "style", "${_label-examples}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid42", tween: [ "style", "${_label-mutation}", "top", '93px', { fromValue: '126px'}], position: 1500, duration: 500 },
            { id: "eid65", tween: [ "style", "${_label-protein}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid54", tween: [ "style", "${_label-protein}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid44", tween: [ "style", "${_bkgd-variation}", "top", '86px', { fromValue: '119px'}], position: 1500, duration: 500 },
            { id: "eid192", tween: [ "style", "${_sharpei-dna}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid193", tween: [ "style", "${_sharpei-dna}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0 },
            { id: "eid68", tween: [ "style", "${_bkgd-examples}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid57", tween: [ "style", "${_bkgd-examples}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid40", tween: [ "style", "${_bkgd-trait}", "top", '86px', { fromValue: '119px'}], position: 1500, duration: 500 },
            { id: "eid104", tween: [ "color", "${_bkgd-examples}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 2000, duration: 0 },
            { id: "eid105", tween: [ "color", "${_bkgd-examples}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 3500, duration: 0 },
            { id: "eid106", tween: [ "color", "${_bkgd-examples}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 4000, duration: 0 },
            { id: "eid126", tween: [ "style", "${_text-examples}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
            { id: "eid127", tween: [ "style", "${_text-examples}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
            { id: "eid184", tween: [ "style", "${_sharpei-puppy}", "left", '391px', { fromValue: '54px'}], position: 500, duration: 1000 },
            { id: "eid182", tween: [ "style", "${_text-protein}", "width", '232px', { fromValue: '232px'}], position: 2522, duration: 0 },
            { id: "eid16", tween: [ "style", "${_white_bkgd}", "width", '764px', { fromValue: '195px'}], position: 500, duration: 1000 },
            { id: "eid15", tween: [ "style", "${_white_bkgd}", "top", '118px', { fromValue: '210px'}], position: 500, duration: 1000 },
            { id: "eid99", tween: [ "color", "${_bkgd-trait}", "background-color", 'rgba(255,255,255,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 2000, duration: 0 },
            { id: "eid100", tween: [ "color", "${_bkgd-trait}", "background-color", 'rgba(170,170,170,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 2500, duration: 0 },
            { id: "eid187", tween: [ "style", "${_sharpei-puppy}", "height", '267px', { fromValue: '110px'}], position: 500, duration: 1000 },
            { id: "eid34", tween: [ "style", "${_label-examples}", "top", '93px', { fromValue: '126px'}], position: 1500, duration: 500 },
            { id: "eid101", tween: [ "color", "${_bkgd-mutation}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 2000, duration: 0 },
            { id: "eid102", tween: [ "color", "${_bkgd-mutation}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 3000, duration: 0 },
            { id: "eid103", tween: [ "color", "${_bkgd-mutation}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 3500, duration: 0 },
            { id: "eid29", tween: [ "style", "${_closeCopy}", "opacity", '1', { fromValue: '0.000000'}], position: 1500, duration: 500 },
            { id: "eid185", tween: [ "style", "${_sharpei-puppy}", "top", '261px', { fromValue: '253px'}], position: 500, duration: 1000 },
            { id: "eid188", tween: [ "style", "${_sharpei-puppy}", "width", '320px', { fromValue: '132px'}], position: 500, duration: 1000 },
            { id: "eid194", tween: [ "style", "${_sharpei-adult3}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid85", tween: [ "style", "${_button-protein}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid90", tween: [ "style", "${_button-protein}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid190", tween: [ "style", "${_sharpei-protein}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
            { id: "eid191", tween: [ "style", "${_sharpei-protein}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
            { id: "eid67", tween: [ "style", "${_label-mutation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid56", tween: [ "style", "${_label-mutation}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid66", tween: [ "style", "${_bkgd-mutation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid55", tween: [ "style", "${_bkgd-mutation}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid183", tween: [ "style", "${_white_bkgd}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid17", tween: [ "style", "${_white_bkgd}", "left", '68px', { fromValue: '22px'}], position: 500, duration: 1000 },
            { id: "eid48", tween: [ "style", "${_label-protein}", "top", '93px', { fromValue: '126px'}], position: 1500, duration: 500 },
            { id: "eid30", tween: [ "style", "${_text-trait}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500 },
            { id: "eid196", tween: [ "style", "${_molerat}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
            { id: "eid198", tween: [ "style", "${_molerat}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
            { id: "eid46", tween: [ "style", "${_label-trait}", "top", '93px', { fromValue: '126px'}], position: 1500, duration: 500 },
            { id: "eid64", tween: [ "style", "${_bkgd-protein}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid53", tween: [ "style", "${_bkgd-protein}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid189", tween: [ "style", "${_sharpei-puppy}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
            { id: "eid70", tween: [ "style", "${_bkgd-variation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid59", tween: [ "style", "${_bkgd-variation}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid124", tween: [ "style", "${_text-mutation}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid125", tween: [ "style", "${_text-mutation}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0 },
            { id: "eid128", tween: [ "style", "${_text-proteinCopy3}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid61", tween: [ "style", "${_label-variation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid60", tween: [ "style", "${_label-variation}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid50", tween: [ "style", "${_bkgd-examples}", "top", '86px', { fromValue: '119px'}], position: 1500, duration: 500 },
            { id: "eid38", tween: [ "style", "${_label-variation}", "top", '94px', { fromValue: '126px'}], position: 1500, duration: 500 },
            { id: "eid63", tween: [ "style", "${_bkgd-trait}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid52", tween: [ "style", "${_bkgd-trait}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid140", tween: [ "style", "${_Text3Copy2}", "left", '81px', { fromValue: '20px'}], position: 500, duration: 1000 },
            { id: "eid195", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
            { id: "eid197", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
            { id: "eid14", tween: [ "style", "${_white_bkgd}", "height", '410px', { fromValue: '153px'}], position: 500, duration: 1000 },
            { id: "eid107", tween: [ "color", "${_bkgd-variation}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 2000, duration: 0 },
            { id: "eid108", tween: [ "color", "${_bkgd-variation}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 4000, duration: 0 },
            { id: "eid82", tween: [ "style", "${_button-variation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid87", tween: [ "style", "${_button-variation}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid32", tween: [ "style", "${_bkgd-mutation}", "top", '86px', { fromValue: '119px'}], position: 1500, duration: 500 },
            { id: "eid83", tween: [ "style", "${_button-examples}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid88", tween: [ "style", "${_button-examples}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid141", tween: [ "style", "${_Text3Copy2}", "top", '144px', { fromValue: '219px'}], position: 500, duration: 1000 },
            { id: "eid177", tween: [ "style", "${_text-examples}", "width", '238px', { fromValue: '238px'}], position: 3524, duration: 0 },
            { id: "eid25", tween: [ "style", "${_black_bkgd}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid84", tween: [ "style", "${_button-mutation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid89", tween: [ "style", "${_button-mutation}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid114", tween: [ "style", "${_text-trait}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid116", tween: [ "style", "${_text-trait}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
            { id: "eid62", tween: [ "style", "${_label-trait}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid51", tween: [ "style", "${_label-trait}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid36", tween: [ "style", "${_bkgd-protein}", "top", '86px', { fromValue: '119px'}], position: 1500, duration: 500 }         ]
      }
   }
},
"close": {
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
      rect: ['0px','5px','29px','28px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      boxShadow: ['',2,2,4,0,'rgba(0,0,0,0.37)'],
      id: 'Ellipse2',
      stroke: [2,'rgba(112,112,112,1.00)','solid'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['8px','0px','auto','auto','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',30,'rgba(90,90,90,1.00)','normal','none','normal'],
      id: 'Text3',
      text: 'x',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "top", '0px'],
            ["color", "color", 'rgba(90,90,90,1.00)'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '8px'],
            ["style", "font-size", '30px']
         ],
         "${_Ellipse2}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.37)'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '29px'],
            ["style", "top", '5px'],
            ["subproperty", "boxShadow.blur", '4px'],
            ["subproperty", "boxShadow.offsetV", '2px'],
            ["style", "height", '28px'],
            ["color", "border-color", 'rgba(112,112,112,1.00)'],
            ["subproperty", "boxShadow.offsetH", '2px'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '37px'],
            ["style", "width", '33px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"cf-info": {
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
      type: 'rect',
      id: 'black_bkgd',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','0px','900px','600px','auto','auto'],
      fill: ['rgba(61,61,61,1.00)']
   },
   {
      type: 'rect',
      borderRadius: ['4px 4px','4px 4px','0px 0px','0px 0px'],
      rect: ['71px','86px','97px','32px','auto','auto'],
      id: 'bkgd-trait',
      stroke: [0,'rgb(79, 79, 79)','none'],
      display: 'none',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'text',
      rect: ['71px','93px','97px','17px','auto','auto'],
      align: 'center',
      id: 'label-trait',
      display: 'none',
      text: 'Trait',
      cursor: ['pointer'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal']
   },
   {
      type: 'rect',
      borderRadius: ['4px 4px','4px 4px','0px 0px','0px 0px'],
      rect: ['168px','86px','97px','32px','auto','auto'],
      id: 'bkgd-protein',
      stroke: [0,'rgb(79, 79, 79)','none'],
      display: 'none',
      fill: ['rgba(169,169,169,1.00)']
   },
   {
      type: 'text',
      rect: ['168px','93px','97px','17px','auto','auto'],
      align: 'center',
      id: 'label-protein',
      display: 'none',
      text: 'Protein',
      cursor: ['pointer'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal']
   },
   {
      type: 'rect',
      borderRadius: ['4px 4px','4px 4px','0px 0px','0px 0px'],
      rect: ['265px','86px','97px','32px','auto','auto'],
      id: 'bkgd-mutation',
      stroke: [0,'rgb(79, 79, 79)','none'],
      display: 'none',
      fill: ['rgba(169,169,169,1.00)']
   },
   {
      type: 'text',
      rect: ['265px','93px','97px','17px','auto','auto'],
      align: 'center',
      id: 'label-mutation',
      display: 'none',
      text: 'DNA',
      cursor: ['pointer'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal']
   },
   {
      type: 'rect',
      borderRadius: ['4px 4px','4px 4px','0px 0px','0px 0px'],
      rect: ['362px','86px','218px','32px','auto','auto'],
      id: 'bkgd-examples',
      stroke: [0,'rgb(79, 79, 79)','none'],
      display: 'none',
      fill: ['rgba(169,169,169,1.00)']
   },
   {
      type: 'text',
      rect: ['362px','93px','218px','17px','auto','auto'],
      align: 'center',
      id: 'label-examples',
      display: 'none',
      text: 'Examples in Other Species',
      cursor: ['pointer'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal']
   },
   {
      type: 'rect',
      borderRadius: ['4px 4px','4px 4px','0px 0px','0px 0px'],
      rect: ['580px','86px','249px','32px','auto','auto'],
      id: 'bkgd-variation',
      stroke: [0,'rgb(79, 79, 79)','none'],
      display: 'none',
      fill: ['rgba(169,169,169,1.00)']
   },
   {
      type: 'text',
      rect: ['580px','93px','249px','17px','auto','auto'],
      align: 'center',
      id: 'label-variation',
      display: 'none',
      text: 'Variation, Disease, or Both?',
      cursor: ['pointer'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal']
   },
   {
      rect: ['23px','209px','195px','153px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)'],
      id: 'white_bkgd',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      boxShadow: ['',2,2,7,0,'rgba(0,0,0,0.30)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','400','none','normal'],
      type: 'text',
      display: 'none',
      id: 'text-trait',
      text: 'Some individuals are naturally immune to certain infectious diseases, such as typhoid fever, cholera, or tuberculosis.<br><br>This trait is tied to the same gene that causes cystic fibrosis, a life-threatening genetic disorder.',
      align: 'left',
      rect: ['82px','207px','198px','306px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'text-protein',
      text: 'The affected protein in both disease-resistant and cystic fibrosis patients is CFTR (cystic fibrosis transmembrane conductance regulator). CFTR helps maintain salt balance by moving chloride ions across cell membranes. <br><br>In the lung and intestine, CFTR affects the fluidity of airway mucus and digestive juices. CFTR also helps immune cells attach to and ingests certain types of bacteria.',
      align: 'left',
      rect: ['82px','205px','232px','225px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',15,'rgba(80,80,80,1)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'text-mutation',
      text: 'Variatons in the CFTR gene change the amino acid sequence. The protein can\'t fold properly, and it\'s broken down by the cell. <br><br>Toxins from bacteria over-activate CFTR channels, causing salt imbalance and water loss through diarrhea. Because people with disease resistance make half the normal amount of CFTR protein, they are less susceptible to dehydration. <br><br>People with cystic fibrosis (CF) have no CFTR protein. Salt transport doesn\'t happen properly, and the fluid around cells thickens, clogging the lungs and other organs.',
      align: 'left',
      rect: ['82px','201px','258px','232px','auto','auto']
   },
   {
      type: 'rect',
      rect: ['71px','86px','97px','32px','auto','auto'],
      display: 'none',
      id: 'button-trait',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(61,61,61,0.00)']
   },
   {
      type: 'rect',
      rect: ['168px','86px','97px','32px','auto','auto'],
      display: 'none',
      id: 'button-protein',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(61,61,61,0.00)']
   },
   {
      type: 'rect',
      rect: ['265px','86px','97px','32px','auto','auto'],
      display: 'none',
      id: 'button-mutation',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(61,61,61,0.00)']
   },
   {
      type: 'rect',
      rect: ['362px','86px','218px','32px','auto','auto'],
      display: 'none',
      id: 'button-examples',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(61,61,61,0.00)']
   },
   {
      type: 'rect',
      rect: ['580px','86px','249px','32px','auto','auto'],
      display: 'none',
      id: 'button-variation',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(61,61,61,0.00)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'text-examples',
      text: 'The CFTR gene is present in animals from single-celled yeast to humans.<br> <br>Researchers have created mice with no CFTR protein. These mice have cystic fibrosis (CF) and die a few weeks after birth. Mice engineered to have half the normal amount of CFTR are healthy and immune to typhoid fever. ',
      align: 'left',
      rect: ['82px','208px','198px','312px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'text-proteinCopy3',
      text: 'Both. <br><br>Variations in the CFTR gene affect how the body\'s immune system responds to harmful bacteria. Healthy individuals may or may not be resistant to certain infectious diseases. Others inherit the lung disease cystic fibrosis. ',
      align: 'left',
      rect: ['82px','208px','198px','225px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',18,'rgba(89,89,89,1)','bold','none','normal'],
      type: 'text',
      id: 'Text5Copy7',
      text: 'Disease resistance / Cystic Fibrosis',
      align: 'center',
      rect: ['242px','399px','194px','auto','auto','auto']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['343px','183px','469px','270px','auto','auto'],
      id: 'cftr-protein',
      fill: ['rgba(0,0,0,0)','images/cftr-protein.jpg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['360px','153px','472px','365px','auto','auto'],
      id: 'cftr-dna',
      fill: ['rgba(0,0,0,0)','images/cftr-dna.jpg','0px','0px']
   },
   {
      id: 'closeCopy',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['785px','122px','auto','auto','auto','auto']
   },
   {
      id: 'mask3',
      type: 'image',
      rect: ['332px','184px','400px','344px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/mask.jpg','0px','0px']
   },
   {
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/yeast.jpg','0px','0px'],
      id: 'yeast',
      display: 'none',
      rect: ['393px','152px','249px','165px','auto','auto'],
      boxShadow: ['',2,2,8,0,'rgba(0,0,0,0.65)']
   },
   {
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/mouse.jpg','0px','0px'],
      id: 'mouse2',
      display: 'none',
      rect: ['393px','332px','249px','180px','auto','auto'],
      boxShadow: ['',2,2,8,0,'rgba(0,0,0,0.65)']
   }],
   symbolInstances: [
   {
      id: 'closeCopy',
      symbolName: 'close'
   }   ]
   },
   states: {
      "Base State": {
         "${_button-trait}": [
            ["style", "top", '86px'],
            ["color", "background-color", 'rgba(61,61,61,0.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "display", 'none']
         ],
         "${_text-examples}": [
            ["style", "top", '196px'],
            ["style", "height", '312px'],
            ["style", "display", 'none'],
            ["style", "left", '82px'],
            ["style", "width", '205px']
         ],
         "${_bkgd-protein}": [
            ["color", "background-color", 'rgba(169,169,169,1)'],
            ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '168px'],
            ["style", "width", '97px'],
            ["style", "top", '119px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'none'],
            ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_button-protein}": [
            ["style", "top", '86px'],
            ["style", "display", 'none'],
            ["style", "left", '168px'],
            ["style", "cursor", 'pointer'],
            ["color", "background-color", 'rgba(61,61,61,0)']
         ],
         "${_cftr-dna}": [
            ["style", "top", '153px'],
            ["style", "left", '360px'],
            ["style", "display", 'none']
         ],
         "${_bkgd-mutation}": [
            ["color", "background-color", 'rgba(169,169,169,1)'],
            ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '265px'],
            ["style", "width", '97px'],
            ["style", "top", '119px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'none'],
            ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_white_bkgd}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["subproperty", "boxShadow.blur", '7px'],
            ["style", "opacity", '1'],
            ["style", "left", '242px'],
            ["style", "width", '195px'],
            ["style", "top", '388px'],
            ["subproperty", "boxShadow.spread", '0px'],
            ["style", "height", '153px'],
            ["subproperty", "boxShadow.offsetV", '2px'],
            ["subproperty", "boxShadow.offsetH", '2px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.296875)']
         ],
         "${_text-trait}": [
            ["style", "line-height", '20px'],
            ["color", "color", 'rgba(80,80,80,1)'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '82px'],
            ["style", "font-size", '16px'],
            ["style", "top", '195px'],
            ["style", "text-align", 'left'],
            ["style", "height", '306px'],
            ["style", "opacity", '0'],
            ["style", "display", 'none'],
            ["style", "width", '198px']
         ],
         "${_button-variation}": [
            ["color", "background-color", 'rgba(61,61,61,0)'],
            ["style", "top", '86px'],
            ["style", "display", 'none'],
            ["style", "left", '580px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '249px']
         ],
         "${_button-examples}": [
            ["color", "background-color", 'rgba(61,61,61,0)'],
            ["style", "top", '86px'],
            ["style", "display", 'none'],
            ["style", "left", '362px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '218px']
         ],
         "${symbolSelector}": [
            ["style", "height", '600px'],
            ["style", "width", '900px']
         ],
         "${_mouse2}": [
            ["subproperty", "boxShadow.blur", '8px'],
            ["style", "left", '393px'],
            ["style", "width", '249px'],
            ["style", "top", '332px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "display", 'none'],
            ["subproperty", "boxShadow.offsetV", '2px'],
            ["subproperty", "boxShadow.offsetH", '2px'],
            ["style", "height", '180px']
         ],
         "${_yeast}": [
            ["subproperty", "boxShadow.blur", '8px'],
            ["style", "left", '393px'],
            ["style", "width", '249px'],
            ["style", "top", '152px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "display", 'none'],
            ["subproperty", "boxShadow.offsetV", '2px'],
            ["subproperty", "boxShadow.offsetH", '2px'],
            ["style", "height", '165px']
         ],
         "${_closeCopy}": [
            ["style", "top", '122px'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "left", '785px'],
            ["style", "cursor", 'pointer']
         ],
         "${_bkgd-variation}": [
            ["color", "background-color", 'rgba(169,169,169,1)'],
            ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '580px'],
            ["style", "width", '249px'],
            ["style", "top", '119px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'none'],
            ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_black_bkgd}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(61,61,61,1.00)'],
            ["style", "height", '600px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '900px']
         ],
         "${_text-proteinCopy3}": [
            ["style", "top", '208px'],
            ["style", "height", '225px'],
            ["style", "display", 'none'],
            ["style", "left", '82px'],
            ["style", "width", '198px']
         ],
         "${_mask3}": [
            ["style", "top", '438px'],
            ["style", "display", 'block'],
            ["style", "height", '103px'],
            ["style", "opacity", '1'],
            ["style", "left", '279px'],
            ["style", "width", '120px']
         ],
         "${_text-mutation}": [
            ["style", "top", '178px'],
            ["style", "width", '258px'],
            ["style", "display", 'none'],
            ["style", "height", '232px'],
            ["style", "left", '82px'],
            ["style", "font-size", '15px']
         ],
         "${_label-examples}": [
            ["style", "top", '126px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "height", '17px'],
            ["style", "left", '362px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '218px']
         ],
         "${_label-variation}": [
            ["style", "top", '126px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "height", '17px'],
            ["style", "left", '580px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '249px']
         ],
         "${_Text5Copy7}": [
            ["style", "top", '399px'],
            ["style", "font-size", '18px'],
            ["style", "line-height", '19px'],
            ["style", "opacity", '1'],
            ["style", "left", '242px'],
            ["style", "width", '194px']
         ],
         "${_bkgd-examples}": [
            ["color", "background-color", 'rgba(169,169,169,1)'],
            ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '218px'],
            ["style", "top", '119px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'none'],
            ["style", "left", '362px']
         ],
         "${_label-mutation}": [
            ["style", "top", '126px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "left", '265px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '97px']
         ],
         "${_bkgd-trait}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '71px'],
            ["style", "width", '97px'],
            ["style", "top", '119px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'none'],
            ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_label-trait}": [
            ["style", "top", '126px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "left", '71px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '97px']
         ],
         "${_button-mutation}": [
            ["style", "top", '86px'],
            ["style", "display", 'none'],
            ["style", "left", '265px'],
            ["style", "cursor", 'pointer'],
            ["color", "background-color", 'rgba(61,61,61,0)']
         ],
         "${_text-traitCopy}": [
            ["style", "line-height", '20px'],
            ["color", "color", 'rgba(80,80,80,1)'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '82px'],
            ["style", "font-size", '16px'],
            ["style", "top", '187px'],
            ["style", "height", '306px'],
            ["style", "width", '198px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0']
         ],
         "${_cftr-protein}": [
            ["style", "top", '183px'],
            ["style", "left", '343px'],
            ["style", "display", 'none']
         ],
         "${_label-protein}": [
            ["style", "top", '126px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "left", '168px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '97px']
         ],
         "${_text-protein}": [
            ["style", "top", '193px'],
            ["style", "display", 'none'],
            ["style", "height", '225px'],
            ["style", "left", '82px'],
            ["style", "width", '232px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4000,
         autoPlay: true,
         labels: {
            "trait": 2000,
            "protein": 2500,
            "mutation": 3000,
            "examples": 3500,
            "variation": 4000
         },
         timeline: [
            { id: "eid120", tween: [ "style", "${_text-protein}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
            { id: "eid121", tween: [ "style", "${_text-protein}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
            { id: "eid314", tween: [ "style", "${_mask3}", "height", '344px', { fromValue: '103px'}], position: 500, duration: 1000 },
            { id: "eid168", tween: [ "style", "${_text-mutation}", "top", '178px', { fromValue: '178px'}], position: 3018, duration: 0 },
            { id: "eid96", tween: [ "color", "${_bkgd-protein}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 2000, duration: 0 },
            { id: "eid97", tween: [ "color", "${_bkgd-protein}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 2500, duration: 0 },
            { id: "eid98", tween: [ "color", "${_bkgd-protein}", "background-color", 'rgba(170,170,170,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 3000, duration: 0 },
            { id: "eid343", tween: [ "style", "${_mouse2}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
            { id: "eid345", tween: [ "style", "${_mouse2}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
            { id: "eid336", tween: [ "style", "${_mask3}", "opacity", '1', { fromValue: '1'}], position: 500, duration: 0 },
            { id: "eid337", tween: [ "style", "${_mask3}", "opacity", '1', { fromValue: '1'}], position: 1500, duration: 0 },
            { id: "eid50", tween: [ "style", "${_bkgd-examples}", "top", '86px', { fromValue: '119px'}], position: 1500, duration: 500 },
            { id: "eid42", tween: [ "style", "${_label-mutation}", "top", '93px', { fromValue: '126px'}], position: 1500, duration: 500 },
            { id: "eid36", tween: [ "style", "${_bkgd-protein}", "top", '86px', { fromValue: '119px'}], position: 1500, duration: 500 },
            { id: "eid65", tween: [ "style", "${_label-protein}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid54", tween: [ "style", "${_label-protein}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid134", tween: [ "style", "${_Text5Copy7}", "top", '133px', { fromValue: '399px'}], position: 500, duration: 1000 },
            { id: "eid34", tween: [ "style", "${_label-examples}", "top", '93px', { fromValue: '126px'}], position: 1500, duration: 500 },
            { id: "eid68", tween: [ "style", "${_bkgd-examples}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid57", tween: [ "style", "${_bkgd-examples}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid40", tween: [ "style", "${_bkgd-trait}", "top", '86px', { fromValue: '119px'}], position: 1500, duration: 500 },
            { id: "eid169", tween: [ "style", "${_text-protein}", "top", '193px', { fromValue: '193px'}], position: 2511, duration: 0 },
            { id: "eid316", tween: [ "style", "${_mask3}", "width", '400px', { fromValue: '120px'}], position: 500, duration: 1000 },
            { id: "eid84", tween: [ "style", "${_button-mutation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid89", tween: [ "style", "${_button-mutation}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid307", tween: [ "style", "${_cftr-dna}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid308", tween: [ "style", "${_cftr-dna}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0 },
            { id: "eid16", tween: [ "style", "${_white_bkgd}", "width", '764px', { fromValue: '195px'}], position: 500, duration: 1000 },
            { id: "eid15", tween: [ "style", "${_white_bkgd}", "top", '118px', { fromValue: '388px'}], position: 500, duration: 1000 },
            { id: "eid340", tween: [ "style", "${_black_bkgd}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid339", tween: [ "style", "${_black_bkgd}", "opacity", '1', { fromValue: '1'}], position: 1500, duration: 0 },
            { id: "eid172", tween: [ "style", "${_text-examples}", "width", '205px', { fromValue: '205px'}], position: 3525, duration: 0 },
            { id: "eid126", tween: [ "style", "${_text-examples}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
            { id: "eid127", tween: [ "style", "${_text-examples}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
            { id: "eid61", tween: [ "style", "${_label-variation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid60", tween: [ "style", "${_label-variation}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid128", tween: [ "style", "${_text-proteinCopy3}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid69", tween: [ "style", "${_label-examples}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid58", tween: [ "style", "${_label-examples}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid101", tween: [ "color", "${_bkgd-mutation}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 2000, duration: 0 },
            { id: "eid102", tween: [ "color", "${_bkgd-mutation}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 3000, duration: 0 },
            { id: "eid103", tween: [ "color", "${_bkgd-mutation}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 3500, duration: 0 },
            { id: "eid334", tween: [ "style", "${_white_bkgd}", "opacity", '1', { fromValue: '1'}], position: 500, duration: 0 },
            { id: "eid335", tween: [ "style", "${_white_bkgd}", "opacity", '1', { fromValue: '1'}], position: 1500, duration: 0 },
            { id: "eid85", tween: [ "style", "${_button-protein}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid90", tween: [ "style", "${_button-protein}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid70", tween: [ "style", "${_bkgd-variation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid59", tween: [ "style", "${_bkgd-variation}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid67", tween: [ "style", "${_label-mutation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid56", tween: [ "style", "${_label-mutation}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid66", tween: [ "style", "${_bkgd-mutation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid55", tween: [ "style", "${_bkgd-mutation}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid17", tween: [ "style", "${_white_bkgd}", "left", '68px', { fromValue: '242px'}], position: 500, duration: 1000 },
            { id: "eid124", tween: [ "style", "${_text-mutation}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid125", tween: [ "style", "${_text-mutation}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0 },
            { id: "eid48", tween: [ "style", "${_label-protein}", "top", '93px', { fromValue: '126px'}], position: 1500, duration: 500 },
            { id: "eid312", tween: [ "style", "${_mask3}", "top", '184px', { fromValue: '438px'}], position: 500, duration: 1000 },
            { id: "eid32", tween: [ "style", "${_bkgd-mutation}", "top", '86px', { fromValue: '119px'}], position: 1500, duration: 500 },
            { id: "eid171", tween: [ "style", "${_text-examples}", "top", '196px', { fromValue: '196px'}], position: 3525, duration: 0 },
            { id: "eid64", tween: [ "style", "${_bkgd-protein}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid53", tween: [ "style", "${_bkgd-protein}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid133", tween: [ "style", "${_Text5Copy7}", "left", '82px', { fromValue: '242px'}], position: 500, duration: 1000 },
            { id: "eid305", tween: [ "style", "${_cftr-protein}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
            { id: "eid306", tween: [ "style", "${_cftr-protein}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
            { id: "eid30", tween: [ "style", "${_text-trait}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500 },
            { id: "eid342", tween: [ "style", "${_yeast}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
            { id: "eid344", tween: [ "style", "${_yeast}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
            { id: "eid29", tween: [ "style", "${_closeCopy}", "opacity", '1', { fromValue: '0.000000'}], position: 1500, duration: 500 },
            { id: "eid38", tween: [ "style", "${_label-variation}", "top", '94px', { fromValue: '126px'}], position: 1500, duration: 500 },
            { id: "eid341", tween: [ "style", "${_mask3}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
            { id: "eid346", tween: [ "style", "${_mask3}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid63", tween: [ "style", "${_bkgd-trait}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid52", tween: [ "style", "${_bkgd-trait}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid46", tween: [ "style", "${_label-trait}", "top", '93px', { fromValue: '126px'}], position: 1500, duration: 500 },
            { id: "eid332", tween: [ "style", "${_Text5Copy7}", "opacity", '1', { fromValue: '1'}], position: 500, duration: 0 },
            { id: "eid333", tween: [ "style", "${_Text5Copy7}", "opacity", '1', { fromValue: '1'}], position: 1500, duration: 0 },
            { id: "eid14", tween: [ "style", "${_white_bkgd}", "height", '410px', { fromValue: '153px'}], position: 500, duration: 1000 },
            { id: "eid107", tween: [ "color", "${_bkgd-variation}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 2000, duration: 0 },
            { id: "eid108", tween: [ "color", "${_bkgd-variation}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 4000, duration: 0 },
            { id: "eid82", tween: [ "style", "${_button-variation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid87", tween: [ "style", "${_button-variation}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid86", tween: [ "style", "${_button-trait}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid91", tween: [ "style", "${_button-trait}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid83", tween: [ "style", "${_button-examples}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid88", tween: [ "style", "${_button-examples}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid99", tween: [ "color", "${_bkgd-trait}", "background-color", 'rgba(255,255,255,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 2000, duration: 0 },
            { id: "eid100", tween: [ "color", "${_bkgd-trait}", "background-color", 'rgba(170,170,170,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 2500, duration: 0 },
            { id: "eid104", tween: [ "color", "${_bkgd-examples}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 2000, duration: 0 },
            { id: "eid105", tween: [ "color", "${_bkgd-examples}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 3500, duration: 0 },
            { id: "eid106", tween: [ "color", "${_bkgd-examples}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 4000, duration: 0 },
            { id: "eid310", tween: [ "style", "${_mask3}", "left", '332px', { fromValue: '279px'}], position: 500, duration: 1000 },
            { id: "eid170", tween: [ "style", "${_text-trait}", "top", '195px', { fromValue: '195px'}], position: 2034, duration: 0 },
            { id: "eid114", tween: [ "style", "${_text-trait}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid116", tween: [ "style", "${_text-trait}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
            { id: "eid62", tween: [ "style", "${_label-trait}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid51", tween: [ "style", "${_label-trait}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid44", tween: [ "style", "${_bkgd-variation}", "top", '86px', { fromValue: '119px'}], position: 1500, duration: 500 }         ]
      }
   }
},
"cows-info": {
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
      type: 'rect',
      id: 'black_bkgd',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','0px','900px','600px','auto','auto'],
      fill: ['rgba(61,61,61,1.00)']
   },
   {
      type: 'rect',
      borderRadius: ['4px 4px','4px 4px','0px 0px','0px 0px'],
      rect: ['71px','86px','97px','32px','auto','auto'],
      id: 'bkgd-trait',
      stroke: [0,'rgb(79, 79, 79)','none'],
      display: 'none',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'text',
      rect: ['71px','93px','97px','17px','auto','auto'],
      align: 'center',
      id: 'label-trait',
      display: 'none',
      text: 'Trait',
      cursor: ['pointer'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal']
   },
   {
      type: 'rect',
      borderRadius: ['4px 4px','4px 4px','0px 0px','0px 0px'],
      rect: ['168px','86px','97px','32px','auto','auto'],
      id: 'bkgd-protein',
      stroke: [0,'rgb(79, 79, 79)','none'],
      display: 'none',
      fill: ['rgba(169,169,169,1.00)']
   },
   {
      type: 'text',
      rect: ['168px','93px','97px','17px','auto','auto'],
      align: 'center',
      id: 'label-protein',
      display: 'none',
      text: 'Protein',
      cursor: ['pointer'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal']
   },
   {
      type: 'rect',
      borderRadius: ['4px 4px','4px 4px','0px 0px','0px 0px'],
      rect: ['265px','86px','97px','32px','auto','auto'],
      id: 'bkgd-mutation',
      stroke: [0,'rgb(79, 79, 79)','none'],
      display: 'none',
      fill: ['rgba(169,169,169,1.00)']
   },
   {
      type: 'text',
      rect: ['265px','93px','97px','17px','auto','auto'],
      align: 'center',
      id: 'label-mutation',
      display: 'none',
      text: 'DNA',
      cursor: ['pointer'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal']
   },
   {
      type: 'rect',
      borderRadius: ['4px 4px','4px 4px','0px 0px','0px 0px'],
      rect: ['362px','86px','218px','32px','auto','auto'],
      id: 'bkgd-examples',
      stroke: [0,'rgb(79, 79, 79)','none'],
      display: 'none',
      fill: ['rgba(169,169,169,1.00)']
   },
   {
      type: 'text',
      rect: ['362px','93px','218px','17px','auto','auto'],
      align: 'center',
      id: 'label-examples',
      display: 'none',
      text: 'Examples in Other Species',
      cursor: ['pointer'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal']
   },
   {
      type: 'rect',
      borderRadius: ['4px 4px','4px 4px','0px 0px','0px 0px'],
      rect: ['580px','86px','249px','32px','auto','auto'],
      id: 'bkgd-variation',
      stroke: [0,'rgb(79, 79, 79)','none'],
      display: 'none',
      fill: ['rgba(169,169,169,1.00)']
   },
   {
      type: 'text',
      rect: ['580px','93px','249px','17px','auto','auto'],
      align: 'center',
      id: 'label-variation',
      display: 'none',
      text: 'Variation, Disease, or Both?',
      cursor: ['pointer'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal']
   },
   {
      rect: ['23px','209px','195px','153px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)'],
      type: 'rect',
      id: 'white_bkgd',
      stroke: [0,'rgb(0, 0, 0)','none'],
      opacity: 1,
      boxShadow: ['',2,2,7,0,'rgba(0,0,0,0.30)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','400','none','normal'],
      type: 'text',
      display: 'none',
      id: 'text-trait',
      text: 'Naturally large muscles distinguish Belgian Blue domestic cattle. These animals have double the muscle mass and half the fat of other breeds, making them excellent lean meat producers.',
      align: 'left',
      rect: ['80px','200px','198px','306px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'text-protein',
      text: 'The affected protein in double-muscled cows is myostatin. Myostatin is a signaling protein that tells muscle cells when to stop growing. <br><br>When functioning normally, myostatin binds to a pair of receptors at the muscle cell membrane, transmitting a signal to the inside. The signal shuts down the production of cell building materials, and the cell stops growing.',
      align: 'left',
      rect: ['82px','200px','218px','225px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'text-mutation',
      text: 'A small deletion in the coding sequence of the myostatin gene shifts the reading frame, making an early or \"premature\" stop codon. Only a small piece of the protein is made. Cell communication breaks down: muscle cells don\'t receive the signal to stop growing.',
      align: 'left',
      rect: ['82px','200px','198px','225px','auto','auto']
   },
   {
      type: 'rect',
      rect: ['71px','86px','97px','32px','auto','auto'],
      display: 'none',
      id: 'button-trait',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(61,61,61,0.00)']
   },
   {
      type: 'rect',
      rect: ['168px','86px','97px','32px','auto','auto'],
      display: 'none',
      id: 'button-protein',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(61,61,61,0.00)']
   },
   {
      type: 'rect',
      rect: ['265px','86px','97px','32px','auto','auto'],
      display: 'none',
      id: 'button-mutation',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(61,61,61,0.00)']
   },
   {
      type: 'rect',
      rect: ['362px','86px','218px','32px','auto','auto'],
      display: 'none',
      id: 'button-examples',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(61,61,61,0.00)']
   },
   {
      type: 'rect',
      rect: ['580px','86px','249px','32px','auto','auto'],
      display: 'none',
      id: 'button-variation',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(61,61,61,0.00)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'text-examples',
      text: 'All vertebrates have the myostatin gene, including fish, birds, and sheep. Researchers made a \"mighty mouse\" in the lab by removing its myostatin gene. <br><br>Double-muscled \"bully\" whippets make no functional myostatin protein. Whippets with half the normal amount of myostatin protein look average, but they are fast sprinters in competitive races. People, too, can inherit double muscles.',
      align: 'left',
      rect: ['82px','200px','232px','312px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'text-proteinCopy3',
      text: 'Variation. <br><br>Double-muscled cattle are generally healthy. <br><br>In both animals and people, more-subtle variations in the myostatin gene influence differences in muscle size and athletic performance.',
      align: 'left',
      rect: ['82px','200px','198px','225px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',20,'rgba(89,89,89,1.00)','700','none',''],
      type: 'text',
      text: 'Double-muscled cattle',
      id: 'Text3Copy2',
      opacity: 1,
      align: 'center',
      rect: ['20px','219px','196px','auto','auto','auto']
   },
   {
      type: 'image',
      id: 'bull-white',
      opacity: 1,
      rect: ['259px','257px','158px','105px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bull-white.jpg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['331px','148px','481px','330px','auto','auto'],
      id: 'myostatin-protein',
      fill: ['rgba(0,0,0,0)','images/myostatin-protein.jpg','0px','0px']
   },
   {
      type: 'image',
      rect: ['336px','150px','481px','332px','auto','auto'],
      id: 'myostatin-dna',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/myostatin-dna.jpg','0px','0px']
   },
   {
      id: 'closeCopy',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['785px','122px','auto','auto','auto','auto']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['363px','184px','397px','344px','auto','auto'],
      id: 'muscular',
      fill: ['rgba(0,0,0,0)','images/muscular.jpg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['361px','200px','421px','250px','auto','auto'],
      id: 'myostatin-ex',
      fill: ['rgba(0,0,0,0)','images/myostatin-ex.jpg','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'closeCopy',
      symbolName: 'close'
   }   ]
   },
   states: {
      "Base State": {
         "${_button-trait}": [
            ["style", "top", '86px'],
            ["color", "background-color", 'rgba(61,61,61,0.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "display", 'none']
         ],
         "${_text-examples}": [
            ["style", "top", '200px'],
            ["style", "height", '312px'],
            ["style", "display", 'none'],
            ["style", "left", '82px'],
            ["style", "width", '232px']
         ],
         "${_label-mutation}": [
            ["style", "top", '126px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "left", '265px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '97px']
         ],
         "${_myostatin-dna}": [
            ["style", "top", '150px'],
            ["style", "opacity", '1'],
            ["style", "left", '336px'],
            ["style", "display", 'none']
         ],
         "${_myostatin-ex}": [
            ["style", "top", '200px'],
            ["style", "display", 'none'],
            ["style", "height", '250px'],
            ["style", "left", '361px'],
            ["style", "width", '421px']
         ],
         "${_text-trait}": [
            ["style", "line-height", '20px'],
            ["color", "color", 'rgba(80,80,80,1)'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '80px'],
            ["style", "font-size", '16px'],
            ["style", "top", '200px'],
            ["style", "text-align", 'left'],
            ["style", "height", '306px'],
            ["style", "opacity", '0'],
            ["style", "display", 'none'],
            ["style", "width", '198px']
         ],
         "${_Text5}": [
            ["style", "top", '8px'],
            ["style", "font-size", '20px'],
            ["style", "line-height", '20px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '194px']
         ],
         "${_label-trait}": [
            ["style", "top", '126px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "left", '71px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '97px']
         ],
         "${_bkgd-variation}": [
            ["color", "background-color", 'rgba(169,169,169,1)'],
            ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '580px'],
            ["style", "width", '249px'],
            ["style", "top", '119px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'none'],
            ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_button-variation}": [
            ["color", "background-color", 'rgba(61,61,61,0)'],
            ["style", "top", '86px'],
            ["style", "display", 'none'],
            ["style", "left", '580px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '249px']
         ],
         "${_button-examples}": [
            ["color", "background-color", 'rgba(61,61,61,0)'],
            ["style", "top", '86px'],
            ["style", "display", 'none'],
            ["style", "left", '362px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '218px']
         ],
         "${symbolSelector}": [
            ["style", "height", '600px'],
            ["style", "width", '900px']
         ],
         "${_bkgd-examples}": [
            ["color", "background-color", 'rgba(169,169,169,1)'],
            ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '218px'],
            ["style", "top", '119px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'none'],
            ["style", "left", '362px']
         ],
         "${_myostatin-protein}": [
            ["style", "top", '148px'],
            ["style", "left", '331px'],
            ["style", "display", 'none']
         ],
         "${_closeCopy}": [
            ["style", "top", '122px'],
            ["style", "opacity", '0'],
            ["style", "left", '785px'],
            ["style", "cursor", 'pointer']
         ],
         "${_bkgd-mutation}": [
            ["color", "background-color", 'rgba(169,169,169,1)'],
            ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '265px'],
            ["style", "width", '97px'],
            ["style", "top", '119px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'none'],
            ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_black_bkgd}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(61,61,61,1.00)'],
            ["style", "height", '600px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '900px']
         ],
         "${_text-proteinCopy3}": [
            ["style", "top", '200px'],
            ["style", "height", '225px'],
            ["style", "display", 'none'],
            ["style", "left", '82px'],
            ["style", "width", '198px']
         ],
         "${_label-variation}": [
            ["style", "top", '126px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "height", '17px'],
            ["style", "left", '580px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '249px']
         ],
         "${_text-mutation}": [
            ["style", "top", '200px'],
            ["style", "height", '225px'],
            ["style", "display", 'none'],
            ["style", "left", '82px'],
            ["style", "width", '198px']
         ],
         "${_bull-white}": [
            ["style", "top", '257px'],
            ["style", "display", 'block'],
            ["style", "height", '105px'],
            ["style", "opacity", '1'],
            ["style", "left", '259px'],
            ["style", "width", '158px']
         ],
         "${_Text3Copy2}": [
            ["style", "line-height", '20px'],
            ["color", "color", 'rgba(89,89,89,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '241px'],
            ["style", "width", '196px'],
            ["style", "top", '217px'],
            ["style", "text-align", 'center'],
            ["style", "opacity", '1'],
            ["style", "font-size", '20px']
         ],
         "${_button-mutation}": [
            ["style", "top", '86px'],
            ["style", "display", 'none'],
            ["style", "left", '265px'],
            ["style", "cursor", 'pointer'],
            ["color", "background-color", 'rgba(61,61,61,0)']
         ],
         "${_label-examples}": [
            ["style", "top", '126px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "height", '17px'],
            ["style", "left", '362px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '218px']
         ],
         "${_bkgd-protein}": [
            ["color", "background-color", 'rgba(169,169,169,1)'],
            ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '168px'],
            ["style", "width", '97px'],
            ["style", "top", '119px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'none'],
            ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_bkgd-trait}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '71px'],
            ["style", "width", '97px'],
            ["style", "top", '119px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'none'],
            ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_button-protein}": [
            ["style", "top", '86px'],
            ["style", "display", 'none'],
            ["style", "left", '168px'],
            ["style", "cursor", 'pointer'],
            ["color", "background-color", 'rgba(61,61,61,0)']
         ],
         "${_muscular}": [
            ["style", "top", '184px'],
            ["style", "display", 'none'],
            ["style", "height", '344px'],
            ["style", "left", '363px'],
            ["style", "width", '397px']
         ],
         "${_text-traitCopy}": [
            ["style", "line-height", '20px'],
            ["color", "color", 'rgba(80,80,80,1)'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '82px'],
            ["style", "font-size", '16px'],
            ["style", "top", '187px'],
            ["style", "height", '306px'],
            ["style", "width", '198px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0']
         ],
         "${_white_bkgd}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["subproperty", "boxShadow.blur", '7px'],
            ["style", "opacity", '1'],
            ["style", "left", '240px'],
            ["style", "width", '195px'],
            ["style", "top", '209px'],
            ["subproperty", "boxShadow.spread", '0px'],
            ["style", "height", '153px'],
            ["subproperty", "boxShadow.offsetV", '2px'],
            ["subproperty", "boxShadow.offsetH", '2px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.296875)']
         ],
         "${_label-protein}": [
            ["style", "top", '126px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "left", '168px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '97px']
         ],
         "${_text-protein}": [
            ["style", "top", '200px'],
            ["style", "display", 'none'],
            ["style", "height", '225px'],
            ["style", "left", '82px'],
            ["style", "width", '218px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4000,
         autoPlay: true,
         labels: {
            "trait": 2000,
            "protein": 2500,
            "mutation": 3000,
            "examples": 3500,
            "variation": 4000
         },
         timeline: [
            { id: "eid120", tween: [ "style", "${_text-protein}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
            { id: "eid121", tween: [ "style", "${_text-protein}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
            { id: "eid96", tween: [ "color", "${_bkgd-protein}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 2000, duration: 0 },
            { id: "eid97", tween: [ "color", "${_bkgd-protein}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 2500, duration: 0 },
            { id: "eid98", tween: [ "color", "${_bkgd-protein}", "background-color", 'rgba(170,170,170,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 3000, duration: 0 },
            { id: "eid200", tween: [ "style", "${_bull-white}", "top", '229px', { fromValue: '257px'}], position: 500, duration: 1000 },
            { id: "eid141", tween: [ "style", "${_Text3Copy2}", "top", '144px', { fromValue: '217px'}], position: 500, duration: 1000 },
            { id: "eid50", tween: [ "style", "${_bkgd-examples}", "top", '86px', { fromValue: '119px'}], position: 1500, duration: 500 },
            { id: "eid42", tween: [ "style", "${_label-mutation}", "top", '93px', { fromValue: '126px'}], position: 1500, duration: 500 },
            { id: "eid65", tween: [ "style", "${_label-protein}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid54", tween: [ "style", "${_label-protein}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid204", tween: [ "style", "${_bull-white}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
            { id: "eid68", tween: [ "style", "${_bkgd-examples}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid57", tween: [ "style", "${_bkgd-examples}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid40", tween: [ "style", "${_bkgd-trait}", "top", '86px', { fromValue: '119px'}], position: 1500, duration: 500 },
            { id: "eid104", tween: [ "color", "${_bkgd-examples}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 2000, duration: 0 },
            { id: "eid105", tween: [ "color", "${_bkgd-examples}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 3500, duration: 0 },
            { id: "eid106", tween: [ "color", "${_bkgd-examples}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 4000, duration: 0 },
            { id: "eid84", tween: [ "style", "${_button-mutation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid89", tween: [ "style", "${_button-mutation}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid15", tween: [ "style", "${_white_bkgd}", "top", '118px', { fromValue: '209px'}], position: 500, duration: 1000 },
            { id: "eid36", tween: [ "style", "${_bkgd-protein}", "top", '86px', { fromValue: '119px'}], position: 1500, duration: 500 },
            { id: "eid126", tween: [ "style", "${_text-examples}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
            { id: "eid127", tween: [ "style", "${_text-examples}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
            { id: "eid29", tween: [ "style", "${_closeCopy}", "opacity", '1', { fromValue: '0.000000'}], position: 1500, duration: 500 },
            { id: "eid128", tween: [ "style", "${_text-proteinCopy3}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid199", tween: [ "style", "${_bull-white}", "left", '314px', { fromValue: '259px'}], position: 500, duration: 1000 },
            { id: "eid34", tween: [ "style", "${_label-examples}", "top", '93px', { fromValue: '126px'}], position: 1500, duration: 500 },
            { id: "eid101", tween: [ "color", "${_bkgd-mutation}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 2000, duration: 0 },
            { id: "eid102", tween: [ "color", "${_bkgd-mutation}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 3000, duration: 0 },
            { id: "eid103", tween: [ "color", "${_bkgd-mutation}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 3500, duration: 0 },
            { id: "eid85", tween: [ "style", "${_button-protein}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid90", tween: [ "style", "${_button-protein}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid207", tween: [ "style", "${_myostatin-dna}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid209", tween: [ "style", "${_myostatin-dna}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0 },
            { id: "eid67", tween: [ "style", "${_label-mutation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid56", tween: [ "style", "${_label-mutation}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid66", tween: [ "style", "${_bkgd-mutation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid55", tween: [ "style", "${_bkgd-mutation}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid61", tween: [ "style", "${_label-variation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid60", tween: [ "style", "${_label-variation}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid86", tween: [ "style", "${_button-trait}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid91", tween: [ "style", "${_button-trait}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid206", tween: [ "style", "${_myostatin-protein}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
            { id: "eid208", tween: [ "style", "${_myostatin-protein}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
            { id: "eid69", tween: [ "style", "${_label-examples}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid58", tween: [ "style", "${_label-examples}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid32", tween: [ "style", "${_bkgd-mutation}", "top", '86px', { fromValue: '119px'}], position: 1500, duration: 500 },
            { id: "eid99", tween: [ "color", "${_bkgd-trait}", "background-color", 'rgba(255,255,255,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 2000, duration: 0 },
            { id: "eid100", tween: [ "color", "${_bkgd-trait}", "background-color", 'rgba(170,170,170,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 2500, duration: 0 },
            { id: "eid64", tween: [ "style", "${_bkgd-protein}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid53", tween: [ "style", "${_bkgd-protein}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid203", tween: [ "style", "${_bull-white}", "width", '450px', { fromValue: '158px'}], position: 500, duration: 1000 },
            { id: "eid70", tween: [ "style", "${_bkgd-variation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid59", tween: [ "style", "${_bkgd-variation}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid124", tween: [ "style", "${_text-mutation}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid125", tween: [ "style", "${_text-mutation}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0 },
            { id: "eid82", tween: [ "style", "${_button-variation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid87", tween: [ "style", "${_button-variation}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid46", tween: [ "style", "${_label-trait}", "top", '93px', { fromValue: '126px'}], position: 1500, duration: 500 },
            { id: "eid381", tween: [ "style", "${_muscular}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid38", tween: [ "style", "${_label-variation}", "top", '94px', { fromValue: '126px'}], position: 1500, duration: 500 },
            { id: "eid63", tween: [ "style", "${_bkgd-trait}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid52", tween: [ "style", "${_bkgd-trait}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid140", tween: [ "style", "${_Text3Copy2}", "left", '81px', { fromValue: '241px'}], position: 500, duration: 1000 },
            { id: "eid17", tween: [ "style", "${_white_bkgd}", "left", '68px', { fromValue: '240px'}], position: 500, duration: 1000 },
            { id: "eid14", tween: [ "style", "${_white_bkgd}", "height", '410px', { fromValue: '153px'}], position: 500, duration: 1000 },
            { id: "eid107", tween: [ "color", "${_bkgd-variation}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 2000, duration: 0 },
            { id: "eid108", tween: [ "color", "${_bkgd-variation}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 4000, duration: 0 },
            { id: "eid202", tween: [ "style", "${_bull-white}", "height", '299px', { fromValue: '105px'}], position: 500, duration: 1000 },
            { id: "eid30", tween: [ "style", "${_text-trait}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500 },
            { id: "eid83", tween: [ "style", "${_button-examples}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid88", tween: [ "style", "${_button-examples}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid48", tween: [ "style", "${_label-protein}", "top", '93px', { fromValue: '126px'}], position: 1500, duration: 500 },
            { id: "eid382", tween: [ "style", "${_myostatin-ex}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
            { id: "eid383", tween: [ "style", "${_myostatin-ex}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
            { id: "eid25", tween: [ "style", "${_black_bkgd}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid16", tween: [ "style", "${_white_bkgd}", "width", '764px', { fromValue: '195px'}], position: 500, duration: 1000 },
            { id: "eid114", tween: [ "style", "${_text-trait}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid116", tween: [ "style", "${_text-trait}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
            { id: "eid62", tween: [ "style", "${_label-trait}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid51", tween: [ "style", "${_label-trait}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid44", tween: [ "style", "${_bkgd-variation}", "top", '86px', { fromValue: '119px'}], position: 1500, duration: 500 }         ]
      }
   }
},
"cats-info": {
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
      type: 'rect',
      id: 'black_bkgd',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','0px','900px','600px','auto','auto'],
      fill: ['rgba(61,61,61,1.00)']
   },
   {
      type: 'rect',
      borderRadius: ['4px 4px','4px 4px','0px 0px','0px 0px'],
      rect: ['71px','86px','97px','32px','auto','auto'],
      id: 'bkgd-trait',
      stroke: [0,'rgb(79, 79, 79)','none'],
      display: 'none',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'text',
      rect: ['71px','93px','97px','17px','auto','auto'],
      align: 'center',
      id: 'label-trait',
      display: 'none',
      text: 'Trait',
      cursor: ['pointer'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal']
   },
   {
      type: 'rect',
      borderRadius: ['4px 4px','4px 4px','0px 0px','0px 0px'],
      rect: ['168px','86px','97px','32px','auto','auto'],
      id: 'bkgd-protein',
      stroke: [0,'rgb(79, 79, 79)','none'],
      display: 'none',
      fill: ['rgba(169,169,169,1.00)']
   },
   {
      type: 'text',
      rect: ['168px','93px','97px','17px','auto','auto'],
      align: 'center',
      id: 'label-protein',
      display: 'none',
      text: 'Protein',
      cursor: ['pointer'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal']
   },
   {
      type: 'rect',
      borderRadius: ['4px 4px','4px 4px','0px 0px','0px 0px'],
      rect: ['265px','86px','97px','32px','auto','auto'],
      id: 'bkgd-mutation',
      stroke: [0,'rgb(79, 79, 79)','none'],
      display: 'none',
      fill: ['rgba(169,169,169,1.00)']
   },
   {
      type: 'text',
      rect: ['265px','93px','97px','17px','auto','auto'],
      align: 'center',
      id: 'label-mutation',
      display: 'none',
      text: 'DNA',
      cursor: ['pointer'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal']
   },
   {
      type: 'rect',
      borderRadius: ['4px 4px','4px 4px','0px 0px','0px 0px'],
      rect: ['362px','86px','218px','32px','auto','auto'],
      id: 'bkgd-examples',
      stroke: [0,'rgb(79, 79, 79)','none'],
      display: 'none',
      fill: ['rgba(169,169,169,1.00)']
   },
   {
      type: 'text',
      rect: ['362px','93px','218px','17px','auto','auto'],
      align: 'center',
      id: 'label-examples',
      display: 'none',
      text: 'Examples in Other Species',
      cursor: ['pointer'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal']
   },
   {
      type: 'rect',
      borderRadius: ['4px 4px','4px 4px','0px 0px','0px 0px'],
      rect: ['580px','86px','249px','32px','auto','auto'],
      id: 'bkgd-variation',
      stroke: [0,'rgb(79, 79, 79)','none'],
      display: 'none',
      fill: ['rgba(169,169,169,1.00)']
   },
   {
      type: 'text',
      rect: ['580px','93px','249px','17px','auto','auto'],
      align: 'center',
      id: 'label-variation',
      display: 'none',
      text: 'Variation, Disease, or Both?',
      cursor: ['pointer'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal']
   },
   {
      rect: ['23px','209px','195px','153px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)'],
      type: 'rect',
      id: 'white_bkgd',
      stroke: [0,'rgb(0, 0, 0)','none'],
      opacity: 1,
      boxShadow: ['',2,2,7,0,'rgba(0,0,0,0.30)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','400','none','normal'],
      type: 'text',
      display: 'none',
      id: 'text-trait',
      text: 'Most cats have five toes on each front paw, but this cat has seven. The extra toes are on the thumb side, shaping the paw like a mitten. ',
      align: 'left',
      rect: ['82px','187px','198px','148px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'text-protein',
      text: 'The affected protein in extra-toed cats is sonic hedgehog (SHH). SHH is a signaling protein normally made by cells on just the pinky side of the developing foot. As the toes form, their number and identity depend on their exposure to SHH protein.<br><br>Cells exposed to the most SHH become the pinkie toe. Cells exposed to intermediate levels of SHH become ring or middle toes. And cells with the least exposure to SHH become the index toe.',
      align: 'left',
      rect: ['82px','188px','232px','225px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'text-mutation',
      text: 'A single-base change outside the protein-coding sequence of the Shh gene makes a new switch. This switch turns on the Shh gene on the other side of the foot.  <br><br>Mitten cats make sonic hedgehog (SHH) protein on BOTH sides of the developing foot, causing them to grow extra toes. ',
      align: 'left',
      rect: ['82px','188px','198px','225px','auto','auto']
   },
   {
      type: 'rect',
      rect: ['71px','86px','97px','32px','auto','auto'],
      display: 'none',
      id: 'button-trait',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(61,61,61,0.00)']
   },
   {
      type: 'rect',
      rect: ['168px','86px','97px','32px','auto','auto'],
      display: 'none',
      id: 'button-protein',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(61,61,61,0.00)']
   },
   {
      type: 'rect',
      rect: ['265px','86px','97px','32px','auto','auto'],
      display: 'none',
      id: 'button-mutation',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(61,61,61,0.00)']
   },
   {
      type: 'rect',
      rect: ['362px','86px','218px','32px','auto','auto'],
      display: 'none',
      id: 'button-examples',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(61,61,61,0.00)']
   },
   {
      type: 'rect',
      rect: ['580px','86px','249px','32px','auto','auto'],
      display: 'none',
      id: 'button-variation',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(61,61,61,0.00)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'text-examples',
      text: 'All vertebrates have the sonic hedgehog (Shh) gene. Similar changes to Shh in mouse, dog, and chicken can cause extra toes to form. A variation in Shh can cause people to be born with two thumbs. ',
      align: 'left',
      rect: ['82px','188px','198px','312px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'text-proteinCopy3',
      text: 'Variation. <br><br>Cats with extra toes are generally healthy. They might even have an advantage: Extra-toed (or polydactyl) cats can grasp things with increased dexterity. <br><br>However, SHH is essential for proper formation of many tissues, including brain, bone, and gut. Most babies with defects that decrease the gene\'s ability to function either die before birth or are born with severe problems.',
      align: 'left',
      rect: ['82px','188px','239px','225px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',20,'rgba(89,89,89,1.00)','700','none',''],
      type: 'text',
      text: 'Extra-toed cats',
      id: 'Text3Copy2',
      opacity: 1,
      align: 'center',
      rect: ['20px','219px','196px','auto','auto','auto']
   },
   {
      type: 'image',
      id: 'mitten-cat2',
      opacity: 1,
      rect: ['402px','141px','400px','372px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/mitten-cat.jpg','0px','0px']
   },
   {
      type: 'image',
      rect: ['179px','340px','293px','164px','auto','auto'],
      id: 'mitten-cat-paws',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/mitten-cat-paws.jpg','0px','0px']
   },
   {
      type: 'rect',
      rect: ['179px','340px','289px','161px','auto','auto'],
      display: 'none',
      id: 'Rectangle4',
      stroke: [2,'rgba(67,67,67,1.00)','solid'],
      opacity: 1,
      fill: ['rgba(61,61,61,0.00)']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['385px','196px','376px','254px','auto','auto'],
      id: 'shh-protein',
      fill: ['rgba(0,0,0,0)','images/shh-protein.jpg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['305px','159px','480px','340px','auto','auto'],
      id: 'shh-dna',
      fill: ['rgba(0,0,0,0)','images/shh-dna.jpg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['401px','191px','286px','337px','auto','auto'],
      id: 'shh-other',
      fill: ['rgba(0,0,0,0)','images/shh-other.jpg','0px','0px']
   },
   {
      id: 'closeCopy',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['785px','122px','auto','auto','auto','auto']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['407px','150px','350px','378px','auto','auto'],
      id: 'cat-ball',
      fill: ['rgba(0,0,0,0)','images/cat-ball.jpg','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'closeCopy',
      symbolName: 'close'
   }   ]
   },
   states: {
      "Base State": {
         "${_button-trait}": [
            ["style", "top", '86px'],
            ["color", "background-color", 'rgba(61,61,61,0.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "display", 'none']
         ],
         "${_text-protein}": [
            ["style", "top", '188px'],
            ["style", "display", 'none'],
            ["style", "height", '225px'],
            ["style", "left", '82px'],
            ["style", "width", '232px']
         ],
         "${_text-trait}": [
            ["style", "line-height", '20px'],
            ["color", "color", 'rgba(80,80,80,1)'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '82px'],
            ["style", "font-size", '16px'],
            ["style", "top", '187px'],
            ["style", "text-align", 'left'],
            ["style", "height", '148px'],
            ["style", "opacity", '0'],
            ["style", "display", 'none'],
            ["style", "width", '198px']
         ],
         "${_label-trait}": [
            ["style", "top", '126px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "left", '71px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '97px']
         ],
         "${_Rectangle4}": [
            ["color", "background-color", 'rgba(61,61,61,0.00)'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '143px'],
            ["style", "top", '431px'],
            ["style", "left", '429px'],
            ["style", "height", '79px'],
            ["color", "border-color", 'rgba(67,67,67,1.00)'],
            ["style", "opacity", '1'],
            ["style", "display", 'none']
         ],
         "${_shh-other}": [
            ["style", "top", '191px'],
            ["style", "left", '401px'],
            ["style", "display", 'none']
         ],
         "${_text-mutation}": [
            ["style", "top", '188px'],
            ["style", "height", '225px'],
            ["style", "display", 'none'],
            ["style", "left", '82px'],
            ["style", "width", '198px']
         ],
         "${_bkgd-protein}": [
            ["color", "background-color", 'rgba(169,169,169,1)'],
            ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '168px'],
            ["style", "width", '97px'],
            ["style", "top", '119px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'none'],
            ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_text-traitCopy}": [
            ["style", "line-height", '20px'],
            ["color", "color", 'rgba(80,80,80,1)'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '82px'],
            ["style", "font-size", '16px'],
            ["style", "top", '187px'],
            ["style", "height", '306px'],
            ["style", "width", '198px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0']
         ],
         "${_label-protein}": [
            ["style", "top", '126px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "left", '168px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '97px']
         ],
         "${_shh-dna}": [
            ["style", "top", '159px'],
            ["style", "left", '305px'],
            ["style", "display", 'none']
         ],
         "${_text-examples}": [
            ["style", "top", '188px'],
            ["style", "height", '312px'],
            ["style", "display", 'none'],
            ["style", "left", '82px'],
            ["style", "width", '198px']
         ],
         "${_white_bkgd}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["subproperty", "boxShadow.blur", '7px'],
            ["style", "opacity", '1'],
            ["style", "left", '460px'],
            ["style", "width", '195px'],
            ["style", "top", '210px'],
            ["subproperty", "boxShadow.spread", '0px'],
            ["style", "height", '153px'],
            ["subproperty", "boxShadow.offsetV", '2px'],
            ["subproperty", "boxShadow.offsetH", '2px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.296875)']
         ],
         "${_button-variation}": [
            ["color", "background-color", 'rgba(61,61,61,0)'],
            ["style", "top", '86px'],
            ["style", "display", 'none'],
            ["style", "left", '580px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '249px']
         ],
         "${_button-examples}": [
            ["color", "background-color", 'rgba(61,61,61,0)'],
            ["style", "top", '86px'],
            ["style", "display", 'none'],
            ["style", "left", '362px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '218px']
         ],
         "${symbolSelector}": [
            ["style", "height", '600px'],
            ["style", "width", '900px']
         ],
         "${_bkgd-examples}": [
            ["color", "background-color", 'rgba(169,169,169,1)'],
            ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '218px'],
            ["style", "top", '119px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'none'],
            ["style", "left", '362px']
         ],
         "${_shh-protein}": [
            ["style", "top", '196px'],
            ["style", "left", '385px'],
            ["style", "display", 'none']
         ],
         "${_mitten-cat-paws}": [
            ["style", "top", '431px'],
            ["style", "display", 'none'],
            ["style", "height", '82px'],
            ["style", "opacity", '1'],
            ["style", "left", '429px'],
            ["style", "width", '147px']
         ],
         "${_text-proteinCopy3}": [
            ["style", "top", '188px'],
            ["style", "height", '316px'],
            ["style", "display", 'none'],
            ["style", "left", '82px'],
            ["style", "width", '239px']
         ],
         "${_bkgd-variation}": [
            ["color", "background-color", 'rgba(169,169,169,1)'],
            ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '580px'],
            ["style", "width", '249px'],
            ["style", "top", '119px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'none'],
            ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_mitten-cat2}": [
            ["style", "top", '242px'],
            ["style", "display", 'block'],
            ["style", "height", '120px'],
            ["style", "opacity", '1'],
            ["style", "left", '505px'],
            ["style", "width", '128px']
         ],
         "${_label-variation}": [
            ["style", "top", '126px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "height", '17px'],
            ["style", "left", '580px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '249px']
         ],
         "${_Text3Copy2}": [
            ["style", "top", '217px'],
            ["style", "font-size", '20px'],
            ["style", "text-align", 'center'],
            ["style", "opacity", '1'],
            ["color", "color", 'rgba(89,89,89,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '460px'],
            ["style", "width", '196px']
         ],
         "${_label-mutation}": [
            ["style", "top", '126px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "left", '265px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '97px']
         ],
         "${_button-protein}": [
            ["style", "top", '86px'],
            ["style", "display", 'none'],
            ["style", "left", '168px'],
            ["style", "cursor", 'pointer'],
            ["color", "background-color", 'rgba(61,61,61,0)']
         ],
         "${_bkgd-trait}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '71px'],
            ["style", "width", '97px'],
            ["style", "top", '119px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'none'],
            ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_closeCopy}": [
            ["style", "top", '122px'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "left", '785px'],
            ["style", "cursor", 'pointer']
         ],
         "${_button-mutation}": [
            ["style", "top", '86px'],
            ["style", "display", 'none'],
            ["style", "left", '265px'],
            ["style", "cursor", 'pointer'],
            ["color", "background-color", 'rgba(61,61,61,0)']
         ],
         "${_cat-ball}": [
            ["style", "top", '150px'],
            ["style", "left", '407px'],
            ["style", "display", 'none']
         ],
         "${_bkgd-mutation}": [
            ["color", "background-color", 'rgba(169,169,169,1)'],
            ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '265px'],
            ["style", "width", '97px'],
            ["style", "top", '119px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'none'],
            ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_black_bkgd}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(61,61,61,1.00)'],
            ["style", "height", '600px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '900px']
         ],
         "${_label-examples}": [
            ["style", "top", '126px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "height", '17px'],
            ["style", "left", '362px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '218px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4000,
         autoPlay: true,
         labels: {
            "trait": 2000,
            "protein": 2500,
            "mutation": 3000,
            "examples": 3500,
            "variation": 4000
         },
         timeline: [
            { id: "eid247", tween: [ "style", "${_Rectangle4}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid249", tween: [ "style", "${_Rectangle4}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
            { id: "eid36", tween: [ "style", "${_bkgd-protein}", "top", '86px', { fromValue: '119px'}], position: 1500, duration: 500 },
            { id: "eid62", tween: [ "style", "${_label-trait}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid51", tween: [ "style", "${_label-trait}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid69", tween: [ "style", "${_label-examples}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid58", tween: [ "style", "${_label-examples}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid96", tween: [ "color", "${_bkgd-protein}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 2000, duration: 0 },
            { id: "eid97", tween: [ "color", "${_bkgd-protein}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 2500, duration: 0 },
            { id: "eid98", tween: [ "color", "${_bkgd-protein}", "background-color", 'rgba(170,170,170,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 3000, duration: 0 },
            { id: "eid212", tween: [ "style", "${_mitten-cat2}", "height", '372px', { fromValue: '120px'}], position: 500, duration: 1000 },
            { id: "eid17", tween: [ "style", "${_white_bkgd}", "left", '68px', { fromValue: '460px'}], position: 500, duration: 1000 },
            { id: "eid86", tween: [ "style", "${_button-trait}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid91", tween: [ "style", "${_button-trait}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid252", tween: [ "style", "${_shh-protein}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
            { id: "eid253", tween: [ "style", "${_shh-protein}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
            { id: "eid61", tween: [ "style", "${_label-variation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid60", tween: [ "style", "${_label-variation}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid84", tween: [ "style", "${_button-mutation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid89", tween: [ "style", "${_button-mutation}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid65", tween: [ "style", "${_label-protein}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid54", tween: [ "style", "${_label-protein}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid120", tween: [ "style", "${_text-protein}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
            { id: "eid121", tween: [ "style", "${_text-protein}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
            { id: "eid85", tween: [ "style", "${_button-protein}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid90", tween: [ "style", "${_button-protein}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid68", tween: [ "style", "${_bkgd-examples}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid57", tween: [ "style", "${_bkgd-examples}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid40", tween: [ "style", "${_bkgd-trait}", "top", '86px', { fromValue: '119px'}], position: 1500, duration: 500 },
            { id: "eid104", tween: [ "color", "${_bkgd-examples}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 2000, duration: 0 },
            { id: "eid105", tween: [ "color", "${_bkgd-examples}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 3500, duration: 0 },
            { id: "eid106", tween: [ "color", "${_bkgd-examples}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 4000, duration: 0 },
            { id: "eid83", tween: [ "style", "${_button-examples}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid88", tween: [ "style", "${_button-examples}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid384", tween: [ "style", "${_cat-ball}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid246", tween: [ "style", "${_mitten-cat-paws}", "top", '340px', { fromValue: '431px'}], position: 1500, duration: 500 },
            { id: "eid16", tween: [ "style", "${_white_bkgd}", "width", '764px', { fromValue: '195px'}], position: 500, duration: 1000 },
            { id: "eid15", tween: [ "style", "${_white_bkgd}", "top", '118px', { fromValue: '210px'}], position: 500, duration: 1000 },
            { id: "eid82", tween: [ "style", "${_button-variation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid87", tween: [ "style", "${_button-variation}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid107", tween: [ "color", "${_bkgd-variation}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 2000, duration: 0 },
            { id: "eid108", tween: [ "color", "${_bkgd-variation}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 4000, duration: 0 },
            { id: "eid34", tween: [ "style", "${_label-examples}", "top", '93px', { fromValue: '126px'}], position: 1500, duration: 500 },
            { id: "eid236", tween: [ "style", "${_Rectangle4}", "width", '289px', { fromValue: '143px'}], position: 1500, duration: 500 },
            { id: "eid29", tween: [ "style", "${_closeCopy}", "opacity", '1', { fromValue: '0.000000'}], position: 1500, duration: 500 },
            { id: "eid214", tween: [ "style", "${_mitten-cat2}", "top", '141px', { fromValue: '242px'}], position: 500, duration: 1000 },
            { id: "eid140", tween: [ "style", "${_Text3Copy2}", "left", '81px', { fromValue: '460px'}], position: 500, duration: 1000 },
            { id: "eid248", tween: [ "style", "${_mitten-cat-paws}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid250", tween: [ "style", "${_mitten-cat-paws}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
            { id: "eid99", tween: [ "color", "${_bkgd-trait}", "background-color", 'rgba(255,255,255,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 2000, duration: 0 },
            { id: "eid100", tween: [ "color", "${_bkgd-trait}", "background-color", 'rgba(170,170,170,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 2500, duration: 0 },
            { id: "eid234", tween: [ "style", "${_Rectangle4}", "left", '179px', { fromValue: '429px'}], position: 1500, duration: 500 },
            { id: "eid101", tween: [ "color", "${_bkgd-mutation}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 2000, duration: 0 },
            { id: "eid102", tween: [ "color", "${_bkgd-mutation}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 3000, duration: 0 },
            { id: "eid103", tween: [ "color", "${_bkgd-mutation}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 3500, duration: 0 },
            { id: "eid66", tween: [ "style", "${_bkgd-mutation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid55", tween: [ "style", "${_bkgd-mutation}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid242", tween: [ "style", "${_mitten-cat-paws}", "width", '293px', { fromValue: '147px'}], position: 1500, duration: 500 },
            { id: "eid254", tween: [ "style", "${_shh-dna}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid255", tween: [ "style", "${_shh-dna}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0 },
            { id: "eid48", tween: [ "style", "${_label-protein}", "top", '93px', { fromValue: '126px'}], position: 1500, duration: 500 },
            { id: "eid128", tween: [ "style", "${_text-proteinCopy3}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid32", tween: [ "style", "${_bkgd-mutation}", "top", '86px', { fromValue: '119px'}], position: 1500, duration: 500 },
            { id: "eid30", tween: [ "style", "${_text-trait}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500 },
            { id: "eid64", tween: [ "style", "${_bkgd-protein}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid53", tween: [ "style", "${_bkgd-protein}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid218", tween: [ "style", "${_mitten-cat2}", "left", '402px', { fromValue: '505px'}], position: 500, duration: 1000 },
            { id: "eid70", tween: [ "style", "${_bkgd-variation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid59", tween: [ "style", "${_bkgd-variation}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid124", tween: [ "style", "${_text-mutation}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid125", tween: [ "style", "${_text-mutation}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0 },
            { id: "eid126", tween: [ "style", "${_text-examples}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
            { id: "eid127", tween: [ "style", "${_text-examples}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
            { id: "eid67", tween: [ "style", "${_label-mutation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid56", tween: [ "style", "${_label-mutation}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid240", tween: [ "style", "${_mitten-cat-paws}", "left", '179px', { fromValue: '429px'}], position: 1500, duration: 500 },
            { id: "eid38", tween: [ "style", "${_label-variation}", "top", '94px', { fromValue: '126px'}], position: 1500, duration: 500 },
            { id: "eid63", tween: [ "style", "${_bkgd-trait}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid52", tween: [ "style", "${_bkgd-trait}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid46", tween: [ "style", "${_label-trait}", "top", '93px', { fromValue: '126px'}], position: 1500, duration: 500 },
            { id: "eid141", tween: [ "style", "${_Text3Copy2}", "top", '144px', { fromValue: '217px'}], position: 500, duration: 1000 },
            { id: "eid14", tween: [ "style", "${_white_bkgd}", "height", '410px', { fromValue: '153px'}], position: 500, duration: 1000 },
            { id: "eid244", tween: [ "style", "${_Rectangle4}", "top", '340px', { fromValue: '431px'}], position: 1500, duration: 500 },
            { id: "eid232", tween: [ "style", "${_Rectangle4}", "height", '161px', { fromValue: '79px'}], position: 1500, duration: 500 },
            { id: "eid238", tween: [ "style", "${_mitten-cat-paws}", "height", '164px', { fromValue: '82px'}], position: 1500, duration: 500 },
            { id: "eid256", tween: [ "style", "${_shh-other}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
            { id: "eid258", tween: [ "style", "${_shh-other}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
            { id: "eid50", tween: [ "style", "${_bkgd-examples}", "top", '86px', { fromValue: '119px'}], position: 1500, duration: 500 },
            { id: "eid42", tween: [ "style", "${_label-mutation}", "top", '93px', { fromValue: '126px'}], position: 1500, duration: 500 },
            { id: "eid25", tween: [ "style", "${_black_bkgd}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid251", tween: [ "style", "${_mitten-cat2}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
            { id: "eid114", tween: [ "style", "${_text-trait}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid116", tween: [ "style", "${_text-trait}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
            { id: "eid216", tween: [ "style", "${_mitten-cat2}", "width", '400px', { fromValue: '128px'}], position: 500, duration: 1000 },
            { id: "eid44", tween: [ "style", "${_bkgd-variation}", "top", '86px', { fromValue: '119px'}], position: 1500, duration: 500 }         ]
      }
   }
},
"curly-info": {
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
      type: 'rect',
      id: 'black_bkgd',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','0px','900px','600px','auto','auto'],
      fill: ['rgba(61,61,61,1.00)']
   },
   {
      type: 'rect',
      borderRadius: ['4px 4px','4px 4px','0px 0px','0px 0px'],
      rect: ['71px','86px','97px','32px','auto','auto'],
      id: 'bkgd-trait',
      stroke: [0,'rgb(79, 79, 79)','none'],
      display: 'none',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'text',
      rect: ['71px','93px','97px','17px','auto','auto'],
      align: 'center',
      id: 'label-trait',
      display: 'none',
      text: 'Trait',
      cursor: ['pointer'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal']
   },
   {
      type: 'rect',
      borderRadius: ['4px 4px','4px 4px','0px 0px','0px 0px'],
      rect: ['168px','86px','97px','32px','auto','auto'],
      id: 'bkgd-protein',
      stroke: [0,'rgb(79, 79, 79)','none'],
      display: 'none',
      fill: ['rgba(169,169,169,1.00)']
   },
   {
      type: 'text',
      rect: ['168px','93px','97px','17px','auto','auto'],
      align: 'center',
      id: 'label-protein',
      display: 'none',
      text: 'Protein',
      cursor: ['pointer'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal']
   },
   {
      type: 'rect',
      borderRadius: ['4px 4px','4px 4px','0px 0px','0px 0px'],
      rect: ['265px','86px','97px','32px','auto','auto'],
      id: 'bkgd-mutation',
      stroke: [0,'rgb(79, 79, 79)','none'],
      display: 'none',
      fill: ['rgba(169,169,169,1.00)']
   },
   {
      type: 'text',
      rect: ['265px','93px','97px','17px','auto','auto'],
      align: 'center',
      id: 'label-mutation',
      display: 'none',
      text: 'DNA',
      cursor: ['pointer'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal']
   },
   {
      type: 'rect',
      borderRadius: ['4px 4px','4px 4px','0px 0px','0px 0px'],
      rect: ['362px','86px','218px','32px','auto','auto'],
      id: 'bkgd-examples',
      stroke: [0,'rgb(79, 79, 79)','none'],
      display: 'none',
      fill: ['rgba(169,169,169,1.00)']
   },
   {
      type: 'text',
      rect: ['362px','93px','218px','17px','auto','auto'],
      align: 'center',
      id: 'label-examples',
      display: 'none',
      text: 'Examples in Other Species',
      cursor: ['pointer'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal']
   },
   {
      type: 'rect',
      borderRadius: ['4px 4px','4px 4px','0px 0px','0px 0px'],
      rect: ['580px','86px','249px','32px','auto','auto'],
      id: 'bkgd-variation',
      stroke: [0,'rgb(79, 79, 79)','none'],
      display: 'none',
      fill: ['rgba(169,169,169,1.00)']
   },
   {
      type: 'text',
      rect: ['580px','93px','249px','17px','auto','auto'],
      align: 'center',
      id: 'label-variation',
      display: 'none',
      text: 'Variation, Disease, or Both?',
      cursor: ['pointer'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal']
   },
   {
      rect: ['23px','209px','195px','153px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)'],
      type: 'rect',
      id: 'white_bkgd',
      stroke: [0,'rgb(0, 0, 0)','none'],
      opacity: 1,
      boxShadow: ['',2,2,7,0,'rgba(0,0,0,0.30)']
   },
   {
      id: 'closeCopy',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['785px','122px','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','400','none','normal'],
      type: 'text',
      display: 'none',
      id: 'text-trait',
      text: 'Naturally curly hair is a trait shared by many dog breeds,  including poodles, spaniels, terriers, and water dogs. <br><br>This poodle does not shed its fur like other breeds do, and unless it is cut, its hair will keep growing indefinitely.',
      align: 'left',
      rect: ['82px','187px','198px','306px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'text-protein',
      text: 'The affected protein in curly-haired dogs is keratin71. Keratin71 is made only in hair follicles, the tiny holes from which each piece of hair grows. <br><br>Individual keratin proteins normally link together into strong threads that form a web inside cells. When taut, this web supports the shape of the hair follicle. The follicles anchor the growing hair and mold it into straight, round strands.',
      align: 'left',
      rect: ['82px','188px','198px','225px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'text-mutation',
      text: 'A two base substitution in the keratin71 gene changes a single amino acid. The new amino acid changes the shape of the protein. Individual keratin proteins cannot link together to form the fibers that would normally support the hair follicle. <br><br>The misshapen follicle molds growing hair into a flat, ribbon-like shape, causing it to curl. ',
      align: 'left',
      rect: ['82px','188px','198px','225px','auto','auto']
   },
   {
      type: 'rect',
      rect: ['71px','86px','97px','32px','auto','auto'],
      display: 'none',
      id: 'button-trait',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(61,61,61,0.00)']
   },
   {
      type: 'rect',
      rect: ['168px','86px','97px','32px','auto','auto'],
      display: 'none',
      id: 'button-protein',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(61,61,61,0.00)']
   },
   {
      type: 'rect',
      rect: ['265px','86px','97px','32px','auto','auto'],
      display: 'none',
      id: 'button-mutation',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(61,61,61,0.00)']
   },
   {
      type: 'rect',
      rect: ['362px','86px','218px','32px','auto','auto'],
      display: 'none',
      id: 'button-examples',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(61,61,61,0.00)']
   },
   {
      type: 'rect',
      rect: ['580px','86px','249px','32px','auto','auto'],
      display: 'none',
      id: 'button-variation',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(61,61,61,0.00)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'text-examples',
      text: 'Vertebrates have many different types of keratins. In mammals, keratin proteins build hair, skin, and nails. Other keratins build claws, horns, shells, feathers, scales, and beaks. <br><br>Mice with no keratin71 protein have kinked fur and curly whiskers. They also lose patches of fur. <br><br>People with a genetic variation in a hair-follicle keratin have hair that feels like wool. They also lose their hair easily.',
      align: 'left',
      rect: ['82px','188px','232px','312px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'text-proteinCopy3',
      text: 'Variation.<br><br>There are no health problems associated with curly hair. Dogs may even benefit from a more water-resistant, curly coat when retrieving game from the water. <br><br>Differences in human hair texture are also likely affected by variations in hair-follicle keratins. ',
      align: 'left',
      rect: ['82px','188px','198px','225px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',20,'rgba(89,89,89,1.00)','700','none',''],
      type: 'text',
      text: 'Curly hair',
      id: 'Text3Copy2',
      opacity: 1,
      align: 'center',
      rect: ['20px','219px','196px','auto','auto','auto']
   },
   {
      type: 'image',
      id: 'poodle',
      opacity: 1,
      rect: ['363px','170px','350px','357px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/poodle.jpg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['299px','156px','496px','337px','auto','auto'],
      id: 'curly-protein',
      fill: ['rgba(0,0,0,0)','images/curly-protein.jpg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['299px','156px','496px','337px','auto','auto'],
      id: 'curly-dna',
      fill: ['rgba(0,0,0,0)','images/curly-dna.jpg','0px','0px']
   },
   {
      transform: [[0,0],[],[],['0.623','0.623']],
      display: 'none',
      type: 'rect',
      id: 'curly-examples',
      rect: ['207px','66px','auto','auto','auto','auto']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['335px','198px','426px','282px','auto','auto'],
      id: 'wet-dog',
      fill: ['rgba(0,0,0,0)','images/wet-dog.jpg','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'closeCopy',
      symbolName: 'close'
   },
   {
      id: 'curly-examples',
      symbolName: 'curly-examples'
   }   ]
   },
   states: {
      "Base State": {
         "${_button-trait}": [
            ["style", "top", '86px'],
            ["color", "background-color", 'rgba(61,61,61,0.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "display", 'none']
         ],
         "${_text-examples}": [
            ["style", "top", '188px'],
            ["style", "height", '312px'],
            ["style", "display", 'none'],
            ["style", "left", '82px'],
            ["style", "width", '232px']
         ],
         "${_curly-examples}": [
            ["style", "top", '66px'],
            ["transform", "scaleY", '0.62297'],
            ["transform", "scaleX", '0.62297'],
            ["style", "left", '207px'],
            ["style", "display", 'none']
         ],
         "${_curly-dna}": [
            ["style", "display", 'none']
         ],
         "${_button-protein}": [
            ["style", "top", '86px'],
            ["style", "display", 'none'],
            ["style", "left", '168px'],
            ["style", "cursor", 'pointer'],
            ["color", "background-color", 'rgba(61,61,61,0)']
         ],
         "${_text-trait}": [
            ["style", "line-height", '20px'],
            ["color", "color", 'rgba(80,80,80,1)'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '82px'],
            ["style", "font-size", '16px'],
            ["style", "top", '187px'],
            ["style", "text-align", 'left'],
            ["style", "height", '306px'],
            ["style", "opacity", '0'],
            ["style", "display", 'none'],
            ["style", "width", '198px']
         ],
         "${_button-mutation}": [
            ["style", "top", '86px'],
            ["style", "display", 'none'],
            ["style", "left", '265px'],
            ["style", "cursor", 'pointer'],
            ["color", "background-color", 'rgba(61,61,61,0)']
         ],
         "${_wet-dog}": [
            ["style", "top", '198px'],
            ["style", "left", '335px'],
            ["style", "display", 'none']
         ],
         "${_button-variation}": [
            ["color", "background-color", 'rgba(61,61,61,0)'],
            ["style", "top", '86px'],
            ["style", "display", 'none'],
            ["style", "left", '580px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '249px']
         ],
         "${_button-examples}": [
            ["color", "background-color", 'rgba(61,61,61,0)'],
            ["style", "top", '86px'],
            ["style", "display", 'none'],
            ["style", "left", '362px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '218px']
         ],
         "${_bkgd-mutation}": [
            ["color", "background-color", 'rgba(169,169,169,1)'],
            ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '265px'],
            ["style", "width", '97px'],
            ["style", "top", '119px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'none'],
            ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_white_bkgd}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["subproperty", "boxShadow.blur", '7px'],
            ["style", "opacity", '1'],
            ["style", "left", '680px'],
            ["style", "width", '195px'],
            ["style", "top", '209px'],
            ["subproperty", "boxShadow.spread", '0px'],
            ["style", "height", '153px'],
            ["subproperty", "boxShadow.offsetV", '2px'],
            ["subproperty", "boxShadow.offsetH", '2px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.296875)']
         ],
         "${_bkgd-examples}": [
            ["color", "background-color", 'rgba(169,169,169,1)'],
            ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '218px'],
            ["style", "top", '119px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'none'],
            ["style", "left", '362px']
         ],
         "${_closeCopy}": [
            ["style", "top", '122px'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "left", '785px'],
            ["style", "cursor", 'pointer']
         ],
         "${_bkgd-variation}": [
            ["color", "background-color", 'rgba(169,169,169,1)'],
            ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '580px'],
            ["style", "width", '249px'],
            ["style", "top", '119px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'none'],
            ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_black_bkgd}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(61,61,61,1.00)'],
            ["style", "height", '600px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '900px']
         ],
         "${_text-proteinCopy3}": [
            ["style", "top", '188px'],
            ["style", "height", '225px'],
            ["style", "display", 'none'],
            ["style", "left", '82px'],
            ["style", "width", '198px']
         ],
         "${_text-traitCopy}": [
            ["style", "line-height", '20px'],
            ["color", "color", 'rgba(80,80,80,1)'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '82px'],
            ["style", "font-size", '16px'],
            ["style", "top", '187px'],
            ["style", "height", '306px'],
            ["style", "width", '198px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0']
         ],
         "${_text-mutation}": [
            ["style", "top", '188px'],
            ["style", "height", '225px'],
            ["style", "display", 'none'],
            ["style", "left", '82px'],
            ["style", "width", '198px']
         ],
         "${symbolSelector}": [
            ["style", "height", '600px'],
            ["style", "width", '900px']
         ],
         "${_label-variation}": [
            ["style", "top", '126px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "height", '17px'],
            ["style", "left", '580px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '249px']
         ],
         "${_bkgd-protein}": [
            ["color", "background-color", 'rgba(169,169,169,1)'],
            ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '168px'],
            ["style", "width", '97px'],
            ["style", "top", '119px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'none'],
            ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Text3Copy2}": [
            ["style", "top", '218px'],
            ["style", "font-size", '20px'],
            ["style", "text-align", 'center'],
            ["style", "opacity", '1'],
            ["color", "color", 'rgba(89,89,89,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '680px'],
            ["style", "width", '196px']
         ],
         "${_label-mutation}": [
            ["style", "top", '126px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "left", '265px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '97px']
         ],
         "${_bkgd-trait}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '71px'],
            ["style", "width", '97px'],
            ["style", "top", '119px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'none'],
            ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_poodle}": [
            ["style", "top", '242px'],
            ["style", "display", 'block'],
            ["style", "height", '120px'],
            ["style", "opacity", '1'],
            ["style", "left", '719px'],
            ["style", "width", '118px']
         ],
         "${_label-trait}": [
            ["style", "top", '126px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "left", '71px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '97px']
         ],
         "${_curly-protein}": [
            ["style", "top", '156px'],
            ["style", "left", '299px'],
            ["style", "display", 'none']
         ],
         "${_label-examples}": [
            ["style", "top", '126px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "height", '17px'],
            ["style", "left", '362px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '218px']
         ],
         "${_label-protein}": [
            ["style", "top", '126px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "left", '168px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '97px']
         ],
         "${_text-protein}": [
            ["style", "top", '188px'],
            ["style", "display", 'none'],
            ["style", "height", '225px'],
            ["style", "left", '82px'],
            ["style", "width", '198px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4000,
         autoPlay: true,
         labels: {
            "trait": 2000,
            "protein": 2500,
            "mutation": 3000,
            "examples": 3500,
            "variation": 4000
         },
         timeline: [
            { id: "eid120", tween: [ "style", "${_text-protein}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
            { id: "eid121", tween: [ "style", "${_text-protein}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
            { id: "eid264", tween: [ "style", "${_poodle}", "width", '350px', { fromValue: '118px'}], position: 500, duration: 1000 },
            { id: "eid86", tween: [ "style", "${_button-trait}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid91", tween: [ "style", "${_button-trait}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid69", tween: [ "style", "${_label-examples}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid58", tween: [ "style", "${_label-examples}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid61", tween: [ "style", "${_label-variation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid60", tween: [ "style", "${_label-variation}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid65", tween: [ "style", "${_label-protein}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid54", tween: [ "style", "${_label-protein}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid68", tween: [ "style", "${_bkgd-examples}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid57", tween: [ "style", "${_bkgd-examples}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid40", tween: [ "style", "${_bkgd-trait}", "top", '86px', { fromValue: '119px'}], position: 1500, duration: 500 },
            { id: "eid104", tween: [ "color", "${_bkgd-examples}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 2000, duration: 0 },
            { id: "eid105", tween: [ "color", "${_bkgd-examples}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 3500, duration: 0 },
            { id: "eid106", tween: [ "color", "${_bkgd-examples}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 4000, duration: 0 },
            { id: "eid273", tween: [ "style", "${_curly-dna}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid275", tween: [ "style", "${_curly-dna}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0 },
            { id: "eid84", tween: [ "style", "${_button-mutation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid89", tween: [ "style", "${_button-mutation}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid15", tween: [ "style", "${_white_bkgd}", "top", '118px', { fromValue: '209px'}], position: 500, duration: 1000 },
            { id: "eid36", tween: [ "style", "${_bkgd-protein}", "top", '86px', { fromValue: '119px'}], position: 1500, duration: 500 },
            { id: "eid278", tween: [ "style", "${_wet-dog}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid126", tween: [ "style", "${_text-examples}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
            { id: "eid127", tween: [ "style", "${_text-examples}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
            { id: "eid128", tween: [ "style", "${_text-proteinCopy3}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid29", tween: [ "style", "${_closeCopy}", "opacity", '1', { fromValue: '0.000000'}], position: 1500, duration: 500 },
            { id: "eid34", tween: [ "style", "${_label-examples}", "top", '93px', { fromValue: '126px'}], position: 1500, duration: 500 },
            { id: "eid85", tween: [ "style", "${_button-protein}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid90", tween: [ "style", "${_button-protein}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid101", tween: [ "color", "${_bkgd-mutation}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 2000, duration: 0 },
            { id: "eid102", tween: [ "color", "${_bkgd-mutation}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 3000, duration: 0 },
            { id: "eid103", tween: [ "color", "${_bkgd-mutation}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 3500, duration: 0 },
            { id: "eid99", tween: [ "color", "${_bkgd-trait}", "background-color", 'rgba(255,255,255,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 2000, duration: 0 },
            { id: "eid100", tween: [ "color", "${_bkgd-trait}", "background-color", 'rgba(170,170,170,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 2500, duration: 0 },
            { id: "eid260", tween: [ "style", "${_poodle}", "height", '357px', { fromValue: '120px'}], position: 500, duration: 1000 },
            { id: "eid67", tween: [ "style", "${_label-mutation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid56", tween: [ "style", "${_label-mutation}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid66", tween: [ "style", "${_bkgd-mutation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid55", tween: [ "style", "${_bkgd-mutation}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid42", tween: [ "style", "${_label-mutation}", "top", '93px', { fromValue: '126px'}], position: 1500, duration: 500 },
            { id: "eid141", tween: [ "style", "${_Text3Copy2}", "top", '144px', { fromValue: '218px'}], position: 500, duration: 1000 },
            { id: "eid48", tween: [ "style", "${_label-protein}", "top", '93px', { fromValue: '126px'}], position: 1500, duration: 500 },
            { id: "eid96", tween: [ "color", "${_bkgd-protein}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 2000, duration: 0 },
            { id: "eid97", tween: [ "color", "${_bkgd-protein}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 2500, duration: 0 },
            { id: "eid98", tween: [ "color", "${_bkgd-protein}", "background-color", 'rgba(170,170,170,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 3000, duration: 0 },
            { id: "eid32", tween: [ "style", "${_bkgd-mutation}", "top", '86px', { fromValue: '119px'}], position: 1500, duration: 500 },
            { id: "eid124", tween: [ "style", "${_text-mutation}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid125", tween: [ "style", "${_text-mutation}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0 },
            { id: "eid64", tween: [ "style", "${_bkgd-protein}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid53", tween: [ "style", "${_bkgd-protein}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid276", tween: [ "style", "${_curly-examples}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
            { id: "eid277", tween: [ "style", "${_curly-examples}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
            { id: "eid70", tween: [ "style", "${_bkgd-variation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid59", tween: [ "style", "${_bkgd-variation}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid30", tween: [ "style", "${_text-trait}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500 },
            { id: "eid266", tween: [ "style", "${_poodle}", "top", '170px', { fromValue: '242px'}], position: 500, duration: 1000 },
            { id: "eid14", tween: [ "style", "${_white_bkgd}", "height", '410px', { fromValue: '153px'}], position: 500, duration: 1000 },
            { id: "eid140", tween: [ "style", "${_Text3Copy2}", "left", '81px', { fromValue: '680px'}], position: 500, duration: 1000 },
            { id: "eid38", tween: [ "style", "${_label-variation}", "top", '94px', { fromValue: '126px'}], position: 1500, duration: 500 },
            { id: "eid262", tween: [ "style", "${_poodle}", "left", '363px', { fromValue: '719px'}], position: 500, duration: 1000 },
            { id: "eid46", tween: [ "style", "${_label-trait}", "top", '93px', { fromValue: '126px'}], position: 1500, duration: 500 },
            { id: "eid63", tween: [ "style", "${_bkgd-trait}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid52", tween: [ "style", "${_bkgd-trait}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid17", tween: [ "style", "${_white_bkgd}", "left", '70px', { fromValue: '680px'}], position: 500, duration: 1000 },
            { id: "eid107", tween: [ "color", "${_bkgd-variation}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 2000, duration: 0 },
            { id: "eid108", tween: [ "color", "${_bkgd-variation}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 4000, duration: 0 },
            { id: "eid82", tween: [ "style", "${_button-variation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid87", tween: [ "style", "${_button-variation}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid16", tween: [ "style", "${_white_bkgd}", "width", '764px', { fromValue: '195px'}], position: 500, duration: 1000 },
            { id: "eid83", tween: [ "style", "${_button-examples}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid88", tween: [ "style", "${_button-examples}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid50", tween: [ "style", "${_bkgd-examples}", "top", '86px', { fromValue: '119px'}], position: 1500, duration: 500 },
            { id: "eid271", tween: [ "style", "${_poodle}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
            { id: "eid25", tween: [ "style", "${_black_bkgd}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid272", tween: [ "style", "${_curly-protein}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
            { id: "eid274", tween: [ "style", "${_curly-protein}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
            { id: "eid114", tween: [ "style", "${_text-trait}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid116", tween: [ "style", "${_text-trait}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
            { id: "eid62", tween: [ "style", "${_label-trait}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid51", tween: [ "style", "${_label-trait}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid44", tween: [ "style", "${_bkgd-variation}", "top", '86px', { fromValue: '119px'}], position: 1500, duration: 500 }         ]
      }
   }
},
"peas-info": {
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
      type: 'rect',
      id: 'black_bkgd',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','0px','900px','600px','auto','auto'],
      fill: ['rgba(61,61,61,1.00)']
   },
   {
      type: 'rect',
      borderRadius: ['4px 4px','4px 4px','0px 0px','0px 0px'],
      rect: ['71px','86px','97px','32px','auto','auto'],
      id: 'bkgd-trait',
      stroke: [0,'rgb(79, 79, 79)','none'],
      display: 'none',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'text',
      rect: ['71px','93px','97px','17px','auto','auto'],
      align: 'center',
      id: 'label-trait',
      display: 'none',
      text: 'Trait',
      cursor: ['pointer'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal']
   },
   {
      type: 'rect',
      borderRadius: ['4px 4px','4px 4px','0px 0px','0px 0px'],
      rect: ['168px','86px','97px','32px','auto','auto'],
      id: 'bkgd-protein',
      stroke: [0,'rgb(79, 79, 79)','none'],
      display: 'none',
      fill: ['rgba(169,169,169,1.00)']
   },
   {
      type: 'text',
      rect: ['168px','93px','97px','17px','auto','auto'],
      align: 'center',
      id: 'label-protein',
      display: 'none',
      text: 'Protein',
      cursor: ['pointer'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal']
   },
   {
      type: 'rect',
      borderRadius: ['4px 4px','4px 4px','0px 0px','0px 0px'],
      rect: ['265px','86px','97px','32px','auto','auto'],
      id: 'bkgd-mutation',
      stroke: [0,'rgb(79, 79, 79)','none'],
      display: 'none',
      fill: ['rgba(169,169,169,1.00)']
   },
   {
      type: 'text',
      rect: ['265px','93px','97px','17px','auto','auto'],
      align: 'center',
      id: 'label-mutation',
      display: 'none',
      text: 'DNA',
      cursor: ['pointer'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal']
   },
   {
      type: 'rect',
      borderRadius: ['4px 4px','4px 4px','0px 0px','0px 0px'],
      rect: ['362px','86px','218px','32px','auto','auto'],
      id: 'bkgd-examples',
      stroke: [0,'rgb(79, 79, 79)','none'],
      display: 'none',
      fill: ['rgba(169,169,169,1.00)']
   },
   {
      type: 'text',
      rect: ['362px','93px','218px','17px','auto','auto'],
      align: 'center',
      id: 'label-examples',
      display: 'none',
      text: 'Examples in Other Species',
      cursor: ['pointer'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal']
   },
   {
      type: 'rect',
      borderRadius: ['4px 4px','4px 4px','0px 0px','0px 0px'],
      rect: ['580px','86px','249px','32px','auto','auto'],
      id: 'bkgd-variation',
      stroke: [0,'rgb(79, 79, 79)','none'],
      display: 'none',
      fill: ['rgba(169,169,169,1.00)']
   },
   {
      type: 'text',
      rect: ['580px','93px','249px','17px','auto','auto'],
      align: 'center',
      id: 'label-variation',
      display: 'none',
      text: 'Variation, Disease, or Both?',
      cursor: ['pointer'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal']
   },
   {
      rect: ['23px','209px','195px','153px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)'],
      type: 'rect',
      id: 'white_bkgd',
      stroke: [0,'rgb(0, 0, 0)','none'],
      opacity: 1,
      boxShadow: ['',2,2,7,0,'rgba(0,0,0,0.30)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','400','none','normal'],
      type: 'text',
      display: 'none',
      id: 'text-trait',
      text: 'The pea plant can produce smooth or wrinkled seeds. Wrinkled peas taste sweet. <br><br>Gregor Mendel studied this pea trait to establish the laws of inheritance back in 1863. ',
      align: 'left',
      rect: ['80px','200px','198px','306px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'text-protein',
      text: 'The affected protein in wrinkled peas is SBE1 (starch-branching enzyme 1). When functioning normally, the SBE1 enzyme builds starch, a large molecule made by all plants as a way to store energy.<br><br>Starch is made of many sugars linked together. The job of SBE1 is to add branches to the chains of sugar. Branches help starch grow very large, and break down quickly when the plant needs energy. ',
      align: 'left',
      rect: ['82px','200px','198px','225px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'text-mutation',
      text: 'A large insertion disrupts the coding sequence of the SBE1 gene. The tail end of the SBE1 protein is lost, which disables the protein. The peas can\'t make branched starch, and sugar accumulates. The sugar attracts water, causing the peas to swell and then wrinkle as they mature and dry. ',
      align: 'left',
      rect: ['82px','200px','196px','225px','auto','auto']
   },
   {
      type: 'rect',
      rect: ['71px','86px','97px','32px','auto','auto'],
      display: 'none',
      id: 'button-trait',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(61,61,61,0.00)']
   },
   {
      type: 'rect',
      rect: ['168px','86px','97px','32px','auto','auto'],
      display: 'none',
      id: 'button-protein',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(61,61,61,0.00)']
   },
   {
      type: 'rect',
      rect: ['265px','86px','97px','32px','auto','auto'],
      display: 'none',
      id: 'button-mutation',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(61,61,61,0.00)']
   },
   {
      type: 'rect',
      rect: ['362px','86px','218px','32px','auto','auto'],
      display: 'none',
      id: 'button-examples',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(61,61,61,0.00)']
   },
   {
      type: 'rect',
      rect: ['580px','86px','249px','32px','auto','auto'],
      display: 'none',
      id: 'button-variation',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(61,61,61,0.00)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'text-examples',
      text: 'All plants have starch-branching enzymes, including corn, rice, wheat, apples, and potatoes.<br><br>Animals store sugar not as starch but as glycogen, so they have a glycogen-branching enzyme (GBE1) similar to SBE1. In horses and people, mutations in GBE1 cause organ failure and early death. ',
      align: 'left',
      rect: ['82px','200px','198px','312px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'text-proteinCopy3',
      text: 'Variation.<br><br>In peas, variations in SBE1 affect seed shape and sweetness. ',
      align: 'left',
      rect: ['82px','200px','198px','225px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',20,'rgba(89,89,89,1.00)','700','none',''],
      type: 'text',
      text: 'Mendel\'s wrinkled<br>peas',
      id: 'Text3Copy2',
      opacity: 1,
      align: 'center',
      rect: ['20px','219px','196px','auto','auto','auto']
   },
   {
      type: 'image',
      id: 'peas-wrinkled',
      opacity: 1,
      rect: ['329px','159px','326px','282px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/peas-wrinkled.jpg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['321px','149px','491px','358px','auto','auto'],
      id: 'peas-protein',
      fill: ['rgba(0,0,0,0)','images/peas-protein.jpg','0px','0px']
   },
   {
      display: 'none',
      type: 'rect',
      id: 'peas-s',
      rect: ['503px','308px','auto','auto','auto','auto']
   },
   {
      rect: ['785px','122px','auto','auto','auto','auto'],
      display: 'none',
      type: 'rect',
      cursor: ['pointer'],
      id: 'closeCopy'
   },
   {
      type: 'image',
      display: 'none',
      rect: ['315px','162px','496px','337px','auto','auto'],
      id: 'peas-dna',
      fill: ['rgba(0,0,0,0)','images/peas-dna.jpg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['338px','162px','208px','312px','auto','auto'],
      id: 'corn',
      fill: ['rgba(0,0,0,0)','images/corn.jpg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['560px','162px','208px','312px','auto','auto'],
      id: 'wheat',
      fill: ['rgba(0,0,0,0)','images/wheat.jpg','0px','0px']
   },
   {
      id: 'peas-s2',
      type: 'rect',
      rect: ['476px','213px','auto','auto','auto','auto']
   },
   {
      id: 'peas-r',
      type: 'rect',
      rect: ['242px','213px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'closeCopy',
      symbolName: 'close'
   },
   {
      id: 'peas-s2',
      symbolName: 'peas-s'
   },
   {
      id: 'peas-r',
      symbolName: 'peas-r'
   },
   {
      id: 'peas-s',
      symbolName: 'peas-s'
   }   ]
   },
   states: {
      "Base State": {
         "${_button-trait}": [
            ["color", "background-color", 'rgba(61,61,61,0.00)'],
            ["style", "display", 'none'],
            ["style", "cursor", 'pointer'],
            ["style", "top", '86px']
         ],
         "${_button-protein}": [
            ["style", "top", '86px'],
            ["style", "display", 'none'],
            ["color", "background-color", 'rgba(61,61,61,0)'],
            ["style", "left", '168px'],
            ["style", "cursor", 'pointer']
         ],
         "${_text-trait}": [
            ["style", "line-height", '20px'],
            ["color", "color", 'rgba(80,80,80,1)'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '80px'],
            ["style", "font-size", '16px'],
            ["style", "top", '200px'],
            ["style", "text-align", 'left'],
            ["style", "height", '306px'],
            ["style", "width", '198px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0']
         ],
         "${_button-mutation}": [
            ["style", "top", '86px'],
            ["style", "display", 'none'],
            ["color", "background-color", 'rgba(61,61,61,0)'],
            ["style", "left", '265px'],
            ["style", "cursor", 'pointer']
         ],
         "${_closeCopy}": [
            ["style", "top", '122px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '785px'],
            ["style", "cursor", 'pointer']
         ],
         "${_corn}": [
            ["style", "top", '162px'],
            ["style", "display", 'none'],
            ["style", "height", '312px'],
            ["style", "left", '338px'],
            ["style", "width", '208px']
         ],
         "${_peas-wrinkled}": [
            ["style", "top", '443px'],
            ["style", "display", 'block'],
            ["style", "height", '97px'],
            ["style", "opacity", '1'],
            ["style", "left", '65px'],
            ["style", "width", '112px']
         ],
         "${_text-mutation}": [
            ["style", "top", '200px'],
            ["style", "display", 'none'],
            ["style", "height", '225px'],
            ["style", "left", '82px'],
            ["style", "width", '195px']
         ],
         "${_peas-s2}": [
            ["style", "top", '213px'],
            ["style", "left", '476px'],
            ["style", "display", 'block']
         ],
         "${_wheat}": [
            ["style", "top", '162px'],
            ["style", "display", 'none'],
            ["style", "height", '312px'],
            ["style", "left", '560px'],
            ["style", "width", '208px']
         ],
         "${_bkgd-protein}": [
            ["color", "background-color", 'rgba(169,169,169,1)'],
            ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '168px'],
            ["style", "width", '97px'],
            ["style", "top", '119px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'none'],
            ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_text-traitCopy}": [
            ["style", "line-height", '20px'],
            ["color", "color", 'rgba(80,80,80,1)'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '82px'],
            ["style", "font-size", '16px'],
            ["style", "top", '187px'],
            ["style", "height", '306px'],
            ["style", "opacity", '0'],
            ["style", "display", 'none'],
            ["style", "width", '198px']
         ],
         "${_label-protein}": [
            ["style", "top", '126px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "left", '168px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '97px']
         ],
         "${_text-examples}": [
            ["style", "top", '200px'],
            ["style", "display", 'none'],
            ["style", "height", '312px'],
            ["style", "left", '82px'],
            ["style", "width", '198px']
         ],
         "${_Text5}": [
            ["style", "line-height", '20px'],
            ["style", "width", '194px'],
            ["style", "top", '8px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "font-size", '20px']
         ],
         "${_white_bkgd}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["subproperty", "boxShadow.blur", '7px'],
            ["style", "opacity", '1'],
            ["style", "left", '22px'],
            ["style", "width", '195px'],
            ["style", "top", '389px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.296875)'],
            ["style", "height", '153px'],
            ["subproperty", "boxShadow.spread", '0px'],
            ["subproperty", "boxShadow.offsetH", '2px'],
            ["subproperty", "boxShadow.offsetV", '2px']
         ],
         "${_button-variation}": [
            ["color", "background-color", 'rgba(61,61,61,0)'],
            ["style", "top", '86px'],
            ["style", "display", 'none'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '580px'],
            ["style", "width", '249px']
         ],
         "${_button-examples}": [
            ["color", "background-color", 'rgba(61,61,61,0)'],
            ["style", "top", '86px'],
            ["style", "display", 'none'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '362px'],
            ["style", "width", '218px']
         ],
         "${_bkgd-mutation}": [
            ["color", "background-color", 'rgba(169,169,169,1)'],
            ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '265px'],
            ["style", "width", '97px'],
            ["style", "top", '119px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'none'],
            ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_bkgd-examples}": [
            ["color", "background-color", 'rgba(169,169,169,1)'],
            ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '218px'],
            ["style", "top", '119px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'none'],
            ["style", "left", '362px']
         ],
         "${_black_bkgd}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(61,61,61,1.00)'],
            ["style", "height", '600px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '900px']
         ],
         "${_text-proteinCopy3}": [
            ["style", "top", '200px'],
            ["style", "display", 'none'],
            ["style", "height", '225px'],
            ["style", "left", '82px'],
            ["style", "width", '198px']
         ],
         "${_bkgd-variation}": [
            ["color", "background-color", 'rgba(169,169,169,1)'],
            ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '580px'],
            ["style", "width", '249px'],
            ["style", "top", '119px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'none'],
            ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_peas-dna}": [
            ["style", "top", '162px'],
            ["style", "left", '315px'],
            ["style", "display", 'none']
         ],
         "${_label-variation}": [
            ["style", "top", '126px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "height", '17px'],
            ["style", "left", '580px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '249px']
         ],
         "${_Text3Copy2}": [
            ["style", "line-height", '20px'],
            ["color", "color", 'rgba(89,89,89,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '22px'],
            ["style", "width", '196px'],
            ["style", "top", '399px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '20px'],
            ["style", "opacity", '1']
         ],
         "${_peas-r}": [
            ["style", "display", 'block'],
            ["style", "left", '242px']
         ],
         "${_label-examples}": [
            ["style", "top", '126px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "height", '17px'],
            ["style", "left", '362px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '218px']
         ],
         "${_bkgd-trait}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '71px'],
            ["style", "width", '97px'],
            ["style", "top", '119px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'none'],
            ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_peas-protein}": [
            ["style", "top", '149px'],
            ["style", "left", '321px'],
            ["style", "display", 'none']
         ],
         "${_peas-s}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0']
         ],
         "${_text-protein}": [
            ["style", "top", '200px'],
            ["style", "height", '225px'],
            ["style", "display", 'none'],
            ["style", "left", '82px'],
            ["style", "width", '218px']
         ],
         "${_label-trait}": [
            ["style", "top", '126px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "left", '71px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '97px']
         ],
         "${symbolSelector}": [
            ["style", "height", '600px'],
            ["style", "width", '900px']
         ],
         "${_label-mutation}": [
            ["style", "top", '126px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "left", '265px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '97px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4000,
         autoPlay: true,
         labels: {
            "trait": 2000,
            "protein": 2500,
            "mutation": 3000,
            "examples": 3500,
            "variation": 4000
         },
         timeline: [
            { id: "eid377", tween: [ "style", "${_peas-r}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid379", tween: [ "style", "${_peas-r}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid295", tween: [ "style", "${_closeCopy}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
            { id: "eid96", tween: [ "color", "${_bkgd-protein}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 2000, duration: 0 },
            { id: "eid97", tween: [ "color", "${_bkgd-protein}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 2500, duration: 0 },
            { id: "eid98", tween: [ "color", "${_bkgd-protein}", "background-color", 'rgba(170,170,170,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 3000, duration: 0 },
            { id: "eid44", tween: [ "style", "${_bkgd-variation}", "top", '86px', { fromValue: '119px'}], position: 1500, duration: 500 },
            { id: "eid141", tween: [ "style", "${_Text3Copy2}", "top", '144px', { fromValue: '399px'}], position: 500, duration: 1000 },
            { id: "eid50", tween: [ "style", "${_bkgd-examples}", "top", '86px', { fromValue: '119px'}], position: 1500, duration: 500 },
            { id: "eid42", tween: [ "style", "${_label-mutation}", "top", '93px', { fromValue: '126px'}], position: 1500, duration: 500 },
            { id: "eid29", tween: [ "style", "${_closeCopy}", "opacity", '1', { fromValue: '0.000000'}], position: 1500, duration: 500 },
            { id: "eid65", tween: [ "style", "${_label-protein}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid54", tween: [ "style", "${_label-protein}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid126", tween: [ "style", "${_text-examples}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
            { id: "eid127", tween: [ "style", "${_text-examples}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
            { id: "eid84", tween: [ "style", "${_button-mutation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid89", tween: [ "style", "${_button-mutation}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid68", tween: [ "style", "${_bkgd-examples}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid57", tween: [ "style", "${_bkgd-examples}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid40", tween: [ "style", "${_bkgd-trait}", "top", '86px', { fromValue: '119px'}], position: 1500, duration: 500 },
            { id: "eid104", tween: [ "color", "${_bkgd-examples}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 2000, duration: 0 },
            { id: "eid105", tween: [ "color", "${_bkgd-examples}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 3500, duration: 0 },
            { id: "eid106", tween: [ "color", "${_bkgd-examples}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 4000, duration: 0 },
            { id: "eid291", tween: [ "style", "${_peas-s}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid293", tween: [ "style", "${_peas-s}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
            { id: "eid128", tween: [ "style", "${_text-proteinCopy3}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid61", tween: [ "style", "${_label-variation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid60", tween: [ "style", "${_label-variation}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid378", tween: [ "style", "${_peas-s2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid380", tween: [ "style", "${_peas-s2}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid15", tween: [ "style", "${_white_bkgd}", "top", '118px', { fromValue: '389px'}], position: 500, duration: 1000 },
            { id: "eid69", tween: [ "style", "${_label-examples}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid58", tween: [ "style", "${_label-examples}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid284", tween: [ "style", "${_peas-wrinkled}", "width", '326px', { fromValue: '112px'}], position: 500, duration: 1000 },
            { id: "eid34", tween: [ "style", "${_label-examples}", "top", '93px', { fromValue: '126px'}], position: 1500, duration: 500 },
            { id: "eid85", tween: [ "style", "${_button-protein}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid90", tween: [ "style", "${_button-protein}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid166", tween: [ "style", "${_text-protein}", "width", '218px', { fromValue: '218px'}], position: 2520, duration: 0 },
            { id: "eid101", tween: [ "color", "${_bkgd-mutation}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 2000, duration: 0 },
            { id: "eid102", tween: [ "color", "${_bkgd-mutation}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 3000, duration: 0 },
            { id: "eid103", tween: [ "color", "${_bkgd-mutation}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 3500, duration: 0 },
            { id: "eid282", tween: [ "style", "${_peas-wrinkled}", "top", '159px', { fromValue: '443px'}], position: 500, duration: 1000 },
            { id: "eid17", tween: [ "style", "${_white_bkgd}", "left", '68px', { fromValue: '22px'}], position: 500, duration: 1000 },
            { id: "eid99", tween: [ "color", "${_bkgd-trait}", "background-color", 'rgba(255,255,255,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 2000, duration: 0 },
            { id: "eid100", tween: [ "color", "${_bkgd-trait}", "background-color", 'rgba(170,170,170,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 2500, duration: 0 },
            { id: "eid286", tween: [ "style", "${_peas-wrinkled}", "left", '329px', { fromValue: '65px'}], position: 500, duration: 1000 },
            { id: "eid67", tween: [ "style", "${_label-mutation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid56", tween: [ "style", "${_label-mutation}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid66", tween: [ "style", "${_bkgd-mutation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid55", tween: [ "style", "${_bkgd-mutation}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid301", tween: [ "style", "${_corn}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
            { id: "eid303", tween: [ "style", "${_corn}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
            { id: "eid140", tween: [ "style", "${_Text3Copy2}", "left", '81px', { fromValue: '22px'}], position: 500, duration: 1000 },
            { id: "eid48", tween: [ "style", "${_label-protein}", "top", '93px', { fromValue: '126px'}], position: 1500, duration: 500 },
            { id: "eid292", tween: [ "style", "${_peas-s}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500 },
            { id: "eid32", tween: [ "style", "${_bkgd-mutation}", "top", '86px', { fromValue: '119px'}], position: 1500, duration: 500 },
            { id: "eid296", tween: [ "style", "${_peas-dna}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid300", tween: [ "style", "${_peas-dna}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0 },
            { id: "eid64", tween: [ "style", "${_bkgd-protein}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid53", tween: [ "style", "${_bkgd-protein}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid167", tween: [ "style", "${_text-mutation}", "width", '195px', { fromValue: '195px'}], position: 3000, duration: 0 },
            { id: "eid70", tween: [ "style", "${_bkgd-variation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid59", tween: [ "style", "${_bkgd-variation}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid30", tween: [ "style", "${_text-trait}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500 },
            { id: "eid280", tween: [ "style", "${_peas-wrinkled}", "height", '282px', { fromValue: '97px'}], position: 500, duration: 1000 },
            { id: "eid294", tween: [ "style", "${_peas-wrinkled}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
            { id: "eid124", tween: [ "style", "${_text-mutation}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid125", tween: [ "style", "${_text-mutation}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0 },
            { id: "eid38", tween: [ "style", "${_label-variation}", "top", '94px', { fromValue: '126px'}], position: 1500, duration: 500 },
            { id: "eid63", tween: [ "style", "${_bkgd-trait}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid52", tween: [ "style", "${_bkgd-trait}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid46", tween: [ "style", "${_label-trait}", "top", '93px', { fromValue: '126px'}], position: 1500, duration: 500 },
            { id: "eid298", tween: [ "style", "${_peas-protein}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid299", tween: [ "style", "${_peas-protein}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
            { id: "eid297", tween: [ "style", "${_peas-protein}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
            { id: "eid14", tween: [ "style", "${_white_bkgd}", "height", '410px', { fromValue: '153px'}], position: 500, duration: 1000 },
            { id: "eid107", tween: [ "color", "${_bkgd-variation}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 2000, duration: 0 },
            { id: "eid108", tween: [ "color", "${_bkgd-variation}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 4000, duration: 0 },
            { id: "eid82", tween: [ "style", "${_button-variation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid87", tween: [ "style", "${_button-variation}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid120", tween: [ "style", "${_text-protein}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
            { id: "eid121", tween: [ "style", "${_text-protein}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
            { id: "eid83", tween: [ "style", "${_button-examples}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid88", tween: [ "style", "${_button-examples}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid302", tween: [ "style", "${_wheat}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
            { id: "eid304", tween: [ "style", "${_wheat}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
            { id: "eid86", tween: [ "style", "${_button-trait}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid91", tween: [ "style", "${_button-trait}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid25", tween: [ "style", "${_black_bkgd}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid16", tween: [ "style", "${_white_bkgd}", "width", '764px', { fromValue: '195px'}], position: 500, duration: 1000 },
            { id: "eid114", tween: [ "style", "${_text-trait}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid116", tween: [ "style", "${_text-trait}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
            { id: "eid62", tween: [ "style", "${_label-trait}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid51", tween: [ "style", "${_label-trait}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid36", tween: [ "style", "${_bkgd-protein}", "top", '86px', { fromValue: '119px'}], position: 1500, duration: 500 }         ]
      }
   }
},
"redhair-info": {
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
      type: 'rect',
      id: 'black_bkgd',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','0px','900px','600px','auto','auto'],
      fill: ['rgba(61,61,61,1.00)']
   },
   {
      type: 'rect',
      borderRadius: ['4px 4px','4px 4px','0px 0px','0px 0px'],
      rect: ['71px','86px','97px','32px','auto','auto'],
      id: 'bkgd-trait',
      stroke: [0,'rgb(79, 79, 79)','none'],
      display: 'none',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'text',
      rect: ['71px','93px','97px','17px','auto','auto'],
      align: 'center',
      id: 'label-trait',
      display: 'none',
      text: 'Trait',
      cursor: ['pointer'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal']
   },
   {
      type: 'rect',
      borderRadius: ['4px 4px','4px 4px','0px 0px','0px 0px'],
      rect: ['168px','86px','97px','32px','auto','auto'],
      id: 'bkgd-protein',
      stroke: [0,'rgb(79, 79, 79)','none'],
      display: 'none',
      fill: ['rgba(169,169,169,1.00)']
   },
   {
      type: 'text',
      rect: ['168px','93px','97px','17px','auto','auto'],
      align: 'center',
      id: 'label-protein',
      display: 'none',
      text: 'Protein',
      cursor: ['pointer'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal']
   },
   {
      type: 'rect',
      borderRadius: ['4px 4px','4px 4px','0px 0px','0px 0px'],
      rect: ['265px','86px','97px','32px','auto','auto'],
      id: 'bkgd-mutation',
      stroke: [0,'rgb(79, 79, 79)','none'],
      display: 'none',
      fill: ['rgba(169,169,169,1.00)']
   },
   {
      type: 'text',
      rect: ['265px','93px','97px','17px','auto','auto'],
      align: 'center',
      id: 'label-mutation',
      display: 'none',
      text: 'DNA',
      cursor: ['pointer'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal']
   },
   {
      type: 'rect',
      borderRadius: ['4px 4px','4px 4px','0px 0px','0px 0px'],
      rect: ['362px','86px','218px','32px','auto','auto'],
      id: 'bkgd-examples',
      stroke: [0,'rgb(79, 79, 79)','none'],
      display: 'none',
      fill: ['rgba(169,169,169,1.00)']
   },
   {
      type: 'text',
      rect: ['362px','93px','218px','17px','auto','auto'],
      align: 'center',
      id: 'label-examples',
      display: 'none',
      text: 'Examples in Other Species',
      cursor: ['pointer'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal']
   },
   {
      type: 'rect',
      borderRadius: ['4px 4px','4px 4px','0px 0px','0px 0px'],
      rect: ['580px','86px','249px','32px','auto','auto'],
      id: 'bkgd-variation',
      stroke: [0,'rgb(79, 79, 79)','none'],
      display: 'none',
      fill: ['rgba(169,169,169,1.00)']
   },
   {
      type: 'text',
      rect: ['580px','93px','249px','17px','auto','auto'],
      align: 'center',
      id: 'label-variation',
      display: 'none',
      text: 'Variation, Disease, or Both?',
      cursor: ['pointer'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal']
   },
   {
      rect: ['23px','209px','195px','153px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)'],
      type: 'rect',
      id: 'white_bkgd',
      stroke: [0,'rgb(0, 0, 0)','none'],
      opacity: 1,
      boxShadow: ['',2,2,7,0,'rgba(0,0,0,0.30)']
   },
   {
      id: 'closeCopy',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['785px','122px','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','400','none','normal'],
      type: 'text',
      display: 'none',
      id: 'text-trait',
      text: 'Relatively few people have red hair—just 1-2% around the world. It\'s more common in Scotland and Ireland, where about 10-13% are redheads. Redheads often have fair skin, light eye color, and freckles.',
      align: 'left',
      rect: ['82px','187px','198px','306px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'text-protein',
      text: 'The affected protein in redheads is MC1R (melanocortin 1 receptor). MC1R sits in the membrane of specialized skin cells that make pigments. Pigments give skin and hair their color.<br> <br>Different hormones activate or inactivate the MC1R receptor. When MC1R is active, cells make black pigments. When it\'s inactive, they make red pigments.',
      align: 'left',
      rect: ['82px','188px','198px','225px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'text-mutation',
      text: 'Most redheads have one of three single-base variations in the MC1R gene. Each changes a single amino acid and affects how much MC1R gets to the cell surface and how it responds to signals. <br><br>Redheads have few working MC1R proteins, so even when the activating signal is present, their cells never get the message to make black pigments. Instead, they make only red pigments. ',
      align: 'left',
      rect: ['82px','188px','208px','225px','auto','auto']
   },
   {
      type: 'rect',
      rect: ['71px','86px','97px','32px','auto','auto'],
      display: 'none',
      id: 'button-trait',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(61,61,61,0.00)']
   },
   {
      type: 'rect',
      rect: ['168px','86px','97px','32px','auto','auto'],
      display: 'none',
      id: 'button-protein',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(61,61,61,0.00)']
   },
   {
      type: 'rect',
      rect: ['265px','86px','97px','32px','auto','auto'],
      display: 'none',
      id: 'button-mutation',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(61,61,61,0.00)']
   },
   {
      type: 'rect',
      rect: ['362px','86px','218px','32px','auto','auto'],
      display: 'none',
      id: 'button-examples',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(61,61,61,0.00)']
   },
   {
      type: 'rect',
      rect: ['580px','86px','249px','32px','auto','auto'],
      display: 'none',
      id: 'button-variation',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(61,61,61,0.00)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'text-examples',
      text: 'All vertebrates have the MC1R gene. MC1R contributes to color variation in jaguars, which can be spotted or black. <br><br>MC1R also accounts for light and dark whiptail lizards, a variation that helps with camouflage. <br><br>In many bird species, MC1R influences variation in feather color.',
      align: 'left',
      rect: ['82px','188px','232px','312px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'text-proteinCopy3',
      text: 'Both.<br><br>In people, variations in MC1R (along with at least 11 other genes) contribute to differerences in hair and skin color. <br><br>But redheads are also at a high risk of getting skin cancer. They lack the dark pigments that protect skin from sun damage. ',
      align: 'left',
      rect: ['82px','188px','198px','225px','auto','auto']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['330px','179','463px','290px','auto','auto'],
      id: 'redhair-protein',
      fill: ['rgba(0,0,0,0)','images/redhair-protein.jpg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['330px','179','463px','290px','auto','auto'],
      id: 'redhair-dna',
      fill: ['rgba(0,0,0,0)','images/redhair-dna.jpg','0px','0px']
   },
   {
      font: ['Arial, Helvetica, sans-serif',20,'rgba(89,89,89,1.00)','700','none',''],
      type: 'text',
      text: 'Red hair',
      id: 'Text3Copy2',
      opacity: 1,
      align: 'center',
      rect: ['20px','219px','196px','auto','auto','auto']
   },
   {
      type: 'image',
      id: 'redhead',
      opacity: 1,
      rect: ['503px','433px','109px','109px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/redhead.jpg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['331px','188px','424px','283px','auto','auto'],
      id: 'sunburn',
      fill: ['rgba(0,0,0,0)','images/sunburn.jpg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['360px','194px','422px','259px','auto','auto'],
      id: 'cats',
      fill: ['rgba(0,0,0,0)','images/cats.jpg','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'closeCopy',
      symbolName: 'close'
   }   ]
   },
   states: {
      "Base State": {
         "${_button-trait}": [
            ["style", "top", '86px'],
            ["color", "background-color", 'rgba(61,61,61,0.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "display", 'none']
         ],
         "${_text-examples}": [
            ["style", "top", '188px'],
            ["style", "height", '312px'],
            ["style", "display", 'none'],
            ["style", "left", '82px'],
            ["style", "width", '232px']
         ],
         "${_label-mutation}": [
            ["style", "top", '126px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "left", '265px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '97px']
         ],
         "${_button-protein}": [
            ["style", "top", '86px'],
            ["style", "display", 'none'],
            ["style", "left", '168px'],
            ["style", "cursor", 'pointer'],
            ["color", "background-color", 'rgba(61,61,61,0)']
         ],
         "${_text-trait}": [
            ["style", "line-height", '20px'],
            ["color", "color", 'rgba(80,80,80,1)'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '82px'],
            ["style", "font-size", '16px'],
            ["style", "top", '187px'],
            ["style", "text-align", 'left'],
            ["style", "height", '306px'],
            ["style", "opacity", '0'],
            ["style", "display", 'none'],
            ["style", "width", '198px']
         ],
         "${_redhair-dna}": [
            ["style", "display", 'none'],
            ["style", "left", '330px']
         ],
         "${_label-trait}": [
            ["style", "top", '126px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "left", '71px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '97px']
         ],
         "${_bkgd-variation}": [
            ["color", "background-color", 'rgba(169,169,169,1)'],
            ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '580px'],
            ["style", "width", '249px'],
            ["style", "top", '119px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'none'],
            ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_button-variation}": [
            ["color", "background-color", 'rgba(61,61,61,0)'],
            ["style", "top", '86px'],
            ["style", "display", 'none'],
            ["style", "left", '580px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '249px']
         ],
         "${_cats}": [
            ["style", "top", '194px'],
            ["style", "display", 'none'],
            ["style", "height", '259px'],
            ["style", "left", '360px'],
            ["style", "width", '422px']
         ],
         "${symbolSelector}": [
            ["style", "height", '600px'],
            ["style", "width", '900px']
         ],
         "${_button-mutation}": [
            ["style", "top", '86px'],
            ["style", "display", 'none'],
            ["style", "left", '265px'],
            ["style", "cursor", 'pointer'],
            ["color", "background-color", 'rgba(61,61,61,0)']
         ],
         "${_bkgd-examples}": [
            ["color", "background-color", 'rgba(169,169,169,1)'],
            ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '218px'],
            ["style", "top", '119px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'none'],
            ["style", "left", '362px']
         ],
         "${_closeCopy}": [
            ["style", "top", '122px'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "left", '785px'],
            ["style", "cursor", 'pointer']
         ],
         "${_redhair-protein}": [
            ["style", "left", '330px'],
            ["style", "display", 'none']
         ],
         "${_black_bkgd}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(61,61,61,1.00)'],
            ["style", "height", '600px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '900px']
         ],
         "${_text-proteinCopy3}": [
            ["style", "top", '188px'],
            ["style", "height", '225px'],
            ["style", "display", 'none'],
            ["style", "left", '82px'],
            ["style", "width", '198px']
         ],
         "${_Text3Copy2}": [
            ["style", "top", '398px'],
            ["style", "font-size", '20px'],
            ["style", "text-align", 'center'],
            ["style", "opacity", '1'],
            ["color", "color", 'rgba(89,89,89,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '460px'],
            ["style", "width", '196px']
         ],
         "${_text-mutation}": [
            ["style", "top", '188px'],
            ["style", "height", '225px'],
            ["style", "display", 'none'],
            ["style", "left", '82px'],
            ["style", "width", '208px']
         ],
         "${_bkgd-mutation}": [
            ["color", "background-color", 'rgba(169,169,169,1)'],
            ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '265px'],
            ["style", "width", '97px'],
            ["style", "top", '119px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'none'],
            ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_label-variation}": [
            ["style", "top", '126px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "height", '17px'],
            ["style", "left", '580px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '249px']
         ],
         "${_white_bkgd}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["subproperty", "boxShadow.blur", '7px'],
            ["style", "opacity", '1'],
            ["style", "left", '460px'],
            ["style", "width", '195px'],
            ["style", "top", '389px'],
            ["subproperty", "boxShadow.spread", '0px'],
            ["style", "height", '153px'],
            ["subproperty", "boxShadow.offsetV", '2px'],
            ["subproperty", "boxShadow.offsetH", '2px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.296875)']
         ],
         "${_text-protein}": [
            ["style", "top", '188px'],
            ["style", "display", 'none'],
            ["style", "height", '225px'],
            ["style", "left", '82px'],
            ["style", "width", '207px']
         ],
         "${_bkgd-protein}": [
            ["color", "background-color", 'rgba(169,169,169,1)'],
            ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '168px'],
            ["style", "width", '97px'],
            ["style", "top", '119px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'none'],
            ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_bkgd-trait}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '71px'],
            ["style", "width", '97px'],
            ["style", "top", '119px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'none'],
            ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_button-examples}": [
            ["color", "background-color", 'rgba(61,61,61,0)'],
            ["style", "top", '86px'],
            ["style", "display", 'none'],
            ["style", "left", '362px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '218px']
         ],
         "${_redhead}": [
            ["style", "top", '433px'],
            ["style", "display", 'block'],
            ["style", "height", '109px'],
            ["style", "opacity", '1'],
            ["style", "left", '503px'],
            ["style", "width", '109px']
         ],
         "${_text-traitCopy}": [
            ["style", "line-height", '20px'],
            ["color", "color", 'rgba(80,80,80,1)'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '82px'],
            ["style", "font-size", '16px'],
            ["style", "top", '187px'],
            ["style", "height", '306px'],
            ["style", "width", '198px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0']
         ],
         "${_sunburn}": [
            ["style", "top", '188px'],
            ["style", "left", '331px'],
            ["style", "display", 'none']
         ],
         "${_label-protein}": [
            ["style", "top", '126px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "left", '168px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '97px']
         ],
         "${_label-examples}": [
            ["style", "top", '126px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "height", '17px'],
            ["style", "left", '362px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '218px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4000,
         autoPlay: true,
         labels: {
            "trait": 2000,
            "protein": 2500,
            "mutation": 3000,
            "examples": 3500,
            "variation": 4000
         },
         timeline: [
            { id: "eid120", tween: [ "style", "${_text-protein}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
            { id: "eid121", tween: [ "style", "${_text-protein}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
            { id: "eid367", tween: [ "style", "${_cats}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
            { id: "eid368", tween: [ "style", "${_cats}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
            { id: "eid96", tween: [ "color", "${_bkgd-protein}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 2000, duration: 0 },
            { id: "eid97", tween: [ "color", "${_bkgd-protein}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 2500, duration: 0 },
            { id: "eid98", tween: [ "color", "${_bkgd-protein}", "background-color", 'rgba(170,170,170,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 3000, duration: 0 },
            { id: "eid141", tween: [ "style", "${_Text3Copy2}", "top", '144px', { fromValue: '398px'}], position: 500, duration: 1000 },
            { id: "eid69", tween: [ "style", "${_label-examples}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid58", tween: [ "style", "${_label-examples}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid42", tween: [ "style", "${_label-mutation}", "top", '93px', { fromValue: '126px'}], position: 1500, duration: 500 },
            { id: "eid65", tween: [ "style", "${_label-protein}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid54", tween: [ "style", "${_label-protein}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid68", tween: [ "style", "${_bkgd-examples}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid57", tween: [ "style", "${_bkgd-examples}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid40", tween: [ "style", "${_bkgd-trait}", "top", '86px', { fromValue: '119px'}], position: 1500, duration: 500 },
            { id: "eid104", tween: [ "color", "${_bkgd-examples}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 2000, duration: 0 },
            { id: "eid105", tween: [ "color", "${_bkgd-examples}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 3500, duration: 0 },
            { id: "eid106", tween: [ "color", "${_bkgd-examples}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 4000, duration: 0 },
            { id: "eid36", tween: [ "style", "${_bkgd-protein}", "top", '86px', { fromValue: '119px'}], position: 1500, duration: 500 },
            { id: "eid16", tween: [ "style", "${_white_bkgd}", "width", '764px', { fromValue: '195px'}], position: 500, duration: 1000 },
            { id: "eid15", tween: [ "style", "${_white_bkgd}", "top", '118px', { fromValue: '389px'}], position: 500, duration: 1000 },
            { id: "eid29", tween: [ "style", "${_closeCopy}", "opacity", '1', { fromValue: '0.000000'}], position: 1500, duration: 500 },
            { id: "eid34", tween: [ "style", "${_label-examples}", "top", '93px', { fromValue: '126px'}], position: 1500, duration: 500 },
            { id: "eid350", tween: [ "style", "${_redhead}", "top", '187px', { fromValue: '433px'}], position: 500, duration: 1000 },
            { id: "eid128", tween: [ "style", "${_text-proteinCopy3}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid173", tween: [ "style", "${_text-protein}", "width", '207px', { fromValue: '207px'}], position: 2501, duration: 0 },
            { id: "eid84", tween: [ "style", "${_button-mutation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid89", tween: [ "style", "${_button-mutation}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid352", tween: [ "style", "${_sunburn}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid101", tween: [ "color", "${_bkgd-mutation}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 2000, duration: 0 },
            { id: "eid102", tween: [ "color", "${_bkgd-mutation}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 3000, duration: 0 },
            { id: "eid103", tween: [ "color", "${_bkgd-mutation}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 3500, duration: 0 },
            { id: "eid99", tween: [ "color", "${_bkgd-trait}", "background-color", 'rgba(255,255,255,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 2000, duration: 0 },
            { id: "eid100", tween: [ "color", "${_bkgd-trait}", "background-color", 'rgba(170,170,170,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 2500, duration: 0 },
            { id: "eid61", tween: [ "style", "${_label-variation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid60", tween: [ "style", "${_label-variation}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid67", tween: [ "style", "${_label-mutation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid56", tween: [ "style", "${_label-mutation}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid66", tween: [ "style", "${_bkgd-mutation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid55", tween: [ "style", "${_bkgd-mutation}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid348", tween: [ "style", "${_redhead}", "width", '341px', { fromValue: '109px'}], position: 500, duration: 1000 },
            { id: "eid370", tween: [ "style", "${_redhair-dna}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid372", tween: [ "style", "${_redhair-dna}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0 },
            { id: "eid347", tween: [ "style", "${_redhead}", "height", '341px', { fromValue: '109px'}], position: 500, duration: 1000 },
            { id: "eid351", tween: [ "style", "${_redhead}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
            { id: "eid32", tween: [ "style", "${_bkgd-mutation}", "top", '86px', { fromValue: '119px'}], position: 1500, duration: 500 },
            { id: "eid86", tween: [ "style", "${_button-trait}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid91", tween: [ "style", "${_button-trait}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid64", tween: [ "style", "${_bkgd-protein}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid53", tween: [ "style", "${_bkgd-protein}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid70", tween: [ "style", "${_bkgd-variation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid59", tween: [ "style", "${_bkgd-variation}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid349", tween: [ "style", "${_redhead}", "left", '360px', { fromValue: '503px'}], position: 500, duration: 1000 },
            { id: "eid124", tween: [ "style", "${_text-mutation}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid125", tween: [ "style", "${_text-mutation}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0 },
            { id: "eid14", tween: [ "style", "${_white_bkgd}", "height", '410px', { fromValue: '153px'}], position: 500, duration: 1000 },
            { id: "eid30", tween: [ "style", "${_text-trait}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500 },
            { id: "eid46", tween: [ "style", "${_label-trait}", "top", '93px', { fromValue: '126px'}], position: 1500, duration: 500 },
            { id: "eid38", tween: [ "style", "${_label-variation}", "top", '94px', { fromValue: '126px'}], position: 1500, duration: 500 },
            { id: "eid63", tween: [ "style", "${_bkgd-trait}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid52", tween: [ "style", "${_bkgd-trait}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid369", tween: [ "style", "${_redhair-protein}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
            { id: "eid371", tween: [ "style", "${_redhair-protein}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
            { id: "eid140", tween: [ "style", "${_Text3Copy2}", "left", '81px', { fromValue: '460px'}], position: 500, duration: 1000 },
            { id: "eid17", tween: [ "style", "${_white_bkgd}", "left", '68px', { fromValue: '460px'}], position: 500, duration: 1000 },
            { id: "eid107", tween: [ "color", "${_bkgd-variation}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 2000, duration: 0 },
            { id: "eid108", tween: [ "color", "${_bkgd-variation}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 4000, duration: 0 },
            { id: "eid82", tween: [ "style", "${_button-variation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid87", tween: [ "style", "${_button-variation}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid48", tween: [ "style", "${_label-protein}", "top", '93px', { fromValue: '126px'}], position: 1500, duration: 500 },
            { id: "eid83", tween: [ "style", "${_button-examples}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid88", tween: [ "style", "${_button-examples}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid50", tween: [ "style", "${_bkgd-examples}", "top", '86px', { fromValue: '119px'}], position: 1500, duration: 500 },
            { id: "eid85", tween: [ "style", "${_button-protein}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid90", tween: [ "style", "${_button-protein}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid25", tween: [ "style", "${_black_bkgd}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid126", tween: [ "style", "${_text-examples}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
            { id: "eid127", tween: [ "style", "${_text-examples}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
            { id: "eid114", tween: [ "style", "${_text-trait}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid116", tween: [ "style", "${_text-trait}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
            { id: "eid62", tween: [ "style", "${_label-trait}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid51", tween: [ "style", "${_label-trait}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid44", tween: [ "style", "${_bkgd-variation}", "top", '86px', { fromValue: '119px'}], position: 1500, duration: 500 }         ]
      }
   }
},
"songbird-info": {
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
      type: 'rect',
      id: 'black_bkgd',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','0px','900px','600px','auto','auto'],
      fill: ['rgba(61,61,61,1.00)']
   },
   {
      type: 'rect',
      borderRadius: ['4px 4px','4px 4px','0px 0px','0px 0px'],
      rect: ['71px','86px','97px','32px','auto','auto'],
      id: 'bkgd-trait',
      stroke: [0,'rgb(79, 79, 79)','none'],
      display: 'none',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'text',
      rect: ['71px','93px','97px','17px','auto','auto'],
      align: 'center',
      id: 'label-trait',
      display: 'none',
      text: 'Trait',
      cursor: ['pointer'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal']
   },
   {
      type: 'rect',
      borderRadius: ['4px 4px','4px 4px','0px 0px','0px 0px'],
      rect: ['168px','86px','97px','32px','auto','auto'],
      id: 'bkgd-protein',
      stroke: [0,'rgb(79, 79, 79)','none'],
      display: 'none',
      fill: ['rgba(169,169,169,1.00)']
   },
   {
      type: 'text',
      rect: ['168px','93px','97px','17px','auto','auto'],
      align: 'center',
      id: 'label-protein',
      display: 'none',
      text: 'Protein',
      cursor: ['pointer'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal']
   },
   {
      type: 'rect',
      borderRadius: ['4px 4px','4px 4px','0px 0px','0px 0px'],
      rect: ['265px','86px','97px','32px','auto','auto'],
      id: 'bkgd-mutation',
      stroke: [0,'rgb(79, 79, 79)','none'],
      display: 'none',
      fill: ['rgba(169,169,169,1.00)']
   },
   {
      type: 'text',
      rect: ['265px','93px','97px','17px','auto','auto'],
      align: 'center',
      id: 'label-mutation',
      display: 'none',
      text: 'DNA',
      cursor: ['pointer'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal']
   },
   {
      type: 'rect',
      borderRadius: ['4px 4px','4px 4px','0px 0px','0px 0px'],
      rect: ['362px','86px','218px','32px','auto','auto'],
      id: 'bkgd-examples',
      stroke: [0,'rgb(79, 79, 79)','none'],
      display: 'none',
      fill: ['rgba(169,169,169,1.00)']
   },
   {
      type: 'text',
      rect: ['362px','93px','218px','17px','auto','auto'],
      align: 'center',
      id: 'label-examples',
      display: 'none',
      text: 'Examples in Other Species',
      cursor: ['pointer'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal']
   },
   {
      type: 'rect',
      borderRadius: ['4px 4px','4px 4px','0px 0px','0px 0px'],
      rect: ['580px','86px','249px','32px','auto','auto'],
      id: 'bkgd-variation',
      stroke: [0,'rgb(79, 79, 79)','none'],
      display: 'none',
      fill: ['rgba(169,169,169,1.00)']
   },
   {
      type: 'text',
      rect: ['580px','93px','249px','17px','auto','auto'],
      align: 'center',
      id: 'label-variation',
      display: 'none',
      text: 'Variation, Disease, or Both?',
      cursor: ['pointer'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal']
   },
   {
      rect: ['23px','209px','195px','153px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)'],
      type: 'rect',
      id: 'white_bkgd',
      stroke: [0,'rgb(0, 0, 0)','none'],
      opacity: 1,
      boxShadow: ['',2,2,7,0,'rgba(0,0,0,0.30)']
   },
   {
      id: 'closeCopy',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['785px','122px','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','400','none','normal'],
      type: 'text',
      display: 'none',
      id: 'text-trait',
      text: 'The male zebra finch learns a song to attract females. He learns this song by imitating his father. Few bird species are able to learn and repeat a song. ',
      align: 'left',
      rect: ['80px','200px','198px','306px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'text-protein',
      text: 'The protein required for song learning in zebra finch is FOXP2 (forkhead box P2). FOXP2 attaches to DNA switches in brain cells to turn genes on or off.<br><br>FOXP2 controls genes to build and shape connections between neurons. During song-learning, new connections must form between the neurons that perceive sound and those that control mouth movements and store memories.',
      align: 'left',
      rect: ['82px','200px','198px','225px','auto','auto']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['349px','173px','456px','266px','auto','auto'],
      id: 'birds-protein',
      fill: ['rgba(0,0,0,0)','images/birds-protein.jpg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['422px','239px','340px','175px','auto','auto'],
      id: 'birds-dna',
      fill: ['rgba(0,0,0,0)','images/birds-dna.jpg','0px','0px']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'text-mutation',
      text: 'Researchers have learned about FOXP2 by manipulating the gene in zebra finch. <br><br>With no FOXP2, birds die before hatching. When FOXP2 levels are reduced after hatching, birds are healthy but they can\'t learn. Their songs differ each time they sing.<br><br>Researchers also know that FOXP2 protein levels go up in a certain brain region during song-learning. This is in contrast to non-learning bird species, where FOXP2 levels are constant. ',
      align: 'left',
      rect: ['82px','200px','260px','225px','auto','auto']
   },
   {
      type: 'rect',
      rect: ['71px','86px','97px','32px','auto','auto'],
      display: 'none',
      id: 'button-trait',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(61,61,61,0.00)']
   },
   {
      type: 'rect',
      rect: ['168px','86px','97px','32px','auto','auto'],
      display: 'none',
      id: 'button-protein',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(61,61,61,0.00)']
   },
   {
      type: 'rect',
      rect: ['265px','86px','97px','32px','auto','auto'],
      display: 'none',
      id: 'button-mutation',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(61,61,61,0.00)']
   },
   {
      type: 'rect',
      rect: ['362px','86px','218px','32px','auto','auto'],
      display: 'none',
      id: 'button-examples',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(61,61,61,0.00)']
   },
   {
      type: 'rect',
      rect: ['580px','86px','249px','32px','auto','auto'],
      display: 'none',
      id: 'button-variation',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(61,61,61,0.00)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',15,'rgba(80,80,80,1)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'text-examples',
      text: 'The FOXP2 gene is present in vertebrates, including frog, crocodile, canary, and elephant. <br><br>Certain bat species also learn sounds. They use echoes to help them navigate and locate prey in the dark. FOXP2 gene sequences differ between echolocating and non-echolocating bats, suggesting a role for FOXP2. <br><br>People with a rare FOXP2 mutation have impaired speech and language learning. A single amino acid change keeps FOXP2 from binding to DNA switches and activating genes. Neurons do not form proper connections. ',
      align: 'left',
      rect: ['81px','202px','300px','312px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'text-proteinCopy3',
      text: 'Both.<br><br>Variations in the FOXP2 gene have generated song-learners and non-learners in the bird world. FOXP2 variations have likely contributed to the evolution of bat echolocation and human speech as well. <br><br>But when functioning improperly, FOXP2 can lead to problems with language and speech.',
      align: 'left',
      rect: ['82px','200px','218px','225px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',20,'rgba(89,89,89,1.00)','700','none',''],
      type: 'text',
      text: 'Song learning in<br>birds',
      id: 'Text3Copy2',
      opacity: 1,
      align: 'center',
      rect: ['20px','219px','196px','auto','auto','auto']
   },
   {
      type: 'image',
      id: 'bird',
      opacity: 1,
      rect: ['727px','445px','112px','96px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bird.jpg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['413px','203px','385px','256px','auto','auto'],
      id: 'bats',
      fill: ['rgba(0,0,0,0)','images/bats.jpg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['366px','175px','412px','276px','auto','auto'],
      id: 'red-bird2',
      fill: ['rgba(0,0,0,0)','images/red-bird.jpg','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'closeCopy',
      symbolName: 'close'
   }   ]
   },
   states: {
      "Base State": {
         "${_button-trait}": [
            ["color", "background-color", 'rgba(61,61,61,0.00)'],
            ["style", "display", 'none'],
            ["style", "cursor", 'pointer'],
            ["style", "top", '86px']
         ],
         "${_text-examples}": [
            ["style", "top", '202px'],
            ["style", "width", '286px'],
            ["style", "height", '312px'],
            ["style", "display", 'none'],
            ["style", "left", '81px'],
            ["style", "font-size", '15px']
         ],
         "${_red-bird2}": [
            ["style", "top", '175px'],
            ["style", "display", 'none'],
            ["style", "height", '276px'],
            ["style", "left", '366px'],
            ["style", "width", '412px']
         ],
         "${_bird}": [
            ["style", "top", '445px'],
            ["style", "display", 'block'],
            ["style", "height", '96px'],
            ["style", "opacity", '1'],
            ["style", "left", '727px'],
            ["style", "width", '112px']
         ],
         "${_label-examples}": [
            ["style", "top", '126px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "height", '17px'],
            ["style", "left", '362px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '218px']
         ],
         "${_text-trait}": [
            ["style", "line-height", '20px'],
            ["color", "color", 'rgba(80,80,80,1)'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '80px'],
            ["style", "font-size", '16px'],
            ["style", "top", '200px'],
            ["style", "text-align", 'left'],
            ["style", "height", '306px'],
            ["style", "width", '198px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0']
         ],
         "${_Text5}": [
            ["style", "line-height", '20px'],
            ["style", "width", '194px'],
            ["style", "top", '8px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "font-size", '20px']
         ],
         "${_white_bkgd}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["subproperty", "boxShadow.blur", '7px'],
            ["style", "opacity", '1'],
            ["style", "left", '680px'],
            ["style", "width", '195px'],
            ["style", "top", '388px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.296875)'],
            ["style", "height", '153px'],
            ["subproperty", "boxShadow.spread", '0px'],
            ["subproperty", "boxShadow.offsetH", '2px'],
            ["subproperty", "boxShadow.offsetV", '2px']
         ],
         "${_bkgd-protein}": [
            ["color", "background-color", 'rgba(169,169,169,1)'],
            ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '168px'],
            ["style", "width", '97px'],
            ["style", "top", '119px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'none'],
            ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_button-variation}": [
            ["color", "background-color", 'rgba(61,61,61,0)'],
            ["style", "top", '86px'],
            ["style", "display", 'none'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '580px'],
            ["style", "width", '249px']
         ],
         "${_button-examples}": [
            ["color", "background-color", 'rgba(61,61,61,0)'],
            ["style", "top", '86px'],
            ["style", "display", 'none'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '362px'],
            ["style", "width", '218px']
         ],
         "${_bkgd-mutation}": [
            ["color", "background-color", 'rgba(169,169,169,1)'],
            ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '265px'],
            ["style", "width", '97px'],
            ["style", "top", '119px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'none'],
            ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_label-mutation}": [
            ["style", "top", '126px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "left", '265px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '97px']
         ],
         "${_bkgd-examples}": [
            ["color", "background-color", 'rgba(169,169,169,1)'],
            ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '218px'],
            ["style", "top", '119px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'none'],
            ["style", "left", '362px']
         ],
         "${_closeCopy}": [
            ["style", "top", '122px'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "left", '785px'],
            ["style", "cursor", 'pointer']
         ],
         "${_label-variation}": [
            ["style", "top", '126px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "height", '17px'],
            ["style", "left", '580px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '249px']
         ],
         "${_black_bkgd}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(61,61,61,1.00)'],
            ["style", "height", '600px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '900px']
         ],
         "${_text-proteinCopy3}": [
            ["style", "top", '200px'],
            ["style", "display", 'none'],
            ["style", "height", '225px'],
            ["style", "left", '82px'],
            ["style", "width", '218px']
         ],
         "${_text-protein}": [
            ["style", "top", '200px'],
            ["style", "height", '225px'],
            ["style", "display", 'none'],
            ["style", "left", '82px'],
            ["style", "width", '232px']
         ],
         "${_text-mutation}": [
            ["style", "top", '200px'],
            ["style", "display", 'none'],
            ["style", "height", '225px'],
            ["style", "left", '82px'],
            ["style", "width", '260px']
         ],
         "${_bats}": [
            ["style", "top", '203px'],
            ["style", "height", '256px'],
            ["style", "display", 'none'],
            ["style", "left", '413px'],
            ["style", "width", '385px']
         ],
         "${_Text3Copy2}": [
            ["style", "line-height", '20px'],
            ["color", "color", 'rgba(89,89,89,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '680px'],
            ["style", "width", '196px'],
            ["style", "top", '399px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '20px'],
            ["style", "opacity", '1']
         ],
         "${symbolSelector}": [
            ["style", "height", '600px'],
            ["style", "width", '900px']
         ],
         "${_button-mutation}": [
            ["style", "top", '86px'],
            ["style", "display", 'none'],
            ["color", "background-color", 'rgba(61,61,61,0)'],
            ["style", "left", '265px'],
            ["style", "cursor", 'pointer']
         ],
         "${_bkgd-variation}": [
            ["color", "background-color", 'rgba(169,169,169,1)'],
            ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '580px'],
            ["style", "width", '249px'],
            ["style", "top", '119px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'none'],
            ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_bkgd-trait}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '71px'],
            ["style", "width", '97px'],
            ["style", "top", '119px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'none'],
            ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_birds-dna}": [
            ["style", "top", '239px'],
            ["style", "left", '422px'],
            ["style", "display", 'none']
         ],
         "${_button-protein}": [
            ["style", "top", '86px'],
            ["style", "display", 'none'],
            ["color", "background-color", 'rgba(61,61,61,0)'],
            ["style", "left", '168px'],
            ["style", "cursor", 'pointer']
         ],
         "${_text-traitCopy}": [
            ["style", "line-height", '20px'],
            ["color", "color", 'rgba(80,80,80,1)'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '82px'],
            ["style", "font-size", '16px'],
            ["style", "top", '187px'],
            ["style", "height", '306px'],
            ["style", "opacity", '0'],
            ["style", "display", 'none'],
            ["style", "width", '198px']
         ],
         "${_birds-protein}": [
            ["style", "top", '173px'],
            ["style", "left", '349px'],
            ["style", "display", 'none']
         ],
         "${_label-protein}": [
            ["style", "top", '126px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "left", '168px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '97px']
         ],
         "${_label-trait}": [
            ["style", "top", '126px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "left", '71px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '97px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4000,
         autoPlay: true,
         labels: {
            "trait": 2000,
            "protein": 2500,
            "mutation": 3000,
            "examples": 3500,
            "variation": 4000
         },
         timeline: [
            { id: "eid120", tween: [ "style", "${_text-protein}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
            { id: "eid121", tween: [ "style", "${_text-protein}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
            { id: "eid360", tween: [ "style", "${_bird}", "top", '181px', { fromValue: '445px'}], position: 500, duration: 1000 },
            { id: "eid141", tween: [ "style", "${_Text3Copy2}", "top", '144px', { fromValue: '399px'}], position: 500, duration: 1000 },
            { id: "eid69", tween: [ "style", "${_label-examples}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid58", tween: [ "style", "${_label-examples}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid357", tween: [ "style", "${_bird}", "height", '343px', { fromValue: '96px'}], position: 500, duration: 1000 },
            { id: "eid65", tween: [ "style", "${_label-protein}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid54", tween: [ "style", "${_label-protein}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid68", tween: [ "style", "${_bkgd-examples}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid57", tween: [ "style", "${_bkgd-examples}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid40", tween: [ "style", "${_bkgd-trait}", "top", '86px', { fromValue: '119px'}], position: 1500, duration: 500 },
            { id: "eid104", tween: [ "color", "${_bkgd-examples}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 2000, duration: 0 },
            { id: "eid105", tween: [ "color", "${_bkgd-examples}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 3500, duration: 0 },
            { id: "eid106", tween: [ "color", "${_bkgd-examples}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 4000, duration: 0 },
            { id: "eid44", tween: [ "style", "${_bkgd-variation}", "top", '86px', { fromValue: '119px'}], position: 1500, duration: 500 },
            { id: "eid358", tween: [ "style", "${_bird}", "width", '400px', { fromValue: '112px'}], position: 500, duration: 1000 },
            { id: "eid128", tween: [ "style", "${_text-proteinCopy3}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid84", tween: [ "style", "${_button-mutation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid89", tween: [ "style", "${_button-mutation}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid15", tween: [ "style", "${_white_bkgd}", "top", '115px', { fromValue: '388px'}], position: 500, duration: 1000 },
            { id: "eid34", tween: [ "style", "${_label-examples}", "top", '93px', { fromValue: '126px'}], position: 1500, duration: 500 },
            { id: "eid29", tween: [ "style", "${_closeCopy}", "opacity", '1', { fromValue: '0.000000'}], position: 1500, duration: 500 },
            { id: "eid126", tween: [ "style", "${_text-examples}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
            { id: "eid127", tween: [ "style", "${_text-examples}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
            { id: "eid373", tween: [ "style", "${_birds-protein}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
            { id: "eid374", tween: [ "style", "${_birds-protein}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
            { id: "eid174", tween: [ "style", "${_text-protein}", "width", '232px', { fromValue: '232px'}], position: 2535, duration: 0 },
            { id: "eid67", tween: [ "style", "${_label-mutation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid56", tween: [ "style", "${_label-mutation}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid16", tween: [ "style", "${_white_bkgd}", "width", '764px', { fromValue: '195px'}], position: 500, duration: 1000 },
            { id: "eid96", tween: [ "color", "${_bkgd-protein}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 2000, duration: 0 },
            { id: "eid97", tween: [ "color", "${_bkgd-protein}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 2500, duration: 0 },
            { id: "eid98", tween: [ "color", "${_bkgd-protein}", "background-color", 'rgba(170,170,170,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 3000, duration: 0 },
            { id: "eid85", tween: [ "style", "${_button-protein}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid90", tween: [ "style", "${_button-protein}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid61", tween: [ "style", "${_label-variation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid60", tween: [ "style", "${_label-variation}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid101", tween: [ "color", "${_bkgd-mutation}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 2000, duration: 0 },
            { id: "eid102", tween: [ "color", "${_bkgd-mutation}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 3000, duration: 0 },
            { id: "eid103", tween: [ "color", "${_bkgd-mutation}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 3500, duration: 0 },
            { id: "eid66", tween: [ "style", "${_bkgd-mutation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid55", tween: [ "style", "${_bkgd-mutation}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid107", tween: [ "color", "${_bkgd-variation}", "background-color", 'rgba(169,169,169,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 2000, duration: 0 },
            { id: "eid108", tween: [ "color", "${_bkgd-variation}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,169,169,1)'}], position: 4000, duration: 0 },
            { id: "eid14", tween: [ "style", "${_white_bkgd}", "height", '410px', { fromValue: '153px'}], position: 500, duration: 1000 },
            { id: "eid48", tween: [ "style", "${_label-protein}", "top", '93px', { fromValue: '126px'}], position: 1500, duration: 500 },
            { id: "eid175", tween: [ "style", "${_text-examples}", "width", '286px', { fromValue: '286px'}], position: 3500, duration: 0 },
            { id: "eid32", tween: [ "style", "${_bkgd-mutation}", "top", '86px', { fromValue: '119px'}], position: 1500, duration: 500 },
            { id: "eid46", tween: [ "style", "${_label-trait}", "top", '93px', { fromValue: '126px'}], position: 1500, duration: 500 },
            { id: "eid64", tween: [ "style", "${_bkgd-protein}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid53", tween: [ "style", "${_bkgd-protein}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid124", tween: [ "style", "${_text-mutation}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid125", tween: [ "style", "${_text-mutation}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0 },
            { id: "eid70", tween: [ "style", "${_bkgd-variation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid59", tween: [ "style", "${_bkgd-variation}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid30", tween: [ "style", "${_text-trait}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500 },
            { id: "eid99", tween: [ "color", "${_bkgd-trait}", "background-color", 'rgba(255,255,255,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 2000, duration: 0 },
            { id: "eid100", tween: [ "color", "${_bkgd-trait}", "background-color", 'rgba(170,170,170,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 2500, duration: 0 },
            { id: "eid140", tween: [ "style", "${_Text3Copy2}", "left", '81px', { fromValue: '680px'}], position: 500, duration: 1000 },
            { id: "eid42", tween: [ "style", "${_label-mutation}", "top", '93px', { fromValue: '126px'}], position: 1500, duration: 500 },
            { id: "eid38", tween: [ "style", "${_label-variation}", "top", '94px', { fromValue: '126px'}], position: 1500, duration: 500 },
            { id: "eid63", tween: [ "style", "${_bkgd-trait}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid52", tween: [ "style", "${_bkgd-trait}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid375", tween: [ "style", "${_birds-dna}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid376", tween: [ "style", "${_birds-dna}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0 },
            { id: "eid50", tween: [ "style", "${_bkgd-examples}", "top", '86px', { fromValue: '119px'}], position: 1500, duration: 500 },
            { id: "eid17", tween: [ "style", "${_white_bkgd}", "left", '68px', { fromValue: '680px'}], position: 500, duration: 1000 },
            { id: "eid365", tween: [ "style", "${_bats}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid366", tween: [ "style", "${_bats}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
            { id: "eid364", tween: [ "style", "${_bats}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
            { id: "eid82", tween: [ "style", "${_button-variation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid87", tween: [ "style", "${_button-variation}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid86", tween: [ "style", "${_button-trait}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid91", tween: [ "style", "${_button-trait}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid83", tween: [ "style", "${_button-examples}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid88", tween: [ "style", "${_button-examples}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid359", tween: [ "style", "${_bird}", "left", '332px', { fromValue: '727px'}], position: 500, duration: 1000 },
            { id: "eid385", tween: [ "style", "${_red-bird2}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid25", tween: [ "style", "${_black_bkgd}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid361", tween: [ "style", "${_bird}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
            { id: "eid114", tween: [ "style", "${_text-trait}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid116", tween: [ "style", "${_text-trait}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
            { id: "eid62", tween: [ "style", "${_label-trait}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid51", tween: [ "style", "${_label-trait}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid36", tween: [ "style", "${_bkgd-protein}", "top", '86px', { fromValue: '119px'}], position: 1500, duration: 500 }         ]
      }
   }
},
"curly-examples": {
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
      id: 'bird-feathers',
      type: 'image',
      rect: ['357px','270px','349px','262px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bird-feathers.jpg','0px','0px']
   },
   {
      id: 'claws',
      type: 'image',
      rect: ['0px','271px','350px','263px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/claws.jpg','0px','0px']
   },
   {
      id: 'goat-horns3',
      type: 'image',
      rect: ['1px','1px','349px','262px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/goat-horns.jpg','0px','0px']
   },
   {
      id: 'turtle',
      type: 'image',
      rect: ['357px','0px','350px','263px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/turtle.jpg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_bird-feathers}": [
            ["style", "left", '357px'],
            ["style", "top", '270px']
         ],
         "${_goat-horns3}": [
            ["style", "top", '1px'],
            ["style", "height", '262px'],
            ["style", "left", '1px'],
            ["style", "width", '349px']
         ],
         "${symbolSelector}": [
            ["style", "height", '534px'],
            ["style", "width", '707px']
         ],
         "${_claws}": [
            ["style", "height", '263px'],
            ["style", "top", '271px'],
            ["style", "left", '0px'],
            ["style", "width", '350px']
         ],
         "${_turtle}": [
            ["style", "height", '263px'],
            ["style", "top", '0px'],
            ["style", "left", '357px'],
            ["style", "width", '350px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"peas-s": {
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
      rect: ['77px','0px','215px','199px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)'],
      id: 'Rectangle3',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      boxShadow: ['',2,2,6,0,'rgba(0,0,0,0.36)']
   },
   {
      rect: ['0px','3px','291px','193px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/peas-smooth.jpg','0px','0px'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0.64)',0,0,0],
      id: 'peas-smooth',
      type: 'image',
      clip: ['rect(0px 289px 193px 80px)'],
      boxShadow: ['',3,3,3,6,'rgba(0,0,0,0.71875)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle3}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "boxShadow.blur", '6px'],
            ["style", "left", '77px'],
            ["style", "width", '215px'],
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.offsetV", '2px'],
            ["style", "height", '199px'],
            ["subproperty", "boxShadow.spread", '0px'],
            ["subproperty", "boxShadow.offsetH", '2px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.36)']
         ],
         "${_peas-smooth}": [
            ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.64)'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "left", '0px'],
            ["style", "width", '291px'],
            ["style", "top", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.71875)'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "height", '193px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["style", "clip", [0,289,193,80], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["subproperty", "boxShadow.spread", '6px']
         ],
         "${symbolSelector}": [
            ["style", "height", '199px'],
            ["style", "width", '292px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"peas-r": {
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
      rect: ['77px','0px','215px','199px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)'],
      id: 'Rectangle3',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      boxShadow: ['',2,2,6,0,'rgba(0,0,0,0.36)']
   },
   {
      rect: ['0px','3px','291px','193px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/peas-smooth.jpg','0px','0px'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0.64)',0,0,0],
      id: 'peas-smooth',
      type: 'image',
      clip: ['rect(0px 289px 193px 80px)'],
      boxShadow: ['',3,3,3,6,'rgba(0,0,0,0.71875)']
   },
   {
      type: 'image',
      id: 'peas-wrinkled2',
      rect: ['11px','-51px','347px','300px','auto','auto'],
      clip: ['rect(54px 278px 247px 69px)'],
      fill: ['rgba(0,0,0,0)','images/peas-wrinkled.jpg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_peas-smooth}": [
            ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.64)'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "left", '0px'],
            ["style", "width", '291px'],
            ["style", "top", '3px'],
            ["subproperty", "boxShadow.spread", '6px'],
            ["style", "clip", [0,289,193,80], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "height", '193px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.71875)']
         ],
         "${_Rectangle3}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "boxShadow.blur", '6px'],
            ["style", "left", '77px'],
            ["style", "width", '215px'],
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.36)'],
            ["style", "height", '199px'],
            ["subproperty", "boxShadow.offsetV", '2px'],
            ["subproperty", "boxShadow.offsetH", '2px'],
            ["subproperty", "boxShadow.spread", '0px']
         ],
         "${_peas-wrinkled2}": [
            ["style", "top", '-51px'],
            ["style", "height", '300px'],
            ["style", "left", '11px'],
            ["style", "clip", [54,278,247,69], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "width", '347px']
         ],
         "${symbolSelector}": [
            ["style", "height", '199px'],
            ["style", "width", '292px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
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
})(jQuery, AdobeEdge, "EDGE-10667135");

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
            id:'photo2',
            type:'image',
            rect:['43px','0','506px','534px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"photo.jpg",'0px','0px']
         },
         {
            id:'highlight-wetlands2',
            type:'rect',
            rect:['53','25','auto','auto','auto','auto']
         },
         {
            id:'highlight-bear2',
            type:'rect',
            rect:['302px','94','auto','auto','auto','auto']
         },
         {
            id:'highlight-farmington2',
            type:'rect',
            rect:['382','270','auto','auto','auto','auto']
         },
         {
            id:'highlight-gilbert2',
            type:'rect',
            rect:['184','231','auto','auto','auto','auto']
         },
         {
            id:'highlight-gunnison2',
            type:'rect',
            rect:['105','53','auto','auto','auto','auto']
         },
         {
            id:'highlight-ogden2',
            type:'rect',
            rect:['318','215','auto','auto','auto','auto']
         },
         {
            id:'highlight-ponds2',
            type:'rect',
            rect:['104','168','auto','auto','auto','auto']
         },
         {
            id:'Text',
            type:'text',
            rect:['10','263px','auto','auto','auto','auto'],
            text:"Select a region<br>to learn more:",
            font:['Arial, Helvetica, sans-serif',20,"rgba(61,61,61,1.00)","normal","none",""]
         },
         {
            id:'button-bear',
            type:'rect',
            rect:['10','386','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'button-gilbert',
            type:'rect',
            rect:['10','445','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'button-gunnison',
            type:'rect',
            rect:['10','475','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'button-farmington',
            type:'rect',
            rect:['10','415','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'button-ponds',
            type:'rect',
            rect:['10','506','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'button-wetlands',
            type:'rect',
            rect:['10','536','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'button-ogden',
            type:'rect',
            rect:['10px','435px','auto','auto','auto','auto']
         },
         {
            id:'info-bear',
            display:'none',
            type:'rect',
            rect:['31px','75px','auto','auto','auto','auto']
         },
         {
            id:'info-farmington',
            display:'none',
            type:'rect',
            rect:['31px','75px','auto','auto','auto','auto']
         },
         {
            id:'info-gilbert',
            display:'none',
            type:'rect',
            rect:['31px','75px','auto','auto','auto','auto']
         },
         {
            id:'info-gunnison',
            display:'none',
            type:'rect',
            rect:['31px','76px','auto','auto','auto','auto']
         },
         {
            id:'info-ogden',
            display:'none',
            type:'rect',
            rect:['32px','75px','auto','auto','auto','auto']
         },
         {
            id:'info-ponds',
            display:'none',
            type:'rect',
            rect:['31px','76px','auto','auto','auto','auto']
         },
         {
            id:'info-wetlands',
            display:'none',
            type:'rect',
            rect:['32px','75px','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'button-farmington',
            symbolName:'button-farmington'
         },
         {
            id:'info-ponds',
            symbolName:'info-ponds'
         },
         {
            id:'button-wetlands',
            symbolName:'button-wetlands'
         },
         {
            id:'highlight-gunnison2',
            symbolName:'highlight-gunnison'
         },
         {
            id:'button-gunnison',
            symbolName:'button-gunnison'
         },
         {
            id:'info-gilbert',
            symbolName:'info-gilbert'
         },
         {
            id:'info-gunnison',
            symbolName:'info-gunnison'
         },
         {
            id:'info-ogden',
            symbolName:'info-ogden'
         },
         {
            id:'info-wetlands',
            symbolName:'info-wetlands'
         },
         {
            id:'info-farmington',
            symbolName:'info-farmington'
         },
         {
            id:'highlight-ogden2',
            symbolName:'highlight-ogden'
         },
         {
            id:'highlight-wetlands2',
            symbolName:'highlight-wetlands'
         },
         {
            id:'button-ogden',
            symbolName:'button-ogden'
         },
         {
            id:'info-bear',
            symbolName:'info-bear'
         },
         {
            id:'button-ponds',
            symbolName:'button-ponds'
         },
         {
            id:'highlight-gilbert2',
            symbolName:'highlight-gilbert'
         },
         {
            id:'highlight-farmington2',
            symbolName:'highlight-farmington'
         },
         {
            id:'highlight-bear2',
            symbolName:'highlight-bear'
         },
         {
            id:'button-gilbert',
            symbolName:'button-gilbert'
         },
         {
            id:'button-bear',
            symbolName:'button-bear'
         },
         {
            id:'highlight-ponds2',
            symbolName:'highlight-ponds'
         }
         ]
      },
   states: {
      "Base State": {
         "${_highlight-bear2}": [
            ["style", "display", 'block'],
            ["style", "left", '302px']
         ],
         "${_button-ponds}": [
            ["style", "top", '466px'],
            ["style", "cursor", 'pointer']
         ],
         "${_info-bear}": [
            ["style", "top", '75px'],
            ["style", "left", '31px'],
            ["style", "display", 'none']
         ],
         "${_info-wetlands}": [
            ["style", "top", '75px'],
            ["style", "left", '32px'],
            ["style", "display", 'none']
         ],
         "${_info-gunnison}": [
            ["style", "top", '76px'],
            ["style", "left", '31px'],
            ["style", "display", 'none']
         ],
         "${_button-gunnison}": [
            ["style", "top", '404px'],
            ["style", "cursor", 'pointer']
         ],
         "${_button-bear}": [
            ["style", "top", '315px'],
            ["style", "cursor", 'pointer']
         ],
         "${_button-wetlands}": [
            ["style", "top", '496px'],
            ["style", "cursor", 'pointer']
         ],
         "${_button-gilbert}": [
            ["style", "top", '374px'],
            ["style", "cursor", 'pointer']
         ],
         "${_info-farmington}": [
            ["style", "top", '75px'],
            ["style", "left", '31px'],
            ["style", "display", 'none']
         ],
         "${_photo2}": [
            ["style", "left", '43px']
         ],
         "${_info-ogden}": [
            ["style", "top", '75px'],
            ["style", "left", '32px'],
            ["style", "display", 'none']
         ],
         "${_Text}": [
            ["color", "color", 'rgba(61,61,61,1.00)'],
            ["style", "top", '263px'],
            ["style", "font-size", '20px']
         ],
         "${_button-ogden}": [
            ["style", "left", '10px'],
            ["style", "top", '435px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '535px'],
            ["style", "width", '550px']
         ],
         "${_info-ponds}": [
            ["style", "top", '76px'],
            ["style", "left", '31px'],
            ["style", "display", 'none']
         ],
         "${_button-farmington}": [
            ["style", "top", '344px'],
            ["style", "cursor", 'pointer']
         ],
         "${_info-gilbert}": [
            ["style", "top", '75px'],
            ["style", "left", '31px'],
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
            { id: "eid50", tween: [ "style", "${_button-wetlands}", "top", '496px', { fromValue: '496px'}], position: 0, duration: 0 },
            { id: "eid46", tween: [ "style", "${_button-ponds}", "top", '466px', { fromValue: '466px'}], position: 0, duration: 0 },
            { id: "eid199", tween: [ "style", "${_info-gunnison}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid62", tween: [ "style", "${_highlight-bear2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid214", tween: [ "style", "${_info-ogden}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid128", tween: [ "style", "${_info-farmington}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid45", tween: [ "style", "${_button-gilbert}", "top", '374px', { fromValue: '374px'}], position: 0, duration: 0 },
            { id: "eid47", tween: [ "style", "${_button-gunnison}", "top", '404px', { fromValue: '404px'}], position: 0, duration: 0 },
            { id: "eid48", tween: [ "style", "${_button-bear}", "top", '315px', { fromValue: '315px'}], position: 0, duration: 0 },
            { id: "eid188", tween: [ "style", "${_info-gilbert}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid49", tween: [ "style", "${_button-farmington}", "top", '344px', { fromValue: '344px'}], position: 0, duration: 0 },
            { id: "eid127", tween: [ "style", "${_info-bear}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid238", tween: [ "style", "${_info-wetlands}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid225", tween: [ "style", "${_info-ponds}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid60", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_button-farmington}', [] ], ""], position: 0 },
            { id: "eid61", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_button-bear}', [] ], ""], position: 0 },
            { id: "eid65", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_highlight-bear2}', [] ], ""], position: 0 }         ]
      }
   }
},
"button-bear": {
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
      font: ['Arial, Helvetica, sans-serif',18,'rgba(35,85,100,1.00)','500','none',''],
      id: 'TextCopy',
      text: '• Bear River Bay',
      type: 'text',
      rect: ['1px','3px','auto','auto','auto','auto']
   },
   {
      rect: ['0px','0px','168px','29px','auto','auto'],
      opacity: 0,
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle}": [
            ["style", "top", '0px'],
            ["style", "height", '29px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '168px']
         ],
         "${_TextCopy}": [
            ["style", "top", '3px'],
            ["color", "color", 'rgba(60,60,60,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '1px'],
            ["style", "font-size", '18px']
         ],
         "${symbolSelector}": [
            ["style", "height", '29px'],
            ["style", "width", '168px']
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
            { id: "eid52", tween: [ "color", "${_TextCopy}", "color", 'rgba(35,85,100,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(60,60,60,1.00)'}], position: 0, duration: 250 }         ]
      }
   }
},
"button-farmington": {
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
      font: ['Arial, Helvetica, sans-serif',18,'rgba(61,61,61,1.00)','500','none',''],
      id: 'TextCopy4',
      text: '• Farmington Bay',
      type: 'text',
      rect: ['1px','4px','auto','auto','auto','auto']
   },
   {
      type: 'rect',
      id: 'RectangleCopy',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['0px','0px','168px','30px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_TextCopy4}": [
            ["style", "top", '4px'],
            ["color", "color", 'rgba(61,61,61,1)'],
            ["style", "font-weight", '500'],
            ["style", "left", '1px'],
            ["style", "font-size", '18px']
         ],
         "${_RectangleCopy}": [
            ["style", "top", '0px'],
            ["style", "height", '30px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '168px']
         ],
         "${symbolSelector}": [
            ["style", "height", '30px'],
            ["style", "width", '168px']
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
            { id: "eid53", tween: [ "color", "${_TextCopy4}", "color", 'rgba(35,85,100,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(61,61,61,1)'}], position: 0, duration: 250 }         ]
      }
   }
},
"button-gilbert": {
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
      font: ['Arial, Helvetica, sans-serif',18,'rgba(61,61,61,1.00)','500','none',''],
      id: 'TextCopy2',
      text: '• Gilbert Bay',
      type: 'text',
      rect: ['1px','4px','auto','auto','auto','auto']
   },
   {
      type: 'rect',
      id: 'RectangleCopy2',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['0px','0px','168px','30px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RectangleCopy2}": [
            ["style", "top", '0px'],
            ["style", "height", '30px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '168px']
         ],
         "${symbolSelector}": [
            ["style", "height", '30px'],
            ["style", "width", '168px']
         ],
         "${_TextCopy2}": [
            ["style", "top", '4px'],
            ["color", "color", 'rgba(61,61,61,1)'],
            ["style", "font-weight", '500'],
            ["style", "left", '1px'],
            ["style", "font-size", '18px']
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
            { id: "eid54", tween: [ "color", "${_TextCopy2}", "color", 'rgba(35,85,100,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(61,61,61,1)'}], position: 0, duration: 250 }         ]
      }
   }
},
"button-gunnison": {
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
      font: ['Arial, Helvetica, sans-serif',18,'rgba(61,61,61,1.00)','500','none',''],
      id: 'TextCopy3',
      text: '• Gunnison Bay',
      type: 'text',
      rect: ['1px','4px','auto','auto','auto','auto']
   },
   {
      type: 'rect',
      id: 'RectangleCopy3',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['0px','0px','168px','31px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RectangleCopy3}": [
            ["style", "top", '0px'],
            ["style", "height", '31px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '168px']
         ],
         "${_TextCopy3}": [
            ["style", "top", '4px'],
            ["color", "color", 'rgba(61,61,61,1)'],
            ["style", "font-weight", '500'],
            ["style", "left", '1px'],
            ["style", "font-size", '18px']
         ],
         "${symbolSelector}": [
            ["style", "height", '31px'],
            ["style", "width", '168px']
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
            { id: "eid55", tween: [ "color", "${_TextCopy3}", "color", 'rgba(35,85,100,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(61,61,61,1)'}], position: 0, duration: 250 }         ]
      }
   }
},
"button-ponds": {
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
      font: ['Arial, Helvetica, sans-serif',18,'rgba(61,61,61,1.00)','500','none',''],
      id: 'TextCopy5',
      text: '• Evaporation ponds',
      type: 'text',
      rect: ['1px','3px','auto','auto','auto','auto']
   },
   {
      type: 'rect',
      id: 'RectangleCopy4',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['0px','0px','168px','30px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RectangleCopy4}": [
            ["style", "top", '0px'],
            ["style", "height", '30px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '168px']
         ],
         "${_TextCopy5}": [
            ["style", "top", '3px'],
            ["color", "color", 'rgba(61,61,61,1)'],
            ["style", "font-weight", '500'],
            ["style", "left", '1px'],
            ["style", "font-size", '18px']
         ],
         "${symbolSelector}": [
            ["style", "height", '30px'],
            ["style", "width", '168px']
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
            { id: "eid58", tween: [ "color", "${_TextCopy5}", "color", 'rgba(35,85,100,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(61,61,61,1)'}], position: 0, duration: 250 }         ]
      }
   }
},
"button-wetlands": {
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
      font: ['Arial, Helvetica, sans-serif',18,'rgba(61,61,61,1.00)','500','none',''],
      id: 'TextCopy6',
      text: '• Wetlands',
      type: 'text',
      rect: ['1px','3px','auto','auto','auto','auto']
   },
   {
      type: 'rect',
      id: 'RectangleCopy5',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['0px','0px','168px','28px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RectangleCopy5}": [
            ["style", "top", '0px'],
            ["style", "height", '28px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '168px']
         ],
         "${_TextCopy6}": [
            ["style", "top", '3px'],
            ["color", "color", 'rgba(61,61,61,1)'],
            ["style", "font-weight", '500'],
            ["style", "left", '1px'],
            ["style", "font-size", '18px']
         ],
         "${symbolSelector}": [
            ["style", "height", '28px'],
            ["style", "width", '168px']
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
            { id: "eid59", tween: [ "color", "${_TextCopy6}", "color", 'rgba(35,85,100,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(61,61,61,1)'}], position: 0, duration: 250 }         ]
      }
   }
},
"highlight-bear": {
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
      id: 'highlight-bear',
      opacity: 1,
      rect: ['0px','0px','118px','136px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/highlight-bear.jpg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_highlight-bear}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${symbolSelector}": [
            ["style", "height", '136px'],
            ["style", "width", '118px']
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
            { id: "eid13", tween: [ "style", "${_highlight-bear}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid64", tween: [ "style", "${_highlight-bear}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 }         ]
      }
   }
},
"highlight-farmington": {
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
      id: 'highlight-farmington',
      opacity: 1,
      rect: ['0px','0px','105px','103px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/highlight-farmington.jpg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_highlight-farmington}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${symbolSelector}": [
            ["style", "height", '103px'],
            ["style", "width", '105px']
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
            { id: "eid12", tween: [ "style", "${_highlight-farmington}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid75", tween: [ "style", "${_highlight-farmington}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 }         ]
      }
   }
},
"highlight-gilbert": {
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
      id: 'highlight-gilbert',
      opacity: 1,
      rect: ['0px','0px','246px','231px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/highlight-gilbert.jpg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_highlight-gilbert}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${symbolSelector}": [
            ["style", "height", '231px'],
            ["style", "width", '246px']
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
            { id: "eid10", tween: [ "style", "${_highlight-gilbert}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid73", tween: [ "style", "${_highlight-gilbert}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 }         ]
      }
   }
},
"highlight-gunnison": {
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
      id: 'highlight-gunnison',
      opacity: 1,
      rect: ['0px','0px','203px','199px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/highlight-gunnison.jpg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_highlight-gunnison}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${symbolSelector}": [
            ["style", "height", '199px'],
            ["style", "width", '203px']
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
            { id: "eid11", tween: [ "style", "${_highlight-gunnison}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid71", tween: [ "style", "${_highlight-gunnison}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 }         ]
      }
   }
},
"highlight-ogden": {
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
      id: 'highlight-ogden',
      opacity: 1,
      rect: ['0px','0px','103px','77px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/highlight-ogden.jpg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_highlight-ogden}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${symbolSelector}": [
            ["style", "height", '77px'],
            ["style", "width", '103px']
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
            { id: "eid14", tween: [ "style", "${_highlight-ogden}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid69", tween: [ "style", "${_highlight-ogden}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 }         ]
      }
   }
},
"highlight-ponds": {
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
      id: 'highlight-ponds',
      opacity: 1,
      rect: ['0px','0px','279px','275px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/highlight-ponds.jpg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_highlight-ponds}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${symbolSelector}": [
            ["style", "height", '275px'],
            ["style", "width", '279px']
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
            { id: "eid9", tween: [ "style", "${_highlight-ponds}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid67", tween: [ "style", "${_highlight-ponds}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 }         ]
      }
   }
},
"highlight-wetlands": {
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
      id: 'highlight-wetlands',
      opacity: 1,
      rect: ['19px','0px','426px','443px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/highlight-wetlands.jpg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_highlight-wetlands}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '19px'],
            ["style", "display", 'block']
         ],
         "${symbolSelector}": [
            ["style", "height", '443px'],
            ["style", "width", '426px']
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
            { id: "eid8", tween: [ "style", "${_highlight-wetlands}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid77", tween: [ "style", "${_highlight-wetlands}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 }         ]
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
      rect: ['-32px','-76px','549px','535px','auto','auto'],
      opacity: 0.6,
      id: 'Rectangle4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['-8px','-45px','497px','469px','auto','auto'],
      fill: ['rgba(228,238,241,1.00)'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      boxShadow: ['',2,3,10,0,'rgba(0,0,0,0.40)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',14,'rgba(60,60,60,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2Copy4',
      text: 'Inside dormant cysts* are embryos suspended at the gastrula stage of development. The embryos can remain dormant in harsh conditions for many years. On the shores of Great Salt Lake, they freeze in the winter and bake in the dry summer heat. They can even survive in outer space! ',
      align: 'left',
      rect: ['17px','244px','462px','72px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',12,'rgba(60,60,60,1)','normal','none','italic'],
      type: 'text',
      id: 'Text2Copy5',
      text: '* Dormant cysts are known by many names, including encysted embryos, winter cysts, or just plain cysts.<br>',
      align: 'left',
      rect: ['17px','338px','462px','62px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal'],
      type: 'text',
      id: 'Text2Copy3',
      text: '1 of 3',
      align: 'left',
      rect: ['17px','390px','auto','auto','auto','auto']
   },
   {
      id: 'cyst0025',
      type: 'image',
      rect: ['15px','21px','450px','207px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cyst0025.jpg','0px','0px']
   },
   {
      font: ['Arial, Helvetica, sans-serif',14,'rgba(60,60,60,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2Copy2',
      text: 'Cysts are tiny—just 0.2 to 0.25 mm across. They\'re also clingy, a characteristic that makes it easy for them to hitch a ride on migrating birds.<br>',
      align: 'left',
      rect: ['17px','314px','462px','72px','auto','auto']
   },
   {
      id: 'cysts-dime',
      type: 'image',
      rect: ['35px','21px','432px','280px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cysts-dime.jpg','0px','0px']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal'],
      type: 'text',
      id: 'Text2Copy',
      text: '2 of 3',
      align: 'left',
      rect: ['17px','390px','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',14,'rgba(60,60,60,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2Copy7',
      text: 'In the fall, brine shrimp release huge quantities of cysts into Great Salt Lake. Massive clouds of cysts float on the water, and piles wash up on shore. Commercial fishing vessels collect tons of cysts in the fall and sell them as food to commercial fish hatcheries.',
      align: 'left',
      rect: ['17px','299px','462px','72px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',11,'rgba(60,60,60,1)','normal','none','italic'],
      type: 'text',
      id: 'Text2Copy8',
      text: 'Cysts wash up on shore forming dark bands along the water\'s edge, by Bonnie Baxter.',
      align: 'left',
      rect: ['17px','264px','455px','37px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal'],
      type: 'text',
      id: 'Text2Copy6',
      text: '3 of 3',
      align: 'left',
      rect: ['17px','390px','auto','auto','auto','auto']
   },
   {
      rect: ['123px','413px','auto','auto','auto','auto'],
      display: 'none',
      type: 'rect',
      cursor: ['pointer'],
      id: 'button-previous'
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','normal','none','italic'],
      type: 'text',
      id: 'Text2',
      text: 'Dormant cysts',
      align: 'left',
      rect: ['17px','-30px','auto','auto','auto','auto']
   },
   {
      id: 'button-close',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['412px','-39px','auto','auto','auto','auto']
   },
   {
      id: 'button-more',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['413px','382px','auto','auto','auto','auto']
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
            ["style", "top", '390px'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", 'bold'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "font-size", '16px']
         ],
         "${_cyst0025}": [
            ["style", "top", '21px'],
            ["style", "opacity", '0'],
            ["style", "left", '15px']
         ],
         "${_Text2Copy2}": [
            ["style", "line-height", '18px'],
            ["style", "font-size", '14px'],
            ["style", "top", '314px'],
            ["style", "font-style", 'normal'],
            ["style", "height", '72px'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
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
            ["style", "left", '-8px'],
            ["style", "width", '497px'],
            ["style", "top", '-45px'],
            ["style", "height", '469px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '2px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.40)']
         ],
         "${_Rectangle4}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '-76px'],
            ["style", "height", '535px'],
            ["style", "opacity", '0'],
            ["style", "left", '-32px'],
            ["style", "width", '549px']
         ],
         "${_cysts-dime}": [
            ["style", "top", '21px'],
            ["style", "opacity", '0'],
            ["style", "left", '35px']
         ],
         "${_button-more}": [
            ["style", "top", '382px'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '413px']
         ],
         "${_Text2Copy6}": [
            ["style", "top", '390px'],
            ["style", "text-align", 'left'],
            ["style", "opacity", '0'],
            ["style", "font-style", 'normal'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '17px'],
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
            ["style", "top", '338px'],
            ["style", "height", '62px'],
            ["style", "font-style", 'italic'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "width", '462px']
         ],
         "${_Text2Copy4}": [
            ["style", "top", '244px'],
            ["style", "width", '462px'],
            ["style", "line-height", '18px'],
            ["style", "height", '72px'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "font-size", '14px']
         ],
         "${_Text2Copy8}": [
            ["style", "line-height", '18px'],
            ["style", "font-size", '11px'],
            ["style", "top", '264px'],
            ["style", "font-style", 'italic'],
            ["style", "height", '37px'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "width", '455px']
         ],
         "${_button-close}": [
            ["style", "top", '-39px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '412px']
         ],
         "${_Text2Copy7}": [
            ["style", "top", '299px'],
            ["style", "width", '462px'],
            ["style", "line-height", '18px'],
            ["style", "height", '72px'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "font-size", '14px']
         ],
         "${_Text2}": [
            ["style", "top", '-30px'],
            ["style", "font-style", 'italic'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "font-size", '16px']
         ],
         "${_Text2Copy3}": [
            ["style", "top", '390px'],
            ["style", "text-align", 'left'],
            ["style", "opacity", '0'],
            ["style", "font-style", 'normal'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '17px'],
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
            { id: "eid169", tween: [ "style", "${_button-previous}", "display", 'block', { fromValue: 'none'}], position: 541, duration: 0 },
            { id: "eid144", tween: [ "style", "${_Text2Copy7}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid131", tween: [ "style", "${_cysts-dime}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid135", tween: [ "style", "${_cysts-dime}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid108", tween: [ "style", "${_button-close}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid133", tween: [ "style", "${_Text2Copy2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid134", tween: [ "style", "${_Text2Copy2}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid106", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid94", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_button-close}', [] ], ""], position: 0 },
            { id: "eid96", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_button-more}', [] ], ""], position: 0 },
            { id: "eid152", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_button-previous}', [] ], ""], position: 0 }         ]
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
"info-bear": {
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
      rect: ['-32px','-76px','549px','535px','auto','auto'],
      opacity: 0.6,
      id: 'Rectangle4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['-8px','-45px','497px','469px','auto','auto'],
      fill: ['rgba(228,238,241,1.00)'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      boxShadow: ['',2,3,10,0,'rgba(0,0,0,0.40)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',14,'rgba(60,60,60,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2Copy4',
      text: 'Bear River Bay receives 40% of the lake’s fresh water inflow, which makes it the least saline of the lake\'s microenvironments. Salinity levels vary across the bay, from less than 1% near the mouth of the Bear River to 7% or more in areas farthest from the river.',
      align: 'left',
      rect: ['17px','269px','450px','72px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal'],
      type: 'text',
      id: 'Text2Copy3',
      text: '1 of 4',
      align: 'left',
      rect: ['17px','390px','auto','auto','auto','auto']
   },
   {
      id: 'bear-1',
      type: 'image',
      rect: ['34px','0px','409px','250px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bear-1.jpg','0px','0px']
   },
   {
      font: ['Arial, Helvetica, sans-serif',14,'rgba(60,60,60,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2Copy2',
      text: 'Because of the seasonal nature of water inflow from the Bear River (much of which originates as snow melt from the nearby mountains), the salinity of Bear River Bay varies greatly from season to season and from year to year.<br>',
      align: 'left',
      rect: ['17px','291px','450px','72px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',12,'rgba(60,60,60,1)','normal','none','italic'],
      type: 'text',
      id: 'Text2Copy5',
      text: 'Photo by Kris Lander',
      align: 'right',
      rect: ['17px','261px','412px','18px','auto','auto']
   },
   {
      id: 'bear-2',
      type: 'image',
      rect: ['49px','0px','380px','253px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bear-2.jpg','0px','0px']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal'],
      type: 'text',
      id: 'Text2Copy',
      text: '2 of 4',
      align: 'left',
      rect: ['17px','390px','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',14,'rgba(60,60,60,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2Copy7',
      text: 'The land here slopes very gradually, and the shoreline moves drastically as lake levels fluctuate. Bear River Bay all but disappears during periods of drought (right).',
      align: 'left',
      rect: ['17px','277px','450px','72px','auto','auto']
   },
   {
      id: 'bear-3',
      type: 'image',
      rect: ['29px','0','424px','236px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bear-3.jpg','0px','0px']
   },
   {
      font: ['Arial, Helvetica, sans-serif',12,'rgba(60,60,60,1)','normal','none','italic'],
      type: 'text',
      id: 'Text2Copy8',
      text: 'Images ISS011-E-10633 and ISS015-E-15370 courtesy of the Image Science &amp; Analysis Laboratory, NASA Johnson Space Center',
      align: 'right',
      rect: ['29px','240px','426px','37px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',14,'rgba(60,60,60,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2Copy12',
      text: 'Along the edge of Bear River Bay is a vast network of wetlands and mudflats that provide an important habitat for many types of wildlife. 74,000 acres of these wetlands are protected as part of the Bear River Migratory Bird Refuge.',
      align: 'left',
      rect: ['17px','308px','450px','72px','auto','auto']
   },
   {
      id: 'bear-4',
      type: 'image',
      rect: ['49px','1px','380px','271px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bear-4.jpg','0px','0px']
   },
   {
      font: ['Arial, Helvetica, sans-serif',12,'rgba(60,60,60,1)','normal','none','italic'],
      type: 'text',
      id: 'Text2Copy11',
      text: 'Tundra swans and other waterfowl at Bear River Migratory Bird Refuge, by Chris Campbell',
      align: 'right',
      rect: ['49px','273px','380px','37px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal'],
      type: 'text',
      id: 'Text2Copy6',
      text: '3 of 4',
      align: 'left',
      rect: ['17px','390px','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal'],
      type: 'text',
      id: 'Text2Copy10',
      text: '4 of 4',
      align: 'left',
      rect: ['17px','390px','auto','auto','auto','auto']
   },
   {
      rect: ['125px','382px','auto','auto','auto','auto'],
      display: 'none',
      type: 'rect',
      cursor: ['pointer'],
      id: 'button-previous'
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','normal','none','italic'],
      type: 'text',
      id: 'Text2',
      text: 'Bear River Bay',
      align: 'left',
      rect: ['17px','-30px','auto','auto','auto','auto']
   },
   {
      id: 'button-close',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['412px','-39px','auto','auto','auto','auto']
   },
   {
      id: 'button-more',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['413px','382px','auto','auto','auto','auto']
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
         "${_bear-1}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '34px']
         ],
         "${_Text2Copy}": [
            ["style", "top", '390px'],
            ["style", "text-align", 'left'],
            ["style", "opacity", '0'],
            ["style", "font-style", 'normal'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '17px'],
            ["style", "font-size", '16px']
         ],
         "${_Text2Copy10}": [
            ["style", "top", '390px'],
            ["style", "text-align", 'left'],
            ["style", "opacity", '0'],
            ["style", "font-style", 'normal'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '17px'],
            ["style", "font-size", '16px']
         ],
         "${_Text2Copy2}": [
            ["style", "top", '291px'],
            ["style", "width", '450px'],
            ["style", "line-height", '18px'],
            ["style", "height", '72px'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "font-size", '14px']
         ],
         "${_bear-4}": [
            ["style", "top", '1px'],
            ["style", "opacity", '0'],
            ["style", "left", '49px']
         ],
         "${symbolSelector}": [
            ["style", "height", '454px'],
            ["style", "width", '540px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(228,238,241,1.00)'],
            ["subproperty", "boxShadow.blur", '10px'],
            ["style", "opacity", '0'],
            ["style", "left", '-8px'],
            ["style", "width", '497px'],
            ["style", "top", '-45px'],
            ["style", "height", '469px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '2px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.40)']
         ],
         "${_Rectangle4}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '-76px'],
            ["style", "height", '535px'],
            ["style", "opacity", '0'],
            ["style", "left", '-32px'],
            ["style", "width", '549px']
         ],
         "${_Text2Copy3}": [
            ["style", "top", '390px'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", 'bold'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "font-size", '16px']
         ],
         "${_Text2Copy11}": [
            ["style", "line-height", '14px'],
            ["style", "opacity", '0'],
            ["style", "left", '49px'],
            ["style", "width", '380px'],
            ["style", "top", '273px'],
            ["style", "text-align", 'right'],
            ["style", "height", '37px'],
            ["style", "font-size", '12px'],
            ["style", "font-style", 'italic']
         ],
         "${_Text2Copy7}": [
            ["style", "line-height", '18px'],
            ["style", "font-size", '14px'],
            ["style", "top", '277px'],
            ["style", "font-style", 'normal'],
            ["style", "height", '72px'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "width", '450px']
         ],
         "${_button-more}": [
            ["style", "top", '382px'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '413px']
         ],
         "${_Text2Copy6}": [
            ["style", "top", '390px'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", 'bold'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "font-size", '16px']
         ],
         "${_button-close}": [
            ["style", "top", '-39px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '412px']
         ],
         "${_Text2Copy8}": [
            ["style", "line-height", '14px'],
            ["style", "opacity", '0'],
            ["style", "left", '29px'],
            ["style", "width", '426px'],
            ["style", "top", '240px'],
            ["style", "text-align", 'right'],
            ["style", "height", '37px'],
            ["style", "font-style", 'italic'],
            ["style", "font-size", '12px']
         ],
         "${_Text2Copy5}": [
            ["style", "line-height", '18px'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "font-size", '12px'],
            ["style", "top", '261px'],
            ["style", "text-align", 'right'],
            ["style", "font-style", 'italic'],
            ["style", "height", '18px'],
            ["style", "width", '412px']
         ],
         "${_Text2Copy4}": [
            ["style", "line-height", '18px'],
            ["style", "font-size", '14px'],
            ["style", "top", '269px'],
            ["style", "font-style", 'normal'],
            ["style", "height", '72px'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "width", '450px']
         ],
         "${_button-previous}": [
            ["style", "top", '382px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '125px']
         ],
         "${_Text2Copy12}": [
            ["style", "top", '308px'],
            ["style", "width", '450px'],
            ["style", "line-height", '18px'],
            ["style", "height", '72px'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "font-size", '14px']
         ],
         "${_Text2}": [
            ["style", "top", '-30px'],
            ["style", "font-style", 'italic'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "font-size", '16px']
         ],
         "${_bear-2}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '49px']
         ],
         "${_bear-3}": [
            ["style", "left", '29px'],
            ["style", "opacity", '0']
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
            { id: "eid100", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid83", tween: [ "style", "${_bear-1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid84", tween: [ "style", "${_bear-1}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid122", tween: [ "style", "${_Text2Copy10}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500 },
            { id: "eid104", tween: [ "style", "${_Rectangle4}", "opacity", '0.6000000238418579', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid148", tween: [ "style", "${_Text2Copy6}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid98", tween: [ "style", "${_Text2Copy6}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 500 },
            { id: "eid170", tween: [ "style", "${_button-more}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid151", tween: [ "style", "${_button-previous}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid102", tween: [ "style", "${_Text2Copy3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid126", tween: [ "style", "${_Text2Copy3}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid142", tween: [ "style", "${_Text2Copy8}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid99", tween: [ "style", "${_Text2Copy8}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 500 },
            { id: "eid92", tween: [ "style", "${_bear-3}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid97", tween: [ "style", "${_bear-3}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 500 },
            { id: "eid113", tween: [ "style", "${_Text2Copy11}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500 },
            { id: "eid116", tween: [ "style", "${_button-more}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid153", tween: [ "style", "${_button-more}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 500 },
            { id: "eid117", tween: [ "style", "${_Text2Copy}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid136", tween: [ "style", "${_Text2Copy}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid106", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid133", tween: [ "style", "${_Text2Copy2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid134", tween: [ "style", "${_Text2Copy2}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid118", tween: [ "style", "${_bear-4}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500 },
            { id: "eid108", tween: [ "style", "${_button-close}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid169", tween: [ "style", "${_button-previous}", "display", 'block', { fromValue: 'none'}], position: 541, duration: 0 },
            { id: "eid144", tween: [ "style", "${_Text2Copy7}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid101", tween: [ "style", "${_Text2Copy7}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 500 },
            { id: "eid120", tween: [ "style", "${_Text2Copy12}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500 },
            { id: "eid112", tween: [ "style", "${_Text2Copy4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid123", tween: [ "style", "${_Text2Copy4}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid85", tween: [ "style", "${_Text2Copy5}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid86", tween: [ "style", "${_Text2Copy5}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid88", tween: [ "style", "${_bear-2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid89", tween: [ "style", "${_bear-2}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid94", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_button-close}', [] ], ""], position: 0 },
            { id: "eid96", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_button-more}', [] ], ""], position: 0 },
            { id: "eid152", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_button-previous}', [] ], ""], position: 0 }         ]
      }
   }
},
"info-farmington": {
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
      rect: ['-32px','-76px','549px','535px','auto','auto'],
      opacity: 0.6,
      id: 'Rectangle4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['-8px','-45px','497px','469px','auto','auto'],
      fill: ['rgba(228,238,241,1.00)'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      boxShadow: ['',2,3,10,0,'rgba(0,0,0,0.40)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',14,'rgba(60,60,60,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2Copy4',
      text: 'Farmington Bay is separated from the rest of the lake by Antelope Island and two causeways built of earth and rock. The Antelope Island causeway (also called the South causeway) was built in 1952, and the Antelope-Syracuse causeway was added in 1969. Openings in the Antelope-Syracuse causeway do allow some water to pass in and out of Farmington Bay.',
      align: 'left',
      rect: ['17px','259px','450px','72px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal'],
      type: 'text',
      id: 'Text2Copy3',
      text: '1 of 5',
      align: 'left',
      rect: ['17px','390px','auto','auto','auto','auto']
   },
   {
      id: 'farmington-1',
      type: 'image',
      rect: ['37px','0px','409px','242px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/farmington-1.jpg','0px','0px']
   },
   {
      font: ['Arial, Helvetica, sans-serif',14,'rgba(60,60,60,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2Copy2',
      text: 'Farmington Bay is shallow, just 8 feet deep when the lake is at its average elevation of 4,200 feet above sea level. Because of its shallow depth, the water temperature has a greater seasonal variation than the main body of the south arm.',
      align: 'left',
      rect: ['17px','291px','450px','72px','auto','auto']
   },
   {
      id: 'farmington-2',
      type: 'image',
      rect: ['51px','0','380px','244px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/farmington-2.jpg','0px','0px']
   },
   {
      font: ['Arial, Helvetica, sans-serif',12,'rgba(60,60,60,1)','normal','none','italic'],
      type: 'text',
      id: 'Text2Copy5',
      text: 'Bald eagles and California gulls on Farmington Bay, by Lissa Lander',
      align: 'right',
      rect: ['17px','261px','412px','18px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal'],
      type: 'text',
      id: 'Text2Copy',
      text: '2 of 5',
      align: 'left',
      rect: ['17px','390px','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',14,'rgba(60,60,60,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2Copy7',
      text: 'Fresh water flowing in from the Jordan River keeps the salinity of Farmington Bay fairly low—salinity tends to be around 3 to 5%, about the same as the ocean. However, when lake levels rise above the elevation of the causeways, the water in Farmington Bay mixes with water from Gilbert Bay, and salinity rises.',
      align: 'left',
      rect: ['17px','289px','450px','72px','auto','auto']
   },
   {
      id: 'farmington-3',
      type: 'image',
      rect: ['47px','-5px','380px','269px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/farmington-3.jpg','0px','0px']
   },
   {
      font: ['Arial, Helvetica, sans-serif',12,'rgba(60,60,60,1)','normal','none','italic'],
      type: 'text',
      id: 'Text2Copy8',
      text: 'Jordan River, by Keith Vaught',
      align: 'right',
      rect: ['47px','268px','379px','37px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal'],
      type: 'text',
      id: 'Text2Copy6',
      text: '3 of 5',
      align: 'left',
      rect: ['17px','390px','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',14,'rgba(60,60,60,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2Copy12',
      text: 'Sewage treatment plants serving Salt Lake and Davis counties empty into Farmington Bay. The treated sewage carries high levels of nutrients, which fuel massive blooms of cyanobacteria (blue-green algae). Decaying organic matter in Farmington Bay produces the rotten egg smell that many associate with the lake.',
      align: 'left',
      rect: ['17px','280px','450px','72px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',11,'rgba(60,60,60,1)','normal','none','italic'],
      type: 'text',
      id: 'Text2Copy11',
      text: 'Nodularia bloom on Farmington Bay, courtesy Professor Wayne Wurtsbaugh, Utah State University, American Society of Limnology and Oceanography',
      align: 'right',
      rect: ['53px','243px','380px','37px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal'],
      type: 'text',
      id: 'Text2Copy10',
      text: '4 of 5',
      align: 'left',
      rect: ['17px','390px','auto','auto','auto','auto']
   },
   {
      id: 'farmington-4',
      type: 'image',
      rect: ['50px','1px','380px','239px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/farmington-4.jpg','0px','0px']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal'],
      type: 'text',
      id: 'Text2Copy13',
      text: '5 of 5',
      align: 'left',
      rect: ['17px','390px','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',14,'rgba(60,60,60,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2Copy18',
      text: 'Farmington Bay Waterfowl Management Area covers about 12,000 acres at the southern end of Farmington Bay. Here, water from the Jordan River, which provides about 13% of the lake’s fresh water, feeds through a series of wetlands before entering the lake. The wetlands provide a habitat for hundreds of thousands of birds representing at least 200 species.',
      align: 'left',
      rect: ['17px','268px','450px','72px','auto','auto']
   },
   {
      id: 'farmington-5',
      type: 'image',
      rect: ['61px','1px','360px','239px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/farmington-5.jpg','0px','0px']
   },
   {
      font: ['Arial, Helvetica, sans-serif',12,'rgba(60,60,60,1)','normal','none','italic'],
      type: 'text',
      id: 'Text2Copy17',
      text: 'An Eared Grebe in FBWMA, by Shelly Spencer',
      align: 'right',
      rect: ['53px','244px','368px','37px','auto','auto']
   },
   {
      rect: ['125px','382px','auto','auto','auto','auto'],
      display: 'none',
      type: 'rect',
      cursor: ['pointer'],
      id: 'button-previous'
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','normal','none','italic'],
      type: 'text',
      id: 'Text2',
      text: 'Farmington Bay',
      align: 'left',
      rect: ['17px','-30px','auto','auto','auto','auto']
   },
   {
      id: 'button-close',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['412px','-39px','auto','auto','auto','auto']
   },
   {
      id: 'button-more',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['413px','382px','auto','auto','auto','auto']
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
            ["style", "top", '390px'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", 'bold'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "font-size", '16px']
         ],
         "${_Text2Copy16}": [
            ["style", "top", '285px'],
            ["style", "width", '450px'],
            ["style", "line-height", '18px'],
            ["style", "height", '72px'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '1'],
            ["style", "left", '17px'],
            ["style", "font-size", '14px']
         ],
         "${_Text2Copy10}": [
            ["style", "top", '390px'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", 'bold'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "font-size", '16px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(228,238,241,1.00)'],
            ["subproperty", "boxShadow.blur", '10px'],
            ["style", "opacity", '0'],
            ["style", "left", '-8px'],
            ["style", "width", '497px'],
            ["style", "top", '-45px'],
            ["style", "height", '469px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '2px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.40)']
         ],
         "${_Text2Copy2}": [
            ["style", "line-height", '18px'],
            ["style", "font-size", '14px'],
            ["style", "top", '291px'],
            ["style", "font-style", 'normal'],
            ["style", "height", '72px'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "width", '450px']
         ],
         "${_Text2Copy11}": [
            ["style", "line-height", '13px'],
            ["style", "opacity", '0'],
            ["style", "left", '53px'],
            ["style", "width", '380px'],
            ["style", "top", '243px'],
            ["style", "text-align", 'right'],
            ["style", "height", '37px'],
            ["style", "font-style", 'italic'],
            ["style", "font-size", '11px']
         ],
         "${symbolSelector}": [
            ["style", "height", '454px'],
            ["style", "width", '540px']
         ],
         "${_Text2Copy18}": [
            ["style", "top", '268px'],
            ["style", "width", '450px'],
            ["style", "line-height", '18px'],
            ["style", "height", '72px'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "font-size", '14px']
         ],
         "${_Text2Copy15}": [
            ["style", "line-height", '14px'],
            ["style", "font-size", '11px'],
            ["style", "font-style", 'italic'],
            ["style", "top", '243px'],
            ["style", "height", '37px'],
            ["style", "opacity", '1'],
            ["style", "left", '47px'],
            ["style", "width", '380px']
         ],
         "${_Text2Copy17}": [
            ["style", "line-height", '14px'],
            ["style", "opacity", '0'],
            ["style", "left", '53px'],
            ["style", "width", '368px'],
            ["style", "top", '244px'],
            ["style", "text-align", 'right'],
            ["style", "height", '37px'],
            ["style", "font-size", '12px'],
            ["style", "font-style", 'italic']
         ],
         "${_Rectangle4}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '-76px'],
            ["style", "height", '535px'],
            ["style", "opacity", '0'],
            ["style", "left", '-32px'],
            ["style", "width", '549px']
         ],
         "${_Text2}": [
            ["style", "top", '-30px'],
            ["style", "font-style", 'italic'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "font-size", '16px']
         ],
         "${_Text2Copy12}": [
            ["style", "line-height", '18px'],
            ["style", "font-size", '14px'],
            ["style", "top", '280px'],
            ["style", "font-style", 'normal'],
            ["style", "height", '72px'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "width", '450px']
         ],
         "${_farmington-5}": [
            ["style", "top", '1px'],
            ["style", "opacity", '0'],
            ["style", "left", '61px']
         ],
         "${_farmington-1}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '37px']
         ],
         "${_button-previous}": [
            ["style", "top", '382px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '125px']
         ],
         "${_Text2Copy3}": [
            ["style", "top", '390px'],
            ["style", "text-align", 'left'],
            ["style", "opacity", '0'],
            ["style", "font-style", 'normal'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '17px'],
            ["style", "font-size", '16px']
         ],
         "${_button-more}": [
            ["style", "top", '382px'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '413px']
         ],
         "${_Text2Copy7}": [
            ["style", "top", '289px'],
            ["style", "width", '450px'],
            ["style", "line-height", '18px'],
            ["style", "height", '72px'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "font-size", '14px']
         ],
         "${_Text2Copy8}": [
            ["style", "line-height", '14px'],
            ["style", "opacity", '0'],
            ["style", "left", '47px'],
            ["style", "width", '379px'],
            ["style", "top", '268px'],
            ["style", "text-align", 'right'],
            ["style", "height", '37px'],
            ["style", "font-size", '12px'],
            ["style", "font-style", 'italic']
         ],
         "${_Text2Copy6}": [
            ["style", "top", '390px'],
            ["style", "text-align", 'left'],
            ["style", "opacity", '0'],
            ["style", "font-style", 'normal'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '17px'],
            ["style", "font-size", '16px']
         ],
         "${_Text2Copy5}": [
            ["style", "line-height", '18px'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "font-size", '12px'],
            ["style", "top", '261px'],
            ["style", "text-align", 'right'],
            ["style", "font-style", 'italic'],
            ["style", "width", '412px'],
            ["style", "height", '18px']
         ],
         "${_Text2Copy4}": [
            ["style", "top", '259px'],
            ["style", "width", '450px'],
            ["style", "line-height", '18px'],
            ["style", "height", '72px'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "font-size", '14px']
         ],
         "${_Text2Copy13}": [
            ["style", "top", '390px'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", 'bold'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "font-size", '16px']
         ],
         "${_button-close}": [
            ["style", "top", '-39px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '412px']
         ],
         "${_farmington-2}": [
            ["style", "left", '51px'],
            ["style", "opacity", '0']
         ],
         "${_farmington-4}": [
            ["style", "top", '1px'],
            ["style", "opacity", '0'],
            ["style", "left", '50px']
         ],
         "${_farmington-3}": [
            ["style", "top", '-5px'],
            ["style", "opacity", '0'],
            ["style", "left", '47px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2500,
         autoPlay: false,
         timeline: [
            { id: "eid133", tween: [ "style", "${_Text2Copy2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid134", tween: [ "style", "${_Text2Copy2}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid130", tween: [ "style", "${_farmington-1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid132", tween: [ "style", "${_farmington-1}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid85", tween: [ "style", "${_Text2Copy5}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid86", tween: [ "style", "${_Text2Copy5}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid104", tween: [ "style", "${_Rectangle4}", "opacity", '0.6000000238418579', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid148", tween: [ "style", "${_Text2Copy6}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid98", tween: [ "style", "${_Text2Copy6}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 500 },
            { id: "eid120", tween: [ "style", "${_Text2Copy12}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500 },
            { id: "eid155", tween: [ "style", "${_Text2Copy12}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 500 },
            { id: "eid185", tween: [ "style", "${_farmington-5}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500 },
            { id: "eid144", tween: [ "style", "${_Text2Copy7}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid101", tween: [ "style", "${_Text2Copy7}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 500 },
            { id: "eid151", tween: [ "style", "${_button-previous}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid142", tween: [ "style", "${_Text2Copy8}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid99", tween: [ "style", "${_Text2Copy8}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 500 },
            { id: "eid117", tween: [ "style", "${_Text2Copy}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid136", tween: [ "style", "${_Text2Copy}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid113", tween: [ "style", "${_Text2Copy11}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500 },
            { id: "eid150", tween: [ "style", "${_Text2Copy11}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 500 },
            { id: "eid102", tween: [ "style", "${_Text2Copy3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid126", tween: [ "style", "${_Text2Copy3}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid116", tween: [ "style", "${_button-more}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid153", tween: [ "style", "${_button-more}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 500 },
            { id: "eid141", tween: [ "style", "${_farmington-2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid143", tween: [ "style", "${_farmington-2}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid170", tween: [ "style", "${_button-more}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
            { id: "eid178", tween: [ "style", "${_farmington-4}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500 },
            { id: "eid179", tween: [ "style", "${_farmington-4}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 500 },
            { id: "eid122", tween: [ "style", "${_Text2Copy10}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500 },
            { id: "eid154", tween: [ "style", "${_Text2Copy10}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 500 },
            { id: "eid169", tween: [ "style", "${_button-previous}", "display", 'block', { fromValue: 'none'}], position: 541, duration: 0 },
            { id: "eid112", tween: [ "style", "${_Text2Copy4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid123", tween: [ "style", "${_Text2Copy4}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid187", tween: [ "style", "${_Text2Copy18}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500 },
            { id: "eid183", tween: [ "style", "${_Text2Copy17}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500 },
            { id: "eid181", tween: [ "style", "${_Text2Copy13}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500 },
            { id: "eid108", tween: [ "style", "${_button-close}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid100", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid147", tween: [ "style", "${_farmington-3}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid149", tween: [ "style", "${_farmington-3}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 500 },
            { id: "eid106", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid94", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_button-close}', [] ], ""], position: 0 },
            { id: "eid96", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_button-more}', [] ], ""], position: 0 },
            { id: "eid152", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_button-previous}', [] ], ""], position: 0 }         ]
      }
   }
},
"info-gilbert": {
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
      rect: ['-32px','-76px','549px','535px','auto','auto'],
      opacity: 0.6,
      id: 'Rectangle4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['-8px','-45px','497px','469px','auto','auto'],
      fill: ['rgba(228,238,241,1.00)'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      boxShadow: ['',2,3,10,0,'rgba(0,0,0,0.40)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',14,'rgba(60,60,60,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2Copy4',
      text: 'Gilbert Bay makes up the majority of the lake’s South arm. Its salinity, which fluctuates with the water level, varies between about 7 and 15%.',
      align: 'left',
      rect: ['17px','281px','450px','72px','auto','auto']
   },
   {
      id: 'gilbert-1',
      type: 'image',
      rect: ['34px','12px','409px','252px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/gilbert-1.jpg','0px','0px']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal'],
      type: 'text',
      id: 'Text2Copy3',
      text: '1 of 3',
      align: 'left',
      rect: ['17px','390px','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',14,'rgba(60,60,60,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2Copy2',
      text: 'Gilbert Bay is home to most of the lake’s brine shrimp population, which thrives in salinities between 12 and 17%.',
      align: 'left',
      rect: ['17px','313px','450px','50px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',12,'rgba(60,60,60,1)','normal','none','italic'],
      type: 'text',
      id: 'Text2Copy19',
      text: 'Adult and juvenile brine shrimp',
      align: 'right',
      rect: ['46px','278px','380px','50px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',12,'rgba(60,60,60,1)','normal','none','italic'],
      type: 'text',
      id: 'Text2Copy5',
      text: 'Photo by Kris Lander',
      align: 'right',
      rect: ['17px','261px','412px','18px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal'],
      type: 'text',
      id: 'Text2Copy',
      text: '2 of 3',
      align: 'left',
      rect: ['17px','390px','auto','auto','auto','auto']
   },
   {
      id: 'gilbert-2',
      type: 'image',
      rect: ['49px','0','380px','274px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/gilbert-2.jpg','0px','0px']
   },
   {
      font: ['Arial, Helvetica, sans-serif',14,'rgba(60,60,60,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2Copy7',
      text: 'Gilbert Bay and Gunnison Bay are the deepest parts of the lake. But with a maximum depth of just 32 feet, the water temperature fluctuates dramatically—from about 32°F in January to more than 80 in July and August.',
      align: 'left',
      rect: ['17px','297px','450px','72px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal'],
      type: 'text',
      id: 'Text2Copy6',
      text: '3 of 3',
      align: 'left',
      rect: ['17px','390px','auto','auto','auto','auto']
   },
   {
      id: 'gilbert-3',
      type: 'image',
      rect: ['50px','0','380px','285px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/gilbert-3.jpg','0px','0px']
   },
   {
      rect: ['125px','382px','auto','auto','auto','auto'],
      display: 'none',
      type: 'rect',
      cursor: ['pointer'],
      id: 'button-previous'
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','normal','none','italic'],
      type: 'text',
      id: 'Text2',
      text: 'Gilbert Bay',
      align: 'left',
      rect: ['17px','-30px','auto','auto','auto','auto']
   },
   {
      id: 'button-close',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['412px','-39px','auto','auto','auto','auto']
   },
   {
      id: 'button-more',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['413px','382px','auto','auto','auto','auto']
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
            ["style", "top", '390px'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", 'bold'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "font-size", '16px']
         ],
         "${_Text2Copy3}": [
            ["style", "top", '390px'],
            ["style", "text-align", 'left'],
            ["style", "opacity", '0'],
            ["style", "font-style", 'normal'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '17px'],
            ["style", "font-size", '16px']
         ],
         "${_Text2Copy2}": [
            ["style", "line-height", '18px'],
            ["style", "font-size", '14px'],
            ["style", "top", '313px'],
            ["style", "font-style", 'normal'],
            ["style", "height", '50px'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "width", '450px']
         ],
         "${symbolSelector}": [
            ["style", "height", '454px'],
            ["style", "width", '540px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(228,238,241,1.00)'],
            ["subproperty", "boxShadow.blur", '10px'],
            ["style", "opacity", '0'],
            ["style", "left", '-8px'],
            ["style", "width", '497px'],
            ["style", "top", '-45px'],
            ["style", "height", '469px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '2px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.40)']
         ],
         "${_gilbert-1}": [
            ["style", "top", '12px'],
            ["style", "opacity", '0'],
            ["style", "left", '34px']
         ],
         "${_Text2Copy19}": [
            ["style", "line-height", '14px'],
            ["style", "opacity", '0'],
            ["style", "left", '46px'],
            ["style", "width", '380px'],
            ["style", "top", '278px'],
            ["style", "text-align", 'right'],
            ["style", "height", '50px'],
            ["style", "font-style", 'italic'],
            ["style", "font-size", '12px']
         ],
         "${_button-more}": [
            ["style", "top", '382px'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '413px']
         ],
         "${_gilbert-2}": [
            ["style", "left", '49px'],
            ["style", "opacity", '0']
         ],
         "${_Text2}": [
            ["style", "top", '-30px'],
            ["style", "font-style", 'italic'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "font-size", '16px']
         ],
         "${_gilbert-3}": [
            ["style", "left", '50px'],
            ["style", "opacity", '0']
         ],
         "${_Text2Copy5}": [
            ["style", "line-height", '18px'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "font-size", '12px'],
            ["style", "top", '261px'],
            ["style", "text-align", 'right'],
            ["style", "font-style", 'italic'],
            ["style", "width", '412px'],
            ["style", "height", '18px']
         ],
         "${_Text2Copy4}": [
            ["style", "top", '281px'],
            ["style", "width", '450px'],
            ["style", "line-height", '18px'],
            ["style", "height", '72px'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "font-size", '14px']
         ],
         "${_button-previous}": [
            ["style", "top", '382px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '125px']
         ],
         "${_button-close}": [
            ["style", "top", '-39px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '412px']
         ],
         "${_Text2Copy7}": [
            ["style", "top", '297px'],
            ["style", "width", '450px'],
            ["style", "line-height", '18px'],
            ["style", "height", '72px'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "font-size", '14px']
         ],
         "${_Text2Copy6}": [
            ["style", "top", '390px'],
            ["style", "text-align", 'left'],
            ["style", "opacity", '0'],
            ["style", "font-style", 'normal'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '17px'],
            ["style", "font-size", '16px']
         ],
         "${_Rectangle4}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '-76px'],
            ["style", "height", '535px'],
            ["style", "opacity", '0'],
            ["style", "left", '-32px'],
            ["style", "width", '549px']
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
            { id: "eid85", tween: [ "style", "${_Text2Copy5}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid86", tween: [ "style", "${_Text2Copy5}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid104", tween: [ "style", "${_Rectangle4}", "opacity", '0.6000000238418579', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid148", tween: [ "style", "${_Text2Copy6}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid98", tween: [ "style", "${_Text2Copy6}", "opacity", '1', { fromValue: '1'}], position: 1500, duration: 0 },
            { id: "eid170", tween: [ "style", "${_button-more}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
            { id: "eid151", tween: [ "style", "${_button-previous}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid102", tween: [ "style", "${_Text2Copy3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid126", tween: [ "style", "${_Text2Copy3}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid190", tween: [ "style", "${_gilbert-1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid191", tween: [ "style", "${_gilbert-1}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid116", tween: [ "style", "${_button-more}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid153", tween: [ "style", "${_button-more}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid117", tween: [ "style", "${_Text2Copy}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid136", tween: [ "style", "${_Text2Copy}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid196", tween: [ "style", "${_gilbert-3}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid112", tween: [ "style", "${_Text2Copy4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid123", tween: [ "style", "${_Text2Copy4}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid133", tween: [ "style", "${_Text2Copy2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid134", tween: [ "style", "${_Text2Copy2}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid169", tween: [ "style", "${_button-previous}", "display", 'block', { fromValue: 'none'}], position: 541, duration: 0 },
            { id: "eid144", tween: [ "style", "${_Text2Copy7}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid101", tween: [ "style", "${_Text2Copy7}", "opacity", '1', { fromValue: '1'}], position: 1500, duration: 0 },
            { id: "eid108", tween: [ "style", "${_button-close}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid193", tween: [ "style", "${_gilbert-2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid194", tween: [ "style", "${_gilbert-2}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid197", tween: [ "style", "${_Text2Copy19}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid198", tween: [ "style", "${_Text2Copy19}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid106", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid94", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_button-close}', [] ], ""], position: 0 },
            { id: "eid96", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_button-more}', [] ], ""], position: 0 },
            { id: "eid152", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_button-previous}', [] ], ""], position: 0 }         ]
      }
   }
},
"info-gunnison": {
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
      rect: ['-32px','-76px','549px','535px','auto','auto'],
      opacity: 0.6,
      id: 'Rectangle4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['-8px','-45px','497px','469px','auto','auto'],
      fill: ['rgba(228,238,241,1.00)'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      boxShadow: ['',2,3,10,0,'rgba(0,0,0,0.40)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',14,'rgba(60,60,60,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2Copy4',
      text: 'Gunnison Bay is the main body of water in the north arm of the lake. It receives very little fresh water inflow and is therefore much more saline than the rest of the lake, with salinity levels of 20 to 27%.',
      align: 'left',
      rect: ['17px','274px','450px','72px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal'],
      type: 'text',
      id: 'Text2Copy3',
      text: '1 of 5',
      align: 'left',
      rect: ['17px','390px','auto','auto','auto','auto']
   },
   {
      id: 'gunnison-1',
      type: 'image',
      rect: ['36px','0','409px','250px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/gunnison-1.jpg','0px','0px']
   },
   {
      font: ['Arial, Helvetica, sans-serif',14,'rgba(60,60,60,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2Copy2',
      text: 'The main source of water for Gunnison Bay is salt water that flows in from the south arm. Salt water comes in through a 300 foot gap and 2 15-foot culverts that pass through the causeway, and some seepage between the rocks of the causeway itself. After entering Gunnison Bay, this salt water is concentrated even further through the process of evaporation.',
      align: 'left',
      rect: ['17px','273px','450px','72px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',12,'rgba(60,60,60,1)','normal','none','italic'],
      type: 'text',
      id: 'Text2Copy5',
      text: 'Photo by Bonnie Baxter',
      align: 'right',
      rect: ['47px','253px','412px','18px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal'],
      type: 'text',
      id: 'Text2Copy',
      text: '2 of 5',
      align: 'left',
      rect: ['17px','390px','auto','auto','auto','auto']
   },
   {
      id: 'gunnison-2',
      type: 'image',
      rect: ['23px','0','435px','252px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/gunnison-2.jpg','0px','0px']
   },
   {
      font: ['Arial, Helvetica, sans-serif',14,'rgba(60,60,60,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2Copy7',
      text: 'During dry summers, Gunnison Bay becomes saturated with salt, and crystals precipitate out of solution and collect on the lakebed.',
      align: 'left',
      rect: ['17px','313px','450px','72px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',12,'rgba(60,60,60,1)','normal','none','italic'],
      type: 'text',
      id: 'Text2Copy8',
      text: 'Salt crystals on the shore of Gunnison Bay, by Bonnie Baxter',
      align: 'right',
      rect: ['47px','275px','379px','37px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal'],
      type: 'text',
      id: 'Text2Copy6',
      text: '3 of 5',
      align: 'left',
      rect: ['17px','390px','auto','auto','auto','auto']
   },
   {
      id: 'gunnison-3',
      type: 'image',
      rect: ['47','0','380px','271px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/gunnison-3.jpg','0px','0px']
   },
   {
      font: ['Arial, Helvetica, sans-serif',14,'rgba(60,60,60,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2Copy12',
      text: 'Before the railroad causeway separated the north and south arms, salinity was fairly consistent across the lake. After the causeway was built in 1959, the salinity increased in the north arm and decreased in the south arm for a number of years until they stabilized. Now the salinity of both arms changes with the water level.',
      align: 'left',
      rect: ['17px','280px','450px','72px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',12,'rgba(60,60,60,1)','normal','none','italic'],
      type: 'text',
      id: 'Text2Copy11',
      text: 'Based on data from the U.S. Geological Survey',
      align: 'right',
      rect: ['53px','255px','400px','37px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal'],
      type: 'text',
      id: 'Text2Copy10',
      text: '4 of 5',
      align: 'left',
      rect: ['17px','390px','auto','auto','auto','auto']
   },
   {
      id: 'gunnison-4',
      type: 'image',
      rect: ['23px','0','434px','249px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/gunnison-4.jpg','0px','0px']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal'],
      type: 'text',
      id: 'Text2Copy13',
      text: '5 of 5',
      align: 'left',
      rect: ['17px','390px','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',14,'rgba(60,60,60,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2Copy18',
      text: 'With the exception of the period of flooding during the 1980s, the salinity of Gunnison Bay remains too high to support brine shrimp. Its extreme salinity makes it a hostile environment for all but the most salt-loving microbes, which turn the water a brilliant shade of pink.',
      align: 'left',
      rect: ['17px','255px','450px','72px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',12,'rgba(60,60,60,1)','normal','none','italic'],
      type: 'text',
      id: 'Text2Copy17',
      text: 'Gunnison Bay, by Mike Sipos',
      align: 'right',
      rect: ['85px','213px','368px','37px','auto','auto']
   },
   {
      id: 'gunnison-5',
      type: 'image',
      rect: ['33px','35px','420px','172px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/gunnison-5.jpg','0px','0px']
   },
   {
      rect: ['125px','382px','auto','auto','auto','auto'],
      display: 'none',
      type: 'rect',
      cursor: ['pointer'],
      id: 'button-previous'
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','normal','none','italic'],
      type: 'text',
      id: 'Text2',
      text: 'Gunnison Bay',
      align: 'left',
      rect: ['17px','-30px','auto','auto','auto','auto']
   },
   {
      id: 'button-close',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['412px','-39px','auto','auto','auto','auto']
   },
   {
      id: 'button-more',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['413px','382px','auto','auto','auto','auto']
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
            ["style", "top", '390px'],
            ["style", "text-align", 'left'],
            ["style", "opacity", '0'],
            ["style", "font-style", 'normal'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '17px'],
            ["style", "font-size", '16px']
         ],
         "${_Text2Copy16}": [
            ["style", "line-height", '18px'],
            ["style", "font-size", '14px'],
            ["style", "top", '285px'],
            ["style", "font-style", 'normal'],
            ["style", "height", '72px'],
            ["style", "opacity", '1'],
            ["style", "left", '17px'],
            ["style", "width", '450px']
         ],
         "${_Text2}": [
            ["style", "top", '-30px'],
            ["style", "font-style", 'italic'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "font-size", '16px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(228,238,241,1.00)'],
            ["subproperty", "boxShadow.blur", '10px'],
            ["style", "opacity", '0'],
            ["style", "left", '-8px'],
            ["style", "width", '497px'],
            ["style", "top", '-45px'],
            ["style", "height", '469px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '2px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.40)']
         ],
         "${_Text2Copy2}": [
            ["style", "top", '273px'],
            ["style", "width", '450px'],
            ["style", "line-height", '18px'],
            ["style", "height", '72px'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "font-size", '14px']
         ],
         "${_Text2Copy11}": [
            ["style", "line-height", '13px'],
            ["style", "opacity", '0'],
            ["style", "left", '53px'],
            ["style", "width", '400px'],
            ["style", "top", '255px'],
            ["style", "text-align", 'right'],
            ["style", "height", '37px'],
            ["style", "font-size", '12px'],
            ["style", "font-style", 'italic']
         ],
         "${_button-close}": [
            ["style", "top", '-39px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '412px']
         ],
         "${symbolSelector}": [
            ["style", "height", '454px'],
            ["style", "width", '540px']
         ],
         "${_Text2Copy15}": [
            ["style", "top", '243px'],
            ["style", "width", '380px'],
            ["style", "line-height", '14px'],
            ["style", "height", '37px'],
            ["style", "font-style", 'italic'],
            ["style", "opacity", '1'],
            ["style", "left", '47px'],
            ["style", "font-size", '11px']
         ],
         "${_gunnison-4}": [
            ["style", "left", '23px'],
            ["style", "opacity", '0']
         ],
         "${_Rectangle4}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '-76px'],
            ["style", "height", '535px'],
            ["style", "opacity", '0'],
            ["style", "left", '-32px'],
            ["style", "width", '549px']
         ],
         "${_gunnison-1}": [
            ["style", "left", '36px'],
            ["style", "opacity", '0']
         ],
         "${_Text2Copy3}": [
            ["style", "top", '390px'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", 'bold'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "font-size", '16px']
         ],
         "${_gunnison-5}": [
            ["style", "top", '35px'],
            ["style", "opacity", '0'],
            ["style", "left", '33px']
         ],
         "${_Text2Copy10}": [
            ["style", "top", '390px'],
            ["style", "text-align", 'left'],
            ["style", "opacity", '0'],
            ["style", "font-style", 'normal'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '17px'],
            ["style", "font-size", '16px']
         ],
         "${_button-previous}": [
            ["style", "top", '382px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '125px']
         ],
         "${_gunnison-3}": [
            ["style", "opacity", '0']
         ],
         "${_button-more}": [
            ["style", "top", '382px'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '413px']
         ],
         "${_Text2Copy7}": [
            ["style", "line-height", '18px'],
            ["style", "font-size", '14px'],
            ["style", "top", '313px'],
            ["style", "font-style", 'normal'],
            ["style", "height", '72px'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "width", '450px']
         ],
         "${_Text2Copy6}": [
            ["style", "top", '390px'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", 'bold'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "font-size", '16px']
         ],
         "${_Text2Copy8}": [
            ["style", "line-height", '14px'],
            ["style", "opacity", '0'],
            ["style", "left", '47px'],
            ["style", "width", '379px'],
            ["style", "top", '275px'],
            ["style", "text-align", 'right'],
            ["style", "height", '37px'],
            ["style", "font-style", 'italic'],
            ["style", "font-size", '12px']
         ],
         "${_Text2Copy5}": [
            ["style", "line-height", '18px'],
            ["style", "opacity", '0'],
            ["style", "left", '47px'],
            ["style", "font-size", '12px'],
            ["style", "top", '253px'],
            ["style", "text-align", 'right'],
            ["style", "font-style", 'italic'],
            ["style", "height", '18px'],
            ["style", "width", '412px']
         ],
         "${_Text2Copy4}": [
            ["style", "line-height", '18px'],
            ["style", "font-size", '14px'],
            ["style", "top", '274px'],
            ["style", "font-style", 'normal'],
            ["style", "height", '72px'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "width", '450px']
         ],
         "${_Text2Copy13}": [
            ["style", "top", '390px'],
            ["style", "text-align", 'left'],
            ["style", "opacity", '0'],
            ["style", "font-style", 'normal'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '17px'],
            ["style", "font-size", '16px']
         ],
         "${_Text2Copy12}": [
            ["style", "top", '280px'],
            ["style", "width", '450px'],
            ["style", "line-height", '18px'],
            ["style", "height", '72px'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "font-size", '14px']
         ],
         "${_Text2Copy17}": [
            ["style", "line-height", '14px'],
            ["style", "opacity", '0'],
            ["style", "left", '85px'],
            ["style", "width", '368px'],
            ["style", "top", '213px'],
            ["style", "text-align", 'right'],
            ["style", "height", '37px'],
            ["style", "font-style", 'italic'],
            ["style", "font-size", '12px']
         ],
         "${_gunnison-2}": [
            ["style", "left", '23px'],
            ["style", "opacity", '0']
         ],
         "${_Text2Copy18}": [
            ["style", "line-height", '18px'],
            ["style", "font-size", '14px'],
            ["style", "top", '255px'],
            ["style", "font-style", 'normal'],
            ["style", "height", '72px'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "width", '450px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2500,
         autoPlay: false,
         timeline: [
            { id: "eid133", tween: [ "style", "${_Text2Copy2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid134", tween: [ "style", "${_Text2Copy2}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid85", tween: [ "style", "${_Text2Copy5}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid86", tween: [ "style", "${_Text2Copy5}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid104", tween: [ "style", "${_Rectangle4}", "opacity", '0.6000000238418579', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid148", tween: [ "style", "${_Text2Copy6}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid98", tween: [ "style", "${_Text2Copy6}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 500 },
            { id: "eid207", tween: [ "style", "${_gunnison-3}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid208", tween: [ "style", "${_gunnison-3}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 500 },
            { id: "eid120", tween: [ "style", "${_Text2Copy12}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500 },
            { id: "eid155", tween: [ "style", "${_Text2Copy12}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 500 },
            { id: "eid151", tween: [ "style", "${_button-previous}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid144", tween: [ "style", "${_Text2Copy7}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid101", tween: [ "style", "${_Text2Copy7}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 500 },
            { id: "eid213", tween: [ "style", "${_gunnison-5}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500 },
            { id: "eid142", tween: [ "style", "${_Text2Copy8}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid99", tween: [ "style", "${_Text2Copy8}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 500 },
            { id: "eid100", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid113", tween: [ "style", "${_Text2Copy11}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500 },
            { id: "eid150", tween: [ "style", "${_Text2Copy11}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 500 },
            { id: "eid108", tween: [ "style", "${_button-close}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid204", tween: [ "style", "${_gunnison-2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid205", tween: [ "style", "${_gunnison-2}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid170", tween: [ "style", "${_button-more}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
            { id: "eid183", tween: [ "style", "${_Text2Copy17}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500 },
            { id: "eid117", tween: [ "style", "${_Text2Copy}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid136", tween: [ "style", "${_Text2Copy}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid210", tween: [ "style", "${_gunnison-4}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500 },
            { id: "eid211", tween: [ "style", "${_gunnison-4}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 500 },
            { id: "eid187", tween: [ "style", "${_Text2Copy18}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500 },
            { id: "eid112", tween: [ "style", "${_Text2Copy4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid123", tween: [ "style", "${_Text2Copy4}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid201", tween: [ "style", "${_gunnison-1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid202", tween: [ "style", "${_gunnison-1}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid169", tween: [ "style", "${_button-previous}", "display", 'block', { fromValue: 'none'}], position: 541, duration: 0 },
            { id: "eid181", tween: [ "style", "${_Text2Copy13}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500 },
            { id: "eid116", tween: [ "style", "${_button-more}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid153", tween: [ "style", "${_button-more}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 500 },
            { id: "eid102", tween: [ "style", "${_Text2Copy3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid126", tween: [ "style", "${_Text2Copy3}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid122", tween: [ "style", "${_Text2Copy10}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500 },
            { id: "eid154", tween: [ "style", "${_Text2Copy10}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 500 },
            { id: "eid106", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid94", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_button-close}', [] ], ""], position: 0 },
            { id: "eid96", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_button-more}', [] ], ""], position: 0 },
            { id: "eid152", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_button-previous}', [] ], ""], position: 0 }         ]
      }
   }
},
"button-ogden": {
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
      font: ['Arial, Helvetica, sans-serif',18,'rgba(61,61,61,1.00)','500','none',''],
      id: 'TextCopy3',
      text: '• Ogden Bay',
      type: 'text',
      rect: ['1px','4px','auto','auto','auto','auto']
   },
   {
      type: 'rect',
      id: 'RectangleCopy3',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['0px','0px','168px','31px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RectangleCopy3}": [
            ["style", "top", '0px'],
            ["style", "height", '31px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '168px']
         ],
         "${_TextCopy3}": [
            ["style", "top", '4px'],
            ["color", "color", 'rgba(61,61,61,1)'],
            ["style", "font-weight", '500'],
            ["style", "left", '1px'],
            ["style", "font-size", '18px']
         ],
         "${symbolSelector}": [
            ["style", "height", '31px'],
            ["style", "width", '168px']
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
            { id: "eid55", tween: [ "color", "${_TextCopy3}", "color", 'rgba(35,85,100,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(61,61,61,1)'}], position: 0, duration: 250 }         ]
      }
   }
},
"info-ogden": {
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
      rect: ['-32px','-76px','549px','535px','auto','auto'],
      opacity: 0.6,
      id: 'Rectangle4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['-8px','-45px','497px','469px','auto','auto'],
      fill: ['rgba(228,238,241,1.00)'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      boxShadow: ['',2,3,10,0,'rgba(0,0,0,0.40)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',14,'rgba(60,60,60,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2Copy4',
      text: 'Ogden Bay receives fresh water inflow from the Ogden River and from the Bear River as it comes out of Bear River Bay. Together these rivers supply nearly 80% of the fresh water flowing into the lake.',
      align: 'left',
      rect: ['17px','280px','450px','72px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal'],
      type: 'text',
      id: 'Text2Copy3',
      text: '1 of 3',
      align: 'left',
      rect: ['17px','390px','auto','auto','auto','auto']
   },
   {
      id: 'ogden-1',
      type: 'image',
      rect: ['36px','0','409px','252px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/ogden-1.jpg','0px','0px']
   },
   {
      font: ['Arial, Helvetica, sans-serif',14,'rgba(60,60,60,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2Copy2',
      text: 'Due to its large fresh water inflow, Ogden Bay tends to be slightly less saline than the main part of the south arm, even though their waters do freely mix.',
      align: 'left',
      rect: ['17px','323px','450px','50px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',12,'rgba(60,60,60,1)','normal','none','italic'],
      type: 'text',
      id: 'Text2Copy19',
      text: 'Photo by Bonnie Baxter',
      align: 'right',
      rect: ['46px','298px','413px','35px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal'],
      type: 'text',
      id: 'Text2Copy',
      text: '2 of 3',
      align: 'left',
      rect: ['17px','390px','auto','auto','auto','auto']
   },
   {
      id: 'ogden-2',
      type: 'image',
      rect: ['24px','1px','435px','292px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/ogden-2.jpg','0px','0px']
   },
   {
      font: ['Arial, Helvetica, sans-serif',12,'rgba(60,60,60,1)','normal','none','italic'],
      type: 'text',
      id: 'Text2Copy7',
      text: 'Photo by Mike Megill',
      align: 'right',
      rect: ['56px','301px','370px','26px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',14,'rgba(60,60,60,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2Copy20',
      text: 'Along the east side of Ogden Bay is the Ogden Bay Waterfowl Management Area, a 20,000-acre wetland that supports an impressive bird population.',
      align: 'left',
      rect: ['17px','324px','450px','55px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal'],
      type: 'text',
      id: 'Text2Copy6',
      text: '3 of 3',
      align: 'left',
      rect: ['17px','390px','auto','auto','auto','auto']
   },
   {
      id: 'ogden-3',
      type: 'image',
      rect: ['56px','0','370px','297px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/ogden-3.jpg','0px','0px']
   },
   {
      rect: ['125px','382px','auto','auto','auto','auto'],
      display: 'none',
      type: 'rect',
      cursor: ['pointer'],
      id: 'button-previous'
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','normal','none','italic'],
      type: 'text',
      id: 'Text2',
      text: 'Gilbert Bay',
      align: 'left',
      rect: ['17px','-30px','auto','auto','auto','auto']
   },
   {
      id: 'button-close',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['412px','-39px','auto','auto','auto','auto']
   },
   {
      id: 'button-more',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['413px','382px','auto','auto','auto','auto']
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
         "${_ogden-1}": [
            ["style", "left", '36px'],
            ["style", "opacity", '0']
         ],
         "${_Text2Copy}": [
            ["style", "top", '390px'],
            ["style", "text-align", 'left'],
            ["style", "opacity", '0'],
            ["style", "font-style", 'normal'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '17px'],
            ["style", "font-size", '16px']
         ],
         "${_Text2Copy3}": [
            ["style", "top", '390px'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", 'bold'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "font-size", '16px']
         ],
         "${_Text2Copy20}": [
            ["style", "top", '324px'],
            ["style", "width", '450px'],
            ["style", "line-height", '18px'],
            ["style", "height", '55px'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "font-size", '14px']
         ],
         "${_Text2Copy2}": [
            ["style", "top", '323px'],
            ["style", "width", '450px'],
            ["style", "line-height", '18px'],
            ["style", "height", '50px'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "font-size", '14px']
         ],
         "${_ogden-3}": [
            ["style", "left", '56px'],
            ["style", "opacity", '0']
         ],
         "${symbolSelector}": [
            ["style", "height", '454px'],
            ["style", "width", '540px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(228,238,241,1.00)'],
            ["subproperty", "boxShadow.blur", '10px'],
            ["style", "opacity", '0'],
            ["style", "left", '-8px'],
            ["style", "width", '497px'],
            ["style", "top", '-45px'],
            ["style", "height", '469px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '2px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.40)']
         ],
         "${_button-previous}": [
            ["style", "top", '382px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '125px']
         ],
         "${_Text2Copy19}": [
            ["style", "line-height", '14px'],
            ["style", "opacity", '0'],
            ["style", "left", '46px'],
            ["style", "width", '413px'],
            ["style", "top", '298px'],
            ["style", "text-align", 'right'],
            ["style", "height", '35px'],
            ["style", "font-size", '12px'],
            ["style", "font-style", 'italic']
         ],
         "${_button-more}": [
            ["style", "top", '382px'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '413px']
         ],
         "${_Text2Copy7}": [
            ["style", "line-height", '18px'],
            ["style", "opacity", '0'],
            ["style", "left", '56px'],
            ["style", "font-size", '12px'],
            ["style", "top", '301px'],
            ["style", "text-align", 'right'],
            ["style", "font-style", 'italic'],
            ["style", "height", '26px'],
            ["style", "width", '370px']
         ],
         "${_ogden-2}": [
            ["style", "top", '1px'],
            ["style", "opacity", '0'],
            ["style", "left", '24px']
         ],
         "${_Text2Copy4}": [
            ["style", "line-height", '18px'],
            ["style", "font-size", '14px'],
            ["style", "top", '280px'],
            ["style", "font-style", 'normal'],
            ["style", "height", '72px'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "width", '450px']
         ],
         "${_button-close}": [
            ["style", "top", '-39px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '412px']
         ],
         "${_Rectangle4}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '-76px'],
            ["style", "height", '535px'],
            ["style", "opacity", '0'],
            ["style", "left", '-32px'],
            ["style", "width", '549px']
         ],
         "${_Text2Copy6}": [
            ["style", "top", '390px'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", 'bold'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "font-size", '16px']
         ],
         "${_Text2}": [
            ["style", "top", '-30px'],
            ["style", "font-style", 'italic'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
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
            { id: "eid133", tween: [ "style", "${_Text2Copy2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid134", tween: [ "style", "${_Text2Copy2}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid219", tween: [ "style", "${_ogden-2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid220", tween: [ "style", "${_ogden-2}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid104", tween: [ "style", "${_Rectangle4}", "opacity", '0.6000000238418579', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid148", tween: [ "style", "${_Text2Copy6}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid98", tween: [ "style", "${_Text2Copy6}", "opacity", '1', { fromValue: '1'}], position: 1500, duration: 0 },
            { id: "eid216", tween: [ "style", "${_ogden-1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid217", tween: [ "style", "${_ogden-1}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid170", tween: [ "style", "${_button-more}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
            { id: "eid151", tween: [ "style", "${_button-previous}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid102", tween: [ "style", "${_Text2Copy3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid126", tween: [ "style", "${_Text2Copy3}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid222", tween: [ "style", "${_ogden-3}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid116", tween: [ "style", "${_button-more}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid153", tween: [ "style", "${_button-more}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid117", tween: [ "style", "${_Text2Copy}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid136", tween: [ "style", "${_Text2Copy}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid112", tween: [ "style", "${_Text2Copy4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid123", tween: [ "style", "${_Text2Copy4}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid106", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid169", tween: [ "style", "${_button-previous}", "display", 'block', { fromValue: 'none'}], position: 541, duration: 0 },
            { id: "eid197", tween: [ "style", "${_Text2Copy19}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid198", tween: [ "style", "${_Text2Copy19}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid108", tween: [ "style", "${_button-close}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid100", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid144", tween: [ "style", "${_Text2Copy7}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid101", tween: [ "style", "${_Text2Copy7}", "opacity", '1', { fromValue: '1'}], position: 1500, duration: 0 },
            { id: "eid223", tween: [ "style", "${_Text2Copy20}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid94", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_button-close}', [] ], ""], position: 0 },
            { id: "eid96", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_button-more}', [] ], ""], position: 0 },
            { id: "eid152", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_button-previous}', [] ], ""], position: 0 }         ]
      }
   }
},
"info-ponds": {
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
      rect: ['-32px','-76px','549px','535px','auto','auto'],
      opacity: 0.6,
      id: 'Rectangle4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['-8px','-45px','497px','469px','auto','auto'],
      fill: ['rgba(228,238,241,1.00)'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      boxShadow: ['',2,3,10,0,'rgba(0,0,0,0.40)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',14,'rgba(60,60,60,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2Copy4',
      text: 'Evaporation ponds in several places around the lake are used to concentrate the minerals from lake water for commercial use. The ponds are enclosed by walls, and water is channeled into them and left to evaporate.',
      align: 'left',
      rect: ['17px','279px','450px','72px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal'],
      type: 'text',
      id: 'Text2Copy3',
      text: '1 of 3',
      align: 'left',
      rect: ['17px','390px','auto','auto','auto','auto']
   },
   {
      id: 'ponds-1',
      type: 'image',
      rect: ['37px','0','409px','244px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/ponds-1.jpg','0px','0px']
   },
   {
      font: ['Arial, Helvetica, sans-serif',14,'rgba(60,60,60,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2Copy2',
      text: 'Many minerals are extracted from Great Salt Lake water, including sodium chloride, magnesium chloride, and potassium sulfate. Some of the minerals are refined into their constituent elements, such as chlorine gas and magnesium.',
      align: 'left',
      rect: ['17px','305px','450px','50px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',12,'rgba(60,60,60,1)','normal','none','italic'],
      type: 'text',
      id: 'Text2Copy21',
      text: 'Piles of salt taken from evaporation ponds, by Brian Avery',
      align: 'right',
      rect: ['20px','282px','440px','21px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal'],
      type: 'text',
      id: 'Text2Copy',
      text: '2 of 3',
      align: 'left',
      rect: ['17px','390px','auto','auto','auto','auto']
   },
   {
      id: 'ponds-2',
      type: 'image',
      rect: ['20px','0','440px','280px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/ponds-2.jpg','0px','0px']
   },
   {
      font: ['Arial, Helvetica, sans-serif',14,'rgba(60,60,60,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2Copy7',
      text: 'Evaporation ponds containing water with varying mineral content are home to different populations of microbes. High concentrations of red or green microbes give the ponds their brilliant colors.',
      align: 'left',
      rect: ['17px','295px','450px','72px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',12,'rgba(60,60,60,1)','normal','none','italic'],
      type: 'text',
      id: 'Text2Copy22',
      text: 'Evaporation ponds at the south end of Bear River Bay, by Jeff Kubina',
      align: 'right',
      rect: ['45px','261px','390px','21px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal'],
      type: 'text',
      id: 'Text2Copy6',
      text: '3 of 3',
      align: 'left',
      rect: ['17px','390px','auto','auto','auto','auto']
   },
   {
      id: 'ponds-3',
      type: 'image',
      rect: ['45px','0','390px','258px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/ponds-3.jpg','0px','0px']
   },
   {
      rect: ['125px','382px','auto','auto','auto','auto'],
      display: 'none',
      type: 'rect',
      cursor: ['pointer'],
      id: 'button-previous'
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','normal','none','italic'],
      type: 'text',
      id: 'Text2',
      text: 'Gilbert Bay',
      align: 'left',
      rect: ['17px','-30px','auto','auto','auto','auto']
   },
   {
      id: 'button-close',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['412px','-39px','auto','auto','auto','auto']
   },
   {
      id: 'button-more',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['413px','382px','auto','auto','auto','auto']
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
            ["style", "top", '390px'],
            ["style", "text-align", 'left'],
            ["style", "opacity", '0'],
            ["style", "font-style", 'normal'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '17px'],
            ["style", "font-size", '16px']
         ],
         "${_ponds-3}": [
            ["style", "left", '45px'],
            ["style", "opacity", '0']
         ],
         "${_Text2}": [
            ["style", "top", '-30px'],
            ["style", "font-style", 'italic'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "font-size", '16px']
         ],
         "${_Text2Copy2}": [
            ["style", "top", '305px'],
            ["style", "width", '450px'],
            ["style", "line-height", '18px'],
            ["style", "height", '50px'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
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
            ["style", "left", '-8px'],
            ["style", "width", '497px'],
            ["style", "top", '-45px'],
            ["style", "height", '469px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '2px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.40)']
         ],
         "${_ponds-2}": [
            ["style", "left", '20px'],
            ["style", "opacity", '0']
         ],
         "${_ponds-1}": [
            ["style", "left", '37px'],
            ["style", "opacity", '0']
         ],
         "${_button-more}": [
            ["style", "top", '382px'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '413px']
         ],
         "${_Text2Copy7}": [
            ["style", "line-height", '18px'],
            ["style", "font-size", '14px'],
            ["style", "top", '295px'],
            ["style", "font-style", 'normal'],
            ["style", "height", '72px'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "width", '450px']
         ],
         "${_Text2Copy3}": [
            ["style", "top", '390px'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", 'bold'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "font-size", '16px']
         ],
         "${_Text2Copy6}": [
            ["style", "top", '390px'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", 'bold'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "font-size", '16px']
         ],
         "${_Text2Copy4}": [
            ["style", "line-height", '18px'],
            ["style", "font-size", '14px'],
            ["style", "top", '279px'],
            ["style", "font-style", 'normal'],
            ["style", "height", '72px'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "width", '450px']
         ],
         "${_Rectangle4}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '-76px'],
            ["style", "height", '535px'],
            ["style", "opacity", '0'],
            ["style", "left", '-32px'],
            ["style", "width", '549px']
         ],
         "${_button-close}": [
            ["style", "top", '-39px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '412px']
         ],
         "${_button-previous}": [
            ["style", "top", '382px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '125px']
         ],
         "${_Text2Copy21}": [
            ["style", "line-height", '18px'],
            ["style", "opacity", '0'],
            ["style", "left", '20px'],
            ["style", "font-size", '12px'],
            ["style", "top", '282px'],
            ["style", "text-align", 'right'],
            ["style", "font-style", 'italic'],
            ["style", "height", '21px'],
            ["style", "width", '440px']
         ],
         "${_Text2Copy22}": [
            ["style", "line-height", '18px'],
            ["style", "opacity", '0'],
            ["style", "left", '45px'],
            ["style", "font-size", '12px'],
            ["style", "top", '261px'],
            ["style", "text-align", 'right'],
            ["style", "font-style", 'italic'],
            ["style", "height", '21px'],
            ["style", "width", '390px']
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
            { id: "eid104", tween: [ "style", "${_Rectangle4}", "opacity", '0.6000000238418579', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid148", tween: [ "style", "${_Text2Copy6}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid98", tween: [ "style", "${_Text2Copy6}", "opacity", '1', { fromValue: '1'}], position: 1500, duration: 0 },
            { id: "eid230", tween: [ "style", "${_ponds-2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid231", tween: [ "style", "${_ponds-2}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid151", tween: [ "style", "${_button-previous}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid102", tween: [ "style", "${_Text2Copy3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid126", tween: [ "style", "${_Text2Copy3}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid234", tween: [ "style", "${_Text2Copy21}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid235", tween: [ "style", "${_Text2Copy21}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid116", tween: [ "style", "${_button-more}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid153", tween: [ "style", "${_button-more}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid117", tween: [ "style", "${_Text2Copy}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid136", tween: [ "style", "${_Text2Copy}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid170", tween: [ "style", "${_button-more}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
            { id: "eid227", tween: [ "style", "${_ponds-1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid228", tween: [ "style", "${_ponds-1}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid112", tween: [ "style", "${_Text2Copy4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid123", tween: [ "style", "${_Text2Copy4}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid108", tween: [ "style", "${_button-close}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid169", tween: [ "style", "${_button-previous}", "display", 'block', { fromValue: 'none'}], position: 541, duration: 0 },
            { id: "eid236", tween: [ "style", "${_Text2Copy22}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid237", tween: [ "style", "${_Text2Copy22}", "opacity", '1', { fromValue: '1'}], position: 1500, duration: 0 },
            { id: "eid144", tween: [ "style", "${_Text2Copy7}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid101", tween: [ "style", "${_Text2Copy7}", "opacity", '1', { fromValue: '1'}], position: 1500, duration: 0 },
            { id: "eid133", tween: [ "style", "${_Text2Copy2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid134", tween: [ "style", "${_Text2Copy2}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid233", tween: [ "style", "${_ponds-3}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid106", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid94", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_button-close}', [] ], ""], position: 0 },
            { id: "eid96", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_button-more}', [] ], ""], position: 0 },
            { id: "eid152", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_button-previous}', [] ], ""], position: 0 }         ]
      }
   }
},
"info-wetlands": {
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
      rect: ['-32px','-76px','549px','535px','auto','auto'],
      opacity: 0.6,
      id: 'Rectangle4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['-8px','-45px','497px','469px','auto','auto'],
      fill: ['rgba(228,238,241,1.00)'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      boxShadow: ['',2,3,10,0,'rgba(0,0,0,0.40)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',14,'rgba(60,60,60,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2Copy4',
      text: 'Wetlands around Great Salt Lake contain fresh, salty, and brackish water (somewhere between fresh and salty). They include ponds, marshes, and flats. Wetlands support plants that provide food and protection for wildlife, including birds, fish, amphibians, reptiles, and invertebrates.',
      align: 'left',
      rect: ['17px','274px','450px','94px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal'],
      type: 'text',
      id: 'Text2Copy3',
      text: '1 of 4',
      align: 'left',
      rect: ['17px','390px','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',14,'rgba(60,60,60,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2Copy2',
      text: 'Mudflats form at the edges of the lake when the water line recedes. Mudflats are important feeding, breeding, and nesting sites for many birds, including the threatened snowy plover.',
      align: 'left',
      rect: ['17px','306px','450px','61px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',12,'rgba(60,60,60,1)','normal','none','italic'],
      type: 'text',
      id: 'Text2Copy5',
      text: 'Snowy plover by Paul Higgins ',
      align: 'right',
      rect: ['168px','274px','285px','18px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal'],
      type: 'text',
      id: 'Text2Copy',
      text: '2 of 4',
      align: 'left',
      rect: ['17px','390px','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',14,'rgba(60,60,60,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2Copy7',
      text: 'Anaerobic bacteria thrive in wetland soil, which contains very little oxygen. As a byproduct of their metabolism, these bacteria produce sulfur gases, which is one source of the rotten-egg aroma that many people associate with Great Salt Lake.',
      align: 'left',
      rect: ['17px','291px','450px','72px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal'],
      type: 'text',
      id: 'Text2Copy6',
      text: '3 of 4',
      align: 'left',
      rect: ['17px','390px','auto','auto','auto','auto']
   },
   {
      id: 'wetlands-3',
      type: 'image',
      rect: ['43px','0px','390px','273px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/wetlands-3.jpg','0px','0px']
   },
   {
      font: ['Arial, Helvetica, sans-serif',14,'rgba(60,60,60,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2Copy12',
      text: 'Many of the wetlands surrounding Great Salt Lake are managed by systems of dikes and other barriers. These structures help wildlife managers control water flow through the wetlands in order to maximize their size and productivity.',
      align: 'left',
      rect: ['17px','288px','450px','72px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',12,'rgba(60,60,60,1)','normal','none','italic'],
      type: 'text',
      id: 'Text2Copy11',
      text: 'Aerial view of wetlands and dikes',
      align: 'right',
      rect: ['53px','258px','375px','37px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','700','none','normal'],
      type: 'text',
      id: 'Text2Copy10',
      text: '4 of 4',
      align: 'left',
      rect: ['17px','390px','auto','auto','auto','auto']
   },
   {
      rect: ['125px','382px','auto','auto','auto','auto'],
      display: 'none',
      type: 'rect',
      cursor: ['pointer'],
      id: 'button-previous'
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(60,60,60,1)','normal','none','italic'],
      type: 'text',
      id: 'Text2',
      text: 'Wetlands',
      align: 'left',
      rect: ['17px','-30px','auto','auto','auto','auto']
   },
   {
      id: 'button-close',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['412px','-39px','auto','auto','auto','auto']
   },
   {
      id: 'button-more',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['413px','382px','auto','auto','auto','auto']
   },
   {
      id: 'wetlands-1',
      type: 'image',
      rect: ['37px','0','409px','248px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/wetlands-1.jpg','0px','0px']
   },
   {
      id: 'wetlands-2b',
      type: 'image',
      rect: ['30px','0','390px','256px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/wetlands-2b.jpg','0px','0px']
   },
   {
      id: 'wetlands-4',
      type: 'image',
      rect: ['48px','0px','380px','255px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/wetlands-4.jpg','0px','0px']
   },
   {
      id: 'wetlands-2a2',
      type: 'image',
      rect: ['303px','154px','150px','118px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/wetlands-2a.jpg','0px','0px']
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
            ["style", "top", '390px'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", 'bold'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "font-size", '16px']
         ],
         "${_Text2Copy16}": [
            ["style", "top", '285px'],
            ["style", "width", '450px'],
            ["style", "line-height", '18px'],
            ["style", "height", '72px'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '1'],
            ["style", "left", '17px'],
            ["style", "font-size", '14px']
         ],
         "${_Text2}": [
            ["style", "top", '-30px'],
            ["style", "font-style", 'italic'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "font-size", '16px']
         ],
         "${_wetlands-2a2}": [
            ["style", "top", '154px'],
            ["style", "opacity", '0'],
            ["style", "left", '303px']
         ],
         "${_Text2Copy2}": [
            ["style", "line-height", '18px'],
            ["style", "font-size", '14px'],
            ["style", "top", '306px'],
            ["style", "font-style", 'normal'],
            ["style", "height", '61px'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "width", '450px']
         ],
         "${_Text2Copy11}": [
            ["style", "line-height", '13px'],
            ["style", "opacity", '0'],
            ["style", "left", '53px'],
            ["style", "width", '375px'],
            ["style", "top", '258px'],
            ["style", "text-align", 'right'],
            ["style", "height", '37px'],
            ["style", "font-style", 'italic'],
            ["style", "font-size", '12px']
         ],
         "${symbolSelector}": [
            ["style", "height", '454px'],
            ["style", "width", '540px']
         ],
         "${_Text2Copy15}": [
            ["style", "line-height", '14px'],
            ["style", "font-size", '11px'],
            ["style", "top", '243px'],
            ["style", "font-style", 'italic'],
            ["style", "height", '37px'],
            ["style", "opacity", '1'],
            ["style", "left", '47px'],
            ["style", "width", '380px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(228,238,241,1.00)'],
            ["subproperty", "boxShadow.blur", '10px'],
            ["style", "opacity", '0'],
            ["style", "left", '-8px'],
            ["style", "width", '497px'],
            ["style", "top", '-45px'],
            ["style", "height", '469px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '2px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.40)']
         ],
         "${_Rectangle4}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '-76px'],
            ["style", "height", '535px'],
            ["style", "opacity", '0'],
            ["style", "left", '-32px'],
            ["style", "width", '549px']
         ],
         "${_wetlands-3}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '43px']
         ],
         "${_wetlands-1}": [
            ["style", "left", '37px'],
            ["style", "opacity", '0']
         ],
         "${_wetlands-4}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '48px']
         ],
         "${_button-more}": [
            ["style", "top", '382px'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '413px']
         ],
         "${_Text2Copy7}": [
            ["style", "top", '291px'],
            ["style", "width", '450px'],
            ["style", "line-height", '18px'],
            ["style", "height", '72px'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "font-size", '14px']
         ],
         "${_button-close}": [
            ["style", "top", '-39px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '412px']
         ],
         "${_Text2Copy6}": [
            ["style", "top", '390px'],
            ["style", "text-align", 'left'],
            ["style", "opacity", '0'],
            ["style", "font-style", 'normal'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '17px'],
            ["style", "font-size", '16px']
         ],
         "${_Text2Copy5}": [
            ["style", "line-height", '18px'],
            ["style", "opacity", '0'],
            ["style", "left", '168px'],
            ["style", "font-size", '12px'],
            ["style", "top", '274px'],
            ["style", "text-align", 'right'],
            ["style", "font-style", 'italic'],
            ["style", "width", '285px'],
            ["style", "height", '18px']
         ],
         "${_Text2Copy4}": [
            ["style", "top", '274px'],
            ["style", "width", '450px'],
            ["style", "line-height", '18px'],
            ["style", "height", '94px'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "font-size", '14px']
         ],
         "${_button-previous}": [
            ["style", "top", '382px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '125px']
         ],
         "${_Text2Copy12}": [
            ["style", "line-height", '18px'],
            ["style", "font-size", '14px'],
            ["style", "top", '288px'],
            ["style", "font-style", 'normal'],
            ["style", "height", '72px'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "width", '450px']
         ],
         "${_Text2Copy3}": [
            ["style", "top", '390px'],
            ["style", "text-align", 'left'],
            ["style", "opacity", '0'],
            ["style", "font-style", 'normal'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '17px'],
            ["style", "font-size", '16px']
         ],
         "${_wetlands-2b}": [
            ["style", "left", '30px'],
            ["style", "opacity", '0']
         ],
         "${_Text2Copy10}": [
            ["style", "top", '390px'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", 'bold'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "font-size", '16px']
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
            { id: "eid122", tween: [ "style", "${_Text2Copy10}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500 },
            { id: "eid154", tween: [ "style", "${_Text2Copy10}", "opacity", '1', { fromValue: '1'}], position: 2000, duration: 0 },
            { id: "eid259", tween: [ "style", "${_wetlands-2a2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid260", tween: [ "style", "${_wetlands-2a2}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid240", tween: [ "style", "${_wetlands-1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid241", tween: [ "style", "${_wetlands-1}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid104", tween: [ "style", "${_Rectangle4}", "opacity", '0.6000000238418579', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid148", tween: [ "style", "${_Text2Copy6}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid98", tween: [ "style", "${_Text2Copy6}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 500 },
            { id: "eid170", tween: [ "style", "${_button-more}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid245", tween: [ "style", "${_wetlands-2b}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid247", tween: [ "style", "${_wetlands-2b}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid102", tween: [ "style", "${_Text2Copy3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid126", tween: [ "style", "${_Text2Copy3}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid252", tween: [ "style", "${_wetlands-4}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500 },
            { id: "eid253", tween: [ "style", "${_wetlands-4}", "opacity", '1', { fromValue: '1'}], position: 2000, duration: 0 },
            { id: "eid113", tween: [ "style", "${_Text2Copy11}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500 },
            { id: "eid150", tween: [ "style", "${_Text2Copy11}", "opacity", '1', { fromValue: '1'}], position: 2000, duration: 0 },
            { id: "eid116", tween: [ "style", "${_button-more}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid153", tween: [ "style", "${_button-more}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 500 },
            { id: "eid117", tween: [ "style", "${_Text2Copy}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid136", tween: [ "style", "${_Text2Copy}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid249", tween: [ "style", "${_wetlands-3}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid250", tween: [ "style", "${_wetlands-3}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 500 },
            { id: "eid108", tween: [ "style", "${_button-close}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid112", tween: [ "style", "${_Text2Copy4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid123", tween: [ "style", "${_Text2Copy4}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid144", tween: [ "style", "${_Text2Copy7}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid101", tween: [ "style", "${_Text2Copy7}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 500 },
            { id: "eid169", tween: [ "style", "${_button-previous}", "display", 'block', { fromValue: 'none'}], position: 541, duration: 0 },
            { id: "eid151", tween: [ "style", "${_button-previous}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid120", tween: [ "style", "${_Text2Copy12}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500 },
            { id: "eid155", tween: [ "style", "${_Text2Copy12}", "opacity", '1', { fromValue: '1'}], position: 2000, duration: 0 },
            { id: "eid100", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid85", tween: [ "style", "${_Text2Copy5}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid86", tween: [ "style", "${_Text2Copy5}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
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
})(jQuery, AdobeEdge, "EDGE-109877476");

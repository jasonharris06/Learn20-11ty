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
            id:'background-01',
            type:'image',
            rect:['-13px','1px','800px','566px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"background-01.png",'0px','0px']
         },
         {
            id:'container',
            type:'rect',
            rect:['20px','20px','480px','515px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Text',
            type:'text',
            rect:['516px','20px','208px','40px','auto','auto'],
            text:"Select to highlight",
            font:['Arial, Helvetica, sans-serif',24,"rgba(220,220,220,1.00)","500","none","normal"]
         },
         {
            id:'caution',
            type:'rect',
            rect:['512px','481px','auto','auto','auto','auto']
         },
         {
            id:'inflow-info',
            type:'rect',
            rect:['519px','82px','auto','auto','auto','auto']
         },
         {
            id:'color-info',
            type:'rect',
            rect:['90px','49px','auto','auto','auto','auto']
         },
         {
            id:'vegetation-info',
            type:'rect',
            rect:['172px','20px','auto','auto','auto','auto'],
            transform:[]
         },
         {
            id:'level-info',
            type:'rect',
            rect:['90px','49px','auto','auto','auto','auto']
         },
         {
            id:'inflow-button',
            type:'rect',
            rect:['519px','62px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'shoreline-button',
            type:'rect',
            rect:['519px','156px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'vegetation-button',
            type:'rect',
            rect:['519px','248px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'color-button',
            type:'rect',
            rect:['519px','339px','auto','auto','auto','auto'],
            cursor:['pointer']
         }],
         symbolInstances: [
         {
            id:'inflow-button',
            symbolName:'inflow-button'
         },
         {
            id:'color-info',
            symbolName:'color-info'
         },
         {
            id:'inflow-info',
            symbolName:'inflow-info'
         },
         {
            id:'vegetation-button',
            symbolName:'vegetation-button'
         },
         {
            id:'color-button',
            symbolName:'color-button'
         },
         {
            id:'shoreline-button',
            symbolName:'shoreline-button'
         },
         {
            id:'vegetation-info',
            symbolName:'vegetation-info'
         },
         {
            id:'level-info',
            symbolName:'level-info'
         },
         {
            id:'caution',
            symbolName:'caution'
         }
         ]
      },
   states: {
      "Base State": {
         "${_color-info}": [
            ["style", "left", '90px'],
            ["style", "top", '49px']
         ],
         "${_background-01}": [
            ["style", "left", '-13px'],
            ["style", "top", '1px']
         ],
         "${_vegetation-info}": [
            ["style", "left", '172px'],
            ["style", "top", '20px']
         ],
         "${_shoreline-button}": [
            ["style", "top", '156px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '519px']
         ],
         "${_level-info}": [
            ["style", "left", '90px'],
            ["style", "top", '49px']
         ],
         "${_caution}": [
            ["style", "left", '512px'],
            ["style", "top", '481px']
         ],
         "${_inflow-info}": [
            ["style", "display", 'block'],
            ["style", "left", '519px'],
            ["style", "top", '82px']
         ],
         "${_Text}": [
            ["style", "top", '20px'],
            ["color", "color", 'rgba(220,220,220,1.00)'],
            ["style", "height", '40px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "font-style", 'normal'],
            ["style", "font-weight", '500'],
            ["style", "left", '516px'],
            ["style", "width", '208px']
         ],
         "${_color-button}": [
            ["style", "top", '339px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '519px']
         ],
         "${_inflow-button}": [
            ["style", "top", '62px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '519px']
         ],
         "${_container}": [
            ["style", "top", '20px'],
            ["style", "height", '515px'],
            ["style", "left", '20px'],
            ["style", "width", '480px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(40,40,40,1.00)'],
            ["style", "width", '760px'],
            ["style", "height", '560px'],
            ["style", "overflow", 'hidden']
         ],
         "${_vegetation-button}": [
            ["style", "top", '248px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '519px']
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
            { id: "eid19", tween: [ "style", "${_inflow-info}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }         ]
      }
   }
},
"inflow-button": {
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
      font: ['Arial, Helvetica, sans-serif',20,'rgba(220,220,220,1.00)','normal','none','normal'],
      id: 'TextCopy',
      text: '•  water flow',
      type: 'text',
      rect: ['7px','8px','197px','40px','auto','auto']
   },
   {
      type: 'rect',
      id: 'Hit_Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['0px','0px','208px','40px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Hit_Rectangle}": [
            ["style", "height", '40px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_TextCopy}": [
            ["style", "top", '8px'],
            ["style", "width", '197px'],
            ["style", "font-style", 'normal'],
            ["style", "height", '40px'],
            ["color", "color", 'rgba(220,220,220,1)'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '7px'],
            ["style", "font-size", '20px']
         ],
         "${symbolSelector}": [
            ["style", "height", '48px'],
            ["style", "width", '208px']
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
"inflow-info": {
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
      rect: ['0px','-20px','119px','40px','auto','auto'],
      opacity: 1,
      id: 'Blue_Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(159,149,0,1.00)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',12,'rgba(254,244,100,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text3',
      text: 'Changes in the flow of fresh water into the lake are especially visible in Bear River and Farmington Bays.',
      align: 'left',
      rect: ['0px','23px','204px','59px','auto','auto']
   },
   {
      id: 'inflow5Copy',
      type: 'image',
      rect: ['246px','-1px','185px','355px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/inflow.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_inflow5Copy}": [
            ["style", "top", '-1px'],
            ["style", "opacity", '0'],
            ["style", "left", '-263px']
         ],
         "${_Text3}": [
            ["style", "top", '23px'],
            ["style", "width", '204px'],
            ["style", "height", '59px'],
            ["color", "color", 'rgba(254,244,100,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "font-size", '12px']
         ],
         "${_Blue_Rectangle}": [
            ["style", "top", '-20px'],
            ["color", "background-color", 'rgba(159,149,0,1.00)'],
            ["style", "height", '40px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '48px'],
            ["style", "width", '208px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1250,
         autoPlay: false,
         timeline: [
            { id: "eid18", tween: [ "style", "${_Text3}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250 },
            { id: "eid20", tween: [ "style", "${_Text3}", "opacity", '0', { fromValue: '1'}], position: 750, duration: 250 },
            { id: "eid7", tween: [ "style", "${_Blue_Rectangle}", "width", '119px', { fromValue: '0px'}], position: 41, duration: 459 },
            { id: "eid21", tween: [ "style", "${_Blue_Rectangle}", "width", '0px', { fromValue: '119px'}], position: 750, duration: 500 },
            { id: "eid29", tween: [ "style", "${_inflow5Copy}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250 },
            { id: "eid30", tween: [ "style", "${_inflow5Copy}", "opacity", '0', { fromValue: '1'}], position: 750, duration: 250 }         ]
      }
   }
},
"caution": {
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
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','0px','69px','23px','auto','auto'],
      fill: ['rgba(93,93,93,0.54)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(220,220,220,1.00)','500','none','italic'],
      id: 'TextCopy5',
      text: 'Caution',
      type: 'text',
      rect: ['6px','3px','69px','21px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',13,'rgba(200,200,200,1.00)','normal','none','italic'],
      id: 'TextCopy6',
      text: 'contains flickering images',
      type: 'text',
      rect: ['72px','5px','174px','21px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',11,'rgba(200,200,200,1.00)','normal','none','normal'],
      type: 'text',
      id: 'TextCopy7',
      text: 'Flickering images can trigger seizures<br>in people with photosensitive epilepsy.',
      align: 'right',
      rect: ['0px','28px','226px','21px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(93,93,93,0.54)'],
            ["style", "height", '23px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '69px']
         ],
         "${_TextCopy5}": [
            ["color", "color", 'rgba(220,220,220,1)'],
            ["style", "font-weight", '500'],
            ["style", "left", '6px'],
            ["style", "font-size", '16px'],
            ["style", "top", '3px'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "height", '21px'],
            ["style", "width", '69px']
         ],
         "${_TextCopy7}": [
            ["style", "line-height", '14px'],
            ["color", "color", 'rgba(200,200,200,1.00)'],
            ["style", "left", '0px'],
            ["style", "font-size", '11px'],
            ["style", "top", '28px'],
            ["style", "text-align", 'right'],
            ["style", "height", '21px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "font-style", 'normal'],
            ["style", "width", '226px']
         ],
         "${_TextCopy6}": [
            ["style", "top", '5px'],
            ["style", "width", '174px'],
            ["color", "color", 'rgba(200,200,200,1.00)'],
            ["style", "font-style", 'italic'],
            ["style", "height", '21px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '72px'],
            ["style", "font-size", '13px']
         ],
         "${symbolSelector}": [
            ["style", "height", '49px'],
            ["style", "width", '246px']
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
"shoreline-button": {
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
      font: ['Arial, Helvetica, sans-serif',20,'rgba(220,220,220,1.00)','normal','none','normal'],
      id: 'TextCopy2',
      text: '•  shoreline changes',
      type: 'text',
      rect: ['7px','8px','197px','40px','auto','auto']
   },
   {
      type: 'rect',
      id: 'RectangleCopy',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['0px','0px','208px','40px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_TextCopy2}": [
            ["style", "top", '8px'],
            ["style", "width", '197px'],
            ["style", "font-style", 'normal'],
            ["style", "height", '40px'],
            ["color", "color", 'rgba(220,220,220,1)'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '7px'],
            ["style", "font-size", '20px']
         ],
         "${_RectangleCopy}": [
            ["style", "height", '40px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '48px'],
            ["style", "width", '208px']
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
"vegetation-button": {
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
      font: ['Arial, Helvetica, sans-serif',20,'rgba(220,220,220,1.00)','normal','none','normal'],
      id: 'TextCopy3',
      text: '•  vegetation changes',
      type: 'text',
      rect: ['7px','8px','197px','40px','auto','auto']
   },
   {
      type: 'rect',
      id: 'RectangleCopy3',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['0px','0px','208px','40px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RectangleCopy3}": [
            ["style", "height", '40px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_TextCopy3}": [
            ["style", "top", '8px'],
            ["style", "width", '197px'],
            ["style", "font-style", 'normal'],
            ["style", "height", '40px'],
            ["color", "color", 'rgba(220,220,220,1)'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '7px'],
            ["style", "font-size", '20px']
         ],
         "${symbolSelector}": [
            ["style", "height", '48px'],
            ["style", "width", '208px']
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
"color-button": {
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
      font: ['Arial, Helvetica, sans-serif',20,'rgba(220,220,220,1.00)','normal','none','normal'],
      id: 'TextCopy4',
      text: '•  water color changes',
      type: 'text',
      rect: ['7px','8px','197px','40px','auto','auto']
   },
   {
      type: 'rect',
      id: 'RectangleCopy2',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['0px','0px','208px','40px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_TextCopy4}": [
            ["style", "top", '8px'],
            ["style", "width", '197px'],
            ["style", "font-style", 'normal'],
            ["style", "height", '40px'],
            ["color", "color", 'rgba(220,220,220,1)'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '7px'],
            ["style", "font-size", '20px']
         ],
         "${_RectangleCopy2}": [
            ["style", "height", '40px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '48px'],
            ["style", "width", '208px']
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
"color-info": {
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
      font: ['Arial, Helvetica, sans-serif',12,'rgba(227,136,238,1.00)','normal','none','normal'],
      type: 'text',
      text: 'The changing seasons affect microbe populations, which affect water color. Notice how the green algae in the south arm clears in the spring as brine shrimp hatch and begin to eat.',
      id: 'Text3Copy2',
      opacity: 1,
      align: 'left',
      rect: ['429px','333px','204px','59px','auto','auto']
   },
   {
      rect: ['429px','290px','204px','40px','auto','auto'],
      opacity: 1,
      id: 'Blue_RectangleCopy2',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(226,46,223,1.00)']
   },
   {
      id: 'color2',
      type: 'image',
      rect: ['-38px','3px','325px','448px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/color.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_color2}": [
            ["style", "top", '3px'],
            ["style", "opacity", '0'],
            ["style", "left", '-38px']
         ],
         "${_Text3Copy2}": [
            ["style", "top", '333px'],
            ["style", "font-size", '12px'],
            ["color", "color", 'rgba(227,136,238,1.00)'],
            ["style", "height", '59px'],
            ["style", "opacity", '0'],
            ["style", "left", '429px'],
            ["style", "width", '204px']
         ],
         "${symbolSelector}": [
            ["style", "height", '454px'],
            ["style", "width", '633px']
         ],
         "${_Blue_RectangleCopy2}": [
            ["style", "top", '290px'],
            ["color", "background-color", 'rgba(226,46,223,1.00)'],
            ["style", "height", '40px'],
            ["style", "opacity", '1'],
            ["style", "left", '429px'],
            ["style", "width", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1250,
         autoPlay: false,
         timeline: [
            { id: "eid45", tween: [ "style", "${_Blue_RectangleCopy2}", "width", '204px', { fromValue: '0px'}], position: 38, duration: 462 },
            { id: "eid52", tween: [ "style", "${_Blue_RectangleCopy2}", "width", '0px', { fromValue: '204px'}], position: 750, duration: 500 },
            { id: "eid47", tween: [ "style", "${_Text3Copy2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250 },
            { id: "eid50", tween: [ "style", "${_Text3Copy2}", "opacity", '0', { fromValue: '1'}], position: 750, duration: 250 },
            { id: "eid66", tween: [ "style", "${_color2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250 },
            { id: "eid67", tween: [ "style", "${_color2}", "opacity", '0', { fromValue: '1'}], position: 750, duration: 250 }         ]
      }
   }
},
"vegetation-info": {
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
      font: ['Arial, Helvetica, sans-serif',12,'rgba(118,235,119,1.00)','normal','none','normal'],
      type: 'text',
      text: 'The mountains around the lake are snow-covered in the winter, green in the spring, and brown in the fall.',
      id: 'Text3Copy',
      opacity: 1,
      align: 'left',
      rect: ['347px','270px','204px','59px','auto','auto']
   },
   {
      rect: ['347px','227px','197px','40px','auto','auto'],
      opacity: 1,
      id: 'Blue_RectangleCopy',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(29,211,77,1.00)']
   },
   {
      id: 'vegetation2',
      type: 'image',
      rect: ['13px','0px','316px','489px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/vegetation.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_vegetation2}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '13px']
         ],
         "${_Blue_RectangleCopy}": [
            ["style", "top", '227px'],
            ["color", "background-color", 'rgba(29,211,77,1.00)'],
            ["style", "height", '40px'],
            ["style", "opacity", '1'],
            ["style", "left", '347px'],
            ["style", "width", '0px']
         ],
         "${_Text3Copy}": [
            ["style", "top", '270px'],
            ["style", "font-size", '12px'],
            ["color", "color", 'rgba(118,235,119,1.00)'],
            ["style", "height", '59px'],
            ["style", "opacity", '0'],
            ["style", "left", '347px'],
            ["style", "width", '204px']
         ],
         "${symbolSelector}": [
            ["style", "height", '489px'],
            ["style", "width", '551px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1250,
         autoPlay: false,
         timeline: [
            { id: "eid54", tween: [ "style", "${_Blue_RectangleCopy}", "width", '197px', { fromValue: '0px'}], position: 36, duration: 464 },
            { id: "eid61", tween: [ "style", "${_Blue_RectangleCopy}", "width", '0px', { fromValue: '197px'}], position: 750, duration: 500 },
            { id: "eid56", tween: [ "style", "${_Text3Copy}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250 },
            { id: "eid59", tween: [ "style", "${_Text3Copy}", "opacity", '0', { fromValue: '1'}], position: 750, duration: 250 },
            { id: "eid63", tween: [ "style", "${_vegetation2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250 },
            { id: "eid64", tween: [ "style", "${_vegetation2}", "opacity", '0', { fromValue: '1'}], position: 750, duration: 250 }         ]
      }
   }
},
"level-info": {
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
      id: 'level',
      type: 'image',
      rect: ['0px','0px','291px','454px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/level.png','0px','0px']
   },
   {
      font: ['Arial, Helvetica, sans-serif',12,'rgba(108,197,234,1.00)','normal','none','normal'],
      type: 'text',
      text: 'The shoreline moves as water enters the lake in the spring and evaporates during the summer.',
      id: 'Text3',
      opacity: 1,
      align: 'left',
      rect: ['429px','149px','208px','59px','auto','auto']
   },
   {
      rect: ['429px','106px','190px','40px','auto','auto'],
      opacity: 1,
      id: 'Blue_Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(39,170,225,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "top", '149px'],
            ["style", "width", '208px'],
            ["style", "height", '59px'],
            ["color", "color", 'rgba(108,197,234,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '429px'],
            ["style", "font-size", '12px']
         ],
         "${_Blue_Rectangle}": [
            ["style", "top", '106px'],
            ["color", "background-color", 'rgba(39,170,225,1.00)'],
            ["style", "height", '40px'],
            ["style", "opacity", '1'],
            ["style", "left", '429px'],
            ["style", "width", '0px']
         ],
         "${_level}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${symbolSelector}": [
            ["style", "height", '454px'],
            ["style", "width", '637px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1250,
         autoPlay: false,
         timeline: [
            { id: "eid36", tween: [ "style", "${_Blue_Rectangle}", "width", '190px', { fromValue: '0px'}], position: 40, duration: 460 },
            { id: "eid43", tween: [ "style", "${_Blue_Rectangle}", "width", '0px', { fromValue: '190px'}], position: 750, duration: 500 },
            { id: "eid38", tween: [ "style", "${_Text3}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250 },
            { id: "eid41", tween: [ "style", "${_Text3}", "opacity", '0', { fromValue: '1'}], position: 750, duration: 250 },
            { id: "eid5", tween: [ "style", "${_level}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid40", tween: [ "style", "${_level}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250 },
            { id: "eid42", tween: [ "style", "${_level}", "opacity", '0', { fromValue: '1'}], position: 750, duration: 250 }         ]
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
})(jQuery, AdobeEdge, "EDGE-169576360");

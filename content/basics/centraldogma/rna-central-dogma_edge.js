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
            id:'rna-overview',
            type:'image',
            rect:['0px','0px','870px','460px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"rna-overview.jpg",'0px','0px']
         },
         {
            id:'rollover-dna2',
            display:'none',
            type:'image',
            rect:['0','0','870px','460px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"rollover-dna.jpg",'0px','0px']
         },
         {
            id:'rollover-mrna',
            display:'none',
            type:'image',
            rect:['0','0','870px','460px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"rollover-mrna.jpg",'0px','0px']
         },
         {
            id:'rollover-rrna',
            display:'none',
            type:'image',
            rect:['0','0','870px','460px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"rollover-rrna.jpg",'0px','0px']
         },
         {
            id:'rollover-trna',
            display:'none',
            type:'image',
            rect:['0','0','870px','460px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"rollover-trna.jpg",'0px','0px']
         },
         {
            id:'Text',
            type:'text',
            rect:['107px','230px','69px','32px','auto','auto'],
            text:"RNA<br>Polymerase",
            align:"left",
            font:['Arial, Helvetica, sans-serif',14,"rgba(108,104,84,1.00)","normal","none","normal"]
         },
         {
            id:'TextCopy',
            type:'text',
            rect:['782px','234px','69px','32px','auto','auto'],
            text:"Ribosome",
            align:"left",
            font:['Arial, Helvetica, sans-serif',14,"rgba(29,117,188,1.00)","normal","none","normal"]
         },
         {
            id:'button-trna',
            type:'rect',
            rect:['593px','57px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'button-rrna',
            type:'rect',
            rect:['638px','347px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'button-mrna',
            type:'rect',
            rect:['590px','156px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'button-dna',
            type:'rect',
            rect:['131px','302px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'info-trna',
            display:'none',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'info-rrna',
            display:'none',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'info-mrna',
            display:'none',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'info-dna',
            display:'none',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'button-dna',
            symbolName:'button-dna'
         },
         {
            id:'info-dna',
            symbolName:'info-dna'
         },
         {
            id:'button-mrna',
            symbolName:'button-mrna'
         },
         {
            id:'button-rrna',
            symbolName:'button-rrna'
         },
         {
            id:'info-mrna',
            symbolName:'info-mrna'
         },
         {
            id:'info-rrna',
            symbolName:'info-rrna'
         },
         {
            id:'button-trna',
            symbolName:'button-trna'
         },
         {
            id:'info-trna',
            symbolName:'info-trna'
         }
         ]
      },
   states: {
      "Base State": {
         "${_button-trna}": [
            ["style", "top", '57px'],
            ["style", "left", '593px'],
            ["style", "cursor", 'pointer']
         ],
         "${_rollover-rrna}": [
            ["style", "display", 'none'],
            ["style", "overflow", 'hidden']
         ],
         "${_button-mrna}": [
            ["style", "top", '156px'],
            ["style", "left", '590px'],
            ["style", "cursor", 'pointer']
         ],
         "${_info-rrna}": [
            ["style", "display", 'none']
         ],
         "${_Text3Copy3}": [
            ["style", "top", '399px'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '304px'],
            ["style", "font-size", '18px']
         ],
         "${_rollover-dna2}": [
            ["style", "display", 'none'],
            ["style", "overflow", 'hidden']
         ],
         "${_rna-overview}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_info-mrna}": [
            ["style", "display", 'none']
         ],
         "${_info-trna}": [
            ["style", "display", 'none']
         ],
         "${_rollover-trna}": [
            ["style", "display", 'none'],
            ["style", "overflow", 'hidden']
         ],
         "${_button-dna}": [
            ["style", "top", '302px'],
            ["style", "left", '131px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text}": [
            ["style", "top", '230px'],
            ["color", "color", 'rgba(108,104,84,1.00)'],
            ["style", "left", '107px'],
            ["style", "font-size", '14px']
         ],
         "${_info-dna}": [
            ["style", "display", 'none']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '870px'],
            ["style", "height", '460px'],
            ["style", "overflow", 'hidden']
         ],
         "${_rollover-mrna}": [
            ["style", "display", 'none'],
            ["style", "overflow", 'hidden']
         ],
         "${_TextCopy}": [
            ["color", "color", 'rgba(29,117,188,1.00)'],
            ["style", "top", '234px'],
            ["style", "left", '782px'],
            ["style", "font-size", '14px']
         ],
         "${_button-rrna}": [
            ["style", "top", '347px'],
            ["style", "left", '638px'],
            ["style", "cursor", 'pointer']
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
            { id: "eid41", tween: [ "style", "${_info-rrna}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid48", tween: [ "style", "${_info-mrna}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid54", tween: [ "style", "${_rollover-trna}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1", tween: [ "style", "${_info-trna}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid55", tween: [ "style", "${_rollover-rrna}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid53", tween: [ "style", "${_info-dna}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid56", tween: [ "style", "${_rollover-mrna}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid57", tween: [ "style", "${_rollover-dna2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }         ]
      }
   }
},
"button-mrna": {
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
      stroke: [0,'rgb(255, 255, 255)','solid'],
      rect: ['-354px','-21px','389px','156px','auto','auto'],
      fill: ['rgba(29,117,188,0.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle2Copy5',
      stroke: [0,'rgb(255, 255, 255)','solid'],
      rect: ['35px','-21px','37px','68px','auto','auto'],
      fill: ['rgba(29,117,188,0.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle2Copy',
      stroke: [0,'rgb(255, 255, 255)','solid'],
      rect: ['-292px','135px','69px','108px','auto','auto'],
      fill: ['rgba(29,117,188,0.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle2Copy2',
      stroke: [0,'rgb(255, 255, 255)','solid'],
      rect: ['-230px','-69px','211px','48px','auto','auto'],
      fill: ['rgba(29,117,188,0.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle2Copy3',
      stroke: [0,'rgb(255, 255, 255)','solid'],
      rect: ['167px','109px','99px','177px','auto','auto'],
      fill: ['rgba(29,117,188,0.00)']
   },
   {
      rect: ['1px','-3px','68px','34px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2Copy',
      stroke: [1,'rgb(170, 170, 170)','none'],
      type: 'rect',
      fill: ['rgba(247,148,30,1.00)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',20,'rgba(255,255,255,1.00)','400','none','normal'],
      type: 'text',
      id: 'Text2Copy2',
      text: 'mRNA',
      align: 'left',
      rect: ['6px','4px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text2Copy2}": [
            ["style", "top", '4px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '6px'],
            ["style", "font-size", '20px']
         ],
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(29,117,188,0.00)']
         ],
         "${_RoundRect2Copy}": [
            ["color", "background-color", 'rgba(247,148,30,1.00)'],
            ["style", "height", '34px'],
            ["style", "top", '-3px'],
            ["style", "left", '1px'],
            ["style", "width", '68px']
         ],
         "${symbolSelector}": [
            ["style", "height", '32px'],
            ["style", "width", '69px']
         ],
         "${_Rectangle2Copy5}": [
            ["color", "background-color", 'rgba(29,117,188,0.00)'],
            ["style", "height", '68px'],
            ["style", "left", '35px'],
            ["style", "width", '37px']
         ],
         "${_Rectangle2Copy3}": [
            ["style", "top", '109px'],
            ["style", "height", '177px'],
            ["color", "background-color", 'rgba(29,117,188,0.00)'],
            ["style", "left", '167px'],
            ["style", "width", '99px']
         ],
         "${_Rectangle2Copy}": [
            ["style", "top", '135px'],
            ["style", "height", '108px'],
            ["color", "background-color", 'rgba(29,117,188,0.00)'],
            ["style", "left", '-292px'],
            ["style", "width", '69px']
         ],
         "${_Rectangle2Copy2}": [
            ["style", "top", '-69px'],
            ["style", "height", '48px'],
            ["color", "background-color", 'rgba(29,117,188,0.00)'],
            ["style", "left", '-230px'],
            ["style", "width", '211px']
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
"button-rrna": {
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
      id: 'Rectangle3',
      stroke: [0,'rgb(255, 255, 255)','solid'],
      rect: ['-271px','-56px','391px','88px','auto','auto'],
      fill: ['rgba(29,117,188,0.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle3Copy',
      stroke: [0,'rgb(255, 255, 255)','solid'],
      rect: ['-13px','-82px','133px','27px','auto','auto'],
      fill: ['rgba(29,117,188,0.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle3Copy2',
      stroke: [0,'rgb(255, 255, 255)','solid'],
      rect: ['-13px','-143px','225px','61px','auto','auto'],
      fill: ['rgba(29,117,188,0.00)']
   },
   {
      rect: ['-2px','-1px','62px','34px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2Copy2',
      stroke: [1,'rgb(170, 170, 170)','none'],
      type: 'rect',
      fill: ['rgba(29,117,188,1.00)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',20,'rgba(255,255,255,1.00)','400','none','normal'],
      type: 'text',
      id: 'Text2Copy3',
      text: 'rRNA',
      align: 'left',
      rect: ['5px','5px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle3}": [
            ["style", "top", '-56px'],
            ["style", "height", '88px'],
            ["color", "background-color", 'rgba(29,117,188,0.00)'],
            ["style", "left", '-271px'],
            ["style", "width", '391px']
         ],
         "${symbolSelector}": [
            ["style", "height", '32px'],
            ["style", "width", '58px']
         ],
         "${_Rectangle3Copy2}": [
            ["style", "top", '-143px'],
            ["style", "height", '61px'],
            ["color", "background-color", 'rgba(29,117,188,0.00)'],
            ["style", "left", '-13px'],
            ["style", "width", '225px']
         ],
         "${_Text2Copy3}": [
            ["style", "top", '5px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '5px'],
            ["style", "font-size", '20px']
         ],
         "${_RoundRect2Copy2}": [
            ["color", "background-color", 'rgba(29,117,188,1.00)'],
            ["style", "height", '34px'],
            ["style", "top", '-1px'],
            ["style", "left", '-2px'],
            ["style", "width", '62px']
         ],
         "${_Rectangle3Copy}": [
            ["style", "top", '-82px'],
            ["style", "height", '27px'],
            ["color", "background-color", 'rgba(29,117,188,0.00)'],
            ["style", "left", '-13px'],
            ["style", "width", '133px']
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
"button-trna": {
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
      id: 'RectangleCopy5',
      stroke: [0,'rgb(255, 255, 255)','solid'],
      rect: ['-357px','-12px','124px','89px','auto','auto'],
      fill: ['rgba(29,117,188,0.00)']
   },
   {
      type: 'rect',
      id: 'RectangleCopy6',
      stroke: [0,'rgb(255, 255, 255)','solid'],
      rect: ['-233px','-40px','211px','70px','auto','auto'],
      fill: ['rgba(29,117,188,0.00)']
   },
   {
      type: 'rect',
      id: 'RectangleCopy7',
      stroke: [0,'rgb(255, 255, 255)','solid'],
      rect: ['-23px','-28px','183px','106px','auto','auto'],
      fill: ['rgba(29,117,188,0.00)']
   },
   {
      type: 'rect',
      id: 'RectangleCopy8',
      stroke: [0,'rgb(255, 255, 255)','solid'],
      rect: ['69px','77px','132px','70px','auto','auto'],
      fill: ['rgba(29,117,188,0.00)']
   },
   {
      rect: ['-2px','0px','62px','34px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2',
      stroke: [1,'rgb(170, 170, 170)','none'],
      type: 'rect',
      fill: ['rgba(0,104,56,1.00)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',20,'rgba(255,255,255,1.00)','400','none','normal'],
      type: 'text',
      id: 'Text2',
      text: 'tRNA',
      align: 'left',
      rect: ['6px','6px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RectangleCopy8}": [
            ["style", "top", '77px'],
            ["color", "background-color", 'rgba(29,117,188,0.00)'],
            ["style", "height", '70px'],
            ["style", "border-width", '0px'],
            ["style", "left", '69px'],
            ["style", "width", '132px']
         ],
         "${symbolSelector}": [
            ["style", "height", '32px'],
            ["style", "width", '56px']
         ],
         "${_RoundRect2}": [
            ["color", "background-color", 'rgba(0,104,56,1.00)'],
            ["style", "height", '34px'],
            ["style", "top", '0px'],
            ["style", "left", '-2px'],
            ["style", "width", '62px']
         ],
         "${_RectangleCopy6}": [
            ["style", "top", '-40px'],
            ["color", "background-color", 'rgba(29,117,188,0.00)'],
            ["style", "height", '70px'],
            ["style", "border-width", '0px'],
            ["style", "left", '-233px'],
            ["style", "width", '211px']
         ],
         "${_RectangleCopy7}": [
            ["style", "top", '-28px'],
            ["color", "background-color", 'rgba(29,117,188,0.00)'],
            ["style", "height", '106px'],
            ["style", "left", '-23px'],
            ["style", "border-width", '0px'],
            ["style", "width", '183px']
         ],
         "${_Text2}": [
            ["style", "top", '6px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '6px'],
            ["style", "font-size", '20px']
         ],
         "${_RectangleCopy5}": [
            ["style", "top", '-12px'],
            ["color", "background-color", 'rgba(29,117,188,0.00)'],
            ["style", "height", '89px'],
            ["style", "left", '-357px'],
            ["style", "border-width", '0px'],
            ["style", "width", '124px']
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
"button-dna": {
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
      id: 'Rectangle',
      stroke: [0,'rgb(255, 255, 255)','solid'],
      rect: ['-131px','-301px','234px','458px','auto','auto'],
      fill: ['rgba(29,117,188,0.00)']
   },
   {
      type: 'rect',
      id: 'RectangleCopy',
      stroke: [0,'rgb(255, 255, 255)','solid'],
      rect: ['103px','-12px','62px','169px','auto','auto'],
      fill: ['rgba(29,117,188,0.00)']
   },
   {
      type: 'rect',
      id: 'RectangleCopy3',
      stroke: [0,'rgb(255, 255, 255)','solid'],
      rect: ['165px','97px','117px','60px','auto','auto'],
      fill: ['rgba(29,117,188,0.00)']
   },
   {
      type: 'rect',
      id: 'RectangleCopy4',
      stroke: [0,'rgb(255, 255, 255)','solid'],
      rect: ['234px','78px','48px','19px','auto','auto'],
      fill: ['rgba(29,117,188,0.00)']
   },
   {
      rect: ['2px','-6px','62px','34px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2',
      stroke: [1,'rgb(170, 170, 170)','none'],
      type: 'rect',
      fill: ['rgba(108,104,84,1.00)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',20,'rgba(255,255,255,1.00)','400','none','normal'],
      type: 'text',
      id: 'Text2Copy',
      text: 'DNA',
      align: 'left',
      rect: ['12px','1px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '32px'],
            ["style", "width", '58px']
         ],
         "${_Text2Copy}": [
            ["style", "top", '1px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '12px'],
            ["style", "font-size", '20px']
         ],
         "${_RoundRect2}": [
            ["color", "background-color", 'rgba(108,104,84,1.00)'],
            ["style", "height", '34px'],
            ["style", "top", '-6px'],
            ["style", "left", '2px'],
            ["style", "width", '62px']
         ],
         "${_RectangleCopy}": [
            ["style", "top", '-12px'],
            ["color", "background-color", 'rgba(29,117,188,0.00)'],
            ["style", "height", '169px'],
            ["style", "border-width", '0px'],
            ["style", "left", '103px'],
            ["style", "width", '62px']
         ],
         "${_RectangleCopy3}": [
            ["style", "top", '97px'],
            ["color", "background-color", 'rgba(29,117,188,0.00)'],
            ["style", "height", '60px'],
            ["style", "border-width", '0px'],
            ["style", "left", '165px'],
            ["style", "width", '117px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(29,117,188,0.00)'],
            ["style", "height", '458px'],
            ["style", "top", '-301px'],
            ["style", "border-width", '0px'],
            ["style", "width", '234px']
         ],
         "${_RectangleCopy4}": [
            ["style", "top", '78px'],
            ["color", "background-color", 'rgba(29,117,188,0.00)'],
            ["style", "height", '19px'],
            ["style", "left", '234px'],
            ["style", "border-width", '0px'],
            ["style", "width", '48px']
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
      rect: ['0px','0px','28px','28px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      boxShadow: ['',1,1,7,0,'rgba(0,0,0,0.59)'],
      id: 'Ellipse',
      stroke: [3,'rgba(255,255,255,1.00)','solid'],
      type: 'ellipse',
      fill: ['rgba(59,59,59,1.00)']
   },
   {
      rect: ['16px','6px','3px','22px','auto','auto'],
      transform: [[0,0],['45']],
      id: 'Rectangle5',
      stroke: [1,'rgb(170, 170, 170)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['16px','6px','3px','22px','auto','auto'],
      transform: [[0,0],['-45']],
      id: 'Rectangle5Copy',
      stroke: [1,'rgb(170, 170, 170)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle5}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "rotateZ", '45deg'],
            ["style", "height", '22px'],
            ["style", "top", '6px'],
            ["style", "left", '16px'],
            ["style", "width", '3px']
         ],
         "${_Rectangle5Copy}": [
            ["style", "top", '6px'],
            ["transform", "rotateZ", '-45deg'],
            ["style", "height", '22px'],
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "left", '16px'],
            ["style", "width", '3px']
         ],
         "${_Ellipse}": [
            ["color", "background-color", 'rgba(59,59,59,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.59)'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '3px'],
            ["style", "width", '28px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["subproperty", "boxShadow.offsetV", '1px'],
            ["style", "height", '28px'],
            ["color", "border-color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "boxShadow.offsetH", '1px'],
            ["subproperty", "boxShadow.blur", '7px']
         ],
         "${symbolSelector}": [
            ["style", "height", '34px'],
            ["style", "width", '34px']
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
"button-next": {
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
      rect: ['6px','1px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1.00)','700','none','normal'],
      id: 'Text3Copy',
      text: 'Next',
      align: 'right',
      type: 'text'
   },
   {
      type: 'rect',
      id: 'Rectangle6Copy',
      stroke: [3,'rgb(255, 255, 255)','none'],
      rect: ['0px','0px','48px','20px','auto','auto'],
      fill: ['rgba(59,59,59,0.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3Copy}": [
            ["style", "top", '1px'],
            ["style", "text-align", 'right'],
            ["color", "color", 'rgba(80,80,80,1.00)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '6px'],
            ["style", "font-size", '16px']
         ],
         "${_Rectangle6Copy}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(59,59,59,0)'],
            ["style", "height", '20px'],
            ["style", "border-style", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '48px']
         ],
         "${symbolSelector}": [
            ["style", "height", '20px'],
            ["style", "width", '48px']
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
      rect: ['6px','1px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1.00)','700','none','normal'],
      id: 'Text3Copy2',
      text: 'Previous',
      align: 'left',
      type: 'text'
   },
   {
      type: 'rect',
      id: 'Rectangle6',
      stroke: [3,'rgb(255, 255, 255)','none'],
      rect: ['0px','0px','80px','20px','auto','auto'],
      fill: ['rgba(59,59,59,0.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3Copy2}": [
            ["style", "top", '1px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(80,80,80,1.00)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '6px'],
            ["style", "font-size", '16px']
         ],
         "${symbolSelector}": [
            ["style", "height", '20px'],
            ["style", "width", '80px']
         ],
         "${_Rectangle6}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(59,59,59,0.00)'],
            ["style", "height", '20px'],
            ["style", "border-style", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '80px']
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
"info-trna": {
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
      rect: ['0px','0px','900px','500px','auto','auto'],
      id: 'Rectangle4',
      stroke: [1,'rgb(170, 170, 170)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,0.67)']
   },
   {
      rect: ['198px','52px','478px','378px','auto','auto'],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      boxShadow: ['',1,1,7,0,'rgba(0,0,0,0.45)'],
      id: 'RoundRect',
      stroke: [1,'rgb(170, 170, 170)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      id: 'trna_1',
      type: 'image',
      rect: ['229px','105px','265px','241px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/trna_1.jpg','0px','0px']
   },
   {
      id: 'trna_2',
      type: 'image',
      rect: ['227px','69px','251px','329px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/trna_2.jpg','0px','0px']
   },
   {
      rect: ['217px','404px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1.00)','400','none','normal'],
      id: 'Text3Copy4',
      text: '1 of 3',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['356px','287px','296px','90px','auto','auto'],
      id: 'Text',
      text: 'tRNA carries amino acids, the building blocks of proteins. There are 20 different amino acids; each has its own specific tRNA \"carrier\" molecule.',
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1.00)','normal','none',''],
      type: 'text'
   },
   {
      rect: ['217px','404px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1.00)','400','none','normal'],
      id: 'Text3',
      text: '2 of 3',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['443px','241px','219px','136px','auto','auto'],
      id: 'TextCopy',
      text: 'Special proteins called aminoacyl-tRNA syntheses (pink) match amino acids with tRNA molecules and link them together.',
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1.00)','normal','none',''],
      type: 'text'
   },
   {
      rect: ['298px','403px','auto','auto','auto','auto'],
      id: 'button-previous',
      display: 'none',
      cursor: ['pointer'],
      type: 'rect'
   },
   {
      id: 'button-close',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['650px','43px','auto','auto','auto','auto']
   },
   {
      id: 'button-next',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['614px','403px','auto','auto','auto','auto']
   },
   {
      id: 'Group4',
      type: 'group',
      rect: ['210','85px','270','294','auto','auto'],
      c: [
      {
         id: 'trna_3',
         type: 'image',
         rect: ['0px','0px','233px','294px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/trna_3.jpg','0px','0px']
      },
      {
         rect: ['229px','142px','auto','auto','auto','auto'],
         font: ['Arial, Helvetica, sans-serif',14,'rgba(80,80,80,1)','normal','none','normal'],
         id: 'Text7',
         text: 'mRNA',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['35px','184px','49px','56px','auto','auto'],
         transform: [[],['27']],
         id: 'Rectangle5',
         stroke: [3,'rgba(185,14,36,1.00)','solid'],
         type: 'rect',
         fill: ['rgba(255,255,255,0.00)']
      }]
   },
   {
      rect: ['217px','404px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1.00)','400','none','normal'],
      align: 'left',
      id: 'Text3Copy',
      opacity: 0.87199997901917,
      text: '3 of 3',
      type: 'text'
   },
   {
      rect: ['217px','63px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',18,'rgba(80,80,80,1.00)','700','none','normal'],
      id: 'Text3Copy5',
      text: 'transfer RNA',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['455px','127px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',14,'rgba(80,80,80,1)','normal','none','normal'],
      id: 'Text8',
      text: 'Amino acid',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['450px','281px','212px','106px','auto','auto'],
      id: 'TextCopy2',
      text: 'tRNA has an \"anti-codon\" at its tip that recognizes a 3-nucleotide \"codon\" on the mRNA molecule through complementary base pairing.',
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1.00)','normal','none',''],
      type: 'text'
   }],
   symbolInstances: [
   {
      id: 'button-previous',
      symbolName: 'button-previous'
   },
   {
      id: 'button-next',
      symbolName: 'button-next'
   },
   {
      id: 'button-close',
      symbolName: 'button-close'
   }   ]
   },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '7px'],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '0'],
            ["style", "left", '198px'],
            ["style", "width", '478px'],
            ["style", "top", '52px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.45)'],
            ["subproperty", "boxShadow.offsetV", '1px'],
            ["style", "height", '378px'],
            ["subproperty", "boxShadow.spread", '0px'],
            ["subproperty", "boxShadow.offsetH", '1px'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Text7}": [
            ["style", "top", '142px'],
            ["style", "left", '229px'],
            ["style", "font-size", '14px']
         ],
         "${_Text3Copy4}": [
            ["style", "top", '404px'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", '400'],
            ["color", "color", 'rgba(80,80,80,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '217px'],
            ["style", "font-size", '16px']
         ],
         "${_Text8}": [
            ["style", "top", '127px'],
            ["style", "opacity", '0'],
            ["style", "left", '455px'],
            ["style", "font-size", '14px']
         ],
         "${_button-next}": [
            ["style", "top", '403px'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '614px']
         ],
         "${symbolSelector}": [
            ["style", "height", '500px'],
            ["style", "width", '900px']
         ],
         "${_button-previous}": [
            ["style", "top", '403px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '298px']
         ],
         "${_Text3Copy5}": [
            ["style", "top", '63px'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", 'bold'],
            ["color", "color", 'rgba(80,80,80,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '217px'],
            ["style", "font-size", '18px']
         ],
         "${_TextCopy2}": [
            ["style", "line-height", '20px'],
            ["style", "height", '106px'],
            ["style", "font-size", '16px'],
            ["style", "top", '281px'],
            ["color", "color", 'rgba(80,80,80,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '450px'],
            ["style", "width", '212px']
         ],
         "${_trna_3}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_Rectangle4}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(0,0,0,0.67)'],
            ["style", "opacity", '0'],
            ["style", "height", '500px'],
            ["style", "border-style", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '900px']
         ],
         "${_trna_1}": [
            ["style", "top", '105px'],
            ["style", "opacity", '0'],
            ["style", "left", '229px']
         ],
         "${_button-close}": [
            ["style", "top", '43px'],
            ["style", "opacity", '0'],
            ["style", "left", '650px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text3Copy}": [
            ["style", "top", '404px'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", 'normal'],
            ["color", "color", 'rgba(80,80,80,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '217px'],
            ["style", "font-size", '16px']
         ],
         "${_Text}": [
            ["style", "line-height", '20px'],
            ["style", "font-size", '16px'],
            ["style", "top", '287px'],
            ["color", "color", 'rgba(80,80,80,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '356px'],
            ["style", "width", '296px']
         ],
         "${_Group4}": [
            ["style", "top", '85px'],
            ["style", "opacity", '0']
         ],
         "${_Rectangle5}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "rotateZ", '27deg'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '3px'],
            ["style", "width", '49px'],
            ["style", "top", '184px'],
            ["style", "height", '56px'],
            ["color", "border-color", 'rgba(185,14,36,1.00)'],
            ["style", "left", '35px']
         ],
         "${_Text3}": [
            ["style", "top", '404px'],
            ["style", "text-align", 'left'],
            ["style", "opacity", '0'],
            ["color", "color", 'rgba(80,80,80,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '217px'],
            ["style", "font-size", '16px']
         ],
         "${_TextCopy}": [
            ["style", "line-height", '20px'],
            ["style", "width", '219px'],
            ["style", "top", '241px'],
            ["color", "color", 'rgba(80,80,80,1.00)'],
            ["style", "height", '136px'],
            ["style", "opacity", '0'],
            ["style", "left", '443px'],
            ["style", "font-size", '16px']
         ],
         "${_trna_2}": [
            ["style", "top", '69px'],
            ["style", "opacity", '0'],
            ["style", "left", '227px']
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
            { id: "eid97", tween: [ "style", "${_Group4}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid40", tween: [ "style", "${_Text3Copy}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid11", tween: [ "style", "${_button-next}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid33", tween: [ "style", "${_button-next}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 464 },
            { id: "eid9", tween: [ "style", "${_Rectangle4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid3", tween: [ "style", "${_button-previous}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid28", tween: [ "style", "${_TextCopy}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid29", tween: [ "style", "${_TextCopy}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid17", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid20", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid91", tween: [ "style", "${_trna_1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid92", tween: [ "style", "${_trna_1}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid5", tween: [ "style", "${_button-close}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid15", tween: [ "style", "${_Text3Copy5}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid94", tween: [ "style", "${_trna_2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid95", tween: [ "style", "${_trna_2}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid26", tween: [ "style", "${_Text3}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid27", tween: [ "style", "${_Text3}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid24", tween: [ "style", "${_button-previous}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid25", tween: [ "style", "${_button-previous}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid99", tween: [ "style", "${_Text8}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid100", tween: [ "style", "${_Text8}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid13", tween: [ "style", "${_RoundRect}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid7", tween: [ "style", "${_Text3Copy4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid21", tween: [ "style", "${_Text3Copy4}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid34", tween: [ "style", "${_button-next}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
            { id: "eid36", tween: [ "style", "${_TextCopy2}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 }         ]
      }
   }
},
"info-rrna": {
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
      id: 'Rectangle4',
      stroke: [1,'rgb(170, 170, 170)','none'],
      rect: ['0px','0px','900px','500px','auto','auto'],
      fill: ['rgba(0,0,0,0.67)']
   },
   {
      rect: ['198px','52px','478px','378px','auto','auto'],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      fill: ['rgba(255,255,255,1.00)'],
      id: 'RoundRect',
      stroke: [1,'rgb(170, 170, 170)','none'],
      type: 'rect',
      boxShadow: ['',1,1,7,0,'rgba(0,0,0,0.45)']
   },
   {
      id: 'rrna_1',
      type: 'image',
      rect: ['209px','98px','239px','240px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/rrna_1.jpg','0px','0px']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1.00)','400','none','normal'],
      type: 'text',
      id: 'Text3Copy4',
      text: '1 of 2',
      align: 'left',
      rect: ['217px','404px','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1.00)','normal','none',''],
      type: 'text',
      id: 'Text',
      text: 'Ribosomes also contain proteins (pink), which help the rRNA fold into the proper shape.',
      align: 'right',
      rect: ['329px','349px','330px','52px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1.00)','normal','none',''],
      type: 'text',
      id: 'TextCopy3',
      text: 'rRNA makes up the bulk of the structure of the ribosome, the cell\'s protein-building machine.',
      align: 'right',
      rect: ['437px','277px','222px','66px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',14,'rgba(80,80,80,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2',
      text: 'Large subunit',
      align: 'left',
      rect: ['407px','128px','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',14,'rgba(80,80,80,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2Copy',
      text: 'Small subunit',
      align: 'left',
      rect: ['448px','216px','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1.00)','400','none','normal'],
      type: 'text',
      id: 'Text3Copy',
      text: '2 of 2',
      align: 'left',
      rect: ['217px','404px','auto','auto','auto','auto']
   },
   {
      id: 'Group',
      type: 'group',
      rect: ['198','72px','403','249','auto','auto'],
      c: [
      {
         id: 'rrna_22',
         type: 'image',
         rect: ['0px','0px','357px','249px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/rrna_2.jpg','0px','0px']
      },
      {
         font: ['Arial, Helvetica, sans-serif',14,'rgba(80,80,80,1)','500','none','normal'],
         type: 'text',
         id: 'Text4',
         text: 'tRNA',
         align: 'left',
         rect: ['345px','27px','auto','auto','auto','auto']
      },
      {
         font: ['Arial, Helvetica, sans-serif',14,'rgba(80,80,80,1)','500','none','normal'],
         type: 'text',
         id: 'Text4Copy',
         text: 'mRNA',
         align: 'left',
         rect: ['362px','115px','auto','auto','auto','auto']
      }]
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1.00)','400','none','normal'],
      type: 'text',
      id: 'Text3',
      text: '2 of 2',
      align: 'left',
      rect: ['217px','404px','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1.00)','normal','none',''],
      type: 'text',
      id: 'TextCopy',
      text: 'To build a protein, the ribosome reads mRNA. tRNA carries amino acids into the ribosome, and rRNA links them together one at a time.<br>',
      align: 'right',
      rect: ['389px','313px','270px','71px','auto','auto']
   },
   {
      rect: ['298px','403px','auto','auto','auto','auto'],
      display: 'none',
      type: 'rect',
      cursor: ['pointer'],
      id: 'button-previous'
   },
   {
      id: 'button-close',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['650px','43px','auto','auto','auto','auto']
   },
   {
      id: 'button-next',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['614px','403px','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',18,'rgba(80,80,80,1.00)','700','none','normal'],
      type: 'text',
      id: 'Text3Copy5',
      text: 'ribosomal RNA',
      align: 'left',
      rect: ['217px','63px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'button-previous',
      symbolName: 'button-previous'
   },
   {
      id: 'button-next',
      symbolName: 'button-next'
   },
   {
      id: 'button-close',
      symbolName: 'button-close'
   }   ]
   },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '7px'],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '0'],
            ["style", "left", '198px'],
            ["style", "width", '478px'],
            ["style", "top", '52px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.offsetV", '1px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.45)'],
            ["style", "height", '378px'],
            ["subproperty", "boxShadow.spread", '0px'],
            ["subproperty", "boxShadow.offsetH", '1px'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Text3Copy}": [
            ["style", "top", '404px'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", 'normal'],
            ["color", "color", 'rgba(80,80,80,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '217px'],
            ["style", "font-size", '16px']
         ],
         "${_Text3}": [
            ["style", "top", '404px'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", '400'],
            ["color", "color", 'rgba(80,80,80,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '217px'],
            ["style", "font-size", '16px']
         ],
         "${_Text2}": [
            ["style", "top", '128px'],
            ["style", "opacity", '0'],
            ["style", "left", '407px'],
            ["style", "font-size", '14px']
         ],
         "${_button-next}": [
            ["style", "top", '403px'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '614px']
         ],
         "${symbolSelector}": [
            ["style", "height", '500px'],
            ["style", "width", '900px']
         ],
         "${_button-previous}": [
            ["style", "top", '403px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '298px']
         ],
         "${_Text3Copy5}": [
            ["style", "top", '63px'],
            ["style", "text-align", 'left'],
            ["style", "opacity", '0'],
            ["color", "color", 'rgba(80,80,80,1.00)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '217px'],
            ["style", "font-size", '18px']
         ],
         "${_TextCopy3}": [
            ["style", "line-height", '20px'],
            ["color", "color", 'rgba(80,80,80,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '437px'],
            ["style", "width", '222px'],
            ["style", "top", '277px'],
            ["style", "text-align", 'right'],
            ["style", "height", '66px'],
            ["style", "font-size", '16px']
         ],
         "${_Rectangle4}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(0,0,0,0.67)'],
            ["style", "border-style", 'none'],
            ["style", "height", '500px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '900px']
         ],
         "${_Text4}": [
            ["style", "top", '27px'],
            ["style", "font-weight", '500'],
            ["style", "left", '345px'],
            ["style", "font-size", '14px']
         ],
         "${_Text3Copy4}": [
            ["style", "top", '404px'],
            ["style", "text-align", 'left'],
            ["style", "opacity", '0'],
            ["color", "color", 'rgba(80,80,80,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '217px'],
            ["style", "font-size", '16px']
         ],
         "${_Group}": [
            ["style", "opacity", '0']
         ],
         "${_rrna_1}": [
            ["style", "top", '98px'],
            ["style", "opacity", '0']
         ],
         "${_Text}": [
            ["style", "line-height", '20px'],
            ["color", "color", 'rgba(80,80,80,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '329px'],
            ["style", "width", '330px'],
            ["style", "top", '349px'],
            ["style", "text-align", 'right'],
            ["style", "height", '52px'],
            ["style", "font-size", '16px']
         ],
         "${_Text4Copy}": [
            ["style", "top", '115px'],
            ["style", "font-weight", '500'],
            ["style", "left", '362px'],
            ["style", "font-size", '14px']
         ],
         "${_button-close}": [
            ["style", "top", '43px'],
            ["style", "opacity", '0'],
            ["style", "left", '650px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text2Copy}": [
            ["style", "top", '216px'],
            ["style", "opacity", '0'],
            ["style", "left", '448px'],
            ["style", "font-size", '14px']
         ],
         "${_TextCopy}": [
            ["style", "line-height", '20px'],
            ["color", "color", 'rgba(80,80,80,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '389px'],
            ["style", "font-size", '16px'],
            ["style", "top", '313px'],
            ["style", "text-align", 'right'],
            ["style", "height", '71px'],
            ["style", "width", '270px']
         ],
         "${_rrna_22}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
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
            { id: "eid7", tween: [ "style", "${_Text3Copy4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid21", tween: [ "style", "${_Text3Copy4}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid71", tween: [ "style", "${_Text3Copy}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid11", tween: [ "style", "${_button-next}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid33", tween: [ "style", "${_button-next}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 464 },
            { id: "eid59", tween: [ "style", "${_TextCopy3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid60", tween: [ "style", "${_TextCopy3}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid3", tween: [ "style", "${_button-previous}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid28", tween: [ "style", "${_TextCopy}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid29", tween: [ "style", "${_TextCopy}", "opacity", '1', { fromValue: '1'}], position: 1000, duration: 0 },
            { id: "eid17", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid20", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid73", tween: [ "style", "${_Group}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid34", tween: [ "style", "${_button-next}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid5", tween: [ "style", "${_button-close}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid15", tween: [ "style", "${_Text3Copy5}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid13", tween: [ "style", "${_RoundRect}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid24", tween: [ "style", "${_button-previous}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid25", tween: [ "style", "${_button-previous}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid26", tween: [ "style", "${_Text3}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid27", tween: [ "style", "${_Text3}", "opacity", '1', { fromValue: '1'}], position: 1000, duration: 0 },
            { id: "eid9", tween: [ "style", "${_Rectangle4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid65", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid68", tween: [ "style", "${_Text2}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid62", tween: [ "style", "${_rrna_1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid63", tween: [ "style", "${_rrna_1}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid67", tween: [ "style", "${_Text2Copy}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid69", tween: [ "style", "${_Text2Copy}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 }         ]
      }
   }
},
"info-mrna": {
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
      rect: ['0px','0px','900px','500px','auto','auto'],
      id: 'Rectangle4',
      stroke: [1,'rgb(170, 170, 170)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,0.67)']
   },
   {
      rect: ['198px','52px','478px','378px','auto','auto'],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      boxShadow: ['',1,1,7,0,'rgba(0,0,0,0.45)'],
      id: 'RoundRect',
      stroke: [1,'rgb(170, 170, 170)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      id: 'mrna_2',
      type: 'image',
      rect: ['214','101','329px','295px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/mrna_2.jpg','0px','0px']
   },
   {
      rect: ['217px','63px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',18,'rgba(80,80,80,1.00)','700','none','normal'],
      id: 'Text3Copy5',
      text: 'messenger RNA',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['217px','404px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1.00)','400','none','normal'],
      id: 'Text3Copy4',
      text: '1 of 3',
      align: 'left',
      type: 'text'
   },
   {
      id: 'mrna_1',
      type: 'image',
      rect: ['214px','101px','329px','295px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/mrna_1.jpg','0px','0px']
   },
   {
      rect: ['414px','292px','245px','90px','auto','auto'],
      id: 'Text',
      text: 'mRNA molecules are usually very long—on the order of thousands of base pairs. Base-pairing within the mRNA strand folds the molecule into complex shapes.',
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1.00)','normal','none',''],
      type: 'text'
   },
   {
      rect: ['217px','404px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1.00)','400','none','normal'],
      id: 'Text3',
      text: '2 of 3',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['414px','291px','248px','90px','auto','auto'],
      id: 'TextCopy',
      text: 'After it is made, mRNA is processed. Introns are removed (called splicing). And a protective cap and a poly-A tail are added to the ends.',
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1.00)','normal','none',''],
      type: 'text'
   },
   {
      id: 'Group2',
      type: 'group',
      rect: ['264','104','324','62','auto','auto'],
      c: [
      {
         rect: ['0px','0px','auto','auto','auto','auto'],
         font: ['Arial, Helvetica, sans-serif',14,'rgba(80,80,80,1)','normal','none','normal'],
         id: 'Text5',
         text: 'Cap',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['46px','46px','auto','auto','auto','auto'],
         font: ['Arial, Helvetica, sans-serif',14,'rgba(80,80,80,1)','normal','none','normal'],
         id: 'Text5Copy',
         text: 'Intron',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['283px','15px','auto','auto','auto','auto'],
         font: ['Arial, Helvetica, sans-serif',14,'rgba(80,80,80,1)','normal','none','normal'],
         id: 'Text5Copy2',
         text: 'Poly-A<br>tail',
         align: 'left',
         type: 'text'
      }]
   },
   {
      id: 'button-close',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['650px','43px','auto','auto','auto','auto']
   },
   {
      id: 'button-next',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['614px','403px','auto','auto','auto','auto']
   },
   {
      rect: ['422px','205px','215px','176px','auto','auto'],
      id: 'TextCopy2',
      text: 'Each mRNA molecule contains the instructions for building a protein.<br><br>Groups of 3 nucleotides (\"codons\") code for specific amino acids.',
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1.00)','normal','none',''],
      type: 'text'
   },
   {
      id: 'Group3',
      type: 'group',
      rect: ['215','89','206','322','auto','auto'],
      c: [
      {
         id: 'mrna_3',
         type: 'image',
         rect: ['0px','0px','183px','322px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/mrna_3.jpg','0px','0px']
      },
      {
         rect: ['129px','36px','auto','auto','auto','auto'],
         font: ['Arial, Helvetica, sans-serif',14,'rgba(80,80,80,1)','normal','none','normal'],
         id: 'Text6',
         text: 'Amino acids',
         align: 'left',
         type: 'text'
      }]
   },
   {
      rect: ['217px','404px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1.00)','400','none','normal'],
      align: 'left',
      id: 'Text3Copy',
      opacity: 0.87199997901917,
      text: '3 of 3',
      type: 'text'
   },
   {
      rect: ['298px','403px','auto','auto','auto','auto'],
      id: 'button-previous',
      display: 'none',
      cursor: ['pointer'],
      type: 'rect'
   }],
   symbolInstances: [
   {
      id: 'button-previous',
      symbolName: 'button-previous'
   },
   {
      id: 'button-next',
      symbolName: 'button-next'
   },
   {
      id: 'button-close',
      symbolName: 'button-close'
   }   ]
   },
   states: {
      "Base State": {
         "${_Group3}": [
            ["style", "opacity", '0']
         ],
         "${_Text3Copy}": [
            ["style", "top", '404px'],
            ["style", "text-align", 'left'],
            ["style", "opacity", '0'],
            ["color", "color", 'rgba(80,80,80,1)'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '217px'],
            ["style", "font-size", '16px']
         ],
         "${_Text5Copy2}": [
            ["style", "top", '15px'],
            ["style", "left", '283px'],
            ["style", "font-size", '14px']
         ],
         "${_Text3Copy4}": [
            ["style", "top", '404px'],
            ["style", "text-align", 'left'],
            ["style", "opacity", '0'],
            ["color", "color", 'rgba(80,80,80,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '217px'],
            ["style", "font-size", '16px']
         ],
         "${_Text5}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "font-size", '14px']
         ],
         "${_button-next}": [
            ["style", "top", '403px'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '614px']
         ],
         "${symbolSelector}": [
            ["style", "height", '500px'],
            ["style", "width", '900px']
         ],
         "${_button-previous}": [
            ["style", "top", '403px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '298px']
         ],
         "${_Text3Copy5}": [
            ["style", "top", '63px'],
            ["style", "text-align", 'left'],
            ["style", "opacity", '0'],
            ["color", "color", 'rgba(80,80,80,1.00)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '217px'],
            ["style", "font-size", '18px']
         ],
         "${_Group2}": [
            ["style", "opacity", '0']
         ],
         "${_mrna_3}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text5Copy}": [
            ["style", "top", '46px'],
            ["style", "left", '46px'],
            ["style", "font-size", '14px']
         ],
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '7px'],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '0'],
            ["style", "left", '198px'],
            ["style", "width", '478px'],
            ["style", "top", '52px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.offsetV", '1px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.45)'],
            ["style", "height", '378px'],
            ["subproperty", "boxShadow.spread", '0px'],
            ["subproperty", "boxShadow.offsetH", '1px'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Text3}": [
            ["style", "top", '404px'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", '400'],
            ["color", "color", 'rgba(80,80,80,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '217px'],
            ["style", "font-size", '16px']
         ],
         "${_Text6}": [
            ["style", "top", '36px'],
            ["style", "left", '129px'],
            ["style", "font-size", '14px']
         ],
         "${_TextCopy2}": [
            ["style", "line-height", '20px'],
            ["style", "width", '215px'],
            ["style", "top", '205px'],
            ["color", "color", 'rgba(80,80,80,1)'],
            ["style", "height", '176px'],
            ["style", "opacity", '0'],
            ["style", "left", '422px'],
            ["style", "font-size", '16px']
         ],
         "${_Text}": [
            ["style", "top", '292px'],
            ["style", "width", '245px'],
            ["style", "line-height", '20px'],
            ["color", "color", 'rgba(80,80,80,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '414px'],
            ["style", "font-size", '16px']
         ],
         "${_mrna_2}": [
            ["style", "opacity", '0']
         ],
         "${_button-close}": [
            ["style", "top", '43px'],
            ["style", "opacity", '0'],
            ["style", "left", '650px'],
            ["style", "cursor", 'pointer']
         ],
         "${_mrna_1}": [
            ["style", "top", '101px'],
            ["style", "opacity", '0'],
            ["style", "left", '214px']
         ],
         "${_TextCopy}": [
            ["style", "line-height", '20px'],
            ["style", "font-size", '16px'],
            ["style", "top", '291px'],
            ["color", "color", 'rgba(80,80,80,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '414px'],
            ["style", "width", '248px']
         ],
         "${_Rectangle4}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(0,0,0,0.67)'],
            ["style", "border-style", 'none'],
            ["style", "height", '500px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '900px']
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
            { id: "eid7", tween: [ "style", "${_Text3Copy4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid21", tween: [ "style", "${_Text3Copy4}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid40", tween: [ "style", "${_Text3Copy}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid11", tween: [ "style", "${_button-next}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid33", tween: [ "style", "${_button-next}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 464 },
            { id: "eid80", tween: [ "style", "${_mrna_1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid81", tween: [ "style", "${_mrna_1}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid3", tween: [ "style", "${_button-previous}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid28", tween: [ "style", "${_TextCopy}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid29", tween: [ "style", "${_TextCopy}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid17", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid20", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid86", tween: [ "style", "${_Group2}", "opacity", '1', { fromValue: '0'}], position: 539, duration: 461 },
            { id: "eid87", tween: [ "style", "${_Group2}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid34", tween: [ "style", "${_button-next}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
            { id: "eid5", tween: [ "style", "${_button-close}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid15", tween: [ "style", "${_Text3Copy5}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid89", tween: [ "style", "${_Group3}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid26", tween: [ "style", "${_Text3}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid27", tween: [ "style", "${_Text3}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid24", tween: [ "style", "${_button-previous}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid25", tween: [ "style", "${_button-previous}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid83", tween: [ "style", "${_mrna_2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid84", tween: [ "style", "${_mrna_2}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid13", tween: [ "style", "${_RoundRect}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid9", tween: [ "style", "${_Rectangle4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid36", tween: [ "style", "${_TextCopy2}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 }         ]
      }
   }
},
"info-dna": {
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
      id: 'Rectangle4',
      stroke: [1,'rgb(170, 170, 170)','none'],
      rect: ['0px','0px','900px','500px','auto','auto'],
      fill: ['rgba(0,0,0,0.67)']
   },
   {
      rect: ['198px','52px','478px','378px','auto','auto'],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      fill: ['rgba(255,255,255,1.00)'],
      id: 'RoundRect',
      stroke: [1,'rgb(170, 170, 170)','none'],
      type: 'rect',
      boxShadow: ['',1,1,7,0,'rgba(0,0,0,0.45)']
   },
   {
      id: 'dna_1',
      type: 'image',
      rect: ['270px','52px','103px','378px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/dna_1.jpg','0px','0px']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1.00)','400','none','normal'],
      type: 'text',
      id: 'Text3Copy4',
      text: '1 of 2',
      align: 'left',
      rect: ['217px','404px','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1.00)','normal','none',''],
      id: 'Text',
      text: 'DNA contains instructions for building all types of RNA molecules, including mRNA, tRNA, and rRNA.<br><br>These RNA molecules are built in the nucleus and then transported to the cytoplasm.',
      type: 'text',
      rect: ['404px','192px','248px','185px','auto','auto']
   },
   {
      id: 'dna_2',
      type: 'image',
      rect: ['235px','52','194px','348px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/dna_2.jpg','0px','0px']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1.00)','400','none','normal'],
      type: 'text',
      id: 'Text3',
      text: '2 of 2',
      align: 'left',
      rect: ['217px','404px','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(80,80,80,1.00)','normal','none',''],
      id: 'TextCopy',
      text: 'Complementary base pairing between DNA and RNA directs the assembly of RNA molecules.',
      type: 'text',
      rect: ['425px','146px','236px','79px','auto','auto']
   },
   {
      type: 'rect',
      rect: ['298px','403px','auto','auto','auto','auto'],
      display: 'none',
      id: 'button-previous',
      cursor: ['pointer'],
      boxShadow: ['',0,0,0,0,'rgba(0,0,0,0)']
   },
   {
      id: 'button-close',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['650px','43px','auto','auto','auto','auto']
   },
   {
      id: 'button-next',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['614px','403px','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',18,'rgba(80,80,80,1.00)','700','none','normal'],
      type: 'text',
      id: 'Text3Copy5',
      text: 'DNA',
      align: 'left',
      rect: ['217px','63px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'button-previous',
      symbolName: 'button-previous'
   },
   {
      id: 'button-next',
      symbolName: 'button-next'
   },
   {
      id: 'button-close',
      symbolName: 'button-close'
   }   ]
   },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.45)'],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '0'],
            ["style", "left", '198px'],
            ["style", "width", '478px'],
            ["style", "top", '52px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '7px'],
            ["subproperty", "boxShadow.spread", '0px'],
            ["style", "height", '378px'],
            ["subproperty", "boxShadow.offsetV", '1px'],
            ["subproperty", "boxShadow.offsetH", '1px'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_dna_2}": [
            ["style", "left", '235px'],
            ["style", "opacity", '0']
         ],
         "${_Text3}": [
            ["style", "top", '404px'],
            ["style", "text-align", 'left'],
            ["style", "opacity", '0'],
            ["color", "color", 'rgba(80,80,80,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '217px'],
            ["style", "font-size", '16px']
         ],
         "${_dna_1}": [
            ["style", "top", '52px'],
            ["style", "opacity", '0'],
            ["style", "left", '270px']
         ],
         "${_button-next}": [
            ["style", "top", '403px'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '614px']
         ],
         "${_Text3Copy4}": [
            ["style", "top", '404px'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", '400'],
            ["color", "color", 'rgba(80,80,80,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '217px'],
            ["style", "font-size", '16px']
         ],
         "${_TextCopy}": [
            ["style", "line-height", '20px'],
            ["style", "width", '236px'],
            ["style", "top", '146px'],
            ["color", "color", 'rgba(80,80,80,1.00)'],
            ["style", "height", '79px'],
            ["style", "opacity", '0'],
            ["style", "left", '425px'],
            ["style", "font-size", '16px']
         ],
         "${_Text}": [
            ["style", "top", '192px'],
            ["style", "font-size", '16px'],
            ["style", "line-height", '20px'],
            ["style", "height", '185px'],
            ["color", "color", 'rgba(80,80,80,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '404px'],
            ["style", "width", '248px']
         ],
         "${symbolSelector}": [
            ["style", "height", '500px'],
            ["style", "width", '900px']
         ],
         "${_button-close}": [
            ["style", "top", '43px'],
            ["style", "opacity", '0'],
            ["style", "left", '650px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Rectangle4}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(0,0,0,0.67)'],
            ["style", "opacity", '0'],
            ["style", "height", '500px'],
            ["style", "border-style", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '900px']
         ],
         "${_button-previous}": [
            ["style", "top", '403px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '298px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text3Copy5}": [
            ["style", "top", '63px'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", 'bold'],
            ["color", "color", 'rgba(80,80,80,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '217px'],
            ["style", "font-size", '18px']
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
            { id: "eid7", tween: [ "style", "${_Text3Copy4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid21", tween: [ "style", "${_Text3Copy4}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid34", tween: [ "style", "${_button-next}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid13", tween: [ "style", "${_RoundRect}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid5", tween: [ "style", "${_button-close}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid9", tween: [ "style", "${_Rectangle4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid15", tween: [ "style", "${_Text3Copy5}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid28", tween: [ "style", "${_TextCopy}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid29", tween: [ "style", "${_TextCopy}", "opacity", '1', { fromValue: '1'}], position: 1000, duration: 0 },
            { id: "eid26", tween: [ "style", "${_Text3}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid27", tween: [ "style", "${_Text3}", "opacity", '1', { fromValue: '1'}], position: 1000, duration: 0 },
            { id: "eid24", tween: [ "style", "${_button-previous}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid25", tween: [ "style", "${_button-previous}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid75", tween: [ "style", "${_dna_1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid76", tween: [ "style", "${_dna_1}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid78", tween: [ "style", "${_dna_2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid17", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid20", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid3", tween: [ "style", "${_button-previous}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid11", tween: [ "style", "${_button-next}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid33", tween: [ "style", "${_button-next}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 464 }         ]
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
})(jQuery, AdobeEdge, "EDGE-202720348");

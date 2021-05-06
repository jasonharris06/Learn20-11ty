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
            id:'food-web-whole2',
            type:'image',
            rect:['0px','0px','664px','495px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"food-web-whole.jpg",'0px','0px']
         },
         {
            id:'rollover-birds',
            type:'rect',
            rect:['161px','20px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'rollover-flies',
            type:'rect',
            rect:['20','195','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'rollover-shrimp',
            type:'rect',
            rect:['368','273px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'rollover-freemicrobes',
            type:'rect',
            rect:['500','320','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'rollover-bottommicrobes',
            type:'rect',
            rect:['80px','345px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'Text2Copy2',
            type:'text',
            rect:['210px','329px','auto','auto','auto','auto'],
            text:"Larvae",
            align:"center",
            font:['Arial, Helvetica, sans-serif',16,"rgba(255,255,255,1)","400","none","normal"]
         },
         {
            id:'Text2Copy3',
            type:'text',
            rect:['45px','202px','auto','auto','auto','auto'],
            text:"Adults",
            align:"center",
            font:['Arial, Helvetica, sans-serif',16,"rgba(255,255,255,1)","400","none","normal"]
         },
         {
            id:'lines',
            type:'image',
            rect:['660px','121px','38px','363px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"lines.jpg",'0px','0px']
         },
         {
            id:'Text2',
            type:'text',
            rect:['708px','139px','151px','auto','auto','auto'],
            text:"Waterbirds and shorebirds are secondary consumers. They get energy from eating primary consumers.",
            align:"left",
            font:['Arial, Helvetica, sans-serif',11,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text2Copy',
            type:'text',
            rect:['708px','259px','151px','auto','auto','auto'],
            text:"Brine shrimp and brine flies are primary consumers. They get energy from eating producers.",
            align:"left",
            font:['Arial, Helvetica, sans-serif',11,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text2Copy4',
            type:'text',
            rect:['708px','379px','151px','auto','auto','auto'],
            text:"Cyanobacteria and Dunaliella are producers. They use raw materials (such as nitrogen and carbon dioxide) from the environment, and they harvest energy from the sun.",
            align:"left",
            font:['Arial, Helvetica, sans-serif',11,"rgba(0,0,0,1)","normal","none","normal"]
         }],
         symbolInstances: [
         {
            id:'rollover-shrimp',
            symbolName:'rollover-shrimp'
         },
         {
            id:'rollover-birds',
            symbolName:'rollover-birds'
         },
         {
            id:'rollover-flies',
            symbolName:'rollover-flies'
         },
         {
            id:'rollover-freemicrobes',
            symbolName:'rollover-freemicrobes'
         },
         {
            id:'rollover-bottommicrobes',
            symbolName:'rollover-bottommicrobes'
         }
         ]
      },
   states: {
      "Base State": {
         "${_food-web-whole2}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_lines}": [
            ["style", "top", '121px'],
            ["style", "left", '660px']
         ],
         "${_Text2}": [
            ["style", "line-height", '14px'],
            ["style", "width", '151px'],
            ["style", "top", '139px'],
            ["style", "left", '708px'],
            ["style", "font-size", '11px']
         ],
         "${_Text2Copy}": [
            ["style", "line-height", '14px'],
            ["style", "font-size", '11px'],
            ["style", "top", '259px'],
            ["style", "left", '708px'],
            ["style", "width", '151px']
         ],
         "${_Text2Copy3}": [
            ["style", "top", '202px'],
            ["style", "text-align", 'center'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '45px'],
            ["style", "font-size", '16px']
         ],
         "${_rollover-shrimp}": [
            ["style", "cursor", 'pointer']
         ],
         "${_rollover-freemicrobes}": [
            ["style", "cursor", 'pointer']
         ],
         "${_Text2Copy4}": [
            ["style", "line-height", '14px'],
            ["style", "width", '151px'],
            ["style", "top", '379px'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '708px'],
            ["style", "font-size", '11px']
         ],
         "${_rollover-flies}": [
            ["style", "cursor", 'pointer']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '500px'],
            ["style", "width", '870px']
         ],
         "${_Text2Copy2}": [
            ["style", "top", '329px'],
            ["style", "text-align", 'center'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '210px'],
            ["style", "font-size", '16px']
         ],
         "${_rollover-bottommicrobes}": [
            ["style", "cursor", 'pointer']
         ],
         "${_rollover-birds}": [
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
         ]
      }
   }
},
"rollover-flies": {
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
      rect: ['0px','0px','287px','174px','auto','auto'],
      id: 'highlight-flies',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/highlight-flies.jpg','0px','0px']
   },
   {
      rect: ['128px','55px','auto','auto','auto','auto'],
      id: 'TextCopy',
      text: 'Brine Flies',
      font: ['Arial, Helvetica, sans-serif',22,'rgba(255,255,255,1.00)','normal','none',''],
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_highlight-flies}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_TextCopy}": [
            ["style", "top", '55px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "left", '128px'],
            ["style", "font-size", '22px']
         ],
         "${symbolSelector}": [
            ["style", "height", '174px'],
            ["style", "width", '287px']
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
            { id: "eid17", tween: [ "style", "${_highlight-flies}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
            { id: "eid15", tween: [ "color", "${_TextCopy}", "color", 'rgba(39,39,39,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 250 }         ]
      }
   }
},
"rollover-birds": {
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
      id: 'highlight-grebe',
      type: 'image',
      rect: ['213px','98px','290px','172px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/highlight-grebe.jpg','0px','0px']
   },
   {
      id: 'highlight-gull',
      type: 'image',
      rect: ['0px','0px','205px','165px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/highlight-gull.jpg','0px','0px']
   },
   {
      rect: ['161px','141px','auto','auto','auto','auto'],
      id: 'Text',
      text: 'Birds',
      font: ['Arial, Helvetica, sans-serif',22,'rgba(255,255,255,1.00)','normal','none',''],
      type: 'text'
   },
   {
      rect: ['96px','49px','230px','153px','auto','auto'],
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
         "${_highlight-grebe}": [
            ["style", "top", '98px'],
            ["style", "opacity", '0'],
            ["style", "left", '213px']
         ],
         "${_Text}": [
            ["style", "top", '141px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '161px'],
            ["style", "font-size", '22px']
         ],
         "${symbolSelector}": [
            ["style", "height", '270px'],
            ["style", "width", '503px']
         ],
         "${_Rectangle}": [
            ["style", "opacity", '0']
         ],
         "${_highlight-gull}": [
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
         autoPlay: true,
         timeline: [
            { id: "eid20", tween: [ "style", "${_highlight-gull}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
            { id: "eid22", tween: [ "style", "${_highlight-grebe}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
            { id: "eid18", tween: [ "color", "${_Text}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 250 }         ]
      }
   }
},
"rollover-shrimp": {
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
      id: 'highlight-shrimp',
      type: 'image',
      rect: ['2px','8px','136px','148px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/highlight-shrimp.jpg','0px','0px']
   },
   {
      rect: ['0px','0px','auto','auto','auto','auto'],
      id: 'TextCopy2',
      text: 'Brine Shrimp',
      font: ['Arial, Helvetica, sans-serif',22,'rgba(255,255,255,1.00)','normal','none',''],
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_highlight-shrimp}": [
            ["style", "top", '8px'],
            ["style", "opacity", '0'],
            ["style", "left", '2px']
         ],
         "${_TextCopy2}": [
            ["style", "top", '0px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "left", '0px'],
            ["style", "font-size", '22px']
         ],
         "${symbolSelector}": [
            ["style", "height", '156px'],
            ["style", "width", '138px']
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
            { id: "eid14", tween: [ "style", "${_highlight-shrimp}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
            { id: "eid8", tween: [ "color", "${_TextCopy2}", "color", 'rgba(40,40,40,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 250 }         ]
      }
   }
},
"rollover-freemicrobes": {
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
      id: 'highlight-freemicrobes',
      type: 'image',
      rect: ['0px','26px','151px','152px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/highlight-freemicrobes.jpg','0px','0px']
   },
   {
      rect: ['39px','0px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(255,255,255,1)','400','none','normal'],
      id: 'Text2',
      text: 'Free-Floating<br>Microbes',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_highlight-freemicrobes}": [
            ["style", "top", '26px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_Text2}": [
            ["style", "top", '0px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", '400'],
            ["style", "left", '39px'],
            ["style", "font-size", '16px']
         ],
         "${symbolSelector}": [
            ["style", "height", '178px'],
            ["style", "width", '151px']
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
            { id: "eid7", tween: [ "style", "${_highlight-freemicrobes}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
            { id: "eid5", tween: [ "color", "${_Text2}", "color", 'rgba(41,41,41,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 250 }         ]
      }
   }
},
"rollover-bottommicrobes": {
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
      id: 'highlight-bottommicrobes',
      type: 'image',
      rect: ['0px','0px','159px','154px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/highlight-bottommicrobes.jpg','0px','0px']
   },
   {
      rect: ['130px','104px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(255,255,255,1)','400','none','normal'],
      id: 'Text2Copy',
      text: 'Bottom-Dwelling<br>Microbes',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_highlight-bottommicrobes}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_Text2Copy}": [
            ["style", "top", '104px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '130px'],
            ["style", "font-size", '16px']
         ],
         "${symbolSelector}": [
            ["style", "height", '154px'],
            ["style", "width", '248px']
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
            { id: "eid3", tween: [ "color", "${_Text2Copy}", "color", 'rgba(40,40,40,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 250 },
            { id: "eid2", tween: [ "style", "${_highlight-bottommicrobes}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 }         ]
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
})(jQuery, AdobeEdge, "EDGE-56566140");

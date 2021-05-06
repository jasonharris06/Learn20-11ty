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
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'start_text',
            type:'image',
            rect:['83','99','314','87','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"start_text.jpg"],
            transform:[]
         },
         {
            id:'tRNA_crop',
            type:'image',
            rect:['460','-105','515','640','auto','auto'],
            opacity:1,
            fill:["rgba(0,0,0,0)",im+"tRNA_crop.jpg"],
            transform:[[],[],[],['0.497','0.497']]
         },
         {
            id:'dna_gold_close_crop_med',
            type:'image',
            rect:['466','141','222','820','auto','auto'],
            opacity:1,
            fill:["rgba(0,0,0,0)",im+"dna_gold_close_crop_med.jpg"]
         },
         {
            id:'text_box',
            type:'rect',
            rect:['-9','-22','0','0','auto','auto'],
            transform:[]
         },
         {
            id:'slide1',
            type:'rect',
            rect:['476','17','0','0','auto','auto'],
            transform:[]
         },
         {
            id:'slide2',
            type:'rect',
            rect:['497','52','0','0','auto','auto'],
            transform:[]
         },
         {
            id:'slide3',
            type:'rect',
            rect:['306','81','0','0','auto','auto'],
            transform:[]
         },
         {
            id:'slide4',
            type:'rect',
            rect:['334','127','0','0','auto','auto'],
            transform:[]
         },
         {
            id:'slide5',
            type:'rect',
            rect:['334','126','0','0','auto','auto']
         },
         {
            id:'slide6',
            type:'rect',
            rect:['337','23','0','0','auto','auto']
         },
         {
            id:'slide8',
            type:'rect',
            rect:['355','-83','0','0','auto','auto']
         },
         {
            id:'copyrighttext',
            type:'text',
            rect:['688','437','177','16','auto','auto'],
            text:"© 2012 Genetic Science Learning Center",
            align:"right",
            font:['Arial, Helvetica, sans-serif',9,"rgba(0,0,0,0.70)","normal","none","normal"],
            transform:[]
         },
         {
            id:'button_begin',
            type:'rect',
            rect:['181','272','0','0','auto','auto'],
            cursor:['pointer'],
            transform:[]
         },
         {
            id:'button_next',
            type:'rect',
            rect:['843px','10px','0','0','auto','auto'],
            transform:[]
         },
         {
            id:'pleasework',
            type:'rect',
            rect:['128','11','auto','auto','auto','auto']
         },
         {
            id:'frame_left',
            type:'image',
            rect:['0px','0px','13','451','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"frame_left.png"]
         },
         {
            id:'frame_right',
            type:'image',
            rect:['869','0','13','451','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"frame_right.png"],
            transform:[]
         },
         {
            id:'frame_bottom',
            type:'image',
            rect:['0px','407','881','49px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"frame_bottom.png"],
            transform:[]
         },
         {
            id:'frame_top',
            type:'image',
            rect:['0px','0px','881','20','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"frame_top.png"]
         },
         {
            id:'count',
            type:'text',
            rect:['1px','426','880','15','auto','auto'],
            opacity:1,
            text:"count",
            align:"center",
            font:['Arial, Helvetica, sans-serif',14,"rgba(88,89,91,1)","normal","none","normal"],
            transform:[]
         },
         {
            id:'tabs',
            type:'image',
            rect:['555','378','502','42','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"tabs.gif"],
            transform:[]
         }],
         symbolInstances: [
         {
            id:'text_box',
            symbolName:'text_box'
         },
         {
            id:'slide4',
            symbolName:'slide4'
         },
         {
            id:'button_next',
            symbolName:'button_next'
         },
         {
            id:'pleasework',
            symbolName:'pleasework'
         },
         {
            id:'slide2',
            symbolName:'slide2'
         },
         {
            id:'slide8',
            symbolName:'slide8'
         },
         {
            id:'slide6',
            symbolName:'slide6'
         },
         {
            id:'slide3',
            symbolName:'slide3'
         },
         {
            id:'slide5',
            symbolName:'slide5'
         },
         {
            id:'slide1',
            symbolName:'slide1'
         },
         {
            id:'button_begin',
            symbolName:'button_begin'
         }
         ]
      },
   states: {
      "Base State": {
         "${_slide5}": [
            ["style", "opacity", '0']
         ],
         "${_text_box}": [
            ["style", "top", '-222px']
         ],
         "${_slide3}": [
            ["style", "top", '81px'],
            ["style", "opacity", '1'],
            ["style", "left", '306px']
         ],
         "${_RNA_labels_4}": [
            ["style", "opacity", '']
         ],
         "${_slide8}": [
            ["style", "opacity", '0']
         ],
         "${_pleasework}": [
            ["style", "top", '10px'],
            ["style", "opacity", '0'],
            ["style", "left", '-26px']
         ],
         "${_stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '451px'],
            ["style", "width", '880px']
         ],
         "${_slide6}": [
            ["style", "opacity", '0']
         ],
         "${_frame_bottom}": [
            ["style", "height", '49px'],
            ["style", "left", '0px'],
            ["style", "top", '407px']
         ],
         "${_button_next}": [
            ["style", "top", '10px'],
            ["style", "opacity", '0'],
            ["style", "left", '843px']
         ],
         "${_frame_left}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_slide4}": [
            ["style", "top", '127px'],
            ["style", "opacity", '1']
         ],
         "${_frame_top}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_RNA_labels_4a}": [
            ["style", "opacity", '']
         ],
         "${_tRNA_crop}": [
            ["style", "top", '-105px'],
            ["transform", "scaleY", '0.49661'],
            ["transform", "scaleX", '0.49661'],
            ["style", "opacity", '1'],
            ["style", "left", '460px']
         ],
         "${_count}": [
            ["style", "top", '426px'],
            ["style", "opacity", '0'],
            ["style", "text-align", 'center'],
            ["style", "left", '1px']
         ],
         "${_slide2}": [
            ["style", "opacity", '1']
         ],
         "${_slide1}": [
            ["style", "opacity", '1']
         ],
         "${_button_begin}": [
            ["style", "top", '272px'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer']
         ],
         "${_tabs}": [
            ["style", "top", '378px'],
            ["style", "opacity", '0'],
            ["style", "left", '171px']
         ],
         "${_start_text}": [
            ["style", "top", '99px'],
            ["style", "opacity", '1'],
            ["style", "left", '83px']
         ],
         "${_frame_right}": [
            ["style", "left", '869px'],
            ["style", "top", '0px']
         ],
         "${_Text2}": [
            ["style", "font-weight", '']
         ],
         "${_dna_gold_close_crop_med}": [
            ["style", "top", '-195px'],
            ["transform", "scaleY", '0.49713'],
            ["transform", "scaleX", '0.49713'],
            ["style", "opacity", '1'],
            ["style", "left", '387px']
         ],
         "${_copyrighttext}": [
            ["style", "top", '437px'],
            ["style", "text-align", 'right'],
            ["style", "font-size", '9px'],
            ["color", "color", 'rgba(0,0,0,0.70)'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '688px'],
            ["style", "width", '177px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 23750,
         autoPlay: true,
         labels: {
            "s0": 0,
            "s1": 1983,
            "s2": 4734,
            "s3": 7225,
            "s4": 11235,
            "s5": 14735,
            "s6": 16485,
            "s7": 18228,
            "s8": 20730
         },
         timeline: [
            { id: "eid467", tween: [ "style", "${_button_begin}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 250, easing: "easeInQuad" },
            { id: "eid469", tween: [ "style", "${_start_text}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 1000, easing: "easeInQuad" },
            { id: "eid69", tween: [ "transform", "${_tRNA_crop}", "scaleY", '1', { fromValue: '0.49661'}], position: 0, duration: 2000, easing: "easeInOutQuad" },
            { id: "eid424", tween: [ "transform", "${_tRNA_crop}", "scaleY", '0.49634', { fromValue: '1'}], position: 18250, duration: 1500, easing: "easeInOutQuad" },
            { id: "eid427", tween: [ "style", "${_dna_gold_close_crop_med}", "opacity", '0', { fromValue: '1'}], position: 20750, duration: 1250, easing: "easeInQuad" },
            { id: "eid511", tween: [ "style", "${_pleasework}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500 },
            { id: "eid66", tween: [ "transform", "${_dna_gold_close_crop_med}", "scaleX", '1', { fromValue: '0.49713'}], position: 0, duration: 2000, easing: "easeInOutQuad" },
            { id: "eid419", tween: [ "transform", "${_dna_gold_close_crop_med}", "scaleX", '0.49634', { fromValue: '1'}], position: 18250, duration: 1500, easing: "easeInOutQuad" },
            { id: "eid70", tween: [ "style", "${_tRNA_crop}", "left", '609px', { fromValue: '460px'}], position: 0, duration: 2000, easing: "easeInOutQuad" },
            { id: "eid421", tween: [ "style", "${_tRNA_crop}", "left", '468px', { fromValue: '609px'}], position: 18250, duration: 1500, easing: "easeInOutQuad" },
            { id: "eid67", tween: [ "transform", "${_dna_gold_close_crop_med}", "scaleY", '1', { fromValue: '0.49713'}], position: 0, duration: 2000, easing: "easeInOutQuad" },
            { id: "eid420", tween: [ "transform", "${_dna_gold_close_crop_med}", "scaleY", '0.49634', { fromValue: '1'}], position: 18250, duration: 1500, easing: "easeInOutQuad" },
            { id: "eid409", tween: [ "style", "${_slide4}", "opacity", '0', { fromValue: '1'}], position: 14750, duration: 250 },
            { id: "eid524", tween: [ "style", "${_pleasework}", "top", '10px', { fromValue: '10px'}], position: 2000, duration: 0 },
            { id: "eid406", tween: [ "style", "${_slide5}", "opacity", '1', { fromValue: '0'}], position: 14250, duration: 500 },
            { id: "eid410", tween: [ "style", "${_slide5}", "opacity", '0', { fromValue: '1'}], position: 16500, duration: 250 },
            { id: "eid527", tween: [ "style", "${_pleasework}", "left", '-26px', { fromValue: '-26px'}], position: 2000, duration: 0 },
            { id: "eid413", tween: [ "style", "${_slide6}", "opacity", '1', { fromValue: '0'}], position: 16000, duration: 500 },
            { id: "eid416", tween: [ "style", "${_slide6}", "opacity", '0', { fromValue: '1'}], position: 17750, duration: 500 },
            { id: "eid391", tween: [ "style", "${_slide1}", "opacity", '0', { fromValue: '1'}], position: 8000, duration: 89 },
            { id: "eid291", tween: [ "style", "${_button_next}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500 },
            { id: "eid319", tween: [ "style", "${_slide2}", "opacity", '0', { fromValue: '1'}], position: 6750, duration: 500 },
            { id: "eid64", tween: [ "style", "${_dna_gold_close_crop_med}", "left", '292px', { fromValue: '387px'}], position: 0, duration: 2000, easing: "easeInOutQuad" },
            { id: "eid417", tween: [ "style", "${_dna_gold_close_crop_med}", "left", '266px', { fromValue: '292px'}], position: 18250, duration: 1500, easing: "easeInOutQuad" },
            { id: "eid456", tween: [ "style", "${_count}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500, easing: "easeInQuad" },
            { id: "eid71", tween: [ "style", "${_tRNA_crop}", "top", '-220px', { fromValue: '-105px'}], position: 0, duration: 2000, easing: "easeInOutQuad" },
            { id: "eid422", tween: [ "style", "${_tRNA_crop}", "top", '-120px', { fromValue: '-220px'}], position: 18250, duration: 1500, easing: "easeInOutQuad" },
            { id: "eid303", tween: [ "style", "${_text_box}", "top", '-22px', { fromValue: '-222px'}], position: 3750, duration: 500, easing: "easeOutQuad" },
            { id: "eid316", tween: [ "style", "${_text_box}", "top", '-211px', { fromValue: '-22px'}], position: 4250, duration: 500, easing: "easeInQuad" },
            { id: "eid317", tween: [ "style", "${_text_box}", "top", '-20px', { fromValue: '-211px'}], position: 5750, duration: 500, easing: "easeOutQuad" },
            { id: "eid318", tween: [ "style", "${_text_box}", "top", '-211px', { fromValue: '-20px'}], position: 6250, duration: 500, easing: "easeInQuad" },
            { id: "eid392", tween: [ "style", "${_text_box}", "top", '-19px', { fromValue: '-211px'}], position: 9750, duration: 500, easing: "easeOutQuad" },
            { id: "eid393", tween: [ "style", "${_text_box}", "top", '-211px', { fromValue: '-19px'}], position: 10250, duration: 500, easing: "easeInQuad" },
            { id: "eid403", tween: [ "style", "${_text_box}", "top", '-19px', { fromValue: '-211px'}], position: 13250, duration: 500, easing: "easeOutQuad" },
            { id: "eid404", tween: [ "style", "${_text_box}", "top", '-211px', { fromValue: '-19px'}], position: 13750, duration: 500, easing: "easeInQuad" },
            { id: "eid407", tween: [ "style", "${_text_box}", "top", '-19px', { fromValue: '-211px'}], position: 15000, duration: 500, easing: "easeOutQuad" },
            { id: "eid408", tween: [ "style", "${_text_box}", "top", '-211px', { fromValue: '-19px'}], position: 15500, duration: 500, easing: "easeInQuad" },
            { id: "eid414", tween: [ "style", "${_text_box}", "top", '-19px', { fromValue: '-211px'}], position: 16750, duration: 500, easing: "easeOutQuad" },
            { id: "eid415", tween: [ "style", "${_text_box}", "top", '-211px', { fromValue: '-19px'}], position: 17250, duration: 500, easing: "easeInQuad" },
            { id: "eid425", tween: [ "style", "${_text_box}", "top", '-19px', { fromValue: '-211px'}], position: 19750, duration: 500, easing: "easeOutQuad" },
            { id: "eid426", tween: [ "style", "${_text_box}", "top", '-211px', { fromValue: '-19px'}], position: 20250, duration: 500, easing: "easeInQuad" },
            { id: "eid448", tween: [ "style", "${_text_box}", "top", '-19px', { fromValue: '-211px'}], position: 22750, duration: 500, easing: "easeOutQuad" },
            { id: "eid449", tween: [ "style", "${_text_box}", "top", '-211px', { fromValue: '-19px'}], position: 23250, duration: 500, easing: "easeInQuad" },
            { id: "eid65", tween: [ "style", "${_dna_gold_close_crop_med}", "top", '-217px', { fromValue: '-195px'}], position: 0, duration: 2000, easing: "easeInOutQuad" },
            { id: "eid418", tween: [ "style", "${_dna_gold_close_crop_med}", "top", '-196px', { fromValue: '-217px'}], position: 18250, duration: 1500, easing: "easeInOutQuad" },
            { id: "eid428", tween: [ "style", "${_tRNA_crop}", "opacity", '0', { fromValue: '1'}], position: 20750, duration: 1250, easing: "easeInQuad" },
            { id: "eid468", tween: [ "style", "${_start_text}", "left", '-314px', { fromValue: '83px'}], position: 0, duration: 1000 },
            { id: "eid94", tween: [ "style", "${_tabs}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500, easing: "easeInQuad" },
            { id: "eid394", tween: [ "style", "${_slide3}", "opacity", '0', { fromValue: '1'}], position: 10750, duration: 500 },
            { id: "eid68", tween: [ "transform", "${_tRNA_crop}", "scaleX", '1', { fromValue: '0.49661'}], position: 0, duration: 2000, easing: "easeInOutQuad" },
            { id: "eid423", tween: [ "transform", "${_tRNA_crop}", "scaleX", '0.49634', { fromValue: '1'}], position: 18250, duration: 1500, easing: "easeInOutQuad" },
            { id: "eid430", tween: [ "style", "${_slide8}", "opacity", '1', { fromValue: '0'}], position: 21500, duration: 1250, easing: "easeInQuad" },
            { id: "eid533", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_pleasework}', [] ], ""], position: 0 },
            { id: "eid534", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_button_next}', [] ], ""], position: 0 },
            { id: "eid535", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_button_next}', [] ], ""], position: 2000 },
            { id: "eid530", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_pleasework}', [] ], ""], position: 2000 },
            { id: "eid440", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_slide1}', [0] ], ""], position: 2029.2046068874 },
            { id: "eid441", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_slide2}', [0] ], ""], position: 4773.4418871988 },
            { id: "eid445", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_slide2}', [0] ], ""], position: 7250 },
            { id: "eid442", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_slide3}', [0] ], ""], position: 7272.8088259083 },
            { id: "eid444", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_slide1}', [0] ], ""], position: 8089 },
            { id: "eid446", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_slide3}', [0] ], ""], position: 11250 },
            { id: "eid443", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_slide4}', [0] ], ""], position: 11268.195591462 },
            { id: "eid447", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_slide4}', [0] ], ""], position: 15000 }         ]
      }
   }
},
"slide1": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'rna_a3',
      type: 'image',
      rect: ['23','87','173','174','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/rna_a.gif']
   },
   {
      type: 'image',
      id: 'dna_a2',
      rect: ['-42','188','183','172','auto','auto'],
      transform: [],
      fill: ['rgba(0,0,0,0)','images/dna_a.gif']
   },
   {
      type: 'image',
      id: 'dna_a_turned',
      rect: ['-130','182','105','61','auto','auto'],
      transform: [],
      fill: ['rgba(0,0,0,0)','images/dna_a_turned.gif']
   },
   {
      type: 'image',
      id: 'rna_a_turned',
      rect: ['156','70','98','72','auto','auto'],
      transform: [],
      fill: ['rgba(0,0,0,0)','images/rna_a_turned.gif']
   },
   {
      rect: ['13','172','120','21','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(88,89,91,1.00)','normal','none','normal'],
      align: 'center',
      id: 'Text',
      text: 'Nucleotides',
      transform: [],
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_dna_a2}": [
            ["style", "top", '188px'],
            ["style", "opacity", '0'],
            ["style", "left", '-42px']
         ],
         "${_Text}": [
            ["style", "top", '172px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(88,89,91,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '13px'],
            ["style", "font-size", '16px']
         ],
         "${symbolSelector}": [
            ["style", "height", '174px'],
            ["style", "width", '173px']
         ],
         "${_rna_a_turned}": [
            ["style", "top", '70px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["style", "opacity", '0'],
            ["style", "left", '156px']
         ],
         "${_rna_a3}": [
            ["style", "top", '1px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_dna_a_turned}": [
            ["style", "top", '182px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["style", "opacity", '0'],
            ["style", "left", '-130px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1750,
         autoPlay: true,
         labels: {
            "end": 1741
         },
         timeline: [
            { id: "eid462", tween: [ "transform", "${_dna_a_turned}", "scaleY", '1.33011', { fromValue: '1'}], position: 500, duration: 337 },
            { id: "eid162", tween: [ "style", "${_dna_a_turned}", "left", '16px', { fromValue: '-130px'}], position: 35, duration: 964, easing: "easeInOutQuad" },
            { id: "eid461", tween: [ "transform", "${_rna_a_turned}", "scaleY", '1.22591', { fromValue: '1'}], position: 500, duration: 337 },
            { id: "eid156", tween: [ "style", "${_rna_a_turned}", "left", '22px', { fromValue: '156px'}], position: 35, duration: 964, easing: "easeInOutQuad" },
            { id: "eid164", tween: [ "transform", "${_dna_a_turned}", "rotateZ", '91deg', { fromValue: '0deg'}], position: 35, duration: 964, easing: "easeInOutQuad" },
            { id: "eid163", tween: [ "style", "${_dna_a_turned}", "top", '244px', { fromValue: '182px'}], position: 35, duration: 964, easing: "easeInOutQuad" },
            { id: "eid181", tween: [ "style", "${_dna_a_turned}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 35 },
            { id: "eid169", tween: [ "style", "${_dna_a_turned}", "opacity", '0', { fromValue: '1'}], position: 661, duration: 337, easing: "easeOutQuad" },
            { id: "eid175", tween: [ "style", "${_dna_a2}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 1250, easing: "easeInQuad" },
            { id: "eid177", tween: [ "style", "${_rna_a3}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 1250, easing: "easeInQuad" },
            { id: "eid157", tween: [ "style", "${_rna_a_turned}", "top", '51px', { fromValue: '70px'}], position: 35, duration: 964, easing: "easeInOutQuad" },
            { id: "eid179", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 750 },
            { id: "eid160", tween: [ "transform", "${_rna_a_turned}", "rotateZ", '-90deg', { fromValue: '0deg'}], position: 35, duration: 964, easing: "easeInOutQuad" },
            { id: "eid185", tween: [ "style", "${_rna_a_turned}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 35 },
            { id: "eid161", tween: [ "style", "${_rna_a_turned}", "opacity", '0', { fromValue: '1'}], position: 661, duration: 337, easing: "easeOutQuad" }         ]
      }
   }
},
"button_back": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'rect',
      borderRadius: ['10px','10px','10px','10px'],
      rect: ['17','1px','50','402','auto','auto'],
      id: 'RoundRect',
      stroke: [0,'','solid'],
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)']
   },
   {
      type: 'text',
      rect: ['43','187','21px','28px','auto','auto'],
      transform: [],
      id: 'Text3',
      align: 'auto',
      text: '◄',
      cursor: ['pointer'],
      font: ['Arial, Helvetica, sans-serif',18,'rgba(208,208,208,1.00)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["color", "color", 'rgba(208,208,208,1.00)'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '43px'],
            ["style", "width", '21px'],
            ["style", "top", '187px'],
            ["style", "height", '28px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "font-size", '18px'],
            ["style", "cursor", 'pointer']
         ],
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(0,0,0,0.50)'],
            ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "width", '62px'],
            ["style", "top", '1px'],
            ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '0.59193065068493'],
            ["style", "height", '402px'],
            ["color", "border-color", 'rgba(0,0,0,0.30)'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${symbolSelector}": [
            ["style", "height", '407px'],
            ["style", "min-width", '0px'],
            ["style", "width", '66px']
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
            { id: "eid261", tween: [ "style", "${_RoundRect}", "left", '20px', { fromValue: '0px'}], position: 0, duration: 250 },
            { id: "eid266", tween: [ "style", "${_RoundRect}", "opacity", '1', { fromValue: '0.591930627822876'}], position: 0, duration: 250 },
            { id: "eid472", tween: [ "style", "${_Text3}", "font-size", '24px', { fromValue: '18px'}], position: 0, duration: 250 },
            { id: "eid473", tween: [ "style", "${_Text3}", "top", '183px', { fromValue: '187px'}], position: 0, duration: 250 },
            { id: "eid471", tween: [ "style", "${_Text3}", "left", '53px', { fromValue: '43px'}], position: 0, duration: 250 }         ]
      }
   }
},
"button_next": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'rect',
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy',
      opacity: 0.59193062782288,
      cursor: ['pointer'],
      rect: ['0','2','50','402','auto','auto'],
      transform: [],
      stroke: [0,'','solid'],
      fill: ['rgba(0,0,0,0)']
   },
   {
      type: 'text',
      rect: ['5','187','34','40','auto','auto'],
      transform: [],
      align: 'auto',
      id: 'arrow_right',
      text: '►',
      cursor: ['pointer'],
      font: ['Arial, Helvetica, sans-serif',18,'rgba(208,208,208,1.00)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_arrow_right}": [
            ["style", "top", '187px'],
            ["color", "color", 'rgba(208,208,208,1.00)'],
            ["style", "left", '5px'],
            ["style", "cursor", 'pointer'],
            ["style", "font-size", '18px']
         ],
         "${_RoundRectCopy}": [
            ["color", "background-color", 'rgba(0,0,0,0.50)'],
            ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "width", '62px'],
            ["style", "top", '2px'],
            ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '0.591930627822876'],
            ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '402px'],
            ["color", "border-color", 'rgba(0,0,0,0.30)'],
            ["style", "left", '2px'],
            ["style", "cursor", 'pointer']
         ],
         "${symbolSelector}": [
            ["style", "height", '407px'],
            ["style", "width", '64px']
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
            { id: "eid476", tween: [ "style", "${_arrow_right}", "left", '-13px', { fromValue: '5px'}], position: 0, duration: 250 },
            { id: "eid276", tween: [ "style", "${_RoundRectCopy}", "left", '-20px', { fromValue: '2px'}], position: 0, duration: 250 },
            { id: "eid475", tween: [ "style", "${_arrow_right}", "top", '184px', { fromValue: '187px'}], position: 0, duration: 250 },
            { id: "eid277", tween: [ "style", "${_RoundRectCopy}", "opacity", '1', { fromValue: '0.591930627822876'}], position: 0, duration: 250 },
            { id: "eid474", tween: [ "style", "${_arrow_right}", "font-size", '24px', { fromValue: '18px'}], position: 0, duration: 250 },
            { id: "eid285", tween: [ "style", "${_RoundRectCopy}", "top", '2px', { fromValue: '2px'}], position: 0, duration: 0 }         ]
      }
   }
},
"text_box": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-24px','-1','285px','219px','auto','auto'],
      borderRadius: ['8px 8px','8px 8px','8px 8px','8px 8px'],
      transform: [],
      id: 'text_box',
      stroke: [1,'rgba(0, 0, 0, 0.296875)','solid'],
      type: 'rect',
      fill: ['rgba(0,0,0,0.4961)']
   },
   {
      rect: ['53','40','203','181','auto','auto'],
      transform: [],
      font: ['Arial, Helvetica, sans-serif',14,'rgba(255,255,255,1.00)','normal','none','normal'],
      id: 'Text2',
      text: 'Text',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_text_box}": [
            ["color", "background-color", 'rgba(147,149,152,1.00)'],
            ["style", "top", '-1px'],
            ["style", "height", '219px'],
            ["color", "border-color", 'rgba(188,190,192,1.00)'],
            ["style", "left", '-24px'],
            ["style", "width", '285px']
         ],
         "${_Text2}": [
            ["style", "top", '40px'],
            ["style", "width", '203px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "height", '181px'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '53px'],
            ["style", "font-size", '14px']
         ],
         "${symbolSelector}": [
            ["style", "height", '220px'],
            ["style", "width", '245px']
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
"slide2": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0','0','94','108','auto','auto'],
      transform: [],
      id: 'rna_highlight',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/rna_highlight.jpg']
   },
   {
      rect: ['0','186','94','108','auto','auto'],
      transform: [],
      id: 'dna_highlight',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/dna_highlight.jpg']
   },
   {
      transform: [],
      rect: ['-8','108','117','21','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',14,'rgba(206,24,30,1.00)','normal','none','normal'],
      align: 'center',
      id: 'Text3',
      opacity: 1,
      text: 'Backbone',
      type: 'text'
   },
   {
      transform: [],
      rect: ['-8','-19','117','21','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',14,'rgba(53,174,126,1.00)','normal','none','normal'],
      align: 'center',
      id: 'Text3Copy2',
      opacity: 1,
      text: 'Base',
      type: 'text'
   },
   {
      transform: [],
      rect: ['-8','292','117','21','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',14,'rgba(206,24,30,1.00)','normal','none','normal'],
      align: 'center',
      id: 'Text3Copy3',
      opacity: 1,
      text: 'Backbone',
      type: 'text'
   },
   {
      transform: [],
      rect: ['-8','166','117','21','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',14,'rgba(53,174,126,1.00)','normal','none','normal'],
      align: 'center',
      id: 'Text3Copy',
      opacity: 1,
      text: 'Base',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_dna_highlight}": [
            ["style", "top", '186px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_Text3Copy}": [
            ["color", "color", 'rgba(53,174,126,1)'],
            ["style", "opacity", '0'],
            ["style", "text-align", 'center'],
            ["style", "top", '166px']
         ],
         "${symbolSelector}": [
            ["style", "height", '108px'],
            ["style", "width", '94px']
         ],
         "${_Text3}": [
            ["color", "color", 'rgba(206,24,30,1.00)'],
            ["style", "opacity", '0'],
            ["style", "text-align", 'center'],
            ["style", "top", '108px']
         ],
         "${_rna_highlight}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_Text3Copy2}": [
            ["color", "color", 'rgba(53,174,126,1.00)'],
            ["style", "opacity", '0'],
            ["style", "text-align", 'center'],
            ["style", "top", '-19px']
         ],
         "${_Text3Copy3}": [
            ["color", "color", 'rgba(206,24,30,1)'],
            ["style", "opacity", '0'],
            ["style", "text-align", 'center'],
            ["style", "top", '292px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1004,
         autoPlay: true,
         labels: {
            "end": 1004
         },
         timeline: [
            { id: "eid313", tween: [ "style", "${_rna_highlight}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 750 },
            { id: "eid305", tween: [ "style", "${_Text3}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 750 },
            { id: "eid311", tween: [ "style", "${_dna_highlight}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 750 },
            { id: "eid315", tween: [ "style", "${_Text3Copy}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 750 },
            { id: "eid309", tween: [ "style", "${_Text3Copy3}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 750 },
            { id: "eid307", tween: [ "style", "${_Text3Copy2}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 750 }         ]
      }
   }
},
"slide3": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'rect',
      transform: [[0,0]],
      rect: [181.43359375,132.7031,118,149],
      id: 'Rectangle',
      opacity: 1,
      stroke: [1,'rgba(88,90,91,1.00)','solid'],
      fill: ['rgba(255,255,255,1.00)',null]
   },
   {
      type: 'rect',
      transform: [[0,0]],
      rect: [181.43359375,-51.2969,118,149],
      id: 'RectangleCopy',
      opacity: 1,
      stroke: [1,'rgba(88,90,91,1.00)','solid'],
      fill: ['rgba(255,255,255,1.00)',null]
   },
   {
      transform: [[0,0],null,null,[0.64881,0.64881]],
      rect: [167.61705875,-59.02658375,138,181],
      id: 'rna_structure',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/rna_structure.jpg']
   },
   {
      transform: [[0,0],null,null,[0.64881,0.64881]],
      rect: [167.34248125,123.56905625,140,182],
      id: 'dna_structure',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/dna_structure.jpg']
   },
   {
      transform: [null,null,null,[1.0107,1.00823]],
      id: 'dna_structure_highlight',
      type: 'image',
      rect: [0.109375,0.6796875,140,182],
      fill: ['rgba(0,0,0,0)','images/dna_structure_highlight.jpg']
   },
   {
      transform: [[0,0]],
      id: 'rna_structure_highlight2',
      type: 'image',
      rect: [336.57032375,1.7265625,138,181],
      fill: ['rgba(0,0,0,0)','images/rna_structure_highlight2.jpg']
   },
   {
      type: 'text',
      transform: [[0,0]],
      align: 'left',
      id: 'Text4',
      text: 'Deoxyribose',
      font: ['Arial, Helvetica, sans-serif',14,'rgba(88,89,91,1.00)','normal','none','normal'],
      rect: [55.23438875,180.45701125,125.859375,21.31640625]
   },
   {
      type: 'text',
      transform: [[0,0]],
      align: 'left',
      id: 'Text4Copy',
      text: 'Ribose',
      font: ['Arial, Helvetica, sans-serif',14,'rgba(88,89,91,1.00)','normal','none','normal'],
      rect: [391.23435875,180.45703125,125.859375,21.31640625]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_dna_structure_highlight}": [
            ["transform", "scaleX", '1.0107'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '1.00823']
         ],
         "${_dna_structure}": [
            ["style", "top", '125px'],
            ["transform", "scaleY", '0.64881'],
            ["transform", "scaleX", '0.64881'],
            ["style", "opacity", '0'],
            ["style", "left", '168px']
         ],
         "${_rna_structure_highlight2}": [
            ["style", "top", '2px'],
            ["style", "opacity", '0'],
            ["style", "left", '337px']
         ],
         "${_RectangleCopy}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "top", '-51px'],
            ["style", "border-width", '1px'],
            ["color", "border-color", 'rgb(88, 90, 91)'],
            ["style", "height", '149px'],
            ["style", "opacity", '0'],
            ["style", "left", '181px'],
            ["style", "width", '118px']
         ],
         "${symbolSelector}": [
            ["style", "height", '182px'],
            ["style", "width", '140px']
         ],
         "${_Text4Copy}": [
            ["style", "top", '180px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(88,89,91,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '391px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '0'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '118px'],
            ["style", "top", '133px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '149px'],
            ["color", "border-color", 'rgba(88,90,91,1.00)'],
            ["style", "border-width", '1px'],
            ["style", "left", '181px']
         ],
         "${_rna_structure}": [
            ["style", "top", '-59px'],
            ["transform", "scaleY", '0.64881'],
            ["transform", "scaleX", '0.64881'],
            ["style", "opacity", '0'],
            ["style", "left", '168px']
         ],
         "${_Text4}": [
            ["style", "top", '180px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(88,89,91,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '55px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2500,
         autoPlay: false,
         labels: {
            "end": 2500
         },
         timeline: [
            { id: "eid381", tween: [ "style", "${_RectangleCopy}", "height", '230px', { fromValue: '149px'}], position: 750, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid376", tween: [ "style", "${_rna_structure}", "top", '2px', { fromValue: '-59px'}], position: 750, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid387", tween: [ "style", "${_dna_structure_highlight}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500, easing: "easeOutQuad" },
            { id: "eid364", tween: [ "style", "${_Rectangle}", "width", '183px', { fromValue: '118px'}], position: 750, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid370", tween: [ "style", "${_Rectangle}", "border-bottom-right-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 750, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid379", tween: [ "style", "${_RectangleCopy}", "left", '313px', { fromValue: '181px'}], position: 750, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid369", tween: [ "style", "${_Rectangle}", "border-top-right-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 750, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid377", tween: [ "transform", "${_rna_structure}", "scaleX", '1', { fromValue: '0.64881'}], position: 750, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid382", tween: [ "style", "${_RectangleCopy}", "width", '183px', { fromValue: '118px'}], position: 750, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid367", tween: [ "style", "${_Rectangle}", "border-bottom-left-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 750, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid327", tween: [ "style", "${_dna_structure}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutQuad" },
            { id: "eid358", tween: [ "style", "${_Rectangle}", "top", '-22px', { fromValue: '133px'}], position: 750, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid368", tween: [ "style", "${_Rectangle}", "border-top-left-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 750, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid329", tween: [ "style", "${_rna_structure}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutQuad" },
            { id: "eid375", tween: [ "style", "${_rna_structure}", "left", '337px', { fromValue: '168px'}], position: 750, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid388", tween: [ "style", "${_rna_structure_highlight2}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500, easing: "easeOutQuad" },
            { id: "eid357", tween: [ "style", "${_Rectangle}", "left", '-19px', { fromValue: '181px'}], position: 750, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid360", tween: [ "style", "${_dna_structure}", "top", '1px', { fromValue: '125px'}], position: 750, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid384", tween: [ "transform", "${_rna_structure}", "scaleY", '0.99999', { fromValue: '0.64881'}], position: 750, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid366", tween: [ "transform", "${_dna_structure}", "scaleY", '1.01014', { fromValue: '0.64881'}], position: 750, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid389", tween: [ "style", "${_Text4}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500, easing: "easeOutQuad" },
            { id: "eid365", tween: [ "transform", "${_dna_structure}", "scaleX", '1.01014', { fromValue: '0.64881'}], position: 750, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid390", tween: [ "style", "${_Text4Copy}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500, easing: "easeOutQuad" },
            { id: "eid363", tween: [ "style", "${_Rectangle}", "height", '232px', { fromValue: '149px'}], position: 750, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid380", tween: [ "style", "${_RectangleCopy}", "top", '-21px', { fromValue: '-51px'}], position: 750, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid359", tween: [ "style", "${_dna_structure}", "left", '1px', { fromValue: '168px'}], position: 750, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid333", tween: [ "style", "${_RectangleCopy}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutQuad" },
            { id: "eid331", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutQuad" }         ]
      }
   }
},
"slide4": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [[0,0]],
      rect: [0.328126,0.140626,114,73],
      id: 'dna_labels_4',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/dna_labels_4.jpg']
   },
   {
      transform: [[0,0]],
      rect: [0.328126,0.140626,114,73],
      id: 'dna_labels_4a',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/dna_labels_4a.jpg']
   },
   {
      transform: [[0,0]],
      rect: [335.382766,92.289066,104,71],
      id: 'RNA_labels_4',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/RNA_labels_4.jpg']
   },
   {
      transform: [[0,0]],
      rect: [335.175746,92.289046,104,71],
      id: 'RNA_labels_4a',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/RNA_labels_4a2.jpg']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '163px'],
            ["style", "width", '438px']
         ],
         "${_dna_labels_4a}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_dna_labels_4}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_RNA_labels_4a}": [
            ["style", "top", '92px'],
            ["style", "opacity", '0'],
            ["style", "left", '335px']
         ],
         "${_RNA_labels_4}": [
            ["style", "top", '92px'],
            ["style", "opacity", '0'],
            ["style", "left", '335px']
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
            { id: "eid398", tween: [ "style", "${_dna_labels_4}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 500 },
            { id: "eid396", tween: [ "style", "${_dna_labels_4a}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 500 },
            { id: "eid402", tween: [ "style", "${_RNA_labels_4a}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 500 },
            { id: "eid400", tween: [ "style", "${_RNA_labels_4}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 500 }         ]
      }
   }
},
"slide5": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [[0,0],[0,0],[0],[1,1]],
      id: 'dna_labels_5',
      type: 'image',
      rect: [0.65234475,0.8046875,114,73],
      fill: ['rgba(0,0,0,0)','images/dna_labels_5.jpg']
   },
   {
      transform: [[0,0],[0,0],[0],[1,1]],
      rect: [335.65238475,92.8046675,104,71],
      id: 'RNA_labels_5',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/RNA_labels_5.jpg']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RNA_labels_5}": [
            ["style", "top", '93px'],
            ["style", "opacity", '1'],
            ["style", "left", '336px']
         ],
         "${_dna_labels_5}": [
            ["style", "left", '1px'],
            ["style", "top", '1px']
         ],
         "${symbolSelector}": [
            ["style", "height", '163px'],
            ["style", "width", '439px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 14250,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"slide6": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [[0,0]],
      rect: [0.82422375000002,0.26952924999999,111,377],
      id: 'dna_labels_6b',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/dna_labels_6b.jpg']
   },
   {
      transform: [[0,0]],
      rect: [339.82420375,59.26953925,106,201],
      id: 'rna_labels_6b',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/rna_labels_6b.jpg']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_dna_labels_6b}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '1px']
         ],
         "${_rna_labels_6b}": [
            ["style", "top", '59px'],
            ["style", "opacity", '1'],
            ["style", "left", '340px']
         ],
         "${symbolSelector}": [
            ["style", "height", '377px'],
            ["style", "width", '445px']
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
         ]
      }
   }
},
"slide8": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [[0,0]],
      id: 'dna_long1',
      type: 'image',
      rect: [10.55859175,0.32421875,84,616],
      fill: ['rgba(0,0,0,0)','images/dna_long1.jpg']
   },
   {
      transform: [[0,0],null,null,[0.6772,0.6772]],
      rect: [-61.11233,-6.49559875,84,616],
      id: 'dna_long12',
      opacity: 0.75358517447563,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/dna_long1.jpg']
   },
   {
      transform: [[0,0],[176.91015],null,[0.69115,0.69115]],
      rect: [80.762675,-9.880145,84,616],
      id: 'dna_long13',
      opacity: 0.78499571917808,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/dna_long1.jpg']
   },
   {
      transform: [[0,0],null,null,[0.19049,0.19049]],
      id: 'tRNA_crop3',
      type: 'image',
      rect: [100.55541625,-18.6603575,515,640],
      fill: ['rgba(0,0,0,0)','images/tRNA_crop.jpg']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_dna_long13}": [
            ["style", "top", '-10px'],
            ["transform", "scaleY", '0.69115'],
            ["transform", "rotateZ", '177deg'],
            ["transform", "scaleX", '0.69115'],
            ["style", "opacity", '0.78499571917808'],
            ["style", "left", '81px']
         ],
         "${_dna_long12}": [
            ["style", "top", '-6px'],
            ["transform", "scaleY", '0.6772'],
            ["transform", "scaleX", '0.6772'],
            ["style", "opacity", '0.75358517447563'],
            ["style", "left", '-61px']
         ],
         "${_dna_long1}": [
            ["style", "left", '11px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '616px'],
            ["style", "width", '84px']
         ],
         "${_tRNA_crop3}": [
            ["style", "top", '-19px'],
            ["transform", "scaleX", '0.19049'],
            ["transform", "scaleY", '0.19049'],
            ["style", "left", '101px']
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
         ]
      }
   }
},
"button_begin": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [],
      borderRadius: ['8px 8px','8px 8px','8px 8px','8px 8px'],
      rect: ['0','-1','107','45','auto','auto'],
      id: 'RoundRect',
      stroke: [1,'rgba(64,124,94,1.00)','solid'],
      type: 'rect',
      fill: ['rgba(129,200,164,1.00)']
   },
   {
      transform: [],
      type: 'text',
      id: 'Text',
      text: 'begin',
      font: ['Arial, Helvetica, sans-serif',24,'rgba(88,89,91,1.00)','bold','none',''],
      rect: ['21','7','94','42','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(129,200,164,1.00)'],
            ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '107px'],
            ["style", "top", '-1px'],
            ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '45px'],
            ["color", "border-color", 'rgba(64,124,94,1.00)'],
            ["style", "border-width", '1px'],
            ["style", "left", '0px']
         ],
         "${_Text}": [
            ["style", "top", '7px'],
            ["color", "color", 'rgba(88,89,91,1.00)'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '21px'],
            ["style", "font-weight", 'bold']
         ],
         "${symbolSelector}": [
            ["style", "height", '49px'],
            ["style", "width", '115px']
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
"frame": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '462px'],
            ["style", "width", '881px'],
            ["style", "overflow", 'visible']
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
"button_backCLAIRE3": {
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
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy',
      opacity: 0.59193062782288,
      cursor: ['pointer'],
      rect: ['0','2','50','402','auto','auto'],
      transform: [],
      stroke: [0,'','solid'],
      fill: ['rgba(0,0,0,0)']
   },
   {
      type: 'text',
      rect: ['5','187','39px','40px','auto','auto'],
      transform: [[0,0],['180']],
      align: 'auto',
      id: 'arrow_right',
      text: '►',
      cursor: ['pointer'],
      font: ['Arial, Helvetica, sans-serif',18,'rgba(208,208,208,1.00)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_arrow_right}": [
            ["style", "top", '173px'],
            ["style", "font-size", '18px'],
            ["style", "cursor", 'pointer'],
            ["transform", "rotateZ", '180deg'],
            ["style", "height", '40px'],
            ["color", "color", 'rgba(208,208,208,1.00)'],
            ["style", "left", '20px'],
            ["style", "width", '39px']
         ],
         "${_RoundRectCopy}": [
            ["color", "background-color", 'rgba(0,0,0,0.50)'],
            ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "width", '62px'],
            ["style", "top", '2px'],
            ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "cursor", 'pointer'],
            ["style", "left", '2px'],
            ["style", "height", '402px'],
            ["color", "border-color", 'rgba(0,0,0,0.30)'],
            ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '0.591930627822876']
         ],
         "${symbolSelector}": [
            ["style", "height", '407px'],
            ["style", "width", '88px']
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
            { id: "eid476", tween: [ "style", "${_arrow_right}", "left", '39px', { fromValue: '20px'}], position: 0, duration: 250 },
            { id: "eid276", tween: [ "style", "${_RoundRectCopy}", "left", '21px', { fromValue: '2px'}], position: 0, duration: 250 },
            { id: "eid475", tween: [ "style", "${_arrow_right}", "top", '177px', { fromValue: '173px'}], position: 0, duration: 250 },
            { id: "eid277", tween: [ "style", "${_RoundRectCopy}", "opacity", '1', { fromValue: '0.591930627822876'}], position: 0, duration: 250 },
            { id: "eid474", tween: [ "style", "${_arrow_right}", "font-size", '24px', { fromValue: '18px'}], position: 0, duration: 250 },
            { id: "eid285", tween: [ "style", "${_RoundRectCopy}", "top", '2px', { fromValue: '2px'}], position: 0, duration: 0 }         ]
      }
   }
},
"button_reverse2": {
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
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy',
      opacity: 0.59193062782288,
      cursor: ['pointer'],
      rect: ['0','2','50','402','auto','auto'],
      transform: [[0,0],['0']],
      stroke: [0,'','solid'],
      fill: ['rgba(0,0,0,0)']
   },
   {
      type: 'text',
      rect: ['5','187','34','40','auto','auto'],
      transform: [[0,0],['180']],
      align: 'auto',
      id: 'arrow_rightCopy',
      text: '►',
      cursor: ['pointer'],
      font: ['Arial, Helvetica, sans-serif',18,'rgba(208,208,208,1.00)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_arrow_right}": [
            ["style", "top", '187px'],
            ["transform", "rotateZ", '0deg'],
            ["color", "color", 'rgba(208,208,208,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '5px'],
            ["style", "font-size", '18px']
         ],
         "${_arrow_rightCopy}": [
            ["style", "top", '173px'],
            ["transform", "rotateZ", '180deg'],
            ["color", "color", 'rgba(208,208,208,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '22px'],
            ["style", "font-size", '18px']
         ],
         "${_RoundRectCopy}": [
            ["color", "background-color", 'rgba(0,0,0,0.50)'],
            ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "rotateZ", '0deg'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "width", '62px'],
            ["style", "top", '2px'],
            ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "cursor", 'pointer'],
            ["style", "left", '0px'],
            ["style", "height", '402px'],
            ["color", "border-color", 'rgba(0,0,0,0.30)'],
            ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '0.591930627822876']
         ],
         "${symbolSelector}": [
            ["style", "height", '407px'],
            ["style", "width", '66px']
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
            { id: "eid497", tween: [ "style", "${_RoundRectCopy}", "left", '20px', { fromValue: '0px'}], position: 0, duration: 250 },
            { id: "eid493", tween: [ "style", "${_arrow_rightCopy}", "left", '44px', { fromValue: '22px'}], position: 0, duration: 250 },
            { id: "eid492", tween: [ "style", "${_arrow_rightCopy}", "top", '174px', { fromValue: '173px'}], position: 0, duration: 250 },
            { id: "eid496", tween: [ "style", "${_RoundRectCopy}", "opacity", '1', { fromValue: '0.591930627822876'}], position: 0, duration: 250 },
            { id: "eid509", tween: [ "style", "${_RoundRectCopy}", "top", '2px', { fromValue: '2px'}], position: 0, duration: 0 },
            { id: "eid510", tween: [ "style", "${_RoundRectCopy}", "top", '2px', { fromValue: '2px'}], position: 250, duration: 0 },
            { id: "eid494", tween: [ "style", "${_arrow_rightCopy}", "font-size", '24px', { fromValue: '18px'}], position: 0, duration: 250 }         ]
      }
   }
},
"pleasework": {
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
      borderRadius: ['10px','10px','10px','10px'],
      rect: ['0px','0px','62px','405px','auto','auto'],
      id: 'RoundRect',
      stroke: [1,'rgba(0, 0, 0, 0.296875)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0.4961)']
   },
   {
      transform: [[0,0],['180']],
      rect: ['42px','183px','33px','32px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',24,'rgba(208,208,208,1)','normal','none','normal'],
      id: 'Text4',
      align: 'left',
      text: '►',
      cursor: ['pointer'],
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0.591930627822876'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${symbolSelector}": [
            ["style", "height", '407px'],
            ["style", "width", '64px']
         ],
         "${_Text4}": [
            ["style", "top", '180px'],
            ["style", "height", '32px'],
            ["transform", "scaleY", '0.86'],
            ["transform", "rotateZ", '180deg'],
            ["transform", "scaleX", '0.81'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '31px'],
            ["style", "width", '33px']
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
            { id: "eid513", tween: [ "style", "${_RoundRect}", "left", '20px', { fromValue: '0px'}], position: 0, duration: 250 },
            { id: "eid522", tween: [ "style", "${_RoundRect}", "opacity", '1', { fromValue: '0.591930627822876'}], position: 0, duration: 250 },
            { id: "eid525", tween: [ "style", "${_Text4}", "top", '180px', { fromValue: '180px'}], position: 0, duration: 0 },
            { id: "eid518", tween: [ "transform", "${_Text4}", "scaleY", '1.09', { fromValue: '0.86'}], position: 0, duration: 250 },
            { id: "eid517", tween: [ "transform", "${_Text4}", "scaleX", '1.09', { fromValue: '0.81'}], position: 0, duration: 250 },
            { id: "eid516", tween: [ "style", "${_Text4}", "left", '46px', { fromValue: '31px'}], position: 0, duration: 250 }         ]
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
})(jQuery, AdobeEdge, "EDGE-838644348");

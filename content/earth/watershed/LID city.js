(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 965,
	height: 750,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/FarmTown.jpg", id:"FarmTown"},
		{src:"images/LIDcity_1.jpg", id:"LIDcity_1"},
		{src:"images/Metropolisfull.jpg", id:"Metropolisfull"},
		{src:"images/Suburbia.jpg", id:"Suburbia"},
		{src:"images/WaterUse.jpg", id:"WaterUse"}
	]
};



// symbols:



(lib.FarmTown = function() {
	this.initialize(img.FarmTown);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1233,985);


(lib.LIDcity_1 = function() {
	this.initialize(img.LIDcity_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1232,995);


(lib.Metropolisfull = function() {
	this.initialize(img.Metropolisfull);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1233,990);


(lib.Suburbia = function() {
	this.initialize(img.Suburbia);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1224,987);


(lib.WaterUse = function() {
	this.initialize(img.WaterUse);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,441,269);


(lib.Yoursimulationhasfinished = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Your simulation has finished, would you like to:", "22px 'Microsoft Sans Serif'");
	this.text.lineHeight = 24;
	this.text.lineWidth = 518;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,522,37.1);


(lib.YES = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("YES", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 24;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,28.2,17.6);


(lib.WaterGraph2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5C7DBE").s().p("Ah7CjIAAlFID3AAIAAFFg");
	this.shape.setTransform(276.8,107.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5C7DBE").s().p("AhoBmIAAjLIDRAAIAADLg");
	this.shape_1.setTransform(299.6,113.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5C7DBE").s().p("Ah7AyIAAhjID3AAIAABjg");
	this.shape_2.setTransform(252,119);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5C7DBE").s().p("Ah7BAIAAh/ID3AAIAAB/g");
	this.shape_3.setTransform(227.1,117.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5C7DBE").s().p("Ah7CDIAAkFID3AAIAAEFg");
	this.shape_4.setTransform(177.9,110.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5C7DBE").s().p("Ah7BnIAAjNID3AAIAADNg");
	this.shape_5.setTransform(202.5,113.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5C7DBE").s().p("Ah7DyIAAnjID3AAIAAHjg");
	this.shape_6.setTransform(153,99.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5C7DBE").s().p("Ah7FyIAArjID3AAIAALjg");
	this.shape_7.setTransform(128.1,86.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5C7DBE").s().p("Ah7DEIAAmHID3AAIAAGHg");
	this.shape_8.setTransform(78.8,104.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5C7DBE").s().p("Ah7DyIAAnjID3AAIAAHjg");
	this.shape_9.setTransform(103.5,99.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5C7DBE").s().p("Ah7DyIAAnjID3AAIAAHjg");
	this.shape_10.setTransform(54,99.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5C7DBE").s().p("Ah7DEIAAmHID3AAIAAGHg");
	this.shape_11.setTransform(29.1,104.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5C7DBE").s().p("AhSCLIAAkVIClAAIAAEVg");
	this.shape_12.setTransform(8.4,110);

	this.addChild(this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,49.9,310.1,74.2);


(lib.watergraph = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape.setTransform(1502.9,27.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_1.setTransform(1492.2,26);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_2.setTransform(1481.8,27.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4C7CAB").s().p("AgsClIAAlJIBZAAIAAFJg");
	this.shape_3.setTransform(1471.3,20.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4C7CAB").s().p("AgsCPIAAkdIBZAAIAAEdg");
	this.shape_4.setTransform(1460.8,22.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_5.setTransform(1450.4,27.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_6.setTransform(1439.7,26);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_7.setTransform(1429.3,27.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4C7CAB").s().p("AgsBAIAAh/IBZAAIAAB/g");
	this.shape_8.setTransform(1418.8,30.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_9.setTransform(1408.4,27.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_10.setTransform(1397.7,26);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_11.setTransform(1387.3,27.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4C7CAB").s().p("AgsCZIAAkwIBZAAIAAEwg");
	this.shape_12.setTransform(1377,21.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_13.setTransform(1366.6,27.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_14.setTransform(1355.9,26);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_15.setTransform(1345.5,27.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_16.setTransform(1335,26);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_17.setTransform(1324.6,27.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_18.setTransform(1313.9,26);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4C7CAB").s().p("AgsA9IAAh5IBZAAIAAB5g");
	this.shape_19.setTransform(1303.5,30.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_20.setTransform(1293.1,26);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_21.setTransform(1282.7,27.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4C7CAB").s().p("AgsBAIAAh/IBZAAIAAB/g");
	this.shape_22.setTransform(1272,30.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#4C7CAB").s().p("AgsA3IAAhtIBZAAIAABtg");
	this.shape_23.setTransform(1261.6,31.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_24.setTransform(1251.1,26);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_25.setTransform(1240.7,27.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_26.setTransform(1230,26);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_27.setTransform(1219.6,27.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#4C7CAB").s().p("AgsA6IAAhzIBZAAIAABzg");
	this.shape_28.setTransform(1209.2,30.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#4C7CAB").s().p("AgsAxIAAhhIBZAAIAABhg");
	this.shape_29.setTransform(1198.8,31.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_30.setTransform(1188.2,26);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_31.setTransform(1177.8,27.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_32.setTransform(1167.3,26);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#4C7CAB").s().p("AgsClIAAlJIBZAAIAAFJg");
	this.shape_33.setTransform(1156.9,20.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_34.setTransform(1146.2,26);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_35.setTransform(1135.8,27.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_36.setTransform(1141.1,18.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_37.setTransform(1151.6,18.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_38.setTransform(1162.1,18.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_39.setTransform(1172.6,18.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_40.setTransform(1183,18.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_41.setTransform(1193.5,18.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_42.setTransform(1204,18.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_43.setTransform(1214.5,18.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_44.setTransform(1225,18.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_45.setTransform(1235.4,18.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_46.setTransform(1245.9,18.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_47.setTransform(1256.4,18.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_48.setTransform(1266.9,18.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_49.setTransform(1277.4,18.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_50.setTransform(1287.8,18.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_51.setTransform(1298.3,18.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_52.setTransform(1308.8,18.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_53.setTransform(1319.3,18.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_54.setTransform(1329.8,18.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_55.setTransform(1340.2,18.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_56.setTransform(1350.7,18.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_57.setTransform(1361.2,18.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_58.setTransform(1371.7,18.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_59.setTransform(1382.2,18.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_60.setTransform(1392.6,18.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_61.setTransform(1403.1,18.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_62.setTransform(1413.6,18.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_63.setTransform(1424.1,18.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_64.setTransform(1434.6,18.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_65.setTransform(1445,18.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_66.setTransform(1455.5,18.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_67.setTransform(1466,18.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_68.setTransform(1476.5,18.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_69.setTransform(1487,18.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_70.setTransform(1497.4,18.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#FFFFFF").ss(0.3).p("A9dAAMA67AAA");
	this.shape_71.setTransform(1319.3,6.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FFFFFF").ss(0.3).p("A9dAAMA67AAA");
	this.shape_72.setTransform(1319.3,12.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#FFFFFF").ss(0.3).p("A9dAAMA67AAA");
	this.shape_73.setTransform(1319.3,18.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FFFFFF").ss(0.3).p("A9dAAMA67AAA");
	this.shape_74.setTransform(1319.3,24.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#FFFFFF").ss(0.3).p("A9dAAMA67AAA");
	this.shape_75.setTransform(1319.3,30.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FFFFFF").ss(0.3).p("A9di2MA67AAAIAAFtMg67AAAg");
	this.shape_76.setTransform(1319.3,18.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["#6CB276","#D9DE3E","#4674B9","#B99C6F"],[0,0.373,0.69,1],-188.5,0,188.6,0).s().p("A9cC4IAAlvMA66AAAIAAFvg");
	this.shape_77.setTransform(1319.3,18.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_78.setTransform(1126.2,27.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_79.setTransform(1115.5,26);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_80.setTransform(1105.1,27.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#4C7CAB").s().p("AgsClIAAlJIBZAAIAAFJg");
	this.shape_81.setTransform(1094.6,20.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#4C7CAB").s().p("AgsCPIAAkdIBZAAIAAEdg");
	this.shape_82.setTransform(1084.1,22.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_83.setTransform(1073.7,27.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_84.setTransform(1063,26);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_85.setTransform(1052.6,27.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#4C7CAB").s().p("AgsBAIAAh/IBZAAIAAB/g");
	this.shape_86.setTransform(1042.1,30.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_87.setTransform(1031.7,27.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_88.setTransform(1021,26);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_89.setTransform(1010.6,27.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#4C7CAB").s().p("AgsCZIAAkwIBZAAIAAEwg");
	this.shape_90.setTransform(1000.2,21.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_91.setTransform(989.8,27.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_92.setTransform(979.1,26);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_93.setTransform(968.7,27.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_94.setTransform(958.2,26);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_95.setTransform(947.8,27.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_96.setTransform(937.1,26);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#4C7CAB").s().p("AgsA9IAAh5IBZAAIAAB5g");
	this.shape_97.setTransform(926.7,30.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_98.setTransform(916.4,26);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_99.setTransform(906,27.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#4C7CAB").s().p("AgsBAIAAh/IBZAAIAAB/g");
	this.shape_100.setTransform(895.3,30.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#4C7CAB").s().p("AgsA3IAAhtIBZAAIAABtg");
	this.shape_101.setTransform(884.9,31.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_102.setTransform(874.4,26);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_103.setTransform(864,27.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_104.setTransform(853.3,26);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_105.setTransform(842.9,27.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#4C7CAB").s().p("AgsA6IAAhzIBZAAIAABzg");
	this.shape_106.setTransform(832.5,30.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#4C7CAB").s().p("AgsAxIAAhhIBZAAIAABhg");
	this.shape_107.setTransform(822.1,31.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_108.setTransform(811.4,26);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_109.setTransform(801,27.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_110.setTransform(790.5,26);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#4C7CAB").s().p("AgsClIAAlJIBZAAIAAFJg");
	this.shape_111.setTransform(780.1,20.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_112.setTransform(769.4,26);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_113.setTransform(759,27.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_114.setTransform(764.4,18.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_115.setTransform(774.9,18.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_116.setTransform(785.3,18.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_117.setTransform(795.8,18.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_118.setTransform(806.3,18.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_119.setTransform(816.8,18.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_120.setTransform(827.3,18.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_121.setTransform(837.7,18.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_122.setTransform(848.2,18.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_123.setTransform(858.7,18.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_124.setTransform(869.2,18.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_125.setTransform(879.7,18.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_126.setTransform(890.1,18.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_127.setTransform(900.6,18.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_128.setTransform(911.1,18.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_129.setTransform(921.6,18.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_130.setTransform(932.1,18.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_131.setTransform(942.5,18.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_132.setTransform(953,18.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_133.setTransform(963.5,18.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_134.setTransform(974,18.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_135.setTransform(984.5,18.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_136.setTransform(994.9,18.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_137.setTransform(1005.4,18.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_138.setTransform(1015.9,18.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_139.setTransform(1026.4,18.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_140.setTransform(1036.9,18.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_141.setTransform(1047.3,18.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_142.setTransform(1057.8,18.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_143.setTransform(1068.3,18.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_144.setTransform(1078.8,18.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_145.setTransform(1089.3,18.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_146.setTransform(1099.7,18.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_147.setTransform(1110.2,18.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_148.setTransform(1120.7,18.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#FFFFFF").ss(0.3).p("A9dAAMA67AAA");
	this.shape_149.setTransform(942.5,6.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#FFFFFF").ss(0.3).p("A9dAAMA67AAA");
	this.shape_150.setTransform(942.5,12.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#FFFFFF").ss(0.3).p("A9dAAMA67AAA");
	this.shape_151.setTransform(942.5,18.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#FFFFFF").ss(0.3).p("A9dAAMA67AAA");
	this.shape_152.setTransform(942.5,24.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#FFFFFF").ss(0.3).p("A9dAAMA67AAA");
	this.shape_153.setTransform(942.5,30.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#FFFFFF").ss(0.3).p("A9di2MA67AAAIAAFtMg67AAAg");
	this.shape_154.setTransform(942.5,18.4);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.lf(["#6CB276","#D9DE3E","#4674B9","#B99C6F"],[0,0.373,0.69,1],-188.5,0,188.6,0).s().p("A9cC4IAAlvMA65AAAIAAFvg");
	this.shape_155.setTransform(942.5,18.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_156.setTransform(749,27.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_157.setTransform(738.4,26);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_158.setTransform(727.9,27.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#4C7CAB").s().p("AgsClIAAlJIBZAAIAAFJg");
	this.shape_159.setTransform(717.5,20.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#4C7CAB").s().p("AgsCPIAAkdIBZAAIAAEdg");
	this.shape_160.setTransform(706.9,22.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_161.setTransform(696.5,27.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_162.setTransform(685.9,26);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_163.setTransform(675.4,27.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#4C7CAB").s().p("AgsBAIAAh/IBZAAIAAB/g");
	this.shape_164.setTransform(665,30.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_165.setTransform(654.6,27.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_166.setTransform(643.9,26);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_167.setTransform(633.5,27.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#4C7CAB").s().p("AgsCZIAAkwIBZAAIAAEwg");
	this.shape_168.setTransform(623.1,21.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_169.setTransform(612.7,27.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_170.setTransform(602,26);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_171.setTransform(591.6,27.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_172.setTransform(581.1,26);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_173.setTransform(570.7,27.6);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_174.setTransform(560,26);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#4C7CAB").s().p("AgsA9IAAh5IBZAAIAAB5g");
	this.shape_175.setTransform(549.6,30.7);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_176.setTransform(539.3,26);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_177.setTransform(528.9,27.6);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#4C7CAB").s().p("AgsBAIAAh/IBZAAIAAB/g");
	this.shape_178.setTransform(518.2,30.3);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#4C7CAB").s().p("AgsA3IAAhtIBZAAIAABtg");
	this.shape_179.setTransform(507.8,31.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_180.setTransform(497.3,26);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_181.setTransform(486.9,27.6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_182.setTransform(476.2,26);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_183.setTransform(465.8,27.6);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#4C7CAB").s().p("AgsA6IAAhzIBZAAIAABzg");
	this.shape_184.setTransform(455.4,30.9);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#4C7CAB").s().p("AgsAxIAAhhIBZAAIAABhg");
	this.shape_185.setTransform(445,31.8);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_186.setTransform(434.3,26);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_187.setTransform(423.9,27.6);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_188.setTransform(413.4,26);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#4C7CAB").s().p("AgsClIAAlJIBZAAIAAFJg");
	this.shape_189.setTransform(403,20.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_190.setTransform(392.3,26);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_191.setTransform(381.9,27.6);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_192.setTransform(387.3,18.4);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_193.setTransform(397.7,18.4);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_194.setTransform(408.2,18.4);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_195.setTransform(418.7,18.4);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_196.setTransform(429.2,18.4);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_197.setTransform(439.7,18.4);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_198.setTransform(450.1,18.4);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_199.setTransform(460.6,18.4);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_200.setTransform(471.1,18.4);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_201.setTransform(481.6,18.4);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_202.setTransform(492.1,18.4);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_203.setTransform(502.5,18.4);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_204.setTransform(513,18.4);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_205.setTransform(523.5,18.4);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_206.setTransform(534,18.4);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_207.setTransform(544.5,18.4);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_208.setTransform(554.9,18.4);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_209.setTransform(565.4,18.4);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_210.setTransform(575.9,18.4);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_211.setTransform(586.4,18.4);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_212.setTransform(596.9,18.4);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_213.setTransform(607.3,18.4);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_214.setTransform(617.8,18.4);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_215.setTransform(628.3,18.4);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_216.setTransform(638.8,18.4);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_217.setTransform(649.3,18.4);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_218.setTransform(659.7,18.4);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_219.setTransform(670.2,18.4);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_220.setTransform(680.7,18.4);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_221.setTransform(691.2,18.4);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_222.setTransform(701.7,18.4);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_223.setTransform(712.1,18.4);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_224.setTransform(722.6,18.4);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_225.setTransform(733.1,18.4);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_226.setTransform(743.6,18.4);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#FFFFFF").ss(0.3).p("A9dAAMA67AAA");
	this.shape_227.setTransform(565.4,6.2);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#FFFFFF").ss(0.3).p("A9dAAMA67AAA");
	this.shape_228.setTransform(565.4,12.3);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#FFFFFF").ss(0.3).p("A9dAAMA67AAA");
	this.shape_229.setTransform(565.4,18.4);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#FFFFFF").ss(0.3).p("A9dAAMA67AAA");
	this.shape_230.setTransform(565.4,24.6);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#FFFFFF").ss(0.3).p("A9dAAMA67AAA");
	this.shape_231.setTransform(565.4,30.7);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#FFFFFF").ss(0.3).p("A9di2MA67AAAIAAFtMg67AAAg");
	this.shape_232.setTransform(565.4,18.4);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.lf(["#6CB276","#D9DE3E","#4674B9","#B99C6F"],[0,0.373,0.69,1],-188.5,0,188.6,0).s().p("A9cC4IAAlvMA66AAAIAAFvg");
	this.shape_233.setTransform(565.4,18.4);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_234.setTransform(372.3,27.6);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_235.setTransform(361.6,26);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_236.setTransform(351.2,27.6);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#4C7CAB").s().p("AgsClIAAlJIBZAAIAAFJg");
	this.shape_237.setTransform(340.7,20.2);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#4C7CAB").s().p("AgsCPIAAkdIBZAAIAAEdg");
	this.shape_238.setTransform(330.2,22.4);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_239.setTransform(319.8,27.6);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_240.setTransform(309.1,26);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_241.setTransform(298.7,27.6);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#4C7CAB").s().p("AgsBAIAAh/IBZAAIAAB/g");
	this.shape_242.setTransform(288.2,30.3);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_243.setTransform(277.8,27.6);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_244.setTransform(267.1,26);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_245.setTransform(256.7,27.6);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#4C7CAB").s().p("AgsCZIAAkwIBZAAIAAEwg");
	this.shape_246.setTransform(246.4,21.5);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_247.setTransform(236,27.6);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_248.setTransform(225.3,26);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_249.setTransform(214.9,27.6);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_250.setTransform(204.4,26);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_251.setTransform(194,27.6);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_252.setTransform(183.3,26);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#4C7CAB").s().p("AgsA9IAAh5IBZAAIAAB5g");
	this.shape_253.setTransform(172.9,30.7);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_254.setTransform(162.5,26);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_255.setTransform(152.1,27.6);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#4C7CAB").s().p("AgsBAIAAh/IBZAAIAAB/g");
	this.shape_256.setTransform(141.4,30.3);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#4C7CAB").s().p("AgsA3IAAhtIBZAAIAABtg");
	this.shape_257.setTransform(131,31.3);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_258.setTransform(120.5,26);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_259.setTransform(110.1,27.6);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_260.setTransform(99.4,26);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_261.setTransform(89,27.6);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#4C7CAB").s().p("AgsA6IAAhzIBZAAIAABzg");
	this.shape_262.setTransform(78.6,30.9);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#4C7CAB").s().p("AgsAxIAAhhIBZAAIAABhg");
	this.shape_263.setTransform(68.2,31.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_264.setTransform(57.6,26);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_265.setTransform(47.2,27.6);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_266.setTransform(36.7,26);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#4C7CAB").s().p("AgsClIAAlJIBZAAIAAFJg");
	this.shape_267.setTransform(26.3,20.2);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#4C7CAB").s().p("AgsBrIAAjVIBZAAIAADVg");
	this.shape_268.setTransform(15.6,26);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#4C7CAB").s().p("AgsBbIAAi1IBZAAIAAC1g");
	this.shape_269.setTransform(5.2,27.6);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_270.setTransform(10.5,18.4);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_271.setTransform(21,18.4);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_272.setTransform(31.5,18.4);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_273.setTransform(42,18.4);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_274.setTransform(52.4,18.4);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_275.setTransform(62.9,18.4);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_276.setTransform(73.4,18.4);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_277.setTransform(83.9,18.4);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_278.setTransform(94.4,18.4);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_279.setTransform(104.8,18.4);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_280.setTransform(115.3,18.4);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_281.setTransform(125.8,18.4);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_282.setTransform(136.3,18.4);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_283.setTransform(146.8,18.4);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_284.setTransform(157.2,18.4);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_285.setTransform(167.7,18.4);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_286.setTransform(178.2,18.4);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_287.setTransform(188.7,18.4);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_288.setTransform(199.2,18.4);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_289.setTransform(209.6,18.4);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_290.setTransform(220.1,18.4);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_291.setTransform(230.6,18.4);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_292.setTransform(241.1,18.4);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_293.setTransform(251.6,18.4);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_294.setTransform(262,18.4);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_295.setTransform(272.5,18.4);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_296.setTransform(283,18.4);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_297.setTransform(293.5,18.4);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_298.setTransform(304,18.4);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_299.setTransform(314.4,18.4);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_300.setTransform(324.9,18.4);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_301.setTransform(335.4,18.4);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_302.setTransform(345.9,18.4);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_303.setTransform(356.4,18.4);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_304.setTransform(366.8,18.4);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("#FFFFFF").ss(0.3).p("A9dAAMA67AAA");
	this.shape_305.setTransform(188.7,6.2);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("#FFFFFF").ss(0.3).p("A9dAAMA67AAA");
	this.shape_306.setTransform(188.7,12.3);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("#FFFFFF").ss(0.3).p("A9dAAMA67AAA");
	this.shape_307.setTransform(188.7,18.4);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("#FFFFFF").ss(0.3).p("A9dAAMA67AAA");
	this.shape_308.setTransform(188.7,24.6);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("#FFFFFF").ss(0.3).p("A9dAAMA67AAA");
	this.shape_309.setTransform(188.7,30.7);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("#FFFFFF").ss(0.3).p("A9di2MA67AAAIAAFtMg67AAAg");
	this.shape_310.setTransform(188.7,18.4);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.lf(["#6CB276","#D9DE3E","#4674B9","#B99C6F"],[0,0.373,0.69,1],-188.5,0,188.6,0).s().p("A9cC4IAAlvMA66AAAIAAFvg");
	this.shape_311.setTransform(188.7,18.4);

	this.addChild(this.shape_311,this.shape_310,this.shape_309,this.shape_308,this.shape_307,this.shape_306,this.shape_305,this.shape_304,this.shape_303,this.shape_302,this.shape_301,this.shape_300,this.shape_299,this.shape_298,this.shape_297,this.shape_296,this.shape_295,this.shape_294,this.shape_293,this.shape_292,this.shape_291,this.shape_290,this.shape_289,this.shape_288,this.shape_287,this.shape_286,this.shape_285,this.shape_284,this.shape_283,this.shape_282,this.shape_281,this.shape_280,this.shape_279,this.shape_278,this.shape_277,this.shape_276,this.shape_275,this.shape_274,this.shape_273,this.shape_272,this.shape_271,this.shape_270,this.shape_269,this.shape_268,this.shape_267,this.shape_266,this.shape_265,this.shape_264,this.shape_263,this.shape_262,this.shape_261,this.shape_260,this.shape_259,this.shape_258,this.shape_257,this.shape_256,this.shape_255,this.shape_254,this.shape_253,this.shape_252,this.shape_251,this.shape_250,this.shape_249,this.shape_248,this.shape_247,this.shape_246,this.shape_245,this.shape_244,this.shape_243,this.shape_242,this.shape_241,this.shape_240,this.shape_239,this.shape_238,this.shape_237,this.shape_236,this.shape_235,this.shape_234,this.shape_233,this.shape_232,this.shape_231,this.shape_230,this.shape_229,this.shape_228,this.shape_227,this.shape_226,this.shape_225,this.shape_224,this.shape_223,this.shape_222,this.shape_221,this.shape_220,this.shape_219,this.shape_218,this.shape_217,this.shape_216,this.shape_215,this.shape_214,this.shape_213,this.shape_212,this.shape_211,this.shape_210,this.shape_209,this.shape_208,this.shape_207,this.shape_206,this.shape_205,this.shape_204,this.shape_203,this.shape_202,this.shape_201,this.shape_200,this.shape_199,this.shape_198,this.shape_197,this.shape_196,this.shape_195,this.shape_194,this.shape_193,this.shape_192,this.shape_191,this.shape_190,this.shape_189,this.shape_188,this.shape_187,this.shape_186,this.shape_185,this.shape_184,this.shape_183,this.shape_182,this.shape_181,this.shape_180,this.shape_179,this.shape_178,this.shape_177,this.shape_176,this.shape_175,this.shape_174,this.shape_173,this.shape_172,this.shape_171,this.shape_170,this.shape_169,this.shape_168,this.shape_167,this.shape_166,this.shape_165,this.shape_164,this.shape_163,this.shape_162,this.shape_161,this.shape_160,this.shape_159,this.shape_158,this.shape_157,this.shape_156,this.shape_155,this.shape_154,this.shape_153,this.shape_152,this.shape_151,this.shape_150,this.shape_149,this.shape_148,this.shape_147,this.shape_146,this.shape_145,this.shape_144,this.shape_143,this.shape_142,this.shape_141,this.shape_140,this.shape_139,this.shape_138,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-0.9,1509.9,38.7);


(lib.WaterBudget = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("50.7: Earthen Dam Reservoir\n45.2: Concrete Dam/ Hydroelectric Reservoir\n79.8: Aquifer\n55.6: Snowpack \n34.3: River", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 294;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,298,95.3);


(lib.TEMPLABEL = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("TEMPERATURE", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 94;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,98,19.1);


(lib.TempGraph2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D9812F").p("AArAAQAAARgNANQgMANgSAAQgRAAgMgNQgNgNAAgRQAAgRANgNQAMgNARAAQASAAAMANQANANAAARg");
	this.shape.setTransform(289,92.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#D9812F").p("AArAAQAAASgNAMQgMANgSAAQgRAAgMgNQgNgMAAgSQAAgRANgMQAMgNARAAQASAAAMANQANAMAAARg");
	this.shape_1.setTransform(264.3,65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#D9812F").p("AArAAQAAASgNAMQgMANgSAAQgRAAgMgNQgNgMAAgSQAAgRANgMQAMgNARAAQASAAAMANQANAMAAARg");
	this.shape_2.setTransform(239.5,51.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#D9812F").p("AArAAQAAASgNAMQgMANgSAAQgRAAgMgNQgNgMAAgSQAAgRANgMQAMgNARAAQASAAAMANQANAMAAARg");
	this.shape_3.setTransform(215.5,48.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#D9812F").p("AArAAQAAASgNANQgMAMgSAAQgRAAgMgMQgNgNAAgSQAAgRANgMQAMgNARAAQASAAAMANQANAMAAARg");
	this.shape_4.setTransform(190,32);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#D9812F").p("AArAAQAAARgMANQgNANgSAAQgRAAgMgNQgNgNAAgRQAAgRANgNQAMgNARAAQASAAANANQAMANAAARg");
	this.shape_5.setTransform(66.3,92.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#D9812F").p("AArAAQAAARgMANQgNANgSAAQgRAAgMgNQgNgNAAgRQAAgRANgNQAMgNARAAQASAAANANQAMANAAARg");
	this.shape_6.setTransform(91,76.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#D9812F").p("AArAAQAAASgMAMQgNANgSAAQgRAAgMgNQgNgMAAgSQAAgRANgMQAMgNARAAQASAAANANQAMAMAAARg");
	this.shape_7.setTransform(115.8,72.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#D9812F").p("AArAAQAAASgMANQgNANgSAAQgRAAgMgNQgNgNAAgSQAAgQANgNQAMgNARAAQASAAANANQAMANAAAQg");
	this.shape_8.setTransform(140.5,66.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#D9812F").p("AArAAQAAARgMANQgNANgSAAQgRAAgMgNQgNgNAAgRQAAgRANgNQAMgNARAAQASAAANANQAMANAAARg");
	this.shape_9.setTransform(165.3,63.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#D9812F").p("AArAAQAAASgMAMQgNANgSAAQgRAAgMgNQgNgMAAgSQAAgRANgMQAMgNARAAQASAAANANQAMAMAAARg");
	this.shape_10.setTransform(41.5,98);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#D9812F").p("AArAAQAAASgNAMQgMANgSAAQgRAAgMgNQgNgMAAgSQAAgRANgMQAMgNARAAQASAAAMANQANAMAAARg");
	this.shape_11.setTransform(17,91.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#221F20").p("A4NFHICog8ID4A8ID3g8IDuiWID+goID7hGID1gIID3lDID4CjID3AUID4CMID3EMIDTA8");
	this.shape_12.setTransform(155,65.3);

	this.addChild(this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,26.6,312.1,76.8);


(lib.tempgraph = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#020202").ss(0.3).p("AdYgiQgXAAgRAaQgHAIgWAuQgmBRg4AAQgjAAgbgeQgQgUgZgyQgZgwgPgSQgZggggAAQggAAgZAhQgNARgaA1QgZAygSAUQgdAhgoAAQgnAAgagjQgOgTgZg5QgXg1gTgWQgfgjgtAAQguAAgeAlQgSAXgZA5QgaA7gRAWQgeAlgtAAQgtAAgbggQgSgUgTgwQgUgzgMgRQgXggglAAQgmAAgVAbQgNAPgPAoQgOApgLAPQgUAbgiAAQgjAAgUgbQgLgPgQgqQgPgogNgQQgVgaglAAQglAAgVAaQgMAPgPApQgPAqgMAPQgUAagkAAQgjAAgVggQgJgOgUg3QgRgvgUgVQgcghg0AAQhWAAguBnQgfBGgBABQgSAggZAAQgaAAgaggQgOgSgfg1Qg9hmgxAAQgfAAgYAhQgNAQgbA3QgZAzgUAVQgeAhgpAAQgoAAgeghQgUgVgZgzQgbg3gNgRQgYghggAAQggAAgTAhQgFAJgXA8QgSAwgXAXQggAgg3AAQg3AAgigpQgWgagahAQgchDgTgYQgggqgyAAQgyAAgZAoQgLATgVBFQgTA7gYAbQglAohFAAQhFAAgsgoQgggdgYg4QgYhBgNgXQgVgogfgB");
	this.shape.setTransform(1318.6,17.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_1.setTransform(1141.1,18.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_2.setTransform(1151.6,18.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_3.setTransform(1162.1,18.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_4.setTransform(1172.6,18.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_5.setTransform(1183,18.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_6.setTransform(1193.5,18.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_7.setTransform(1204,18.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_8.setTransform(1214.5,18.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_9.setTransform(1225,18.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_10.setTransform(1235.4,18.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_11.setTransform(1245.9,18.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_12.setTransform(1256.4,18.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_13.setTransform(1266.9,18.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_14.setTransform(1277.4,18.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_15.setTransform(1287.8,18.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_16.setTransform(1298.3,18.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_17.setTransform(1308.8,18.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_18.setTransform(1319.3,18.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_19.setTransform(1329.8,18.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_20.setTransform(1340.2,18.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_21.setTransform(1350.7,18.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_22.setTransform(1361.2,18.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_23.setTransform(1371.7,18.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_24.setTransform(1382.2,18.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_25.setTransform(1392.6,18.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_26.setTransform(1403.1,18.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_27.setTransform(1413.6,18.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_28.setTransform(1424.1,18.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_29.setTransform(1434.6,18.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_30.setTransform(1445,18.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_31.setTransform(1455.5,18.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_32.setTransform(1466,18.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_33.setTransform(1476.5,18.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_34.setTransform(1487,18.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_35.setTransform(1497.4,18.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(0.3).p("A9dAAMA67AAA");
	this.shape_36.setTransform(1319.3,6.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(0.3).p("A9dAAMA67AAA");
	this.shape_37.setTransform(1319.3,12.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(0.3).p("A9dAAMA67AAA");
	this.shape_38.setTransform(1319.3,18.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(0.3).p("A9dAAMA67AAA");
	this.shape_39.setTransform(1319.3,24.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(0.3).p("A9dAAMA67AAA");
	this.shape_40.setTransform(1319.3,30.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(0.3).p("A9di2MA67AAAIAAFtMg67AAAg");
	this.shape_41.setTransform(1319.3,18.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#6CB276","#D9DE3E","#4674B9","#B99C6F"],[0,0.373,0.69,1],-188.5,0,188.6,0).s().p("A9cC4IAAlvMA66AAAIAAFvg");
	this.shape_42.setTransform(1319.3,18.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#020202").ss(0.3).p("AdYgiQgXAAgRAaQgHAIgWAuQgnBRg4AAQgiAAgbgeQgRgUgYgyQgagwgOgSQgaggggAAQggAAgYAhQgNARgbA1QgYAygTAUQgdAhgnAAQgnAAgagjQgPgTgYg5QgYg1gTgWQgegjguAAQgtAAgeAlQgSAXgaA5QgZA7gSAWQgdAlgtAAQgtAAgcggQgRgUgTgwQgUgzgNgRQgWgggmAAQglAAgWAbQgNAPgOAoQgPApgLAPQgTAbgjAAQgiAAgUgbQgMgPgPgqQgPgogNgQQgWgaglAAQgkAAgVAaQgNAPgOApQgPAqgMAPQgUAagkAAQgkAAgUggQgJgOgUg3QgSgvgUgVQgcghgzAAQhWAAguBnQggBGAAABQgTAggZAAQgZAAgaggQgOgSggg1Qg8hmgxAAQgfAAgZAhQgMAQgbA3QgZAygUAWQgeAhgpAAQgpAAgeghQgUgVgYgzQgbg3gNgRQgZghggAAQgfAAgTAhQgFAJgXA8QgSAwgXAXQggAgg3AAQg3AAgigpQgWgagbhAQgbhDgTgYQgggqgyAAQgyAAgZAoQgMATgVBFQgTA7gYAbQgkAohFAAQh0AAg2h9QgXhBgNgXQgVgogfgB");
	this.shape_43.setTransform(941.9,17.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_44.setTransform(764.4,18.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_45.setTransform(774.9,18.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_46.setTransform(785.3,18.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_47.setTransform(795.8,18.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_48.setTransform(806.3,18.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_49.setTransform(816.8,18.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_50.setTransform(827.3,18.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_51.setTransform(837.7,18.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_52.setTransform(848.2,18.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_53.setTransform(858.7,18.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_54.setTransform(869.2,18.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_55.setTransform(879.7,18.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_56.setTransform(890.1,18.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_57.setTransform(900.6,18.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_58.setTransform(911.1,18.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_59.setTransform(921.6,18.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_60.setTransform(932.1,18.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_61.setTransform(942.5,18.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_62.setTransform(953,18.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_63.setTransform(963.5,18.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_64.setTransform(974,18.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_65.setTransform(984.5,18.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_66.setTransform(994.9,18.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_67.setTransform(1005.4,18.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_68.setTransform(1015.9,18.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_69.setTransform(1026.4,18.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_70.setTransform(1036.9,18.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_71.setTransform(1047.3,18.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_72.setTransform(1057.8,18.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_73.setTransform(1068.3,18.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_74.setTransform(1078.8,18.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_75.setTransform(1089.3,18.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_76.setTransform(1099.7,18.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_77.setTransform(1110.2,18.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_78.setTransform(1120.7,18.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#FFFFFF").ss(0.3).p("A9dAAMA67AAA");
	this.shape_79.setTransform(942.5,6.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#FFFFFF").ss(0.3).p("A9dAAMA67AAA");
	this.shape_80.setTransform(942.5,12.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#FFFFFF").ss(0.3).p("A9dAAMA67AAA");
	this.shape_81.setTransform(942.5,18.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#FFFFFF").ss(0.3).p("A9dAAMA67AAA");
	this.shape_82.setTransform(942.5,24.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#FFFFFF").ss(0.3).p("A9dAAMA67AAA");
	this.shape_83.setTransform(942.5,30.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#FFFFFF").ss(0.3).p("A9di2MA67AAAIAAFtMg67AAAg");
	this.shape_84.setTransform(942.5,18.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["#6CB276","#D9DE3E","#4674B9","#B99C6F"],[0,0.373,0.69,1],-188.5,0,188.6,0).s().p("A9cC4IAAlvMA65AAAIAAFvg");
	this.shape_85.setTransform(942.5,18.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#020202").ss(0.3).p("AdYgiQgXAAgRAaQgHAIgWAuQgmBRg4AAQgjAAgbgeQgQgUgZgyQgZgwgPgSQgZggggAAQggAAgZAhQgNARgaA1QgZAygSAUQgdAhgoAAQgnAAgagjQgOgTgZg5QgXg1gTgWQgfgjgtAAQguAAgeAlQgSAXgZA5QgaA7gRAWQgeAlgtAAQgtAAgbggQgSgUgTgwQgUgzgMgRQgXggglAAQgmAAgVAbQgNAPgPAoQgOApgLAPQgUAbgiAAQgjAAgUgbQgMgPgPgqQgPgogNgQQgWgagkAAQglAAgVAaQgNAPgOApQgPAqgMAPQgUAagkAAQgkAAgUggQgJgOgUg3QgRgvgUgVQgcghg0AAQhWAAguBnQgfBGgBABQgSAggZAAQgaAAgaggQgOgSgfg1Qg9hmgxAAQgfAAgYAhQgNAQgbA3QgZAzgUAVQgeAhgpAAQgoAAgeghQgUgVgZgzQgbg3gNgRQgYghggAAQggAAgTAhQgFAJgXA8QgSAwgXAXQggAgg3AAQg3AAgigpQgWgagahAQgchDgTgYQgggqgyAAQgyAAgZAoQgLATgVBFQgTA7gYAbQglAohFAAQhFAAgsgoQgggdgYg4QgYhBgNgXQgVgogfgB");
	this.shape_86.setTransform(564.8,17.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_87.setTransform(387.3,18.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_88.setTransform(397.7,18.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_89.setTransform(408.2,18.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_90.setTransform(418.7,18.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_91.setTransform(429.2,18.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_92.setTransform(439.7,18.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_93.setTransform(450.1,18.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_94.setTransform(460.6,18.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_95.setTransform(471.1,18.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_96.setTransform(481.6,18.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_97.setTransform(492.1,18.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_98.setTransform(502.5,18.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_99.setTransform(513,18.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_100.setTransform(523.5,18.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_101.setTransform(534,18.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_102.setTransform(544.5,18.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_103.setTransform(554.9,18.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_104.setTransform(565.4,18.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_105.setTransform(575.9,18.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_106.setTransform(586.4,18.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_107.setTransform(596.9,18.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_108.setTransform(607.3,18.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_109.setTransform(617.8,18.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_110.setTransform(628.3,18.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_111.setTransform(638.8,18.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_112.setTransform(649.3,18.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_113.setTransform(659.7,18.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_114.setTransform(670.2,18.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_115.setTransform(680.7,18.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_116.setTransform(691.2,18.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_117.setTransform(701.7,18.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_118.setTransform(712.1,18.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_119.setTransform(722.6,18.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_120.setTransform(733.1,18.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_121.setTransform(743.6,18.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#FFFFFF").ss(0.3).p("A9dAAMA67AAA");
	this.shape_122.setTransform(565.4,6.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#FFFFFF").ss(0.3).p("A9dAAMA67AAA");
	this.shape_123.setTransform(565.4,12.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#FFFFFF").ss(0.3).p("A9dAAMA67AAA");
	this.shape_124.setTransform(565.4,18.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#FFFFFF").ss(0.3).p("A9dAAMA67AAA");
	this.shape_125.setTransform(565.4,24.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#FFFFFF").ss(0.3).p("A9dAAMA67AAA");
	this.shape_126.setTransform(565.4,30.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#FFFFFF").ss(0.3).p("A9di2MA67AAAIAAFtMg67AAAg");
	this.shape_127.setTransform(565.4,18.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.lf(["#6CB276","#D9DE3E","#4674B9","#B99C6F"],[0,0.373,0.69,1],-188.5,0,188.6,0).s().p("A9cC4IAAlvMA66AAAIAAFvg");
	this.shape_128.setTransform(565.4,18.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#020202").ss(0.3).p("AdYgiQgXAAgRAaQgHAIgWAuQgmBRg4AAQgjAAgbgeQgQgUgZgyQgZgwgPgSQgZggggAAQggAAgZAhQgNARgaA1QgZAygSAUQgdAhgoAAQgnAAgagjQgOgTgZg5QgXg1gTgWQgfgjgtAAQguAAgeAlQgSAXgZA5QgaA7gRAWQgeAlgtAAQgtAAgbggQgSgUgTgwQgUgzgMgRQgXggglAAQgmAAgVAbQgNAPgPAoQgOApgLAPQgUAbgiAAQgjAAgUgbQgMgPgPgqQgPgogNgQQgWgagkAAQglAAgVAaQgNAPgOApQgPAqgMAPQgUAagkAAQgjAAgVggQgJgOgUg3QgRgvgUgVQgcghg0AAQhWAAguBnQgfBGgBABQgSAggZAAQgaAAgaggQgOgSgfg1Qg9hmgxAAQgfAAgYAhQgNAQgbA3QgZAzgUAVQgeAhgpAAQgoAAgeghQgUgVgZgzQgbg3gNgRQgYghggAAQggAAgTAhQgFAJgXA8QgSAwgXAXQggAgg3AAQg3AAgigpQgWgagahAQgchDgTgYQgggqgyAAQgyAAgZAoQgLATgVBFQgTA7gYAbQglAohFAAQhFAAgsgoQgggdgYg4QgYhBgNgXQgVgogfgB");
	this.shape_129.setTransform(188,17.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_130.setTransform(10.5,18.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_131.setTransform(21,18.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_132.setTransform(31.5,18.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_133.setTransform(42,18.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_134.setTransform(52.4,18.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_135.setTransform(62.9,18.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_136.setTransform(73.4,18.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_137.setTransform(83.9,18.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_138.setTransform(94.4,18.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_139.setTransform(104.8,18.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_140.setTransform(115.3,18.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_141.setTransform(125.8,18.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_142.setTransform(136.3,18.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_143.setTransform(146.8,18.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_144.setTransform(157.2,18.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_145.setTransform(167.7,18.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_146.setTransform(178.2,18.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_147.setTransform(188.7,18.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_148.setTransform(199.2,18.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_149.setTransform(209.6,18.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_150.setTransform(220.1,18.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_151.setTransform(230.6,18.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_152.setTransform(241.1,18.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_153.setTransform(251.6,18.4);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_154.setTransform(262,18.4);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_155.setTransform(272.5,18.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_156.setTransform(283,18.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_157.setTransform(293.5,18.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_158.setTransform(304,18.4);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_159.setTransform(314.4,18.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_160.setTransform(324.9,18.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_161.setTransform(335.4,18.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_162.setTransform(345.9,18.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_163.setTransform(356.4,18.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#FFFFFF").ss(0.3).p("AAAi2IAAFt");
	this.shape_164.setTransform(366.8,18.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#FFFFFF").ss(0.3).p("A9dAAMA67AAA");
	this.shape_165.setTransform(188.7,6.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#FFFFFF").ss(0.3).p("A9dAAMA67AAA");
	this.shape_166.setTransform(188.7,12.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#FFFFFF").ss(0.3).p("A9dAAMA67AAA");
	this.shape_167.setTransform(188.7,18.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#FFFFFF").ss(0.3).p("A9dAAMA67AAA");
	this.shape_168.setTransform(188.7,24.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#FFFFFF").ss(0.3).p("A9dAAMA67AAA");
	this.shape_169.setTransform(188.7,30.7);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#FFFFFF").ss(0.3).p("A9di2MA67AAAIAAFtMg67AAAg");
	this.shape_170.setTransform(188.7,18.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.lf(["#6CB276","#D9DE3E","#4674B9","#B99C6F"],[0,0.373,0.69,1],-188.5,0,188.6,0).s().p("A9cC4IAAlvMA66AAAIAAFvg");
	this.shape_171.setTransform(188.7,18.4);

	this.addChild(this.shape_171,this.shape_170,this.shape_169,this.shape_168,this.shape_167,this.shape_166,this.shape_165,this.shape_164,this.shape_163,this.shape_162,this.shape_161,this.shape_160,this.shape_159,this.shape_158,this.shape_157,this.shape_156,this.shape_155,this.shape_154,this.shape_153,this.shape_152,this.shape_151,this.shape_150,this.shape_149,this.shape_148,this.shape_147,this.shape_146,this.shape_145,this.shape_144,this.shape_143,this.shape_142,this.shape_141,this.shape_140,this.shape_139,this.shape_138,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-0.9,1509.9,38.8);


(lib.NormalTempWinter4 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("3. Refuse to issue a permit to the land developer.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 475;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,479,48.7);


(lib.NormalTempWinter3 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("2. Issue the developer a permit\nbut require dramatically reduced water consumption on the site.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 474;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,478,48.7);


(lib.NormalTempWinter2 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("1. Allow development of the cemetery despite concerns.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 476;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,480,96);


(lib.NormalTempWinter1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("A wealthy land developer wants to build a 250-acre cemetery. The estimated water needs for lawn maintenance is 62 million gallons a year. The cemetery would bring about 50 jobs to the region. However, city officials are concerned that the cemetery would dramatically deplete the city’s supply of drinking water.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 468;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,472,84);


(lib.NormalTempSummer3 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("If 2: The cemetery is open for business! Some citizens aren’t happy with the unconventional cosmetic appearance of the cemetery. However, some don’t mind and chose to bury their loved ones at the new site.emetery is open for business. The grounds, landscaped with a non-native turf grass, are being irrigated by city water.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 472;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,476,95);


(lib.NormalTempSummer2 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("If 1: The cemetery is open for business. The grounds, landscaped with a non-native turf grass, are being irrigated by city water.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 476;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,480,93);


(lib.NormalTempSummer1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("If 1: The city water supply levels have been dramatically impacted by the addition of the new cemetery. Water in both the aquifer and reservoirs is lower than before. If there was a drought, the city would not be able to provide needed water to citizens. City committees are being formed to assess the situation and work out a response plan.\nSee water budget drop.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 473;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,477,95);


(lib.NormalTempSpring3 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("If 3: The land developer has decided to develop the planned cemetery in a neighboring city in a different watershed. City residents are upset that a compromise couldn't be reached and potential jobs were lost.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 474;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,478,89);


(lib.NormalTempSpring2 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("If 2: In order to comply with the requirements of the permit, the developer has decided to xeriscape the grounds of the cemetery. Xeriscaping is a type of landscape designed to save water by using plants that require less water to grow. Many residents are furious about this proposal. They believe that having a cemetery without grass is disrespectful and that it doesn’t look dignified.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 472;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,476,94);


(lib.NormalTempSpring1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("If 1: The developer has broken ground on the new cemetery. It will be fully operational in 2 months.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 473;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,477,95);


(lib.NormalTempFall2 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("If 2: A fall rainstorm has caused the new graves in the cemetery to sink. The residents who were unhappy with the looks of the cemetery immediately blame the xeriscaping for the accident. The cemetery issues a statement explaining that the graves would have sunk with or without grass.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 474;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,478,91);


(lib.NormalTempFall1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("If 1: The city has decided to amend the cemetery’s water rights permit stating that the cemetery water will be cut off in the event of a drought to protect citizen’s water supply.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 467;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,471,89);


(lib.NormalPrecipWinter = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Dam inspectors have determined that the earthen dam reservoir is in need of repair as the dam has exceeded its functional design limit. As part of the update, officials also want to make the dam more earthquake safe.To do the rehabilitation the reservoir will need to be drained and 5 acres of forest will need to be removed which will increase the capacity of the reservoir. The rehab will cost $3.5 million. Do you implement this plan?", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 475;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,479,91);


(lib.NormalPrecipSummer = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("if yes: construction continues on the earthen dam rehab.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 468;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,472,95);


(lib.NormalPrecipSpring2 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("if no: officials are going back to the drawing board for how to deal with the aging earthen dam reservoir following rejection of their plan.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 475;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,479,87);


(lib.NormalPrecipSpring1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("if yes: the earthen dam reservoir has been drained. Before draining, fish were captured from the reservoir and moved to the concrete dam reservoir. There is a temporary loss of irrigation water for the high school below the dam and surrounding areas. Anew road has been built for the construction and heavy loading trucks are heading up and down the canyon each day to work on the dam rehab. Some area residents are complaining about the noise and dust.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 469;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,473,95.3);


(lib.NormalPrecipFall2 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("if yes: At 9:35 am a magnitude 6.5 earthquake has struck the earthen dam reservoir area. Thankfully, because of the rehab, the dam has held and damage is minimal. Some poorly built mountain cabins were destroyed but no one was hurt.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 465;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,469,91);


(lib.NormalPrecipFall1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("if yes: construction is now complete on the earthen dam rehab project. The reservoir has refilled and stocked with native fish. The construction road has been closed to traffic and converted into a hiking trail.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 474;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,478,89);


(lib.GraphBackground = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221F20").p("AAAprIAATX");
	this.shape.setTransform(172.2,496.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#221F20").p("AAAprIAATX");
	this.shape_1.setTransform(147.5,496.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#221F20").p("AAAprIAATX");
	this.shape_2.setTransform(122.7,496.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#221F20").p("AAAprIAATX");
	this.shape_3.setTransform(98,496.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#221F20").p("AAAprIAATX");
	this.shape_4.setTransform(73.2,496.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#221F20").p("AAAprIAATX");
	this.shape_5.setTransform(48.5,496.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#221F20").p("AAAprIAATX");
	this.shape_6.setTransform(23.8,496.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#221F20").p("AAAprIAATX");
	this.shape_7.setTransform(-1,496.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#221F20").p("AAAprIAATX");
	this.shape_8.setTransform(-25.7,496.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#221F20").p("AAAprIAATX");
	this.shape_9.setTransform(-50.5,496.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#221F20").p("AAAprIAATX");
	this.shape_10.setTransform(-75.2,496.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#221F20").p("AAAprIAATX");
	this.shape_11.setTransform(-100,496.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#221F20").p("AYOJsMgwbAAAIAAzXMAwbAAAg");
	this.shape_12.setTransform(38.3,496.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#4674B9","#A0C44B","#F5ED4A","#B99C6F"],[0,0.314,0.608,1],-155,0,155.1,0).s().p("A4NJrIAAzVMAwbAAAIAATVg");
	this.shape_13.setTransform(38.3,496.5);

	this.addChild(this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-117.8,433.5,312.1,126);


(lib.AbWetWinter = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Despite normal precipitation levels last fall, routine monitoring of the aquifer has revealed that groundwater isn’t recharging the aquifer fast enough. Experts believe impervious surfaces such as parking lots and roads are blocking groundwater flow. As a result, the aquifer has formed a dry “cone of depression” around the pump. Aquifer pumping has stopped to allow the groundwater to recover. In the meantime, the city's water will come solely from local reservoirs. ", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 469;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,473,120);


(lib.AbWetSummer3 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Heavy rains have forced the water treatment plant to close temporarily.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 465;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,469,93);


(lib.AbWetSummer2 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("NO (from above): The city is still cleaning up the massive amounts of damage from the dam failure. An investigation is underway to determine the cause and you are being called in for questioning regarding your decision to not open the spillway tunnels.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 471;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,475,92);


(lib.AbWetSummer1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("YES (from above): Repairs to the spillway tunnel concrete are now underway from the massive release at the dam last week.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 473;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,477,89);


(lib.AbWetSpring3 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("NO: Another large rainstorm has\ncaused the reservoir water to overtop the dam. This has damaged the structural integrity of the dam and the dam has failed resulting in a massive flood of the city. This resulted in 14 fatalities and billions of dollars in damage.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 473;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,477,91);


(lib.AbWetSpring2 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("YES: Large volumes of water are now flowing through the spillway tunnels. The tunnels had not been previously tested with such a large flow rate and the concrete is becoming damaged from the force. The powerful and turbulent water flow has also hurt juvenile fish downstream. However, the dam is no longer in danger of overtopping. Another large band of rainstorms are beginning to pass through.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 463;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,467,94);


(lib.AbWetSpring1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Suburbia has gotten one month’s worth of rain in one day! The reservoir behind the hydroelectric dam is at maximum capacity. Another significant rain event will overtop the dam. Spillway tunnels were designed into the dam to prevent overtopping but have never been used before. Should you release excess water via the spillway tunnel?", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 475;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,479,89);


(lib.AbWetFall2 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("NEWS FLASH: The extremely wet summer has led to a mole population explosion in Suburbia. The soggy soil during the spring and summer led to the perfect breeding conditions for moles, making it easier for them to dig through. Area golf courses and home gardeners are struggling to get rid of the pest.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 472;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,476,90);


(lib.AbWetFall1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("NO (from above): The investigation into the dam failure has determined negligence in failing to respond to a flooding threat by refusing to open the spillway tunnels. You have been placed on administrative leave.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 472;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,476,93);


(lib.AbDryWinter = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("As winter draws to a close reports are indicating that the mountains have the least snowpack on record. Ski resorts say attendance is down over 10% compared to last year. Concerns about drought are being raised as spring approaches.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 478;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,482,97);


(lib.AbDrySummer4 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("a car wash has been issued a citation for illegally harvesting too much rainwater to use in their car washing operation. They have been asked to dismantle their collection system which exceeds the regulated cistern collection size.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 473;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,477,86);


(lib.AbDrySummer3 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("NO(from above): the water park has decided that to stay in business they are going to have to truck in 9,000 gallons of water daily from an source outside the watershed. The park estimates cost will exceed $70,000 which they plan on paying for with an increased ticket price.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 467;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,471,89);


(lib.AbDrySummer2 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("YES (from above) Drought conditions are worsening. Because you conserved water by proactively setting restrictions in the Spring, there is still water in the reservoir. Those restrictions are still in effect through the summer but could have been much worse.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 468;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,472,83);


(lib.AbDrySummer1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("NO (from above): Drought conditions are worsening. The reservoir has completely dried up and the city is now solely reliant on the aquifer as a water source. The mayor has no choice but to issue Level 3 “Extreme Drought” Restrictions modified to reflect the severity of the situation:\n- Yard watering has been completely banned. $500 fine\n- water rates have risen 10%\n- no car washing is allowed, $500 fine\n- the area water park is not allowed\nto withdraw any more water\n- rationing is in effect: residents are\nonly allowed 125 gallons per day before their water is cut off", "9px 'Microsoft Sans Serif'");
	this.text.lineHeight = 11;
	this.text.lineWidth = 467;
	this.text.setTransform(0,-7);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-7,471,124);


(lib.AbDrySpring3 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("NO: The reservoir and aquifer levels continue to drop. Summer approaches.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 460;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,464,89);


(lib.AbDrySpring2 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("YES: Suburbia residents are not happy with the “water cops” patrolling their neighborhoods. A few defy the restrictions and are heavily fined. But most residents understand the restrictions are necessary and follow the rules.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 464;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,468,87);


(lib.AbDrySpring1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Drought-like conditions continue. The mayor has come to you for guidance in preparation for the high likelihood of drought conditions continuing into the summer. Should you advise the mayor to issue Level 3 “Extreme Drought” Restrictions? These ordinances as follows:\n• Citizens who use more than their allotment will pay increased water rates.\n• No charity car washes allowed.\n• Yard watering is not allowed between 8am and 6pm only on odd-numbered days.\n• Citizens are not allowed to fill swimming pools.\n• Violators will be fined.", "9px 'Microsoft Sans Serif'");
	this.text.lineHeight = 11;
	this.text.lineWidth = 480;
	this.text.setTransform(-9,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9,0,484,99.6);


(lib.AbDryFall3 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("BOTH - Late fall brings welcome precipitation to Suburbia! Snow is falling in the mountains and the increased precipitation is predicted to continue through the winter. Projections show that water levels will pull Suburbia out of the severe drought but will take some time to fully recover.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 474;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,478,89);


(lib.AbDryFall2 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("YES (from above): Drought conditions continue. The reservoir is nearly dry. City officials are considering mandatory water rationing.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 466;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,470,94);


(lib.AbDryFall1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("NO (from above): Many residents have had enough of the water restrictions and have decided to move. Most grass throughout the city has died. Precipitation is still very infrequent even though summer is over.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 472;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,476,89);


(lib.AbColdWinter2 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("The extreme cold weather is causing water pipes to burst in many area homes and frozen fire hydrants.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 473;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,477,93);


(lib.AbColdWinter1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("NEWS FLASH: As the extreme winter cold continues many residents are reporting malnourished deer coming down from the mountains looking for food. Residents are asked to be mindful of deer on the roads.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 471;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,475,100);


(lib.AbColdSummer2 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("NO: You decide to keep the swimming hole beaches open. Coliform bacteria from fecal matter in the untreated sewage begin to multiply. Swimmers exposed to the contaminated water are reporting nausea, vomiting and diarrhea. Several infants and elderly people are admitted to the hospital for treatment due to exposure to a particular pathogen which caused a severe liver infection.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 474;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,478,95);


(lib.AbColdSummer1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("YES: You issue closures of the beaches angering citizens looking to get cool in the hot summer weather.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 475;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,479,71);


(lib.AbColdSpring = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("NEWS FLASH: The snowpack is finally melting. Since it is late in the season, the runoff is higher than normal. Water runoff from storm drains and sewers usually travels through the wastewater treatment plant. However, since the flows are higher than normal, raw sewage overflows, bypassing the plant and entering the river. Should you close access to the contaminated area swimming holes?", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 478;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,482,95);


(lib.SuburbiaTitle = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Sprawl", "18px 'Microsoft Sans Serif'", "#666666");
	this.text.lineHeight = 20;
	this.text.lineWidth = 118;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,122,75.1);


(lib.SuburbiaDescription = function() {
	this.initialize();

	// water use
	this.instance = new lib.WaterUse();
	this.instance.setTransform(-10,208.8,0.515,0.515);

	// text
	this.text = new cjs.Text("Suburbia\nPopulation: 543,232\nPower Source: Natural gas power plant\nPrimary Housing Type: Low-Density Urban Sprawl\nDescription: This city is a mix of single-family homes, shopping center complexes and golf courses. Most homes also have swimming pools and large lawns with non-native turf grass. There is a large water park on the outskirts of town. Some housing developments were built on former wetlands.", "12px 'Microsoft Sans Serif'", "#666666");
	this.text.lineHeight = 14;
	this.text.lineWidth = 209;

	this.addChild(this.text,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10,0,227,347.2);


(lib.Seeareport = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("See a report on your\nwatershed managment \ndecisions", "22px 'Microsoft Sans Serif'");
	this.text.lineHeight = 24;
	this.text.lineWidth = 377;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,381,173.3);


(lib.Returntothe = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Return to the \nhomescreen and run \nanother simulation", "22px 'Microsoft Sans Serif'");
	this.text.lineHeight = 24;
	this.text.lineWidth = 337;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,341,162.3);


(lib.rectangle = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EglHgIHMBKPAABQBQAAAABQIAANuQAABQhQAAMhKPgABQhQAAAAhQIAAtuQAAhQBQAAg");
	this.shape.setTransform(245.6,52.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(153,153,153,0.749)").s().p("EglHAIGQhQABAAhRIAAttQAAhQBQAAMBKPAACQBQAAAABQIAANtQAABQhQAAg");
	this.shape_1.setTransform(245.6,52.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,493.3,106.1);


(lib.Precipitationlabel = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("PRECIPITATION", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 99;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,103,24.1);


(lib.NO = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("NO", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 18;
	this.text.setTransform(33.5,11.9);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(33.5,11.9,22,17.5);


(lib.NextButton = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("continue", "12px 'Microsoft Sans Serif'", "#333333");
	this.text.lineHeight = 14;
	this.text.lineWidth = 46;
	this.text.setTransform(5,6.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E4FFFF").s().p("Aj+CVQgoAAAAgnIAAjbQAAgoAoAAIH8AAQApAAAAAoIAADbQAAAngpAAg");
	this.shape.setTransform(29.5,15);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,59,30);


(lib.NormalTempFall3 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("The pollution pumping of the aquifer is taking a toll on city water supplies. The water authority has had to raise rates for citizens as a result.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 475;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,479,92);


(lib.NormalTempFall2_1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("The investigation has traced the source of the contamination to a single factory. The factory is being ordered to pump a contained portion of the polluted water out of the aquifer, piping it into another facility where it will be cleaned and then piped into the river. A new water treatment plant will need to be built specifically to treat water drawn from the aquifer. This will cost $50 million.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 475;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,479,93);


(lib.NormalTempFall1_1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Routine testing of the city’s aquifer have revealed some troubling results. The aquifer has become highly contaminated with industrial pollutants. An investigation is underway to determine the source of the pollution.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 475;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,479,93);


(lib.NormalPrecipWinter2 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("The city is considering two options to increase the water supply: a transbasin pipeline or a new reservoir. The pipeline would be more expensive and hinge on securing water rights deals but would provide 40% more water in the long run than the reservoir. The reservoir would provide a cost-effective solution but might not meet needs when demand further increases as the city grows in the more distant future. Should the city build a new pipeline to bring in groundwater from another watershed hundreds of miles away or should they build a new reservoir in the city’s own watershed just outside of town?", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 477;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,481,110.9);


(lib.NormalPrecipWinter1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("A large technology company has built a massive new data center facility in Metropolis that has led to a sudden and dramatic population increase. This new facility will require several thousand gallons of water daily to keep the computers cool. Increasing water demand is stressing current supplies.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 476;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,480,92);


(lib.NormalPrecipSummer2 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("IF PIPELINE: Although some ranch owners in the other watershed opposed the development, the water rights have been secured. Pipeline construction has been fast- tracked due to shortages being experienced in Metropolis.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 478;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,482,97);


(lib.NormalPrecipSummer1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("IF RESERVOIR: The dam for the reservoir has been built and the reservoir is beginning to fill.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 467;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,471,95);


(lib.NormalPrecipSpring2_1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("IF PIPELINE: You have decided to build the water pipeline. A feasibility study has been conducted for the project. This option is more expensive than the reservoir so you will need to impose a tax on the businesses and citizens of Metropolis to fund this project. A business interest group believes this tax should be put to a vote. The counsel agrees and a vote is held. Although most citizens are lukewarm about the project, the tax passes and the project moves forward.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 470;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,474,95.3);


(lib.NormalPrecipSpring1_1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("IF RESERVOIR: You have chosen to build a new reservoir. This involves diverting water from the river using a small concrete dam. The reservoir will form in former grassland used for grazing cattle. The construction effort gets underway.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 471;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,475,94);


(lib.NormalPrecipFall2_1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("IF PIPELINE: The pipeline is finished and water is flowing into Metropolis from the other watershed. Metropolis now has a surplus of water which it could sell to other areas in need of water. At the groundwater withdraw site at the other end of the pipeline however ranchers report a drawdown in their wells that are causing their ranches to go dry. Metropolis will need to monetarily compensate the ranchers for their loss. Some ranchers have decided to take the money and leave their land to ranch elsewhere. Some others have decided to sue the city of Metropolis.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 474;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,478,110.9);


(lib.NormalPrecipFall1_1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("IF RESERVOIR: The reservoir is full and the city is already beginning the benefit from the increased water supply. However, the new dam has changed the water temperature on each side. Since the water is released from the bottom, the water is colder favoring cold-water fish. Warm-water fish populations have dramatically declined. Metropolis must now invest in installing a system to try to restore the water temperature to pre-dam conditions.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 474;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,478,97);


(lib.AbWetWinter3 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("NO: NEWS FLASH: 3 skiers were caught in an avalanche this morning in the east canyon. Rescue operations were dispatched but they were too late.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 468;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,472,95);


(lib.AbWetWinter2 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("YES: Avalanches have been triggered in the zones of highest probability. No fatalities due to avalanche have been reported. Good work.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 470;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,474,97);


(lib.AbWetWinter1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Avalanche danger is extremely high due to increased precipitation. Should you advise triggering avalanches in the most dangerous areas?", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 474;
	this.text.setTransform(-5,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5,0,478,93);


(lib.AbWetSummer3_1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("UPDATE: An estimated 80,000 gallons of oil have been released in the refinery flood. Area homes are covered in oil. The refinery company is buying up homes and commercial buildings in the area in an effort to remediate the damage. 700 people have moved out of Metropolis permanently.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 474;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,478,96);


(lib.AbWetSummer2_1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("UPDATE: The flood has breached the levees surrounding the petroleum refinery. The refinery is now covered in 5 feet of water and massive amounts of oil are flowing into the flood water and through the sections of the city around the refinery. The EPA has arrived and is working to keep the oil from flowing to the towns downstream. FEMA is working to house flood victims.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 474;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,478,98);


(lib.AbWetSummer1_1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("NEWS FLASH: a 24 hour period of steady rain has resulting in major flooding citywide. The river has crested 10 feet above the flood stage. Several factories, including an electronics manufacturer and automotive parts factory have temporarily closed.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 477;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,481,98);


(lib.AbWetSpring = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("(if ab. cold do this in summer) NEWS FLASH: The snowpack is melting rapidly and the river is overflowing as a result. Erosion along the banks of the river has caused train tracks to collapse. Commuters are not able to get to work via the train and product deliveries are unable to enter or leave Metropolis.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 474;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,478,93);


(lib.AbWetFall = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Metropolis has been slow to recover from the flood disaster. Most of the buildings around the refinery have been razed. The landscape is largely deserted. Shoreline clean-up continues to remove oil residues near waterways. Luckily, tests show that oil has not contaminated the groundwater in harmful amounts.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 476;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,480,95);


(lib.abhotwinter = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("NEWS FLASH: Due to unusually high temperatures this winter, we are getting more rain than snow. The mountain snowpack is only 20% of normal. The ski resorts are experiencing a reduction in revenue due to lack of snowpack.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 477;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,481,93);


(lib.AbhotSummer2 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("NEWS FLASH: The heated storm water runoff has caused a rapid 19oF temperature increase in streams. Ecologists working in the area report that the warmer temperatures have caused an algal bloom which is stressing the fish population.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 473;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,477,100);


(lib.AbhotSummer1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("A cool summer storm has hit Metropolis. Because the city is so heavily developed and is an “urban heat island”, pavement temperatures are currently hotter than 100oF. The rain hitting the pavement is heating up and running off into the river.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 472;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,476,100);


(lib.AbhotSpring = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("NEWS FLASH: The mountain snowpack has melted in just one week due to high temperatures.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 472;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,476,90.1);


(lib.AbhotFall5 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Day 10: The water pipe has been repaired and is functioning normally again. However, a major bakery that had closed during the crisis was unable to recover from the financial loss and has closed for good. Residents are beginning the return to the city.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 473;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,477,93);


(lib.AbhotFall4 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Day 5: The pipe is still non-functional. Several area coffee shops and diners have closed. Some residents are even leaving town. The business that was flooded remains closed as it continues to clean up.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 468;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,472,95);


(lib.AbhotFall3 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("NO: Panicked citizens are rushing to the stores to buy bottled water. The stores have sold out of water in a matter of hours. Citizens are beginning to form angry mobs and are demonstrating against how the city is handling the crisis. Workers are repairing the pipe as quickly as possible but it will take several days.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 473;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,477,95);


(lib.AbhotFall2 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("YES: You have turned on the emergency water supply. However, since water from this source is untreated, you issue a “boil order” to all citizens and businesses. Some people didn’t get the “boil order” information and are drinking the untreated water. Hospitals are reporting patients entering with severe gastrointestinal pain. Workers are repairing the pipe as quickly as possible but it will take several days.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 470;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,474,96);


(lib.AbhotFall1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("The record heat has burst a major water pipe in Metropolis. As the hot ground dried up, the aging pipes shifted and ruptured under the stress. As a result, the water supply has been cut off for much of the city and several areas businesses are roads have flooded. Should you turn on the emergency water supply system reserve to provide drinking water to the city?", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 469;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,473,92);


(lib.AbDryWinter_1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("- NEWS FLASH: There has been less precipitation this winter than normal. Climatologists predict that if these conditions persist Metropolis could experience a severe drought this summer.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 477;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,481,95);


(lib.AbDrySummer4_1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("NEWS FLASH: The city is now fully dependent on groundwater from the aquifer. The reservoir has now dried up. [if had answered NO to above decision] The large beverage manufacturer has decided to move its operation to another state. City revenue lost: $550,000.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 473;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,477,94);


(lib.AbDrySummer3_1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("NO: The reservoir demand has not\nbeen decreased and continues to be depleted at a rapid rate.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 475;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,479,93);


(lib.AbDrySummer2_1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("YES: The factory is outraged and\ndecides to move its operations out of Metropolis to another state. City revenue lost: $550,000.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 471;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,475,110.9);


(lib.AbDrySummer1_1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("A large beverage company draws water from the river to manufacture its products. They say this water provides their beverages with its unique taste. The reservoir feeding the river is running dry. Should you force the factory to use groundwater instead or allow it to continue using river water?", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 476;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,480,94);


(lib.AbDrySpring4 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("NO: The reservoir and aquifer levels continue to drop. Summer approaches.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 476;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,480,91);


(lib.AbDrySpring3_1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("YES: Many Metropolis citizens and business owners are outraged. A few defy the restrictions and are heavily fined. But most residents understand the restrictions are necessary and follow the rules.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 476;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,480,78);


(lib.AbDrySpring2_1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("With little rain, drought-like conditions continue. The mayor has come to you for guidance in preparation for the high likelihood of drought conditions continuing into the summer. Should you advise the mayor to issue Level 3 “Extreme Drought” Restrictions? These ordinances as follows:\n• Citizens who use more than their allotment will pay increased water rates.\n• Restaurants must only serve water on request.\n• Hotels must limit linen changes to once every three days.\n• Watering for urban landscape areas is strictly prohibited.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 477;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,481,126.4);


(lib.AbDrySpring1_1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text(" Mountain snowpack has melted but the meager snow level means reservoir volume is still much lower than average.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 476;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,480,94);


(lib.AbDryFall3_1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Climatologists say an end to the drought may be in sight. Models predict a high chance for an el nino event in the coming year.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 467;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,471,95);


(lib.AbDryFall2_1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Because of the continued water shortage, water rates have risen substantially for all Metropolis residents.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 463;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,467,93);


(lib.AbDryFall1_1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("NEWS FLASH: A large office building has collapsed. The collapse is believed to be due to recent surge in groundwater extraction which caused the land beneath the building to sink - a phenomenon known as subsidence.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 470;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,474,95);


(lib.AbColdWinter2_1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("UPDATE: crews working overnight have freed the ice and water has begun to flow into the municipal system again.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 475;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,479,96);


(lib.AbColdWinter = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("NEWS FLASH: water intake valves from the river have frozen over. This has caused a blockage in municipal water for the city. The water remaining in the system is quickly running out. Residents and businesses are being asked to conserve water. Fire hydrants have already run out of water and the fire department is bringing in trucks of water from neighboring towns.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 473;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,477,95);


(lib.AbColdSpring_1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("NEWS FLASH: Due to the abnormally cold conditions, the snowpack remains frozen in the mountains. Because the snow is not melting when expected, the city is experiencing a slight, temporary water shortage.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 462;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,466,92);


(lib.AbColdFall = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("As already lower than normal temperatures grow colder entering fall, fish and other organisms are being drawn to the warm water released into the river from the coal- fired power plant. The area is becoming a micro-climate with non- native aquatic plant life and algae.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 475;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,479,96);


(lib.MetropolisTitle = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Industrial", "18px 'Microsoft Sans Serif'", "#666666");
	this.text.lineHeight = 20;
	this.text.lineWidth = 141;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,145,29.6);


(lib.MetropolisDescription = function() {
	this.initialize();

	// graph
	this.instance = new lib.WaterUse();
	this.instance.setTransform(0,259,0.506,0.506);

	// text
	this.text = new cjs.Text("Metropolis\nPopulation: 1,445,632\nPower Source: Steam-cycle coal power plant Primary Housing Type: Condo/Apartment\nDescription: Metropolis is a major corporate and industrial manufacturing hub. The headquarters of four Fortune 500 companies dominate downtown Metropolis with large skyscrapers. The city is also home to a variety of manufacturing businesses producing products like semiconductors, apparel, beverages and pharmaceuticals. There is also a large petroleum refinery on the outskirts of town. Most of this city’s residents live in one of the many large apartment or condo complexes.", "12px 'Microsoft Sans Serif'", "#666666");
	this.text.lineHeight = 14;
	this.text.lineWidth = 218;

	this.addChild(this.text,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,223,395);


(lib.NormalTempWinter = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("The Environmental Advisory Committee for the city of Eco- City has put forth a proposal for an Aquifer Protection Plan. This plan puts limits on development in some of the more sensitive land areas above the aquifer. These are areas in the foothills where the aquifer is recharged. Should you approve the Aquifer Protection Plan?", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 474;
	this.text.setTransform(25,33);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(25,33,478,94);


(lib.NormalTempSummer = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("if no: The city government is considering a proposal to purchase several thousand acres in the aquifer recharge zone to ensure that it doesn’t fall prey to development.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 474;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,478,85);


(lib.NormalTempSpring03 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("if no: Following review from city officials and public hearings it was determined that there is nothing preventing the golf course expansion. The request was approved.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 475;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,479,90);


(lib.NormalTempSpring02 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("if yes: Following review from city officials and public hearings it was determined that the golf course expansion would conflict with the new Aquifer Protection Plan. The request was denied.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 471;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,475,93);


(lib.NormalTempSpring01 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("The city has received a request for approval of a several million dollar expansion plan by a golf course below the foothills.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 473;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,477,88);


(lib.NormalTempFall = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("The golf course has been built and has now been in operation for several months. Since the golf course irrigation is via graywater there has been little impact on water allocation. Unfortunately however, pesticides applied at the golf course have already been detected in the aquifer. The city is demanding that, to stay in operation, the gold course is no longer allowed to use pesticides. Golfers are concerned that without pesticides, the course will be ruined with weeds, fungus and disease. The greenskeepers for the golf course have begun the slow process of converting the grass type to a more naturally disease resistant variety.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 476;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,480,126.4);


(lib.NormalPrecipWinter_1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("The power company is interested in installing wind energy turbines along the foothills of the city. The goal would be to dramatically reduce and eventually phase out the thermoelectric coal power plant which uses water from the river for cooling and emits CO2 into the atmosphere. Farmers and ranchers in the area are excited because the power company is offering $4,000 per turbine per year to lease their land for the wind farm. Should the city authorize the power company to build a wind farm?", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 472;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,476,96);


(lib.NormalPrecipSummer_1 = function() {
	this.initialize();

	// Layer 1
	this.text_1 = new cjs.Text("if yes: the wind farm is now in operation. Nearby residents are complaining of the low frequency hum that turbines produce. However, as was hoped, the wind farm is generating enough energy to drastically reduce the output needed from the thermoelectric coal plant to power the city.", "12px 'Microsoft Sans Serif'");
	this.text_1.lineHeight = 14;
	this.text_1.lineWidth = 470;

	this.addChild(this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,474,94);


(lib.NormalPrecipSpring = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("if yes: construction has begun on the wind farm. Some residents are concerned about how the wind farm will change the appearance of the landscape.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 475;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,479,83);


(lib.NormalPrecipFall = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("If yes: water withdrawals by the thermoelectric power plant has been greatly reduced by the new wind farm. Withdraws have been reduced by half. Encouraged by this news the power company is setting the goal for the coming year to build another set of turbines that will completely replace the thermoelectric coal plant. The city should be powered solely by hydroelectric and wind in 2 years.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 470;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,474,98);


(lib.AbWetSummer = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("An unusually wet spring has meant mosquitos are out early and in larger numbers. Fortunately experts say these mosquitos aren’t the ones that typically carry the West Nile Virus, which thrive in hot, dry conditions.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 475;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,479,96);


(lib.AbWetSpring02 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("NEWS FLASH: heavy spring rains caused a sinkhole to open in a residential area swallowing a house this morning. Luckily the residents were not at home when the accident occurred.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 220;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,224,110.9);


(lib.AbWetSpring01 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Heavy rains have caused flood gates to fail in one section of the hydroelectric dam releasing a large volume of water. Fortunately, most flood waters were absorbed by the wetland below the dam before and flood levels in the city were very low.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 475;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,479,91);


(lib.AbHotWinter = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("NEWS FLASH: As the unusually warm winter weather continues black bears are coming out of hibernation early. Black bears are being spotted on the trails of area ski resorts looking for food. Park officials warn people to keep their distance from them since bears are very hungry and can become aggressive.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 478;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,482,94);


(lib.AbHotSummer02 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("The foothill fire was successfully put out. However, a moderate thunderstorm has rolled into the area and, because of the lost vegetation and changes in the soil that reduce water percolation, the entire slope is failing and an extreme amount of sediment (mostly burned timber) is being washed down the hillside into the mountain streams and earthen dam reservoir at an accelerated rate. The sediment is scouring the hillside and causing deep channels and gullies to form. Because of the amount of sediment this is being considered a 1,000 year flood event. Many streams leading feeding water into the reservoir have been blocked. Restoration efforts are underway to clear debris and restore flow. The water quality in the earthen dam reservoir has been compromised and won’t be a viable water source until the sediment settles out.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 473;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,477,157.5);


(lib.AbHotSummer01 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("A wildfire has broken out in the foothills due to the high summer temperatures. This is a very hot fire so firefighters are having some difficulty putting it out.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 474;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,478,93);


(lib.AbHotSpring = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Higher than average summer temperatures have meant that landscaping plants need more water than usual. The city is increasing its nighttime graywater irrigation in parks with grass. Even some areas of xeriscaped plantings are needing some supplemental water.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 476;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,480,97);


(lib.AbHotFall = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("The sediment has settled out in the earthen dam reservoir. The remaining debris in the water is considered improved habitat for fish, exciting local anglers for favorable fishing conditions.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 474;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,478,92);


(lib.AbDryWinter_2 = function() {
	this.initialize();

	// Layer 1
	this.text_1 = new cjs.Text("There has been very little snow this winter. As a result many of the ski resorts have had to resort to making snow for the slopes.", "12px 'Microsoft Sans Serif'");
	this.text_1.lineHeight = 14;
	this.text_1.lineWidth = 474;

	this.addChild(this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,478,96);


(lib.AbDrySummer03 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Routine aquifer monitoring has shown that despite the unusually dry conditions, the aquifer levels remain normal for this time of year. This may be due to the near universal use of pervious concrete throughout the city which allows what little rain we are getting this year to penetrate the soil and recharge the groundwater in the aquifer.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 475;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,479,95);


(lib.AbDrySummer02 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Due to the draw down by the power company, the earthen dam reservoir level is now so low that it has been closed to boaters.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 474;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,478,97);


(lib.AbDrySummer01 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("The dry conditions are continuing", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 474;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,478,92);


(lib.AbDrySpring = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("The power company, who owns rights for storage water in the earthen dam reservoir, has decided to invoke those rights to use that water this summer for cooling water at the power plant due to the severe drought.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 474;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,478,97);


(lib.AbColdSummer = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("The cold, wet weather is taking a toll on area butterflies, including several endangered species. Volunteer wildlife monitors are reporting butterflies were emerging later than usual in the spring. They also noticed quite a few cocoons were rotten due to the wet weather. As the cold temperatures continue conservationist worry that they won’t be active and breeding in time.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 480;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,484,102);


(lib.AbColdSpring02 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("The weather is finally warming somewhat and the large snow accumulations built up over the winter on the side of the road are melting rapidly. As a result, deicing chemicals have been detected in the groundwater. Since elevated sodium in water can be harmful, the city is investigating new options for controlling road ice next year such as calcium chloride and pretreating roads.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 472;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,476,97);


(lib.AbColdSpring01 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("The temperatures are staying unusually cold which means the roads are still receiving doses of deicer, salt and sand to control ice.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 475;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,479,96);


(lib.LIDCityTitle = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("LID City", "18px 'Microsoft Sans Serif'", "#666666");
	this.text.lineHeight = 20;
	this.text.lineWidth = 119;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,123,33.6);


(lib.LIDCityDescription = function() {
	this.initialize();

	// graph
	this.instance = new lib.WaterUse();
	this.instance.setTransform(6,328.5,0.628,0.628);

	// text
	this.text = new cjs.Text("LID-City\nPopulation: 612,879\nPower Source: Mix of Wind, Solar, Natural Gas and\nHydroelectric\nPrimary Housing Type: Mix of medium-density single family homes, condos and apartments.\nDescription: The city center is home to several large corporate offices and condo/apartment complexes. These skyscrapers have rooftop gardens maintained by residents. Pervious concrete parking lots and streets allow water to easily pass through. Many eco-city residents harvest rainwater to use for irrigating lawns and gardens. Yards are typically xeriscaped. Local farmers grow water-wise crops such as beans, melons, squash and onions. The city has enacted zoning ordinances that prohibit the development of wetland areas. Recycled and reclaimed city water (also called “greywater”) is used for irrigating parks, golf courses and crops, flushing toilets in commercial buildings, car washes and for cooling in the natural gas power plant.", "12px 'Microsoft Sans Serif'", "#666666");
	this.text.lineHeight = 14;
	this.text.lineWidth = 288;

	this.addChild(this.text,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,292,497.5);


(lib.CityTypeLID = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("CITY TYPE: SUBURBIA", "19px 'Microsoft Sans Serif'");
	this.text.lineHeight = 21;
	this.text.lineWidth = 400;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,404,30.1);


(lib.NormalTempWinter_1 = function() {
	this.initialize();

	// Layer 1
	this.text_1 = new cjs.Text("Climatologists are predicting an El Nino weather event that will create favorable growing conditions in the United States. This is good news for farmers in our watershed. With this news, many farmers are deciding the plant early with the anticipated warmer temperatures and ideal moisture conditions.", "12px 'Microsoft Sans Serif'");
	this.text_1.lineHeight = 14;
	this.text_1.lineWidth = 474;

	this.addChild(this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,478,100);


(lib.NormalTempSummer_1 = function() {
	this.initialize();

	// Layer 1
	this.text_1 = new cjs.Text("The experimental drip irrigation project is now installed and is already showing some interesting results. The farmers unexpectedly discovered they would need to use less fertilizer. Since the fertilizer can be applied through the drip system to more specific areas the farmers found they used 30% less this season compared to last season with the same growth results, this reducing groundwater contamination.", "12px 'Microsoft Sans Serif'");
	this.text_1.lineHeight = 14;
	this.text_1.lineWidth = 474;

	this.addChild(this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,478,92);


(lib.NormalTempSpring = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("An agency in FarmTown was applied for and received a $50,000 water conservation grant from the state. Their project is to install a drip irrigation system for a 60 acre potato field to replace their traditional sprinkler irrigation system.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 474;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,478,93);


(lib.NormalTempFall_1 = function() {
	this.initialize();

	// Layer 1
	this.text_1 = new cjs.Text("The results are in for the drip irrigation study. The experimental potato field used less water than traditional irrigation methods but it also had some additional unexpected benefits including increased yields, increased quality and increased uniformity. There was also an overall reduction in fertilizer, energy, labor and chemical costs. Since the plants themselves don’t get wet with this kind of irrigation, disease was also drastically reduced. Because of these results, other area farmers are interested in trying it out on their fields. However, switching over to drip irrigation is too expensive for most farm budgets. Should you work to create an incentive program for farmers to encourage and enable more farms to switch to drip irrigation? (this would be a benefit you would see as the activity s developed to support more years)", "12px 'Microsoft Sans Serif'");
	this.text_1.lineHeight = 14;
	this.text_1.lineWidth = 472;
	this.text_1.setTransform(-98.9,108);

	this.addChild(this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-98.9,108,475.9,157.5);


(lib.NormalPrecipWinter_2 = function() {
	this.initialize();

	// Layer 1
	this.text_1 = new cjs.Text("A underground coal gasification company is requesting an aquifer exemption in order to set up an operation in FarmTown. Coal gasification is a process where a coal seam deep underground is heated to very high temperatures that cause the solid coal to turn into gas which can then be extracted and used for fuel. The process produces toxins and so is restricted to aquifers which are not currently used for drinking water. The company would burn a small section of FarmTown’s aquifer. They are requesting that this portion of the aquifer be considered an “exempted aquifer” because it isn’t used for agriculture or drinking water. Once an aquifer is classed as exempted, the exemption is permanent. The company is required to hold a public hearing next month.", "12px 'Microsoft Sans Serif'");
	this.text_1.lineHeight = 14;
	this.text_1.lineWidth = 470;

	this.addChild(this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,474,142);


(lib.NormalPrecipSummer_2 = function() {
	this.initialize();

	// Layer 1
	this.text_2 = new cjs.Text("if yes: The portion of the aquifer for the coal gasification project is now classified as exempted. This means that it is no longer protected as a future water source for the town. The coal gasification project is now in operation.", "12px 'Microsoft Sans Serif'");
	this.text_2.lineHeight = 14;
	this.text_2.lineWidth = 476;

	this.addChild(this.text_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,480,96);


(lib.NormalPrecipSpring2_2 = function() {
	this.initialize();

	// Layer 1
	this.text_1 = new cjs.Text("Criminal charges have been filed against the coal gasification company for environmental harm allegedly caused at one of their facilities in another country. The charges do not include water contamination and the company says that facility was using a different process than the improved process they propose to use at the FarmTown site. Should the company be granted an aquifer exemption?", "12px 'Microsoft Sans Serif'");
	this.text_1.lineHeight = 14;
	this.text_1.lineWidth = 472;

	this.addChild(this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,476,97);


(lib.NormalPrecipSpring1_2 = function() {
	this.initialize();

	// Layer 1
	this.text_1 = new cjs.Text("The coal gasification held the public hearing about the project. A livestock farmer who owns property next to the proposed site is concerned about the possibility of groundwater contamination. The company reassured concerned citizens that previous test projects have kept the toxins confined to a small area around the seam and cleaned up once the coal was depleted.", "12px 'Microsoft Sans Serif'");
	this.text_1.lineHeight = 14;
	this.text_1.lineWidth = 474;

	this.addChild(this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,478,94);


(lib.NormalPrecipFall_1 = function() {
	this.initialize();

	// Layer 1
	this.text_1 = new cjs.Text("if yes: The livestock farmer with property near the coal gasification project has discovered his well is dry and would like to drill a new one to use for livestock water. He has discovered that the new well would have to be drilled in an area that would tap into a portion of the aquifer being contaminated by the coal gasification project. In order to get clean water the livestock farmer is looking for other areas on his land he could drill a new well. (in a multiple year scenario, we could explore more outcomes for this operation)", "12px 'Microsoft Sans Serif'");
	this.text_1.lineHeight = 14;
	this.text_1.lineWidth = 476;

	this.addChild(this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,480,95.3);


(lib.AbWetWinter2_1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("if no: following your denial of the proposed chicken farm location, the farmer has submitted a revised plan in which his chicken farm is located on the other side of his property away from the river. Should the farmer be allowed to build in the new location?", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 480;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,484,96);


(lib.AbWetWinter1_1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("A farmer has submitted a planning application to build a large chicken farm on his land which is on the bank of the river. The facility will house 300,000 birds. Should the farmer be allowed to build?", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 472;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,476,90);


(lib.AbWetSummer3_2 = function() {
	this.initialize();

	// Layer 1
	this.text_1 = new cjs.Text("spring flooding has caused the prices of corn and soybean futures to soar in expectation of the tight supply.", "12px 'Microsoft Sans Serif'");
	this.text_1.lineHeight = 14;
	this.text_1.lineWidth = 472;

	this.addChild(this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,476,102);


(lib.AbWetSummer2_2 = function() {
	this.initialize();

	// Layer 1
	this.text_1 = new cjs.Text("Meanwhile, last years corn in silos is\nbeginning to ferment from the moisture that remains. Farmers are having to hire companies to vacuum out the corn and have it dumped.", "12px 'Microsoft Sans Serif'");
	this.text_1.lineHeight = 14;
	this.text_1.lineWidth = 476;

	this.addChild(this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,480,102);


(lib.AbWetSummer1_2 = function() {
	this.initialize();

	// Layer 1
	this.text_1 = new cjs.Text("Corn farmers, who had presold their crops, have decided to replant despite expecting little yield being so late in the season.", "12px 'Microsoft Sans Serif'");
	this.text_1.lineHeight = 14;
	this.text_1.lineWidth = 473;

	this.addChild(this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,477,102);


(lib.AbWetSpring6 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("The rains are beginning to subside however, many fields remain flooded. Farming equipment has been destroyed for many farmers and some livestock remains stranded.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 473;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,477,102);


(lib.AbWetSpring5 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("The rain keeps coming. This has meant that most farmers are unable to plant their crops since the ground is too saturated. For those farmers that planted before the rain, the seedlings that have come up are getting drowned.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 471;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,475,102);


(lib.AbWetSpring4 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("if no then yes above: the river has started to overflow. The new chicken farm would have been severely flooded had it been built in the originally proposed location.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 473;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,477,102);


(lib.AbWetSpring3_1 = function() {
	this.initialize();

	// Layer 1
	this.text_1 = new cjs.Text("If yes above: the river has started to overflow and has flooded the newly built chicken farm on the riverbank. The farmer has lost all of this birds to the flood.", "12px 'Microsoft Sans Serif'");
	this.text_1.lineHeight = 14;
	this.text_1.lineWidth = 475;

	this.addChild(this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,479,102);


(lib.AbWetSpring2_1 = function() {
	this.initialize();

	// Layer 1
	this.text_1 = new cjs.Text("The rain continues. Most area homes are suffering from flooded septic systems. Despite the abundance of water outside our window, residents are asked to reduce their showering, dishwasher and washing machine use because a flooded septic system cannot take on anymore water.", "12px 'Microsoft Sans Serif'");
	this.text_1.lineHeight = 14;
	this.text_1.lineWidth = 474;

	this.addChild(this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,478,94);


(lib.AbWetSpring1_1 = function() {
	this.initialize();

	// Layer 1
	this.text_1 = new cjs.Text("FarmTown has gotten one month’s worth of rain in one day and it is still raining! The town is seeing massive flooding. Irrigation ditches are overflowing and the river is at a record high.", "12px 'Microsoft Sans Serif'");
	this.text_1.lineHeight = 14;
	this.text_1.lineWidth = 471;

	this.addChild(this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,475,97);


(lib.AbWetFall_1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("This year’s wet conditions have have devastated crop production in FarmTown. But officials note that the aquifer has been recharged to full capacity and the reservoirs are full. This means area farms are in a good position if next year turns out to be a dry one.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 472;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,476,92);


(lib.AbHotSummer3 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("A wildfire that had broken out in area grasslands has spread quickly to farm fields. Three fire crews have been dispatched to put out the blaze. Area farmers are donating their well water to help fight the blaze. Officials believe the fire was started when someone violated the “No Burn” order by burning trash on their property.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 476;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,480,94);


(lib.AbHotSummer2 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("The record breaking heat wave is causing many crops to fail. Farmers are reporting their crops of tomato, corn and broccoli are not doing well. More heat-tolerant crops like sorghum and okra are fairing well but few farmers are growing those crops.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 473;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,477,93);


(lib.AbHotSummer1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("if yes: a brief but very windy summer storm has caused much of the monolayer to accumulate on one side of the reservoir. The skimmers aren’t able to redistribute the material fast enough and much of the reservoir has been partially uncovered for several days. It is expected to take a few more days for the system to completely reform over the surface of the reservoir.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 475;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,479,95);


(lib.AbHotSpring2 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("if yes: application of the monolayer is done quickly and without any problems. Skimmers are installed along the edges of the reservoir so that if wind blows the material to one side it can be redistributed to the other side.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 476;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,480,106);


(lib.AbHotSpring1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("As temperatures are predicted to soar this summer, officials are looking at options to combat loss of water due to evaporation in the reservoir. A new company that installs monolayer systems has approached the town with a possible solution. Monolayers are composed of a chemical extracted from vegetable oil that spreads across a body of water and creates a very thin covering. This protective film on the surface prevents the water from evaporating. Testing has shown it isn’t toxic to animals, has no smell or taste and doesn’t inhibit boat traffic. However, monolayers are experimental and very little is known about how they perform in natural conditions. Should you try using a monolayer on the earthen dam reservoir to try to save water?", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 475;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,479,142);


(lib.AbHotFall2 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("if no: As summer draws to a close, evaporative loss is being measured at the earthen dam reservoir. An estimated 35.5 inches were lost to free water surface evaporation between May and October.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 473;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,477,92);


(lib.AbHotFall1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("if yes: as summer draws to a close, the monolayer system has proven effective in preventing evaporative loss from the reservoir despite the problems from the wind storm. Loss was reduced by 50% compared to last year.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 477;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,481,92);


(lib.AbDryWinter_3 = function() {
	this.initialize();

	// Layer 1
	this.text_2 = new cjs.Text("NEWS FLASH: snowfall has been infrequent this year and meteorologists are predicting dry conditions to continue into the spring.", "12px 'Microsoft Sans Serif'");
	this.text_2.lineHeight = 14;
	this.text_2.lineWidth = 476;

	this.addChild(this.text_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,480,82);


(lib.AbDrySummer2_2 = function() {
	this.initialize();

	// Layer 1
	this.text_1 = new cjs.Text("NEWS FLASH: The House of\nRepresentatives have introduced a bill that would override water protections in place to maintain the ecosystem of the wetlands in FarmTown. The bill would modify those protections to enable farmers to withdraw more water. Writers of the bill argue that these changes are necessary measures to keep farms afloat in the severe drought. Environmentalists argue that removing the protections would come at the cost of a vital natural ecosystem in the town. Should you support or oppose this effort?", "12px 'Microsoft Sans Serif'");
	this.text_1.lineHeight = 14;
	this.text_1.lineWidth = 471;

	this.addChild(this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,475,110.9);


(lib.AbDrySummer1_2 = function() {
	this.initialize();

	// Layer 1
	this.text_1 = new cjs.Text(" Neighbors of the residents who deepened their wells earlier in the spring are reporting dry wells. They claim their neighbors newly deepened wells have drained the water below the levels of their existing wells. They are having to bring water in from tanks outside the home.", "12px 'Microsoft Sans Serif'");
	this.text_1.lineHeight = 14;
	this.text_1.lineWidth = 461;

	this.addChild(this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,465,90);


(lib.AbDrySpring_1 = function() {
	this.initialize();

	// Layer 1
	this.text_1 = new cjs.Text("State regulators have ordered a group of small farms to shut down their irrigation pumps bringing water from the river. Since the water level in the river is low, a sprawling large-scale farm upstream has decided to invoke their senior (older) water rights status.", "12px 'Microsoft Sans Serif'");
	this.text_1.lineHeight = 14;
	this.text_1.lineWidth = 478;

	this.addChild(this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,482,95);


(lib.AbDryFall = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("as summer draws to a close, farmers growing water-thirsty crops like alfalfa, wheat and cotton have fared more poorly than those growing crops that need less water like beans, squash, melons and onions. Those farms that lost crops will receive crop insurance payments.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 476;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,480,92);


(lib.AbColdWinter_1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("The excessively cold weather is greatly stressing livestock.\nIt is also proving to be more work for livestock farmers who have to heat water for animals to drink since it is frozen over.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 467;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,471,97);


(lib.AbColdSummer2_1 = function() {
	this.initialize();

	// Layer 1
	this.text_1 = new cjs.Text("Temperatures remain low as what little crops survived the cold snap and frost are beginning to reach maturity.", "12px 'Microsoft Sans Serif'");
	this.text_1.lineHeight = 14;
	this.text_1.lineWidth = 472;

	this.addChild(this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,476,97);


(lib.AbColdSummer1_1 = function() {
	this.initialize();

	// Layer 1
	this.text_1 = new cjs.Text("An unusual summer frost has further stressed what remaining crops there are from the colder than normal spring.", "12px 'Microsoft Sans Serif'");
	this.text_1.lineHeight = 14;
	this.text_1.lineWidth = 474;

	this.addChild(this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,478,93);


(lib.AbColdSpring5 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Testing has revealed that the heavy winter snow runoff has caused many private wells to have higher than normal nitrate concentrations in the water. In some homes it may be higher than is safe for consumption. The high nitrate concentration is due to farmers using manure on their fields in winter when it is more likely to end up in groundwater later.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 480;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,484,97);


(lib.AbColdSpring4 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("As the heavy amount of snow is finally beginning to melt in the mountains and the reservoirs are unfreezing, the resulting runoff is causing some localized flooding in the farmlands. Some farmers are reporting stressed animals due to large amounts of mud.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 475;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,479,94);


(lib.AbColdSpring3 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("A later spring cold snap that brought cold, freezing rain has killed many young seedlings. Some farmers are deciding to try replanting after the loss despite the already late start to the growing season. The cold snap also caused some livestock to spontaneously lose pregnancies.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 479;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,483,99);


(lib.AbColdSpring2 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("The continued cold temperatures have greatly delayed both planting of seeds and germination of those seeds that have already been planted.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 480;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,484,100);


(lib.AbColdSpring1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("if not wet year: Spring temperatures are remaining too cold to melt the snow in the mountains and the reservoirs remain frozen. This has meant that farmers are resorting to using groundwater from the aquifer to use for watering early crops.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 479;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,483,98);


(lib.AbColdFall_1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Farmtown was able to export very little of its food stocks at harvest time. Those farms that lost profit due to crop failure will receive crop insurance payments.", "12px 'Microsoft Sans Serif'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 468;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,472,94);


(lib.FarmTownTitle = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Agricultural", "18px 'Microsoft Sans Serif'", "#666666");
	this.text.lineHeight = 20;
	this.text.lineWidth = 119;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,123,77.6);


(lib.FarmTownDescription = function() {
	this.initialize();

	// graph
	this.instance = new lib.WaterUse();
	this.instance.setTransform(0,188.6,0.519,0.519);

	// text
	this.text = new cjs.Text("Farm Town\nPopulation: 25,867\nPower Source: Hydroelectric\nPrimary Housing Type: Single family homes on farm lots\nDescription: This small agricultural town grows alfalfa, wheat, corn and cotton. Livestock, primarily dairy cows and cattle, are also raised. This town is also home to a large cheese factory and slaughterhouse. All homes in Farm Town get their water from private wells.", "12px 'Microsoft Sans Serif'", "#666666");
	this.text.lineHeight = 14;
	this.text.lineWidth = 212;

	this.addChild(this.text,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,229,328.3);


(lib.CircleRed = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("ABkAAQAAApgeAdQgdAegpAAQgoAAgegeQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAogAAvAAQAAAUgOAOQgOAOgTAAQgTAAgOgOQgOgOAAgUQAAgTAOgOQAOgOATAAQATAAAOAOQAOAOAAATgABDAAQAAAdgVATQgTAUgbAAQgbAAgUgUQgUgTAAgdQAAgaAUgUQAUgTAbAAQAbAAATATQAVAUAAAag");
	this.shape.setTransform(10,10);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,22,22);


(lib.circle = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.749)").s().p("AgRARQgHgHAAgKQAAgJAHgIQAIgHAJAAQAKAAAHAHQAIAIAAAJQAAAKgIAHQgHAIgKAAQgJAAgIgIg");
	this.shape.setTransform(2.6,2.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,5.1,5.1);


(lib.Button = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AwOICQg9AAAAg7IAAuMQAAg9A9AAMAgeAAAQA7AAAAA9IAAOMQAAA7g7AAg");
	this.shape.setTransform(110,51.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,220,103);


(lib.YESbutton = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.YES();
	this.instance.setTransform(146.9,24,1,1,0,0,0,33.5,15);

	// Layer 1
	this.instance_1 = new lib.circle();
	this.instance_1.setTransform(126.8,17.2,5.61,5.61,0,0,0,2.6,2.6);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(112.2,2.6,29.4,28.6);


(lib.NormalNormal = function() {
	this.initialize();

	// text
	this.text = new cjs.Text("Normal Temperature\nNormal Precipitation", "19px 'Microsoft Sans Serif'");
	this.text.lineHeight = 21;
	this.text.lineWidth = 185;

	// button
	this.instance = new lib.Button();
	this.instance.setTransform(-19,-23.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19,-23.5,220,103);


(lib.NormalAbWet = function() {
	this.initialize();

	// text
	this.text = new cjs.Text("Normal Temperature\nAbnormally Wet", "19px 'Microsoft Sans Serif'");
	this.text.lineHeight = 21;
	this.text.lineWidth = 185;

	// button
	this.instance = new lib.Button();
	this.instance.setTransform(-22,-21.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22,-21.5,220,103);


(lib.NormalAbDry = function() {
	this.initialize();

	// text
	this.text = new cjs.Text("Normal Temperature\nAbnormally Dry", "19px 'Microsoft Sans Serif'");
	this.text.lineHeight = 21;
	this.text.lineWidth = 185;

	// button
	this.instance = new lib.Button();
	this.instance.setTransform(-23,-21.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23,-21.5,220,103);


(lib.AbHotNormal = function() {
	this.initialize();

	// text
	this.text = new cjs.Text("Abnormally Hot\nNormal Precipitation", "19px 'Microsoft Sans Serif'");
	this.text.lineHeight = 21;
	this.text.lineWidth = 185;

	// button
	this.instance = new lib.Button();
	this.instance.setTransform(-25,-18.2);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25,-18.2,220,103);


(lib.AbHotAbWet = function() {
	this.initialize();

	// text
	this.text = new cjs.Text("Abnormally Hot\nAbnormally Wet", "19px 'Microsoft Sans Serif'");
	this.text.lineHeight = 21;
	this.text.lineWidth = 150;

	// button
	this.instance = new lib.Button();
	this.instance.setTransform(-34,-22.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34,-22.5,220,103);


(lib.AbHotAbDry = function() {
	this.initialize();

	// text
	this.text = new cjs.Text("Abnormally Hot\nAbnormally Dry", "19px 'Microsoft Sans Serif'");
	this.text.lineHeight = 21;
	this.text.lineWidth = 157;
	this.text.setTransform(11.5,0,0.856,1);

	// button
	this.instance = new lib.Button();
	this.instance.setTransform(-33,-21.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33,-21.5,220,103);


(lib.AbColdNormal = function() {
	this.initialize();

	// text
	this.text = new cjs.Text("Abnormally Cold\nNormal Precipitation", "19px 'Microsoft Sans Serif'");
	this.text.lineHeight = 21;
	this.text.lineWidth = 172;

	// button
	this.instance = new lib.Button();
	this.instance.setTransform(-22,-21.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22,-21.5,220,103);


(lib.AbColdAbWet = function() {
	this.initialize();

	// text
	this.text = new cjs.Text("Abnormally Cold\nAbnormally Wet", "19px 'Microsoft Sans Serif'");
	this.text.lineHeight = 21;
	this.text.lineWidth = 150;

	// button
	this.instance = new lib.Button();
	this.instance.setTransform(-34,-20.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34,-20.5,220,103);


(lib.AbColdAbDry = function() {
	this.initialize();

	// text
	this.text = new cjs.Text("Abnormally Cold\nAbnormally Dry", "19px 'Microsoft Sans Serif'");
	this.text.lineHeight = 21;
	this.text.lineWidth = 150;

	// button
	this.instance = new lib.Button();
	this.instance.setTransform(-37,-22.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37,-22.5,220,103);


(lib.normalwetwatershed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_15 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_34 = function() {
		this.stop();
	}
	this.frame_149 = function() {
		this.stop();
	}
	this.frame_159 = function() {
		this.stop();
	}
	this.frame_169 = function() {
		this.stop();
	}
	this.frame_180 = function() {
		this.stop();
	}
	this.frame_189 = function() {
		this.stop();
	}
	this.frame_199 = function() {
		this.stop();
	}
	this.frame_299 = function() {
		this.stop();
	}
	this.frame_309 = function() {
		this.stop();
	}
	this.frame_319 = function() {
		this.stop();
	}
	this.frame_339 = function() {
		this.stop();
	}
	this.frame_349 = function() {
		this.stop();
	}
	this.frame_359 = function() {
		this.stop();
	}
	this.frame_449 = function() {
		this.stop();
	}
	this.frame_459 = function() {
		this.stop();
	}
	this.frame_479 = function() {
		this.stop();
	}
	this.frame_489 = function() {
		this.stop();
	}
	this.frame_599 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(11).call(this.frame_15).wait(9).call(this.frame_24).wait(5).call(this.frame_29).wait(5).call(this.frame_34).wait(115).call(this.frame_149).wait(10).call(this.frame_159).wait(10).call(this.frame_169).wait(11).call(this.frame_180).wait(9).call(this.frame_189).wait(10).call(this.frame_199).wait(100).call(this.frame_299).wait(10).call(this.frame_309).wait(10).call(this.frame_319).wait(20).call(this.frame_339).wait(10).call(this.frame_349).wait(10).call(this.frame_359).wait(90).call(this.frame_449).wait(10).call(this.frame_459).wait(20).call(this.frame_479).wait(10).call(this.frame_489).wait(110).call(this.frame_599).wait(3000));

	// title
	this.instance = new lib.CityTypeLID();
	this.instance.setTransform(306.1,-480.9,1,1,0,0,0,202,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},600).wait(2999));

	// graph mask copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("EgMMAjDIAAx4IR2AAIAAR4g");
	var mask_graphics_2999 = new cjs.Graphics().p("EgMbAjDIAAx4IR2AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:-78.1,y:224.4}).wait(2998).to({graphics:mask_graphics_2999,x:-79.6,y:224.4}).wait(600));

	// graph copy
	this.instance_1 = new lib.tempgraph();
	this.instance_1.setTransform(2039,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({x:-2243.5,y:388},2998).to({_off:true},1).wait(599));

	// graph mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_1 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");
	var mask_1_graphics_2999 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_1,x:-147.1,y:224.4}).wait(2998).to({graphics:mask_1_graphics_2999,x:-147.1,y:224.4}).wait(600));

	// graph
	this.instance_2 = new lib.watergraph();
	this.instance_2.setTransform(1901,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_2._off = true;

	this.instance_2.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({x:-2378.4,y:388},2998).to({_off:true},1).wait(599));

	// Temp Events
	this.instance_3 = new lib.NormalTempWinter1();
	this.instance_3.setTransform(528,405,1,1,0,0,0,129.9,55.4);

	this.instance_4 = new lib.NormalTempWinter2();
	this.instance_4.setTransform(525,364,1,1,0,0,0,129.9,21);

	this.instance_5 = new lib.NormalTempWinter3();
	this.instance_5.setTransform(525,370,1,1,0,0,0,129.9,24.3);

	this.instance_6 = new lib.NormalTempWinter4();
	this.instance_6.setTransform(525,370,1,1,0,0,0,129.9,24.3);

	this.instance_7 = new lib.NormalTempSpring1();
	this.instance_7.setTransform(522.9,368,1,1,0,0,0,129.9,24.3);

	this.instance_8 = new lib.NormalTempSpring2();
	this.instance_8.setTransform(524.9,413.1,1,1,0,0,0,129.9,71);

	this.instance_9 = new lib.NormalTempSpring3();
	this.instance_9.setTransform(524,414.1,1,1,0,0,0,129.9,71);

	this.instance_10 = new lib.NormalTempSummer1();
	this.instance_10.setTransform(524.9,414,1,1,0,0,0,129.9,71);

	this.instance_11 = new lib.NormalTempSummer2();
	this.instance_11.setTransform(523,417,1,1,0,0,0,129.9,71);

	this.instance_12 = new lib.NormalTempSummer3();
	this.instance_12.setTransform(523,416,1,1,0,0,0,129.9,71);

	this.instance_13 = new lib.NormalTempFall1();
	this.instance_13.setTransform(524.9,420,1,1,0,0,0,129.9,71);

	this.instance_14 = new lib.NormalTempFall2();
	this.instance_14.setTransform(522.9,413.1,1,1,0,0,0,129.9,71);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},15).to({state:[{t:this.instance_4}]},9).to({state:[{t:this.instance_5}]},5).to({state:[{t:this.instance_6}]},5).to({state:[]},7).to({state:[{t:this.instance_7}]},108).to({state:[{t:this.instance_8}]},10).to({state:[{t:this.instance_9}]},10).to({state:[]},6).to({state:[{t:this.instance_10}]},124).to({state:[{t:this.instance_11}]},10).to({state:[{t:this.instance_12}]},10).to({state:[]},10).to({state:[{t:this.instance_13}]},120).to({state:[{t:this.instance_14}]},10).to({state:[]},11).wait(3129));

	// Precip Events
	this.instance_15 = new lib.AbWetWinter();
	this.instance_15.setTransform(528,443.9,1,1,0,0,0,129.9,102);

	this.instance_16 = new lib.AbWetSpring1();
	this.instance_16.setTransform(523,447.9,1,1,0,0,0,129.9,102);

	this.instance_17 = new lib.AbWetSpring2();
	this.instance_17.setTransform(525.9,446.9,1,1,0,0,0,129.9,102);

	this.instance_18 = new lib.AbWetSpring3();
	this.instance_18.setTransform(525.9,446.9,1,1,0,0,0,129.9,102);

	this.instance_19 = new lib.AbWetSummer1();
	this.instance_19.setTransform(526,446.9,1,1,0,0,0,129.9,102);

	this.instance_20 = new lib.AbWetSummer2();
	this.instance_20.setTransform(526,446.9,1,1,0,0,0,129.9,102);

	this.instance_21 = new lib.AbWetSummer3();
	this.instance_21.setTransform(526.9,445.9,1,1,0,0,0,129.9,102);

	this.instance_22 = new lib.AbWetFall1();
	this.instance_22.setTransform(523.9,445.9,1,1,0,0,0,129.9,102);

	this.instance_23 = new lib.AbWetFall2();
	this.instance_23.setTransform(526,446.9,1,1,0,0,0,129.9,102);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15}]},4).to({state:[]},9).to({state:[{t:this.instance_16}]},167).to({state:[{t:this.instance_17}]},9).to({state:[{t:this.instance_18}]},10).to({state:[]},9).to({state:[{t:this.instance_19}]},131).to({state:[{t:this.instance_20}]},10).to({state:[{t:this.instance_21}]},10).to({state:[]},10).to({state:[{t:this.instance_22}]},110).to({state:[]},7).to({state:[{t:this.instance_23}]},3).to({state:[]},11).wait(3099));

	// Text Box Control
	this.next = new lib.NextButton();
	this.next.setTransform(424,461,1,1,0,0,0,29.5,15);
	this.next._off = true;

	this.timeline.addTween(cjs.Tween.get(this.next).wait(4).to({_off:false},0).to({_off:true},5).wait(6).to({_off:false},0).to({_off:true},5).wait(4).to({_off:false},0).wait(10).to({_off:true},7).wait(108).to({_off:false},0).to({_off:true},6).wait(4).to({_off:false},0).to({_off:true},7).wait(3).to({_off:false},0).to({_off:true},6).wait(5).to({_off:false},0).to({_off:true},5).wait(4).to({_off:false},0).to({_off:true},7).wait(3).to({_off:false},0).to({_off:true},5).wait(95).to({_off:false},0).to({_off:true},9).wait(1).to({_off:false},0).to({_off:true},9).wait(1).to({_off:false},0).to({_off:true},10).wait(10).to({_off:false},0).to({_off:true},8).wait(2).to({_off:false},0).to({_off:true},7).wait(3).to({_off:false},0).to({_off:true},9).wait(81).to({_off:false},0).to({_off:true},7).wait(3).to({_off:false},0).to({_off:true},10).wait(10).to({_off:false},0).to({_off:true},8).wait(2).to({_off:false},0).to({_off:true},7).wait(3103));

	// text box
	this.instance_24 = new lib.rectangle();
	this.instance_24.setTransform(524.9,390.1,1,1,0,0,0,136.9,52);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(1).to({_off:false},0).wait(598).to({_off:true},1).wait(2999));

	// image
	this.instance_25 = new lib.Suburbia();
	this.instance_25.setTransform(-323,-502.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).to({_off:true},600).wait(2999));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323,-502.5,1224,987);


(lib.normalnormalwatershed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_15 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_34 = function() {
		this.stop();
	}
	this.frame_149 = function() {
		this.stop();
	}
	this.frame_159 = function() {
		this.stop();
	}
	this.frame_169 = function() {
		this.stop();
	}
	this.frame_179 = function() {
		this.stop();
	}
	this.frame_189 = function() {
		this.stop();
	}
	this.frame_299 = function() {
		this.stop();
	}
	this.frame_309 = function() {
		this.stop();
	}
	this.frame_319 = function() {
		this.stop();
	}
	this.frame_331 = function() {
		this.stop();
	}
	this.frame_449 = function() {
		this.stop();
	}
	this.frame_459 = function() {
		this.stop();
	}
	this.frame_471 = function() {
		this.stop();
	}
	this.frame_478 = function() {
		this.stop();
	}
	this.frame_599 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(12).call(this.frame_15).wait(9).call(this.frame_24).wait(5).call(this.frame_29).wait(5).call(this.frame_34).wait(115).call(this.frame_149).wait(10).call(this.frame_159).wait(10).call(this.frame_169).wait(10).call(this.frame_179).wait(10).call(this.frame_189).wait(110).call(this.frame_299).wait(10).call(this.frame_309).wait(10).call(this.frame_319).wait(12).call(this.frame_331).wait(118).call(this.frame_449).wait(10).call(this.frame_459).wait(12).call(this.frame_471).wait(7).call(this.frame_478).wait(121).call(this.frame_599).wait(3599));

	// title
	this.instance = new lib.CityTypeLID();
	this.instance.setTransform(306.1,-480.9,1,1,0,0,0,202,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},600).wait(3598));

	// graph mask copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("EgMMAjDIAAx4IR2AAIAAR4g");
	var mask_graphics_2999 = new cjs.Graphics().p("EgMbAjDIAAx4IR2AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:-78.1,y:224.4}).wait(2998).to({graphics:mask_graphics_2999,x:-79.6,y:224.4}).wait(1199));

	// graph copy
	this.instance_1 = new lib.tempgraph();
	this.instance_1.setTransform(2039,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({x:-2243.5,y:388},2998).to({_off:true},1).wait(1198));

	// graph mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_1 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");
	var mask_1_graphics_2999 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_1,x:-147.1,y:224.4}).wait(2998).to({graphics:mask_1_graphics_2999,x:-147.1,y:224.4}).wait(1199));

	// graph
	this.instance_2 = new lib.watergraph();
	this.instance_2.setTransform(1901,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_2._off = true;

	this.instance_2.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({x:-2378.4,y:388},2998).to({_off:true},1).wait(1198));

	// Temp Events
	this.instance_3 = new lib.NormalTempWinter1();
	this.instance_3.setTransform(528,405,1,1,0,0,0,129.9,55.4);

	this.instance_4 = new lib.NormalTempWinter2();
	this.instance_4.setTransform(525,364,1,1,0,0,0,129.9,21);

	this.instance_5 = new lib.NormalTempWinter3();
	this.instance_5.setTransform(525,370,1,1,0,0,0,129.9,24.3);

	this.instance_6 = new lib.NormalTempWinter4();
	this.instance_6.setTransform(525,370,1,1,0,0,0,129.9,24.3);

	this.instance_7 = new lib.NormalTempSpring1();
	this.instance_7.setTransform(522.9,368,1,1,0,0,0,129.9,24.3);

	this.instance_8 = new lib.NormalTempSpring2();
	this.instance_8.setTransform(524.9,413.1,1,1,0,0,0,129.9,71);

	this.instance_9 = new lib.NormalTempSpring3();
	this.instance_9.setTransform(524,414.1,1,1,0,0,0,129.9,71);

	this.instance_10 = new lib.NormalTempSummer1();
	this.instance_10.setTransform(524.9,414,1,1,0,0,0,129.9,71);

	this.instance_11 = new lib.NormalTempSummer2();
	this.instance_11.setTransform(523,417,1,1,0,0,0,129.9,71);

	this.instance_12 = new lib.NormalTempSummer3();
	this.instance_12.setTransform(523,416,1,1,0,0,0,129.9,71);

	this.instance_13 = new lib.NormalTempFall1();
	this.instance_13.setTransform(524.9,420,1,1,0,0,0,129.9,71);

	this.instance_14 = new lib.NormalTempFall2();
	this.instance_14.setTransform(522.9,413.1,1,1,0,0,0,129.9,71);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},15).to({state:[{t:this.instance_4}]},9).to({state:[{t:this.instance_5}]},5).to({state:[{t:this.instance_6}]},5).to({state:[]},6).to({state:[{t:this.instance_7}]},109).to({state:[{t:this.instance_8}]},10).to({state:[{t:this.instance_9}]},10).to({state:[]},6).to({state:[{t:this.instance_10}]},124).to({state:[{t:this.instance_11}]},10).to({state:[{t:this.instance_12}]},10).to({state:[]},10).to({state:[{t:this.instance_13}]},120).to({state:[{t:this.instance_14}]},10).to({state:[]},10).to({state:[]},131).wait(3598));

	// Precip Events
	this.instance_15 = new lib.NormalPrecipWinter();
	this.instance_15.setTransform(523,448.9,1,1,0,0,0,129.9,102);

	this.instance_16 = new lib.NormalPrecipSpring1();
	this.instance_16.setTransform(525.9,446.9,1,1,0,0,0,129.9,102);

	this.instance_17 = new lib.NormalPrecipSpring2();
	this.instance_17.setTransform(527.9,448.9,1,1,0,0,0,129.9,102);

	this.instance_18 = new lib.NormalPrecipSummer();
	this.instance_18.setTransform(525,447.9,1,1,0,0,0,129.9,102);

	this.instance_19 = new lib.NormalPrecipFall1();
	this.instance_19.setTransform(524,446.9,1,1,0,0,0,129.9,102);

	this.instance_20 = new lib.NormalPrecipFall2();
	this.instance_20.setTransform(531,446.9,1,1,0,0,0,129.9,102);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15}]},3).to({state:[]},6).to({state:[{t:this.instance_16}]},170).to({state:[]},6).to({state:[{t:this.instance_17}]},4).to({state:[]},10).to({state:[{t:this.instance_18}]},132).to({state:[]},16).to({state:[{t:this.instance_19}]},124).to({state:[{t:this.instance_20}]},7).to({state:[]},7).wait(3713));

	// Text Box Control
	this.next = new lib.NextButton();
	this.next.setTransform(424,461,1,1,0,0,0,29.5,15);
	this.next._off = true;

	this.timeline.addTween(cjs.Tween.get(this.next).wait(3).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},4).wait(5).to({_off:false},0).to({_off:true},3).wait(2).to({_off:false},0).to({_off:true},3).wait(2).to({_off:false},0).to({_off:true},6).wait(109).to({_off:false},0).to({_off:true},6).wait(4).to({_off:false},0).to({_off:true},6).wait(4).to({_off:false},0).to({_off:true},6).wait(4).to({_off:false},0).to({_off:true},6).wait(4).to({_off:false},0).to({_off:true},10).wait(100).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},4).wait(6).to({_off:false},0).to({_off:true},7).wait(5).to({_off:false},0).to({_off:true},16).wait(102).to({_off:false},0).to({_off:true},4).wait(6).to({_off:false},0).to({_off:true},9).wait(3).to({_off:false},0).to({_off:true},3).wait(4).to({_off:false},0).to({_off:true},6).wait(3714));

	// Text Box
	this.instance_21 = new lib.rectangle();
	this.instance_21.setTransform(524.9,390.1,1,1,0,0,0,136.9,52);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1).to({_off:false},0).wait(598).to({_off:true},1).wait(3598));

	// image
	this.instance_22 = new lib.Suburbia();
	this.instance_22.setTransform(-323,-502.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({_off:true},600).wait(3598));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323,-502.5,1224,987);


(lib.normaldrywatershed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_15 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_34 = function() {
		this.stop();
	}
	this.frame_149 = function() {
		this.stop();
	}
	this.frame_159 = function() {
		this.stop();
	}
	this.frame_169 = function() {
		this.stop();
	}
	this.frame_177 = function() {
		this.stop();
	}
	this.frame_180 = function() {
		this.stop();
	}
	this.frame_183 = function() {
		this.stop();
	}
	this.frame_299 = function() {
		this.stop();
	}
	this.frame_309 = function() {
		this.stop();
	}
	this.frame_319 = function() {
		this.stop();
	}
	this.frame_331 = function() {
		this.stop();
	}
	this.frame_336 = function() {
		this.stop();
	}
	this.frame_341 = function() {
		this.stop();
	}
	this.frame_346 = function() {
		this.stop();
	}
	this.frame_449 = function() {
		this.stop();
	}
	this.frame_459 = function() {
		this.stop();
	}
	this.frame_470 = function() {
		this.stop();
	}
	this.frame_476 = function() {
		this.stop();
	}
	this.frame_483 = function() {
		this.stop();
	}
	this.frame_599 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(11).call(this.frame_15).wait(9).call(this.frame_24).wait(5).call(this.frame_29).wait(5).call(this.frame_34).wait(115).call(this.frame_149).wait(10).call(this.frame_159).wait(10).call(this.frame_169).wait(8).call(this.frame_177).wait(3).call(this.frame_180).wait(3).call(this.frame_183).wait(116).call(this.frame_299).wait(10).call(this.frame_309).wait(10).call(this.frame_319).wait(12).call(this.frame_331).wait(5).call(this.frame_336).wait(5).call(this.frame_341).wait(5).call(this.frame_346).wait(103).call(this.frame_449).wait(10).call(this.frame_459).wait(11).call(this.frame_470).wait(6).call(this.frame_476).wait(7).call(this.frame_483).wait(116).call(this.frame_599).wait(3599));

	// title
	this.instance = new lib.CityTypeLID();
	this.instance.setTransform(306.1,-480.9,1,1,0,0,0,202,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},600).wait(3598));

	// graph mask copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("EgMMAjDIAAx4IR2AAIAAR4g");
	var mask_graphics_2999 = new cjs.Graphics().p("EgMbAjDIAAx4IR2AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:-78.1,y:224.4}).wait(2998).to({graphics:mask_graphics_2999,x:-79.6,y:224.4}).wait(1199));

	// graph copy
	this.instance_1 = new lib.tempgraph();
	this.instance_1.setTransform(2039,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({x:-2243.5,y:388},2998).to({_off:true},1).wait(1198));

	// graph mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_1 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");
	var mask_1_graphics_2999 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_1,x:-147.1,y:224.4}).wait(2998).to({graphics:mask_1_graphics_2999,x:-147.1,y:224.4}).wait(1199));

	// graph
	this.instance_2 = new lib.watergraph();
	this.instance_2.setTransform(1901,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_2._off = true;

	this.instance_2.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({x:-2378.4,y:388},2998).to({_off:true},1).wait(1198));

	// Temp Events
	this.instance_3 = new lib.NormalTempWinter1();
	this.instance_3.setTransform(528,405,1,1,0,0,0,129.9,55.4);

	this.instance_4 = new lib.NormalTempWinter2();
	this.instance_4.setTransform(525,364,1,1,0,0,0,129.9,21);

	this.instance_5 = new lib.NormalTempWinter3();
	this.instance_5.setTransform(525,370,1,1,0,0,0,129.9,24.3);

	this.instance_6 = new lib.NormalTempWinter4();
	this.instance_6.setTransform(525,370,1,1,0,0,0,129.9,24.3);

	this.instance_7 = new lib.NormalTempSpring1();
	this.instance_7.setTransform(522.9,368,1,1,0,0,0,129.9,24.3);

	this.instance_8 = new lib.NormalTempSpring2();
	this.instance_8.setTransform(524.9,413.1,1,1,0,0,0,129.9,71);

	this.instance_9 = new lib.NormalTempSpring3();
	this.instance_9.setTransform(524,414.1,1,1,0,0,0,129.9,71);

	this.instance_10 = new lib.NormalTempSummer1();
	this.instance_10.setTransform(524.9,414,1,1,0,0,0,129.9,71);

	this.instance_11 = new lib.NormalTempSummer2();
	this.instance_11.setTransform(523,417,1,1,0,0,0,129.9,71);

	this.instance_12 = new lib.NormalTempSummer3();
	this.instance_12.setTransform(523,416,1,1,0,0,0,129.9,71);

	this.instance_13 = new lib.NormalTempFall1();
	this.instance_13.setTransform(524.9,420,1,1,0,0,0,129.9,71);

	this.instance_14 = new lib.NormalTempFall2();
	this.instance_14.setTransform(522.9,413.1,1,1,0,0,0,129.9,71);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},15).to({state:[{t:this.instance_4}]},9).to({state:[{t:this.instance_5}]},5).to({state:[{t:this.instance_6}]},5).to({state:[]},10).to({state:[{t:this.instance_7}]},105).to({state:[{t:this.instance_8}]},10).to({state:[{t:this.instance_9}]},10).to({state:[]},6).to({state:[{t:this.instance_10}]},124).to({state:[{t:this.instance_11}]},10).to({state:[{t:this.instance_12}]},10).to({state:[]},8).to({state:[{t:this.instance_13}]},122).to({state:[{t:this.instance_14}]},10).to({state:[]},7).to({state:[]},134).wait(3598));

	// Precip Events
	this.instance_15 = new lib.AbDryWinter();
	this.instance_15.setTransform(524,444.9,1,1,0,0,0,129.9,102);

	this.instance_16 = new lib.AbDrySpring1();
	this.instance_16.setTransform(526,445.9,1,1,0,0,0,129.9,102);

	this.instance_17 = new lib.AbDrySpring2();
	this.instance_17.setTransform(526.9,448.9,1,1,0,0,0,129.9,102);

	this.instance_18 = new lib.AbDrySpring3();
	this.instance_18.setTransform(526,446.9,1,1,0,0,0,129.9,102);

	this.instance_19 = new lib.AbDrySummer1();
	this.instance_19.setTransform(526.9,482,1,1,0,0,0,129.9,133.2);

	this.instance_20 = new lib.AbDrySummer2();
	this.instance_20.setTransform(530,450.9,1,1,0,0,0,129.9,102);

	this.instance_21 = new lib.AbDrySummer3();
	this.instance_21.setTransform(527,449.9,1,1,0,0,0,129.9,102);

	this.instance_22 = new lib.AbDrySummer4();
	this.instance_22.setTransform(526,447.9,1,1,0,0,0,129.9,102);

	this.instance_23 = new lib.AbDryFall1();
	this.instance_23.setTransform(525,446.9,1,1,0,0,0,129.9,102);

	this.instance_24 = new lib.AbDryFall2();
	this.instance_24.setTransform(526,447.9,1,1,0,0,0,129.9,102);

	this.instance_25 = new lib.AbDryFall3();
	this.instance_25.setTransform(521.9,447.9,1,1,0,0,0,129.9,102);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15}]},4).to({state:[]},8).to({state:[{t:this.instance_16}]},165).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_18}]},3).to({state:[]},4).to({state:[{t:this.instance_19}]},144).to({state:[{t:this.instance_20}]},5).to({state:[{t:this.instance_21}]},5).to({state:[{t:this.instance_22}]},5).to({state:[]},6).to({state:[{t:this.instance_23}]},118).to({state:[{t:this.instance_24}]},6).to({state:[{t:this.instance_25}]},7).to({state:[]},7).wait(3708));

	// Text Box Control
	this.next = new lib.NextButton();
	this.next.setTransform(424,461,1,1,0,0,0,29.5,15);
	this.next._off = true;

	this.timeline.addTween(cjs.Tween.get(this.next).wait(4).to({_off:false},0).to({_off:true},5).wait(6).to({_off:false},0).to({_off:true},5).wait(4).to({_off:false},0).to({_off:true},2).wait(3).to({_off:false},0).to({_off:true},3).wait(2).to({_off:false},0).to({_off:true},6).wait(109).to({_off:false},0).to({_off:true},9).wait(1).to({_off:false},0).to({_off:true},9).wait(1).to({_off:false},0).to({_off:true},6).wait(2).to({_off:false},0).to({_off:true},2).wait(1).to({_off:false},0).to({_off:true},2).wait(1).to({_off:false},0).to({_off:true},4).wait(112).to({_off:false},0).to({_off:true},6).wait(4).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},8).wait(4).to({_off:false},0).to({_off:true},3).wait(2).to({_off:false},0).to({_off:true},3).wait(2).to({_off:false},0).to({_off:true},3).wait(2).to({_off:false},0).to({_off:true},6).wait(97).to({_off:false},0).to({_off:true},9).wait(1).to({_off:false},0).to({_off:true},7).wait(4).to({_off:false},0).to({_off:true},4).wait(2).to({_off:false},0).to({_off:true},4).wait(3).to({_off:false},0).to({_off:true},6).wait(3709));

	// text box
	this.instance_26 = new lib.rectangle();
	this.instance_26.setTransform(524.9,390.1,1,1,0,0,0,136.9,52);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(1).to({_off:false},0).wait(598).to({_off:true},1).wait(3598));

	// image
	this.instance_27 = new lib.Suburbia();
	this.instance_27.setTransform(-323,-502.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).to({_off:true},600).wait(3598));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323,-502.5,1224,987);


(lib.abhotabwetwatershed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_180 = function() {
		this.stop();
	}
	this.frame_189 = function() {
		this.stop();
	}
	this.frame_199 = function() {
		this.stop();
	}
	this.frame_339 = function() {
		this.stop();
	}
	this.frame_349 = function() {
		this.stop();
	}
	this.frame_359 = function() {
		this.stop();
	}
	this.frame_479 = function() {
		this.stop();
	}
	this.frame_489 = function() {
		this.stop();
	}
	this.frame_599 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(176).call(this.frame_180).wait(9).call(this.frame_189).wait(10).call(this.frame_199).wait(140).call(this.frame_339).wait(10).call(this.frame_349).wait(10).call(this.frame_359).wait(120).call(this.frame_479).wait(10).call(this.frame_489).wait(110).call(this.frame_599).wait(3599));

	// title
	this.instance = new lib.CityTypeLID();
	this.instance.setTransform(306.1,-480.9,1,1,0,0,0,202,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},600).wait(3598));

	// graph mask copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("EgMMAjDIAAx4IR2AAIAAR4g");
	var mask_graphics_2999 = new cjs.Graphics().p("EgMbAjDIAAx4IR2AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:-78.1,y:224.4}).wait(2998).to({graphics:mask_graphics_2999,x:-79.6,y:224.4}).wait(1199));

	// graph copy
	this.instance_1 = new lib.tempgraph();
	this.instance_1.setTransform(2039,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({x:-2243.5,y:388},2998).to({_off:true},1).wait(1198));

	// graph mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_1 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");
	var mask_1_graphics_2999 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_1,x:-147.1,y:224.4}).wait(2998).to({graphics:mask_1_graphics_2999,x:-147.1,y:224.4}).wait(1199));

	// graph
	this.instance_2 = new lib.watergraph();
	this.instance_2.setTransform(1901,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_2._off = true;

	this.instance_2.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({x:-2378.4,y:388},2998).to({_off:true},1).wait(1198));

	// Precip Events
	this.instance_3 = new lib.AbWetWinter();
	this.instance_3.setTransform(528,443.9,1,1,0,0,0,129.9,102);

	this.instance_4 = new lib.AbWetSpring1();
	this.instance_4.setTransform(523,447.9,1,1,0,0,0,129.9,102);

	this.instance_5 = new lib.AbWetSpring2();
	this.instance_5.setTransform(525.9,446.9,1,1,0,0,0,129.9,102);

	this.instance_6 = new lib.AbWetSpring3();
	this.instance_6.setTransform(525.9,446.9,1,1,0,0,0,129.9,102);

	this.instance_7 = new lib.AbWetSummer1();
	this.instance_7.setTransform(526,446.9,1,1,0,0,0,129.9,102);

	this.instance_8 = new lib.AbWetSummer2();
	this.instance_8.setTransform(526,446.9,1,1,0,0,0,129.9,102);

	this.instance_9 = new lib.AbWetSummer3();
	this.instance_9.setTransform(526.9,445.9,1,1,0,0,0,129.9,102);

	this.instance_10 = new lib.AbWetFall1();
	this.instance_10.setTransform(523.9,445.9,1,1,0,0,0,129.9,102);

	this.instance_11 = new lib.AbWetFall2();
	this.instance_11.setTransform(526,446.9,1,1,0,0,0,129.9,102);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},4).to({state:[]},5).to({state:[{t:this.instance_4}]},171).to({state:[{t:this.instance_5}]},9).to({state:[{t:this.instance_6}]},10).to({state:[]},9).to({state:[{t:this.instance_7}]},131).to({state:[{t:this.instance_8}]},10).to({state:[{t:this.instance_9}]},10).to({state:[]},10).to({state:[{t:this.instance_10}]},110).to({state:[{t:this.instance_11}]},10).to({state:[]},8).wait(3701));

	// Text Box Control
	this.next = new lib.NextButton();
	this.next.setTransform(424,461,1,1,0,0,0,29.5,15);
	this.next._off = true;

	this.timeline.addTween(cjs.Tween.get(this.next).wait(4).to({_off:false},0).to({_off:true},5).wait(171).to({_off:false},0).to({_off:true},4).wait(5).to({_off:false},0).to({_off:true},6).wait(4).to({_off:false},0).to({_off:true},4).wait(136).to({_off:false},0).to({_off:true},7).wait(3).to({_off:false},0).to({_off:true},6).wait(4).to({_off:false},0).to({_off:true},8).wait(112).to({_off:false},0).to({_off:true},7).wait(3).to({_off:false},0).to({_off:true},6).wait(3703));

	// Text Box
	this.instance_12 = new lib.rectangle();
	this.instance_12.setTransform(524.9,390.1,1,1,0,0,0,136.9,52);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({_off:false},0).wait(598).to({_off:true},1).wait(3598));

	// image
	this.instance_13 = new lib.Suburbia();
	this.instance_13.setTransform(-323,-502.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:true},600).wait(3598));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323,-502.5,1224,987);


(lib.abhotabdrywatershed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_177 = function() {
		this.stop();
	}
	this.frame_180 = function() {
		this.stop();
	}
	this.frame_183 = function() {
		this.stop();
	}
	this.frame_331 = function() {
		this.stop();
	}
	this.frame_336 = function() {
		this.stop();
	}
	this.frame_341 = function() {
		this.stop();
	}
	this.frame_346 = function() {
		this.stop();
	}
	this.frame_470 = function() {
		this.stop();
	}
	this.frame_476 = function() {
		this.stop();
	}
	this.frame_483 = function() {
		this.stop();
	}
	this.frame_599 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(173).call(this.frame_177).wait(3).call(this.frame_180).wait(3).call(this.frame_183).wait(148).call(this.frame_331).wait(5).call(this.frame_336).wait(5).call(this.frame_341).wait(5).call(this.frame_346).wait(124).call(this.frame_470).wait(6).call(this.frame_476).wait(7).call(this.frame_483).wait(116).call(this.frame_599).wait(3599));

	// title
	this.instance = new lib.CityTypeLID();
	this.instance.setTransform(306.1,-480.9,1,1,0,0,0,202,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},600).wait(3598));

	// graph mask copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("EgMMAjDIAAx4IR2AAIAAR4g");
	var mask_graphics_2999 = new cjs.Graphics().p("EgMbAjDIAAx4IR2AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:-78.1,y:224.4}).wait(2998).to({graphics:mask_graphics_2999,x:-79.6,y:224.4}).wait(1199));

	// graph copy
	this.instance_1 = new lib.tempgraph();
	this.instance_1.setTransform(2039,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({x:-2243.5,y:388},2998).to({_off:true},1).wait(1198));

	// graph mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_1 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");
	var mask_1_graphics_2999 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_1,x:-147.1,y:224.4}).wait(2998).to({graphics:mask_1_graphics_2999,x:-147.1,y:224.4}).wait(1199));

	// graph
	this.instance_2 = new lib.watergraph();
	this.instance_2.setTransform(1901,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_2._off = true;

	this.instance_2.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({x:-2378.4,y:388},2998).to({_off:true},1).wait(1198));

	// Precip Events
	this.instance_3 = new lib.AbDryWinter();
	this.instance_3.setTransform(524,444.9,1,1,0,0,0,129.9,102);

	this.instance_4 = new lib.AbDrySpring1();
	this.instance_4.setTransform(526,445.9,1,1,0,0,0,129.9,102);

	this.instance_5 = new lib.AbDrySpring2();
	this.instance_5.setTransform(526.9,448.9,1,1,0,0,0,129.9,102);

	this.instance_6 = new lib.AbDrySpring3();
	this.instance_6.setTransform(526,446.9,1,1,0,0,0,129.9,102);

	this.instance_7 = new lib.AbDrySummer1();
	this.instance_7.setTransform(526.9,482,1,1,0,0,0,129.9,133.2);

	this.instance_8 = new lib.AbDrySummer2();
	this.instance_8.setTransform(530,450.9,1,1,0,0,0,129.9,102);

	this.instance_9 = new lib.AbDrySummer3();
	this.instance_9.setTransform(527,449.9,1,1,0,0,0,129.9,102);

	this.instance_10 = new lib.AbDrySummer4();
	this.instance_10.setTransform(526,447.9,1,1,0,0,0,129.9,102);

	this.instance_11 = new lib.AbDryFall1();
	this.instance_11.setTransform(525,446.9,1,1,0,0,0,129.9,102);

	this.instance_12 = new lib.AbDryFall2();
	this.instance_12.setTransform(526,447.9,1,1,0,0,0,129.9,102);

	this.instance_13 = new lib.AbDryFall3();
	this.instance_13.setTransform(521.9,447.9,1,1,0,0,0,129.9,102);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},4).to({state:[]},5).to({state:[{t:this.instance_4}]},168).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_6}]},3).to({state:[]},4).to({state:[{t:this.instance_7}]},144).to({state:[{t:this.instance_8}]},5).to({state:[{t:this.instance_9}]},5).to({state:[{t:this.instance_10}]},5).to({state:[]},6).to({state:[{t:this.instance_11}]},118).to({state:[{t:this.instance_12}]},6).to({state:[{t:this.instance_13}]},7).to({state:[]},6).to({state:[]},111).wait(3598));

	// Text Box Control
	this.next = new lib.NextButton();
	this.next.setTransform(424,461,1,1,0,0,0,29.5,15);
	this.next._off = true;

	this.timeline.addTween(cjs.Tween.get(this.next).wait(4).to({_off:false},0).to({_off:true},5).wait(168).to({_off:false},0).to({_off:true},2).wait(1).to({_off:false},0).to({_off:true},2).wait(1).to({_off:false},0).to({_off:true},3).wait(145).to({_off:false},0).to({_off:true},3).wait(2).to({_off:false},0).to({_off:true},3).wait(2).to({_off:false},0).to({_off:true},3).wait(2).to({_off:false},0).to({_off:true},6).wait(118).to({_off:false},0).to({_off:true},4).wait(2).to({_off:false},0).to({_off:true},4).wait(3).to({_off:false},0).to({_off:true},6).wait(3709));

	// Text Box
	this.instance_14 = new lib.rectangle();
	this.instance_14.setTransform(524.9,390.1,1,1,0,0,0,136.9,52);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({_off:false},0).wait(598).to({_off:true},1).wait(3598));

	// image
	this.instance_15 = new lib.Suburbia();
	this.instance_15.setTransform(-323,-502.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({_off:true},600).wait(3598));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323,-502.5,1224,987);


(lib.abcoldnormalwatershed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_179 = function() {
		this.stop();
	}
	this.frame_189 = function() {
		this.stop();
	}
	this.frame_329 = function() {
		this.stop();
	}
	this.frame_471 = function() {
		this.stop();
	}
	this.frame_478 = function() {
		this.stop();
	}
	this.frame_599 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(175).call(this.frame_179).wait(10).call(this.frame_189).wait(140).call(this.frame_329).wait(142).call(this.frame_471).wait(7).call(this.frame_478).wait(121).call(this.frame_599).wait(3599));

	// title
	this.instance = new lib.CityTypeLID();
	this.instance.setTransform(306.1,-480.9,1,1,0,0,0,202,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},600).wait(3598));

	// graph mask copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("EgMMAjDIAAx4IR2AAIAAR4g");
	var mask_graphics_2999 = new cjs.Graphics().p("EgMbAjDIAAx4IR2AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:-78.1,y:224.4}).wait(2998).to({graphics:mask_graphics_2999,x:-79.6,y:224.4}).wait(1199));

	// graph copy
	this.instance_1 = new lib.tempgraph();
	this.instance_1.setTransform(2039,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({x:-2243.5,y:388},2998).to({_off:true},1).wait(1198));

	// graph mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_1 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");
	var mask_1_graphics_2999 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_1,x:-147.1,y:224.4}).wait(2998).to({graphics:mask_1_graphics_2999,x:-147.1,y:224.4}).wait(1199));

	// graph
	this.instance_2 = new lib.watergraph();
	this.instance_2.setTransform(1901,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_2._off = true;

	this.instance_2.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({x:-2378.4,y:388},2998).to({_off:true},1).wait(1198));

	// Precip Events
	this.instance_3 = new lib.NormalPrecipWinter();
	this.instance_3.setTransform(523,448.9,1,1,0,0,0,129.9,102);

	this.instance_4 = new lib.NormalPrecipSpring1();
	this.instance_4.setTransform(525.9,446.9,1,1,0,0,0,129.9,102);

	this.instance_5 = new lib.NormalPrecipSpring2();
	this.instance_5.setTransform(527.9,448.9,1,1,0,0,0,129.9,102);

	this.instance_6 = new lib.NormalPrecipSummer();
	this.instance_6.setTransform(525,447.9,1,1,0,0,0,129.9,102);

	this.instance_7 = new lib.NormalPrecipFall1();
	this.instance_7.setTransform(524,446.9,1,1,0,0,0,129.9,102);

	this.instance_8 = new lib.NormalPrecipFall2();
	this.instance_8.setTransform(531,446.9,1,1,0,0,0,129.9,102);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},4).to({state:[]},9).to({state:[{t:this.instance_4}]},166).to({state:[{t:this.instance_5}]},10).to({state:[]},10).to({state:[{t:this.instance_6}]},130).to({state:[]},18).to({state:[{t:this.instance_7}]},124).to({state:[{t:this.instance_8}]},7).to({state:[]},11).to({state:[]},111).wait(3598));

	// Text Box Control
	this.next = new lib.NextButton();
	this.next.setTransform(424,461,1,1,0,0,0,29.5,15);
	this.next._off = true;

	this.timeline.addTween(cjs.Tween.get(this.next).wait(4).to({_off:false},0).to({_off:true},5).wait(170).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},6).wait(134).to({_off:false},0).to({_off:true},17).wait(125).to({_off:false},0).to({_off:true},5).wait(2).to({_off:false},0).to({_off:true},11).wait(3709));

	// Text Box
	this.instance_9 = new lib.rectangle();
	this.instance_9.setTransform(524.9,390.1,1,1,0,0,0,136.9,52);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({_off:false},0).wait(598).to({_off:true},1).wait(3598));

	// image
	this.instance_10 = new lib.Suburbia();
	this.instance_10.setTransform(-323,-502.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},600).wait(3598));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323,-502.5,1224,987);


(lib.abcoldabwetwatershed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_180 = function() {
		this.stop();
	}
	this.frame_189 = function() {
		this.stop();
	}
	this.frame_199 = function() {
		this.stop();
	}
	this.frame_339 = function() {
		this.stop();
	}
	this.frame_349 = function() {
		this.stop();
	}
	this.frame_359 = function() {
		this.stop();
	}
	this.frame_479 = function() {
		this.stop();
	}
	this.frame_489 = function() {
		this.stop();
	}
	this.frame_599 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(176).call(this.frame_180).wait(9).call(this.frame_189).wait(10).call(this.frame_199).wait(140).call(this.frame_339).wait(10).call(this.frame_349).wait(10).call(this.frame_359).wait(120).call(this.frame_479).wait(10).call(this.frame_489).wait(110).call(this.frame_599).wait(3000));

	// title
	this.instance = new lib.CityTypeLID();
	this.instance.setTransform(306.1,-480.9,1,1,0,0,0,202,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},600).wait(2999));

	// graph mask copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("EgMMAjDIAAx4IR2AAIAAR4g");
	var mask_graphics_2999 = new cjs.Graphics().p("EgMbAjDIAAx4IR2AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:-78.1,y:224.4}).wait(2998).to({graphics:mask_graphics_2999,x:-79.6,y:224.4}).wait(600));

	// graph copy
	this.instance_1 = new lib.tempgraph();
	this.instance_1.setTransform(2039,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({x:-2243.5,y:388},2998).to({_off:true},1).wait(599));

	// graph mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_1 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");
	var mask_1_graphics_2999 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_1,x:-147.1,y:224.4}).wait(2998).to({graphics:mask_1_graphics_2999,x:-147.1,y:224.4}).wait(600));

	// graph
	this.instance_2 = new lib.watergraph();
	this.instance_2.setTransform(1901,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_2._off = true;

	this.instance_2.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({x:-2378.4,y:388},2998).to({_off:true},1).wait(599));

	// Precip Events
	this.instance_3 = new lib.AbWetWinter();
	this.instance_3.setTransform(528,443.9,1,1,0,0,0,129.9,102);

	this.instance_4 = new lib.AbWetSpring1();
	this.instance_4.setTransform(523,447.9,1,1,0,0,0,129.9,102);

	this.instance_5 = new lib.AbWetSpring2();
	this.instance_5.setTransform(525.9,446.9,1,1,0,0,0,129.9,102);

	this.instance_6 = new lib.AbWetSpring3();
	this.instance_6.setTransform(525.9,446.9,1,1,0,0,0,129.9,102);

	this.instance_7 = new lib.AbWetSummer1();
	this.instance_7.setTransform(526,446.9,1,1,0,0,0,129.9,102);

	this.instance_8 = new lib.AbWetSummer2();
	this.instance_8.setTransform(526,446.9,1,1,0,0,0,129.9,102);

	this.instance_9 = new lib.AbWetSummer3();
	this.instance_9.setTransform(526.9,445.9,1,1,0,0,0,129.9,102);

	this.instance_10 = new lib.AbWetFall1();
	this.instance_10.setTransform(523.9,445.9,1,1,0,0,0,129.9,102);

	this.instance_11 = new lib.AbWetFall2();
	this.instance_11.setTransform(526,446.9,1,1,0,0,0,129.9,102);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},4).to({state:[]},5).to({state:[{t:this.instance_4}]},171).to({state:[{t:this.instance_5}]},9).to({state:[{t:this.instance_6}]},10).to({state:[]},9).to({state:[{t:this.instance_7}]},131).to({state:[{t:this.instance_8}]},10).to({state:[{t:this.instance_9}]},10).to({state:[]},10).to({state:[{t:this.instance_10}]},110).to({state:[{t:this.instance_11}]},10).to({state:[]},18).to({state:[]},93).wait(2999));

	// Text Box Control
	this.next = new lib.NextButton();
	this.next.setTransform(424,461,1,1,0,0,0,29.5,15);
	this.next._off = true;

	this.timeline.addTween(cjs.Tween.get(this.next).wait(4).to({_off:false},0).to({_off:true},5).wait(171).to({_off:false},0).to({_off:true},4).wait(5).to({_off:false},0).to({_off:true},6).wait(4).to({_off:false},0).to({_off:true},4).wait(136).to({_off:false},0).to({_off:true},7).wait(3).to({_off:false},0).to({_off:true},6).wait(4).to({_off:false},0).to({_off:true},8).wait(112).to({_off:false},0).to({_off:true},7).wait(3).to({_off:false},0).to({_off:true},6).wait(3104));

	// Text Box
	this.instance_12 = new lib.rectangle();
	this.instance_12.setTransform(524.9,390.1,1,1,0,0,0,136.9,52);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({_off:false},0).wait(598).to({_off:true},1).wait(2999));

	// image
	this.instance_13 = new lib.Suburbia();
	this.instance_13.setTransform(-323,-502.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:true},600).wait(2999));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323,-502.5,1224,987);


(lib.Suburbia_1 = function() {
	this.initialize();

	// title
	this.instance = new lib.SuburbiaTitle();
	this.instance.setTransform(164,46.5,1,1,0,0,0,61,37.5);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqXNRQlalaAAnpQAAnnFalZQFZlaHnAAQHpAAFaFaQFZFZAAHnQAAHplZFaQlaFZnpAAQnnAAlZlZg");
	mask.setTransform(135,119.5);

	// Layer 1
	this.instance_1 = new lib.Suburbia();
	this.instance_1.setTransform(0,0,0.245,0.245);

	this.instance_1.mask = mask;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(34,3,236,236);


(lib.Rectangleanimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1));

	// Layer 4
	this.instance = new lib.Yoursimulationhasfinished();
	this.instance.setTransform(220,18.5,1,1,0,0,0,261,18.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).wait(1));

	// text
	this.instance_1 = new lib.Returntothe();
	this.instance_1.setTransform(388.5,175.9,1,1,0,0,0,170.5,81.2);

	this.instance_2 = new lib.Seeareport();
	this.instance_2.setTransform(142.5,181.4,1,1,0,0,0,190.5,86.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},24).wait(1));

	// buttons
	this.instance_3 = new lib.rectangle();
	this.instance_3.setTransform(325.5,141.1,1.451,1.451,0,0,0,86.5,52);

	this.instance_4 = new lib.rectangle();
	this.instance_4.setTransform(64.6,141.1,1.451,1.451,0,0,0,86.5,52);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4},{t:this.instance_3}]},24).wait(1));

	// rectangle
	this.instance_5 = new lib.rectangle();
	this.instance_5.setTransform(194,142,0.133,0.133,0,0,0,86.5,51.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:3.16,scaleY:3.16},19).to({scaleX:3.02,scaleY:3.02},2).to({regY:52,scaleX:3.2,scaleY:3.2,y:142.3},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(182.5,135,65.4,13.9);


(lib.NObutton = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.NO();
	this.instance.setTransform(122.7,17.5,1,1,0,0,0,39.5,20.5);

	// Layer 1
	this.instance_1 = new lib.circle();
	this.instance_1.setTransform(126.8,17.2,5.61,5.61,0,0,0,2.6,2.6);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(112.2,2.6,28.6,28.6);


(lib.normalwetwatershed_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_149 = function() {
		this.stop();
	}
	this.frame_299 = function() {
		this.stop();
	}
	this.frame_304 = function() {
		this.stop();
	}
	this.frame_309 = function() {
		this.stop();
	}
	this.frame_449 = function() {
		this.stop();
	}
	this.frame_479 = function() {
		this.stop();
	}
	this.frame_484 = function() {
		this.stop();
	}
	this.frame_489 = function() {
		this.stop();
	}
	this.frame_599 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(135).call(this.frame_149).wait(150).call(this.frame_299).wait(5).call(this.frame_304).wait(5).call(this.frame_309).wait(140).call(this.frame_449).wait(30).call(this.frame_479).wait(5).call(this.frame_484).wait(5).call(this.frame_489).wait(110).call(this.frame_599).wait(1));

	// title
	this.instance_26 = new lib.WaterBudget();
	this.instance_26.setTransform(136,391.9,1,1,0,0,0,149,47.6);

	this.instance_27 = new lib.TEMPLABEL();
	this.instance_27.setTransform(-97.9,458.3,1,1,0,0,0,49,9.5);

	this.instance_28 = new lib.Precipitationlabel();
	this.instance_28.setTransform(-237.9,460.8,1,1,0,0,0,51.5,12);

	this.instance_29 = new lib.CityTypeLID();
	this.instance_29.setTransform(306.1,-480.9,1,1,0,0,0,202,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26}]}).wait(600));

	// graph mask copy (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_1 = new cjs.Graphics().p("EgMMAjDIAAx4IR2AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_2_graphics_1,x:-78.1,y:224.4}).wait(599));

	// graph copy
	this.instance_30 = new lib.tempgraph();
	this.instance_30.setTransform(2039,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_30._off = true;

	this.instance_30.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(1).to({_off:false},0).to({x:1184.8,y:390.4},598).wait(1));

	// graph mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_1 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_3_graphics_1,x:-147.1,y:224.4}).wait(599));

	// graph
	this.instance_31 = new lib.watergraph();
	this.instance_31.setTransform(1901,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_31._off = true;

	this.instance_31.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(1).to({_off:false},0).to({x:1047.4,y:390.4},598).wait(1));

	// Temp Events
	this.instance_32 = new lib.NormalTempFall1_1();
	this.instance_32.setTransform(524,407.5,1,1,0,0,0,129.9,63.2);

	this.instance_33 = new lib.NormalTempFall2_1();
	this.instance_33.setTransform(524,407.5,1,1,0,0,0,129.9,63.2);

	this.instance_34 = new lib.NormalTempFall3();
	this.instance_34.setTransform(524,407.5,1,1,0,0,0,129.9,63.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_32}]},479).to({state:[]},4).to({state:[{t:this.instance_33}]},1).to({state:[]},4).to({state:[{t:this.instance_34}]},1).to({state:[]},5).wait(106));

	// Precip Events
	this.instance_35 = new lib.AbWetWinter1();
	this.instance_35.setTransform(529.9,415.3,1,1,0,0,0,129.9,71);

	this.instance_36 = new lib.AbWetWinter2();
	this.instance_36.setTransform(529.9,415.3,1,1,0,0,0,129.9,71);

	this.instance_37 = new lib.AbWetWinter3();
	this.instance_37.setTransform(529.9,415.3,1,1,0,0,0,129.9,71);

	this.instance_38 = new lib.AbWetSpring();
	this.instance_38.setTransform(524.9,416.6,1,1,0,0,0,129.9,71);

	this.instance_39 = new lib.AbWetSummer1_1();
	this.instance_39.setTransform(523.9,415.3,1,1,0,0,0,129.9,71);

	this.instance_40 = new lib.AbWetSummer2_1();
	this.instance_40.setTransform(523.9,415.3,1,1,0,0,0,129.9,71);

	this.instance_41 = new lib.AbWetSummer3_1();
	this.instance_41.setTransform(523.9,415.3,1,1,0,0,0,129.9,71);

	this.instance_42 = new lib.AbWetFall();
	this.instance_42.setTransform(522.9,414.1,1,1,0,0,0,129.9,71);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_35}]},4).to({state:[]},4).to({state:[{t:this.instance_36}]},1).to({state:[]},4).to({state:[{t:this.instance_37}]},1).to({state:[]},5).to({state:[{t:this.instance_38}]},130).to({state:[]},5).to({state:[{t:this.instance_39}]},145).to({state:[]},4).to({state:[{t:this.instance_40}]},1).to({state:[]},4).to({state:[{t:this.instance_41}]},1).to({state:[]},5).to({state:[{t:this.instance_42}]},135).to({state:[]},5).wait(146));

	// Text Box Control
	this.next_1 = new lib.NextButton();
	this.next_1.setTransform(424,461,1,1,0,0,0,29.5,15);
	this.next_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.next_1).wait(4).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},5).wait(130).to({_off:false},0).to({_off:true},5).wait(145).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},5).wait(135).to({_off:false},0).to({_off:true},5).wait(25).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},5).wait(106));

	// Text Box
	this.instance_43 = new lib.rectangle();
	this.instance_43.setTransform(524.9,390.1,1,1,0,0,0,136.9,52);

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(600));

	// image
	this.instance_44 = new lib.Metropolisfull();
	this.instance_44.setTransform(-323,-502.5);

	this.instance_45 = new lib.LIDcity_1();
	this.instance_45.setTransform(-323,-502.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_44}]}).to({state:[{t:this.instance_45}]},599).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323,-502.5,1233,990);


(lib.normalnormalwatershed_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_159 = function() {
		this.stop();
	}
	this.frame_169 = function() {
		this.stop();
	}
	this.frame_319 = function() {
		this.stop();
	}
	this.frame_329 = function() {
		this.stop();
	}
	this.frame_499 = function() {
		this.stop();
	}
	this.frame_599 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(10).call(this.frame_29).wait(130).call(this.frame_159).wait(10).call(this.frame_169).wait(150).call(this.frame_319).wait(10).call(this.frame_329).wait(170).call(this.frame_499).wait(100).call(this.frame_599).wait(1));

	// title
	this.instance_23 = new lib.TEMPLABEL();
	this.instance_23.setTransform(-97.9,458.3,1,1,0,0,0,49,9.5);

	this.instance_24 = new lib.Precipitationlabel();
	this.instance_24.setTransform(-237.9,460.8,1,1,0,0,0,51.5,12);

	this.instance_25 = new lib.CityTypeLID();
	this.instance_25.setTransform(306.1,-480.9,1,1,0,0,0,202,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_25},{t:this.instance_24},{t:this.instance_23}]}).wait(600));

	// graph mask copy (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_1 = new cjs.Graphics().p("EgMMAjDIAAx4IR2AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_2_graphics_1,x:-78.1,y:224.4}).wait(599));

	// graph copy
	this.instance_26 = new lib.tempgraph();
	this.instance_26.setTransform(2039,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_26._off = true;

	this.instance_26.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(1).to({_off:false},0).to({x:1184.8,y:390.4},598).wait(1));

	// graph mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_1 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_3_graphics_1,x:-147.1,y:224.4}).wait(599));

	// graph
	this.instance_27 = new lib.watergraph();
	this.instance_27.setTransform(1901,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_27._off = true;

	this.instance_27.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(1).to({_off:false},0).to({x:1047.4,y:390.4},598).wait(1));

	// Temp Events
	this.instance_28 = new lib.NormalTempFall1_1();
	this.instance_28.setTransform(524,407.5,1,1,0,0,0,129.9,63.2);

	this.instance_29 = new lib.NormalTempFall2_1();
	this.instance_29.setTransform(524,407.5,1,1,0,0,0,129.9,63.2);

	this.instance_30 = new lib.NormalTempFall3();
	this.instance_30.setTransform(524,407.5,1,1,0,0,0,129.9,63.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_28}]},479).to({state:[]},4).to({state:[{t:this.instance_29}]},1).to({state:[]},4).to({state:[{t:this.instance_30}]},1).to({state:[]},5).wait(106));

	// Precip Events
	this.instance_31 = new lib.NormalPrecipWinter1();
	this.instance_31.setTransform(521.9,416.6,1,1,0,0,0,129.9,71);

	this.instance_32 = new lib.NormalPrecipWinter2();
	this.instance_32.setTransform(523,454.2,1,1,0,0,0,129.9,109.9);

	this.instance_33 = new lib.NormalPrecipSpring1_1();
	this.instance_33.setTransform(523.9,402.8,1,1,0,0,0,129.9,59);

	this.instance_34 = new lib.NormalPrecipSpring2_1();
	this.instance_34.setTransform(526.9,428.6,1,1,0,0,0,129.9,86.5);

	this.instance_35 = new lib.NormalPrecipSummer1();
	this.instance_35.setTransform(529.9,403.3,1,1,0,0,0,129.9,59);

	this.instance_36 = new lib.NormalPrecipSummer2();
	this.instance_36.setTransform(522.9,414.6,1,1,0,0,0,129.9,71);

	this.instance_37 = new lib.NormalPrecipFall1_1();
	this.instance_37.setTransform(525,423.1,1,1,0,0,0,129.9,78.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_31}]},19).to({state:[]},5).to({state:[{t:this.instance_32}]},5).to({state:[]},5).to({state:[{t:this.instance_33}]},125).to({state:[]},5).to({state:[{t:this.instance_34}]},5).to({state:[]},5).to({state:[{t:this.instance_35}]},145).to({state:[]},5).to({state:[{t:this.instance_36}]},5).to({state:[]},5).to({state:[{t:this.instance_37}]},165).to({state:[]},5).wait(96));

	// Text Box Control
	this.next_1 = new lib.NextButton();
	this.next_1.setTransform(424,461,1,1,0,0,0,29.5,15);
	this.next_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.next_1).wait(19).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(125).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(145).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(145).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(96));

	// Text Box
	this.instance_38 = new lib.rectangle();
	this.instance_38.setTransform(524.9,390.1,1,1,0,0,0,136.9,52);

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(600));

	// image
	this.instance_39 = new lib.Metropolisfull();
	this.instance_39.setTransform(-323,-502.5);

	this.instance_40 = new lib.LIDcity_1();
	this.instance_40.setTransform(-323,-502.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_39}]}).to({state:[{t:this.instance_40}]},599).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323,-502.5,1233,990);


(lib.normalabdrywatershed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}
	this.frame_159 = function() {
		this.stop();
	}
	this.frame_165 = function() {
		this.stop();
	}
	this.frame_170 = function() {
		this.stop();
	}
	this.frame_175 = function() {
		this.stop();
	}
	this.frame_299 = function() {
		this.stop();
	}
	this.frame_304 = function() {
		this.stop();
	}
	this.frame_309 = function() {
		this.stop();
	}
	this.frame_314 = function() {
		this.stop();
	}
	this.frame_459 = function() {
		this.stop();
	}
	this.frame_465 = function() {
		this.stop();
	}
	this.frame_469 = function() {
		this.stop();
	}
	this.frame_479 = function() {
		this.stop();
	}
	this.frame_484 = function() {
		this.stop();
	}
	this.frame_489 = function() {
		this.stop();
	}
	this.frame_599 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(135).call(this.frame_159).wait(6).call(this.frame_165).wait(5).call(this.frame_170).wait(5).call(this.frame_175).wait(124).call(this.frame_299).wait(5).call(this.frame_304).wait(5).call(this.frame_309).wait(5).call(this.frame_314).wait(145).call(this.frame_459).wait(6).call(this.frame_465).wait(4).call(this.frame_469).wait(10).call(this.frame_479).wait(5).call(this.frame_484).wait(5).call(this.frame_489).wait(110).call(this.frame_599).wait(1));

	// title
	this.instance = new lib.WaterBudget();
	this.instance.setTransform(136,391.9,1,1,0,0,0,149,47.6);

	this.instance_1 = new lib.TEMPLABEL();
	this.instance_1.setTransform(-97.9,458.3,1,1,0,0,0,49,9.5);

	this.instance_2 = new lib.Precipitationlabel();
	this.instance_2.setTransform(-237.9,460.8,1,1,0,0,0,51.5,12);

	this.instance_3 = new lib.CityTypeLID();
	this.instance_3.setTransform(306.1,-480.9,1,1,0,0,0,202,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(600));

	// graph mask copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("EgMMAjDIAAx4IR2AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:-78.1,y:224.4}).wait(599));

	// graph copy
	this.instance_4 = new lib.tempgraph();
	this.instance_4.setTransform(2039,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({x:1184.8,y:390.4},598).wait(1));

	// graph mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_1 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_1,x:-147.1,y:224.4}).wait(599));

	// graph
	this.instance_5 = new lib.watergraph();
	this.instance_5.setTransform(1901,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_5._off = true;

	this.instance_5.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({x:1047.4,y:390.4},598).wait(1));

	// Temp Events
	this.instance_6 = new lib.NormalTempFall1_1();
	this.instance_6.setTransform(524,407.5,1,1,0,0,0,129.9,63.2);

	this.instance_7 = new lib.NormalTempFall2_1();
	this.instance_7.setTransform(524,407.5,1,1,0,0,0,129.9,63.2);

	this.instance_8 = new lib.NormalTempFall3();
	this.instance_8.setTransform(524,407.5,1,1,0,0,0,129.9,63.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},479).to({state:[]},4).to({state:[{t:this.instance_7}]},1).to({state:[]},4).to({state:[{t:this.instance_8}]},1).to({state:[]},5).wait(106));

	// Precip Events
	this.instance_9 = new lib.AbDryWinter_1();
	this.instance_9.setTransform(517.9,446.3,1,1,0,0,0,129.9,102);

	this.instance_10 = new lib.AbDrySpring1_1();
	this.instance_10.setTransform(522,446.3,1,1,0,0,0,129.9,102);

	this.instance_11 = new lib.AbDrySpring2_1();
	this.instance_11.setTransform(522,446.3,1,1,0,0,0,129.9,102);

	this.instance_12 = new lib.AbDrySpring3_1();
	this.instance_12.setTransform(522,446.3,1,1,0,0,0,129.9,102);

	this.instance_13 = new lib.AbDrySpring4();
	this.instance_13.setTransform(522,446.3,1,1,0,0,0,129.9,102);

	this.instance_14 = new lib.AbDrySummer1_1();
	this.instance_14.setTransform(524,399.7,1,1,0,0,0,129.9,55.4);

	this.instance_15 = new lib.AbDrySummer2_1();
	this.instance_15.setTransform(524,399.7,1,1,0,0,0,129.9,55.4);

	this.instance_16 = new lib.AbDrySummer3_1();
	this.instance_16.setTransform(524,399.7,1,1,0,0,0,129.9,55.4);

	this.instance_17 = new lib.AbDrySummer4_1();
	this.instance_17.setTransform(524,399.7,1,1,0,0,0,129.9,55.4);

	this.instance_18 = new lib.AbDryFall1_1();
	this.instance_18.setTransform(528.9,399.7,1,1,0,0,0,129.9,55.4);

	this.instance_19 = new lib.AbDryFall2_1();
	this.instance_19.setTransform(528.9,399.7,1,1,0,0,0,129.9,55.4);

	this.instance_20 = new lib.AbDryFall3_1();
	this.instance_20.setTransform(528.9,399.7,1,1,0,0,0,129.9,55.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},24).to({state:[]},5).to({state:[{t:this.instance_10}]},130).to({state:[]},5).to({state:[{t:this.instance_11}]},1).to({state:[]},4).to({state:[{t:this.instance_12}]},1).to({state:[]},4).to({state:[{t:this.instance_13}]},1).to({state:[]},4).to({state:[{t:this.instance_14}]},120).to({state:[]},4).to({state:[{t:this.instance_15}]},1).to({state:[]},4).to({state:[{t:this.instance_16}]},1).to({state:[]},4).to({state:[{t:this.instance_17}]},1).to({state:[]},4).to({state:[{t:this.instance_18}]},141).to({state:[]},5).to({state:[{t:this.instance_19}]},1).to({state:[]},3).to({state:[{t:this.instance_20}]},1).to({state:[]},6).wait(125));

	// Text Box Control
	this.next = new lib.NextButton();
	this.next.setTransform(424,461,1,1,0,0,0,29.5,15);
	this.next._off = true;

	this.timeline.addTween(cjs.Tween.get(this.next).wait(24).to({_off:false},0).to({_off:true},5).wait(130).to({_off:false},0).to({_off:true},5).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(120).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(141).to({_off:false},0).to({_off:true},5).wait(1).to({_off:false},0).to({_off:true},3).wait(1).to({_off:false},0).to({_off:true},6).wait(4).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},5).wait(106));

	// Text Box
	this.instance_21 = new lib.rectangle();
	this.instance_21.setTransform(524.9,390.1,1,1,0,0,0,136.9,52);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(600));

	// image
	this.instance_22 = new lib.Metropolisfull();
	this.instance_22.setTransform(-323,-502.5);

	this.instance_23 = new lib.LIDcity_1();
	this.instance_23.setTransform(-323,-502.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_22}]}).to({state:[{t:this.instance_23}]},599).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323,-502.5,1233,990);


(lib.abhotnormalwatershed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_149 = function() {
		this.stop();
	}
	this.frame_159 = function() {
		this.stop();
	}
	this.frame_169 = function() {
		this.stop();
	}
	this.frame_299 = function() {
		this.stop();
	}
	this.frame_309 = function() {
		this.stop();
	}
	this.frame_319 = function() {
		this.stop();
	}
	this.frame_329 = function() {
		this.stop();
	}
	this.frame_449 = function() {
		this.stop();
	}
	this.frame_459 = function() {
		this.stop();
	}
	this.frame_469 = function() {
		this.stop();
	}
	this.frame_479 = function() {
		this.stop();
	}
	this.frame_489 = function() {
		this.stop();
	}
	this.frame_499 = function() {
		this.stop();
	}
	this.frame_599 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(10).call(this.frame_29).wait(120).call(this.frame_149).wait(10).call(this.frame_159).wait(10).call(this.frame_169).wait(130).call(this.frame_299).wait(10).call(this.frame_309).wait(10).call(this.frame_319).wait(10).call(this.frame_329).wait(120).call(this.frame_449).wait(10).call(this.frame_459).wait(10).call(this.frame_469).wait(10).call(this.frame_479).wait(10).call(this.frame_489).wait(10).call(this.frame_499).wait(100).call(this.frame_599).wait(7));

	// title
	this.instance = new lib.TEMPLABEL();
	this.instance.setTransform(-97.9,458.3,1,1,0,0,0,49,9.5);

	this.instance_1 = new lib.Precipitationlabel();
	this.instance_1.setTransform(-237.9,460.8,1,1,0,0,0,51.5,12);

	this.instance_2 = new lib.CityTypeLID();
	this.instance_2.setTransform(306.1,-480.9,1,1,0,0,0,202,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[]},600).wait(6));

	// graph mask copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("EgMMAjDIAAx4IR2AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:-78.1,y:224.4}).wait(605));

	// graph copy
	this.instance_3 = new lib.tempgraph();
	this.instance_3.setTransform(2039,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({x:1184.8,y:390.4},598).to({_off:true},1).wait(6));

	// graph mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_1 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_1,x:-147.1,y:224.4}).wait(605));

	// graph
	this.instance_4 = new lib.watergraph();
	this.instance_4.setTransform(1901,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_4._off = true;

	this.instance_4.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({x:1047.4,y:390.4},598).to({_off:true},1).wait(6));

	// Temp Events
	this.instance_5 = new lib.abhotwinter();
	this.instance_5.setTransform(507.1,402.8,1,1,0,0,0,114,58.5);

	this.instance_6 = new lib.AbhotSpring();
	this.instance_6.setTransform(481.1,389.3,1,1,0,0,0,87.5,45);

	this.instance_7 = new lib.AbhotSummer1();
	this.instance_7.setTransform(525,392.2,1,1,0,0,0,129.9,50);

	this.instance_8 = new lib.AbhotSummer2();
	this.instance_8.setTransform(525.9,392.2,1,1,0,0,0,129.9,50);

	this.instance_9 = new lib.AbhotFall1();
	this.instance_9.setTransform(526,407.5,1,1,0,0,0,129.9,63.2);

	this.instance_10 = new lib.AbhotFall2();
	this.instance_10.setTransform(526,407.5,1,1,0,0,0,129.9,63.2);

	this.instance_11 = new lib.AbhotFall3();
	this.instance_11.setTransform(526,407.5,1,1,0,0,0,129.9,63.2);

	this.instance_12 = new lib.AbhotFall4();
	this.instance_12.setTransform(526,407.5,1,1,0,0,0,129.9,63.2);

	this.instance_13 = new lib.AbhotFall5();
	this.instance_13.setTransform(526,407.5,1,1,0,0,0,129.9,63.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},9).to({state:[]},5).to({state:[{t:this.instance_6}]},135).to({state:[]},5).to({state:[{t:this.instance_7}]},145).to({state:[]},5).to({state:[{t:this.instance_8}]},5).to({state:[]},5).to({state:[{t:this.instance_9}]},135).to({state:[]},5).to({state:[{t:this.instance_10}]},5).to({state:[]},5).to({state:[{t:this.instance_11}]},5).to({state:[]},5).to({state:[{t:this.instance_12}]},5).to({state:[]},5).to({state:[{t:this.instance_13}]},5).to({state:[]},5).to({state:[]},106).wait(6));

	// Precip Events
	this.instance_14 = new lib.NormalPrecipWinter1();
	this.instance_14.setTransform(521.9,416.6,1,1,0,0,0,129.9,71);

	this.instance_15 = new lib.NormalPrecipWinter2();
	this.instance_15.setTransform(523,454.2,1,1,0,0,0,129.9,109.9);

	this.instance_16 = new lib.NormalPrecipSpring1_1();
	this.instance_16.setTransform(523.9,402.8,1,1,0,0,0,129.9,59);

	this.instance_17 = new lib.NormalPrecipSpring2_1();
	this.instance_17.setTransform(526.9,428.6,1,1,0,0,0,129.9,86.5);

	this.instance_18 = new lib.NormalPrecipSummer1();
	this.instance_18.setTransform(529.9,403.3,1,1,0,0,0,129.9,59);

	this.instance_19 = new lib.NormalPrecipSummer2();
	this.instance_19.setTransform(522.9,414.6,1,1,0,0,0,129.9,71);

	this.instance_20 = new lib.NormalPrecipFall1_1();
	this.instance_20.setTransform(525,423.1,1,1,0,0,0,129.9,78.8);

	this.instance_21 = new lib.NormalPrecipFall2_1();
	this.instance_21.setTransform(524,446.3,1,1,0,0,0,129.9,102);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14}]},19).to({state:[]},5).to({state:[{t:this.instance_15}]},5).to({state:[]},5).to({state:[{t:this.instance_16}]},125).to({state:[]},5).to({state:[{t:this.instance_17}]},5).to({state:[]},5).to({state:[{t:this.instance_18}]},145).to({state:[]},5).to({state:[{t:this.instance_19}]},5).to({state:[]},5).to({state:[{t:this.instance_20}]},165).to({state:[]},5).to({state:[{t:this.instance_21}]},5).to({state:[]},6).to({state:[]},85).wait(6));

	// Text Box Control
	this.next = new lib.NextButton();
	this.next.setTransform(424,461,1,1,0,0,0,29.5,15);
	this.next._off = true;

	this.timeline.addTween(cjs.Tween.get(this.next).wait(9).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(115).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(125).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(115).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(92));

	// Text Box
	this.instance_22 = new lib.rectangle();
	this.instance_22.setTransform(524.9,390.1,1,1,0,0,0,136.9,52);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({_off:true},600).wait(6));

	// image
	this.instance_23 = new lib.Metropolisfull();
	this.instance_23.setTransform(-323,-502.5);

	this.instance_24 = new lib.LIDcity_1();
	this.instance_24.setTransform(-323,-502.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23}]}).to({state:[{t:this.instance_24}]},599).to({state:[]},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323,-502.5,1233,990);


(lib.abhotabwetwatershed_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_149 = function() {
		this.stop();
	}
	this.frame_299 = function() {
		this.stop();
	}
	this.frame_309 = function() {
		this.stop();
	}
	this.frame_449 = function() {
		this.stop();
	}
	this.frame_459 = function() {
		this.stop();
	}
	this.frame_469 = function() {
		this.stop();
	}
	this.frame_479 = function() {
		this.stop();
	}
	this.frame_489 = function() {
		this.stop();
	}
	this.frame_599 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(140).call(this.frame_149).wait(150).call(this.frame_299).wait(10).call(this.frame_309).wait(140).call(this.frame_449).wait(10).call(this.frame_459).wait(10).call(this.frame_469).wait(10).call(this.frame_479).wait(10).call(this.frame_489).wait(110).call(this.frame_599).wait(1));

	// title
	this.instance_14 = new lib.WaterBudget();
	this.instance_14.setTransform(136,391.9,1,1,0,0,0,149,47.6);

	this.instance_15 = new lib.TEMPLABEL();
	this.instance_15.setTransform(-97.9,458.3,1,1,0,0,0,49,9.5);

	this.instance_16 = new lib.Precipitationlabel();
	this.instance_16.setTransform(-237.9,460.8,1,1,0,0,0,51.5,12);

	this.instance_17 = new lib.CityTypeLID();
	this.instance_17.setTransform(306.1,-480.9,1,1,0,0,0,202,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(600));

	// graph mask copy (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_1 = new cjs.Graphics().p("EgMMAjDIAAx4IR2AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_2_graphics_1,x:-78.1,y:224.4}).wait(599));

	// graph copy
	this.instance_18 = new lib.tempgraph();
	this.instance_18.setTransform(2039,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_18._off = true;

	this.instance_18.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1).to({_off:false},0).to({x:1184.8,y:390.4},598).wait(1));

	// graph mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_1 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_3_graphics_1,x:-147.1,y:224.4}).wait(599));

	// graph
	this.instance_19 = new lib.watergraph();
	this.instance_19.setTransform(1901,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_19._off = true;

	this.instance_19.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1).to({_off:false},0).to({x:1047.4,y:390.4},598).wait(1));

	// Temp Events
	this.instance_20 = new lib.abhotwinter();
	this.instance_20.setTransform(507.1,402.8,1,1,0,0,0,114,58.5);

	this.instance_21 = new lib.AbhotSpring();
	this.instance_21.setTransform(481.1,389.3,1,1,0,0,0,87.5,45);

	this.instance_22 = new lib.AbhotSummer1();
	this.instance_22.setTransform(525,392.2,1,1,0,0,0,129.9,50);

	this.instance_23 = new lib.AbhotSummer2();
	this.instance_23.setTransform(525.9,392.2,1,1,0,0,0,129.9,50);

	this.instance_24 = new lib.AbhotFall1();
	this.instance_24.setTransform(526,407.5,1,1,0,0,0,129.9,63.2);

	this.instance_25 = new lib.AbhotFall2();
	this.instance_25.setTransform(526,407.5,1,1,0,0,0,129.9,63.2);

	this.instance_26 = new lib.AbhotFall3();
	this.instance_26.setTransform(526,407.5,1,1,0,0,0,129.9,63.2);

	this.instance_27 = new lib.AbhotFall4();
	this.instance_27.setTransform(526,407.5,1,1,0,0,0,129.9,63.2);

	this.instance_28 = new lib.AbhotFall5();
	this.instance_28.setTransform(526,407.5,1,1,0,0,0,129.9,63.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_20}]},24).to({state:[]},5).to({state:[{t:this.instance_21}]},120).to({state:[]},5).to({state:[{t:this.instance_22}]},165).to({state:[]},5).to({state:[{t:this.instance_23}]},5).to({state:[]},5).to({state:[{t:this.instance_24}]},115).to({state:[]},5).to({state:[{t:this.instance_25}]},5).to({state:[]},5).to({state:[{t:this.instance_26}]},5).to({state:[]},5).to({state:[{t:this.instance_27}]},5).to({state:[]},5).to({state:[{t:this.instance_28}]},5).to({state:[]},5).wait(106));

	// Precip Events
	this.instance_29 = new lib.AbWetWinter1();
	this.instance_29.setTransform(529.9,415.3,1,1,0,0,0,129.9,71);

	this.instance_30 = new lib.AbWetWinter2();
	this.instance_30.setTransform(529.9,415.3,1,1,0,0,0,129.9,71);

	this.instance_31 = new lib.AbWetWinter3();
	this.instance_31.setTransform(529.9,415.3,1,1,0,0,0,129.9,71);

	this.instance_32 = new lib.AbWetSpring();
	this.instance_32.setTransform(524.9,416.6,1,1,0,0,0,129.9,71);

	this.instance_33 = new lib.AbWetSummer1_1();
	this.instance_33.setTransform(523.9,415.3,1,1,0,0,0,129.9,71);

	this.instance_34 = new lib.AbWetSummer2_1();
	this.instance_34.setTransform(523.9,415.3,1,1,0,0,0,129.9,71);

	this.instance_35 = new lib.AbWetSummer3_1();
	this.instance_35.setTransform(523.9,415.3,1,1,0,0,0,129.9,71);

	this.instance_36 = new lib.AbWetFall();
	this.instance_36.setTransform(522.9,414.1,1,1,0,0,0,129.9,71);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_29}]},4).to({state:[]},4).to({state:[{t:this.instance_30}]},1).to({state:[]},4).to({state:[{t:this.instance_31}]},1).to({state:[]},5).to({state:[{t:this.instance_32}]},145).to({state:[]},5).to({state:[{t:this.instance_33}]},130).to({state:[]},4).to({state:[{t:this.instance_34}]},1).to({state:[]},4).to({state:[{t:this.instance_35}]},1).to({state:[]},5).to({state:[{t:this.instance_36}]},195).to({state:[]},5).wait(86));

	// Text Box Control
	this.next_1 = new lib.NextButton();
	this.next_1.setTransform(424,461,1,1,0,0,0,29.5,15);
	this.next_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.next_1).wait(4).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(120).to({_off:false},0).to({_off:true},5).wait(10).to({_off:false},0).to({_off:true},5).wait(130).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(115).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(96));

	// Text Box
	this.instance_37 = new lib.rectangle();
	this.instance_37.setTransform(524.9,390.1,1,1,0,0,0,136.9,52);

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(600));

	// image
	this.instance_38 = new lib.Metropolisfull();
	this.instance_38.setTransform(-323,-502.5);

	this.instance_39 = new lib.LIDcity_1();
	this.instance_39.setTransform(-323,-502.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_38}]}).to({state:[{t:this.instance_39}]},599).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323,-502.5,1233,990);


(lib.abhotabdrywatershed_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_149 = function() {
		this.stop();
	}
	this.frame_299 = function() {
		this.stop();
	}
	this.frame_309 = function() {
		this.stop();
	}
	this.frame_449 = function() {
		this.stop();
	}
	this.frame_459 = function() {
		this.stop();
	}
	this.frame_469 = function() {
		this.stop();
	}
	this.frame_479 = function() {
		this.stop();
	}
	this.frame_489 = function() {
		this.stop();
	}
	this.frame_599 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(140).call(this.frame_149).wait(150).call(this.frame_299).wait(10).call(this.frame_309).wait(140).call(this.frame_449).wait(10).call(this.frame_459).wait(10).call(this.frame_469).wait(10).call(this.frame_479).wait(10).call(this.frame_489).wait(110).call(this.frame_599).wait(1));

	// title
	this.instance_16 = new lib.WaterBudget();
	this.instance_16.setTransform(136,391.9,1,1,0,0,0,149,47.6);

	this.instance_17 = new lib.TEMPLABEL();
	this.instance_17.setTransform(-97.9,458.3,1,1,0,0,0,49,9.5);

	this.instance_18 = new lib.Precipitationlabel();
	this.instance_18.setTransform(-237.9,460.8,1,1,0,0,0,51.5,12);

	this.instance_19 = new lib.CityTypeLID();
	this.instance_19.setTransform(306.1,-480.9,1,1,0,0,0,202,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16}]}).wait(600));

	// graph mask copy (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_1 = new cjs.Graphics().p("EgMMAjDIAAx4IR2AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_2_graphics_1,x:-78.1,y:224.4}).wait(599));

	// graph copy
	this.instance_20 = new lib.tempgraph();
	this.instance_20.setTransform(2039,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_20._off = true;

	this.instance_20.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1).to({_off:false},0).to({x:1184.8,y:390.4},598).wait(1));

	// graph mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_1 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_3_graphics_1,x:-147.1,y:224.4}).wait(599));

	// graph
	this.instance_21 = new lib.watergraph();
	this.instance_21.setTransform(1901,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_21._off = true;

	this.instance_21.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1).to({_off:false},0).to({x:1047.4,y:390.4},598).wait(1));

	// Temp Events
	this.instance_22 = new lib.abhotwinter();
	this.instance_22.setTransform(507.1,402.8,1,1,0,0,0,114,58.5);

	this.instance_23 = new lib.AbhotSpring();
	this.instance_23.setTransform(481.1,389.3,1,1,0,0,0,87.5,45);

	this.instance_24 = new lib.AbhotSummer1();
	this.instance_24.setTransform(525,392.2,1,1,0,0,0,129.9,50);

	this.instance_25 = new lib.AbhotSummer2();
	this.instance_25.setTransform(525.9,392.2,1,1,0,0,0,129.9,50);

	this.instance_26 = new lib.AbhotFall1();
	this.instance_26.setTransform(526,407.5,1,1,0,0,0,129.9,63.2);

	this.instance_27 = new lib.AbhotFall2();
	this.instance_27.setTransform(526,407.5,1,1,0,0,0,129.9,63.2);

	this.instance_28 = new lib.AbhotFall3();
	this.instance_28.setTransform(526,407.5,1,1,0,0,0,129.9,63.2);

	this.instance_29 = new lib.AbhotFall4();
	this.instance_29.setTransform(526,407.5,1,1,0,0,0,129.9,63.2);

	this.instance_30 = new lib.AbhotFall5();
	this.instance_30.setTransform(526,407.5,1,1,0,0,0,129.9,63.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_22}]},9).to({state:[]},5).to({state:[{t:this.instance_23}]},135).to({state:[]},5).to({state:[{t:this.instance_24}]},145).to({state:[]},5).to({state:[{t:this.instance_25}]},5).to({state:[]},5).to({state:[{t:this.instance_26}]},135).to({state:[]},5).to({state:[{t:this.instance_27}]},5).to({state:[]},5).to({state:[{t:this.instance_28}]},5).to({state:[]},5).to({state:[{t:this.instance_29}]},5).to({state:[]},5).to({state:[{t:this.instance_30}]},5).to({state:[]},5).wait(106));

	// Precip Events
	this.instance_31 = new lib.AbDryWinter_1();
	this.instance_31.setTransform(517.9,446.3,1,1,0,0,0,129.9,102);

	this.instance_32 = new lib.AbDrySpring1_1();
	this.instance_32.setTransform(522,446.3,1,1,0,0,0,129.9,102);

	this.instance_33 = new lib.AbDrySpring2_1();
	this.instance_33.setTransform(522,446.3,1,1,0,0,0,129.9,102);

	this.instance_34 = new lib.AbDrySpring3_1();
	this.instance_34.setTransform(522,446.3,1,1,0,0,0,129.9,102);

	this.instance_35 = new lib.AbDrySpring4();
	this.instance_35.setTransform(522,446.3,1,1,0,0,0,129.9,102);

	this.instance_36 = new lib.AbDrySummer1_1();
	this.instance_36.setTransform(524,399.7,1,1,0,0,0,129.9,55.4);

	this.instance_37 = new lib.AbDrySummer2_1();
	this.instance_37.setTransform(524,399.7,1,1,0,0,0,129.9,55.4);

	this.instance_38 = new lib.AbDrySummer3_1();
	this.instance_38.setTransform(524,399.7,1,1,0,0,0,129.9,55.4);

	this.instance_39 = new lib.AbDrySummer4_1();
	this.instance_39.setTransform(524,399.7,1,1,0,0,0,129.9,55.4);

	this.instance_40 = new lib.AbDryFall1_1();
	this.instance_40.setTransform(528.9,399.7,1,1,0,0,0,129.9,55.4);

	this.instance_41 = new lib.AbDryFall2_1();
	this.instance_41.setTransform(528.9,399.7,1,1,0,0,0,129.9,55.4);

	this.instance_42 = new lib.AbDryFall3_1();
	this.instance_42.setTransform(528.9,399.7,1,1,0,0,0,129.9,55.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_31}]},24).to({state:[]},5).to({state:[{t:this.instance_32}]},130).to({state:[]},5).to({state:[{t:this.instance_33}]},1).to({state:[]},4).to({state:[{t:this.instance_34}]},1).to({state:[]},4).to({state:[{t:this.instance_35}]},1).to({state:[]},4).to({state:[{t:this.instance_36}]},140).to({state:[]},4).to({state:[{t:this.instance_37}]},1).to({state:[]},4).to({state:[{t:this.instance_38}]},1).to({state:[]},4).to({state:[{t:this.instance_39}]},1).to({state:[]},4).to({state:[{t:this.instance_40}]},161).to({state:[]},5).to({state:[{t:this.instance_41}]},1).to({state:[]},3).to({state:[{t:this.instance_42}]},1).to({state:[]},6).wait(85));

	// Text Box Control
	this.next_1 = new lib.NextButton();
	this.next_1.setTransform(424,461,1,1,0,0,0,29.5,15);
	this.next_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.next_1).wait(9).to({_off:false},0).to({_off:true},5).wait(10).to({_off:false},0).to({_off:true},5).wait(120).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(120).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(111).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(1).to({_off:false},0).to({_off:true},3).wait(1).to({_off:false},0).to({_off:true},6).wait(85));

	// Text Box
	this.instance_43 = new lib.rectangle();
	this.instance_43.setTransform(524.9,390.1,1,1,0,0,0,136.9,52);

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(600));

	// image
	this.instance_44 = new lib.Metropolisfull();
	this.instance_44.setTransform(-323,-502.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(600));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323,-502.5,1233,990);


(lib.abcoldnormalwatershed_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_149 = function() {
		this.stop();
	}
	this.frame_159 = function() {
		this.stop();
	}
	this.frame_169 = function() {
		this.stop();
	}
	this.frame_319 = function() {
		this.stop();
	}
	this.frame_329 = function() {
		this.stop();
	}
	this.frame_449 = function() {
		this.stop();
	}
	this.frame_499 = function() {
		this.stop();
	}
	this.frame_599 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(10).call(this.frame_14).wait(5).call(this.frame_19).wait(10).call(this.frame_29).wait(120).call(this.frame_149).wait(10).call(this.frame_159).wait(10).call(this.frame_169).wait(150).call(this.frame_319).wait(10).call(this.frame_329).wait(120).call(this.frame_449).wait(50).call(this.frame_499).wait(100).call(this.frame_599).wait(1));

	// title
	this.instance_11 = new lib.WaterBudget();
	this.instance_11.setTransform(136,391.9,1,1,0,0,0,149,47.6);

	this.instance_12 = new lib.TEMPLABEL();
	this.instance_12.setTransform(-97.9,458.3,1,1,0,0,0,49,9.5);

	this.instance_13 = new lib.Precipitationlabel();
	this.instance_13.setTransform(-237.9,460.8,1,1,0,0,0,51.5,12);

	this.instance_14 = new lib.CityTypeLID();
	this.instance_14.setTransform(306.1,-480.9,1,1,0,0,0,202,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11}]}).wait(600));

	// graph mask copy (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_1 = new cjs.Graphics().p("EgMMAjDIAAx4IR2AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_2_graphics_1,x:-78.1,y:224.4}).wait(599));

	// graph copy
	this.instance_15 = new lib.tempgraph();
	this.instance_15.setTransform(2039,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_15._off = true;

	this.instance_15.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({_off:false},0).to({x:1184.8,y:390.4},598).wait(1));

	// graph mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_1 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_3_graphics_1,x:-147.1,y:224.4}).wait(599));

	// graph
	this.instance_16 = new lib.watergraph();
	this.instance_16.setTransform(1901,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_16._off = true;

	this.instance_16.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({_off:false},0).to({x:1047.4,y:390.4},598).wait(1));

	// Temp Events
	this.instance_17 = new lib.AbColdWinter();
	this.instance_17.setTransform(524,416.6,1,1,0,0,0,129.9,71);

	this.instance_18 = new lib.AbColdWinter2_1();
	this.instance_18.setTransform(524,415.3,1,1,0,0,0,129.9,71);

	this.instance_19 = new lib.AbColdSpring_1();
	this.instance_19.setTransform(531.9,416.6,1,1,0,0,0,129.9,71);

	this.instance_20 = new lib.AbColdFall();
	this.instance_20.setTransform(524,416.6,1,1,0,0,0,129.9,71);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_17}]},4).to({state:[]},5).to({state:[{t:this.instance_18}]},5).to({state:[]},5).to({state:[{t:this.instance_19}]},130).to({state:[]},5).to({state:[{t:this.instance_20}]},295).to({state:[]},5).wait(146));

	// Precip Events
	this.instance_21 = new lib.NormalPrecipWinter1();
	this.instance_21.setTransform(521.9,416.6,1,1,0,0,0,129.9,71);

	this.instance_22 = new lib.NormalPrecipWinter2();
	this.instance_22.setTransform(523,454.2,1,1,0,0,0,129.9,109.9);

	this.instance_23 = new lib.NormalPrecipSpring1_1();
	this.instance_23.setTransform(523.9,402.8,1,1,0,0,0,129.9,59);

	this.instance_24 = new lib.NormalPrecipSpring2_1();
	this.instance_24.setTransform(526.9,428.6,1,1,0,0,0,129.9,86.5);

	this.instance_25 = new lib.NormalPrecipSummer1();
	this.instance_25.setTransform(529.9,403.3,1,1,0,0,0,129.9,59);

	this.instance_26 = new lib.NormalPrecipSummer2();
	this.instance_26.setTransform(522.9,414.6,1,1,0,0,0,129.9,71);

	this.instance_27 = new lib.NormalPrecipFall1_1();
	this.instance_27.setTransform(525,423.1,1,1,0,0,0,129.9,78.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_21}]},20).to({state:[]},4).to({state:[{t:this.instance_22}]},5).to({state:[]},5).to({state:[{t:this.instance_23}]},125).to({state:[]},5).to({state:[{t:this.instance_24}]},5).to({state:[]},5).to({state:[{t:this.instance_25}]},145).to({state:[]},5).to({state:[{t:this.instance_26}]},5).to({state:[]},5).to({state:[{t:this.instance_27}]},165).to({state:[]},5).wait(96));

	// Text Box Control
	this.next_1 = new lib.NextButton();
	this.next_1.setTransform(424,461,1,1,0,0,0,29.5,15);
	this.next_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.next_1).wait(4).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(1).to({_off:false},0).to({_off:true},4).wait(5).to({_off:false},0).to({_off:true},5).wait(115).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(145).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(115).to({_off:false},0).to({_off:true},5).wait(45).to({_off:false},0).to({_off:true},5).wait(95).to({_off:false},0).wait(1));

	// Text Box
	this.instance_28 = new lib.rectangle();
	this.instance_28.setTransform(524.9,390.1,1,1,0,0,0,136.9,52);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(600));

	// image
	this.instance_29 = new lib.Metropolisfull();
	this.instance_29.setTransform(-323,-502.5);

	this.instance_30 = new lib.LIDcity_1();
	this.instance_30.setTransform(-323,-502.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_29}]}).to({state:[{t:this.instance_30}]},599).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323,-502.5,1233,990);


(lib.abcoldabwetwatershed_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_149 = function() {
		this.stop();
	}
	this.frame_159 = function() {
		this.stop();
	}
	this.frame_299 = function() {
		this.stop();
	}
	this.frame_304 = function() {
		this.stop();
	}
	this.frame_309 = function() {
		this.stop();
	}
	this.frame_449 = function() {
		this.stop();
	}
	this.frame_459 = function() {
		this.stop();
	}
	this.frame_599 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(10).call(this.frame_29).wait(120).call(this.frame_149).wait(10).call(this.frame_159).wait(140).call(this.frame_299).wait(5).call(this.frame_304).wait(5).call(this.frame_309).wait(140).call(this.frame_449).wait(10).call(this.frame_459).wait(140).call(this.frame_599).wait(1));

	// title
	this.instance_14 = new lib.WaterBudget();
	this.instance_14.setTransform(136,391.9,1,1,0,0,0,149,47.6);

	this.instance_15 = new lib.TEMPLABEL();
	this.instance_15.setTransform(-97.9,458.3,1,1,0,0,0,49,9.5);

	this.instance_16 = new lib.Precipitationlabel();
	this.instance_16.setTransform(-237.9,460.8,1,1,0,0,0,51.5,12);

	this.instance_17 = new lib.CityTypeLID();
	this.instance_17.setTransform(306.1,-480.9,1,1,0,0,0,202,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(600));

	// graph mask copy (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_1 = new cjs.Graphics().p("EgMMAjDIAAx4IR2AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_2_graphics_1,x:-78.1,y:224.4}).wait(599));

	// graph copy
	this.instance_18 = new lib.tempgraph();
	this.instance_18.setTransform(2039,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_18._off = true;

	this.instance_18.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1).to({_off:false},0).wait(599));

	// graph mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_1 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_3_graphics_1,x:-147.1,y:224.4}).wait(599));

	// graph
	this.instance_19 = new lib.watergraph();
	this.instance_19.setTransform(1901,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_19._off = true;

	this.instance_19.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1).to({_off:false},0).wait(599));

	// Temp Events
	this.instance_20 = new lib.AbColdWinter();
	this.instance_20.setTransform(524,416.6,1,1,0,0,0,129.9,71);

	this.instance_21 = new lib.AbColdWinter2_1();
	this.instance_21.setTransform(524,415.3,1,1,0,0,0,129.9,71);

	this.instance_22 = new lib.AbColdSpring_1();
	this.instance_22.setTransform(531.9,416.6,1,1,0,0,0,129.9,71);

	this.instance_23 = new lib.AbColdFall();
	this.instance_23.setTransform(524,416.6,1,1,0,0,0,129.9,71);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_20}]},19).to({state:[]},6).to({state:[{t:this.instance_21}]},4).to({state:[]},6).to({state:[{t:this.instance_22}]},124).to({state:[]},5).to({state:[{t:this.instance_23}]},295).to({state:[]},5).wait(136));

	// Precip Events
	this.instance_24 = new lib.AbWetWinter1();
	this.instance_24.setTransform(529.9,415.3,1,1,0,0,0,129.9,71);

	this.instance_25 = new lib.AbWetWinter2();
	this.instance_25.setTransform(529.9,415.3,1,1,0,0,0,129.9,71);

	this.instance_26 = new lib.AbWetWinter3();
	this.instance_26.setTransform(529.9,415.3,1,1,0,0,0,129.9,71);

	this.instance_27 = new lib.AbWetSpring();
	this.instance_27.setTransform(524.9,416.6,1,1,0,0,0,129.9,71);

	this.instance_28 = new lib.AbWetSummer1_1();
	this.instance_28.setTransform(523.9,415.3,1,1,0,0,0,129.9,71);

	this.instance_29 = new lib.AbWetSummer2_1();
	this.instance_29.setTransform(523.9,415.3,1,1,0,0,0,129.9,71);

	this.instance_30 = new lib.AbWetSummer3_1();
	this.instance_30.setTransform(523.9,415.3,1,1,0,0,0,129.9,71);

	this.instance_31 = new lib.AbWetFall();
	this.instance_31.setTransform(522.9,414.1,1,1,0,0,0,129.9,71);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_24}]},4).to({state:[]},4).to({state:[{t:this.instance_25}]},1).to({state:[]},4).to({state:[{t:this.instance_26}]},1).to({state:[]},4).to({state:[{t:this.instance_27}]},131).to({state:[]},5).to({state:[{t:this.instance_28}]},145).to({state:[]},4).to({state:[{t:this.instance_29}]},1).to({state:[]},4).to({state:[{t:this.instance_30}]},1).to({state:[]},5).to({state:[{t:this.instance_31}]},135).to({state:[]},5).wait(146));

	// Text Box Control
	this.next_1 = new lib.NextButton();
	this.next_1.setTransform(424,461,1,1,0,0,0,29.5,15);
	this.next_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.next_1).wait(4).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},6).wait(4).to({_off:false},0).to({_off:true},6).wait(114).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(135).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},5).wait(135).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(135).to({_off:false},0).wait(1));

	// Text Box
	this.instance_32 = new lib.rectangle();
	this.instance_32.setTransform(524.9,390.1,1,1,0,0,0,136.9,52);

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(600));

	// image
	this.instance_33 = new lib.Metropolisfull();
	this.instance_33.setTransform(-323,-502.5);

	this.instance_34 = new lib.LIDcity_1();
	this.instance_34.setTransform(-323,-502.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_33}]}).to({state:[{t:this.instance_34}]},599).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323,-502.5,1233,990);


(lib.abcoldabdrywatershed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}
	this.frame_149 = function() {
		this.stop();
	}
	this.frame_159 = function() {
		this.stop();
	}
	this.frame_165 = function() {
		this.stop();
	}
	this.frame_170 = function() {
		this.stop();
	}
	this.frame_175 = function() {
		this.stop();
	}
	this.frame_299 = function() {
		this.stop();
	}
	this.frame_304 = function() {
		this.stop();
	}
	this.frame_309 = function() {
		this.stop();
	}
	this.frame_314 = function() {
		this.stop();
	}
	this.frame_449 = function() {
		this.stop();
	}
	this.frame_459 = function() {
		this.stop();
	}
	this.frame_465 = function() {
		this.stop();
	}
	this.frame_469 = function() {
		this.stop();
	}
	this.frame_599 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(10).call(this.frame_14).wait(10).call(this.frame_24).wait(125).call(this.frame_149).wait(10).call(this.frame_159).wait(6).call(this.frame_165).wait(5).call(this.frame_170).wait(5).call(this.frame_175).wait(124).call(this.frame_299).wait(5).call(this.frame_304).wait(5).call(this.frame_309).wait(5).call(this.frame_314).wait(135).call(this.frame_449).wait(10).call(this.frame_459).wait(6).call(this.frame_465).wait(4).call(this.frame_469).wait(130).call(this.frame_599).wait(1));

	// title
	this.instance = new lib.TEMPLABEL();
	this.instance.setTransform(-97.9,458.3,1,1,0,0,0,49,9.5);

	this.instance_1 = new lib.Precipitationlabel();
	this.instance_1.setTransform(-237.9,460.8,1,1,0,0,0,51.5,12);

	this.instance_2 = new lib.CityTypeLID();
	this.instance_2.setTransform(306.1,-480.9,1,1,0,0,0,202,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(600));

	// graph mask copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("EgMMAjDIAAx4IR2AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:-78.1,y:224.4}).wait(599));

	// graph copy
	this.instance_3 = new lib.tempgraph();
	this.instance_3.setTransform(2039,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({x:1184.8,y:390.4},598).wait(1));

	// graph mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_1 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_1,x:-147.1,y:224.4}).wait(599));

	// graph
	this.instance_4 = new lib.watergraph();
	this.instance_4.setTransform(1901,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_4._off = true;

	this.instance_4.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({x:1047.4,y:390.4},598).wait(1));

	// Temp Events
	this.instance_5 = new lib.AbColdWinter();
	this.instance_5.setTransform(524,416.6,1,1,0,0,0,129.9,71);

	this.instance_6 = new lib.AbColdWinter2_1();
	this.instance_6.setTransform(524,415.3,1,1,0,0,0,129.9,71);

	this.instance_7 = new lib.AbColdSpring_1();
	this.instance_7.setTransform(531.9,416.6,1,1,0,0,0,129.9,71);

	this.instance_8 = new lib.AbColdFall();
	this.instance_8.setTransform(524,416.6,1,1,0,0,0,129.9,71);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},4).to({state:[]},5).to({state:[{t:this.instance_6}]},5).to({state:[]},5).to({state:[{t:this.instance_7}]},130).to({state:[]},5).to({state:[{t:this.instance_8}]},295).to({state:[]},5).wait(146));

	// Precip Events
	this.instance_9 = new lib.AbDryWinter_1();
	this.instance_9.setTransform(517.9,446.3,1,1,0,0,0,129.9,102);

	this.instance_10 = new lib.AbDrySpring1_1();
	this.instance_10.setTransform(522,446.3,1,1,0,0,0,129.9,102);

	this.instance_11 = new lib.AbDrySpring2_1();
	this.instance_11.setTransform(522,446.3,1,1,0,0,0,129.9,102);

	this.instance_12 = new lib.AbDrySpring3_1();
	this.instance_12.setTransform(522,446.3,1,1,0,0,0,129.9,102);

	this.instance_13 = new lib.AbDrySpring4();
	this.instance_13.setTransform(522,446.3,1,1,0,0,0,129.9,102);

	this.instance_14 = new lib.AbDrySummer1_1();
	this.instance_14.setTransform(524,399.7,1,1,0,0,0,129.9,55.4);

	this.instance_15 = new lib.AbDrySummer2_1();
	this.instance_15.setTransform(524,399.7,1,1,0,0,0,129.9,55.4);

	this.instance_16 = new lib.AbDrySummer3_1();
	this.instance_16.setTransform(524,399.7,1,1,0,0,0,129.9,55.4);

	this.instance_17 = new lib.AbDrySummer4_1();
	this.instance_17.setTransform(524,399.7,1,1,0,0,0,129.9,55.4);

	this.instance_18 = new lib.AbDryFall1_1();
	this.instance_18.setTransform(528.9,399.7,1,1,0,0,0,129.9,55.4);

	this.instance_19 = new lib.AbDryFall2_1();
	this.instance_19.setTransform(528.9,399.7,1,1,0,0,0,129.9,55.4);

	this.instance_20 = new lib.AbDryFall3_1();
	this.instance_20.setTransform(528.9,399.7,1,1,0,0,0,129.9,55.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},24).to({state:[]},5).to({state:[{t:this.instance_10}]},130).to({state:[]},5).to({state:[{t:this.instance_11}]},1).to({state:[]},4).to({state:[{t:this.instance_12}]},1).to({state:[]},4).to({state:[{t:this.instance_13}]},1).to({state:[]},4).to({state:[{t:this.instance_14}]},120).to({state:[]},4).to({state:[{t:this.instance_15}]},1).to({state:[]},4).to({state:[{t:this.instance_16}]},1).to({state:[]},4).to({state:[{t:this.instance_17}]},1).to({state:[]},4).to({state:[{t:this.instance_18}]},141).to({state:[]},5).to({state:[{t:this.instance_19}]},1).to({state:[]},3).to({state:[{t:this.instance_20}]},1).to({state:[]},6).wait(125));

	// Text Box Control
	this.next = new lib.NextButton();
	this.next.setTransform(424,461,1,1,0,0,0,29.5,15);
	this.next._off = true;

	this.timeline.addTween(cjs.Tween.get(this.next).wait(4).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(120).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(1).to({_off:false},0).to({_off:true},3).wait(2).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},5).wait(119).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(131).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(1).to({_off:false},0).to({_off:true},3).wait(1).to({_off:false},0).to({_off:true},6).wait(125));

	// Text Box
	this.instance_21 = new lib.rectangle();
	this.instance_21.setTransform(524.9,390.1,1,1,0,0,0,136.9,52);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(600));

	// image
	this.instance_22 = new lib.Metropolisfull();
	this.instance_22.setTransform(-323,-502.5);

	this.instance_23 = new lib.LIDcity_1();
	this.instance_23.setTransform(-323,-502.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_22}]}).to({state:[{t:this.instance_23}]},599).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323,-502.5,1233,990);


(lib.Metropolis = function() {
	this.initialize();

	// Title
	this.instance = new lib.MetropolisTitle();
	this.instance.setTransform(165.5,32.2,1,1,0,0,0,72.5,14.8);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqSNMQlalZABnqQgBnmFalaQFZlZHogBQHpABFZFZQFaFagBHmQABHqlaFZQlZFZnpAAQnoAAlZlZg");
	mask.setTransform(135.5,119);

	// Layer 1
	this.instance_1 = new lib.Metropolisfull();
	this.instance_1.setTransform(0,0,0.243,0.243);

	this.instance_1.mask = mask;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(35,2,236,236);


(lib.normalwetwatershed_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_149 = function() {
		this.stop();
	}
	this.frame_154 = function() {
		this.stop();
	}
	this.frame_159 = function() {
		this.stop();
	}
	this.frame_169 = function() {
		this.stop();
	}
	this.frame_174 = function() {
		this.stop();
	}
	this.frame_299 = function() {
		this.stop();
	}
	this.frame_309 = function() {
		this.stop();
	}
	this.frame_449 = function() {
		this.stop();
	}
	this.frame_599 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(145).call(this.frame_149).wait(5).call(this.frame_154).wait(5).call(this.frame_159).wait(10).call(this.frame_169).wait(5).call(this.frame_174).wait(125).call(this.frame_299).wait(10).call(this.frame_309).wait(140).call(this.frame_449).wait(150).call(this.frame_599).wait(590));

	// title
	this.instance_46 = new lib.TEMPLABEL();
	this.instance_46.setTransform(-97.9,458.3,1,1,0,0,0,49,9.5);

	this.instance_47 = new lib.Precipitationlabel();
	this.instance_47.setTransform(-237.9,460.8,1,1,0,0,0,51.5,12);

	this.instance_48 = new lib.CityTypeLID();
	this.instance_48.setTransform(306.1,-480.9,1,1,0,0,0,202,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_48},{t:this.instance_47},{t:this.instance_46}]}).to({state:[]},600).wait(589));

	// graph mask copy (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_1 = new cjs.Graphics().p("EgMMAjDIAAx4IR2AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_4_graphics_1,x:-78.1,y:224.4}).wait(1188));

	// graph copy
	this.instance_49 = new lib.tempgraph();
	this.instance_49.setTransform(2039,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_49._off = true;

	this.instance_49.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(1).to({_off:false},0).to({x:1184.8,y:390.4},598).to({_off:true},1).wait(589));

	// graph mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_1 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_5_graphics_1,x:-147.1,y:224.4}).wait(1188));

	// graph
	this.instance_50 = new lib.watergraph();
	this.instance_50.setTransform(1901,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_50._off = true;

	this.instance_50.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(1).to({_off:false},0).to({x:1047.4,y:390.4},598).to({_off:true},1).wait(589));

	// Temp Events
	this.instance_51 = new lib.NormalTempWinter();
	this.instance_51.setTransform(642.9,413.1,1,1,0,0,0,279.9,104);

	this.instance_52 = new lib.NormalTempSpring01();
	this.instance_52.setTransform(502,386,1,1,0,0,0,112,39.9);

	this.instance_53 = new lib.NormalTempSpring02();
	this.instance_53.setTransform(502,386,1,1,0,0,0,112,39.9);

	this.instance_54 = new lib.NormalTempSpring03();
	this.instance_54.setTransform(502,386,1,1,0,0,0,112,39.9);

	this.instance_55 = new lib.NormalTempSummer();
	this.instance_55.setTransform(503,386,1,1,0,0,0,112,42.5);

	this.instance_56 = new lib.NormalTempFall();
	this.instance_56.setTransform(502.6,468.9,1,1,0,0,0,112,125.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_51}]},4).to({state:[]},5).to({state:[{t:this.instance_52}]},140).to({state:[]},4).to({state:[{t:this.instance_53}]},1).to({state:[]},4).to({state:[{t:this.instance_54}]},1).to({state:[]},5).to({state:[{t:this.instance_55}]},135).to({state:[]},5).to({state:[{t:this.instance_56}]},145).to({state:[]},5).wait(735));

	// Precip Events
	this.instance_57 = new lib.AbWetSpring01();
	this.instance_57.setTransform(502.6,400,1,1,0,0,0,112,55.4);

	this.instance_58 = new lib.AbWetSpring02();
	this.instance_58.setTransform(502.6,400,1,1,0,0,0,112,55.4);

	this.instance_59 = new lib.AbWetSummer();
	this.instance_59.setTransform(502,399.5,1,1,0,0,0,112,55.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_57}]},169).to({state:[]},4).to({state:[{t:this.instance_58}]},1).to({state:[]},5).to({state:[{t:this.instance_59}]},130).to({state:[]},5).to({state:[]},286).wait(589));

	// Text Box Control
	this.next_2 = new lib.NextButton();
	this.next_2.setTransform(424,461,1,1,0,0,0,29.5,15);
	this.next_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.next_2).wait(4).to({_off:false},0).to({_off:true},5).wait(140).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},5).wait(120).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(135).to({_off:false},0).to({_off:true},5).wait(735));

	// Text Box
	this.instance_60 = new lib.rectangle();
	this.instance_60.setTransform(629.2,391.2,1,1,0,0,0,245.6,52.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_60).to({_off:true},600).wait(589));

	// image
	this.instance_61 = new lib.LIDcity_1();
	this.instance_61.setTransform(-323,-502.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_61).wait(599).to({_off:true},1).wait(589));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323,-502.5,1232,995);


(lib.normalnormalwatershed_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_149 = function() {
		this.stop();
	}
	this.frame_154 = function() {
		this.stop();
	}
	this.frame_159 = function() {
		this.stop();
	}
	this.frame_169 = function() {
		this.stop();
	}
	this.frame_299 = function() {
		this.stop();
	}
	this.frame_309 = function() {
		this.stop();
	}
	this.frame_449 = function() {
		this.stop();
	}
	this.frame_459 = function() {
		this.stop();
	}
	this.frame_599 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(10).call(this.frame_14).wait(135).call(this.frame_149).wait(5).call(this.frame_154).wait(5).call(this.frame_159).wait(10).call(this.frame_169).wait(130).call(this.frame_299).wait(10).call(this.frame_309).wait(140).call(this.frame_449).wait(10).call(this.frame_459).wait(140).call(this.frame_599).wait(590));

	// title
	this.instance_41 = new lib.TEMPLABEL();
	this.instance_41.setTransform(-97.9,458.3,1,1,0,0,0,49,9.5);

	this.instance_42 = new lib.Precipitationlabel();
	this.instance_42.setTransform(-237.9,460.8,1,1,0,0,0,51.5,12);

	this.instance_43 = new lib.CityTypeLID();
	this.instance_43.setTransform(306.1,-480.9,1,1,0,0,0,202,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_43},{t:this.instance_42},{t:this.instance_41}]}).to({state:[]},600).wait(589));

	// graph mask copy (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_1 = new cjs.Graphics().p("EgMMAjDIAAx4IR2AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_4_graphics_1,x:-78.1,y:224.4}).wait(1188));

	// graph copy
	this.instance_44 = new lib.tempgraph();
	this.instance_44.setTransform(2039,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_44._off = true;

	this.instance_44.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(1).to({_off:false},0).to({x:1184.8,y:390.4},598).to({_off:true},1).wait(589));

	// graph mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_1 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_5_graphics_1,x:-147.1,y:224.4}).wait(1188));

	// graph
	this.instance_45 = new lib.watergraph();
	this.instance_45.setTransform(1901,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_45._off = true;

	this.instance_45.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(1).to({_off:false},0).to({x:1047.4,y:390.4},598).to({_off:true},1).wait(589));

	// Temp Events
	this.instance_46 = new lib.NormalTempWinter();
	this.instance_46.setTransform(642.9,413.1,1,1,0,0,0,279.9,104);

	this.instance_47 = new lib.NormalTempSpring01();
	this.instance_47.setTransform(502,386,1,1,0,0,0,112,39.9);

	this.instance_48 = new lib.NormalTempSpring02();
	this.instance_48.setTransform(502,386,1,1,0,0,0,112,39.9);

	this.instance_49 = new lib.NormalTempSpring03();
	this.instance_49.setTransform(502,386,1,1,0,0,0,112,39.9);

	this.instance_50 = new lib.NormalTempSummer();
	this.instance_50.setTransform(503,386,1,1,0,0,0,112,42.5);

	this.instance_51 = new lib.NormalTempFall();
	this.instance_51.setTransform(502.6,468.9,1,1,0,0,0,112,125.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_46}]},4).to({state:[]},5).to({state:[{t:this.instance_47}]},140).to({state:[]},4).to({state:[{t:this.instance_48}]},1).to({state:[]},4).to({state:[{t:this.instance_49}]},1).to({state:[]},5).to({state:[{t:this.instance_50}]},135).to({state:[]},5).to({state:[{t:this.instance_51}]},145).to({state:[]},5).wait(735));

	// Precip Events
	this.instance_52 = new lib.NormalPrecipWinter_1();
	this.instance_52.setTransform(503,447.9,1,1,0,0,0,112,102);

	this.instance_53 = new lib.NormalPrecipSpring();
	this.instance_53.setTransform(500,386,1,1,0,0,0,112,41.5);

	this.instance_54 = new lib.NormalPrecipSummer_1();
	this.instance_54.setTransform(508,409.6,1,1,0,0,0,115.5,63.2);

	this.instance_55 = new lib.NormalPrecipFall();
	this.instance_55.setTransform(508,423,1,1,0,0,0,115.5,78.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_52}]},14).to({state:[]},5).to({state:[{t:this.instance_53}]},150).to({state:[]},5).to({state:[{t:this.instance_54}]},135).to({state:[]},5).to({state:[{t:this.instance_55}]},145).to({state:[]},5).to({state:[]},136).wait(589));

	// Text Box Control
	this.next_2 = new lib.NextButton();
	this.next_2.setTransform(424,461,1,1,0,0,0,29.5,15);
	this.next_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.next_2).wait(4).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(130).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(125).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(135).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(725));

	// Text Box
	this.instance_56 = new lib.rectangle();
	this.instance_56.setTransform(629.2,391.2,1,1,0,0,0,245.6,52.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_56).to({_off:true},600).wait(589));

	// image
	this.instance_57 = new lib.LIDcity_1();
	this.instance_57.setTransform(-323,-502.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_57).wait(599).to({_off:true},1).wait(589));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323,-502.5,1232,995);


(lib.normaldrywatershed_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_149 = function() {
		this.stop();
	}
	this.frame_154 = function() {
		this.stop();
	}
	this.frame_159 = function() {
		this.stop();
	}
	this.frame_169 = function() {
		this.stop();
	}
	this.frame_299 = function() {
		this.stop();
	}
	this.frame_309 = function() {
		this.stop();
	}
	this.frame_314 = function() {
		this.stop();
	}
	this.frame_319 = function() {
		this.stop();
	}
	this.frame_449 = function() {
		this.stop();
	}
	this.frame_599 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(10).call(this.frame_14).wait(135).call(this.frame_149).wait(5).call(this.frame_154).wait(5).call(this.frame_159).wait(10).call(this.frame_169).wait(130).call(this.frame_299).wait(10).call(this.frame_309).wait(5).call(this.frame_314).wait(5).call(this.frame_319).wait(130).call(this.frame_449).wait(150).call(this.frame_599).wait(590));

	// title
	this.instance_28 = new lib.TEMPLABEL();
	this.instance_28.setTransform(-97.9,458.3,1,1,0,0,0,49,9.5);

	this.instance_29 = new lib.Precipitationlabel();
	this.instance_29.setTransform(-237.9,460.8,1,1,0,0,0,51.5,12);

	this.instance_30 = new lib.CityTypeLID();
	this.instance_30.setTransform(306.1,-480.9,1,1,0,0,0,202,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_30},{t:this.instance_29},{t:this.instance_28}]}).to({state:[]},600).wait(589));

	// graph mask copy (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_1 = new cjs.Graphics().p("EgMMAjDIAAx4IR2AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_2_graphics_1,x:-78.1,y:224.4}).wait(1188));

	// graph copy
	this.instance_31 = new lib.tempgraph();
	this.instance_31.setTransform(2039,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_31._off = true;

	this.instance_31.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(1).to({_off:false},0).to({x:1184.8,y:390.4},598).to({_off:true},1).wait(589));

	// graph mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_1 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_3_graphics_1,x:-147.1,y:224.4}).wait(1188));

	// graph
	this.instance_32 = new lib.watergraph();
	this.instance_32.setTransform(1901,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_32._off = true;

	this.instance_32.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(1).to({_off:false},0).to({x:1047.4,y:390.4},598).to({_off:true},1).wait(589));

	// Temp Events
	this.instance_33 = new lib.NormalTempWinter();
	this.instance_33.setTransform(642.9,413.1,1,1,0,0,0,279.9,104);

	this.instance_34 = new lib.NormalTempSpring01();
	this.instance_34.setTransform(502,386,1,1,0,0,0,112,39.9);

	this.instance_35 = new lib.NormalTempSpring02();
	this.instance_35.setTransform(502,386,1,1,0,0,0,112,39.9);

	this.instance_36 = new lib.NormalTempSpring03();
	this.instance_36.setTransform(502,386,1,1,0,0,0,112,39.9);

	this.instance_37 = new lib.NormalTempSummer();
	this.instance_37.setTransform(503,386,1,1,0,0,0,112,42.5);

	this.instance_38 = new lib.NormalTempFall();
	this.instance_38.setTransform(502.6,468.9,1,1,0,0,0,112,125.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_33}]},14).to({state:[]},6).to({state:[{t:this.instance_34}]},129).to({state:[]},4).to({state:[{t:this.instance_35}]},1).to({state:[]},4).to({state:[{t:this.instance_36}]},1).to({state:[]},5).to({state:[{t:this.instance_37}]},135).to({state:[]},5).to({state:[{t:this.instance_38}]},145).to({state:[]},5).to({state:[]},146).wait(589));

	// Precip Events
	this.instance_39 = new lib.AbDryWinter_2();
	this.instance_39.setTransform(501,401,1,1,0,0,0,112,55.4);

	this.instance_40 = new lib.AbDrySpring();
	this.instance_40.setTransform(502,401,1,1,0,0,0,112,55.4);

	this.instance_41 = new lib.AbDrySummer01();
	this.instance_41.setTransform(502,401,1,1,0,0,0,112,55.4);

	this.instance_42 = new lib.AbDrySummer02();
	this.instance_42.setTransform(502,401,1,1,0,0,0,112,55.4);

	this.instance_43 = new lib.AbDrySummer03();
	this.instance_43.setTransform(502,401,1,1,0,0,0,112,55.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_39}]},4).to({state:[]},5).to({state:[{t:this.instance_40}]},160).to({state:[]},5).to({state:[{t:this.instance_41}]},135).to({state:[]},4).to({state:[{t:this.instance_42}]},1).to({state:[]},4).to({state:[{t:this.instance_43}]},1).to({state:[]},5).wait(865));

	// Text Box Control
	this.next_1 = new lib.NextButton();
	this.next_1.setTransform(424,461,1,1,0,0,0,29.5,15);
	this.next_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.next_1).wait(4).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},6).wait(129).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(125).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},5).wait(125).to({_off:false},0).to({_off:true},5).wait(735));

	// Text Box
	this.instance_44 = new lib.rectangle();
	this.instance_44.setTransform(629.2,391.2,1,1,0,0,0,245.6,52.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_44).to({_off:true},600).wait(589));

	// image
	this.instance_45 = new lib.LIDcity_1();
	this.instance_45.setTransform(-323,-502.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(599).to({_off:true},1).wait(589));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323,-502.5,1232,995);


(lib.abhotnormalwatershed_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_149 = function() {
		this.stop();
	}
	this.frame_169 = function() {
		this.stop();
	}
	this.frame_299 = function() {
		this.stop();
	}
	this.frame_304 = function() {
		this.stop();
	}
	this.frame_309 = function() {
		this.stop();
	}
	this.frame_449 = function() {
		this.stop();
	}
	this.frame_459 = function() {
		this.stop();
	}
	this.frame_599 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(10).call(this.frame_14).wait(135).call(this.frame_149).wait(20).call(this.frame_169).wait(130).call(this.frame_299).wait(5).call(this.frame_304).wait(5).call(this.frame_309).wait(140).call(this.frame_449).wait(10).call(this.frame_459).wait(140).call(this.frame_599).wait(590));

	// title
	this.instance_25 = new lib.TEMPLABEL();
	this.instance_25.setTransform(-97.9,458.3,1,1,0,0,0,49,9.5);

	this.instance_26 = new lib.Precipitationlabel();
	this.instance_26.setTransform(-237.9,460.8,1,1,0,0,0,51.5,12);

	this.instance_27 = new lib.CityTypeLID();
	this.instance_27.setTransform(306.1,-480.9,1,1,0,0,0,202,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_27},{t:this.instance_26},{t:this.instance_25}]}).to({state:[]},600).wait(589));

	// graph mask copy (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_1 = new cjs.Graphics().p("EgMMAjDIAAx4IR2AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_2_graphics_1,x:-78.1,y:224.4}).wait(1188));

	// graph copy
	this.instance_28 = new lib.tempgraph();
	this.instance_28.setTransform(2039,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_28._off = true;

	this.instance_28.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(1).to({_off:false},0).to({x:1184.8,y:390.4},598).to({_off:true},1).wait(589));

	// graph mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_1 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_3_graphics_1,x:-147.1,y:224.4}).wait(1188));

	// graph
	this.instance_29 = new lib.watergraph();
	this.instance_29.setTransform(1901,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_29._off = true;

	this.instance_29.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(1).to({_off:false},0).to({x:1047.4,y:390.4},598).to({_off:true},1).wait(589));

	// Temp Events
	this.instance_30 = new lib.AbHotWinter();
	this.instance_30.setTransform(461.6,445.9,1,1,0,0,0,74,102);

	this.instance_31 = new lib.AbHotSpring();
	this.instance_31.setTransform(462.6,447.1,1,1,0,0,0,74,102);

	this.instance_32 = new lib.AbHotSummer01();
	this.instance_32.setTransform(464.6,446.9,1,1,0,0,0,74,102);

	this.instance_33 = new lib.AbHotSummer02();
	this.instance_33.setTransform(464.6,446.9,1,1,0,0,0,74,102);

	this.instance_34 = new lib.AbHotFall();
	this.instance_34.setTransform(502.6,389.2,1,1,0,0,0,112,46);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_30}]},4).to({state:[]},5).to({state:[{t:this.instance_31}]},140).to({state:[]},5).to({state:[{t:this.instance_32}]},145).to({state:[]},4).to({state:[{t:this.instance_33}]},1).to({state:[]},5).to({state:[{t:this.instance_34}]},140).to({state:[]},5).wait(735));

	// Precip Events
	this.instance_35 = new lib.NormalPrecipWinter_1();
	this.instance_35.setTransform(503,447.9,1,1,0,0,0,112,102);

	this.instance_36 = new lib.NormalPrecipSpring();
	this.instance_36.setTransform(500,386,1,1,0,0,0,112,41.5);

	this.instance_37 = new lib.NormalPrecipSummer_1();
	this.instance_37.setTransform(508,409.6,1,1,0,0,0,115.5,63.2);

	this.instance_38 = new lib.NormalPrecipFall();
	this.instance_38.setTransform(508,423,1,1,0,0,0,115.5,78.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_35}]},14).to({state:[]},5).to({state:[{t:this.instance_36}]},150).to({state:[]},5).to({state:[{t:this.instance_37}]},135).to({state:[]},5).to({state:[{t:this.instance_38}]},145).to({state:[]},5).wait(725));

	// Text Box Control
	this.next_1 = new lib.NextButton();
	this.next_1.setTransform(424,461,1,1,0,0,0,29.5,15);
	this.next_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.next_1).wait(4).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(130).to({_off:false},0).to({_off:true},5).wait(15).to({_off:false},0).to({_off:true},5).wait(125).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).wait(5).to({_off:true},5).wait(135).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(725));

	// Text Box
	this.instance_39 = new lib.rectangle();
	this.instance_39.setTransform(629.2,391.2,1,1,0,0,0,245.6,52.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_39).to({_off:true},600).wait(589));

	// image
	this.instance_40 = new lib.LIDcity_1();
	this.instance_40.setTransform(-323,-502.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(599).to({_off:true},1).wait(589));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323,-502.5,1232,995);


(lib.abhotabwetwatershed_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_149 = function() {
		this.stop();
	}
	this.frame_169 = function() {
		this.stop();
	}
	this.frame_174 = function() {
		this.stop();
	}
	this.frame_299 = function() {
		this.stop();
	}
	this.frame_304 = function() {
		this.stop();
	}
	this.frame_309 = function() {
		this.stop();
	}
	this.frame_449 = function() {
		this.stop();
	}
	this.frame_599 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(145).call(this.frame_149).wait(20).call(this.frame_169).wait(5).call(this.frame_174).wait(125).call(this.frame_299).wait(5).call(this.frame_304).wait(5).call(this.frame_309).wait(140).call(this.frame_449).wait(150).call(this.frame_599).wait(585));

	// title
	this.instance_40 = new lib.TEMPLABEL();
	this.instance_40.setTransform(-97.9,458.3,1,1,0,0,0,49,9.5);

	this.instance_41 = new lib.Precipitationlabel();
	this.instance_41.setTransform(-237.9,460.8,1,1,0,0,0,51.5,12);

	this.instance_42 = new lib.CityTypeLID();
	this.instance_42.setTransform(306.1,-480.9,1,1,0,0,0,202,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_42},{t:this.instance_41},{t:this.instance_40}]}).to({state:[]},600).wait(584));

	// graph mask copy (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_1 = new cjs.Graphics().p("EgMMAjDIAAx4IR2AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_4_graphics_1,x:-78.1,y:224.4}).wait(1183));

	// graph copy
	this.instance_43 = new lib.tempgraph();
	this.instance_43.setTransform(2039,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_43._off = true;

	this.instance_43.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(1).to({_off:false},0).to({x:1184.8,y:390.4},598).to({_off:true},1).wait(584));

	// graph mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_1 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_5_graphics_1,x:-147.1,y:224.4}).wait(1183));

	// graph
	this.instance_44 = new lib.watergraph();
	this.instance_44.setTransform(1901,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_44._off = true;

	this.instance_44.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(1).to({_off:false},0).to({x:1047.4,y:390.4},598).to({_off:true},1).wait(584));

	// Temp Events
	this.instance_45 = new lib.AbHotWinter();
	this.instance_45.setTransform(461.6,445.9,1,1,0,0,0,74,102);

	this.instance_46 = new lib.AbHotSpring();
	this.instance_46.setTransform(462.6,447.1,1,1,0,0,0,74,102);

	this.instance_47 = new lib.AbHotSummer01();
	this.instance_47.setTransform(464.6,446.9,1,1,0,0,0,74,102);

	this.instance_48 = new lib.AbHotSummer02();
	this.instance_48.setTransform(464.6,446.9,1,1,0,0,0,74,102);

	this.instance_49 = new lib.AbHotFall();
	this.instance_49.setTransform(502.6,389.2,1,1,0,0,0,112,46);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_45}]},4).to({state:[]},5).to({state:[{t:this.instance_46}]},140).to({state:[]},5).to({state:[{t:this.instance_47}]},145).to({state:[]},4).to({state:[{t:this.instance_48}]},1).to({state:[]},5).to({state:[{t:this.instance_49}]},140).to({state:[]},5).wait(730));

	// Precip Events
	this.instance_50 = new lib.AbWetSpring01();
	this.instance_50.setTransform(502.6,400,1,1,0,0,0,112,55.4);

	this.instance_51 = new lib.AbWetSpring02();
	this.instance_51.setTransform(502.6,400,1,1,0,0,0,112,55.4);

	this.instance_52 = new lib.AbWetSummer();
	this.instance_52.setTransform(502,399.5,1,1,0,0,0,112,55.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_50}]},169).to({state:[]},4).to({state:[{t:this.instance_51}]},1).to({state:[]},5).to({state:[{t:this.instance_52}]},130).to({state:[]},5).wait(870));

	// Text Box Control
	this.next_2 = new lib.NextButton();
	this.next_2.setTransform(424,461,1,1,0,0,0,29.5,15);
	this.next_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.next_2).wait(4).to({_off:false},0).to({_off:true},5).wait(140).to({_off:false},0).to({_off:true},5).wait(15).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},5).wait(120).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).wait(5).to({_off:true},5).wait(135).to({_off:false},0).to({_off:true},5).wait(730));

	// Text Box
	this.instance_53 = new lib.rectangle();
	this.instance_53.setTransform(629.2,391.2,1,1,0,0,0,245.6,52.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_53).to({_off:true},600).wait(584));

	// image
	this.instance_54 = new lib.LIDcity_1();
	this.instance_54.setTransform(-323,-502.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(599).to({_off:true},1).wait(584));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323,-502.5,1232,995);


(lib.abhotabdrywatershed_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_149 = function() {
		this.stop();
	}
	this.frame_164 = function() {
		this.stop();
	}
	this.frame_299 = function() {
		this.stop();
	}
	this.frame_304 = function() {
		this.stop();
	}
	this.frame_309 = function() {
		this.stop();
	}
	this.frame_314 = function() {
		this.stop();
	}
	this.frame_319 = function() {
		this.stop();
	}
	this.frame_449 = function() {
		this.stop();
	}
	this.frame_599 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(10).call(this.frame_14).wait(135).call(this.frame_149).wait(15).call(this.frame_164).wait(135).call(this.frame_299).wait(5).call(this.frame_304).wait(5).call(this.frame_309).wait(5).call(this.frame_314).wait(5).call(this.frame_319).wait(130).call(this.frame_449).wait(150).call(this.frame_599).wait(590));

	// title
	this.instance_45 = new lib.TEMPLABEL();
	this.instance_45.setTransform(-97.9,458.3,1,1,0,0,0,49,9.5);

	this.instance_46 = new lib.Precipitationlabel();
	this.instance_46.setTransform(-237.9,460.8,1,1,0,0,0,51.5,12);

	this.instance_47 = new lib.CityTypeLID();
	this.instance_47.setTransform(306.1,-480.9,1,1,0,0,0,202,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_47},{t:this.instance_46},{t:this.instance_45}]}).to({state:[]},600).wait(589));

	// graph mask copy (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_1 = new cjs.Graphics().p("EgMMAjDIAAx4IR2AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_4_graphics_1,x:-78.1,y:224.4}).wait(1188));

	// graph copy
	this.instance_48 = new lib.tempgraph();
	this.instance_48.setTransform(2039,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_48._off = true;

	this.instance_48.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(1).to({_off:false},0).to({x:1184.8,y:390.4},598).to({_off:true},1).wait(589));

	// graph mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_1 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_5_graphics_1,x:-147.1,y:224.4}).wait(1188));

	// graph
	this.instance_49 = new lib.watergraph();
	this.instance_49.setTransform(1901,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_49._off = true;

	this.instance_49.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(1).to({_off:false},0).to({x:1047.4,y:390.4},598).to({_off:true},1).wait(589));

	// Temp Events
	this.instance_50 = new lib.AbHotWinter();
	this.instance_50.setTransform(461.6,445.9,1,1,0,0,0,74,102);

	this.instance_51 = new lib.AbHotSpring();
	this.instance_51.setTransform(462.6,447.1,1,1,0,0,0,74,102);

	this.instance_52 = new lib.AbHotSummer01();
	this.instance_52.setTransform(464.6,446.9,1,1,0,0,0,74,102);

	this.instance_53 = new lib.AbHotSummer02();
	this.instance_53.setTransform(464.6,446.9,1,1,0,0,0,74,102);

	this.instance_54 = new lib.AbHotFall();
	this.instance_54.setTransform(502.6,389.2,1,1,0,0,0,112,46);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_50}]},14).to({state:[]},5).to({state:[{t:this.instance_51}]},130).to({state:[]},5).to({state:[{t:this.instance_52}]},145).to({state:[]},4).to({state:[{t:this.instance_53}]},1).to({state:[]},5).to({state:[{t:this.instance_54}]},140).to({state:[]},5).to({state:[]},146).wait(589));

	// Precip Events
	this.instance_55 = new lib.AbDryWinter_2();
	this.instance_55.setTransform(501,401,1,1,0,0,0,112,55.4);

	this.instance_56 = new lib.AbDrySpring();
	this.instance_56.setTransform(502,401,1,1,0,0,0,112,55.4);

	this.instance_57 = new lib.AbDrySummer01();
	this.instance_57.setTransform(502,401,1,1,0,0,0,112,55.4);

	this.instance_58 = new lib.AbDrySummer02();
	this.instance_58.setTransform(502,401,1,1,0,0,0,112,55.4);

	this.instance_59 = new lib.AbDrySummer03();
	this.instance_59.setTransform(502,401,1,1,0,0,0,112,55.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_55}]},4).to({state:[]},5).to({state:[{t:this.instance_56}]},155).to({state:[]},5).to({state:[{t:this.instance_57}]},140).to({state:[]},4).to({state:[{t:this.instance_58}]},1).to({state:[]},4).to({state:[{t:this.instance_59}]},1).to({state:[]},5).wait(865));

	// Text Box Control
	this.next_2 = new lib.NextButton();
	this.next_2.setTransform(424,461,1,1,0,0,0,29.5,15);
	this.next_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.next_2).wait(4).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(130).to({_off:false},0).to({_off:true},5).wait(10).to({_off:false},0).to({_off:true},5).wait(130).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).wait(5).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},5).wait(125).to({_off:false},0).to({_off:true},5).wait(735));

	// Text Box
	this.instance_60 = new lib.rectangle();
	this.instance_60.setTransform(629.2,391.2,1,1,0,0,0,245.6,52.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_60).to({_off:true},600).wait(589));

	// image
	this.instance_61 = new lib.LIDcity_1();
	this.instance_61.setTransform(-323,-502.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_61).wait(599).to({_off:true},1).wait(589));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323,-502.5,1232,995);


(lib.abcoldnormalwatershed_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_149 = function() {
		this.stop();
	}
	this.frame_154 = function() {
		this.stop();
	}
	this.frame_169 = function() {
		this.stop();
	}
	this.frame_299 = function() {
		this.stop();
	}
	this.frame_309 = function() {
		this.stop();
	}
	this.frame_459 = function() {
		this.stop();
	}
	this.frame_599 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(135).call(this.frame_149).wait(5).call(this.frame_154).wait(15).call(this.frame_169).wait(130).call(this.frame_299).wait(10).call(this.frame_309).wait(150).call(this.frame_459).wait(140).call(this.frame_599).wait(585));

	// title
	this.instance_31 = new lib.TEMPLABEL();
	this.instance_31.setTransform(-97.9,458.3,1,1,0,0,0,49,9.5);

	this.instance_32 = new lib.Precipitationlabel();
	this.instance_32.setTransform(-237.9,460.8,1,1,0,0,0,51.5,12);

	this.instance_33 = new lib.CityTypeLID();
	this.instance_33.setTransform(306.1,-480.9,1,1,0,0,0,202,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_33},{t:this.instance_32},{t:this.instance_31}]}).to({state:[]},600).wait(584));

	// graph mask copy (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_1 = new cjs.Graphics().p("EgMMAjDIAAx4IR2AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_4_graphics_1,x:-78.1,y:224.4}).wait(1183));

	// graph copy
	this.instance_34 = new lib.tempgraph();
	this.instance_34.setTransform(2039,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_34._off = true;

	this.instance_34.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(1).to({_off:false},0).to({x:1184.8,y:390.4},598).to({_off:true},1).wait(584));

	// graph mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_1 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_5_graphics_1,x:-147.1,y:224.4}).wait(1183));

	// graph
	this.instance_35 = new lib.watergraph();
	this.instance_35.setTransform(1901,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_35._off = true;

	this.instance_35.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(1).to({_off:false},0).to({x:1047.4,y:390.4},598).to({_off:true},1).wait(584));

	// Temp Events
	this.instance_36 = new lib.AbColdSpring01();
	this.instance_36.setTransform(502,399,1,1,0,0,0,112,55.4);

	this.instance_37 = new lib.AbColdSpring02();
	this.instance_37.setTransform(502,399,1,1,0,0,0,112,55.4);

	this.instance_38 = new lib.AbColdSummer();
	this.instance_38.setTransform(498.6,445.6,1,1,0,0,0,112,102.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_36}]},149).to({state:[]},4).to({state:[{t:this.instance_37}]},1).to({state:[]},5).to({state:[{t:this.instance_38}]},140).to({state:[]},5).wait(880));

	// Precip Events
	this.instance_39 = new lib.NormalPrecipWinter_1();
	this.instance_39.setTransform(503,447.9,1,1,0,0,0,112,102);

	this.instance_40 = new lib.NormalPrecipSpring();
	this.instance_40.setTransform(500,386,1,1,0,0,0,112,41.5);

	this.instance_41 = new lib.NormalPrecipSummer_1();
	this.instance_41.setTransform(508,409.6,1,1,0,0,0,115.5,63.2);

	this.instance_42 = new lib.NormalPrecipFall();
	this.instance_42.setTransform(508,423,1,1,0,0,0,115.5,78.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_39}]},14).to({state:[]},5).to({state:[{t:this.instance_40}]},150).to({state:[]},5).to({state:[{t:this.instance_41}]},135).to({state:[]},5).to({state:[{t:this.instance_42}]},145).to({state:[]},5).wait(720));

	// Text Box Control
	this.next_2 = new lib.NextButton();
	this.next_2.setTransform(424,461,1,1,0,0,0,29.5,15);
	this.next_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.next_2).wait(14).to({_off:false},0).to({_off:true},5).wait(130).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},5).wait(10).to({_off:false},0).to({_off:true},5).wait(125).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(145).to({_off:false},0).to({_off:true},5).wait(720));

	// Text Box
	this.instance_43 = new lib.rectangle();
	this.instance_43.setTransform(629.2,391.2,1,1,0,0,0,245.6,52.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_43).to({_off:true},600).wait(584));

	// image
	this.instance_44 = new lib.LIDcity_1();
	this.instance_44.setTransform(-323,-502.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(599).to({_off:true},1).wait(584));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323,-502.5,1232,995);


(lib.abcoldabwetwatershed_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_149 = function() {
		this.stop();
	}
	this.frame_154 = function() {
		this.stop();
	}
	this.frame_169 = function() {
		this.stop();
	}
	this.frame_174 = function() {
		this.stop();
	}
	this.frame_299 = function() {
		this.stop();
	}
	this.frame_309 = function() {
		this.stop();
	}
	this.frame_599 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(149).call(this.frame_149).wait(5).call(this.frame_154).wait(15).call(this.frame_169).wait(5).call(this.frame_174).wait(125).call(this.frame_299).wait(10).call(this.frame_309).wait(290).call(this.frame_599).wait(590));

	// title
	this.instance_35 = new lib.TEMPLABEL();
	this.instance_35.setTransform(-97.9,458.3,1,1,0,0,0,49,9.5);

	this.instance_36 = new lib.Precipitationlabel();
	this.instance_36.setTransform(-237.9,460.8,1,1,0,0,0,51.5,12);

	this.instance_37 = new lib.CityTypeLID();
	this.instance_37.setTransform(306.1,-480.9,1,1,0,0,0,202,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_37},{t:this.instance_36},{t:this.instance_35}]}).to({state:[]},600).wait(589));

	// graph mask copy (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_1 = new cjs.Graphics().p("EgMMAjDIAAx4IR2AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_4_graphics_1,x:-78.1,y:224.4}).wait(1188));

	// graph copy
	this.instance_38 = new lib.tempgraph();
	this.instance_38.setTransform(2039,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_38._off = true;

	this.instance_38.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(1).to({_off:false},0).to({x:1184.8,y:390.4},598).to({_off:true},1).wait(589));

	// graph mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_1 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_5_graphics_1,x:-147.1,y:224.4}).wait(1188));

	// graph
	this.instance_39 = new lib.watergraph();
	this.instance_39.setTransform(1901,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_39._off = true;

	this.instance_39.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(1).to({_off:false},0).to({x:1047.4,y:390.4},598).to({_off:true},1).wait(589));

	// Temp Events
	this.instance_40 = new lib.AbColdSpring01();
	this.instance_40.setTransform(502,399,1,1,0,0,0,112,55.4);

	this.instance_41 = new lib.AbColdSpring02();
	this.instance_41.setTransform(502,399,1,1,0,0,0,112,55.4);

	this.instance_42 = new lib.AbColdSummer();
	this.instance_42.setTransform(498.6,445.6,1,1,0,0,0,112,102.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_40}]},149).to({state:[]},4).to({state:[{t:this.instance_41}]},1).to({state:[]},5).to({state:[{t:this.instance_42}]},140).to({state:[]},5).wait(885));

	// Precip Events
	this.instance_43 = new lib.AbWetSpring01();
	this.instance_43.setTransform(502.6,400,1,1,0,0,0,112,55.4);

	this.instance_44 = new lib.AbWetSpring02();
	this.instance_44.setTransform(502.6,400,1,1,0,0,0,112,55.4);

	this.instance_45 = new lib.AbWetSummer();
	this.instance_45.setTransform(502,399.5,1,1,0,0,0,112,55.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_43}]},169).to({state:[]},4).to({state:[{t:this.instance_44}]},1).to({state:[]},5).to({state:[{t:this.instance_45}]},130).to({state:[]},5).wait(875));

	// Text Box Control
	this.next_2 = new lib.NextButton();
	this.next_2.setTransform(424,461,1,1,0,0,0,29.5,15);
	this.next_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.next_2).wait(149).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},5).wait(10).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},5).wait(120).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(875));

	// Text Box
	this.instance_46 = new lib.rectangle();
	this.instance_46.setTransform(629.2,391.2,1,1,0,0,0,245.6,52.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_46).to({_off:true},600).wait(589));

	// image
	this.instance_47 = new lib.LIDcity_1();
	this.instance_47.setTransform(-323,-502.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(599).to({_off:true},1).wait(589));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323,-502.5,1232,995);


(lib.abcoldabdrywatershed_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_149 = function() {
		this.stop();
	}
	this.frame_154 = function() {
		this.stop();
	}
	this.frame_164 = function() {
		this.stop();
	}
	this.frame_299 = function() {
		this.stop();
	}
	this.frame_309 = function() {
		this.stop();
	}
	this.frame_314 = function() {
		this.stop();
	}
	this.frame_319 = function() {
		this.stop();
	}
	this.frame_599 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(145).call(this.frame_149).wait(5).call(this.frame_154).wait(10).call(this.frame_164).wait(135).call(this.frame_299).wait(10).call(this.frame_309).wait(5).call(this.frame_314).wait(5).call(this.frame_319).wait(280).call(this.frame_599).wait(1));

	// title
	this.instance_24 = new lib.TEMPLABEL();
	this.instance_24.setTransform(-97.9,458.3,1,1,0,0,0,49,9.5);

	this.instance_25 = new lib.Precipitationlabel();
	this.instance_25.setTransform(-237.9,460.8,1,1,0,0,0,51.5,12);

	this.instance_26 = new lib.CityTypeLID();
	this.instance_26.setTransform(306.1,-480.9,1,1,0,0,0,202,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_26},{t:this.instance_25},{t:this.instance_24}]}).wait(600));

	// graph mask copy (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_1 = new cjs.Graphics().p("EgMMAjDIAAx4IR2AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_2_graphics_1,x:-78.1,y:224.4}).wait(599));

	// graph copy
	this.instance_27 = new lib.tempgraph();
	this.instance_27.setTransform(2039,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_27._off = true;

	this.instance_27.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(1).to({_off:false},0).to({x:1184.8,y:390.4},598).wait(1));

	// graph mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_1 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_3_graphics_1,x:-147.1,y:224.4}).wait(599));

	// graph
	this.instance_28 = new lib.watergraph();
	this.instance_28.setTransform(1901,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_28._off = true;

	this.instance_28.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(1).to({_off:false},0).to({x:1047.4,y:390.4},598).wait(1));

	// Temp Events
	this.instance_29 = new lib.AbColdSpring01();
	this.instance_29.setTransform(502,399,1,1,0,0,0,112,55.4);

	this.instance_30 = new lib.AbColdSpring02();
	this.instance_30.setTransform(502,399,1,1,0,0,0,112,55.4);

	this.instance_31 = new lib.AbColdSummer();
	this.instance_31.setTransform(498.6,445.6,1,1,0,0,0,112,102.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_29}]},149).to({state:[]},4).to({state:[{t:this.instance_30}]},1).to({state:[]},5).to({state:[{t:this.instance_31}]},140).to({state:[]},5).wait(296));

	// Precip Events
	this.instance_32 = new lib.AbDryWinter_2();
	this.instance_32.setTransform(501,401,1,1,0,0,0,112,55.4);

	this.instance_33 = new lib.AbDrySpring();
	this.instance_33.setTransform(502,401,1,1,0,0,0,112,55.4);

	this.instance_34 = new lib.AbDrySummer01();
	this.instance_34.setTransform(502,401,1,1,0,0,0,112,55.4);

	this.instance_35 = new lib.AbDrySummer02();
	this.instance_35.setTransform(502,401,1,1,0,0,0,112,55.4);

	this.instance_36 = new lib.AbDrySummer03();
	this.instance_36.setTransform(502,401,1,1,0,0,0,112,55.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_32}]},4).to({state:[]},5).to({state:[{t:this.instance_33}]},155).to({state:[]},5).to({state:[{t:this.instance_34}]},140).to({state:[]},4).to({state:[{t:this.instance_35}]},1).to({state:[]},4).to({state:[{t:this.instance_36}]},1).to({state:[]},5).wait(276));

	// Text Box Control
	this.next_1 = new lib.NextButton();
	this.next_1.setTransform(424,461,1,1,0,0,0,29.5,15);
	this.next_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.next_1).wait(4).to({_off:false},0).to({_off:true},5).wait(140).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(130).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},5).wait(276));

	// Text Box
	this.instance_37 = new lib.rectangle();
	this.instance_37.setTransform(629.2,391.2,1,1,0,0,0,245.6,52.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(600));

	// image
	this.instance_38 = new lib.LIDcity_1();
	this.instance_38.setTransform(-323,-502.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(600));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323,-502.5,1232,995);


(lib.LIDCity = function() {
	this.initialize();

	// Title
	this.instance = new lib.LIDCityTitle();
	this.instance.setTransform(176.5,24.2,1,1,0,0,0,61.5,16.8);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqwNMQlalZAAnqQAAnmFalaQFZlZHngBQHpABFaFZQFZFaAAHmQAAHqlZFZQlaFZnpAAQnnAAlZlZg");
	mask.setTransform(132.5,119);

	// Layer 1
	this.instance_1 = new lib.LIDcity_1();
	this.instance_1.setTransform(0,0,0.243,0.244);

	this.instance_1.mask = mask;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(29,2,236,236);


(lib.infobutton = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("i", "22px 'Cooper Black'", "#FFFFFF");
	this.text.lineHeight = 24;
	this.text.lineWidth = 9;
	this.text.setTransform(2,-4);

	// Layer 2
	this.instance = new lib.circle();
	this.instance.setTransform(8.5,11.8,4.386,4.458,0,0,0,2.6,2.6);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.9,-4,22.3,29.3);


(lib.NormalNormalWatershed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_149 = function() {
		this.stop();
	}
	this.frame_159 = function() {
		this.stop();
	}
	this.frame_164 = function() {
		this.stop();
	}
	this.frame_299 = function() {
		this.stop();
	}
	this.frame_349 = function() {
		this.stop();
	}
	this.frame_449 = function() {
		this.stop();
	}
	this.frame_464 = function() {
		this.stop();
	}
	this.frame_599 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(10).call(this.frame_14).wait(135).call(this.frame_149).wait(10).call(this.frame_159).wait(5).call(this.frame_164).wait(135).call(this.frame_299).wait(50).call(this.frame_349).wait(100).call(this.frame_449).wait(15).call(this.frame_464).wait(135).call(this.frame_599).wait(600));

	// title
	this.instance = new lib.TEMPLABEL();
	this.instance.setTransform(-97.9,458.3,1,1,0,0,0,49,9.5);

	this.instance_1 = new lib.Precipitationlabel();
	this.instance_1.setTransform(-237.9,460.8,1,1,0,0,0,51.5,12);

	this.instance_2 = new lib.CityTypeLID();
	this.instance_2.setTransform(306.1,-480.9,1,1,0,0,0,202,15);

	this.instance_3 = new lib.WaterBudget();
	this.instance_3.setTransform(136,391.9,1,1,0,0,0,149,47.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_3}]},599).to({state:[]},1).wait(599));

	// graph mask copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("EgMMAjDIAAx4IR2AAIAAR4g");
	var mask_graphics_599 = new cjs.Graphics().p("EgMMAjDIAAx4IR2AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:-78.1,y:224.4}).wait(598).to({graphics:mask_graphics_599,x:-78.1,y:224.4}).wait(600));

	// graph copy
	this.instance_4 = new lib.tempgraph();
	this.instance_4.setTransform(2039,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({x:1184.8,y:390.4},598).to({_off:true},1).wait(599));

	// graph mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_1 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");
	var mask_1_graphics_599 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_1,x:-147.1,y:224.4}).wait(598).to({graphics:mask_1_graphics_599,x:-147.1,y:224.4}).wait(600));

	// graph
	this.instance_5 = new lib.watergraph();
	this.instance_5.setTransform(1901,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_5._off = true;

	this.instance_5.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({x:1047.4,y:390.4},598).to({_off:true},1).wait(599));

	// Temp Events
	this.instance_6 = new lib.NormalTempWinter_1();
	this.instance_6.setTransform(507,404.6,1,1,0,0,0,112,63.2);

	this.instance_7 = new lib.NormalTempSpring();
	this.instance_7.setTransform(510,409.6,1,1,0,0,0,112,63.2);

	this.instance_8 = new lib.NormalTempSummer_1();
	this.instance_8.setTransform(506,430.8,1,1,0,0,0,112,86.5);

	this.instance_9 = new lib.NormalTempFall_1();
	this.instance_9.setTransform(608,402,1,1,0,0,0,112,164.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},14).to({state:[]},5).to({state:[{t:this.instance_7}]},130).to({state:[]},5).to({state:[{t:this.instance_8}]},195).to({state:[]},5).to({state:[{t:this.instance_9}]},95).to({state:[]},5).wait(745));

	// Precip Events
	this.instance_10 = new lib.NormalPrecipWinter_2();
	this.instance_10.setTransform(509,500.8,1,1,0,0,0,112,156.5);

	this.instance_11 = new lib.NormalPrecipSpring1_2();
	this.instance_11.setTransform(507,500.8,1,1,0,0,0,112,156.5);

	this.instance_12 = new lib.NormalPrecipSpring2_2();
	this.instance_12.setTransform(507,500.8,1,1,0,0,0,112,156.5);

	this.instance_13 = new lib.NormalPrecipSummer_2();
	this.instance_13.setTransform(505,437.1,1,1,0,0,0,112,96);

	this.instance_14 = new lib.NormalPrecipFall_1();
	this.instance_14.setTransform(506,454.2,1,1,0,0,0,112,109.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},4).to({state:[]},5).to({state:[{t:this.instance_11}]},150).to({state:[]},4).to({state:[{t:this.instance_12}]},1).to({state:[]},5).to({state:[{t:this.instance_13}]},130).to({state:[]},5).to({state:[{t:this.instance_14}]},160).to({state:[]},5).to({state:[]},131).wait(599));

	// Text Box Control
	this.next = new lib.NextButton();
	this.next.setTransform(424,461,1,1,0,0,0,29.5,15);
	this.next._off = true;

	this.timeline.addTween(cjs.Tween.get(this.next).wait(4).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(130).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},5).wait(130).to({_off:false},0).to({_off:true},5).wait(45).to({_off:false},0).to({_off:true},5).wait(95).to({_off:false},0).to({_off:true},5).wait(10).to({_off:false},0).to({_off:true},5).wait(730));

	// Text Box
	this.instance_15 = new lib.rectangle();
	this.instance_15.setTransform(524.9,390.1,1,1,0,0,0,136.9,52);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(599).to({_off:true},1).wait(599));

	// image
	this.instance_16 = new lib.FarmTown();
	this.instance_16.setTransform(-323,-502.5);

	this.instance_17 = new lib.LIDcity_1();
	this.instance_17.setTransform(-323,-502.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16}]}).to({state:[{t:this.instance_17}]},599).to({state:[]},1).wait(599));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323,-502.5,1233,985);


(lib.NormalDryWatershed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_149 = function() {
		this.stop();
	}
	this.frame_179 = function() {
		this.stop();
	}
	this.frame_314 = function() {
		this.stop();
	}
	this.frame_319 = function() {
		this.stop();
	}
	this.frame_349 = function() {
		this.stop();
	}
	this.frame_449 = function() {
		this.stop();
	}
	this.frame_459 = function() {
		this.stop();
	}
	this.frame_599 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(10).call(this.frame_14).wait(135).call(this.frame_149).wait(30).call(this.frame_179).wait(135).call(this.frame_314).wait(5).call(this.frame_319).wait(30).call(this.frame_349).wait(100).call(this.frame_449).wait(10).call(this.frame_459).wait(140).call(this.frame_599).wait(600));

	// title
	this.instance = new lib.WaterBudget();
	this.instance.setTransform(136,391.9,1,1,0,0,0,149,47.6);

	this.instance_1 = new lib.TEMPLABEL();
	this.instance_1.setTransform(-97.9,458.3,1,1,0,0,0,49,9.5);

	this.instance_2 = new lib.Precipitationlabel();
	this.instance_2.setTransform(-237.9,460.8,1,1,0,0,0,51.5,12);

	this.instance_3 = new lib.CityTypeLID();
	this.instance_3.setTransform(306.1,-480.9,1,1,0,0,0,202,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},599).to({state:[]},1).wait(599));

	// graph mask copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("EgMMAjDIAAx4IR2AAIAAR4g");
	var mask_graphics_599 = new cjs.Graphics().p("EgMMAjDIAAx4IR2AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:-78.1,y:224.4}).wait(598).to({graphics:mask_graphics_599,x:-78.1,y:224.4}).wait(600));

	// graph copy
	this.instance_4 = new lib.tempgraph();
	this.instance_4.setTransform(2039,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({x:1184.8,y:390.4},598).to({_off:true},1).wait(599));

	// graph mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_1 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");
	var mask_1_graphics_599 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_1,x:-147.1,y:224.4}).wait(598).to({graphics:mask_1_graphics_599,x:-147.1,y:224.4}).wait(600));

	// graph
	this.instance_5 = new lib.watergraph();
	this.instance_5.setTransform(1901,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_5._off = true;

	this.instance_5.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({x:1047.4,y:390.4},598).to({_off:true},1).wait(599));

	// Temp Events
	this.instance_6 = new lib.NormalTempWinter_1();
	this.instance_6.setTransform(507,404.6,1,1,0,0,0,112,63.2);

	this.instance_7 = new lib.NormalTempSpring();
	this.instance_7.setTransform(510,409.6,1,1,0,0,0,112,63.2);

	this.instance_8 = new lib.NormalTempSummer_1();
	this.instance_8.setTransform(506,430.8,1,1,0,0,0,112,86.5);

	this.instance_9 = new lib.NormalTempFall_1();
	this.instance_9.setTransform(608,402,1,1,0,0,0,112,164.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},4).to({state:[]},5).to({state:[{t:this.instance_7}]},140).to({state:[]},5).to({state:[{t:this.instance_8}]},195).to({state:[]},5).to({state:[{t:this.instance_9}]},95).to({state:[]},5).wait(745));

	// Precip Events
	this.instance_10 = new lib.AbDryWinter_3();
	this.instance_10.setTransform(505,385.3,1,1,0,0,0,112,41);

	this.instance_11 = new lib.AbDrySpring_1();
	this.instance_11.setTransform(504,399.7,1,1,0,0,0,112,55.4);

	this.instance_12 = new lib.AbDrySummer1_2();
	this.instance_12.setTransform(509,399.7,1,1,0,0,0,112,55.4);

	this.instance_13 = new lib.AbDrySummer2_2();
	this.instance_13.setTransform(509,399.7,1,1,0,0,0,112,55.4);

	this.instance_14 = new lib.AbDryFall();
	this.instance_14.setTransform(505,399.7,1,1,0,0,0,112,55.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},14).to({state:[]},5).to({state:[{t:this.instance_11}]},160).to({state:[]},5).to({state:[{t:this.instance_12}]},130).to({state:[]},4).to({state:[{t:this.instance_13}]},1).to({state:[]},5).to({state:[{t:this.instance_14}]},135).to({state:[]},5).to({state:[]},136).wait(599));

	// Text Box Control
	this.next = new lib.NextButton();
	this.next.setTransform(424,461,1,1,0,0,0,29.5,15);
	this.next._off = true;

	this.timeline.addTween(cjs.Tween.get(this.next).wait(4).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(130).to({_off:false},0).to({_off:true},5).wait(25).to({_off:false},0).to({_off:true},5).wait(130).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},5).wait(25).to({_off:false},0).to({_off:true},5).wait(95).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(735));

	// Text Box
	this.instance_15 = new lib.rectangle();
	this.instance_15.setTransform(524.9,390.1,1,1,0,0,0,136.9,52);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(599).to({_off:true},1).wait(599));

	// image
	this.instance_16 = new lib.FarmTown();
	this.instance_16.setTransform(-323,-502.5);

	this.instance_17 = new lib.LIDcity_1();
	this.instance_17.setTransform(-323,-502.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16}]}).to({state:[{t:this.instance_17}]},599).to({state:[]},1).wait(599));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323,-502.5,1233,985);


(lib.NormalAbWetWatershed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_149 = function() {
		this.stop();
	}
	this.frame_159 = function() {
		this.stop();
	}
	this.frame_165 = function() {
		this.stop();
	}
	this.frame_169 = function() {
		this.stop();
	}
	this.frame_174 = function() {
		this.stop();
	}
	this.frame_179 = function() {
		this.stop();
	}
	this.frame_184 = function() {
		this.stop();
	}
	this.frame_299 = function() {
		this.stop();
	}
	this.frame_304 = function() {
		this.stop();
	}
	this.frame_309 = function() {
		this.stop();
	}
	this.frame_319 = function() {
		this.stop();
	}
	this.frame_449 = function() {
		this.stop();
	}
	this.frame_459 = function() {
		this.stop();
	}
	this.frame_599 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(10).call(this.frame_14).wait(5).call(this.frame_19).wait(130).call(this.frame_149).wait(10).call(this.frame_159).wait(6).call(this.frame_165).wait(4).call(this.frame_169).wait(5).call(this.frame_174).wait(5).call(this.frame_179).wait(5).call(this.frame_184).wait(115).call(this.frame_299).wait(5).call(this.frame_304).wait(5).call(this.frame_309).wait(10).call(this.frame_319).wait(130).call(this.frame_449).wait(10).call(this.frame_459).wait(140).call(this.frame_599).wait(1));

	// title
	this.instance = new lib.WaterBudget();
	this.instance.setTransform(136,391.9,1,1,0,0,0,149,47.6);

	this.instance_1 = new lib.TEMPLABEL();
	this.instance_1.setTransform(-97.9,458.3,1,1,0,0,0,49,9.5);

	this.instance_2 = new lib.Precipitationlabel();
	this.instance_2.setTransform(-237.9,460.8,1,1,0,0,0,51.5,12);

	this.instance_3 = new lib.CityTypeLID();
	this.instance_3.setTransform(306.1,-480.9,1,1,0,0,0,202,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},599).wait(1));

	// graph mask copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("EgMMAjDIAAx4IR2AAIAAR4g");
	var mask_graphics_599 = new cjs.Graphics().p("EgMMAjDIAAx4IR2AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:-78.1,y:224.4}).wait(598).to({graphics:mask_graphics_599,x:-78.1,y:224.4}).wait(1));

	// graph copy
	this.instance_4 = new lib.tempgraph();
	this.instance_4.setTransform(2039,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({x:1184.8,y:390.4},598).wait(1));

	// graph mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_1 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");
	var mask_1_graphics_599 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_1,x:-147.1,y:224.4}).wait(598).to({graphics:mask_1_graphics_599,x:-147.1,y:224.4}).wait(1));

	// graph
	this.instance_5 = new lib.watergraph();
	this.instance_5.setTransform(1901,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_5._off = true;

	this.instance_5.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({x:1047.4,y:390.4},598).wait(1));

	// Temp Events
	this.instance_6 = new lib.NormalTempWinter_1();
	this.instance_6.setTransform(507,404.6,1,1,0,0,0,112,63.2);

	this.instance_7 = new lib.NormalTempSpring();
	this.instance_7.setTransform(510,409.6,1,1,0,0,0,112,63.2);

	this.instance_8 = new lib.NormalTempSummer_1();
	this.instance_8.setTransform(506,430.8,1,1,0,0,0,112,86.5);

	this.instance_9 = new lib.NormalTempFall_1();
	this.instance_9.setTransform(608,402,1,1,0,0,0,112,164.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},4).to({state:[]},5).to({state:[{t:this.instance_7}]},140).to({state:[]},5).to({state:[{t:this.instance_8}]},165).to({state:[]},6).to({state:[{t:this.instance_9}]},124).to({state:[]},5).wait(146));

	// Precip Events
	this.instance_10 = new lib.AbWetWinter1_1();
	this.instance_10.setTransform(504,401.3,1,1,0,0,0,112,57);

	this.instance_11 = new lib.AbWetWinter2_1();
	this.instance_11.setTransform(504,401.3,1,1,0,0,0,112,57);

	this.instance_12 = new lib.AbWetSpring1_1();
	this.instance_12.setTransform(508,401.3,1,1,0,0,0,112,57);

	this.instance_13 = new lib.AbWetSpring2_1();
	this.instance_13.setTransform(508,401.3,1,1,0,0,0,112,57);

	this.instance_14 = new lib.AbWetSpring3_1();
	this.instance_14.setTransform(508,401.3,1,1,0,0,0,112,57);

	this.instance_15 = new lib.AbWetSpring4();
	this.instance_15.setTransform(508,401.3,1,1,0,0,0,112,57);

	this.instance_16 = new lib.AbWetSpring5();
	this.instance_16.setTransform(508,401.3,1,1,0,0,0,112,57);

	this.instance_17 = new lib.AbWetSpring6();
	this.instance_17.setTransform(508,401.3,1,1,0,0,0,112,57);

	this.instance_18 = new lib.AbWetSummer1_2();
	this.instance_18.setTransform(508,395.3,1,1,0,0,0,112,51);

	this.instance_19 = new lib.AbWetSummer2_2();
	this.instance_19.setTransform(508,395.3,1,1,0,0,0,112,51);

	this.instance_20 = new lib.AbWetSummer3_2();
	this.instance_20.setTransform(508,395.3,1,1,0,0,0,112,51);

	this.instance_21 = new lib.AbWetFall_1();
	this.instance_21.setTransform(508,399.7,1,1,0,0,0,112,55.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},14).to({state:[]},4).to({state:[{t:this.instance_11}]},1).to({state:[]},5).to({state:[{t:this.instance_12}]},135).to({state:[]},5).to({state:[{t:this.instance_13}]},1).to({state:[]},3).to({state:[{t:this.instance_14}]},1).to({state:[]},4).to({state:[{t:this.instance_15}]},1).to({state:[]},4).to({state:[{t:this.instance_16}]},1).to({state:[]},4).to({state:[{t:this.instance_17}]},1).to({state:[]},5).to({state:[{t:this.instance_18}]},110).to({state:[]},4).to({state:[{t:this.instance_19}]},1).to({state:[]},4).to({state:[{t:this.instance_20}]},1).to({state:[]},4).to({state:[{t:this.instance_21}]},146).to({state:[]},5).wait(136));

	// Text Box Control
	this.next = new lib.NextButton();
	this.next.setTransform(424,461,1,1,0,0,0,29.5,15);
	this.next._off = true;

	this.timeline.addTween(cjs.Tween.get(this.next).wait(4).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},5).wait(125).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(1).to({_off:false},0).to({_off:true},3).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},5).wait(110).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(6).to({_off:false},0).to({_off:true},6).wait(124).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(136));

	// Text Box
	this.instance_22 = new lib.rectangle();
	this.instance_22.setTransform(524.9,390.1,1,1,0,0,0,136.9,52);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(600));

	// image
	this.instance_23 = new lib.FarmTown();
	this.instance_23.setTransform(-323,-502.5);

	this.instance_24 = new lib.LIDcity_1();
	this.instance_24.setTransform(-323,-502.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23}]}).to({state:[{t:this.instance_24}]},599).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323,-502.5,1233,985);


(lib.AbHotNormalWatershed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_149 = function() {
		this.stop();
	}
	this.frame_154 = function() {
		this.stop();
	}
	this.frame_159 = function() {
		this.stop();
	}
	this.frame_164 = function() {
		this.stop();
	}
	this.frame_299 = function() {
		this.stop();
	}
	this.frame_314 = function() {
		this.stop();
	}
	this.frame_319 = function() {
		this.stop();
	}
	this.frame_324 = function() {
		this.stop();
	}
	this.frame_449 = function() {
		this.stop();
	}
	this.frame_454 = function() {
		this.stop();
	}
	this.frame_464 = function() {
		this.stop();
	}
	this.frame_599 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(145).call(this.frame_149).wait(5).call(this.frame_154).wait(5).call(this.frame_159).wait(5).call(this.frame_164).wait(135).call(this.frame_299).wait(15).call(this.frame_314).wait(5).call(this.frame_319).wait(5).call(this.frame_324).wait(125).call(this.frame_449).wait(5).call(this.frame_454).wait(10).call(this.frame_464).wait(135).call(this.frame_599).wait(1));

	// title
	this.instance = new lib.WaterBudget();
	this.instance.setTransform(136,391.9,1,1,0,0,0,149,47.6);

	this.instance_1 = new lib.TEMPLABEL();
	this.instance_1.setTransform(-97.9,458.3,1,1,0,0,0,49,9.5);

	this.instance_2 = new lib.Precipitationlabel();
	this.instance_2.setTransform(-237.9,460.8,1,1,0,0,0,51.5,12);

	this.instance_3 = new lib.CityTypeLID();
	this.instance_3.setTransform(306.1,-480.9,1,1,0,0,0,202,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},599).wait(1));

	// graph mask copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("EgMMAjDIAAx4IR2AAIAAR4g");
	var mask_graphics_599 = new cjs.Graphics().p("EgMMAjDIAAx4IR2AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:-78.1,y:224.4}).wait(598).to({graphics:mask_graphics_599,x:-78.1,y:224.4}).wait(1));

	// graph copy
	this.instance_4 = new lib.tempgraph();
	this.instance_4.setTransform(2039,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({x:1184.8,y:390.4},598).wait(1));

	// graph mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_1 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");
	var mask_1_graphics_599 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_1,x:-147.1,y:224.4}).wait(598).to({graphics:mask_1_graphics_599,x:-147.1,y:224.4}).wait(1));

	// graph
	this.instance_5 = new lib.watergraph();
	this.instance_5.setTransform(1901,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_5._off = true;

	this.instance_5.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({x:1047.4,y:390.4},598).wait(1));

	// Temp Events
	this.instance_6 = new lib.AbHotSpring1();
	this.instance_6.setTransform(505,500.8,1,1,0,0,0,112,156.5);

	this.instance_7 = new lib.AbHotSpring2();
	this.instance_7.setTransform(505,500.8,1,1,0,0,0,112,156.5);

	this.instance_8 = new lib.AbHotSummer1();
	this.instance_8.setTransform(506,423.1,1,1,0,0,0,112,78.8);

	this.instance_9 = new lib.AbHotSummer2();
	this.instance_9.setTransform(506,423.1,1,1,0,0,0,112,78.8);

	this.instance_10 = new lib.AbHotSummer3();
	this.instance_10.setTransform(506,423.1,1,1,0,0,0,112,78.8);

	this.instance_11 = new lib.AbHotFall1();
	this.instance_11.setTransform(506,423.1,1,1,0,0,0,112,78.8);

	this.instance_12 = new lib.AbHotFall2();
	this.instance_12.setTransform(506,423.1,1,1,0,0,0,112,78.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},149).to({state:[]},4).to({state:[{t:this.instance_7}]},1).to({state:[]},4).to({state:[{t:this.instance_8}]},156).to({state:[]},4).to({state:[{t:this.instance_9}]},1).to({state:[]},4).to({state:[{t:this.instance_10}]},1).to({state:[]},5).to({state:[{t:this.instance_11}]},120).to({state:[]},4).to({state:[{t:this.instance_12}]},1).to({state:[]},5).wait(141));

	// Precip Events
	this.instance_13 = new lib.NormalPrecipWinter_2();
	this.instance_13.setTransform(509,500.8,1,1,0,0,0,112,156.5);

	this.instance_14 = new lib.NormalPrecipSpring1_2();
	this.instance_14.setTransform(507,500.8,1,1,0,0,0,112,156.5);

	this.instance_15 = new lib.NormalPrecipSpring2_2();
	this.instance_15.setTransform(507,500.8,1,1,0,0,0,112,156.5);

	this.instance_16 = new lib.NormalPrecipSummer_2();
	this.instance_16.setTransform(505,437.1,1,1,0,0,0,112,96);

	this.instance_17 = new lib.NormalPrecipFall_1();
	this.instance_17.setTransform(506,454.2,1,1,0,0,0,112,109.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},4).to({state:[]},5).to({state:[{t:this.instance_14}]},150).to({state:[]},4).to({state:[{t:this.instance_15}]},1).to({state:[]},5).to({state:[{t:this.instance_16}]},130).to({state:[]},5).to({state:[{t:this.instance_17}]},160).to({state:[]},5).wait(131));

	// Text Box Control
	this.next = new lib.NextButton();
	this.next.setTransform(424,461,1,1,0,0,0,29.5,15);
	this.next._off = true;

	this.timeline.addTween(cjs.Tween.get(this.next).wait(4).to({_off:false},0).to({_off:true},5).wait(140).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},5).wait(130).to({_off:false},0).to({_off:true},5).wait(10).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},5).wait(120).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(131));

	// Text Box
	this.instance_18 = new lib.rectangle();
	this.instance_18.setTransform(524.9,390.1,1,1,0,0,0,136.9,52);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(600));

	// image
	this.instance_19 = new lib.FarmTown();
	this.instance_19.setTransform(-323,-502.5);

	this.instance_20 = new lib.LIDcity_1();
	this.instance_20.setTransform(-323,-502.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19}]}).to({state:[{t:this.instance_20}]},599).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323,-502.5,1233,985);


(lib.AbHotAbWetWatershed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_149 = function() {
		this.stop();
	}
	this.frame_154 = function() {
		this.stop();
	}
	this.frame_159 = function() {
		this.stop();
	}
	this.frame_165 = function() {
		this.stop();
	}
	this.frame_169 = function() {
		this.stop();
	}
	this.frame_174 = function() {
		this.stop();
	}
	this.frame_179 = function() {
		this.stop();
	}
	this.frame_184 = function() {
		this.stop();
	}
	this.frame_299 = function() {
		this.stop();
	}
	this.frame_304 = function() {
		this.stop();
	}
	this.frame_309 = function() {
		this.stop();
	}
	this.frame_314 = function() {
		this.stop();
	}
	this.frame_319 = function() {
		this.stop();
	}
	this.frame_324 = function() {
		this.stop();
	}
	this.frame_449 = function() {
		this.stop();
	}
	this.frame_454 = function() {
		this.stop();
	}
	this.frame_464 = function() {
		this.stop();
	}
	this.frame_599 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(5).call(this.frame_19).wait(130).call(this.frame_149).wait(5).call(this.frame_154).wait(5).call(this.frame_159).wait(6).call(this.frame_165).wait(4).call(this.frame_169).wait(5).call(this.frame_174).wait(5).call(this.frame_179).wait(5).call(this.frame_184).wait(115).call(this.frame_299).wait(5).call(this.frame_304).wait(5).call(this.frame_309).wait(5).call(this.frame_314).wait(5).call(this.frame_319).wait(5).call(this.frame_324).wait(125).call(this.frame_449).wait(5).call(this.frame_454).wait(10).call(this.frame_464).wait(135).call(this.frame_599).wait(600));

	// title
	this.instance = new lib.WaterBudget();
	this.instance.setTransform(136,391.9,1,1,0,0,0,149,47.6);

	this.instance_1 = new lib.TEMPLABEL();
	this.instance_1.setTransform(-97.9,458.3,1,1,0,0,0,49,9.5);

	this.instance_2 = new lib.Precipitationlabel();
	this.instance_2.setTransform(-237.9,460.8,1,1,0,0,0,51.5,12);

	this.instance_3 = new lib.CityTypeLID();
	this.instance_3.setTransform(306.1,-480.9,1,1,0,0,0,202,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},599).to({state:[]},1).wait(599));

	// graph mask copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("EgMMAjDIAAx4IR2AAIAAR4g");
	var mask_graphics_599 = new cjs.Graphics().p("EgMMAjDIAAx4IR2AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:-78.1,y:224.4}).wait(598).to({graphics:mask_graphics_599,x:-78.1,y:224.4}).wait(600));

	// graph copy
	this.instance_4 = new lib.tempgraph();
	this.instance_4.setTransform(2039,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({x:1184.8,y:390.4},598).to({_off:true},1).wait(599));

	// graph mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_1 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");
	var mask_1_graphics_599 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_1,x:-147.1,y:224.4}).wait(598).to({graphics:mask_1_graphics_599,x:-147.1,y:224.4}).wait(600));

	// graph
	this.instance_5 = new lib.watergraph();
	this.instance_5.setTransform(1901,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_5._off = true;

	this.instance_5.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({x:1047.4,y:390.4},598).to({_off:true},1).wait(599));

	// Temp Events
	this.instance_6 = new lib.AbHotSpring1();
	this.instance_6.setTransform(505,500.8,1,1,0,0,0,112,156.5);

	this.instance_7 = new lib.AbHotSpring2();
	this.instance_7.setTransform(505,500.8,1,1,0,0,0,112,156.5);

	this.instance_8 = new lib.AbHotSummer1();
	this.instance_8.setTransform(506,423.1,1,1,0,0,0,112,78.8);

	this.instance_9 = new lib.AbHotSummer2();
	this.instance_9.setTransform(506,423.1,1,1,0,0,0,112,78.8);

	this.instance_10 = new lib.AbHotSummer3();
	this.instance_10.setTransform(506,423.1,1,1,0,0,0,112,78.8);

	this.instance_11 = new lib.AbHotFall1();
	this.instance_11.setTransform(506,423.1,1,1,0,0,0,112,78.8);

	this.instance_12 = new lib.AbHotFall2();
	this.instance_12.setTransform(506,423.1,1,1,0,0,0,112,78.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},149).to({state:[]},4).to({state:[{t:this.instance_7}]},1).to({state:[]},4).to({state:[{t:this.instance_8}]},156).to({state:[]},4).to({state:[{t:this.instance_9}]},1).to({state:[]},4).to({state:[{t:this.instance_10}]},1).to({state:[]},5).to({state:[{t:this.instance_11}]},120).to({state:[]},4).to({state:[{t:this.instance_12}]},1).to({state:[]},5).to({state:[]},141).wait(599));

	// Precip Events
	this.instance_13 = new lib.AbWetWinter1_1();
	this.instance_13.setTransform(504,401.3,1,1,0,0,0,112,57);

	this.instance_14 = new lib.AbWetWinter2_1();
	this.instance_14.setTransform(504,401.3,1,1,0,0,0,112,57);

	this.instance_15 = new lib.AbWetSpring1_1();
	this.instance_15.setTransform(508,401.3,1,1,0,0,0,112,57);

	this.instance_16 = new lib.AbWetSpring2_1();
	this.instance_16.setTransform(508,401.3,1,1,0,0,0,112,57);

	this.instance_17 = new lib.AbWetSpring3_1();
	this.instance_17.setTransform(508,401.3,1,1,0,0,0,112,57);

	this.instance_18 = new lib.AbWetSpring4();
	this.instance_18.setTransform(508,401.3,1,1,0,0,0,112,57);

	this.instance_19 = new lib.AbWetSpring5();
	this.instance_19.setTransform(508,401.3,1,1,0,0,0,112,57);

	this.instance_20 = new lib.AbWetSpring6();
	this.instance_20.setTransform(508,401.3,1,1,0,0,0,112,57);

	this.instance_21 = new lib.AbWetSummer1_2();
	this.instance_21.setTransform(508,395.3,1,1,0,0,0,112,51);

	this.instance_22 = new lib.AbWetSummer2_2();
	this.instance_22.setTransform(508,395.3,1,1,0,0,0,112,51);

	this.instance_23 = new lib.AbWetSummer3_2();
	this.instance_23.setTransform(508,395.3,1,1,0,0,0,112,51);

	this.instance_24 = new lib.AbWetFall_1();
	this.instance_24.setTransform(508,399.7,1,1,0,0,0,112,55.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},14).to({state:[]},4).to({state:[{t:this.instance_14}]},1).to({state:[]},5).to({state:[{t:this.instance_15}]},135).to({state:[]},5).to({state:[{t:this.instance_16}]},1).to({state:[]},3).to({state:[{t:this.instance_17}]},1).to({state:[]},4).to({state:[{t:this.instance_18}]},1).to({state:[]},4).to({state:[{t:this.instance_19}]},1).to({state:[]},4).to({state:[{t:this.instance_20}]},1).to({state:[]},5).to({state:[{t:this.instance_21}]},110).to({state:[]},4).to({state:[{t:this.instance_22}]},1).to({state:[]},4).to({state:[{t:this.instance_23}]},1).to({state:[]},4).to({state:[{t:this.instance_24}]},151).to({state:[]},5).wait(730));

	// Text Box Control
	this.next = new lib.NextButton();
	this.next.setTransform(424,461,1,1,0,0,0,29.5,15);
	this.next._off = true;

	this.timeline.addTween(cjs.Tween.get(this.next).wait(14).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},5).wait(125).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},5).wait(1).to({_off:false},0).to({_off:true},3).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},5).wait(110).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},5).wait(120).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(730));

	// Text Box
	this.instance_25 = new lib.rectangle();
	this.instance_25.setTransform(524.9,390.1,1,1,0,0,0,136.9,52);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(599).to({_off:true},1).wait(599));

	// image
	this.instance_26 = new lib.FarmTown();
	this.instance_26.setTransform(-323,-502.5);

	this.instance_27 = new lib.LIDcity_1();
	this.instance_27.setTransform(-323,-502.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_26}]}).to({state:[{t:this.instance_27}]},599).to({state:[]},1).wait(599));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323,-502.5,1233,985);


(lib.AbHotAbDryWatershed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_149 = function() {
		this.stop();
	}
	this.frame_154 = function() {
		this.stop();
	}
	this.frame_179 = function() {
		this.stop();
	}
	this.frame_314 = function() {
		this.stop();
	}
	this.frame_319 = function() {
		this.stop();
	}
	this.frame_324 = function() {
		this.stop();
	}
	this.frame_334 = function() {
		this.stop();
	}
	this.frame_339 = function() {
		this.stop();
	}
	this.frame_449 = function() {
		this.stop();
	}
	this.frame_454 = function() {
		this.stop();
	}
	this.frame_459 = function() {
		this.stop();
	}
	this.frame_599 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(135).call(this.frame_149).wait(5).call(this.frame_154).wait(25).call(this.frame_179).wait(135).call(this.frame_314).wait(5).call(this.frame_319).wait(5).call(this.frame_324).wait(10).call(this.frame_334).wait(5).call(this.frame_339).wait(110).call(this.frame_449).wait(5).call(this.frame_454).wait(5).call(this.frame_459).wait(140).call(this.frame_599).wait(600));

	// title
	this.instance = new lib.WaterBudget();
	this.instance.setTransform(136,391.9,1,1,0,0,0,149,47.6);

	this.instance_1 = new lib.TEMPLABEL();
	this.instance_1.setTransform(-97.9,458.3,1,1,0,0,0,49,9.5);

	this.instance_2 = new lib.Precipitationlabel();
	this.instance_2.setTransform(-237.9,460.8,1,1,0,0,0,51.5,12);

	this.instance_3 = new lib.CityTypeLID();
	this.instance_3.setTransform(306.1,-480.9,1,1,0,0,0,202,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},599).to({state:[]},1).wait(599));

	// graph mask copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("EgMMAjDIAAx4IR2AAIAAR4g");
	var mask_graphics_599 = new cjs.Graphics().p("EgMMAjDIAAx4IR2AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:-78.1,y:224.4}).wait(598).to({graphics:mask_graphics_599,x:-78.1,y:224.4}).wait(600));

	// graph copy
	this.instance_4 = new lib.tempgraph();
	this.instance_4.setTransform(2039,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({x:1184.8,y:390.4},598).to({_off:true},1).wait(599));

	// graph mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_1 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");
	var mask_1_graphics_599 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_1,x:-147.1,y:224.4}).wait(598).to({graphics:mask_1_graphics_599,x:-147.1,y:224.4}).wait(600));

	// graph
	this.instance_5 = new lib.watergraph();
	this.instance_5.setTransform(1901,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_5._off = true;

	this.instance_5.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({x:1047.4,y:390.4},598).to({_off:true},1).wait(599));

	// Temp Events
	this.instance_6 = new lib.AbHotSpring1();
	this.instance_6.setTransform(505,500.8,1,1,0,0,0,112,156.5);

	this.instance_7 = new lib.AbHotSpring2();
	this.instance_7.setTransform(505,500.8,1,1,0,0,0,112,156.5);

	this.instance_8 = new lib.AbHotSummer1();
	this.instance_8.setTransform(506,423.1,1,1,0,0,0,112,78.8);

	this.instance_9 = new lib.AbHotSummer2();
	this.instance_9.setTransform(506,423.1,1,1,0,0,0,112,78.8);

	this.instance_10 = new lib.AbHotSummer3();
	this.instance_10.setTransform(506,423.1,1,1,0,0,0,112,78.8);

	this.instance_11 = new lib.AbHotFall1();
	this.instance_11.setTransform(506,423.1,1,1,0,0,0,112,78.8);

	this.instance_12 = new lib.AbHotFall2();
	this.instance_12.setTransform(506,423.1,1,1,0,0,0,112,78.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},149).to({state:[]},4).to({state:[{t:this.instance_7}]},1).to({state:[]},4).to({state:[{t:this.instance_8}]},156).to({state:[]},4).to({state:[{t:this.instance_9}]},1).to({state:[]},4).to({state:[{t:this.instance_10}]},1).to({state:[]},5).to({state:[{t:this.instance_11}]},120).to({state:[]},4).to({state:[{t:this.instance_12}]},1).to({state:[]},5).wait(740));

	// Precip Events
	this.instance_13 = new lib.AbDryWinter_3();
	this.instance_13.setTransform(505,385.3,1,1,0,0,0,112,41);

	this.instance_14 = new lib.AbDrySpring_1();
	this.instance_14.setTransform(504,399.7,1,1,0,0,0,112,55.4);

	this.instance_15 = new lib.AbDrySummer1_2();
	this.instance_15.setTransform(509,399.7,1,1,0,0,0,112,55.4);

	this.instance_16 = new lib.AbDrySummer2_2();
	this.instance_16.setTransform(509,399.7,1,1,0,0,0,112,55.4);

	this.instance_17 = new lib.AbDryFall();
	this.instance_17.setTransform(505,399.7,1,1,0,0,0,112,55.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},14).to({state:[]},5).to({state:[{t:this.instance_14}]},160).to({state:[]},5).to({state:[{t:this.instance_15}]},150).to({state:[]},4).to({state:[{t:this.instance_16}]},1).to({state:[]},5).to({state:[{t:this.instance_17}]},115).to({state:[]},5).to({state:[]},136).wait(599));

	// Text Box Control
	this.next = new lib.NextButton();
	this.next.setTransform(424,461,1,1,0,0,0,29.5,15);
	this.next._off = true;

	this.timeline.addTween(cjs.Tween.get(this.next).wait(14).to({_off:false},0).to({_off:true},5).wait(130).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(21).to({_off:false},0).to({_off:true},5).wait(130).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},5).wait(105).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).wait(5).to({_off:true},5).wait(735));

	// Text Box
	this.instance_18 = new lib.rectangle();
	this.instance_18.setTransform(524.9,390.1,1,1,0,0,0,136.9,52);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(599).to({_off:true},1).wait(599));

	// image
	this.instance_19 = new lib.FarmTown();
	this.instance_19.setTransform(-323,-502.5);

	this.instance_20 = new lib.LIDcity_1();
	this.instance_20.setTransform(-323,-502.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19}]}).to({state:[{t:this.instance_20}]},599).to({state:[]},1).wait(599));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323,-502.5,1233,985);


(lib.AbColdNormalWatershed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_149 = function() {
		this.stop();
	}
	this.frame_154 = function() {
		this.stop();
	}
	this.frame_159 = function() {
		this.stop();
	}
	this.frame_165 = function() {
		this.stop();
	}
	this.frame_169 = function() {
		this.stop();
	}
	this.frame_184 = function() {
		this.stop();
	}
	this.frame_189 = function() {
		this.stop();
	}
	this.frame_299 = function() {
		this.stop();
	}
	this.frame_304 = function() {
		this.stop();
	}
	this.frame_314 = function() {
		this.stop();
	}
	this.frame_449 = function() {
		this.stop();
	}
	this.frame_464 = function() {
		this.stop();
	}
	this.frame_599 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(10).call(this.frame_14).wait(135).call(this.frame_149).wait(5).call(this.frame_154).wait(5).call(this.frame_159).wait(6).call(this.frame_165).wait(4).call(this.frame_169).wait(15).call(this.frame_184).wait(5).call(this.frame_189).wait(110).call(this.frame_299).wait(5).call(this.frame_304).wait(10).call(this.frame_314).wait(135).call(this.frame_449).wait(15).call(this.frame_464).wait(135).call(this.frame_599).wait(1));

	// title
	this.instance = new lib.WaterBudget();
	this.instance.setTransform(136,391.9,1,1,0,0,0,149,47.6);

	this.instance_1 = new lib.TEMPLABEL();
	this.instance_1.setTransform(-97.9,458.3,1,1,0,0,0,49,9.5);

	this.instance_2 = new lib.Precipitationlabel();
	this.instance_2.setTransform(-237.9,460.8,1,1,0,0,0,51.5,12);

	this.instance_3 = new lib.CityTypeLID();
	this.instance_3.setTransform(306.1,-480.9,1,1,0,0,0,202,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},599).wait(1));

	// graph mask copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("EgMMAjDIAAx4IR2AAIAAR4g");
	var mask_graphics_599 = new cjs.Graphics().p("EgMMAjDIAAx4IR2AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:-78.1,y:224.4}).wait(598).to({graphics:mask_graphics_599,x:-78.1,y:224.4}).wait(1));

	// graph copy
	this.instance_4 = new lib.tempgraph();
	this.instance_4.setTransform(2039,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({x:1184.8,y:390.4},598).wait(1));

	// graph mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_1 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");
	var mask_1_graphics_599 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_1,x:-147.1,y:224.4}).wait(598).to({graphics:mask_1_graphics_599,x:-147.1,y:224.4}).wait(1));

	// graph
	this.instance_5 = new lib.watergraph();
	this.instance_5.setTransform(1901,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_5._off = true;

	this.instance_5.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({x:1047.4,y:390.4},598).wait(1));

	// Temp Events
	this.instance_6 = new lib.AbColdWinter_1();
	this.instance_6.setTransform(510,399.7,1,1,0,0,0,112,55.4);

	this.instance_7 = new lib.AbColdSpring1();
	this.instance_7.setTransform(504,395.5,1,1,0,0,0,112,55.4);

	this.instance_8 = new lib.AbColdSpring2();
	this.instance_8.setTransform(504,395.5,1,1,0,0,0,112,55.4);

	this.instance_9 = new lib.AbColdSpring3();
	this.instance_9.setTransform(504,395.5,1,1,0,0,0,112,55.4);

	this.instance_10 = new lib.AbColdSpring4();
	this.instance_10.setTransform(504,395.5,1,1,0,0,0,112,55.4);

	this.instance_11 = new lib.AbColdSpring5();
	this.instance_11.setTransform(504,395.5,1,1,0,0,0,112,55.4);

	this.instance_12 = new lib.AbColdSummer1_1();
	this.instance_12.setTransform(507,423.1,1,1,0,0,0,112,78.8);

	this.instance_13 = new lib.AbColdSummer2_1();
	this.instance_13.setTransform(507,423.1,1,1,0,0,0,112,78.8);

	this.instance_14 = new lib.AbColdFall_1();
	this.instance_14.setTransform(511,423.1,1,1,0,0,0,112,78.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},14).to({state:[]},5).to({state:[{t:this.instance_7}]},130).to({state:[]},4).to({state:[{t:this.instance_8}]},1).to({state:[]},4).to({state:[{t:this.instance_9}]},1).to({state:[]},5).to({state:[{t:this.instance_10}]},1).to({state:[]},3).to({state:[{t:this.instance_11}]},1).to({state:[]},5).to({state:[{t:this.instance_12}]},125).to({state:[]},4).to({state:[{t:this.instance_13}]},1).to({state:[]},5).to({state:[{t:this.instance_14}]},140).to({state:[]},5).wait(146));

	// Precip Events
	this.instance_15 = new lib.NormalPrecipWinter_2();
	this.instance_15.setTransform(509,500.8,1,1,0,0,0,112,156.5);

	this.instance_16 = new lib.NormalPrecipSpring1_2();
	this.instance_16.setTransform(507,500.8,1,1,0,0,0,112,156.5);

	this.instance_17 = new lib.NormalPrecipSpring2_2();
	this.instance_17.setTransform(507,500.8,1,1,0,0,0,112,156.5);

	this.instance_18 = new lib.NormalPrecipSummer_2();
	this.instance_18.setTransform(505,437.1,1,1,0,0,0,112,96);

	this.instance_19 = new lib.NormalPrecipFall_1();
	this.instance_19.setTransform(506,454.2,1,1,0,0,0,112,109.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15}]},4).to({state:[]},5).to({state:[{t:this.instance_16}]},175).to({state:[]},4).to({state:[{t:this.instance_17}]},1).to({state:[]},5).to({state:[{t:this.instance_18}]},120).to({state:[]},5).to({state:[{t:this.instance_19}]},145).to({state:[]},5).wait(131));

	// Text Box Control
	this.next = new lib.NextButton();
	this.next.setTransform(424,461,1,1,0,0,0,29.5,15);
	this.next._off = true;

	this.timeline.addTween(cjs.Tween.get(this.next).wait(4).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(130).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},5).wait(1).to({_off:false},0).to({_off:true},3).wait(1).to({_off:false},0).to({_off:true},5).wait(10).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},5).wait(105).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(130).to({_off:false},0).to({_off:true},5).wait(10).to({_off:false},0).to({_off:true},5).wait(131));

	// Text Box
	this.instance_20 = new lib.rectangle();
	this.instance_20.setTransform(524.9,390.1,1,1,0,0,0,136.9,52);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(600));

	// image
	this.instance_21 = new lib.FarmTown();
	this.instance_21.setTransform(-323,-502.5);

	this.instance_22 = new lib.LIDcity_1();
	this.instance_22.setTransform(-323,-502.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21}]}).to({state:[{t:this.instance_22}]},599).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323,-502.5,1233,985);


(lib.AbColdAbWetWatershed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_149 = function() {
		this.stop();
	}
	this.frame_154 = function() {
		this.stop();
	}
	this.frame_159 = function() {
		this.stop();
	}
	this.frame_165 = function() {
		this.stop();
	}
	this.frame_169 = function() {
		this.stop();
	}
	this.frame_184 = function() {
		this.stop();
	}
	this.frame_190 = function() {
		this.stop();
	}
	this.frame_194 = function() {
		this.stop();
	}
	this.frame_199 = function() {
		this.stop();
	}
	this.frame_204 = function() {
		this.stop();
	}
	this.frame_209 = function() {
		this.stop();
	}
	this.frame_299 = function() {
		this.stop();
	}
	this.frame_304 = function() {
		this.stop();
	}
	this.frame_319 = function() {
		this.stop();
	}
	this.frame_324 = function() {
		this.stop();
	}
	this.frame_329 = function() {
		this.stop();
	}
	this.frame_449 = function() {
		this.stop();
	}
	this.frame_459 = function() {
		this.stop();
	}
	this.frame_599 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(10).call(this.frame_14).wait(5).call(this.frame_19).wait(130).call(this.frame_149).wait(5).call(this.frame_154).wait(5).call(this.frame_159).wait(6).call(this.frame_165).wait(4).call(this.frame_169).wait(15).call(this.frame_184).wait(6).call(this.frame_190).wait(4).call(this.frame_194).wait(5).call(this.frame_199).wait(5).call(this.frame_204).wait(5).call(this.frame_209).wait(90).call(this.frame_299).wait(5).call(this.frame_304).wait(15).call(this.frame_319).wait(5).call(this.frame_324).wait(5).call(this.frame_329).wait(120).call(this.frame_449).wait(10).call(this.frame_459).wait(140).call(this.frame_599).wait(600));

	// title
	this.instance = new lib.TEMPLABEL();
	this.instance.setTransform(-97.9,458.3,1,1,0,0,0,49,9.5);

	this.instance_1 = new lib.Precipitationlabel();
	this.instance_1.setTransform(-237.9,460.8,1,1,0,0,0,51.5,12);

	this.instance_2 = new lib.CityTypeLID();
	this.instance_2.setTransform(306.1,-480.9,1,1,0,0,0,202,15);

	this.instance_3 = new lib.WaterBudget();
	this.instance_3.setTransform(136,391.9,1,1,0,0,0,149,47.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_3}]},599).to({state:[]},1).wait(599));

	// graph mask copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("EgMMAjDIAAx4IR2AAIAAR4g");
	var mask_graphics_599 = new cjs.Graphics().p("EgMMAjDIAAx4IR2AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:-78.1,y:224.4}).wait(598).to({graphics:mask_graphics_599,x:-78.1,y:224.4}).wait(600));

	// graph copy
	this.instance_4 = new lib.tempgraph();
	this.instance_4.setTransform(2039,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({x:1184.8,y:390.4},598).to({_off:true},1).wait(599));

	// graph mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_1 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");
	var mask_1_graphics_599 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_1,x:-147.1,y:224.4}).wait(598).to({graphics:mask_1_graphics_599,x:-147.1,y:224.4}).wait(600));

	// graph
	this.instance_5 = new lib.watergraph();
	this.instance_5.setTransform(1901,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_5._off = true;

	this.instance_5.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({x:1047.4,y:390.4},598).to({_off:true},1).wait(599));

	// Temp Events
	this.instance_6 = new lib.AbColdWinter_1();
	this.instance_6.setTransform(510,399.7,1,1,0,0,0,112,55.4);

	this.instance_7 = new lib.AbColdSpring1();
	this.instance_7.setTransform(504,395.5,1,1,0,0,0,112,55.4);

	this.instance_8 = new lib.AbColdSpring2();
	this.instance_8.setTransform(504,395.5,1,1,0,0,0,112,55.4);

	this.instance_9 = new lib.AbColdSpring3();
	this.instance_9.setTransform(504,395.5,1,1,0,0,0,112,55.4);

	this.instance_10 = new lib.AbColdSpring4();
	this.instance_10.setTransform(504,395.5,1,1,0,0,0,112,55.4);

	this.instance_11 = new lib.AbColdSpring5();
	this.instance_11.setTransform(504,395.5,1,1,0,0,0,112,55.4);

	this.instance_12 = new lib.AbColdSummer1_1();
	this.instance_12.setTransform(507,423.1,1,1,0,0,0,112,78.8);

	this.instance_13 = new lib.AbColdSummer2_1();
	this.instance_13.setTransform(507,423.1,1,1,0,0,0,112,78.8);

	this.instance_14 = new lib.AbColdFall_1();
	this.instance_14.setTransform(511,423.1,1,1,0,0,0,112,78.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},4).to({state:[]},5).to({state:[{t:this.instance_7}]},140).to({state:[]},4).to({state:[{t:this.instance_8}]},1).to({state:[]},4).to({state:[{t:this.instance_9}]},1).to({state:[]},5).to({state:[{t:this.instance_10}]},1).to({state:[]},3).to({state:[{t:this.instance_11}]},1).to({state:[]},5).to({state:[{t:this.instance_12}]},125).to({state:[]},4).to({state:[{t:this.instance_13}]},1).to({state:[]},5).to({state:[{t:this.instance_14}]},140).to({state:[]},5).to({state:[]},146).wait(599));

	// Precip Events
	this.instance_15 = new lib.AbWetWinter1_1();
	this.instance_15.setTransform(504,401.3,1,1,0,0,0,112,57);

	this.instance_16 = new lib.AbWetWinter2_1();
	this.instance_16.setTransform(504,401.3,1,1,0,0,0,112,57);

	this.instance_17 = new lib.AbWetSpring1_1();
	this.instance_17.setTransform(508,401.3,1,1,0,0,0,112,57);

	this.instance_18 = new lib.AbWetSpring2_1();
	this.instance_18.setTransform(508,401.3,1,1,0,0,0,112,57);

	this.instance_19 = new lib.AbWetSpring3_1();
	this.instance_19.setTransform(508,401.3,1,1,0,0,0,112,57);

	this.instance_20 = new lib.AbWetSpring4();
	this.instance_20.setTransform(508,401.3,1,1,0,0,0,112,57);

	this.instance_21 = new lib.AbWetSpring5();
	this.instance_21.setTransform(508,401.3,1,1,0,0,0,112,57);

	this.instance_22 = new lib.AbWetSpring6();
	this.instance_22.setTransform(508,401.3,1,1,0,0,0,112,57);

	this.instance_23 = new lib.AbWetSummer1_2();
	this.instance_23.setTransform(508,395.3,1,1,0,0,0,112,51);

	this.instance_24 = new lib.AbWetSummer2_2();
	this.instance_24.setTransform(508,395.3,1,1,0,0,0,112,51);

	this.instance_25 = new lib.AbWetSummer3_2();
	this.instance_25.setTransform(508,395.3,1,1,0,0,0,112,51);

	this.instance_26 = new lib.AbWetFall_1();
	this.instance_26.setTransform(508,399.7,1,1,0,0,0,112,55.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15}]},14).to({state:[]},4).to({state:[{t:this.instance_16}]},1).to({state:[]},5).to({state:[{t:this.instance_17}]},160).to({state:[]},5).to({state:[{t:this.instance_18}]},1).to({state:[]},3).to({state:[{t:this.instance_19}]},1).to({state:[]},4).to({state:[{t:this.instance_20}]},1).to({state:[]},4).to({state:[{t:this.instance_21}]},1).to({state:[]},4).to({state:[{t:this.instance_22}]},1).to({state:[]},5).to({state:[{t:this.instance_23}]},105).to({state:[]},4).to({state:[{t:this.instance_24}]},1).to({state:[]},4).to({state:[{t:this.instance_25}]},1).to({state:[]},4).to({state:[{t:this.instance_26}]},126).to({state:[]},5).wait(735));

	// Text Box Control
	this.next = new lib.NextButton();
	this.next.setTransform(424,461,1,1,0,0,0,29.5,15);
	this.next._off = true;

	this.timeline.addTween(cjs.Tween.get(this.next).wait(4).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},5).wait(125).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},5).wait(1).to({_off:false},0).to({_off:true},3).wait(1).to({_off:false},0).to({_off:true},5).wait(10).to({_off:false},0).to({_off:true},5).wait(1).to({_off:false},0).to({_off:true},3).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},5).wait(85).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},5).wait(10).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(116).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(735));

	// Text Box
	this.instance_27 = new lib.rectangle();
	this.instance_27.setTransform(524.9,390.1,1,1,0,0,0,136.9,52);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(599).to({_off:true},1).wait(599));

	// image
	this.instance_28 = new lib.FarmTown();
	this.instance_28.setTransform(-323,-502.5);

	this.instance_29 = new lib.LIDcity_1();
	this.instance_29.setTransform(-323,-502.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_28}]}).to({state:[{t:this.instance_29}]},599).to({state:[]},1).wait(599));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323,-502.5,1233,985);


(lib.AbColdAbDryWatershed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
		
		this.next.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_5.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_5()
		{
			this.gotoAndPlay(7);
		}
	}
	this.frame_14 = function() {
		this.stop();
		
		this.next.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_5.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_5()
		{
			this.gotoAndPlay(17);
		}
	}
	this.frame_149 = function() {
		this.stop();
		
		this.next.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_5.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_5()
		{
			this.gotoAndPlay(152);
		}
	}
	this.frame_154 = function() {
		this.stop();
		
		this.next.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_5.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_5()
		{
			this.gotoAndPlay(157);
		}
	}
	this.frame_159 = function() {
		this.stop();
		
		this.next.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_5.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_5()
		{
			this.gotoAndPlay(162);
		}
	}
	this.frame_165 = function() {
		this.stop();
		
		this.next.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_5.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_5()
		{
			this.gotoAndPlay(166);
		}
	}
	this.frame_169 = function() {
		this.stop();
		
		this.next.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_5.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_5()
		{
			this.gotoAndPlay(172);
		}
	}
	this.frame_179 = function() {
		this.stop();
		
		this.next.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_5.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_5()
		{
			this.gotoAndPlay(183);
		}
	}
	this.frame_299 = function() {
		this.stop();
		
		this.next.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_5.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_5()
		{
			this.gotoAndPlay(302);
		}
	}
	this.frame_304 = function() {
		this.stop();
		
		this.next.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_5.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_5()
		{
			this.gotoAndPlay(307);
		}
	}
	this.frame_314 = function() {
		this.stop();
		
		this.next.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_5.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_5()
		{
			this.gotoAndPlay(317);
		}
	}
	this.frame_319 = function() {
		this.stop();
		
		this.YESbutton.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_5.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_5()
		{
			this.gotoAndPlay(325);
		}
		
		
		this.NObutton.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_5.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_5()
		{
			this.gotoAndPlay(325);
		}
	}
	this.frame_449 = function() {
		this.stop();
	}
	this.frame_459 = function() {
		this.stop();
	}
	this.frame_599 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(10).call(this.frame_14).wait(135).call(this.frame_149).wait(5).call(this.frame_154).wait(5).call(this.frame_159).wait(6).call(this.frame_165).wait(4).call(this.frame_169).wait(10).call(this.frame_179).wait(120).call(this.frame_299).wait(5).call(this.frame_304).wait(10).call(this.frame_314).wait(5).call(this.frame_319).wait(130).call(this.frame_449).wait(10).call(this.frame_459).wait(140).call(this.frame_599).wait(1));

	// title
	this.instance = new lib.WaterBudget();
	this.instance.setTransform(136,391.9,1,1,0,0,0,149,47.6);

	this.instance_1 = new lib.TEMPLABEL();
	this.instance_1.setTransform(-97.9,458.3,1,1,0,0,0,49,9.5);

	this.instance_2 = new lib.Precipitationlabel();
	this.instance_2.setTransform(-237.9,460.8,1,1,0,0,0,51.5,12);

	this.instance_3 = new lib.CityTypeLID();
	this.instance_3.setTransform(306.1,-480.9,1,1,0,0,0,202,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},599).wait(1));

	// graph mask copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("EgMMAjDIAAx4IR2AAIAAR4g");
	var mask_graphics_599 = new cjs.Graphics().p("EgMMAjDIAAx4IR2AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:-78.1,y:224.4}).wait(598).to({graphics:mask_graphics_599,x:-78.1,y:224.4}).wait(1));

	// graph copy
	this.instance_4 = new lib.tempgraph();
	this.instance_4.setTransform(2039,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({x:1184.8,y:390.4},598).wait(1));

	// graph mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_1 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");
	var mask_1_graphics_599 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_1,x:-147.1,y:224.4}).wait(598).to({graphics:mask_1_graphics_599,x:-147.1,y:224.4}).wait(1));

	// graph
	this.instance_5 = new lib.watergraph();
	this.instance_5.setTransform(1901,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_5._off = true;

	this.instance_5.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({x:1047.4,y:390.4},598).wait(1));

	// Temp Events
	this.instance_6 = new lib.AbColdWinter_1();
	this.instance_6.setTransform(510,399.7,1,1,0,0,0,112,55.4);

	this.instance_7 = new lib.AbColdSpring1();
	this.instance_7.setTransform(504,395.5,1,1,0,0,0,112,55.4);

	this.instance_8 = new lib.AbColdSpring2();
	this.instance_8.setTransform(504,395.5,1,1,0,0,0,112,55.4);

	this.instance_9 = new lib.AbColdSpring3();
	this.instance_9.setTransform(504,395.5,1,1,0,0,0,112,55.4);

	this.instance_10 = new lib.AbColdSpring4();
	this.instance_10.setTransform(504,395.5,1,1,0,0,0,112,55.4);

	this.instance_11 = new lib.AbColdSpring5();
	this.instance_11.setTransform(504,395.5,1,1,0,0,0,112,55.4);

	this.instance_12 = new lib.AbColdSummer1_1();
	this.instance_12.setTransform(507,423.1,1,1,0,0,0,112,78.8);

	this.instance_13 = new lib.AbColdSummer2_1();
	this.instance_13.setTransform(507,423.1,1,1,0,0,0,112,78.8);

	this.instance_14 = new lib.AbColdFall_1();
	this.instance_14.setTransform(511,423.1,1,1,0,0,0,112,78.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},4).to({state:[]},5).to({state:[{t:this.instance_7}]},140).to({state:[]},4).to({state:[{t:this.instance_8}]},1).to({state:[]},4).to({state:[{t:this.instance_9}]},1).to({state:[]},5).to({state:[{t:this.instance_10}]},1).to({state:[]},3).to({state:[{t:this.instance_11}]},1).to({state:[]},5).to({state:[{t:this.instance_12}]},125).to({state:[]},4).to({state:[{t:this.instance_13}]},1).to({state:[]},5).to({state:[{t:this.instance_14}]},140).to({state:[]},5).wait(146));

	// Precip Events
	this.instance_15 = new lib.AbDryWinter_3();
	this.instance_15.setTransform(505,385.3,1,1,0,0,0,112,41);

	this.instance_16 = new lib.AbDrySpring_1();
	this.instance_16.setTransform(504,399.7,1,1,0,0,0,112,55.4);

	this.instance_17 = new lib.AbDrySummer1_2();
	this.instance_17.setTransform(509,399.7,1,1,0,0,0,112,55.4);

	this.instance_18 = new lib.AbDrySummer2_2();
	this.instance_18.setTransform(509,399.7,1,1,0,0,0,112,55.4);

	this.instance_19 = new lib.AbDryFall();
	this.instance_19.setTransform(505,399.7,1,1,0,0,0,112,55.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15}]},14).to({state:[]},5).to({state:[{t:this.instance_16}]},160).to({state:[]},5).to({state:[{t:this.instance_17}]},130).to({state:[]},4).to({state:[{t:this.instance_18}]},1).to({state:[]},5).to({state:[{t:this.instance_19}]},135).to({state:[]},5).wait(136));

	// Text Box Control
	this.next = new lib.NextButton();
	this.next.setTransform(424,461,1,1,0,0,0,29.5,15);
	this.next._off = true;

	this.NObutton = new lib.NObutton();
	this.NObutton.setTransform(857.7,476,1,1,0,0,0,126.5,16.9);

	this.YESbutton = new lib.YESbutton();
	this.YESbutton.setTransform(820.7,476,1,1,0,0,0,129.6,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.next}]},4).to({state:[]},5).to({state:[{t:this.next}]},5).to({state:[]},5).to({state:[{t:this.next}]},130).to({state:[]},4).to({state:[{t:this.next}]},1).to({state:[]},4).to({state:[{t:this.next}]},1).to({state:[]},5).to({state:[{t:this.next}]},1).to({state:[]},3).to({state:[{t:this.next}]},1).to({state:[]},5).to({state:[{t:this.next}]},5).to({state:[]},5).to({state:[{t:this.next}]},115).to({state:[]},4).to({state:[{t:this.next}]},1).to({state:[]},5).to({state:[{t:this.next}]},5).to({state:[]},4).to({state:[{t:this.YESbutton},{t:this.NObutton}]},1).to({state:[]},5).to({state:[{t:this.next}]},125).to({state:[]},5).to({state:[{t:this.next}]},5).to({state:[]},5).to({state:[{t:this.next}]},135).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.next).wait(4).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(130).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},5).wait(1).to({_off:false},0).to({_off:true},3).wait(1).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(115).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},4).wait(131).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(135).to({_off:false},0).wait(1));

	// Text Box
	this.instance_20 = new lib.rectangle();
	this.instance_20.setTransform(524.9,390.1,1,1,0,0,0,136.9,52);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(600));

	// image
	this.instance_21 = new lib.FarmTown();
	this.instance_21.setTransform(-323,-502.5);

	this.instance_22 = new lib.LIDcity_1();
	this.instance_22.setTransform(-323,-502.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21}]}).to({state:[{t:this.instance_22}]},599).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323,-502.5,1233,985);


(lib.FarmTown_1 = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.FarmTownTitle();
	this.instance.setTransform(170.5,52.2,1,1,0,0,0,61.5,38.8);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqANFQlalZAAnpQAAnnFalZQFZlaHnAAQHpAAFaFaQFZFZAAHnQAAHplZFZQlaFanpAAQnnAAlZlag");
	mask.setTransform(137.3,118.4);

	// Layer 1
	this.instance_1 = new lib.FarmTown();
	this.instance_1.setTransform(0,0,0.243,0.243);

	this.instance_1.mask = mask;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(38.6,0.7,236,236);


(lib.droplet = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CCFF").ss(1,1,1).p("AANi+QgtA1gnBEQhMCFAsBKQAsBKBagcQAugOAmgdQAKgegIg5QgQhwhYiEg");
	this.shape.setTransform(-3.7,35.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FFFF").s().p("AhnCKQgshKBMiFQAnhEAtg1QBYCEAQBwQAIA5gKAeQgmAdguAOQgZAHgUAAQg5AAggg1g");
	this.shape_1.setTransform(-3.7,35.7);

	// Layer 2
	this.instance = new lib.circle();
	this.instance.setTransform(-2.6,36.8,9.436,9.436,0,0,0,2.6,2.6);

	this.addChild(this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.2,12.3,48.2,48.2);


(lib.CloseButton = function() {
	this.initialize();

	// Layer 2
	this.text = new cjs.Text("X", "22px 'Cooper Black'", "#FFFFFF");
	this.text.lineHeight = 24;
	this.text.setTransform(-10.8,-14.5);

	// Layer 1
	this.instance = new lib.circle();
	this.instance.setTransform(0.2,0.2,5.118,5.118,0,0,0,2.6,2.6);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.1,-14.5,26.1,29.3);


(lib.Callout = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgEADQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	var mask_graphics_1 = new cjs.Graphics().p("AgHAIQgEgDAAgFQAAgEAEgDQADgEAEAAQAFAAADAEQAEADAAAEQAAAFgEADQgDAEgFAAQgEAAgDgEg");
	var mask_graphics_2 = new cjs.Graphics().p("AgMANQgGgGAAgHQAAgGAGgGQAGgGAGAAQAHAAAGAGQAGAGAAAGQAAAHgGAGQgGAGgHAAQgGAAgGgGg");
	var mask_graphics_3 = new cjs.Graphics().p("AgRASQgIgIAAgKQAAgJAIgIQAIgIAJAAQAKAAAIAIQAIAIAAAJQAAAKgIAIQgIAIgKAAQgJAAgIgIg");
	var mask_graphics_4 = new cjs.Graphics().p("AgWAXQgKgKAAgNQAAgMAKgKQAKgKAMAAQANAAAKAKQAKAKAAAMQAAANgKAKQgKAKgNAAQgMAAgKgKg");
	var mask_graphics_5 = new cjs.Graphics().p("AgbAcQgNgMAAgQQAAgPANgMQAMgNAPAAQAQAAAMANQANAMAAAPQAAAQgNAMQgMANgQAAQgPAAgMgNg");
	var mask_graphics_6 = new cjs.Graphics().p("AghAiQgOgPAAgTQAAgSAOgPQAPgOASAAQATAAAPAOQAOAPAAASQAAATgOAPQgPAOgTAAQgSAAgPgOg");
	var mask_graphics_7 = new cjs.Graphics().p("AgmAnQgQgRAAgWQAAgVAQgRQARgQAVAAQAWAAARAQQAQARAAAVQAAAWgQARQgRAQgWAAQgVAAgRgQg");
	var mask_graphics_8 = new cjs.Graphics().p("AgrAsQgSgTAAgZQAAgYASgTQATgSAYAAQAZAAATASQASATAAAYQAAAZgSATQgTASgZAAQgYAAgTgSg");
	var mask_graphics_9 = new cjs.Graphics().p("AgwAxQgUgVAAgcQAAgbAUgVQAVgUAbAAQAcAAAVAUQAUAVAAAbQAAAcgUAVQgVAUgcAAQgbAAgVgUg");
	var mask_graphics_10 = new cjs.Graphics().p("AguAvQgUgUAAgbQAAgaAUgUQAUgUAaAAQAbAAAUAUQAUAUAAAaQAAAbgUAUQgUAUgbAAQgaAAgUgUg");
	var mask_graphics_11 = new cjs.Graphics().p("AgtAuQgUgTAAgbQAAgaAUgTQATgUAaAAQAbAAATAUQAUATAAAaQAAAbgUATQgTAUgbAAQgaAAgTgUg");
	var mask_graphics_12 = new cjs.Graphics().p("AgsAtQgTgTAAgaQAAgZATgTQATgTAZAAQAaAAATATQATATAAAZQAAAagTATQgTATgaAAQgZAAgTgTg");
	var mask_graphics_13 = new cjs.Graphics().p("AgqArQgTgSAAgZQAAgYATgSQASgTAYAAQAZAAASATQATASAAAYQAAAZgTASQgSATgZAAQgYAAgSgTg");
	var mask_graphics_14 = new cjs.Graphics().p("AgpAqQgSgSAAgYQAAgXASgSQASgSAXAAQAYAAASASQASASAAAXQAAAYgSASQgSASgYAAQgXAAgSgSg");
	var mask_graphics_15 = new cjs.Graphics().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	var mask_graphics_16 = new cjs.Graphics().p("AgmAnQgRgQAAgXQAAgWARgQQAQgRAWAAQAXAAAQARQARAQAAAWQAAAXgRAQQgQARgXAAQgWAAgQgRg");
	var mask_graphics_17 = new cjs.Graphics().p("AglAmQgQgQAAgWQAAgVAQgQQAQgQAVAAQAWAAAQAQQAQAQAAAVQAAAWgQAQQgQAQgWAAQgVAAgQgQg");
	var mask_graphics_18 = new cjs.Graphics().p("AgkAlQgPgQAAgVQAAgUAPgQQAQgPAUAAQAVAAAQAPQAPAQAAAUQAAAVgPAQQgQAPgVAAQgUAAgQgPg");
	var mask_graphics_19 = new cjs.Graphics().p("AgiAjQgPgPAAgUQAAgTAPgPQAPgPATAAQAUAAAPAPQAPAPAAATQAAAUgPAPQgPAPgUAAQgTAAgPgPg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-0.7,y:-0.1}).wait(1).to({graphics:mask_graphics_1,x:-0.9,y:-0.1}).wait(1).to({graphics:mask_graphics_2,x:-0.9,y:-0.1}).wait(1).to({graphics:mask_graphics_3,x:-0.9,y:-0.2}).wait(1).to({graphics:mask_graphics_4,x:-0.9,y:-0.2}).wait(1).to({graphics:mask_graphics_5,x:-0.9,y:-0.2}).wait(1).to({graphics:mask_graphics_6,x:-0.9,y:-0.2}).wait(1).to({graphics:mask_graphics_7,x:-0.9,y:-0.2}).wait(1).to({graphics:mask_graphics_8,x:-0.9,y:-0.2}).wait(1).to({graphics:mask_graphics_9,x:-0.9,y:-0.3}).wait(1).to({graphics:mask_graphics_10,x:-0.9,y:-0.3}).wait(1).to({graphics:mask_graphics_11,x:-0.9,y:-0.3}).wait(1).to({graphics:mask_graphics_12,x:-0.9,y:-0.3}).wait(1).to({graphics:mask_graphics_13,x:-0.9,y:-0.3}).wait(1).to({graphics:mask_graphics_14,x:-0.9,y:-0.3}).wait(1).to({graphics:mask_graphics_15,x:-0.9,y:-0.3}).wait(1).to({graphics:mask_graphics_16,x:-0.9,y:-0.3}).wait(1).to({graphics:mask_graphics_17,x:-0.9,y:-0.3}).wait(1).to({graphics:mask_graphics_18,x:-0.9,y:-0.3}).wait(1).to({graphics:mask_graphics_19,x:-0.9,y:-0.3}).wait(1));

	// Layer 2
	this.instance = new lib.CircleRed();
	this.instance.setTransform(-0.8,-0.1,0.6,0.6,0,0,0,10,10);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,-0.6,1,1);


(lib.abhotnormalwatershed_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_179 = function() {
		this.stop();
	}
	this.frame_189 = function() {
		this.stop();
	}
	this.frame_331 = function() {
		this.stop();
	}
	this.frame_471 = function() {
		this.stop();
	}
	this.frame_478 = function() {
		this.stop();
	}
	this.frame_599 = function() {
		this.stop();
	}
	this.frame_2999 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(175).call(this.frame_179).wait(10).call(this.frame_189).wait(142).call(this.frame_331).wait(140).call(this.frame_471).wait(7).call(this.frame_478).wait(121).call(this.frame_599).wait(2400).call(this.frame_2999).wait(1182));

	// title
	this.instance_41 = new lib.TEMPLABEL();
	this.instance_41.setTransform(-97.9,458.3,1,1,0,0,0,49,9.5);

	this.instance_42 = new lib.Precipitationlabel();
	this.instance_42.setTransform(-237.9,460.8,1,1,0,0,0,51.5,12);

	this.instance_43 = new lib.CityTypeLID();
	this.instance_43.setTransform(306.1,-480.9,1,1,0,0,0,202,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_43},{t:this.instance_42},{t:this.instance_41}]}).to({state:[]},3000).wait(1181));

	// ractangle animation
	this.instance_44 = new lib.Rectangleanimation();
	this.instance_44.setTransform(299,-27.9,1,1,0,0,0,194,142);
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(2999).to({_off:false},0).to({_off:true},1).wait(1181));

	// graph mask copy (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_1 = new cjs.Graphics().p("EgMMAjDIAAx4IR2AAIAAR4g");
	var mask_4_graphics_2999 = new cjs.Graphics().p("EgMbAjDIAAx4IR2AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_4_graphics_1,x:-78.1,y:224.4}).wait(2998).to({graphics:mask_4_graphics_2999,x:-79.6,y:224.4}).wait(1182));

	// graph copy
	this.instance_45 = new lib.tempgraph();
	this.instance_45.setTransform(2039,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_45._off = true;

	this.instance_45.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(1).to({_off:false},0).to({x:-2243.5,y:388},2998).to({_off:true},1).wait(1181));

	// graph mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_1 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");
	var mask_5_graphics_2999 = new cjs.Graphics().p("EgW+AjDIAAx4IR4AAIAAR4g");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_5_graphics_1,x:-147.1,y:224.4}).wait(2998).to({graphics:mask_5_graphics_2999,x:-147.1,y:224.4}).wait(1182));

	// graph
	this.instance_46 = new lib.watergraph();
	this.instance_46.setTransform(1901,391,2.916,2.916,0,0,0,754,18.4);
	this.instance_46._off = true;

	this.instance_46.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(1).to({_off:false},0).to({x:-2378.4,y:388},2998).to({_off:true},1).wait(1181));

	// Precip Events
	this.instance_47 = new lib.NormalPrecipWinter();
	this.instance_47.setTransform(523,448.9,1,1,0,0,0,129.9,102);

	this.instance_48 = new lib.NormalPrecipSpring1();
	this.instance_48.setTransform(525.9,446.9,1,1,0,0,0,129.9,102);

	this.instance_49 = new lib.NormalPrecipSpring2();
	this.instance_49.setTransform(527.9,448.9,1,1,0,0,0,129.9,102);

	this.instance_50 = new lib.NormalPrecipSummer();
	this.instance_50.setTransform(525,447.9,1,1,0,0,0,129.9,102);

	this.instance_51 = new lib.NormalPrecipFall1();
	this.instance_51.setTransform(524,446.9,1,1,0,0,0,129.9,102);

	this.instance_52 = new lib.NormalPrecipFall2();
	this.instance_52.setTransform(531,446.9,1,1,0,0,0,129.9,102);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_47}]},4).to({state:[]},9).to({state:[{t:this.instance_48}]},166).to({state:[{t:this.instance_49}]},10).to({state:[]},10).to({state:[{t:this.instance_50}]},132).to({state:[]},16).to({state:[{t:this.instance_51}]},124).to({state:[{t:this.instance_52}]},7).to({state:[]},6).to({state:[]},3098).wait(599));

	// Text Box Control
	this.next_2 = new lib.NextButton();
	this.next_2.setTransform(424,461,1,1,0,0,0,29.5,15);
	this.next_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.next_2).wait(4).to({_off:false},0).to({_off:true},5).wait(170).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},6).wait(136).to({_off:false},0).to({_off:true},15).wait(125).to({_off:false},0).to({_off:true},4).wait(3).to({_off:false},0).to({_off:true},5).wait(3698));

	// Text Box
	this.instance_53 = new lib.rectangle();
	this.instance_53.setTransform(524.9,390.1,1,1,0,0,0,136.9,52);

	this.timeline.addTween(cjs.Tween.get(this.instance_53).to({_off:true},3000).wait(1181));

	// image
	this.instance_54 = new lib.Suburbia();
	this.instance_54.setTransform(-323,-502.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_54).to({_off:true},3000).wait(1181));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323,-502.5,1224,987);


(lib.abcoldabdrywatershed_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		
		
		
		this.citydescription.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			this.suburbiadescription.visible = true;
		}
		
		
		
		
		this.drop2.addEventListener("click", fl_ClickToPosition.bind(this));
		
		var fl_TF = new createjs.Text();
		var fl_TextToDisplay = "400million gallons.";
		
		function fl_ClickToPosition()
		{
			
			fl_TF.x = -100;
			fl_TF.y = +120;
			fl_TF.color = "#ff7600";
			fl_TF.font = "20px Arial";
			fl_TF.text = fl_TextToDisplay;
			this.addChild(fl_TF);
		}
	}
	this.frame_4 = function() {
		this.stop();
		
		
		this.next.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_5.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_5()
		{
			this.gotoAndPlay(5);
		}
		
		
		this.callout.visible = true;
		this.callout.play();
	}
	this.frame_5 = function() {
		this.callout.visible = false;
	}
	this.frame_19 = function() {
		this.stop();
		
		
		this.next.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_5.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_5()
		{
			this.gotoAndPlay(25);
		}
		
		this.callout.x+=00;
		this.callout.y+=120;
		
		this.callout.visible = true;
		this.callout.play();
	}
	this.frame_20 = function() {
		this.callout.visible = false;
	}
	this.frame_34 = function() {
		this.stop();
		
		
		this.next.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_5.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_5()
		{
			this.gotoAndPlay(45);
		}
		
		this.callout.x+=300;
		this.callout.y+=500;
		
		this.callout.visible = true;
		this.callout.play();
	}
	this.frame_35 = function() {
		this.callout.visible = false;
	}
	this.frame_149 = function() {
		this.stop();
		
		
		this.callout.x+=00;
		this.callout.y-=320;
		
		this.callout.visible = true;
		this.callout.play();
		
		
		
		this.NObutton.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_29.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_29()
		{
			this.gotoAndPlay(162);
		}
		
		
		
		this.YESbutton.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_30.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_30()
		{
			this.gotoAndPlay(155);
		}
	}
	this.frame_150 = function() {
		this.callout.visible = false;
	}
	this.frame_159 = function() {
		this.stop();
		
		
		this.next.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_5.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_5()
		{
			this.gotoAndPlay(167);
		}
		
		this.callout.x+=30;
		this.callout.y-=20;
		
		this.callout.visible = true;
		this.callout.play();
	}
	this.frame_160 = function() {
		this.callout.visible = false;
	}
	this.frame_164 = function() {
		this.stop();
		
		
		this.next.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_5.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_5()
		{
			this.gotoAndPlay(167);
		}
		
		this.callout.x+=60;
		this.callout.y-=20;
		
		this.callout.visible = true;
		this.callout.play();
	}
	this.frame_165 = function() {
		this.callout.visible = false;
	}
	this.frame_169 = function() {
		this.stop();
		
		
		this.callout.visible = true;
		this.callout.play();
		
		this.callout.x+=100;
		this.callout.y+=300;
		
		
		this.YESbutton.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_16.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_16()
		{
			this.gotoAndPlay(176);
		}
		
		
		this.NObutton.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_17.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_17()
		{
			this.gotoAndPlay(192);
		}
	}
	this.frame_170 = function() {
		this.callout.visible = false;
	}
	this.frame_184 = function() {
		this.stop();
		
		this.callout.visible = true;
		this.callout.play();
		
		this.callout.x+=30;
		this.callout.y+=5;
		
		this.next.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_18.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_18()
		{
			this.gotoAndPlay(340);
		}
	}
	this.frame_185 = function() {
		this.callout.visible = false;
	}
	this.frame_199 = function() {
		this.stop();
		
		
		this.callout.visible = true;
		this.callout.play();
		
		this.callout.x-=100;
		this.callout.y+=200;
		
		
		this.next.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_19.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_19()
		{
			this.gotoAndPlay(325);
		}
	}
	this.frame_200 = function() {
		this.callout.visible = false;
	}
	this.frame_329 = function() {
		this.stop();
		
		
		this.callout.visible = true;
		this.callout.play();
		
		this.callout.x-=310;
		this.callout.y-=680;
		
		
		this.next.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_26.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_26()
		{
			this.gotoAndPlay(355);
		}
	}
	this.frame_330 = function() {
		this.callout.visible = false;
	}
	this.frame_344 = function() {
		this.stop();
		
		this.callout.visible = true;
		this.callout.play();
		
		this.callout.x-=310;
		this.callout.y-=680;
		
		
		this.next.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_21.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_21()
		{
			this.gotoAndPlay(375);
		}
	}
	this.frame_345 = function() {
		this.callout.visible = false;
	}
	this.frame_359 = function() {
		this.stop();
		
		this.callout.visible = true;
		this.callout.play();
		
		this.callout.x+=510;
		this.callout.y+=480;
		
		
		this.next.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_22.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_22()
		{
			this.gotoAndPlay(465);
		}
	}
	this.frame_360 = function() {
		this.callout.visible = false;
	}
	this.frame_379 = function() {
		this.stop();
		
		
		this.next.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_23.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_23()
		{
			this.gotoAndPlay(480);
		}
	}
	this.frame_380 = function() {
		this.callout.visible = false;
	}
	this.frame_469 = function() {
		this.stop();
		
		
		this.next.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_25.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_25()
		{
			this.gotoAndPlay(495);
		}
	}
	this.frame_470 = function() {
		this.callout.visible = false;
	}
	this.frame_484 = function() {
		this.stop();
		
		
		
		this.next.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_24.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_24()
		{
			this.gotoAndPlay(495);
		}
	}
	this.frame_485 = function() {
		this.callout.visible = false;
	}
	this.frame_499 = function() {
		this.stop();
		
		
		this.next.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_27.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_27()
		{
			this.gotoAndPlay(520);
		}
	}
	this.frame_500 = function() {
		this.callout.visible = false;
	}
	this.frame_599 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1).call(this.frame_5).wait(14).call(this.frame_19).wait(1).call(this.frame_20).wait(14).call(this.frame_34).wait(1).call(this.frame_35).wait(114).call(this.frame_149).wait(1).call(this.frame_150).wait(9).call(this.frame_159).wait(1).call(this.frame_160).wait(4).call(this.frame_164).wait(1).call(this.frame_165).wait(4).call(this.frame_169).wait(1).call(this.frame_170).wait(14).call(this.frame_184).wait(1).call(this.frame_185).wait(14).call(this.frame_199).wait(1).call(this.frame_200).wait(129).call(this.frame_329).wait(1).call(this.frame_330).wait(14).call(this.frame_344).wait(1).call(this.frame_345).wait(14).call(this.frame_359).wait(1).call(this.frame_360).wait(19).call(this.frame_379).wait(1).call(this.frame_380).wait(89).call(this.frame_469).wait(1).call(this.frame_470).wait(14).call(this.frame_484).wait(1).call(this.frame_485).wait(14).call(this.frame_499).wait(1).call(this.frame_500).wait(99).call(this.frame_599).wait(1));

	// callout
	this.callout = new lib.Callout();
	this.callout.setTransform(169.8,-397.1,5.635,5.635,0,0,0,-0.8,-0.1);
	this.callout.alpha = 0.398;
	this.callout._off = true;

	this.timeline.addTween(cjs.Tween.get(this.callout).wait(4).to({_off:false},0).wait(596));

	// title
	this.citydescription = new lib.circle();
	this.citydescription.setTransform(90.9,-484,3.804,3.804,0,0,0,2.6,2.6);

	this.title = new lib.CityTypeLID();
	this.title.setTransform(306.1,-480.9,1,1,0,0,0,202,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.title},{t:this.citydescription}]}).wait(600));

	// title info
	this.suburbiadescription = new lib.SuburbiaDescription();
	this.suburbiadescription.setTransform(207.6,-292.3,1,1,0,0,0,103.5,173.6);
	this.suburbiadescription.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.suburbiadescription).wait(600));

	// graph mask copy (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_1 = new cjs.Graphics().p("EgXkAjLIAAx3IAoAAIAAR3g");
	var mask_4_graphics_2 = new cjs.Graphics().p("EgXkAjLIAAx3IAtAAIAAR3g");
	var mask_4_graphics_3 = new cjs.Graphics().p("EgXkAjLIAAx3IAxAAIAAR3g");
	var mask_4_graphics_4 = new cjs.Graphics().p("EgXkAjLIAAx3IA1AAIAAR3g");
	var mask_4_graphics_5 = new cjs.Graphics().p("EgXkAjLIAAx3IA6AAIAAR3g");
	var mask_4_graphics_6 = new cjs.Graphics().p("EgXkAjLIAAx3IA+AAIAAR3g");
	var mask_4_graphics_7 = new cjs.Graphics().p("EgXkAjLIAAx3IBDAAIAAR3g");
	var mask_4_graphics_8 = new cjs.Graphics().p("EgXkAjLIAAx3IBHAAIAAR3g");
	var mask_4_graphics_9 = new cjs.Graphics().p("EgXkAjLIAAx3IBMAAIAAR3g");
	var mask_4_graphics_10 = new cjs.Graphics().p("EgXkAjLIAAx3IBQAAIAAR3g");
	var mask_4_graphics_11 = new cjs.Graphics().p("EgXkAjLIAAx3IBVAAIAAR3g");
	var mask_4_graphics_12 = new cjs.Graphics().p("EgXkAjLIAAx3IBZAAIAAR3g");
	var mask_4_graphics_13 = new cjs.Graphics().p("EgXkAjLIAAx3IBeAAIAAR3g");
	var mask_4_graphics_14 = new cjs.Graphics().p("EgXkAjLIAAx3IBiAAIAAR3g");
	var mask_4_graphics_15 = new cjs.Graphics().p("EgXkAjLIAAx3IBnAAIAAR3g");
	var mask_4_graphics_16 = new cjs.Graphics().p("EgXkAjLIAAx3IBrAAIAAR3g");
	var mask_4_graphics_17 = new cjs.Graphics().p("EgXkAjLIAAx3IBvAAIAAR3g");
	var mask_4_graphics_18 = new cjs.Graphics().p("EgXkAjLIAAx3IB0AAIAAR3g");
	var mask_4_graphics_19 = new cjs.Graphics().p("EgXkAjLIAAx3IB4AAIAAR3g");
	var mask_4_graphics_20 = new cjs.Graphics().p("EgXkAjLIAAx3IB9AAIAAR3g");
	var mask_4_graphics_21 = new cjs.Graphics().p("EgXkAjLIAAx3ICBAAIAAR3g");
	var mask_4_graphics_22 = new cjs.Graphics().p("EgXkAjLIAAx3ICGAAIAAR3g");
	var mask_4_graphics_23 = new cjs.Graphics().p("EgXkAjLIAAx3ICKAAIAAR3g");
	var mask_4_graphics_24 = new cjs.Graphics().p("EgXkAjLIAAx3ICPAAIAAR3g");
	var mask_4_graphics_25 = new cjs.Graphics().p("EgXkAjLIAAx3ICTAAIAAR3g");
	var mask_4_graphics_26 = new cjs.Graphics().p("EgXkAjLIAAx3ICYAAIAAR3g");
	var mask_4_graphics_27 = new cjs.Graphics().p("EgXkAjLIAAx3ICcAAIAAR3g");
	var mask_4_graphics_28 = new cjs.Graphics().p("EgXkAjLIAAx3ICgAAIAAR3g");
	var mask_4_graphics_29 = new cjs.Graphics().p("EgXkAjLIAAx3IClAAIAAR3g");
	var mask_4_graphics_30 = new cjs.Graphics().p("EgXkAjLIAAx3ICpAAIAAR3g");
	var mask_4_graphics_31 = new cjs.Graphics().p("EgXkAjLIAAx3ICuAAIAAR3g");
	var mask_4_graphics_32 = new cjs.Graphics().p("EgXkAjLIAAx3ICyAAIAAR3g");
	var mask_4_graphics_33 = new cjs.Graphics().p("EgXkAjLIAAx3IC3AAIAAR3g");
	var mask_4_graphics_34 = new cjs.Graphics().p("EgXkAjLIAAx3IC7AAIAAR3g");
	var mask_4_graphics_35 = new cjs.Graphics().p("EgXkAjLIAAx3IDAAAIAAR3g");
	var mask_4_graphics_36 = new cjs.Graphics().p("EgXkAjLIAAx3IDEAAIAAR3g");
	var mask_4_graphics_37 = new cjs.Graphics().p("EgXkAjLIAAx3IDJAAIAAR3g");
	var mask_4_graphics_38 = new cjs.Graphics().p("EgXkAjLIAAx3IDNAAIAAR3g");
	var mask_4_graphics_39 = new cjs.Graphics().p("EgXkAjLIAAx3IDSAAIAAR3g");
	var mask_4_graphics_40 = new cjs.Graphics().p("EgXkAjLIAAx3IDWAAIAAR3g");
	var mask_4_graphics_41 = new cjs.Graphics().p("EgXkAjLIAAx3IDaAAIAAR3g");
	var mask_4_graphics_42 = new cjs.Graphics().p("EgXkAjLIAAx3IDfAAIAAR3g");
	var mask_4_graphics_43 = new cjs.Graphics().p("EgXkAjLIAAx3IDjAAIAAR3g");
	var mask_4_graphics_44 = new cjs.Graphics().p("EgXkAjLIAAx3IDoAAIAAR3g");
	var mask_4_graphics_45 = new cjs.Graphics().p("EgXkAjLIAAx3IDsAAIAAR3g");
	var mask_4_graphics_46 = new cjs.Graphics().p("EgXkAjLIAAx3IDxAAIAAR3g");
	var mask_4_graphics_47 = new cjs.Graphics().p("EgXkAjLIAAx3ID1AAIAAR3g");
	var mask_4_graphics_48 = new cjs.Graphics().p("EgXkAjLIAAx3ID6AAIAAR3g");
	var mask_4_graphics_49 = new cjs.Graphics().p("EgXkAjLIAAx3ID+AAIAAR3g");
	var mask_4_graphics_50 = new cjs.Graphics().p("EgXkAjLIAAx3IEDAAIAAR3g");
	var mask_4_graphics_51 = new cjs.Graphics().p("EgXkAjLIAAx3IEHAAIAAR3g");
	var mask_4_graphics_52 = new cjs.Graphics().p("EgXkAjLIAAx3IELAAIAAR3g");
	var mask_4_graphics_53 = new cjs.Graphics().p("EgXkAjLIAAx3IEQAAIAAR3g");
	var mask_4_graphics_54 = new cjs.Graphics().p("EgXkAjLIAAx3IEUAAIAAR3g");
	var mask_4_graphics_55 = new cjs.Graphics().p("EgXkAjLIAAx3IEZAAIAAR3g");
	var mask_4_graphics_56 = new cjs.Graphics().p("EgXkAjLIAAx3IEdAAIAAR3g");
	var mask_4_graphics_57 = new cjs.Graphics().p("EgXkAjLIAAx3IEiAAIAAR3g");
	var mask_4_graphics_58 = new cjs.Graphics().p("EgXkAjLIAAx3IEmAAIAAR3g");
	var mask_4_graphics_59 = new cjs.Graphics().p("EgXkAjLIAAx3IErAAIAAR3g");
	var mask_4_graphics_60 = new cjs.Graphics().p("EgXkAjLIAAx3IEvAAIAAR3g");
	var mask_4_graphics_61 = new cjs.Graphics().p("EgXkAjLIAAx3IE0AAIAAR3g");
	var mask_4_graphics_62 = new cjs.Graphics().p("EgXkAjLIAAx3IE4AAIAAR3g");
	var mask_4_graphics_63 = new cjs.Graphics().p("EgXkAjLIAAx3IE9AAIAAR3g");
	var mask_4_graphics_64 = new cjs.Graphics().p("EgXkAjLIAAx3IFBAAIAAR3g");
	var mask_4_graphics_65 = new cjs.Graphics().p("EgXkAjLIAAx3IFFAAIAAR3g");
	var mask_4_graphics_66 = new cjs.Graphics().p("EgXkAjLIAAx3IFKAAIAAR3g");
	var mask_4_graphics_67 = new cjs.Graphics().p("EgXkAjLIAAx3IFOAAIAAR3g");
	var mask_4_graphics_68 = new cjs.Graphics().p("EgXkAjLIAAx3IFTAAIAAR3g");
	var mask_4_graphics_69 = new cjs.Graphics().p("EgXkAjLIAAx3IFXAAIAAR3g");
	var mask_4_graphics_70 = new cjs.Graphics().p("EgXkAjLIAAx3IFcAAIAAR3g");
	var mask_4_graphics_71 = new cjs.Graphics().p("EgXkAjLIAAx3IFgAAIAAR3g");
	var mask_4_graphics_72 = new cjs.Graphics().p("EgXkAjLIAAx3IFlAAIAAR3g");
	var mask_4_graphics_73 = new cjs.Graphics().p("EgXkAjLIAAx3IFpAAIAAR3g");
	var mask_4_graphics_74 = new cjs.Graphics().p("EgXkAjLIAAx3IFuAAIAAR3g");
	var mask_4_graphics_75 = new cjs.Graphics().p("EgXkAjLIAAx3IFyAAIAAR3g");
	var mask_4_graphics_76 = new cjs.Graphics().p("EgXkAjLIAAx3IF2AAIAAR3g");
	var mask_4_graphics_77 = new cjs.Graphics().p("EgXkAjLIAAx3IF7AAIAAR3g");
	var mask_4_graphics_78 = new cjs.Graphics().p("EgXkAjLIAAx3IF/AAIAAR3g");
	var mask_4_graphics_79 = new cjs.Graphics().p("EgXkAjLIAAx3IGEAAIAAR3g");
	var mask_4_graphics_80 = new cjs.Graphics().p("EgXkAjLIAAx3IGIAAIAAR3g");
	var mask_4_graphics_81 = new cjs.Graphics().p("EgXkAjLIAAx3IGNAAIAAR3g");
	var mask_4_graphics_82 = new cjs.Graphics().p("EgXkAjLIAAx3IGRAAIAAR3g");
	var mask_4_graphics_83 = new cjs.Graphics().p("EgXkAjLIAAx3IGWAAIAAR3g");
	var mask_4_graphics_84 = new cjs.Graphics().p("EgXkAjLIAAx3IGaAAIAAR3g");
	var mask_4_graphics_85 = new cjs.Graphics().p("EgXkAjLIAAx3IGfAAIAAR3g");
	var mask_4_graphics_86 = new cjs.Graphics().p("EgXkAjLIAAx3IGjAAIAAR3g");
	var mask_4_graphics_87 = new cjs.Graphics().p("EgXkAjLIAAx3IGoAAIAAR3g");
	var mask_4_graphics_88 = new cjs.Graphics().p("EgXkAjLIAAx3IGsAAIAAR3g");
	var mask_4_graphics_89 = new cjs.Graphics().p("EgXkAjLIAAx3IGwAAIAAR3g");
	var mask_4_graphics_90 = new cjs.Graphics().p("EgXkAjLIAAx3IG1AAIAAR3g");
	var mask_4_graphics_91 = new cjs.Graphics().p("EgXkAjLIAAx3IG5AAIAAR3g");
	var mask_4_graphics_92 = new cjs.Graphics().p("EgXkAjLIAAx3IG+AAIAAR3g");
	var mask_4_graphics_93 = new cjs.Graphics().p("EgXkAjLIAAx3IHCAAIAAR3g");
	var mask_4_graphics_94 = new cjs.Graphics().p("EgXkAjLIAAx3IHHAAIAAR3g");
	var mask_4_graphics_95 = new cjs.Graphics().p("EgXkAjLIAAx3IHLAAIAAR3g");
	var mask_4_graphics_96 = new cjs.Graphics().p("EgXkAjLIAAx3IHQAAIAAR3g");
	var mask_4_graphics_97 = new cjs.Graphics().p("EgXkAjLIAAx3IHUAAIAAR3g");
	var mask_4_graphics_98 = new cjs.Graphics().p("EgXkAjLIAAx3IHZAAIAAR3g");
	var mask_4_graphics_99 = new cjs.Graphics().p("EgXkAjLIAAx3IHdAAIAAR3g");
	var mask_4_graphics_100 = new cjs.Graphics().p("EgXkAjLIAAx3IHhAAIAAR3g");
	var mask_4_graphics_101 = new cjs.Graphics().p("EgXkAjLIAAx3IHmAAIAAR3g");
	var mask_4_graphics_102 = new cjs.Graphics().p("EgXkAjLIAAx3IHqAAIAAR3g");
	var mask_4_graphics_103 = new cjs.Graphics().p("EgXkAjLIAAx3IHvAAIAAR3g");
	var mask_4_graphics_104 = new cjs.Graphics().p("EgXkAjLIAAx3IHzAAIAAR3g");
	var mask_4_graphics_105 = new cjs.Graphics().p("EgXkAjLIAAx3IH4AAIAAR3g");
	var mask_4_graphics_106 = new cjs.Graphics().p("EgXkAjLIAAx3IH8AAIAAR3g");
	var mask_4_graphics_107 = new cjs.Graphics().p("EgXkAjLIAAx3IIBAAIAAR3g");
	var mask_4_graphics_108 = new cjs.Graphics().p("EgXkAjLIAAx3IIFAAIAAR3g");
	var mask_4_graphics_109 = new cjs.Graphics().p("EgXkAjLIAAx3IIKAAIAAR3g");
	var mask_4_graphics_110 = new cjs.Graphics().p("EgXkAjLIAAx3IIOAAIAAR3g");
	var mask_4_graphics_111 = new cjs.Graphics().p("EgXkAjLIAAx3IITAAIAAR3g");
	var mask_4_graphics_112 = new cjs.Graphics().p("EgXkAjLIAAx3IIXAAIAAR3g");
	var mask_4_graphics_113 = new cjs.Graphics().p("EgXkAjLIAAx3IIbAAIAAR3g");
	var mask_4_graphics_114 = new cjs.Graphics().p("EgXkAjLIAAx3IIgAAIAAR3g");
	var mask_4_graphics_115 = new cjs.Graphics().p("EgXkAjLIAAx3IIkAAIAAR3g");
	var mask_4_graphics_116 = new cjs.Graphics().p("EgXkAjLIAAx3IIpAAIAAR3g");
	var mask_4_graphics_117 = new cjs.Graphics().p("EgXkAjLIAAx3IItAAIAAR3g");
	var mask_4_graphics_118 = new cjs.Graphics().p("EgXkAjLIAAx3IIyAAIAAR3g");
	var mask_4_graphics_119 = new cjs.Graphics().p("EgXkAjLIAAx3II2AAIAAR3g");
	var mask_4_graphics_120 = new cjs.Graphics().p("EgXkAjLIAAx3II7AAIAAR3g");
	var mask_4_graphics_121 = new cjs.Graphics().p("EgXkAjLIAAx3II/AAIAAR3g");
	var mask_4_graphics_122 = new cjs.Graphics().p("EgXkAjLIAAx3IJEAAIAAR3g");
	var mask_4_graphics_123 = new cjs.Graphics().p("EgXkAjLIAAx3IJIAAIAAR3g");
	var mask_4_graphics_124 = new cjs.Graphics().p("EgXkAjLIAAx3IJMAAIAAR3g");
	var mask_4_graphics_125 = new cjs.Graphics().p("EgXkAjLIAAx3IJRAAIAAR3g");
	var mask_4_graphics_126 = new cjs.Graphics().p("EgXkAjLIAAx3IJVAAIAAR3g");
	var mask_4_graphics_127 = new cjs.Graphics().p("EgXkAjLIAAx3IJaAAIAAR3g");
	var mask_4_graphics_128 = new cjs.Graphics().p("EgXkAjLIAAx3IJeAAIAAR3g");
	var mask_4_graphics_129 = new cjs.Graphics().p("EgXkAjLIAAx3IJjAAIAAR3g");
	var mask_4_graphics_130 = new cjs.Graphics().p("EgXkAjLIAAx3IJnAAIAAR3g");
	var mask_4_graphics_131 = new cjs.Graphics().p("EgXkAjLIAAx3IJsAAIAAR3g");
	var mask_4_graphics_132 = new cjs.Graphics().p("EgXkAjLIAAx3IJwAAIAAR3g");
	var mask_4_graphics_133 = new cjs.Graphics().p("EgXkAjLIAAx3IJ1AAIAAR3g");
	var mask_4_graphics_134 = new cjs.Graphics().p("EgXkAjLIAAx3IJ5AAIAAR3g");
	var mask_4_graphics_135 = new cjs.Graphics().p("EgXkAjLIAAx3IJ+AAIAAR3g");
	var mask_4_graphics_136 = new cjs.Graphics().p("EgXkAjLIAAx3IKCAAIAAR3g");
	var mask_4_graphics_137 = new cjs.Graphics().p("EgXkAjLIAAx3IKGAAIAAR3g");
	var mask_4_graphics_138 = new cjs.Graphics().p("EgXkAjLIAAx3IKLAAIAAR3g");
	var mask_4_graphics_139 = new cjs.Graphics().p("EgXkAjLIAAx3IKPAAIAAR3g");
	var mask_4_graphics_140 = new cjs.Graphics().p("EgXkAjLIAAx3IKUAAIAAR3g");
	var mask_4_graphics_141 = new cjs.Graphics().p("EgXkAjLIAAx3IKYAAIAAR3g");
	var mask_4_graphics_142 = new cjs.Graphics().p("EgXkAjLIAAx3IKdAAIAAR3g");
	var mask_4_graphics_143 = new cjs.Graphics().p("EgXkAjLIAAx3IKhAAIAAR3g");
	var mask_4_graphics_144 = new cjs.Graphics().p("EgXkAjLIAAx3IKmAAIAAR3g");
	var mask_4_graphics_145 = new cjs.Graphics().p("EgXkAjLIAAx3IKqAAIAAR3g");
	var mask_4_graphics_146 = new cjs.Graphics().p("EgXkAjLIAAx3IKvAAIAAR3g");
	var mask_4_graphics_147 = new cjs.Graphics().p("EgXkAjLIAAx3IKzAAIAAR3g");
	var mask_4_graphics_148 = new cjs.Graphics().p("EgXkAjLIAAx3IK3AAIAAR3g");
	var mask_4_graphics_149 = new cjs.Graphics().p("EgXkAjLIAAx3IK8AAIAAR3g");
	var mask_4_graphics_150 = new cjs.Graphics().p("EgXkAjLIAAx3ILAAAIAAR3g");
	var mask_4_graphics_151 = new cjs.Graphics().p("EgXkAjLIAAx3ILFAAIAAR3g");
	var mask_4_graphics_152 = new cjs.Graphics().p("EgXkAjLIAAx3ILJAAIAAR3g");
	var mask_4_graphics_153 = new cjs.Graphics().p("EgXkAjLIAAx3ILOAAIAAR3g");
	var mask_4_graphics_154 = new cjs.Graphics().p("EgXkAjLIAAx3ILSAAIAAR3g");
	var mask_4_graphics_155 = new cjs.Graphics().p("EgXkAjLIAAx3ILXAAIAAR3g");
	var mask_4_graphics_156 = new cjs.Graphics().p("EgXkAjLIAAx3ILbAAIAAR3g");
	var mask_4_graphics_157 = new cjs.Graphics().p("EgXkAjLIAAx3ILgAAIAAR3g");
	var mask_4_graphics_158 = new cjs.Graphics().p("EgXkAjLIAAx3ILkAAIAAR3g");
	var mask_4_graphics_159 = new cjs.Graphics().p("EgXkAjLIAAx3ILpAAIAAR3g");
	var mask_4_graphics_160 = new cjs.Graphics().p("EgXkAjLIAAx3ILtAAIAAR3g");
	var mask_4_graphics_161 = new cjs.Graphics().p("EgXkAjLIAAx3ILxAAIAAR3g");
	var mask_4_graphics_162 = new cjs.Graphics().p("EgXkAjLIAAx3IL2AAIAAR3g");
	var mask_4_graphics_163 = new cjs.Graphics().p("EgXkAjLIAAx3IL6AAIAAR3g");
	var mask_4_graphics_164 = new cjs.Graphics().p("EgXkAjLIAAx3IL/AAIAAR3g");
	var mask_4_graphics_165 = new cjs.Graphics().p("EgXkAjLIAAx3IMDAAIAAR3g");
	var mask_4_graphics_166 = new cjs.Graphics().p("EgXkAjLIAAx3IMIAAIAAR3g");
	var mask_4_graphics_167 = new cjs.Graphics().p("EgXkAjLIAAx3IMMAAIAAR3g");
	var mask_4_graphics_168 = new cjs.Graphics().p("EgXkAjLIAAx3IMRAAIAAR3g");
	var mask_4_graphics_169 = new cjs.Graphics().p("EgXkAjLIAAx3IMVAAIAAR3g");
	var mask_4_graphics_170 = new cjs.Graphics().p("EgXkAjLIAAx3IMaAAIAAR3g");
	var mask_4_graphics_171 = new cjs.Graphics().p("EgXkAjLIAAx3IMeAAIAAR3g");
	var mask_4_graphics_172 = new cjs.Graphics().p("EgXkAjLIAAx3IMiAAIAAR3g");
	var mask_4_graphics_173 = new cjs.Graphics().p("EgXkAjLIAAx3IMnAAIAAR3g");
	var mask_4_graphics_174 = new cjs.Graphics().p("EgXkAjLIAAx3IMrAAIAAR3g");
	var mask_4_graphics_175 = new cjs.Graphics().p("EgXkAjLIAAx3IMwAAIAAR3g");
	var mask_4_graphics_176 = new cjs.Graphics().p("EgXkAjLIAAx3IM0AAIAAR3g");
	var mask_4_graphics_177 = new cjs.Graphics().p("EgXkAjLIAAx3IM5AAIAAR3g");
	var mask_4_graphics_178 = new cjs.Graphics().p("EgXkAjLIAAx3IM9AAIAAR3g");
	var mask_4_graphics_179 = new cjs.Graphics().p("EgXkAjLIAAx3INCAAIAAR3g");
	var mask_4_graphics_180 = new cjs.Graphics().p("EgXkAjLIAAx3INGAAIAAR3g");
	var mask_4_graphics_181 = new cjs.Graphics().p("EgXkAjLIAAx3INLAAIAAR3g");
	var mask_4_graphics_182 = new cjs.Graphics().p("EgXkAjLIAAx3INPAAIAAR3g");
	var mask_4_graphics_183 = new cjs.Graphics().p("EgXkAjLIAAx3INUAAIAAR3g");
	var mask_4_graphics_184 = new cjs.Graphics().p("EgXkAjLIAAx3INYAAIAAR3g");
	var mask_4_graphics_185 = new cjs.Graphics().p("EgXkAjLIAAx3INcAAIAAR3g");
	var mask_4_graphics_186 = new cjs.Graphics().p("EgXkAjLIAAx3INhAAIAAR3g");
	var mask_4_graphics_187 = new cjs.Graphics().p("EgXkAjLIAAx3INlAAIAAR3g");
	var mask_4_graphics_188 = new cjs.Graphics().p("EgXkAjLIAAx3INqAAIAAR3g");
	var mask_4_graphics_189 = new cjs.Graphics().p("EgXkAjLIAAx3INuAAIAAR3g");
	var mask_4_graphics_190 = new cjs.Graphics().p("EgXkAjLIAAx3INzAAIAAR3g");
	var mask_4_graphics_191 = new cjs.Graphics().p("EgXkAjLIAAx3IN3AAIAAR3g");
	var mask_4_graphics_192 = new cjs.Graphics().p("EgXkAjLIAAx3IN8AAIAAR3g");
	var mask_4_graphics_193 = new cjs.Graphics().p("EgXkAjLIAAx3IOAAAIAAR3g");
	var mask_4_graphics_194 = new cjs.Graphics().p("EgXkAjLIAAx3IOFAAIAAR3g");
	var mask_4_graphics_195 = new cjs.Graphics().p("EgXkAjLIAAx3IOJAAIAAR3g");
	var mask_4_graphics_196 = new cjs.Graphics().p("EgXkAjLIAAx3IONAAIAAR3g");
	var mask_4_graphics_197 = new cjs.Graphics().p("EgXkAjLIAAx3IOSAAIAAR3g");
	var mask_4_graphics_198 = new cjs.Graphics().p("EgXkAjLIAAx3IOWAAIAAR3g");
	var mask_4_graphics_199 = new cjs.Graphics().p("EgXkAjLIAAx3IObAAIAAR3g");
	var mask_4_graphics_200 = new cjs.Graphics().p("EgXkAjLIAAx3IOfAAIAAR3g");
	var mask_4_graphics_201 = new cjs.Graphics().p("EgXkAjLIAAx3IOkAAIAAR3g");
	var mask_4_graphics_202 = new cjs.Graphics().p("EgXkAjLIAAx3IOoAAIAAR3g");
	var mask_4_graphics_203 = new cjs.Graphics().p("EgXkAjLIAAx3IOtAAIAAR3g");
	var mask_4_graphics_204 = new cjs.Graphics().p("EgXkAjLIAAx3IOxAAIAAR3g");
	var mask_4_graphics_205 = new cjs.Graphics().p("EgXkAjLIAAx3IO2AAIAAR3g");
	var mask_4_graphics_206 = new cjs.Graphics().p("EgXkAjLIAAx3IO6AAIAAR3g");
	var mask_4_graphics_207 = new cjs.Graphics().p("EgXkAjLIAAx3IO/AAIAAR3g");
	var mask_4_graphics_208 = new cjs.Graphics().p("EgXkAjLIAAx3IPDAAIAAR3g");
	var mask_4_graphics_209 = new cjs.Graphics().p("EgXkAjLIAAx3IPHAAIAAR3g");
	var mask_4_graphics_210 = new cjs.Graphics().p("EgXkAjLIAAx3IPMAAIAAR3g");
	var mask_4_graphics_211 = new cjs.Graphics().p("EgXkAjLIAAx3IPQAAIAAR3g");
	var mask_4_graphics_212 = new cjs.Graphics().p("EgXkAjLIAAx3IPVAAIAAR3g");
	var mask_4_graphics_213 = new cjs.Graphics().p("EgXkAjLIAAx3IPZAAIAAR3g");
	var mask_4_graphics_214 = new cjs.Graphics().p("EgXkAjLIAAx3IPeAAIAAR3g");
	var mask_4_graphics_215 = new cjs.Graphics().p("EgXkAjLIAAx3IPiAAIAAR3g");
	var mask_4_graphics_216 = new cjs.Graphics().p("EgXkAjLIAAx3IPnAAIAAR3g");
	var mask_4_graphics_217 = new cjs.Graphics().p("EgXkAjLIAAx3IPrAAIAAR3g");
	var mask_4_graphics_218 = new cjs.Graphics().p("EgXkAjLIAAx3IPwAAIAAR3g");
	var mask_4_graphics_219 = new cjs.Graphics().p("EgXkAjLIAAx3IP0AAIAAR3g");
	var mask_4_graphics_220 = new cjs.Graphics().p("EgXkAjLIAAx3IP4AAIAAR3g");
	var mask_4_graphics_221 = new cjs.Graphics().p("EgXkAjLIAAx3IP9AAIAAR3g");
	var mask_4_graphics_222 = new cjs.Graphics().p("EgXkAjLIAAx3IQBAAIAAR3g");
	var mask_4_graphics_223 = new cjs.Graphics().p("EgXkAjLIAAx3IQGAAIAAR3g");
	var mask_4_graphics_224 = new cjs.Graphics().p("EgXkAjLIAAx3IQKAAIAAR3g");
	var mask_4_graphics_225 = new cjs.Graphics().p("EgXkAjLIAAx3IQPAAIAAR3g");
	var mask_4_graphics_226 = new cjs.Graphics().p("EgXkAjLIAAx3IQTAAIAAR3g");
	var mask_4_graphics_227 = new cjs.Graphics().p("EgXkAjLIAAx3IQYAAIAAR3g");
	var mask_4_graphics_228 = new cjs.Graphics().p("EgXkAjLIAAx3IQcAAIAAR3g");
	var mask_4_graphics_229 = new cjs.Graphics().p("EgXkAjLIAAx3IQhAAIAAR3g");
	var mask_4_graphics_230 = new cjs.Graphics().p("EgXkAjLIAAx3IQlAAIAAR3g");
	var mask_4_graphics_231 = new cjs.Graphics().p("EgXkAjLIAAx3IQqAAIAAR3g");
	var mask_4_graphics_232 = new cjs.Graphics().p("EgXkAjLIAAx3IQuAAIAAR3g");
	var mask_4_graphics_233 = new cjs.Graphics().p("EgXkAjLIAAx3IQyAAIAAR3g");
	var mask_4_graphics_234 = new cjs.Graphics().p("EgXkAjLIAAx3IQ3AAIAAR3g");
	var mask_4_graphics_235 = new cjs.Graphics().p("EgXkAjLIAAx3IQ7AAIAAR3g");
	var mask_4_graphics_236 = new cjs.Graphics().p("EgXkAjLIAAx3IRAAAIAAR3g");
	var mask_4_graphics_237 = new cjs.Graphics().p("EgXkAjLIAAx3IREAAIAAR3g");
	var mask_4_graphics_238 = new cjs.Graphics().p("EgXkAjLIAAx3IRJAAIAAR3g");
	var mask_4_graphics_239 = new cjs.Graphics().p("EgXkAjLIAAx3IRNAAIAAR3g");
	var mask_4_graphics_240 = new cjs.Graphics().p("EgXkAjLIAAx3IRSAAIAAR3g");
	var mask_4_graphics_241 = new cjs.Graphics().p("EgXkAjLIAAx3IRWAAIAAR3g");
	var mask_4_graphics_242 = new cjs.Graphics().p("EgXkAjLIAAx3IRbAAIAAR3g");
	var mask_4_graphics_243 = new cjs.Graphics().p("EgXkAjLIAAx3IRfAAIAAR3g");
	var mask_4_graphics_244 = new cjs.Graphics().p("EgXkAjLIAAx3IRjAAIAAR3g");
	var mask_4_graphics_245 = new cjs.Graphics().p("EgXkAjLIAAx3IRoAAIAAR3g");
	var mask_4_graphics_246 = new cjs.Graphics().p("EgXkAjLIAAx3IRsAAIAAR3g");
	var mask_4_graphics_247 = new cjs.Graphics().p("EgXkAjLIAAx3IRxAAIAAR3g");
	var mask_4_graphics_248 = new cjs.Graphics().p("EgXkAjLIAAx3IR1AAIAAR3g");
	var mask_4_graphics_249 = new cjs.Graphics().p("EgXkAjLIAAx3IR6AAIAAR3g");
	var mask_4_graphics_250 = new cjs.Graphics().p("EgXkAjLIAAx3IR+AAIAAR3g");
	var mask_4_graphics_251 = new cjs.Graphics().p("EgXkAjLIAAx3ISDAAIAAR3g");
	var mask_4_graphics_252 = new cjs.Graphics().p("EgXkAjLIAAx3ISHAAIAAR3g");
	var mask_4_graphics_253 = new cjs.Graphics().p("EgXkAjLIAAx3ISMAAIAAR3g");
	var mask_4_graphics_254 = new cjs.Graphics().p("EgXkAjLIAAx3ISQAAIAAR3g");
	var mask_4_graphics_255 = new cjs.Graphics().p("EgXkAjLIAAx3ISVAAIAAR3g");
	var mask_4_graphics_256 = new cjs.Graphics().p("EgXkAjLIAAx3ISZAAIAAR3g");
	var mask_4_graphics_257 = new cjs.Graphics().p("EgXkAjLIAAx3ISdAAIAAR3g");
	var mask_4_graphics_258 = new cjs.Graphics().p("EgXkAjLIAAx3ISiAAIAAR3g");
	var mask_4_graphics_259 = new cjs.Graphics().p("EgXkAjLIAAx3ISmAAIAAR3g");
	var mask_4_graphics_260 = new cjs.Graphics().p("EgXkAjLIAAx3ISrAAIAAR3g");
	var mask_4_graphics_261 = new cjs.Graphics().p("EgXkAjLIAAx3ISvAAIAAR3g");
	var mask_4_graphics_262 = new cjs.Graphics().p("EgXkAjLIAAx3IS0AAIAAR3g");
	var mask_4_graphics_263 = new cjs.Graphics().p("EgXkAjLIAAx3IS4AAIAAR3g");
	var mask_4_graphics_264 = new cjs.Graphics().p("EgXkAjLIAAx3IS9AAIAAR3g");
	var mask_4_graphics_265 = new cjs.Graphics().p("EgXkAjLIAAx3ITBAAIAAR3g");
	var mask_4_graphics_266 = new cjs.Graphics().p("EgXkAjLIAAx3ITGAAIAAR3g");
	var mask_4_graphics_267 = new cjs.Graphics().p("EgXkAjLIAAx3ITKAAIAAR3g");
	var mask_4_graphics_268 = new cjs.Graphics().p("EgXkAjLIAAx3ITOAAIAAR3g");
	var mask_4_graphics_269 = new cjs.Graphics().p("EgXkAjLIAAx3ITTAAIAAR3g");
	var mask_4_graphics_270 = new cjs.Graphics().p("EgXkAjLIAAx3ITXAAIAAR3g");
	var mask_4_graphics_271 = new cjs.Graphics().p("EgXkAjLIAAx3ITcAAIAAR3g");
	var mask_4_graphics_272 = new cjs.Graphics().p("EgXkAjLIAAx3ITgAAIAAR3g");
	var mask_4_graphics_273 = new cjs.Graphics().p("EgXkAjLIAAx3ITlAAIAAR3g");
	var mask_4_graphics_274 = new cjs.Graphics().p("EgXkAjLIAAx3ITpAAIAAR3g");
	var mask_4_graphics_275 = new cjs.Graphics().p("EgXkAjLIAAx3ITuAAIAAR3g");
	var mask_4_graphics_276 = new cjs.Graphics().p("EgXkAjLIAAx3ITyAAIAAR3g");
	var mask_4_graphics_277 = new cjs.Graphics().p("EgXkAjLIAAx3IT3AAIAAR3g");
	var mask_4_graphics_278 = new cjs.Graphics().p("EgXkAjLIAAx3IT7AAIAAR3g");
	var mask_4_graphics_279 = new cjs.Graphics().p("EgXkAjLIAAx3IUAAAIAAR3g");
	var mask_4_graphics_280 = new cjs.Graphics().p("EgXkAjLIAAx3IUEAAIAAR3g");
	var mask_4_graphics_281 = new cjs.Graphics().p("EgXkAjLIAAx3IUIAAIAAR3g");
	var mask_4_graphics_282 = new cjs.Graphics().p("EgXkAjLIAAx3IUNAAIAAR3g");
	var mask_4_graphics_283 = new cjs.Graphics().p("EgXkAjLIAAx3IURAAIAAR3g");
	var mask_4_graphics_284 = new cjs.Graphics().p("EgXkAjLIAAx3IUWAAIAAR3g");
	var mask_4_graphics_285 = new cjs.Graphics().p("EgXkAjLIAAx3IUaAAIAAR3g");
	var mask_4_graphics_286 = new cjs.Graphics().p("EgXkAjLIAAx3IUfAAIAAR3g");
	var mask_4_graphics_287 = new cjs.Graphics().p("EgXkAjLIAAx3IUjAAIAAR3g");
	var mask_4_graphics_288 = new cjs.Graphics().p("EgXkAjLIAAx3IUoAAIAAR3g");
	var mask_4_graphics_289 = new cjs.Graphics().p("EgXkAjLIAAx3IUsAAIAAR3g");
	var mask_4_graphics_290 = new cjs.Graphics().p("EgXkAjLIAAx3IUxAAIAAR3g");
	var mask_4_graphics_291 = new cjs.Graphics().p("EgXkAjLIAAx3IU1AAIAAR3g");
	var mask_4_graphics_292 = new cjs.Graphics().p("EgXkAjLIAAx3IU5AAIAAR3g");
	var mask_4_graphics_293 = new cjs.Graphics().p("EgXkAjLIAAx3IU+AAIAAR3g");
	var mask_4_graphics_294 = new cjs.Graphics().p("EgXkAjLIAAx3IVCAAIAAR3g");
	var mask_4_graphics_295 = new cjs.Graphics().p("EgXkAjLIAAx3IVHAAIAAR3g");
	var mask_4_graphics_296 = new cjs.Graphics().p("EgXkAjLIAAx3IVLAAIAAR3g");
	var mask_4_graphics_297 = new cjs.Graphics().p("EgXkAjLIAAx3IVQAAIAAR3g");
	var mask_4_graphics_298 = new cjs.Graphics().p("EgXkAjLIAAx3IVUAAIAAR3g");
	var mask_4_graphics_299 = new cjs.Graphics().p("EgXkAjLIAAx3IVZAAIAAR3g");
	var mask_4_graphics_300 = new cjs.Graphics().p("EgXkAjLIAAx3IVdAAIAAR3g");
	var mask_4_graphics_301 = new cjs.Graphics().p("EgXkAjLIAAx3IViAAIAAR3g");
	var mask_4_graphics_302 = new cjs.Graphics().p("EgXkAjLIAAx3IVmAAIAAR3g");
	var mask_4_graphics_303 = new cjs.Graphics().p("EgXkAjLIAAx3IVrAAIAAR3g");
	var mask_4_graphics_304 = new cjs.Graphics().p("EgXkAjLIAAx3IVvAAIAAR3g");
	var mask_4_graphics_305 = new cjs.Graphics().p("EgXkAjLIAAx3IVzAAIAAR3g");
	var mask_4_graphics_306 = new cjs.Graphics().p("EgXkAjLIAAx3IV4AAIAAR3g");
	var mask_4_graphics_307 = new cjs.Graphics().p("EgXkAjLIAAx3IV8AAIAAR3g");
	var mask_4_graphics_308 = new cjs.Graphics().p("EgXkAjLIAAx3IWBAAIAAR3g");
	var mask_4_graphics_309 = new cjs.Graphics().p("EgXkAjLIAAx3IWFAAIAAR3g");
	var mask_4_graphics_310 = new cjs.Graphics().p("EgXkAjLIAAx3IWKAAIAAR3g");
	var mask_4_graphics_311 = new cjs.Graphics().p("EgXkAjLIAAx3IWOAAIAAR3g");
	var mask_4_graphics_312 = new cjs.Graphics().p("EgXkAjLIAAx3IWTAAIAAR3g");
	var mask_4_graphics_313 = new cjs.Graphics().p("EgXkAjLIAAx3IWXAAIAAR3g");
	var mask_4_graphics_314 = new cjs.Graphics().p("EgXkAjLIAAx3IWcAAIAAR3g");
	var mask_4_graphics_315 = new cjs.Graphics().p("EgXkAjLIAAx3IWgAAIAAR3g");
	var mask_4_graphics_316 = new cjs.Graphics().p("EgXkAjLIAAx3IWkAAIAAR3g");
	var mask_4_graphics_317 = new cjs.Graphics().p("EgXkAjLIAAx3IWpAAIAAR3g");
	var mask_4_graphics_318 = new cjs.Graphics().p("EgXkAjLIAAx3IWtAAIAAR3g");
	var mask_4_graphics_319 = new cjs.Graphics().p("EgXkAjLIAAx3IWyAAIAAR3g");
	var mask_4_graphics_320 = new cjs.Graphics().p("EgXkAjLIAAx3IW2AAIAAR3g");
	var mask_4_graphics_321 = new cjs.Graphics().p("EgXkAjLIAAx3IW7AAIAAR3g");
	var mask_4_graphics_322 = new cjs.Graphics().p("EgXkAjLIAAx3IW/AAIAAR3g");
	var mask_4_graphics_323 = new cjs.Graphics().p("EgXkAjLIAAx3IXEAAIAAR3g");
	var mask_4_graphics_324 = new cjs.Graphics().p("EgXkAjLIAAx3IXIAAIAAR3g");
	var mask_4_graphics_325 = new cjs.Graphics().p("EgXkAjLIAAx3IXNAAIAAR3g");
	var mask_4_graphics_326 = new cjs.Graphics().p("EgXkAjLIAAx3IXRAAIAAR3g");
	var mask_4_graphics_327 = new cjs.Graphics().p("EgXkAjLIAAx3IXWAAIAAR3g");
	var mask_4_graphics_328 = new cjs.Graphics().p("EgXkAjLIAAx3IXaAAIAAR3g");
	var mask_4_graphics_329 = new cjs.Graphics().p("EgXkAjLIAAx3IXeAAIAAR3g");
	var mask_4_graphics_330 = new cjs.Graphics().p("EgXkAjLIAAx3IXjAAIAAR3g");
	var mask_4_graphics_331 = new cjs.Graphics().p("EgXkAjLIAAx3IXlAAIAAR3g");
	var mask_4_graphics_332 = new cjs.Graphics().p("EgXkAjLIAAx3IXqAAIAAR3g");
	var mask_4_graphics_333 = new cjs.Graphics().p("EgXkAjLIAAx3IXuAAIAAR3g");
	var mask_4_graphics_334 = new cjs.Graphics().p("EgXkAjLIAAx3IXzAAIAAR3g");
	var mask_4_graphics_335 = new cjs.Graphics().p("EgXkAjLIAAx3IX3AAIAAR3g");
	var mask_4_graphics_336 = new cjs.Graphics().p("EgXkAjLIAAx3IX8AAIAAR3g");
	var mask_4_graphics_337 = new cjs.Graphics().p("EgXkAjLIAAx3IYAAAIAAR3g");
	var mask_4_graphics_338 = new cjs.Graphics().p("EgXkAjLIAAx3IYFAAIAAR3g");
	var mask_4_graphics_339 = new cjs.Graphics().p("EgXkAjLIAAx3IYJAAIAAR3g");
	var mask_4_graphics_340 = new cjs.Graphics().p("EgXkAjLIAAx3IYNAAIAAR3g");
	var mask_4_graphics_341 = new cjs.Graphics().p("EgXkAjLIAAx3IYSAAIAAR3g");
	var mask_4_graphics_342 = new cjs.Graphics().p("EgXkAjLIAAx3IYWAAIAAR3g");
	var mask_4_graphics_343 = new cjs.Graphics().p("EgXkAjLIAAx3IYbAAIAAR3g");
	var mask_4_graphics_344 = new cjs.Graphics().p("EgXkAjLIAAx3IYfAAIAAR3g");
	var mask_4_graphics_345 = new cjs.Graphics().p("EgXkAjLIAAx3IYkAAIAAR3g");
	var mask_4_graphics_346 = new cjs.Graphics().p("EgXkAjLIAAx3IYoAAIAAR3g");
	var mask_4_graphics_347 = new cjs.Graphics().p("EgXkAjLIAAx3IYtAAIAAR3g");
	var mask_4_graphics_348 = new cjs.Graphics().p("EgXkAjLIAAx3IYxAAIAAR3g");
	var mask_4_graphics_349 = new cjs.Graphics().p("EgXkAjLIAAx3IY2AAIAAR3g");
	var mask_4_graphics_350 = new cjs.Graphics().p("EgXkAjLIAAx3IY6AAIAAR3g");
	var mask_4_graphics_351 = new cjs.Graphics().p("EgXkAjLIAAx3IY/AAIAAR3g");
	var mask_4_graphics_352 = new cjs.Graphics().p("EgXkAjLIAAx3IZDAAIAAR3g");
	var mask_4_graphics_353 = new cjs.Graphics().p("EgXkAjLIAAx3IZHAAIAAR3g");
	var mask_4_graphics_354 = new cjs.Graphics().p("EgXkAjLIAAx3IZMAAIAAR3g");
	var mask_4_graphics_355 = new cjs.Graphics().p("EgXkAjLIAAx3IZQAAIAAR3g");
	var mask_4_graphics_356 = new cjs.Graphics().p("EgXkAjLIAAx3IZVAAIAAR3g");
	var mask_4_graphics_357 = new cjs.Graphics().p("EgXkAjLIAAx3IZZAAIAAR3g");
	var mask_4_graphics_358 = new cjs.Graphics().p("EgXkAjLIAAx3IZeAAIAAR3g");
	var mask_4_graphics_359 = new cjs.Graphics().p("EgXkAjLIAAx3IZiAAIAAR3g");
	var mask_4_graphics_360 = new cjs.Graphics().p("EgXkAjLIAAx3IZnAAIAAR3g");
	var mask_4_graphics_361 = new cjs.Graphics().p("EgXkAjLIAAx3IZrAAIAAR3g");
	var mask_4_graphics_362 = new cjs.Graphics().p("EgXkAjLIAAx3IZwAAIAAR3g");
	var mask_4_graphics_363 = new cjs.Graphics().p("EgXkAjLIAAx3IZ0AAIAAR3g");
	var mask_4_graphics_364 = new cjs.Graphics().p("EgXkAjLIAAx3IZ4AAIAAR3g");
	var mask_4_graphics_365 = new cjs.Graphics().p("EgXkAjLIAAx3IZ9AAIAAR3g");
	var mask_4_graphics_366 = new cjs.Graphics().p("EgXkAjLIAAx3IaBAAIAAR3g");
	var mask_4_graphics_367 = new cjs.Graphics().p("EgXkAjLIAAx3IaGAAIAAR3g");
	var mask_4_graphics_368 = new cjs.Graphics().p("EgXkAjLIAAx3IaKAAIAAR3g");
	var mask_4_graphics_369 = new cjs.Graphics().p("EgXkAjLIAAx3IaPAAIAAR3g");
	var mask_4_graphics_370 = new cjs.Graphics().p("EgXkAjLIAAx3IaTAAIAAR3g");
	var mask_4_graphics_371 = new cjs.Graphics().p("EgXkAjLIAAx3IaYAAIAAR3g");
	var mask_4_graphics_372 = new cjs.Graphics().p("EgXkAjLIAAx3IacAAIAAR3g");
	var mask_4_graphics_373 = new cjs.Graphics().p("EgXkAjLIAAx3IahAAIAAR3g");
	var mask_4_graphics_374 = new cjs.Graphics().p("EgXkAjLIAAx3IalAAIAAR3g");
	var mask_4_graphics_375 = new cjs.Graphics().p("EgXkAjLIAAx3IaqAAIAAR3g");
	var mask_4_graphics_376 = new cjs.Graphics().p("EgXkAjLIAAx3IauAAIAAR3g");
	var mask_4_graphics_377 = new cjs.Graphics().p("EgXkAjLIAAx3IayAAIAAR3g");
	var mask_4_graphics_378 = new cjs.Graphics().p("EgXkAjLIAAx3Ia3AAIAAR3g");
	var mask_4_graphics_379 = new cjs.Graphics().p("EgXkAjLIAAx3Ia7AAIAAR3g");
	var mask_4_graphics_380 = new cjs.Graphics().p("EgXkAjLIAAx3IbAAAIAAR3g");
	var mask_4_graphics_381 = new cjs.Graphics().p("EgXkAjLIAAx3IbEAAIAAR3g");
	var mask_4_graphics_382 = new cjs.Graphics().p("EgXkAjLIAAx3IbJAAIAAR3g");
	var mask_4_graphics_383 = new cjs.Graphics().p("EgXkAjLIAAx3IbNAAIAAR3g");
	var mask_4_graphics_384 = new cjs.Graphics().p("EgXkAjLIAAx3IbSAAIAAR3g");
	var mask_4_graphics_385 = new cjs.Graphics().p("EgXkAjLIAAx3IbWAAIAAR3g");
	var mask_4_graphics_386 = new cjs.Graphics().p("EgXkAjLIAAx3IbbAAIAAR3g");
	var mask_4_graphics_387 = new cjs.Graphics().p("EgXkAjLIAAx3IbfAAIAAR3g");
	var mask_4_graphics_388 = new cjs.Graphics().p("EgXkAjLIAAx3IbjAAIAAR3g");
	var mask_4_graphics_389 = new cjs.Graphics().p("EgXkAjLIAAx3IboAAIAAR3g");
	var mask_4_graphics_390 = new cjs.Graphics().p("EgXkAjLIAAx3IbsAAIAAR3g");
	var mask_4_graphics_391 = new cjs.Graphics().p("EgXkAjLIAAx3IbxAAIAAR3g");
	var mask_4_graphics_392 = new cjs.Graphics().p("EgXkAjLIAAx3Ib1AAIAAR3g");
	var mask_4_graphics_393 = new cjs.Graphics().p("EgXkAjLIAAx3Ib6AAIAAR3g");
	var mask_4_graphics_394 = new cjs.Graphics().p("EgXkAjLIAAx3Ib+AAIAAR3g");
	var mask_4_graphics_395 = new cjs.Graphics().p("EgXkAjLIAAx3IcDAAIAAR3g");
	var mask_4_graphics_396 = new cjs.Graphics().p("EgXkAjLIAAx3IcHAAIAAR3g");
	var mask_4_graphics_397 = new cjs.Graphics().p("EgXkAjLIAAx3IcMAAIAAR3g");
	var mask_4_graphics_398 = new cjs.Graphics().p("EgXkAjLIAAx3IcQAAIAAR3g");
	var mask_4_graphics_399 = new cjs.Graphics().p("EgXkAjLIAAx3IcVAAIAAR3g");
	var mask_4_graphics_400 = new cjs.Graphics().p("EgXkAjLIAAx3IcZAAIAAR3g");
	var mask_4_graphics_401 = new cjs.Graphics().p("EgXkAjLIAAx3IcdAAIAAR3g");
	var mask_4_graphics_402 = new cjs.Graphics().p("EgXkAjLIAAx3IciAAIAAR3g");
	var mask_4_graphics_403 = new cjs.Graphics().p("EgXkAjLIAAx3IcmAAIAAR3g");
	var mask_4_graphics_404 = new cjs.Graphics().p("EgXkAjLIAAx3IcrAAIAAR3g");
	var mask_4_graphics_405 = new cjs.Graphics().p("EgXkAjLIAAx3IcvAAIAAR3g");
	var mask_4_graphics_406 = new cjs.Graphics().p("EgXkAjLIAAx3Ic0AAIAAR3g");
	var mask_4_graphics_407 = new cjs.Graphics().p("EgXkAjLIAAx3Ic4AAIAAR3g");
	var mask_4_graphics_408 = new cjs.Graphics().p("EgXkAjLIAAx3Ic9AAIAAR3g");
	var mask_4_graphics_409 = new cjs.Graphics().p("EgXkAjLIAAx3IdBAAIAAR3g");
	var mask_4_graphics_410 = new cjs.Graphics().p("EgXkAjLIAAx3IdGAAIAAR3g");
	var mask_4_graphics_411 = new cjs.Graphics().p("EgXkAjLIAAx3IdKAAIAAR3g");
	var mask_4_graphics_412 = new cjs.Graphics().p("EgXkAjLIAAx3IdOAAIAAR3g");
	var mask_4_graphics_413 = new cjs.Graphics().p("EgXkAjLIAAx3IdTAAIAAR3g");
	var mask_4_graphics_414 = new cjs.Graphics().p("EgXkAjLIAAx3IdXAAIAAR3g");
	var mask_4_graphics_415 = new cjs.Graphics().p("EgXkAjLIAAx3IdcAAIAAR3g");
	var mask_4_graphics_416 = new cjs.Graphics().p("EgXkAjLIAAx3IdgAAIAAR3g");
	var mask_4_graphics_417 = new cjs.Graphics().p("EgXkAjLIAAx3IdlAAIAAR3g");
	var mask_4_graphics_418 = new cjs.Graphics().p("EgXkAjLIAAx3IdpAAIAAR3g");
	var mask_4_graphics_419 = new cjs.Graphics().p("EgXkAjLIAAx3IduAAIAAR3g");
	var mask_4_graphics_420 = new cjs.Graphics().p("EgXkAjLIAAx3IdyAAIAAR3g");
	var mask_4_graphics_421 = new cjs.Graphics().p("EgXkAjLIAAx3Id3AAIAAR3g");
	var mask_4_graphics_422 = new cjs.Graphics().p("EgXkAjLIAAx3Id7AAIAAR3g");
	var mask_4_graphics_423 = new cjs.Graphics().p("EgXkAjLIAAx3IeAAAIAAR3g");
	var mask_4_graphics_424 = new cjs.Graphics().p("EgXkAjLIAAx3IeEAAIAAR3g");
	var mask_4_graphics_425 = new cjs.Graphics().p("EgXkAjLIAAx3IeIAAIAAR3g");
	var mask_4_graphics_426 = new cjs.Graphics().p("EgXkAjLIAAx3IeNAAIAAR3g");
	var mask_4_graphics_427 = new cjs.Graphics().p("EgXkAjLIAAx3IeRAAIAAR3g");
	var mask_4_graphics_428 = new cjs.Graphics().p("EgXkAjLIAAx3IeWAAIAAR3g");
	var mask_4_graphics_429 = new cjs.Graphics().p("EgXkAjLIAAx3IeaAAIAAR3g");
	var mask_4_graphics_430 = new cjs.Graphics().p("EgXkAjLIAAx3IefAAIAAR3g");
	var mask_4_graphics_431 = new cjs.Graphics().p("EgXkAjLIAAx3IejAAIAAR3g");
	var mask_4_graphics_432 = new cjs.Graphics().p("EgXkAjLIAAx3IeoAAIAAR3g");
	var mask_4_graphics_433 = new cjs.Graphics().p("EgXkAjLIAAx3IesAAIAAR3g");
	var mask_4_graphics_434 = new cjs.Graphics().p("EgXkAjLIAAx3IexAAIAAR3g");
	var mask_4_graphics_435 = new cjs.Graphics().p("EgXkAjLIAAx3Ie1AAIAAR3g");
	var mask_4_graphics_436 = new cjs.Graphics().p("EgXkAjLIAAx3Ie5AAIAAR3g");
	var mask_4_graphics_437 = new cjs.Graphics().p("EgXkAjLIAAx3Ie+AAIAAR3g");
	var mask_4_graphics_438 = new cjs.Graphics().p("EgXkAjLIAAx3IfCAAIAAR3g");
	var mask_4_graphics_439 = new cjs.Graphics().p("EgXkAjLIAAx3IfHAAIAAR3g");
	var mask_4_graphics_440 = new cjs.Graphics().p("EgXkAjLIAAx3IfLAAIAAR3g");
	var mask_4_graphics_441 = new cjs.Graphics().p("EgXkAjLIAAx3IfQAAIAAR3g");
	var mask_4_graphics_442 = new cjs.Graphics().p("EgXkAjLIAAx3IfUAAIAAR3g");
	var mask_4_graphics_443 = new cjs.Graphics().p("EgXkAjLIAAx3IfZAAIAAR3g");
	var mask_4_graphics_444 = new cjs.Graphics().p("EgXkAjLIAAx3IfdAAIAAR3g");
	var mask_4_graphics_445 = new cjs.Graphics().p("EgXkAjLIAAx3IfiAAIAAR3g");
	var mask_4_graphics_446 = new cjs.Graphics().p("EgXkAjLIAAx3IfmAAIAAR3g");
	var mask_4_graphics_447 = new cjs.Graphics().p("EgXkAjLIAAx3IfrAAIAAR3g");
	var mask_4_graphics_448 = new cjs.Graphics().p("EgXkAjLIAAx3IfvAAIAAR3g");
	var mask_4_graphics_449 = new cjs.Graphics().p("EgXkAjLIAAx3IfzAAIAAR3g");
	var mask_4_graphics_450 = new cjs.Graphics().p("EgXkAjLIAAx3If4AAIAAR3g");
	var mask_4_graphics_451 = new cjs.Graphics().p("EgXkAjLIAAx3If8AAIAAR3g");
	var mask_4_graphics_452 = new cjs.Graphics().p("EgXkAjLIAAx3MAgBAAAIAAR3g");
	var mask_4_graphics_453 = new cjs.Graphics().p("EgXkAjLIAAx3MAgFAAAIAAR3g");
	var mask_4_graphics_454 = new cjs.Graphics().p("EgXkAjLIAAx3MAgKAAAIAAR3g");
	var mask_4_graphics_455 = new cjs.Graphics().p("EgXkAjLIAAx3MAgOAAAIAAR3g");
	var mask_4_graphics_456 = new cjs.Graphics().p("EgXkAjLIAAx3MAgTAAAIAAR3g");
	var mask_4_graphics_457 = new cjs.Graphics().p("EgXkAjLIAAx3MAgXAAAIAAR3g");
	var mask_4_graphics_458 = new cjs.Graphics().p("EgXkAjLIAAx3MAgcAAAIAAR3g");
	var mask_4_graphics_459 = new cjs.Graphics().p("EgXkAjLIAAx3MAggAAAIAAR3g");
	var mask_4_graphics_460 = new cjs.Graphics().p("EgXkAjLIAAx3MAgkAAAIAAR3g");
	var mask_4_graphics_461 = new cjs.Graphics().p("EgXkAjLIAAx3MAgpAAAIAAR3g");
	var mask_4_graphics_462 = new cjs.Graphics().p("EgXkAjLIAAx3MAgtAAAIAAR3g");
	var mask_4_graphics_463 = new cjs.Graphics().p("EgXkAjLIAAx3MAgyAAAIAAR3g");
	var mask_4_graphics_464 = new cjs.Graphics().p("EgXkAjLIAAx3MAg2AAAIAAR3g");
	var mask_4_graphics_465 = new cjs.Graphics().p("EgXkAjLIAAx3MAg7AAAIAAR3g");
	var mask_4_graphics_466 = new cjs.Graphics().p("EgXkAjLIAAx3MAg/AAAIAAR3g");
	var mask_4_graphics_467 = new cjs.Graphics().p("EgXkAjLIAAx3MAhEAAAIAAR3g");
	var mask_4_graphics_468 = new cjs.Graphics().p("EgXkAjLIAAx3MAhIAAAIAAR3g");
	var mask_4_graphics_469 = new cjs.Graphics().p("EgXkAjLIAAx3MAhNAAAIAAR3g");
	var mask_4_graphics_470 = new cjs.Graphics().p("EgXkAjLIAAx3MAhRAAAIAAR3g");
	var mask_4_graphics_471 = new cjs.Graphics().p("EgXkAjLIAAx3MAhWAAAIAAR3g");
	var mask_4_graphics_472 = new cjs.Graphics().p("EgXkAjLIAAx3MAhaAAAIAAR3g");
	var mask_4_graphics_473 = new cjs.Graphics().p("EgXkAjLIAAx3MAheAAAIAAR3g");
	var mask_4_graphics_474 = new cjs.Graphics().p("EgXkAjLIAAx3MAhjAAAIAAR3g");
	var mask_4_graphics_475 = new cjs.Graphics().p("EgXkAjLIAAx3MAhnAAAIAAR3g");
	var mask_4_graphics_476 = new cjs.Graphics().p("EgXkAjLIAAx3MAhsAAAIAAR3g");
	var mask_4_graphics_477 = new cjs.Graphics().p("EgXkAjLIAAx3MAhwAAAIAAR3g");
	var mask_4_graphics_478 = new cjs.Graphics().p("EgXkAjLIAAx3MAh1AAAIAAR3g");
	var mask_4_graphics_479 = new cjs.Graphics().p("EgXkAjLIAAx3MAh5AAAIAAR3g");
	var mask_4_graphics_480 = new cjs.Graphics().p("EgXkAjLIAAx3MAh+AAAIAAR3g");
	var mask_4_graphics_481 = new cjs.Graphics().p("EgXkAjLIAAx3MAiCAAAIAAR3g");
	var mask_4_graphics_482 = new cjs.Graphics().p("EgXkAjLIAAx3MAiHAAAIAAR3g");
	var mask_4_graphics_483 = new cjs.Graphics().p("EgXkAjLIAAx3MAiLAAAIAAR3g");
	var mask_4_graphics_484 = new cjs.Graphics().p("EgXkAjLIAAx3MAiPAAAIAAR3g");
	var mask_4_graphics_485 = new cjs.Graphics().p("EgXkAjLIAAx3MAiUAAAIAAR3g");
	var mask_4_graphics_486 = new cjs.Graphics().p("EgXkAjLIAAx3MAiYAAAIAAR3g");
	var mask_4_graphics_487 = new cjs.Graphics().p("EgXkAjLIAAx3MAidAAAIAAR3g");
	var mask_4_graphics_488 = new cjs.Graphics().p("EgXkAjLIAAx3MAihAAAIAAR3g");
	var mask_4_graphics_489 = new cjs.Graphics().p("EgXkAjLIAAx3MAimAAAIAAR3g");
	var mask_4_graphics_490 = new cjs.Graphics().p("EgXkAjLIAAx3MAiqAAAIAAR3g");
	var mask_4_graphics_491 = new cjs.Graphics().p("EgXkAjLIAAx3MAivAAAIAAR3g");
	var mask_4_graphics_492 = new cjs.Graphics().p("EgXkAjLIAAx3MAizAAAIAAR3g");
	var mask_4_graphics_493 = new cjs.Graphics().p("EgXkAjLIAAx3MAi4AAAIAAR3g");
	var mask_4_graphics_494 = new cjs.Graphics().p("EgXkAjLIAAx3MAi8AAAIAAR3g");
	var mask_4_graphics_495 = new cjs.Graphics().p("EgXkAjLIAAx3MAjBAAAIAAR3g");
	var mask_4_graphics_496 = new cjs.Graphics().p("EgXkAjLIAAx3MAjFAAAIAAR3g");
	var mask_4_graphics_497 = new cjs.Graphics().p("EgXkAjLIAAx3MAjJAAAIAAR3g");
	var mask_4_graphics_498 = new cjs.Graphics().p("EgXkAjLIAAx3MAjOAAAIAAR3g");
	var mask_4_graphics_499 = new cjs.Graphics().p("EgXkAjLIAAx3MAjSAAAIAAR3g");
	var mask_4_graphics_500 = new cjs.Graphics().p("EgXkAjLIAAx3MAjXAAAIAAR3g");
	var mask_4_graphics_501 = new cjs.Graphics().p("EgXkAjLIAAx3MAjbAAAIAAR3g");
	var mask_4_graphics_502 = new cjs.Graphics().p("EgXkAjLIAAx3MAjgAAAIAAR3g");
	var mask_4_graphics_503 = new cjs.Graphics().p("EgXkAjLIAAx3MAjkAAAIAAR3g");
	var mask_4_graphics_504 = new cjs.Graphics().p("EgXkAjLIAAx3MAjpAAAIAAR3g");
	var mask_4_graphics_505 = new cjs.Graphics().p("EgXkAjLIAAx3MAjtAAAIAAR3g");
	var mask_4_graphics_506 = new cjs.Graphics().p("EgXkAjLIAAx3MAjyAAAIAAR3g");
	var mask_4_graphics_507 = new cjs.Graphics().p("EgXkAjLIAAx3MAj2AAAIAAR3g");
	var mask_4_graphics_508 = new cjs.Graphics().p("EgXkAjLIAAx3MAj6AAAIAAR3g");
	var mask_4_graphics_509 = new cjs.Graphics().p("EgXkAjLIAAx3MAj/AAAIAAR3g");
	var mask_4_graphics_510 = new cjs.Graphics().p("EgXkAjLIAAx3MAkDAAAIAAR3g");
	var mask_4_graphics_511 = new cjs.Graphics().p("EgXkAjLIAAx3MAkIAAAIAAR3g");
	var mask_4_graphics_512 = new cjs.Graphics().p("EgXkAjLIAAx3MAkMAAAIAAR3g");
	var mask_4_graphics_513 = new cjs.Graphics().p("EgXkAjLIAAx3MAkRAAAIAAR3g");
	var mask_4_graphics_514 = new cjs.Graphics().p("EgXkAjLIAAx3MAkVAAAIAAR3g");
	var mask_4_graphics_515 = new cjs.Graphics().p("EgXkAjLIAAx3MAkaAAAIAAR3g");
	var mask_4_graphics_516 = new cjs.Graphics().p("EgXkAjLIAAx3MAkeAAAIAAR3g");
	var mask_4_graphics_517 = new cjs.Graphics().p("EgXkAjLIAAx3MAkjAAAIAAR3g");
	var mask_4_graphics_518 = new cjs.Graphics().p("EgXkAjLIAAx3MAknAAAIAAR3g");
	var mask_4_graphics_519 = new cjs.Graphics().p("EgXkAjLIAAx3MAksAAAIAAR3g");
	var mask_4_graphics_520 = new cjs.Graphics().p("EgXkAjLIAAx3MAkwAAAIAAR3g");
	var mask_4_graphics_521 = new cjs.Graphics().p("EgXkAjLIAAx3MAk0AAAIAAR3g");
	var mask_4_graphics_522 = new cjs.Graphics().p("EgXkAjLIAAx3MAk5AAAIAAR3g");
	var mask_4_graphics_523 = new cjs.Graphics().p("EgXkAjLIAAx3MAk9AAAIAAR3g");
	var mask_4_graphics_524 = new cjs.Graphics().p("EgXkAjLIAAx3MAlCAAAIAAR3g");
	var mask_4_graphics_525 = new cjs.Graphics().p("EgXkAjLIAAx3MAlGAAAIAAR3g");
	var mask_4_graphics_526 = new cjs.Graphics().p("EgXkAjLIAAx3MAlLAAAIAAR3g");
	var mask_4_graphics_527 = new cjs.Graphics().p("EgXkAjLIAAx3MAlPAAAIAAR3g");
	var mask_4_graphics_528 = new cjs.Graphics().p("EgXkAjLIAAx3MAlUAAAIAAR3g");
	var mask_4_graphics_529 = new cjs.Graphics().p("EgXkAjLIAAx3MAlYAAAIAAR3g");
	var mask_4_graphics_530 = new cjs.Graphics().p("EgXkAjLIAAx3MAldAAAIAAR3g");
	var mask_4_graphics_531 = new cjs.Graphics().p("EgXkAjLIAAx3MAlhAAAIAAR3g");
	var mask_4_graphics_532 = new cjs.Graphics().p("EgXkAjLIAAx3MAllAAAIAAR3g");
	var mask_4_graphics_533 = new cjs.Graphics().p("EgXkAjLIAAx3MAlqAAAIAAR3g");
	var mask_4_graphics_534 = new cjs.Graphics().p("EgXkAjLIAAx3MAluAAAIAAR3g");
	var mask_4_graphics_535 = new cjs.Graphics().p("EgXkAjLIAAx3MAlzAAAIAAR3g");
	var mask_4_graphics_536 = new cjs.Graphics().p("EgXkAjLIAAx3MAl3AAAIAAR3g");
	var mask_4_graphics_537 = new cjs.Graphics().p("EgXkAjLIAAx3MAl8AAAIAAR3g");
	var mask_4_graphics_538 = new cjs.Graphics().p("EgXkAjLIAAx3MAmAAAAIAAR3g");
	var mask_4_graphics_539 = new cjs.Graphics().p("EgXkAjLIAAx3MAmFAAAIAAR3g");
	var mask_4_graphics_540 = new cjs.Graphics().p("EgXkAjLIAAx3MAmJAAAIAAR3g");
	var mask_4_graphics_541 = new cjs.Graphics().p("EgXkAjLIAAx3MAmOAAAIAAR3g");
	var mask_4_graphics_542 = new cjs.Graphics().p("EgXkAjLIAAx3MAmSAAAIAAR3g");
	var mask_4_graphics_543 = new cjs.Graphics().p("EgXkAjLIAAx3MAmXAAAIAAR3g");
	var mask_4_graphics_544 = new cjs.Graphics().p("EgXkAjLIAAx3MAmbAAAIAAR3g");
	var mask_4_graphics_545 = new cjs.Graphics().p("EgXkAjLIAAx3MAmfAAAIAAR3g");
	var mask_4_graphics_546 = new cjs.Graphics().p("EgXkAjLIAAx3MAmkAAAIAAR3g");
	var mask_4_graphics_547 = new cjs.Graphics().p("EgXkAjLIAAx3MAmoAAAIAAR3g");
	var mask_4_graphics_548 = new cjs.Graphics().p("EgXkAjLIAAx3MAmtAAAIAAR3g");
	var mask_4_graphics_549 = new cjs.Graphics().p("EgXkAjLIAAx3MAmxAAAIAAR3g");
	var mask_4_graphics_550 = new cjs.Graphics().p("EgXkAjLIAAx3MAm2AAAIAAR3g");
	var mask_4_graphics_551 = new cjs.Graphics().p("EgXkAjLIAAx3MAm6AAAIAAR3g");
	var mask_4_graphics_552 = new cjs.Graphics().p("EgXkAjLIAAx3MAm/AAAIAAR3g");
	var mask_4_graphics_553 = new cjs.Graphics().p("EgXkAjLIAAx3MAnDAAAIAAR3g");
	var mask_4_graphics_554 = new cjs.Graphics().p("EgXkAjLIAAx3MAnIAAAIAAR3g");
	var mask_4_graphics_555 = new cjs.Graphics().p("EgXkAjLIAAx3MAnMAAAIAAR3g");
	var mask_4_graphics_556 = new cjs.Graphics().p("EgXkAjLIAAx3MAnQAAAIAAR3g");
	var mask_4_graphics_557 = new cjs.Graphics().p("EgXkAjLIAAx3MAnVAAAIAAR3g");
	var mask_4_graphics_558 = new cjs.Graphics().p("EgXkAjLIAAx3MAnZAAAIAAR3g");
	var mask_4_graphics_559 = new cjs.Graphics().p("EgXkAjLIAAx3MAneAAAIAAR3g");
	var mask_4_graphics_560 = new cjs.Graphics().p("EgXkAjLIAAx3MAniAAAIAAR3g");
	var mask_4_graphics_561 = new cjs.Graphics().p("EgXkAjLIAAx3MAnnAAAIAAR3g");
	var mask_4_graphics_562 = new cjs.Graphics().p("EgXkAjLIAAx3MAnrAAAIAAR3g");
	var mask_4_graphics_563 = new cjs.Graphics().p("EgXkAjLIAAx3MAnwAAAIAAR3g");
	var mask_4_graphics_564 = new cjs.Graphics().p("EgXkAjLIAAx3MAn0AAAIAAR3g");
	var mask_4_graphics_565 = new cjs.Graphics().p("EgXkAjLIAAx3MAn5AAAIAAR3g");
	var mask_4_graphics_566 = new cjs.Graphics().p("EgXkAjLIAAx3MAn9AAAIAAR3g");
	var mask_4_graphics_567 = new cjs.Graphics().p("EgXkAjLIAAx3MAoCAAAIAAR3g");
	var mask_4_graphics_568 = new cjs.Graphics().p("EgXkAjLIAAx3MAoGAAAIAAR3g");
	var mask_4_graphics_569 = new cjs.Graphics().p("EgXkAjLIAAx3MAoKAAAIAAR3g");
	var mask_4_graphics_570 = new cjs.Graphics().p("EgXkAjLIAAx3MAoPAAAIAAR3g");
	var mask_4_graphics_571 = new cjs.Graphics().p("EgXkAjLIAAx3MAoTAAAIAAR3g");
	var mask_4_graphics_572 = new cjs.Graphics().p("EgXkAjLIAAx3MAoYAAAIAAR3g");
	var mask_4_graphics_573 = new cjs.Graphics().p("EgXkAjLIAAx3MAocAAAIAAR3g");
	var mask_4_graphics_574 = new cjs.Graphics().p("EgXkAjLIAAx3MAohAAAIAAR3g");
	var mask_4_graphics_575 = new cjs.Graphics().p("EgXkAjLIAAx3MAolAAAIAAR3g");
	var mask_4_graphics_576 = new cjs.Graphics().p("EgXkAjLIAAx3MAoqAAAIAAR3g");
	var mask_4_graphics_577 = new cjs.Graphics().p("EgXkAjLIAAx3MAouAAAIAAR3g");
	var mask_4_graphics_578 = new cjs.Graphics().p("EgXkAjLIAAx3MAozAAAIAAR3g");
	var mask_4_graphics_579 = new cjs.Graphics().p("EgXkAjLIAAx3MAo3AAAIAAR3g");
	var mask_4_graphics_580 = new cjs.Graphics().p("EgXkAjLIAAx3MAo7AAAIAAR3g");
	var mask_4_graphics_581 = new cjs.Graphics().p("EgXkAjLIAAx3MApAAAAIAAR3g");
	var mask_4_graphics_582 = new cjs.Graphics().p("EgXkAjLIAAx3MApEAAAIAAR3g");
	var mask_4_graphics_583 = new cjs.Graphics().p("EgXkAjLIAAx3MApJAAAIAAR3g");
	var mask_4_graphics_584 = new cjs.Graphics().p("EgXkAjLIAAx3MApNAAAIAAR3g");
	var mask_4_graphics_585 = new cjs.Graphics().p("EgXkAjLIAAx3MApSAAAIAAR3g");
	var mask_4_graphics_586 = new cjs.Graphics().p("EgXkAjLIAAx3MApWAAAIAAR3g");
	var mask_4_graphics_587 = new cjs.Graphics().p("EgXkAjLIAAx3MApbAAAIAAR3g");
	var mask_4_graphics_588 = new cjs.Graphics().p("EgXkAjLIAAx3MApfAAAIAAR3g");
	var mask_4_graphics_589 = new cjs.Graphics().p("EgXkAjLIAAx3MApkAAAIAAR3g");
	var mask_4_graphics_590 = new cjs.Graphics().p("EgXkAjLIAAx3MApoAAAIAAR3g");
	var mask_4_graphics_591 = new cjs.Graphics().p("EgXkAjLIAAx3MAptAAAIAAR3g");
	var mask_4_graphics_592 = new cjs.Graphics().p("EgXkAjLIAAx3MApxAAAIAAR3g");
	var mask_4_graphics_593 = new cjs.Graphics().p("EgXkAjLIAAx3MAp1AAAIAAR3g");
	var mask_4_graphics_594 = new cjs.Graphics().p("EgXkAjLIAAx3MAp6AAAIAAR3g");
	var mask_4_graphics_595 = new cjs.Graphics().p("EgXkAjLIAAx3MAp+AAAIAAR3g");
	var mask_4_graphics_596 = new cjs.Graphics().p("EgXkAjLIAAx3MAqDAAAIAAR3g");
	var mask_4_graphics_597 = new cjs.Graphics().p("EgXkAjLIAAx3MAqHAAAIAAR3g");
	var mask_4_graphics_598 = new cjs.Graphics().p("EgXkAjLIAAx3MAqMAAAIAAR3g");
	var mask_4_graphics_599 = new cjs.Graphics().p("EgXkAjLIAAx3MAqQAAAIAAR3g");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_4_graphics_1,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_2,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_3,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_4,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_5,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_6,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_7,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_8,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_9,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_10,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_11,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_12,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_13,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_14,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_15,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_16,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_17,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_18,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_19,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_20,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_21,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_22,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_23,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_24,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_25,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_26,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_27,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_28,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_29,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_30,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_31,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_32,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_33,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_34,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_35,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_36,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_37,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_38,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_39,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_40,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_41,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_42,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_43,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_44,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_45,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_46,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_47,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_48,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_49,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_50,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_51,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_52,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_53,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_54,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_55,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_56,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_57,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_58,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_59,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_60,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_61,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_62,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_63,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_64,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_65,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_66,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_67,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_68,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_69,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_70,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_71,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_72,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_73,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_74,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_75,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_76,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_77,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_78,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_79,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_80,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_81,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_82,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_83,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_84,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_85,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_86,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_87,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_88,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_89,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_90,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_91,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_92,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_93,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_94,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_95,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_96,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_97,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_98,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_99,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_100,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_101,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_102,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_103,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_104,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_105,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_106,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_107,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_108,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_109,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_110,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_111,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_112,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_113,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_114,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_115,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_116,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_117,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_118,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_119,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_120,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_121,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_122,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_123,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_124,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_125,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_126,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_127,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_128,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_129,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_130,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_131,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_132,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_133,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_134,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_135,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_136,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_137,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_138,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_139,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_140,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_141,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_142,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_143,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_144,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_145,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_146,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_147,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_148,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_149,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_150,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_151,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_152,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_153,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_154,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_155,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_156,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_157,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_158,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_159,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_160,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_161,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_162,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_163,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_164,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_165,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_166,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_167,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_168,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_169,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_170,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_171,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_172,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_173,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_174,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_175,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_176,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_177,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_178,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_179,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_180,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_181,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_182,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_183,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_184,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_185,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_186,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_187,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_188,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_189,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_190,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_191,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_192,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_193,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_194,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_195,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_196,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_197,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_198,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_199,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_200,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_201,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_202,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_203,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_204,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_205,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_206,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_207,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_208,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_209,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_210,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_211,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_212,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_213,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_214,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_215,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_216,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_217,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_218,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_219,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_220,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_221,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_222,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_223,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_224,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_225,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_226,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_227,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_228,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_229,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_230,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_231,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_232,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_233,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_234,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_235,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_236,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_237,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_238,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_239,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_240,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_241,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_242,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_243,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_244,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_245,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_246,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_247,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_248,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_249,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_250,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_251,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_252,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_253,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_254,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_255,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_256,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_257,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_258,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_259,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_260,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_261,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_262,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_263,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_264,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_265,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_266,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_267,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_268,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_269,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_270,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_271,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_272,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_273,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_274,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_275,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_276,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_277,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_278,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_279,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_280,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_281,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_282,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_283,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_284,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_285,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_286,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_287,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_288,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_289,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_290,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_291,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_292,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_293,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_294,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_295,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_296,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_297,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_298,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_299,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_300,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_301,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_302,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_303,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_304,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_305,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_306,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_307,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_308,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_309,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_310,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_311,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_312,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_313,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_314,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_315,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_316,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_317,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_318,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_319,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_320,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_321,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_322,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_323,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_324,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_325,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_326,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_327,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_328,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_329,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_330,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_331,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_332,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_333,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_334,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_335,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_336,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_337,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_338,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_339,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_340,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_341,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_342,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_343,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_344,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_345,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_346,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_347,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_348,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_349,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_350,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_351,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_352,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_353,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_354,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_355,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_356,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_357,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_358,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_359,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_360,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_361,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_362,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_363,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_364,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_365,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_366,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_367,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_368,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_369,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_370,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_371,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_372,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_373,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_374,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_375,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_376,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_377,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_378,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_379,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_380,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_381,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_382,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_383,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_384,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_385,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_386,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_387,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_388,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_389,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_390,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_391,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_392,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_393,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_394,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_395,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_396,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_397,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_398,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_399,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_400,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_401,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_402,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_403,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_404,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_405,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_406,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_407,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_408,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_409,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_410,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_411,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_412,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_413,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_414,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_415,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_416,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_417,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_418,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_419,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_420,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_421,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_422,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_423,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_424,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_425,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_426,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_427,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_428,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_429,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_430,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_431,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_432,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_433,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_434,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_435,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_436,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_437,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_438,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_439,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_440,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_441,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_442,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_443,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_444,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_445,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_446,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_447,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_448,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_449,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_450,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_451,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_452,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_453,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_454,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_455,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_456,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_457,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_458,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_459,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_460,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_461,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_462,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_463,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_464,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_465,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_466,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_467,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_468,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_469,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_470,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_471,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_472,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_473,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_474,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_475,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_476,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_477,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_478,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_479,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_480,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_481,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_482,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_483,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_484,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_485,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_486,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_487,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_488,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_489,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_490,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_491,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_492,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_493,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_494,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_495,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_496,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_497,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_498,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_499,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_500,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_501,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_502,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_503,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_504,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_505,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_506,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_507,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_508,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_509,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_510,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_511,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_512,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_513,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_514,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_515,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_516,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_517,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_518,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_519,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_520,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_521,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_522,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_523,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_524,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_525,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_526,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_527,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_528,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_529,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_530,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_531,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_532,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_533,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_534,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_535,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_536,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_537,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_538,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_539,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_540,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_541,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_542,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_543,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_544,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_545,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_546,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_547,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_548,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_549,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_550,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_551,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_552,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_553,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_554,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_555,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_556,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_557,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_558,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_559,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_560,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_561,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_562,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_563,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_564,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_565,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_566,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_567,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_568,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_569,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_570,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_571,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_572,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_573,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_574,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_575,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_576,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_577,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_578,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_579,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_580,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_581,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_582,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_583,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_584,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_585,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_586,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_587,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_588,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_589,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_590,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_591,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_592,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_593,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_594,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_595,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_596,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_597,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_598,x:-150.9,y:225.2}).wait(1).to({graphics:mask_4_graphics_599,x:-150.9,y:225.2}).wait(1));

	// graph copy
	this.instance_39 = new lib.TempGraph2();
	this.instance_39.setTransform(-166.8,390,0.871,0.871,0,0,0,155.1,62);
	this.instance_39._off = true;

	this.instance_39.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(1).to({_off:false},0).wait(599));

	// graph mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_1 = new cjs.Graphics().p("EgBxAiqIAAwzIAWAAIAAQzg");
	var mask_5_graphics_2 = new cjs.Graphics().p("EgBxAiqIAAwzIAbAAIAAQzg");
	var mask_5_graphics_3 = new cjs.Graphics().p("EgBxAiqIAAwzIAfAAIAAQzg");
	var mask_5_graphics_4 = new cjs.Graphics().p("EgBxAiqIAAwzIAkAAIAAQzg");
	var mask_5_graphics_5 = new cjs.Graphics().p("EgBxAiqIAAwzIAoAAIAAQzg");
	var mask_5_graphics_6 = new cjs.Graphics().p("EgBxAiqIAAwzIAtAAIAAQzg");
	var mask_5_graphics_7 = new cjs.Graphics().p("EgBxAiqIAAwzIAxAAIAAQzg");
	var mask_5_graphics_8 = new cjs.Graphics().p("EgBxAiqIAAwzIA2AAIAAQzg");
	var mask_5_graphics_9 = new cjs.Graphics().p("EgBxAiqIAAwzIA6AAIAAQzg");
	var mask_5_graphics_10 = new cjs.Graphics().p("EgBxAiqIAAwzIA/AAIAAQzg");
	var mask_5_graphics_11 = new cjs.Graphics().p("EgBxAiqIAAwzIBDAAIAAQzg");
	var mask_5_graphics_12 = new cjs.Graphics().p("EgBxAiqIAAwzIBIAAIAAQzg");
	var mask_5_graphics_13 = new cjs.Graphics().p("EgBxAiqIAAwzIBMAAIAAQzg");
	var mask_5_graphics_14 = new cjs.Graphics().p("EgBxAiqIAAwzIBRAAIAAQzg");
	var mask_5_graphics_15 = new cjs.Graphics().p("EgBxAiqIAAwzIBVAAIAAQzg");
	var mask_5_graphics_16 = new cjs.Graphics().p("EgBxAiqIAAwzIBZAAIAAQzg");
	var mask_5_graphics_17 = new cjs.Graphics().p("EgBxAiqIAAwzIBeAAIAAQzg");
	var mask_5_graphics_18 = new cjs.Graphics().p("EgBxAiqIAAwzIBiAAIAAQzg");
	var mask_5_graphics_19 = new cjs.Graphics().p("EgBxAiqIAAwzIBnAAIAAQzg");
	var mask_5_graphics_20 = new cjs.Graphics().p("EgBxAiqIAAwzIBrAAIAAQzg");
	var mask_5_graphics_21 = new cjs.Graphics().p("EgBxAiqIAAwzIBwAAIAAQzg");
	var mask_5_graphics_22 = new cjs.Graphics().p("EgBxAiqIAAwzIByAAIAAQzg");
	var mask_5_graphics_23 = new cjs.Graphics().p("EgBxAiqIAAwzIB3AAIAAQzg");
	var mask_5_graphics_24 = new cjs.Graphics().p("EgBxAiqIAAwzIB7AAIAAQzg");
	var mask_5_graphics_25 = new cjs.Graphics().p("EgBxAiqIAAwzICAAAIAAQzg");
	var mask_5_graphics_26 = new cjs.Graphics().p("EgBxAiqIAAwzICEAAIAAQzg");
	var mask_5_graphics_27 = new cjs.Graphics().p("EgBxAiqIAAwzICJAAIAAQzg");
	var mask_5_graphics_28 = new cjs.Graphics().p("EgBxAiqIAAwzICNAAIAAQzg");
	var mask_5_graphics_29 = new cjs.Graphics().p("EgBxAiqIAAwzICSAAIAAQzg");
	var mask_5_graphics_30 = new cjs.Graphics().p("EgBxAiqIAAwzICWAAIAAQzg");
	var mask_5_graphics_31 = new cjs.Graphics().p("EgBxAiqIAAwzICbAAIAAQzg");
	var mask_5_graphics_32 = new cjs.Graphics().p("EgBxAiqIAAwzICfAAIAAQzg");
	var mask_5_graphics_33 = new cjs.Graphics().p("EgBxAiqIAAwzICkAAIAAQzg");
	var mask_5_graphics_34 = new cjs.Graphics().p("EgBxAiqIAAwzICoAAIAAQzg");
	var mask_5_graphics_35 = new cjs.Graphics().p("EgBxAiqIAAwzICsAAIAAQzg");
	var mask_5_graphics_36 = new cjs.Graphics().p("EgBxAiqIAAwzICxAAIAAQzg");
	var mask_5_graphics_37 = new cjs.Graphics().p("EgBxAiqIAAwzIC1AAIAAQzg");
	var mask_5_graphics_38 = new cjs.Graphics().p("EgBxAiqIAAwzIC6AAIAAQzg");
	var mask_5_graphics_39 = new cjs.Graphics().p("EgBxAiqIAAwzIC+AAIAAQzg");
	var mask_5_graphics_40 = new cjs.Graphics().p("EgBxAiqIAAwzIDDAAIAAQzg");
	var mask_5_graphics_41 = new cjs.Graphics().p("EgBxAiqIAAwzIDHAAIAAQzg");
	var mask_5_graphics_42 = new cjs.Graphics().p("EgBxAiqIAAwzIDMAAIAAQzg");
	var mask_5_graphics_43 = new cjs.Graphics().p("EgBxAiqIAAwzIDQAAIAAQzg");
	var mask_5_graphics_44 = new cjs.Graphics().p("EgBxAiqIAAwzIDVAAIAAQzg");
	var mask_5_graphics_45 = new cjs.Graphics().p("EgBxAiqIAAwzIDZAAIAAQzg");
	var mask_5_graphics_46 = new cjs.Graphics().p("EgBxAiqIAAwzIDeAAIAAQzg");
	var mask_5_graphics_47 = new cjs.Graphics().p("EgBxAiqIAAwzIDiAAIAAQzg");
	var mask_5_graphics_48 = new cjs.Graphics().p("EgBzAiqIAAwzIDnAAIAAQzg");
	var mask_5_graphics_49 = new cjs.Graphics().p("EgB1AiqIAAwzIDrAAIAAQzg");
	var mask_5_graphics_50 = new cjs.Graphics().p("EgB3AiqIAAwzIDvAAIAAQzg");
	var mask_5_graphics_51 = new cjs.Graphics().p("EgB6AiqIAAwzID1AAIAAQzg");
	var mask_5_graphics_52 = new cjs.Graphics().p("EgB8AiqIAAwzID5AAIAAQzg");
	var mask_5_graphics_53 = new cjs.Graphics().p("EgB+AiqIAAwzID9AAIAAQzg");
	var mask_5_graphics_54 = new cjs.Graphics().p("EgCAAiqIAAwzIEBAAIAAQzg");
	var mask_5_graphics_55 = new cjs.Graphics().p("EgCDAiqIAAwzIEHAAIAAQzg");
	var mask_5_graphics_56 = new cjs.Graphics().p("EgCFAiqIAAwzIELAAIAAQzg");
	var mask_5_graphics_57 = new cjs.Graphics().p("EgCHAiqIAAwzIEPAAIAAQzg");
	var mask_5_graphics_58 = new cjs.Graphics().p("EgCJAiqIAAwzIETAAIAAQzg");
	var mask_5_graphics_59 = new cjs.Graphics().p("EgCMAiqIAAwzIEZAAIAAQzg");
	var mask_5_graphics_60 = new cjs.Graphics().p("EgCOAiqIAAwzIEdAAIAAQzg");
	var mask_5_graphics_61 = new cjs.Graphics().p("EgCQAiqIAAwzIEhAAIAAQzg");
	var mask_5_graphics_62 = new cjs.Graphics().p("EgCSAiqIAAwzIElAAIAAQzg");
	var mask_5_graphics_63 = new cjs.Graphics().p("EgCVAiqIAAwzIErAAIAAQzg");
	var mask_5_graphics_64 = new cjs.Graphics().p("EgCXAiqIAAwzIEvAAIAAQzg");
	var mask_5_graphics_65 = new cjs.Graphics().p("EgCZAiqIAAwzIEzAAIAAQzg");
	var mask_5_graphics_66 = new cjs.Graphics().p("EgCbAiqIAAwzIE3AAIAAQzg");
	var mask_5_graphics_67 = new cjs.Graphics().p("EgCdAiqIAAwzIE7AAIAAQzg");
	var mask_5_graphics_68 = new cjs.Graphics().p("EgCgAiqIAAwzIFBAAIAAQzg");
	var mask_5_graphics_69 = new cjs.Graphics().p("EgCiAiqIAAwzIFFAAIAAQzg");
	var mask_5_graphics_70 = new cjs.Graphics().p("EgCkAiqIAAwzIFJAAIAAQzg");
	var mask_5_graphics_71 = new cjs.Graphics().p("EgCmAiqIAAwzIFNAAIAAQzg");
	var mask_5_graphics_72 = new cjs.Graphics().p("EgCpAiqIAAwzIFTAAIAAQzg");
	var mask_5_graphics_73 = new cjs.Graphics().p("EgCrAiqIAAwzIFXAAIAAQzg");
	var mask_5_graphics_74 = new cjs.Graphics().p("EgCtAiqIAAwzIFbAAIAAQzg");
	var mask_5_graphics_75 = new cjs.Graphics().p("EgCvAiqIAAwzIFfAAIAAQzg");
	var mask_5_graphics_76 = new cjs.Graphics().p("EgCyAiqIAAwzIFlAAIAAQzg");
	var mask_5_graphics_77 = new cjs.Graphics().p("EgC0AiqIAAwzIFpAAIAAQzg");
	var mask_5_graphics_78 = new cjs.Graphics().p("EgC2AiqIAAwzIFtAAIAAQzg");
	var mask_5_graphics_79 = new cjs.Graphics().p("EgC4AiqIAAwzIFxAAIAAQzg");
	var mask_5_graphics_80 = new cjs.Graphics().p("EgC7AiqIAAwzIF3AAIAAQzg");
	var mask_5_graphics_81 = new cjs.Graphics().p("EgC9AiqIAAwzIF7AAIAAQzg");
	var mask_5_graphics_82 = new cjs.Graphics().p("EgC/AiqIAAwzIF/AAIAAQzg");
	var mask_5_graphics_83 = new cjs.Graphics().p("EgDBAiqIAAwzIGDAAIAAQzg");
	var mask_5_graphics_84 = new cjs.Graphics().p("EgDDAiqIAAwzIGHAAIAAQzg");
	var mask_5_graphics_85 = new cjs.Graphics().p("EgDGAiqIAAwzIGNAAIAAQzg");
	var mask_5_graphics_86 = new cjs.Graphics().p("EgDIAiqIAAwzIGRAAIAAQzg");
	var mask_5_graphics_87 = new cjs.Graphics().p("EgDKAiqIAAwzIGVAAIAAQzg");
	var mask_5_graphics_88 = new cjs.Graphics().p("EgDMAiqIAAwzIGZAAIAAQzg");
	var mask_5_graphics_89 = new cjs.Graphics().p("EgDPAiqIAAwzIGfAAIAAQzg");
	var mask_5_graphics_90 = new cjs.Graphics().p("EgDRAiqIAAwzIGjAAIAAQzg");
	var mask_5_graphics_91 = new cjs.Graphics().p("EgDTAiqIAAwzIGnAAIAAQzg");
	var mask_5_graphics_92 = new cjs.Graphics().p("EgDVAiqIAAwzIGrAAIAAQzg");
	var mask_5_graphics_93 = new cjs.Graphics().p("EgDYAiqIAAwzIGxAAIAAQzg");
	var mask_5_graphics_94 = new cjs.Graphics().p("EgDaAiqIAAwzIG1AAIAAQzg");
	var mask_5_graphics_95 = new cjs.Graphics().p("EgDcAiqIAAwzIG5AAIAAQzg");
	var mask_5_graphics_96 = new cjs.Graphics().p("EgDeAiqIAAwzIG9AAIAAQzg");
	var mask_5_graphics_97 = new cjs.Graphics().p("EgDhAiqIAAwzIHDAAIAAQzg");
	var mask_5_graphics_98 = new cjs.Graphics().p("EgDjAiqIAAwzIHHAAIAAQzg");
	var mask_5_graphics_99 = new cjs.Graphics().p("EgDlAiqIAAwzIHLAAIAAQzg");
	var mask_5_graphics_100 = new cjs.Graphics().p("EgDnAiqIAAwzIHPAAIAAQzg");
	var mask_5_graphics_101 = new cjs.Graphics().p("EgDqAiqIAAwzIHVAAIAAQzg");
	var mask_5_graphics_102 = new cjs.Graphics().p("EgDsAiqIAAwzIHZAAIAAQzg");
	var mask_5_graphics_103 = new cjs.Graphics().p("EgDuAiqIAAwzIHdAAIAAQzg");
	var mask_5_graphics_104 = new cjs.Graphics().p("EgDwAiqIAAwzIHhAAIAAQzg");
	var mask_5_graphics_105 = new cjs.Graphics().p("EgDyAiqIAAwzIHlAAIAAQzg");
	var mask_5_graphics_106 = new cjs.Graphics().p("EgD1AiqIAAwzIHrAAIAAQzg");
	var mask_5_graphics_107 = new cjs.Graphics().p("EgD3AiqIAAwzIHvAAIAAQzg");
	var mask_5_graphics_108 = new cjs.Graphics().p("EgD5AiqIAAwzIHzAAIAAQzg");
	var mask_5_graphics_109 = new cjs.Graphics().p("EgD7AiqIAAwzIH3AAIAAQzg");
	var mask_5_graphics_110 = new cjs.Graphics().p("EgD+AiqIAAwzIH9AAIAAQzg");
	var mask_5_graphics_111 = new cjs.Graphics().p("EgEAAiqIAAwzIIBAAIAAQzg");
	var mask_5_graphics_112 = new cjs.Graphics().p("EgECAiqIAAwzIIFAAIAAQzg");
	var mask_5_graphics_113 = new cjs.Graphics().p("EgEEAiqIAAwzIIJAAIAAQzg");
	var mask_5_graphics_114 = new cjs.Graphics().p("EgEHAiqIAAwzIIPAAIAAQzg");
	var mask_5_graphics_115 = new cjs.Graphics().p("EgEJAiqIAAwzIITAAIAAQzg");
	var mask_5_graphics_116 = new cjs.Graphics().p("EgELAiqIAAwzIIXAAIAAQzg");
	var mask_5_graphics_117 = new cjs.Graphics().p("EgENAiqIAAwzIIbAAIAAQzg");
	var mask_5_graphics_118 = new cjs.Graphics().p("EgEQAiqIAAwzIIhAAIAAQzg");
	var mask_5_graphics_119 = new cjs.Graphics().p("EgESAiqIAAwzIIlAAIAAQzg");
	var mask_5_graphics_120 = new cjs.Graphics().p("EgEUAiqIAAwzIIpAAIAAQzg");
	var mask_5_graphics_121 = new cjs.Graphics().p("EgEWAiqIAAwzIItAAIAAQzg");
	var mask_5_graphics_122 = new cjs.Graphics().p("EgEZAiqIAAwzIIzAAIAAQzg");
	var mask_5_graphics_123 = new cjs.Graphics().p("EgEbAiqIAAwzII3AAIAAQzg");
	var mask_5_graphics_124 = new cjs.Graphics().p("EgEdAiqIAAwzII7AAIAAQzg");
	var mask_5_graphics_125 = new cjs.Graphics().p("EgEfAiqIAAwzII/AAIAAQzg");
	var mask_5_graphics_126 = new cjs.Graphics().p("EgEhAiqIAAwzIJDAAIAAQzg");
	var mask_5_graphics_127 = new cjs.Graphics().p("EgEkAiqIAAwzIJJAAIAAQzg");
	var mask_5_graphics_128 = new cjs.Graphics().p("EgEmAiqIAAwzIJNAAIAAQzg");
	var mask_5_graphics_129 = new cjs.Graphics().p("EgEoAiqIAAwzIJRAAIAAQzg");
	var mask_5_graphics_130 = new cjs.Graphics().p("EgEqAiqIAAwzIJVAAIAAQzg");
	var mask_5_graphics_131 = new cjs.Graphics().p("EgEtAiqIAAwzIJbAAIAAQzg");
	var mask_5_graphics_132 = new cjs.Graphics().p("EgEvAiqIAAwzIJfAAIAAQzg");
	var mask_5_graphics_133 = new cjs.Graphics().p("EgExAiqIAAwzIJjAAIAAQzg");
	var mask_5_graphics_134 = new cjs.Graphics().p("EgEzAiqIAAwzIJnAAIAAQzg");
	var mask_5_graphics_135 = new cjs.Graphics().p("EgE2AiqIAAwzIJtAAIAAQzg");
	var mask_5_graphics_136 = new cjs.Graphics().p("EgE4AiqIAAwzIJxAAIAAQzg");
	var mask_5_graphics_137 = new cjs.Graphics().p("EgE6AiqIAAwzIJ1AAIAAQzg");
	var mask_5_graphics_138 = new cjs.Graphics().p("EgE8AiqIAAwzIJ5AAIAAQzg");
	var mask_5_graphics_139 = new cjs.Graphics().p("EgE/AiqIAAwzIJ/AAIAAQzg");
	var mask_5_graphics_140 = new cjs.Graphics().p("EgFBAiqIAAwzIKDAAIAAQzg");
	var mask_5_graphics_141 = new cjs.Graphics().p("EgFDAiqIAAwzIKHAAIAAQzg");
	var mask_5_graphics_142 = new cjs.Graphics().p("EgFFAiqIAAwzIKLAAIAAQzg");
	var mask_5_graphics_143 = new cjs.Graphics().p("EgFHAiqIAAwzIKPAAIAAQzg");
	var mask_5_graphics_144 = new cjs.Graphics().p("EgFKAiqIAAwzIKVAAIAAQzg");
	var mask_5_graphics_145 = new cjs.Graphics().p("EgFMAiqIAAwzIKZAAIAAQzg");
	var mask_5_graphics_146 = new cjs.Graphics().p("EgFOAiqIAAwzIKdAAIAAQzg");
	var mask_5_graphics_147 = new cjs.Graphics().p("EgFQAiqIAAwzIKhAAIAAQzg");
	var mask_5_graphics_148 = new cjs.Graphics().p("EgFTAiqIAAwzIKnAAIAAQzg");
	var mask_5_graphics_149 = new cjs.Graphics().p("EgFVAiqIAAwzIKrAAIAAQzg");
	var mask_5_graphics_150 = new cjs.Graphics().p("EgFXAiqIAAwzIKvAAIAAQzg");
	var mask_5_graphics_151 = new cjs.Graphics().p("EgFZAiqIAAwzIKzAAIAAQzg");
	var mask_5_graphics_152 = new cjs.Graphics().p("EgFcAiqIAAwzIK5AAIAAQzg");
	var mask_5_graphics_153 = new cjs.Graphics().p("EgFeAiqIAAwzIK9AAIAAQzg");
	var mask_5_graphics_154 = new cjs.Graphics().p("EgFgAiqIAAwzILBAAIAAQzg");
	var mask_5_graphics_155 = new cjs.Graphics().p("EgFiAiqIAAwzILFAAIAAQzg");
	var mask_5_graphics_156 = new cjs.Graphics().p("EgFlAiqIAAwzILLAAIAAQzg");
	var mask_5_graphics_157 = new cjs.Graphics().p("EgFnAiqIAAwzILPAAIAAQzg");
	var mask_5_graphics_158 = new cjs.Graphics().p("EgFpAiqIAAwzILTAAIAAQzg");
	var mask_5_graphics_159 = new cjs.Graphics().p("EgFrAiqIAAwzILXAAIAAQzg");
	var mask_5_graphics_160 = new cjs.Graphics().p("EgFuAiqIAAwzILdAAIAAQzg");
	var mask_5_graphics_161 = new cjs.Graphics().p("EgFwAiqIAAwzILhAAIAAQzg");
	var mask_5_graphics_162 = new cjs.Graphics().p("EgFyAiqIAAwzILlAAIAAQzg");
	var mask_5_graphics_163 = new cjs.Graphics().p("EgF0AiqIAAwzILpAAIAAQzg");
	var mask_5_graphics_164 = new cjs.Graphics().p("EgF2AiqIAAwzILtAAIAAQzg");
	var mask_5_graphics_165 = new cjs.Graphics().p("EgF5AiqIAAwzILzAAIAAQzg");
	var mask_5_graphics_166 = new cjs.Graphics().p("EgF7AiqIAAwzIL3AAIAAQzg");
	var mask_5_graphics_167 = new cjs.Graphics().p("EgF9AiqIAAwzIL7AAIAAQzg");
	var mask_5_graphics_168 = new cjs.Graphics().p("EgF/AiqIAAwzIL/AAIAAQzg");
	var mask_5_graphics_169 = new cjs.Graphics().p("EgGCAiqIAAwzIMFAAIAAQzg");
	var mask_5_graphics_170 = new cjs.Graphics().p("EgGEAiqIAAwzIMJAAIAAQzg");
	var mask_5_graphics_171 = new cjs.Graphics().p("EgGGAiqIAAwzIMNAAIAAQzg");
	var mask_5_graphics_172 = new cjs.Graphics().p("EgGIAiqIAAwzIMRAAIAAQzg");
	var mask_5_graphics_173 = new cjs.Graphics().p("EgGLAiqIAAwzIMXAAIAAQzg");
	var mask_5_graphics_174 = new cjs.Graphics().p("EgGNAiqIAAwzIMbAAIAAQzg");
	var mask_5_graphics_175 = new cjs.Graphics().p("EgGPAiqIAAwzIMfAAIAAQzg");
	var mask_5_graphics_176 = new cjs.Graphics().p("EgGRAiqIAAwzIMjAAIAAQzg");
	var mask_5_graphics_177 = new cjs.Graphics().p("EgGUAiqIAAwzIMpAAIAAQzg");
	var mask_5_graphics_178 = new cjs.Graphics().p("EgGWAiqIAAwzIMtAAIAAQzg");
	var mask_5_graphics_179 = new cjs.Graphics().p("EgGYAiqIAAwzIMxAAIAAQzg");
	var mask_5_graphics_180 = new cjs.Graphics().p("EgGaAiqIAAwzIM1AAIAAQzg");
	var mask_5_graphics_181 = new cjs.Graphics().p("EgGdAiqIAAwzIM6AAIAAQzg");
	var mask_5_graphics_182 = new cjs.Graphics().p("EgGfAiqIAAwzIM/AAIAAQzg");
	var mask_5_graphics_183 = new cjs.Graphics().p("EgGhAiqIAAwzINDAAIAAQzg");
	var mask_5_graphics_184 = new cjs.Graphics().p("EgGjAiqIAAwzINHAAIAAQzg");
	var mask_5_graphics_185 = new cjs.Graphics().p("EgGlAiqIAAwzINLAAIAAQzg");
	var mask_5_graphics_186 = new cjs.Graphics().p("EgGoAiqIAAwzINRAAIAAQzg");
	var mask_5_graphics_187 = new cjs.Graphics().p("EgGqAiqIAAwzINVAAIAAQzg");
	var mask_5_graphics_188 = new cjs.Graphics().p("EgGsAiqIAAwzINZAAIAAQzg");
	var mask_5_graphics_189 = new cjs.Graphics().p("EgGuAiqIAAwzINdAAIAAQzg");
	var mask_5_graphics_190 = new cjs.Graphics().p("EgGxAiqIAAwzINjAAIAAQzg");
	var mask_5_graphics_191 = new cjs.Graphics().p("EgGzAiqIAAwzINnAAIAAQzg");
	var mask_5_graphics_192 = new cjs.Graphics().p("EgG1AiqIAAwzINrAAIAAQzg");
	var mask_5_graphics_193 = new cjs.Graphics().p("EgG3AiqIAAwzINvAAIAAQzg");
	var mask_5_graphics_194 = new cjs.Graphics().p("EgG6AiqIAAwzIN1AAIAAQzg");
	var mask_5_graphics_195 = new cjs.Graphics().p("EgG8AiqIAAwzIN5AAIAAQzg");
	var mask_5_graphics_196 = new cjs.Graphics().p("EgG+AiqIAAwzIN9AAIAAQzg");
	var mask_5_graphics_197 = new cjs.Graphics().p("EgHAAiqIAAwzIOBAAIAAQzg");
	var mask_5_graphics_198 = new cjs.Graphics().p("EgHDAiqIAAwzIOHAAIAAQzg");
	var mask_5_graphics_199 = new cjs.Graphics().p("EgHFAiqIAAwzIOLAAIAAQzg");
	var mask_5_graphics_200 = new cjs.Graphics().p("EgHHAiqIAAwzIOPAAIAAQzg");
	var mask_5_graphics_201 = new cjs.Graphics().p("EgHJAiqIAAwzIOTAAIAAQzg");
	var mask_5_graphics_202 = new cjs.Graphics().p("EgHLAiqIAAwzIOXAAIAAQzg");
	var mask_5_graphics_203 = new cjs.Graphics().p("EgHOAiqIAAwzIOdAAIAAQzg");
	var mask_5_graphics_204 = new cjs.Graphics().p("EgHQAiqIAAwzIOhAAIAAQzg");
	var mask_5_graphics_205 = new cjs.Graphics().p("EgHSAiqIAAwzIOlAAIAAQzg");
	var mask_5_graphics_206 = new cjs.Graphics().p("EgHUAiqIAAwzIOpAAIAAQzg");
	var mask_5_graphics_207 = new cjs.Graphics().p("EgHXAiqIAAwzIOvAAIAAQzg");
	var mask_5_graphics_208 = new cjs.Graphics().p("EgHZAiqIAAwzIOzAAIAAQzg");
	var mask_5_graphics_209 = new cjs.Graphics().p("EgHbAiqIAAwzIO3AAIAAQzg");
	var mask_5_graphics_210 = new cjs.Graphics().p("EgHdAiqIAAwzIO7AAIAAQzg");
	var mask_5_graphics_211 = new cjs.Graphics().p("EgHgAiqIAAwzIPBAAIAAQzg");
	var mask_5_graphics_212 = new cjs.Graphics().p("EgHiAiqIAAwzIPFAAIAAQzg");
	var mask_5_graphics_213 = new cjs.Graphics().p("EgHkAiqIAAwzIPJAAIAAQzg");
	var mask_5_graphics_214 = new cjs.Graphics().p("EgHmAiqIAAwzIPNAAIAAQzg");
	var mask_5_graphics_215 = new cjs.Graphics().p("EgHpAiqIAAwzIPTAAIAAQzg");
	var mask_5_graphics_216 = new cjs.Graphics().p("EgHrAiqIAAwzIPXAAIAAQzg");
	var mask_5_graphics_217 = new cjs.Graphics().p("EgHtAiqIAAwzIPbAAIAAQzg");
	var mask_5_graphics_218 = new cjs.Graphics().p("EgHvAiqIAAwzIPfAAIAAQzg");
	var mask_5_graphics_219 = new cjs.Graphics().p("EgHyAiqIAAwzIPlAAIAAQzg");
	var mask_5_graphics_220 = new cjs.Graphics().p("EgH0AiqIAAwzIPpAAIAAQzg");
	var mask_5_graphics_221 = new cjs.Graphics().p("EgH2AiqIAAwzIPtAAIAAQzg");
	var mask_5_graphics_222 = new cjs.Graphics().p("EgH4AiqIAAwzIPxAAIAAQzg");
	var mask_5_graphics_223 = new cjs.Graphics().p("EgH6AiqIAAwzIP1AAIAAQzg");
	var mask_5_graphics_224 = new cjs.Graphics().p("EgH9AiqIAAwzIP7AAIAAQzg");
	var mask_5_graphics_225 = new cjs.Graphics().p("EgH/AiqIAAwzIP/AAIAAQzg");
	var mask_5_graphics_226 = new cjs.Graphics().p("EgIBAiqIAAwzIQDAAIAAQzg");
	var mask_5_graphics_227 = new cjs.Graphics().p("EgIDAiqIAAwzIQHAAIAAQzg");
	var mask_5_graphics_228 = new cjs.Graphics().p("EgIGAiqIAAwzIQNAAIAAQzg");
	var mask_5_graphics_229 = new cjs.Graphics().p("EgIIAiqIAAwzIQRAAIAAQzg");
	var mask_5_graphics_230 = new cjs.Graphics().p("EgIKAiqIAAwzIQVAAIAAQzg");
	var mask_5_graphics_231 = new cjs.Graphics().p("EgIMAiqIAAwzIQZAAIAAQzg");
	var mask_5_graphics_232 = new cjs.Graphics().p("EgIPAiqIAAwzIQfAAIAAQzg");
	var mask_5_graphics_233 = new cjs.Graphics().p("EgIRAiqIAAwzIQjAAIAAQzg");
	var mask_5_graphics_234 = new cjs.Graphics().p("EgITAiqIAAwzIQnAAIAAQzg");
	var mask_5_graphics_235 = new cjs.Graphics().p("EgIVAiqIAAwzIQrAAIAAQzg");
	var mask_5_graphics_236 = new cjs.Graphics().p("EgIYAiqIAAwzIQxAAIAAQzg");
	var mask_5_graphics_237 = new cjs.Graphics().p("EgIaAiqIAAwzIQ1AAIAAQzg");
	var mask_5_graphics_238 = new cjs.Graphics().p("EgIcAiqIAAwzIQ5AAIAAQzg");
	var mask_5_graphics_239 = new cjs.Graphics().p("EgIeAiqIAAwzIQ9AAIAAQzg");
	var mask_5_graphics_240 = new cjs.Graphics().p("EgIgAiqIAAwzIRBAAIAAQzg");
	var mask_5_graphics_241 = new cjs.Graphics().p("EgIjAiqIAAwzIRHAAIAAQzg");
	var mask_5_graphics_242 = new cjs.Graphics().p("EgIlAiqIAAwzIRLAAIAAQzg");
	var mask_5_graphics_243 = new cjs.Graphics().p("EgInAiqIAAwzIRPAAIAAQzg");
	var mask_5_graphics_244 = new cjs.Graphics().p("EgIpAiqIAAwzIRTAAIAAQzg");
	var mask_5_graphics_245 = new cjs.Graphics().p("EgIsAiqIAAwzIRZAAIAAQzg");
	var mask_5_graphics_246 = new cjs.Graphics().p("EgIuAiqIAAwzIRdAAIAAQzg");
	var mask_5_graphics_247 = new cjs.Graphics().p("EgIwAiqIAAwzIRhAAIAAQzg");
	var mask_5_graphics_248 = new cjs.Graphics().p("EgIyAiqIAAwzIRlAAIAAQzg");
	var mask_5_graphics_249 = new cjs.Graphics().p("EgI1AiqIAAwzIRrAAIAAQzg");
	var mask_5_graphics_250 = new cjs.Graphics().p("EgI3AiqIAAwzIRvAAIAAQzg");
	var mask_5_graphics_251 = new cjs.Graphics().p("EgI5AiqIAAwzIRzAAIAAQzg");
	var mask_5_graphics_252 = new cjs.Graphics().p("EgI7AiqIAAwzIR3AAIAAQzg");
	var mask_5_graphics_253 = new cjs.Graphics().p("EgI+AiqIAAwzIR9AAIAAQzg");
	var mask_5_graphics_254 = new cjs.Graphics().p("EgJAAiqIAAwzISBAAIAAQzg");
	var mask_5_graphics_255 = new cjs.Graphics().p("EgJCAiqIAAwzISFAAIAAQzg");
	var mask_5_graphics_256 = new cjs.Graphics().p("EgJEAiqIAAwzISJAAIAAQzg");
	var mask_5_graphics_257 = new cjs.Graphics().p("EgJHAiqIAAwzISPAAIAAQzg");
	var mask_5_graphics_258 = new cjs.Graphics().p("EgJJAiqIAAwzISTAAIAAQzg");
	var mask_5_graphics_259 = new cjs.Graphics().p("EgJLAiqIAAwzISXAAIAAQzg");
	var mask_5_graphics_260 = new cjs.Graphics().p("EgJNAiqIAAwzISbAAIAAQzg");
	var mask_5_graphics_261 = new cjs.Graphics().p("EgJPAiqIAAwzISfAAIAAQzg");
	var mask_5_graphics_262 = new cjs.Graphics().p("EgJSAiqIAAwzISlAAIAAQzg");
	var mask_5_graphics_263 = new cjs.Graphics().p("EgJUAiqIAAwzISpAAIAAQzg");
	var mask_5_graphics_264 = new cjs.Graphics().p("EgJWAiqIAAwzIStAAIAAQzg");
	var mask_5_graphics_265 = new cjs.Graphics().p("EgJYAiqIAAwzISxAAIAAQzg");
	var mask_5_graphics_266 = new cjs.Graphics().p("EgJbAiqIAAwzIS3AAIAAQzg");
	var mask_5_graphics_267 = new cjs.Graphics().p("EgJdAiqIAAwzIS7AAIAAQzg");
	var mask_5_graphics_268 = new cjs.Graphics().p("EgJfAiqIAAwzIS/AAIAAQzg");
	var mask_5_graphics_269 = new cjs.Graphics().p("EgJhAiqIAAwzITDAAIAAQzg");
	var mask_5_graphics_270 = new cjs.Graphics().p("EgJkAiqIAAwzITJAAIAAQzg");
	var mask_5_graphics_271 = new cjs.Graphics().p("EgJmAiqIAAwzITNAAIAAQzg");
	var mask_5_graphics_272 = new cjs.Graphics().p("EgJoAiqIAAwzITRAAIAAQzg");
	var mask_5_graphics_273 = new cjs.Graphics().p("EgJqAiqIAAwzITVAAIAAQzg");
	var mask_5_graphics_274 = new cjs.Graphics().p("EgJtAiqIAAwzITbAAIAAQzg");
	var mask_5_graphics_275 = new cjs.Graphics().p("EgJvAiqIAAwzITfAAIAAQzg");
	var mask_5_graphics_276 = new cjs.Graphics().p("EgJxAiqIAAwzITjAAIAAQzg");
	var mask_5_graphics_277 = new cjs.Graphics().p("EgJzAiqIAAwzITnAAIAAQzg");
	var mask_5_graphics_278 = new cjs.Graphics().p("EgJ2AiqIAAwzITtAAIAAQzg");
	var mask_5_graphics_279 = new cjs.Graphics().p("EgJ4AiqIAAwzITxAAIAAQzg");
	var mask_5_graphics_280 = new cjs.Graphics().p("EgJ6AiqIAAwzIT1AAIAAQzg");
	var mask_5_graphics_281 = new cjs.Graphics().p("EgJ8AiqIAAwzIT5AAIAAQzg");
	var mask_5_graphics_282 = new cjs.Graphics().p("EgJ+AiqIAAwzIT9AAIAAQzg");
	var mask_5_graphics_283 = new cjs.Graphics().p("EgKBAiqIAAwzIUDAAIAAQzg");
	var mask_5_graphics_284 = new cjs.Graphics().p("EgKDAiqIAAwzIUHAAIAAQzg");
	var mask_5_graphics_285 = new cjs.Graphics().p("EgKFAiqIAAwzIULAAIAAQzg");
	var mask_5_graphics_286 = new cjs.Graphics().p("EgKHAiqIAAwzIUPAAIAAQzg");
	var mask_5_graphics_287 = new cjs.Graphics().p("EgKKAiqIAAwzIUVAAIAAQzg");
	var mask_5_graphics_288 = new cjs.Graphics().p("EgKMAiqIAAwzIUZAAIAAQzg");
	var mask_5_graphics_289 = new cjs.Graphics().p("EgKOAiqIAAwzIUdAAIAAQzg");
	var mask_5_graphics_290 = new cjs.Graphics().p("EgKQAiqIAAwzIUhAAIAAQzg");
	var mask_5_graphics_291 = new cjs.Graphics().p("EgKTAiqIAAwzIUnAAIAAQzg");
	var mask_5_graphics_292 = new cjs.Graphics().p("EgKVAiqIAAwzIUrAAIAAQzg");
	var mask_5_graphics_293 = new cjs.Graphics().p("EgKXAiqIAAwzIUvAAIAAQzg");
	var mask_5_graphics_294 = new cjs.Graphics().p("EgKZAiqIAAwzIUzAAIAAQzg");
	var mask_5_graphics_295 = new cjs.Graphics().p("EgKcAiqIAAwzIU5AAIAAQzg");
	var mask_5_graphics_296 = new cjs.Graphics().p("EgKeAiqIAAwzIU9AAIAAQzg");
	var mask_5_graphics_297 = new cjs.Graphics().p("EgKgAiqIAAwzIVBAAIAAQzg");
	var mask_5_graphics_298 = new cjs.Graphics().p("EgKiAiqIAAwzIVFAAIAAQzg");
	var mask_5_graphics_299 = new cjs.Graphics().p("EgKkAiqIAAwzIVJAAIAAQzg");
	var mask_5_graphics_300 = new cjs.Graphics().p("EgKnAiqIAAwzIVPAAIAAQzg");
	var mask_5_graphics_301 = new cjs.Graphics().p("EgKpAiqIAAwzIVTAAIAAQzg");
	var mask_5_graphics_302 = new cjs.Graphics().p("EgKrAiqIAAwzIVXAAIAAQzg");
	var mask_5_graphics_303 = new cjs.Graphics().p("EgKtAiqIAAwzIVbAAIAAQzg");
	var mask_5_graphics_304 = new cjs.Graphics().p("EgKwAiqIAAwzIVhAAIAAQzg");
	var mask_5_graphics_305 = new cjs.Graphics().p("EgKyAiqIAAwzIVlAAIAAQzg");
	var mask_5_graphics_306 = new cjs.Graphics().p("EgK0AiqIAAwzIVpAAIAAQzg");
	var mask_5_graphics_307 = new cjs.Graphics().p("EgK2AiqIAAwzIVtAAIAAQzg");
	var mask_5_graphics_308 = new cjs.Graphics().p("EgK5AiqIAAwzIVzAAIAAQzg");
	var mask_5_graphics_309 = new cjs.Graphics().p("EgK7AiqIAAwzIV3AAIAAQzg");
	var mask_5_graphics_310 = new cjs.Graphics().p("EgK9AiqIAAwzIV7AAIAAQzg");
	var mask_5_graphics_311 = new cjs.Graphics().p("EgK/AiqIAAwzIV/AAIAAQzg");
	var mask_5_graphics_312 = new cjs.Graphics().p("EgLCAiqIAAwzIWFAAIAAQzg");
	var mask_5_graphics_313 = new cjs.Graphics().p("EgLEAiqIAAwzIWJAAIAAQzg");
	var mask_5_graphics_314 = new cjs.Graphics().p("EgLGAiqIAAwzIWNAAIAAQzg");
	var mask_5_graphics_315 = new cjs.Graphics().p("EgLIAiqIAAwzIWRAAIAAQzg");
	var mask_5_graphics_316 = new cjs.Graphics().p("EgLLAiqIAAwzIWXAAIAAQzg");
	var mask_5_graphics_317 = new cjs.Graphics().p("EgLNAiqIAAwzIWbAAIAAQzg");
	var mask_5_graphics_318 = new cjs.Graphics().p("EgLPAiqIAAwzIWfAAIAAQzg");
	var mask_5_graphics_319 = new cjs.Graphics().p("EgLRAiqIAAwzIWjAAIAAQzg");
	var mask_5_graphics_320 = new cjs.Graphics().p("EgLTAiqIAAwzIWnAAIAAQzg");
	var mask_5_graphics_321 = new cjs.Graphics().p("EgLWAiqIAAwzIWtAAIAAQzg");
	var mask_5_graphics_322 = new cjs.Graphics().p("EgLYAiqIAAwzIWxAAIAAQzg");
	var mask_5_graphics_323 = new cjs.Graphics().p("EgLaAiqIAAwzIW1AAIAAQzg");
	var mask_5_graphics_324 = new cjs.Graphics().p("EgLcAiqIAAwzIW5AAIAAQzg");
	var mask_5_graphics_325 = new cjs.Graphics().p("EgLfAiqIAAwzIW/AAIAAQzg");
	var mask_5_graphics_326 = new cjs.Graphics().p("EgLhAiqIAAwzIXDAAIAAQzg");
	var mask_5_graphics_327 = new cjs.Graphics().p("EgLjAiqIAAwzIXHAAIAAQzg");
	var mask_5_graphics_328 = new cjs.Graphics().p("EgLlAiqIAAwzIXLAAIAAQzg");
	var mask_5_graphics_329 = new cjs.Graphics().p("EgLoAiqIAAwzIXRAAIAAQzg");
	var mask_5_graphics_330 = new cjs.Graphics().p("EgLqAiqIAAwzIXVAAIAAQzg");
	var mask_5_graphics_331 = new cjs.Graphics().p("EgLsAiqIAAwzIXZAAIAAQzg");
	var mask_5_graphics_332 = new cjs.Graphics().p("EgLuAiqIAAwzIXdAAIAAQzg");
	var mask_5_graphics_333 = new cjs.Graphics().p("EgLxAiqIAAwzIXjAAIAAQzg");
	var mask_5_graphics_334 = new cjs.Graphics().p("EgLzAiqIAAwzIXnAAIAAQzg");
	var mask_5_graphics_335 = new cjs.Graphics().p("EgL1AiqIAAwzIXrAAIAAQzg");
	var mask_5_graphics_336 = new cjs.Graphics().p("EgL3AiqIAAwzIXvAAIAAQzg");
	var mask_5_graphics_337 = new cjs.Graphics().p("EgL6AiqIAAwzIX1AAIAAQzg");
	var mask_5_graphics_338 = new cjs.Graphics().p("EgL8AiqIAAwzIX5AAIAAQzg");
	var mask_5_graphics_339 = new cjs.Graphics().p("EgL+AiqIAAwzIX9AAIAAQzg");
	var mask_5_graphics_340 = new cjs.Graphics().p("EgMAAiqIAAwzIYBAAIAAQzg");
	var mask_5_graphics_341 = new cjs.Graphics().p("EgMCAiqIAAwzIYFAAIAAQzg");
	var mask_5_graphics_342 = new cjs.Graphics().p("EgMFAiqIAAwzIYLAAIAAQzg");
	var mask_5_graphics_343 = new cjs.Graphics().p("EgMHAiqIAAwzIYPAAIAAQzg");
	var mask_5_graphics_344 = new cjs.Graphics().p("EgMJAiqIAAwzIYTAAIAAQzg");
	var mask_5_graphics_345 = new cjs.Graphics().p("EgMLAiqIAAwzIYXAAIAAQzg");
	var mask_5_graphics_346 = new cjs.Graphics().p("EgMOAiqIAAwzIYdAAIAAQzg");
	var mask_5_graphics_347 = new cjs.Graphics().p("EgMQAiqIAAwzIYhAAIAAQzg");
	var mask_5_graphics_348 = new cjs.Graphics().p("EgMSAiqIAAwzIYlAAIAAQzg");
	var mask_5_graphics_349 = new cjs.Graphics().p("EgMUAiqIAAwzIYpAAIAAQzg");
	var mask_5_graphics_350 = new cjs.Graphics().p("EgMXAiqIAAwzIYvAAIAAQzg");
	var mask_5_graphics_351 = new cjs.Graphics().p("EgMZAiqIAAwzIYzAAIAAQzg");
	var mask_5_graphics_352 = new cjs.Graphics().p("EgMbAiqIAAwzIY3AAIAAQzg");
	var mask_5_graphics_353 = new cjs.Graphics().p("EgMdAiqIAAwzIY7AAIAAQzg");
	var mask_5_graphics_354 = new cjs.Graphics().p("EgMgAiqIAAwzIZBAAIAAQzg");
	var mask_5_graphics_355 = new cjs.Graphics().p("EgMiAiqIAAwzIZFAAIAAQzg");
	var mask_5_graphics_356 = new cjs.Graphics().p("EgMkAiqIAAwzIZJAAIAAQzg");
	var mask_5_graphics_357 = new cjs.Graphics().p("EgMmAiqIAAwzIZNAAIAAQzg");
	var mask_5_graphics_358 = new cjs.Graphics().p("EgMoAiqIAAwzIZRAAIAAQzg");
	var mask_5_graphics_359 = new cjs.Graphics().p("EgMrAiqIAAwzIZXAAIAAQzg");
	var mask_5_graphics_360 = new cjs.Graphics().p("EgMtAiqIAAwzIZbAAIAAQzg");
	var mask_5_graphics_361 = new cjs.Graphics().p("EgMvAiqIAAwzIZfAAIAAQzg");
	var mask_5_graphics_362 = new cjs.Graphics().p("EgMxAiqIAAwzIZjAAIAAQzg");
	var mask_5_graphics_363 = new cjs.Graphics().p("EgM0AiqIAAwzIZpAAIAAQzg");
	var mask_5_graphics_364 = new cjs.Graphics().p("EgM2AiqIAAwzIZtAAIAAQzg");
	var mask_5_graphics_365 = new cjs.Graphics().p("EgM4AiqIAAwzIZxAAIAAQzg");
	var mask_5_graphics_366 = new cjs.Graphics().p("EgM6AiqIAAwzIZ1AAIAAQzg");
	var mask_5_graphics_367 = new cjs.Graphics().p("EgM9AiqIAAwzIZ7AAIAAQzg");
	var mask_5_graphics_368 = new cjs.Graphics().p("EgM/AiqIAAwzIZ/AAIAAQzg");
	var mask_5_graphics_369 = new cjs.Graphics().p("EgNBAiqIAAwzIaDAAIAAQzg");
	var mask_5_graphics_370 = new cjs.Graphics().p("EgNDAiqIAAwzIaHAAIAAQzg");
	var mask_5_graphics_371 = new cjs.Graphics().p("EgNGAiqIAAwzIaNAAIAAQzg");
	var mask_5_graphics_372 = new cjs.Graphics().p("EgNIAiqIAAwzIaRAAIAAQzg");
	var mask_5_graphics_373 = new cjs.Graphics().p("EgNKAiqIAAwzIaVAAIAAQzg");
	var mask_5_graphics_374 = new cjs.Graphics().p("EgNMAiqIAAwzIaZAAIAAQzg");
	var mask_5_graphics_375 = new cjs.Graphics().p("EgNPAiqIAAwzIafAAIAAQzg");
	var mask_5_graphics_376 = new cjs.Graphics().p("EgNRAiqIAAwzIajAAIAAQzg");
	var mask_5_graphics_377 = new cjs.Graphics().p("EgNTAiqIAAwzIanAAIAAQzg");
	var mask_5_graphics_378 = new cjs.Graphics().p("EgNVAiqIAAwzIarAAIAAQzg");
	var mask_5_graphics_379 = new cjs.Graphics().p("EgNXAiqIAAwzIavAAIAAQzg");
	var mask_5_graphics_380 = new cjs.Graphics().p("EgNaAiqIAAwzIa1AAIAAQzg");
	var mask_5_graphics_381 = new cjs.Graphics().p("EgNcAiqIAAwzIa5AAIAAQzg");
	var mask_5_graphics_382 = new cjs.Graphics().p("EgNeAiqIAAwzIa9AAIAAQzg");
	var mask_5_graphics_383 = new cjs.Graphics().p("EgNgAiqIAAwzIbBAAIAAQzg");
	var mask_5_graphics_384 = new cjs.Graphics().p("EgNjAiqIAAwzIbHAAIAAQzg");
	var mask_5_graphics_385 = new cjs.Graphics().p("EgNlAiqIAAwzIbLAAIAAQzg");
	var mask_5_graphics_386 = new cjs.Graphics().p("EgNnAiqIAAwzIbPAAIAAQzg");
	var mask_5_graphics_387 = new cjs.Graphics().p("EgNpAiqIAAwzIbTAAIAAQzg");
	var mask_5_graphics_388 = new cjs.Graphics().p("EgNsAiqIAAwzIbZAAIAAQzg");
	var mask_5_graphics_389 = new cjs.Graphics().p("EgNuAiqIAAwzIbdAAIAAQzg");
	var mask_5_graphics_390 = new cjs.Graphics().p("EgNwAiqIAAwzIbhAAIAAQzg");
	var mask_5_graphics_391 = new cjs.Graphics().p("EgNyAiqIAAwzIblAAIAAQzg");
	var mask_5_graphics_392 = new cjs.Graphics().p("EgN1AiqIAAwzIbrAAIAAQzg");
	var mask_5_graphics_393 = new cjs.Graphics().p("EgN3AiqIAAwzIbvAAIAAQzg");
	var mask_5_graphics_394 = new cjs.Graphics().p("EgN5AiqIAAwzIbzAAIAAQzg");
	var mask_5_graphics_395 = new cjs.Graphics().p("EgN7AiqIAAwzIb3AAIAAQzg");
	var mask_5_graphics_396 = new cjs.Graphics().p("EgN+AiqIAAwzIb9AAIAAQzg");
	var mask_5_graphics_397 = new cjs.Graphics().p("EgOAAiqIAAwzIcBAAIAAQzg");
	var mask_5_graphics_398 = new cjs.Graphics().p("EgOCAiqIAAwzIcFAAIAAQzg");
	var mask_5_graphics_399 = new cjs.Graphics().p("EgOEAiqIAAwzIcJAAIAAQzg");
	var mask_5_graphics_400 = new cjs.Graphics().p("EgOGAiqIAAwzIcNAAIAAQzg");
	var mask_5_graphics_401 = new cjs.Graphics().p("EgOJAiqIAAwzIcTAAIAAQzg");
	var mask_5_graphics_402 = new cjs.Graphics().p("EgOLAiqIAAwzIcXAAIAAQzg");
	var mask_5_graphics_403 = new cjs.Graphics().p("EgONAiqIAAwzIcbAAIAAQzg");
	var mask_5_graphics_404 = new cjs.Graphics().p("EgOPAiqIAAwzIcfAAIAAQzg");
	var mask_5_graphics_405 = new cjs.Graphics().p("EgOSAiqIAAwzIclAAIAAQzg");
	var mask_5_graphics_406 = new cjs.Graphics().p("EgOUAiqIAAwzIcpAAIAAQzg");
	var mask_5_graphics_407 = new cjs.Graphics().p("EgOWAiqIAAwzIctAAIAAQzg");
	var mask_5_graphics_408 = new cjs.Graphics().p("EgOYAiqIAAwzIcxAAIAAQzg");
	var mask_5_graphics_409 = new cjs.Graphics().p("EgObAiqIAAwzIc3AAIAAQzg");
	var mask_5_graphics_410 = new cjs.Graphics().p("EgOdAiqIAAwzIc7AAIAAQzg");
	var mask_5_graphics_411 = new cjs.Graphics().p("EgOfAiqIAAwzIc/AAIAAQzg");
	var mask_5_graphics_412 = new cjs.Graphics().p("EgOhAiqIAAwzIdDAAIAAQzg");
	var mask_5_graphics_413 = new cjs.Graphics().p("EgOkAiqIAAwzIdJAAIAAQzg");
	var mask_5_graphics_414 = new cjs.Graphics().p("EgOmAiqIAAwzIdNAAIAAQzg");
	var mask_5_graphics_415 = new cjs.Graphics().p("EgOoAiqIAAwzIdRAAIAAQzg");
	var mask_5_graphics_416 = new cjs.Graphics().p("EgOqAiqIAAwzIdVAAIAAQzg");
	var mask_5_graphics_417 = new cjs.Graphics().p("EgOsAiqIAAwzIdZAAIAAQzg");
	var mask_5_graphics_418 = new cjs.Graphics().p("EgOvAiqIAAwzIdfAAIAAQzg");
	var mask_5_graphics_419 = new cjs.Graphics().p("EgOxAiqIAAwzIdjAAIAAQzg");
	var mask_5_graphics_420 = new cjs.Graphics().p("EgOzAiqIAAwzIdnAAIAAQzg");
	var mask_5_graphics_421 = new cjs.Graphics().p("EgO1AiqIAAwzIdrAAIAAQzg");
	var mask_5_graphics_422 = new cjs.Graphics().p("EgO4AiqIAAwzIdxAAIAAQzg");
	var mask_5_graphics_423 = new cjs.Graphics().p("EgO6AiqIAAwzId1AAIAAQzg");
	var mask_5_graphics_424 = new cjs.Graphics().p("EgO8AiqIAAwzId5AAIAAQzg");
	var mask_5_graphics_425 = new cjs.Graphics().p("EgO+AiqIAAwzId9AAIAAQzg");
	var mask_5_graphics_426 = new cjs.Graphics().p("EgPBAiqIAAwzIeDAAIAAQzg");
	var mask_5_graphics_427 = new cjs.Graphics().p("EgPDAiqIAAwzIeHAAIAAQzg");
	var mask_5_graphics_428 = new cjs.Graphics().p("EgPFAiqIAAwzIeLAAIAAQzg");
	var mask_5_graphics_429 = new cjs.Graphics().p("EgPHAiqIAAwzIePAAIAAQzg");
	var mask_5_graphics_430 = new cjs.Graphics().p("EgPKAiqIAAwzIeVAAIAAQzg");
	var mask_5_graphics_431 = new cjs.Graphics().p("EgPMAiqIAAwzIeZAAIAAQzg");
	var mask_5_graphics_432 = new cjs.Graphics().p("EgPOAiqIAAwzIedAAIAAQzg");
	var mask_5_graphics_433 = new cjs.Graphics().p("EgPQAiqIAAwzIehAAIAAQzg");
	var mask_5_graphics_434 = new cjs.Graphics().p("EgPTAiqIAAwzIenAAIAAQzg");
	var mask_5_graphics_435 = new cjs.Graphics().p("EgPVAiqIAAwzIerAAIAAQzg");
	var mask_5_graphics_436 = new cjs.Graphics().p("EgPXAiqIAAwzIevAAIAAQzg");
	var mask_5_graphics_437 = new cjs.Graphics().p("EgPZAiqIAAwzIezAAIAAQzg");
	var mask_5_graphics_438 = new cjs.Graphics().p("EgPbAiqIAAwzIe3AAIAAQzg");
	var mask_5_graphics_439 = new cjs.Graphics().p("EgPeAiqIAAwzIe9AAIAAQzg");
	var mask_5_graphics_440 = new cjs.Graphics().p("EgPgAiqIAAwzIfBAAIAAQzg");
	var mask_5_graphics_441 = new cjs.Graphics().p("EgPiAiqIAAwzIfFAAIAAQzg");
	var mask_5_graphics_442 = new cjs.Graphics().p("EgPkAiqIAAwzIfJAAIAAQzg");
	var mask_5_graphics_443 = new cjs.Graphics().p("EgPnAiqIAAwzIfPAAIAAQzg");
	var mask_5_graphics_444 = new cjs.Graphics().p("EgPpAiqIAAwzIfTAAIAAQzg");
	var mask_5_graphics_445 = new cjs.Graphics().p("EgPrAiqIAAwzIfXAAIAAQzg");
	var mask_5_graphics_446 = new cjs.Graphics().p("EgPtAiqIAAwzIfbAAIAAQzg");
	var mask_5_graphics_447 = new cjs.Graphics().p("EgPwAiqIAAwzIfhAAIAAQzg");
	var mask_5_graphics_448 = new cjs.Graphics().p("EgPyAiqIAAwzIflAAIAAQzg");
	var mask_5_graphics_449 = new cjs.Graphics().p("EgP0AiqIAAwzIfpAAIAAQzg");
	var mask_5_graphics_450 = new cjs.Graphics().p("EgP2AiqIAAwzIftAAIAAQzg");
	var mask_5_graphics_451 = new cjs.Graphics().p("EgP5AiqIAAwzIfzAAIAAQzg");
	var mask_5_graphics_452 = new cjs.Graphics().p("EgP7AiqIAAwzIf3AAIAAQzg");
	var mask_5_graphics_453 = new cjs.Graphics().p("EgP9AiqIAAwzIf7AAIAAQzg");
	var mask_5_graphics_454 = new cjs.Graphics().p("EgP/AiqIAAwzIf/AAIAAQzg");
	var mask_5_graphics_455 = new cjs.Graphics().p("EgQCAiqIAAwzMAgEAAAIAAQzg");
	var mask_5_graphics_456 = new cjs.Graphics().p("EgQEAiqIAAwzMAgJAAAIAAQzg");
	var mask_5_graphics_457 = new cjs.Graphics().p("EgQGAiqIAAwzMAgNAAAIAAQzg");
	var mask_5_graphics_458 = new cjs.Graphics().p("EgQIAiqIAAwzMAgRAAAIAAQzg");
	var mask_5_graphics_459 = new cjs.Graphics().p("EgQKAiqIAAwzMAgVAAAIAAQzg");
	var mask_5_graphics_460 = new cjs.Graphics().p("EgQNAiqIAAwzMAgbAAAIAAQzg");
	var mask_5_graphics_461 = new cjs.Graphics().p("EgQPAiqIAAwzMAgfAAAIAAQzg");
	var mask_5_graphics_462 = new cjs.Graphics().p("EgQRAiqIAAwzMAgjAAAIAAQzg");
	var mask_5_graphics_463 = new cjs.Graphics().p("EgQTAiqIAAwzMAgnAAAIAAQzg");
	var mask_5_graphics_464 = new cjs.Graphics().p("EgQWAiqIAAwzMAgtAAAIAAQzg");
	var mask_5_graphics_465 = new cjs.Graphics().p("EgQYAiqIAAwzMAgxAAAIAAQzg");
	var mask_5_graphics_466 = new cjs.Graphics().p("EgQaAiqIAAwzMAg1AAAIAAQzg");
	var mask_5_graphics_467 = new cjs.Graphics().p("EgQcAiqIAAwzMAg5AAAIAAQzg");
	var mask_5_graphics_468 = new cjs.Graphics().p("EgQfAiqIAAwzMAg/AAAIAAQzg");
	var mask_5_graphics_469 = new cjs.Graphics().p("EgQhAiqIAAwzMAhDAAAIAAQzg");
	var mask_5_graphics_470 = new cjs.Graphics().p("EgQjAiqIAAwzMAhHAAAIAAQzg");
	var mask_5_graphics_471 = new cjs.Graphics().p("EgQlAiqIAAwzMAhLAAAIAAQzg");
	var mask_5_graphics_472 = new cjs.Graphics().p("EgQoAiqIAAwzMAhRAAAIAAQzg");
	var mask_5_graphics_473 = new cjs.Graphics().p("EgQqAiqIAAwzMAhVAAAIAAQzg");
	var mask_5_graphics_474 = new cjs.Graphics().p("EgQsAiqIAAwzMAhZAAAIAAQzg");
	var mask_5_graphics_475 = new cjs.Graphics().p("EgQuAiqIAAwzMAhdAAAIAAQzg");
	var mask_5_graphics_476 = new cjs.Graphics().p("EgQwAiqIAAwzMAhhAAAIAAQzg");
	var mask_5_graphics_477 = new cjs.Graphics().p("EgQzAiqIAAwzMAhnAAAIAAQzg");
	var mask_5_graphics_478 = new cjs.Graphics().p("EgQ1AiqIAAwzMAhrAAAIAAQzg");
	var mask_5_graphics_479 = new cjs.Graphics().p("EgQ3AiqIAAwzMAhvAAAIAAQzg");
	var mask_5_graphics_480 = new cjs.Graphics().p("EgQ5AiqIAAwzMAhzAAAIAAQzg");
	var mask_5_graphics_481 = new cjs.Graphics().p("EgQ8AiqIAAwzMAh5AAAIAAQzg");
	var mask_5_graphics_482 = new cjs.Graphics().p("EgQ+AiqIAAwzMAh9AAAIAAQzg");
	var mask_5_graphics_483 = new cjs.Graphics().p("EgRAAiqIAAwzMAiBAAAIAAQzg");
	var mask_5_graphics_484 = new cjs.Graphics().p("EgRCAiqIAAwzMAiFAAAIAAQzg");
	var mask_5_graphics_485 = new cjs.Graphics().p("EgRFAiqIAAwzMAiLAAAIAAQzg");
	var mask_5_graphics_486 = new cjs.Graphics().p("EgRHAiqIAAwzMAiPAAAIAAQzg");
	var mask_5_graphics_487 = new cjs.Graphics().p("EgRJAiqIAAwzMAiTAAAIAAQzg");
	var mask_5_graphics_488 = new cjs.Graphics().p("EgRLAiqIAAwzMAiXAAAIAAQzg");
	var mask_5_graphics_489 = new cjs.Graphics().p("EgROAiqIAAwzMAidAAAIAAQzg");
	var mask_5_graphics_490 = new cjs.Graphics().p("EgRQAiqIAAwzMAihAAAIAAQzg");
	var mask_5_graphics_491 = new cjs.Graphics().p("EgRSAiqIAAwzMAilAAAIAAQzg");
	var mask_5_graphics_492 = new cjs.Graphics().p("EgRUAiqIAAwzMAipAAAIAAQzg");
	var mask_5_graphics_493 = new cjs.Graphics().p("EgRXAiqIAAwzMAivAAAIAAQzg");
	var mask_5_graphics_494 = new cjs.Graphics().p("EgRZAiqIAAwzMAizAAAIAAQzg");
	var mask_5_graphics_495 = new cjs.Graphics().p("EgRbAiqIAAwzMAi3AAAIAAQzg");
	var mask_5_graphics_496 = new cjs.Graphics().p("EgRdAiqIAAwzMAi7AAAIAAQzg");
	var mask_5_graphics_497 = new cjs.Graphics().p("EgRfAiqIAAwzMAi/AAAIAAQzg");
	var mask_5_graphics_498 = new cjs.Graphics().p("EgRiAiqIAAwzMAjFAAAIAAQzg");
	var mask_5_graphics_499 = new cjs.Graphics().p("EgRkAiqIAAwzMAjJAAAIAAQzg");
	var mask_5_graphics_500 = new cjs.Graphics().p("EgRmAiqIAAwzMAjNAAAIAAQzg");
	var mask_5_graphics_501 = new cjs.Graphics().p("EgRoAiqIAAwzMAjRAAAIAAQzg");
	var mask_5_graphics_502 = new cjs.Graphics().p("EgRrAiqIAAwzMAjXAAAIAAQzg");
	var mask_5_graphics_503 = new cjs.Graphics().p("EgRtAiqIAAwzMAjbAAAIAAQzg");
	var mask_5_graphics_504 = new cjs.Graphics().p("EgRvAiqIAAwzMAjfAAAIAAQzg");
	var mask_5_graphics_505 = new cjs.Graphics().p("EgRxAiqIAAwzMAjjAAAIAAQzg");
	var mask_5_graphics_506 = new cjs.Graphics().p("EgR0AiqIAAwzMAjpAAAIAAQzg");
	var mask_5_graphics_507 = new cjs.Graphics().p("EgR2AiqIAAwzMAjtAAAIAAQzg");
	var mask_5_graphics_508 = new cjs.Graphics().p("EgR4AiqIAAwzMAjxAAAIAAQzg");
	var mask_5_graphics_509 = new cjs.Graphics().p("EgR6AiqIAAwzMAj1AAAIAAQzg");
	var mask_5_graphics_510 = new cjs.Graphics().p("EgR9AiqIAAwzMAj7AAAIAAQzg");
	var mask_5_graphics_511 = new cjs.Graphics().p("EgR/AiqIAAwzMAj/AAAIAAQzg");
	var mask_5_graphics_512 = new cjs.Graphics().p("EgSBAiqIAAwzMAkDAAAIAAQzg");
	var mask_5_graphics_513 = new cjs.Graphics().p("EgSDAiqIAAwzMAkHAAAIAAQzg");
	var mask_5_graphics_514 = new cjs.Graphics().p("EgSFAiqIAAwzMAkLAAAIAAQzg");
	var mask_5_graphics_515 = new cjs.Graphics().p("EgSIAiqIAAwzMAkRAAAIAAQzg");
	var mask_5_graphics_516 = new cjs.Graphics().p("EgSKAiqIAAwzMAkVAAAIAAQzg");
	var mask_5_graphics_517 = new cjs.Graphics().p("EgSMAiqIAAwzMAkZAAAIAAQzg");
	var mask_5_graphics_518 = new cjs.Graphics().p("EgSOAiqIAAwzMAkdAAAIAAQzg");
	var mask_5_graphics_519 = new cjs.Graphics().p("EgSRAiqIAAwzMAkjAAAIAAQzg");
	var mask_5_graphics_520 = new cjs.Graphics().p("EgSTAiqIAAwzMAknAAAIAAQzg");
	var mask_5_graphics_521 = new cjs.Graphics().p("EgSVAiqIAAwzMAkrAAAIAAQzg");
	var mask_5_graphics_522 = new cjs.Graphics().p("EgSXAiqIAAwzMAkvAAAIAAQzg");
	var mask_5_graphics_523 = new cjs.Graphics().p("EgSaAiqIAAwzMAk1AAAIAAQzg");
	var mask_5_graphics_524 = new cjs.Graphics().p("EgScAiqIAAwzMAk5AAAIAAQzg");
	var mask_5_graphics_525 = new cjs.Graphics().p("EgSeAiqIAAwzMAk9AAAIAAQzg");
	var mask_5_graphics_526 = new cjs.Graphics().p("EgSgAiqIAAwzMAlBAAAIAAQzg");
	var mask_5_graphics_527 = new cjs.Graphics().p("EgSjAiqIAAwzMAlHAAAIAAQzg");
	var mask_5_graphics_528 = new cjs.Graphics().p("EgSlAiqIAAwzMAlLAAAIAAQzg");
	var mask_5_graphics_529 = new cjs.Graphics().p("EgSnAiqIAAwzMAlPAAAIAAQzg");
	var mask_5_graphics_530 = new cjs.Graphics().p("EgSpAiqIAAwzMAlTAAAIAAQzg");
	var mask_5_graphics_531 = new cjs.Graphics().p("EgSsAiqIAAwzMAlZAAAIAAQzg");
	var mask_5_graphics_532 = new cjs.Graphics().p("EgSuAiqIAAwzMAldAAAIAAQzg");
	var mask_5_graphics_533 = new cjs.Graphics().p("EgSwAiqIAAwzMAlhAAAIAAQzg");
	var mask_5_graphics_534 = new cjs.Graphics().p("EgSyAiqIAAwzMAllAAAIAAQzg");
	var mask_5_graphics_535 = new cjs.Graphics().p("EgS0AiqIAAwzMAlpAAAIAAQzg");
	var mask_5_graphics_536 = new cjs.Graphics().p("EgS3AiqIAAwzMAlvAAAIAAQzg");
	var mask_5_graphics_537 = new cjs.Graphics().p("EgS5AiqIAAwzMAlzAAAIAAQzg");
	var mask_5_graphics_538 = new cjs.Graphics().p("EgS7AiqIAAwzMAl3AAAIAAQzg");
	var mask_5_graphics_539 = new cjs.Graphics().p("EgS9AiqIAAwzMAl7AAAIAAQzg");
	var mask_5_graphics_540 = new cjs.Graphics().p("EgTAAiqIAAwzMAmBAAAIAAQzg");
	var mask_5_graphics_541 = new cjs.Graphics().p("EgTCAiqIAAwzMAmFAAAIAAQzg");
	var mask_5_graphics_542 = new cjs.Graphics().p("EgTEAiqIAAwzMAmJAAAIAAQzg");
	var mask_5_graphics_543 = new cjs.Graphics().p("EgTGAiqIAAwzMAmNAAAIAAQzg");
	var mask_5_graphics_544 = new cjs.Graphics().p("EgTJAiqIAAwzMAmTAAAIAAQzg");
	var mask_5_graphics_545 = new cjs.Graphics().p("EgTLAiqIAAwzMAmXAAAIAAQzg");
	var mask_5_graphics_546 = new cjs.Graphics().p("EgTNAiqIAAwzMAmbAAAIAAQzg");
	var mask_5_graphics_547 = new cjs.Graphics().p("EgTPAiqIAAwzMAmfAAAIAAQzg");
	var mask_5_graphics_548 = new cjs.Graphics().p("EgTSAiqIAAwzMAmlAAAIAAQzg");
	var mask_5_graphics_549 = new cjs.Graphics().p("EgTUAiqIAAwzMAmpAAAIAAQzg");
	var mask_5_graphics_550 = new cjs.Graphics().p("EgTWAiqIAAwzMAmtAAAIAAQzg");
	var mask_5_graphics_551 = new cjs.Graphics().p("EgTYAiqIAAwzMAmxAAAIAAQzg");
	var mask_5_graphics_552 = new cjs.Graphics().p("EgTbAiqIAAwzMAm3AAAIAAQzg");
	var mask_5_graphics_553 = new cjs.Graphics().p("EgTdAiqIAAwzMAm7AAAIAAQzg");
	var mask_5_graphics_554 = new cjs.Graphics().p("EgTfAiqIAAwzMAm/AAAIAAQzg");
	var mask_5_graphics_555 = new cjs.Graphics().p("EgThAiqIAAwzMAnDAAAIAAQzg");
	var mask_5_graphics_556 = new cjs.Graphics().p("EgTjAiqIAAwzMAnHAAAIAAQzg");
	var mask_5_graphics_557 = new cjs.Graphics().p("EgTmAiqIAAwzMAnNAAAIAAQzg");
	var mask_5_graphics_558 = new cjs.Graphics().p("EgToAiqIAAwzMAnRAAAIAAQzg");
	var mask_5_graphics_559 = new cjs.Graphics().p("EgTqAiqIAAwzMAnVAAAIAAQzg");
	var mask_5_graphics_560 = new cjs.Graphics().p("EgTsAiqIAAwzMAnZAAAIAAQzg");
	var mask_5_graphics_561 = new cjs.Graphics().p("EgTvAiqIAAwzMAnfAAAIAAQzg");
	var mask_5_graphics_562 = new cjs.Graphics().p("EgTxAiqIAAwzMAnjAAAIAAQzg");
	var mask_5_graphics_563 = new cjs.Graphics().p("EgTzAiqIAAwzMAnnAAAIAAQzg");
	var mask_5_graphics_564 = new cjs.Graphics().p("EgT1AiqIAAwzMAnrAAAIAAQzg");
	var mask_5_graphics_565 = new cjs.Graphics().p("EgT4AiqIAAwzMAnxAAAIAAQzg");
	var mask_5_graphics_566 = new cjs.Graphics().p("EgT6AiqIAAwzMAn1AAAIAAQzg");
	var mask_5_graphics_567 = new cjs.Graphics().p("EgT8AiqIAAwzMAn5AAAIAAQzg");
	var mask_5_graphics_568 = new cjs.Graphics().p("EgT+AiqIAAwzMAn9AAAIAAQzg");
	var mask_5_graphics_569 = new cjs.Graphics().p("EgUBAiqIAAwzMAoDAAAIAAQzg");
	var mask_5_graphics_570 = new cjs.Graphics().p("EgUDAiqIAAwzMAoHAAAIAAQzg");
	var mask_5_graphics_571 = new cjs.Graphics().p("EgUFAiqIAAwzMAoLAAAIAAQzg");
	var mask_5_graphics_572 = new cjs.Graphics().p("EgUHAiqIAAwzMAoPAAAIAAQzg");
	var mask_5_graphics_573 = new cjs.Graphics().p("EgUJAiqIAAwzMAoTAAAIAAQzg");
	var mask_5_graphics_574 = new cjs.Graphics().p("EgUMAiqIAAwzMAoZAAAIAAQzg");
	var mask_5_graphics_575 = new cjs.Graphics().p("EgUOAiqIAAwzMAodAAAIAAQzg");
	var mask_5_graphics_576 = new cjs.Graphics().p("EgUQAiqIAAwzMAohAAAIAAQzg");
	var mask_5_graphics_577 = new cjs.Graphics().p("EgUSAiqIAAwzMAolAAAIAAQzg");
	var mask_5_graphics_578 = new cjs.Graphics().p("EgUVAiqIAAwzMAorAAAIAAQzg");
	var mask_5_graphics_579 = new cjs.Graphics().p("EgUXAiqIAAwzMAovAAAIAAQzg");
	var mask_5_graphics_580 = new cjs.Graphics().p("EgUZAiqIAAwzMAozAAAIAAQzg");
	var mask_5_graphics_581 = new cjs.Graphics().p("EgUbAiqIAAwzMAo3AAAIAAQzg");
	var mask_5_graphics_582 = new cjs.Graphics().p("EgUeAiqIAAwzMAo9AAAIAAQzg");
	var mask_5_graphics_583 = new cjs.Graphics().p("EgUgAiqIAAwzMApBAAAIAAQzg");
	var mask_5_graphics_584 = new cjs.Graphics().p("EgUiAiqIAAwzMApFAAAIAAQzg");
	var mask_5_graphics_585 = new cjs.Graphics().p("EgUkAiqIAAwzMApJAAAIAAQzg");
	var mask_5_graphics_586 = new cjs.Graphics().p("EgUnAiqIAAwzMApPAAAIAAQzg");
	var mask_5_graphics_587 = new cjs.Graphics().p("EgUpAiqIAAwzMApTAAAIAAQzg");
	var mask_5_graphics_588 = new cjs.Graphics().p("EgUrAiqIAAwzMApXAAAIAAQzg");
	var mask_5_graphics_589 = new cjs.Graphics().p("EgUtAiqIAAwzMApbAAAIAAQzg");
	var mask_5_graphics_590 = new cjs.Graphics().p("EgUwAiqIAAwzMAphAAAIAAQzg");
	var mask_5_graphics_591 = new cjs.Graphics().p("EgUyAiqIAAwzMAplAAAIAAQzg");
	var mask_5_graphics_592 = new cjs.Graphics().p("EgU0AiqIAAwzMAppAAAIAAQzg");
	var mask_5_graphics_593 = new cjs.Graphics().p("EgU2AiqIAAwzMAptAAAIAAQzg");
	var mask_5_graphics_594 = new cjs.Graphics().p("EgU4AiqIAAwzMApxAAAIAAQzg");
	var mask_5_graphics_595 = new cjs.Graphics().p("EgU7AiqIAAwzMAp3AAAIAAQzg");
	var mask_5_graphics_596 = new cjs.Graphics().p("EgU9AiqIAAwzMAp7AAAIAAQzg");
	var mask_5_graphics_597 = new cjs.Graphics().p("EgU/AiqIAAwzMAp/AAAIAAQzg");
	var mask_5_graphics_598 = new cjs.Graphics().p("EgVBAiqIAAwzMAqDAAAIAAQzg");
	var mask_5_graphics_599 = new cjs.Graphics().p("EgVEAiqIAAwzMAqJAAAIAAQzg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_5_graphics_1,x:-11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_2,x:-11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_3,x:-11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_4,x:-11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_5,x:-11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_6,x:-11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_7,x:-11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_8,x:-11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_9,x:-11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_10,x:-11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_11,x:-11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_12,x:-11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_13,x:-11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_14,x:-11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_15,x:-11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_16,x:-11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_17,x:-11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_18,x:-11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_19,x:-11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_20,x:-11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_21,x:-11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_22,x:-11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_23,x:-11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_24,x:-11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_25,x:-11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_26,x:-11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_27,x:-11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_28,x:-11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_29,x:-11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_30,x:-11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_31,x:-11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_32,x:-11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_33,x:-11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_34,x:-11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_35,x:-11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_36,x:-11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_37,x:-11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_38,x:-11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_39,x:-11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_40,x:-11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_41,x:-11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_42,x:-11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_43,x:-11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_44,x:-11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_45,x:-11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_46,x:-11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_47,x:-11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_48,x:-11.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_49,x:-11.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_50,x:-10.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_51,x:-10.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_52,x:-10.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_53,x:-10.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_54,x:-10,y:221.9}).wait(1).to({graphics:mask_5_graphics_55,x:-9.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_56,x:-9.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_57,x:-9.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_58,x:-9.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_59,x:-8.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_60,x:-8.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_61,x:-8.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_62,x:-8.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_63,x:-7.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_64,x:-7.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_65,x:-7.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_66,x:-7.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_67,x:-7.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_68,x:-6.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_69,x:-6.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_70,x:-6.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_71,x:-6.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_72,x:-5.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_73,x:-5.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_74,x:-5.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_75,x:-5.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_76,x:-5,y:221.9}).wait(1).to({graphics:mask_5_graphics_77,x:-4.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_78,x:-4.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_79,x:-4.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_80,x:-4.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_81,x:-3.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_82,x:-3.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_83,x:-3.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_84,x:-3.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_85,x:-3,y:221.9}).wait(1).to({graphics:mask_5_graphics_86,x:-2.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_87,x:-2.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_88,x:-2.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_89,x:-2.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_90,x:-1.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_91,x:-1.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_92,x:-1.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_93,x:-1.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_94,x:-1,y:221.9}).wait(1).to({graphics:mask_5_graphics_95,x:-0.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_96,x:-0.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_97,x:-0.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_98,x:-0.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_99,x:0.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_100,x:0.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_101,x:0.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_102,x:0.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_103,x:1,y:221.9}).wait(1).to({graphics:mask_5_graphics_104,x:1.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_105,x:1.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_106,x:1.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_107,x:1.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_108,x:2.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_109,x:2.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_110,x:2.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_111,x:2.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_112,x:3,y:221.9}).wait(1).to({graphics:mask_5_graphics_113,x:3.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_114,x:3.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_115,x:3.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_116,x:3.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_117,x:4.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_118,x:4.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_119,x:4.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_120,x:4.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_121,x:5,y:221.9}).wait(1).to({graphics:mask_5_graphics_122,x:5.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_123,x:5.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_124,x:5.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_125,x:5.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_126,x:6.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_127,x:6.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_128,x:6.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_129,x:6.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_130,x:7,y:221.9}).wait(1).to({graphics:mask_5_graphics_131,x:7.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_132,x:7.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_133,x:7.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_134,x:7.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_135,x:8.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_136,x:8.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_137,x:8.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_138,x:8.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_139,x:9.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_140,x:9.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_141,x:9.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_142,x:9.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_143,x:9.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_144,x:10.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_145,x:10.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_146,x:10.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_147,x:10.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_148,x:11.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_149,x:11.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_150,x:11.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_151,x:11.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_152,x:12,y:221.9}).wait(1).to({graphics:mask_5_graphics_153,x:12.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_154,x:12.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_155,x:12.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_156,x:12.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_157,x:13.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_158,x:13.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_159,x:13.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_160,x:13.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_161,x:14,y:221.9}).wait(1).to({graphics:mask_5_graphics_162,x:14.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_163,x:14.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_164,x:14.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_165,x:14.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_166,x:15.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_167,x:15.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_168,x:15.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_169,x:15.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_170,x:16,y:221.9}).wait(1).to({graphics:mask_5_graphics_171,x:16.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_172,x:16.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_173,x:16.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_174,x:16.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_175,x:17.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_176,x:17.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_177,x:17.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_178,x:17.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_179,x:18,y:221.9}).wait(1).to({graphics:mask_5_graphics_180,x:18.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_181,x:18.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_182,x:18.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_183,x:18.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_184,x:19.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_185,x:19.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_186,x:19.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_187,x:19.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_188,x:20,y:221.9}).wait(1).to({graphics:mask_5_graphics_189,x:20.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_190,x:20.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_191,x:20.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_192,x:20.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_193,x:21.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_194,x:21.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_195,x:21.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_196,x:21.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_197,x:22,y:221.9}).wait(1).to({graphics:mask_5_graphics_198,x:22.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_199,x:22.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_200,x:22.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_201,x:22.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_202,x:23.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_203,x:23.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_204,x:23.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_205,x:23.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_206,x:24,y:221.9}).wait(1).to({graphics:mask_5_graphics_207,x:24.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_208,x:24.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_209,x:24.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_210,x:24.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_211,x:25.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_212,x:25.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_213,x:25.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_214,x:25.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_215,x:26.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_216,x:26.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_217,x:26.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_218,x:26.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_219,x:27,y:221.9}).wait(1).to({graphics:mask_5_graphics_220,x:27.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_221,x:27.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_222,x:27.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_223,x:27.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_224,x:28.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_225,x:28.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_226,x:28.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_227,x:28.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_228,x:29,y:221.9}).wait(1).to({graphics:mask_5_graphics_229,x:29.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_230,x:29.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_231,x:29.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_232,x:29.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_233,x:30.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_234,x:30.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_235,x:30.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_236,x:30.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_237,x:31,y:221.9}).wait(1).to({graphics:mask_5_graphics_238,x:31.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_239,x:31.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_240,x:31.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_241,x:31.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_242,x:32.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_243,x:32.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_244,x:32.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_245,x:32.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_246,x:33,y:221.9}).wait(1).to({graphics:mask_5_graphics_247,x:33.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_248,x:33.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_249,x:33.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_250,x:33.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_251,x:34.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_252,x:34.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_253,x:34.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_254,x:34.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_255,x:35,y:221.9}).wait(1).to({graphics:mask_5_graphics_256,x:35.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_257,x:35.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_258,x:35.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_259,x:35.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_260,x:36.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_261,x:36.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_262,x:36.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_263,x:36.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_264,x:37,y:221.9}).wait(1).to({graphics:mask_5_graphics_265,x:37.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_266,x:37.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_267,x:37.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_268,x:37.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_269,x:38.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_270,x:38.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_271,x:38.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_272,x:38.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_273,x:39,y:221.9}).wait(1).to({graphics:mask_5_graphics_274,x:39.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_275,x:39.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_276,x:39.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_277,x:39.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_278,x:40.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_279,x:40.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_280,x:40.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_281,x:40.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_282,x:41,y:221.9}).wait(1).to({graphics:mask_5_graphics_283,x:41.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_284,x:41.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_285,x:41.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_286,x:41.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_287,x:42.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_288,x:42.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_289,x:42.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_290,x:42.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_291,x:43.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_292,x:43.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_293,x:43.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_294,x:43.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_295,x:44,y:221.9}).wait(1).to({graphics:mask_5_graphics_296,x:44.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_297,x:44.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_298,x:44.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_299,x:44.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_300,x:45.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_301,x:45.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_302,x:45.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_303,x:45.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_304,x:46,y:221.9}).wait(1).to({graphics:mask_5_graphics_305,x:46.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_306,x:46.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_307,x:46.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_308,x:46.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_309,x:47.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_310,x:47.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_311,x:47.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_312,x:47.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_313,x:48,y:221.9}).wait(1).to({graphics:mask_5_graphics_314,x:48.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_315,x:48.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_316,x:48.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_317,x:48.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_318,x:49.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_319,x:49.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_320,x:49.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_321,x:49.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_322,x:50,y:221.9}).wait(1).to({graphics:mask_5_graphics_323,x:50.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_324,x:50.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_325,x:50.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_326,x:50.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_327,x:51.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_328,x:51.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_329,x:51.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_330,x:51.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_331,x:52,y:221.9}).wait(1).to({graphics:mask_5_graphics_332,x:52.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_333,x:52.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_334,x:52.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_335,x:52.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_336,x:53.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_337,x:53.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_338,x:53.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_339,x:53.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_340,x:54,y:221.9}).wait(1).to({graphics:mask_5_graphics_341,x:54.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_342,x:54.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_343,x:54.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_344,x:54.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_345,x:55.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_346,x:55.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_347,x:55.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_348,x:55.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_349,x:56,y:221.9}).wait(1).to({graphics:mask_5_graphics_350,x:56.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_351,x:56.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_352,x:56.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_353,x:56.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_354,x:57.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_355,x:57.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_356,x:57.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_357,x:57.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_358,x:58,y:221.9}).wait(1).to({graphics:mask_5_graphics_359,x:58.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_360,x:58.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_361,x:58.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_362,x:58.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_363,x:59.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_364,x:59.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_365,x:59.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_366,x:59.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_367,x:60.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_368,x:60.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_369,x:60.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_370,x:60.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_371,x:61,y:221.9}).wait(1).to({graphics:mask_5_graphics_372,x:61.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_373,x:61.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_374,x:61.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_375,x:61.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_376,x:62.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_377,x:62.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_378,x:62.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_379,x:62.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_380,x:63,y:221.9}).wait(1).to({graphics:mask_5_graphics_381,x:63.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_382,x:63.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_383,x:63.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_384,x:63.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_385,x:64.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_386,x:64.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_387,x:64.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_388,x:64.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_389,x:65,y:221.9}).wait(1).to({graphics:mask_5_graphics_390,x:65.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_391,x:65.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_392,x:65.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_393,x:65.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_394,x:66.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_395,x:66.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_396,x:66.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_397,x:66.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_398,x:67,y:221.9}).wait(1).to({graphics:mask_5_graphics_399,x:67.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_400,x:67.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_401,x:67.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_402,x:67.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_403,x:68.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_404,x:68.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_405,x:68.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_406,x:68.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_407,x:69,y:221.9}).wait(1).to({graphics:mask_5_graphics_408,x:69.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_409,x:69.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_410,x:69.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_411,x:69.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_412,x:70.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_413,x:70.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_414,x:70.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_415,x:70.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_416,x:71,y:221.9}).wait(1).to({graphics:mask_5_graphics_417,x:71.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_418,x:71.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_419,x:71.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_420,x:71.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_421,x:72.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_422,x:72.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_423,x:72.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_424,x:72.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_425,x:73,y:221.9}).wait(1).to({graphics:mask_5_graphics_426,x:73.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_427,x:73.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_428,x:73.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_429,x:73.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_430,x:74.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_431,x:74.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_432,x:74.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_433,x:74.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_434,x:75.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_435,x:75.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_436,x:75.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_437,x:75.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_438,x:75.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_439,x:76.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_440,x:76.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_441,x:76.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_442,x:76.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_443,x:77.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_444,x:77.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_445,x:77.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_446,x:77.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_447,x:78,y:221.9}).wait(1).to({graphics:mask_5_graphics_448,x:78.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_449,x:78.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_450,x:78.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_451,x:78.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_452,x:79.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_453,x:79.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_454,x:79.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_455,x:79.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_456,x:80,y:221.9}).wait(1).to({graphics:mask_5_graphics_457,x:80.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_458,x:80.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_459,x:80.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_460,x:80.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_461,x:81.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_462,x:81.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_463,x:81.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_464,x:81.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_465,x:82,y:221.9}).wait(1).to({graphics:mask_5_graphics_466,x:82.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_467,x:82.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_468,x:82.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_469,x:82.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_470,x:83.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_471,x:83.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_472,x:83.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_473,x:83.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_474,x:84,y:221.9}).wait(1).to({graphics:mask_5_graphics_475,x:84.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_476,x:84.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_477,x:84.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_478,x:84.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_479,x:85.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_480,x:85.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_481,x:85.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_482,x:85.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_483,x:86,y:221.9}).wait(1).to({graphics:mask_5_graphics_484,x:86.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_485,x:86.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_486,x:86.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_487,x:86.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_488,x:87.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_489,x:87.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_490,x:87.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_491,x:87.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_492,x:88,y:221.9}).wait(1).to({graphics:mask_5_graphics_493,x:88.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_494,x:88.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_495,x:88.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_496,x:88.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_497,x:89.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_498,x:89.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_499,x:89.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_500,x:89.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_501,x:90,y:221.9}).wait(1).to({graphics:mask_5_graphics_502,x:90.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_503,x:90.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_504,x:90.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_505,x:90.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_506,x:91.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_507,x:91.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_508,x:91.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_509,x:91.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_510,x:92.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_511,x:92.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_512,x:92.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_513,x:92.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_514,x:92.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_515,x:93.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_516,x:93.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_517,x:93.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_518,x:93.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_519,x:94.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_520,x:94.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_521,x:94.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_522,x:94.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_523,x:95,y:221.9}).wait(1).to({graphics:mask_5_graphics_524,x:95.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_525,x:95.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_526,x:95.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_527,x:95.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_528,x:96.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_529,x:96.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_530,x:96.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_531,x:96.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_532,x:97,y:221.9}).wait(1).to({graphics:mask_5_graphics_533,x:97.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_534,x:97.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_535,x:97.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_536,x:97.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_537,x:98.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_538,x:98.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_539,x:98.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_540,x:98.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_541,x:99,y:221.9}).wait(1).to({graphics:mask_5_graphics_542,x:99.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_543,x:99.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_544,x:99.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_545,x:99.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_546,x:100.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_547,x:100.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_548,x:100.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_549,x:100.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_550,x:101,y:221.9}).wait(1).to({graphics:mask_5_graphics_551,x:101.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_552,x:101.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_553,x:101.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_554,x:101.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_555,x:102.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_556,x:102.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_557,x:102.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_558,x:102.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_559,x:103,y:221.9}).wait(1).to({graphics:mask_5_graphics_560,x:103.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_561,x:103.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_562,x:103.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_563,x:103.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_564,x:104.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_565,x:104.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_566,x:104.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_567,x:104.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_568,x:105,y:221.9}).wait(1).to({graphics:mask_5_graphics_569,x:105.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_570,x:105.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_571,x:105.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_572,x:105.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_573,x:106.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_574,x:106.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_575,x:106.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_576,x:106.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_577,x:107,y:221.9}).wait(1).to({graphics:mask_5_graphics_578,x:107.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_579,x:107.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_580,x:107.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_581,x:107.9,y:221.9}).wait(1).to({graphics:mask_5_graphics_582,x:108.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_583,x:108.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_584,x:108.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_585,x:108.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_586,x:109.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_587,x:109.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_588,x:109.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_589,x:109.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_590,x:110,y:221.9}).wait(1).to({graphics:mask_5_graphics_591,x:110.2,y:221.9}).wait(1).to({graphics:mask_5_graphics_592,x:110.4,y:221.9}).wait(1).to({graphics:mask_5_graphics_593,x:110.6,y:221.9}).wait(1).to({graphics:mask_5_graphics_594,x:110.8,y:221.9}).wait(1).to({graphics:mask_5_graphics_595,x:111.1,y:221.9}).wait(1).to({graphics:mask_5_graphics_596,x:111.3,y:221.9}).wait(1).to({graphics:mask_5_graphics_597,x:111.5,y:221.9}).wait(1).to({graphics:mask_5_graphics_598,x:111.7,y:221.9}).wait(1).to({graphics:mask_5_graphics_599,x:112,y:221.9}).wait(1));

	// graph
	this.instance_40 = new lib.WaterGraph2();
	this.instance_40.setTransform(112.3,390.1,0.872,0.872,0,0,0,155.1,62);
	this.instance_40._off = true;

	this.instance_40.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(1).to({_off:false},0).wait(599));

	// Graph Backgound
	this.instance_41 = new lib.GraphBackground();
	this.instance_41.setTransform(111.4,389.4,0.868,0.868,0,0,0,38.1,496.4);
	this.instance_41.alpha = 0.328;

	this.instance_42 = new lib.GraphBackground();
	this.instance_42.setTransform(-166.8,389.4,0.868,0.868,0,0,0,38.1,496.4);
	this.instance_42.alpha = 0.328;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_42},{t:this.instance_41}]},1).wait(599));

	// Temp Events
	this.instance_43 = new lib.AbColdWinter1();
	this.instance_43.setTransform(525.9,413.6,1,1,0,0,0,129.9,71);

	this.instance_44 = new lib.AbColdWinter2();
	this.instance_44.setTransform(523,413.6,1,1,0,0,0,129.9,71);

	this.instance_45 = new lib.AbColdSpring();
	this.instance_45.setTransform(524,413.6,1,1,0,0,0,129.9,71);

	this.instance_46 = new lib.AbColdSummer1();
	this.instance_46.setTransform(524,379,1,1,0,0,0,129.9,35.5);

	this.instance_47 = new lib.AbColdSummer2();
	this.instance_47.setTransform(522,413.6,1,1,0,0,0,129.9,71);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_43}]},19).to({state:[]},5).to({state:[{t:this.instance_44}]},10).to({state:[]},5).to({state:[{t:this.instance_45}]},110).to({state:[]},6).to({state:[{t:this.instance_46}]},4).to({state:[]},2).to({state:[{t:this.instance_47}]},3).to({state:[]},2).to({state:[]},1).wait(433));

	// Precip Events
	this.abdrywinter = new lib.AbDryWinter();
	this.abdrywinter.setTransform(524,444.9,1,1,0,0,0,129.9,102);

	this.abdryspring1 = new lib.AbDrySpring1();
	this.abdryspring1.setTransform(533,445.9,1,1,0,0,0,129.9,102);

	this.abdryspring2 = new lib.AbDrySpring2();
	this.abdryspring2.setTransform(526.9,448.9,1,1,0,0,0,129.9,102);

	this.abdryspring3 = new lib.AbDrySpring3();
	this.abdryspring3.setTransform(526,446.9,1,1,0,0,0,129.9,102);

	this.abdrysummer1 = new lib.AbDrySummer1();
	this.abdrysummer1.setTransform(526.9,482,1,1,0,0,0,129.9,133.2);

	this.abdrysummer2 = new lib.AbDrySummer2();
	this.abdrysummer2.setTransform(530,450.9,1,1,0,0,0,129.9,102);

	this.abdrysummer3 = new lib.AbDrySummer3();
	this.abdrysummer3.setTransform(527,449.9,1,1,0,0,0,129.9,102);

	this.abdrysummer4 = new lib.AbDrySummer4();
	this.abdrysummer4.setTransform(526,447.9,1,1,0,0,0,129.9,102);

	this.abdryfall1 = new lib.AbDryFall1();
	this.abdryfall1.setTransform(525,446.9,1,1,0,0,0,129.9,102);

	this.abdryfall2 = new lib.AbDryFall2();
	this.abdryfall2.setTransform(526,447.9,1,1,0,0,0,129.9,102);

	this.abdryfall3 = new lib.AbDryFall3();
	this.abdryfall3.setTransform(521.9,447.9,1,1,0,0,0,129.9,102);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.abdrywinter}]},4).to({state:[]},8).to({state:[{t:this.abdryspring1}]},157).to({state:[]},5).to({state:[{t:this.abdryspring2}]},10).to({state:[]},4).to({state:[{t:this.abdryspring3}]},11).to({state:[]},3).to({state:[{t:this.abdrysummer1}]},127).to({state:[]},4).to({state:[{t:this.abdrysummer2}]},11).to({state:[]},4).to({state:[{t:this.abdrysummer3}]},11).to({state:[]},4).to({state:[{t:this.abdrysummer4}]},16).to({state:[]},8).to({state:[{t:this.abdryfall1}]},82).to({state:[]},3).to({state:[{t:this.abdryfall2}]},12).to({state:[]},3).to({state:[{t:this.abdryfall3}]},12).to({state:[]},13).wait(88));

	// text box control
	this.next_2 = new lib.NextButton();
	this.next_2.setTransform(424,461,1,1,0,0,0,29.5,15);
	this.next_2._off = true;

	this.NObutton = new lib.NObutton();
	this.NObutton.setTransform(446,461,1,1,0,0,0,126.5,16.9);

	this.YESbutton = new lib.YESbutton();
	this.YESbutton.setTransform(406.8,462,1,1,0,0,0,129.6,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.next_2}]},4).to({state:[]},8).to({state:[{t:this.next_2}]},7).to({state:[]},5).to({state:[{t:this.next_2}]},10).to({state:[]},5).to({state:[{t:this.YESbutton,p:{x:406.8,y:462}},{t:this.NObutton,p:{x:446,y:461}}]},110).to({state:[]},6).to({state:[{t:this.next_2}]},4).to({state:[]},2).to({state:[{t:this.next_2}]},3).to({state:[]},2).to({state:[{t:this.YESbutton,p:{x:405.4,y:463.1}},{t:this.NObutton,p:{x:455.2,y:463.1}}]},3).to({state:[]},5).to({state:[{t:this.next_2}]},10).to({state:[]},4).to({state:[{t:this.next_2}]},11).to({state:[]},3).to({state:[{t:this.next_2}]},127).to({state:[]},4).to({state:[{t:this.next_2}]},11).to({state:[]},4).to({state:[{t:this.next_2}]},11).to({state:[]},4).to({state:[{t:this.next_2}]},16).to({state:[]},8).to({state:[{t:this.next_2}]},82).to({state:[]},3).to({state:[{t:this.next_2}]},12).to({state:[]},3).to({state:[{t:this.next_2}]},12).to({state:[]},13).wait(88));
	this.timeline.addTween(cjs.Tween.get(this.next_2).wait(4).to({_off:false},0).to({_off:true},8).wait(7).to({_off:false},0).to({_off:true},5).wait(10).to({_off:false},0).to({_off:true},5).wait(120).to({_off:false},0).to({_off:true},2).wait(3).to({_off:false},0).to({_off:true},2).wait(18).to({_off:false},0).to({_off:true},4).wait(11).to({_off:false},0).to({_off:true},3).wait(127).to({_off:false},0).to({_off:true},4).wait(11).to({_off:false},0).to({_off:true},4).wait(11).to({_off:false},0).to({_off:true},4).wait(16).to({_off:false},0).to({_off:true},8).wait(82).to({_off:false},0).to({_off:true},3).wait(12).to({_off:false},0).to({_off:true},3).wait(12).to({_off:false},0).to({_off:true},13).wait(88));

	// Text Box
	this.instance_48 = new lib.rectangle();
	this.instance_48.setTransform(524.9,390.1,1,1,0,0,0,136.9,52);
	this.instance_48._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(1).to({_off:false},0).wait(599));

	// droplet
	this.instance_49 = new lib.droplet();
	this.instance_49.setTransform(-94,-246.9,0.426,0.426,0,0,0,-3.6,35.6);

	this.instance_50 = new lib.droplet();
	this.instance_50.setTransform(446,-279.9,0.426,0.426,0,0,0,-3.6,35.6);

	this.drop2 = new lib.droplet();
	this.drop2.setTransform(-122,132,0.426,0.426,0,0,0,-3.6,35.6);

	this.drop1 = new lib.droplet();
	this.drop1.setTransform(335,391,0.426,0.426,0,0,0,-3.6,35.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.drop1},{t:this.drop2},{t:this.instance_50},{t:this.instance_49}]}).to({state:[{t:this.drop1},{t:this.drop2},{t:this.instance_50},{t:this.instance_49}]},599).wait(1));

	// image
	this.instance_51 = new lib.Suburbia();
	this.instance_51.setTransform(-323,-502.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(600));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323,-502.5,1224,987);


// stage content:



(lib.LIDcity = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var mainTimeline = this;
		
		
		mainTimeline.button1.on("click", function(){
			
			mainTimeline.SuburbiaAbColdAbDry.visible = true;
			mainTimeline.SuburbiaAbColdAbDry.play();
			});
		
		mainTimeline.button2.on("click", function(){
			
			mainTimeline.SuburbiaAbColdAbWet.visible = true;
			mainTimeline.SuburbiaAbColdAbWet.play();
			});
			
		mainTimeline.button3.on("click", function(){
			
			mainTimeline.SuburbiaAbColdNormal.visible = true;
			mainTimeline.SuburbiaAbColdNormal.play();
			});
			
		mainTimeline.button4.on("click", function(){
			
			mainTimeline.SuburbiaAbHotAbDry.visible = true;
			mainTimeline.SuburbiaAbHotAbDry.play();
			});
			
		mainTimeline.button5.on("click", function(){
			
			mainTimeline.SuburbiaAbHotAbWet.visible = true;
			mainTimeline.SuburbiaAbHotAbWet.play();
			});
			
		mainTimeline.button6.on("click", function(){
			
			mainTimeline.SuburbiaAbHotNormal.visible = true;
			mainTimeline.SuburbiaAbHotNormal.play();
			});
			
		mainTimeline.button7.on("click", function(){
			
			mainTimeline.SuburbiaNormalAbDry.visible = true;
			mainTimeline.SuburbiaNormalAbDry.play();
			});
			
		mainTimeline.button8.on("click", function(){
			
			mainTimeline.SuburbiaNormalAbWet.visible = true;
			mainTimeline.SuburbiaNormalAbWet.play();
			});
				
		mainTimeline.button9.on("click", function(){
			
			mainTimeline.SuburbiaNormalNormal.visible = true;
			mainTimeline.SuburbiaNormalNormal.play();
			});
			
		mainTimeline.button10.on("click", function(){
			
			mainTimeline.LIDCityAbColdAbDry.visible = true;
			mainTimeline.LIDCityAbColdAbDry.play();
			});
		
		mainTimeline.button11.on("click", function(){
			
			mainTimeline.LIDCityAbColdAbWet.visible = true;
			mainTimeline.LIDCityAbColdAbWet.play();
			});
			
		mainTimeline.button12.on("click", function(){
			
			mainTimeline.LIDCityAbColdNormal.visible = true;
			mainTimeline.LIDCityAbColdNormal.play();
			});
			
		mainTimeline.button13.on("click", function(){
			
			mainTimeline.LIDCityAbHotAbDry.visible = true;
			mainTimeline.LIDCityAbHotAbDry.play();
			});
			
		mainTimeline.button14.on("click", function(){
			
			mainTimeline.LIDCityAbHotAbWet.visible = true;
			mainTimeline.LIDCityAbHotAbWet.play();
			});
			
		mainTimeline.button15.on("click", function(){
			
			mainTimeline.LIDCityAbHotNormal.visible = true;
			mainTimeline.LIDCityAbHotNormal.play();
			});
			
		mainTimeline.button16.on("click", function(){
			
			mainTimeline.LIDCityNormalAbDry.visible = true;
			mainTimeline.LIDCityNormalAbDry.play();
			});
			
		mainTimeline.button17.on("click", function(){
			
			mainTimeline.LIDCityNormalAbWet.visible = true;
			mainTimeline.LIDCityNormalAbWet.play();
			});
				
		mainTimeline.button18.on("click", function(){
			
			mainTimeline.LIDCityNormalNormal.visible = true;
			mainTimeline.LIDCityNormalNormal.play();
			});
			
		mainTimeline.button19.on("click", function(){
			
			mainTimeline.MetropolisAbColdAbDry.visible = true;
			mainTimeline.MetropolisAbColdAbDry.play();
			});
		
		mainTimeline.button20.on("click", function(){
			
			mainTimeline.MetropolisAbColdAbWet.visible = true;
			mainTimeline.MetropolisAbColdAbWet.play();
			});
			
		mainTimeline.button21.on("click", function(){
			
			mainTimeline.MetropolisAbColdNormal.visible = true;
			mainTimeline.MetropolisAbColdNormal.play();
			});
			
		mainTimeline.button22.on("click", function(){
			
			mainTimeline.MetropolisAbHotAbDry.visible = true;
			mainTimeline.MetropolisAbHotAbDry.play();
			});
			
		mainTimeline.button23.on("click", function(){
			
			mainTimeline.MetropolisAbHotAbWet.visible = true;
			mainTimeline.MetropolisAbHotAbWet.play();
			});
			
		mainTimeline.button24.on("click", function(){
			
			mainTimeline.MetropolisAbHotNormal.visible = true;
			mainTimeline.MetropolisAbHotNormal.play();
			});
			
		mainTimeline.button25.on("click", function(){
			
			mainTimeline.MetropolisNormalAbDry.visible = true;
			mainTimeline.MetropolisNormalAbDry.play();
			});
			
		mainTimeline.button26.on("click", function(){
			
			mainTimeline.MetropolisNormalAbWet.visible = true;
			mainTimeline.MetropolisNormalAbWet.play();
			});
				
		mainTimeline.button27.on("click", function(){
			
			mainTimeline.MetropolisNormalNormal.visible = true;
			mainTimeline.MetropolisNormalNormal.play();
			});
			
		mainTimeline.button28.on("click", function(){
			
			mainTimeline.FarmAbColdAbDry.visible = true;
			mainTimeline.FarmAbColdAbDry.play();
			});
		
		mainTimeline.button29.on("click", function(){
			
			mainTimeline.FarmAbColdAbWet.visible = true;
			mainTimeline.FarmAbColdAbWet.play();
			});
			
		mainTimeline.button30.on("click", function(){
			
			mainTimeline.FarmAbColdNormal.visible = true;
			mainTimeline.FarmAbColdNormal.play();
			});
			
		mainTimeline.button31.on("click", function(){
			
			mainTimeline.FarmAbHotAbDry.visible = true;
			mainTimeline.FarmAbHotAbDry.play();
			});
			
		mainTimeline.button32.on("click", function(){
			
			mainTimeline.FarmAbHotAbWet.visible = true;
			mainTimeline.FarmAbHotAbWet.play();
			});
			
		mainTimeline.button33.on("click", function(){
			
			mainTimeline.FarmAbHotNormal.visible = true;
			mainTimeline.FarmAbHotNormal.play();
			});
			
		mainTimeline.button34.on("click", function(){
			
			mainTimeline.FarmNormalAbDry.visible = true;
			mainTimeline.FarmNormalAbDry.play();
			});
			
		mainTimeline.button35.on("click", function(){
			
			mainTimeline.FarmNormalAbWet.visible = true;
			mainTimeline.FarmNormalAbWet.play();
			});
				
		mainTimeline.button36.on("click", function(){
			
			mainTimeline.FarmNormalNormal.visible = true;
			mainTimeline.FarmNormalNormal.play();
			});
			
		
		
		this.SuburbiaClose.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		
		function fl_MouseClickHandler_2()
		{
			mainTimeline.SuburbiaDescription.visible = false;	
			mainTimeline.SuburbiaClose.visible = false;		
			mainTimeline.button1.visible = false;
			mainTimeline.button2.visible = false;
			mainTimeline.button3.visible = false;
			mainTimeline.button4.visible = false;
			mainTimeline.button5.visible = false;
			mainTimeline.button6.visible = false;
			mainTimeline.button7.visible = false;
			mainTimeline.button8.visible = false;
			mainTimeline.button9.visible = false;
			mainTimeline.LIDCity.visible = true;
			mainTimeline.LIDCityInfo.visible = true;
			mainTimeline.Metropolis.visible = true;
			mainTimeline.MetropolisInfo.visible = true;
			mainTimeline.FarmTown.visible = true;
			mainTimeline.FarmInfo.visible = true;
		}
		
		this.LIDClose.addEventListener("click", fl_MouseClickHandler_7.bind(this));
		
		function fl_MouseClickHandler_7()
		{
			mainTimeline.LIDCityDescription.visible = false;
			mainTimeline.LIDClose.visible = false;	
			mainTimeline.button10.visible = false;
			mainTimeline.button11.visible = false;
			mainTimeline.button12.visible = false;
			mainTimeline.button13.visible = false;
			mainTimeline.button14.visible = false;
			mainTimeline.button15.visible = false;
			mainTimeline.button16.visible = false;
			mainTimeline.button17.visible = false;
			mainTimeline.button18.visible = false;
			mainTimeline.Suburbia.visible = true;
			mainTimeline.SuburbiaInfo.visible = true;
			mainTimeline.Metropolis.visible = true;
			mainTimeline.MetropolisInfo.visible = true;	
			mainTimeline.FarmTown.visible = true;
			mainTimeline.FarmInfo.visible = true;
		}
		
		this.MetropolisClose.addEventListener("click", fl_MouseClickHandler_9.bind(this));
		
		function fl_MouseClickHandler_9()
		{
			mainTimeline.MetropolisDescription.visible = false;
			mainTimeline.MetropolisClose.visible = false;	
			mainTimeline.button19.visible = false;
			mainTimeline.button20.visible = false;
			mainTimeline.button21.visible = false;
			mainTimeline.button22.visible = false;
			mainTimeline.button23.visible = false;
			mainTimeline.button24.visible = false;
			mainTimeline.button25.visible = false;
			mainTimeline.button26.visible = false;
			mainTimeline.button27.visible = false;
			mainTimeline.Suburbia.visible = true;
			mainTimeline.SuburbiaInfo.visible = true;
			mainTimeline.FarmTown.visible = true;
			mainTimeline.FarmInfo.visible = true;	
			mainTimeline.LIDCity.visible = true;
			mainTimeline.LIDCityInfo.visible = true;
		}
		
		this.FarmClose.addEventListener("click", fl_MouseClickHandler_3.bind(this));
		
		function fl_MouseClickHandler_3()
		{
			mainTimeline.FarmTownDescription.visible = false;
			mainTimeline.FarmClose.visible = false;	
			mainTimeline.button28.visible = false;
			mainTimeline.button29.visible = false;
			mainTimeline.button30.visible = false;
			mainTimeline.button31.visible = false;
			mainTimeline.button32.visible = false;
			mainTimeline.button33.visible = false;
			mainTimeline.button34.visible = false;
			mainTimeline.button35.visible = false;
			mainTimeline.button36.visible = false;
			mainTimeline.Suburbia.visible = true;
			mainTimeline.SuburbiaInfo.visible = true;
			mainTimeline.Metropolis.visible = true;
			mainTimeline.MetropolisInfo.visible = true;	
			mainTimeline.LIDCity.visible = true;
			mainTimeline.LIDCityInfo.visible = true;
		}
		
		this.SuburbiaInfo.addEventListener("click", fl_MouseClickHandler_4.bind(this));
		
		function fl_MouseClickHandler_4()
		{
			mainTimeline.SuburbiaDescription.visible = true;	
			mainTimeline.SuburbiaClose.visible = true;	
			mainTimeline.button1.visible = true;
			mainTimeline.button2.visible = true;
			mainTimeline.button3.visible = true;
			mainTimeline.button4.visible = true;
			mainTimeline.button5.visible = true;
			mainTimeline.button6.visible = true;
			mainTimeline.button7.visible = true;
			mainTimeline.button8.visible = true;
			mainTimeline.button9.visible = true;
			mainTimeline.LIDCity.visible = false;
			mainTimeline.LIDCityInfo.visible = false;
			mainTimeline.LIDClose.visible = false;
			mainTimeline.Metropolis.visible = false;
			mainTimeline.MetropolisInfo.visible = false;
			mainTimeline.MetropolisClose.visible = false;	
			mainTimeline.FarmTown.visible = false;
			mainTimeline.FarmInfo.visible = false;
			mainTimeline.FarmClose.visible = false;
		}
		
		this.LIDCityInfo.addEventListener("click", fl_MouseClickHandler_5.bind(this));
		
		function fl_MouseClickHandler_5()
		{
			mainTimeline.LIDCityDescription.visible = true;
			mainTimeline.LIDClose.visible = true;
			mainTimeline.button10.visible = true;
			mainTimeline.button11.visible = true;
			mainTimeline.button12.visible = true;
			mainTimeline.button13.visible = true;
			mainTimeline.button14.visible = true;
			mainTimeline.button15.visible = true;
			mainTimeline.button16.visible = true;
			mainTimeline.button17.visible = true;
			mainTimeline.button18.visible = true;
			mainTimeline.Suburbia.visible = false;
			mainTimeline.SuburbiaInfo.visible = false;
			mainTimeline.SuburbiaClose.visible = false;
			mainTimeline.Metropolis.visible = false;
			mainTimeline.MetropolisInfo.visible = false;
			mainTimeline.MetropolisClose.visible = false;	
			mainTimeline.FarmTown.visible = false;
			mainTimeline.FarmInfo.visible = false;
			mainTimeline.FarmClose.visible = false;
		}
		
		this.MetropolisInfo.addEventListener("click", fl_MouseClickHandler_6.bind(this));
		
		function fl_MouseClickHandler_6()
		{
			mainTimeline.MetropolisDescription.visible = true;
			mainTimeline.MetropolisClose.visible = true;	
			mainTimeline.button19.visible = true;
			mainTimeline.button20.visible = true;
			mainTimeline.button21.visible = true;
			mainTimeline.button22.visible = true;
			mainTimeline.button23.visible = true;
			mainTimeline.button24.visible = true;
			mainTimeline.button25.visible = true;
			mainTimeline.button26.visible = true;
			mainTimeline.button27.visible = true;
			mainTimeline.Suburbia.visible = false;
			mainTimeline.SuburbiaInfo.visible = false;
			mainTimeline.SuburbiaClose.visible = false;
			mainTimeline.FarmTown.visible = false;
			mainTimeline.FarmInfo.visible = false;
			mainTimeline.FarmClose.visible = false;	
			mainTimeline.LIDCity.visible = false;
			mainTimeline.LIDCityInfo.visible = false;
			mainTimeline.LIDClose.visible = false;
		}
		
		this.FarmInfo.addEventListener("click", fl_MouseClickHandler_8.bind(this));
		
		function fl_MouseClickHandler_8()
		{
			mainTimeline.FarmTownDescription.visible = true;
			mainTimeline.FarmClose.visible = true;
			mainTimeline.button28.visible = true;
			mainTimeline.button29.visible = true;
			mainTimeline.button30.visible = true;
			mainTimeline.button31.visible = true;
			mainTimeline.button32.visible = true;
			mainTimeline.button33.visible = true;
			mainTimeline.button34.visible = true;
			mainTimeline.button35.visible = true;
			mainTimeline.button36.visible = true;
			mainTimeline.Suburbia.visible = false;
			mainTimeline.SuburbiaInfo.visible = false;
			mainTimeline.SuburbiaClose.visible = false;
			mainTimeline.Metropolis.visible = false;
			mainTimeline.MetropolisInfo.visible = false;
			mainTimeline.MetropolisClose.visible = false;	
			mainTimeline.LIDCity.visible = false;
			mainTimeline.LIDCityInfo.visible = false;
			mainTimeline.LIDClose.visible = false;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// abcold abdry
	this.FarmAbColdAbDry = new lib.AbColdAbDryWatershed();
	this.FarmAbColdAbDry.setTransform(483.3,375.5,0.762,0.762,0,0,0,293.5,-10);
	this.FarmAbColdAbDry.visible = false;

	this.MetropolisAbColdAbDry = new lib.abcoldabdrywatershed();
	this.MetropolisAbColdAbDry.setTransform(482.1,376.6,0.762,0.762,0,0,0,293.6,-7.5);
	this.MetropolisAbColdAbDry.visible = false;

	this.LIDCityAbColdAbDry = new lib.abcoldabdrywatershed_1();
	this.LIDCityAbColdAbDry.setTransform(476.9,375.5,0.757,0.757,0,0,0,293,-5);
	this.LIDCityAbColdAbDry.visible = false;

	this.SuburbiaAbColdAbDry = new lib.abcoldabdrywatershed_2();
	this.SuburbiaAbColdAbDry.setTransform(480.5,373.5,0.758,0.758,0,0,0,289,-9.1);
	this.SuburbiaAbColdAbDry.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.SuburbiaAbColdAbDry},{t:this.LIDCityAbColdAbDry},{t:this.MetropolisAbColdAbDry},{t:this.FarmAbColdAbDry}]}).wait(1));

	// abcold abwet
	this.FarmAbColdAbWet = new lib.AbColdAbWetWatershed();
	this.FarmAbColdAbWet.setTransform(482,376.6,0.762,0.762,0,0,0,293.5,-10);
	this.FarmAbColdAbWet.visible = false;

	this.MetropolisAbColdAbWet = new lib.abcoldabwetwatershed_1();
	this.MetropolisAbColdAbWet.setTransform(478.8,378.8,0.762,0.762,0,0,0,293.5,-7.5);
	this.MetropolisAbColdAbWet.visible = false;

	this.LIDCityAbColdAbWet = new lib.abcoldabwetwatershed_2();
	this.LIDCityAbColdAbWet.setTransform(479.5,379.5,0.76,0.76,0,0,0,292.9,-5);
	this.LIDCityAbColdAbWet.visible = false;

	this.SuburbiaAbColdAbWet = new lib.abcoldabwetwatershed();
	this.SuburbiaAbColdAbWet.setTransform(480.2,375.7,0.765,0.765,0,0,0,288.9,-9);
	this.SuburbiaAbColdAbWet.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.SuburbiaAbColdAbWet},{t:this.LIDCityAbColdAbWet},{t:this.MetropolisAbColdAbWet},{t:this.FarmAbColdAbWet}]}).wait(1));

	// abcold normal
	this.FarmAbColdNormal = new lib.AbColdNormalWatershed();
	this.FarmAbColdNormal.setTransform(482.8,376.1,0.762,0.762,0,0,0,293.5,-10);
	this.FarmAbColdNormal.visible = false;

	this.MetropolisAbColdNormal = new lib.abcoldnormalwatershed_1();
	this.MetropolisAbColdNormal.setTransform(480.8,378.8,0.762,0.762,0,0,0,293.5,-7.5);
	this.MetropolisAbColdNormal.visible = false;

	this.LIDCityAbColdNormal = new lib.abcoldnormalwatershed_2();
	this.LIDCityAbColdNormal.setTransform(477.6,373.4,0.752,0.752,0,0,0,293,-5);
	this.LIDCityAbColdNormal.visible = false;

	this.SuburbiaAbColdNormal = new lib.abcoldnormalwatershed();
	this.SuburbiaAbColdNormal.setTransform(477.1,373.9,0.758,0.758,0,0,0,289,-9);
	this.SuburbiaAbColdNormal.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.SuburbiaAbColdNormal},{t:this.LIDCityAbColdNormal},{t:this.MetropolisAbColdNormal},{t:this.FarmAbColdNormal}]}).wait(1));

	// abhot abdry
	this.FarmAbHotAbDry = new lib.AbHotAbDryWatershed();
	this.FarmAbHotAbDry.setTransform(481.5,375.3,0.762,0.762,0,0,0,293.5,-10);
	this.FarmAbHotAbDry.visible = false;

	this.MetropolisAbHotAbDry = new lib.abhotabdrywatershed_1();
	this.MetropolisAbHotAbDry.setTransform(482,376.6,0.762,0.762,0,0,0,293.5,-7.5);
	this.MetropolisAbHotAbDry.visible = false;

	this.LIDCityAbHotAbDry = new lib.abhotabdrywatershed_2();
	this.LIDCityAbHotAbDry.setTransform(481.5,373.7,0.755,0.755,0,0,0,293.1,-4.8);
	this.LIDCityAbHotAbDry.visible = false;

	this.SuburbiaAbHotAbDry = new lib.abhotabdrywatershed();
	this.SuburbiaAbHotAbDry.setTransform(483.6,377.5,0.765,0.765,0,0,0,289.1,-9);
	this.SuburbiaAbHotAbDry.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.SuburbiaAbHotAbDry},{t:this.LIDCityAbHotAbDry},{t:this.MetropolisAbHotAbDry},{t:this.FarmAbHotAbDry}]}).wait(1));

	// abhot abwet
	this.FarmAbHotAbWet = new lib.AbHotAbWetWatershed();
	this.FarmAbHotAbWet.setTransform(484.3,376.6,0.762,0.762,0,0,0,293.5,-10);
	this.FarmAbHotAbWet.visible = false;

	this.MetropolisAbHotAbWet = new lib.abhotabwetwatershed_1();
	this.MetropolisAbHotAbWet.setTransform(481.5,377,0.762,0.762,0,0,0,293.5,-7.5);
	this.MetropolisAbHotAbWet.visible = false;

	this.LIDCityAbHotAbWet = new lib.abhotabwetwatershed_2();
	this.LIDCityAbHotAbWet.setTransform(482.3,376.3,0.757,0.757,0,0,0,293.1,-5);
	this.LIDCityAbHotAbWet.visible = false;

	this.SuburbiaAbHotAbWet = new lib.abhotabwetwatershed();
	this.SuburbiaAbHotAbWet.setTransform(481.4,374.2,0.754,0.754,0,0,0,289,-9);
	this.SuburbiaAbHotAbWet.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.SuburbiaAbHotAbWet},{t:this.LIDCityAbHotAbWet},{t:this.MetropolisAbHotAbWet},{t:this.FarmAbHotAbWet}]}).wait(1));

	// abhot normal
	this.FarmAbHotNormal = new lib.AbHotNormalWatershed();
	this.FarmAbHotNormal.setTransform(482,376.6,0.762,0.762,0,0,0,293.5,-10);
	this.FarmAbHotNormal.visible = false;

	this.MetropolisAbHotNormal = new lib.abhotnormalwatershed();
	this.MetropolisAbHotNormal.setTransform(477.7,376.8,0.762,0.762,0,0,0,293.5,-7.5);
	this.MetropolisAbHotNormal.visible = false;

	this.LIDCityAbHotNormal = new lib.abhotnormalwatershed_1();
	this.LIDCityAbHotNormal.setTransform(479,376.8,0.753,0.753,0,0,0,292.9,-4.9);
	this.LIDCityAbHotNormal.visible = false;

	this.SuburbiaAbHotNormal = new lib.abhotnormalwatershed_2();
	this.SuburbiaAbHotNormal.setTransform(478.3,374.6,0.76,0.76,0,0,0,289,-9);
	this.SuburbiaAbHotNormal.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.SuburbiaAbHotNormal},{t:this.LIDCityAbHotNormal},{t:this.MetropolisAbHotNormal},{t:this.FarmAbHotNormal}]}).wait(1));

	// normal abdry
	this.FarmNormalAbDry = new lib.NormalDryWatershed();
	this.FarmNormalAbDry.setTransform(481.5,376.6,0.762,0.762,0,0,0,293.5,-10);
	this.FarmNormalAbDry.visible = false;

	this.MetropolisNormalAbDry = new lib.normalabdrywatershed();
	this.MetropolisNormalAbDry.setTransform(480.8,378,0.762,0.762,0,0,0,293.5,-7.5);
	this.MetropolisNormalAbDry.visible = false;

	this.LIDCityNormalAbDry = new lib.normaldrywatershed_1();
	this.LIDCityNormalAbDry.setTransform(476,372.1,0.758,0.758,0,0,0,293,-5);
	this.LIDCityNormalAbDry.visible = false;

	this.SuburbiaNormalAbDry = new lib.normaldrywatershed();
	this.SuburbiaNormalAbDry.setTransform(478.3,374.8,0.756,0.756,0,0,0,288.9,-9);
	this.SuburbiaNormalAbDry.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.SuburbiaNormalAbDry},{t:this.LIDCityNormalAbDry},{t:this.MetropolisNormalAbDry},{t:this.FarmNormalAbDry}]}).wait(1));

	// normal abwet
	this.FarmNormalAbWet = new lib.NormalAbWetWatershed();
	this.FarmNormalAbWet.setTransform(481.6,374.6,0.762,0.762,0,0,0,293.6,-10);
	this.FarmNormalAbWet.visible = false;

	this.MetropolisNormalAbWet = new lib.normalwetwatershed_1();
	this.MetropolisNormalAbWet.setTransform(478.8,376.6,0.762,0.762,0,0,0,293.5,-7.5);
	this.MetropolisNormalAbWet.visible = false;

	this.LIDCityNormalAbWet = new lib.normalwetwatershed_2();
	this.LIDCityNormalAbWet.setTransform(478.4,374.4,0.756,0.756,0,0,0,293,-5);
	this.LIDCityNormalAbWet.visible = false;

	this.SuburbiaNormalAbWet = new lib.normalnormalwatershed();
	this.SuburbiaNormalAbWet.setTransform(480.5,373.3,0.753,0.753,0,0,0,289.1,-9.1);
	this.SuburbiaNormalAbWet.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.SuburbiaNormalAbWet},{t:this.LIDCityNormalAbWet},{t:this.MetropolisNormalAbWet},{t:this.FarmNormalAbWet}]}).wait(1));

	// normal normal
	this.FarmNormalNormal = new lib.NormalNormalWatershed();
	this.FarmNormalNormal.setTransform(481.5,376.6,0.762,0.762,0,0,0,293.5,-9.9);
	this.FarmNormalNormal.visible = false;

	this.MetropolisNormalNormal = new lib.normalnormalwatershed_1();
	this.MetropolisNormalNormal.setTransform(483.3,377.6,0.762,0.762,0,0,0,293.5,-7.5);
	this.MetropolisNormalNormal.visible = false;

	this.LIDCityNormalNormal = new lib.normalnormalwatershed_2();
	this.LIDCityNormalNormal.setTransform(483.3,374.9,0.747,0.747,0,0,0,293,-4.8);
	this.LIDCityNormalNormal.visible = false;

	this.SuburbiaNormalNormal = new lib.normalwetwatershed();
	this.SuburbiaNormalNormal.setTransform(478.2,378.8,0.767,0.767,0,0,0,289,-9);
	this.SuburbiaNormalNormal.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.SuburbiaNormalNormal},{t:this.LIDCityNormalNormal},{t:this.MetropolisNormalNormal},{t:this.FarmNormalNormal}]}).wait(1));

	// Suburbia
	this.SuburbiaClose = new lib.CloseButton();
	this.SuburbiaClose.setTransform(519,85.1,1,1,0,0,0,-0.1,0.1);
	this.SuburbiaClose.visible = false;

	this.button9 = new lib.NormalNormal();
	this.button9.setTransform(548.6,234.1,0.455,0.454,0,0,0,91.1,28.1);
	this.button9.visible = false;

	this.button8 = new lib.NormalAbWet();
	this.button8.setTransform(439.4,234,0.455,0.454,0,0,0,88,29.9);
	this.button8.visible = false;

	this.button7 = new lib.NormalAbDry();
	this.button7.setTransform(331.3,234.1,0.455,0.454,0,0,0,87,30.1);
	this.button7.visible = false;

	this.button6 = new lib.AbHotNormal();
	this.button6.setTransform(548.6,179.9,0.455,0.454,0,0,0,85,33.2);
	this.button6.visible = false;

	this.button5 = new lib.AbHotAbWet();
	this.button5.setTransform(439.4,179.9,0.455,0.454,0,0,0,76,29.1);
	this.button5.visible = false;

	this.button4 = new lib.AbHotAbDry();
	this.button4.setTransform(331.3,179.9,0.455,0.454,0,0,0,77,30.1);
	this.button4.visible = false;

	this.button3 = new lib.AbColdNormal();
	this.button3.setTransform(548.6,126.2,0.455,0.454,0,0,0,88,29.9);
	this.button3.visible = false;

	this.button2 = new lib.AbColdAbWet();
	this.button2.setTransform(439.4,126.3,0.455,0.454,0,0,0,76,31.1);
	this.button2.visible = false;

	this.SuburbiaInfo = new lib.infobutton();
	this.SuburbiaInfo.setTransform(417,84.1,1,1,0,0,0,8.2,10.6);

	this.button1 = new lib.AbColdAbDry();
	this.button1.setTransform(331.1,126.2,0.455,0.454,0,0,0,72.5,28.9);
	this.button1.visible = false;

	this.SuburbiaDescription = new lib.SuburbiaDescription();
	this.SuburbiaDescription.setTransform(726,183.8,1,1,0,0,0,106.5,133.5);
	this.SuburbiaDescription.visible = false;

	this.Suburbia = new lib.Suburbia_1();
	this.Suburbia.setTransform(475.2,168.3,1,1,0,0,0,150,121);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Suburbia},{t:this.SuburbiaDescription},{t:this.button1},{t:this.SuburbiaInfo},{t:this.button2},{t:this.button3},{t:this.button4},{t:this.button5},{t:this.button6},{t:this.button7},{t:this.button8},{t:this.button9},{t:this.SuburbiaClose}]}).wait(1));

	// Metropolis
	this.MetropolisClose = new lib.CloseButton();
	this.MetropolisClose.setTransform(520,455,1,1,0,0,0,-0.1,0.1);
	this.MetropolisClose.visible = false;

	this.MetropolisInfo = new lib.infobutton();
	this.MetropolisInfo.setTransform(406,460,1,1,0,0,0,8.2,10.6);

	this.button27 = new lib.NormalNormal();
	this.button27.setTransform(592.2,612.9,0.455,0.454,0,0,0,91.1,28.1);
	this.button27.visible = false;

	this.button26 = new lib.NormalAbWet();
	this.button26.setTransform(483,612.8,0.455,0.454,0,0,0,88,29.9);
	this.button26.visible = false;

	this.button25 = new lib.NormalAbDry();
	this.button25.setTransform(374.9,612.9,0.455,0.454,0,0,0,87,30.1);
	this.button25.visible = false;

	this.button24 = new lib.AbHotNormal();
	this.button24.setTransform(592.1,558.7,0.455,0.454,0,0,0,85,33.2);
	this.button24.visible = false;

	this.button23 = new lib.AbHotAbWet();
	this.button23.setTransform(483,558.7,0.455,0.454,0,0,0,76,29.1);
	this.button23.visible = false;

	this.button22 = new lib.AbHotAbDry();
	this.button22.setTransform(374.9,558.8,0.455,0.454,0,0,0,77,30.1);
	this.button22.visible = false;

	this.button21 = new lib.AbColdNormal();
	this.button21.setTransform(592.1,505.1,0.455,0.454,0,0,0,88,29.9);
	this.button21.visible = false;

	this.button20 = new lib.AbColdAbWet();
	this.button20.setTransform(483,505.2,0.455,0.454,0,0,0,76,31.1);
	this.button20.visible = false;

	this.button19 = new lib.AbColdAbDry();
	this.button19.setTransform(374.6,505.1,0.455,0.454,0,0,0,72.5,28.9);
	this.button19.visible = false;

	this.MetropolisDescription = new lib.MetropolisDescription();
	this.MetropolisDescription.setTransform(239,506.3,1,1,0,0,0,111,156.5);
	this.MetropolisDescription.visible = false;

	this.Metropolis = new lib.Metropolis();
	this.Metropolis.setTransform(474.2,534.5,1,1,0,0,0,150,120.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Metropolis},{t:this.MetropolisDescription},{t:this.button19},{t:this.button20},{t:this.button21},{t:this.button22},{t:this.button23},{t:this.button24},{t:this.button25},{t:this.button26},{t:this.button27},{t:this.MetropolisInfo},{t:this.MetropolisClose}]}).wait(1));

	// LID City
	this.LIDClose = new lib.CloseButton();
	this.LIDClose.setTransform(692,262.1,1,1,0,0,0,-0.1,0.1);
	this.LIDClose.visible = false;

	this.LIDCityInfo = new lib.infobutton();
	this.LIDCityInfo.setTransform(594,264.1,1,1,0,0,0,8.2,10.6);

	this.button18 = new lib.NormalNormal();
	this.button18.setTransform(849.1,417.5,0.455,0.454,0,0,0,91.1,28.1);
	this.button18.visible = false;

	this.button17 = new lib.NormalAbWet();
	this.button17.setTransform(739.9,417.4,0.455,0.454,0,0,0,88,29.9);
	this.button17.visible = false;

	this.button16 = new lib.NormalAbDry();
	this.button16.setTransform(631.8,417.5,0.455,0.454,0,0,0,87,30.1);
	this.button16.visible = false;

	this.button15 = new lib.AbHotNormal();
	this.button15.setTransform(849.1,363.3,0.455,0.454,0,0,0,85,33.2);
	this.button15.visible = false;

	this.button14 = new lib.AbHotAbWet();
	this.button14.setTransform(739.9,363.3,0.455,0.454,0,0,0,76,29.1);
	this.button14.visible = false;

	this.button13 = new lib.AbHotAbDry();
	this.button13.setTransform(631.8,363.3,0.455,0.454,0,0,0,77,30.1);
	this.button13.visible = false;

	this.button12 = new lib.AbColdNormal();
	this.button12.setTransform(849.1,309.6,0.455,0.454,0,0,0,88,29.9);
	this.button12.visible = false;

	this.button11 = new lib.AbColdAbWet();
	this.button11.setTransform(739.9,309.7,0.455,0.454,0,0,0,76,31.1);
	this.button11.visible = false;

	this.button10 = new lib.AbColdAbDry();
	this.button10.setTransform(631.6,309.6,0.455,0.454,0,0,0,72.5,28.9);
	this.button10.visible = false;

	this.LIDCityDescription = new lib.LIDCityDescription();
	this.LIDCityDescription.setTransform(347.4,450.5,1,1,0,0,0,122.5,203.2);
	this.LIDCityDescription.visible = false;

	this.LIDCity = new lib.LIDCity();
	this.LIDCity.setTransform(646.9,353.2,1,1,0,0,0,150,121.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.LIDCity},{t:this.LIDCityDescription},{t:this.button10},{t:this.button11},{t:this.button12},{t:this.button13},{t:this.button14},{t:this.button15},{t:this.button16},{t:this.button17},{t:this.button18},{t:this.LIDCityInfo},{t:this.LIDClose}]}).wait(1));

	// Farm Town
	this.FarmClose = new lib.CloseButton();
	this.FarmClose.setTransform(371,270.1,1,1,0,0,0,-0.1,0.1);
	this.FarmClose.visible = false;

	this.button36 = new lib.NormalNormal();
	this.button36.setTransform(331.4,428.9,0.455,0.454,0,0,0,91.1,28.1);
	this.button36.visible = false;

	this.button35 = new lib.NormalAbWet();
	this.button35.setTransform(222.2,428.8,0.455,0.454,0,0,0,88,29.9);
	this.button35.visible = false;

	this.button34 = new lib.NormalAbDry();
	this.button34.setTransform(114.1,428.9,0.455,0.454,0,0,0,87,30.1);
	this.button34.visible = false;

	this.button33 = new lib.AbHotNormal();
	this.button33.setTransform(331.3,374.7,0.455,0.454,0,0,0,85,33.2);
	this.button33.visible = false;

	this.button32 = new lib.AbHotAbWet();
	this.button32.setTransform(222.2,374.7,0.455,0.454,0,0,0,76,29.1);
	this.button32.visible = false;

	this.button31 = new lib.AbHotAbDry();
	this.button31.setTransform(114.1,374.8,0.455,0.454,0,0,0,77,30.1);
	this.button31.visible = false;

	this.button30 = new lib.AbColdNormal();
	this.button30.setTransform(331.3,321.1,0.455,0.454,0,0,0,88,29.9);
	this.button30.visible = false;

	this.button29 = new lib.AbColdAbWet();
	this.button29.setTransform(222.2,321.2,0.455,0.454,0,0,0,76,31.1);
	this.button29.visible = false;

	this.button28 = new lib.AbColdAbDry();
	this.button28.setTransform(113.8,321.1,0.455,0.454,0,0,0,72.5,28.9);
	this.button28.visible = false;

	this.FarmInfo = new lib.infobutton();
	this.FarmInfo.setTransform(245,272.1,1,1,0,0,0,8.2,10.6);

	this.FarmTownDescription = new lib.FarmTownDescription();
	this.FarmTownDescription.setTransform(541.5,341.6,1,1,0,0,0,108,94.3);
	this.FarmTownDescription.visible = false;

	this.FarmTown = new lib.FarmTown_1();
	this.FarmTown.setTransform(302.9,353.1,1,1,0,0,0,150,119.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.FarmTown},{t:this.FarmTownDescription},{t:this.FarmInfo},{t:this.button28},{t:this.button29},{t:this.button30},{t:this.button31},{t:this.button32},{t:this.button33},{t:this.button34},{t:this.button35},{t:this.button36},{t:this.FarmClose}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(490.2,369.8,946.7,762.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
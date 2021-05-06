(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 500,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};

// stage content:
(lib.twinninghtml = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* artificial.stop();
		natural.stop();
		
		function natClick(e:MouseEvent) {
			natural.play();
		}
		
		function artClick(e:MouseEvent) {
			this.artificial.play();
		}
		
		natPlay.addEventListener(MouseEvent.CLICK, natClick);
		artPlay.addEventListener(MouseEvent.CLICK, artClick);*/
		
		this.artificial.stop();
		this.natural.stop();
		
		
		
		this.natPlay.addEventListener("click", natClick.bind(this));
		this.artPlay.addEventListener("click", artClick.bind(this));
		
		function natClick() {
			this.natural.play();
		}
		
		function artClick() {
			this.artificial.play();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.dividebar("synched",0);
	this.instance.setTransform(252.3,296.5,2.009,2.009);

	this.artPlay = new lib.forward();
	this.artPlay.setTransform(422.1,581.2,1.707,1.707);
	new cjs.ButtonHelper(this.artPlay, 0, 1, 2, false, new lib.forward(), 3);

	this.natPlay = new lib.forward();
	this.natPlay.setTransform(24.9,18.3,1.707,1.707);
	new cjs.ButtonHelper(this.natPlay, 0, 1, 2, false, new lib.forward(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#003399").ss(2,1,1).p("AT7AAMgn1AAA");
	this.shape.setTransform(251,0.3,2.009,2.009);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#003399").ss(2,1,1).p("AT7AAMgn1AAA");
	this.shape_1.setTransform(251.8,600.1,2.009,2.009);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#003399").ss(2,1,1).p("AAAXbMAAAgu1");
	this.shape_2.setTransform(500.1,299.2,2.009,2.009,0,0,0,-0.2,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#003399").ss(2,1,1).p("AAAXZMAAAgux");
	this.shape_3.setTransform(1.6,301.1,2.009,2.009,0,0,0,0.2,0.2);

	this.text = new cjs.Text("Artificial Embryo Twinning", "bold 12px 'Arial Narrow'", "#FFFFCC");
	this.text.lineHeight = 14;
	this.text.setTransform(2.9,563.1,2.009,2.009);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AzRBWIAAirMAmjAAAIAACrg");
	this.shape_4.setTransform(3.5,564.9,2.009,2.009,0,0,0,-123.1,-8.1);

	this.text_1 = new cjs.Text("Natural Twinning", "bold 12px 'Arial Narrow'", "#FFFFCC");
	this.text_1.lineHeight = 14;
	this.text_1.setTransform(329,1.3,2.009,2.009);

	this.artificial = new lib.ArtificialTwinning();
	this.artificial.setTransform(247.1,471.2,0.803,0.803);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6699CC").s().p("AzOBWIAAirMAmdAAAIAACrg");
	this.shape_5.setTransform(3.3,3.4,2.009,2.009,0,0,0,-123.1,-8.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6699CC").s().p("AzcLpIAA3RMAm4AAAIAAXRg");
	this.shape_6.setTransform(251.4,452.1,2.009,2.009);

	this.natural = new lib.NaturalTwinning();
	this.natural.setTransform(247.6,182.1,0.803,0.803);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AzhLwIAA3fMAnCAAAIAAXfg");
	this.shape_7.setTransform(250.4,150.4,2.009,2.009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.natural},{t:this.shape_6},{t:this.shape_5},{t:this.artificial},{t:this.text_1},{t:this.shape_4},{t:this.text},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.natPlay},{t:this.artPlay},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(243.9,297.3,516.6,605.3);


// symbols:
(lib.Tween5 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Two-Cell Embryo", "bold 24px 'Arial Black'", "#FFFFFF");
	this.text.lineHeight = 26;
	this.text.setTransform(-112.7,-18.5);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-112.7,-18.5,225.3,37.9);


(lib.Symbol37 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkeB/IBFgGIBfgKQAzgFA0gKQAygIAsgNQBPgXAwgbQAvgZAYgcQAYgcAHgWQAIgYAAgNIgBgMIABAPIABAqQABAXgDAUQgDAUgHAHQgrAdgjARQgjAQggAJQghAJgkAHQgxALg0AHQg3AHg1AGQg0AEgrACIhFAEIgaAAIAagBg");
	this.shape.setTransform(31.4,13.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0.3,62.7,25.7);


(lib.Symbol36 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACMCAQgxgBgzgEQgxgDgtgIQhBgLgtgLQgugLgdgPQgdgOgQgZQgPgYgHgkIgDgZIgFgfIgDgaIgCgLIADAPQACAPAIAXQAIAYAQAbQAPAZAaAYQAmAjA+AUQA/AUBQAKQA6AGA3AEQA5ADAtACIBLABIAcAAIgZABIhBACIgcAAIg+gBg");
	this.shape.setTransform(32.1,13);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,64.1,25.8);


(lib.Symbol35 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJABIASgBIgEAAQgGABgFAAIgDAAg");
	this.shape.setTransform(1,0.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2,0.3);


(lib.Symbol34 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhvCUQgkgBgjgIQgSgDgSgHQgSgGgQgPQgNgNgBgRQgBgPAHgPQAHgOAJgIQATgWAUgLQAngcAqgYQAqgZAlgKIAcgKIAYgKIANgHQABgCgJADIAmgNQARgHAMgDQAMgFAOgBIAGABQAEACgCAEQgCAFgSAJIgkAPIgqATIgjAPQg6AWg1AdQg1AcgrAoQgLAMgEANQgFAMAIAMQAJAMAOAGQAOAHAQAEQA8ANA6AAQA5ABA5gFIA3gGIACAAIgBAAIAEgBQAGABAJgCIAegFIgCABIAOgDIAGAAIAFgCQAkgHAngJIAHgBIALgBIgGABQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAIgDABIgCABQgOACgNAEIAEAAQABAAABAAQABgBABAAQAAAAAAAAQgBAAgBAAQAQgCAOgFIAAABIgaAIIgaAIIgGACIgLACIgRADIgNADQgHADgKACQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQgBAAAAABIgaAFQgDABgEgBIgIAAIgMAEIgKADQgBAAAAAAQAAAAAAAAQABAAABAAQABAAACAAIAbgFIAagEQgYAFgfAEIgWACIgYACQghAHglABIgTABIg3gCgACVB0QgBAAAAAAQgBAAAAgBQAAAAABAAQAAAAABAAIgGABIAGAAIAAAAg");
	this.shape.setTransform(26.6,15);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.1,0,53.5,30);


(lib.Symbol26 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAFAAIgFAAIgEABg");
	this.shape.setTransform(0.6,0.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1.1,0.4);


(lib.Symbol24 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ALTjhQgCgGgbgNQgagMg3gLQg4gLhZgBQhZgBh/ARQh/ASinAsQiTAnhwAtQhwAthQAsQhQAqgzAmQgzAmgZAZQgYAZgBAGQgBADAAAQQAAAPAKAUQAJAUAcATQAbATA2AMQA2ALBYgBQBZgCCDgWQCEgVC1gwQCrguB0guQB1guBHgsQBIgqAmgnQAlgoAOgfQAOgfAAgUQgBgVgDgGg");
	this.shape.setTransform(73.2,28.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6E6C5").s().p("ApWEOQg2gMgbgTQgcgTgJgUQgKgUAAgPQAAgQABgDQABgGAYgZQAZgZAzgmQAzgmBQgqQBQgsBwgtQBwgtCTgnQCngsB/gSQB/gRBZABQBZABA4ALQA3ALAaAMQAbANACAGQADAGABAVQAAAUgOAfQgOAfglAoQgmAnhIAqQhHAsh1AuQh0AuirAuQi1AwiEAVQiDAWhZACIgUAAQhKAAgwgKg");
	this.shape_1.setTransform(73.2,28.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,147.5,58.1);


(lib.Symbol23 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AK+k1QALAfAKAlQAKAlAIAhQAIAhAFAWQAEAVAAABQABAAgRAXQgRAYgoAmQgpAlhIAwQhIAvhtAxQhtAxiaAsQjBA1iMAXQiLAYhdACQhdACg2gIQg1gIgXgKQgXgJABgBQgSgrgMgcQgLgcgHgUQgHgTgEgRQgEgRgDgVQgEgWgFggQACgMAagdQAbgdA1glQA2goBRgtQBSgtBvgsQBwgsCPglQCugtB7gUQB7gVBRgDQBQgEAxAIQAwAHAaAMQAaAMANAKQAOAJALACg");
	this.shape.setTransform(76.4,37.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6E6C5").s().p("ApIFpQg1gIgXgKQgXgJABgBIgehHQgLgcgHgUQgHgTgEgRIgHgmIgJg2QACgMAagdQAbgdA1glQA2goBRgtQBSgtBvgsQBwgsCPglQCugtB7gUQB7gVBRgDQBQgEAxAIQAwAHAaAMQAaAMANAKQAOAJALACQALAfAKAlIASBGIANA3IAEAWIgQAXQgRAYgoAmQgpAlhIAwQhIAvhtAxQhtAxiaAsQjBA1iMAXQiLAYhdACIgkABQhEAAgrgHg");
	this.shape_1.setTransform(76.4,37.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,153.8,75.6);


(lib.Symbol22 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.9,1,1).p("AJqkRQg1gMhYgBQhYAAiCATQiCATixAtQicAphzAvQh0AwhPAvQhPAtgwAoQgvAogVAcQgUAbACAHQAOA7AwAcQAwAcBKAEQBLAEBggNQBggNBvgWQBvgWB2gYQAlgHA3gQQA4gQBCgYQBCgXBEgeQBDgdA9gjQA9ggAugmQAuglAVgoQAWgngLgoQgEgPgZgSQgZgRg1gNg");
	this.shape.setTransform(73.3,29.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6E6E6").s().p("AofEeQhKgEgwgcQgwgcgOg7QgCgHAUgbQAVgcAvgoQAwgoBPgtQBPgvB0gwQBzgvCcgpQCxgtCCgTQCCgTBYAAQBYABA1AMQA1ANAZARQAZASAEAPQALAogWAnQgVAoguAlQguAmg9AgQg9AjhDAdQhEAehCAXQhCAYg4AQQg3AQglAHIjlAuQhvAWhgANQhKAKg9AAIgkgBg");
	this.shape_1.setTransform(73.3,29.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,147.8,59.5);


(lib.Symbol21 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjyC9IjYglQhcgPg9gSQg9gSgTgOQgVhFgIg2QgHg4gBggIAAgiIAIAPQAJAOAZAVQAZAWAxAXQAwAWBPASQBPASB1AFQB0AGChgJQCvgNB8gUQB8gTBRgXQBRgXAvgWQAugWAWgTQAVgSAGgLIAGgLIADAYQAEAZABArQABArgGA2QgQAnhUApQhUAqiaAuQibAuiwAFIhBABQiFAAhjgQgArYieIAAAAIAAAAg");
	mask.setTransform(146.9,66.9);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CCCC99","#FFFFCC","#CCCC99"],[0,0.478,1],-73.5,0,73.5,0).s().p("ArdiZILXgeILNgeIAIgBIAQFvQgGgBigAQQihAQjQAGQjOAGidAEIjSAFIlZAJIgPlvg");
	this.shape.setTransform(147.4,66.4);

	this.shape.mask = mask;

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(73.9,46.4,145.9,41.2);


(lib.Symbol20 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArQCgQgFgUgCgYIgCgqIABgTIAKgPQAKgPAcgYQAcgVAzgcQA0gcBSgbQBSgaB2gVQB2gUCggKQC5gJB+AOQB/APBPAbQBPAbApAdQAqAdAPAUQAQAVgBAAIAEAUQAEAUACAfQABAggHAgQhMhGhwgoQhvgniNgOQiMgPiiAJQh7AGhxAWQhxAThdAgQhdAgg/AmQg/AmgYAmQgLgEgGgUg");
	mask.setTransform(146.6,45.4);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CCCC99","#FFFFCC","#CCCC99"],[0,0.478,1],-73.6,0,73.6,0).s().p("AreiJILZgfILOgeIAIAAIAOFQIgIABIrRAeIrXAeIgNlQg");
	this.shape.setTransform(146.2,44.3);

	this.shape.mask = mask;

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(73.6,27,146.1,37);


(lib.spermtail = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F3E49C").ss(1.1,1,1).p("ABuA+IjKAIQAAAAgGgGQgGgFgFgMQgGgMgCgUQAAgTAGgQQAGgPAGgJQAHgIAAAAIC+gRQgDACgDACQgIAFgFAPQgFAQABAdQACAiAKAOQALANAJABQACAAABAAQAHAAABAA");
	this.shape.setTransform(56.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#CCCC99","#FFCCCC"],[0,1],-11.4,0,11.5,0).s().p("AheBAQgGgFgFgMQgGgMgCgUQAAgTAGgPQAGgQAGgJIAHgIIC+gRIgGAFQgIAFgFAPQgFAPABAdQACAiAKANQALANAJACIADAAIjKAIIgGgGg");
	this.shape_1.setTransform(56.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#F3E49C").ss(0.8,1,1).p("AGYgVQAogIAlgIQAlgIAYgFQAYgFAAgBQAAABgFAKQgFAJgEAPQgFAPgBAMQABAOAGAMQAGALAGAHQAGAGAAABQgBgBgXgDQgYgEglgGQglgFgpgGQgogFgjgEQgigEgTAAQgXAAgkAEQgkADgoAFQgpAFgmADQgmAEgcAAQgagBgkgJQgkgIgkgMQgkgMgegHQgdgJgQAAQgKAAgcADQgcAEgmAFQgmAEgoAGQgnAGgjAFQgiAGgVADQgVADgBABQABgBAUgEQAUgGAhgIQAhgIAngHQAngJAmgHQAmgIAdgFQAdgEAOAAQAVACAgAKQAfAKAkAMQAkAKAgAJQAfAJAVABQAPAAAcgDQAdgCAjgEQAigEAjgEQAjgDAdgEQAcgDARAAQARgBAhgGQAhgGApgIg");
	this.shape_2.setTransform(-10.7,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("AInA0Ig9gJIhOgLIhLgJQgigEgTgBQgXAAgkAFIhMAIIhPAIQgmADgcABQgagBgkgJQgkgJgkgLIhCgTQgdgJgQgBQgKABgcADIhCAJIhOAKIhKALIg3AJIgWAEIAVgGIA1gNIBIgPIBNgQIBDgNQAdgEAOAAQAVADAgAJIBDAWQAkAKAgAJQAfAJAVAAQAPABAcgDIBAgGIBFgIIBAgHIAtgDQARgBAhgGQAhgGApgIIBNgQIA9gNIAYgFIgFAKQgFAJgEAPQgFAOgBANQABAOAGAMQAGALAGAHIAGAGIgYgEg");
	this.shape_3.setTransform(-10.7,0.6);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-69.3,-8,138.6,16);


(lib.spermhead = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE7CE").s().p("AA8CAQgkgCgogFQgrgGgpgIQgqgIgigIIg4gMIgZgHIAAAAQgygRAKgfQAHgYAigPIBagoQAngQAsgRQAsgQAngLQAogLAcgBQAjAAAoAEQAnADAkALQAkAMAXAWQAXAWAAAlQAAAkgLAXQgLAXgXAOQgXANgiAKIhQAVQgSAEgaAAIgOAAg");
	this.shape.setTransform(-1.2,5.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.2,-7.2,60.1,25.7);


(lib.nucleus = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AicCkQg8hDAAhhQAAhgA8hLQBDhEBZAAIAAAAQBaABA8BDQAJALAJALQAxBDAABSQAABhhDBDQg9BMhZgBQhZABhDhMg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.7,-24,43.5,48);


(lib.forward = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer: Text
	this.text = new cjs.Text("Play", "bold 14px 'Eurostile'", "#FFFFCC");
	this.text.lineHeight = 14;
	this.text.lineWidth = 30;
	this.text.setTransform(13.5,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({_off:true},1).wait(1));

	// Layer: Triangle
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCAGIg2A2IAAh3IA2A1IAAg1IA7A7Ig7A8g");
	this.shape.setTransform(1.3,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgCAGIg2A2IAAh3IA2A1IAAg1IA7A7Ig7A8g");
	this.shape_1.setTransform(1.3,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(1));

	// Layer: Circle
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AAABjQgoABgdgeQgegdABgpQgBgoAegdQAdgeAoABQApgBAdAeQAeAdgBAoQABApgeAdQgdAdgpAAIAAAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AAABjQgoABgdgeQgegdABgpQgBgoAegdQAdgeAoABQApgBAdAeQAeAdgBAoQABApgeAdQgdAdgpAAIAAAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AAAB3QgwABgjgkQgkgjABgxQgBgwAkgjQAjgkAwABQAxgBAjAkQAkAjgBAwQABAxgkAjQgjAjgxAAIAAAAgAhFhFQgeAdABAoQgBApAeAdQAdAeAogBQApABAdgeQAegdgBgpQABgogegdQgdgegpABIAAAAQgoAAgdAdg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAABjQgoABgdgeQgegdABgpQgBgoAegdQAdgeAoABQApgBAdAeQAeAdgBAoQABApgeAdQgdAdgpAAIAAAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AjPB3IAAgBQgNABgNAAQhBAAgugjQgugjAAgxQAAgwAugjQAugjBBAAQANAAANABIAAgBIJWAAIAADtg");
	this.shape_6.setTransform(27.4,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,57.6,20);


(lib.embryoshell = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,204,0.302)","#6699FF"],[0.275,1],0,0,0,0,0,104.2).s().p("AkwOvQjthEi9izQkvkhAAmXQAAmXEvkgQEdkQGMgQIAxAAQGsgBEvEhQEvEgAAGXQAAGXkvEhQkvEgmsABQiggBiQgpg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-103.4,-98.5,206.9,197);


(lib.eggbigempty = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(4,1,1).p("AIcoqQDhDpAAFBQAAFCjhDhQjhDpk7AAQk6AAjhjpQjhjhAAlCQAAlBDhjpQDhjhE6AAQE7AADhDhg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66CCFF").s().p("AobIjQjhjhAAlCQAAlBDhjpQDijgE5gBQE6ABDiDgQDhDpAAFBQAAFCjhDhQjiDpk6AAQk5AAjijpg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-78.5,-80,157,160);


(lib.eggbig = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AAAEcQh1ABhahZQhPhRAAhzQAAhyBPhZQBahQB1gBIAAAAQB2ABBQBQQANANALANQBBBQAABhQAABzhZBRQhQBYh2AAIAAAAg");
	this.shape.setTransform(-28.8,20.3);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(4,1,1).p("AIcoqQDhDpAAFBQAAFCjhDhQjhDpk7AAQk6AAjhjpQjhjhAAlCQAAlBDhjpQDhjhE6AAQE7AADhDhg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66CCFF").s().p("AobIjQjhjhAAlCQAAlBDhjpQDijgE5gBQE6ABDiDgQDhDpAAFBQAAFCjhDhQjiDpk6AAQk5AAjijpg");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-78.5,-80,157,160);


(lib.dividebar = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("&", "bold 20px 'Geneva'", "#FFFFCC");
	this.text.lineHeight = 22;
	this.text.setTransform(-13.4,-14.5);

	this.text_1 = new cjs.Text("CONTRAST", "bold 10px 'Arial-Black'", "#FFFFCC");
	this.text_1.lineHeight = 12;
	this.text_1.setTransform(51.5,-4.9);

	this.text_2 = new cjs.Text("COMPARE", "bold 10px 'Arial-Black'", "#FFFFCC");
	this.text_2.lineHeight = 12;
	this.text_2.setTransform(-122.5,-13.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#003399").ss(2,1,1).p("AT7AAMgn1AAA");
	this.shape.setTransform(0,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("Az6AxIAAhiMAn1AAAIAABig");
	this.shape_1.setTransform(0,5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#003399").ss(2,1,1).p("AT7AAMgn1AAA");
	this.shape_2.setTransform(0,-9.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6699CC").s().p("Az6AyIAAhjMAn1AAAIAABjg");
	this.shape_3.setTransform(0,-4.9);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape,this.text_2,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-128.5,-14.5,257,29);


(lib.cowtail = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("ADmPAIgCgIIgDgNQgBgBAAgBQAAgBAAAAQgBgBAAAAQAAAAAAABQAAADACAQIgEgVIgBgDIgBgCIgEgQQAAABAAAAQAAAAAAgBQAAAAgBgBQAAgBAAgBIgDgOIgEgOIgBgEIgCgDIgBgCIABAJQgBgCAAAAQAAgBAAAAQAAABAAABQAAAAAAACIACAUIADAZIACARIgFgWIAAACIACANIABAMQgEAEgDgOQgDgNgCgWIgEgpIgBgeIAAgtIACg8QACggAEgfQACgOAFgGIAKgNQAFgGAAgOQAAgOgJgeQgziugoiNQgoiNgVhqQgMg/gYgqQgXgrgfgeQgigegqgdQgqgdgygmQhCg0ghg4Qghg5gKg8QgKg9AChCIAFiHQADhGgGhLIA8geQAGBLgDBGIgFCHQgCBCAKA9QAKA8AhA5QAhA4BCA0QAyAmAqAdQArAdAfAeQAhAeAXArQAYAqAMBBQAOBFAPA/QAPA/ASA9IAkB9IAnCJIAGARIAGASIAGAVIAGAaIADAPQAIAZAGAKQAGAJAEAEQAFAEAFAJQAEAIAGAWQAMBAAEAhQAFAhABALQAAAKgCgDQgCgEgCgIIgIgnIgHgfIgDgKQAAADADAXIAAAHQAAABAAAAQAAAAgBAAQAAAAAAgBQAAgBgBgCIgIggIADAWIAAANQAAADgDgKIAFAgQAAAHgBgFIgEgQIgFgVIgDgMIAJA9QABAQgBgBIgDgIIAJA/QADAUAAADQAAADgDgKIgGgaIgEgQIAAAHIABAPIABAIIgEgNIgKgyIgLg7IgFgSIAAAFIABAKIAEAXIADAZIACAOIgCgIIABAIQAAABAAgBIAAABIACAPIAHAoIgCgHIAAADQAAADgBgDIgOhKIAPBaIAIAyIgCgNIgQhWQABAHgCgHIgEgVIgEgZIgCgLIgCgFIABAFIABAKIACANIADAXIgFgcIgCgGIABAFIACANIAFAdIAGAlQAAACABABQAAABAAAAQAAAAAAAAQgBgBAAgBIgCgMIgBgFIgFgbQgBgDAAgCQgBgCAAgBQAAAAAAABQAAAAAAACIAFAbIgFgbIgCgHIAAACIAAADIgIgsIgEgSIAAABQAAgCAAACIACAMIAFAhIALA8IABAGIAAADIgFgZIgKg2IgEgTIgEgTIABAEIgCgHIACANIAIAvIAAAAIgCgKIgBgGIACAQIACALIAAACIAEAWIAFAfIAFAaIABAGIgHgmQgCgHABAHIADASIACANIgDgNIgBgIIgBgEIgDgSIgJguIgBgIIgEgTIgCgJIgCgKIACAKIAMBCIAEAZQAAABAAAAQAAABAAgBQAAAAAAgBQAAgBgBgCIgDgTIADAUIABADIAAAAIAAADIgBgGIgBgFIACANIADANIAAAEIABAIIgCgOIgFgaIAAAFIACAJIgIgoIgCgJIAHAqIgFgeIAGApQAAgBAAgBQAAAAAAAAQAAAAAAABQAAABAAACIAFAdIgEgYIgBgFIACAMIACAMQAAABAAAAQAAABAAAAQAAAAAAgBQgBgBAAgBIgFgeIgGgiIgBgEIABAHIgFgZIgDgPIgEghIgEgeIgBgHIgIgnIALBCQgCgHABANIAEAkIAFAuIAEAiQAAALgCgLIgOhDIgFgfIACAXIgGgjIgHgfIgDgRIABAKIgGghIABALIAHArIgBgHIABAJIAEAZIADATIgCgIQgFgegBACIAEAZIALA9IgIgmIgFgXQgCgGADARIALBCQANBRgBgBIgRhXIAFAoIACASIACARQAAABAAABQAAABgBAAQAAAAAAgBQAAAAAAgBIgGgXIAEAcIgEgTIgDgNIgCgHIgCgJIgHgjIgHgiIgFgbIABAJIAFAeIAGAkIACAKIgCgGIgCgLIgCgFIADAUIAFAeIAEAVIgCgJIACAPIAAACIgBABIgEgUIgFgXIgIgrIgKgwQgCgJABALIAFAlIAIA5IAGAmIAAAHIAAAAgAEZN4IAAgEIABAIg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35,-96.1,70.1,192.2);


(lib.cellstwo = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCE9C").s().p("AvTE7Qhxgjg4hpQg5hnAihuQAjhvBpg4QBpg1BxAjQBxAjA5BnQA4BngiBvQgiBwhpA1QhBAihEAAQgqAAgsgNgAMuDgQhxgjg4hpQg5hkAihwQAihwBqg3QBog1ByAjQBxAiA5BnQA4BpgiBuQgjBvhoA1QhBAjhEAAQgrAAgrgOg");
	this.shape.setTransform(-29,24.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66CCFF").s().p("AFvImQjhjiAAlCQAAlADhjpQDhjhE7AAQE7AADhDhQDhDpAAFAQAAFCjhDiQjhDok7AAQk7AAjhjogA2mIgQjhjgAAlBQAAlDDhjoQDhjhE7AAQE7AADhDhQDhDoAAFDQAAFBjhDgQjhDpk7AAQk7AAjhjpg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-167.2,-78.2,334.5,156.5);


(lib.sperm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.spermtail();
	this.instance.setTransform(69,16);

	this.instance_1 = new lib.spermhead();
	this.instance_1.setTransform(157.2,7.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F3E49C").ss(1.1,1,1).p("ABagrQgHAPgBAcQgCAjAKAPQADAFADADQAGAGAHACQABAAACAAIjKgKQgBAAgFgGQgGgGgEgMQgFgMABgUQABgTAHgPQAHgPAIgIQAHgIAAAAIC/AAQgDABgEADQgEACgEAFQgDAFgDAGg");
	this.shape.setTransform(124.3,14.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#CCCC99","#FFCCCC"],[0,1],-11.2,0,11.2,0).s().p("AhaA4IgGgGQgGgGgEgMQgFgMABgUQABgTAHgPQAHgPAIgIIAHgIIC/AAIgHAEQgEACgEAFIgGALQgHAPgBAcQgCAjAKAPIAGAIQAGAGAHACIADAAg");
	this.shape_1.setTransform(124.3,14.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AADgsIgFBZ");
	this.shape_2.setTransform(130.8,14.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE7CE").s().p("AAcB+QgigFgpgJQgqgKgpgLQgpgLghgLIg2gSIgVgHIAHhZIAagJIBBgWQAogNAtgNQAtgMAqgIQAngHAcACQAjACAnAIQAoAHAiAOQAjAPAVAXQAVAZgDAjQgDAlgOAWQgNAWgYAMQgXALgkAHIhRAOQgKABgMAAQgRAAgTgCg");
	this.shape_3.setTransform(158.5,14.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F3E49C").ss(1.1,1,1).p("ABphBQAEgBADAAQAFABABAAIgNAAQgDABgEADQgIAEgGAOQgHAPgCAcQgBAjAKAPQAJAOAJACQACAAABAAQAHABABgBABpBCIjKgKQAAAAgFgGQgGgGgEgMQgFgMAAgUQABgTAIgPQAHgPAHgIQAHgIABAAIC/AA");
	this.shape_4.setTransform(124.7,14.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#CCCC99","#FFCCCC"],[0,1],-11.2,0,11.2,0).s().p("AhaA4IgGgGQgGgGgEgMQgFgMABgUQABgTAHgPQAHgPAIgIIAHgIIC/AAIgHAEQgIAEgGAOQgHAPgBAcQgCAjAKAPQAJAOAKACIADAAg");
	this.shape_5.setTransform(124.1,14.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE7CE").s().p("AAcB+QgigFgpgJQgqgKgpgLQgpgLghgLIg2gSIgVgHIAHhZIAagJIBBgWQAogNAtgNQAtgMAqgIQAngHAcACQAjACAnAIQAoAHAiAOQAjAPAVAXQAVAZgDAjQgDAlgOAWQgNAWgYAMQgXALgkAHIhRAOQgKABgMAAQgQAAgUgCg");
	this.shape_6.setTransform(158.4,14.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F3E49C").ss(1.1,1,1).p("ABihEQAEgBADAAQAGAAAAAAIgNABQgDACgDACQgIAFgFAPQgFAQABAcQACAjAKANQALANAJABQACAAABABQAHAAABgBABuA/IjKAHQAAAAgGgFQgGgFgFgMQgGgMgCgVQAAgSAGgQQAGgPAGgJQAHgIAAAAIC+gR");
	this.shape_7.setTransform(125.2,15.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#CCCC99","#FFCCCC"],[0,1],-11.4,0,11.5,0).s().p("AheBAQgGgFgFgMQgGgMgCgVQAAgSAGgQQAGgPAGgIIAHgJIC+gRIgGAEQgIAGgFAPQgFAPABAdQACAiAKANQALAOAJABIADAAIjKAIIgGgGg");
	this.shape_8.setTransform(124.8,16);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("AAAgsIAABZ");
	this.shape_9.setTransform(131,16.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE7CE").s().p("AAlCAQgkgCgogFQgrgGgpgIQgqgIgigIIg4gMIgVgGIAAhZIAZgLIA+gcQAngQAsgRQAsgQAogLQAngLAcgBQAjAAAoAEQAnADAkALQAkAMAXAWQAXAWAAAlQAAAkgLAXQgLAXgXAOQgXANgiAKIhQAVQgSAEgaAAIgOAAg");
	this.shape_10.setTransform(158.8,13.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.shape_3},{t:this.shape_2,p:{x:130.8,y:14.5}},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_6},{t:this.shape_2,p:{x:130.7,y:14.4}},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).wait(1));

	// Layer 1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#F3E49C").ss(1.1,1,1).p("AI+gZQgBABgEABQgGACgGALQgGAKAAAZQAAAaAGAPQAGAOAGAFQAEAEACABQgEgCgUgGQgYgHglgLQglgLgogKQgpgLgjgHQgigIgTAAQgXABgkAGQgjAHgpAJQgpAJgmAHQgmAHgcAAQgagBgkgRQgjgRglgWQgkgVgdgRQgegRgQgBQgKAAgcAHQgcAGgmALQglAKgoAMQgoAKgiAKQgjALgVAGQgVAHgBAAQABAAAUgKQAVgKAhgPQAhgOAngRQAngRAlgPQAmgPAdgJQAegIANABQAVAEAgATQAgATAjAXQAkAXAgAPQAgASAUABQAPAAAdgFQAcgFAjgHQAjgHAjgIQAigGAdgGQAdgGAQgCQARgDAigBQAigBApgBQApAAAlAAQAmAAAYAAQAUAAAEAAg");
	this.shape_11.setTransform(59.4,10.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFCC99").s().p("AInBSIg9gSIhNgVQgpgLgjgHQgigIgTAAQgXABgkAGIhMAQIhPAQQgmAHgcAAQgagBgkgRQgjgRglgWIhBgmQgegRgQgBQgKAAgcAHIhCARIhNAWIhKAUIg4ARIgWAHIAVgKIA2gZIBIgfIBMggQAmgPAdgJQAegIANABQAVAEAgATQAgATAjAXQAkAXAgAPQAgASAUABQAPAAAdgFQAcgFAjgHIBGgPIA/gMIAtgIQARgDAigBIBLgCIBOAAIA+AAIAYAAIgFACQgGACgGALQgGAKAAAZQAAAaAGAPQAGAOAGAFIAGAFIgYgIg");
	this.shape_12.setTransform(59.4,10.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#F3E49C").ss(1,1,1).p("AI5hJQAEgDACgBQgEABgUAGQgYAGglAJQglAKgoAJQgpAJgiAGQgjAHgTAAQgXAAgkgGQgjgGgpgIQgogIgngGQgmgGgcAAQgaABgkAPQgjAPglATQgkASgdAOQgeAPgPABQgLAAgcgGQgcgGgmgJQglgJgogKQgogIgigJQgjgJgVgGQgVgGgBAAQABAAAUAJQAVAJAhANQAhALAnAPQAnAPAlANQAmANAdAHQAeAIAOgCQAUgDAggQQAggQAkgUQAjgVAggNQAggPAVAAQAOAAAdAEQAcAEAjAGQAjAGAjAHQAiAFAdAFQAdAFAQACQARACAiABQAiABApABQApAAAlAAQAmAAAYAAQAUAAAEAAQgBAAgEgBQgGgCgGgJQgGgKAAgVQAAgXAGgMQAGgMAGgFg");
	this.shape_13.setTransform(59.2,16.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFCC99").s().p("AkcBHQgdgHgmgNQglgNgngPIhIgaIg2gWIgVgJIAWAGIA4APIBKARIBNATIBCAPQAcAGALAAQAPgBAegPIBBggQAlgTAjgPQAkgPAagBQAcAAAmAGQAnAGAoAIIBMAOQAkAGAXAAQATAAAjgHQAigGApgJIBNgTIA9gPIAYgHIgGAEQgGAFgGAMQgGAMAAAXQAAAVAGAKQAGAJAGACIAFABIgYAAIg+AAIhOAAIhLgCQgigBgRgCIgtgHIg/gKIhGgNIg/gKQgdgEgOAAQgVAAggAPQggANgjAVIhEAkQggAQgUADIgFABQgOAAgZgHg");
	this.shape_14.setTransform(59.2,16.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#F3E49C").ss(0.7,1,1).p("AJAg5QgBAAgXAFQgYADgmAHQglAGgpAGQgpAGgiAEQgjAEgTAAQgXAAgkgDQgjgDgpgDQgpgEgmgDQgmgDgcAAQgaAAgkAHQgkAIgkAJQgkAJgeAGQgdAHgQAAQgKAAgcgCQgcgDgmgFQgmgCgngFQgogFgjgEQgigFgVgCQgVgDgBAAQAAAAAVAEQAUAEAhAHQAiAGAnAFQAnAIAlAGQAmAGAdAEQAdAEAOgBQAVgCAggHQAggIAjgKQAkgIAggHQAggIAUAAQAPAAAcACQAdABAjAEQAjADAiADQAjAEAdACQAcADARAAQARAAAhAGQAiAGApAJQApAJAlAIQAmAIAYAGQAYAGABAAQAAgBgEgMQgEgMgEgRQgEgQgBgKQABgLAEgLQAFgLAFgHQAFgGAAgBg");
	this.shape_15.setTransform(57.7,16.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFCC99").s().p("AIkA0Ig+gOIhOgRQgpgJgigGQghgGgRAAIgtgDIhAgGIhFgGIhAgGIgrgBQgUAAggAIQggAGgkAJIhDASQggAHgVACQgOAAgdgDIhDgKIhMgNIhJgNIg1gKIgVgEIAWADIA3AHIBLAJIBNAIIBCAHQAcADAKAAQAQgBAdgHIBCgPQAkgKAkgHQAkgHAagBQAcABAmADIBPAHIBMAGQAkADAXAAQATAAAjgEQAigEApgGIBOgMIA+gKIAYgFIgFAHQgFAHgFALQgEALgBALQABAKAEAQIAIAdIAEANIgZgGg");
	this.shape_16.setTransform(57.7,16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.4,0.4,185.7,25.7);


(lib.petridish = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol37("synched",0);
	this.instance.setTransform(155.4,53);
	this.instance.alpha = 0.398;

	this.instance_1 = new lib.Symbol36("synched",0);
	this.instance_1.setTransform(75.7,55.2);
	this.instance_1.alpha = 0.398;

	this.instance_2 = new lib.Symbol35("synched",0);
	this.instance_2.setTransform(49.2,50.8);
	this.instance_2.alpha = 0.5;

	this.instance_3 = new lib.Symbol34("synched",0);
	this.instance_3.setTransform(8.8,23.3);
	this.instance_3.alpha = 0.5;

	this.instance_4 = new lib.Symbol26("synched",0);
	this.instance_4.setTransform(68.3,46.1);
	this.instance_4.alpha = 0.5;

	this.instance_5 = new lib.Symbol24("synched",0);
	this.instance_5.setTransform(1,1.4);
	this.instance_5.alpha = 0.398;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.9,1,1).p("ALQjaQgEgIgVgPQgWgPgxgNQgxgOhVgCQhWgCiDATQiDASi5AxQioAth3AwQh2AwhNAuQhNAsgrAnQgrAngSAZQgSAagBAGQgBAGAFATQAGASAWAVQAXAWAxAQQAyARBWACQBWACCFgUQCEgUC7gzQCzgyB5gwQB6gxBKgsQBLgrAmgmQAmgnAOgeQANgegBgTQgBgTgFgGg");
	this.shape.setTransform(74.6,29.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(0.9,1,1).p("ALBk0QAIAIAIAYQAIAYAGAfQAHAgAGAdQAFAeADAUQADAUAAAAQABABgNAVQgNAVgkAkQgkAjhFAsQhEAthvAwQhuAwiiAtQivAwiCAZQiDAZhaAIQhaAIg5gCQg5gDgfgIQgegIgMgHQgMgHABgBQgBAAgKgTQgKgSgOgeQgPgdgNgiQgNgigGgeQgHgfAGgVQAHgPAdgfQAegeA2gnQA2gpBQgtQBQgtBrgqQBrgrCIgiQCxgrCAgUQB/gUBVgDQBVgCA0AJQA0AJAcAOQAcAOAOANg");
	this.shape_1.setTransform(76.4,37.5);

	this.instance_6 = new lib.Symbol23("synched",0);
	this.instance_6.setTransform(0.6,0);
	this.instance_6.alpha = 0.5;

	this.instance_7 = new lib.Symbol22("synched",0);
	this.instance_7.setTransform(1.2,0.4);
	this.instance_7.alpha = 0.5;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("ALUitQADAZACAqQABArgHA3QgQAnhTApQhUApi1AqQi0ArirABQipAChngOQhngNhbgPQhcgQg9gSQg9gRgTgPQgVhFgIg2QgIg3AAghQAAghAAgBQAAABAIAOQAJAOAZAWQAZAVAxAXQAwAXBPASQBPAQB1AGQB0AGChgLQCvgLB8gTQB8gUBRgWQBRgXAugWQAvgXAWgSQAVgTAGgLQAGgLgBAAQABAAADAZg");
	this.shape_2.setTransform(146.9,66.3);

	this.instance_8 = new lib.Symbol21("synched",0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(1,1,1).p("ALQgHQAAABAEATQAEAUACAfQABAggHAgQhMhGhwgoQhvgniNgOQiMgPiiAJQh7AGhxAWQhxAThdAgQhdAgg/AmQhAAmgXAmQgMgEgFgUQgGgUgBgYQgCgYAAgSQAAgSABgBQgBgBALgOQAKgPAcgYQAcgVAzgcQA0gcBSgbQBSgaB2gVQB2gUCggKQC5gJB+AOQB/APBPAbQBPAbApAdQAqAdAPAUQAPAVAAAAg");
	this.shape_3.setTransform(146.6,45.4);

	this.instance_9 = new lib.Symbol20("synched",0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1,1,1).p("ALSg9QgBgHgVgVQgVgWgwgbQgxgbhSgYQhSgZh6gOQh6gOioAFQiPAGhzAVQh0AWhVAdQhWAdg5AdQg5AegdAWQgdAWgCAGQgCAEgEARQgEAQAEAZQADAaAVAdQAUAcAvAcQAvAcBSAVQBSAVB/ALQCAAKCzgGQCqgGB3gWQB4gVBOggQBOgfAtgiQAtgjAUggQAVgeAFgXQAFgXgBgJg");
	this.shape_4.setTransform(146.5,57.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E6E6E6").s().p("AkiDpQh/gLhSgVQhSgVgvgcQgvgcgUgcQgVgdgDgaQgEgZAEgQQAEgRACgEQACgGAdgWQAdgWA5geQA5gdBWgdQBVgdB0gWQBzgVCPgGQCogFB6AOQB6AOBSAZQBSAYAxAbQAwAbAVAWQAVAVABAHQABAJgFAXQgFAXgVAeQgUAggtAjQgtAihOAfQhOAgh4AVQh3AWiqAGQg+ACg6AAQhoAAhTgGg");
	this.shape_5.setTransform(146.5,57.1);

	this.addChild(this.shape_5,this.shape_4,this.instance_9,this.shape_3,this.instance_8,this.shape_2,this.instance_7,this.instance_6,this.shape_1,this.shape,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,221.4,88);


(lib.embryoart = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCE9C").s().p("At5EdQhxgjg4hpQg5hnAihuQAjhvBpg4QBpg1BxAjQBxAjA5BnQA4BpgiBtQgiBwhpA1QhBAihEAAQgqAAgsgNgALUD+Qhxgjg4hpQg5hmAihuQAihwBqg3QBog1ByAjQBxAiA5BnQA4BpgiBuQgjBvhoA1QhBAjhEAAQgrAAgrgOg");
	this.shape.setTransform(-32.2,22.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66CCFF").s().p("AD3ImQjhjiAAlCQAAlADhjpQDhjhE7AAQE7AADhDhQDhDpAAFAQAAFCjhDiQjhDok7AAQk7AAjhjogA0uIgQjhjgAAlBQAAlDDhjoQDhjhE7AAQE7AADhDhQDhDoAAFDQAAFBjhDgQjhDpk7AAQk7AAjhjpg");
	this.shape_1.setTransform(-0.2,1.2);

	this.instance = new lib.embryoshell();
	this.instance.setTransform(0.9,0.5,1.709,1.066,0,0,0,0.5,0.4);

	this.addChild(this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-176.8,-105,353.6,210.1);


(lib.egginctrans = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.nucleus();
	this.instance.setTransform(34.5,170.2,0.7,0.7);

	this.instance_1 = new lib.eggbigempty();
	this.instance_1.setTransform(47.1,164,0.5,0.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(7.8,124,78.5,80);


(lib.eggdivideart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_36 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(36).call(this.frame_36).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCE9C").s().p("AjPDPQhXhWAAh5QAAh5BXhXQBXhWB4AAQB5AABXBWQBXBXAAB5QAAB5hXBWQhXBXh5ABQh4gBhXhXg");
	this.shape.setTransform(-27,23.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCE9C").s().p("AifD9QgdgSgZgYQghgegVgkQgnhAABhRQgBhQAnhCQAWgkAggeQAXgVAZgPQAxgcAzgIQAegDAggBIADAAIAXAAQBJAABAAjQAdARAaAYQAbAaAUAeQAqBBACBRIAAAKQAABJggA8QgXArgmAiQgSARgTANQg9AphHAEIgeACIgOABIgQABIgLAAQhHAAg9gkg");
	this.shape_1.setTransform(-29.3,22.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCE9C").s().p("AijEAQgegRgbgYQgigegXgkQgphCABhTQgBhTAqhDQAXglAhgdQAZgVAagOQA1gaAygFIA/AAIADAAIAXgCQBKgFBDAhQAfAQAbAXQAcAaAWAfQAsBDACBTIAAALQAABLgjA9QgZArgoAiQgTAQgUAMQhAAmhIgBIgeABIgOACIgQACQgQACgQAAQg7AAg3geg");
	this.shape_2.setTransform(-31.7,21.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCE9C").s().p("AinEDQgfgQgcgYQgkgegYglQgshDABhVQgBhVAshFQAZglAjgdQAagUAcgNQA4gZAxgBQAfADAhgBIADAAIAYgDQBKgKBGAfQAgAOAdAYQAeAZAWAgQAvBEACBWIAAALQgBBNglA+QgbAtgqAgQgTAQgWALQhDAkhIgHQgPgBgQABIgOACIgQADQgZAFgYAAQgyAAgygYg");
	this.shape_3.setTransform(-34.1,20);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCE9C").s().p("AiqEGQghgQgdgXQglgegagmQgvhEABhXQgBhYAvhGQAagmAlgcQAagUAegMQA8gXAwACQAfAGAigBIAEAAQAMgBAMgDQBKgPBJAdQAiANAeAXQAfAZAYAhQAxBFACBYIAAAMQgBBPgoA/QgdAugsAfQgUAQgXAKQhGAhhJgMQgPgCgQABIgOACIgQAEQgfAKgfAAQgtAAgsgUg");
	this.shape_4.setTransform(-36.4,18.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCE9C").s().p("AiuEJQgigPgfgXQgmgdgcgnQgxhFABhaQgBhbAyhHQAbgnAngbQAbgUAfgLQBAgVAvAFQAgAJAiAAIAEgBQAMgBANgEQBLgVBLAbQAkANAfAXQAhAYAZAiQAzBGACBbIAAAMQgCBRgqBBQgfAugtAfQgWAOgXAKQhKAfhKgSQgPgEgQABIgOADIgQAGQglAPglAAQgnAAgpgRg");
	this.shape_5.setTransform(-38.8,17.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCE9C").s().p("AiyEMQgkgOgfgXQgogdgdgoQg0hGABhcQgBhdA0hJQAdgnAogbQAdgUAggKQBEgTAvAJQAfAMAjgBIAEgBQANgBAMgEQBMgbBOAZQAmALAgAXQAiAZAbAhQA1BIACBeIAAAMQgCBUgtBBQghAvgvAeQgXAOgYAJQhNAchKgYQgQgEgQABIgOAEQgJACgHAEQgpAVgrAAQgkAAglgOg");
	this.shape_6.setTransform(-41.2,16.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCE9C").s().p("Ai2EPQglgOghgWQgpgdgegpQg2hHAAheQAAhgA2hKQAfgoApgaQAegTAigKQBIgRAtAMQAgAPAjgBIAFAAQAMgCANgFQBMggBRAXQAnAKAiAXQAkAYAbAiQA4BKACBfIAAANQgDBWgvBCQgjAxgxAcQgXAOgaAIQhQAahLgeQgPgGgSACIgOAEQgIADgIAEQgsAcgwAAQghAAgigMg");
	this.shape_7.setTransform(-43.5,15.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCE9C").s().p("Ai5ESQgngNgigWQgrgdgggpQg4hJAAhgQAAhiA5hMQAggpArgZQAfgTAjgIQBMgQAsAPQAgATAkgCIAFAAQANgCANgGQBMglBVAUQAoAKAkAWQAkAYAdAjQA6BLACBiIAAANQgDBYgyBEQglAxgzAcQgYANgbAHQhTAXhLgjQgQgHgSACQgGABgIADQgIADgIAGQgvAig2AAQgdAAgfgKg");
	this.shape_8.setTransform(-45.9,14.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCE9C").s().p("Ai9EVQgogMgjgWQgtgdghgqQg7hKAAhiQAAhlA7hMQAigqAsgZQAhgSAkgIQBQgOArATQAhAVAkgBIAFgBQANgCANgHQBNgqBYASQAqAIAlAXQAmAXAeAkQA8BMACBlIAAANQgEBag0BFQgnAyg1AbQgZANgcAGQhWAVhMgpQgQgIgSABQgGACgIADQgIAEgIAGQgyApg6AAQgbAAgdgIg");
	this.shape_9.setTransform(-48.3,13);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCE9C").s().p("AjBEYQgpgMglgVQgugcgigrQg+hLAAhlQAAhnA+hOQAjgrAugYQAigSAlgHQBUgMAqAWQAhAZAlgCIAGAAQANgDANgIQBNgvBbAQQAsAHAmAWQAnAXAgAlQA/BOABBmIAAAPQgEBcg3BFQgoA0g3AZQgbANgdAGQhaARhMguQgQgKgSACQgGACgIAEQgJAEgHAHQg0AwhAAAQgZAAgagHg");
	this.shape_10.setTransform(-50.6,11.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCE9C").s().p("AjFEbQgrgLglgVQgwgcgkgsQhAhMAAhnQAAhqBAhPQAlgrAwgYQAjgSAmgFQBYgLAqAaQAhAbAlgBIAGgBQANgDAOgIQBNg0BeANQAuAGAnAWQApAXAgAlQBCBPABBpIAAAPQgFBeg5BHQgqA0g5AZQgcAMgeAFQhdAPhMg0QgRgLgSACQgHACgHAEQgJAFgHAHQg2A4hFAAQgWAAgZgGg");
	this.shape_11.setTransform(-53,10.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFCE9C").s().p("AjIEeQgtgKgmgVQgxgcgmgsQhDhOAAhpQAAhsBDhRQAmgsAygXQAjgRApgFQBbgJApAdQAhAfAmgCIAGgBQANgCAPgKQBNg5BhALQAvAFApAWQAqAWAiAmQBEBQABBsIAAAPQgFBhg8BHQgsA2g7AXQgcAMggAEQhgANhNg6QgQgMgTACQgHACgHAFQgJAFgHAIQg3A/hKAAQgVAAgWgFg");
	this.shape_12.setTransform(-55.4,9.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCE9C").s().p("AjMEhQgugJgogVQgygbgngtQhGhPAAhsQAAhvBGhRQAogtAygXQAlgRAqgDQBggHAnAgQAiAhAmgBIAHgBQANgDAOgKQBOg/BkAJQAxAEAqAVQArAXAkAnQBGBRABBuIAAAQQgFBig/BJQguA2g9AXQgdALghADQhjALhNhAQgRgNgTACQgHACgIAFQgIAGgHAJQg5BGhPAAQgTAAgUgEg");
	this.shape_13.setTransform(-57.7,8.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFCE9C").s().p("AjQEkQgvgIgpgVQg0gbgpguQhIhQAAhuQAAhxBIhTQAqguA0gWQAmgQArgDQBkgFAmAjQAiAlAogCIAGgBQANgDAPgLQBOhEBnAHQAzADArAVQAtAWAlAoQBIBSABBxIgBAQQgFBlhBBKQgwA3g+AWQgfAKgiADQhmAHhOhFQgRgOgTACQgHACgIAGQgIAFgHAKQg6BPhUAAQgSAAgSgEg");
	this.shape_14.setTransform(-60.1,7.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCE9C").s().p("AjUEoQgwgIgrgVQg1gagqgvQhLhRAAhxQAAh0BLhTQArgvA2gWQAngPAsgCQBogEAlAnQAjAnAogBIAGgBQAOgEAPgMQBPhJBpAFQA1ACAsAVQAuAVAmApQBLBUABBzIgBAQQgFBnhEBLQgyA4hAAVQggAKgiACQhqAFhPhLQgRgPgSACQgIACgIAGQgIAGgHALQg7BWhZAAQgQAAgRgCg");
	this.shape_15.setTransform(-62.5,5.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFCE9C").s().p("AjXErQgzgHgrgUQg3gbgrgvQhOhTAAhzQAAh2BOhVQAsgvA4gVQAogQAugBQBrgBAlAqQAiAqApgCIAGgBQAOgDAQgNQBPhOBtACQA1ABAvAVQAvAVAnApQBNBVABB2IgBARQgGBphGBMQg0A5hCAUQggAKgkAAQhtADhPhRQgRgRgSADQgKADgHAGQgJAGgGAMQg8BeheAAQgOAAgPgCg");
	this.shape_16.setTransform(-64.9,4.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCE9C").s().p("AjbEuQh2gOhQhXQhQhTAAh2QAAh4BQhXQBQhTBwAAQBwAAAjAtQAjAuApgCQAQgBAUgSQBQhTBwAAQBwAABQBTQBQBXAAB4QAAB2hQBTQhQBXhwAAQhwAAhQhXQgRgSgSADQgUAFgMAXQg9BnhjAAQgNAAgNgCg");
	this.shape_17.setTransform(-67.2,3.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFCE9C").s().p("AjdEvQh3gPhQhWQhRhUAAh2QAAh3BRhXQBQhTBxAAQBxAAAkAtQAkAuAnAOQAQgNAWgWQBPhWBxACQByABBQBTQBQBXABB4QgBB1hQBUQhQBWhxABQhxAAhOhTQgVgVgSgNQgQATgQAaQg9BkhjAAQgNAAgOgBg");
	this.shape_18.setTransform(-66.9,4.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFCE9C").s().p("AjfEvQh3gPhShWQhRhTAAh3QAAh2BRhXQBShTBxAAQByAAAmAuQAlAtAkAeQAPgaAYgYQBQhZByADQByACBSBUQBQBWABB3QgBB1hQBUQhSBWhxACQhyABhMhQQgYgYgTgeQgNAigSAcQg9BihkAAQgOAAgOgBg");
	this.shape_19.setTransform(-66.6,4.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFCE9C").s().p("AjhEvQh4gPhShWQhShTAAh3QAAh2BShVQBShUBzAAQByAAAnAuQAmAtAjAvQAOgoAZgbQBQhbB0ADQBzAEBSBUQBSBWAAB3QAAB1hSBTQhSBWhzACQhyAChKhMQgcgcgUgtQgIAwgWAeQg9BhhlAAQgNAAgPgCg");
	this.shape_20.setTransform(-66.3,5.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFCE9C").s().p("AjjEvQh5gOhShWQhThTAAh3QAAh2BThVQBShTB0AAQBzgBAoAuQAoAtAgA/QAOg1AageQBQheB1AFQB1AGBSBTQBTBWAAB3QAAB0hTBUQhSBWh0ACQhzADhHhKQgggegVg+QgFA+gZAiQg9BehlAAQgOAAgPgCg");
	this.shape_21.setTransform(-66,6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFCE9C").s().p("AjkEvQh7gOhThWQhThTAAh3QAAh1BThVQBThTB1AAQB1AAApAtQAoAtAeBPQANhBAdgiQBQhgB2AGQB2AHBTBTQBTBVAAB3QAAB1hTBTQhTBWh1ADQh0ADhFhGQgkghgVhOQgCBMgbAkQg+BchlAAQgOAAgPgCg");
	this.shape_22.setTransform(-65.6,6.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFCE9C").s().p("AjmEwQh8gPhThWQhUhSAAh3QAAh1BUhVQBThTB2AAQB2AAAqAtQAqAtAbBgQANhPAeglQBQhjB3AIQB3AIBUBTQBUBVAAB3QAAB0hUBUQhUBVh1AEQh1AEhDhDQgngkgWhfQACBbgfAmQg9BahmAAQgPAAgPgBg");
	this.shape_23.setTransform(-65.3,7.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFCE9C").s().p("AjoEwQh8gPhVhVQhUhTAAh2QAAh1BUhVQBVhTB2AAQB3AAArAtQArAtAaBwQAMhcAfgoQBQhlB5AJQB4AJBVBTQBUBVAAB3QAAB0hUBTQhVBVh2AFQh2AFhBhAQgrgogWhuQAFBpgiApQg9BYhmAAQgPAAgQgCg");
	this.shape_24.setTransform(-65,7.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFCE9C").s().p("AjqEwQh9gOhVhWQhVhSAAh2QAAh1BVhVQBVhSB4AAQB4gBAsAtQAsAtAXCAQAMhoAhgsQBQhoB6ALQB5ALBVBSQBVBVAAB3QAAB0hVBTQhVBVh3AFQh3AFg/g9QgugqgXh/QAJB3glAsQg+BWhnAAQgPAAgQgCg");
	this.shape_25.setTransform(-64.7,8.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFCE9C").s().p("AjsEwQh+gOhWhVQhVhTAAh2QAAh0BVhVQBWhSB5AAQB5gBAtAuQAtAtAVCQQALh2AjgvQBQhqB7AMQB6AMBXBSQBVBVAAB2QAAB0hVBTQhXBVh3AGQh4AGg9g6QgygtgXiPQALCFgnAvQg9BThoAAQgPAAgRgCg");
	this.shape_26.setTransform(-64.4,9.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFCE9C").s().p("AjuExQh/gPhWhVQhWhSAAh2QAAh0BWhVQBWhSB6AAQB6AAAvAtQAuAtASCgQALiDAkgxQBRhtB8ANQB7ANBXBTQBWBUAAB2QAAB0hWBSQhXBVh4AHQh5AGg7g2Qg1gwgYigQAOCUgpAxQg+BShoAAQgQAAgRgCg");
	this.shape_27.setTransform(-64.1,9.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFCE9C").s().p("AjvExQiAgPhXhVQhXhSAAh1QAAh0BXhVQBXhSB7AAQB7AAAvAtQAwAtAPCwQALiPAlg1QBRhwB9APQB9APBXBSQBXBUAAB2QAAB0hXBSQhXBVh6AHQh6AHg4gzQg5gzgYiwQARCigsAzQg9BQhoAAQgRAAgRgCg");
	this.shape_28.setTransform(-63.8,10.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFCE9C").s().p("AkIE7QiAgPhXhUQhXhSAAh2QAAh0BXhUQBXhSB7gBQB7AAAyAlQAzAlAIEOQAEBNggBUQg9BPhoAAQgRAAgRgCgABdDnQgvgqgViAQgUjiBFhSQBFhRB9AOQB9APBXBSQBXBVAAB1QAAB0hXBSQhXBVh6AHIgcABQhkAAgygtg");
	this.shape_29.setTransform(-60.3,15.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFCE9C").s().p("AlxE2Qh9gShShYQhShWAGh0QAFhzBbhQQBahNB5AGQB5AFA0AxQA0AwAADyQgBBUgtBOQhABHhhAAQgUAAgWgDgACqDUQgwg1gNh9QgLjOBMhOQBLhNB7ASQB7ASBSBWQBSBYgGB0QgGBzhZBNQhbBQh4ABQh5AAg4g8g");
	this.shape_30.setTransform(-68.3,16.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFCE9C").s().p("AnZExQh7gVhMhcQhNhZALhxQALh0BehLQBdhIB3ALQB4ALA1A8QA0A7gGDYQgIBZg5BJQhBA/hbAAQgYAAgagEgAGmEMQh3gHg4hFQgyg+gDh7QgCi7BRhJQBRhIB6AVQB4AWBOBZQBMBbgLByQgMBzhcBJQhXBFhrAAIgTgBg");
	this.shape_31.setTransform(-76.4,18.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFCE9C").s().p("ApBEsQh4gZhIhfQhIhcARhxQARhyBhhGQBghEB2ASQB2ARA2BGQA1BHgNC9QgPBfhEBEQhDA3hVAAQgcAAgegGgAHyEJQh2gOg4hOQg0hJAGh1QAHiqBYhFQBXhDB3AZQB3AYBIBdQBIBfgRBwQgSBzhfBDQhRA7hgAAQgSAAgTgCg");
	this.shape_32.setTransform(-84.5,20.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFCE9C").s().p("AqpEnQh2gchChjQhDhgAXhvQAWhyBkhBQBjg/B0AYQB1AXA3BRQA2BSgUCjQgWBkhQA/QhDAwhPAAQggAAgjgIgAI9EFQh0gVg4hXQg2hSAQhzQAQiXBdhAQBdg/B2AdQB0AbBEBhQBCBigXBvQgXByhiA/QhMAxhWAAQgaAAgcgFg");
	this.shape_33.setTransform(-92.6,21.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFCE9C").s().p("AsREiQhzggg9hlQg+hkAchuQAchxBng8QBmg6BzAdQByAdA4BcQA4BdgcCJQgbBphdA7QhDAohJAAQglAAgngKgAKIECQhygcg4hgQg4hdAZhwQAZiDBkg8QBjg6BzAgQBzAfA+BkQA9BlgcBvQgdBwhlA6QhHAphMAAQgjAAgkgIg");
	this.shape_34.setTransform(-100.7,23.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFCE9C").s().p("At5EdQhxgjg4hpQg5hnAihuQAjhvBpg4QBpg1BxAjQBxAjA5BnQA4BpgiBtQgiBwhpA1QhBAihEAAQgqAAgsgNgALUD+Qhxgjg4hpQg5hmAihuQAihwBqg3QBog1ByAjQBxAiA5BnQA4BpgiBuQgjBvhoA1QhBAjhEAAQgrAAgrgOg");
	this.shape_35.setTransform(-108.8,25);

	this.instance = new lib.embryoart();
	this.instance.setTransform(-76.5,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.instance}]},1).wait(1));

	// Layer 1
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#66CCFF").s().p("AobIjQjgjhgBlCQABlBDgjoQDijiE5ABQE7gBDgDiQDiDogBFBQABFCjiDhQjgDok7AAQk5AAjijog");
	this.shape_36.setTransform(2,4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#66CCFF").s().p("AmnKaQhHgthAg9QhZhTg5hjQhhioAAjSQAAjPBgiqQA6hmBZhVQA4gzA8gmQCChOCJgWQBNgJBTgCIAQAAIA6gBQDEgBCnBhQBJAqBCA9QBPBMA2BZQBnCqAFDRIAAAWQgBDDhUCeQg9ByhjBbQgvAsgyAiQikBwjAAKIhKADIgfACIgtACIgcABQi7AAiihkg");
	this.shape_37.setTransform(-1.8,4.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#66CCFF").s().p("Am0KjQhLgqhDg9QhehSg9hmQhpirAAjZQAAjWBoiuQA+hpBfhTQA7gyBAgjQCNhJCHgNQBOgBBVgCIARAAIA7gEQDGgPCwBbQBOAoBFA8QBUBKA6BbQBvCuAEDYIAAAXQgBDJhcCiQhDB0hpBZQgxArg2AgQitBojCgFQglgBgoACIgfADIgtAGQgqAFgpAAQieAAiShSg");
	this.shape_38.setTransform(-5.5,4.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#66CCFF").s().p("AnAKsQhPgphHg8QhihRhDhoQhxivAAjfQAAjeBwiyQBEhqBkhSQA+gwBEghQCZhFCEgDQBPAHBYgDIARAAQAegCAfgFQDHgdC6BVQBSAlBIA7QBYBKBABdQB2CxAEDgIAAAYQgCDPhlClQhHB3hvBWQg1Aqg5AeQi3BijEgVQglgEgpACIggAFQgXADgWAFQhAAPg/AAQiIAAiFhEg");
	this.shape_39.setTransform(-9.3,4.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#66CCFF").s().p("AnMK1QhTgnhLg7QhnhRhHhqQh5iyAAjmQAAjlB4i2QBIhtBphQQBCgvBIgfQCkg/CCAFQBRAQBZgDIASgBQAfgCAfgHQDJgrDDBPQBWAiBNA6QBcBIBEBfQB9C2AEDnIAAAZQgDDVhsCoQhNB6h1BTQg3Apg9AcQjABbjGgkQgngHgqADQgRABgPAEQgYAEgVAIQhSAahSAAQh4AAh5g4g");
	this.shape_40.setTransform(-13,4.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#66CCFF").s().p("AnYK+QhYglhNg7QhthPhMhtQiBi2AAjsQAAjtCAi6QBOhvBuhOQBFguBMgcQCvg7CAAOQBSAYBbgDIATgBQAggDAggJQDLg5DMBJQBaAfBQA5QBhBHBIBiQCFC5AEDuIAAAbQgEDbh0CsQhTB8h6BRQg7AnhAAaQjJBUjJgzQgngKgrADQgSACgPAEQgYAGgVAKQhhAohjAAQhsAAhugvg");
	this.shape_41.setTransform(-16.8,5.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#66CCFF").s().p("AnlLHQhbgkhRg5QhyhPhRhvQiJi6AAjzQAAj0CJi+QBThxBzhMQBIgtBPgaQC8g2B9AYQBTAgBegEIATgBQAggDAhgMQDNhHDVBDQBfAdBTA4QBmBGBMBjQCNC+ADD1IAAAcQgEDhh8CvQhZB/iABOQg+AnhDAXQjTBNjKhCQgogOgsAEQgSACgRAGQgXAGgVAMQhtA4h0AAQhhAAhmgng");
	this.shape_42.setTransform(-20.5,5.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#66CCFF").s().p("AnxLQQhfgihVg5Qh3hOhVhxQiRi9AAj7QAAj7CQjCQBYhzB5hKQBLgsBTgXQDHgxB7AgQBVAoBfgDIAUgCQAhgEAhgNQDPhVDfA8QBiAbBYA3QBqBEBQBmQCVDBADD8IAAAeQgFDniECyQhfCBiFBNQhBAlhHAVQjcBGjMhRQgpgRguAEQgRADgSAGQgXAIgWAOQh3BJiDAAQhYAAheghg");
	this.shape_43.setTransform(-24.3,5.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#66CCFF").s().p("An9LZQhkgghYg4Qh7hNhbh0QiZjBAAkBQAAkDCZjFQBdh2B9hHQBPgsBXgVQDTgsB4ApQBWAxBhgEQALAAAKgBQAhgFAjgQQDQhjDoA3QBnAYBbA2QBvBCBVBpQCcDFACEDIAAAeQgGDuiMC2QhkCDiLBKQhEAkhKAUQjlA+jPhgQgpgUgvAFQgSACgSAHQgYAKgVAQQiABbiSAAQhRAAhWgcg");
	this.shape_44.setTransform(-28,6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#66CCFF").s().p("AoKLiQhngehbg4QiBhMhfh2QihjEAAkJQAAkJCgjKQBih4CDhFQBSgqBbgTQDegnB2AyQBXA5BkgEQALAAAKgCQAigFAjgSQDThxDxAwQBrAVBeA1QBzBCBaBrQCkDJACEKIAAAfQgHD0iUC5QhpCHiRBHQhHAjhNARQjwA4jQhwQgqgXgwAFQgSADgTAIQgYAKgVATQiIBtihAAQhKAAhQgXg");
	this.shape_45.setTransform(-31.8,6.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#66CCFF").s().p("AoWLrQhsgcheg3QiGhLhkh5QipjIAAkPQAAkRCpjNQBnh6CIhEQBVgpBfgQQDpgjB0A8QBZBBBlgFQAMAAAKgCQAjgFAkgVQDUh/D6ArQBvASBiA0QB4BBBeBtQCrDNADERIgBAgQgHD6icC9QhvCJiXBFQhKAhhQAPQj5AxjTh+QgrgbgxAGQgSADgTAJQgYALgVAVQiPCBiwAAQhEAAhJgUg");
	this.shape_46.setTransform(-35.5,6.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#66CCFF").s().p("AoiL1Qhwgbhig2QiLhLhoh7QixjLAAkWQAAkYCxjRQBrh9CNhBQBZgoBigOQD2geBxBFQBaBJBngFQAMAAALgCQAjgGAlgXQDWiNEEAlQBzAQBmAzQB8A/BiBvQCzDRACEYIAAAhQgJEBijC/Qh1CMicBCQhNAhhUANQkCAqjViOQgsgdgyAFQgTAEgTAKQgZAMgUAXQiVCVi+AAQg/AAhDgQg");
	this.shape_47.setTransform(-39.3,6.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#66CCFF").s().p("AovL+QhzgZhmg1QiQhKhth9Qi5jPAAkeQAAkeC5jWQBxh+CShAQBcgnBmgLQEBgZBvBNQBbBSBqgFQALAAAMgCQAkgHAlgZQDYibENAeQB4AOBpAyQCBA+BmBxQC7DVACEfIgBAiQgJEHisDDQh6COiiBAQhQAghXAKQkMAjjXicQgsghg0AGQgTAEgTAKQgZAOgUAZQiaCqjNAAQg6AAg+gOg");
	this.shape_48.setTransform(-43,7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#66CCFF").s().p("Ao7MIQh4gYhpg0QiUhJhyiAQjBjSAAklQAAkmDBjZQB2iBCXg9QBfgmBqgJQEMgUBtBWQBdBaBrgFQALAAANgDQAkgHAngbQDZipEWAYQB9ALBsAxQCGA8BrB0QDCDZABEmIgBAjQgJEOi0DGQiACRioA9QhSAfhbAIQkVAcjZisQgtgjg1AGQgUAEgTALQgZAPgVAbQieC/jcAAQg1AAg4gLg");
	this.shape_49.setTransform(-46.8,7.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#66CCFF").s().p("ApHMRQh8gVhsg0QiahIh3iCQjJjWAAksQAAktDJjdQB7iDCdg7QBiglBugHQEYgPBqBgQBeBhBtgFQALAAAOgDQAlgIAngdQDci3EfASQCAAIBwAwQCKA8BwB1QDKDdABEtIgBAkQgKEUi8DKQiGCUitA6QhWAeheAGQkfAVjai7Qgugng1AHQgWAEgTANQgZAQgVAdQiiDTjrAAQgwAAgzgJg");
	this.shape_50.setTransform(-50.5,7.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#66CCFF").s().p("ApUMbQh/gUhwgyQifhIh7iEQjRjaAAkzQAAk0DRjhQCAiFChg6QBmgjBygFQEjgKBoBpQBfBqBwgGQALAAAOgDQAmgJAngfQDejFEoAMQCFAGB0AvQCOA6B0B4QDSDgAAE1IgBAlQgLEajDDNQiMCWizA5QhYAchiAEQkoAOjdjKQgugqg2AHQgXAFgTANQgaARgUAfQimDpj5AAQgsAAgvgHg");
	this.shape_51.setTransform(-54.3,7.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#66CCFF").s().p("ApgMlQiEgShzgyQikhHiAiHQjZjdAAk5QAAk8DZjkQCFiICng4QBpgiB1gDQEvgFBmByQBgByBygFQAMAAAOgEQAmgJApghQDfjTEyAGQCJACB3AuQCTA5B4B6QDZDlABE7IgBAmQgMEhjMDQQiQCZi5A2QhcAbhlACQkxAHjfjaQgwgsg2AHQgXAFgUAOQgaASgUAiQipD/kJAAQgnAAgqgGg");
	this.shape_52.setTransform(-58,7.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#66CCFF").s().p("AptMvQlKgojhjpQjhjhAAlAQAAlDDhjoQDhjhE6AAQE7AABiB6QBjB7BzgGQAygBA5gwQDhjhE7AAQE7AADhDhQDhDoAAFDQAAFAjhDhQjhDpk7AAQk7AAjhjpQgwgwg4AIQg2ANgjA+QisEVkXAAQgkAAgmgEg");
	this.shape_53.setTransform(-61.8,8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#66CCFF").s().p("ApsMxQlLgojhjpQjhjhAAlAQAAlDDhjoQDhjhE7AAQE6gBBlB7QBlB7BsAmQAxgkA8g5QDgjpE8AEQE7AEDhDhQDhDoAAFDQAAFAjhDhQjhDpk7ABQk7ACjajgQg4g4g5glQgtA0grBGQirEPkXAAQgkAAglgEg");
	this.shape_54.setTransform(-61.8,7.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#66CCFF").s().p("ApsMyQlLgojhjoQjhjhAAlBQAAlCDhjpQDhjhE7AAQE7AABnB7QBnB7BmBTQAuhIBAhDQDejvE9AHQE8AHDhDhQDhDpAAFCQAAFBjhDhQjhDok7AEQk7AEjSjYQhChBg6hRQgkBbgyBNQiqEKkVAAQglAAgmgFg");
	this.shape_55.setTransform(-61.8,7.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#66CCFF").s().p("ApsM0QlLgojhjoQjhjhAAlDQAAlADhjpQDhjhE7AAQE7AABqB7QBpB6BfCAQAthsBDhLQDdj2E9AKQE9ALDhDhQDhDpAAFCQAAFBjhDhQjhDok7AGQk7AFjLjPQhLhKg7h9QgaCCg6BUQioEFkVAAQglAAgngFg");
	this.shape_56.setTransform(-61.8,7.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#66CCFF").s().p("ApsM2QlLgojhjoQjhjhAAlDQAAlADhjpQDhjhE7AAQE8AABsB7QBrB6BYCsQAriPBHhUQDbj+E+APQE+AODhDhQDhDpAAFCQAAFBjhDhQjhDok7AHQk7AHjEjGQhUhSg8iqQgQCqhCBbQinD/kUAAQgmAAgngFg");
	this.shape_57.setTransform(-61.8,7.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#66CCFF").s().p("ApsM4QlLgojhjoQjhjhAAlDQAAlADhjpQDhjhE8AAQE7AABuB7QBuB7BRDYQAqizBKhdQDakFE/ASQE+ASDhDhQDhDpAAFCQAAFBjhDhQjhDok7AJQk7AJi9i+Qhchag9jXQgHDRhKBiQimD6kTAAQgmAAgogFg");
	this.shape_58.setTransform(-61.8,7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#66CCFF").s().p("ApsM6QlLgojhjoQjhjhAAlDQAAlADhjpQDhjhE8AAQE8AABwB7QBvB7BLEFQAojXBOhmQDZkME/AVQE/AWDhDhQDhDpAAFCQAAFBjhDhQjhDok7ALQk7ALi2i2Qhlhjg+kDQACD4hRBqQikD0kTAAQgmAAgpgFg");
	this.shape_59.setTransform(-61.8,6.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#66CCFF").s().p("ApsM8QlLgojhjoQjhjhAAlDQAAlADhjpQDhjhE8AAQE9AAByB7QBxB7BFExQAlj6BShvQDXkUFAAaQFAAZDhDhQDhDpAAFCQAAFBjhDhQjhDok7ANQk7AMiuiuQhvhqg/kwQAMEghZBwQijDvkRAAQgoAAgpgFg");
	this.shape_60.setTransform(-61.8,6.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#66CCFF").s().p("ApsM+QlLgojhjoQjhjhAAlDQAAlADhjpQDhjhE8AAQE9AAB1B7QBzB7A+FeQAkkeBVh4QDWkbFAAdQFBAdDhDhQDhDpAAFCQAAFBjhDhQjhDok7APQk7AOinilQh4h0hAlcQAWFHhhB4QiiDpkQAAQgoAAgqgFg");
	this.shape_61.setTransform(-61.8,6.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#66CCFF").s().p("ApsNAQlLgojhjoQjhjhAAlDQAAlADhjpQDhjhE9AAQE9AAB2B7QB2B7A3GKQAilBBZiBQDUkiFCAhQFBAgDhDhQDhDpAAFCQAAFBjhDhQjhDok7AQQk7AQigicQiAh8hBmJQAfFuhoB/QiiDlkOAAQgpAAgrgGg");
	this.shape_62.setTransform(-61.8,6.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#66CCFF").s().p("ApsNDQlLgojhjpQjhjhAAlCQAAlBDhjoQDhjhE9AAQE9gBB5B7QB4B7AwG3QAhllBciJQDTkqFCAkQFCAlDhDhQDhDoAAFDQAAFAjhDhQjhDpk7ARQk7ASiZiUQiJiFhCm1QAmGWhtCGQigDfkOAAQgpAAgsgFg");
	this.shape_63.setTransform(-61.8,6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#66CCFF").s().p("AptNEQlKgnjhjpQjhjhAAlCQAAlBDhjoQDhjhE9gBQE+AAB6B7QB7B7ApHkQAfmJBgiSQDRkxFDAoQFDAoDhDhQDhDoAAFDQAAFAjhDhQjhDpk7ATQk7AUiSiNQiSiMhDnhQAwG8h1CNQifDakMAAQgqAAgugGg");
	this.shape_64.setTransform(-61.8,5.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#66CCFF").s().p("AptNEQlKgnjhjpQjhjhAAlCQAAlBDhjoQDhjhE9gBQE+AAB6B7QBoBoA8JsIgHguQAwG8h1CNQifDakMAAQgqAAgugGgACwKUQh2hxgRlFQggqSBYiHQDRkxFDAoQFDAoDhDhQDhDoAAFDQAAFAjhDhQjhDpk7ATQgmADgkAAQkCAAiBh8g");
	this.shape_65.setTransform(-61.8,5.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#66CCFF").s().p("AqFM7IgQgCQk8gkjajeIgHgHQjgjgAAlCIAAAAQAAlADgjpIAEgEQDfjdE6AAIALAAQEqABCEB7QAnAlAjBbQBTC+AjGCIgFgdIgBgCQAmGhiCCdIgEAFQioDbkSAAQgkAAglgEgAC8KCQiIiEgOlEQgbpbBviXQDUkjFCAhQFBAhDhDhQDhDpAAFCQAAFBjhDhQjhDok7AQIg6ACQkQAAiQiNg");
	this.shape_66.setTransform(-64.3,5.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#66CCFF").s().p("AqeMxIgQgBQk8gdjbjgIgHgGQjfjhAAlBIAAgBQAAk/DfjoIAFgEQDejdE5gCIALAAQEeABCQB+QArAlAmBTQBsDEAfFvIgEgOIgBgCQAgGPiWCqIgEAEQixDckaAAQgcAAgdgCgADIJwQiaiXgLlEQgWoiCGinQDWkXFBAbQFAAbDhDhQDhDoAAFDQAAFAjhDhQjhDpk7ANIgsABQkbAAigifg");
	this.shape_67.setTransform(-66.8,5.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#66CCFF").s().p("Aq2MnIgRgBQk7gVjejjIgFgFQjfjgAAlBIAAgBQAAk/DfjoIAEgEQDejdE4gCIALAAQETABCbB/QAvAmApBLQCGDKAaFdIgCgBIgBAAQAYF7ipC3IgEAFQi8DdkgAAIgogBgADUJdQisipgJlEQgQnpCdi4QDZkJE/AUQE/AUDhDhQDhDpAAFCQAAFBjhDhQjhDok7AKIgfAAQklAAiwixg");
	this.shape_68.setTransform(-69.3,4.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#66CCFF").s().p("ArPMdIgRAAQk7gPjfjkIgFgFQjejgAAlAIAAgBQAAk/DejnIAEgEQDejdE2gDIALAAQEJAACnCCQAxAmAtBEQCfDPAWFLIgBANIAAABQAPFni7DFIgEAEQjHDfkoAAIgWAAgADfJLQi9i8gGlDQgKmxCzjIQDcj8E9ANQE+AODhDhQDhDoAAFDQAAFAjhDhQjhDpk7AGIgTAAQkuAAjBjDg");
	this.shape_69.setTransform(-71.8,4.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#66CCFF").s().p("ArnMTIgSAAQk7gHjgjnIgEgEQjejgAAlAIAAgBQAAk+DejnIAEgEQDdjdE1gEIALAAQD+ABCyCDQA1AnAwA8QC5DUASE6IAAAaIgBACQAHFUjNDSIgEAEQjTDikwAAIgCAAgADrI4QjPjOgDlDQgFl5DKjYQDejvE9AHQE8AHDhDhQDhDoAAFCQAAFBjhDhQjhDpk7ADIgJAAQk1AAjRjWg");
	this.shape_70.setTransform(-74.3,4.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#66CCFF").s().p("AD3ImQjhjiAAlCQAAlADhjpQDhjhE7AAQE7AADhDhQDhDpAAFAQAAFCjhDiQjhDok7AAQk7AAjhjogA0uIgQjhjgAAlBQAAlDDhjoQDhjhE7AAQE7AADhDhQDhDoAAFDQAAFBjhDgQjhDpk7AAQk7AAjhjpg");
	this.shape_71.setTransform(-76.7,3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36}]}).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[]},1).wait(1));

	// Layer 5
	this.instance_1 = new lib.embryoshell();
	this.instance_1.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.67,scaleY:1.03,x:-55.6,y:6.4},17).to({regX:0.5,regY:0.4,scaleX:1.71,scaleY:1.07,x:-75.7,y:3},18).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-194.5,-95.5,301,197);


(lib.cow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("Ao2QfQgIgCgHgHQgUgjgJgmQgKglgGgmQgGglgJgjIgJgJIgBgBQgJgFgFgHQgGgHAAgGQAAgFACgIQADgIAFgHQAEgHAGAAIAAgBIAAgJQAJgoACgmQABglgDgmQgEglgFgoIAAgIIAAgIIAAgOIAAgJIAAgBQgJgBgCgHQgDgHAEgKIAIgVQAEgMAGgLQAGgLAGAAIAKgeQAIgNADgKQADgKgEgCQgDgCACgNQACgNAIgVQAHgVAOgZIACgBIANgIIAjgVQAHgFABgPQABgQgBgVIgCgoQAAgUAEgNIAAgBIADgIIAHgVIAAgJIAAgBQgGgBgCgEQgBgFABgFQACgFAGAAIABgFQABgFADgDQACgCADAFQALgGAIAEQAHAGAFAMQAFAMACANIACATIACAAIASAAQAIgBAGADQAFADABAPQAAAGAFABQAFAAAKADQALAFAGABQAGABAHgHQAOgPAKgNQAKgNAKgIQAKgJAQgCQAPgDAGgRQAGgQAFgUQAFgWANgUIgBgCIgCgNIgHgjIAAgVIAAgIIAAgBQAVAAALgGQALgGgDgIIAAgBIAAgJQAHAAAIgBQAHgCAIgHIAFgOQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAIAMAHQAHgBADgFQADgGAHgIIAAgJIAAgBQgEgFAKgKQAKgKATgKQAJgGAOgGIAcgLIAUgJQACgBABAAQABgBABAAQAAgBAAAAQAAAAgBAAQgGgBACgEQABgFAGgFQAHgFAKAAQAJgIABAIIAAABIAAAJIAAAJIAAABQAIAAAEADQAGADAAAEIAAABIAAAJIAAAJIAAABQAIAAAMAOQALAPAJAVIAAABIAAAIIAAAVQADADgEAEIgJAJQgGAFgEAFQgEAGAEAIIAOAVIAFAIIABABQACANgFAHQgFAHgGAEQgGAEAAAFIAAAUIAAAUQAAAIAGAEQAGAFAIgHQAFgKAKgFIARgHQAHgEABgEQAAgUAFgPIANgeQAGgQAGgTQgBgFgDgFQgDgEACgDQACgDANAAIABgBIAIgIIAVgVIADgIQAEgHAJgHQAJgIAPAAIAJAAIABAAQgEgNADgIQADgJAIAAIARgJIADgBQgFgGAFgCQAGgDAJgCIAPgCQAFgCAEgJIAGgQQACgIADAAQADAAAIgJQAJgIALgQQAKgPAJgWIAAgCIADgNIAHgjIAAgJIAAgBQgQgBAagJIAAgDIAAgRIAAgJIAAgBQgIgJASgBIAAgBIAAgJIgOgyIgGgSIAAgCIAEhBIACgtIAAgIQAAAAABAAQAAgBABAAQAAAAABAAQAAgBABAAIAAgBIAAgJIAAgSIAAgCQgNgRgIgRQgJgRAAgJQgBgGgGgEIgLgKQgEgFACgFIAAgBIAAgJIgHgcIgDgLIAAgBQgeAEgUgGQgTgGgBgMIgBAAIgJAAQgXAHgWAKQgXALgWAWQgKAEAAgFIgBgMQAAgHgJAAIgJAAIgBAAQgBAFgEACQgFACgFgCQgFgCAAgFIgBAAIgJAAIgJAAIgBAAIAAgLIAAgJQgBgHgFgCQgGgCgIABIgJAAIgBAAIAAgKIgBAAIgJAAQgJADAAgOQAAgOAJgZIACgBIASgJIAVgOIAIgGIABAAQAZgJARAAQARAAABAJIABAAIAJAAIAKAAIAKAAIAJAAIABAAQAAgGAFgCQAFgBAFABQAEACABAGIABAAIAJAAQAOgEADgLQADgLgBgNQgCgNABgJQABgJALAAQAKgFAMADQALADAIAHQAIAGABAGQAXAtAcAlQAcAmAfAeQAHAIACANQABANAAAQQAKAUARAUIAgAoQAPAUAGAUQAHAPgDAYQgEAXgIAYIgPAqQgHARAAAFQgFAnAMAhQALAgASAfQASAeAQAjQAFAPAQAMQAPANATAMQATANAQAPIARARIADADIAKAUIgBABIgJAJQgFAJgIAGIgPAKQgHAFgFAKQgBAIACAGQACAFAHABIAKAAIAKAAIAJAAIABAAQAAgFAEgCIALgBQAFAAAFgCQAHgFAHAEQAHAFgBAQIgCAdIAAAeQgBANgCgCIgBAAIgJAAQgTAMgHASQgHASgBARQgBASACAJIACAGIAAAAIgJAAIgJAAIgBAAQgFADgLgJQgLgLgNgVIgDgDIgRgRQgFgKAAgNIADgZIACgWQgFgUAFgXIAJgtQAFgWgEgUQgHgHgHgJIgQgYQgHgLgNgLQgNgKgNgEQgOgEgKAKIgSARIgCADIgsAAIgkAAIAAACIAAASQgFAZACAdQABAdgCAaQgCAZgOAQQgGAKgPAEQgQAEgTABIgiABQgQAAgNAMQgOALgIASQgJASAAAVIAAAJIAAABQANAAALAOQALANAFAVIABACIAJASQAKAPADATQADATgDAQQgDAPgKAGQgKAOgFAEQgFAEgFgBIgPgBIgjAAIgNAAIgCAAQADAUgJAQQgJAQgPALQgPAKgPACQgPACgJgIQgJgIADgVQgBgHgFgCQgGgCgIABIgJAJIgBABIgJAcQgEALgCABQgDAAgGgDQgEgDAAgEQgBgEgMAHQgLAHgLAPIgPAZIgOAZQgGAJAAgEIgBAAIgJAAIgKAAIgKAAQgIAEgGAQIgPAhQgJARgMAKQgMAJgSgJQgSgLgMgTQgLgUgJgUQgIgUgJgMQgJgMgOAEQgUAIgBAOQAAAPAKAPQAKAQAKAKIALAMIAQAsQAHAUAFALQAFALACgBQACgCAEAfQAEAfAFA3IgBACIgIAQIgVAqQgQAUgQARQgRASgNARQgNASgFAUQgKAUAAARIgBAjQAAASgJAUIgGAAIgOAAQgMAIgKAOQgLAOgKAPIgQAXQgHAJgEgDQgIgBgGACQgGACAAAHQgBAUgIAQQgJAQgNALQgOAMgPAFQgPAHgKAJIgZAYIgEAAIgLgBg");
	this.shape.setTransform(86,149.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("ABCBUQgpgDgBgbQgCgcgMgBQgKAAgGgKQgQALgXAcQgWAcgagsQgagqBIAAQBFAAgXgaQgZgaAGgKQAHgLARgBQATAAAFgCQAFgCAHgBIAMAAQAGAFAJAFQAJAGAFAHQAGAHgFAKIgKAMQgGAHgHAFQgHAFAdAWQARAWADAeQACAYgaAAIgLAAg");
	this.shape_1.setTransform(353.5,43.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("ABBErQgZgRgJgJQgJgKAAgGQAAgHACgIQACgJgBgOQgDgTgDgFQgDgFgIADQgHADgOADQgRACgLgMQgMgLgIgUQgIgTgEgUQAAgegJgXQgJgWgWgPQgGAAgNgBQgMgCgPgGQgOgHgKgNQgIgWgGgWQgGgXAAgWIgLg0IgLg4QgFgbgBgSQAAgRAIAAIAOACQAEABABgCIABgLQAAgJgGgDQgGgDgDgEQgDgDAIgIQAIgJASgBQATAAAWAHQAWAIAVAPQAPAJAUADIAnAGQAUACAOAKQAFAAAFAIIAKARQAFAJAFAGQAHgBAHACQAIABAIAIQAFAFACANIAFAeQADAQAFAQQAQAvAaAqQAaApAaAlQAZAlAQAgQAPAfgFAYQgGAZgRAcQgQAdgYAWQgYAXgbAIQgIADgJAAQgRAAgRgLg");
	this.shape_2.setTransform(318.2,54.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AihFEQgFgDgEgFQgDgGgHgIQgFgFgGgKQgGgKgJgKQgJgJgPgGQgLAAgBgLQgBgKAAgPQABgPgFgMQgFgMgSgFIgQABQgMABgOgBQgPgBgKgEQgKgFAAgLQAAgLARgTQAKgKAGAAQAHAAADACQAEADAAgFQgBgSgJgIQgJgHgOgCIgagBQgNAAgIgEQgHgEgCgMIgEgaQgBgOgGgIQgGgIgOACQgFAAgHgFIgNgMQgFgFAAAEQgBAAgBAAQAAAAAAAAQgBAAAAAAQAAgBABAAIACgCQAAAAAAgBQAAAAAAAAQgBAAgBAAQAAAAgBAAIgRAEQgNADgDgPQgCgPACgYQACgYAAgZQABgXgHgQIAAABQAAABAAAAQAAAAAAABQgBAAAAAAQgBAAgBAAQgEAAgNgEQgKgDACgEQABgDAHgEIANgIQAGgEABgEIAAgKIAAgKQAAgHgGgBQgGgCgIAAIgEAAQABAAAAABQAAAAAAAAQAAABAAABQAAAAAAABQAAAFgHALQgGAHgRgDQgQgDgTgKQgSgLgKgPQgLgPAHgRQAGgRAigQQAtgMAugIQAtgIArADQArADAkAWQAkAWAaAwIACANIACAPQABAHgFAFQAEAGABAJQABAJAFAFQAEAGAPgFQAHgHAIAFQAHAEAIAIQgBAIgEAGIgFAGQAAAKAIAKQAIAJAJAIIAPANQAOAPADAPQADAPAAAPQAAAIAGAFQAGADAIgGIAfgtQARgWAWgXQgQgFgQgMIgbgTQgLgIAAAEIgWgBQgKgCgEgGQgEgHAKgOQAIgKAOgBIAegBQAQABAPgFQAPgGAMgSIgGgGIgOgOQAAAHgGACQgGACgIgBQgHgHgCgIIgBgPQADgJAPgJQAPgIAVgIQAVgHATgGQAUgGAPgDIATgEIA8AAQAFAAAIgGQAJgGAKgFQAJgFAJACQAIAEACAKQACAKgBAKIgBAQQAeAeAeAAQAZAFAYAAIAwADQAXADAUAJQASALARgBIAkgCQATgCAYAFQAYAGAgAXQAqAfAOAXQANAWgEAUQgEAUgLAYQgKAPgIADQgJAEgMgDIgfgJIgKAAIgKAAQAAAKgBAIQgCAIgJAHQgIAGgUAJQgPAHgIgHQgHgHgEgMIgKgfQgFgQgLgMIgGAAIgOAAQgEAFACAHQACAGgCAKQgCAJgQANQgOAKgPgEQgQgDgQgLQgPgMgNgOQgNgOgIgMQgQgWgMgYQgMgYAAgeIAAgTQgBgJgGgBQgHgCgQALIgPAyIgPAyQgGAWACAXIAEAtQgXABgVAKQgVAMgPAPIgNAcIgPAgQgHAPgFAFQgBAFgKACQgLABgOgEQgMgEgKgKIgMgCQgHgBgGACQgFACAAAJIgBAdIgEAzQgDAdgGAcQgHAdgLAUQgLAUgRAEQgYAFgLAAIgDAAQgJAAgEgDg");
	this.shape_3.setTransform(216.9,42.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#999999").ss(0.5,1,1).p("AAtgGQgBgBgOgHQgOgHgQgGQgRgHgKABQgNADgDAJQgCAKACALQADAMAIAKQAHALABAB");
	this.shape_4.setTransform(9.1,253.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#999999").ss(0.5,1,1).p("Ak7h0QAAgBAOgQQAPgQAXgUQAXgVAbgOQAbgOAZACQASADAiAQQAiAPArAaQAqAZAuAfQAvAfAqAhQAqAhAfAdQAeAgANAZQAgBFAMAgQAMAhgBAA");
	this.shape_5.setTransform(309.3,153.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#999999").ss(0.5,1,1).p("AgHkMQAAAAgCAZQgDAZgCAoQgDAogBAsQAAAtADAoQADAeAFAlQAEAmADAlQAFAlAEAfQAEAeADATQACATABAA");
	this.shape_6.setTransform(346.1,223.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#FFCCCC","#CCCCCC"],[0.424,1],0,0,0,0,0,24.2).s().p("AAIC9QgGgMABgQQAAgQgDgMQgBgNgQABQgCABACAMIADAbQAAAPgGAKQgGAKgSgDQgMgDgDgUIgFgrQgCgYgLgTQgJgQgXgEIgHgBQgigBgSgKQgRgJgIgQIgGgPIgFgTIgIghIAAgMQgGACgFgDIADgDQANgbAKgcQAHgVAOgQQARgVAXgOQAlgFAkgJQBOAABOAPQAbAFAIAaQAEAKAIAIQAbAWAQAcQARAOADAXIAIA7QAFAiAIAhQACAHgHAGQgGAEgFACQgGACgFgBQgEgCgEgDIAAAEQgOgDgVgIQgbAEgHAMQgHAMADAPIAHAcQAFAOgEAJQgEAJgVAAQgLgBgFgOQgGgNgDgRQgDgRgDgKQgEgLgHAFQgMAPAAAPQgBAOAEAMQADAMgBAIQgBAIgMABIgHAAQgRAAgFgJg");
	this.shape_7.setTransform(307.3,164.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCCCC").s().p("A57UwQgSgMAEgZQABgIgPAEQgPAEgVAIIgpAPQgUAHgJgCQgbgIgWgUQgWgUgNgaQgNgbgBgdQgBgdAOgbQAUgoAJgnQAJgnAIgoQAIgnAOgoQASg0ABgvQACgvgEgtQgFguAAgvQAAgvAOg0QAQgtAJgwQAKgwgGguQgBgOgGgLQgGgKgFgSQgEgSAEgkQAEgkANgPQAMgPAUgBQATAAAZAFQAGABASAHIAnASIAiAQQAHADAKgMQAJgMAKgUQAKgUAJgXIARgoQAHgRAFgHIAUgbIAggmIAggqIAYgfIAgg5IAig7QAQgeAOgUQAQgYAPgfIAdg9IAZg1IASgpQAJgQAHgTIANglIAKgdQARgzAIguIARhcQAIgvAUgxQAKgaAOgeQAPgeARgcQARgcARgSQANgOAVgRQAVgRAYgRIAugfIAjgYIAggVIAxgeIA1gfIAvgZQAUgLAJgCIAjgIIAvgHQAYgEAYgBIA7gCICAgDICxgCIDPAAQBuAABwADQBwACBpAFQBpAGBYAIIAeABIAkACIAiABQAOAAAGgCQAygVAfgFQAegFATAEQATAEAPAHQAPAHARAEQAZADAYgJQAYgIAUgMQAUgLALgDQAXgGAfADIBDAFQAkADAkgEQAlgEAigSQAfgPAigFQAjgGAfADQATABAPAEQAPAEAVAKIA2AZQAiAQASAVQATAVALAZIAWA0QAMAbAFApQAGApgCAtQgCAtgJApIgbB0QgOA2gNAsQgNAsgNAeQgNAdgJAXQgIAXgGAZQgGAZgHAjQgGAjABAfIAAA8QAAAegIAfIgPAyQgJAbgGAfQgHAfACAiQACAiAOAlQAAAFANAMIAhAcQAUATAVAZQAUAYANALQANAMAKAGIAZAOQAWAOAKADQAKADAGAAQAFAAAHAEQAHADAPAOQAQAOADARQADARgFATQgFATgIAVQgIAUgGAWIgkCEIgiB/IgmCFQgKAagCAjQgBAjAFAjQAFAjAKAZQAVA8AHA4QAGA3AAA8QAEAUgFATQgGAUgKARQgKASgLAPQgTAUgQAKQgPAKgTAAQgTgBgdgKQgYgKgJgRQgJgQgEgTQgDgTgGgRQgJAWgPASIgaAeQgNAPgKAHQgLAHgRACQgQADghACIgXgDQgSgDgXgHQgWgHgRgLQgQgKgBgPQgEgsAOgdQANgdAVgYQAVgXAVgdQAVgdAMgsQAOg9AFhIQAFhJgDhMQgEhNgKhIQgKhJgPg8QgFABgHAFQgFAEgKABQAFgCAGgFQAGgFgCgIQgIghgEgiIgIg9QgDgXgRgNQgRgdgagWQgJgHgDgLQgJgZgagFQhOgPhRgBQgjAKglAEQgXAPgSAUQgOARgHAUQgJAdgNAaIgDAEQAFADAFgCIAAAMIgDgKIgOAPIgMAOIgZAWQgWATgYAOQgXAPglAMQglAMg8AMQgvAJg7ABQg7ACg/gFQg/gFg6gKQg6gJgsgNQg0gQglgQQgkgPgfgRIhDgjQgjgTgzgXQgZgJgVAJQgVAIgNATQgNATAAAUIgDAXIgEAnIgFAoIgDAWQgGCHgMCAQgNCAgLCCQgMCCAACMQgBAKgJARQgJARgMASQgMARgLAKQgdAVgbAJQgcAJgjgGQgjgGg0gaQgIgFgIgUQgIgUACgaQABgZATgVQAUgZAIgbQAJgaAFgZQAFgZAKgUQAUgkAJgvQAJgwgEgwQgFgxgUgpQgOgtgFgrIgIhWQgDgqgKgtIgQAHQgHAEgIAIQgHAIgMAUQgKAPgTADQgTADgXgDQgWgCgUAAQgUAAgMALQgKAKgHAPIgMAeQgFAPgFALQgUAjgQAlQgQAlgUAjQgTAjgdAfQgPAPgIAOQgJAOgHAPIgQAkQgOAZgEAcQgDAcACAdIAFA7QAAANgHAOQgIAPgLAOIgXAZQgSARgRALQgRALgPAHIgpAQQgQAGgSAAQgRABgcgHIgvgLQgTgFgKgIQgJgIAAgOQAAgIAHgPIANgbIALgZIAPggIAMgYIAXgnIAohBQAKgLAKgQQAJgRAIgRIAOghIAZg8QALgcAIgXQAJgYAAgjIgBhIQgBglAEggQAHgiALgXIARglQAGgPgIgLIgJgNIgDgFIgGAAIgTgBIgZgBIgSAAQgBAOgFALQgFAKgHAKQgHAKgFAPQgLAPgRAOIggAcQgPANgFAKQgQBKgUBDQgVBDgYBAIgxCAQgGAJgJAJIgWATQgNAMgQASIgnArQgYAYgaAcQgZAcgUAeQgPAUgOAYQgNAZgQAUQgPAVgUALQgiALgfAAQgfgBgRgMgAVaGVIgBgEQAFADAEABIgIAAg");
	this.shape_8.setTransform(189.3,134.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(70));

	// Layer 2
	this.instance = new lib.cowtail();
	this.instance.setTransform(356.4,18,1,1,0,0,0,-35,-96);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.1,426.5,268.3);


(lib.cellstwoshell = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cellstwo();
	this.instance.setTransform(-2.5,-0.5);

	this.instance_1 = new lib.embryoshell();
	this.instance_1.setTransform(-89.2,1.3);

	this.instance_2 = new lib.embryoshell();
	this.instance_2.setTransform(89.2,-1.2);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-192.7,-99.7,385.4,199.5);


(lib.embryo = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,204,0.302)","#6699FF"],[0.275,1],0,0,0,0,0,104.2).s().p("AkwOvQjthEi9izQkvkhAAmXQAAmXEvkgQEdkQGMgQIAxAAQGsgBEvEhQEvEgAAGXQAAGXkvEhQkvEgmsABQiggBiQgpg");
	this.shape.setTransform(2.5,39.5);

	// Layer 1
	this.instance = new lib.egginctrans();
	this.instance.setTransform(-52,-124);

	this.instance_1 = new lib.egginctrans();
	this.instance_1.setTransform(-15,-84);

	this.instance_2 = new lib.egginctrans();
	this.instance_2.setTransform(5,-141);

	this.instance_3 = new lib.egginctrans();
	this.instance_3.setTransform(-97,-148);

	this.instance_4 = new lib.egginctrans();
	this.instance_4.setTransform(-85,-88);

	this.instance_5 = new lib.egginctrans();
	this.instance_5.setTransform(-39,-173);

	this.addChild(this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-100.9,-58.9,206.9,197);


(lib.eggdivide = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_36 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(36).call(this.frame_36).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCE9C").s().p("AjPDPQhXhWAAh5QAAh5BXhXQBXhWB4AAQB5AABXBWQBXBXAAB5QAAB5hXBWQhXBXh5ABQh4gBhXhXg");
	this.shape.setTransform(-27,23.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCE9C").s().p("AifD9QgdgSgZgYQghgegVgkQgnhAABhRQgBhQAnhCQAWgkAggeQAXgVAZgPQAxgcAzgIQAegDAggBIADAAIAXAAQBJAABAAjQAdARAaAYQAbAaAUAeQAqBBACBRIAAAKQAABJggA8QgXArgmAiQgSARgTANQg9AphHAEIgeACIgOABIgQABIgLAAQhHAAg9gkg");
	this.shape_1.setTransform(-29.3,22.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCE9C").s().p("AijEAQgegRgbgYQgigegXgkQgphCABhTQgBhTAqhDQAXglAhgdQAZgVAagOQA1gaAygFIA/AAIADAAIAXgCQBKgFBDAhQAfAQAbAXQAcAaAWAfQAsBDACBTIAAALQAABLgjA9QgZArgoAiQgTAQgUAMQhAAmhIgBIgeABIgOACIgQACQgQACgQAAQg7AAg3geg");
	this.shape_2.setTransform(-31.7,21.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCE9C").s().p("AinEDQgfgQgcgYQgkgegYglQgshDABhVQgBhVAshFQAZglAjgdQAagUAcgNQA4gZAxgBQAfADAhgBIADAAIAYgDQBKgKBGAfQAgAOAdAYQAeAZAWAgQAvBEACBWIAAALQgBBNglA+QgbAtgqAgQgTAQgWALQhDAkhIgHQgPgBgQABIgOACIgQADQgZAFgYAAQgyAAgygYg");
	this.shape_3.setTransform(-34.1,20);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCE9C").s().p("AiqEGQghgQgdgXQglgegagmQgvhEABhXQgBhYAvhGQAagmAlgcQAagUAegMQA8gXAwACQAfAGAigBIAEAAQAMgBAMgDQBKgPBJAdQAiANAeAXQAfAZAYAhQAxBFACBYIAAAMQgBBPgoA/QgdAugsAfQgUAQgXAKQhGAhhJgMQgPgCgQABIgOACIgQAEQgfAKgfAAQgtAAgsgUg");
	this.shape_4.setTransform(-36.4,18.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCE9C").s().p("AiuEJQgigPgfgXQgmgdgcgnQgxhFABhaQgBhbAyhHQAbgnAngbQAbgUAfgLQBAgVAvAFQAgAJAiAAIAEgBQAMgBANgEQBLgVBLAbQAkANAfAXQAhAYAZAiQAzBGACBbIAAAMQgCBRgqBBQgfAugtAfQgWAOgXAKQhKAfhKgSQgPgEgQABIgOADIgQAGQglAPglAAQgnAAgpgRg");
	this.shape_5.setTransform(-38.8,17.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCE9C").s().p("AiyEMQgkgOgfgXQgogdgdgoQg0hGABhcQgBhdA0hJQAdgnAogbQAdgUAggKQBEgTAvAJQAfAMAjgBIAEgBQANgBAMgEQBMgbBOAZQAmALAgAXQAiAZAbAhQA1BIACBeIAAAMQgCBUgtBBQghAvgvAeQgXAOgYAJQhNAchKgYQgQgEgQABIgOAEQgJACgHAEQgpAVgrAAQgkAAglgOg");
	this.shape_6.setTransform(-41.2,16.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCE9C").s().p("Ai2EPQglgOghgWQgpgdgegpQg2hHAAheQAAhgA2hKQAfgoApgaQAegTAigKQBIgRAtAMQAgAPAjgBIAFAAQAMgCANgFQBMggBRAXQAnAKAiAXQAkAYAbAiQA4BKACBfIAAANQgDBWgvBCQgjAxgxAcQgXAOgaAIQhQAahLgeQgPgGgSACIgOAEQgIADgIAEQgsAcgwAAQghAAgigMg");
	this.shape_7.setTransform(-43.5,15.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCE9C").s().p("Ai5ESQgngNgigWQgrgdgggpQg4hJAAhgQAAhiA5hMQAggpArgZQAfgTAjgIQBMgQAsAPQAgATAkgCIAFAAQANgCANgGQBMglBVAUQAoAKAkAWQAkAYAdAjQA6BLACBiIAAANQgDBYgyBEQglAxgzAcQgYANgbAHQhTAXhLgjQgQgHgSACQgGABgIADQgIADgIAGQgvAig2AAQgdAAgfgKg");
	this.shape_8.setTransform(-45.9,14.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCE9C").s().p("Ai9EVQgogMgjgWQgtgdghgqQg7hKAAhiQAAhlA7hMQAigqAsgZQAhgSAkgIQBQgOArATQAhAVAkgBIAFgBQANgCANgHQBNgqBYASQAqAIAlAXQAmAXAeAkQA8BMACBlIAAANQgEBag0BFQgnAyg1AbQgZANgcAGQhWAVhMgpQgQgIgSABQgGACgIADQgIAEgIAGQgyApg6AAQgbAAgdgIg");
	this.shape_9.setTransform(-48.3,13);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCE9C").s().p("AjBEYQgpgMglgVQgugcgigrQg+hLAAhlQAAhnA+hOQAjgrAugYQAigSAlgHQBUgMAqAWQAhAZAlgCIAGAAQANgDANgIQBNgvBbAQQAsAHAmAWQAnAXAgAlQA/BOABBmIAAAPQgEBcg3BFQgoA0g3AZQgbANgdAGQhaARhMguQgQgKgSACQgGACgIAEQgJAEgHAHQg0AwhAAAQgZAAgagHg");
	this.shape_10.setTransform(-50.6,11.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCE9C").s().p("AjFEbQgrgLglgVQgwgcgkgsQhAhMAAhnQAAhqBAhPQAlgrAwgYQAjgSAmgFQBYgLAqAaQAhAbAlgBIAGgBQANgDAOgIQBNg0BeANQAuAGAnAWQApAXAgAlQBCBPABBpIAAAPQgFBeg5BHQgqA0g5AZQgcAMgeAFQhdAPhMg0QgRgLgSACQgHACgHAEQgJAFgHAHQg2A4hFAAQgWAAgZgGg");
	this.shape_11.setTransform(-53,10.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFCE9C").s().p("AjIEeQgtgKgmgVQgxgcgmgsQhDhOAAhpQAAhsBDhRQAmgsAygXQAjgRApgFQBbgJApAdQAhAfAmgCIAGgBQANgCAPgKQBNg5BhALQAvAFApAWQAqAWAiAmQBEBQABBsIAAAPQgFBhg8BHQgsA2g7AXQgcAMggAEQhgANhNg6QgQgMgTACQgHACgHAFQgJAFgHAIQg3A/hKAAQgVAAgWgFg");
	this.shape_12.setTransform(-55.4,9.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCE9C").s().p("AjMEhQgugJgogVQgygbgngtQhGhPAAhsQAAhvBGhRQAogtAygXQAlgRAqgDQBggHAnAgQAiAhAmgBIAHgBQANgDAOgKQBOg/BkAJQAxAEAqAVQArAXAkAnQBGBRABBuIAAAQQgFBig/BJQguA2g9AXQgdALghADQhjALhNhAQgRgNgTACQgHACgIAFQgIAGgHAJQg5BGhPAAQgTAAgUgEg");
	this.shape_13.setTransform(-57.7,8.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFCE9C").s().p("AjQEkQgvgIgpgVQg0gbgpguQhIhQAAhuQAAhxBIhTQAqguA0gWQAmgQArgDQBkgFAmAjQAiAlAogCIAGgBQANgDAPgLQBOhEBnAHQAzADArAVQAtAWAlAoQBIBSABBxIgBAQQgFBlhBBKQgwA3g+AWQgfAKgiADQhmAHhOhFQgRgOgTACQgHACgIAGQgIAFgHAKQg6BPhUAAQgSAAgSgEg");
	this.shape_14.setTransform(-60.1,7.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCE9C").s().p("AjUEoQgwgIgrgVQg1gagqgvQhLhRAAhxQAAh0BLhTQArgvA2gWQAngPAsgCQBogEAlAnQAjAnAogBIAGgBQAOgEAPgMQBPhJBpAFQA1ACAsAVQAuAVAmApQBLBUABBzIgBAQQgFBnhEBLQgyA4hAAVQggAKgiACQhqAFhPhLQgRgPgSACQgIACgIAGQgIAGgHALQg7BWhZAAQgQAAgRgCg");
	this.shape_15.setTransform(-62.5,5.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFCE9C").s().p("AjXErQgzgHgrgUQg3gbgrgvQhOhTAAhzQAAh2BOhVQAsgvA4gVQAogQAugBQBrgBAlAqQAiAqApgCIAGgBQAOgDAQgNQBPhOBtACQA1ABAvAVQAvAVAnApQBNBVABB2IgBARQgGBphGBMQg0A5hCAUQggAKgkAAQhtADhPhRQgRgRgSADQgKADgHAGQgJAGgGAMQg8BeheAAQgOAAgPgCg");
	this.shape_16.setTransform(-64.9,4.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCE9C").s().p("AjbEuQh2gOhQhXQhQhTAAh2QAAh4BQhXQBQhTBwAAQBwAAAjAtQAjAuApgCQAQgBAUgSQBQhTBwAAQBwAABQBTQBQBXAAB4QAAB2hQBTQhQBXhwAAQhwAAhQhXQgRgSgSADQgUAFgMAXQg9BnhjAAQgNAAgNgCg");
	this.shape_17.setTransform(-67.2,3.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFCE9C").s().p("AjdEvQh3gPhQhWQhRhUAAh2QAAh3BRhXQBQhTBxAAQBxAAAkAtQAkAuAnAOQAQgNAWgWQBPhWBxACQByABBQBTQBQBXABB4QgBB1hQBUQhQBWhxABQhxAAhOhTQgVgVgSgNQgQATgQAaQg9BkhjAAQgNAAgOgBg");
	this.shape_18.setTransform(-66.9,4.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFCE9C").s().p("AjfEvQh3gPhShWQhRhTAAh3QAAh2BRhXQBShTBxAAQByAAAmAuQAlAtAkAeQAPgaAYgYQBQhZByADQByACBSBUQBQBWABB3QgBB1hQBUQhSBWhxACQhyABhMhQQgYgYgTgeQgNAigSAcQg9BihkAAQgOAAgOgBg");
	this.shape_19.setTransform(-66.6,4.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFCE9C").s().p("AjhEvQh4gPhShWQhShTAAh3QAAh2BShVQBShUBzAAQByAAAnAuQAmAtAjAvQAOgoAZgbQBQhbB0ADQBzAEBSBUQBSBWAAB3QAAB1hSBTQhSBWhzACQhyAChKhMQgcgcgUgtQgIAwgWAeQg9BhhlAAQgNAAgPgCg");
	this.shape_20.setTransform(-66.3,5.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFCE9C").s().p("AjjEvQh5gOhShWQhThTAAh3QAAh2BThVQBShTB0AAQBzgBAoAuQAoAtAgA/QAOg1AageQBQheB1AFQB1AGBSBTQBTBWAAB3QAAB0hTBUQhSBWh0ACQhzADhHhKQgggegVg+QgFA+gZAiQg9BehlAAQgOAAgPgCg");
	this.shape_21.setTransform(-66,6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFCE9C").s().p("AjkEvQh7gOhThWQhThTAAh3QAAh1BThVQBThTB1AAQB1AAApAtQAoAtAeBPQANhBAdgiQBQhgB2AGQB2AHBTBTQBTBVAAB3QAAB1hTBTQhTBWh1ADQh0ADhFhGQgkghgVhOQgCBMgbAkQg+BchlAAQgOAAgPgCg");
	this.shape_22.setTransform(-65.6,6.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFCE9C").s().p("AjmEwQh8gPhThWQhUhSAAh3QAAh1BUhVQBThTB2AAQB2AAAqAtQAqAtAbBgQANhPAeglQBQhjB3AIQB3AIBUBTQBUBVAAB3QAAB0hUBUQhUBVh1AEQh1AEhDhDQgngkgWhfQACBbgfAmQg9BahmAAQgPAAgPgBg");
	this.shape_23.setTransform(-65.3,7.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFCE9C").s().p("AjoEwQh8gPhVhVQhUhTAAh2QAAh1BUhVQBVhTB2AAQB3AAArAtQArAtAaBwQAMhcAfgoQBQhlB5AJQB4AJBVBTQBUBVAAB3QAAB0hUBTQhVBVh2AFQh2AFhBhAQgrgogWhuQAFBpgiApQg9BYhmAAQgPAAgQgCg");
	this.shape_24.setTransform(-65,7.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFCE9C").s().p("AjqEwQh9gOhVhWQhVhSAAh2QAAh1BVhVQBVhSB4AAQB4gBAsAtQAsAtAXCAQAMhoAhgsQBQhoB6ALQB5ALBVBSQBVBVAAB3QAAB0hVBTQhVBVh3AFQh3AFg/g9QgugqgXh/QAJB3glAsQg+BWhnAAQgPAAgQgCg");
	this.shape_25.setTransform(-64.7,8.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFCE9C").s().p("AjsEwQh+gOhWhVQhVhTAAh2QAAh0BVhVQBWhSB5AAQB5gBAtAuQAtAtAVCQQALh2AjgvQBQhqB7AMQB6AMBXBSQBVBVAAB2QAAB0hVBTQhXBVh3AGQh4AGg9g6QgygtgXiPQALCFgnAvQg9BThoAAQgPAAgRgCg");
	this.shape_26.setTransform(-64.4,9.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFCE9C").s().p("AjuExQh/gPhWhVQhWhSAAh2QAAh0BWhVQBWhSB6AAQB6AAAvAtQAuAtASCgQALiDAkgxQBRhtB8ANQB7ANBXBTQBWBUAAB2QAAB0hWBSQhXBVh4AHQh5AGg7g2Qg1gwgYigQAOCUgpAxQg+BShoAAQgQAAgRgCg");
	this.shape_27.setTransform(-64.1,9.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFCE9C").s().p("AjvExQiAgPhXhVQhXhSAAh1QAAh0BXhVQBXhSB7AAQB7AAAvAtQAwAtAPCwQALiPAlg1QBRhwB9APQB9APBXBSQBXBUAAB2QAAB0hXBSQhXBVh6AHQh6AHg4gzQg5gzgYiwQARCigsAzQg9BQhoAAQgRAAgRgCg");
	this.shape_28.setTransform(-63.8,10.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFCE9C").s().p("AkIE7QiAgPhXhUQhXhSAAh2QAAh0BXhUQBXhSB7gBQB7AAAyAlQAzAlAIEOQAEBNggBUQg9BPhoAAQgRAAgRgCgABdDnQgvgqgViAQgUjiBFhSQBFhRB9AOQB9APBXBSQBXBVAAB1QAAB0hXBSQhXBVh6AHIgcABQhkAAgygtg");
	this.shape_29.setTransform(-60.3,15.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFCE9C").s().p("AmAE7Qh9gShShYQhShWAGh0QAFhzBbhQQBahNB5AGQB5AFA0AxQA0AwAADyQgBBUgtBOQhABHhhAAQgUAAgWgDgAC5DPQgwg1gNh9QgLjOBMhOQBLhNB7ASQB7ASBSBWQBSBYgGB0QgGBzhZBNQhbBQh4ABQh5AAg4g8g");
	this.shape_30.setTransform(-69.8,17.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFCE9C").s().p("An3E7Qh7gVhMhcQhNhZALhxQALh0BehLQBdhIB3ALQB4ALA1A8QA0A7gGDYQgIBZg5BJQhBA/hbAAQgYAAgagEgAHEECQh3gHg4hFQgyg+gDh5QgCi9BRhJQBRhIB6AVQB4AWBOBZQBMBbgLByQgMBzhcBJQhXBFhrAAIgTgBg");
	this.shape_31.setTransform(-79.4,19.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFCE9C").s().p("ApuE7Qh4gZhIhfQhIhcARhxQARhyBhhGQBghEB2ASQB2ARA2BGQA1BHgNC9QgPBfhEBEQhDA3hVAAQgcAAgegGgAIfD6Qh2gOg4hOQg0hJAGh1QAHiqBYhFQBXhDB3AZQB3AYBIBdQBIBfgRBwQgSBzhfBDQhRA7hgAAQgSAAgTgCg");
	this.shape_32.setTransform(-89,21.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFCE9C").s().p("ArlE7Qh2gchChjQhDhgAXhvQAWhyBkhBQBjg/B0AYQB1AXA3BRQA2BSgUCjQgWBkhQA/QhDAwhPAAQggAAgjgIgAJ5DxQh0gVg4hXQg2hSAQhzQAQiXBdhAQBdg/B2AdQB0AbBEBhQBCBigXBvQgXByhiA/QhMAxhWAAQgaAAgcgFg");
	this.shape_33.setTransform(-98.6,23.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFCE9C").s().p("AtcE7Qhzggg9hlQg+hkAchuQAchxBng8QBmg6BzAdQByAdA4BcQA4BdgcCJQgbBphdA7QhDAohJAAQglAAgngKgALTDpQhygcg4hgQg4hdAZhwQAZiDBkg8QBjg6BzAgQBzAfA+BkQA9BlgcBvQgdBwhlA6QhHAphMAAQgjAAgkgIg");
	this.shape_34.setTransform(-108.2,25.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFCE9C").s().p("AvTE7Qhxgjg4hpQg5hnAihuQAjhvBpg4QBpg1BxAjQBxAjA5BnQA4BngiBvQgiBwhpA1QhBAihEAAQgqAAgsgNgAMuDgQhxgjg4hpQg5hkAihwQAihwBqg3QBog1ByAjQBxAiA5BnQA4BpgiBuQgjBvhoA1QhBAjhEAAQgrAAgrgOg");
	this.shape_35.setTransform(-117.8,28);

	this.instance = new lib.cellstwoshell();
	this.instance.setTransform(-86.2,4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.instance}]},1).wait(1));

	// Layer 1
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#66CCFF").s().p("AobIjQjgjhgBlCQABlBDgjoQDijiE5ABQE7gBDgDiQDiDogBFBQABFCjiDhQjgDok7AAQk5AAjijog");
	this.shape_36.setTransform(2,4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#66CCFF").s().p("AmnKaQhHgthAg9QhZhTg5hjQhhioAAjSQAAjPBgiqQA6hmBZhVQA4gzA8gmQCChOCJgWQBNgJBTgCIAQAAIA6gBQDEgBCnBhQBJAqBCA9QBPBMA2BZQBnCqAFDRIAAAWQgBDDhUCeQg9ByhjBbQgvAsgyAiQikBwjAAKIhKADIgfACIgtACIgcABQi7AAiihkg");
	this.shape_37.setTransform(-1.8,4.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#66CCFF").s().p("Am0KjQhLgqhDg9QhehSg9hmQhpirAAjZQAAjWBoiuQA+hpBfhTQA7gyBAgjQCNhJCHgNQBOgBBVgCIARAAIA7gEQDGgPCwBbQBOAoBFA8QBUBKA6BbQBvCuAEDYIAAAXQgBDJhcCiQhDB0hpBZQgxArg2AgQitBojCgFQglgBgoACIgfADIgtAGQgqAFgpAAQieAAiShSg");
	this.shape_38.setTransform(-5.5,4.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#66CCFF").s().p("AnAKsQhPgphHg8QhihRhDhoQhxivAAjfQAAjeBwiyQBEhqBkhSQA+gwBEghQCZhFCEgDQBPAHBYgDIARAAQAegCAfgFQDHgdC6BVQBSAlBIA7QBYBKBABdQB2CxAEDgIAAAYQgCDPhlClQhHB3hvBWQg1Aqg5AeQi3BijEgVQglgEgpACIggAFQgXADgWAFQhAAPg/AAQiIAAiFhEg");
	this.shape_39.setTransform(-9.3,4.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#66CCFF").s().p("AnMK1QhTgnhLg7QhnhRhHhqQh5iyAAjmQAAjlB4i2QBIhtBphQQBCgvBIgfQCkg/CCAFQBRAQBZgDIASgBQAfgCAfgHQDJgrDDBPQBWAiBNA6QBcBIBEBfQB9C2AEDnIAAAZQgDDVhsCoQhNB6h1BTQg3Apg9AcQjABbjGgkQgngHgqADQgRABgPAEQgYAEgVAIQhSAahSAAQh4AAh5g4g");
	this.shape_40.setTransform(-13,4.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#66CCFF").s().p("AnYK+QhYglhNg7QhthPhMhtQiBi2AAjsQAAjtCAi6QBOhvBuhOQBFguBMgcQCvg7CAAOQBSAYBbgDIATgBQAggDAggJQDLg5DMBJQBaAfBQA5QBhBHBIBiQCFC5AEDuIAAAbQgEDbh0CsQhTB8h6BRQg7AnhAAaQjJBUjJgzQgngKgrADQgSACgPAEQgYAGgVAKQhhAohjAAQhsAAhugvg");
	this.shape_41.setTransform(-16.8,5.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#66CCFF").s().p("AnlLHQhbgkhRg5QhyhPhRhvQiJi6AAjzQAAj0CJi+QBThxBzhMQBIgtBPgaQC8g2B9AYQBTAgBegEIATgBQAggDAhgMQDNhHDVBDQBfAdBTA4QBmBGBMBjQCNC+ADD1IAAAcQgEDhh8CvQhZB/iABOQg+AnhDAXQjTBNjKhCQgogOgsAEQgSACgRAGQgXAGgVAMQhtA4h0AAQhhAAhmgng");
	this.shape_42.setTransform(-20.5,5.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#66CCFF").s().p("AnxLQQhfgihVg5Qh3hOhVhxQiRi9AAj7QAAj7CQjCQBYhzB5hKQBLgsBTgXQDHgxB7AgQBVAoBfgDIAUgCQAhgEAhgNQDPhVDfA8QBiAbBYA3QBqBEBQBmQCVDBADD8IAAAeQgFDniECyQhfCBiFBNQhBAlhHAVQjcBGjMhRQgpgRguAEQgRADgSAGQgXAIgWAOQh3BJiDAAQhYAAheghg");
	this.shape_43.setTransform(-24.3,5.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#66CCFF").s().p("An9LZQhkgghYg4Qh7hNhbh0QiZjBAAkBQAAkDCZjFQBdh2B9hHQBPgsBXgVQDTgsB4ApQBWAxBhgEQALAAAKgBQAhgFAjgQQDQhjDoA3QBnAYBbA2QBvBCBVBpQCcDFACEDIAAAeQgGDuiMC2QhkCDiLBKQhEAkhKAUQjlA+jPhgQgpgUgvAFQgSACgSAHQgYAKgVAQQiABbiSAAQhRAAhWgcg");
	this.shape_44.setTransform(-28,6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#66CCFF").s().p("AoKLiQhngehbg4QiBhMhfh2QihjEAAkJQAAkJCgjKQBih4CDhFQBSgqBbgTQDegnB2AyQBXA5BkgEQALAAAKgCQAigFAjgSQDThxDxAwQBrAVBeA1QBzBCBaBrQCkDJACEKIAAAfQgHD0iUC5QhpCHiRBHQhHAjhNARQjwA4jQhwQgqgXgwAFQgSADgTAIQgYAKgVATQiIBtihAAQhKAAhQgXg");
	this.shape_45.setTransform(-31.8,6.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#66CCFF").s().p("AoWLrQhsgcheg3QiGhLhkh5QipjIAAkPQAAkRCpjNQBnh6CIhEQBVgpBfgQQDpgjB0A8QBZBBBlgFQAMAAAKgCQAjgFAkgVQDUh/D6ArQBvASBiA0QB4BBBeBtQCrDNADERIgBAgQgHD6icC9QhvCJiXBFQhKAhhQAPQj5AxjTh+QgrgbgxAGQgSADgTAJQgYALgVAVQiPCBiwAAQhEAAhJgUg");
	this.shape_46.setTransform(-35.5,6.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#66CCFF").s().p("AoiL1Qhwgbhig2QiLhLhoh7QixjLAAkWQAAkYCxjRQBrh9CNhBQBZgoBigOQD2geBxBFQBaBJBngFQAMAAALgCQAjgGAlgXQDWiNEEAlQBzAQBmAzQB8A/BiBvQCzDRACEYIAAAhQgJEBijC/Qh1CMicBCQhNAhhUANQkCAqjViOQgsgdgyAFQgTAEgTAKQgZAMgUAXQiVCVi+AAQg/AAhDgQg");
	this.shape_47.setTransform(-39.3,6.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#66CCFF").s().p("AovL+QhzgZhmg1QiQhKhth9Qi5jPAAkeQAAkeC5jWQBxh+CShAQBcgnBmgLQEBgZBvBNQBbBSBqgFQALAAAMgCQAkgHAlgZQDYibENAeQB4AOBpAyQCBA+BmBxQC7DVACEfIgBAiQgJEHisDDQh6COiiBAQhQAghXAKQkMAjjXicQgsghg0AGQgTAEgTAKQgZAOgUAZQiaCqjNAAQg6AAg+gOg");
	this.shape_48.setTransform(-43,7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#66CCFF").s().p("Ao7MIQh4gYhpg0QiUhJhyiAQjBjSAAklQAAkmDBjZQB2iBCXg9QBfgmBqgJQEMgUBtBWQBdBaBrgFQALAAANgDQAkgHAngbQDZipEWAYQB9ALBsAxQCGA8BrB0QDCDZABEmIgBAjQgJEOi0DGQiACRioA9QhSAfhbAIQkVAcjZisQgtgjg1AGQgUAEgTALQgZAPgVAbQieC/jcAAQg1AAg4gLg");
	this.shape_49.setTransform(-46.8,7.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#66CCFF").s().p("ApHMRQh8gVhsg0QiahIh3iCQjJjWAAksQAAktDJjdQB7iDCdg7QBiglBugHQEYgPBqBgQBeBhBtgFQALAAAOgDQAlgIAngdQDci3EfASQCAAIBwAwQCKA8BwB1QDKDdABEtIgBAkQgKEUi8DKQiGCUitA6QhWAeheAGQkfAVjai7Qgugng1AHQgWAEgTANQgZAQgVAdQiiDTjrAAQgwAAgzgJg");
	this.shape_50.setTransform(-50.5,7.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#66CCFF").s().p("ApUMbQh/gUhwgyQifhIh7iEQjRjaAAkzQAAk0DRjhQCAiFChg6QBmgjBygFQEjgKBoBpQBfBqBwgGQALAAAOgDQAmgJAngfQDejFEoAMQCFAGB0AvQCOA6B0B4QDSDgAAE1IgBAlQgLEajDDNQiMCWizA5QhYAchiAEQkoAOjdjKQgugqg2AHQgXAFgTANQgaARgUAfQimDpj5AAQgsAAgvgHg");
	this.shape_51.setTransform(-54.3,7.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#66CCFF").s().p("ApgMlQiEgShzgyQikhHiAiHQjZjdAAk5QAAk8DZjkQCFiICng4QBpgiB1gDQEvgFBmByQBgByBygFQAMAAAOgEQAmgJApghQDfjTEyAGQCJACB3AuQCTA5B4B6QDZDlABE7IgBAmQgMEhjMDQQiQCZi5A2QhcAbhlACQkxAHjfjaQgwgsg2AHQgXAFgUAOQgaASgUAiQipD/kJAAQgnAAgqgGg");
	this.shape_52.setTransform(-58,7.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#66CCFF").s().p("AptMvQlKgojhjpQjhjhAAlAQAAlDDhjoQDhjhE6AAQE7AABiB6QBjB7BzgGQAygBA5gwQDhjhE7AAQE7AADhDhQDhDoAAFDQAAFAjhDhQjhDpk7AAQk7AAjhjpQgwgwg4AIQg2ANgjA+QisEVkXAAQgkAAgmgEg");
	this.shape_53.setTransform(-61.8,8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#66CCFF").s().p("ApsMxQlLgojhjpQjhjhAAlAQAAlDDhjoQDhjhE7AAQE6gBBlB7QBlB7BsAmQAxgkA8g5QDgjpE8AEQE7AEDhDhQDhDoAAFDQAAFAjhDhQjhDpk7ABQk7ACjajgQg4g4g5glQgtA0grBGQirEPkXAAQgkAAglgEg");
	this.shape_54.setTransform(-61.8,7.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#66CCFF").s().p("ApsMyQlLgojhjoQjhjhAAlBQAAlCDhjpQDhjhE7AAQE7AABnB7QBnB7BmBTQAuhIBAhDQDejvE9AHQE8AHDhDhQDhDpAAFCQAAFBjhDhQjhDok7AEQk7AEjSjYQhChBg6hRQgkBbgyBNQiqEKkVAAQglAAgmgFg");
	this.shape_55.setTransform(-61.8,7.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#66CCFF").s().p("ApsM0QlLgojhjoQjhjhAAlDQAAlADhjpQDhjhE7AAQE7AABqB7QBpB6BfCAQAthsBDhLQDdj2E9AKQE9ALDhDhQDhDpAAFCQAAFBjhDhQjhDok7AGQk7AFjLjPQhLhKg7h9QgaCCg6BUQioEFkVAAQglAAgngFg");
	this.shape_56.setTransform(-61.8,7.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#66CCFF").s().p("ApsM2QlLgojhjoQjhjhAAlDQAAlADhjpQDhjhE7AAQE8AABsB7QBrB6BYCsQAriPBHhUQDbj+E+APQE+AODhDhQDhDpAAFCQAAFBjhDhQjhDok7AHQk7AHjEjGQhUhSg8iqQgQCqhCBbQinD/kUAAQgmAAgngFg");
	this.shape_57.setTransform(-61.8,7.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#66CCFF").s().p("ApsM4QlLgojhjoQjhjhAAlDQAAlADhjpQDhjhE8AAQE7AABuB7QBuB7BRDYQAqizBKhdQDakFE/ASQE+ASDhDhQDhDpAAFCQAAFBjhDhQjhDok7AJQk7AJi9i+Qhchag9jXQgHDRhKBiQimD6kTAAQgmAAgogFg");
	this.shape_58.setTransform(-61.8,7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#66CCFF").s().p("ApsM6QlLgojhjoQjhjhAAlDQAAlADhjpQDhjhE8AAQE8AABwB7QBvB7BLEFQAojXBOhmQDZkME/AVQE/AWDhDhQDhDpAAFCQAAFBjhDhQjhDok7ALQk7ALi2i2Qhlhjg+kDQACD4hRBqQikD0kTAAQgmAAgpgFg");
	this.shape_59.setTransform(-61.8,6.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#66CCFF").s().p("ApsM8QlLgojhjoQjhjhAAlDQAAlADhjpQDhjhE8AAQE9AAByB7QBxB7BFExQAlj6BShvQDXkUFAAaQFAAZDhDhQDhDpAAFCQAAFBjhDhQjhDok7ANQk7AMiuiuQhvhqg/kwQAMEghZBwQijDvkRAAQgoAAgpgFg");
	this.shape_60.setTransform(-61.8,6.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#66CCFF").s().p("ApsM+QlLgojhjoQjhjhAAlDQAAlADhjpQDhjhE8AAQE9AAB1B7QBzB7A+FeQAkkeBVh4QDWkbFAAdQFBAdDhDhQDhDpAAFCQAAFBjhDhQjhDok7APQk7AOinilQh4h0hAlcQAWFHhhB4QiiDpkQAAQgoAAgqgFg");
	this.shape_61.setTransform(-61.8,6.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#66CCFF").s().p("ApsNAQlLgojhjoQjhjhAAlDQAAlADhjpQDhjhE9AAQE9AAB2B7QB2B7A3GKQAilBBZiBQDUkiFCAhQFBAgDhDhQDhDpAAFCQAAFBjhDhQjhDok7AQQk7AQigicQiAh8hBmJQAfFuhoB/QiiDlkOAAQgpAAgrgGg");
	this.shape_62.setTransform(-61.8,6.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#66CCFF").s().p("ApsNDQlLgojhjpQjhjhAAlCQAAlBDhjoQDhjhE9AAQE9gBB5B7QB4B7AwG3QAhllBciJQDTkqFCAkQFCAlDhDhQDhDoAAFDQAAFAjhDhQjhDpk7ARQk7ASiZiUQiJiFhCm1QAmGWhtCGQigDfkOAAQgpAAgsgFg");
	this.shape_63.setTransform(-61.8,6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#66CCFF").s().p("AptNEQlKgnjhjpQjhjhAAlCQAAlBDhjoQDhjhE9gBQE+AAB6B7QB7B7ApHkQAfmJBgiSQDRkxFDAoQFDAoDhDhQDhDoAAFDQAAFAjhDhQjhDpk7ATQk7AUiSiNQiSiMhDnhQAwG8h1CNQifDakMAAQgqAAgugGg");
	this.shape_64.setTransform(-61.8,5.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#66CCFF").s().p("AptNEQlKgnjhjpQjhjhAAlCQAAlBDhjoQDhjhE9gBQE+AAB6B7QBoBoA8JsIgHguQAwG8h1CNQifDakMAAQgqAAgugGgACwKUQh2hxgRlFQggqSBYiHQDRkxFDAoQFDAoDhDhQDhDoAAFDQAAFAjhDhQjhDpk7ATQgmADgkAAQkCAAiBh8g");
	this.shape_65.setTransform(-61.8,5.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#66CCFF").s().p("AqZM7IgQgCQk8gkjajeIgHgHQjgjgAAlCIAAAAQAAlADgjpIAEgEQDfjdE6AAIALAAQEqABCEB7QAnAlAjBbQBTC+AjGCIgFgdIgBgCQAoGhiECdIgEAFQioDbkSAAQgkAAglgEgADQKCQiIiEgOlEQgbpbBviXQDUkjFCAhQFBAhDhDhQDhDpAAFCQAAFBjhDhQjhDok7AQIg6ACQkQAAiQiNg");
	this.shape_66.setTransform(-66.3,5.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#66CCFF").s().p("ArGMxIgQgBQk8gdjcjgIgGgGQjfjhAAlBIAAgBQAAk/DfjoIAFgEQDejdE5gCIALAAQEeABCQB+QArAlAmBTQBsDEAfFvIgEgOIgBgCQAhGPiXCqIgEAEQixDckaAAQgcAAgdgCgADwJwQiaiXgLlEQgWoiCGinQDWkXFBAbQFAAbDhDhQDhDoAAFDQAAFAjhDhQjhDpk7ANIgsABQkbAAigifg");
	this.shape_67.setTransform(-70.8,5.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#66CCFF").s().p("AryMnIgRgBQk7gVjejjIgFgFQjfjgAAlBIAAgBQAAk/DfjoIAEgEQDejdE4gCIALAAQETABCbB/QAvAmApBLQCGDKAaFdIgCgBIgBAAQAYF7ipC3IgEAFQi8DdkgAAIgogBgAEQJdQisipgJlEQgQnpCdi4QDZkJE/AUQE/AUDhDhQDhDpAAFCQAAFBjhDhQjhDok7AKIgfAAQklAAiwixg");
	this.shape_68.setTransform(-75.3,4.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#66CCFF").s().p("AsfMdIgRAAQk7gPjfjkIgFgFQjejgAAlAIAAgBQAAk/DejnIAEgEQDejdE2gDIALAAQEJAACnCCQAxAmAtBEQCfDPAWFLIgBANIAAABQAPFni7DFIgEAEQjHDfkoAAIgWAAgAEvJLQi9i8gGlDQgKmxCzjIQDcj8E9ANQE+AODhDhQDhDoAAFDQAAFAjhDhQjhDpk7AGIgTAAQkuAAjBjDg");
	this.shape_69.setTransform(-79.8,4.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#66CCFF").s().p("AtLMTIgSAAQk7gHjgjnIgEgEQjejgAAlAIAAgBQAAk+DejnIAEgEQDdjdE1gEIALAAQD+ABCyCDQA1AnAwA8QC5DUASE6IAAAaIgBACQAHFUjNDSIgEAEQjTDikwAAIgCAAgAFPI4QjPjOgDlDQgFl5DKjYQDejvE9AHQE8AHDhDhQDhDoAAFCQAAFBjhDhQjhDpk7ADIgJAAQk1AAjRjWg");
	this.shape_70.setTransform(-84.3,4.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#66CCFF").s().p("AFvImQjhjiAAlCQAAlADhjpQDhjhE7AAQE7AADhDhQDhDpAAFAQAAFCjhDiQjhDok7AAQk7AAjhjogA2mIgQjhjgAAlBQAAlDDhjoQDhjhE7AAQE7AADhDhQDhDoAAFDQAAFBjhDgQjhDpk7AAQk7AAjhjpg");
	this.shape_71.setTransform(-88.7,3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36}]}).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[]},1).wait(1));

	// Layer 6
	this.instance_1 = new lib.embryoshell();
	this.instance_1.setTransform(-123.4,8.5);
	this.instance_1.alpha = 0.281;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(28).to({_off:false},0).to({x:-175.4,y:4.5,alpha:1},7).to({_off:true},1).wait(1));

	// Layer 5
	this.instance_2 = new lib.embryoshell();
	this.instance_2.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},36).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-194.5,-95.5,301,197);


(lib.cowstwo = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cow();
	this.instance.setTransform(-134.6,-40.5,0.3,0.3);

	this.instance_1 = new lib.cow();
	this.instance_1.setTransform(6.6,-39.9,0.3,0.3);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-134.6,-40.6,269.1,81.2);


(lib.ArtificialTwinning = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_302 = function() {
		/* stop();*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(302).call(this.frame_302).wait(1));

	// labels
	this.text = new cjs.Text("Egg Cell", "bold 24px 'Arial Black'", "#FFFFFF");
	this.text.lineHeight = 26;
	this.text.lineWidth = 130;
	this.text.setTransform(-55,73);

	this.text_1 = new cjs.Text("Sperm", "bold 24px 'Arial Black'", "#FFFFFF");
	this.text_1.lineHeight = 26;
	this.text_1.setTransform(102.3,-44.5);

	this.instance = new lib.Tween5("synched",0);
	this.instance.setTransform(-77.2,94.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{lineWidth:130,x:-55,y:73,text:"Egg Cell"}}]}).to({state:[{t:this.text_1},{t:this.text,p:{lineWidth:148,x:-55,y:73,text:"Egg Cell"}}]},35).to({state:[{t:this.text,p:{lineWidth:144,x:-55,y:73,text:"Egg Cell"}}]},29).to({state:[]},53).to({state:[{t:this.instance}]},37).to({state:[{t:this.instance}]},15).to({state:[]},9).to({state:[{t:this.text,p:{lineWidth:239,x:-105.1,y:-17.7,text:"Two separate but \nidentical embryos"}}]},90).to({state:[]},20).to({state:[{t:this.text,p:{lineWidth:200,x:-103.5,y:31,text:"Artificial Twins"}}]},14).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(154).to({_off:false},0).to({x:-6,y:56.1},15).to({_off:true},9).wait(125));

	// sperm
	this.instance_1 = new lib.sperm();
	this.instance_1.setTransform(588.5,-161.2,1,1,170);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({x:195.6,y:-57.2},58).wait(1).to({alpha:0},9).to({_off:true},1).wait(233));

	// merge
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE7CE").s().p("AjACFQglgFgagSQgbgSgHgkQgGglAHgXQAHgYAUgSQAUgRAggQIBLgiQAWgJAjgFQAkgFApgCQAqgBAqAAQAqABAkABIA4ADIAaADIABAAQAzAHgEAgQgCAbgfAVIhSA1QgjAXgpAYQgoAYgmASQgkARgbAGQgjAGgoADIghACQgWAAgWgDg");
	this.shape.setTransform(19.1,-38);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AAAEcQh1ABhahZQhPhRAAhzQAAhyBPhZQBahQB1gBIAAAAQB2ABBQBQQANANALANQBBBQAABhQAABzhZBRQhQBYh2AAIAAAAg");
	this.shape_1.setTransform(-30.8,20.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE6CC").s().p("AicCMQgTgBgTgDQglgHgZgSQgagTgGgkIAAgBQgHgmAHgXQAIgZATgSQAUgSAggQQAigRApgSQAXgKAjgFIApgEIAkgCQArgBArACIAwACIAdADQAjACAVADIAaAEQAvAIAAAeQgEAfgdAWQguAhgkAWQgmAagmAWQgpAYgnARQglARgcAFQgjAFgnACIgSABIgVgBg");
	this.shape_2.setTransform(16.9,-35.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("AjPDDQhPhQAAhzQAAhzBPhYQBahQB1AAIAAAAQB3AABPBQQANANALAOQBBBOAABiQAABzhZBQQhQBah2gBQh1ABhahag");
	this.shape_3.setTransform(-30.7,20.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE5C9").s().p("AieCQQgUgCgSgEQglgIgYgTQgZgUgGglIAAgBQgHglAIgYQAHgZAUgTQATgTAhgRQAhgRAqgTQAXgKAjgEIAqgFIAkgCQAsAAArADIAwAEIAdAEQAiAEAVAEIAZAFQAtAKAAAeQgDAggdAXQgsAgglAaQgmAagnAXQgpAXgoARQgmAQgcAEQgjAEgoABQgTAAgTgCg");
	this.shape_4.setTransform(14.6,-33);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE3C7").s().p("Ah6CXQgUgBgTgCQgTgDgSgFQgkgJgYgVQgYgVgGgkIAAgBQgGgmAIgZQAHgZATgTQAUgUAggRQAhgTAqgSQAYgKAjgFIAqgFIAlgBQAtAAArAEQAZADAXADIAdAFQAhAFAVAGIAYAGQAsAMAAAeQgDAhgcAXQgrAiglAbQgnAbgnAXQgqAXgpAQQgmAQgdACQgdADggAAIgOAAg");
	this.shape_5.setTransform(12.4,-30.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE2C4").s().p("Ah9CcQgTgBgTgEQgTgDgSgGQgkgKgXgWQgYgWgFglIAAgBQgGgmAIgZQAHgaATgTQAUgVAggSQAigUAqgSQAYgLAkgEIAqgFIAmgBQAsAAAsAGQAZADAXAFIAcAGQAhAGAVAHIAYAIQAqANAAAfQgDAigbAYQgqAjgmAbQgnAdgnAXQgrAXgqAPQgnAPgdACQgTABgVAAIgkgBg");
	this.shape_6.setTransform(10.1,-27.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE1C2").s().p("Ah/ChQgUgCgTgFQgTgEgRgGQgjgMgXgXQgXgXgFglIAAgBQgGgnAJgZQAHgaATgUQATgVAggUQAigUAqgSQAZgLAkgFIArgEIAmgBQAtAAArAIQAaADAXAGIAcAHQAhAIAUAJIAXAJQAoAOAAAgQgDAigaAZQgpAkgmAdQgnAegoAWQgrAYgqAOQgoAOgeABIgYAAQgZAAgbgCg");
	this.shape_7.setTransform(7.8,-25.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE0C0").s().p("AiCClQgTgDgTgFQgTgFgRgHQgjgNgWgYQgWgYgFgmIAAAAQgFgnAIgaQAIgbASgUQAUgWAfgUQAjgVAqgTQAZgLAkgFQAVgDAXgBIAmgBQAuABArAJQAaAEAXAHIAcAIQAgAJAUAKIAWALQAnAQAAAgQgDAkgZAZQgoAlgmAeQgoAfgoAXQgrAXgsANQgoANgfABIgLAAQggAAgigFg");
	this.shape_8.setTransform(5.6,-22.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFDEBD").s().p("Ag3CwQglAAgogGQgUgEgTgGQgSgGgRgHQgigPgWgZQgVgZgFgmIAAgBQgFgnAJgbQAHgaATgVQATgXAfgVQAjgWAqgSQAagLAkgFQAWgDAWgCIAnAAQAvABArAKQAaAFAXAIIAbAKQAgAKAUALIAWAMQAlASAAAhQgDAkgYAXQgnApgnAfQgoAggpAXQgrAXgtANQgnAMgeAAIgDgBg");
	this.shape_9.setTransform(3.3,-20);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFDDBB").s().p("Ag5C3QgmgBgngIQgUgEgTgHQgTgHgRgIQghgQgUgbQgVgZgFgnIAAgBQgEgnAIgbQAIgbASgWQATgXAfgVQAjgXArgTQAagLAkgFQAWgDAXgCQAVgBASABQAwACArALQAaAGAXAJIAbALQAfALAUANIAVANQAjATAAAiQgCAkgYAZQglAqgoAgQgpAhgoAXQgsAXguAMQglAKgdAAIgHAAg");
	this.shape_10.setTransform(1,-17.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFDCB8").s().p("Ag7C+QgmgCgogKQgUgFgTgIQgSgHgRgJQgggSgUgbQgVgbgEgnIAAAAQgEgmAJgeQAHgbASgWQATgYAfgWQAkgYArgTQAagLAlgFQAVgEAYgBQAVgBASABQAwADAsAMQAaAHAXAKIAbALQAfANATAPIAUAOQAiAVAAAiQgCAlgXAZQgkAsgpAhQgpAigpAXQgsAXgvALQgiAJgcAAIgMAAg");
	this.shape_11.setTransform(-1.2,-14.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFDBB6").s().p("Ag9DEQgmgCgogLQgUgGgTgJQgSgIgRgKQgggTgTgcQgUgcgEgnIAAgBQgEglAJgfQAIgcASgWQATgZAegXQAkgZArgSQAbgMAlgFQAWgEAXgBQAUgBAVABQAwAEAsANQAaAIAXAKIAbANQAeAPATAPIAUAQQAgAWAAAjQgCAmgWAaQgjAsgpAjQgqAjgpAXQgtAXgwALQggAHgbAAIgQgBg");
	this.shape_12.setTransform(-3.5,-12);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFDAB4").s().p("Ag/DLQgngEgogMQgTgHgTgKQgTgIgQgLQgfgUgTgeQgTgcgEgoIAAgBQgDglAJggQAIgcARgXQATgZAegYQAkgZAsgTQAcgMAkgGQAWgDAYgBQAUgBAVACQAxADAsAPQAaAIAXAMIAaAOQAeAQATARIATARQAfAXAAAkQgDAngVAaQghAugqAjQgqAlgqAXQgtAXgxAKQgdAGgaAAIgVgBg");
	this.shape_13.setTransform(-5.8,-9.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFD8B1").s().p("AhBDRQgngEgogOQgUgIgTgKQgSgKgQgLQgfgWgSgeQgSgegEgoIAAAAQgDgmAJggQAIgcASgYQASgaAegYQAlgbArgTQAdgMAkgGQAXgDAYgBQAUgBAVACQAyAEAsAQQAaAJAXANIAaAPQAdARATATIASASQAdAZAAAlQgCAlgUAdQggAvgrAkQgqAmgqAXQguAXgxAJQgbAFgZAAQgNAAgNgCg");
	this.shape_14.setTransform(-8,-6.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFD7AF").s().p("AhDDYQgogGgngPQgUgIgTgMQgSgKgQgMQgegXgSggQgSgegCgpIAAAAQgDgmAJghQAIgcARgYQATgcAdgYQAlgcAsgTQAdgMAlgGQAWgDAZgBQAUgBAVACQAyAEAtASQAaAJAXAOQAOAIAMAJQAdASASAUIASAUQAbAaAAAmQgCAlgTAeQgfAxgrAlQgrAngqAWQgvAYgyAIQgZAEgWAAQgRAAgPgCg");
	this.shape_15.setTransform(-10.3,-4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFD6AC").s().p("AhFDeQgogGgogRQgUgJgTgMQgRgLgQgNQgegZgRggQgRgggCgpIAAAAQgDgmAKgiQAIgcAQgZQATgcAdgZQAmgdArgTQAegNAlgFQAXgDAYgBQAVgBAWACQAyAFAtASQAaALAXAPQAOAIAMAKQAcATASAWIARAUQAaAcAAAnQgCAmgTAfQgdAxgsAnQgrAogrAWQguAYg0AHQgWADgVAAQgTAAgSgDg");
	this.shape_16.setTransform(-12.6,-1.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFD5AA").s().p("AhHDlQgogIgogSQgUgKgTgNQgSgMgPgNQgdgagRgiQgQgggCgqIAAAAQgCgmAJgiQAIgdARgZQASgdAegaQAlgdAsgUQAegNAlgFQAXgEAZAAQAVgBAWACQAzAFAtAUQAaALAXAQQANAJAMAKQAcAVASAXIAQAWQAZAeAAAmQgCAogSAfQgcAzgtAnQgrAqgrAWQgvAYg1AGQgTADgTAAQgXAAgUgEg");
	this.shape_17.setTransform(-14.8,1.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFD3A7").s().p("AhIDrQgqgIgngUQgUgLgTgNQgSgNgPgOQgcgcgRgjQgPghgCgqIAAAAQgCgnAKgiQAIgdAQgaQATgdAdgbQAlgeAsgUQAfgNAlgGQAYgDAZgBQAVAAAWACQA0AGAtAVQAaAMAXARQANAJAMALQAcAWARAYIAQAYQAWAfAAAnQgBAogRAgQgbA0gtApQgsAqgsAXQgvAXg2AGQgQACgRAAQgaAAgWgFg");
	this.shape_18.setTransform(-17.1,4.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFD2A5").s().p("AhKDxQgqgJgogVQgUgLgTgPQgRgNgPgPQgcgdgPgkQgPgigCgrIAAAAQgBgnAJgjQAJgeAQgaQASgeAdgbQAmgfAsgUQAggNAlgGQAXgEAaAAQAVAAAWACQA1AGAtAXQAaAMAXASQANAKAMALQAbAYARAaIAPAZQAVAgAAAoQgBApgQAgQgaA2guApQgsAsgsAWQgwAYg3AFIgbABQgeAAgZgGg");
	this.shape_19.setTransform(-19.4,6.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFD1A3").s().p("AhMD4QgrgLgngWQgUgMgTgQQgSgOgOgQQgbgegPglQgOgjgCgrIAAAAQgBgnAKgkQAIgeAQgaQASgfAdgcQAmggAtgUQAggOAlgFQAYgEAZAAQAWgBAWADQA2AHAtAXQAaAOAXATQANAKAMAMQAaAZARAbQAIANAGANQAUAiAAApQgCApgPAhQgYA3gvArQgsAtgtAWQgwAYg3AEIgXAAQghAAgcgGg");
	this.shape_20.setTransform(-21.7,9.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFD0A0").s().p("AhOD+QgrgLgogZQgTgMgTgRQgSgOgOgRQgbgggOgmQgOgkgBgrIAAAAQAAgnAKglQAIgeAQgbQASggAcgdQAnggAsgUQAhgOAlgGQAYgEAaAAQAWAAAXADQA1AHAuAZQAaAOAXAUQANALAMAMQAZAaARAdQAIAOAGAOQASAjAAAqQgCAqgOAiQgXA3gvAsQgtAugtAXQgxAXg4ADIgRABQglAAgfgIg");
	this.shape_21.setTransform(-23.9,12.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFCE9E").s().p("AhQEEQgrgMgogaQgUgNgTgSQgRgPgOgRQgaghgOgoQgNglAAgrIAAAAQgBgoAKglQAJgeAPgcQASggAcgeQAngiAtgTQAhgOAlgGQAZgEAaAAQAWgBAXAEQA2AHAuAaQAaAPAXAVQANAMALANQAaAbAQAeQAHAPAGAOQAQAlAAAqQgBArgNAjQgWA5gwAtQgtAvgtAWQgxAYg6ACIgLAAQgpAAgigJg");
	this.shape_22.setTransform(-26.2,14.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFCD9B").s().p("AhSEKQgsgNgngbQgUgOgTgTQgRgQgOgSQgagigNgpQgMgmAAgrIAAAAQgBgoALgmQAIgfAQgcQASghAbgeQAogjAsgTQAigPAmgGQAYgEAbAAQAWAAAXADQA3AIAuAcQAaAPAXAWQANANALANQAZAdAQAfQAHAPAGAQQAOAmAAArQgBArgMAkQgVA6gwAuQguAwguAXQgxAXg7ACIgFAAQgtAAglgLg");
	this.shape_23.setTransform(-28.5,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},76).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_4}]},1).to({state:[{t:this.shape_3},{t:this.shape_5}]},1).to({state:[{t:this.shape_3},{t:this.shape_6}]},1).to({state:[{t:this.shape_3},{t:this.shape_7}]},1).to({state:[{t:this.shape_3},{t:this.shape_8}]},1).to({state:[{t:this.shape_3},{t:this.shape_9}]},1).to({state:[{t:this.shape_3},{t:this.shape_10}]},1).to({state:[{t:this.shape_3},{t:this.shape_11}]},1).to({state:[{t:this.shape_3},{t:this.shape_12}]},1).to({state:[{t:this.shape_3},{t:this.shape_13}]},1).to({state:[{t:this.shape_3},{t:this.shape_14}]},1).to({state:[{t:this.shape_3},{t:this.shape_15}]},1).to({state:[{t:this.shape_3},{t:this.shape_16}]},1).to({state:[{t:this.shape_3},{t:this.shape_17}]},1).to({state:[{t:this.shape_3},{t:this.shape_18}]},1).to({state:[{t:this.shape_3},{t:this.shape_19}]},1).to({state:[{t:this.shape_3},{t:this.shape_20}]},1).to({state:[{t:this.shape_3},{t:this.shape_21}]},1).to({state:[{t:this.shape_3},{t:this.shape_22}]},1).to({state:[{t:this.shape_3},{t:this.shape_23}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(204));

	// spermhead
	this.instance_2 = new lib.spermhead();
	this.instance_2.setTransform(33.2,-35.6,1,1,170);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(61).to({_off:false},0).to({x:19.2,y:-33.6,alpha:1},9).to({_off:true},7).wait(227));

	// cows
	this.instance_3 = new lib.cowstwo();
	this.instance_3.setTransform(-4.9,-96.9,0.5,0.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(288).to({_off:false},0).to({scaleX:1.2,scaleY:1.2,x:1.1,y:-9.9,alpha:1},14).wait(1));

	// embryo1
	this.instance_4 = new lib.eggbig();
	this.instance_4.setTransform(77.5,-65);
	this.instance_4._off = true;

	this.instance_5 = new lib.embryo();
	this.instance_5.setTransform(169.6,27.6,0.171,0.13);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(178).to({_off:false},0).to({scaleX:0.5,scaleY:0.5,x:33.8,y:-98.7},15).to({x:26.8,y:-98},1).wait(9).to({x:28.8,y:-96.2},0).to({scaleX:0.1,scaleY:0.1,x:163.8,y:36.3},10).wait(7).to({_off:true,scaleX:0.17,scaleY:0.13,x:169.6,y:27.6},16).wait(67));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(220).to({_off:false},16).wait(13).to({scaleX:0.7,scaleY:0.7,x:85.6,y:-113.4},19).wait(20).to({scaleX:0.05,scaleY:0.05,x:70.6,y:-25.4},14).wait(1));

	// embryo2
	this.instance_6 = new lib.eggbig();
	this.instance_6.setTransform(-76.2,-62.5);
	this.instance_6._off = true;

	this.instance_7 = new lib.embryo();
	this.instance_7.setTransform(-71.9,36.4,0.171,0.13);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(178).to({_off:false},0).to({scaleX:0.5,scaleY:0.5,x:-39.9,y:-96.2},15).to({x:-43.3,y:-96},1).wait(20).to({x:-41.2,y:-96.2},0).to({scaleX:0.1,scaleY:0.1,x:-77.4,y:43.8},11).to({_off:true,scaleX:0.17,scaleY:0.13,x:-71.9,y:36.4},19).wait(59));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(225).to({_off:false},19).wait(5).to({scaleX:0.7,scaleY:0.7,x:-68.9,y:-112.6},19).wait(20).to({scaleX:0.05,scaleY:0.05,x:-71.9,y:-21.6},14).wait(1));

	// egg
	this.instance_8 = new lib.eggbig();
	this.instance_8.setTransform(-2,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#999999").ss(4,1,1).p("AAAsLQE7AADhDhQDhDpAAFBQAAFCjhDhQjhDpk7AAQk6AAjhjpQjhjhAAlCQAAlBDhjpQDhjhE6AAg");
	this.shape_24.setTransform(-2,0);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#66CCFF").s().p("AoaIjQjijhABlCQgBlBDijpQDgjgE6gBQE6ABDiDgQDgDpABFBQgBFCjgDhQjiDpk6AAQk6AAjgjpg");
	this.shape_25.setTransform(-2,0);

	this.instance_9 = new lib.eggdivideart();
	this.instance_9.setTransform(-2,0);

	this.instance_10 = new lib.embryoart();
	this.instance_10.setTransform(-78.2,4.5,1,1,0,0,0,0.4,0.4);
	this.instance_10._off = true;

	this.instance_11 = new lib.embryoshell();
	this.instance_11.setTransform(-1.9,-66.8,1.709,1.066,0,0,0,0.5,0.4);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.shape_25},{t:this.shape_24}]},76).to({state:[{t:this.instance_8}]},23).to({state:[{t:this.instance_9}]},18).to({state:[{t:this.instance_10}]},37).to({state:[{t:this.instance_10}]},14).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},9).to({state:[{t:this.instance_11}]},15).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},31).to({state:[{t:this.instance_11}]},10).to({state:[]},1).wait(67));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(154).to({_off:false},0).to({x:0.5,y:-65.5},14).wait(1).to({_off:true},9).wait(125));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(178).to({_off:false},0).to({regY:0.5,scaleX:0.86,scaleY:0.53,y:-98},15).to({x:-4.2,y:-97.8},1).wait(31).to({alpha:0},10).to({_off:true},1).wait(67));

	// petri2
	this.instance_12 = new lib.petridish();
	this.instance_12.setTransform(197.9,266.6);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(178).to({_off:false},0).to({x:15.4,y:-17.1},15).wait(56).to({scaleX:0.5,scaleY:0.5,x:1.4,y:129.9,alpha:0},19).to({_off:true},1).wait(34));

	// petri1
	this.instance_13 = new lib.petridish();
	this.instance_13.setTransform(-345,279.8);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(178).to({_off:false},0).to({x:-225,y:-10.1},15).wait(56).to({scaleX:0.5,scaleY:0.5,x:-107,y:133.9,alpha:0},19).to({_off:true},1).wait(34));

	// shell
	this.instance_14 = new lib.embryoshell();
	this.instance_14.setTransform(0.5,0,1.019,1.051);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(100).to({_off:false},0).to({alpha:1},15).wait(1).to({_off:true},1).wait(186));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.5,-80,159.7,190.9);


(lib.embryostwo = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.embryo();
	this.instance.setTransform(87.5,-41.5);

	this.instance_1 = new lib.embryo();
	this.instance_1.setTransform(-92.5,-37.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-193.4,-100.5,386.9,201);


(lib.NaturalTwinning = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_249 = function() {
		/* stop();*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(249).call(this.frame_249).wait(1));

	// labels
	this.text = new cjs.Text("Egg Cell", "bold 24px 'Arial Black'", "#FFFFFF");
	this.text.lineHeight = 26;
	this.text.lineWidth = 144;
	this.text.setTransform(-55,73);

	this.text_1 = new cjs.Text("Sperm", "bold 24px 'Arial Black'", "#FFFFFF");
	this.text_1.lineHeight = 26;
	this.text_1.setTransform(102.3,-44.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{lineWidth:144,x:-55,y:73,text:"Egg Cell"}}]}).to({state:[{t:this.text_1},{t:this.text,p:{lineWidth:143,x:-55,y:73,text:"Egg Cell"}}]},35).to({state:[{t:this.text,p:{lineWidth:133,x:-55,y:73,text:"Egg Cell"}}]},29).to({state:[]},53).to({state:[{t:this.text,p:{lineWidth:239,x:-118.9,y:24.5,text:"Two separate but \nidentical embryos"}}]},72).to({state:[]},25).to({state:[{t:this.text,p:{lineWidth:184,x:-98.6,y:27,text:"Natural Twins"}}]},35).wait(1));

	// sperm
	this.instance = new lib.sperm();
	this.instance.setTransform(588.5,-161.2,1,1,170);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({x:195.6,y:-57.2},58).wait(1).to({alpha:0},9).to({_off:true},1).wait(180));

	// merge
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE7CE").s().p("AjACFQglgFgagSQgbgSgHgkQgGglAHgXQAHgYAUgSQAUgRAggQIBLgiQAWgJAjgFQAkgFApgCQAqgBAqAAQAqABAkABIA4ADIAaADIABAAQAzAHgEAgQgCAbgfAVIhSA1QgjAXgpAYQgoAYgmASQgkARgbAGQgjAGgoADIghACQgWAAgWgDg");
	this.shape.setTransform(19.1,-38);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AAAEcQh1ABhahZQhPhRAAhzQAAhyBPhZQBahQB1gBIAAAAQB2ABBQBQQANANALANQBBBQAABhQAABzhZBRQhQBYh2AAIAAAAg");
	this.shape_1.setTransform(-30.8,20.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE6CC").s().p("AicCMQgTgBgTgDQglgHgZgSQgagTgGgkIAAgBQgHgmAHgXQAIgZATgSQAUgSAggQQAigRApgSQAXgKAjgFIApgEIAkgCQArgBArACIAwACIAdADQAjACAVADIAaAEQAvAIAAAeQgEAfgdAWQguAhgkAWQgmAagmAWQgpAYgnARQglARgcAFQgjAFgnACIgSABIgVgBg");
	this.shape_2.setTransform(16.9,-35.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("AjPDDQhPhQAAhzQAAhzBPhYQBahQB1AAIAAAAQB3AABPBQQANANALAOQBBBOAABiQAABzhZBQQhQBah2gBQh1ABhahag");
	this.shape_3.setTransform(-30.7,20.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE5C9").s().p("AieCQQgUgCgSgEQglgIgYgTQgZgUgGglIAAgBQgHglAIgYQAHgZAUgTQATgTAhgRQAhgRAqgTQAXgKAjgEIAqgFIAkgCQAsAAArADIAwAEIAdAEQAiAEAVAEIAZAFQAtAKAAAeQgDAggdAXQgsAgglAaQgmAagnAXQgpAXgoARQgmAQgcAEQgjAEgoABQgTAAgTgCg");
	this.shape_4.setTransform(14.6,-33);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE3C7").s().p("Ah6CXQgUgBgTgCQgTgDgSgFQgkgJgYgVQgYgVgGgkIAAgBQgGgmAIgZQAHgZATgTQAUgUAggRQAhgTAqgSQAYgKAjgFIAqgFIAlgBQAtAAArAEQAZADAXADIAdAFQAhAFAVAGIAYAGQAsAMAAAeQgDAhgcAXQgrAiglAbQgnAbgnAXQgqAXgpAQQgmAQgdACQgdADggAAIgOAAg");
	this.shape_5.setTransform(12.4,-30.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE2C4").s().p("Ah9CcQgTgBgTgEQgTgDgSgGQgkgKgXgWQgYgWgFglIAAgBQgGgmAIgZQAHgaATgTQAUgVAggSQAigUAqgSQAYgLAkgEIAqgFIAmgBQAsAAAsAGQAZADAXAFIAcAGQAhAGAVAHIAYAIQAqANAAAfQgDAigbAYQgqAjgmAbQgnAdgnAXQgrAXgqAPQgnAPgdACQgTABgVAAIgkgBg");
	this.shape_6.setTransform(10.1,-27.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE1C2").s().p("Ah/ChQgUgCgTgFQgTgEgRgGQgjgMgXgXQgXgXgFglIAAgBQgGgnAJgZQAHgaATgUQATgVAggUQAigUAqgSQAZgLAkgFIArgEIAmgBQAtAAArAIQAaADAXAGIAcAHQAhAIAUAJIAXAJQAoAOAAAgQgDAigaAZQgpAkgmAdQgnAegoAWQgrAYgqAOQgoAOgeABIgYAAQgZAAgbgCg");
	this.shape_7.setTransform(7.8,-25.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE0C0").s().p("AiCClQgTgDgTgFQgTgFgRgHQgjgNgWgYQgWgYgFgmIAAAAQgFgnAIgaQAIgbASgUQAUgWAfgUQAjgVAqgTQAZgLAkgFQAVgDAXgBIAmgBQAuABArAJQAaAEAXAHIAcAIQAgAJAUAKIAWALQAnAQAAAgQgDAkgZAZQgoAlgmAeQgoAfgoAXQgrAXgsANQgoANgfABIgLAAQggAAgigFg");
	this.shape_8.setTransform(5.6,-22.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFDEBD").s().p("Ag3CwQglAAgogGQgUgEgTgGQgSgGgRgHQgigPgWgZQgVgZgFgmIAAgBQgFgnAJgbQAHgaATgVQATgXAfgVQAjgWAqgSQAagLAkgFQAWgDAWgCIAnAAQAvABArAKQAaAFAXAIIAbAKQAgAKAUALIAWAMQAlASAAAhQgDAkgYAXQgnApgnAfQgoAggpAXQgrAXgtANQgnAMgeAAIgDgBg");
	this.shape_9.setTransform(3.3,-20);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFDDBB").s().p("Ag5C3QgmgBgngIQgUgEgTgHQgTgHgRgIQghgQgUgbQgVgZgFgnIAAgBQgEgnAIgbQAIgbASgWQATgXAfgVQAjgXArgTQAagLAkgFQAWgDAXgCQAVgBASABQAwACArALQAaAGAXAJIAbALQAfALAUANIAVANQAjATAAAiQgCAkgYAZQglAqgoAgQgpAhgoAXQgsAXguAMQglAKgdAAIgHAAg");
	this.shape_10.setTransform(1,-17.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFDCB8").s().p("Ag7C+QgmgCgogKQgUgFgTgIQgSgHgRgJQgggSgUgbQgVgbgEgnIAAAAQgEgmAJgeQAHgbASgWQATgYAfgWQAkgYArgTQAagLAlgFQAVgEAYgBQAVgBASABQAwADAsAMQAaAHAXAKIAbALQAfANATAPIAUAOQAiAVAAAiQgCAlgXAZQgkAsgpAhQgpAigpAXQgsAXgvALQgiAJgcAAIgMAAg");
	this.shape_11.setTransform(-1.2,-14.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFDBB6").s().p("Ag9DEQgmgCgogLQgUgGgTgJQgSgIgRgKQgggTgTgcQgUgcgEgnIAAgBQgEglAJgfQAIgcASgWQATgZAegXQAkgZArgSQAbgMAlgFQAWgEAXgBQAUgBAVABQAwAEAsANQAaAIAXAKIAbANQAeAPATAPIAUAQQAgAWAAAjQgCAmgWAaQgjAsgpAjQgqAjgpAXQgtAXgwALQggAHgbAAIgQgBg");
	this.shape_12.setTransform(-3.5,-12);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFDAB4").s().p("Ag/DLQgngEgogMQgTgHgTgKQgTgIgQgLQgfgUgTgeQgTgcgEgoIAAgBQgDglAJggQAIgcARgXQATgZAegYQAkgZAsgTQAcgMAkgGQAWgDAYgBQAUgBAVACQAxADAsAPQAaAIAXAMIAaAOQAeAQATARIATARQAfAXAAAkQgDAngVAaQghAugqAjQgqAlgqAXQgtAXgxAKQgdAGgaAAIgVgBg");
	this.shape_13.setTransform(-5.8,-9.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFD8B1").s().p("AhBDRQgngEgogOQgUgIgTgKQgSgKgQgLQgfgWgSgeQgSgegEgoIAAAAQgDgmAJggQAIgcASgYQASgaAegYQAlgbArgTQAdgMAkgGQAXgDAYgBQAUgBAVACQAyAEAsAQQAaAJAXANIAaAPQAdARATATIASASQAdAZAAAlQgCAlgUAdQggAvgrAkQgqAmgqAXQguAXgxAJQgbAFgZAAQgNAAgNgCg");
	this.shape_14.setTransform(-8,-6.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFD7AF").s().p("AhDDYQgogGgngPQgUgIgTgMQgSgKgQgMQgegXgSggQgSgegCgpIAAAAQgDgmAJghQAIgcARgYQATgcAdgYQAlgcAsgTQAdgMAlgGQAWgDAZgBQAUgBAVACQAyAEAtASQAaAJAXAOQAOAIAMAJQAdASASAUIASAUQAbAaAAAmQgCAlgTAeQgfAxgrAlQgrAngqAWQgvAYgyAIQgZAEgWAAQgRAAgPgCg");
	this.shape_15.setTransform(-10.3,-4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFD6AC").s().p("AhFDeQgogGgogRQgUgJgTgMQgRgLgQgNQgegZgRggQgRgggCgpIAAAAQgDgmAKgiQAIgcAQgZQATgcAdgZQAmgdArgTQAegNAlgFQAXgDAYgBQAVgBAWACQAyAFAtASQAaALAXAPQAOAIAMAKQAcATASAWIARAUQAaAcAAAnQgCAmgTAfQgdAxgsAnQgrAogrAWQguAYg0AHQgWADgVAAQgTAAgSgDg");
	this.shape_16.setTransform(-12.6,-1.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFD5AA").s().p("AhHDlQgogIgogSQgUgKgTgNQgSgMgPgNQgdgagRgiQgQgggCgqIAAAAQgCgmAJgiQAIgdARgZQASgdAegaQAlgdAsgUQAegNAlgFQAXgEAZAAQAVgBAWACQAzAFAtAUQAaALAXAQQANAJAMAKQAcAVASAXIAQAWQAZAeAAAmQgCAogSAfQgcAzgtAnQgrAqgrAWQgvAYg1AGQgTADgTAAQgXAAgUgEg");
	this.shape_17.setTransform(-14.8,1.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFD3A7").s().p("AhIDrQgqgIgngUQgUgLgTgNQgSgNgPgOQgcgcgRgjQgPghgCgqIAAAAQgCgnAKgiQAIgdAQgaQATgdAdgbQAlgeAsgUQAfgNAlgGQAYgDAZgBQAVAAAWACQA0AGAtAVQAaAMAXARQANAJAMALQAcAWARAYIAQAYQAWAfAAAnQgBAogRAgQgbA0gtApQgsAqgsAXQgvAXg2AGQgQACgRAAQgaAAgWgFg");
	this.shape_18.setTransform(-17.1,4.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFD2A5").s().p("AhKDxQgqgJgogVQgUgLgTgPQgRgNgPgPQgcgdgPgkQgPgigCgrIAAAAQgBgnAJgjQAJgeAQgaQASgeAdgbQAmgfAsgUQAggNAlgGQAXgEAaAAQAVAAAWACQA1AGAtAXQAaAMAXASQANAKAMALQAbAYARAaIAPAZQAVAgAAAoQgBApgQAgQgaA2guApQgsAsgsAWQgwAYg3AFIgbABQgeAAgZgGg");
	this.shape_19.setTransform(-19.4,6.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFD1A3").s().p("AhMD4QgrgLgngWQgUgMgTgQQgSgOgOgQQgbgegPglQgOgjgCgrIAAAAQgBgnAKgkQAIgeAQgaQASgfAdgcQAmggAtgUQAggOAlgFQAYgEAZAAQAWgBAWADQA2AHAtAXQAaAOAXATQANAKAMAMQAaAZARAbQAIANAGANQAUAiAAApQgCApgPAhQgYA3gvArQgsAtgtAWQgwAYg3AEIgXAAQghAAgcgGg");
	this.shape_20.setTransform(-21.7,9.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFD0A0").s().p("AhOD+QgrgLgogZQgTgMgTgRQgSgOgOgRQgbgggOgmQgOgkgBgrIAAAAQAAgnAKglQAIgeAQgbQASggAcgdQAnggAsgUQAhgOAlgGQAYgEAaAAQAWAAAXADQA1AHAuAZQAaAOAXAUQANALAMAMQAZAaARAdQAIAOAGAOQASAjAAAqQgCAqgOAiQgXA3gvAsQgtAugtAXQgxAXg4ADIgRABQglAAgfgIg");
	this.shape_21.setTransform(-23.9,12.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFCE9E").s().p("AhQEEQgrgMgogaQgUgNgTgSQgRgPgOgRQgaghgOgoQgNglAAgrIAAAAQgBgoAKglQAJgeAPgcQASggAcgeQAngiAtgTQAhgOAlgGQAZgEAaAAQAWgBAXAEQA2AHAuAaQAaAPAXAVQANAMALANQAaAbAQAeQAHAPAGAOQAQAlAAAqQgBArgNAjQgWA5gwAtQgtAvgtAWQgxAYg6ACIgLAAQgpAAgigJg");
	this.shape_22.setTransform(-26.2,14.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFCD9B").s().p("AhSEKQgsgNgngbQgUgOgTgTQgRgQgOgSQgagigNgpQgMgmAAgrIAAAAQgBgoALgmQAIgfAQgcQASghAbgeQAogjAsgTQAigPAmgGQAYgEAbAAQAWAAAXADQA3AIAuAcQAaAPAXAWQANANALANQAZAdAQAfQAHAPAGAQQAOAmAAArQgBArgMAkQgVA6gwAuQguAwguAXQgxAXg7ACIgFAAQgtAAglgLg");
	this.shape_23.setTransform(-28.5,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},76).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_4}]},1).to({state:[{t:this.shape_3},{t:this.shape_5}]},1).to({state:[{t:this.shape_3},{t:this.shape_6}]},1).to({state:[{t:this.shape_3},{t:this.shape_7}]},1).to({state:[{t:this.shape_3},{t:this.shape_8}]},1).to({state:[{t:this.shape_3},{t:this.shape_9}]},1).to({state:[{t:this.shape_3},{t:this.shape_10}]},1).to({state:[{t:this.shape_3},{t:this.shape_11}]},1).to({state:[{t:this.shape_3},{t:this.shape_12}]},1).to({state:[{t:this.shape_3},{t:this.shape_13}]},1).to({state:[{t:this.shape_3},{t:this.shape_14}]},1).to({state:[{t:this.shape_3},{t:this.shape_15}]},1).to({state:[{t:this.shape_3},{t:this.shape_16}]},1).to({state:[{t:this.shape_3},{t:this.shape_17}]},1).to({state:[{t:this.shape_3},{t:this.shape_18}]},1).to({state:[{t:this.shape_3},{t:this.shape_19}]},1).to({state:[{t:this.shape_3},{t:this.shape_20}]},1).to({state:[{t:this.shape_3},{t:this.shape_21}]},1).to({state:[{t:this.shape_3},{t:this.shape_22}]},1).to({state:[{t:this.shape_3},{t:this.shape_23}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(151));

	// spermhead
	this.instance_1 = new lib.spermhead();
	this.instance_1.setTransform(33.2,-35.6,1,1,170);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(61).to({_off:false},0).to({x:19.2,y:-33.6,alpha:1},9).to({_off:true},7).wait(174));

	// cows
	this.instance_2 = new lib.cowstwo();
	this.instance_2.setTransform(-0.9,-27.1,0.5,0.5);
	this.instance_2.alpha = 0.25;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(229).to({_off:false},0).to({scaleX:1.2,scaleY:1.2,x:-4.9,y:-19.1,alpha:1},20).wait(1));

	// emb appear
	this.instance_3 = new lib.embryostwo();
	this.instance_3.setTransform(2,-76);
	this.instance_3.alpha = 0.5;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(189).to({_off:false},0).to({x:3.1,alpha:1},10).to({_off:true},1).wait(50));

	// embryo1
	this.instance_4 = new lib.embryo();
	this.instance_4.setTransform(90.8,-117.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(200).to({_off:false},0).wait(14).to({x:88.5,y:-131.5},0).to({scaleX:0.2,scaleY:0.2,x:36.5,y:-37.5},15).to({_off:true},1).wait(20));

	// embryo2
	this.instance_5 = new lib.embryo();
	this.instance_5.setTransform(-89,-113.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(200).to({_off:false},0).wait(14).to({x:-90.4,y:-127.5},0).to({scaleX:0.2,scaleY:0.2,x:-34.4,y:-35.5},15).to({_off:true},1).wait(20));

	// egg
	this.instance_6 = new lib.eggbig();
	this.instance_6.setTransform(-2,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#999999").ss(4,1,1).p("AAAsLQE7AADhDhQDhDpAAFBQAAFCjhDhQjhDpk7AAQk6AAjhjpQjhjhAAlCQAAlBDhjpQDhjhE6AAg");
	this.shape_24.setTransform(-2,0);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#66CCFF").s().p("AoaIjQjijhABlCQgBlBDijpQDgjgE6gBQE6ABDiDgQDgDpABFBQgBFCjgDhQjiDpk6AAQk6AAjgjpg");
	this.shape_25.setTransform(-2,0);

	this.instance_7 = new lib.eggdivide();
	this.instance_7.setTransform(-2,0);

	this.instance_8 = new lib.cellstwoshell();
	this.instance_8.setTransform(-89,4);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.shape_25},{t:this.shape_24}]},76).to({state:[{t:this.instance_6}]},23).to({state:[{t:this.instance_7}]},18).to({state:[{t:this.instance_8}]},37).to({state:[{t:this.instance_8}]},11).to({state:[{t:this.instance_8}]},24).to({state:[]},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(154).to({_off:false},0).wait(11).to({x:2,y:-75,alpha:0.25},24).to({_off:true},1).wait(60));

	// shell
	this.instance_9 = new lib.embryoshell();
	this.instance_9.setTransform(0.5,0,1.019,1.051);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(100).to({_off:false},0).to({alpha:1},15).wait(1).to({_off:true},1).wait(133));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.5,-80,173.1,190.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
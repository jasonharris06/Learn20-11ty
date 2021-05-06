// JavaScript Document

$(document).ready(function(e) {
	var popcorn = Popcorn( "#video" );
	var showSubtitles = true;
	document.getElementById('ccButton').addEventListener('click', function () {
		//toggle subtitles
    	showSubtitles = !showSubtitles;
    	if (showSubtitles) {
        	popcorn.disable('subtitle');
        	$("#ccButton").css("background-image","url(images/cc_off.png)");
   		 } else {
        	popcorn.enable('subtitle');
        	$("#ccButton").css("background-image","url(images/cc_on.png)");
    	}
	}, false);



	popcorn.subtitle({
     	start: .5,
     	end: 2.5,
     	target: "footnote",
     	text: "What do living things need to survive?"
     });

	popcorn.subtitle({
     	start: 2.5,
     	end: 9.5,
     	target: "footnote",
     	text: "You may be imagining blue skies, green forests, clear oceans, and oxygen-rich air"
     });
   
   	popcorn.subtitle({
     	start: 9.5,
    	end: 11.5,
    	target: "footnote",
     	text: "—conditions that keep us comfortable"
    });
   
    popcorn.subtitle({
     	start: 11.5,
     	end: 17,
     	target: "footnote",
     	text: "But Earth as we know it today is just a snapshot in our planet's long history."
    });
   
	popcorn.subtitle({
		start: 18,
		end: 26.6,
		target: "footnote",
		text: "Past conditions have been very different: toxic orange skies, an atmosphere with no oxygen, intense radiation,"
	});	 
	
	popcorn.subtitle({
		start: 26.6,
		end: 30,
		target: "footnote",
		text: "thick sheets of ice stretching from the poles to the tropics."
	});	  
	
	popcorn.subtitle({
		start: 30,
		end: 35.5,
		target: "footnote",
		text: "Yet life has survived on Earth through more than three and a half billion years of radical changes."
	});	 
						   
	popcorn.subtitle({
		start: 36,
		end: 42,
		target: "footnote",
		text: "In its most basic form, life is little more than a set of chemical reactions. "
	});
		 
	popcorn.subtitle({
		start: 42,
		end: 46,
		target: "footnote",
		text: "To sustain life as we know it, all you need are three ingredients:"
	});	

	popcorn.subtitle({
		start: 46,
		end: 52.4,
		target: "footnote",
		text: "a liquid medium, raw materials in the form of atoms, and an energy source."
	});
			   
	popcorn.subtitle({
		start: 52.6,
		end: 57,
		target: "footnote",
		text: "A liquid medium provides an environment where chemical reactions can take place."
	});		
			   
	popcorn.subtitle({
		start: 57,
		end: 63,
		target: "footnote",
		text: "For life on Earth it is water. Water dissolves and transports chemicals and nutrients, "
	});
			   
	popcorn.subtitle({
		start: 63,
		end: 67,
		target: "footnote",
		text: "and often times it participates in chemical reactions."
	});
			   
	popcorn.subtitle({
		start: 67.5,
		end: 72,
		target: "footnote",
		text: "To have liquid water, a planet must be in the just-right temperature range."
	});
			   
	popcorn.subtitle({
		start: 72,
		end: 75,
		target: "footnote",
		text: "Too hot and the water turns to gas."
	});
			   
			   
	popcorn.subtitle({
		start: 75,
		end: 77.5,
		target: "footnote",
		text: "Too cold and it remains solid."
	});
			   
	popcorn.subtitle({
		start: 77.5,
		end: 82,
		target: "footnote",
		text: "In extreme cold, chemical reactions can't take place."
	});
			   
	popcorn.subtitle({
		start: 82,
		end: 88,
		target: "footnote",
		text: "Earth is in the right temperature range because of its distance from the sun and its atmosphere."
	});
			   
	popcorn.subtitle({
		start: 88.5,
		end: 94,
		target: "footnote",
		text: "Atmospheric pressure keeps our water from boiling away and drifting into space."
	});
			   
	popcorn.subtitle({
		start: 94,
		end: 98,
		target: "footnote",
		text: "Carbon dioxide in the atmosphere traps heat like a blanket."
	});
			   
	popcorn.subtitle({
		start: 98,
		end: 103.3,
		target: "footnote",
		text: "Our atmosphere also protects us by reflecting harmful radiation."
	});
			   
	popcorn.subtitle({
		start: 103.5,
		end: 112,
		target: "footnote",
		text: "In their search for life on other planets, astrobiologists look for signs of a liquid medium, past or present."
	});
			   
	popcorn.subtitle({
		start: 112,
		end: 116,
		target: "footnote",
		text: "Even a very cold planet may have been warmer in the past,"
	});
			   
	popcorn.subtitle({
		start: 116,
		end: 121,
		target: "footnote",
		text: "and life might exist in small pockets of liquid water in underground caves or under ice,"
	});
			   
	popcorn.subtitle({
		start: 121,
		end: 124,
		target: "footnote",
		text: "perhaps warmed by volcanic activity."
	});
			   
	popcorn.subtitle({
		start: 124,
		end: 130.5,
		target: "footnote",
		text: "Astrobiologists also speculate that life may be able to survive in liquids other than water,"
	});
			   
	popcorn.subtitle({
		start: 130.5,
		end: 133,
		target: "footnote",
		text: "such as methane or ammonia."
	});
			   
	popcorn.subtitle({
		start: 133,
		end: 137,
		target: "footnote",
		text: "Some have even proposed that life could survive without any liquid."
	});
			   
	popcorn.subtitle({
		start: 137.5,
		end: 142,
		target: "footnote",
		text: "Atoms are the building blocks of everything in universe, including life."
	});
		   
	popcorn.subtitle({
		start: 142,
		end: 146,
		target: "footnote",
		text: "Life on Earth depends mainly on the organic elements:"
	});

	popcorn.subtitle({
		start: 146,
		end: 153,
		target: "footnote",
		text: "oxygen, carbon, hydrogen, and nitrogen—with a little phosphorus and sulfur thrown in."
	});
			   
	popcorn.subtitle({
		start: 153,
		end: 157.5,
		target: "footnote",
		text: "Together these elements make up more than 97% of the human body."
	});
			   
	popcorn.subtitle({
		start: 157.5,
		end: 162,
		target: "footnote",
		text: "They also take part in life-sustaining chemical reactions."
	});	
			   
	popcorn.subtitle({
		start: 162.5,
		end: 169,
		target: "footnote",
		text: "Elements come from stars, so the organic elements important for life as we know it are present throughout the universe."
	});	
			   
	popcorn.subtitle({
		start: 169,
		end: 177,
		target: "footnote",
		text: "What's important for living things is having these elemental building blocks in a usable form and in continuous supply."
	});	
			   
	popcorn.subtitle({
		start: 177.5,
		end: 181,
		target: "footnote",
		text: "For example, life on Earth is based around carbon."
	});	   
			   
	popcorn.subtitle({
		start: 181,
		end: 187,
		target: "footnote",
		text: "Carbon is a versatile element that can be put together to form many different kinds of stable molecules. "
	});	
			   
	popcorn.subtitle({
		start: 187,
		end: 190,
		target: "footnote",
		text: "But carbon trapped in rock is not useful."
	});	
			   
	popcorn.subtitle({
		start: 190,
		end: 195,
		target: "footnote",
		text: "Cycling brings carbon from rocks into the air and water, where living things can use it"
	});	
			   
	popcorn.subtitle({
		start: 195,
		end: 200.5,
		target: "footnote",
		text: "—and from the air and water back into rocks. Other elements cycle too."
	});	
			   
	popcorn.subtitle({
		start: 201,
		end: 204,
		target: "footnote",
		text: "When astrobiologists look for life elsewhere in the universe,"
	});	
			   
	popcorn.subtitle({
		start: 204,
		end: 210,
		target: "footnote",
		text: "they look for evidence of chemical reactions that were likely to have been carried out by living things."
	});	
			   
	popcorn.subtitle({
		start: 210,
		end: 218,
		target: "footnote",
		text: "But they also ask whether life in other places may be based around elements other than carbon, hydrogen, nitrogen, and oxygen."
	});	
			   
	popcorn.subtitle({
		start: 218.5,
		end: 223,
		target: "footnote",
		text: "Energy is also important for directly fueling life's chemical reactions."
	});	
			   
	popcorn.subtitle({
		start: 223,
		end: 229,
		target: "footnote",
		text: "Living things on Earth get energy either from the sun or from breaking down molecules."
	});	
	
	popcorn.subtitle({
		start: 229,
		end: 234,
		target: "footnote",
		text: "Plants use energy from the sun to build larger molecules from smaller ones."
	});	
	
	popcorn.subtitle({
		start: 234,
		end: 240,
		target: "footnote",
		text: "All other living things on Earth, including humans, break molecules to make molecules."
	});	
			   
	popcorn.subtitle({
		start: 240,
		end: 248,
		target: "footnote",
		text: "That is, they break down their food into smaller molecules, releasing energy that they use to build new molecules and to fuel their activity."
	});	
			   
	popcorn.subtitle({
		start: 249,
		end: 257,
		target: "footnote",
		text: "In their search for extraterrestrial life, astrobiologists generally look for places that have a system of free-flowing energy."
	});	
			   
	popcorn.subtitle({
		start: 257,
		end: 266,
		target: "footnote",
		text: "On Earth, for example, energy from the sun, gravity, and the planet's liquid core is converted to other forms as it flows through the system."
	});	
			   
	popcorn.subtitle({
		start: 267,
		end: 270,
		target: "footnote",
		text: "Energy from the sun heats the planet."
	});	
			   
	popcorn.subtitle({
		start: 270,
		end: 276.5,
		target: "footnote",
		text: "Together, gravity and the sun generate wind, water currents, and tides, which circulate raw materials."
	});	
			   
	popcorn.subtitle({
		start: 276.5,
		end: 280,
		target: "footnote",
		text: "They also cause electrical energy releases in the form of lightning,"
	});	
			   
	popcorn.subtitle({
		start: 280,
		end: 283,
		target: "footnote",
		text: "which can drive chemical reactions and produce heat."
	});	
			   
	popcorn.subtitle({
		start: 283.75,
		end: 289.5,
		target: "footnote",
		text: "The energy associated with our planet's core is described by the theory of plate tectonics."
	});	
			   
	popcorn.subtitle({
		start: 289.5,
		end: 296,
		target: "footnote",
		text: "Currents of molten rock slowly move huge land masses, or plates, around Earth's surface."
	});	
			   
	popcorn.subtitle({
		start: 296,
		end: 300,
		target: "footnote",
		text: "As the plates move, energy is released through earthquakes."
	});	
			   
	popcorn.subtitle({
		start: 301,
		end: 304,
		target: "footnote",
		text: "Activity at plate edges contributes to chemical cycling. "
	});	
			   
	popcorn.subtitle({
		start: 304,
		end: 310,
		target: "footnote",
		text: "The solid planet crust is pushed into the hot core where chemical reactions take place."
	});	
			   
	popcorn.subtitle({
		start: 310,
		end: 314,
		target: "footnote",
		text: "Material from the core moves to the surface through volcanoes and vents,"
	});	
	
	popcorn.subtitle({
		start: 314,
		end: 318,
		target: "footnote",
		text: "releasing gases and ash into the atmosphere and onto the surface."
	});	
			   
	popcorn.subtitle({
		start: 318.9,
		end: 324.5,
		target: "footnote",
		text: "Together, these circulating energy sources set up the conditions that allow life to survive."
	});	
			   
	popcorn.subtitle({
		start: 324.5,
		end: 330.5,
		target: "footnote",
		text: "Other planets with a similar energy flow may be home to their own forms of life."
	});	
			   
	popcorn.subtitle({
		start: 330.5,
		end: 337.5,
		target: "footnote",
		text: "Astrobiologists ask whether far-away life forms could find a way to harvest energy from sources other than the sun or chemicals"
	});	
			   
	popcorn.subtitle({
		start: 337.5,
		end: 340.15,
		target: "footnote",
		text: "such as electrical or mechanical energy."
	});	
			   
	popcorn.subtitle({
		start: 341,
		end: 347,
		target: "footnote",
		text: "Understanding the ingredients for life on Earth is a good place to start in the search for life elsewhere."
	});	
			   
	popcorn.subtitle({
		start: 347,
		end: 353.5,
		target: "footnote",
		text: "Since we know life thrives on Earth, we can look for similar conditions and signatures on other planets."
	});	
			   
	popcorn.subtitle({
		start: 354,
		end: 364,
		target: "footnote",
		text: "We can also use what we know about Earth's various life forms and the chemical properties of elements as a springboard to imagine alternative possibilities."
	});	
			   
	popcorn.subtitle({
		start: 364,
		end: 369,
		target: "footnote",
		text: "Life on other planets may look very different from life as we know it."
	});	

	
	popcorn.disable('subtitle');
});

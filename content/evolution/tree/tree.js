$(document).ready(function () {
   var allDots = document.getElementsByClassName("dot");
   var dotLvls = [
      document.getElementsByClassName("lvl1"),
      document.getElementsByClassName("lvl2"),
      document.getElementsByClassName("lvl3"),
      document.getElementsByClassName("lvl4"),
      document.getElementsByClassName("lvl5"),
      document.getElementsByClassName("lvl6"),
      document.getElementsByClassName("lvl7"),
      document.getElementsByClassName("lvl8"),
      document.getElementsByClassName("lvl9"),
      document.getElementsByClassName("lvl10"),
      document.getElementsByClassName("lvl11")
   ];
   var hLvls = [
      document.getElementsByClassName("hLvl1"),
      document.getElementsByClassName("hLvl2"),
      document.getElementsByClassName("hLvl3"),
      document.getElementsByClassName("hLvl4"),
      document.getElementsByClassName("hLvl5"),
      document.getElementsByClassName("hLvl6"),
      document.getElementsByClassName("hLvl7"),
      document.getElementsByClassName("hLvl8"),
      document.getElementsByClassName("hLvl9"),
      document.getElementsByClassName("hLvl10"),
      document.getElementsByClassName("hLvl11")
   ];
   var bLvls = [
      document.getElementsByClassName("b1"),
      document.getElementsByClassName("b2"),
      document.getElementsByClassName("b3"),
      document.getElementsByClassName("b4"),
      document.getElementsByClassName("b5"),
      document.getElementsByClassName("b6"),
      document.getElementsByClassName("b7"),
      document.getElementsByClassName("b8"),
      document.getElementsByClassName("b9"),
      document.getElementsByClassName("b10"),
      document.getElementsByClassName("b11")
   ];
   var tLvls = [
      document.getElementsByClassName("t1"),
      document.getElementsByClassName("t2"),
      document.getElementsByClassName("t3"),
      document.getElementsByClassName("t4"),
      document.getElementsByClassName("t5"),
      document.getElementsByClassName("t6"),
      document.getElementsByClassName("t7"),
      document.getElementsByClassName("t8"),
      document.getElementsByClassName("t9"),
      document.getElementsByClassName("t10"),
      document.getElementsByClassName("t11")
   ];

   var orgColors = {
      archaea: "#DA9BC5",
      plant: "#46B766",
      animal: "#F496AA",
      protist: "#E8BD0A",
      bacterium: "#43C5EB",
      fungus: "#F9AE41",

      archaea_archaea: "#B251D6",
      archaea_plant: "#117C4B",
      archaea_animal: "#E04FA5",
      archaea_protist: "#D37800",
      archaea_bacterium: "#009DDB",
      archaea_fungus: "#D37800",

      plant_plant: "#3C7C35",
      plant_archaea: "#117C4B",
      plant_animal: "#3C7C35",
      plant_protist: "#3F9623",
      plant_bacterium: "#117C4B",
      plant_fungus: "#3F9623",

      animal_animal: "#ED1D54",
      animal_archaea: "#E04FA5",
      animal_plant: "#3C7C35",
      animal_protist: "#EF7625",
      animal_bacterium: "#B251D6",
      animal_fungus: "#EA4E00",

      protist_protist: "#E8BD0A",
      protist_archaea: "#D37800",
      protist_plant: "#3F9623",
      protist_animal: "#EF7625",
      protist_bacterium: "#0D991D",
      protist_fungus: "#EF7625",

      bacterium_bacterium: "#009DDB",
      bacterium_archaea: "#009DDB",
      bacterium_plant: "#117C4B",
      bacterium_animal: "#B251D6",
      bacterium_protist: "#0D991D",
      bacterium_fungus: "#0D991D",

      fungus_fungus: "#EF7625",
      fungus_archaea: "#D37800",
      fungus_plant: "#3F9623",
      fungus_animal: "#EA4E00",
      fungus_protist: "#EF7625",
      fungus_bacterium: "#0D991D"
   }


   var i;
   var organisms = {
      m_jannaschii: {
         displayName: 'M. Jannaschii',
         keyName: 'm_jannaschii',
         orgType: 'archaea',
         elliottName: 'Archaea',
         element: null,
         geneNumber: getNumberGenes('Archaea'),
         traits: getTraits('Archaea'),
         treeTraits: null,
         blurb: "Like all archaea, M. Jannaschii is a microscopic, single-celled organism. This species lives miles under the surface of the ocean, near hydrothermal vents.",
         lca: null,
         selectionPathIds: ['m_jannaschiiPointer','v11','h10a','h10b'],
         selectionPath: []
      },
      potato: {
         displayName: 'POTATO (S. tuberosum)',
         keyName: 'potato',
         orgType: 'plant',
         elliottName: 'Potato',
         element: null,
         geneNumber: getNumberGenes('Potato'),
         traits: getTraits('Potato'),
         treeTraits: null,
         blurb: "This food plant was domesticated from its wild relative thousands of years ago in Mexico. It can reproduce using flowers, but new plants can also grow from the eyes of its underground, starchy tubers.",
         lca: null,
         selectionPathIds: ['potatoPointer','v11','h1b2','v8a','h8a','v9','v10b','h9b','h10c'],
         selectionPath: []
      },
      fruit_fly: {
         displayName: 'FRUIT FLY (D. melanogaster)',
         keyName: 'fruit_fly',
         orgType: 'animal',
         elliottName: 'Fly',
         element: null,
         geneNumber: getNumberGenes('Fly'),
         traits: getTraits('Fly'),
         treeTraits: null,
         blurb: "One of many flies that live on fruit, D. mela-\nnogaster is a common household pest. A subject of genetics research since the early 1900s, this tiny fly has helped scientists understand volumes about how genes influ-\nence development, behavior, and other traits.",
         lca: null,
         selectionPathIds: ['fruit_flyPointer','v11','h1c2','h6a','h7b','h8b','h9b','h10c','v10b','v9','v8b','v7','v6a'],
         selectionPath: []
      },
      nematode: {
         displayName: 'NEMATODE (C. elegans)',
         keyName: 'nematode',
         orgType: 'animal',
         elliottName: 'Nematode',
         element: null,
         geneNumber: getNumberGenes('Nematode'),
         traits: getTraits('Nematode'),
         treeTraits: null,
         blurb: "This tiny, transparent worm—just 1 mm long—lives in soil around the world. Researchers have long studied C. elegans to understand how its genes control many of its basic functions, which are surprisingly similar to other animals\'.",
         lca: null,
         selectionPathIds: ['nematodePointer','v11','h1c1','h6a','h7b','h8b','h9b','h10c','v10b','v9','v8b','v7','v6a'],
         selectionPath: []
      },
      chicken: {
         displayName: 'CHICKEN (G. gallus)',
         keyName: 'chicken',
         orgType: 'animal',
         elliottName: 'Chicken',
         element: null,
         geneNumber: getNumberGenes('Chicken'),
         traits: getTraits('Chicken'),
         treeTraits: null,
         blurb: "Like other birds, the chicken has a backbone and feathers, and it lays hard-shelled eggs. Domesticated chicken breeds come in many shapes, sizes, and colors. Different breeds have been specially bred for laying eggs, growing large muscles, or both.",
         lca: null,
         selectionPathIds: ['chickenPointer','v11','h1d1','h3a','h4b','h5b','h6b','h7b','h8b','h9b','h10c','v10b','v9','v8b','v7','v6b','v5','v4','v3a'],
         selectionPath: []
      },
      frog: {
         displayName: 'FROG (X. tropicalis)',
         keyName: 'frog',
         orgType: 'animal',
         elliottName: 'Frog',
         element: null,
         geneNumber: getNumberGenes('Frog'),
         traits: getTraits('Frog'),
         treeTraits: null,
         blurb: "The western clawed frog is an amphibian. This group of vertebrate animals spends its early life in the water, using fins to swim and  gills to breathe. During metamorphosis, it grows legs and lungs, allowing it to live comfortably on land.",
         lca: null,
         selectionPathIds: ['frogPointer','v11','h4a','h5b','h6b','h7b','h8b','h9b','h10c','v10b','v9','v8b','v7','v6b','v5'],
         selectionPath: []
      },
      mouse: {
         displayName: 'MOUSE (M. musculus)',
         keyName: 'mouse',
         orgType: 'animal',
         elliottName: 'Mouse',
         element: null,
         geneNumber: getNumberGenes('Mouse'),
         traits: getTraits('Mouse'),
         treeTraits: null,
         blurb: "The house mouse is a vertebrate and a mammal. Like other mammals, it has an internal skeleton with a backbone, it grows fur, and it makes milk for its babies.",
         lca: null,
         selectionPathIds: ['mousePointer','v11','h1e1','h2a','h3b','h4b','h5b','h6b','h7b','h8b','h9b','h10c','v10b','v9','v8b','v7','v6b','v5','v4','v3b','v2a'],
         selectionPath: []
      },
      malaria: {
         displayName: 'PLASMODIUM (P.falciparum)',
         keyName: 'malaria',
         orgType: 'protist',
         elliottName: 'Malaria',
         element: null,
         geneNumber: getNumberGenes('Malaria'),
         traits: getTraits('Malaria'),
         treeTraits: null,
         blurb: "This microscopic, single-celled protist causes the deadly disease malaria. It spends part of its life cycle in mosquitoes, and part in human blood cells. Mosquitoes transmit malaria by carrying plasmodium from one person to another.",
         lca: null,
         selectionPathIds: ['malariaPointer','v11','v10b','h9a','h10c'],
         selectionPath: []
      },
      cow: {
         displayName: 'COW (B. taurus)',
         keyName: 'cow',
         orgType: 'animal',
         elliottName: 'Cow',
         element: null,
         geneNumber: getNumberGenes('Cow'),
         traits: getTraits('Cow'),
         treeTraits: null,
         blurb: "Domestic cattle are hoofed mammals raised for milk, meat, and labor. People have been raising cattle for as long as 10,000 years, and from a single wild species (now extinct), and some mixing in from other species, they have developed hundreds of specialized breeds.",
         lca: null,
         selectionPathIds: ['cowPointer','v11','h1f1','h2b','h3b','h4b','h5b','h6b','h7b','h8b','h9b','h10c','v10b','v9','v8b','v7','v6b','v5','v4','v3b','v2b'],
         selectionPath: []
      },
      s_aureus: {
         displayName: 'S. Aureus',
         keyName: 's_aureus',
         orgType: 'bacterium',
         elliottName: 'Staph',
         element: null,
         geneNumber: getNumberGenes('Staph'),
         traits: getTraits('Staph'),
         treeTraits: null,
         blurb: "This microscopic, single-celled species of bacteria lives harmlessly on the skin and in the respiratory tract of many people and animals. Under certain conditions it can cause \"staph\" infections on the skin, sinus infections, or an upset stomach. ",
         lca: null,
         selectionPathIds: ['s_aureusPointer','h10b','h1a1','v11','v10a'],
         selectionPath: []
      },
      zebrafish: {
         displayName: 'ZEBRAFISH (D. rerio)',
         keyName: 'zebrafish',
         orgType: 'animal',
         elliottName: 'Zebrafish',
         element: null,
         geneNumber: getNumberGenes('Zebrafish'),
         traits: getTraits('Zebrafish'),
         treeTraits: null,
         blurb: "The zebrafish is a small fish native to warm, fresh water in Asia. It is easy to keep and breed in an aquarium, and it is often used in research. Because it is a vertebrate, it has many features in common with our pets, our livestock, and even us.",
         lca: null,
         selectionPathIds: ['zebrafishPointer','v11','h5a','h6b','h7b','h8b','h9b','h10c','v10b','v9','v8b','v7','v6b'],
         selectionPath: []
      },
      yeast: {
         displayName: 'YEAST (S. cerevisiae)',
         keyName: 'yeast',
         orgType: 'fungus',
         elliottName: 'Yeast',
         element: null,
         geneNumber: getNumberGenes('Yeast'),
         traits: getTraits('Yeast'),
         treeTraits: null,
         blurb: "Yeast is a microscopic, single-celled fungus that is used for baking bread and brewing beer. When it reproduces, a new cell forms as a “bud” on the parent cell, eventually breaking away.",
         lca: null,
         selectionPathIds: ['yeastPointer','v11','h7a','h8b','h9b','h10c','v10b','v9','v8b'],
         selectionPath: []
      },
      turtle: {
         displayName: 'TURTLE (P. sinensis)',
         keyName: 'turtle',
         orgType: 'animal',
         elliottName: 'Turtle',
         element: null,
         geneNumber: getNumberGenes('Turtle'),
         traits: getTraits('Turtle'),
         treeTraits: null,
         blurb: "Most turtles have hard, bony shells, but the shell of the Chinese softshell turtle is leathery and flexible. Because turtles have so many unusual features, including a protective shell, their relationship to other reptiles was debated for many years.",
         lca: null,
         selectionPathIds: ['turtlePointer','v11','h1d2','h3a','h4b','h5b','h6b','h7b','h8b','h9b','h10c','v10b','v9','v8b','v7','v6b','v5','v4','v3a'],
         selectionPath: []
      },
      moss: {
         displayName: 'MOSS  (P. patens)',
         keyName: 'moss',
         orgType: 'plant',
         elliottName: 'Moss',
         element: null,
         geneNumber: getNumberGenes('Moss'),
         traits: getTraits('Moss'),
         treeTraits: null,
         blurb: "This simple plant grows in mats on wet soil. Unlike larger, more-complex plants, it has no vasculature (internal tubes that carry nutrients and water), and it reproduces by forming spores, not flowers.",
         lca: null,
         selectionPathIds: ['mossPointer','v11','h1b1','v8a','h8a','v9','v10b','h9b','h10c'],
         selectionPath: []
      },
      e_coli: {
         displayName: 'E. Coli',
         keyName: 'e_coli',
         orgType: 'bacterium',
         elliottName: 'Ecoli',
         element: null,
         geneNumber: getNumberGenes('Ecoli'),
         traits: getTraits('Ecoli'),
         treeTraits: null,
         blurb: "This microscopic, single-celled species of bacteria lives in the lower digestive tract of many warm-blooded animals, including humans. Most strains of E. coli are harmless and even beneficial; but a few can cause illness.",
         lca: null,
         selectionPathIds: ['e_coliPointer','h10b','h1a2','v11','v10a'],
         selectionPath: []
      },
      chimpanzee: {
         displayName: 'CHIMP (P. Troglodytes)',
         keyName: 'chimpanzee',
         orgType: 'animal',
         elliottName: 'Chimp',
         element: null,
         geneNumber: getNumberGenes('Chimp'),
         traits: getTraits('Chimp'),
         treeTraits: null,
         blurb: "This African great ape lives in groups with complex social structures. Baby chimps stay close to their mothers for about five years. The mother provides milk, comfort, and protection, and she teaches them life skills like how to find food and use tools.",
         lca: null,
         selectionPathIds: ['chimpanzeePointer','v11','h1e2','h2a','h3b','h4b','h5b','h6b','h7b','h8b','h9b','h10c','v10b','v9','v8b','v7','v6b','v5','v4','v3b','v2a'],
         selectionPath: []
      },
      dolphin: {
         displayName: 'DOLPHIN (T. truncatus)',
         keyName: 'dolphin',
         orgType: 'animal',
         elliottName: 'Dolphin',
         element: null,
         geneNumber: getNumberGenes('Dolphin'),
         traits: getTraits('Dolphin'),
         treeTraits: null,
         blurb: "This cousin of whales is one of just a few mammals that lives its life entirely in the water. Though they aren't furry like other mammals, dolphins do make milk for their babies. Bottlenose dolphins have especially large brains and complex language skills.",
         lca: null,
         selectionPathIds: ['dolphinPointer','v11','h1f2','h2b','h3b','h4b','h5b','h6b','h7b','h8b','h9b','h10c','v10b','v9','v8b','v7','v6b','v5','v4','v3b','v2b'],
         selectionPath: []
      },
   };

   var mrcaYears = {
     v2a: '56.3',
     v2b: '90.9',
     v3a: '252.6',
     v3b: '97.5',
     v4: '320.5',
     v5: '355.7',
     v6a: '744',
     v6b: '429.6',
     v7:  '847',
     v8a: '551',
     v8b: '1303',
     v9: '1514',
     v10a: '3091',
     v10b: '1725',
     v11: '4290'
   }

   var orgElements = document.getElementsByClassName("organism");
   for(i = 0; i<orgElements.length; i++) {
      var currKey = orgElements[i].getAttribute('data-name');
      organisms[currKey].element = orgElements[i];
      organisms[currKey].labelElement = orgElements[i].querySelectorAll(":scope > .label")[0];

      for(var j = 0; j<organisms[currKey].selectionPathIds.length; j++) {
         organisms[currKey].selectionPath.push(document.getElementById(organisms[currKey].selectionPathIds[j]));
      }
   }

   for (var key in organisms){
      if (organisms.hasOwnProperty(key)) {
         organisms[key].pointerElement = document.getElementById(key+'Pointer');
      }
   }



   var sets = [
      {"sets": [0], "label":" ", "size": 2, "orgType": "undefined"},
      {"sets": [1], "label":" ", "size": 2, "orgType": "undefined"},
      {"sets": [0,1], "size": 1, "orgType": "undefined"},
   ];

   var chart = venn.VennDiagram().width(400).height(400).styled(false);
   var vennArea = d3.select("#vennArea");

  //  var tooltip = d3.select("body").append("div").attr("class", "venntooltip");
  //  tooltip.style({
  //     "position": "absolute",
  //     "text-align": "center",
  //     "font-size": "16px",
  //     "width": "128px",
  //     "height": "16px",
  //     "background": "#333",
  //     "color": "#ddd",
  //     "padding": "2px",
  //     "border": "0px",
  //     "opacity": "0"
  //  });



   var topRowItems = document.getElementsByClassName("topRowItem");
   var bottomRowItems = document.getElementsByClassName("bottomRowItem");

   var topOffset = 400;
   var lvlHeight = 20;
   var dotSize = 0;

   var selectedElements = [];
   var selectedLines = [];

  /*document.getElementById("lineHitArea").addEventListener("mouseover", function () {
       lvlHeight = 35;
      dotSize = 10;
      updateLines();
      updateDots();
      //TweenMax.to(vennArea, 0.3, {scale:'.5'});
   });*/
  //  document.getElementById("lineHitArea").addEventListener("mouseout", function () {
  //     lvlHeight = 20;
  //     dotSize = 0;
  //     updateLines();
  //     updateDots();
  //     //TweenMax.to(vennArea, 0.3, {scale:'1'});
  //  });

   for(i = 0; i<topRowItems.length; i++) {
      topRowItems[i].addEventListener("mouseover", function (e) { itemMouseEvent(e, false) });
      topRowItems[i].addEventListener("mouseout", function (e) { itemMouseEvent(e, false) });
      topRowItems[i].addEventListener("click", function (e) { itemClick(e, false) });
      TweenMax.set(topRowItems[i], {transformOrigin: 'center bottom'});
   }
   for(i = 0; i<bottomRowItems.length; i++) {
      bottomRowItems[i].addEventListener("mouseover", function (e) { itemMouseEvent(e, true) });
      bottomRowItems[i].addEventListener("mouseout", function (e) { itemMouseEvent(e, true) });
      bottomRowItems[i].addEventListener("click", function (e) { itemClick(e, true) });
      TweenMax.set(bottomRowItems[i], {transformOrigin: 'center top'});
   }
   for(i = 0; i<allDots.length; i++) {
      allDots[i].setAttribute("r", "0");
   }
   for(var i = 0; i<hLvls.length; i++) {
      var currOffset = topOffset + (lvlHeight * (i+1));
      var j;
      for(j = 0; j<hLvls[i].length; j++) {
         hLvls[i][j].setAttribute("y1", currOffset);
         hLvls[i][j].setAttribute("y2", currOffset);
      }
      for(j = 0; j<bLvls[i].length; j++) {
         bLvls[i][j].setAttribute("y2", currOffset);
      }
      for(j = 0; j<tLvls[i].length; j++) {
         tLvls[i][j].setAttribute("y1", currOffset);
      }
   }



   // ----------- Venn Diagram stuff ----------- //

   updateVennDiagram();

   function updateVennDiagram () {
      vennArea.datum(sets).call(chart);
      vennArea.selectAll("g").select(function(d, i) {
         this.setAttribute("data-org-type", d.orgType);
      });
      // vennArea.selectAll("g")
      //     .on("mouseover", function(d, i) {
      //         // sort all the areas relative to the current item
      //         venn.sortAreas(vennArea, d);
      //
      //         // Display a tooltip with the current size
      //         tooltip.transition().duration(400).style("opacity", 0.9);
      //         tooltip.text(d.size + " genes");
      //
      //         // highlight the current path
      //         var selection = d3.select(this).transition().duration(400);
      //         selection.select("path")
      //             // .style("stroke-width", 3)
      //             // .style("fill-opacity", d.sets.length == 1 ? 0.4 : 0.1)
      //             // .style("stroke-opacity", 1);
      //     })
      //
      //     .on("mousemove", function() {
      //         tooltip.style("left", (d3.event.pageX) + "px")
      //                .style("top", (d3.event.pageY - 28) + "px");
      //     })
      //
      //     .on("mouseout", function(d, i) {
      //         tooltip.transition().duration(400).style("opacity", 0);
      //         var selection = d3.select(this).transition().duration(400);
      //         selection.select("path")
      //             // .style("stroke-width", 0)
      //             // .style("fill-opacity", d.sets.length == 1 ? 0.25 : 0.0)
      //             // .style("stroke-opacity", 0);
      //     });
   }
   function updateDataSets () {
      sets = [];
      if(selectedElements.length === 0) {
         sets = [
            {"sets": [0], "label":" ", "size": 2},
            {"sets": [1], "label":" ", "size": 2},
            {"sets": [0,1], "size": 1},
         ];
         updateVennDiagram();
         fadeBlurbs();
         return;
      }
      var firstOrganism = organisms[selectedElements[0].getAttribute("data-name")];
      sets.push({"sets":[firstOrganism.keyName], "label": " ", "size": firstOrganism.geneNumber, "orgType": firstOrganism.orgType});
      if(selectedElements.length === 1) {
         updateVennDiagram();
         fadeBlurbs();
         return;
      }
      var secondOrganism = organisms[selectedElements[1].getAttribute("data-name")];
      sets.push({"sets":[secondOrganism.keyName], "label": " ", "size": secondOrganism.geneNumber, "orgType": secondOrganism.orgType});
      sets.push({"sets":[firstOrganism.keyName, secondOrganism.keyName], "size": getNumberSimilar(firstOrganism.elliottName, secondOrganism.elliottName), "orgType": firstOrganism.orgType + "_" + secondOrganism.orgType});
      updateVennDiagram();

      if(firstOrganism.geneNumber > secondOrganism.geneNumber) {
        document.getElementById("leftKingdom").innerText = firstOrganism.orgType;
        document.getElementById("leftKingdom").style.color = orgColors[firstOrganism.orgType];
        document.getElementById("leftGenes").style.color = orgColors[firstOrganism.orgType];
        document.getElementById("leftGenes").innerText = [(firstOrganism.geneNumber).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " GENES"];
        document.getElementById("leftName").innerText = firstOrganism.displayName;
        document.getElementById("leftBlurb").innerText = firstOrganism.blurb;

        document.getElementById("rightKingdom").innerText = secondOrganism.orgType;
        document.getElementById("rightKingdom").style.color = orgColors[secondOrganism.orgType];
        document.getElementById("rightName").innerText = secondOrganism.displayName;
        document.getElementById("rightBlurb").innerText = secondOrganism.blurb;
        document.getElementById("rightGenes").style.color = orgColors[secondOrganism.orgType];
        document.getElementById("rightGenes").innerText = [(secondOrganism.geneNumber).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " GENES"];
      }else{
        document.getElementById("leftKingdom").innerText = secondOrganism.orgType;
        document.getElementById("leftKingdom").style.color = orgColors[secondOrganism.orgType];
        document.getElementById("leftName").innerText = secondOrganism.displayName;
        document.getElementById("leftBlurb").innerText = secondOrganism.blurb;
        document.getElementById("leftGenes").style.color = orgColors[secondOrganism.orgType];
        document.getElementById("leftGenes").innerText = [(secondOrganism.geneNumber).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " GENES"];

        document.getElementById("rightKingdom").innerText = firstOrganism.orgType;
        document.getElementById("rightKingdom").style.color = orgColors[firstOrganism.orgType];
        document.getElementById("rightGenes").style.color = orgColors[firstOrganism.orgType];
        document.getElementById("rightGenes").innerText = [(firstOrganism.geneNumber).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " GENES"];
        document.getElementById("rightName").innerText = firstOrganism.displayName;
        document.getElementById("rightBlurb").innerText = firstOrganism.blurb;
      }
      document.getElementById("mrcaBox").style.fill = orgColors[firstOrganism.orgType + '_' + secondOrganism.orgType];
      document.getElementById("numberOfGenes").innerText = [getNumberSimilar(firstOrganism.elliottName, secondOrganism.elliottName).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " GENES IN COMMON"];
      document.getElementById("numberOfGenes").style.color = orgColors[firstOrganism.orgType + '_' + secondOrganism.orgType];
      // document.getElementById("inCommon").style.color = orgColors[firstOrganism.orgType + '_' + secondOrganism.orgType];
      console.log(orgColors[firstOrganism.orgType + '_' + secondOrganism.orgType]);

      fadeBlurbs();
   }

   function fadeBlurbs () {
     var newOpacity = (selectedElements.length > 1) ? '1' : '0';
     document.getElementById("leftBlurbGroup").style.opacity = newOpacity;
     document.getElementById("rightBlurbGroup").style.opacity = newOpacity;
     document.getElementById("mrcaBox").style.opacity = newOpacity;
     document.getElementById("mrca").style.opacity = newOpacity;
     document.getElementById("genesInCommon").style.opacity = newOpacity;
     document.getElementById("leftGeneCount").style.opacity = newOpacity;
     document.getElementById("rightGeneCount").style.opacity = newOpacity;
     document.getElementById("mostRecentText").style.opacity = (selectedElements.length > 1) ? '0' : '1';
   }




   // ----------- Update Lines and Dots ----------- //

   function updateLines () {
      for(var i = 0; i<hLvls.length; i++) {
         var currOffset = topOffset + (lvlHeight * (i+1));
         var j;
         for(j = 0; j<hLvls[i].length; j++) {
            TweenMax.killTweensOf(hLvls[i][j], {attr:{y1: currOffset, y2: currOffset}});
            TweenMax.to(hLvls[i][j], 0.3, {attr:{y1: currOffset, y2: currOffset}});
         }
         for(j = 0; j<bLvls[i].length; j++) {
            TweenMax.killTweensOf(bLvls[i][j], {attr:{y2: currOffset}});
            TweenMax.to(bLvls[i][j], 0.3, {attr:{y2: currOffset}});
         }
         for(j = 0; j<tLvls[i].length; j++) {
            TweenMax.killTweensOf(tLvls[i][j], {attr:{y1: currOffset}});
            TweenMax.to(tLvls[i][j], 0.3, {attr:{y1: currOffset}});
         }
      }
   }

   function updateLineHighlights () {
      var i;
      for(i = 0; i<selectedLines.length; i++) {
         TweenMax.killTweensOf(selectedLines[i], {stroke: true, strokeWidth: true});
         TweenMax.to(selectedLines[i], 0.3, {stroke: "#808080", strokeWidth: 2});
      }
      selectedLines = [];
      if(selectedElements.length === 0) return;


      var org1;
      var org2;
      var currentSmallest = "v20";
      if(selectedElements.length === 1) {
         org1 = organisms[selectedElements[0].getAttribute("data-name")];
         for(i = 0; i<org1.selectionPath.length; i++) {
            TweenMax.killTweensOf(org1.selectionPath[i], {stroke: true, strokeWidth: true});
            TweenMax.to(org1.selectionPath[i], 0.3, {stroke: orgColors[org1.orgType], strokeWidth: 10});
            selectedLines.push(org1.selectionPath[i]);
         }
      }else if(selectedElements.length === 2) {
         org1 = organisms[selectedElements[0].getAttribute("data-name")];
         org2 = organisms[selectedElements[1].getAttribute("data-name")];
         for(i = 0; i<org1.selectionPath.length; i++) {
            TweenMax.killTweensOf(org1.selectionPath[i], {stroke: true, strokeWidth: true});
            if(org2.selectionPath.indexOf(org1.selectionPath[i]) < 0) {
               TweenMax.to(org1.selectionPath[i], 0.3, {stroke: orgColors[org1.orgType], strokeWidth: 10});
            }
            else{
               TweenMax.to(org1.selectionPath[i], 0.3, {stroke: orgColors[org1.orgType + '_' + org2.orgType], strokeWidth: 10});
               if( org1.selectionPathIds[i].substring(0,1) === 'v') {
                 if(parseInt(org1.selectionPathIds[i].substring(1,3)) < parseInt(currentSmallest.substring(1,3))) {
              		currentSmallest = org1.selectionPathIds[i];
              	}
              }

            }
            selectedLines.push(org1.selectionPath[i]);
         }
         for(i = 0; i<org2.selectionPath.length; i++) {
            if(org1.selectionPath.indexOf(org2.selectionPath[i]) < 0) {
               TweenMax.killTweensOf(org2.selectionPath[i], {stroke: true, strokeWidth: true});
               TweenMax.to(org2.selectionPath[i], 0.3, {stroke: orgColors[org2.orgType], strokeWidth: 10});
               selectedLines.push(org2.selectionPath[i]);
            }
         }
         document.getElementById("yearTime").innerText = mrcaYears[currentSmallest] + " MILLION YEARS AGO";
         console.log(currentSmallest);
      }
   }

   function updateDots () {
      for(var i = 0; i<dotLvls.length; i++) {
         var currOffset = topOffset + (lvlHeight * (i+1)) - (lvlHeight * 0.5);
         var j;
         for(j = 0; j<dotLvls[i].length; j++) {
            TweenMax.to(dotLvls[i][j], 0.3, {attr:{cy: currOffset, r: dotSize}});
         }
      }
   }


   // ----------- User Interaction Functions ----------- //

   function itemMouseEvent (e, bottomRow) {
      var currTarget = e.currentTarget;
      var newScale = (e.type === "mouseover") ? '1.25' : '1';

      if(selectedElements.indexOf(currTarget) >= 0)
         return;

      TweenMax.killTweensOf(currTarget);
      TweenMax.to(currTarget, 0.3, {scale: newScale});

      if(bottomRow){
         var label = organisms[currTarget.getAttribute("data-name")].labelElement;
         TweenMax.killTweensOf(label);
         TweenMax.to(label, 0.3, {y: (e.type === "mouseover") ? 415 : 392.2603});
         TweenMax.to(organisms[currTarget.getAttribute("data-name")].pointerElement, 0.3, {attr:{y1: (e.type === "mouseover") ? 420 : 400}});


         // this is broken... //
         // if(selectedElements.length > 0) {
         //    console.log('felt selected');
         //    if(selectedElements[0].className.baseVal === 'bottomRow') return;
         //    if(selectedElements[1])
         //       if(selectedElements[1].className.baseVal === 'bottomRow') return;
         // }

         // topOffset = (e.type === "mouseover") ? 420 : 400;
         // updateLines();
         // updateDots();
      }
   }
   function itemClick (e, bottomRow) {
      var currTarget = e.currentTarget;
      var label;

      if(selectedElements.indexOf(currTarget) >= 0) {
         selectedElements.splice(selectedElements.indexOf(currTarget), 1);

         TweenMax.killTweensOf(currTarget);
         TweenMax.to(currTarget, 0.3, {scale:'1'});
         if(bottomRow){
            label = organisms[currTarget.getAttribute("data-name")].labelElement;
            TweenMax.killTweensOf(label);
            TweenMax.to(label, 0.3, {y: 392.2603});
            TweenMax.to(organisms[currTarget.getAttribute("data-name")].pointerElement, 0.3, {attr:{y1: 400}});

            if(selectedElements.length > 0) {
               if(selectedElements[0].className.baseVal == 'topRowItem') {
                  topOffset = 400;
                  updateLines();
                  updateDots();
               }
            }else{
               topOffset = 400;
               updateLines();
               updateDots();
            }
         }
      }else{
         if(selectedElements.length === 2) {
            TweenMax.killTweensOf(selectedElements[0]);
            TweenMax.to(selectedElements[0], 0.3, {scale:'1'});
            TweenMax.killTweensOf(selectedElements[1]);
            TweenMax.to(selectedElements[1], 0.3, {scale:'1'});

            if(selectedElements[0].className.baseVal == 'bottomRowItem') {
               var dLabel = organisms[selectedElements[0].getAttribute("data-name")].labelElement;
               TweenMax.killTweensOf(dLabel);
               TweenMax.to(dLabel, 0.3, {y: 392.2603});
               topOffset = 400;
               TweenMax.to(organisms[selectedElements[0].getAttribute("data-name")].pointerElement, 0.3, {attr:{y1: topOffset}});
               updateLines();
               updateDots();
            }
            if(selectedElements[1].className.baseVal == 'bottomRowItem') {
               var dLabel2 = organisms[selectedElements[1].getAttribute("data-name")].labelElement;
               TweenMax.killTweensOf(dLabel2);
               TweenMax.to(dLabel2, 0.3, {y: 392.2603});
               topOffset = 400;
               TweenMax.to(organisms[selectedElements[1].getAttribute("data-name")].pointerElement, 0.3, {attr:{y1: topOffset}});
               updateLines();
               updateDots();
            }

            selectedElements = [];
         }
         selectedElements.push(currTarget);
         TweenMax.killTweensOf(currTarget);
         TweenMax.to(currTarget, 0.3, {scale:'2'});
         if(bottomRow){
            label = organisms[currTarget.getAttribute("data-name")].labelElement;
            TweenMax.killTweensOf(label);
            TweenMax.to(label, 0.3, {y: 475});

            topOffset = 480;
            TweenMax.to(organisms[currTarget.getAttribute("data-name")].pointerElement, 0.3, {attr:{y1: topOffset}});
            updateLines();
            updateDots();
         }
      }
      updateLineHighlights();
      updateDataSets();
   }
});

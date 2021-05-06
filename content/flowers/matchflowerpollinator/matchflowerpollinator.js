var correctCards = 0;
$( init );

function init() {

  // Hide the success message
  $('#successMessage').hide();
  /*$('#successMessage').css( {
    left: '580px',
    top: '250px',
    width: 0,
    height: 0
  } );*/

  // Reset the game
  correctCards = 0;
  $('#cardPile').html( '' );
  $('#cardSlots').html( '' );

  // Create the pile of shuffled pollinators
  var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ];
  numbers.sort( function() { return Math.random() - .5 } );

  var pollinators = {};
  pollinators[1] = 'Honeybee';
  pollinators[2] = 'Bumblebee';
  pollinators[3] = 'Butterfly';
  pollinators[4] = 'Hummingbird';
  pollinators[5] = 'Beetle';
  pollinators[6] = 'Fly';
  pollinators[7] = 'Bat';
  pollinators[8] = 'Wind';
  pollinators[9] = 'Hawk Moth';
  pollinators[10] = 'Honey Possum';
  pollinators[11] = 'Sunbird';

  var pimages = {}
  pimages[1] = 'images/HoneyBeeResized.png';
  pimages[2] = 'images/BubblebeeResized.png';
  pimages[3] = 'images/ButterflyResized.png';
  pimages[4] = 'images/HummingbirdResized.png';
  pimages[5] = 'images/BeetleResized.png';
  pimages[6] = 'images/FlyResized.png';
  pimages[7] = 'images/BatResized.png';
  pimages[8] = 'images/WindResized.png';
  pimages[9] = 'images/HawkMothResized.png';
  pimages[10] = 'images/HoneyPossumResized.png';
  pimages[11] = 'images/SunbirdResized.png';
  
  var ptraits = {};
  ptraits[1] = "<br>- Thin body with small hairs<br>- Great sense of smell<br>- Can&#8217t see red";
  ptraits[2] = "<br>- Large and strong<br>- Fuzzy body<br>- Can&#8217t see red";
  ptraits[3] = "<br>- Long, straw-like mouthpart (proboscis)<br>- Good sense of smell<br>- Can see red";
  ptraits[4] = "<br>- Poor sense of smell<br>- Can see red";
  ptraits[5] = "<br>- Clumsy flier<br>- Often eat flower parts in addition to pollen";
  ptraits[6] = "<br>- Strong sense of smell<br>- Drawn to decaying material to lay eggs";
  ptraits[7] = "<br>- Feed at night<br>- Strong sense of smell";
  ptraits[8] = " ";
  ptraits[9] = "<br>- Feed at night<br>- Strong sense of smell<br>- Straw-like mouthpart (proboscis) up to 12 inches long";
  ptraits[10] = "<br>- Extremely long tongue<br>- Good climber with grasping tail";
  ptraits[11] = "<br>- Require a perch<br>- Can see red";

  for ( var i=0; i<11; i++ ) {
    $('<div><img src="' + pimages[numbers[i]] + '"><strong>' + pollinators[numbers[i]] + '</strong></div>').data( 'number', numbers[i] ).attr('id', 'card').appendTo( '#cardPile' ).draggable( {
      stack: '#cardPile div',
      cursor: 'move',
      revert: true
    } );
  }

  // Create the flower slots
  var flowers = [ 'Almond', 
  'Allegheny Monkeyflower', 
  'Phlox', 
  'Scarlet Monkeyflower', 
  'Magnolia', 
  'Red Trillium', 
  'Saguaro Cactus', 
  'Ragweed', 
  'Darwin&#8217s Orchid', 
  'Candlestick Banksia', 
  'Bird of Paradise' ];

  var fimages = {}
  fimages[1] = 'images/AlmondResized.png';
  fimages[2] = 'images/AlleghenyMonkeyflowerResized.png';
  fimages[3] = 'images/PhloxResized.png';
  fimages[4] = 'images/ScarletMonkeyflowerResized.png';
  fimages[5] = 'images/MagnoliaResized.png';
  fimages[6] = 'images/RedTrilliumResized.png';
  fimages[7] = 'images/SaguaroCactusResized.png';
  fimages[8] = 'images/RagweedResized.png';
  fimages[9] = 'images/DarwinsOrchidResized.png';
  fimages[10] = 'images/CandlestickBanksiaResized.png';
  fimages[11] = 'images/BirdofParadiseResized.png';

  var ftraits = {};
  ftraits[1] = "<br>- Sticky pollen<br>- Sweet scent";
  ftraits[2] = "<br>- Partially closed petals<br>- Pollinator must open the flower up to reach nectar";
  ftraits[3] = "<br>- Nectar-rich<br>- Sweet Scent";
  ftraits[4] = "<br>- Nectar-rich<br>- Little/no scent";
  ftraits[5] = "<br>- Sturdy flowers<br>- Tough rubbery petals";
  ftraits[6] = "<br>- Odor resembles rotting meat<br>- No nectar";
  ftraits[7] = "<br>- Fragrant flowers<br>- Nectar-rich<br>- Bloom at night";
  ftraits[8] = "<br>- Abundant pollen that is smooth and lightweight";
  ftraits[9] = "<br>- Store nectar at base of a very long tube<br>- Very fragrant, especially at night";
  ftraits[10] = "<br>- Sturdy flowers<br>- Sticky pollen<br>- Nectar-rich";
  ftraits[11] = "<br>- Nectar-rich<br>- Flowers emerge from a sturdy casing<br>- Pollinators stand on the casing while they feed";

  for ( var i=1; i<=11; i++ ) {
    $('<div><img src="' + fimages[i] + '"><strong>' + flowers[i-1] + '</strong></div>').data( 'number', i ).attr('id', 'card').appendTo( '#cardSlots' ).droppable( {
      accept: '#cardPile div',
      hoverClass: 'hovered',
      drop: handleCardDrop
    } );
  }
}

function handleCardDrop(event, ui) {
  
  //Grab the flower slot number and pollinator card number
  var slotNumber = $(this).data('number');
  var cardNumber = ui.draggable.data('number');
  
  //If the card was dropped to the correct slot,
  //position it directly on top of the slot and 
  //prevent it from being dragged again
  if (slotNumber === cardNumber) {
    ui.draggable.addClass('correct');
    ui.draggable.draggable('disable');
    $(this).droppable('disable');
    ui.draggable.position({
      of: $(this), my: 'left top', at: 'left top'
    });
    //This prevents the card from being
    //pulled back to its initial position
    //once it has been dropped
    ui.draggable.draggable('option', 'revert', false);
    correctCards++; //keep track of score
  }
  
  //When all cards are placed correctly, show success message
  //and play again button
  
  if (correctCards === 11) {
    $('#successMessage').show();
    $('#successMessage').animate({
      left: '40%',
      top: '40%',
      width: '400px',
      height: '100px',
      opacity: 1
    });
  }
  
  $('#card').click(function(){
    $(this).toggleClass('flipped');
  });
}
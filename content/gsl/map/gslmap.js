// javascript code for "Where To Go" map

var map;
var lakeicon = 'markers/lake.png';
var wetlandsicon = 'markers/wetlands.png';
var museumicon = 'markers/museum.png';

function initialize() {
   var mapOptions = {
       zoom: 9,
       center: new google.maps.LatLng(41.2, -112.3),
       mapTypeId: google.maps.MapTypeId.ROADMAP
     };
   map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

   // spiral jetty
   var sjmarker = new google.maps.Marker({
      position: new google.maps.LatLng(41.4377, -112.6687),
      icon: lakeicon,
      map: map,
      title: 'Spiral Jetty'
  });
  google.maps.event.addListener(sjmarker, 'click', function () {
     $("#sj").fadeIn(500);
  });

  // locamotive springs
   var lsmarker = new google.maps.Marker({
      position: new google.maps.LatLng(41.6990, -112.8991),
      icon: wetlandsicon,
      map: map,
      title: 'Locamotive Springs'
  });
  google.maps.event.addListener(lsmarker, 'click', function () {
     $("#ls").fadeIn(500);
  });

  // Bear River Bird Refuge Loop
   var brmarker = new google.maps.Marker({
      position: new google.maps.LatLng(41.4792, -112.2663),
      icon: wetlandsicon,
      map: map,
      title: 'Bear River Bird Refuge Loop'
  });
  google.maps.event.addListener(brmarker, 'click', function () {
     $("#br").fadeIn(500);
  });

  // Golden Spike National Historic Site
   var gsmarker = new google.maps.Marker({
      position: new google.maps.LatLng(41.6179, -112.5517),
      icon: museumicon,
      map: map,
      title: 'Golden Spike National Historic Site'
  });
  google.maps.event.addListener(gsmarker, 'click', function () {
     $("#gs").fadeIn(500);
  });

  // Antelope Island State Park
   var aimarker = new google.maps.Marker({
      position: new google.maps.LatLng(41.0606, -112.2386),
      icon: lakeicon,
      map: map,
      title: 'Antelope Island State Park'
  });
  google.maps.event.addListener(aimarker, 'click', function () {
     $("#ai").fadeIn(500);
  });

  // Great Salt Lake Shorelands Preserve
   var spmarker = new google.maps.Marker({
      position: new google.maps.LatLng(41.0401, -112.0255),
      icon: wetlandsicon,
      map: map,
      title: 'Great Salt Lake Shorelands Preserve'
  });
  google.maps.event.addListener(spmarker, 'click', function () {
     $("#sp").fadeIn(500);
  });

  // Nature Center at Farmington Bay
   var ncmarker = new google.maps.Marker({
      position: new google.maps.LatLng(40.9615, -111.9288),
      icon: wetlandsicon,
      map: map,
      title: 'Nature Center at Farmington Bay'
  });
  google.maps.event.addListener(ncmarker, 'click', function () {
     $("#nc").fadeIn(500);
  });

  // Farmington Bay Bird Refuge
   var fbmarker = new google.maps.Marker({
      position: new google.maps.LatLng(40.9542, -111.91682),
      icon: wetlandsicon,
      map: map,
      title: 'Farmington Bay Bird Refuge'
  });
  google.maps.event.addListener(fbmarker, 'click', function () {
     $("#fb").fadeIn(500);
  });

  // Lee Creek
   var lcmarker = new google.maps.Marker({
      position: new google.maps.LatLng(40.76979, -112.15438),
      icon: wetlandsicon,
      map: map,
      title: 'Lee Creek'
  });
  google.maps.event.addListener(lcmarker, 'click', function () {
     $("#lc").fadeIn(500);
  });

  // Saltair
   var samarker = new google.maps.Marker({
      position: new google.maps.LatLng(40.747216,-112.188209),
      icon: lakeicon,
      map: map,
      title: 'Saltair'
  });
  google.maps.event.addListener(samarker, 'click', function () {
     $("#sa").fadeIn(500);
  });

}

google.maps.event.addDomListener(window, 'load', initialize);
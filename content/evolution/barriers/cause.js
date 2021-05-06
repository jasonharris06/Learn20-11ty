$(function() {
   $(document)
      .on('show.uk.slideshow',
         function(event){
            if ($('.item.uk-active > audio').get(0) !== undefined) {
               $('.item.uk-active > audio').get(0).play();
            };
         });
   $(document)
      .on('beforeshow.uk.slideshow',
         function(event){
            if ($('.item.uk-active > audio').get(0) !== undefined) {
               $('.item.uk-active > audio').get(0).pause();
               $('.item.uk-active > audio').get(0).currentTime = 0;
            };
         });
});

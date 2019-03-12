var sliders = [];
jQuery( document ).ready( function(){
  jQuery( '.slick' ).each( function(){
    var opt = window[jQuery(this).attr('id')];
    var newops = {
        infinite: (opt.infinite === '1'),
        slidesToShow: parseInt(opt.slidesToShow),
        slidesToScroll: parseInt(opt.slidesToScroll),
        dots: (opt.dots === '1'),
        speed: parseInt(opt.speed),
        centerMode: (opt.centerMode === '1'),
        variableWidth: (opt.variableWidth === '1'),
        autoplay: (opt.autoplay === '1'),
        autoplaySpeed: parseInt(opt.autoplaySpeed),
        fade: (opt.fade === '1'),
      };
      console.log(newops);
    jQuery(this).slick(newops);
  });
});

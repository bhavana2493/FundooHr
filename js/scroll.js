$(document).ready(function () {
  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();
    //console.log(cur_pos);
    $('section').each(function () {
      var top = $(this).offset().top - 180,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        // console.log($(this).attr('id'))
        $('.alphabets li a').removeClass('active');
        //$(this).addClass('active');
        $('.alphabets li .' + $(this).attr('id')).addClass('active');
      }
    });
  });
  /** 
   * This part does the "fixed anchor after scroll" functionality
   * use the jQuery function scroll() to recalculate our variables as the 
   * page is scrolled/
   */
  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 75; 
    var div_top = $('.display').offset().top;
    if (window_top > div_top) {
      $('.anchor').addClass('stick');
    } else {
  console.log("removing stick")
      $('.anchor').removeClass('stick');
    }
  });


});

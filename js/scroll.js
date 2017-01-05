$(document).ready(function () {

 
$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  //console.log(cur_pos);
 $('section').each(function() {
    var top = $(this).offset().top-250,
        bottom = top + $(this).outerHeight();
          
    if (cur_pos >= top && cur_pos <= bottom) {
// console.log($(this).attr('id'))
     $('.alphabets li a').removeClass('active');
      //$(this).addClass('active');
     $('.alphabets li .'+$(this).attr('id')).addClass('active');
    }
  });
});


});

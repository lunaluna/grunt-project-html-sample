
$(function() {
	$("#mnavi").hide();
	$("a.navi_menu").click(function(){
		$("#mnavi").toggle("normal");
	})
});

$(function() {
	$("a.scroll").click(function(){
		$("#mnavi").hide("normal");
	})
});

jQuery(function($) {

var nav    = $('#fix_head'),
    offset = nav.offset();

$(window).scroll(function () {
  if($(window).scrollTop() > offset.top) {
    nav.addClass('fixed');
  } else {
    nav.removeClass('fixed');
  }
});

});

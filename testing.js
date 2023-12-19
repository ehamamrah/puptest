
function isMobile() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return true;
  } else {
    return false;
  }
}

if(isMobile()){
  $(".sticky").css({
      'position'    : "absolute",
      'top'         : "0",
      'left'        : "0",
      'width'       : "100%",
      'z-index'     : "1",
      'overflow'    : "hidden"
  });
  $('#hideen-tabs-id').addClass('hidden-tabs');
  $('#clik').find('span').removeClass('active');
}

function ToggleMenu(){
	var width = $(".mobile-nav").width()
	if ($(".mobile-nav").hasClass('open-nav')) {
		$(".mobile-nav").animate({ "right": "-"+width+"px" }, "slow" )
		$(".mobile-nav").removeClass('open-nav');
		$('.sticky').css('display','inline-block');
		$('.sticky-nav').css('display','inline-block');
	} else {
		$(".mobile-nav").animate({ "right": "0px" }, "slow" )
		$(".mobile-nav").addClass('open-nav')
		$('.sticky').css('display','none');
		$('.sticky-nav').css('display','none');
	}
}

function toggleList(){
	$('#hideen-tabs-id').toggleClass('hidden-tabs');
	if($('#clik').find('span.active').length !== 0){
		$('#clik').find('span').removeClass('active');
	}
	else {
		$('#clik').find('span').addClass('active');
	}
};

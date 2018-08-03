jQuery(function($) {
	$("#jquery-rss-feed-demo").rss("http://feeds.feedburner.com/ndtvprofit-latest", {
		limit: 5,
		effect: 'slide'
	})
	$('.pageLink').click(function(){
		navHandler($(this));
	});
})
function navHandler(ele){
	var dataToggle = ele.data('page');
	if(ele.hasClass('nav-item')){
		$('.nav-item.active').removeClass('active');
		ele.addClass('active');
	}
	$('.page').each(function(){
		if($(this).data('page') == dataToggle){
			$('.page').addClass('none');
			$(this).removeClass('none');
		}
	});
}
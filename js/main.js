jQuery(function($) {
	$("#jquery-rss-feed-demo").rss("http://feeds.feedburner.com/ndtvprofit-latest", {
		limit: 5,
		effect: 'slide'
	})
	$('.pageTitle').click(function(){
		navHandler($(this));
	});
})
function navHandler(ele){
	var dataToggle = ele.data('page');
	$('.nav-item.active').removeClass('active');
	ele.addClass('active');
	$('.page').each(function(){
		if($(this).data('page') == dataToggle){
			$('.page:not(.none)').addClass('none');
			$(this).removeClass('none');
		}
	});
}
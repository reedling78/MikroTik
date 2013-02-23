
(function(){
	$(document).ready(function(){
		//get init height
		var articleStartHeight = $('article').height();
		var collapsedHeight = 200;
		var isExpanded = false;

		
		$('article').css('height', collapsedHeight + 'px'); //shrink article
		$('section footer').css('visibility', 'visible');

		$('section footer a').on('click', function(){
			if(isExpanded){
				$('article').animate({height:collapsedHeight})
				$(this).text('Read More');
				isExpanded = false;
			} else {
				$('article').animate({height:articleStartHeight});
				$(this).text('Read Less');
				isExpanded = true;
			}
			return false;
		})
	});
})();



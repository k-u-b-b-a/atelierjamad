
$(document).ready(function(){

	$(".first-level-content").hide();

	$(".navigation").hover( function(){
		$(this).css("color", "#09c");
	}, function(){
		$(this).css("color", "#000");	
	});

	$(".second-level-content").hover( function(){
		$(this).css("color", "#09c");
	}, function(){
		$(this).css("color", "#000");	
	});

	$(".external-links").hover( function(){
		$(this).css("color", "#09c");
	}, function(){
		$(this).css("color", "#000");	
	});


  
	$(".navigation").click(function(event) {

		var link = $(this);

		event.preventDefault();

		$(".navigation").removeClass("underline");

		$(".second-level-content").removeClass("underline");

		link.addClass("underline");

		$(".navigation").animate({
		 	opacity: '1'
		}, {
			queue: false	
		});

		link.animate({
		 	opacity: '0.6'
		},{
			queue: false	
		});

		$(".slidesjs-pagination").hide();

		$(".first-level-content").hide();

		var content_element_id = link.attr("href");

		$(content_element_id).fadeIn();

		$(".third-level-content").hide();
	
	});


	$(".second-level-content").click(function(event) {

		var link = $(this);

		event.preventDefault();

		$(".second-level-content").removeClass("underline");

		link.addClass("underline");

		$(".second-level-content").animate({
			opacity: '1'
		}, {
			queue: false	
		});

		link.animate({
			opacity: '0.6'
		},{
			queue: false	
		});


		$(".slidesjs-pagination").hide();

		$(".third-level-content").hide();

		var content_element_id = link.attr("href");

		$(content_element_id).fadeIn();

	});


	$("#photographs").click(function(){
		var content_element_id = link.attr("href");

		$(content_element_id).fadeIn();
	});


});

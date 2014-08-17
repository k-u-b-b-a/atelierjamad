
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

	
		$(".navigation").removeClass("underline")

		$(".second-level-content").removeClass("underline")

		link.addClass("underline")


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

	
		$(".second-level-content").removeClass("underline")

		link.addClass("underline")


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





// /* ABOUT CLICK */

// 	$("#navigation-about").click(function () {

// 		$(".navigation").removeClass("underline")

// 		$("#navigation-about").addClass("underline")


// /* CHANGING OPACITY */

// 		$(".navigation").animate({
// 		 	opacity: '0.6'
// 		},{
// 			queue: false	
// 		});
// 		$("#navigation-installations, #navigation-objects, #navigation-drawings, #navigation-contact").animate({
// 		 	opacity: '1'
// 		}, {
// 			queue: false	
// 		});
		
// /* END OF CHANGING OPACITY */

// 		$(".content").hide();
		
// 		$("#about").fadeIn();
	
// 	});

// /* INSTALLATIONS CLICK */


// 	$("#navigation-installations").click(function () {
// 		$(".content").hide();
		
			
// 		$(".navigation").animate({
// 			opacity: '0.5'
// 		}, {
// 			queue: false	
// 		});
// 		$("#navigation-about, #navigation-objects, #navigation-drawings, #navigation-contact").animate({
// 			opacity: '1'
// 		}, {
// 			queue: false	
// 		});

		

// 		$("#navigation-installations").addClass("underline")
// 		$("#navigation-about, #navigation-objects, #navigation-drawings, #navigation-contact").removeClass("underline")



 		// $(".installations-content").hide();
// 		$("#installations").fadeIn();
 		// $("#unsignal-images").hide();
		
// 	});





// /* OBJECTS CLICK */

// 	$("#navigation-objects").click(function () {
		
// 		$("#navigation-about, #navigation-installations, #navigation-drawings, #navigation-contact").css(
// 				"background-color", '#fff'
// 		);

// 		$("#navigation-objects").addClass("underline")
// 		$("#navigation-about, #navigation-installations, #navigation-drawings, #navigation-contact").removeClass("underline")



// 		$(".navigation").animate({
// 		 	opacity: '0.5'
// 		},{
// 			queue: false	
// 		});
// 		$("#navigation-installations, #navigation-about, #navigation-drawings, #navigation-contact").animate({
// 		 	opacity: '1'
// 		}, {
// 			queue: false	
// 		});

// 		$(".content").hide();
		
// 		$("#objects").show();
// 	});

// /* DRAWINGS CLICK */

// 	$("#navigation-drawings").click(function () {
		
// 		$("#navigation-about, #navigation-installations, #navigation-objects, #navigation-contact").css(
// 				"background-color", '#fff'
// 		);

// 		$("#navigation-drawings").addClass("underline")
// 		$("#navigation-about, #navigation-installations, #navigation-objects, #navigation-contact").removeClass("underline")


// 		$(".navigation").animate({
// 		 	opacity: '0.5'
// 		},{
// 			queue: false	
// 		});
// 		$("#navigation-installations, #navigation-about, #navigation-objects, #navigation-contact").animate({
// 		 	opacity: '1'
// 		}, {
// 			queue: false	
// 		});

// 		$(".content").hide();
		
// 		$("#drawings").show();
// 	});

// /* CONTACT CLICK */

// 	$("#navigation-contact").click(function () {
		
// 		$("#navigation-about, #navigation-installations, #navigation-objects, #navigation-drawings").css(
// 				"background-color", '#fff'
// 		);

// 		$("#navigation-contact").addClass("underline")
// 		$("#navigation-about, #navigation-installations, #navigation-objects, #navigation-drawings").removeClass("underline")


// 		$(".navigation").animate({
// 		 	opacity: '0.5'
// 		},{
// 			queue: false	
// 		});
// 		$("#navigation-installations, #navigation-about, #navigation-objects, #navigation-drawings").animate({
// 		 	opacity: '1'
// 		}, {
// 			queue: false	
// 		});

// 		$(".content").hide();
		
// 		$("#contact").show();
// 	});
	
// 	$(".installations-content").hide();

// /* INSIDE INSTALLATIONS */
	
	// $("#signal-click").click(function () {

	// 	$("#signal-click").animate({
	// 	 	opacity: '0.5'
	// 	},{
	// 		queue: false	
	// 	});
	// 	$("#city-click").animate({
	// 	 	opacity: '1'
	// 	}, {
	// 		queue: false	
	// 	});

	// 	$("#signal-click").addClass("underline")
	// 	$("#city-click").removeClass("underline")
	
	// 	$("#unsignal-images").fadeIn();	
	// 	$(".installations-content").hide();
	// 	$("#unsignal-one, #02unsignal, #03unsignal, #04unsignal").fadeIn();
	// 	$(".slidesjs-pagination").hide();

	// });
	
	
	// $("#city-click").click(function () {

	
	// 	$("#city-click").addClass("underline")
	// 	$("#signal-click").removeClass("underline")

	// 	$(".installations-content").hide();
	// 	$("#city").fadeIn();
	// });

	




$(document).ready(function(){

		var hideMe = ["sync_websites","sync_illustration"];
		var showMe = ["sync_home"];
		$.each(hideMe, function(i,value) {$("body").find(".content div."+value).hide();});
		$.each(showMe, function(i,value) {$("body").find(".content div."+value).show();});
		
		$("#illustration li img").fadeTo(0, 0.5);
		var socialMe = ["facebook", "twitter", "stumbleupon", "linkedin"];
		$.each(socialMe, function(i,value) {$("body").find(".nav_social a#"+value).fadeTo(0,0.5);});
	});	
	 
$(".navigation a").click(function(event){
	event.preventDefault();

	var myID = $(this).parent().parent().attr("title");
	if ($("body").find(".nav_"+myID+" h5").hasClass("active")==false) {
		$.each("li h5.active",function(i) {$("body").find("li h5.active").removeClass("active");});
		$.each("li.nav_"+myID+" h5", function(i) {$("body").find("li.nav_"+myID+" h5").addClass("active");});
	};
	if ($("body").find(".content div."+myID).is(':hidden') == true){
	$.each(".content div", function(i) {$("body").find(".content div.bodytext").hide();});}
	$("body").find(".content div."+myID).fadeIn();
	return false;
});

$(".footer a").click(function(event){
	event.preventDefault();

	var myID = $(this).parent().parent().attr("title");
	if ($("body").find(".nav_"+myID+" h5").hasClass("active")==false) {
		$.each("li h5.active",function(i) {$("body").find("li h5.active").removeClass("active");});
		$.each("li.nav_"+myID+" h5", function(i) {$("body").find("li.nav_"+myID+" h5").addClass("active");});
	};
	if ($("body").find(".content div."+myID).is(':hidden') == true){
	$.each(".content div", function(i) {$("body").find(".content div.bodytext").hide();});}
	$("body").find(".content div."+myID).fadeIn();
	return false;
});


	$(".nav_social li a").mouseover(function() {$(this).fadeTo(200,1);});
	$(".nav_social li a").mouseout(function() {$(this).fadeTo(100,0.5);});
	
	

	$("#illustration li img").mouseover(function() {$(this).animate({opacity:1},200);});
	$("#illustration li img").mouseout(function() {$(this).fadeTo(100,0.5);});
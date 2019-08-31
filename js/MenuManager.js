function showMenu(){
	if($(".menuManager").hasClass( "mobile" )){
		$(".menuManager").removeClass( "mobile" );
	}else{
		$(".menuManager").addClass( "mobile" );
	}
	//$("p").css("background-color", "yellow");
}
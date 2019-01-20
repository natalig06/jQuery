
$('#depart1').click(function(){
	jQuery.fx.off = false;


	$('#violet').show('slow');
	$('#violet').hide('slow');

});


$('#depart2').click(function(){
	jQuery.fx.off = false;

   $('#jaune').fadeOut('slow');

	
$('#depart2').hover(function(){
	
	$('#orange').fadeOut(900).delay(300).fadeIn(800);
	$('#orange').ready(function(){ 
    	setInterval('FaireClignoterImage()',2200); 

	
});
});
});


$('#depart3').click(function(){
	jQuery.fx.off = false;

	
});



$('#depart4').click(function(){
	jQuery.fx.off = false;

	
	
});



$('#depart5').click(function(){
	jQuery.fx.off = false;

	
	
});

$('#desactiver').click(function(){
	jQuery.fx.off = true;
	
});

$('.reload').click(function(){
	location.reload();
});
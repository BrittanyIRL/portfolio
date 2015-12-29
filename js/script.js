$(document).ready(function(){
//center on scroll 
$('.scrollspy').scrollSpy();
// mobile nav
 $(".button-collapse").sideNav();

//headline resizing dynamically 

$("#intro").fitText(0.9, { minFontSize: '16px', maxFontSize: '70px' });

$(".statementText").fitText(1.4, { minFontSize: '16px', maxFontSize: '55px'});

});

var aboutBottom = $('#aboutMe').offset().top + $('#aboutMe').height();
var portfolioBottom = aboutBottom + $('#portfolio').height();
$(window).on('scroll',function(){
   $('li').attr('class','');
    var stop = Math.round($(window).scrollTop());
    if (stop > portfolioBottom) {
        $('#cont').attr('class','active');
    } 
    else if(stop > aboutBottom) {
       $('#port').attr('class','active');
    }
    else{
       $('#top').attr('class','active'); 
    }
});
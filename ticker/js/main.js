function ticker(){
    $('#news li:first').fadeOut( function(){
    //$('#news li:first').slideUp( function(){
        //$(this).appendTo($('#news')).slideDown();
        $(this).appendTo($('#news')).fadeIn();
    });
}
setInterval(function(){ticker()}, 3000);

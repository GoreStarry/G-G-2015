$(document).ready(function(){
    if(innerHeight<innerWidth){
        $(".arti,header").css("height",window.innerHeight); 
    }
    else{
        $("header,#bko").css("height",window.innerHeight); 
    }
    $("ss").hover(
        function(){
            $("#at").css("display","block");
    },function(){
        $("#at").css("display","none");
    });
    
    $("#topage1").click(function(){
        if(innerHeight<innerWidth){
            $("#hid").css("display","block");
            $("#rope1").fadeOut();
            $("#rope2").fadeIn().css("bottom","100%");
            $('html, body').stop().delay( 3000 ).animate({
                            scrollTop: $('#pg0').offset().top
                        }, 1000,'easeInOutExpo');
                        event.preventDefault();
        }
        else{
            $('html, body').stop().animate({
                        scrollTop: $('#pg0').offset().top
                    }, 1000,'easeInOutExpo');
                    event.preventDefault();
        }
    })

    
    $("#toup").click(function(){
        if(innerHeight<innerWidth){
            $('html, body').stop().animate({
                        scrollTop: $('#pgh').offset().top
                    }, 1000,'easeInOutExpo');
                    event.preventDefault();
            $("#afhi").delay( 1500 ).fadeIn(3000);
            $(".dtori").fadeIn().delay( 10000 ).css("bottom","8%");
            $(".fbl").delay( 8000 ).fadeIn(3000);
            $("#foreword").fadeOut();
            $(".detim").hover(
            function(){
                $("#detimg3").fadeTo(500,0);},
            function(){
                $("#detimg3").fadeTo(500,1);
        })
            }
        else{
            $(".artiff").css("display","block");
            $('html, body').stop().animate({
                        scrollTop: $('#pg60').offset().top
                    }, 1000,'easeInOutExpo');
        
        }
    })
    
    
    
    $(function() {
                $('.topage2 a,.topage5 a').bind('click',function(event){
                    var $anchor = $(this);
                    
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1000,'easeInOutExpo');
                    event.preventDefault();
                });

                $('.topage3 a').bind('click',function(event){
                    var $anchor = $(this);
                    
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 5000,'easeInQuad');
                    event.preventDefault();
                });
     });
})


$(window).resize(function(){
    if(innerHeight<innerWidth){
        $(".arti,header").css("height",window.innerHeight); 
    }
})
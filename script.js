// $(document).ready(function(){
//     $("div").click(function(){
//     $(this).hide();
//     });
// });

$(document).ready(function(){
    $(".btn-show").click(function(){
    $(".text").show();
    });

    $(".btn-toggle").click(function(){
        $(".menu-content").toggle();
        });

    $(".form-input").click(function(){
        $(".alert").show();
        });   
    $(".form-blur").click(function(){
        $(".alert-blur").show();
        });    
        
    $('#tabs li a:not(:first)').addClass('inactive');
    $('.tab-content').hide();
    $('.tab.content:first').show();

    $('.tabs li a').click(function(){
        var n = $(this).attr('id');    
        if($(this).hasClass('inactive')){
            $('#tabs li a').addClass('inactive');
            $(this).removeClass('inactive');

            $('.tab-content').hide();
            $('#' + n +'content').fadeIn('slow');
            
        }
    })

    $('.clickToSmall').click(function(){
        $('.box').animate({
            marginlet:"300px",
            height:"100px",

        })

    })

    $('.clickToBig').click(function(){
        $('.box').animate({
            marginlet:"0px",
            height:"560px",

        },3000)

    })

    $('.fadeto').click(function(){
        $('.boxfade').fadeOut(1000)
    })

    $('.slideToggle').click(function(){
        $('.boxToggle').slideToggle(1000)
    })


});
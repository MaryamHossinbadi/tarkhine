$(document).ready(function ()
{
    $(".collapse-heading").click(function (){
        $(".collapse-control") .removeClass('open');
        if ($(this).next(".collapse-body").css("display")=="block"){

            $(".collapse-body").slideUp("open");

        }else {
            $(this).next(".collapse-body").slideDown();
            $(this).children(".collapse-control").addClass("open");

        }
    });
});
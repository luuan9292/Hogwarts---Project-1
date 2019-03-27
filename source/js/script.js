$(document).ready(function() {

$('.hogwarts-btn').click(function() {
        $('.hogwarts-info').slideToggle();
});

//Smooth scroll
$('a').click(function(event){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 700);
        event.preventDefault();
    });

$('.gryffindor-btn').click(function() {
    if($(".gryffindor-info").css("display") === "none"){
        $(".gryffindor-house").css("display", "none");
        $(".gryffindor-info").css("display", "block");
    } else {
    $(".gryffindor-house").removeAttr("style");
    $(".gryffindor-info").css("display", "none");
    }
});

$('.slytherin-btn').click(function() {
    if($(".slytherin-info").css("display") === "none"){
        $(".slytherin-house").css("display", "none");
        $(".slytherin-info").css("display", "block");
    } else {
    $(".slytherin-house").removeAttr("style");
    $(".slytherin-info").css("display", "none");
    }
});

 $('.hufflepuff-btn').click(function() {
    if($(".hufflepuff-info").css("display") === "none"){
        $(".hufflepuff-house").css("display", "none");
        $(".hufflepuff-info").css("display", "block");
    } else {
    $(".hufflepuff-house").removeAttr("style");
    $(".hufflepuff-info").css("display", "none");
    }
});

$('.ravenclaw-btn').click(function() {
    if($(".ravenclaw-info").css("display") === "none"){
        $(".ravenclaw-house").css("display", "none");
        $(".ravenclaw-info").css("display", "block");
    } else {
    $(".ravenclaw-house").removeAttr("style");
    $(".ravenclaw-info").css("display", "none");
    }
});

})
/*$(document).ready(function(){
    video = document.getElementById("video1");
    video.addEventListener("canplaythrough",startFirstVideo);
    });*/
$(document).ready(function(){
    var video = document.getElementById("video1");
    var but = document.getElementById("play-button");
    but.addEventListener("click", function(e){
        $("#play-button").remove();
        video.play();
    }, false);
});

function startFirstVideo(){
    video.removeEventListener("canplaythrough",startFirstVideo);
    video.addEventListener("click",provaVideo);
}

function provaVideo(){
    video.removeEventListener("click",provaVideo);
    video.play();
}




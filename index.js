/*$(document).ready(function(){
    video = document.getElementById("video1");
    
    });*/
var video;
$(document).ready(function(){
    video = document.getElementById("video1");
    video.addEventListener("canplaythrough",startFirstVideo);
});

function startFirstVideo(){
    //video.removeEventListener("canplaythrough",startFirstVideo);
    video.play();
}

function provaVideo(){
    video.removeEventListener("click",provaVideo);
    video.play();
}




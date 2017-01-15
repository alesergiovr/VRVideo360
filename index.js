$(document).ready(function(){
    video = document.getElementById("video1");
    video.addEventListener("canplaythrough",startFirstVideo);
    });

function startFirstVideo(){
    video.removeEventListener("canplaythrough",startFirstVideo);
    $("#cursor").attr("fuse","true");
    video.addEventListener("click",provaVideo);
}

function provaVideo(){
    video.removeEventListener("click",provaVideo);
    video.play();
}

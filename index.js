/*$(document).ready(function(){
    video = document.getElementById("video1");
    video.addEventListener("canplaythrough",startFirstVideo);
    });

function startFirstVideo(){
    video.removeEventListener("canplaythrough",startFirstVideo);
    video.addEventListener("click",provaVideo);
}

function provaVideo(){
    video.removeEventListener("click",provaVideo);
    video.play();
}

var vid = document.getElementById('video1');
document.getElementById('play-button').addEventListener("click", function(e){
  this.style.display = 'none';
  vid.play();
}, false);*/

$(document).ready(function(){
    var vid = document.getElementById('vid');
    var but = document.getElementById("play-button");
    but.addEventListener("click", function(e){
        $("#play-button").remove();
        vid.play();
    }, false);
});



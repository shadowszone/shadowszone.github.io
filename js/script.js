
document.addEventListener("DOMContentLoaded", function() {
    function handleVideoHover(videoElement) {
        videoElement.addEventListener('mouseover', function() {
            videoElement.play();
        });

        videoElement.addEventListener('mouseout', function() {
            videoElement.pause();
            videoElement.currentTime = 0; // Resets the video to the beginning
        });
    }

    var video1 = document.getElementById('hover-video');
    var video2 = document.getElementById('hover-video2');
    var video3 = document.getElementById('hover-video3');
    var video4 = document.getElementById('hover-video4');
    var video5 = document.getElementById('hover-video5');
    var video6 = document.getElementById('hover-video6');
    var video7 = document.getElementById('hover-video7');
    var video8 = document.getElementById('hover-video8');
    var video9 = document.getElementById('hover-video9');
    var video10 = document.getElementById('hover-video10');

    handleVideoHover(video1);
    handleVideoHover(video2);
    handleVideoHover(video3);
    handleVideoHover(video4);
    handleVideoHover(video5);
    handleVideoHover(video6);
    handleVideoHover(video7);
    handleVideoHover(video8);
    handleVideoHover(video9);
    handleVideoHover(video10);
});



function mode() {
    let body = document.body;
    let currentclr = window.getComputedStyle(body).backgroundColor;

    if (currentclr === "black" || currentclr === "rgb(0, 0, 0)") {
        body.style.backgroundColor = "aliceblue";
    } else {
        body.style.backgroundColor = "black";
    }

   
}



// JavaScript to control slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// typing animation 


var typed = new Typed(".typing", {
    strings:['','Software Engineer', 'Pentester', 'Robotics Engineer','Youtuber'],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

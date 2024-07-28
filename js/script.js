
                    
  
document.addEventListener("DOMContentLoaded", function() {
    function handleVideoIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.play();
            } else {
                entry.target.pause();
                entry.target.currentTime = 0; // Resets the video to the beginning
            }
        });
    }

    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    let observer = new IntersectionObserver(handleVideoIntersection, options);

    let videos = document.querySelectorAll('[id^="hover-video"]');
    videos.forEach(video => observer.observe(video));
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

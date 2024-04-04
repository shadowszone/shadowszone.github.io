// toggle style

const styleSwitcherToggle =  document.querySelector(".style-switcher-toggler");

styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
    
})

// hide style switcher on scroll 
window.addEventListener("scroll", () => {
    if( document.querySelector(".style-switcher").classList.contains("open"))
    { document.querySelector(".style-switcher").classList.remove("open");}
})

// theme colors

const alternateStyles = document.querySelectorAll(".alternate-style");


function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute('title'))
        {
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    })
}

// theme light and dark mode

const dayNight = document.querySelector(".day-night");

 dayNight.addEventListener("click", () => {
    dayNight.querySelector("video").classList.add("i1");
    dayNight.querySelector("video").classList.add("i1");
    document.body.classList.toggle("dark")
 })


window.addEventListener("load",() => {
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("video").classList.add("i")
    }
    else{
        dayNight.querySelector("video").classList.add("i")
    }
})
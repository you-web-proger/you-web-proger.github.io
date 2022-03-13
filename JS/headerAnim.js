const header = document.querySelector('#header');
const h1Top = document.querySelector('#h1Top');
const h1Bottom = document.querySelector('#h1Bottom');
const videoContain = document.querySelector('#video-contain');
const video =document.querySelector('#video');
document.addEventListener("DOMContentLoaded", function(event) {
    setTimeout(()=>{
        header.classList.remove('mt-min-10');
        h1Top.classList.remove('ml-min-150');
        h1Bottom.classList.remove('mr-min-100');
        h1Bottom.classList.add('ml-1vw');
        videoContain.style.margin = '0 auto';
        videoContain.style.width = '100%';
        video.classList.remove('video-radius');
    }, 500);
    setTimeout(()=>{
        document.body.style.overflow = "auto";
    }, 1500)
});




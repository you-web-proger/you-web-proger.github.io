let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();
let timeline2 = new TimelineMax();
let timeline3 = new TimelineMax();
let timeline4 = new TimelineMax();

timeline
    .to(".anim-text", 10, { marginTop: "-10vw" })
    .to(".main-text", 10, { marginLeft: "-33vw"},)
    .to(".anim-text", 10, { backgroundColor: "white" })
    .to(".team", 10, { display: "block" }, "-=10")
    .to(".team", 10, { marginTop: "-30vw" }, "-=10")
    .to(".last-section", 10, { marginTop: "-10vw" }, "-=10")

timeline2
    .to(".technologies", 10, { marginTop: "-10vw" })

timeline3
    .to("body", 10, { backgroundColor: "white" })
if(window.innerWidth >= "700"){
    timeline4
        .to(".order", 10, { fontSize: "10.417vw", width: "45vw" })
    }
    else {
        timeline4
        .to(".order", 10, { fontSize: "20vw", width: "100%" })
}


let scene = new ScrollMagic.Scene({
    triggerElement: "section",
    duration: "300%",
    triggerHook: 0,
})
    .setTween(timeline);

let scene2 = new ScrollMagic.Scene({
    triggerElement: ".more-clients",
    duration: "100%",
    triggerHook: 0,
})
    .setTween(timeline2)

let scene3 = new ScrollMagic.Scene({
    triggerElement: ".tech-heading",
    duration: "100%",
    triggerHook: 0,
})
    .setTween(timeline3)

let scene4 = new ScrollMagic.Scene({
    triggerElement: ".works-heading",
    duration: "100%",
    triggerHook: 0,
})
    .setTween(timeline4)



controller.addScene([
    scene,
    scene2,
    scene3,
    scene4
])

window.addEventListener('scroll', ()=>{
    const animSection = document.querySelector('.anim-text');
    let scroll = window.scrollY;
    if(scroll > 5){
        animSection.style.backgroundColor = "#23282A";
    } else{
        animSection.style.backgroundColor = "#116DFF";
    }
});

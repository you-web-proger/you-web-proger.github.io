let mask = document.querySelector('.mask');

(()=>{
    let BurgerClosed = document.querySelector(".burger-squares");
    BurgerClosed.addEventListener('click', ()=>{
        burgerOn();
    })
})()

function burgerOn(){
    let lineCenter =  document.querySelector('.line-burger-2');
    let lineUp =  document.querySelector('.line-burger-1');
    let lineBottom =  document.querySelector('.line-burger-3');
    lineCenter.classList.toggle("dnon")
    lineUp.classList.toggle("degree-1");
    lineBottom.classList.toggle("degree-2");
    let containBurger = document.querySelector('.burger-contain');
    containBurger.classList.toggle("burger-contain-2");
    let nav = document.querySelector('.menu');
    if ( nav.style.right === ""){
        nav.style.right = "20vw"
    } else if (nav.style.right === "20vw") {
        nav.style.right = "-40vw"
    }else{
        nav.style.right = "20vw"
    }
    mask.classList.toggle("dnon")

    document.body.classList.toggle('ovetf-hid')
}

mask.addEventListener('click', ()=>{
    burgerOn()
})
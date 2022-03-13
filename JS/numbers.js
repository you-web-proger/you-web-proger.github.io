window.addEventListener('scroll', ()=>{
    const lastSection = document.querySelector('.last-section');
    const numbers = document.querySelector('.numbers');
    const numbers2 = document.querySelector('.number-rating');
    let windowBottom = window.innerHeight + window.scrollY;
    let scrollOffset = lastSection.offsetTop + ( lastSection.offsetHeight / 2);
    if ( windowBottom >= scrollOffset){
        setTimeout(()=>{
            numbers.classList.add('animated');
            numbers2.classList.add('animated2')
        }, 200)
    }
});
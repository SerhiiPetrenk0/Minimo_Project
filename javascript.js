;(function(){
    let carusel = document.querySelector(".slider-carusel")
    let itemsCarusel = document.querySelectorAll(".slider-carusel img")
    
    //Counter
    let size = itemsCarusel[0].clientWidth
    let counter = 1
    carusel.style.transform = `translateX(${+(-size * counter)}px)`

    setInterval(()=>{
        if ( document.hasFocus() ) {
            counter++
            carusel.style.transition = "transform 2.5s ease-in-out"
            carusel.style.transform = `translateX(${+(-size * counter)}px)`
          } else {
            counter = counter
          }


    }, 6000)

    carusel.addEventListener('transitionend', ()=>{
        if(itemsCarusel[counter].id === 'first-img'){
            carusel.style.transition = "none"
            counter = 1
            carusel.style.transform = `translateX(${+(-size * counter)}px)`
        }
    })

}());
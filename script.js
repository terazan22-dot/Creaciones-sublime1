document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

});

const slider = document.getElementById("slider");

function mover(idDelSlider, direccion) {
    const elSlider = document.getElementById(idDelSlider);
    // direccion será 300 para derecha y -300 para izquierda
    elSlider.scrollLeft += direccion;
}

/* AUTOPLAY */

setInterval(() => {
  slider.scrollLeft += 300;

  if (
    slider.scrollLeft + slider.clientWidth >=
    slider.scrollWidth
  ) {
    slider.scrollLeft = 0;
  }
}, 3000);

const imagenes = document.querySelectorAll(".banner-img");

let index = 0;

setInterval(() => {

   imagenes[index].classList.remove("active");

   index++;

   if(index >= imagenes.length){
      index = 0;
   }

   imagenes[index].classList.add("active");

}, 4000);
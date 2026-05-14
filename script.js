document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger") || document.getElementById("hamburguesa");
    const menu = document.querySelector(".nav-links") || document.getElementById("nav-links1");

    if (hamburger && menu) {
        hamburger.addEventListener("click", () => {
            console.log("¡Click detectado!");
            menu.classList.toggle("active");
        });
    } else {
        console.log("Error: No se encontró el botón o el menú en el HTML");
    }
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


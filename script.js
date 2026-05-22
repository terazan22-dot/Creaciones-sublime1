document.addEventListener("DOMContentLoaded", () => {
    
    const hamburger = document.querySelector(".hamburger") || document.getElementById("hamburguesa");
    const menu = document.querySelector(".nav-links") || document.getElementById("nav-links1");

    if (hamburger && menu) {
        hamburger.addEventListener("click", () => {
            console.log("¡Click detectado!");
            menu.classList.toggle("active");
        });
    } else {
        console.log("Menú o hamburguesa no encontrados en esta página.");
    }

    const elSlider = document.getElementById("slider");

    if (elSlider) {
        setInterval(() => {
            mover("slider", 300);
        }, 3000); // Se mueve cada 3 segundos
    } else {
        console.log("Esta página no contiene slider automático.");
    }

});

function mover(idDelSlider, direccion) {
    const elSlider = document.getElementById(idDelSlider);
    if (elSlider) {
        elSlider.scrollLeft += direccion;
    }
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

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('miInput');
    const boton = document.getElementById('miBoton');

    function buscarAhora() {
        const busqueda = input.value.toLowerCase().trim();
        
        if (busqueda !== "") {
            alert("Buscando en Creaciones Sublime: " + busqueda);
        } else {
            alert("Escribe algo para buscar tus accesorios favoritos.");
        }
    }

    boton.addEventListener('click', buscarAhora);

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            buscarAhora();
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('miInput');
    const boton = document.getElementById('miBoton');


    const realizarBusqueda = () => {
        const termino = input.value.toLowerCase().trim();
        const productos = document.querySelectorAll('.producto');

        productos.forEach(producto => {

            const nombre = producto.getAttribute('data-nombre').toLowerCase();

            if (nombre.includes(termino)) {
                producto.style.display = "block";
            } else {
                producto.style.display = "none";
            }
        });
    };

    if (boton) {
        boton.addEventListener('click', realizarBusqueda);
    }

    if (input) {
        input.addEventListener('keyup', realizarBusqueda);
    }
});

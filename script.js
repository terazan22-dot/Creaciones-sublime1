document.addEventListener("DOMContentLoaded", () => {
    
    const hamburger = document.querySelector(".hamburger") || document.getElementById("hamburguesa");
    const menu = document.querySelector(".nav-links") || document.getElementById("nav-links1");

    if (hamburger && menu) {
        hamburger.addEventListener("click", () => {
            menu.classList.toggle("active");
        });
    }

    const elSlider = document.getElementById("slider");
    if (elSlider) {
        setInterval(() => {
            mover("slider", 300);
        }, 3000);
    }

    const input = document.getElementById('miInput');
    const boton = document.getElementById('miBoton');

    const realizarBusqueda = () => {
        const termino = input.value.toLowerCase().trim();
        const productos = document.querySelectorAll('.producto');

        productos.forEach(producto => {
            const nombreAtributo = producto.getAttribute('data-nombre') ? producto.getAttribute('data-nombre').toLowerCase() : "";
            const nombreTexto = producto.querySelector('h3') ? producto.querySelector('h3').innerText.toLowerCase() : "";

            // Si el producto coincide con lo que escribes, se queda. Si no, se oculta.
            if (nombreAtributo.includes(termino) || nombreTexto.includes(termino)) {
                producto.style.display = "block";
            } else {
                producto.style.display = "none";
            }
        });
    };

    if (boton) {
        boton.addEventListener('click', (e) => {
            e.preventDefault(); 
            realizarBusqueda();
        });
    }

    if (input) {
        input.addEventListener('keyup', realizarBusqueda);
    }

});

function mover(idDelSlider, direccion) {
    const elSlider = document.getElementById(idDelSlider);
    if (elSlider) {
        elSlider.scrollLeft += direccion;
    }
}

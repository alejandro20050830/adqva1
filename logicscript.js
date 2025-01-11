// URL de la API
const apiUrl = 'https://uniswap-k2xr.onrender.com/api';



// Función para hacer la solicitud a la API
async function verificarEstado() {
    const boton=document.getElementById("banner-button")
    try {
        const respuesta = await fetch(apiUrl);
        const datos = await respuesta.json();

        // Verificar si el campo "on" es true
        if (datos.alias =="banner") {
            // Crear el botón gigante con el enlace proporcionado
           boton.style.display="flex";

        }
    } catch (error) {
        console.error('Error al acceder a la API:', error);
    }
}

// Llamar a la función para verificar el estado al cargar la página
window.onload = verificarEstado;



function obtenerEnlacesAdqva() {

  const allElementsWithClassA = [];
  const allElements = document.querySelectorAll("*"); // Selecciona todos los elementos de la página

  for (const element of allElements) {
    if (element.shadowRoot) {
      // Verifica si el elemento tiene un shadowRoot
      const elementsInsideShadowRoot = element.shadowRoot.querySelectorAll(
        "._AdQVA_ad_unit_image"
      );
      allElementsWithClassA.push(...elementsInsideShadowRoot); // Agrega los elementos encontrados a la lista
    }
  }

  const enlaces = [];

  allElementsWithClassA.forEach((elemento) => {
    const nodoHijo = elemento.querySelector("a");

    if (nodoHijo) {
      enlaces.push(nodoHijo.getAttribute("href"));
    }
  });

  return enlaces;
}

// Obtener los enlaces y actualizar el botón
function actualizarEnlaceBoton() {
    

  
  const boton = document.getElementById("banner-button");
  const enlacesAdqva = obtenerEnlacesAdqva();
  if(boton.style.display!="flex"){
    return;
  }


  if (enlacesAdqva.length > 0) {

    const enlaceAleatorio =
      enlacesAdqva[Math.floor(Math.random() * enlacesAdqva.length)];
    boton.href = enlaceAleatorio;
    console.log("finded!");
  } 
}

// Ejecutar la función cada 20 segundos
const prob= Math.floor(Math.random() * 3) + 1;
if(prob == 1 || prob==2  || prob==3){
  setInterval(actualizarEnlaceBoton, 2000);

  actualizarEnlaceBoton();

}





    
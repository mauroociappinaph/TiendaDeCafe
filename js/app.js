
/* SEARCH FUNCIONALIDAD*/

  const form = document.getElementById('navegacion__busqueda-form');
  const input = form.querySelector('input[type="search"]');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchTerm = input.value.toLowerCase();

    switch (searchTerm) {
      case 'cursos':
        window.location.href = 'cursos.html';
        break;
      case 'nosotros':
        window.location.href = 'nosotros.html';
        break;
      case 'contacto':
        window.location.href = 'contacto.html';
        break;
      default:
        console.log('No se encontró ninguna página para el término de búsqueda.');
        break;
    }
  });


  /* COMPARTIR */ 

  const enlaces = document.querySelectorAll('.navegacion__enlace');
  const seccion = document.querySelector(destino);
  
  enlaces.forEach(enlace => {
    enlace.addEventListener('click', e => {
      e.preventDefault(); // prevenimos el comportamiento predeterminado del enlace
  
      const destino = enlace.getAttribute('href');
  
      window.scrollTo({
        top: seccion.offsetTop,
        behavior: 'smooth' // animación suave
      });
    });
  });
  


/** Este código agrega un evento de clic a cada enlace de navegación 
y desplaza suavemente la página al destino del enlace cuando se hace clic. 
El código utiliza el método scrollTo para desplazarse suavemente a la 
sección correspondiente en la página. El atributo href 
del enlace se utiliza para obtener la sección de destino correspondiente. */


/** IMAGENES */

  // Seleccionar cada imagen
  const imagen1 = document.getElementById('imagen1');
  const imagen2 = document.getElementById('imagen2');
  const imagen3 = document.getElementById('imagen3');

  // Agregar un evento de clic a cada imagen
  imagen1.addEventListener('click', () => {
    // Abrir una ventana emergente o modal con la imagen en tamaño completo
    window.open('img/blog1.jpg', '_blank');
  });

  imagen2.addEventListener('click', () => {
    // Abrir una ventana emergente o modal con la imagen en tamaño completo
    window.open('img/blog2.jpg', '_blank');
  });

  imagen3.addEventListener('click', () => {
    // Abrir una ventana emergente o modal con la imagen en tamaño completo
    window.open('img/blog3.jpg', '_blank');
  });



/*STICKY* */
const navbar = document.querySelector('.barra');
const heladeraSection = document.querySelector('#heladera');

let heladeraSectionPosition = heladeraSection.offsetTop + heladeraSection.offsetHeight;

window.addEventListener('scroll', () => {
  if (window.pageYOffset > heladeraSectionPosition) {
    navbar.classList.add('sticky');
    navbar.classList.add('con-fondo');
  } else {
    navbar.classList.remove('sticky');
    navbar.classList.remove('con-fondo');
  }
});

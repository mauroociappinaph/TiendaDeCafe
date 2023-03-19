
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

enlaces.forEach(enlace => {
  enlace.addEventListener('click', e => {
    e.preventDefault(); // prevenimos el comportamiento predeterminado del enlace

    const destino = enlace.getAttribute('href');
    const seccion = document.querySelector(destino);

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
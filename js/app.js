
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


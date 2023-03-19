<?php
// Verificar si se ha enviado el formulario
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    // Obtener los datos del formulario
    $nombre = trim($_POST['nombre']);
    $email = trim($_POST['email']);
    $mensaje = trim($_POST['mensaje']);

    // Validar los datos
    if (empty($nombre) || empty($email) || empty($mensaje)) {
        // Si falta algún dato requerido, mostrar un error
        echo "Por favor, complete todos los campos.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Si el correo electrónico no es válido, mostrar un error
        echo "Por favor, ingrese un correo electrónico válido.";
    } else {
        // Si los datos son válidos, procesar el formulario
        // ... Aquí puede agregar su código para procesar el formulario ...
        echo "Gracias por enviar el formulario.";
    }
}
?>

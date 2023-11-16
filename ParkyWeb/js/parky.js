// Obtener todos los cuadros por su clase

var cuadros = document.querySelectorAll ('.cuadro');

var estados = [ 

  'disponible', 'ocupado', 'deshabilitado', 'deshabilitado', 'deshabilitado', 'deshabilitado', 'deshabilitado', 'deshabilitado' ];


// Iterar sobre los cuadros y asignarles colores y estado según su posición en el array 'estados'

for (var i = 0; i < cuadros.length; i++) {

  if (estados[i] === 'disponible') {
    cuadros[i].style.backgroundColor = 'green';

  } else if (estados[i] === 'ocupado') {
    cuadros[i].style.backgroundColor = 'red';

  } else if (estados[i] === 'deshabilitado') {
    cuadros[i].style.backgroundColor = 'Gray';
    cuadros[i].classList.add('deshabilitado'); 
    
    // Agregar la clase para el estado deshabilitado

  }
}

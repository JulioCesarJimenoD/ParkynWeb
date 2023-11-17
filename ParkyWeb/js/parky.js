fetch('http://www.parkyapi.somee.com/api/Parqueo/GetParqueos')
  .then(response => response.json())
  .then(data => {
    
    for (var i = 0; i < data.length; i++) {
      var nombre = data[i].nombre;
      var disponibilidad = data[i].disponibilidad;

      
      var cuadro = document.getElementById(nombre);

      if (cuadro) {
        // Asignar el color basado en la disponibilidad obtenida de la API
        cuadro.style.backgroundColor = disponibilidad ? 'green' : 'red';
      }
    }
  })
  .catch(error => console.error('Error:', error));
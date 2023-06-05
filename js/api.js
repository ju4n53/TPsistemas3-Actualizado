// fetch('http://localhost:53248/api/Cliente')
//   .then(response => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error('Error: ' + response.status);
//     }
//   })
//   .then(data => {
//     // Handle the retrieved data
//     console.log(data);
//   })
//   .catch(error => {
//     // Handle any errors that occurred during the request
//     console.log('Error:', error);
//   });

function getAll() {
    $.ajax({
      url: 'http://localhost:53248/api/Cliente',
      method: 'GET',
      success: function(response) {
        // Manejar la respuesta exitosa aquí
        console.log(response); // Ejemplo: mostrar la respuesta en la consola
      },
      error: function(error) {
        // Manejar el error aquí
        console.log(error); // Ejemplo: mostrar el error en la consola
      }
    });
  }
  
  getAll();

  function getId(id){
    $.ajax({
      url: 'http://localhost:53248/api/Cliente/'+id,
      method: 'GET',
      success: function(response) {
        // Actualizar la interfaz con los datos recibidos
        $('#rut').text(response.Rut);
        $('#calle').text(response.calle);
        $('#ciudad').text(response.ciudad);
        $('#comuna').text(response.comuna);
        $('#nombre').text(response.nombre);
        $('#numero').text(response.numero);
        $('#telefono').text(response.telefono);
        $('#telefono1').text(response.telefono1);
        $('#telefono2').text(response.telefono2);
      },
      error: function(error) {
        console.log(error);
      }
    });

    
  }
  getId(2);
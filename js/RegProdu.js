GetAll3()

function GetAll3() {
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://localhost:60032/api/Insumos",
        success: function (data) {
            //alert(data)

            const tbody3 = document.getElementById("tbody3");

            data.forEach(o => {
                let _tr = `<tr>
                <td>${o.IdInsumos}</td>
                <td>${o.Nombre}</td>
				<td>${o.Descripcion}</td>
                <td>${o.Cantidad}</td>
				<td>${o.Precio}</td>
            
            </tr>`

                tbody3.innerHTML += _tr;
            });
        },
        error: function (error) {

            console.log(error)
        }
    })

}

GetAll2()

function GetAll2() {
	$.ajax({
		type: "GET",
		dataType: "json",
		url: "http://localhost:53248/api/Bebida",
		success: function (data2) {
			//alert(data)

			const tbody2 = document.getElementById("tbody2");

			data2.forEach(o => {
				let _tr = `<tr>
                <td>${o.IdBebida}</td>
                <td>${o.Nombre}</td>
				<td>${o.Medida}</td>
                <td>${o.Descripcion}</td>
				<td>${o.Precio}</td>
            
            </tr>`

				tbody2.innerHTML += _tr;
			});
		},
		error: function (error) {

			console.log(error)
		}
	})

}

GetAll1()

function GetAll1() {
	$.ajax({
		type: "GET",
		dataType: "json",
		url: "http://localhost:53248/api/Comestibles",
		success: function (data) {
			//alert(data)

			const tbody1 = document.getElementById("tbody1");

			data.forEach(o => {
				let _tr = `<tr>
                <td>${o.IdComida}</td>
                <td>${o.Nombre}</td>
                <td>${o.Descripcion}</td>
				<td>${o.Precio}</td>
            
            </tr>`

				tbody1.innerHTML += _tr;
			});
		},
		error: function (error) {

			console.log(error)
		}
	})

}

function Buscar1() {
	const id = document.getElementById("txtId1")
	get(parseInt(id.value))
}

function get(id) {
	$.ajax({
		type: "GET",
		dataType: "json",
		url: "http://localhost:53248/api/Comestibles/" + id,
		success: function (data) {
			console.log(data)

			const Nombre = document.getElementById("txtNombre1")
			const Descripcion = document.getElementById("txtDescripcion1")
			const Precio = document.getElementById("txtPrecio1")

			Nombre.value = data.Nombre;
			Descripcion.value = data.Descripcion;
			Precio.value = data.Precio;
		}
	})
}

function Registrar1() {

	const Nombre = document.getElementById("txtNombre1");
	const Descripcion = document.getElementById("txtDescripcion1");
	const Precio = document.getElementById("txtPrecio1");

	obj = {
		"Nombre": Nombre.value,
		"Descripcion": Descripcion.value,
		"Precio": Precio.value,
	}
	//  console.log(obj)

	post(obj)

}

function post(obj) {

	$.ajax({
		type: "POST",
		dataType: "json",
		data: obj,
		url: "http://localhost:53248/api/Comestibles",
		success: function (data) {
			alert("Carga exitosa!!")
		}
	})
}

function Modificar1() {
	const id = document.getElementById("txtId1");

	const Nombre = document.getElementById("txtNombre1");
	const Descripcion = document.getElementById("txtDescripcion1");
	const Precio = document.getElementById("txtPrecio1");

	obj = {
		"Nombre": Nombre.value,
		"Descripcion": Descripcion.value,
		"Precio": Precio.value
	}

	put(parseInt(id.value), obj)
}

function put(id, obj) {
	$.ajax({
		type: "PUT",
		dataType: "json",
		data: obj,
		url: "http://localhost:53248/api/Comestibles/" + id,
		success: function (data) {
			alert("Cambio Exitoso!!!");
		}


	})

}


function Eliminar1() {

	const id = document.getElementById("txtId1");

	del(parseInt(id.value))

}

function del(id) {
	$.ajax({
		type: "Delete",
		dataType: "json",
		url: "http://localhost:53248/api/Comestibles/" + id,
		success: function (data) {
			alert("Proceso Exitos...!!!")

			const id = document.getElementById("txtId1");

			const Nombre = document.getElementById("txtNombre1");
			const Descripcion = document.getElementById("txtDescripcion1");
			const Precio = document.getElementById("txtPrecio1");

			id.value = "";
			Nombre.value = "";
			Descripcion.value = "";
			Precio.value = "";

		}
	})
}


/* document.getElementById("busqueda1").addEventListener("input", function () {
	var input = this.value.toLowerCase();
	var tabla = document.getElementById("tabla1");
	var filas = tabla.getElementsByTagName("tr");

	for (var i = 1; i < filas.length; i++) {
		var fila = filas[i];
		var celdas = fila.getElementsByTagName("td");
		var encontrado = false;

		for (var j = 0; j < celdas.length; j++) {
			var celda = celdas[j];
			if (celda.innerHTML.toLowerCase().indexOf(input) > -1) {
				encontrado = true;
				break;
			}
		}

		if (encontrado) {
			fila.style.display = "";
		} else {
			fila.style.display = "none";
		}
	}
}); */


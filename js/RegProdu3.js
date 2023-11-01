
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

GetAll2()

function GetAll2() {
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://localhost:53248/api/Bebida",
        success: function (data) {
            //alert(data)

            const tbody2 = document.getElementById("tbody2");

            data.forEach(o => {
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


function Buscar3() {
    const id = document.getElementById("txtId3")
    get(parseInt(id.value))
}

function get(id) {
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://localhost:53248/api/Insumos/" + id,
        success: function (data) {
            console.log(data)

            const Nombre3 = document.getElementById("txtNombre3")
            const Descripcion3 = document.getElementById("txtDescripcion3")
            const Cantidad3 = document.getElementById("txtCantidad3")
            const Valor3 = document.getElementById("txtValor3")

            Nombre3.value = data.Nombre;
            Descripcion3.value = data.Descripcion;
            Cantidad3.value = data.Cantidad;
            Valor3.value = data.Precio;
        }
    })
}

function Registrar3() {

    const Nombre3 = document.getElementById("txtNombre3")
    const Descripcion3 = document.getElementById("txtDescripcion3")
    const Cantidad3 = document.getElementById("txtCantidad3")
    const Valor3 = document.getElementById("txtValor3")

    obj = {
        "Nombre": Nombre3.value,
        "Descripcion": Descripcion3.value,
        "Cantidad": Cantidad3.value,
        "Precio": Valor3.value,
    }
    //  console.log(obj)

    post(obj)

}

function post(obj) {

    $.ajax({
        type: "POST",
        dataType: "json",
        data: obj,
        url: "http://localhost:53248/api/Insumos",
        success: function (data) {
            alert("Carga exitosa!!")
        }
    })
}

function Modificar3() {
    const id = document.getElementById("txtId3");

    const Nombre3 = document.getElementById("txtNombre3")
    const Descripcion3 = document.getElementById("txtDescripcion3")
    const Cantidad3 = document.getElementById("txtCantidad3")
    const Valor3 = document.getElementById("txtValor3")

    obj = {
        "Nombre": Nombre3.value,
        "Descripcion": Descripcion3.value,
        "Cantidad": Cantidad3.value,
        "Precio": Valor3.value,
    }

    put(parseInt(id.value), obj)
}

function put(id, obj) {
    $.ajax({
        type: "PUT",
        dataType: "json",
        data: obj,
        url: "http://localhost:53248/api/Insumos/" + id,
        success: function (data) {
            alert("Cambio Exitoso!!!");
        }


    })

}


function Eliminar3() {

    const id = document.getElementById("txtId3");

    del(parseInt(id.value))

}

function del(id) {
    $.ajax({
        type: "Delete",
        dataType: "json",
        url: "http://localhost:53248/api/Insumos/" + id,
        success: function (data) {
            alert("Proceso Exitos...!!!")

            const id = document.getElementById("txtId3");

            const Nombre3 = document.getElementById("txtNombre3")
            const Descripcion3 = document.getElementById("txtDescripcion3")
            const Cantidad3 = document.getElementById("txtCantidad3")
            const Valor3 = document.getElementById("txtValor3")

            id.value = "";
            Nombre3.value = "";
            Descripcion3.value = "";
            Cantidad3.value = "";
            Valor3.value = "";      
            
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


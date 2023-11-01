


GetAll()

function GetAll() {
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://localhost:60032/api/Empleados",
        success: function (data) {
            //alert(data)

            const tbody1 = document.getElementById("tbody1");

            data.forEach(o => {
                let _tr = `<tr>
                <td>${o.IdEmpleado}</td>
                <td>${o.Cuil}</td>
				<td>${o.Apellido}</td>
                <td>${o.Nombre}</td>
				<td>${o.Calle}</td>
                <td>${o.Numero}</td>
                <td>${o.Dpto}</td>
                <td>${o.Piso}</td>
                <td>${o.Barrio}</td>
                <td>${o.IdLocalidad}</td>
                <td>${o.FechaIngreso}</td>
                <td>${o.IdPuesto}</td>
            
            </tr>`

                tbody1.innerHTML += _tr;
            });
        },
        error: function (error) {

            console.log(error)
        }
    })

}

function Buscar() {
    const id = document.getElementById("txtId")
    get(parseInt(id.value))
}

function get(id) {
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://localhost:60032/api/Empleados/" + id,
        success: function (data) {
            console.log(data)

            const Cuil = document.getElementById("Cuil")
            const Apellido = document.getElementById("Apellido")
            const Nombre = document.getElementById("Nombre")
            const Calle = document.getElementById("idCalle")
            const NumCalle = document.getElementById("idNumCalle")
            const Dpto = document.getElementById("idDpto")
            const Piso = document.getElementById("Piso")
            const Barrio = document.getElementById("idBarrio")
            const IdLocalidad = document.getElementById("idLocalidad")
            const FechaIngreso = document.getElementById("idFechIngre")
            const IdPuesto = document.getElementById("IdPuesto")
            

            Cuil.value = data.Cuil;
            Apellido.value = data.Apellido;
            Nombre.value = data.Nombre;
            Calle.value = data.Calle;
            NumCalle.value = data.Numero;
            Dpto.value = data.Dpto;
            Piso.value = data.Piso;
            Barrio.value = data.Barrio;
            IdLocalidad.value = data.IdLocalidad;
            FechaIngreso.value = data.FechaIngreso;
            IdPuesto.value = data.IdPuesto;
        
        }
    })
}


function Deshabilitar() {
    var BuscarId = document.getElementById("txtId").value;
    var table = document.getElementById("tbody1");
    var rows = table.getElementsByTagName("tr");

    for (var i = 0; i < rows.length; i++) {
        var nombre = rows[i].getElementsByTagName("td")[0].textContent;
        if (nombre.toLowerCase() === BuscarId.toLowerCase()) {
            var cells = rows[i].getElementsByTagName("td");
            var button = rows[i].querySelector("input[type=button]");
            for (var j = 0; j < cells.length - 1; j++) {
                if (cells[j].hasAttribute("disabled")) {
                    cells[j].removeAttribute("disabled");
                    cells[j].classList.remove("disabled");
                } else {
                    cells[j].setAttribute("disabled", true);
                    cells[j].classList.add("disabled");
                }
            }
            if (button.value === "Deshabilitar") {
                button.value = "Habilitar";
            } else {
                button.value = "Deshabilitar";
            }
            break; // Detenemos la búsqueda después de encontrar el primer empleado con ese nombre
        }
    }
}
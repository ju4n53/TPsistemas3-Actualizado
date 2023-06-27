


GetAll()

function GetAll() {
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://localhost:53248/api/Empleados",
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
        url: "http://localhost:53248/api/Empleados/" + id,
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
            const FechaIngreso = document.getElementById("idFechaIngreso")
            const IdPuesto = document.getElementById("IdPuesto")
            

            Cuil.value = data.Cuil;
            Apellido.value = data.Apellido;
            Nombre.value = data.Nombre;
            Calle.value = data.Calle;
            NumCalle.value = data.NumeroCalle;
            Dpto.value = data.Dpto;
            Piso.value = data.Piso;
            Barrio.value = data.Barrrio;
            IdLocalidad.value = data.IdLocalidad;
            FechaIngreso.value = data.FechaIngreso;
            IdPuesto.value = data.IdPuesto;
        
        }
    })
}
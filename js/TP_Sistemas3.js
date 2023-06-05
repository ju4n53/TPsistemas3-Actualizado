
let burguer1 = {
    nombre: "hamburguesa simple",
    precio: 250,
    cantidad: 100
};

let ListadoProd = [burguer1];

console.log(ListadoProd);

function mostrarStock() {
    var tabla = document.getElementById("tabla");
    if (tabla.style.display === "none") {
        tabla.style.display = "block";
    } else {
        tabla.style.display = "none";
    }

    const tbody2 = document.getElementById("tbody2");
    ListadoProd.forEach(o => {
        
        let tr = `<tr> 
        <td> ${o.nombre}</td>
        <td>${o.precio}</td>
        <td>${o.cantidad}</td>
         
        </tr>`;
        tbody2.innerHTML = tr;
    });
}



/* function Listado() {

    const p1 = document.getElementById("p1");
    p1.innerHTML = ` elegiste ${burguer1.nombre} `;

} */
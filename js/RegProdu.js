let contador = 100;
let codigo = [];
let producto = [];
let porcion=[];
let precio = [];
let i = 0;
function carga1() {
	//const _txtCodigo = document.getElementById("txtCodigo");
	const _txtProducto = document.getElementById("txtProducto");
	const _txtPorcion = document.getElementById("txtPorcion");
	const _txtPrecio = document.getElementById("txtPrecio");

	//codigo[i] = _txtCodigo.value;
	producto[i] = _txtProducto.value;
	porcion[i] = _txtPorcion.value;
	precio[i] = parseInt(_txtPrecio.value);
	i++;
	contador = contador + 1;

	const _td0 = document.createElement("td");
	_td0.innerHTML = contador;

	const _td1 = document.createElement("td");
	_td1.innerHTML = _txtProducto.value;

	const _td2 = document.createElement("td");
	_td2.innerHTML = _txtPorcion.value;

	const _td3 = document.createElement("td");
	_td3.innerHTML = _txtPrecio.value;

	const _tr = document.createElement("tr");
	_tr.appendChild(_td0);
	_tr.appendChild(_td1);
	_tr.appendChild(_td2);
	_tr.appendChild(_td3);

	const _tbody = document.querySelector("tbody");
	_tbody.appendChild(_tr);


	//_txtCodigo.value = "";
	_txtProducto.value = "";
	_txtPorcion.value = "";
	_txtPrecio.value = "";
	_txtProducto.focus();


}
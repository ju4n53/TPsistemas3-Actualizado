let codigo2 = [];
let bebida = [];
let volumen =[];
let precio2 = [];
let e = 0;
let contador2 = 300;
function carga2() {
	//const _txtCodigo2 = document.getElementById("txtCodigo2");
	const _txtBebida = document.getElementById("txtBebida");
	const _txtVolumen = document.getElementById("txtVolumen");
	const _txtPrecio2 = document.getElementById("txtPrecio2");

	//codigo2[e] = _txtCodigo2.value;
	bebida[e] = _txtBebida.value;
	volumen[e] = _txtVolumen.value;
	precio2[e] = parseInt(_txtPrecio2.value);
	e++;
	contador2 = contador2 + 1;

	const _td0 = document.createElement("td");
	_td0.innerHTML = contador2;

	const _td1 = document.createElement("td");
	_td1.innerHTML = _txtBebida.value;

	const _td2 = document.createElement("td");
	_td2.innerHTML = _txtVolumen.value;

	const _td3 = document.createElement("td");
	_td3.innerHTML = _txtPrecio2.value;

	const _tr = document.createElement("tr");
	_tr.appendChild(_td0);
	_tr.appendChild(_td1);
	_tr.appendChild(_td2);
	_tr.appendChild(_td3);

	const _tbody2 = document.getElementById("tbody2");
	_tbody2.appendChild(_tr);

	
	_txtBebida.value = "";
	_txtVolumen.value = "";
	_txtPrecio2.value = "";
	_txtBebida.focus();


}
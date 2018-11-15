// ADIVINA EL NÚMERITO
var grupoBotones = '';
var cont = 0;
var random = 0;
var vuelta = 0;
var oportunidad = 0;
function generarBotones() {

	if (vuelta == 0) {
		vuelta++;
		var i = 1, j = 100;
		for (; i <= j; i++) {
			cont++;
			grupoBotones += '<button id="' + cont + '"class="btn botoncito opacidad1" onclick="pulsar(this.id);">' + cont + '</button>';
		}
		document.getElementById('numerito').innerHTML = grupoBotones;
		document.getElementById('fondoBotones').classList.add('bg-dark', 'rounded', 'p-10', 'text-center');
	}

	random = Math.floor(Math.random() * 100) + 1;
}

function pulsar(seleccionado) {
	if (seleccionado == random) {
		document.getElementById(seleccionado).classList.add('acierto');
		alert("BIEN, LO HAS CONSEGUIDO EN " + oportunidad + " OPORTUNIDADES.");
	} else {
		oportunidad++;
		document.getElementById(oportunidad).innerHTML = oportunidad;
		document.getElementById(seleccionado).classList.add('fallo');
		if (seleccionado > random) {
			while (seleccionado != 1) {
				seleccionado++;
				document.getElementById(seleccionado).classList.add('fallo');
			}
		} else if (seleccionado < random) {
			while (seleccionado != 100) {
				seleccionado--;
				document.getElementById(seleccionado).classList.add('fallo');
			}
		}
	}
}

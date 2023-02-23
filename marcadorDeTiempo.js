// Introduccion a la programacion reactiva con RxJS
const { timer } = rxjs;
const { map } = rxjs.operators;

const resultado = document.getElementById("resultado");

timer(1000, 1000)
	.pipe(
		map(() => {
			const ahora = new Date();
			return ahora.toLocaleString();
		})
	)
	.subscribe((valor) => {
		resultado.innerText = valor;
	});


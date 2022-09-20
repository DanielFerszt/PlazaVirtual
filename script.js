dragElement(document.getElementById('plaza1'));
dragElement(document.getElementById('plaza2'));
dragElement(document.getElementById('plaza3'));
dragElement(document.getElementById('plaza4'));
dragElement(document.getElementById('plaza5'));
dragElement(document.getElementById('plaza6'));
dragElement(document.getElementById('plaza7'));
dragElement(document.getElementById('plaza8'));
dragElement(document.getElementById('plaza9'));
dragElement(document.getElementById('plaza10'));
dragElement(document.getElementById('plaza11'));
dragElement(document.getElementById('plaza12'));
dragElement(document.getElementById('plaza13'));
dragElement(document.getElementById('plaza14'));
dragElement(document.getElementById('plaza15'));
dragElement(document.getElementById('plaza16'));
dragElement(document.getElementById('plaza17'));
dragElement(document.getElementById('plaza18'));


function dragElement(elementoDePlaza) {
	//establecer 4 posiciones para posicionar en la pantalla
	let pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	elementoDePlaza.onpointerdown = arrastrarPuntero;


function arrastrarPuntero(e) {
	e.preventDefault();
	console.log(e);
	pos3 = e.clientX;
	pos4 = e.clientY;
	document.onpointermove = arrastrarElemento;
	document.onpointerup = detenerArrastreElemento;
}

function arrastrarElemento(e) {
	pos1 = pos3 - e.clientX;
	pos2 = pos4 - e.clientY;
	pos3 = e.clientX;
	pos4 = e.clientY;
	console.log(pos1, pos2, pos3, pos4);
	elementoDePlaza.style.top = elementoDePlaza.offsetTop - pos2 + 'px';
	elementoDePlaza.style.left = elementoDePlaza.offsetLeft - pos1 + 'px';
}

function detenerArrastreElemento() {
	document.onpointerup = null;
	document.onpointermove = null;
}
}
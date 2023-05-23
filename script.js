var botaoCriptografar = document.querySelector(".botaoCriptografar");
var botaoDescriptografar = document.querySelector(".botaoDescriptografar");
var desenho = document.querySelector(".desenho");
var mensagem = document.querySelector(".mensagem");
var chave = document.querySelector(".chave");

botaoCriptografar.onclick = criptografar;
botaoDescriptografar.onclick = descriptografar;

function criptografar() {
	ocultarEmSeguida();
	var inputText = recupTexto()
	chave.textContent = criptografarTexto(inputText)
}

function descriptografar() {
	ocultarEmSeguida();
	var inputText = recupTexto()
	chave.textContent = descriptografarTexto(inputText)
}

function recupTexto() {
	var inputText = document.querySelector(".inputText")
	return inputText.value
}
function ocultarEmSeguida() {
	desenho.classList.add("ocultar");
	mensagem.classList.add("ocultar");
}

function criptografarTexto(digitado){
	var texto = digitado;
	var textoFinal = "";

	for(var i = 0; i < texto.length; i++) {
		if(texto[i] == "a") {
			textoFinal = textoFinal + "ai"
		}
		else if(texto[i] == "e") {
			textoFinal = textoFinal + "enter"
		}
		else if(texto[i] == "i") {
			textoFinal = textoFinal + "imes"
		}
		else if(texto[i] == "o") {
			textoFinal = textoFinal + "ober"
		}
		else if(texto[i] == "u") {
			textoFinal = textoFinal + "ufat"
		}
		else{
			textoFinal = textoFinal + texto[i]
		}
	}
	return textoFinal;
}
function descriptografarTexto(digitado){
	var texto = digitado;
	var textoFinal = "";

	for(var i = 0; i < texto.length; i++) {
		if (texto[i] == "a") {
			textoFinal = textoFinal + "a"
			i = i + 1;
		}
		else if (texto[i] == "e") {
			textoFinal = textoFinal + "e"
			i = i + 4;
		}
		else if (texto[i] == "i") {
			textoFinal = textoFinal + "i"
			i = i + 3;
		}
		else if (texto[i] == "o") {
			textoFinal = textoFinal + "o"
			i = i + 3;
		}
		else if (texto[i] == "u") {
			textoFinal = textoFinal + "u"
			i = i + 3;
		}
		else {
			textoFinal = textoFinal + texto[i];

		}
	}	

	return textoFinal;
}

	const botaoDeCopiar = document.querySelector(".copiar");
	botaoDeCopiar.addEventListener("click", copiar = () => {
   	var conteudo = chave.textContent;
   	navigator.clipboard.writeText(conteudo);
})

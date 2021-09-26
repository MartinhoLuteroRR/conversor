function converterParaReal() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 5;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em Real é R$: " + valorEmReal.toFixed(2);
  elementoValorConvertido.innerHTML = valorConvertido;
}

function converterParaEuro() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmEuro = valorEmDolarNumerico * 0.85;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em Euro é €: " + valorEmEuro.toFixed(2);
  elementoValorConvertido.innerHTML = valorConvertido;
}

function converterParaBitcoin() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmBitcoin = valorEmDolarNumerico * 0.000021;

  var elementoValorConvertidoBitcoin = document.getElementById(
    "valorConvertidoBitcoin"
  );
  var valorConvertidoBitcoin = "O resultado em Bitcoin é ₿: " + valorEmBitcoin;
  elementoValorConvertidoBitcoin.innerHTML = valorConvertidoBitcoin;
}

function converterParaFarenheit() {
  var temperaturaElemento = document.getElementById("temperatura");
  var temperatura = temperaturaElemento.value;
  var temperaturaEmFarenheitNumerico = parseFloat(temperatura);

  var temperaturaEmFarenheit = temperaturaEmFarenheitNumerico * 1.8 + 32;

  var elementoTemperaturaConvertido = document.getElementById(
    "temperaturaConvertido"
  );
  var temperaturaConvertido =
    "O resultado em Farenheit é: " + temperaturaEmFarenheit.toFixed(2) + " °F";
  elementoTemperaturaConvertido.innerHTML = temperaturaConvertido;
}

function converterParaKelvin() {
  var temperaturaElemento = document.getElementById("temperatura");
  var temperatura = temperaturaElemento.value;
  var temperaturaEmKelvinNumerico = parseFloat(temperatura);

  var temperaturaEmKelvin = temperaturaEmKelvinNumerico + 273.15;

  var elementoTemperaturaConvertido = document.getElementById(
    "temperaturaConvertido"
  );

  if (temperaturaEmKelvin == 0) {
    var temperaturaConvertido = "O resultado é o Zero Absoluto!";
  } else {
    var temperaturaConvertido =
      "O resultado em Kelvin é: " + temperaturaEmKelvin.toFixed(2) + " °K";
  }
  elementoTemperaturaConvertido.innerHTML = temperaturaConvertido;
}

// Conversor de moedas: criar funções para cada tipo de conversão e chamá-las dependendo do que você quiser fazer, podendo colocar inputs ou botões e quando clicar chamar cada função converteDolar(), converteReal(), converteEuro() e converteBitcoin(), por exemplo
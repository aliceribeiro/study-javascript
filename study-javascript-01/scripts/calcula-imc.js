const titulo = document.querySelector("h1");
titulo.textContent = "Aparecida Nutricionista";

let pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
  let paciente = pacientes[i];

  let peso = paciente.querySelector(".info-peso").textContent; // O "textContent" vai pergar o conteúdo de texto que está dentro da classe especificada
  let altura = paciente.querySelector(".info-altura").textContent;
  let imc = paciente.querySelector(".info-imc");

  let pesoEhValido = validaPeso(peso);
  let alturaEhValida = validaAltura(altura);

  if (!pesoEhValido) {
    pesoEhValido = false;
    imc.textContent = "Peso inválido"; // Aqui, o "textContent" será passado com o valor da string
    paciente.classList.add("paciente-invalido");
  }

  if (!alturaEhValida) {
    alturaEhValida = false;
    imc.textContent = "Altura inválida!";
    paciente.classList.add("paciente-invalido");
  }
  
  if (pesoEhValido && alturaEhValida) {
    let obtendoImc = calculaImc(peso, altura);
    imc.textContent = obtendoImc;
  }
}

function calculaImc(peso, altura) {
  let imc = 0;
  imc = peso / (altura * altura);

  return imc.toFixed(2); // o 'toFixed(2)' é para fixar a quantidade de casas decimais em 2
}

function validaPeso(peso) {
  if (peso >= 0 && peso <= 500) {
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura) {
  if (altura >= 0 && altura <= 3.00) {
    return true;
  } else {
    return false;
  }
}
let pacientesList = document.querySelectorAll(".paciente");

let tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {
  event.target.parentNode.classList.add("fadeOut"); // Irá adicionar a classe "fadeOut" no elemento filho da tabela que foi clicado 2x

  setTimeout(function() {
    event.target.parentNode.remove();
  }, 500);
});

// O "dblclick" é o evento para double click
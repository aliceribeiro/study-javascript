let btnBuscar = document.querySelector("#buscar-pacientes");

btnBuscar.addEventListener("click", function() {
  let api = new XMLHttpRequest();

  api.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  api.addEventListener("load", function() {
    let erroAjax = document.querySelector("#erro-ajax");

    if (api.status == 200) {
      erroAjax.classList.add("invisivel");
      let resposta = api.responseText;
      let pacientes = JSON.parse(resposta);

      pacientes.forEach(function(paciente) {
        adicionaPacienteNaTabela(paciente);
      });
    } else {
      erroAjax.classList.remove("invisivel");
    }
  });

  api.send();
});
 // VALIDAÇOES NO AGENDAMENTOS
 function cadastrarAgendamento(req, res){

    var observacaoVar = observacao_agendamento.value
    var escolha_trancaVar = select_tranca.value
    var horarioVar = sessionStorage.HORARIO_AGENDAMENTO;
    var fkusuarioVar = sessionStorage.ID_USUARIO;

    if (escolha_trancaVar == 0 || horarioVar == 0) {
        frase.innerHTML = `Preencha todos os Campos`
    }
    else {
        alert("COMEÇANDO A AGENDAR");
        fetch("/usuarios/cadastrarAgendamento", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          // crie um atributo que recebe o valor recuperado aqui
          // Agora vá para o arquivo routes/usuario.js
          observacaoServer: observacaoVar,
          escolhaTrançaServer: escolha_trancaVar,
          horarioServer: horarioVar,
          fkusarioServer: fkusuarioVar

      })
  }).then(function (resposta) {

      console.log("resposta: ", resposta);

      if (resposta.ok) {
        alert( "Agendamento realizado!");
      } else {
        alert( "Não foi possível realizar o agendamento");
        throw "Houve um erro ao tentar realizar o agendamento!";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });
}
}

function carregarHorario(){
     sessionStorage.HORARIO_AGENDAMENTO = json.horario;
     sessionStorage.ID_AGENDAMENTO = json.idAgendamento;

 

  fetch(`/avisos/listarHorario/${sessionStorage.HORARIO_AGENDAMENTO}`)
  .then(function (resposta) {
    if (resposta.ok) {
      if (resposta.status == 204) {
        var select = document.getElementById("dia_hora_agendamento");
        var mensagem = document.createElement("span");
        mensagem.innerHTML = "-";
        mensagem.value = "0";
        select.appendChild(mensagem);
        throw "Nenhum horario Disponivel";
      }
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));

          var select = document.getElementById("dia_hora_agendamento");
          select.innerHTML = "";
          for (let i = 0; i < resposta.length; i++) {
            var horario = resposta[i];

            // criando elementos do HTML via JavaScript
            var optionHorario = document.createElement("option");

            // colocando valores do select no innerHTML
            optionHorario.innerHTML = horario.horario;
            optionHorario.value = horario.idagendamento;

            // adicionando todos à um elemento pai pré-existente
            select.appendChild(optionHorario);
          }

          finalizarAguardar();
        });
      } else {
        throw "Houve um erro na API!";
      }
    })
    .catch(function (resposta) {
      console.error(resposta);
      finalizarAguardar();
    });
}

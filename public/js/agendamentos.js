 // VALIDAÇOES NO AGENDAMENTOS
 function cadastrarAgendamento(req, res){

    var observacaoVar = observacao_agendamento.value
    var escolha_trancaVar = select_tranca.value
    var horarioVar = dia_hora_agendamento.value;
    var fkusuarioVar = sessionStorage.ID_USUARIO;
    var idAgendamento = 0;


    // DIA 09-06
    if (horarioVar == "2022-06-09 10:00") {
      idAgendamento = 1;
    }else if(horarioVar == "2022-06-09 13:00"){
      idAgendamento = 2;
    // DIA 10-06
    }else if(horarioVar == "2022-06-10 10:00"){
      idAgendamento = 3;
    }else if(horarioVar == "2022-06-10 13:00"){
      idAgendamento = 4;
    // DIA 11-06
    }else if(horarioVar == "2022-06-11 10:00"){
      idAgendamento = 5;
    }else if(horarioVar == "2022-06-11 13:00"){
      idAgendamento = 6;
    // DIA 12-06
    }else if(horarioVar == "2022-06-11 10:00"){
      idAgendamento = 7;
    }else {
      idAgendamento = 8;
    }

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
          idAgendamentoServer: idAgendamento,
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
  console.log("teste carregar horario")
  
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
            optionHorario.innerHTML = horario.horarios;
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


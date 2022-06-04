 // VALIDAÇOES NO AGENDAMENTOS
 function cadastrarAgendamento(req, res){

    var observacaoVar = observacao_agendamento.value
    var escolha_trancaVar = select_tranca.value
    var horarioVar = dia_hora_agendamento.value;
    var fkusuarioVar = sessionStorage.ID_USUARIO;
    var idAgendamento = 0;


    if (horarioVar == "2022-06-24 10:00") {
      idAgendamento = 1;
    }else if(horarioVar == "2022-06-24 12:00"){
      idAgendamento = 2;
    }else if(horarioVar == "2022-06-24 14:00"){
      idAgendamento = 3;
    }else if(horarioVar == "2022-06-25 10:00"){
      idAgendamento = 4;
    }else if(horarioVar == "2022-06-25 12:00"){
      idAgendamento = 5;
    }else{
      idAgendamento = 6;
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

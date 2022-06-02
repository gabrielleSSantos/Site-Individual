 // VALIDAÇOES NO AGENDAMENTOS
 function cadastrarAgendamento(req, res){
    var observacaoVar = observacao_agendamento.value
    var escolha_trancaVar = select_tranca.value
    var horarioVar = "2022-06-13 10:00:00"
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
        throw "Houve um erro ao tentar realizar o cadastro!";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });
}
}

 // VALIDAÇOES NO AGENDAMENTOS E CADASTRO 
 function cadastrarAgendamento(req, res){

    var idAgendamento = document.getElementById("dia_hora_agendamento").value
    var observacaoVar = observacao_agendamento.value
    var escolha_trancaVar = select_tranca.value
    var fkusuarioVar = sessionStorage.ID_USUARIO;

    if (escolha_trancaVar == 0 || idAgendamento == 0) {
        frase.innerHTML = `Preencha todos os Campos`
    }
    else {
        // alert("COMEÇANDO A AGENDAR");
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
          fkusarioServer: fkusuarioVar

      })
  }).then(function (resposta) {

      console.log("resposta: ", resposta);

      if (resposta.ok) {
      //  alert("agendou");
       frase_completou.style.display = "flex"
       frase_completou.innerHTML = `Agendamento Realizado com Sucesso
       <img src="../IMAGENS/certo.png"> </img>
       `
        setTimeout(() => {
          window.location = "perfil.html";
        }, "2000")
        
        // limparFormulario();

      } else {
        // alert("agendou não");
       frase_completou.style.display = "flex"
       frase_completou.innerHTML = `Houve um erro ao tentar realizar o agendamento!`
        throw "Houve um erro ao tentar realizar o agendamento!";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });
}
}

// codigo RElACIONADO AO SELECT DO AGENDAMENTO DE HORARIO
function carregarHorario(){
  console.log("teste carregar horario")
  console.log(document.getElementById("dia_hora_agendamento").value)
  var testeId = document.getElementById("dia_hora_agendamento").value
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
          console.log("Dados recebidos: ", JSON.stringify(resposta[testeId].idagendamento.value));

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
          
  
        
          // finalizarAguardar();
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

// CODIGO RELACIONADO AO ATUALIZAR OS AGENDAMENTOS NA PAGINA DE PERFIL
function atualizarAgendamentos() {
            
  //aguardar();
  fetch(`/avisos/listar/${sessionStorage.ID_USUARIO}`).then(function (resposta) {
      if (resposta.ok) {
          if (resposta.status == 204) {
              var feed = document.getElementById("feed_container");
              var mensagem = document.createElement("span");
              mensagem.innerHTML = "Nenhum agendamento encontrado."
              feed.appendChild(mensagem);
              throw "Nenhum resultado encontrado!!";
          }
          // var idUsuario = sessionStorage.ID_USUARIO;
          resposta.json().then(function (resposta) {
              console.log("Agendamentos recebidos: ", JSON.stringify(resposta));
              var feed = document.getElementById("feed_container");
              feed.innerHTML = "";
              for (let i = 0; i < resposta.length; i++) {
                  var agendamento = resposta[i];
                  console.log(agendamento)
                  
          
                  // criando e manipulando elementos do HTML via JavaScript
              var divagendamento = document.createElement("div");

              var spanID = document.createElement("span");
              var spanobservacao = document.createElement("span");
              var spanescolha_tranca = document.createElement("span");
              var spanhorario = document.createElement("span");
              var spannome = document.createElement("span");



              spanID.innerHTML = "Registro do Agendamento: <b>" + agendamento.idagendamento + "</b> <br>"; 
              spanobservacao.innerHTML = "Observação: <b>" + agendamento.observacao + "</b> <br>";
              spanescolha_tranca.innerHTML = "Escolha Trança: <b>" + agendamento.escolha_tranca+ "</b> <br>";
              spanhorario.innerHTML = "Horario: <b>" + agendamento.horarios+ "</b> <br>";
              spannome.innerHTML = "Nome do Usuario: <b>" + sessionStorage.NOME_USUARIO + "</b> <br> <br>";
           

              divagendamento.className = "agendamento";
              spanID.id = "inputNumero" + agendamento.idagendamento;
              spanobservacao.className = "agendamento-observacao";
              spanhorario.className = "agendamento-horario";
              spannome.className = "agendamento-nome";
         

              divagendamento.appendChild(spanID);
              divagendamento.appendChild(spanobservacao);
              divagendamento.appendChild(spanescolha_tranca);
              divagendamento.appendChild(spanhorario);
              divagendamento.appendChild(spannome);
          
              feed.appendChild(divagendamento);
          }

          // finalizarAguardar();
      });
  } else {
      throw ('Houve um erro na API!');
  }
}).catch(function (resposta) {
  console.error(resposta);
  finalizarAguardar();
});
}



// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var telefone = sessionStorage.TELEFONE_USUARIO;
    var genero = sessionStorage.GENERO_USUARIO;
    var h1LoginUsuario = document.getElementById("h1_login_usuario");
    
    if (email != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        if (h1LoginUsuario != undefined) {
            h1LoginUsuario.innerHTML = email;
        }
        b_usuario.innerHTML = nome;
        b_agendamento.innerHTML = nome;
        b_agendamento_telefone.innerHTML = telefone;
        b_perfil_genero.innerHTML = genero;
        b_perfil_email.innerHTML =  email;
        // finalizarAguardar();
    } else {
        window.location = "../login.html";
    }
}

// FUNÇÃO PARA OS HORARIOS

function carregarHorario() {
    //aguardar();
    fetch(`/avisos/listarHorario/${sessionStorage.horario}`)
      .then(function (resposta) {
        if (resposta.ok) {
          if (resposta.status == 204) {
            var select = document.getElementById("dia_hora_agendamento");
            var mensagem = document.createElement("span");
            mensagem.innerHTML = "-";
            mensagem.value = "0";
            select.appendChild(mensagem);
            throw "Nenhuma Horario Disponivel";
          }
  
          resposta.json().then(function (resposta) {
            console.log("Horarios Disponiveis: ", JSON.stringify(resposta));
  
            var select = document.getElementById("dia_hora_agendamento");
            select.innerHTML = "";
            for (let i = 0; i < resposta.length; i++) {
              var horario = resposta[i];
  
              // criando elementos do HTML via JavaScript
              var optionHorario = document.createElement("option");
  
              // colocando valores do select no innerHTML
              optionHorario.innerHTML = agendamento.horario;
              optionHorario.value = agendamento.idagendamento;
  
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


// VALIDACOES PADRAO API ACQUATEC

// FUNCOES NO HORARIO NO SELECT 

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.innerHTML = texto;
    }
}


// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}


function entrar() {
    aguardar();

    var emailVar = email_input.value;
    var senhaVar = senha_input.value;

    if (emailVar == "" || senhaVar == "") {
      cardErro.style.display = "block";
      mensagem_erro.innerHTML = "(Preencha todos os campos)";
      finalizarAguardar();
      return false;
    } else {
      setInterval(sumirMensagem, 5000);
    }

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emailServer: emailVar,
        senhaServer: senhaVar
      }),
    })
      .then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!");

        if (resposta.ok) {
          console.log(resposta);

          resposta.json().then((json) => {
            console.log(json);
            console.log(JSON.stringify(json));

            sessionStorage.ID_USUARIO = json.idusuario;
            sessionStorage.NOME_USUARIO = json.nome;
            sessionStorage.EMAIL_USUARIO = json.email;
            sessionStorage.RUA_USUARIO = json.rua;
            sessionStorage.NUMERO_USUARIO = json.numero;
            sessionStorage.TELEFONE_USUARIO = json.telefone;
            sessionStorage.GENERO_USUARIO = json.genero;

            
            sessionStorage.HORARIO_AGENDAMENTO = json.horario;
            sessionStorage.ID_AGENDAMENTO = json.idAgendamento;

            setTimeout(function () {
              window.location = "central/perfil.html";
            }, 1000); // apenas para exibir o loading
          });
        } else {
          console.log("Houve um erro ao tentar realizar o login!");

          resposta.text().then((texto) => {
            console.error(texto);
            finalizarAguardar(texto);
          });
        }
      })
      .catch(function (erro) {
        console.log(erro);
      });

    return false;
  }

  function sumirMensagem() {
    cardErro.style.display = "none";
  }


function validarSessao() {
  console.log("teste validar se????o")
    aguardar();
    var idUsuario = sessionStorage.ID_USUARIO ;
    var login = sessionStorage.LOGIN_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var h1Titulo = document.getElementById("h1_titulo");  

    if (login != null && nome != null ) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        h1Titulo.innerHTML = `${login}`;

        finalizarAguardar();
    } else {
        window.location = "login.html";
    }
}

function sair() {
    aguardar();
    sessionStorage.clear();
    finalizarAguardar();
    window.location = "login.html";
}
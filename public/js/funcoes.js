// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var telefone = sessionStorage.TELEFONE_USUARIO;
    var h1LoginUsuario = document.getElementById("h1_login_usuario");
    
    if (email != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        if (h1LoginUsuario != undefined) {
            h1LoginUsuario.innerHTML = email;
        }
        b_usuario.innerHTML = nome;
        b_agendamento.innerHTML = nome;
        // b_perfil_email.innerHTML =  email;
        b_agendamento_telefone.innerHTML = telefone;
        // finalizarAguardar();
    } else {
        window.location = "../login.html";
    }
}


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

// VERIFICAR JAVACRIPT NA PAGINA DE CONTATO

function verificar() {
    var nome = input_nome_contato.value
    var email = input_email_contato.value
    var telefone = input_telefone_contato.value
    var duvida = input_duvida_contato.value

    if (nome == "" || email == "" || telefone == "" || duvida == "") {
        div_aviso.innerHTML = "Por favor preencha Todos os campos"

    } else if (nome.length < 3 || nome.length > 90) {
        div_aviso.innerHTML = "O nome deve conter entre 4 até 90 caracteres "

    } else if (email.indexOf('@') <= 0 || email.indexOf('.com') == -1
        || email.indexOf('.com') < email.indexOf('@')) {

        div_aviso.innerHTML = "Email inválido <br> O email necessita de @ e .com"
    }
    else if (telefone.length < 11) {
        div_aviso.innerHTML = "Telefone Invalido"

    }
    else if (duvida.length < 15) {
        div_aviso.innerHTML = "Explique melhor sua duvida "

    }else {

        botoes.innerHTML = `
        <button class="btn" type=" button" onclick="verificar()" id="botao-contato" style="display:none">
         Verificar </button>
        <button class="btn" type="submit" id="botao-contato-enviar" style="display:flex; align-items: center;  justify-content: center; "> Enviar </button> 
        `

        }
    }
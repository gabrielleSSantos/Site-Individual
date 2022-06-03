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

    if(genero == "MAS"){
      card_perfil_foto.style.backgroundColor = "blue"
    }else{

    }
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

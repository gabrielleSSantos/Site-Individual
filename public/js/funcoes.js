// sessão
function validarSessao() {
    // aguardar();
    var idUsuario = sessionStorage.ID_USUARIO ;
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

    var generoVetor = sessionStorage.GENERO_USUARIO;
    
    if(generoVetor == "MAS"){
        card_perfil_legenda.innerHTML = `<div class="card_perfil_foto" id="card_perfil_legenda" 
    // style="background-color: #29bdf8;"> 
        <div class id="bolinhaFoto">
        <img src="../IMAGENS/git menino.gif">
         </div>
        </div>`
        
    }else{
        card_perfil_legenda.innerHTML = `<div class="card_perfil_foto" id="card_perfil_legenda" 
        style="background-color: pink; "> 
        <div class id="bolinhaFoto">
        <img src="../IMAGENS/garotinha.gif">
         </div>
        </div>`
    
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

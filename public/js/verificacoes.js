
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


// VERIFICAR JAVACRIPT NA PAGINA AGENDAMENTOS


    // VALIDAÇOES NA FOTO
    function selecionar(){

        // VALIDAÇOES 
        var escolha_trancaVar = select_tranca.value

        // ESCOLHA DA TRANÇA
        if(escolha_trancaVar == "Trança Lateral"){
            frase.innerHTML = `Você escolheu Trança Lateral, Arrasou!! <br>
            <img src="../IMAGENS/Trança-slider-10.jpg">
            R$ 20,00 
            `    
        } else if(escolha_trancaVar == "Trança Frontal"){
            frase.innerHTML = `Você escolheu Trança Frontal, Vai ficar uma Princesa(o)!!  <br>
            <img src="../IMAGENS/Trança-slider-1.jpg"> 
            R$ 25,00 
            `
        }
        else if(escolha_trancaVar == "Trança Cabelo Todo"){
            frase.innerHTML = `Você escolheu Trança Cabelo Todo, otima escolha!!  <br>
            <img src="../IMAGENS/trança-slider-11.jpg"> 
            R$ 35,00 
            `
        }
        else if(escolha_trancaVar == "Trança Nagô com jumbo"){
            frase.innerHTML = `Você escolheu Trança Nago com Jumbo , Se prepara que ai vem mudança!!  <br>
            <img src="../IMAGENS/trança-slider-12.jpg">   
            R$ 50,00 
            `
        }
        else if(escolha_trancaVar == "Trança Boxeadora"){
            frase.innerHTML = `Você escolheu Trança Boxeadora, Pronta pro combate!!  <br>
            <img src="../IMAGENS/trança-slider-7.jpg">
            R$ 35,00 
            `
        }
        else if(escolha_trancaVar == "Trança Masculina"){
            frase.innerHTML = `Trança Masculina é Tendencia!! <br>
            <img src="../IMAGENS/trança-slider-5.jpg">
            R$ 40,00 
            `
        }
        else if(escolha_trancaVar == "Trança Masculina com Jumbo"){
            frase.innerHTML = `Trança Masculina é Tendencia!! <br>
            <img src="../IMAGENS/trança-slider-9.jpg">
            R$ 50,00 
            `
        }

        else if(escolha_trancaVar == 0){
            frase.innerHTML = `Escolha uma opção valida`
        }
    }

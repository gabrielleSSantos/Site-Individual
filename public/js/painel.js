function listar() {
    //aguardar();
    console.log("CHEGUEI AQUI ")
    fetch("/avisos/listarMetricas")
        .then(function (resposta) {
            if (resposta.ok) {
                if (resposta.status == 204) {
                    console.log("NENHUM USUARIO CADASTRADO");
                }

                resposta.json().then(function (resposta) {
                    console.log(resposta[0]);

                    var tableGenero = resposta[0];

                    // criando e manipulando elementos do HTML via JavaScrip 

                    Genero.innerHTML = tableGenero.genero;

                    //   finalizarAguardar();
                });
            } else {
                throw "Houve um erro na API!";
            }
        })
        .catch(function (resposta) {
            console.error(resposta);
            //   finalizarAguardar();
        });
}

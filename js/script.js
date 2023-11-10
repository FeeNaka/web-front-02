// # para id
const buttonMedicamentos = document.querySelector("#medicamentos"); 

// . para class
const listaRemedios = document.querySelector(".remedios");


// chamou a constante buttonmedicamentos e adicionou um escutador de evento, que seria o click do mouse
buttonMedicamentos.addEventListener("click", function(){
    listaRemedios.classList.add("d-block");
// classList manipula uma classe do css, no caso a classe d-block
})


// Variáveis da validação 

const campoNome = document.querySelector("#nome");

const campoCidade = document.querySelector("#cidade");

const buttonValidacao = document.querySelector("button"); 
// Como o button é uma tag nao precisa de nenhum simbolo


// Função da Validação

buttonValidacao.addEventListener("click", function(event){ 
    event.preventDefault(); // Previne que o browser resete o seu imput, permanecendo no console log

    if (campoNome.value.trim() === ''){ // o .trim arranca todo o espaço de qualquer string
        alert("Preencha o campo nome");
        return false //enquanto o usuario nao preecher o campo nome, ele nao permite prosseguir
    }

    if (campoCidade.value === ''){
        alert("Preencha o campo cidade");
        return false
    }

    clearForm();
    

});

function clearForm(){ // Essa função limpa os campos depois de vc imputar as coisas
    campoNome.value = '';
    campoCidade.value = '';
}
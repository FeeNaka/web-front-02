const button = document.querySelector("button");
const inputNota = document.querySelector("#nota");

function clearForm(){
    inputNota.value = "";
}

//Criando um elemento p
const pMensagem = document.createElement("p");

button.addEventListener("click", (event) => {
    event.preventDefault();
    
    const inputNotaValue = inputNota.value

    //Validação de formulario para campo vazio
    if (inputNotaValue.trim() === '') {
        pMensagem.textContent = "Campo Obrigatorio";
        inputNota.insertAdjacentElement("afterend", pMensagem)
        pMensagem.setAttribute("class", "error")
        return false;
    }

    if (inputNota.value >= 6) {
        alert("Aprovado")
    } else {
        alert("Reprovado")
    }

    pMensagem.classList.add("d-none");
    clearForm();
})
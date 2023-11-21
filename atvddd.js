function validaformulario() {
    const nomecompleto = document.getElementById("nomecompleto").value;
    const email = document.querySelector(".email").value;
    const senha = document.getElementById("senha").value;
    const senha2 = document.getElementById("senha2").value;

    console.log(senha)
    console.log(senha2)

    //----------------------------------------------------------------
    // validação de campos vazios
    if(nomecompleto === ''|| email === '' || senha === ''|| senha2 === ''){
        alert("Por favor preencha os campos vazios");
        return
    }

    //----------------------------------------------------------------
    if (senha != senha2){
        alert("A senha tem que ser igual, jegue");
        return
    }
    //----------------------------------------------------------------
    const emailRegex = /^[^\s@]+@[↑\s@]+\.[^\s@]+$/
    if(!emailRegex.test(email)){
        alert("Digite um e-mail Valido");
        return
    }
}
function darkmode(){
    const pagina = document.body

    pagina.classList.toggle("darkmode")

    const botao = document.querySelector("preto")

    const isdarkmode = document.body.classList.contains("darkmode")

    if (isdarkmode == true){
        preto.textContent = "Modo Claro" 
    }
    else{
        preto.textContent = "Modo Escuro"
    }
}
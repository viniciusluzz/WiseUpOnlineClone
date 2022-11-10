let inputEmail = document.querySelector("#inputEmail");
let bottomSubmit = document.querySelector("#submit");
let bottomSubmit2 = document.querySelector("#submit2");
let closeError1 = document.querySelector("#closeError1");
let closeError2 = document.querySelector("#closeError2");
let closeError3 = document.querySelector("#closeError3");
let passwordInvalidMessage = document.querySelector("#passwordInvalidMessage");
let passwordInvalidMessage2 = document.querySelector("#passwordInvalidMessage2");
let passwordInvalidMessage3 = document.querySelector("#passwordInvalidMessage3");
let back = document.querySelector("#back");

// Recuperar senha 

function recoverPassword(){
    let invalidEmail = "auth/invalid-email";
    let invalidEmail2 = "auth/user-not-found";

    auth.sendPasswordResetEmail(inputEmail.value)
        .then(user=>{
            console.log(user);
            passwordInvalidMessage3.style.display = "flex";
        })
        .catch(error=>{
            if (error.code === invalidEmail && !inputEmail.value){
                passwordInvalidMessage.style.display = "flex";
            }else if (error.code === invalidEmail || invalidEmail2 && inputEmail.value){
                passwordInvalidMessage2.style.display = "flex";
            }
        })
}

bottomSubmit.addEventListener("click", recoverPassword);

// voltar para o login

function backToLogin (){
    window.location.href = "login.html";
}

back.addEventListener("click", backToLogin);

// Fechar mensagem de erro

function closeMessageError() {
    passwordInvalidMessage.style.display = "none";
}
  
function closeMessageError2() {
    passwordInvalidMessage2.style.display = "none";
}

function closeMessageError3() {
    passwordInvalidMessage3.style.display = "none";
    window.location.href = "login.html";
}
  
closeError1.addEventListener("click", closeMessageError);
closeError2.addEventListener("click", closeMessageError2);
closeError3.addEventListener("click", closeMessageError3);
bottomSubmit2.addEventListener("click", closeMessageError3);
  

let inputEmail = document.querySelector("#inputEmail");
let inputPassword = document.querySelector("#inputPassword");
let bottomSubmit = document.querySelector("#submit");
let registrationBottom = document.querySelector(".registrationBottom");
let eyeOn = document.querySelector("#eyeOn");
let eyeOff = document.querySelector("#eyeOff");
let closeError1 = document.querySelector("#closeError1");
let closeError2 = document.querySelector("#closeError2");
let passwordInvalidMessage = document.querySelector("#passwordInvalidMessage");
let passwordInvalidMessage2 = document.querySelector("#passwordInvalidMessage2");
let toRecoverPassword = document.querySelector("#toRecoverPassword");
let googleIcon = document.querySelector("#googleIcon");
let facebookIcon = document.querySelector("#facebookIcon");

// Olhar ou não a senha

function passwordHidden() {

  if (inputPassword.type === "password") {
    inputPassword.type = "text";
  } else {
    inputPassword.type = "password";
  }

  if (eyeOn.style.display === "flex") {
    eyeOn.style.display = "none";
    eyeOff.style.display = "flex";
  } else {
    eyeOn.style.display = "flex";
    eyeOff.style.display = "none";
  }

}

eyeOn.addEventListener("click", passwordHidden);
eyeOff.addEventListener("click", passwordHidden);

// Login

function login() {
  let inputNull = "The email address is badly formatted."
  let userinvalid1 = "There is no user record corresponding to this identifier. The user may have been deleted."
  let userinvalid2 = "The password is invalid or the user does not have a password."

  auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() => {
      auth.signInWithEmailAndPassword(inputEmail.value, inputPassword.value)
        .then(user => {
          console.log("Usuário logado com sucesso", user);
          window.location.href = "home.html";
        })
        .catch(error => {
          console.log(error);
          if (error.message === inputNull && !inputEmail.value || !inputPassword.value) {
            passwordInvalidMessage.style.display = "flex";
          }else if (error.message === inputNull || userinvalid1 || userinvalid2 && inputEmail.value && inputPassword.value){
            passwordInvalidMessage2.style.display = "flex";
          }
        })
    })
    .catch(error => {
      console.log(error);
    })

}

bottomSubmit.addEventListener("click", login);

// login com google

function loginWithGoogle() {
  let provider = new firebase.auth.GoogleAuthProvider();

  auth.signInWithPopup(provider)
    .then(user=>{
      console.log("usuário logado com google", user);
      window.location.href = "home.html";
    })
    .catch(error=>{
      console.log(error);
    })
}

googleIcon.addEventListener("click",loginWithGoogle);

// login com facebook

function loginWithFacebook() {
  let provider = new firebase.auth.FacebookAuthProvider();

  auth.signInWithPopup(provider)
    .then(user=>{
      console.log("usuário logado com facebook", user);
      window.location.href = "home.html";
    })
    .catch(error=>{
      console.log(error);
    })
}

facebookIcon.addEventListener("click",loginWithFacebook);

// Botão de registro

function bottomRegistrate() {
  window.location.href = "index.html";
}

registrationBottom.addEventListener("click", bottomRegistrate);

// Fechar mensagem de erro

function closeMessageError() {
  passwordInvalidMessage.style.display = "none";
}

function closeMessageError2() {
  passwordInvalidMessage2.style.display = "none";
}

closeError1.addEventListener("click", closeMessageError);
closeError2.addEventListener("click", closeMessageError2);

// Recuperar senha bottom 

function bottomRecoverPassword(){
  window.location.href = "recover.html";
}

toRecoverPassword.addEventListener("click", bottomRecoverPassword);
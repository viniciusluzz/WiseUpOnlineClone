

let inputEmail = document.querySelector("#inputEmail");
let inputPassword = document.querySelector("#inputPassword");
let bottomSubmit = document.querySelector("#submit");
let errorEmail = document.querySelector("#errorEmail");
let errorEmail2 = document.querySelector("#errorEmail2");
let errorPassword = document.querySelector("#errorPassword");
let eyeOn = document.querySelector("#eyeOn");
let eyeOff = document.querySelector("#eyeOff");
let privacity = document.querySelector("#privacity");
let ErrorCheckboxMessage = document.querySelector("#ErrorCheckboxMessage");
let iconX = document.querySelector("#iconCheckboxError2"); 

function passwordHidden(){
 
    if (inputPassword.type === "password"){
        inputPassword.type = "text";
    }else{
        inputPassword.type = "password";
    }

    if (eyeOn.style.display === "flex"){
        eyeOn.style.display = "none";
        eyeOff.style.display = "flex";
    }else{
        eyeOn.style.display = "flex";
        eyeOff.style.display = "none";
    }

}

eyeOn.addEventListener("click", passwordHidden);
eyeOff.addEventListener("click", passwordHidden);

// Mensagem erro inputs

function createNewUser(){
    auth.createUserWithEmailAndPassword(inputEmail.value, inputPassword.value)
    .then(user => {
        console.log(user);
        if (!privacity.checked){
            ErrorCheckboxMessage.style.display = "flex";
        }else{
            ErrorCheckboxMessage.style.display = "none";
            window.location.href = "home.html";
        }
    })
    .catch(error => {
        console.log(error);

        if (error.code === "auth/invalid-email"){

            errorEmail.style.display = "flex";
            inputEmail.style.outlineColor = "red";

        }else if (error.code === "auth/email-already-in-use"){
            
            errorEmail2.style.display = "flex";
            inputEmail.style.outlineColor = "red";

        }else{
            errorEmail.style.display = "none";
            errorEmail2.style.display = "none";
            inputEmail.style.outlineColor = "white";
        } 
        
        if (error.code === "auth/weak-password"){

            errorPassword.style.display = "flex";
            inputPassword.style.outlineColor = "red";

        }else{
            errorPassword.style.display = "none";
            inputPassword.style.outlineColor = "white";
        }

    })
}

function exit(){
    ErrorCheckboxMessage.style.display = "none";
}

bottomSubmit.addEventListener("click", createNewUser);
iconX.addEventListener("click", exit);


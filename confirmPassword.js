let password= document.getElementById("password");
let confirmPass=document.getElementById("confirmPassw");

function checkPass(){
    if (password.value !=="" && confirmPass.value !=="") {
        if(password.value ===confirmPass.value){ 
            confirmPass.style.cssText="border:2px solid green;box-shadow:0px 0px 2px 3px green";

        }else{
           confirmPass.style.cssText="border:2px solid red;box-shadow:0px 0px 2px 3px red";
        }
    }else{
        confirmPass.style.cssText="border:solid 1px lightgray;"
    }
}

confirmPass.addEventListener("keyup",checkPass);
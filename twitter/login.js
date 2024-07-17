let mail = document.getElementById("#email");
let password1 = document.getElementById("#password");


const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail(email) {
    if(emailPattern.test(email)) {
        return true;
    } 
  }

function validatePassword(pass){
    if(passwordPattern.test(pass)){
        return true;
    }
  }

function validateNumber(num){
    const phonePattern = /^[6-9]\d{9}$/;
    if(phonePattern.test(num)){
        return true;
    }

}

function validateUsername(user){
    const usernamePattern = /^[a-zA-Z0-9_-]{4,16}$/;
    if(usernamePattern.test(User)){
        return true;

    }
}

function myFunction(){
  
  var email = mail.value;
  var pass = password1.value;
  console.log(email)
  console.log(pass)

  let a = document.cookie = `username= ${email}`
  let b = document.cookie=`password=${pass}`

    if(validateEmail(email) || validateNumber(email) || validateUsername(email)){
        if(validatePassword(pass)){
          window.location.href="http://127.0.0.1:5500/redirect.html";
        }else{
            alert('Invalid password. Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character.');
        }
    }else{
        alert('Invalid email/Number/username. Please enter a valid credentials.');
    }   
}



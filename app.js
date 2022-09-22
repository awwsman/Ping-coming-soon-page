const email = document.querySelector("input[type=email]")
const submit = document.querySelector("input[type=submit]")
const error = document.querySelector(".error")

submit.addEventListener("click",ValidateEmail)
function ValidateEmail(e) {
  e.preventDefault();
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(email.value==""){
    error.innerHTML=`<em>Whoops! It looks like you forgot to add your email</em>`
  }
   else if (email.value.match(validRegex)) {
      alert("Valid email address!");
    } else {
      // alert("Invalid email address!");
      email.classList.add("show");
      error.innerHTML=`<em>please provide valid email address</em>`
      
    }
  }
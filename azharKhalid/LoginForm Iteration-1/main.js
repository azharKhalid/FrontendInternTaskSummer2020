/* ========================WRITE YOUR JS FROM HERE======================== */

document.getElementById("submit").addEventListener("click", event => {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let mobileNo = document.getElementById("mobileNo").value;
  let password1 = document.getElementById("password1").value;
  let password2 = document.getElementById("password2").value;
  console.log("Submitted");
  validateEmail(email);
  validateMobileNumber(mobileNo);
  validatePassword(password1, password2);
});

function validateMobileNumber(mobileNo) {
  if (mobileNo.length < 10) {
    let mobileSmall = document.getElementById("mobileSmall");
    mobileSmall.style.display = "block";
  } else {
    return console.log(mobileNo);
  }
}

function validatePassword(password1, password2) {
  if (password1 !== password2) {
    let passwordSmall = document.getElementById("passwordSmall");
    passwordSmall.style.display = "block";
  } else {
    return console.log(password1);
  }
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let inputEmail = re.test(String(email).toLowerCase());
  if (inputEmail) {
    return console.log(email);
  } else {
    let emailSmall = document.getElementById("emailSmall");
    emailSmall.style.display = "block";
  }
}

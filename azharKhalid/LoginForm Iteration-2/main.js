/* ========================WRITE YOUR JS FROM HERE======================== */

document.getElementById("submit").addEventListener("click", event => {
  event.preventDefault();
  //Capturing all the input value entered by user
  let email = document.getElementById("email").value;
  let mobileNo = document.getElementById("mobileNo").value;
  let password1 = document.getElementById("password1").value;
  let password2 = document.getElementById("password2").value;

  //Function for validating email
  validateEmail(email);
  //Function for validating mobile Number
  validateMobileNumber(mobileNo);
  //Function for validating Password
  validatePassword(password1, password2);
  //Condition for redirecting the page after successfull entering of all the inputs
  if (
    validateEmail(email) &&
    validateMobileNumber(mobileNo) &&
    validatePassword(password1, password2)
  ) {
    window.location.href = "successPage.html";
  } else {
  }
});

//Function for validating mobile Number
function validateMobileNumber(mobileNo) {
  if (mobileNo.length < 10) {
    let mobileSmall = document.getElementById("mobileSmall");
    mobileSmall.style.display = "block";
    return false;
  } else {
    return true;
  }
}

//Function for validating Password
function validatePassword(password1, password2) {
  if (password1 == "" || password2 == "") {
    let passwordSmall = document.getElementById("passwordSmall2");
    passwordSmall.style.display = "block";
    return false;
  } else {
    if (password1 !== password2) {
      let passwordSmall = document.getElementById("passwordSmall1");
      passwordSmall.style.display = "block";
      return false;
    } else {
      return true;
    }
  }
}

//Function for validating email
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let inputEmail = re.test(String(email).toLowerCase());
  if (inputEmail) {
    return true;
  } else {
    let emailSmall = document.getElementById("emailSmall");
    emailSmall.style.display = "block";
    return false;
  }
}

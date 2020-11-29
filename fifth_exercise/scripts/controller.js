function validateEmail(email) {
  if (email.length >= 5) {
    if (!email.includes("@")) {
      return false;
    }
    let s = email.indexOf("@");
    let part = email.slice(s + 1);
    if (!part.includes(".")) {
      return false;
    }
    return true;
  } else {
    return false;
  }
}
function validatePassword(password) {
  if (password.length >= 6) {
    let Up = false;
    let num = false;
    let special =
      password.includes("@") ||
      password.includes("!") ||
      password.includes("#") ||
      password.includes("$") ||
      password.includes("%") ||
      password.includes("^") ||
      password.includes("&");
    for (const key in password) {
      if (password[key] >= "A" && password[key] <= "Z") {
        Up = true;
      }
      if (password[key] >= "0" && password[key] <= "9") {
        num = true;
      }
    }
    return Up && num && special;
  } else {
    return false;
  }
}
let button = document.getElementById("btn");
button.addEventListener("click", function (e) {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("pass").value;
  var errorEmail = validateEmail(email);
  let errorPass = validatePassword(password);
  var er = document.getElementById("errors");
  if (!errorEmail) {
    er.innerHTML = `Your email doesn't have @ or your lenght is not minimum 5 symbols or it doesn't have domain!!!`;
  } else if (!errorPass) {
    er.innerHTML = `Your password is bad`;
  } else {
    er.innerHTML = "";
    alert(`Successful entry`);
    window.location = './posts.html';
  }
});

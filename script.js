// let signUp = document.getElementsByClassName("sign-up-button");

// signUp.onclick = function signUpMessage(e) {
//   e.preventDefault();
//   console.log("Congrats");
//   alert("congrats!");
//   signUp.textContent = "jjj";
// };

let signUp = document.querySelector(".sign-up-button");
let success = document.querySelector(".message");
signUp.addEventListener(
  "click",
  function (e) {
    success.textContent =
      "Congratulations on signing up. Your new life awaits you. Welcome!";
  },
  false
);

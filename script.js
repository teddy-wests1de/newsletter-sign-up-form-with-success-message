'use strict'
/* Assign control variables */
const emailAddres = document.querySelector('#email');
const btnSubmit = document.querySelector('.btn-submit');
const errorMsg = document.querySelector('.error-msg');
const btnDismiss = document.querySelector('.btn-dismiss');
const signUpForm = document.querySelector('.sign-up-form');
const successForm = document.querySelector('.success-message');

const validEmail = function (inputEmail) {
  let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
  return regex.test(inputEmail)
}

btnSubmit.addEventListener("click", function (e) {
    e.preventDefault();
    if (validEmail(emailAddres.value)) {
      emailAddres.classList.remove('show-error');
      errorMsg.classList.remove('show-error');
      signUpForm.classList.add('hidden');
      successForm.classList.remove('hidden');
    } else {
        emailAddres.classList.add('show-error')
        errorMsg.classList.add('show-error');
    }
  });

btnDismiss.addEventListener('click', function(){
    signUpForm.classList.remove('hidden');
    successForm.classList.add('hidden');
})
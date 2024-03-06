// all elements

const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const form = document.querySelector('#form');

const shoError = (input,message) =>{
 
  let parentElement = input.parentElement;
  parentElement.classList = 'form-control error';
  const small = parentElement.querySelector('small');
  const successIcon = parentElement.querySelectorAll('i')
  [0];
  const errorIcon = parentElement.querySelectorAll('i')
 [1];

 errorIcon.style.visibility = 'visible';
 successIcon.style.visibility = 'hidden';
 small.innerText = message;

}

const shoSuccess = (input) =>{
 
  let parentElement = input.parentElement;
  parentElement.classList = 'form-control success';
  const successIcon = parentElement.querySelectorAll('i')
  [0];
  const errorIcon = parentElement.querySelectorAll('i')
 [1];

 errorIcon.style.visibility = 'hidden';
 successIcon.style.visibility = 'visible';
}

const checkEmprty = (elements) => {
  elements.forEach((element) =>{
  if(element.value === ''){
     shoError(element, 'input required');
   }else{
    shoSuccess(element);
   }
   })
}

const checkEmail = (email) =>{
   const reg =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

   if(reg.test(email.value)){
    shoSuccess(email);
   }else{
    shoError(email, 'invalid Email');
   }
}

const checkPasswordLength = (input,min,max) =>{

  if(input.value.length < min) {
    shoError(input, `Password atlesst ${min}  Character @%#`);
   }else if( input.value.length > max){
     shoError(input, `Password maximum Please Charactor  ${max}`);
   }else{
    shoSuccess(input);
   }
}

form.addEventListener('submit', (event) =>{

  event.preventDefault();
  checkEmprty([username, email, password, confirmPassword]);
  checkEmail(email);
  checkPasswordLength(password, 8, 20);
  checkPasswordLength(confirmPassword, 8, 20);
  
  

})

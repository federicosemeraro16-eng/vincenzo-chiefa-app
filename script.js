const startButton = document.getElementById('startBtn');
const logSession = document.querySelector('.login-section.hidden');


startButton.addEventListener('click',(logMgmt) =>{
  
  logSession.classList.toggle('hidden');
});

const loginBtn = document.getElementById('loginBtn');
const inputEmail = document.getElementById('email-input');
const inputPassword = document.getElementById('password-input');

loginBtn.addEventListener('click',(e)=>{
e.preventDefault();
const emailInserita = inputEmail.value.trim();
const passwordInserita = inputPassword.value.trim();
let passwordCorretta ='Asroma1927!';
let emailCorretta ='federicosemeraro16@gmail.com';

if(emailInserita===emailCorretta && passwordInserita === passwordCorretta){
  window.location.href ='cliente.html';
}else{
  alert('Password errata');
}
});

const reservebtn = document.getElementById('reserve-btn');

reservebtn.addEventListener('click',(Book)=>{
  const numero ='393923811544';
  const messaggio = 'Ciao Vincenzo vorrei prenotare una VideoCall per una consulenza';
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(messaggio)}`
window.open(url,'_blank');
});


const BODY_APP = document.querySelector('#app');
let currentScreen = 'activation-code';



//scrivo una funzione che accetta screen come parametro
function goTo(screen) {
  //quando viene chiamata currentScreen = screen
  currentScreen = screen;
  //richiama funzione render
  render();
}



function render() {
  let screen;
  BODY_APP.innerHTML = '';
  switch (currentScreen) {
    case 'login':
      screen = loginScreen();
      break;
    case 'home':
      screen = homePageScreen();
      break;
    case 'workout':
      screen = liveWorkoutScreen();
      break;
    case 'summary':
      screen = liveSummaryScreen();
      break;
    case 'chat':
      screen = chatScreen();
      break;
    case 'workouts':
      screen = workoutDetailsScreen();
      break;
    case 'progress':
      screen = progressDetailsScreen();
      break;
    case 'coach':
      screen = dashboardCoachScreen();
      break;
    case 'activation-code':
      screen = activationCodeScreen();
      break;
    case 'activation-password':
      screen = activationPasswordScreen();
      break;

    default:
      screen = notFoundScreen();;
      break;
  }
  BODY_APP.appendChild(screen);
}


function notFoundScreen(){
  const newSection = document.createElement('section');
  newSection.classList.add('screen','not-found');
  const newLogoNotFoundScreen = document.createElement('img');
  newLogoNotFoundScreen.setAttribute('src','asset/img/logo-full-white_1.png')
  newLogoNotFoundScreen.setAttribute('alt','logo-img');
  newLogoNotFoundScreen.classList.add('not-found__logo')
  const notFoundErrorCode = document.createElement('p');
  notFoundErrorCode.textContent ='404';
  notFoundErrorCode.setAttribute('aria-hidden','true')
  notFoundErrorCode.classList.add('not-found__error-code')
  newSection.appendChild(notFoundErrorCode);
  newSection.prepend(newLogoNotFoundScreen)
  const notFoundh1 = document.createElement('h1');
  notFoundh1.textContent='Schermata non trovata';
  notFoundh1.classList.add('not-found__title');
  newSection.appendChild(notFoundh1);
  const notFoundPar = document.createElement('p');
  notFoundPar.textContent='La pagina che cerchi non esiste';
  notFoundPar.classList.add('not-found__text');
  newSection.appendChild(notFoundPar);
  const notFoundBtn = document.createElement('button');
  notFoundBtn.textContent=`Torna all'accesso`;
  notFoundBtn.setAttribute('type','button');
  notFoundBtn.classList.add('not-found__btn');
  newSection.appendChild(notFoundBtn);
  return newSection

}

currentScreen='prova'

render()

/*funzione activationCodeScreen:*/

/*1.apro la funzione activationCodeScreen*/
function activationCodeScreen(){
/*2creo un elemento section*/
const activationCodeSection = document.createElement('section');
/*3. do alla section classe screen ed activation-code*/
activationCodeSection.classList.add('screen','activation-code');
/*4. creo un elemento header*/
const activationCodeHeader = document.createElement('header');
/*5.do all'elemento header classe activation-code__header*/
activationCodeHeader.classList.add('activation-code__header');
/*5.appendo l'header alla section */
activationCodeSection.appendChild(activationCodeHeader)
/*6.creo un elemento button*/
const activationCodeBtn = document.createElement('button');
/*7.do all'elemento button una classe activation-code__btn*/
activationCodeBtn.classList.add('activation-code__btn');
/*8. do con set attribute type button,aria-label =torna alla schermata d'accesso*/
const activationCodeBtnAttributes ={
  type:'button',
  'aria-label':`Torna alla schermata d'accesso`,
}
for (let chiave in activationCodeBtnAttributes){
  activationCodeBtn.setAttribute(chiave,activationCodeBtnAttributes[chiave]);
}
/*9.button.textContent ="⬅"*/
activationCodeBtn.textContent="<-";
/*10.appendo il bottone all'header*/
activationCodeHeader.appendChild(activationCodeBtn);
/*11.creo un elemento span */
const activationCodeTextContainer= document.createElement('div');
activationCodeTextContainer.classList.add('activation-code__text-container')
activationCodeHeader.appendChild(activationCodeTextContainer)
const activationCodeHeaderSpan = document.createElement('span');
/*12.do una classe activation-code__header-span*/
activationCodeHeaderSpan.classList.add('activation-code__header-span');
/*13. span.textContent  = Passo 1 di 2 */
activationCodeHeaderSpan.textContent = 'Passo 1 di 2';
/*14.appendo lo span all'header*/
activationCodeTextContainer.appendChild(activationCodeHeaderSpan);
/*15.creo un elemento div/*/
const activationCodeStepPageFirst = document.createElement('div');
/*16.do classe .activation-code__step-page e .activation-code__step-page--active*/
activationCodeStepPageFirst.classList.add(`activation-code__step-page` ,`activation-code__step-page--active`);
/*17.appendo il div all'header*/
activationCodeTextContainer.appendChild(activationCodeStepPageFirst);
/*18.creo un elemento div/*/
const activationCodeStepPageSecond = document.createElement('div');
/*19. do classe .activation-code__step-page*/
activationCodeStepPageSecond.classList.add('activation-code__step-page');
/*20.appendo il div all'header/*/
activationCodeTextContainer.appendChild(activationCodeStepPageSecond);
/*21.creo un elemento main */
const activationCodeMain = document.createElement('main');
/*22.appendo il main alla section */
activationCodeSection.appendChild(activationCodeMain);
/*23.do classe al main activation-code__main*/
activationCodeMain.classList.add('activation-code__main');
/*24. creo un eleme to div*/
const activationCodeLogoContainer = document.createElement('div');
/*25. do classe activation-code__logo-container*/
activationCodeLogoContainer.classList.add('activation-code__logo-container')
/*26. appendo activation-code__logo-container al main*/
activationCodeMain.appendChild(activationCodeLogoContainer);
/*27.creo un elemento img*/
const activationCodeImg = document.createElement('img');
/*28. do attributo src logo-full-white_1.png tramite set attribute ed alt ='logo-coach-vincenzo-chiefa'*/
activationCodeImg.classList.add('activation-code__logo');
const activationCodeImgAttributes = {
  src:'asset/img/logo-full-white_1.png',
  alt:'logo-coach-vincenzo-chiefa'
}
for (let chiave in activationCodeImgAttributes){
  activationCodeImg.setAttribute(chiave,activationCodeImgAttributes[chiave])
}
/*29. appendo l'img al div logo container*/
activationCodeLogoContainer.appendChild(activationCodeImg);
/*30 creo un elemento div */
const activationCodeHero = document.createElement('div');
/*31.do classe al div activation-code__hero*/
activationCodeHero.classList.add('activation-code__hero');
/*32.appendo il div al main*/
activationCodeMain.appendChild(activationCodeHero)
/*33. creo un elemento h1 */
const activationCodeTitle = document.createElement('h1');
/*34. do classe activation-code__title*/
activationCodeTitle.classList.add('activation-code__title');
/*35. activation-code__title.textcontent ='attiva il tuo '*/
activationCodeTitle.textContent = `Attiva il tuo `
/*37.creo un elemento span*/
const activationCodeSpan = document.createElement('span');
/*38. do classe allo span activation-code__span*/
activationCodeSpan.classList.add('activation-code__span');
/*39. span text content 'codice invito'*/
activationCodeSpan.textContent = `Invito`
/*40. appendo lo span all'h1*/
activationCodeTitle.appendChild(activationCodeSpan);
/*40-a)appendo l'h1 al div activation-code__hero*/
activationCodeHero.appendChild(activationCodeTitle);
/*41. creo un elemento p/*/
const activationCodePar = document.createElement('p');
/*42. do classe activation-code__paragraph*/
activationCodePar.classList.add('activation-code__paragraph');
/*43.p.textcontent = Inserisci codice che ti ha inviato il tuo coach*/
activationCodePar.textContent = `Inserisci il codice che ti ha inviato il tuo coach`;
/*44.appendo il paragrafo al div activation code hero*/
activationCodeHero.appendChild(activationCodePar);
/*45.creo un elemento form*/
const activatioCodeCheckForm = document.createElement('form');
/*46. do classe al form  activation-code__check-code*/
activatioCodeCheckForm.classList.add('activation-code__check-code');
/*47. appendo il form al padre activation code hero*/
activationCodeHero.appendChild(activatioCodeCheckForm);
/*48 creo un elemento label */
const activationCodeLabel = document.createElement('label');
/*49. do alla label classe activation-code__label*/
activationCodeLabel.classList.add('activation-code__label');
/*50. do attributo for invite-code con setAttribute */
activationCodeLabel.setAttribute('for','invite-code');
/*51.label textcontent = codice invito*/
activationCodeLabel.textContent = `Codice Invito: `;
/*52appendo la label al  form*/
activatioCodeCheckForm.appendChild(activationCodeLabel);
/*53. creo un elemento input */
const activationCodeInput = document.createElement('input');
/*54. do classe all'input activation-code__input*/
activationCodeInput.classList.add('activation-code__input');
/*55. do id con set attribute =invite-code,name ='invite-code'type text placeholder(set attribute multiplo)- > cerca sintassi su google;*/
const activationCodeInputAttr = {
  id:'invite-code',
  name:'invite-code',
  type:'text',
  placeholder:'VC-7F3K'
}
for (let chiave in activationCodeInputAttr){
  activationCodeInput.setAttribute(chiave,activationCodeInputAttr[chiave]);
}
/*56.appendo l'elemento input al form*/
activatioCodeCheckForm.appendChild(activationCodeInput)
/*57. creo un elemento p*/
const activationCodeHeroP = document.createElement('p');
/*58. p text content  Formato: VC - XXXX*/
activationCodeHeroP.textContent = `Formato: VC - XXXX`;
/*59. do classe al p = activation-code__hero-p */
activationCodeHeroP.classList.add('activation-code__hero-p')
/*60.appendo il paragrafo al padre form */
activatioCodeCheckForm.appendChild(activationCodeHeroP);
/*61.creo un elemento button*/
const activationCodeHeroBtn = document.createElement('button');
/*62. do classe al button uguale  activation-code__hero-btn*/
activationCodeHeroBtn.classList.add('activation-code__hero-btn');
/*63. button text content attiva il codice */
activationCodeHeroBtn.textContent = `Attiva il codice`;
/*64. appendo il bottone al form*/
activatioCodeCheckForm.appendChild(activationCodeHeroBtn);
/*65. creo un elemento footer*/
const activationCodeFooter = document.createElement('footer');
/*66.do classe al footeractivation-code__footer*/
activationCodeFooter.classList.add('activation-code__footer')
/*67.appendo il footer alla section */
activationCodeSection.appendChild(activationCodeFooter);
/*68.creo un elemento p */
const activationCodeFooterPar = document.createElement('p');
/*69. do classe al p activation-code__footer-paragraph*/
activationCodeFooterPar.classList.add('activation-code__footer-paragraph');
/*70. p text content = Non hai un codice?*/
activationCodeFooterPar.textContent = `Non hai un codice?`;
/*71. appendo il p al footer */
activationCodeFooter.appendChild(activationCodeFooterPar);
/*72.creo un elemento span*/
const activationCodeFooterSpan = document.createElement('span');
/*73. do classe allo span activation-code__footer-span*/
activationCodeFooterSpan.classList.add('activation-code__footer-span');
/*74. span text content Chiedilo al tuo coach*/
activationCodeFooterSpan.textContent = `Chiedilo al tuo coach`; 
/*75. appendo lo span al paragrafo*/
activationCodeFooterPar.appendChild(activationCodeFooterSpan);
/*76.return section*/
return activationCodeSection

}

currentScreen = 'activation-code';
render()


//NEXT STEPS:
// funzione che al click del bottone nell'header 'click' goTo('login') border-radius 50% freccia con pseudo
// funzione che in caso di errore nell'invio del messaggio si cambia il p nella hero con fix del css
//funzione che andando attiva il codice va alla seconda pagina per la creazione della password
//creazione della pagina per la crezione della password

// funzione per creare password

//apro la funzione activation Password
//creo un documento section
//do classi screen ed activation-password
//creo un elemento header
//do classe activation-password__header
//appendo l header alla section
//creo un elemento button 
//do classe activation-password__btn
// do type button con set attribute
//appendo il button all header
//creo uno span
//span text content Passo 2 di 2 
//do classe allo span .activation-password__span
//appendo lo span all'header
//creo un elemento div 
// do classi activation-password__step-page e activation-password__step-page--active
//appendo il div all header
//creo un nuovo elemento div 
// do classi activation-password__step-page e activation-password__step-page--active
// appendo il div all header 
//creo un elemento main
//do classe activation-password__main
//appendo il main alla section 
//creo un elemento div 
// do classe activation-password__notification.confimation-container
//creo un elemento img 
//do classe activation-password__logo
// do attributi src'logo-full_1' alt='immagine logo'
//appendo l'immagine activation-password__notification.confimation-container
//creo un elemento h2 
//do classe activation-password__subtitle
// do text content ciao utente 
//appendo l'h2 al div activation-password__notification.confimation-container
//creo un elemento p 
// do classe activation-password__text 
// text content Vincenzo Chiefa ti ha inviato
//appendo il p al div notification confirmation container
//appendo  activation-password__notification.confimation-container al main
//creo un elemento form 
//do classe activation-password__form 
//appendo il form al main
//creo un elemento h1
//do classe activation-password__title
//activation-password__title text content CREA LA TUA
//creo un elemento span 
//span text content PASSWORD
//do classe activation-password__span
//appendo lo span all h1 
//appendo l h1 al form 
//creo un elemento label
//do classse activation-password__label 
//do attributo for email 
//span text content Email 
//appendo lo span al form 
//creo un elemento input 
//do classe .activation-password
//do attributi email type text e readonly
//appendo l'input al form
//creo un elemento p 
//do classe activation-password__text
//p text content Email sbagliata?Avvisa il coach.
//appendo il p al form 
//creo un elemento label 
//do classe activation-password__label
//do attributo for ed input password
//label text content password
//appendo lo label alform 
//creo un elemento input
//do classe activation-password__input
//do attributi #input-password type='password' name='input-password'con un for of 
//appendo l input al form 
//credo un alemento p
//do classe activation-password__text e p.activation-password__text--passed
//p text content almeno 8 caratteri
//metti aria live polite con set attribute 
//appendo il p al form 
//creo un nuovo elemento p 
// do classe activation-password__text e activation-password__text--passed
//textcontent Una lettera minuscola 
//appendo il secondo p al form 
//metto aria live polite con set attribute
//creo un elemento label 
//do classe activation-password__label
// do con set attribute for e password-confirmation 
//text content per la label conferma password 
//appendo la label al form 
//creo un elemento input
//dp classe activation-password__inputconfirmation
// con un for of do attributi con set attribute all'interno id password-confirmation type password name password-confirmation
//appendo la label al form 
//creo un elemento p
//dp una classe activation-password__error
//con set attribute do aria live polite 
//appendo l'error p al form 
//creo un elemento button
//do una classe activation-password__btn
//button text content iniziza ad allenarti 
//con un for of do type submit e password activation come id 
//appendo il button al form 
//ritorno la section tutta compilata

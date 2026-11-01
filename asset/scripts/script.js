
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
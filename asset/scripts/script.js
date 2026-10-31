
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
  const newH1 = document.createElement('h1');
  newH1.textContent='Schermata non trovata';
  newH1.classList.add('not-found__title');
  newSection.appendChild(newH1);
  const newPar = document.createElement('p');
  newPar.textContent='La pagina che cerchi non esiste';
  newPar.classList.add('not-found__text');
  newSection.appendChild(newPar);
  const newBtn = document.createElement('button');
  newBtn.textContent=`Torna all'accesso`;
  newBtn.setAttribute('type','button');
  newBtn.classList.add('not-found__btn');
  newSection.appendChild(newBtn);
  return newSection

}

currentScreen='prova'

render()
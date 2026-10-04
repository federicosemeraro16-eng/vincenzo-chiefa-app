//pseudo codice per creazione programma
// 1.dichiaro tutti gli elementi che andranno a costruire il programma come variabile
let settimana =0
let allenamento=0
let programma
let giornoAttivo = { settimana:0,giorno:0}


const palliniAllenamento = document.querySelectorAll('.dot-allenamento')
const palliniSettimana = document.querySelectorAll('.dot-settimana')
const  addSessionBtn = document.getElementById('add-session-btn')
const addWeekBtn = document.getElementById('add-week-btn')
const saveBtn = document.getElementById('save-prgrm-btn')
const addExBtn = document.getElementById('add-ex-btn')
const createStrctrBtn = document.getElementById('create-strct-btn')
const weekSelect = document.getElementById('week-select')
const daySelect = document.getElementById('day-select')



let incrementaElemento = function(tipoDiIncremento){
  if (tipoDiIncremento === "settimana" && settimana < palliniSettimana.length){
  coloraPallini(settimana,'settimana')
  settimana++
  } else if (tipoDiIncremento === "allenamento" && allenamento < palliniAllenamento.length){
    coloraPallini(allenamento,'allenamento')
    allenamento++
  }
}

const coloraPallini = function(numero,tipo){
  if (tipo === 'settimana'){
    palliniSettimana[numero].classList.add('active')
  } else if (tipo === 'allenamento'){
    palliniAllenamento[numero].classList.add('active')
  }
}




//pseudo codice per salvataggio e creazione settimana:
// 1. Quando il click viene fatto su salva programma viene creato un oggetto di nome programma;
 const creaStruttura = () =>{
   
  programma = {
    settimaneProgramma : settimana,
    allenenamentiProgramma : allenamento,
    struttura :[]
  }

  for (let i=0; i<settimana; i++){
    const settimanaObj = {
      settimana : i +1,
      giorni: []
    }

    for (let j=0; j<allenamento;j++){
      const allenamentoObj= {
        allenamento : j+1,
        esercizi : []
      }
      settimanaObj.giorni.push(allenamentoObj)
    }
    programma.struttura.push(settimanaObj)
  }
  console.log(programma)

}


//pseudo codice per creare la funzione che crea oggetto esercizio:
// 1. dichiarare una funzione di nome crea oggetto con const
const creaOggettoEsercizio = function(){
  const exercise = document.getElementById('exercise').value
  const specialRemarks = document.getElementById('special-remarks').value
  const recupero = Number(document.getElementById('rest').value)

  const serie = []

  const blocchiSerie = document.querySelectorAll('.blocchi-serie')
    
  blocchiSerie.forEach(blocco => {
    serie.push({
      carico: Number(blocco.querySelector('.weight').value),
      rir : Number(blocco.querySelector('.rir-rpe').value),
      ripetizioni :  Number(blocco.querySelector('.reps').value)
       
    })
  })
  const esercizio = {
      exercise : exercise,
      specialRemarks : specialRemarks,
      recupero : recupero,
      serie : serie
    }
    console.log(esercizio)
  return esercizio
}


const selectDayWeekActive =() =>{
  const weekActive = Number(weekSelect.value)-1
  const dayActive = Number(daySelect.value)-1

  giornoAttivo = {giorno:dayActive,settimana:weekActive}

}



const addEx =() =>{
  
  if(programma=== undefined){
    alert('si prega di creare una sessione di lavoro')
  } else{
    const workingDay = creaOggettoEsercizio()

    selectDayWeekActive()
    
    programma.struttura[giornoAttivo.settimana].giorni[giornoAttivo.giorno].esercizi.push(workingDay)
  }

  console.log(programma)

}


// 1. Quando clicco su addexbtn
// 2. inserisco la prima condizione if programma è undefined facciamo apparire un alert tipo si prega di aprire una sessione di lavoro ad esempio
// 3. se il programma esiste invece faccio partire la funzione creOggettoEsercizio salvandola in una variabile per custodire il valore di ritorno;
// 4. faccio partire in seguito la funzione selectdayweekactive;
// 5. devo entrare nel programma            a->unico passaggio
// 6. entro nella strutturaa->unico passaggio
// 7. inserisco weekActive.giornoAttivoa->unico passaggio
//8. entro in giornia->unico passaggio
//9. inserisco dayActive.giornoAttivoa->unico passaggio
//10.concludo con push nell'array esercizia->unico passaggio







weekSelect.addEventListener('change',selectDayWeekActive)
daySelect.addEventListener('change',selectDayWeekActive)


addExBtn.addEventListener('click',creaOggettoEsercizio)

addSessionBtn.addEventListener('click',function(){
  incrementaElemento('allenamento')
})

addWeekBtn.addEventListener('click',function(){
  incrementaElemento('settimana')
  
})

createStrctrBtn.addEventListener('click', creaStruttura)

addExBtn.addEventListener('click',addEx)



// 1.pseudo codice e risoluzione del problema dell'assegnazione del giorno 
// 2.inserimento di due select in html per selezionare settimana e giorno per selezionare il giorno attivo;
// 3. dichiarazione di giorno attivo con let giornoAttivo = {settimana : 0 , giorno : 0}
// 4. scrivere una funzione chiamata selezione giornoattivo;
// 5. leggere i valori degli input dei select
// 6. aggiornare l'oggetto con value dei select 
// 7. valore di return 
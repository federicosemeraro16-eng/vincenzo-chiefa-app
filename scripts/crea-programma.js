//pseudo codice per creazione programma
// 1.dichiaro tutti gli elementi che andranno a costruire il programma come variabile
let settimana =0
let allenamento=0
let programma

let esercizio

const palliniAllenamento = document.querySelectorAll('.dot-allenamento')
const palliniSettimana = document.querySelectorAll('.dot-settimana')
const  addSessionBtn = document.getElementById('add-session-btn')
const addWeekBtn = document.getElementById('add-week-btn')
const saveBtn = document.getElementById('save-prgrm-btn')
const addExBtn = document.getElementById('add-ex-btn')



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

addSessionBtn.addEventListener('click',function(){
  incrementaElemento('allenamento')
})

addWeekBtn.addEventListener('click',function(){
  incrementaElemento('settimana')
  
})


//pseudo codice per salvataggio e creazione settimana:
// 1. Quando il click viene fatto su salva programma viene creato un oggetto di nome programma;
saveBtn.addEventListener('click',function(){
   
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

})


//pseudo codice per creare la funzione che crea oggetto esercizio:
// 1. dichiarare una funzione di nome crea oggetto con const
const creaOggettoEsercizio = function(){
  const exercise = document.getElementById('exercise').value
  const specialRemarks = document.getElementById('special-remarks').value
  const recupero = document.getElementById('rest').value

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

addExBtn.addEventListener('click',creaOggettoEsercizio)


// 4.al click del bottone vengono letti gli input non vincolati tra di loro e creo un array vuoto per la compsizione dei dettagli della singola serie
//5. nell'array della serie ci inserisco con metodo push serie rir ripetizioni
// 6. creo un oggetto di ritorno con i valori letti e le chiavi dell'oggetto esercizio

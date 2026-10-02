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



let incrementaElemento = function(quantità,tipoDiIncremento){
  if (tipoDiIncremento === "settimana"){
    settimana++
    coloraPallini(settimana,'settimana')
  } else if (tipoDiIncremento === "allenamento"){
    allenamento++
    coloraPallini(allenamento,'allenamento')
  }
}

let coloraPallini = function(numero,tipo){
  if (tipo === 'settimana'){
    palliniSettimana[numero-1].classList.add('active')
  } else if (tipo === 'allenamento'){
    palliniAllenamento[numero-1].classList.add('active')
  }
}

addSessionBtn.addEventListener('click',function(){
  incrementaElemento(allenamento,'allenamento')
})

addWeekBtn.addEventListener('click',function(){
  incrementaElemento(settimana,'settimana')
  
})


//pseudo codice per salvataggio e creazione settimana:
// 1. Quando il click viene fatto su salva programma viene creato un oggetto di nome programma;
saveBtn.addEventListener('click',function(){
   
  programma = {
    settimaneProgramma : settimana,
    allenenamentiProgramma : allenamento,
    struttura :[]
  }

  for (let i=0; i<=settimana; i++){
    const settimanaObj = {
      settimana : i +1,
      giorni: []
    }

    for (let j=0; j<=allenamento;j++){
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
//2. l'oggetto ha chiave: 
// settimaneprogramma: settimana;
// allenaentisettimana: allenamento;
//struttura: [];
// 3. creao un ciclo for per creare tante settimane quante sono state selezionate;
// 4. annido un altro ciclo all'interno per creare tanti allenamenti quanti sono stati selezionati
// 5. invio il risultato all'array dei giorni
// 6. invio il risultato all'array delle settimane 

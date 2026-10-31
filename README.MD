Albero del DOM (App Vincenzo)
login page
section.screen.login
├── header.login__header
│   └── img.logo                         (src logo, alt "Vincenzo Chiefa")
├── div.login__hero
│   ├── h1.login__title                  "Allenati. Registra. Migliora."
│   └── p.login__subtitle                "Il tuo programma e il tuo coach…"
├── form.login__form                     ⚡ submit → controlla dati → goTo('home')
│   ├── div.role-switch                  (scelta del ruolo)
│   │   ├── button.role-switch__btn.is-active   "Atleta"   ⚡ click
│   │   └── button.role-switch__btn             "Coach"    ⚡ click
│   ├── div.field
│   │   ├── label  (for="email")         "Email"
│   │   └── input#email  type="email"
│   ├── div.field
│   │   ├── label  (for="password")      "Password"
│   │   ├── input#password type="password"
│   │   └── button.field__toggle         (icona occhio) ⚡ click → mostra/nascondi
│   ├── p.form-error                     (vuoto, si riempie se il login fallisce)
│   └── button.btn.btn--primary  type="submit"   "Accedi"
├── button.btn.btn--ghost                "Continua con Google"
└── p.login__invite                      "Hai un codice invito? "
    └── a / button                       "Attivalo"  ⚡ click → goTo('invite')

Home page
section.screen.home
├── header.home__header
│   ├── div.home__user
│   │   ├── div.home__avatar                 "FS"  (dati: iniziali)  aria-hidden="true"
│   │   └── div.home__greeting
│   │       ├── p.home__welcome              "Bentornato"
│   │       └── h1.home__name                (dati: nome utente)
│   └── button.icon-btn  aria-label="Notifiche"     ⚡ click → apri notifiche
│       ├── svg  aria-hidden="true"
│       └── span.icon-btn__badge             (visibile se ci sono notifiche)
├── main.home__main
│   ├── article.today-card
│   │   ├── div.today-card__top
│   │   │   ├── span.badge                   "Oggi"
│   │   │   └── span.today-card__duration    (dati: "≈ 70 min")
│   │   ├── h2.today-card__title             (dati: "Lower · forza")
│   │   ├── p.today-card__meta               (dati: "6 esercizi · 2 video")
│   │   └── button.btn.btn--primary          "Inizia allenamento"   ⚡ click → goTo('workout')
│   ├── section.home__stats                  
│   │   ├── div.stat.stat--ring
│   │   │   ├── svg.ring                     (dati: completate / totali)
│   │   │   └── span.stat__label             "Sedute blocco"
│   │   ├── div.stat
│   │   │   ├── span.stat__label             "Settimana"
│   │   │   └── p.stat__value                (dati: "3 di 5")
│   │   └── div.stat
│   │       ├── span.stat__label             "RPE medio"
│   │       └── p.stat__value                (dati: "7,8")
│   └── section.home__coach
│       ├── div.home__coach-avatar           (background logo)  aria-hidden="true"
│       ├── div.home__coach-info
│       │   ├── p.home__coach-name           "Vincenzo"
│       │   └── p.status
│       │       ├── span.status__dot         (classe .is-online / .is-offline)
│       │       └── span.status__text        (dati: "online")
│       ├── p.bubble                         (dati: ultimo messaggio, opzionale)
│       └── button.btn.btn--small            "Chat"   ⚡ click → goTo('chat')
└── nav.tabbar
    ├── button.tabbar__item.is-active  aria-current="page"   ⚡ click → goTo('home')
    │   ├── svg  aria-hidden="true"
    │   └── span.tabbar__label               "Home"
    ├── button.tabbar__item                  ⚡ click → goTo('workouts')     (svg manubrio + "Allenamenti")
    ├── button.tabbar__item                  ⚡ click → goTo('chat')         (svg fumetto + "Coach")
    └── button.tabbar__item                  ⚡ click → goTo('progress')     (svg grafico + "Progressi")

Allenamento live (workout)

section.screen.workout
├── header.workout__header
│   ├── button.icon-btn  aria-label="Esci dall'allenamento"   ⚡ click → conferma uscita → goTo('home')
│   │   └── svg  aria-hidden="true"
│   ├── p.workout__counter                   (dati: "Esercizio 1 di 6")
│   └── div.timer                            (visibile durante il recupero)
│       ├── svg  aria-hidden="true"
│       └── span.timer__value                (dati: "1:45", aggiornato ogni secondo)
├── div.progress-bar  role="progressbar"  aria-valuenow / aria-valuemax
│   └── span.progress-bar__segment  × N      (classe .is-done / .is-current)
├── main.workout__main
│   ├── h1.workout__exercise                 (dati: "Back squat")
│   ├── ul.targets                           (indicazioni del coach)
│   │   ├── li.chip                          (dati: "4 × 5")
│   │   ├── li.chip                          (dati: "RPE 8")
│   │   └── li.chip                          (dati: "+2,5 kg")
│   ├── p.coach-note                         (dati: nota del coach, se presente)
│   ├── section.video-upload
│   │   ├── label.video-upload__btn  for="video-input"
│   │   │   ├── svg  aria-hidden="true"
│   │   │   ├── span.video-upload__title     "Video esecuzione"
│   │   │   └── span.video-upload__hint      (dati: "Richiesto dal coach")
│   │   ├── input#video-input.visually-hidden  type="file"  accept="video/*"  capture="environment"
│   │   │                                    ⚡ change → leggi file → mostra anteprima
│   │   └── video.video-upload__preview      (vuoto, visibile dopo la scelta)
│   ├── form.sets                            ⚡ submit → salva serie corrente → avvia timer
│   │   ├── div.sets__head                   "#"  "Kg"  "Rip"  "RPE"
│   │   ├── fieldset.set-row.is-done  × N    (una per serie)
│   │   │   ├── legend.set-row__num          (dati: "1")
│   │   │   ├── input.set-row__input  type="number"  inputmode="decimal"  name="kg"   aria-label="Kg serie 1"
│   │   │   ├── input.set-row__input  type="number"  inputmode="numeric"  name="reps" aria-label="Ripetizioni serie 1"
│   │   │   ├── input.set-row__input  type="number"  min="1" max="10"     name="rpe"  aria-label="RPE serie 1"
│   │   │   └── span.set-row__check          (icona spunta, se .is-done)
│   │   ├── div.field
│   │   │   ├── label  for="note"            "Nota per il coach"
│   │   │   └── textarea#note  name="note"
│   │   ├── p.form-error  aria-live="polite"
│   │   └── button.btn.btn--primary  type="submit"   (dati: "Completa serie 3")
│   └── div.workout__nav
│       ├── button.btn.btn--ghost  type="button"     "Esercizio precedente"   ⚡ click
│       └── button.btn.btn--ghost  type="button"     "Esercizio successivo"   ⚡ click



2. Riepilogo e invio (summary)
section.screen.summary
├── header.summary__header
│   ├── div.summary__icon                    (spunta)  aria-hidden="true"
│   └── h1.summary__title                    "Allenamento completato"
├── main.summary__main
│   ├── dl.summary__stats                    
│   │   ├── div.stat
│   │   │   ├── dt.stat__label               "Durata"
│   │   │   └── dd.stat__value               (dati: "68′")
│   │   ├── div.stat                         "Volume"     (dati: "8.420 kg")
│   │   ├── div.stat                         "RPE medio"  (dati: "7,8")
│   │   └── div.stat                         "Video"      (dati: "2/2")
│   ├── ul.summary__list                     (esercizi svolti)
│   │   └── li.summary__item  × N
│   │       ├── span.summary__exercise       (dati: "Back squat")
│   │       ├── span.summary__detail         (dati: "4 × 5 · 102,5 kg")
│   │       └── span.summary__video          (icona, se c'è il video)
│   └── form.summary__form                   ⚡ submit → invia al coach → goTo('chat')
│       ├── fieldset.rating
│       │   ├── legend                       "Come ti sei sentito?"
│       │   └── label.rating__option  × 5
│       │       ├── input.visually-hidden  type="radio"  name="feeling"  value="1…5"
│       │       └── span                     "1"…"5"
│       ├── div.field
│       │   ├── label  for="final-note"      "Note finali per Vincenzo"
│       │   └── textarea#final-note  name="finalNote"
│       ├── p.form-error  aria-live="polite"
│       └── button.btn.btn--primary  type="submit"
│           ├── svg  aria-hidden="true"
│           └── span                         "Invia al coach"


3. Chat col coach (chat)
section.screen.chat
├── header.chat__header
│   ├── button.icon-btn  aria-label="Indietro"          ⚡ click → goTo('home')
│   ├── div.chat__avatar                     aria-hidden="true"
│   ├── div.chat__contact
│   │   ├── h1.chat__name                    "Vincenzo Chiefa"
│   │   └── p.status
│   │       ├── span.status__dot
│   │       └── span.status__text            (dati: "online")
│   └── button.icon-btn  aria-label="Videochiamata"     ⚡ click
├── main.chat__messages  aria-live="polite"
│   └── ol.messages
│       ├── li.msg.msg--system               (card allenamento inviato)
│       │   └── button.workout-card          ⚡ click → apri riepilogo di quella seduta
│       │       ├── span.workout-card__title (dati: "Lower · forza")
│       │       └── span.workout-card__meta  (dati: "Inviato · 6 esercizi")
│       ├── li.msg.msg--received             (messaggio del coach con video)
│       │   ├── figure.msg__video
│       │   │   ├── video  controls          (dati: src del video)
│       │   │   └── figcaption               (dati: "Back squat · serie 2")
│       │   ├── p.msg__text
│       │   │   ├── button.timestamp         (dati: "0:07")  ⚡ click → porta il video a 0:07
│       │   │   └── "Ginocchia in dentro…"   (dati: testo)
│       │   └── time.msg__time  datetime="…" (dati: "16:04")
│       ├── li.msg.msg--sent                 (messaggio dell'atleta)
│       │   ├── p.msg__text                  (dati: testo)
│       │   └── time.msg__time
│       └── li.msg.msg--typing               (visibile se il coach sta scrivendo)
└── form.composer                            ⚡ submit → invia messaggio → svuota campo
    ├── label.icon-btn  for="attach"  aria-label="Allega video"
    │   └── svg  aria-hidden="true"
    ├── input#attach.visually-hidden  type="file"  accept="video/*,image/*"   ⚡ change
    ├── label.visually-hidden  for="message" "Messaggio"
    ├── input#message  name="message"  placeholder="Messaggio"  autocomplete="off"
    └── button.icon-btn.icon-btn--primary  type="submit"  aria-label="Invia"
        └── svg  aria-hidden="true"

4. Allenamenti, il programma (workouts)
section.screen.workouts
├── header.workouts__header
│   ├── h1.workouts__title                   "Allenamenti"
│   └── p.workouts__block                    (dati: "Blocco di 5 settimane · settimana 3")
├── main.workouts__main
│   ├── div.week-tabs  role="tablist"
│   │   └── button.week-tabs__item  role="tab"  aria-selected  × 5   (dati: "S1"…"S5")
│   │                                        ⚡ click → mostra quella settimana
│   └── ul.sessions
│       └── li.session  × N                  (classe .is-todo / .is-sent / .is-reviewed)
│           └── button.session__btn          ⚡ click → todo: goTo('workout') / altrimenti: apri riepilogo
│               ├── span.session__day        (dati: "Mar")
│               ├── span.session__name       (dati: "Scheda A · Lower")
│               └── span.badge               (dati: "Da fare" / "Inviato" / "Revisionato")
└── nav.tabbar                               (uguale alla Home, attivo "Allenamenti")

5. Progressi (progress)
section.screen.progress
├── header.progress__header
│   └── h1.progress__title                   "Progressi"
├── main.progress__main
│   ├── div.field
│   │   ├── label  for="exercise-select"     "Esercizio"
│   │   └── select#exercise-select           ⚡ change → ridisegna il grafico
│   │       └── option  × N                  (dati: nomi esercizi)
│   ├── figure.chart
│   │   ├── svg.chart__svg  role="img"  aria-label  (dati: carichi S1…S5)
│   │   └── figcaption                       (dati: "Back squat: da 95 a 102,5 kg")
│   ├── dl.progress__stats                   
│   │   ├── div.stat                         "Record"         (dati: "102,5 kg")
│   │   ├── div.stat                         "RPE medio"      (dati: "7,8")
│   │   └── div.stat                         "Volume totale"  (dati: "38.200 kg")
│   └── table.progress__table                (la tua tabella del foglio, in versione leggibile)
│       ├── thead → tr → th  "Esercizio" | "S1" … "S5"
│       └── tbody → tr  × N → th (esercizio) + td × 5 (dati)
└── nav.tabbar                               (attivo "Progressi")

6. Dashboard coach, desktop (coach)
div.screen.coach                            
├── nav.coach__sidebar
│   ├── div.coach__logo                      aria-hidden="true"
│   └── ul.sidebar
│       └── li → button.sidebar__item  × 5   (Da revisionare, Atleti, Chat, Calendario, Impostazioni)
│                                            ⚡ click → goTo('coach-…')
│           ├── svg  aria-hidden="true"
│           ├── span.sidebar__label
│           └── span.badge                   (dati: contatore, es. "3")
└── main.coach__main
    ├── header.coach__header
    │   ├── h1.coach__title                  "Da revisionare"
    │   │   └── span.coach__count            (dati: "3")
    │   └── form.search  role="search"       ⚡ input → filtra atleti
    │       ├── label.visually-hidden  for="search"  "Cerca atleta"
    │       └── input#search  type="search"
    ├── ul.queue                             (coda delle sedute da revisionare)
    │   └── li → button.queue__item  × N     (.is-active sulla selezionata)   ⚡ click → carica seduta
    │       ├── span.queue__athlete          (dati: "Federico S.")
    │       └── span.queue__session          (dati: "Lower")
    └── article.review                       (la seduta selezionata)
        ├── header.review__header
        │   ├── h2.review__title             (dati: "Federico · Scheda A lower")
        │   ├── p.review__meta               (dati: "Completato martedì · 68 min")
        │   └── button.btn.btn--primary      "Segna come revisionato"   ⚡ click → aggiorna stato
        ├── section.review__progress
        │   ├── h3                           "Progressione · blocco 5 settimane"
        │   └── table.progress-table
        │       ├── thead → tr → th × 6      "Esercizio" | "S1"…"S5"   (th S3 con .is-current)
        │       └── tbody → tr × N → th + td × 5    (td vuote = settimane future)
        ├── dl.review__stats                 "Durata" | "RPE medio" | "Sensazione"
        ├── section.review__video
        │   ├── video  controls              (dati: src)
        │   └── p.review__video-caption      (dati: "Back squat · serie 2")
        ├── section.review__athlete-note
        │   ├── h3                           "Nota atleta"
        │   └── p                            (dati: testo, sempre textContent)
        └── form.feedback                    ⚡ submit → invia commento (con il minuto del video)
            ├── label  for="feedback"        "Feedback per Federico"
            ├── textarea#feedback  name="feedback"
            ├── input  type="hidden"  name="videoTime"   (dati: currentTime del video)
            ├── p.form-error  aria-live="polite"
            └── button.btn  type="submit"    "Invia feedback"

Schermata A:
section.screen.activation-code
├── header.activation-code__header
    │   ├── button.activation-code__btn type='button'   ⚡ 'click' goTo('login') border-radius 50% freccia con pseudo
    │ 
    └── span.activation-code__span Passo 1 di 2  
    └──div.activation-code__step-page.activation-code__step-page--active background-color green 
    └──div.activation-code__step-page background-color grey 
├──main.activation-code__main
      |_div.activation-code__logo-container
                |- img .activation-code__logo src 'logo-full-white_1.png' alt='logo-coach-vincenzo-chiefa'
    -div.activation-code__hero
            -h1.activation-code__title. attiva il tuo 
                  - activation-code__span#invito
            -p.activation-code__paragraph          ( Inserisci il tuo codice che ti ha inviato il tuo coach)
          -form.activation-code__check-code         ⚡ submit → invia codice attivazione (con controllo con quello assegnato dal coach all'utente)
                  |- activation-code__label label for='invite-code'      'Codice invito'
                  |- activation-code__input input#invite-code name='invite-code' type text  placeholder VDC -7F3K
                  |-p.activation-code__hero-p  Formato: VC - XXXX (in caso di errore cambia con codice non valido o già usato.controllalo o chiedine uno nuovo al coach aria-live='polite')
                  |-button.activation-code__hero-btn  text="Attiva codice"     submit → check form
├──footer.activation-code__footer
      |_p.activation-code__footer-paragraph Non hai un codice?
                |_span.activation-code__footer-span Chiedilo al tuo coach

Schermata B:
section.screen.activation-password
├── header.activation-password__header
    │   ├── button.activation-password__btn type='button'   ⚡ 'click' goTo('login') border-radius 50% freccia con pseudo
    │ 
    └── span.activation-password__span Passo 2 di 2  
    └──div.activation-password__step-page.activation-password__step-page--active background-color green 
    └──div.activation-password__step-page background-color grey 
├──main.activation-password__main
|                ├──div.activation-password__notification.confimation-container
                     ├──img.activation-password__logo src'logo-full_1' alt='immagine logo'
                     ├──h2.activation-password__subtitle   ( Ciao 'utente')
                     └──p.activation-password__text         ( Vincenzo Chiefa ti ha inviato)
    └──form.activation-password__form ù
               |- h1.activation-password__title           ( CREA LA TUA ) 
                          -span.activation-password__span   (PASSWORD)     
            -activation-password__label label for='email'      'Email' 
            - input.activation-password__input#email  type="text" readonly
          -p.activation-password__text ( Email sbagliata?Avvisa il coach.)
        -activation-password__label label for='input-password'      'Password'
      -input.activation-password__input#input-password type='password'  (almeno otto caratteri come controllo un numero ed una lettera maiuscola) ⚡('input' fx per checks) name='input-password'
        - p.activation-password__text (text 'Almeno 8 caratteri)p.activation-password__text--passed(::before \1F5F9)aria-live='polite'
        -p.activation-password__text (text 'Un numero)p.activation-password__text--passed(::before \1F5F9)aria-live='polite'
      └──p.activation-password__text (text 'Una lettera maiuscola)p.activation-password__text--passed(::before \1F5F9)aria-live='polite'
    --activation-password__label label for='password-confirmation'      'Conferma password' 
            - input.activation-password__inputconfirmation#password-confirmation  type="password" name='password-confirmation'
    - p.activation-password__error (text 'Le due password non coincidono)aria-live='polite' che esce solo quando le due password non coincidono
| | -button.activation-password__btn type='submit'#password-activation text='Inizia ad allenarti'   ⚡submit -> aggiunta alla chiave dell'oggetto utente goTo('home')
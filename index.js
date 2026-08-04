// =========================================================
// CONFIGURAZIONE E INIZIALIZZAZIONE FIREBASE
// =========================================================
const firebaseConfig = {
  apiKey: "AIzaSyAIh13ACMcJwM3aQSoAL9T8PHa0tgdXQaQ",
  authDomain: "my-birthday-c655e.firebaseapp.com",
  databaseURL: "https://my-birthday-c655e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "my-birthday-c655e",
  storageBucket: "my-birthday-c655e.firebasestorage.app",
  messagingSenderId: "41671293257",
  appId: "1:41671293257:web:6e94e53376b0402629c298",
  measurementId: "G-JH6LPVBT4N"
};

// Avvia Firebase e il Realtime Database
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// VERIFICA CONNESSIONE DATABASE
db.ref(".info/connected").on("value", (snap) => {
  if (snap.val() === true) {
    console.log("%c🔥 Database collegato correttamente!", "color: #22c55e; font-weight: bold; font-size: 14px;");
  } else {
    console.log("%c⚠️ Connessione al database in corso...", "color: #f59e0b; font-weight: bold;");
  }
});

gsap.registerPlugin(ScrollTrigger);

let speed = 100;
let height = document.querySelector("svg").getBBox().height;

gsap.set("#h2-1", { opacity: 0 });
gsap.set("#bg_grad", { attr: { cy: "-50" } });
gsap.set(["#dinoL", "#dinoR"], { y: 80 });
gsap.set("#dinoL", { x: -10 });

// Regolazione dinamica della fluidità e velocità per mobile
const isMobile = window.innerWidth <= 768;
const defaultScrub = isMobile ? 0.3 : 0.8; 

const mm = gsap.matchMedia();
mm.add("(max-width: 1922px)", () => {
    gsap.set(["#cloudStart-L", "#cloudStart-R"], { x: 10, opacity: 1 });
});

/* =========================================================
   ANIMAZIONE TESTI / SLIDES (Accelerata)
   ========================================================= */

let storyTL = gsap.timeline();

ScrollTrigger.create({
    animation: storyTL,
    trigger: ".scrollElement",
    start: "top top",
    end: "bottom bottom",
    scrub: defaultScrub
});

// Slides: Durata ridotta da 2s a 1s e pause diminuite da 2s a 0.5s per massima fluidità
storyTL.to("#slide1", { opacity: 1, y: 0, duration: 1 })
       .to("#slide1", { opacity: 0, y: -20, duration: 1 }, "+=0.5");

storyTL.to("#slide2", { opacity: 1, y: 0, duration: 1 })
       .to("#slide2", { opacity: 0, y: -20, duration: 1 }, "+=0.5");

storyTL.to("#slide3", { opacity: 1, y: 0, duration: 1 })
       .to("#slide3", { opacity: 0, y: -20, duration: 1 }, "+=0.5");

storyTL.to("#slide4", { opacity: 1, y: 0, duration: 1 })
       .to("#slide4", { opacity: 0, y: -20, duration: 1 }, "+=0.5");

storyTL.to("#slide5", { opacity: 1, y: 0, duration: 1 })
       .to("#slide5", { opacity: 0, y: -20, duration: 1 }, "+=0.5");

storyTL.to("#slide6", { opacity: 1, y: 0, duration: 1 })
       .to("#slide6", { opacity: 0, y: -20, duration: 1 }, "+=0.5");

storyTL.to("#slide7", { opacity: 1, y: 0, duration: 1 });


/* =========================================================
   ANIMAZIONE SFONDO SVG (Scrub ridotto per reattività)
   ========================================================= */

/* SCENE 1 */
let scene1 = gsap.timeline();
ScrollTrigger.create({
    animation: scene1,
    trigger: ".scrollElement",
    start: "top top",
    end: "45% 100%",
    scrub: defaultScrub
});

scene1.to("#h1-1", { y: 3 * speed, x: 1 * speed, scale: 0.9, ease: "power1.in" }, 0);
scene1.to("#h1-2", { y: 2.6 * speed, x: -0.6 * speed, ease: "power1.in" }, 0);
scene1.to("#h1-3", { y: 1.7 * speed, x: 1.2 * speed }, 0.03);
scene1.to("#h1-4", { y: 3 * speed, x: 1 * speed }, 0.03);
scene1.to("#h1-5", { y: 2 * speed, x: 1 * speed }, 0.03);
scene1.to("#h1-6", { y: 2.3 * speed, x: -2.5 * speed }, 0);
scene1.to("#h1-7", { y: 5 * speed, x: 1.6 * speed }, 0);
scene1.to("#h1-8", { y: 3.5 * speed, x: 0.2 * speed }, 0);
scene1.to("#h1-9", { y: 3.5 * speed, x: -0.2 * speed }, 0);
scene1.to("#cloudsBig-L", { y: 4.5 * speed, x: -0.2 * speed }, 0);
scene1.to("#cloudsBig-R", { y: 4.5 * speed, x: -0.2 * speed }, 0);
scene1.to("#cloudStart-L", { x: -300 }, 0);
scene1.to("#cloudStart-R", { x: 300 }, 0);
scene1.to("#info", { y: 8 * speed }, 0);

/* Bird */
gsap.fromTo(
    "#bird",
    { opacity: 1 },
    {
        y: -250,
        x: 800,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".scrollElement",
            start: "15% top",
            end: "60% 100%",
            scrub: defaultScrub,
            onEnter: function () {
                gsap.to("#bird", { scaleX: 1, rotation: 0 });
            },
            onLeave: function () {
                gsap.to("#bird", { scaleX: -1, rotation: -15 });
            }
        }
    }
);

/* Clouds */
let clouds = gsap.timeline();
ScrollTrigger.create({
    animation: clouds,
    trigger: ".scrollElement",
    start: "top top",
    end: "70% 100%",
    scrub: defaultScrub
});

clouds.to("#cloud1", { x: 500 }, 0);
clouds.to("#cloud2", { x: 1000 }, 0);
clouds.to("#cloud3", { x: -1000 }, 0);
clouds.to("#cloud4", { x: -700, y: 25 }, 0);

/* Sun motion Animation */
let sun = gsap.timeline();
ScrollTrigger.create({
    animation: sun,
    trigger: ".scrollElement",
    start: "1% top",
    end: "2150 100%",
    scrub: defaultScrub
});

sun.fromTo("#bg_grad", { attr: { cy: "-50" } }, { attr: { cy: "330" } }, 0);
sun.to("#bg_grad stop:nth-child(2)", { attr: { offset: "0.15" } }, 0);
sun.to("#bg_grad stop:nth-child(3)", { attr: { offset: "0.18" } }, 0);
sun.to("#bg_grad stop:nth-child(4)", { attr: { offset: "0.25" } }, 0);
sun.to("#bg_grad stop:nth-child(5)", { attr: { offset: "0.46" } }, 0);
sun.to("#bg_grad stop:nth-child(6)", { attr: { "stop-color": "#FF9171" } }, 0);

/* SCENE 2 */
let scene2 = gsap.timeline();
ScrollTrigger.create({
    animation: scene2,
    trigger: ".scrollElement",
    start: "15% top",
    end: "40% 100%",
    scrub: defaultScrub
});

scene2.fromTo("#h2-1", { y: 500, opacity: 0 }, { y: 0, opacity: 1 }, 0);
scene2.fromTo("#h2-2", { y: 500 }, { y: 0 }, 0.1);
scene2.fromTo("#h2-3", { y: 700 }, { y: 0 }, 0.1);
scene2.fromTo("#h2-4", { y: 700 }, { y: 0 }, 0.2);
scene2.fromTo("#h2-5", { y: 800 }, { y: 0 }, 0.3);
scene2.fromTo("#h2-6", { y: 900 }, { y: 0 }, 0.3);

/* Bats */
gsap.set("#bats", { transformOrigin: "50% 50%" });
gsap.fromTo(
    "#bats",
    { opacity: 1, y: 400, scale: 0 },
    {
        y: 20,
        scale: 0.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".scrollElement",
            start: "40% top",
            end: "70% 100%",
            scrub: defaultScrub,
            onEnter: function () {
                gsap.utils.toArray("#bats path").forEach((item, i) => {
                    gsap.to(item, {
                        scaleX: 0.5,
                        yoyo: true,
                        repeat: 9,
                        transformOrigin: "50% 50%",
                        duration: 0.15,
                        delay: 0.7 + i / 10
                    });
                });
                gsap.set("#bats", { opacity: 1 });
            }
        }
    }
);

/* Sun increase */
let sun2 = gsap.timeline();
ScrollTrigger.create({
    animation: sun2,
    trigger: ".scrollElement",
    start: "2000 top",
    end: "5000 100%",
    scrub: defaultScrub
});

sun2.to("#sun", { attr: { offset: "1.4" } }, 0);
sun2.to("#bg_grad stop:nth-child(2)", { attr: { offset: "0.7" } }, 0);
sun2.to("#sun", { attr: { "stop-color": "#ffff00" } }, 0);
sun2.to("#lg4 stop:nth-child(1)", { attr: { "stop-color": "#623951" } }, 0);
sun2.to("#lg4 stop:nth-child(2)", { attr: { "stop-color": "#261F36" } }, 0);
sun2.to("#bg_grad stop:nth-child(6)", { attr: { "stop-color": "#45224A" } }, 0);

/* Transition (Scene2 to Scene3) */
gsap.set("#scene3", { y: height - 40, visibility: "visible" });
let sceneTransition = gsap.timeline();
ScrollTrigger.create({
    animation: sceneTransition,
    trigger: ".scrollElement",
    start: "60% top",
    end: "bottom 100%",
    scrub: defaultScrub
});

sceneTransition.to("#h2-1", { y: -height - 100, scale: 1.5, transformOrigin: "50% 50%" }, 0);
sceneTransition.to("#bg_grad", { attr: { cy: "-80" } }, 0.0);
sceneTransition.to("#bg2", { y: 0 }, 0);

/* Scene 3 */
let scene3 = gsap.timeline();
ScrollTrigger.create({
    animation: scene3,
    trigger: ".scrollElement",
    start: "70% 50%",
    end: "bottom 100%",
    scrub: defaultScrub
});

scene3.fromTo("#h3-1", { y: 300 }, { y: -550 }, 0);
scene3.fromTo("#h3-2", { y: 800 }, { y: -550 }, 0.03);
scene3.fromTo("#h3-3", { y: 600 }, { y: -550 }, 0.06);
scene3.fromTo("#h3-4", { y: 800 }, { y: -550 }, 0.09);
scene3.fromTo("#h3-5", { y: 1000 }, { y: -550 }, 0.12);
scene3.fromTo("#stars", { opacity: 0 }, { opacity: 0.5, y: -500 }, 0);
scene3.to("footer", { opacity: 1 }, 0.3);
scene3.to("#bg2-grad", { attr: { cy: 600 } }, 0);
scene3.to("#bg2-grad", { attr: { r: 500 } }, 0);

/* Falling star */
gsap.set("#fstar", { y: -400 });
let fstarTL = gsap.timeline();
ScrollTrigger.create({
    animation: fstarTL,
    trigger: ".scrollElement",
    start: "4200 top",
    end: "6000 bottom",
    scrub: defaultScrub,
    onEnter: function () { gsap.set("#fstar", { opacity: 1 }); },
    onLeave: function () { gsap.set("#fstar", { opacity: 0 }); }
});
fstarTL.to("#fstar", { x: -700, y: -250, ease: "power2.out" }, 0);

// Reset scroll
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

/* =========================================================
   EFFETTO CUORI
   ========================================================= */
function spawnHearts(event) {
    if (!event || !event.currentTarget) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const totalHearts = 14;

    for (let i = 0; i < totalHearts; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.innerHTML = `
                <svg viewBox="0 0 24 24" fill="#ffffff" width="100%" height="100%">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
            `;

            const offsetX = (Math.random() - 0.5) * 40;
            const offsetY = (Math.random() - 0.5) * 20;

            heart.style.left = `${centerX + offsetX}px`;
            heart.style.top = `${centerY + offsetY}px`;

            const size = Math.floor(Math.random() * 12) + 16;
            const drift = (Math.random() - 0.5) * 120;
            const rotation = (Math.random() - 0.5) * 50;

            heart.style.width = `${size}px`;
            heart.style.height = `${size}px`;
            heart.style.setProperty('--drift', `${drift}px`);
            heart.style.setProperty('--rotation', `${rotation}deg`);

            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 1800);
        }, i * 40);
    }
}

/* =========================================================
   LOGICA DEL GUESTBOOK E SALVATAGGIO
   ========================================================= */

let tempGuestName = ""; 
let selectedChoice = ""; 
const DEV_PIN = "cazzu cazzu"; 
let devClickCount = 0;
let devClickTimer = null;
let msgTimeout = null;

function validateNameInput(rawValue) {
    if (!rawValue) return false;
    const words = rawValue.trim().split(/\s+/).filter(word => word.length > 0);
    return words.length >= 2;
}

function showTempMessage(text, isError = false) {
    const tempMsg = document.getElementById('temp-saved-msg');
    if (!tempMsg) return;

    if (msgTimeout) clearTimeout(msgTimeout);

    tempMsg.innerHTML = text;
    tempMsg.classList.remove('d-none');
    tempMsg.className = isError ? 'msg-underneath error-msg' : 'msg-underneath success-msg';

    msgTimeout = setTimeout(() => {
        tempMsg.classList.add('d-none');
    }, 2000);
}

function saveToDevList(name, choice) {
    let list = JSON.parse(localStorage.getItem('dev_responses_list')) || [];
    const existingIndex = list.findIndex(item => item.name.toLowerCase() === name.toLowerCase());

    const updatedEntry = {
        name: name,
        choice: choice,
        date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    if (existingIndex !== -1) {
        list[existingIndex] = updatedEntry;
    } else {
        list.push(updatedEntry);
    }

    localStorage.setItem('dev_responses_list', JSON.stringify(list));
}

function tryAutoSave() {
    const guestInput = document.getElementById('guest-input');
    const nameValue = guestInput ? guestInput.value.trim() : "";

    if (validateNameInput(nameValue) && selectedChoice !== "") {
        saveToDevList(nameValue, selectedChoice);
        showTempMessage(`✅ Registrato: <strong>${nameValue}</strong>`);
        return true;
    }
    return false;
}

/* =========================================================
   INIZIALIZZAZIONE EVENTI ALLA CARICAMENTO PAGINA (DOM)
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
    const guestInput = document.getElementById('guest-input');
    const choiceButtons = document.querySelectorAll('.choice-btn');
    const devTrigger = document.getElementById('dev-secret-trigger');

    if (guestInput) {
        guestInput.addEventListener('input', () => {
            guestInput.classList.remove('input-error');
        });

        guestInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const nameValue = guestInput.value.trim();

                if (!validateNameInput(nameValue)) {
                    guestInput.classList.add('input-error');
                    showTempMessage("❌ Inserisci anche il cognome!", true);
                    return;
                }

                guestInput.blur();

                if (selectedChoice !== "") {
                    tryAutoSave();
                } else {
                    showTempMessage(`👤 Nome: <strong>${nameValue}</strong>, registrato`);
                }
            }
        });

        guestInput.addEventListener('blur', () => {
            const nameValue = guestInput.value.trim();
            if (validateNameInput(nameValue) && selectedChoice !== "") {
                tryAutoSave();
            }
        });
    }

    choiceButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            selectedChoice = btn.innerText.trim();

            choiceButtons.forEach(b => b.classList.remove('selected-choice'));
            btn.classList.add('selected-choice');

            const nameValue = guestInput ? guestInput.value.trim() : "";

            if (validateNameInput(nameValue)) {
                tryAutoSave();
                if (selectedChoice.toLowerCase() === 'sì' || selectedChoice.toLowerCase() === 'si') {
                    spawnHearts(e);
                }
            } else {
                if (guestInput) {
                    guestInput.focus();
                    guestInput.classList.add('input-error');
                }
                showTempMessage("Scrivi Nome e Cognome per confermare!", true);
            }
        });
    });

    if (devTrigger) {
        devTrigger.addEventListener('click', () => {
            devClickCount++;
            if (devClickCount === 4) {
                clearTimeout(devClickTimer);
                devClickCount = 0;
                checkPinAndOpenDev();
            } else {
                clearTimeout(devClickTimer);
                devClickTimer = setTimeout(() => { devClickCount = 0; }, 1000);
            }
        });
    }
});

/* =========================================================
   FUNZIONALITÀ PANNELLO DEVELOPER
   ========================================================= */
function checkPinAndOpenDev() {
    const inputPin = prompt("[DEV MODE] Inserisci il PIN di accesso:");
    if (inputPin === DEV_PIN) {
        listenToDevList(); // Avvia l'ascolto in tempo reale da Firebase
        const devModal = document.getElementById('dev-modal');
        if (devModal) devModal.classList.remove('d-none');
    } else if (inputPin !== null) {
        alert("PIN Errato!");
    }
}

// ASCOLTA E MOSTRA I DATI DA FIREBASE IN TEMPO REALE
function listenToDevList() {
    const listContainer = document.getElementById('dev-guest-list');
    if (!listContainer) return;

    // db.ref('responses') legge il nodo del database dove salviamo i voti
    db.ref('responses').on('value', (snapshot) => {
        listContainer.innerHTML = "";
        const data = snapshot.val();

        if (!data) {
            listContainer.innerHTML = "<li style='justify-content: center; color: #a1a1aa;'>Nessuna risposta ancora registrata nel database.</li>";
            return;
        }

        // Cicla tutte le risposte presenti su Firebase
        Object.keys(data).forEach((key) => {
            const item = data[key];
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="dev-item-info">
                    <span><strong>${item.name}</strong> (${item.choice})</span>
                    <small style="color:#a1a1aa; font-size:0.75rem;">${item.date}</small>
                </div>
                <div class="dev-item-actions">
                    <button class="btn-delete-item" onclick="deleteDevItem('${key}')" title="Elimina risposta">
                        <svg class="trash-icon" viewBox="0 0 24 24">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            <line x1="10" y1="11" x2="10" y2="17"></line>
                            <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                    </button>
                </div>
            `;
            listContainer.appendChild(li);
        });
    });
}

let pendingChoice = null;

// FUNZIONE PER SELEZIONARE LA SCELTA (SÌ / NO)
function selectOption(button) {
    const choiceText = button.innerText.trim();
    pendingChoice = choiceText; // Memorizziamo la scelta effettuata

    // Evidenziamo visivamente il pulsante cliccato (facoltativo ma molto utile)
    document.querySelectorAll('.choice-btn').forEach(btn => btn.classList.remove('active', 'selected-choice'));
    button.classList.add('active', 'selected-choice');

    // Recuperiamo l'input del nome
    const nameInput = document.getElementById('guest-name-input') || document.querySelector('input[type="text"]');
    const guestName = nameInput ? nameInput.value.trim() : "";

    // SE IL NOME NON È ANCORA STATO INSERITO:
    if (!guestName) {
        alert(`Hai selezionato "${choiceText}". Ora inserisci Nome e Cognome per confermare!`);
        if (nameInput) nameInput.focus(); // Porta automaticamente il cursore nel campo nome
        return;
    }

    // SE IL NOME C'È GIÀ: Invia subito a Firebase
    submitFirebaseResponse(guestName, choiceText);
}

// FUNZIONE DI INVIO EFFETTIVO SU FIREBASE
function submitFirebaseResponse(guestName, choiceText) {
    const guestId = guestName.toLowerCase().replace(/[^a-z0-9]/g, '_');
    const userRef = db.ref('responses/' + guestId);

    userRef.once('value').then((snapshot) => {
        const exists = snapshot.exists();

        return userRef.set({
            name: guestName,
            choice: choiceText,
            date: new Date().toLocaleString('it-IT')
        }).then(() => {
            if (exists) {
                alert(`La tua risposta è stata modificata in "${choiceText}"!`);
            } else {
                alert(`Grazie ${guestName}! La tua risposta "${choiceText}" è stata salvata.`);
            }
        });
    }).catch((error) => {
        console.error("Errore Firebase:", error);
        alert("Si è verificato un errore durante il salvataggio. perfavore Riprova!");
    });
}

function deleteDevItem(key) {
    if (confirm("Vuoi davvero eliminare questo voto dal database?")) {
        db.ref('responses/' + key).remove();
    }
}

function closeDevModal() {
    const devModal = document.getElementById('dev-modal');
    if (devModal) devModal.classList.add('d-none');
}

function clearDevList() {
    if (confirm("Sei sicuro di voler cancellare TUTTA la lista degli invitati dal Database?")) {
        db.ref('responses').remove();
    }
}
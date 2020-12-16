/*
Funzionalitá:
La nostra todo list avrá alcune tasks di default predefinite
L'utente puó inserire nuove tasks
Cliccando sulla "X" l'utente puó cancellare una task
Se non ci sono piu task nella lista, mostrate un messaggio 
tipo "Nulla da fare"
Quando l'utente inserisce una task ha due modi per salvarla: 
o preme il pulsante add o preme il taso Enter della tastiera.
Attenzione: l'utente non deve inserire tasks vuote ma almeno 
un tot di caratteri.
*/

let root = new Vue ({
    el: "#root",
    data: {
        frasi: [
            "Do something",
            "Do else",
            "Do something else"
        ],
        message: "",
        message2: "Nulla da fare"
    },
    methods: {
        newFrase(){
            if (this.message.length > 3) {
                this.frasi.push(this.message);                
            }
        },
        removeFrase(){
            console.log(this);
        }
    },
    created(){

    }
});
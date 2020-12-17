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
***************
*****BONUS*****
***************
Istruzioni Bonus (da mettere in una cartella bonus):
L'utente vuole poter modificare una task giá inserita
ma vuole anche poter indicare che la task é stata completata
inoltre se una task é stata completa allora vuole che venga 
inserita in un'altra colonna tipo "tasks completate"
ah non é finita, dice che quando cancella una task, 
non vuole che questa venga subito rimossa, ma vuole che 
resti visibile ma venga spostata in una colonna tipo "cestino"
si, l'utente é un rompi scatole, dice infine che vuole poter 
rimuovere tutte le tasks nel cestino cliccando su un pulsante 
tipo "svuota cestino"
Il nostro utente per ora sembra non avere altre richieste... 
ma chissá se dopo gli viene in mente che vuole anche 
poter rimettere una task cancellata nella lista di tasks da fare, 
magari l'ha  cancellata per sbaglio
*/

let root = new Vue ({
    el: "#root",
    data: {
        frasi: [
            "Do something",
            "Do else",
            "Do something else"
        ],
        frasiCompletate: [

        ],
        recycleBin: [

        ],
        message: "",
        message2: "Nulla da fare",
        logo: "assets/img/logo.png"
    },
    methods: {
        newFrase(){
            if (this.message.length > 3) {
                this.frasi.unshift(this.message);
            }
        },
        completeFrase(index){
            this.frasiCompletate.push(this.frasi[index]);
            Vue.delete(this.frasi, index);
        },
        deletedFrase(index){
            this.recycleBin.push(this.frasiCompletate[index]);
            Vue.delete(this.frasiCompletate, index);
        },
        restoreFrase(index){
            this.frasiCompletate.push(this.recycleBin[index]);
            Vue.delete(this.recycleBin, index);
        },
        removeFrase(index){
            console.log(index);
            Vue.delete(this.recycleBin, index);
        },
        recycleBinF(){
            while(this.recycleBin.length > 0){
                Vue.delete(this.recycleBin, 0);
            }
        }
    }
});
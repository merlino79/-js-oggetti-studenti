// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell’oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.




var studente = {
    nome: 'Alessandro',
    cognome: 'Ciancio',
    work: 'studente boolean, e cuoco in nave',
    telefono: 3477595436,
    age: 41,


}



//console.log(users);

// ciclo in 

for (var key in studente) {

    var datoStudente = studente[key];
    console.log(key + " : " + datoStudente); //per visione in consol.log


    document.getElementById('exit').innerHTML += "<li>" + key + ": " + datoStudente + "</li> ";






};




//ciclo in con stampa in html

console.log('<----------------->')

// creazione studenti
var studenti = [{
        nome: 'serena',
        cognome: 'Dilauro',
        eta: 45,



    },
    {
        nome: 'fransco',
        cognome: 'Amesondola',
        eta: 25,
    },
    {
        nome: 'marco',
        cognome: 'Chiarentin',
        eta: 40,
    },
    {
        nome: 'Miriana',
        cognome: 'Morandi',
        eta: 37,

    },

];

var nuovoNome = prompt('inserisci il nome');
var nuovoCognome = prompt('inserisci il cognome');
var nuovoEta = parseInt(prompt('inserire eta'));

addUtente(studenti, nuovoNome, nuovoCognome, nuovoEta);




console.log(studenti);

//ciclo for of e in 

for (var datiStudenti of studenti) {
    for (key2 in datiStudenti) {
        console.log(
            key2 + ' : ' + datiStudenti[key2]);
    }
    var nuovoDato = datiStudenti[key2];
    document.getElementById('lista').innerHTML += "<li>" + nuovoDato +
        "</li> ";


};


//funzione

function addUtente(target, nome, cognome, eta, ) {
    target.push({
        nome: nome,
        cognome: cognome,
        eta: eta,

    });




}
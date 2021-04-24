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

for (var key in studente) {

    var datoStudente = studente[key];
    console.log(key + " : " + datoStudente); //per visione in consol.log


    document.getElementById('exit').innerHTML += "<li>" + key + ": " + datoStudente + "</li> ";






};
console.log('<----------------->')

var studenti = [{
        nome: 'serena',
        cognome: 'Dilauro',
        eta: 45,



    },
    {
        nome: 'fransco',
        cognome: 'Amendola',
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
        eta: 45,

    },

];



console.log(studenti);

for (var datiStudenti of studenti) {
    for (key2 in datiStudenti) {
        console.log(
            key2 + ' : ' + datiStudenti[key2]);
    }
};
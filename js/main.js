/** 
- Visualizzare in pagina 5 numeri casuali. 
- Da lì parte un timer di 30 secondi.
- Dopo 30 secondi l’utente deve inserire, uno alla volta, i 
numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti 
e quali dei numeri da indovinare sono stati individuati.*/



 //Recupero dal Dom gli elementi 
 //Genero 5 numeri random da inserire nel div.result-output
 //Stampo su display i numeri per 30sec => in seguito li rendo "none" 
 //chiedo all' utente per 5 volte di inserire i numeri da 1-100
 //dico all'utente con un allert quanti numeri ha memorizzato 

//Genero 5 numeri random da inserire nel div.result-output
for ( let i = 1; i <= 5; i++){
    document.getElementById(`num-${i}`).innerHTML += ` : ${randomInt(1, 1000)}`;;
}
let resultOutput = document.querySelector('#result-output');
let userCorrectAnswers = 0 ;

setTimeout(function() {
        document.querySelector('#numbers-group').classList.add('d-none');
        for (let i = 1; i <= 5; i++){
                let userAnswer;
 	    while(isNaN(userAnswer)){
 	            userAnswer = parseInt(prompt(`Inserisci il numero ${i} `));
		}
    if (document.getElementById(`num-${i}`).innerHTML = userAnswer){
        userCorrectAnswers++;
        resultOutput.innerHTML += `<span class="d-none"> Numero indovinato dall'utente ${i}. </span>`;
        }
    }
    resultOutput.innerHTML += `l'utente ha indovinato ${userCorrectAnswers} numbers.`;
    }, 1000);



/**Function that creates a random integer between two values
 * 
 * @param {*} min minimum value of the random integer 
 * @param {*} max maximum value of the random integer 
 * @returns a random integer between a min and a max value
 */
function randomInt (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
} 


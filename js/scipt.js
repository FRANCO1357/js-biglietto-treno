// 1. chiedere i chilometri da percorrere
// 2. chiedere l'età
// 3. calcolare il prezzo del biglietto in base ai chilometri
// 4. calcolare lo sconto in base all'età
// 5. sottrarre lo sconto al prezzo del biglietto
// 6. comunicare il prezzo del biglietto


const km = parseInt(prompt('quanti chilometri devi percorrere?', '10'));
console.log(km);

const age = parseInt(prompt('quanti anni hai?', '20'));
console.log(age);

const price = (km * 0.21);
console.log(price);

// VALIDAZIONE

let finalPrice = ''

if (isNaN(km) || isNaN(age)){
    alert('I valori inseriti non sono corretti')
} else {

if (age < 18){
    finalPrice = (price / 100 * 80).toFixed(2);
    console.log(finalPrice);    
} else if (age > 65) {
    finalPrice = (price / 100 * 60).toFixed(2);
    console.log(finalPrice);  
} else {
    finalPrice = price;
    console.log(finalPrice);  
}

}

const paragraph = document.getElementById('final-price');

paragraph.innerHTML = `Questo è il prezzo del tuo biglietto: <strong>${finalPrice}</strong> €`;
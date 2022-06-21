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

if (isNaN(km) || isNaN(age)){
    alert('I valori inseriti non sono corretti')
} else {

if (age < 18){
    const finalPrice = price / 100 * 80;
    console.log(finalPrice);    
} else if (age > 65) {
    const finalPrice = price / 100 * 60;
    console.log(finalPrice);  
} else {
    const finalPrice = price;
    console.log(finalPrice);  
}

}
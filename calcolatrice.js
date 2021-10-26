// definisco le arrow funtion per ottenere le operazioni della calcolatrice

const sum = (numOne, numTwo) => numOne + numTwo;
const sott = (numOne, numTwo) => numOne - numTwo;
const molt = (numOne, numTwo) => numOne * numTwo;
const div = (numOne, numTwo) => numOne / numTwo;

// definisco la funzione per la calcolatrice

function calculator(operation, numbers) {
    let totOperation = 0;
    totOperation = operation (...numbers);
    return totOperation
}

// definisco i dati input di operazione e numeri dati dall'utente

inputOperation = prompt("scegli l'operazione");
inputNum = prompt("inserisci due numeri");

// definisco che i numeri input devono essere separati da virgole e inseriti come stringhe dentro un array
const numbers = inputNum.split(",");
const finalNumbers = [];

for(x of numbers) {
    finalNumbers.push(parseInt(x));
}


//definisco i tipi di operazioni che possono essere eseguiti dalla calcolatrice

if(inputOperation === "somma" || inputOperation === "+" ) {
    calculator(sum, finalNumbers);
} else if(inputOperation === "sottrazione" || inputOperation === "-" ) {
    calculator(sott, finalNumbers);

}else if(inputOperation === "moltiplicazione" || inputOperation === "*" ) {
    calculator(molt, finalNumbers);
} else if(inputOperation === "divisione" || inputOperation === "/" ) {
    calculator(div, finalNumbers);
}
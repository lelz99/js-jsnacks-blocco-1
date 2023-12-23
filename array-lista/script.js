const fruit = [
    'banana',
    'mela',
    'pera',
    'ciliegia',
    'arancia',
    'mandarino',
    'cocomero',
    'limone',
    'fragola'
]
console.log(fruit);
const peach = 'pesca';

fruit.push(peach);
console.log(fruit);

const watermelon = 'cocomero';
text = '';

let foundFruit = false;
for(i = 0; i < fruit.length && !foundFruit; i++){

    console.log(fruit[i]);
    console.log(watermelon);

    if (watermelon === fruit[i]){
        foundFruit = true;
        text ='Trovato! Devo solo preparare il cocktail.';
    } else {
        text = 'Oh no, devo uscire a comprare il cocomero!';
    }
    
    console.log(foundFruit);
    console.log('-------------------------------');
}
console.log(text);
const numbers = [];
const totNumbers = parseInt(prompt('Quanti numeri vuoi ?', 10));

for (let i = 0; i < totNumbers; i++){
    const randomNumbers = Math.floor(Math.random() *100) +1;
    numbers.push(randomNumbers);
}
console.log(numbers);

const last = numbers.slice(-5) ;
console.log(last);


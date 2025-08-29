


const myArray: (number | string)[] = [1, 2, 3, 4, 5, 6];  // el caracter | significa o

myArray.push('11');

console.log(myArray);

for (const myNumber of myArray){
    console.log(myNumber + ': algo')
}
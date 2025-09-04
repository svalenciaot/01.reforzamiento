const characterNames = ['Goku', 'Vegeta', 'Trunks'];


const[ ,, p3 ] = characterNames;    //los arreglos se destructuran con [] la , significa que se salta elementos del array, p3 devuelve trunks

console.log ({ p3 });


const returnsArray = () => {
    return ['abc', 123] as const; //as const fija que el 1er elemento siempre va a ser string y el 2do siempre number
}

const [letras, numeros] = returnsArray();

console.log(numeros + 100);
console.log(letras + 100);

const useState = (value:string) => {
    return [value, 
        (newValue:string)=>{
           console.log(newValue); 
        },
    ] as const;
}

const [name, setName] = useState('Goku');
console.log(name);       // Goku
setName('Vegeta');       // Imprime "Vegeta"


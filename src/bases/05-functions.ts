function greet(name: string) {
    return `Hola ${ name}`;
}


const greet2 = (name:string) => `Hola ${ name}`;



const message = greet('Goku');
const message2 = greet2('Krillin');


console.log(message, message2);
console.log(message2);



interface User {
    uid: string;
    username: string;
}

function getUser(): User {
    return{
        uid:'ABC-123',
        username: 'camo45',
    }
};

const getUser2 = () => 
     ({
        uid:'ABC-123',
        username: 'camo45',
    });


const user = getUser();
const user2 = getUser2();
console.log(user, user2);



const myNumbers = [1, 2, 3, 4, 5];

// callback es una función anónima que se pasa como argumento a un métoso
//callback con función de flecha
myNumbers.forEach( (value) => {
    console.log({value});
})


// callback con función tradicional
myNumbers.forEach( function (value) {
    console.log({value});
})

// callback con función tradicional
myNumbers.forEach(console.log);

interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address?: {
        postalCode: number;
        city: string;
    }
}


const ironman: Person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    //address: {
        //postalCode: 12345,
        //city: 'New York',
        //}
};

const spiderman: Person ={
    firstName: 'Peter',
    lastName: "Parker",
    age: 16,
}

//const spiderman = {...ironman}; //rompe la relación, sino los cambios en spiderman afectan a ironman
//const spiderman = structuredClone(ironman);  //rompe la relación, incluso los objetos anidados

//spiderman.firstName = 'Peter';
//spiderman.lastName = 'Parker';
//spiderman.address.city = 'Queens';

console.log(ironman, spiderman);






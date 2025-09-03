

const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman',
};

//const name = person.name;
//const age = person.age;
//const key = person.key;

const{ name: ironmanName, age, key } = person; // desestructuración de person, se renombra name a ironmanName

console.log({ironmanName, age, key});

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
};


const useContext = (hero: Hero) => {
    const { key, name, age, rank } = hero  //desestructuración de hero. hero es de tipo Hero
    return {
        keyName: key,
        user: {
            name: name,
            age: age,
        },
        rank: rank,
     }
}


const context = useContext(person);

console.log(context);
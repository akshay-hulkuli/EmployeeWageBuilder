let origDogs = ["BullDog","Beagle","Labrador"];
let cats = new Array("Americal Curl","Bengal");
let birds = new Array("Falcons", "Ducks", "Flamingoes");

let slicedDogs = origDogs.slice(1,2);
let copyDogs = [...origDogs];
let dogs = origDogs.slice(0);

let pushDog = dogs.push("Golden Retriever");
let popDog = dogs.pop();
dogs[dogs.length] = "Poodle";

let addFirst = dogs.unshift("Golden Retriever");
let shiftDog = dogs.shift();

dogs.splice(2,1, "Pug","Boxer");

let animals = dogs.concat(cats,birds);
let newAnimal = [...dogs, ...cats, ...birds].toString();
let sortDog = dogs.slice(0).sort();
function scanArray([first, second]){ 
    console.log("Scan: "+ first+ " "+ second);
}
let joinAnimals = animals.join(" ");
let allAnimals ="";

for(let animal of animals) allAnimals += animal+ " ";

console.log("Animals : "+ allAnimals);
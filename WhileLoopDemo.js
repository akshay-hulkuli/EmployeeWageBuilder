let dogs = ["Bulldog", "Beagle", "Labrador"];

let i=0;
var allDogs = "";
while(i< dogs.length){
    allDogs += dogs[i++] + " ";
}
console.log("OLD way : "+ allDogs);


i=0;
allDogs = "";
do{
    allDogs += dogs[i++] + " ";
} while(i<dogs.length);

console.log("NEW way : "+ allDogs);
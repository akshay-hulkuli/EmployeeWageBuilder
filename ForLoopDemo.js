let dogs = ["Bulldog", "Beagle", "Labrador"];

var allDogs = "";
for(var i =0; i<dogs.length; i++){
    allDogs += dogs[i] + " ";
}
console.log("OLD way : "+ allDogs);

allDogs = "";

for(let dog of dogs){
    allDogs += dog+" ";
}
console.log("NEW way : "+ allDogs);
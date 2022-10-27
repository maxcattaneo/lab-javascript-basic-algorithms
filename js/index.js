// Iteration 1: Names and Input
//
// Iteration 2: Conditionals


// Iteration 3: Loops

console.log("I'm ready!");

//Iteration 1

const hacker1 = ("Maximiliano");
console.log( `The driver's name is ${hacker1}`)

const hacker2 = ("Damián");
console.log( `The navigator's name is ${hacker2}`)

//Iteration 2

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if(hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else if(hacker1.length == hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

//Iteration 3

let capital= "";
for (let i = 0; i < hacker1.length; i ++) {
    capital += hacker1 [i].toUpperCase()+ " " ;
}

console.log(capital);

let invert = "";
for (let i =hacker2.length -1; i >= 0 ; i--) {
    invert += hacker2 [i];
}
console.log (invert);


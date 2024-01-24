const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
console.log(`Hello my name is ${name } and my repo count is ${repoCount}`);

//` ` bactick is string interpolartion

const gameName = new String('hitesh-hc-com')
 console.log(gameName[0]);
 console.log(gameName.__proto__);

 
const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))
console.log(url.includes('sundar'))
console.log(gameName.split('-'));

// Immediately Invoked Function Expressions (IIFE)
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

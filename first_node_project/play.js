const name = "Max";
let age = 20;
const hasHobbies = true;

age = 30;


const summarizeUser = (userName, userAge, userHasHobbies) => {
    return ("Name is " +
             userName +
              ", age is " +
              userAge +
              ", and the user has hobbies: " +
              userHasHobbies
);
}

const add = (a,b) => a+b;

const addOne = a => a + 1;

const addRandom = () => 2 + 1;

console.log(add(1,2));
console.log(addOne(2));
console.log(addRandom);

console.log(name);
console.log(summarizeUser(name, age, hasHobbies));
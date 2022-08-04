const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

const findTheOldest = function(people){
    return people.reduce(function (oldest,currentPerson){
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath); //Uses the function to get old age
        const currentAge = getAge(currentPerson.yearOfBirth, oldest.yearOfDeath);
        return oldestAge < currentAge ? currentPerson : oldest;
    })
};
// const getAge = function(a,b){
//     if(!b){ //If not year of death 
//         b = new Date().getFullYear(); //the date is the new date to find new age 
//     }
//     return b-a;
// };
console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
//npm test findTheOldest.spec.js
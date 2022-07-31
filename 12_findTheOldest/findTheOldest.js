const findTheOldest = function(persons) {
    let oldestPerson;
    let oldestPersonAge = 0;

    const todayDateTime = new Date();
    let currentPersonAge;
    for (const person of persons) {
        if (person.yearOfDeath) {
            currentPersonAge = person.yearOfDeath - person.yearOfBirth;
        } else {
            currentPersonAge = todayDateTime.getFullYear() - person.yearOfBirth;
        }
        
        if (oldestPersonAge < currentPersonAge) {
            oldestPerson = person;
            oldestPersonAge = currentPersonAge;
        }
    } 

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;

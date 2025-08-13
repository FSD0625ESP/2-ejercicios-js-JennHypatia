const findTheOldest = (people) =>
  people.reduce((oldest, person) => {
    const getAge = (birth, death) =>
      (death || new Date().getFullYear()) - birth;
    return getAge(person.yearOfBirth, person.yearOfDeath) >
      getAge(oldest.yearOfBirth, oldest.yearOfDeath)
      ? person
      : oldest;
  });

// Do not edit below this line
module.exports = findTheOldest;

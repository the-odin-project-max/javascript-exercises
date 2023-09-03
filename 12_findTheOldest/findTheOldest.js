const findTheOldest = function (people) {
	return people.reduce((oldest, person) => {
		if (!("yearOfDeath" in person)) person.yearOfDeath = new Date().getFullYear();
		if (!("yearOfDeath" in oldest)) oldest.yearOfDeath = new Date().getFullYear();
		const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
		const personAge = person.yearOfDeath - person.yearOfBirth;
		return oldestAge < personAge ? person : oldest;
	});
};

const people = [
	{
	  name: "Carly",
	  yearOfBirth: 2018,
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

  console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;

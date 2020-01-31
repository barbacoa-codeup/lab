"use strict";

var personnel = [
    {
        id: 5,
        name: "Luke Skywalker",
        pilotingScore: 98,
        shootingScore: 56,
        isForceUser: true,
    },
    {
        id: 82,
        name: "Sabine Wren",
        pilotingScore: 73,
        shootingScore: 99,
        isForceUser: false,
    },
    {
        id: 22,
        name: "Zeb Orellios",
        pilotingScore: 20,
        shootingScore: 59,
        isForceUser: false,
    },
    {
        id: 15,
        name: "Ezra Bridger",
        pilotingScore: 43,
        shootingScore: 67,
        isForceUser: true,
    },
    {
        id: 11,
        name: "Caleb Dume",
        pilotingScore: 71,
        shootingScore: 85,
        isForceUser: true,
    },
];

// objective is to get the total score of force users and "filter" out the ones that arent force users

const jediPersonnel = personnel.filter(person => {
    return person.isForceUser;
});
console.log(jediPersonnel);

const jediScores = jediPersonnel.map(jedi=> {
    return jedi.pilotingScore + jedi.shootingScore;
});

console.log(jediScores);

// const totalJediScore = jediScores.reduce((acc, score) => {
//     return acc + score;
// }, 0);
//
// console.log(totalJediScore);

const totalJediScore = personnel
    .filter(person => person.isForceUser)
    .map(jedi => jedi.pilotingScore + jedi.shootingScore)
    .reduce((acc, score) => acc + score, 0);

console.log(totalJediScore);



const score = [
    {
        name:"Rose",
        score: 200,
    },
    {
        name:"Tudor",
        score: 100,
    },
    {
        name:"John",
        score: 300,
    },
];

var localStorage = localStorage.getItem("score") === null;

if(localStorage.getItem("score") === null) {
    var score = [];
    score.push(lastGame)
}

const scoreStringify = JSON.stringify(score);

localStorage.setItem("score", scoreStringify);

var retrievedScore = localStorage.getItem("score");

var parsedScore = JSON.parse(retrievedScore);


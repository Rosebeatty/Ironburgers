function savePlayer(score) {
    var score;
    var lastGame = { score: score };

if(localStorage.getItem("score") === null) {
    score = [];
} else {
        score = JSON.parse(localStorage.getItem('score'));
      }
    score.push(lastGame);
    var scoreStringify = JSON.stringify(score);
    localStorage.setItem("score", scoreStringify);
   
    let storageItems = JSON.parse(localStorage.getItem("score"));

    console.log(storageItems);  
} 
/*
    for(let i = 0; i < storageItems.length; i++) {
     console.log(storageItems[i]);
    }
}
   

storageItems.sort(function(a,b) {
    return a - b;
})
*/

var printScore = 
` <tr>
    <th>Name</th>
    <th>Score</th>
    </tr>
`

var scoreBoard = document.getElementById('score-board')
scoreBoard.innerHTML = printScore



   // let Score = Math.max(...storageItemsArray);
   // Score.innerHTML = "Highscore: " + Score;
 

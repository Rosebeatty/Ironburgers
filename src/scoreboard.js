function savePlayer(name, score) {
    var score;
    var lastGame = { name: name, score: score};

    if (localStorage.getItem("score") === null) {
        score = [];
    } 
    else {
        score = JSON.parse(localStorage.getItem('score'));
      }
    score.push(lastGame);
    var scoreStringify = JSON.stringify(score);
    localStorage.setItem("score", scoreStringify);
   
    let storageItems = JSON.parse(localStorage.getItem("score"));

    
    for (let i = 0; i<8;i++) {
    var userName = document.getElementById('userName');
    var highScore = document.getElementById('userScore');
    var td2 = document.createElement('td');
    var td = document.createElement('td');

    highScore.appendChild(td);
    userName.appendChild(td2);

    storageItems.sort(function(a,b) {
        return b.score - a.score
    });

    console.log(storageItems[i].name);  

    td.innerHTML =  storageItems[i].score;
    td2.innerHTML = (storageItems[i].name || 'Noname') 
    highScore.style.listStyleType = "none";
    highScore.style.padding = "10px 50px 10px 30px";
    userName.style.padding = "10px 30px 10px 50px";
    highScore.style.display = "flex";
    highScore.style.flexDirection = "column";
    highScore.style.alignItems = "center";
    td.style.fontSize = "15px";
    td2.style.fontSize = "15px";
    td2.style.marginTop = "5px";
    td.style.marginTop = "5px";
    userName.style.display = "flex";
    userName.style.flexDirection = "column";
    userName.style.alignItems = "center";
    }


}


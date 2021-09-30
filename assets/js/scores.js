

function displayHighScores() {
    var playerScores = JSON.parse(window.localStorage.getItem('input_score')) || [];

    console.log(playerScores);

    playerScores.sort(function(a,b){
        return b.score -a.score;
    });

    playerScores.forEach(function(score) {
         var li = document.createElement('li');
         li.innerHTML = score.initials + " - " + score.score;         
        
        var olScore = document.getElementById('input_score');
         olScore.append(li)        
    });
}

var clearScoresBtn = document.querySelector('#clearScores');

function clearScores () {
    window.localStorage.removeItem('input_score');
    window.location.reload();
}


clearScoresBtn.addEventListener('click', clearScores);

displayHighScores();


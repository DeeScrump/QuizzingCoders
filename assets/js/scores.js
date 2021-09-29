function displayHighScores() {
    var playerScores = JSON.parse(window.localStorage.getItem('input_score')) || [];

    console.log(playerScores);

    playerScores.sort(function(a,b){
        return b.score -a.score;
    });

    for (var i = 0; i < playerScores.length; i++) {
         var li = document.createElement('li');
         li.innerHTML = score.initials;
    }
}
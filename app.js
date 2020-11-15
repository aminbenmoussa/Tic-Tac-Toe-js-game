const Gameboard = {
    game: [['', '', ''], ['', '', ''], ['', '', '']],
    check: function () {
        
    },
    update: function () {
        let answer = this.check();
        if (answer == 1) {
            score[0]++;
            this.reset();
        } else if (answer == 2) {
            score[1]++;
            this.reset();
        }
    },
    score: [0, 0],
    turn: 0,
    reset: function () {
        this.game = [['', '', ''], ['', '', ''], ['', '', '']];
        this.score = [0, 0];
    },
    input: (val, posX, posY) => {
        this.game[posY][posX] = val;
    }
};



function display(){
    let score = document.querySelector("div#score > h1");
    score.textContent = Gameboard.score[0] + " - " + Gameboard.score[1];

}
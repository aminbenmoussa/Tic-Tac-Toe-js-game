const Gameboard = {
    game: [['', '', ''], ['', '', ''], ['', '', '']],
    check: function () {
        let winner;
        for (let i = 0; i < this.game.length; i++){
            let hor = [this.game[i][0],true];
            let ver = [this.game[0][i], true];
            if (hor[0] === '') { hor[1] === false };
            if (ver[0] === '') { ver[1] === false };
            for (let j = 0; j < this.game.length; j++){
                if (hor[0] !== this.game[i][j] && hor[1] === true) { hor[1] = false }
                if (ver[0] !== this.game[j][i] && ver[1] === true) { ver[1] = false }
            }
            if (ver[1] === true) {
                winner = ver[0];
                break
            }
            if (hor[1] === true) {
                winner = hor[0];
                break
            }
        }
        if (winner) { return winner }
        let diag = [true, true];
        for (let i = 0, j = this.game.length - 1; i < this.game.length, j >= 0; i++, j--){
            if (this.game[i][i] === '' || this.game[i][i] !== this.game[0][0]) { diag[0] = false };
            if (this.game[i][j] === '' || this.game[i][j] !== this.game[0][2]) { diag[1] = false };
        }
        if (diag[0] === true) {
            winner = this.game[0][0];
            return winner;
        };
        if (diag[2] === true) {
            winner = this.game[0][2]
            return winner;
        };
        return false;
    },
    update: function () {
        let answer = this.check();
        if (answer==1) {
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
    }
}

function display() {
    
}
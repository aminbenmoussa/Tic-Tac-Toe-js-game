const Gameboard = {
    game: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']],
    last:[false,false],
    check: function () {
        var last = this.last;
        var game = this.game;
        var ilast01 = increment(last[0]);
        var ilast02 = increment(ilast01);
        var ilast11 = increment(last[1]);
        var ilast12 = increment(ilast11);
        function get_game(x, y) {
            return game[y][x];
        }
        var elem = game[last[1]][last[0]];
        function increment(num) {
            return num === 2 ? 0 : num + 1;
        }
        
        
        if (elem === get_game(ilast01,last[1]) && elem === get_game(ilast02,last[1])) {
            return true;
        }
        
        if (elem == get_game(last[0],ilast11) && elem == get_game(last[0],ilast12)) {
            return true;
        }
        
        if (last[0] === last[1] && elem === get_game(ilast01, ilast01) && elem === get_game(ilast02, ilast02)) {
            return true;
        }
        if (last[0] + last[1] === 2 && elem === get_game(last[1], last[0]) && elem === get_game(1, 1)) {
            return true;
        }
        return false;
    },
    update: function () {
        if (this.check()) {
            this.score[this.player - 1]++;
            document.querySelector("#score > h1").textContent = this.score[0] + " - " + this.score[1];
            this.turn++;
            this.newgame();
        } else if (this.step === 9) {
            this.newgame();
        }
    },
    score: [0, 0],
    turn: 0,
    player: 1,
    step:0,
    reset: function () {
        this.newgame();
        this.score[0] = 0;
        this.score[1] = 0;
        this.player = 1;
        document.querySelector("#score > h1").textContent = this.score[0] + " - " + this.score[1];
    },
    newgame: function () {
        this.step = 0;
        for (let i = 0; i < this.game.length; i++){
            for (let j = 0; j < this.game.length; j++){
                this.game[i][j] = '';
                document.querySelector(".row:nth-of-type(" + (i+1) + ") > .game:nth-of-type(" + (j+1) + ")").textContent = this.game[i][j];
            }
        }
    },
    input: function (posX, posY) {
        if (this.game[posY][posX] === '') {
            this.game[posY][posX] = this.player === 1 ? 'X' : "O";
            document.querySelector(".row:nth-of-type(" + (posY+1) + ") > .game:nth-of-type(" + (posX+1) + ")").textContent = this.game[posY][posX];
            this.last[0] = posX;
            this.last[1] = posY;
            this.step++;
            if (this.step > 4) {
                this.update();
            }
            this.player = this.player === 1 ? 2 : 1;
        }
        console.log(this.game);
        
    }
    };

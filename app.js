const Gameboard = {
    game: [['', '', ''], ['x', 'x', 'x'], ['', '', '']],
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
        console.log(get_game(last[0],ilast11));
        function increment(num) {
            return num === 2 ? 0 : num + 1
        }
        if (elem === get_game(ilast01, last[0]) && elem === get_game(ilast02, last[1])) {
            return true;
        }
        
        if (elem == get_game(last[0], ilast11) && elem == get_game(last[0], ilast12)) {
            return true;
        }
        
        if (last[0] - last[1] === 1 || last[0] - last[1] === -1) { return false };
        if (last[0] === last[1] && elem === get_game(ilast01, ilast01) && elem === get_game(ilast02, ilast02)) {
            return true
        }
        if (last[0] + last[1] === 2 && elem === get_game(last[1], last[0]) && elem === get_game(1, 1)) {
            return true;
        }    
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
    last:[0,1],
    score: [0, 0],
    turn: 0,
    reset: function () {
        for (let i = 0; i < game.length; i++){
            for (let j = 0; j < game.length; j++){
                game[i][j]===' '
            }
        }
        this.score[0] = 0;
        this.score[1] = 0;
    },
    input: (val, posX, posY) => {
        this.game[posY][posX] = val;
    }
};
Gameboard.check();
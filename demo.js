let game = [['x', 'x', 'x'], ['x', '', ''], ['x', '', '']];
let last = [0,0];
function check() {
    function get_game(x, y) {
        return game[y][x];
    }
    function increment(num) {
        return num === 2 ? 0 : num + 1
    }
    function look_hor() {
        if (get_game(last[0], last[1]) == get_game(increment(last[0], 1), last[0]) && get_game(last[0], last[1]) == get_game(increment(increment(last[0], 1), 1), last[1])) {
            console.log("THERE IS A WIN ON ROW" + last[1]);
        }
    }
    
    look_hor();

}
check();
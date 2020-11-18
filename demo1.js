let game = [
    ['x', ' ', 'x'],
    [' ', 'x', ' '],
    [' ', ' ', 'x']];
let last = [0,0];
let elem = get_game(last[0], last[1]);
function get_game(x, y) {
    return game[y][x];
}
function increment(num) {
    return num === 2 ? 0 : num + 1
}

console.log(look_diag());
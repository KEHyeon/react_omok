function garo(board, turn, x, y) {
    let flag = 0;
    let i = y;
    let cnt = 0;
    while(i < 19 && board[x][i] == turn) {
        cnt++;
        i++
    }
    i = y;
    while(i >= 0 && board[x][i] == turn) {
        cnt++;
        i--;
    }
    if(cnt == 6) flag = 1;
    return flag;
}
function sero(board, turn, x, y) {
    let flag = 0;
    let i = x;
    let cnt = 0;
    while(i < 19 && board[i][y] == turn) {
        cnt++;
        i++
    }
    i = x;
    while(i >= 0 && board[i][y] == turn) {
        cnt++;
        i--;
    }
    if(cnt == 6) flag = 1;
    return flag;
}
function dagac(board, turn, x, y) {
    let flag = 0;
    let cnt = 0;
    let i = x;
    let j = y;
    while(i < 19 && j < 19 && board[i][j] == turn) {
        cnt++;
        i++;
        j++;
    }
    i = x;
    j = y;
    while(i >= 0 && j >= 0 && board[i][j] == turn) {
        cnt++;
        i--;
        j--;
    }
    if(cnt == 6) flag = 1;
    return flag;
}
function dagac2(board, turn, x, y) {
    let flag = 0;
    let cnt = 0;
    let i = x;
    let j = y;
    while(i >= 0 && j < 19 && board[i][j] == turn) {
        cnt++;
        i--;
        j++;
    }
    i = x;
    j = y;
    while(j >= 0 && i < 19 && board[i][j] == turn) {
        cnt++;
        i++;
        j--;
    }
    console.log(cnt);
    if(cnt == 6) flag = 1;
    return flag;
}
function checkFiveLine(board, turn, x, y) {
    return garo(board, turn, x, y) || sero(board, turn, x, y) || dagac(board, turn, x, y) || dagac2(board, turn, x, y);
}

export default checkFiveLine;
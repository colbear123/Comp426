/**
 * Course: COMP 426 KMP
 * Assignment: a07
 * Author: <ckilmart>
 * Collaborator: Connor Monson
*/
export default class Game {
    constructor(board_size) {
        this.board_size = board_size;
        var gameState = new Object()
        this.gameState = gameState
        var moved = false
        this.moved = moved
        var randomSpot1 = Math.floor(Math.random() * (board_size * board_size))
        var randomSpot2 = Math.floor(Math.random() * (board_size * board_size))
        var num = Math.random() > 0.9 ? 4 : 2;
        var num2 = Math.random() > 0.9 ? 4 : 2;
        while(randomSpot1 == randomSpot2) {
            randomSpot2 = Math.floor(Math.random() * (board_size * board_size))
        }
        gameState.board = [board_size* board_size]
        for(var i = 0; i < (board_size * board_size); i++) {
            if(i == randomSpot2) {
                this.gameState.board[i] = num;
            }
            else if(i == randomSpot1) {
                this.gameState.board[i] = num2;
            }
            else {
                this.gameState.board[i] = 0
            }
        }
        var arr_2d = [], k, i
        this.arr_2d = arr_2d;
        for (i = 0, k = -1; i < this.gameState.board.length; i++) {
            if (i % this.board_size === 0) {
                k++;
                arr_2d[k] = [];
            }
            arr_2d[k].push(this.gameState.board[i]);
        }

        this.gameState.score = 0;
        this.gameState.won = false;
        this.gameState.over = false;
        this.track_moves = []
        this.track_wins = []
        this.track_loses = []
        }

        addTiles() {
           let temp = []
            for(let i = 0; i < this.board_size; i++) {
                for(let j = 0; j < this.board_size; j++) {
                    if(this.arr_2d[i][j] == 0) {
                        temp.push({ x: i, y: j})
                    }
            }
           }
           let ranNum = temp[Math.floor(Math.random() * (temp.length))]
           this.arr_2d[ranNum.x][ranNum.y] =  ranNum > .9 ? 4 : 2
        }

        setupNewGame() {
            var tempGameState = new Object()
            this.tempGameState = tempGameState
            var randomSpot1 = Math.floor(Math.random() * (this.board_size * this.board_size))
            var randomSpot2 = Math.floor(Math.random() * (this.board_size * this.board_size))
            var num = Math.random() > 0.9 ? 4 : 2;
            var num2 = Math.random() > 0.9 ? 4 : 2;
            while(randomSpot1 == randomSpot2) {
                randomSpot2 = Math.floor(Math.random() * (this.board_size * this.board_size))
            }
            tempGameState.board = [this.board_size* this.board_size]
            for(var i = 0; i < (this.board_size * this.board_size); i++) {
                if(i == randomSpot2) {
                    tempGameState.board[i] = num;
                }
                else if(i == randomSpot1) {
                    tempGameState.board[i] = num2;
                }
                else {
                    tempGameState.board[i] = 0
                }
            }
            this.tempGameState.score = 0;
            this.tempGameState.won = false;
            this.tempGameState.over = false;
            this.gameState = this.tempGameState

    }
 
        loadGame(gameState) {
            this.gameState.score = gameState.score
            var hasWon = false;
        for (var i = 0; i < gameState.board.length; i++) {
                if(gameState.board[i] >= 2048) {
                    hasWon = true;
            }
        }

        var count = 0;
        for(var row = 0; row < this.arr_2d.length; row++) {
            for(var col = 0; col < this.arr_2d.length; col++) {
                this.arr_2d[row][col] =  gameState.board[count]
                count++
            }
        }    
     
        

        var endGame = true;
        for (var row = 0; row < this.arr_2d.length; row++) {
            for (var col = 0; col < this.arr_2d.length; col++) {
                
                if (this.arr_2d[row][col] == 0) {
                    endGame= false;
                } else if (row == 0 ) {
                    if(this.arr_2d[row][col] == this.arr_2d[row][col-1] || this.arr_2d[row][col] == this.arr_2d[row+1][col]
                        || this.arr_2d[row][col] == this.arr_2d[row][col+1]) {
                            endGame = false;
                    }
                } else if (row == this.arr_2d.length - 1 ) {
                    if (this.arr_2d[row][col] == this.arr_2d[row][col-1] || this.arr_2d[row][col] == this.arr_2d[row-1][col]
                        || this.arr_2d[row][col] == this.arr_2d[row][col+1]) {
                            endGame = false;
                    }
                } else if (row == 0  && col == this.arr_2d.length - 1) {
                    if(this.arr_2d[row][col] == this.arr_2d[row][col-1] || this.arr_2d[row][col] == this.arr_2d[row+1][col]) {
                        endGame = false;
                    }
                } else if (row == this.arr_2d.length - 1 && col == this.arr_2d.length - 1) {
                    if (this.arr_2d[row][col] == this.arr_2d[row][col-1] || this.arr_2d[row][col] == this.arr_2d[row-1][col]) {
                        endGame = false;
                    }
                } else if (row == 0 && col == 0) { 
                    if(this.arr_2d[row][col] == this.arr_2d[row][col+1] || this.arr_2d[row][col] == this.arr_2d[row+1][col]) {
                        endGame = false;
                    }
                } else if (row == this.arr_2d.length - 1 && col == 0) {
                    if(this.array2d[row][col] == this.array2d[row][col+1] || this.array2d[row][col] == this.array2d[row-1][col]) {
                        endGame = false;
                    }

                } else if (col == 0 ) {
                    if(this.arr_2d[row][col] == this.arr_2d[row+1][col] || this.arr_2d[row][col] == this.arr_2d[row][col+1]
                        || this.arr_2d[row][col] == this.arr_2d[row-1][col]) {
                            endGame = false;
                    }
                } else if (col == this.arr_2d.length -1 ) {
                    if(this.arr_2d[row][col] == this.arr_2d[row+1][col] || this.arr_2d[row][col] == this.arr_2d[row][col-1]
                        || this.arr_2d[row][col] == this.arr_2d[row-1][col]) {
                            endGame = false;
                    }
                } else {
                    if(this.arr_2d[row][col] == this.arr_2d[row][col-1] || this.arr_2d[row][col] == this.arr_2d[row-1][col]
                        || this.arr_2d[row][col] == this.arr_2d[row][col+1] || this.arr_2d[row][col] == this.arr_2d[row+1][col]) {
                            endGame = false;
                    }
                }
            }
        }
        var check_2d = 0
        for(var row = 0; row < this.arr_2d.length; row++) {
            for(var col = 0; col < this.arr_2d.length; col++) {
                this.gameState.board[check_2d] =  this.arr_2d[row][col]
                check_2d++
            }
        }

        this.gameState.over = endGame;
        this.gameState.won = hasWon;
}
        move(direction) {
            this.moved = false
        if (direction == "right") {
            this.keyRight();
        }
        if (direction == "left") {
            this.rotateClockwise(); 
            this.rotateClockwise();
            this.keyRight();
            this.rotateClockwise(); 
            this.rotateClockwise();
        }
        if (direction == "up") {
            this.rotateClockwise();
            this.keyRight();
            this.rotateClockwise(); 
            this.rotateClockwise(); 
            this.rotateClockwise();
        }
        if (direction == "down") {
            this.rotateClockwise(); 
            this.rotateClockwise(); 
            this.rotateClockwise();
            this.keyRight();
            this.rotateClockwise();
    }

        if(this.moved == true) {
        this.addTiles()
        this.gameState.board = [].concat(...this.arr_2d)
    }
        var testMove = false;
            for(let i=0; i<this.gameState.board.length; i++){
                if(this.gameState.board[i] == 2048 && this.gameState.won == false){
                    this.gameState.won = true;
                    this.track_wins.forEach(function(e){
                        e(this.getGameState());
                    }, this);  
                }
                if(this.gameState.board[i] == 0){
                    testMove = true;
                }
            }
            for (let i=0; i<(this.gameState.board.length); i+=this.board_size) {
                var temp = i;
                while (temp < i + this.board_size-1) {
                    if (this.gameState.board[temp] == 0 || this.gameState.board[temp+1] == 0 || (this.gameState.board[temp] == this.gameState.board[temp+1])) {
                        testMove = true;
                    }
                    temp++;
                }
            }
            for (let i=0; i<this.board_size; i++) {
                var temp = i;
                while (temp < this.board_size*this.board_size - this.board_size + i) {
                    if (this.gameState.board[temp] == 0 || this.gameState.board[temp+this.board_size] == 0 || (this.gameState.board[temp] == this.gameState.board[temp+this.board_size])) {
                        testMove = true;
                    }
                    temp = temp+this.board_size;
                }
            }

            if (testMove == false) {
                this.gameState.over = true;

                this.track_loses.forEach(function(e){
                    e(this.getGameState());
                }, this);            
            }
            this.track_moves.forEach(function(e){
                e(this.getGameState());
            }, this);
        }
      
        moveRight() {
            for(var row=0; row < this.board_size; row++){ 
                var counter = 0;
                while(counter < this.board_size - 1 ){ 
                    for(var col= this.board_size-2; col>=0; col--){
                        if(this.arr_2d[row][col+1] == 0 && this.arr_2d[row][col] != 0){
                            this.moved = true
                            this.arr_2d[row][col+1] = this.arr_2d[row][col];
                            this.arr_2d[row][col] = 0;
                        }
                    }
                counter++;
                }
            }
        }
        
        keyRight() {
            this.moveRight()
            for(var i=0; i<this.board_size; i++){
                for(var j=this.board_size-1; j>=0; j--){
                    if(this.arr_2d[i][j] == this.arr_2d[i][j-1]){
                        this.moved = true
                        this.arr_2d[i][j] *= 2;
                        this.gameState.score += this.arr_2d[i][j]
                        this.arr_2d[i][j-1] = 0;
                    }
                }
            }
                this.moveRight()
        }
        rotateClockwise() {
            for(var i=0; i<this.board_size; i++){
                for(var j=i+1; j < this.board_size; j++){
                    var tempVal = this.arr_2d[i][j];
                    this.arr_2d[i][j] = this.arr_2d[j][i];
                    this.arr_2d[j][i] = tempVal;
                    }
            }
            for(var i=0; i<this.board_size; i++) {
                for(var j=0; j<this.board_size - 2; j++) {
                    var tempVal = this.arr_2d[i][j];
                    this.arr_2d[i][j] = this.arr_2d[i][(this.board_size-1)-j];
                    this.arr_2d[i][(this.board_size-1)-j] = tempVal;
                    }
                }
            }

    onMove(callback) {
        this.track_moves.push(callback)
        }
    onWin(callback) {
        this.track_wins.push(callback)
        }
    onLose(callback) {
        this.track_loses.push(callback)
        }
    getGameState() {
        return this.gameState
    }
}
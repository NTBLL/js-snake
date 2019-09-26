//游戏对象
((function () {
    function Game() {
        this.food = new Food();
        this.snake = new Snake();
    }

    Game.prototype.init = function (map) {
        this.food.init(map);
        this.snake.init(map);
    };

    Game.prototype.play = function (map) {
        this.init(map);
        var timeId;
        var that = this;
        document.onkeyup = function (e) {
            if (e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40) {
                if (timeId) {
                    clearInterval(timeId);
                    timeId = "";
                }
                timeId = setInterval(function () {
                    this.snake.move(e.keyCode, this.food, map);
                    this.snake.init(map);

                    //游戏结束
                    if (this.snake.body[0].x >= 45 || this.snake.body[0].x < 0 || this.snake.body[0].y < 0 || this.snake.body[0].y >= 30) {
                        clearInterval(timeId);
                        document.onkeyup = null;
                        alert("game over");
                    }
                }.bind(that), 100);
            }
        };
    }

    window.Game = Game;
})());




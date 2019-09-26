//小蛇对象
((function () {
    //存放小蛇生体数组
    var snakes = [];

    //小蛇构造函数
    function Snake(width, height, headColor, bodyColor) {
        this.width = width || 20;
        this.height = height || 20;
        this.headColor = headColor || 'red';
        this.bodyColor = bodyColor || 'yellow';
        //初始化蛇的位置
        this.body = [
            {x: 3, y: 2, color: this.headColor},
            {x: 2, y: 2, color: this.bodyColor},
            {x: 1, y: 2, color: this.bodyColor}
        ]
    }

    //小蛇初始化方法
    Snake.prototype.init = function (map) {
        //销毁小蛇
        for (var i = snakes.length - 1; i >= 0; i--) {
            snakes[i].parentElement.removeChild(snakes[i]);
            snakes.splice(i, 1);
        }

        //创建小蛇并放入地图
        for (var i = 0; i < this.body.length; i++) {
            var snakeBody = document.createElement("div");
            snakeBody.style.position = "absolute";
            snakeBody.style.left = this.body[i].x * this.width + "px";
            snakeBody.style.top = this.body[i].y * this.height + "px";
            snakeBody.style.backgroundColor = this.body[i].color;
            snakeBody.style.width = this.width + "px";
            snakeBody.style.height = this.height + "px";
            map.appendChild(snakeBody);
            snakes.push(snakeBody);
        }

    };

    //小蛇移动方法
    Snake.prototype.move = function (direction, food, map) {
        //身体移动
        for (var i = this.body.length - 1; i > 0; i--) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }
        //头部移动
        switch (direction) {
            case 37:
                this.body[0].x -= 1;
                break;
            case 38:
                this.body[0].y -= 1;
                break;
            case 39:
                this.body[0].x += 1;
                break;
            case 40:
                this.body[0].y += 1;
                break;
        }

        //判断是否吃到食物
        if (food.x == this.body[0].x*this.width && food.y == this.body[0].y*this.height) {
            food.init(map);
            var last = this.body[this.body.length - 1];
            this.body.push({
                x: last.x,
                y: last.y,
                color: last.color
            })
        }
    };

    window.Snake = Snake;
})());
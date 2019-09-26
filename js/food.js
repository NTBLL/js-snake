//食物对象
((function () {

    //存放食物的数组
    var foods = [];

    //食物对象构造函数
    //宽度，高度，背景颜色
    function Food(width, height, color) {
        this.width = width || 20;
        this.height = height || 20;
        this.color = color || 'green';
        //坐标位置，随机生成
        this.x = 0;
        this.y = 0;
    }

    //食物的初始化方法
    Food.prototype.init = function (map) {
        //将地图上的食物清除
        for (var i = 0; i < foods.length; i++) {
            foods[i].parentNode.removeChild(foods[i]);
            foods.splice(i, 1);
        }

        //随机在地图上产生一个坐标
        var maxX = map.offsetWidth / this.width;
        var maxY = map.offsetHeight / this.height;
        var x = Math.floor(Math.random() * maxX) * this.width;
        var y = Math.floor(Math.random() * maxY) * this.height;
        this.x = x;
        this.y = y;

        //将食物放置地图上
        var food = document.createElement("div");
        food.style.width = this.width + "px";
        food.style.height = this.height + "px";
        food.style.backgroundColor = this.color;
        food.style.position = "absolute";
        food.style.left = x + "px";
        food.style.top = y + "px";
        map.appendChild(food);

        //食物放入食物数组中
        foods.push(food);
    };

    //将Food对象提升到全局中
    window.Food = Food;
})());
//function to create an element
function createElement(type, classname, parent){
    var elem = document.createElement(type);
    elem.className = classname;
    parent.appendChild(elem);
    return elem;
}
var inter;
var direction = 0;
var snakediv = document.querySelector('div.snake');
//game element
//create's a food square
var food;
var gameTop = document.querySelector('div.container').offsetTop;
var gameLeft = document.querySelector('div.container').offsetLeft;

function Snake(snakeLength, snbody, div ){
    this.snakeLength = snakeLength,
    this.snbody = snbody,
    this.div = div;
}
Snake.prototype.setSnakeBody = function(){
    this.snbody = document.querySelectorAll('div.snakesquare');
    return this.snbody;
};
Snake.prototype.addTail = function(){
    return createElement('div','snakesquare', this.div);
};
Snake.prototype.setSnakeLength = function(){
    this.snakeLength = this.snbody.length;
    return this.snakeLength;
};
Snake.prototype.setPosition = function(){
    this.setSnakeBody();
    this.setSnakeLength();
    for(var i =0; i< snake.snakeLength;i++){
        snake.snbody[i].style.top = i*22+352 +'px';
        snake.snbody[i].style.left = 352+'px';
    }
};
Snake.prototype.stopMovement = function(){
    window.removeEventListener("keydown", keyFunction);
};
Snake.prototype.start = function(){
    inter = setInterval(function () {
        if(this.snake.setSnakeLength() > 0 && this.snake.snbody[0].offsetTop > 0){
            var node = this.snake.div.removeChild(this.snake.snbody[this.snake.snakeLength-1]);
            node.style.top = this.snake.snbody[0].offsetTop-22 +'px';
            node.style.left = this.snake.snbody[0].offsetLeft + 'px';
            if(node.style.top === food.offsetTop + 'px' && node.style.left === food.offsetLeft + 'px'){
                this.snake.eatFood();
            }
            Array.prototype.forEach.call(this.snake.snbody, function(x){
                if(node.style.top === x.offsetTop + 'px' && node.style.left === x.offsetLeft + 'px'){
                    this.snake.stopMovement();
                    clearInterval(inter);
                }
            });
            this.snake.div.insertBefore(node, this.snake.snbody[0]);
        }
        else{
            this.snake.stopMovement();
            clearInterval(inter);
        }
    }, 500);
};
Snake.prototype.moveUp = function(){
    clearInterval(inter);
    inter = setInterval(function () {
        this.snake.setSnakeBody();
        this.snake.setSnakeLength();
        if(this.snake.setSnakeLength() > 0 && this.snake.snbody[0].offsetTop > 0){
            var node = this.snake.div.removeChild(this.snake.snbody[this.snake.snakeLength - 1]);
            node.style.top = this.snake.snbody[0].offsetTop - 22 + 'px';
            node.style.left = this.snake.snbody[0].offsetLeft + 'px';
            if(node.style.top === food.offsetTop + 'px' && node.style.left === food.offsetLeft + 'px'){
                this.snake.eatFood();
            }
            Array.prototype.forEach.call(this.snake.snbody, function(x){
                if(node.style.top === x.offsetTop + 'px' && node.style.left === x.offsetLeft + 'px'){
                    this.snake.stopMovement();
                    clearInterval(inter);
                }
            });
            this.snake.div.insertBefore(node, this.snake.snbody[0]);
            direction = 0;
        }
        else{
            this.snake.stopMovement();
            clearInterval(inter);
        }
    }, 500);
};
Snake.prototype.moveDown = function(){
    clearInterval(inter);
    inter = setInterval(function () {
        this.snake.setSnakeBody();
        this.snake.setSnakeLength();
        if(this.snake.setSnakeLength() > 0 && this.snake.snbody[0].offsetTop < 528){
            var node = this.snake.div.removeChild(this.snake.snbody[this.snake.snakeLength - 1]);
            node.style.top = this.snake.snbody[0].offsetTop + 22 + 'px';
            node.style.left = this.snake.snbody[0].offsetLeft + 'px';
            if(node.style.top === food.offsetTop + 'px' && node.style.left === food.offsetLeft + 'px'){
                this.snake.eatFood();
            }
            Array.prototype.forEach.call(this.snake.snbody, function(x){
                if(node.style.top === x.offsetTop +'px' && node.style.left === x.offsetLeft + 'px'){
                    this.snake.stopMovement();
                    clearInterval(inter);
                }
            });
            this.snake.div.insertBefore(node, this.snake.snbody[0]);
            direction = 1;
        }
        else{
            this.snake.stopMovement();
            clearInterval(inter);
        }
    }, 500);
};
Snake.prototype.moveLeft = function(){
    clearInterval(inter);
    inter = setInterval(function () {
        this.snake.setSnakeBody();
        this.snake.setSnakeLength();
        if(this.snake.setSnakeLength() > 0 && this.snake.snbody[0].offsetLeft > 0){
            var node = this.snake.div.removeChild(this.snake.snbody[this.snake.snakeLength - 1]);
            node.style.top = this.snake.snbody[0].offsetTop +'px';
            node.style.left = this.snake.snbody[0].offsetLeft - 22 + 'px';
            if(node.style.top === food.offsetTop + 'px' && node.style.left === food.offsetLeft + 'px'){
                this.snake.eatFood();
            }
            Array.prototype.forEach.call(this.snake.snbody, function(x){
                if(node.style.top === x.offsetTop + 'px' && node.style.left === x.offsetLeft + 'px'){
                    this.snake.stopMovement();
                    clearInterval(inter);
                }
            });
            this.snake.div.insertBefore(node, this.snake.snbody[0]);
            direction=3;
        }
        else{
            this.snake.stopMovement();
            clearInterval(inter);
        }
    }, 500);
};
Snake.prototype.moveRight = function(){
    clearInterval(inter);
    inter = setInterval(function () {
        this.snake.setSnakeBody();
        this.snake.setSnakeLength();
        if(this.snake.setSnakeLength() > 0 && this.snake.snbody[0].offsetLeft < 528){
            var node = this.snake.div.removeChild(this.snake.snbody[this.snake.snakeLength-1]);
            node.style.top = this.snake.snbody[0].offsetTop + 'px';
            node.style.left = this.snake.snbody[0].offsetLeft + 22 + 'px';
            if(node.style.top === food.offsetTop + 'px' && node.style.left === food.offsetLeft + 'px'){
                this.snake.eatFood();
            }
            Array.prototype.forEach.call(this.snake.snbody, function(x){
                if(node.style.top === x.offsetTop + 'px' && node.style.left === x.offsetLeft + 'px'){
                    this.snake.stopMovement();
                    clearInterval(inter);
                }
            });

            this.snake.div.insertBefore(node, this.snake.snbody[0]);
            direction=2;
        }
        else{
            this.snake.stopMovement();
            clearInterval(inter);
        }
    }, 500);
};
Snake.prototype.createFood =function(){
    food= createElement('div', 'food', document.querySelector('div.container'));
    createElement('div', 'square1', food);
    createElement('div', 'square2', food);
    createElement('div', 'square3', food);
    createElement('div', 'square4', food);

    food.style.top = (Math.floor(Math.random()*24)+1)*22+'px';
    food.style.left = (Math.floor(Math.random()*24)+1)*22+'px';
};
Snake.prototype.eatFood = function(){
    food.remove();
    var lastTop = snake.div.lastChild.offsetTop;
    var lastLeft =snake.div.lastChild.offsetLeft;
    var tail =snake.addTail();
    switch(direction){
        case 0:
            tail.style.top = lastTop +22+'px';
            tail.style.left = lastLeft +'px';
            break;
        case 1:
            tail.style.top = lastTop -22+'px';
            tail.style.left = lastLeft +'px';
            break;
        case 2:
            tail.style.top = lastTop +'px';
            tail.style.left = lastLeft -22+'px';
            break;
        case 3:
            tail.style.top = lastTop +'px';
            tail.style.left = lastLeft +22 +'px';
            break;
    }

    snake.createFood();
};

var snake  = new Snake(null, document.querySelectorAll('div.snakesquare'), snakediv);
snake.addTail();
snake.addTail();
snake.addTail();
snake.setPosition();
snake.createFood();


var fired = false;
function keyFunction(event) {

    //if already started
    if (fired === false) {
        snake.start();
        fired = true;
    }

    //left -- direction = 3
    if (event.keyCode === 37 && fired === true && direction != 2) {
        snake.moveLeft();
    }
    //right -- direction = 2
    if (event.keyCode === 39 && fired === true && direction != 3) {
        snake.moveRight();
    }
    //up direction = 0
    if (event.keyCode === 38 && fired === true && direction != 1) {
        snake.moveUp();
    }
    //down direction = 1
    if (event.keyCode === 40 && fired === true && direction != 0) {
        snake.moveDown();
    }


}
function movement() {
    //key presses
    window.addEventListener("keydown", keyFunction );
}
movement();
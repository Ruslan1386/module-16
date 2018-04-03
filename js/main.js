class Shape {
    constructor (color, initX, initY){
        this.color = color;
        this.initX = initX;
        this.initY = initY;
    }
    getColor() {
        return this.color;//возвращает значение цвета
    }
    setColor(val) {
        this.color = val;//получает и записывает значение цвета
    }
    getCoords() {
        return { x: this.initX, y: this.initY};//возвращает координаты х у
    }
    moveTo(newX, newY) {
        this.initX = newX;
        this.initY = newY;//принимает 2 параметра, новые значения для х и у  и записывает их
    }
};

class Rectangele extends Shape {
constructor (color, initX, initY) {
    super(color, initX, initY);
    this.initWidth = 0;
    this.initHeight = 0;
}
    setWidth(newWidth) {
    this.initWidth = newWidth;//получает ширину и изаписывает новые значения
    }
    setHeigth(newHeight) {
    this.initHeight = newHeight;// записывает высоту и записывает новые значения
    }
    getDims() {
    return { width: this.initWidth, height: this.initHeight }//возвращает значения width и height
    }
    draw(){
        console.log("Drawing a Rectangle at:");
        console.log(`(x: ${this.getCoords().x}, y: ${this.getCoords().y})`);
        console.log("Width dimentions:");
        console.log(`width: ${this.getDims().width}`);
        console.log(`heigth: ${this.getDims().height}`);
        console.log(`Filled with color: ${this.getColor()}`);
    }
}

var rectangele = new Rectangele('#009688', 10, 10);
rectangele.setHeigth(50);
rectangele.setWidth(100);
rectangele.draw();

class Circle extends Shape {
    constructor (color, initX, initY){
        super (color, initX, initY);
        this.initRadius = 0;
    }
    getRadius() {
        return this.initRadius;//возвращает текущее значение радиуса
    }
    setRadius(val) {
        this.initRadius = val;//получает значение и присваивает его радиусу
    }
    draw() {
        console.log("Drawing a Circle at:");
        console.log(`(x: ${this.getCoords().x}, y: ${this.getCoords().y})`);
        console.log("Width dimentions:");
        console.log(`radius: ${this.getRadius()}`);
        console.log(`Filled with color: ${this.getColor()}`);
    }
}

var circle = new Circle('#009688', 50, 50);
circle.setRadius(250);
circle.draw();

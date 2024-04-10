//complete this code
class Rectangle {
	constructor(width , height) {
		width = this.width;
		height = this.height;
	}
	get myiWdth(){
		return this.width;
	}
	get myHeight(){
		return this.height;
	}

	getArea(){
		retun this.width * this.height;
	}
}

class Square extends Rectangle {

	constructor(side){
		super(side);
		
	}
	getPerimeter(side){
		return this.side * this.side
		
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;

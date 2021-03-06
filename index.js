function Point(x, y) {
  this.x = x
  this.y = y
}

Point.prototype.toString = function() {
  return `${this.x}, ${this.y}`
}

function Shape() {

}

Shape.prototype.addToPlane = function(x, y) {
  // addToPlane assigns a Point to the Shape's position based on (x, y)
  this.position = new Point(x,y)
}

Shape.prototype.move = function(x, y) {
  this.position = new Point(x, y)
}

function Side(length) {
  this.length = length
}

function Circle(radius) {
  Shape.call(this)
  this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle
Circle.prototype.area = function() { return Math.PI * this.radius * this.radius }
Circle.prototype.diameter = function() { return this.radius * 2}
Circle.prototype.circumference = function () { return 2 * Math.PI * this.radius }

function Polygon(sides) {
  Shape.call(this)
  this.sides = sides
}

Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.constructor = Polygon
Polygon.prototype.numberOfSides = function() { return this.sides.length }
Polygon.prototype.perimeter = function() {
  return this.sides.reduce(function(a, b) { return a + b.length }, 0)}

function Quadrilateral(side1, side2, side3, side4) {
  Polygon.call(this, [new Side(side1), new Side(side2), new Side(side3), new Side(side4)])
}

Quadrilateral.prototype = Object.create(Polygon.prototype)
Quadrilateral.prototype.constructor = Quadrilateral

function Triangle(s1, s2, s3) {
  Polygon.call(this, [new Side(s1), new Side(s2), new Side(s3)])
}

Triangle.prototype = Object.create(Polygon.prototype)
Triangle.prototype.constructor = Triangle

function Rectangle(width, height) {
  Quadrilateral.call(this, width, width, height, height)
  this.width = width
  this.height = height
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.prototype.constructor = Rectangle
Rectangle.prototype.area = function() { return this.width * this.height }

function Square(length) {
  Rectangle.call(this, length, length)
  this.length = length
}

Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.constructor = Square
Square.prototype.listProperties = function() {
  for(var prop in this) {
    if(this.hasOwnProperty(prop)) {
      console.log("this." + prop + " = " + this[prop])
    }
  }
}

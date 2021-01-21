import "../../icons/svgxuse";
import randomColor from "randomcolor";

class Rectangle {
  constructor(w, h, x, y) {
    this._w = w;
    this._h = h;
    this._x = x;
    this._y = y;
    this._ref = this.generateHTML();
    this.style();
  }
  generateHTML() {
    document.body.insertAdjacentHTML(
      "afterbegin",
      `<a class="changecolor" href="#"><div class="rectangle">klik mij</div></a>`
    );
    return document.querySelector("div:first-child");
  }
  style() {
    const styles = {
      width: this._w + "px",
      height: this._h + "px",
      left: this._x + "px",
      top: this._y + "px",
      backgroundColor: randomColor(),
    };
    Object.assign(this._ref.style, styles);
  }
  get width() {
    return this._w;
  }
  set width(a) {
    this._w = a;
    this.style();
  }
  get height() {
    return this._h;
  }
  set height(a) {
    this._h = a;
    this.style();
  }
  get left() {
    return this._x;
  }
  set left(a) {
    this._x = a;
    this.style();
  }
  get top() {
    return this._y;
  }
  set top(a) {
    this._y = a;
    this.style();
  }
  get leftmidden() {
    return rechthoek.width / 2 + rechthoek.left;
  }
  get topmidden() {
    return rechthoek.height / 2 + rechthoek.top;
  }
  get leftmidden2() {
    return rechthoek2.width / 2 + rechthoek2.left;
  }
  get topmidden2() {
    return rechthoek2.height / 2 + rechthoek2.top;
  }
}

const rechthoek = new Rectangle(333, 222, 50, 100);
const rechthoek2 = new Rectangle(222, 333, 500, 100);

//const opp = rechthoek.width * rechthoek.height;
//console.log(opp);
console.log(
  "rechthoek zijn opp =",
  rechthoek.width * rechthoek.height,
  "vierkante pixels"
);
console.log(rechthoek.leftmidden, rechthoek.topmidden);
console.log(rechthoek2.leftmidden2, rechthoek2.topmidden2);
console.log(
  "afstand tussen de 2 rechthoeken is",
  rechthoek2.leftmidden2 -
    rechthoek.leftmidden -
    (rechthoek2.topmidden2 - rechthoek.topmidden)
);

/* const afstandleft = function(rechthoek.leftmidden, rechthoek2.leftmidden2) {
if(rechthoek.leftmidden > rechthoek2.leftmidden2) {
    return rechthoek.leftmidden - rechthoek2.leftmidden2;
} else {
    return rechthoek2.leftmidden2 - rechthoek.leftmidden;
}
} 
const afstandtop = function(rechthoek.topmidden, rechthoek2.topmidden2) {
if(rechthoek.topmidden > rechthoek2.topmidden2) {
    return rechthoek.topmidden - rechthoek2.topmidden2;
} else {
    return rechthoek2.topmidden2 - rechthoek.topmidden;
}
} 
*/

/* console.log(rechthoek);
console.log(rechthoek.left, rechthoek.top);
console.log(rechthoek2);
console.log(rechthoek2.left, rechthoek2.top); */

document.getElementsByClassName("changecolor").onclick = function () {
  this._ref.style.backgroundColor = randomColor();
  console.log("klik");
};

document.querySelector("button").onclick = function () {
  document.getElementsByClassName(
    "changecolor"
  ).style.backgroundColor = randomColor();
  console.log("klik");
};

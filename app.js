// factory function

const fFunction = (a, b) => {
  return {
    num1: parseInt(a),
    num2: parseInt(b),
    num3: 300,
    addNumber() {
      return this.num1 + this.num2 + this.num3;
    },
  };
};

const newOjbect = fFunction(process.argv[2], process.argv[3]);

console.log(newOjbect);
console.log(newOjbect.addNumber());

// Function Constructor

function OFunction(a, b) {
  this.num1 = parseInt(a);
  this.num2 = parseInt(b);
  this.num3 = 300;
}

OFunction.prototype.addNumber = function () {
  return this.num1 + this.num2 + this.num3;
};

const nO2 = new OFunction(process.argv[2], process.argv[3]);

console.log(nO2);
console.log(nO2.addNumber());

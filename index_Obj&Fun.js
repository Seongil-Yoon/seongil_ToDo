function sayHello(name, age){
 return `Hello ${name} you are ${age} years old`;
}

const greetSeongil = sayHello("Seongil",24);

console.log(greetSeongil);






const calsulator = {

    plus: function(a, b){
      return a+b;
    }, //객체의 메소드=함수
    minus: function(a, b){
      return a-b;
    }

};

const plus = calsulator.plus(5,5);
const minus = calsulator.minus(11,5);

const result = {
  name: greetSeongil,
  whereClass: "3CP-B",
  
  resultSet: [
    {
      index: 1,
      addResult: plus 
    },
    {
      index: 2,
      subResult: minus
    }
  ]
};

console.log(result);
console.log(result.resultSet[0]);
const seongilInfo = {
  name:"Seongil", 
  age:"24",
  gender:"Male",
  isHandsome:true,
}; 

//console.log(console); 
//콘솔객체의 log함수의 매개변수로 console자기자신을 던져서 출력.



function sayGood(b){
  var c;
  return c = "Ya Feel So " + b;
}

function sayHello(a, sayGood ){
  console.log(sayGood + a +"Hello!");
}

sayHello("Seongil ",sayGood("Good!! "));
console.log("Hi!")

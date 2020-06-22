//prompt("Ask"); , 프롬프트는 거의 쓰지 않음, 오래된 자바스크립트기능

const age = prompt("How old are you?");

//팝업창에 입력을 해줘야 다음코드가 넘어가서 사용하지않는다.
//팝업이 뜨는동안에 다른 코드도 같이 실행되야 되는 상황에 못쓴다.

if(age >= 18 && age  <= 21 ){
    console.log("you can drink but you should not");
}else if (age > 21){
    console.log("go a head");
}else(
    console.log("too young")
)

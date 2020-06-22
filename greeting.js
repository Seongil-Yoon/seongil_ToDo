const form = document.querySelector(".js-form"),
    input = form.querySelector("input"), //폼태그의 바로 아래에 있는 input태그를 불러옴
    greeting = document.querySelector(".js-greetings")

const USER_LS = "frontUser",
    SHOWING_CN = "showing";


function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){ //매개변수는 위에있는 document에서 던져준것/
    //폼을 제출하는 이벤트가 발생하면 document까지 올라가서 페이지가 새로고침, 
    event.preventDefault(); //새로고침을 막고, 이벤트가 금지됨.
    const crtValue = input.value; //입력창의 값
    paintGreetting(crtValue);
    saveName(crtValue); //누군가 엔터 누르면 저장하는 기능도 한다.
}

function askForName() { //브라우저에 키값이 없다면.
    form.classList.add(SHOWING_CN); //스타일 객체를 추가
    form.addEventListener("submit", handleSubmit); //입력창에 넣은 값의 이벤트를 리스너.
}

function paintGreetting(text){ //입력창을 없애서 결과를 나타나게 하는 함수.
    form.classList.remove(SHOWING_CN);//form태그의  showing스타일객체을 제거
    greeting.classList.add(SHOWING_CN);//greeting클래스의 showing스타일객체을 추가
    greeting.innerText = `Hello ${text}`;
}

function loadName() { //문제는 저장을 못하고 그냥 사이클동안 띄우기만 한다
    const crtUser = localStorage.getItem(USER_LS); //localStorage 브라우저내에 정보를 저장
    //브라우저에서 "frontUser"속성을 getItem하여 값이 있으면 crtUser변수에 넣어서paintGreetting()함수에 던져줘서  

    if(crtUser === null){
        askForName();
        //웹 사이트가 계속 새로고침되서 , 그려주는함수 전에 단계를 추가해야된다.
        //엔터를 이벤트를 리스너 시켜주는것 안에 함수를 하나 더 넣어서 
    }else{
        paintGreetting(crtUser); 
        //브라우저에 이미 값이 있다면 바로 그려주는함수(값) 를 실행하면 되지만 없다면 
    }
}



function init(){
    loadName();
}

init();

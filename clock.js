const clockContainer = document.querySelector(".js-clock"), 
//쿼리셀렉터는 엘레먼트의 (".js-clock")자식을 (document)탐색 =>DOM탐색
    clockTitle = document.querySelector(".js-title");

function getTime(){ //시간함수
    const date = new Date(); //Date()클래스를 변수 date에 참조, 객체생성
    const min = date.getMinutes(); //메소드사용
    const hours = date.getHours(); //메소드사용
    const sec = date.getSeconds();


    clockTitle.innerHTML = 
        `${hours < 10 ? `0${hours}` : hours}:${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`; //작은if, 문자열안에 조건문}`; 
        //``(백틱) <=따옴표랑 다르다, 문자열 만듬
        //삼항연산자 : 초가 9보다 적으면 sec앞에0이 붙은것을 반환, 반대면 sec을 그대로 반환
}

function init(){
    getTime();
    setInterval(getTime, 1000); // 1000밀리세컨드 == 1초
}

init(); //main() 비슷
const title = document.querySelector("#title"); //쿼리셀렉터, 요소의 첫번쨰 반환
/*
DOM은 객체=> 메소드와 속성으로 이뤄진다.
class로 찾고 싶으면 .title
id로 찾고 싶으면 #title, CSS선택자와 비슷
 */

function handleResize(event){//함수를 만들때 마다 JS가 자동으로 함수를 DOM객체에 붙임 
    //이벤트가 호출될때마다 매개변수의 event객체가 호출됨
    console.log(event);
    //console.log("i have beed resized");
}

window.addEventListener("resize",handleResize); 
//handleRsize()하면 이벤트와 관계없이즉시호출, handleResize하면 사이즈변경이 일어날때 호출
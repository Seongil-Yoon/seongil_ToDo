const title = document.querySelector("#title");
const body = document.querySelector(".body");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#e74c3c";
//"rgb(52, 73, 94)";

function handleClick(){
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }else{
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("wheel", handleClick);
}

init();

function handleOffline(){
    title.style.color = "#1abc9c";
}

function handleOnline(){
    title.style.color = "#f1c40f";
}

window.addEventListener("offline", handleOffline);  //윈도우 이벤트 인터넷 연결여부
window.addEventListener("online", handleOnline);




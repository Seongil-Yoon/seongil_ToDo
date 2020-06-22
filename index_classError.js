const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    const crtClass = title.className;
    if(crtClass !== CLICKED_CLASS){
        title.className = CLICKED_CLASS;
    }else{
        title.className = ""; //디폴트 btn클래스로 돌아갈수없다.
        //태그객체.css > 클래스
    }
}

function init(){
    title.addEventListener("click", handleClick);
}

init();




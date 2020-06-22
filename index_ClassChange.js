const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    const hasClass = title.classList.contains(CLICKED_CLASS); //불리언 타입, 지정한 클래스 값이 존재하는지 확인
    //클릭하기전에 디폴트는 clicked가 존재하지 않기때문에 false반환, 클릭하고 나서 true
    //현재 클래스는 index.html에서 정의한 btn이 된다, 부모클래스같은 느낌.
    if(hasClass){ 
        title.classList.remove(CLICKED_CLASS); //참은 이미 가질때인데 이경우는 remove이거나 조건이 반대가 되야된다.
        //기존의 클래스에 클릭한 클래스를 더한다., 오버로딩?
        //crtClass 은 btn.clicked
    }else{ 
        title.classList.add(CLICKED_CLASS); 
    }
}

function init(){
    title.addEventListener("click", handleClick);
}

init();




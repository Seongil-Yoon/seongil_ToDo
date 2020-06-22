const body = document.querySelector("body") //<body>태그를 접근

const IMG_Number = 4;


//객체생성 방식
function paintImag(IMG_Number){
    const image = new Image();
    image.src = `./images/${IMG_Number + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image)

    //image.addEventListener("loadend", handleImgLoad) //api에서 하면 필요
    
}

/*DOM접근방식
function paintImag(IMG_Number){
    const image1 = document.createElement("img");
    image1.src = `./images/${IMG_Number + 1}.jpg`;
    image1.classList.add("bgImage");
    body.appendChild(image1);

    //image.addEventListener("loadend", handleImgLoad) //api에서 하면 필요
    
}
*/


function genRan(){
    const number = Math.floor(Math.random() * IMG_Number);
    return number
    /**랜덤함수 종류
     * Math.random() 소숫점까지 출력된 랜덤
        * Math.floor() 는 실수의 소숫점내림
        * Math.ceiling()은 실수의 소숫점 올림
     */
}

function init() {
    const ranNum = genRan();
    paintImag(ranNum);
}

init();
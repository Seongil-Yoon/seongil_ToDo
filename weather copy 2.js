const weather = document.querySelector(".js-weather");

const API_KEY = "ba4ee295402593ff38bcde1620813c6c"; //openweathermap서버에서 API를 가져온다
const COORDS = "coords"

function getWeather(lat ,lon){ //저장된 좌표로 날씨 get
    //따옴표""가 아닌 바틱``을 쓴다
    //JS가 새로고침없이 다른 사이트에서 데이터가져옴
    /**
     * .then() , 서버의 응답이 만약 1시간이 걸리면, 1시간동안 컴퓨터가 무엇을 할 것인가?
     * 서버의 응답시간 동안 다른일을 위해서 .then(); 다음 줄에 다른 함수가 있으면 응답이 완료될동안에 다음 줄의 
     * 코드들이 실행되고 응답이 완료되면 then()안에 콜백함수가 실행이 된다.
     */
    fetch( //Asynchronous : 비동기적인 실행(Ajax의 첫번째 글자) !== 동기적
        //원하는 사이트에서 가져온 API call링크를 fetch함수안에
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    )
     .then(function(response){ //콜백함수를 fetch API가 실행시킬때 콜백함수의 첫번째 인자의 값으로 response객체를 준다, 인자의 이름은 무상관
        //응답이 완료될동안에 response객체를 비동기적으로 먼저 불러와서 나중에 fetch데이터를 response에 담는다
        return response.json(); //응답완료되면 response객체의 json데이터에 날씨정보 넣고
        //json매개변수는 서버로부터 응답받은 껍데기 JSON
        //response.json()매개변수는 위치정보데이터 객체, 받아올려면 pending이 거림()
        //그냥 response반환하면 네트워크정보만 있음, .json()해야 응답완료된 날씨정보를 객체타입으로 불러올수있다.
    })
     .then(function(json){ //응답이 완료될 동안에 json객체의 틀을 마련?
         const temperature = json.main.temp;
         const place = json.name;
         weather.innerText = `${temperature}℃ ${place}`;

     });
     //.then(function(json){
     //    console.log(json);
     //});
     //.then 데이터가 응답됫을때 실행되고나서 함수호출, 기다려주는 역할
     //이렇게 안하면 fetch가 오류날수있다.
}

function saveCoords(coordsObj){ //좌표저장
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
    // JS객체를 JSON문자열로 변환
    // localStorage.setItem(COORDS,coordsObj);
    
    //JSON.stringfy는 자바스크립트 객체 값 표기를 JSON String표기로 바꾸줌
    //안하면 로컬저장소에 저장이 안됨.
    //JS에서 웹으로는 stringify
    //웹에서 JS로는 parse
}

function handleGeoSucess(postion){
    const latitude = postion.coords.latitude;
    const longitude = postion.coords.longitude;
    const coordsObj ={
        latitude, //변수명과 값이 동일하다 , latitude = latitude
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
    
}

function handleGeoError(){
    console.log("cant ")
}
function askForCoords(){ 
    navigator.geolocation.getCurrentPosition(handleGeoSucess, handleGeoError);//navigator API 사용
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords(); //좌표없으면 좌표부터 
    }else{//좌표있으면 좌표불러오고 날씨함수 호출
        const parseCoords = JSON.parse(loadedCoords);
        //JSON문자열을 JS객체로 변환
        getWeather(parseCoords.latitude,parseCoords.longitude);

    }
}

function init(){
    loadCoords();
}
init();
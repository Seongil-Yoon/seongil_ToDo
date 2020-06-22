const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");


// JSON = "JavaScript Object Notation", 데이터를 전달할때, JS가 그걸 다룰 수있도록 객체로 변환

const TODOS_LS = "toDos"; //브라우저 저장소의 키

let toDos = []; //const

function deleteToDo(event){ //버튼 이벤트리스너
   const btn =  event.target;
   const li = btn.parentNode; //버튼의 부모 클래스 <li>태그
   toDoList.removeChild(li);

   const cleanToDos = toDos.filter(function(toDo){ 
       // filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
       return toDo.id !== parseInt(li.id); //여기서 li는 누른버튼의 부모태그의 ID값이다.
   });
   toDos = cleanToDos //toDos가 const선언이면 업데이트가 안되서 let으로 바꾼다
   //클릭 이벤트가 발생때마다 해당태그가 없는 배열만 toDos에 들어감.
   
   saveToDos();//=> 로컬저장소에 저장시켜줘야 이전상태가 기억된다

}

function saveToDos(){ //저장
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //JS가 브라우저에 저장할떄 모든 데이터 타입은 String, 저장하면 Obj타입으로 됨.
    //JSON.stringfy는 자바스크립트 Object를 String으로 바꿔줌.
}

function paintToDo(text){
    const li = document.createElement("li"); //** html파일에 li태그를 생성해준다.

    const delBtn = document.createElement("button");
    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click", deleteToDo);

    const span = document.createElement("span");
    span.innerText = text;

    const newId = toDos.length + 1; //AutoIncrement

    li.appendChild(span); 
    //li태그(객체)에 button(delBtn)태그를 자식으로서 넣는다. li부모속성에 span자식속성을 넣는다. 
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    //<ul class="js-toDoList">태그 객체의 부모속성들에 js에서 만든 li태그의 자식속성을 넣는다(오버로딩?)
    
    const toDoObj={
        text: text,
        id: newId, 
    };
    toDos.push(toDoObj);
    saveToDos(); //배열에 넣고 브라우저에 저장
}

function handleSubmit(event){
    event.preventDefault();
    const crtValues = toDoInput.value; //입력창의 값을 반환.
    paintToDo(crtValues); //실질적으로 todo기능이 동작하는 함수
    toDoInput.value= ""; //submit하면 다시 빈칸이 되게 함
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS); //브라우저(TODOS_LS)에 String타입으로 저장되 있다.
    if(loadedToDos !== null){
        //console.log(loadedToDos); Load하면 String타입이된다, Object타입으로 바꿔야 된다
        const parsedTodos = JSON.parse(loadedToDos); //parsedTodos는 객체가 된다.
        parsedTodos.forEach( function(toDo){ //람다함수
            paintToDo(toDo.text); //배열 todo의 인덱스 1부터 시작해서 각 요소의 text속성을 차례대로 paint
        }) //forEach는 배열안에 각각의 요소들을 차례로 방문하여 매개변수로 넘겨줘서 내부함수실행, (ex:함수, print)
        

    }
    //할 일이 없으면 그냥 저장소에 있는 것들을 보여주면 된다.
}




function init(){
    loadToDos(); //불러오기
    toDoForm.addEventListener("submit", handleSubmit) //저장하기
}

init();
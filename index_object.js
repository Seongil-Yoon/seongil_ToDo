const seongilInfo = { //seongil이라는 객체 인스턴스
  name:"Seongil", //name은 변수, value는 Seongil
  age:"24",
  gender:"Male",
  isHandsome:true,
  favMovies :["기생충","마션"],
  favFood: [
    {
      name:"Kimchi", 
      fatty:"false"
      },
    {
      name:"CheeseBurger",
       fatty:"true"
    } //배열안에 2개의 객체가 만들어졌다
  ]
}; //{}컬리브라켓 

//객체안에 하나의 변수가 배열도 가능하다
// seongilInfo = true; //불가능

console.log(seongilInfo.name);

seongilInfo.gender="Female";

console.log(seongilInfo.gender);

console.log(seongilInfo.favFood);

//데이터의 정렬은 2가지
//DB에서 가져오면 Array
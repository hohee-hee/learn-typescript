// 각 타입을 키로 갖고 age를 넘버 타입으로 받는 새로운 타입을 정의해보자.

type Heroes = "Hulk" | "Capt" | "Thor";

type HeroAges = { [K in Heroes]: number }; // Heroes 타입을 순회하면서 각각 number로 저장

// 사용 예시
const ages: HeroAges = {
  Hulk: 33,
  Capt: 100,
  Thor: 1000,
};

// for in 반복문 코드
// arr에 있는 각각의 요소에 key로 접근 : key === index
// var arr = ['a', 'b', 'c'];
// for (var key in arr) {
//   console.log(arr[key]);
// }

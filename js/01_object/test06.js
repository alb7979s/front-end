// let m1 = {name: "조조", age: 33, gender: "남", addr: "성남"};
// let m2 = {name: "유비", age: 22, gender: "남", addr: "현덕"};
// let m3 = {name: "장비", age: 44, gender: "남", addr: "장수"};
// let m4 = {name: "관우", age: 11, gender: "남", addr: "관소"};

// 함수를 이용한 객체 생성
function getMember(name, age, gender, addr) {
  return { name: name, age: age, gender: gender, addr: addr };
  // ex6부터 이렇게도 가능
  // return {name, age, gender, addr};
}

let m1 = getMember('조조', 33, '남', '성남');
let m2 = getMember('유비', 22, '남', '현덕');
let m3 = getMember('장비', 44, '남', '장수');
let m4 = getMember('관우', 11, '남', '관소');
console.log('m1', m1);
console.log('m2', m2);
console.log('m3', m3);
console.log('m4', m4);

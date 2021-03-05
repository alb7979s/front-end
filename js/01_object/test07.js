/*
자바스크립트의 생성자 이해

- 일반 함수 동일 선언...
- 생성자는 함수 이름의 첫글자를 대문자로 시작하는 것을 권장한다.
  Number, Date, Object...
- **일반 함수가 아닌 생성자로 사용하기 위해서는 "new" 와 함께 사용해야 한다.
- new와 함께 사용하는 함수는 this의 해석이 달라진다.
*/

// 생성자 역할의 함수 정의
function Member() {
  console.log(this);
}

// new 와 함께 사용해야 한다.
let m1 = Member();
let m2 = new Member(); // this의 의미가 생긴다. 생성된 객체 자신을 나타낸다.
console.log('m1', m1); // 일반함수로 호출되어서 반환값이 없어 undefined
console.log('m2', m2); // new 와 함께 사용한 경우 생성된 객체가 반환된다.

// let m3 = Member;
// console.log('m3', m3);

/*
global
Member {}
m1 undefined
m2 Member {}
*/

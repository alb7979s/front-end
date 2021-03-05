// 빈 객체 생성
let member = {};
// let member = new Object();   // 이 방법도 있음
// 함수랑 생성자 => 생성자는 new

// 객체의 프로퍼티 설정하기
member.id = 'hong';
member['email'] = 'hong@a.com';

// 객체의 프로퍼티 확인하기
console.log(member.id);
console.log(member['email']);

// 객체의 프로퍼티명에 특수문자 또는 공백 있을 경우 "."으로 설정할 수 없다.
// member.home-page = "hong.com";
member['home-page'] = 'hong.com';

console.log('home-page', member['home-page']);

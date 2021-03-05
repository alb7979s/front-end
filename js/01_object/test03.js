let member1 = { id: 'hong', email: 'hong@a.com' };
let member2 = member1;      //주소값을 담음, 참조!!

member2.id = 'kang';

console.log(member1);
console.log(member2);

// 객체의 내용을 확인 : for ~ in 반복문 활용
for (let key in member1) {      //in하면 key 값 뱉음!
  console.log(key, member1[key]);
}

// 함수도 값처럼 취급 됨! value에는 뭐든 올수있음
member1.info = function () {
  console.log('info');
};

member1.info();

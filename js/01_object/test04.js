
var m1 = { name: '홍길동' };
var m2 = { name: '배수지' };

// this가 여러 방법으로 해석된대
// 1. 일반적으로 함수내에서의 this는 함수를 호출한 객체이다.
function msg() {
  console.log(this);
  // msg(); 로 호출한 경우 에러발생
  // TypeError: Cannot read property 'name' of undefined
  console.log(this.name + '님이 입장함...');
}

// 함수 주소값 넘김, 객체에 함수가 들어갔다 생각하면 됨
m1.msg = msg;
m2.msg = msg;

msg(); // undefined님이 입장함  => 이땐 글로벌객체가 출력됨, 함수에 기본적인 값을 설정하지 않았으면(객체 안줌) 브라우저가 this를 Window로 해줌 (=window.msg()), js에선 global!
m1.msg();
m2.msg();

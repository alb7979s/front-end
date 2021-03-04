// 호이스팅(위쪽으로 끌어올림)

/*
자바스크립트 인터프리터 방식인데 두단계로 나뉨
선언, 초기화 => comfile과정
할당 => 실행 과정
*/
// console.log(aaa);    //aaa is not defined
console.log(msg);   // Cannot access 'msg' before initialization, let이랑 const는 undefined값 안줌(TDZ), let이랑 const도 호이스팅은 되지만 블록 단위에서만 쓰니까 쓸 수 있을지 없을지 몰라 그래서 초기화 되기 전에 못쓰게 만들어놓음
let msg = 'var 변수';
console.log(msg);


// 호이스팅(위쪽으로 끌어올림)

/*
자바스크립트 인터프리터 방식인데 두단계로 나뉨
선언, 초기화 => compile과정
할당 => 실행 과정
*/
console.log(msg);   //undefined
var msg = 'var 변수';
console.log(msg);

console(i);
for(var i = 0; i < 10; i++){}
console.log(i);

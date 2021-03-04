// 함수 선언 두가지 방식 (생성자 함수 방식은 거의 안쓰인대서 뺌)
fun1();
fun2();
console.log(1);
console.log(2);
console.log(3);

function fun1() { console.log(1); }

var fun2 = function () {};

/*
위에꺼 이렇게 실행될거임

-------------------------------------
function fun1() { console.log(1); }     // 컴파일
var fun2 = undifiend;
-------------------------------------
fun1();                                 // 실행
fun2(); //fun2 is not a function
console.log(1);                         
console.log(2);
console.log(3);
var fun2 = function () {};
*/
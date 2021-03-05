/*
    콜백함수 이해하기 - 1

    - 함수도 데이터 타입의 일종이기 때문에 값처럼 주고 받을 수 있다.
*/
function func() {
    console.log("func 호출됨");
}

var f1 = func;  //이러면 주소값이 가고, var f1 = func(); 이러면 return값인 undefined가 갈거임!
var f2 = f1;
func();
f1();
f2();











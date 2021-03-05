/*
    콜백함수 이해하기 - 3

    - 함수의 결과로 함수 리턴하기 (많이 쓰인대!)
*/
function func () {
    function cb() {
        console.log("리턴된 함수 실행");
    }
    return cb;
}
var myCb = func();
console.log( typeof (myCb) );
// 리턴된 함수 실행하기
myCb();

// func()(); 이래도 됨! (함수안에 함수 실행)

function func1 () {
    return function () { console.log("리턴된 함수 실행1"); };
}
var myCb1 = func1();
myCb1();

//func1()();








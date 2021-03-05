/*
    콜백함수 이해하기 - 2

    - 매개변수로 함수 넘기기
    - 매개변수로 익명함수 넘기기
*/
function func(callback) {
    // 함수는 object인데 type 찍어보면 function나옴
    console.log( typeof (callback) );
    // 넘어온 함수 실행하기
    callback();
}

function myCall() {
	console.log("myCall 호출됨");
}
// func(myCall());
func(myCall);


// func(function () { console.log("익명함수 호출됨...") });








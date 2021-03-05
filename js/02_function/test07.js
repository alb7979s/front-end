/*
    - 특정한 시간뒤에 지속적으로 함수를 실행시킴(콜백함수)

    var id = setInterval(콜백함수, 밀리센컨드);
    
    - 등록된 함수의 정보를 취소하기
    clearInterval(id);
*/
function func() {
  console.log('func 호출됨..');
}
let id = setInterval(func, 1000);
setTimeout(function () {
  clearInterval(id);
}, 5100);

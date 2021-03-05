/*
    - 특정한 시간뒤에 함수를 1번 실행시킴(콜백함수)

    var id = setTimeout(콜백함수, 밀리센컨드);
    
    - 등록된 함수의 정보를 취소하기
    clearTimeout(id);
*/


// 특정 시간마다 함수 호출
let id;
function func() {
  console.log('func 호출됨');
  // 특정 시간 뒤에 함수 호출(1번)
  id = setTimeout(func, 1000);    //자바스크립트에선 이런걸 큐에 담는다함
}
func();

//5.1초 후에 취소 시킴
setTimeout(function () {
  clearTimeout(id);
}, 5100);

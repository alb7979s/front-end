// js는 오버로딩 개념 없음!! 그냥 덮어써버림
function msg(m) {
    console.log(m);
}
msg('a');

function msg(m1, m2) {
    console.log(m1, m2);
}
msg('a', 'b');

msg('a', 'b', 'c')
// a undefined
// a b

// 그래서 여러개의 값이 들어올때는 이럼
function msgArg() {
    console.log('-------------------------');
    for(let i = 0; i < arguments.length; i++){
        console.log(arguments[i]);
    }
}
msgArg('a');
msgArg('a', 'b');
msgArg('a', 'b', 'c')


// arguments 지원 안해주는 함수도 있음, 화살표 함수(arrow function), 람다식이랑 유사
let fun3 = () => {};
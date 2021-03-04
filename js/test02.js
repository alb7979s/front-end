// var, let 차이 => 범위, var는 함수레벨, let은 블록레벨

for(var i = 0; i < 10; i++) {}
console.log(i);

for(let j = 0; j < 10; j++) {}
// console.log(j);  //error


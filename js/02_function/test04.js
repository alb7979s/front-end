// forEach(위쪽은 forEach를 보기 위한 빌드업임)
let arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log("합1 : " + sum);
sum = 0;
function arrFor(arr, cb) {
	for (let i = 0; i < arr.length; i++) {
		cb(i, arr[i]);
	}
}
// 이렇게 하면 할 일만 신경쓰면 됨! 
arrFor(arr, function (i, val) { sum += val });
// arrFor(arr, (i, val) => sum += val );
console.log("합2 : " + sum);


// 홀수번째 인덱스 위치의 값들의 합을 출력
sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 1) sum += arr[i];
}
console.log("홀수 번째 합 : " + sum);

sum = 0;
arrFor(arr, function (i, val) { if (i % 2 == 1) sum += val; });
console.log("홀수 번째 합 : " + sum);

// 위에 기능들 이미 구현해놓음!
sum = 0;
arr.forEach(function (val, i) {
	if (i % 2 == 1) sum += val;
});
console.log("홀수 번째 합 : " + sum);



// forEach 직접 만들어보기~ 2
let MyArr = function () {
    this.data = [];
};

MyArr.prototype.push = function(value) {
    this.data.push(value);
};

MyArr.prototype.forEach = function(cb) {
    for(let i = 0; i < this.data.length; i++){
        cb(this.data[i], i, this.data);
    }
};

let ma = new MyArr();
ma.push(1);
ma.push(2);
ma.push(3);

ma.forEach(function (val, i, arr) {
    console.log(i, val, arr);
});

// 사실 위에거 다 있음! ㅎㅎ;
let a = new Array();
a.push(1);
a.push(2);
a.push(3);
a.forEach(function (val, i, arr) {
    console.log(i, val, arr);
});

// 하나더!
let a2 = a.filter(function(val) { // filer()는 return 값 true, false 줘야함
    return val % 2 == 0;
});    
console.log(a2);
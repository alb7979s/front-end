function jQuery(val) {
    let elements = [];
    for(let el of document.querySelectorAll(val)){
        elements.push(el);
    }

    //$('#a').text("버튼 1번이 클릭 되었음"); 이거 쓸 수 있게 객체에 프로퍼티 함수로 추가해줄거
    elements.text = function(text) {
        //매개변수에 따라 set, get 처리해줄거임! 
        if (text != undefined){
            // 함수를 호출한 객체가 this 이므로 여기선 elements 써도 되는데 this로 써준거
            for(let el of this){
                el.innerHTML = text;
            }
            return this;    //이런식으로 체이닝 방식 만들어줌
        }
        //text 매개변수가 안넘어온 경우, 근데 jquery get하는 함수들 보통 다 안주고 첫번째거만 줌, text() 함수는 모든 경우 다 반환해줌
        let result = '';
        for(let el of this ){
            result += el.innerText + "\n";
        }
        return result;
    }
    
    //   $('button').on('click', function() {});
    elements.on = function(eventType, listenerFn){
        for(let el of this){
            el.addEventListener(eventType, listenerFn);
        }
        return this;
    };
/*
    // $('button').click(function() {});
    elements.click = function(listenerFn) {
        for(let el of this){
            el.addEventListener('click', listenerFn);
        }
        return this;
    };
    // 간단한거 하나 더! $("div").mousemove(function() {})
    elements.mousemove = function(listenerFn) {
        for(let el of this){
            el.addEventListener('mousemove', listenerFn);
        }
        return this;
    };
*/
    // 위에 코드가 반복됨! 이런식으로 해줄수 있음
    elements.click = function (listenerFn) {
        return this.on('click', listenerFn);
    }
    elements.mousemove = function (listenerFn) {
        return this.on('mousemove', listenerFn);
    }

    return elements;
}
let $ = jQuery;
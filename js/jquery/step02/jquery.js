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
    return elements;
}
let $ = jQuery;
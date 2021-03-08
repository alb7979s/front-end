function jQuery(val) {
    // console.log(val);
    let elements = [];
    for(let el of document.querySelectorAll(val)){
        elements.push(el);
    }
    return elements;
}

let $ = jQuery;
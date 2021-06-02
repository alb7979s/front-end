function LikeButton() {
    const [liked, setLiked] = React.useState(false);       //useState() => 컴포넌트의 상태값을 추가할 때 사용
    const text = liked ? '좋아요 취소' : '좋아요';
    return React.createElement(
        'button',                                          //문자열로 html 해당하는 태그 만들어줌
        { onClick: () => setLiked(!liked) },               //속성값
        text,                                              //세번째 이후로는 children
    );
}
// 보통 돔 요소 하나에 렌더링을 하는데 이렇게도 쓸 수 있다 정도로 이해, 이런경우 보통 리액트 내에서 해결해주는게 좋음
// const domContainer1 = document.getElementById('root1');
// ReactDOM.render(React.createElement(LikeButton), domContainer1);
// const domContainer2 = document.getElementById('root2');
// ReactDOM.render(React.createElement(LikeButton), domContainer2);
// const domContainer3 = document.getElementById('root3');
// ReactDOM.render(React.createElement(LikeButton), domContainer3);

// 이런식으로
const domContainer1 = document.getElementById('root1');
ReactDOM.render(                                            //렌더링
    React.createElement(                                    //컴포넌트 렌더링 할 때도 리액트요소(react element)로 만들어줌
        'div',
        null,
        React.createElement(LikeButton),
        React.createElement(LikeButton),
        React.createElement(LikeButton),
    ),
    domContainer1,                                          //domContainer1에 렌더링
)
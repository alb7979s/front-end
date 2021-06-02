// createElement코드를 jsx로 바꿔줄거, 이러고 그냥 실행하면 문법 에러남(js표준이 아니기 때문에), 따라서 babel 이용해서 변환할거
function LikeButton() {
    const [liked, setLiked] = React.useState(false);       
    const text = liked ? '좋아요 취소' : '좋아요';
    return <button onClick={() => setLiked(!liked)}>{text}</button>;
    // return React.createElement(
    //     'button',                                          
    //     { onClick: () => setLiked(!liked) },               
    //     text,                                              
    // );
}
function Container() {
    [count, setCount] = React.useState(0);
    return <div>
        <LikeButton />
        <div>
            <span>현재 카운트: </span>
            <span style={{ marginRight: 10, color: 'red' }}>{count}</span>
            <button onClick={() => setCount(count + 1)}>증가</button>
            <button onClick={() => setCount(count - 1)}>감소</button>
        </div>
    </div>
    // return React.createElement(
    //     'div',
    //     null,
    //     React.createElement(LikeButton),
    //     React.createElement(
    //         'div',
    //         { style: { marginTop: 20 } },
    //         React.createElement('span', null, '현재 카운트: '),
    //         React.createElement('sapn', { style: { marginRight: 10 } }, count),
    //         React.createElement(
    //             'button',
    //             { onClick: () => setCount(count + 1) },
    //             '증가',
    //         ),
    //         React.createElement(
    //             'button',
    //             { onClick: () => setCount(count - 1) },
    //             '감소',
    //         ),
    //     ),
    // );
}
const domContainer = document.getElementById('root');
ReactDOM.render(React.createElement(Container), domContainer);
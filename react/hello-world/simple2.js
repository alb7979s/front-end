// createElement코드를 jsx로 바꿔줄거, 이러고 그냥 실행하면 문법 에러남(js표준이 아니기 때문에), 따라서 babel 이용해서 변환할거
function LikeButton() {
  const [liked, setLiked] = React.useState(false);
  const text = liked ? '좋아요 취소' : '좋아요';
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => setLiked(!liked)
  }, text); // return React.createElement(
  //     'button',                                          
  //     { onClick: () => setLiked(!liked) },               
  //     text,                                              
  // );
}

function Container() {
  [count, setCount] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LikeButton, null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "\uD604\uC7AC \uCE74\uC6B4\uD2B8: "), /*#__PURE__*/React.createElement("span", {
    style: {
      marginRight: 10,
      color: 'red'
    }
  }, count), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count + 1)
  }, "\uC99D\uAC00"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count - 1)
  }, "\uAC10\uC18C"))); // return React.createElement(
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
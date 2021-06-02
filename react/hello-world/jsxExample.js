// html에서 class라는 이름으로 입력할 수 있는데, js에서는 class가 예약어라서 className으로
<div className="box">
    {/* title 컴포넌트 렌더링, 컴포넌트도 html 다른 태그처럼 입력 가능, 속성값 문자열은 이렇게, 그 외에는 {}이 안에 */}
    <Title text="hello world" width={200} />
    {/* 이벤트 핸들러도 중괄호로 감싸져있음 */}
    <button onClick={() => { }}>좋아요</button>
    {/* marginTop 카멜 표기법으로함, css에서는 -이용하는데 js에서 마이너스로 인식하기 때문에 카멜케이스로 입력해줌 */}
    <a href="/home" style={{ marginTop: '10px', color: 'red' }}>
        홈으로 이동
    </a>
</div>;
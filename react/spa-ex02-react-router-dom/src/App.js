import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Rooms from './Rooms';

export default function App() {
    return (
        // BrowserRouter 컴포넌트에서 현재 페이지의 상태값 관리해줌
        <BrowserRouter>
            <div style={{ padding: 20, border: '5px solid gray' }}>
                {/* Link 컴포넌트 쓰면 클릭했을 때 to에 해당하는 경로로 */}
                <Link to="/">홈</Link>
                <br />
                <Link to="/photo">사진</Link>
                <br />
                <Link to="/rooms">방 소개</Link>
                <br />
                {/* Route 컴포넌트 쓰면 path정보에 따라 어떤 컴포넌트를 렌더링 할지 결정해줌 */}
                {/* exact 안쓰면 /photo일때 Home도 렌더링 됨 이거 방지 */}
                <Route exact path="/" component={Home} />
                <Route path="/photo" component={Photo} />
                <Route path="/rooms" component={Rooms} />
            </div>
        </BrowserRouter>
    );
}

function Home() {
    return <h2>여기는 홈페이지 입니다. 원하는 페이지 버튼을 누르세요</h2>
}
function Photo() {
    return <h2>여기는 Page1 입니다.</h2>
}
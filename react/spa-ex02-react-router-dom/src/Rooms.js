import React from 'react';
import { Route, Link } from 'react-router-dom';

export default function Rooms({ match }) {
    return (
        <div>
            <h2>방 소개 페이지</h2>
            <Link to={`${match.url}/blueRoom`}>파란 방</Link>
            <br />
            <Link to={`${match.url}/greenRoom`}>초록 방</Link>
            <br />
            {/* 아래 :은 파라미터 사용하겠다고 선언한거 */}
            <Route path={`${match.url}/:roomId`} component={Room} />
            <Route exact path={match.url} render={() => <h3>방을 선택해주세요</h3>} />
        </div>
    );
}

function Room({ match }) {
    return <h2>{`${match.params.roomId} 방을 선택하셨습니다.`}</h2>;
}
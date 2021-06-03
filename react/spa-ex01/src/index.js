import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

function App() {
    // useEffect(): 이벤트 핸들러를 등록하거나 API를 호출하는 등의 부수 효과를 발생 시킬 때 사용하는 리액트 함수
    useEffect(() => {
        // 브라우저에서 페이지 전환 요청이 발생 했을때 js가 알기 위해서 onpopstate이벤트 핸들러 등록
        window.onpopstate = function (event) {
            console.log(`location: ${document.location}, state: ${event.state}`);
        };
    }, []);
    return (
        <div>
            {/* 브라우저에게 알려줌 pushState 매개변수: (데이터, title, url) */}
            <button onClick={() => window.history.pushState('v1', '', '/page1')}> page1 </button>  
            <button onClick={() => window.history.pushState('v2', '', '/page2')}> page2 </button>
        </div>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
    //js에서 현재 페이지 정보 저장하기 위해 pageName 상태값으로 추가
    const [pageName, setPageName] = useState('');
    useEffect(() => {
        window.onpopstate = function (event) {
            //전환 요청 있으면 해당 페이지로
            setPageName(event.state);
        };
    }, []);
    // 상태값 변경해주려고 새로 만들어줌
    function onClick1() {
        const pageName = 'page1';
        window.history.pushState(pageName, '', '/page1');
        setPageName(pageName);
    }
    function onClick2() {
        const pageName = 'page2';
        window.history.pushState(pageName, '', '/page2');
        setPageName(pageName);
    }
    return (
        <div>
            <button onClick={onClick1}> page1 </button>  
            <button onClick={onClick2}> page2 </button>
            {/* pageName 이용해서 렌더링 */}
            { !pageName && <home /> }
            { pageName === 'page1' && <Page1 />}
            { pageName === 'page2' && <Page2 />}
        </div>
    );
}

function Home() {
    return <h2>여기는 홈페이지 입니다. 원하는 페이지 버튼을 누르세요</h2>
}
function Page1() {
    return <h2>여기는 Page1 입니다.</h2>
}
function Page2() {
    return <h2>여기는 Page2 입니다.</h2>
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);

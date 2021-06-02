import logo from './logo.svg';      //img도 그냥 import해서 사용(이러면 이미지 경로에 해시값 들어가서 효율적 활용 가능)
import './App.css';

function App() {
  // 데이터 동적으로 받아옴
  function onClick() {
    import('./data.json').then(({ default: data }) => {
      console.log({ data });
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={onClick}>데이터 보이기</button>
        <p>Hello world!</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

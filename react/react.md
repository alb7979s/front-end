---
typora-copy-images-to: images
---

# 리액트

##### 특징

- facebook에서 개발하고 관리하는 UI라이브러리, UI기능만 재공
- 전역 상태 관리, 라우팅, 빌드시스템은 각 개발자가 직접 구축해야함
- 그래서 자유도 높음, 개발환경 직접 구축해야하는 번거로움이 있음
- 이 단점을 create-react-app 이라는 툴로 어느정도 보완
- 왜 쓸까요? 
  - UI 자동으로 업데이트
  - UI = render(state)
  - render함수는 순수 함수로 작성(랜덤함수x, 외부상태변경x)
  - state는 불변변수로 관리
  - 이 두개 잘 사용하면 복잡도 낮아지고 버그 확률 낮아짐, 또 렌더링 성능 향상
  - 가상 돔(virtual dom)을 통해서 UI를 빠르게 업데이트(이전 UI상태를 메모리에 유지해서 변경된 부분만 실제 돔에 반영해주는 기술), 오해하면 안되는게 순수 자바스크립트로 특정 프로젝트에 맞게 최적화 하면 리액트보다 더 빠르게 동작할 수 있음

##### 바벨

- 초기 ES6문법 ES5 문법으로 변환하는 용도로 많이 사용했었음
- 최근에는 코드 주석 제거하거나 코드 압축하거나
- 리액트에서는 jsx문법을 createElement 함수를 호출하는 코드로 변환
- 터미널에서 npm으로 바벨 설치할건데, npm으로 패키지 파일 관리할때는 package.json파일이 필요하므로 npm init -y 입력해줌
- npm install @babel/core @babel/cli @babel/preset-react 입력해줌
  - core: 바벨의 핵심 기능
  - cli: cli에서 사용할 바이너리가 들어있음
  - preset-react: react를 위한 플러그인 여러개 모아놓은것(플러그인은 하나의 변환하는 기능을 의미하고, 그러한 여러개의 플러그인을 모아놓은게 프리셋)
- src소스 만들어서 jsx로 작성한 파일 옮기고 바벨 이용해서 바꿔줄거임
- npx babel --watch src --out-dir . --presets @babel/preset-react
  - 위처럼 하면 src폴더에 있는거 파일 변경될 때마다 컴파일 자동으로 해줌
  - node_modules/.bin 보면 바벨의 바이너리 파일 있는데, npx 명령어 사용해서 바이너리 파일 실행 가능, 만약 설치 안했으면 npx 명령어가 자동으로 바벨 패키지 다운받아서 실행해줌

##### 웹팩

- 파일 내용 기반으로 파일 이름에 해시값 추가 => 효율적으로 캐싱 이용
- 사용되지 않는 코드 제거
- js 압축
- js에서 css, json, txt파일 등을 일반 모듈처럼 불러오기
- 위 내용들처럼 js안에서 모든거 처리할 수 있는 편리한 기능들 제공
- 가장 큰 이유는 모듈 시스템(ESM, commonJS)을 사용하고 싶어서래유
  - ESM: ES6에 추가된거
  - commonJS: 노드에서 많이 사용됨
- 요즘 브라우저 ESM 많이 지원하지만 많은 오픈 소스가 commonJS로 작성되었대 commonJS는 지원 안해줘서 웹팩 쓴대

- npm install webpack webpack-cli react react-dom (issue: 프로젝트 이름이랑 겹치면 에러남)

- npx webpack (실행) 하면 dist/ 아래에 번들링된 파일이 생성됨(default가 dist/라서 여기 생성된거)
- index.js에서 가져다 쓰는 모든 파일들이 하나의 파일로 만들어지는거

##### create-react-app으로 시작!

- react 개발환경 직접 구축하려면(webpack, babel, jset, eslint, polyfill, HMR, ... 너무 많음)
- 이런거 하기 쉽게 페이스북에서 관리하는 공식 툴
- npx create-react-app cra-test
- 초기 프로젝트 구축시 cra 사용해도 되고 next.js라는 프레임워크 사용도 가능
  - cra는 서버사이드 렌더링 지원 x, 따라서 서버사이드 렌더링 필수면 next.js쓰는게 좋음
  - 설정 변경(커스터마이징) 면에서도 next.js가 더 좋음
- 설치된거 보면 
  - public에 리소스 파일들
  - src에서 작업하게 될거
- npm start해서 테스트 해볼수있음(HMR기능으로 수정시 바로바로 적용됨)
- npm start는 배포할때 사용x, 개발모드에서만 사용(개발모드라 성능 최적화 안되어있음)
- 배포시에는 빌드 명령어 사용
- js에서 import해서 사용시 좋은점: json같은 데이터 사이즈 크거나 항상 필요하지 않고 특정 순간에만 필요하면 그때그때 받아오는게 좋음 

- cra 명령어
  - start: 개발모드로 실행시 사용, 기본적으로 http로 실행되고 https로 사용하고 싶으면 set HTTPS=true \&\& npm start 해주면 됨(windows기준)
  - build: 배포할 때 사용, 빌드하면 정적파일이 생성됨, 서버에서는 생성된 build 폴더 안에 있는 내용들 정적파일로 서비스 하면 됨, 별도로 서버에 애플리케이션을 실행 하지 않기 때문에 서버사이드 렌더링으로 동작할 수 없는거. 로컬에서 정적파일 실행해보려면 npx serve -s build 해보면 됨
  - test: 테스트시 사용, .test.js 이렇게 이름으로 하면 테스트 파일로 인식
  - eject: react-scripts를 사용하지 않고 모든 설정 파일을 추출하는 명령어, cra를 기반으로 직접 개발환경을 구축하고 싶을 때 사용. 꼭 필요한거 아니면 관리측면에서 추출안하는게 좋음
- polyfill
  - 오래된 브라우저에서 지원 안해주는 기능 있을 때 pollyfill 추가해서 사용, 보통 core-js라는 것을 많이 사용해서 추가함
  - import 'core-js/features/string/pad-start' 이런식으로 추가해서 사용
  - cra에 기본적으로 core-js가 내장되어 있기 때문에 그냥 import만 해서 사용하면 됨
- 환경변수
  - 개발, 테스트 또는 배포 환경별로 다른 값을 적용할 때 유용
  - 전달된 환경변수는 코드에서 process.env.{변수 이름} 이런식으로 사용 가능
  - cra에서는 기본적으로 process.env.NODE_ENV 가지고 있음
    - npm start => development
    - npm test => test
    - npm run build => production 이라는 값을 가지고 있음
  - 환경변수 커맨드 라인에서 입력시 set "**REACT_APP_**API_URL=api.myapp.com" && npm start
  - 환경변수 많아지면 .env 파일 만들어서 관리하는게 좋음
  - 예를들면 .env.development 따로, .env.production 따로 만들어서 각각 상수같은거 다르게 설정해서 테스트 가능

---

##### 용어

- 엘리먼트(element): 화면에 표시할 내용을 기술, React의 가장 작은 단위로 불변객체임(엘리먼트를 생성한 이후 해당 엘리먼트의 자식이나 속성을 변경할 수 없음. 엘리먼트는 영화에서 하나의 프레임과 같이 특정 시점의 UI를 보여줌)
- 컴포넌트(component): 개념적으로 컴포넌트는 js함수와 유사함. "props"라고 하는 임의의 입력을 받은 후, 화면에 어떻게 표시된느지를 기술하는 리액트 엘리먼트를 반환

- jsx(JavaScript eXtension): HTML 문법을 js코드 내부에 쓴 것, react에서 HTML을 표현할 때 jsx를 사용함 빌드시 바벨에 의해 js로 변환됨
  - jsx 규칙!
    - 속성은 항상 쌍따옴표로 감쌈
    - 태그는 항상 닫혀있어야함
    - 어떤 태그든 self-closing tag 가능 \<div/\> 이런식으로
    - 형제 노드 작성 불가
    - jsx안에 js값은 변수를 먼저 렌더 안에서 정의하고 리턴에서 변수명을 중괄호로 감싼 형태로 표현

- 렌더링: html element or React element 등의 코드가 눈으로 볼 수 있도록 그려지는 것


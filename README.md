# React 

by 생활코딩

## 1. React

> A JavaScript libarary for building user interfaces ( reacts.org )

- 자바스크립트 라이브러리(UI담당)
- 웹과 모바일을 위한 하나의 완성된 자바스크립트 라이브러리
- 프레임워크가 아니다. jQuery와 같은 자바스크립트 라이브러리
- 2011년 facebook에서 시작한 오픈소스. 지속적인 업데이트 제공
- 2013년에 출시. TypeScript와 같이



###  Why React

- 컴포넌트
- JSX( JS + HTML ) : javascript안에 html을 넣을 수 있다.
- Virtual DOM ( 구분 페이지로 빠르게 업데이트 )



## 2. 개발 환경(Windows)

> codesandbox.io에서 여러 환경에서 테스트해볼 수도 있다.

### 1) nodejs 설치

- nodejs.org에서 LTS or Current 설치
- cmd 창에서 npm -v에서 버전이 나오면 설치 성공

### 2) create-react-app

- npm
  - npm install -g create-react-app => -g : global
  - create-react-app -V 버전 나오면 성공
- npx : 설치할 때 마다 최신 버전의 create-react-app 사용

### 3) 프로젝트 디렉토리 

- cmd or gitbash에서 create-react app .

- vscode에서 npm start

  ![localhost_3000_](C:\Users\multicampus\Downloads\localhost_3000_.png)

## 3. 프로젝트 구조

### componet

index.html의 <div id="root"></div> 에 컴포넌트들이 들어가게 된다.

컴포넌트들은 src를 통해 만들어주면 된다.

index.js에 보면 

```
ReactDOM.render(

  <React.StrictMode>

    <App />

  </React.StrictMode>,

  document.getElementById('root')

);
```

## 4. deploy

- npm run build => build directory 생기게 됨
- npm install -g serve  
- npx serve -s build

> npm start 와 npx serve -s build
>
> build파일을 생성하면 용량이나 보안적인 부분에서 이점을 얻을 수 있다
>
> 리로드 시 개발자 도구의 network의 리소스 비교
>
> | npm start                                | npx serve -s build                       |
> | ---------------------------------------- | ---------------------------------------- |
> | 1.6mb                                    | 144kb                                    |
> | ![npm start resource](C:\Users\multicampus\Downloads\npm start resource.PNG) | ![npx serve -s build](C:\Users\multicampus\Downloads\npx serve -s build.PNG) |

## 5. props

```
 function Subject() {
   return (
     <header>
       <h1>WEB</h1>
       world wide web
     </header>
   );
 }

function App() {
  return (
    <div className="App">
      <Subject></Subject>
      <Toc></Toc>
    </div>
  );
}
```

props를 이용해 리펙토링

```
function Subject(props) {
  return (
    <header>
      <h1>{props.title}</h1>
      {props.sub}
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <Subject title="WEB" sub="world wide web"></Subject>
      <Toc></Toc>
    </div>
  );
}
```

> 서로다른 컴포넌트들을 만들어 낼 수 있다.

## 6. React Developer Tools

개발자도구에서 컴포넌트를 확인할 수 있다.

## 7. 상태관리

### 1) state

다양한 컴포넌트를 만들 때 필요

컴포넌트를 실행할 때 constructor함수가 있다면 제일 먼저 실행하면서 초기화를 담당.

React에서는 props, state가 바뀔 때 마다 자동 렌더링을 해준다.



> useState : 상태값을 관리해주는 훅. 안에는 배열, 객체, boolean, String... 이 들어갈 수 있다.

```
const [result, setResult] = React.useState();
```

> 컴포넌트 : 앨리먼트의 집합. 각각의 테그.

### 2) side effect

== 부수효과

userEffect : dependency array. 해당 키값이 바뀔때만 렌더링을 할 수 있다. render가 끝난 뒤 동작.

```
React.useEffect(()=>{
                window.localStorage.setItem("keyword", keyword);
            },[keyword]) // React에서는 변경사항이 있으면 렌더링이 계속되기 때문에 비효율적
                // 2번째 인자의 배열에 해당 키값이 바뀔때만 렌더링을 할 수 있도록 할 수 있음
```

> dependency array에 
>
> - 빈값을 넣주면 모든 변화에 반응한다. => 쓰는 의미가 없어서 거의 안 쓰인다.
> - 빈배열을 넣주면 처음만 동작한다.

### 3) 커스텀 훅 만들기

> 훅들의 반복을 줄여주기 위해

```
React.useEffect(()=>{
                window.localStorage.setItem("keyword", keyword);
                window.localStorage.setItem("result", result);
            },[keyword, result])
```

dependency array에 값을 넣어줄때 

만약 keyword만 바뀌고 result는 변화가 없을 때

localStorage에 result는 빈값으로 저장된다.

### 4) 훅 flow

App -> useState -> render -> useEffect

----

1)프로젝트 생성

npx create-react-app my-app --template typescript



2)router 설정

npm i react-router-dom

npm i @types/react-router-dom -D

> 'Switch' is not exported from 'react-router-dom' 
>
> v6 업데이트 후 바뀐점
>
> - Switch -> Routes
> - exact 는 쓰지 않는다
> - Route의 component ={Home}-> element{<Home/>}



3)npm i @emotion/react @emotion/styled


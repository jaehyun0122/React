# JSX

1. 리엑트에서 데이터 바인딩 쉽게하는 법

- src , id, href 등의 속성에도 {변수명, 함수 등}

```
import './App.css';

function App() {

    let text = "hello world~";

  return (
    <div className="App">
      <header className="App-header">
        <div>
            {text}
        </div>
      </header>
    </div>
  );
}

export default App;
```

2. state

- 변수 대신 쓰는 데이터 저장공간
- useState()를 이용해 만들어야됨
- 문자, 숫자, 배열, 객체 다 저장 가능
- state에 데이터를 저장해 놓으면 state가 변경 시 자동 재렌더링이 된다
- 자주 바뀌는 데이터는 state에 저장해주면 좋다

```
import React, {useState} from "react";
import './App.css';

function App(){

    let [a,b] = useState("남자 코트 추천"); // [a,b]
                                             // a에는 남자 코트 추천이 들어감 b에는 a를 세팅할 수 있는 함수


    let posts = '강남 고기 맛집';
    return (
        <div className="App">
            <div className="black-nav">
                <div>개발 blog</div>
            </div>
            <div className="list">
                <h3>{ a }</h3>
                <p>2월 17일 발행</p>
                <hr/>
            </div>
        </div>
    )
}
```

3. event Listner

1) onClick={함수}

배열이나 객체 변경시

데이터 복사본 만들어서 넣주기

let arr = [...a] : 깊은 복사
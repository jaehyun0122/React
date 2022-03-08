# Next.js

https://nextjs.org/showcase

Next.js 공식 홈페이지의 쇼케이스를 보면 많은 기업들이 Next.js를 선택하고 있다.

지금 부터 Next.js에 대해 알아보고 어떤 이유로 인기가 많은지 알아보려고 한다.

---

### 1. create project

npx create-next-app@latest

npm run dev

![localhost_3000_ (1)](C:\Users\multicampus\Downloads\localhost_3000_ (1).png)

프로젝트를 살펴보면 라우터나 Dom없이도 다른 페이지에 접근하거나 컴포넌트를 불러온다.

프레임워크와 라이브러리의 차이점이다.

코드를 올바른 위치에 놓으면 문제없이 동작할 것이다.

next.js는 파일이름을 url로 알아서 불러준다. => 컴포넌트를 임포트할 필요가 없다. 

#### 컴포넌트 이름보다 파일 이름이 중요.

## 2. 

create-react-app : client side render

```
<div id="root"></div> 
```

: 브라우저가 html을 가져올 때 비어있는  div를 가져온다.

=> 브라우저가 모든 자바스크립트를 요청

=> 브라우저가 자바스크립트와 react.js를 실행

=> 유저가 보는 UI가 만들어짐

느린 네트워크 환경에서는 처음에 코드를 가져오는 동안 흰 화면만 보여지게 된다.

로딩중이라는 화면도 보이지 않는다.



create-nextjs-app : pre-rendering

네트워크가 느리거나 자바스크립트가 비활성화 되있어도 html이 포함되어 있어 유저는 기본적은 html에 의해 화면을 볼 수 있다. 자바스크립트나 react.js가 렌더링안되도 미리 생성된 html로 페이지를 볼 수 있다.



next.js에서 a태그를 이용해 컴포넌트를 이동하면 전체 페이지가 새로고침된다.

next.js에서는 Link컴포넌트를 제공해준다.

<Link href="">

​	<a></a>

</Link>

=>Link테그에 property를 주면 적용이 안되므로 a테그에 주면 된다.



css 적용 방법

~.module.css

styled jsx

```
            <style jsx>
                {`
                    a{
                        color: blue
                    }
                `}
            </style>
```

className이 무작위로 붙여져 충돌을 피할 수 있다.



global css


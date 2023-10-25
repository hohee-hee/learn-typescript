# 😷 코로나 국내 현황판 만들기

> 기존 강의는 코로나 세계 현황판을 만들지만 2023년 3월부로 해당 API는 서비스를 종료하였기 때문에 공공데이터포털에서 제공하는 코로나19 국내 현황판을 제작할 예정이다.

최종 프로젝트 폴더 : 자바스크립트로 작성된 legacy 코드를 ts로 변환하기

## 자바스크립트 프로젝트에 타입스크립트 적용하기

0. 자바스크립트 파일에 JSDoc으로 타입 시스템 입히기
1. 타입스크립트의 기본 환경 구성

- [x] NPM 초기화
- [x] 타입스크립트 라이브러리 설치
- [x] 타입스크립트 설정 파일 생성 및 기본 값 추가

### 자바스크립트 코드에 타입스크립트를 적용할 때 주의해야 할 점

1. 기능적인 변경은 절대 하지 않을 것
2. 테스트 커버리지가 낮을 땐 함부로 타입스크립트를 적용하지 않을 것
3. 처음부터 타입을 엄격하게 적용하지 않을 것 (점진적으로 strict 레벨을 증가)

[출처 및 이후 절차](https://joshua1988.github.io/ts/etc/convert-js-to-ts.html#%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%BD%94%EB%93%9C%EC%97%90-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%A5%BC-%EC%A0%81%EC%9A%A9%ED%95%A0-%EB%95%8C-%EC%A3%BC%EC%9D%98%ED%95%B4%EC%95%BC-%ED%95%A0-%EC%A0%90)

### 기존 코드분석

1. `index.html`

- `header` 및 `body`로 구성
- `axios` 라이브러리 사용
- `chart.js` 라는 오픈소스 차트 라이브러리 사용
- `app.js` 로드

  ```html
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
  <script src="./app.js"></script>
  ```

2. `app.js`

- 간단하게 api 함수, 기본 methods, 이벤트 초기화, 클릭 시 실행 로직, api 데이터를 넣어주고 가공해주는 작은 함수들로 구성
- `startApp()`으로 실행

---

## ✨ 프로젝트 진행 내용

### 0. 점진적인 타입 시스템 적용 방법 - JSDoc

```js
// @ts-check

// 중략

/**
 * @typedef {object} CovidSummary
 * @property {Array<object>} Country
 */

// api

/**
 * @returns {Promise<CovidSummary>}
 */

function fetchCovidSummary() {
  const url = "https://api.covid19api.com/summary";
  return axios.get(url);
}
```

1. `//@ts-check` 를 js 파일 맨 위에 달아주기
2. 리턴 타입을 정의하고 싶은 함수에 `/**` 로 JSDoc 만들고 `@returns {type}` 작성하기
3. 추가적으로 타입을 생성하고 싶을 때에도 JSDoc을 만들고 `@typedef {type} name` 작성하기
4. 하위 속성은 `@property {type} name`으로 작성하기

### 1. 타입스크립트 기본 환경 구성

1. NPM 초기화 : `npm init -y`
2. 타입스크립트 라이브러리 설치 : `npm i typescript --save-dev`
3. 타입스크립트 설정 파일 생성 및 기본 값 추가

#### tsconfig.json 속성

`compilerOptions`

- `allowJs` : 자바스크립트 파일을 타입스크립트에서 인식해서 사용하겠다
- `target` :

---

## 📚 참고 자료 (기존 자료)

- [존스 홉킨스 코로나 현황](https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6)
- [Postman API](https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest#27454960-ea1c-4b91-a0b6-0468bb4e6712)
- [Type Vue without Typescript](https://blog.usejournal.com/type-vue-without-typescript-b2b49210f0b)

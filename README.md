# 🌿 국립세종수목원 웹사이트 클론코딩

> HTML, CSS, JavaScript 학습 후 진행한 국립세종수목원 공식 홈페이지 클론코딩 프로젝트

<br>

## 📌 프로젝트 소개

| 항목 | 내용 |
|------|------|
| **프로젝트명** | 국립세종수목원 웹사이트 클론코딩 |
| **한 줄 소개** | 국립세종수목원 공식 홈페이지를 HTML/CSS/JS로 재현한 클론코딩 프로젝트 |
| **제작 목적** | HTML5, CSS3, JavaScript 학습을 마친 후, 실제 서비스 중인 사이트를 선택하여 클론코딩을 진행했습니다. 실무에 가까운 웹페이지 구조와 레이아웃을 직접 구현하며 학습 내용을 복습하고 응용하는 것이 목적입니다. |

<br>

## 🗓️ 제작 기간

**총 3일** (집중 작업)

<br>

## 🛠️ 사용 기술

| 기술 | 용도 |
|------|------|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) | 페이지 구조 마크업 |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) | 스타일링 및 반응형 레이아웃 |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | 동적 기능 구현 |

<br>

✨ 주요 기능
1. 반응형 웹 (Media Query)
<br>
<img width="1633" height="745" alt="Image" src="https://github.com/user-attachments/assets/3f7f40fb-ddc8-410a-81cc-86c333b1fb57" />
Media Query 기반 반응형 레이아웃 구현
PC / 모바일 환경에 맞춰 헤더, 네비게이션, 콘텐츠 레이아웃 자동 전환
모바일에서는 햄버거 메뉴로 전환되어 사용성 최적화

<br>

2. 추천코스 탭 UI (JavaScript)
<br>
<img width="1633" height="870" alt="Image" src="https://github.com/user-attachments/assets/e9182623-f8b7-43ad-981e-f7c89092f8ec" />
JavaScript 기반 탭 클릭 시 코스 정보(이름, 설명, 난이도, 거리, 소요시간, 이미지)가 동적으로 변경
추천코스 1 / 2 / 3 탭 전환 기능 구현

<br>

3. 슬라이더 (Swiper.js)

<br>
<img width="1900" height="692" alt="Image" src="https://github.com/user-attachments/assets/9d418435-9451-4c37-ba9e-30ebb958ec55" />
Swiper.js 라이브러리를 활용한 이미지 슬라이더 구현
메인 비주얼 슬라이더, 장소 카드 슬라이더 등 다양한 섹션에 적용
자동 재생, 커스텀 속도, 호버 효과 등 세부 옵션 조정

<br>

4. 챗봇 (JavaScript 키워드 응답 시스템)
<br>
<img width="1900" height="692" alt="Image" src="https://github.com/user-attachments/assets/3f00e406-93cb-42fd-9c5f-727f0a2ebe27" />
JavaScript 기반 키워드 응답 시스템 활용
사용자가 입력한 키워드를 분석하여 관련 수목원 정보를 자동으로 응답
인기 키워드 및 자주 묻는 질문(FAQ) 바로가기 기능 제공

<br>

5. 실시간 날씨 정보 (OpenWeatherMap API)
<br>
<img width="1810" height="947" alt="Image" src="https://github.com/user-attachments/assets/86428312-8f39-401f-9f7c-a640adcb0eb7" />
OpenWeatherMap API를 연동하여 실시간 날씨 데이터 표시
현재 온도, 날씨 설명, 날씨 아이콘이 실시간으로 반영됨
방문 전 날씨를 확인할 수 있는 사용자 편의 기능

<br>

## 📁 폴더 구조

```
📦 sejong-arboretum
├── 📄 index.html          # 메인 페이지
├── 📄 guide.html          # 관람안내 페이지
├── 📄 explore.html        # 둘러보기 페이지
├── 📄 participate.html    # 참여하기 페이지
├── 📄 about.html          # 기관소개 페이지
├── 📄 chatbot.html        # 챗봇 페이지
│
├── 📂 css/
│   ├── common.css         # 공통 스타일 (헤더, 푸터 등)
│   ├── sub.css            # 서브 페이지 공통 스타일
│   ├── main.css           # 메인 페이지 전용 스타일
│   └── chatbot.css        # 챗봇 페이지 스타일
│
├── 📂 js/
│   ├── main.js            # 메인 페이지 스크립트
│   ├── explore.js         # 둘러보기 페이지 스크립트
│   ├── participate.js     # 참여하기 페이지 스크립트
│   └── chatbot.js         # 챗봇 페이지 스크립트
│
├── 📂 images/             # 공통 이미지 (로고 등)
└── 📂 sub_images/         # 서브 페이지 이미지
```

<br>

## 🔧 문제 해결 과정

### 슬라이더 커스터마이징

슬라이더 섹션을 구현할 때 원하는 **슬라이드 속도**, **이미지 호버 효과** 등이 의도한 디자인대로 구현되지 않아 어려움을 겪었습니다.

- Swiper.js의 다양한 옵션(`speed`, `autoplay`, `transition`)을 하나씩 테스트하며 원인 파악
- AI를 활용해 여러 가지 해결 방법을 질문하고, 직접 시도해보는 과정을 반복
- CSS `transition`과 Swiper 이벤트 콜백을 조합하여 원하는 호버 효과 완성

### 공통 CSS 분리 및 서브페이지 구조 정리

메인페이지 작업이 어느 정도 진행된 후 서브페이지를 추가하면서 header, footer, 모바일 메뉴처럼 여러 페이지에서 반복되는 코드가 많아지는 문제가 있었습니다.

- 기존 `style.css`에서 공통으로 사용되는 header, footer 영역을 `common.css`로 분리
- 메인 전용 스타일은 `main.css`, 서브페이지 전용 스타일은 `sub.css`로 역할 구분
- CSS 연결 순서를 `common.css → sub.css`로 정리하여 공통 스타일 위에 페이지별 스타일이 적용되도록 개선
- 이후 guide, explore, participate, about 페이지에서 동일한 header/footer 구조를 재사용할 수 있도록 구성

### 이미지 경로 오류 해결

코스 이미지와 서브페이지 비주얼 이미지가 정상적으로 출력되지 않는 문제가 있었습니다.

- HTML과 JavaScript에서 사용하는 이미지 경로를 비교하며 원인 확인
- `sub_images`와 `sub-images`처럼 언더바와 하이픈 차이로 발생한 경로 오류를 수정
- 이미지 확장자 `.jpg`, `.png`가 실제 파일명과 일치하는지 확인
- 브라우저 개발자 도구의 Console과 Network 탭을 활용해 이미지 로딩 실패 원인 파악

### 반응형 레이아웃 깨짐 수정

PC 화면에서는 정상적으로 보이던 카드, 표, 코스 정보 영역이 모바일 화면에서 글자가 줄바꿈되거나 이미지가 과도하게 커지는 문제가 발생했습니다.

- `@media (max-width: 768px)`를 활용하여 모바일 전용 레이아웃 작성
- PC에서는 가로 배치, 모바일에서는 세로 배치가 되도록 `flex-direction` 변경
- 이미지에는 `width: 100%`, `object-fit: cover`를 적용하여 비율이 깨지지 않도록 수정
- 긴 텍스트에는 `word-break: keep-all`, `line-height`를 적용해 가독성 개선


### 실시간 날씨 API 연동

메인페이지의 날씨 영역에 실제 세종 지역 날씨 정보를 표시하기 위해 OpenWeatherMap API를 활용했습니다.

- `fetch()`를 사용해 OpenWeatherMap API에서 현재 날씨 데이터 요청
- 응답 데이터에서 온도와 날씨 설명을 추출하여 화면에 표시
- 날씨 상태에 따라 Font Awesome 아이콘이 변경되도록 조건문 작성
- API 호출 실패 시 기본 안내 문구가 표시되도록 예외 처리 구현
<br>

## 💬 회고

이번 클론코딩을 통해 웹사이트 코드의 전반적인 **구조와 흐름**을 체감할 수 있었습니다.

단순히 코드를 따라 치는 것이 아니라, 실제 서비스되는 사이트를 분석하고 재현하면서 HTML/CSS/JS가 어떻게 유기적으로 맞물리는지 이해하게 되었습니다. 특히 **OpenWeatherMap API**를 연동하여 실시간 날씨를 페이지에 표시하는 기능을 직접 구현해보면서, API가 실제 서비스에서 어떻게 활용되는지 경험할 수 있었습니다.

앞으로는 더 복잡한 인터랙션이나 백엔드 연동까지 도전해보고 싶습니다.

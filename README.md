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

Media Query 기반 반응형 레이아웃 구현
PC / 모바일 환경에 맞춰 헤더, 네비게이션, 콘텐츠 레이아웃 자동 전환
모바일에서는 햄버거 메뉴로 전환되어 사용성 최적화

2. 추천코스 탭 UI (JavaScript)

JavaScript 기반 탭 클릭 시 코스 정보(이름, 설명, 난이도, 거리, 소요시간, 이미지)가 동적으로 변경
추천코스 1 / 2 / 3 탭 전환 기능 구현

4. 슬라이더 (Swiper.js)
<img width="1900" height="692" alt="Image" src="https://github.com/user-attachments/assets/9d418435-9451-4c37-ba9e-30ebb958ec55" />
Swiper.js 라이브러리를 활용한 이미지 슬라이더 구현
메인 비주얼 슬라이더, 장소 카드 슬라이더 등 다양한 섹션에 적용
자동 재생, 커스텀 속도, 호버 효과 등 세부 옵션 조정

5. 챗봇 (JavaScript 키워드 응답 시스템)
<img width="1900" height="692" alt="Image" src="https://github.com/user-attachments/assets/3f00e406-93cb-42fd-9c5f-727f0a2ebe27" />
JavaScript 기반 키워드 응답 시스템 활용
사용자가 입력한 키워드를 분석하여 관련 수목원 정보를 자동으로 응답
인기 키워드 및 자주 묻는 질문(FAQ) 바로가기 기능 제공

6. 실시간 날씨 정보 (OpenWeatherMap API)

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

<br>

## 💬 회고

이번 클론코딩을 통해 웹사이트 코드의 전반적인 **구조와 흐름**을 체감할 수 있었습니다.

단순히 코드를 따라 치는 것이 아니라, 실제 서비스되는 사이트를 분석하고 재현하면서 HTML/CSS/JS가 어떻게 유기적으로 맞물리는지 이해하게 되었습니다. 특히 **OpenWeatherMap API**를 연동하여 실시간 날씨를 페이지에 표시하는 기능을 직접 구현해보면서, API가 실제 서비스에서 어떻게 활용되는지 경험할 수 있었습니다.

앞으로는 더 복잡한 인터랙션이나 백엔드 연동까지 도전해보고 싶습니다.

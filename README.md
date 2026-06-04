# Optimizing Mamba for 3D Object Detection

> **성균관대학교 AI시스템 Team 1**
> 엣지 환경을 위해 Mamba의 경량화 임계점을 찾고, MLP 기반의 경량 모델과 성능 비교

<br />
## 배포 링크
- GitHub Pages URL: https://githubseyeon.github.io/AIsys_team1/
<br />

## 구현한 기능 체크리스트

### 1. Git/GitHub 사용 흔적 남기기
- [x] **커밋 최소 3회 이상 기록**
    - `init: README 추가` --> 프로젝트 초기화 및 README 추가
    - `add style: layout and interactions` --> 웹 페이지 디자인을 위한 CSS 스타일 시트 반영
    - `docs: README revised`--> 배포 URL 공유 및 작업 기록을 위해 README.md 문서 업데이트
- [x] **브랜치 분리 및 병합**
    - `feature/about` 브랜치 생성하여 작업 분리
    - --> 원격 저장소에 해당 브랜치 push 후 Pull Request(PR) 생성
    - --> 메인 브랜치로 최종 Merge

### 프로젝트 웹 페이지 구성
- [x] 소개, 프로젝트, 연락, 내비게이션을 포함
    - **반응형 내비게이션:** JS와 CSS를 활용해 About, Project, Contact로 연결되는 앵커 링크 제공. 모바일 환경(760px 이하)에서는 햄버거 토글로 제공
- **화면 전환 애니메이션:** 스크롤 시 섹션들이 아래에서 위로 페이드인 (`reveal`/`is-visible`)
- **스크롤스파이(ScrollSpy):** IntersectionObserver를 활용해 스크롤하는 위치에 따라 내비게이션 활성화 상태(`is-active`) 동기화

<br />

## 어려웠던 점/배운 점
- 최근 GitHub 보안 정책이 바뀌면서, 기존에 VSCode에서 로그인한 적이 있었음에도 `Authetification failed` 에러가 발생함. 첫 push 때 Personal Access Token을 발급받아 해결하였음
- 로컬과 원격 저장소의 브랜치 이름이 달라 `src refspec does not match any` 에러가 발생함. `git branch -M main`을 통해 기본 브랜치를 통일하여 두 환경에서 항상 일관적으로 관리되도록 하였음
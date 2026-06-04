/* =========================================================
   TEAM NOVA — 인터랙션 스크립트
   (내용을 바꿀 일은 거의 없습니다. 동작만 담당해요.)
   ========================================================= */

// 1) 모바일 햄버거 메뉴 열고 닫기
const toggle = document.getElementById("navToggle");
const menu = document.getElementById("navMenu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("is-open");
});

// 메뉴 링크를 누르면 메뉴를 닫기 (모바일에서)
document.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener("click", () => menu.classList.remove("is-open"));
});

// 2) 스크롤 위치에 따라 현재 보고 있는 메뉴를 강조 (스크롤스파이)
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav__link");

const spy = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === "#" + id);
        });
      }
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
sections.forEach((s) => spy.observe(s));

// 3) 스크롤하면 섹션이 부드럽게 나타나는 효과
const revealTargets = document.querySelectorAll(".section, .hero");
revealTargets.forEach((el) => el.classList.add("reveal"));

const revealer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
revealTargets.forEach((el) => revealer.observe(el));

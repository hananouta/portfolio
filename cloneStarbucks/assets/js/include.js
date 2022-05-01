// nav - 서브메뉴 열기
document.querySelectorAll(".gnb-menu-inner>ul>li").forEach((v, i) => {
  v.addEventListener("mouseover", (e) => {
    // 배경색
    const current = e.currentTarget;
    const submenu = current.querySelector(".gnb-sub-wrap");
    submenu.style.maxHeight = submenu.scrollHeight + "px";

    // 버튼색
    const subbtn = current.querySelector(".gnb-menu-inner>ul>li>h2");
    subbtn.classList.add("on");
  });
  v.addEventListener("mouseout", (e) => {
    const current = e.currentTarget;
    const submenu = current.querySelector(".gnb-sub-wrap");
    submenu.style.maxHeight = null;
    const subbtn = current.querySelector(".gnb-menu-inner>ul>li>h2");
    subbtn.classList.remove("on");
  });
});

// nav - 통합검색 열기
document.querySelector(".search>a").addEventListener("click", (e) => {
  const search = document.querySelector(".search");
  search.style.width = "180px";
  const input = document.querySelector(".search>input");
  input.style.width = "123px";
  const gnbSub = document.querySelector(".gnb-sub");
  gnbSub.style.right = "232px";

  e.currentTarget.addEventListener("click", (e) => {
    if (!e.currentTarget.value) {
      alert("검색어를 입력하세요");
    }
  });
});

// line-notice scroll
const listWrap = document.querySelector(".notice-item-wrap");
const listItem = document.querySelectorAll(".notice-item");
let height = 0;
let i = 0;
// transform: translateY(-24px);
setInterval(() => {
  i % listItem.length == 0 ? (height = 0) : (height -= 24);
  listWrap.style.transform = "translateY(" + height + "px)";
  i++;
  // listWrap.insertBefore(listItem[0],listItem[i+1]);
  // listItem[i].style.transform="translateY(-"+height+"px)";
  // height==listWrap.style.height?height=0:height+=24;
  // height=24;
  // if(height==-(listWrap.style.height)){height=0}
}, 2500);

// 프로모션 배너 열고 닫기
const promMore = document.querySelector(".right-wrap>a");
const promBanner = document.querySelector(".prom-banner");
promMore.addEventListener("click", (e) => {
  e.preventDefault();
  promBanner.classList.toggle("prom-bannerOpen");
  document.querySelector(".prom-more").classList.toggle("prom-moreOpen");
});

// 페이드인 Event
document.querySelectorAll(".sa-in").forEach((v, i) => {
  setTimeout(function() {
    v.classList.add("show");
  }, i * 500);
});

// 스크롤+페이드인 Event
// 참고 https://joshua-dev-story.blogspot.com/2020/11/javascript-css-scroll-animation.html
const scrollList = document.querySelectorAll(".sa");
let saTriggerMargin = 0;
let saTriggerHeight = 0;
const saDefaultMargin = 500;

const scrollFadeIn = function () {
  for (const element of scrollList) {
    if (!element.classList.contains("show")) {
      if (element.dataset.saMargin) {
        saTriggerMargin = parseInt(element.dataset.saMargin);
      } else {
        saTriggerMargin = saDefaultMargin;
      }
      if (element.dataset.saTrigger) {
        saTriggerHeight = document.querySelector(element.dataset.saTrigger).getBoundingClientRect().top + saTriggerMargin;
      } else {
        saTriggerHeight = element.getBoundingClientRect().top + saTriggerMargin;
      }

      if (window.innerHeight > saTriggerHeight) {
        let delay = element.dataset.saDelay ? element.dataset.saDelay : 0;
        setTimeout(function () {
          element.classList.add("show");
        }, delay);
      }
    }
  }
};
window.addEventListener("scroll", scrollFadeIn);

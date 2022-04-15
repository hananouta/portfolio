// Language List 
document.querySelector('.language-btn').addEventListener('click', (e)=>{
    const list = document.querySelector('.lan-list');
    const arrow = document.querySelector('.fa-angle-down');
    list.classList.toggle('d_block');
    if (list.classList.contains('d_block')){
        arrow.style.transform='rotate(-180deg)';
        arrow.style.transition='.3s';
    } else {
        arrow.style.transform='';
    };
});

// 회사소개 2depth
document.querySelector('.menu2dep').addEventListener('mouseover', (e)=>{
    e.preventDefault();
    // 배경생성
    const navfull = document.querySelector('.gnb-wrap');
    navfull.classList.add('open');
    // 가려둔 html 나타내기
    const submenu = document.querySelector('.submenu');
    submenu.style.maxHeight = submenu.scrollHeight+'px';
    submenu.classList.add('border');
});
// 닫기버튼
document.querySelector('.sub-close').addEventListener('click', (e)=>{
    e.preventDefault();
    const navfull = document.querySelector('.gnb-wrap');
    const submenu = document.querySelector('.submenu');
    navfull.classList.remove('open');
    submenu.style.maxHeight=null;
    submenu.classList.remove('border');
})

// 검색창 클릭
document.querySelector('.search').addEventListener('click', e=>{
    const area=document.querySelector('.search-area');
    area.classList.toggle('search-open');
    document.querySelector('.dimmed').classList.toggle('bgOn');
})
// 닫기버튼
document.querySelector('.search-close').addEventListener('click', (e)=>{
    e.preventDefault();
    const search = document.querySelector('.search-area');
    search.classList.remove('search-open');
    document.querySelector('.dimmed').classList.remove('bgOn');
})
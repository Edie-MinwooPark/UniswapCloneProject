// swiper 기능 구현하기

// swiper 관련 전역변수 선언
let _swiperContent = document.querySelector('.swiper ul');
let _prev = document.querySelector('.left-btn');
let _next = document.querySelector('.right-btn');
let _index = 1;
let isActive = false;
let _swiperWidth = 420;
let {length} = document.querySelectorAll('.swiper ul li');


//스와이프 함수 구현

function swiperMove(){
    _swiperContent.style.left = -(_index * _swiperWidth) + 'px';
};
swiperMove();

// 왼쪽버튼 클릭시 스와이프 기능 구현
_prev.addEventListener('click',function(){

    _swiperContent.style.transition = '1s'
    console.log("ddd")
    if(_index>0){
    _index--;
    }
    swiperMove();
    _swiperContent.ontransitionend =function(){
        if(_index === 0){
            _swiperContent.style.transition = 'none'
            _index = 4
            swiperMove();
        }
        isActive = false;
    }
});


// 오른쪽버튼 클릭시 스와이프 기능 구현
_next.addEventListener('click',function(){
    if(isActive == true) return;
    isActive = true;
    _swiperContent.style.transition = '1s'
    if(_index < length-1){
        _index ++;
    }
    swiperMove();
    _swiperContent.ontransitionend = function(){
        if(_index === length -1){
            _swiperContent.style.transition = 'none'
            _index = 1
            swiperMove();
        }
        isActive = false;
    }
})



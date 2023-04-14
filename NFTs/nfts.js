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
let backgroundchanger = document.querySelector('.nfts-swiper');
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
    if(_index == 3){
        backgroundchanger.style.backgroundImage = 'linear-gradient(to top, white,gray)'

    }
    if(_index == 2){
        backgroundchanger.style.backgroundImage = 'linear-gradient(to top, white,#B08F89)'
    }
    if(_index == 4 || _index == 0){
        backgroundchanger.style.backgroundImage = 'linear-gradient(to top, white,antiquewhite)'
    }
    if(_index == 5|| _index == 1){
        backgroundchanger.style.backgroundImage = 'linear-gradient(to top, white,pink)'
    }
    }
    swiperMove();
    _swiperContent.ontransitionend =function(){
        if(_index === 0){
            _swiperContent.style.transition = 'none'
            _index = 4
            backgroundchanger.style.backgroundImage = 'linear-gradient(to top, white,antiquewhite)'
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
        if(_index == 3){
            backgroundchanger.style.backgroundImage = 'linear-gradient(to top, white,gray)'

        }
        if(_index == 2){
            backgroundchanger.style.backgroundImage = 'linear-gradient(to top, white,#B08F89)'
        }
        if(_index == 4){
            backgroundchanger.style.backgroundImage = 'linear-gradient(to top, white,antiquewhite)'
        }
        if(_index == 5 || _index == 1){
            backgroundchanger.style.backgroundImage = 'linear-gradient(to top, white,pink)'
        }
    }
    swiperMove();
    _swiperContent.ontransitionend = function(){
        if(_index === length -1){
            _swiperContent.style.transition = 'none'
            _index = 1
            backgroundchanger.style.backgroundImage = 'linear-gradient(to top, white, pink)'
            swiperMove();
        }
        isActive = false;
    }
})

//4초에 한번씩 자동으로 스와이프 구현
setInterval(function(){
    _swiperContent.style.transition = '1s'
    if(_index < length-1){
        _index ++;
        
        if(_index == 3){
            backgroundchanger.style.backgroundImage = 'linear-gradient(to top, white,gray)'

        }
        if(_index == 2){
            backgroundchanger.style.backgroundImage = 'linear-gradient(to top, white,#B08F89)'
        }
        if(_index == 4){
            backgroundchanger.style.backgroundImage = 'linear-gradient(to top, white,antiquewhite)'
        }
        if(_index == 5){
            backgroundchanger.style.backgroundImage = 'linear-gradient(to top, white,pink)'
        }
    }
    swiperMove();
    _swiperContent.ontransitionend = function(){
        if(_index === length -1){
            _swiperContent.style.transition = 'none'
            _index = 1
            backgroundchanger.style.backgroundImage = 'linear-gradient(to top, white, pink)'
            swiperMove();
        }
        isActive = false;
    }
},4000);




// 스와이퍼 클릭시 실제 링크로 이동

let swiper = document.querySelector('.swiper');

swiper.addEventListener('click',function(e){
    e.stopPropagation();
    if(_index == 1 || _index == 5){
        window.location.href = 'https://app.uniswap.org/#/nfts/collection/0xed5af388653567af2f388e6224dc7c4b3241c544'
    }
    if(_index == 2){
        window.location.href = 'https://app.uniswap.org/#/nfts/collection/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d'
    }
    if(_index == 3){
        window.location.href = 'https://app.uniswap.org/#/nfts/collection/0x60e4d786628fea6478f785a6d7e704777c86a7c6'
    }
    if(_index == 0 || _index == 4){
        window.location.href = 'https://app.uniswap.org/#/nfts/collection/0xf48b45479ba7e121a3542626d5a5f3b07ec5b65d'
    }
    
});

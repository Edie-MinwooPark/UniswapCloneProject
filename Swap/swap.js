// 헤더 추가

function drawer(el, open = false) {
  this.el = el;
  this.isOpen = open;
  this.closeButton = null;

  Object.assign(this.el.style, {
    display: "block",
    position: "fixed",
    top: 0,
    bottom: 0,
    right: 0,
    width: "340px",
    paddingLeft: "30px",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    transition: "1s",
    borderRadius: "10px",
  });
  
  this.addCloseButton();
}

drawer.prototype.open = function () {
  this.isOpen = true;
  this.el.style.transform = "translate(0)";
};

drawer.prototype.close = function () {
  this.isOpen = false;
  this.el.style.transform = "translate(500px)";
};

drawer.prototype.addCloseButton = function () {
  // closeButton 프로퍼티 초기화
  this.closeButton = document.createElement("div");
  this.closeButton.innerText = ">>";
  Object.assign(this.closeButton.style, {
    position: "absolute",
    top: "27px",
    right: "335px",
    cursor: "pointer",
    fontSize: "1.5rem",
    fontWeight: "bold",
  });

  // closeButton을 드로어에 추가
  this.el.appendChild(this.closeButton);

  this.closeButton.addEventListener("click", () => {
    this.close();
  });
};

const sideMenu = new drawer(document.querySelector(".drawer"));
sideMenu.close();

document.querySelector(".drawer-opener").onclick = function () {
  if (!sideMenu.isOpen) sideMenu.open();
  else sideMenu.close();
};


// document.querySelector(".learnmore").onclick

const popup = document.getElementById('popup');
const popupButton = document.getElementById('popupButton');
const bg = document.querySelector(".bg")

// 팝업 켜기
popupButton.onclick = function() {
  if(getComputedStyle(popup).display == "block"){
  popup.style.display = "none";

  }else
  popup.style.display = "block";
}
bg.addEventListener('click',function(){
  popup.style.display = "none";    
});



const searchbox = document.querySelector('.searchBar');
const searchContent = document.querySelector('.searchpopup');
const dg = document.querySelector(".dg")

searchbox.onclick = function(){
if(getComputedStyle(searchContent).display == "block"){
  searchContent.style.display = "none";
}else
  searchContent.style.display = "block";
}

dg.onclick = function(){
searchContent.style.display = "none";

}

window.onload = function() {
searchContent.style.display = "none";
}

let headeruparrow = document.querySelector('.header-up-arrow');
let headerdownarrow = document.querySelector('.header-down-arrow');

let arrowBox = document.querySelector('.arrowBox')


// 헤더-체인변경 버튼 누르면  체인들 팝업되는 함수
let headertokenChainSelectlist = document.querySelector('.header-token-chain-select-list');


arrowBox.addEventListener('click',function(){


  if(!headertokenChainSelectlist.classList.contains('active')){
    headertokenChainSelectlist.classList.add('active');
    headertokenChainSelectlist.style.display = 'block';
    headeruparrow.style.display = 'none'
    headerdownarrow.style.display = 'block'

  }else{
    headertokenChainSelectlist.classList.remove('active');
    headertokenChainSelectlist.style.display = 'none';
    headeruparrow.style.display = 'block'
    headerdownarrow.style.display = 'none'
  } 
});
  //스왑페이지 배경
  let radialBg = document.getElementById('background-radial-gradient');
  




  
  
  // 체인 변경 리스트 버튼 누르면 코인 리스트 바뀌고 체크버튼 바뀌는 기능
  
// 체인 리스트들 전역변수 선언
let etherchain = document.querySelector('.etherchain');
let polygonchain = document.querySelector('.polygonchain');
let optimismchain = document.querySelector('.optimismchain');
let arbitrumchain = document.querySelector('.arbitrumchain');
let celochain = document.querySelector('.celochain');
let headeretherchain = document.querySelector('.header-etherchain');
let headerpolygonchain = document.querySelector('.header-polygonchain');
let headeroptimismchain = document.querySelector('.header-optimismchain');
let headerarbitrumchain = document.querySelector('.header-arbitrumchain');
let headercelochain = document.querySelector('.header-celochain');
let check = document.querySelector('.check');
let headercheck = document.querySelector('.headercheck');
let polygoncheck = document.querySelector('.polygoncheck');
let optimismcheck = document.querySelector('.optimismcheck');
let arbitrumcheck = document.querySelector('.arbitrumcheck');
let celocheck = document.querySelector('.celocheck');
let headerethercheck = document.querySelector('.header-ethercheck');
let headerpolygoncheck = document.querySelector('.header-polygoncheck');
let headeroptimismcheck = document.querySelector('.header-optimismcheck');
let headerarbitrumcheck = document.querySelector('.header-arbitrumcheck');
let headercelocheck = document.querySelector('.header-celocheck');
let etherimg = document.querySelectorAll('.ether-img');
let ethertext = document.querySelector('.ethertext');
let headertokenChainSelectlistwrap = document.querySelector('.header-token-chain-select-list-wrap')
let header_etherimg = document.querySelector('.header-ether-img');

// 이더리움 체인 초기 체크되게 하는 식

headerethercheck.classList.add('active');



// 헤더 이더리움체인 클릭시 함수
headeretherchain.addEventListener('click',function(){


  headerpolygoncheck.style.display = 'none'
  headerpolygoncheck.classList.remove('active');
  headeroptimismcheck.style.display = 'none'
  headeroptimismcheck.classList.remove('active');
  headerarbitrumcheck.style.display = 'none'
  headerarbitrumcheck.classList.remove('active');
  headercelocheck.style.display = 'none'
  headercelocheck.classList.remove('active');

  headeruparrow.style.display = 'block'
  headerdownarrow.style.display = 'none'

  radialBg.style =`width: 100vw; height: 100vh; transform: unset; background: radial-gradient(100% 100% at 50% 30%, rgba(255, 205, 210, 1) 0%, rgba(200, 168, 255, 0.05) 52.6%, rgba(0, 0, 0, 0) 100%), rgb(255, 255, 255);`

  if(headerethercheck.classList.contains('active')){

    headertokenChainSelectlist.classList.remove('active');
    headertokenChainSelectlist.style.display = 'none';
  }else{
    // 버튼에 이모티콘,이름 바꿔주기
    etherimg.forEach(i =>
      i.style.backgroundImage =  'url(data:image/png;base64,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)'
    );
    headerethercheck.classList.add('active');
    headerethercheck.style.display = 'inline'

    headertokenChainSelectlist.classList.remove('active');
    headertokenChainSelectlist.style.display = 'none';
  }
})


// 헤더 -폴리곤체인 클릭시 함수
headerpolygonchain.addEventListener('click',function(){
  headerethercheck.style.display = 'none'
  headerethercheck.classList.remove('active');
  headeroptimismcheck.style.display = 'none'
  headeroptimismcheck.classList.remove('active');
  headerarbitrumcheck.style.display = 'none'
  headerarbitrumcheck.classList.remove('active');
  headercelocheck.style.display = 'none'
  headercelocheck.classList.remove('active');


  headeruparrow.style.display = 'block'
  headerdownarrow.style.display = 'none'
  radialBg.style =`width: 100vw; height: 100vh; transform: unset; background: radial-gradient(100% 100% at 50% 30%, rgba(130, 71, 229, .4) 0%, rgba(200, 168, 255, 0.05) 52.6%, rgba(0, 0, 0, 0) 100%), rgb(255, 255, 255);`
  if(!headerpolygoncheck.classList.contains('active')){
    // 버튼에 이모티콘, 이름 바꿔주기
    etherimg.forEach(i =>
      i.style.backgroundImage = 'url(https://app.uniswap.org/static/media/polygon-matic-logo.97ff139c.svg)'
    );
    headerpolygoncheck.classList.add('active')
    headerpolygoncheck.style.display = 'inline'

    headertokenChainSelectlist.classList.remove('active');
    headertokenChainSelectlist.style.display = 'none';

  }else{
    headertokenChainSelectlist.classList.remove('active');
    headertokenChainSelectlist.style.display = 'none';

  }
})


// 헤더-옵티미즘 체인 클릭시 함수


headeroptimismchain.addEventListener('click',function(){


  headerethercheck.style.display = 'none'
  headerethercheck.classList.remove('active');
  headerpolygoncheck.style.display = 'none'
  headerpolygoncheck.classList.remove('active');
  headerarbitrumcheck.style.display = 'none'
  headerarbitrumcheck.classList.remove('active');
  headercelocheck.style.display = 'none'
  headercelocheck.classList.remove('active');

  headeruparrow.style.display = 'block'
  headerdownarrow.style.display = 'none'

  radialBg.style =`width: 100vw; height: 100vh; transform: unset; background: radial-gradient(100% 100% at 50% 30%, rgba(255, 99, 71, 0.5) 0%, rgba(252, 243, 249, 0.655) 49.48%, rgba(255, 255, 255, 0) 100%), rgb(255, 255, 255);`


  if(!headeroptimismcheck.classList.contains('active')){
    etherimg.forEach(i =>
      i.style.backgroundImage = 'url(https://app.uniswap.org/static/media/optimistic_ethereum.34412af2.svg)'
    );

    headeroptimismcheck.classList.add('active')
    headeroptimismcheck.style.display = 'inline'
    headertokenChainSelectlist.classList.remove('active');
    headertokenChainSelectlist.style.display = 'none';

  }else{
    headertokenChainSelectlist.classList.remove('active');
    headertokenChainSelectlist.style.display = 'none';

  }
})



//헤더- 아비트럼 클릭시 함수

headerarbitrumchain.addEventListener('click',function(){


  headerethercheck.style.display = 'none'
  headerethercheck.classList.remove('active');
  headerpolygoncheck.style.display = 'none'
  headerpolygoncheck.classList.remove('active');
  headeroptimismcheck.style.display = 'none'
  headeroptimismcheck.classList.remove('active');
  headercelocheck.style.display = 'none'
  headercelocheck.classList.remove('active');

  headeruparrow.style.display = 'block'
  headerdownarrow.style.display = 'none'

  radialBg.style =`width: 100vw; height: 100vh; transform: unset; background: radial-gradient(100% 100% at 50% 30%, rgba(205, 232, 251, 0.9) 0%, rgba(252, 243, 249, 0.655) 49.48%, rgba(255, 255, 255, 0) 100%), rgb(255, 255, 255);`


  if(!headerarbitrumcheck.classList.contains('active')){
    etherimg.forEach(i =>
      i.style.backgroundImage = 'url(https://app.uniswap.org/static/media/arbitrum_logo.17ba9b2d.svg)'
    );

    headerarbitrumcheck.classList.add('active')
    headerarbitrumcheck.style.display = 'inline'

    headertokenChainSelectlist.classList.remove('active');
    headertokenChainSelectlist.style.display = 'none';
  }else{

    headertokenChainSelectlist.classList.remove('active');
    headertokenChainSelectlist.style.display = 'none';
  }
})


// 헤더  셀로체인 클릭시 함수
headercelochain.addEventListener('click',function(){


  headerethercheck.style.display = 'none'
  headerethercheck.classList.remove('active');
  headerpolygoncheck.style.display = 'none'
  headerpolygoncheck.classList.remove('active');
  headeroptimismcheck.style.display = 'none'
  headeroptimismcheck.classList.remove('active');
  headerarbitrumcheck.style.display = 'none'
  headerarbitrumcheck.classList.remove('active');

  headeruparrow.style.display = 'block'
  headerdownarrow.style.display = 'none'

  radialBg.style =`width: 100vw; height: 100vh; transform: unset; background: radial-gradient(100% 100% at 50% 30%, rgba(237, 233, 157, 0.9) 0%, rgba(252, 243, 249, 0.655) 49.48%, rgba(255, 255, 255, 0) 100%), rgb(255, 255, 255);`


  if(!headercelocheck.classList.contains('active')){
    etherimg.forEach(i =>
      i.style.backgroundImage = 'url(https://app.uniswap.org/static/media/celo_logo.e95fad7b.svg)'
    );

    headercelocheck.classList.add('active')
    headercelocheck.style.display = 'inline'

    headertokenChainSelectlist.classList.remove('active');
    headertokenChainSelectlist.style.display = 'none';
  }else{

    headertokenChainSelectlist.classList.remove('active');
    headertokenChainSelectlist.style.display = 'none';
  }
})

// 체인 선택 팝업 백그라운드 클릭하면 사라지는 효과

let bgg = document.getElementById('bgg');

bgg.addEventListener('click',function(){
  headertokenChainSelectlist.classList.remove('active');
  headertokenChainSelectlist.style.display = 'none';
  searchContent.style.display = "none";

});


// 헤더 끝


// 스왑페이지 시작

//  eth 클릭시 코인선택 팝업
let topSelect = document.querySelector('.topselect');
let btmSelect = document.querySelector('.btmselect');
let swapList = document.querySelector('.swap-coin-select-list');

btmSelect.addEventListener('click',function(){
  swapList.style.display = 'block';
  swapList.classList.add('btm');
});
topSelect.addEventListener('click',function(){
  swapList.style.display = 'block'
  swapList.classList.add('top');

});


// x버튼 클릭시 리스트창 삭제
let closeBox = document.querySelector('.closebox');

closeBox.addEventListener('click',function(){
  swapList.style.display = 'none'
  swapList.classList.remove('top');
  swapList.classList.remove('btm');
});

//코인 클릭 함수
// 3가지 코인 리스트 호출변수
let swapEth = document.querySelector('.swap-eth');
let swapWbtc = document.querySelector('.swap-wbtc');
let swapUsdc = document.querySelector('.swap-usdc');
let topspan = document.querySelector('.topselect span');
let btmspan = document.querySelector('.btmselect span');


// ETH 코인 누를 때 함수

swapEth.addEventListener('click',function(){
  if(swapList.classList.contains('top')){
    topspan.innerHTML ='ETH'
    swapList.style.display = 'none'
    swapList.classList.remove('top');
    swapList.classList.remove('btm');
    topSelect.style.backgroundImage = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAADxdJREFUeJztXVtzFMcVplwuP8VVeYmf7HJ+RKqSl/AQP6X8H+yqXUEIjhMnQY5jO9oVCIzA5mowdzAYG4xAGAyWLC5G3IyDL8gOASUYKrarYGZWC7qi23b6692VV6uZ7e6ZnT3di07VV6JUaLfnnG+6z+lz+vScOXUoL6SzP52/2PtlQ9p7piHlLU2k3P2JJqcjkXLO8589/OdN/tPjvx8VEP8Wv+sp/J8O/A3+Fp+Bz8JnUj/XrPjIwjT7ybxm57fJlLsy2eR2cwPe4QZksYB/Nr4D34XvxHdTP/8DJ+k0e4S/lb9Jpr2WZJNzgRtjPDaDS4DvFmPgY8GYMDZq/dStNKQzv0qmnA1c6RkqgysQIoMxYqzU+qoLWZDO/jyZdl7lir1ObdwQZLiOseMZqPVonSTS7i+4AtsTTW6O2pDR4ebEs/Bnotar8dKw2Pk1n0I76Y0W16zgdOIZqfVsnCSbvaeEB2+AkWpCBEQS/Jmp9U4u3Fl6nIdWB6gNQgb+7NABtR1qLjxcejiZdhfxKXGA3AjUswHXAXQBnVDbpSbCPeO5fAr8hlrxpgE6gW6o7ROb5N96Z3l9ePZxgUcMXEd1NxssbMk8kWxyztEr2A5AV3XjGySb3acTSLYYoFjL4EF31PYLLXwaeyiZcltnp/woEJtIrdAltT21BEkR7tnuo1dgfQC6tCbRlGh1H02k3C5qpalg/bt3WdOGDPk4lACdct1S27eiLEgPPMbDmcvkylLAgiUOc/sm2LHuITavmX48KoBun1828DNqO/tKsiX7JF+zeqmVpIqPzg2xyckc++Sfw2ImoB6POtxe6Jra3tMEb75Nxv/Hmxk2MZGbIsCpz4bZn1d45OPSIQF0Tm13IViXbJn2i+i9NcYgRQIA+zsGyMelA6Fzap8AnqktDl8RO9r7WVFKCQAs3dJHPj4tcN2TRQcizrcs1Hv+NZf1D04GEqDj/JBwDqnHqYNCiFj7fYL8Jg+9AnTQfXmYlUo5AYAtbffIx6lNAm6L2hpfbO/atcO3dGsfy+VyUgIAL66yySEE3FzNto2R2ElYtrffkHbYd7fHWbkEEeDQyUHk6cnHrQkPtonV+CKla2FWDx6+nwQRAFi5K0s+bl3ANrGmkvP5fPoH1cFfX/fYyP2cNgG6Lg6z55a55OPXJgG3UVzGn2vbug98fvW+r/FlBADePtJPPn59iKKS6lYW5ad++8q4Vu+5G2h8FQIAr663JFlUAtiqqksBZ1Uj9UPp4neLHeb0TUQmwNEzg2xemv559OE2VsX4KE2ysXoXhpOJCgGAdXttShblAZtVpayMe5Zt1A+ji5fXZdj4uL/jF4YApy4NsxdaLXQIue2iGb/Ze4r6IcLg6rejUuPrEAB47yO7kkVTJIhyAsnG41rYylUVHQIAizdZlixqyh9DC2V8HGKkHrwuELffHZiUWz4kAVBEAueS+jl1EepAqo2ndLFW64guAYBNB2xMFjmdWsbHWXbqQesC0zMMGjcBgEVv2JYs4tDpT5BvzmDAoBWBxM2tH8a0jB+FAAe77EsWwaZKxkdLE9u2fPce65dbu4oEAFp32JYscnNK7WrQ14Z+sOpAMefwiLrjVy0CdF0cYguX2rU3ANtKCWBTdS9wqWcklPGjEgDYcdiuZBEaV1U0PtqbUQ9SB6/vyoY2fjUIALy81q5kUcUWduhxRz1AVcxvdthtb2aVT60JcOT0oKg4otaHKmBjX+OLA50GN2Esx+FT8mRPLQgAIO1MrQ91ArgZ31JytDqlHpwqXlrjsbExvZg/TgKcvDTM/rjcHocQtp45/ae9FuqBqeLr/6gle2pFAAChKLVeVAFbzyRAk3OBemAq2LhfPdlTSwIA6Y12JItg62nGR9tzyq7bqljY4rK+e5WrfCgJcPzskHBOqfUkJQC39bRW9+h9Tz0oFXx8Yahqxo+DAMCGfXY4hLB5SfjnrqQekAypjRntZA8FAU5/NixK0an1JQNsXrL+m1/4ceM7/WRPJcExsas3Rtn7nQNVJ8GBj82vHppWKBLrNStVAOrzqyWjPHzEWQGEbjBW81t9bPn2LNt9tF/UE1SLBMu2Ge4QcpsL4+MyJPLBVADi68HhcMmeUrnbP8kufDUyw8ggQBHoD7Dt4D3WyX2NqASAv/L7Fnr9VYK4CAs3YlEPpBLOfxk+2QP5wRlnZy7ztTnAUKUEKGLJpj72JnfmUFoehQTbDpldPQTb8/Xfe5Z6IEHA1BxWem+N8rdd/ib7EaAUq/dkxZoelgTYtaTWYxBwJR7y/8uoB+IHnMbB26sjY+M59uU1vr5/qj6FywhQxIodWfbOh/2ioZQOAZCzMLV6CLafU7hUkXww5Wjr8j/S7Sdo+3LxyojSGx+WAFN+wtY+tp1P7V0afsIbbxtaPcRtb2T1b+Mqj90flcf8t91x1v158PoeBwGKWLy5j23kfsIxBT/h5KfDoj8RtV7LIaqFTcwBfHUt+Eg35L//G2WnqxSyhSVAKdZwP+FgV2U/Yc9R85JFIieQwH25BgymCHTt9JPxiRy7ch3xe/QQrdoEKGLlzqzICgb5CQb2Je6ZU7g0mXogAmjR5mWnJ3uwB3Dp65nxu4kEKGIZ9xN2tN9jJy5OJ6txfYm57TEDGNPwCdm0otzJTLCzX+T31uMwfJwEmNpP2NLHNu2/y453/0gEw/oSe3MK16dTD2Sqf+/N78diN3qtCDDlMG7qY2v33mWHTg6Y1ZeY294YAhw7Ozi1P19L1IIA0/yEXdxpfMeQWUAQwJAlAClUtHOrdwL8fW3GpBPGnlFOIIDp8lh3dT19EwiAJe4PprWdKziBRoWBALaB1/JpEhsothMAdYJY8w3dDhZh4HkDBuIL7J7t+qDfWgKg57BRYV85uO0xA3SQD0SCl9ZkRP9eWwjwyrqM8bUABXQYkwySpU0xhb62Lcs6z5u7E4idPpUDIn8ypeOYSAYZkg5esTPLPr0yIu2+gd1CnA3QTcvGSYA0B6IY2TpfXNLQxo5a30BDyluKI2HPUA+kCHj/qNlDDl0WKsGxevd49LAxqvGxPM2XjBV+AJpNYp/DpJ1AURBiUkkYvP9i9S9yAnjTZX+DaffoJ+H9g7CGR1j3nEKDCIS12OLGd6HGwaRoQJSEmVYU+rfVHhu+/2MR6LWbo+JMQGUmO6Lo4kSIsDFMWKfSNRRLWWnJOdrPm3aAVBSFmlgWXt7sEQc4kB+QKRBv5Pb2e7ERAIUqssbROL629eDMMSzZbFiZeLEs3NSDISjhLpeh4Umx7ssaMiD+bpMUaOgQAE6b7DYxjAkdS7ouzoxScFUdtT7LMe1giIlHw/AmORn/g6AoFlWps0OdP7p7hiUA/AuVUi74A+gU4vf5KC2XOYkkBCg9Gmbq4VBMm0gRBwkqgGX7B1A+PO+ggpKgsO4vK+VhHXwBVAAFkQuhqqk3kE07HGry8XDU5FcStIWHl40Zo9LnwH9AXZ6MAHBCZUe8EaLiFLBsL2LVbjOrgWccDze5QQTeQpX27zj6tV3hJM4r6zPsg5Lpemr7lv9eRiIA5V4dCruR+wxuLz+jQYTpLWIwHQ8MqZ0P/Pb7MdYiuQMYpMLOI87vIcRU2ZrFUnPwhNp+A7arTb5xzLdFjOlNorCTpio4+o0zhSBOpc+EZy+LKJDD33lYLyNpYPXvNPg2ibKhTRzqA3QE9wUiHAzTtgXx/po9+jUJpreTD2wTlw8HzW4UCY/e7wpYmSCc1NmDRxQQpioJOQzTbxgLbBSZXwbMbxWLmDtsj8B/3RiteA8gMnr7QtYlItEjW3JMQMVWsflZwL1OPUgZEM6FFWwrI2dQWp+H4o3NB/S2kMuBo+zUepFB2ixaEMCSdvFf/Lvy+UGZIKpAW5hiNBDF+Cae+/MlgEq7eFsujMAWbdSegdXoEoZNKFmewAwoXhhRWAasuDIGTRuitI57kNrFK18ZA7Hp0qgPz4RvHhmVACZV90ihc2lUfhYwr3GEHxrS4XsIRiEAchQmVfdUgva1cRCbLo58sayKKG4CIOdvWnVPxZckzMWRYhYwsFAkCDpXxkYlgHHVPRUQ+upYQQDLLo/W7SkYhgAoOaN+Ti0CRLk8GpJIOQeoH0IVSOfeCagiqgYBUH1sYnVPILjtIhkf0pDOPM6diAHyh1EEpufxClVEYQmA4o9Gi66Mhc1gu8gEgCTT7iLqB9KBrIooDAGM7fUXRABus6oYH5JOs4e5M/EN9UNpsF+0gq8WAd4zuLrH9/m5rWCzqhEAkkw7c23YIi4CmTl0EI1KAFHdY9UVsW4Otqqq8UtIsJz+AdWBJhNRCYD0M/Vz6AA2isX4kPxS4JyjfkgdVKoikhHgrfctC/m4bao+9ZfLwpbMEwlDGkupoFIVUSUCtJ80v7qnDB5sE6vxi5Jsdp+2yR9AFdCoTxVREAEwaxjTy08JfN3nNqmJ8adIkHJb6R9cHbt9qoiCCIBOJNTj1QFsUVPjQ/ha8xCPNfdRP7wOcFmUjAC7j9hR3TNlfG4D2KLmBCiQ4JFEyu2iVoIqyquIyglgT3VPAVz3gSXetZJEq/tossm9TK4MRbSWVBGVEwDtXqjHpwqhc657UuMXZUF64DHuiPRSK0UVOLJdTgCcPKIelzrcXuic2u7TJNmSfdIWEhSriIoEsKm6BzqGrqnt7StgpS3LAc7to+MIqntMvM/HD9CtcW9+uWBdssUxxDk+dPGiHocSoFNT1nyZiIOmloWIJqMQ6tF6+7oi9gnEZpE9O4bmwc1Bh2RxfjUkv21sT+7AIHg1396NS5CksC2LSAnoqmaJnVqJSCWLeoLZJSEYophjeewpXUpBtYpN5WW1AnQSWyWPaQKGc7Y32lRtHJvhhQ7cxrp+64NElJw3OW3URqB76522qpVu2yw4vWLTMbTohne7I5/YqUfBIUZbTiWHMjx/ttAHNR8kwVn2fJOKeogYxGZOu/b5/FnJt6vJ9yyyI8tYZvhejF25LcusVBa0N0OPO5ObWWJsGKO0FdushBckRdDqFP1u0fSYsss5vluMgY8FY7IuYVMPgrbn6H2PCxBEJBHn9Tf8s4UHz78L3zmj5fqsmCG4DAk3YiWbvGfFvYgpdz888EJL/J7Chdkerk8XEP8Wv+vJzyo8EsHf8L/FZ+Czpi5YqjP5P2ey0rAsl+yGAAAAAElFTkSuQmCC)'
    changeInput.value = ''
    changeInput.placeholder = '0'
    toInput.value = ''
  }else{
    btmspan.innerHTML = 'ETH'
    swapList.style.display = 'none'
    swapList.classList.remove('top');
    swapList.classList.remove('btm');
    //이미지 바꿔주기
    btmSelect.style.backgroundImage = 'url(data:image/png;base64,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)'
    changeInput.value = ''
    changeInput.placeholder = '0'
    toInput.value = ''
}
})

// WBTC 코인 누를 때 함수


swapWbtc.addEventListener('click',function(){
  if(swapList.classList.contains('top')){
    topspan.innerHTML ='WBTC'
    swapList.style.display = 'none'
    swapList.classList.remove('top');
    swapList.classList.remove('btm');
    topSelect.style.backgroundImage = 'url(https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png)'
    changeInput.value = ''
    changeInput.placeholder = '0'
    toInput.value = ''
  }else{
    btmspan.innerHTML = 'WBTC'
    swapList.style.display = 'none'
    swapList.classList.remove('top');
    swapList.classList.remove('btm');
    //이미지 바꿔주기
    btmSelect.style.backgroundImage = 'url(https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png)'
    changeInput.value = ''
    changeInput.placeholder = '0'
    toInput.value = ''
}
})


//USDC 코인 누를때 함수

swapUsdc.addEventListener('click',function(){
if(swapList.classList.contains('top')){
  topspan.innerHTML ='USDC'
  swapList.style.display = 'none'
  swapList.classList.remove('top');
  swapList.classList.remove('btm');
  //이미지 바꿔주기
  topSelect.style.backgroundImage = 'url(https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png)'
  changeInput.value = ''
  changeInput.placeholder = '0'
  toInput.value = ''
}else{
  btmspan.innerHTML = 'USDC'
  swapList.style.display = 'none'
  swapList.classList.remove('top');
  swapList.classList.remove('btm');
  //이미지 바꿔주기
  btmSelect.style.backgroundImage = 'url(https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png)'
  changeInput.value = ''
  changeInput.placeholder = '0'
  toInput.value = ''
}
})
// legal & privacy Popup
let legalinpopup = document.querySelector('.legalinpopup');
let legalBtn = document.querySelector('.legalBtn');
let legalBox = document.querySelector('.legalContainer');
let Bgg = document.querySelector('.bgg');


legalinpopup.onclick = function(){
  legalBox.classList.add('active');
  Bgg.style.opacity = "0.4";
  document.body.style.overflow = "hidden";
}
legalBtn.onclick = function(){
  legalBox.classList.remove('active');
  Bgg.style.opacity = "1";
  document.body.style.overflow = "auto";
}
// legal & privacy Popup


// 로그인 유무에 따른 사이드바 표기

let loginValue = window.localStorage.getItem("Login");
let sideInfo = document.querySelector(".content");

function loginCheck(){
  if(loginValue == null || loginValue == "null"){
    return;
  }else{
    sideInfo.innerHTML = `<h3>Connect a wallet</h3>
    <div class="login">
      <ul>
        <li class="nickname">Nickname : ${JSON.parse(loginValue).nick}</li>
        <li class="cash">Cash : ${JSON.parse(loginValue).dollar}</li>
        <li class="bitcoin">Bitcoin : ${JSON.parse(loginValue).bit}</li>
        <li class="ethereum">Ethereum : ${JSON.parse(loginValue).eth}</li>
        <li><a href="/Mypage/mypage.html">My page</a><a href="/Swap/swap.html" class="logout">Log out</a></li>
      </ul>
    </div>`;

    let loginBox = document.querySelector(".login");
    loginBox.style.height = "180px";
    loginBox.style.paddingTop = "1px";
    loginBox.style.justifyContent = "none";
    loginBox.style.alignItems = "none";
    loginBox.style.cursor = "auto";

    let getCash = document.querySelector(".get-dollar");
    let getBit = document.querySelector(".get-bit");
    let getEth = document.querySelector(".get-eth");

    getCash.innerHTML = `${JSON.parse(loginValue).dollar}`;
    getBit.innerHTML = `${JSON.parse(loginValue).bit}`;
    getEth.innerHTML = `${JSON.parse(loginValue).eth}`;
  }

  let logoutBtn = document.querySelector(".logout");

  logoutBtn.addEventListener("click", function(){
    let loginValue = window.localStorage.getItem("Login");
    
    if(loginValue == null){
      return;
    }else{
      window.localStorage.setItem("Login", null);
    }
  })
}

loginCheck();

let totalRate = 0;
let fromRate = 0;
let toRate = 0;
let holdingCost = 0;
let fromCoin = "";
let toCoin = "";
let changeInput = document.querySelector(".swap-box-top input");
let toInput = document.querySelector(".swap-box-btm input");

// 교환값으로 숫자만 허용하는 함수
changeInput.addEventListener("input",function(event){
  return this.value = event.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
});

// 이더리움 실시간 가격 전역변수 선언
let ethCurrent = 0;

// 교환 값 입력 시 비율 계산
changeInput.addEventListener("input",function(event){
  let login = window.localStorage.getItem("Login");
  let fromInput = event.target.value;
  let toInput = document.querySelector(".swap-box-btm input");
  let fromCost = parseInt(fromInput);

  totalRate = 0;
  fromRate = 0;
  toRate = 0;
  holdingCost = 0;
  fromCoin = "";
  toCoin = "";

  if(topspan.innerHTML == "ETH"){
    fromCoin = "ethereum";
    fromRate = 1;
    holdingCost = parseInt(JSON.parse(login).eth);
  }else if(topspan.innerHTML == "USDC"){
    fromCoin = "dollar";
    fromRate = ethCurrent ;
    holdingCost = parseInt(JSON.parse(login).dollar);
  }else{
    fromCoin = "bitcoin";
    fromRate = 0.05;
    holdingCost = parseInt(JSON.parse(loginValue).bit);
  }

  if(btmspan.innerHTML == "ETH"){
    toCoin = "ethereum";
    toRate = 1;
  }else if(btmspan.innerHTML == "USDC"){
    toCoin = "dollar";
    toRate = ethCurrent ;
  }else{
    toCoin = "bitcoin";
    toRate = 0.05;
  }

  if(fromInput.length == 0){
    return;
  }else if(fromCost > holdingCost){
    alert(`the coin which you got is less than ${fromCost}. (You got ${holdingCost}.)\nCalculate maximum coin.`);
    fromCost = holdingCost;
    event.target.value = holdingCost;
    totalRate = toRate / fromRate;
    toInput.value = `${parseInt(fromCost * totalRate)}`;
  }else{
    totalRate = toRate / fromRate;
    toInput.value = `${parseInt(fromCost * totalRate)}`;
  }
})

changeInput.addEventListener("input",function(){
  if(loginValue == null || loginValue == "null"){
    alert("If you want to use this page, you have to login. \nMove to login page.");
    location.href = "/Login/login.html";
  }
})

let swapBtn = document.querySelector(".swap-btn");

// 클릭 시 코인 교환 진행 함수
swapBtn.addEventListener("click",function(){
  let toInput = document.querySelector(".swap-box-btm input");

  let fromValue = window.localStorage.getItem("Login");
  let toValue = window.localStorage.getItem("Login");
  let _fromValue;
  let _toValue;

  let fromChangeResult;
  let toChangeResult;

  let resultCost = parseInt(toInput.value);
  let changeCost = parseInt(changeInput.value);

  if(resultCost < 1){
    return;
  }else{
    if(fromCoin == "dollar"){
      _fromValue = JSON.parse(fromValue).dollar;

      fromChangeResult = parseInt(_fromValue) - changeCost;

      if(fromChangeResult < 0){
          return;
      }else{
          changeCoinInfoCash(fromChangeResult);
      }
    }else if(fromCoin == "bitcoin"){
      _fromValue = JSON.parse(fromValue).bit;

      fromChangeResult = parseInt(_fromValue) - changeCost;
      
      if(fromChangeResult < 0){
          return;
      }else{
          changeCoinInfoBit(fromChangeResult);
      }
    }else if(fromCoin == "ethereum"){
      _fromValue = JSON.parse(fromValue).eth;

      fromChangeResult = parseInt(_fromValue) - changeCost;

      if(fromChangeResult < 0){
          return;
      }else{
          changeCoinInfoEth(fromChangeResult);
      }
    }else{
      return;
    }
    
    if(toCoin == "dollar"){
      _toValue = JSON.parse(toValue).dollar;

      toChangeResult = parseInt(_toValue) + resultCost;

      changeCoinInfoCash(toChangeResult);
    }else if(toCoin == "bitcoin"){
      _toValue = JSON.parse(toValue).bit;

      toChangeResult = parseInt(_toValue) + resultCost;

      console.log(toChangeResult)
      changeCoinInfoBit(toChangeResult);
    }else if(toCoin == "ethereum"){
      _toValue = JSON.parse(toValue).eth;

      toChangeResult = parseInt(_toValue) + resultCost;

      changeCoinInfoEth(toChangeResult);
    }else{
      return;
    }
  }

  toInput.value = '';
  toInput.placeholder ='0'
  changeInput.value = '';
  changeInput.placeholder = '0';
})

function changeCoinInfoCash(result){
  let sideAcountText = document.querySelector(".cash");  
  let getCash = document.querySelector(".get-dollar");
  
  let login = window.localStorage.getItem("Login");
  let userInfo = window.localStorage.getItem("UserInfo");  
  let _userInfo = userInfo.split("|");  

  _userInfo.forEach(function(a,i){
    if(JSON.parse(login).id == JSON.parse(a).id){
        
      _userInfo.splice(i,1);

      if(_userInfo.length == 0){
          window.localStorage.setItem("UserInfo", `{"id" : "${JSON.parse(login).id}", "pw" : "${JSON.parse(login).pw}", "nick" : "${JSON.parse(login).nick}", "dollar" : "${result}", "bit" : "${JSON.parse(login).bit}", "eth" : "${JSON.parse(login).eth}"}`);
      }else{
          let userInfo = _userInfo.join("|");
          window.localStorage.setItem("UserInfo", userInfo + "|" + `{"id" : "${JSON.parse(login).id}", "pw" : "${JSON.parse(login).pw}", "nick" : "${JSON.parse(login).nick}", "dollar" : "${result}", "bit" : "${JSON.parse(login).bit}", "eth" : "${JSON.parse(login).eth}"}`);
      }
    }
    window.localStorage.setItem("Login", `{"id" : "${JSON.parse(login).id}", "pw" : "${JSON.parse(login).pw}", "nick" : "${JSON.parse(login).nick}", "dollar" : "${result}", "bit" : "${JSON.parse(login).bit}", "eth" : "${JSON.parse(login).eth}"}`);

    console.log("login information : " + window.localStorage.getItem("Login"));
    console.log("user information : " + window.localStorage.getItem("UserInfo"));
    
    sideAcountText.innerHTML = "Cash : " + result;
    getCash.innerHTML = result;
  })
}

function changeCoinInfoBit(result){
  let sideBitText = document.querySelector(".bitcoin");  
  let getBit = document.querySelector(".get-bit");

  let login = window.localStorage.getItem("Login");
  let userInfo = window.localStorage.getItem("UserInfo");  
  let _userInfo = userInfo.split("|");  

  _userInfo.forEach(function(a,i){
    if(JSON.parse(login).id == JSON.parse(a).id){
        
      _userInfo.splice(i,1);

      if(_userInfo.length == 0){
          window.localStorage.setItem("UserInfo", `{"id" : "${JSON.parse(login).id}", "pw" : "${JSON.parse(login).pw}", "nick" : "${JSON.parse(login).nick}", "dollar" : "${JSON.parse(login).dollar}", "bit" : "${result}", "eth" : "${JSON.parse(login).eth}"}`);
      }else{
          userInfo = _userInfo.join("|");
          window.localStorage.setItem("UserInfo", userInfo + "|" + `{"id" : "${JSON.parse(login).id}", "pw" : "${JSON.parse(login).pw}", "nick" : "${JSON.parse(login).nick}", "dollar" : "${JSON.parse(login).dollar}", "bit" : "${result}", "eth" : "${JSON.parse(login).eth}"}`);
      }
    }
    window.localStorage.setItem("Login", `{"id" : "${JSON.parse(login).id}", "pw" : "${JSON.parse(login).pw}", "nick" : "${JSON.parse(login).nick}", "dollar" : "${JSON.parse(login).dollar}", "bit" : "${result}", "eth" : "${JSON.parse(login).eth}"}`);

    console.log("login information : " + window.localStorage.getItem("Login"));
    console.log("user information : " + window.localStorage.getItem("UserInfo"));
    
    sideBitText.innerHTML = "Bitcoin : " + result;
    getBit.innerHTML = result;
  })
}

function changeCoinInfoEth(result){
  let sideEthText = document.querySelector(".ethereum");  
  let getEth = document.querySelector(".get-eth");

  let login = window.localStorage.getItem("Login");
  let userInfo = window.localStorage.getItem("UserInfo");  
  let _userInfo = userInfo.split("|");  

  _userInfo.forEach(function(a,i){
    if(JSON.parse(login).id == JSON.parse(a).id){
        
      _userInfo.splice(i,1);

      if(_userInfo.length == 0){
          window.localStorage.setItem("UserInfo", `{"id" : "${JSON.parse(login).id}", "pw" : "${JSON.parse(login).pw}", "nick" : "${JSON.parse(login).nick}", "dollar" : "${JSON.parse(login).dollar}", "bit" : "${JSON.parse(login).bit}", "eth" : "${result}"}`);
      }else{
          userInfo = _userInfo.join("|");
          window.localStorage.setItem("UserInfo", userInfo + "|" + `{"id" : "${JSON.parse(login).id}", "pw" : "${JSON.parse(login).pw}", "nick" : "${JSON.parse(login).nick}", "dollar" : "${JSON.parse(login).dollar}", "bit" : "${JSON.parse(login).bit}", "eth" : "${result}"}`);
      }
    }
    window.localStorage.setItem("Login", `{"id" : "${JSON.parse(login).id}", "pw" : "${JSON.parse(login).pw}", "nick" : "${JSON.parse(login).nick}", "dollar" : "${JSON.parse(login).dollar}", "bit" : "${JSON.parse(login).bit}", "eth" : "${result}"}`);

    console.log("login information : " + window.localStorage.getItem("Login"));
    console.log("user information : " + window.localStorage.getItem("UserInfo"));
    
    sideEthText.innerHTML = "Ethereum : " + result;
    getEth.innerHTML = result;
  })
}


//이더리움 실시간 가격/ 블록높이 오른쪽 아래에 보여주는 함수

let ethBlock = document.getElementById('ethblock');
let ethPrice = document.getElementById('ethprice');

//이더리움 실시간 block 호출하는 API
    const Blockxhr = new XMLHttpRequest();
    const Blockurl =
      "https://api.etherscan.io/api?module=proxy&action=eth_blockNumber&apikey=9A7WWYQNTUEW2W6DD437M3HIK2N1PR9TVW";

    Blockxhr.open("GET", Blockurl, true);
    Blockxhr.onload = function () {
      if (Blockxhr.status === 200) {
      let response =JSON.parse(Blockxhr.responseText);
        let ethblock = parseInt(response.result);
        console.log(ethblock);
        ethBlock.innerHTML = ethblock;

      } else {
        console.error(Blockxhr.statusText);
      }
    };
    Blockxhr.onerror = function () {
      console.error(Blockxhr.statusText);
    };
    
// 30초에 한번씩 API 호출    
    
setInterval(Blockxhr.send(),30000);


//이더리움 실시간 가격 호출하는 API


  const ethprice = new XMLHttpRequest();
    const url =
    "https://api.etherscan.io/api?module=stats&action=ethprice&apikey=9A7WWYQNTUEW2W6DD437M3HIK2N1PR9TVW";

    ethprice.open("GET", url, true);
    ethprice.onload = function () {
      if (ethprice.status === 200) {
        let eth =JSON.parse(ethprice.responseText);
        ethPrice.innerHTML = `$  ${eth.result.ethusd}`;
        ethCurrent = Number(eth.result.ethusd);
      } else {
        console.error(ethprice.statusText);
      }
    };
    ethprice.send();


// 화살표 클릭시 위 아래 input 값 바뀌게 만들기!

let switchArrow = document.querySelector('.swap-arrow svg');

switchArrow.addEventListener('click',function(event){
  // innertext 바뀌게
  let topinner = topspan.innerHTML;
  topspan.innerHTML = btmspan.innerHTML;
  btmspan.innerHTML = topinner;
  
  // 그림 바뀌게
  let topbackimg = topSelect.style.backgroundImage;
  topSelect.style.backgroundImage = btmSelect.style.backgroundImage;
  btmSelect.style.backgroundImage = topbackimg;

  let changeInputbox =changeInput.value;
  changeInput.value = toInput.value;
  toInput.value = changeInputbox;
});
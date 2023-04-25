// 로그인 사이드바 설정
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
this.closeButton.innerText = "▶"
Object.assign(this.closeButton.style, {
    position: "absolute",
    top: "27px",
    right: "340px",
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
bg.onclick = function(){
popup.style.display = "none";
}



// 헤더부분 체인변경 버튼 by 민우
let uparrow = document.querySelector('.down-arrow');
let downarrow = document.querySelector('.up-arrow');

// 체인변경 버튼 누르면  체인들 팝업되는 함수
let tokenChainSelect = document.querySelector('.arrowBox');
let tokenChainSelectlist = document.querySelector('.token-chain-select-list')
tokenChainSelect.addEventListener('click',function(){
    
    if(!tokenChainSelectlist.classList.contains('active')){
        tokenChainSelectlist.classList.add('active');
        tokenChainSelectlist.style.display = 'block';
        uparrow.style.display = 'none'
        downarrow.style.display = 'block'

    }else{
        tokenChainSelectlist.classList.remove('active');
        tokenChainSelectlist.style.display = 'none';
        uparrow.style.display = 'block'
        downarrow.style.display = 'none'
    } 
});

// 체인 변경 리스트 버튼 누르면 코인 리스트 바뀌고 체크버튼 바뀌는 기능

// 체인 리스트들 전역변수 선언
let etherchain = document.querySelector('.etherchain');
let polygonchain = document.querySelector('.polygonchain');
let optimismchain = document.querySelector('.optimismchain');
let arbitrumchain = document.querySelector('.arbitrumchain');
let celochain = document.querySelector('.celochain');
let check = document.querySelector('.check');
let ethercheck = document.querySelector('.ethercheck');
let polygoncheck = document.querySelector('.polygoncheck');
let optimismcheck = document.querySelector('.optimismcheck');
let arbitrumcheck = document.querySelector('.arbitrumcheck');
let celocheck = document.querySelector('.celocheck');
let etherimg = document.querySelector('.ether-img');
let ethertext = document.querySelector('.ethertext');

// 이더리움 체인 초기 체크되게 하는 식
ethercheck.classList.add('active');


// 이더리움체인 클릭시 함수
etherchain.addEventListener('click',function(){
    polygoncheck.style.display = 'none'
    polygoncheck.classList.remove('active');
    optimismcheck.style.display = 'none'
    optimismcheck.classList.remove('active');
    arbitrumcheck.style.display = 'none'
    arbitrumcheck.classList.remove('active');
    celocheck.style.display = 'none'
    celocheck.classList.remove('active');

    uparrow.style.display = 'block'
    downarrow.style.display = 'none'
    if(ethercheck.classList.contains('active')){
        tokenChainSelectlist.classList.remove('active');
        tokenChainSelectlist.style.display = 'none';
    }else{
        // 버튼에 이모티콘,이름 바꿔주기
        etherimg.style.backgroundImage = 'url(data:image/png;base64,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)'
        ethercheck.classList.add('active');
        ethercheck.style.display = 'inline'
        tokenChainSelectlist.classList.remove('active');
        tokenChainSelectlist.style.display = 'none';
    }
})


// 폴리곤체인 클릭시 함수
polygonchain.addEventListener('click',function(){
    ethercheck.style.display = 'none'
    ethercheck.classList.remove('active');
    optimismcheck.style.display = 'none'
    optimismcheck.classList.remove('active');
    arbitrumcheck.style.display = 'none'
    arbitrumcheck.classList.remove('active');
    celocheck.style.display = 'none'
    celocheck.classList.remove('active');

    uparrow.style.display = 'block'
    downarrow.style.display = 'none'

    if(!polygoncheck.classList.contains('active')){
        // 버튼에 이모티콘, 이름 바꿔주기
        etherimg.style.backgroundImage = 'url(https://app.uniswap.org/static/media/polygon-matic-logo.97ff139c.svg)'
        polygoncheck.classList.add('active')
        polygoncheck.style.display = 'inline'
        tokenChainSelectlist.classList.remove('active');
        tokenChainSelectlist.style.display = 'none';
    }else{
        tokenChainSelectlist.classList.remove('active');
        tokenChainSelectlist.style.display = 'none';
    }
})

// 옵티미즘체인 클릭시 함수
optimismchain.addEventListener('click',function(){
    ethercheck.style.display = 'none'
    ethercheck.classList.remove('active');
    polygoncheck.style.display = 'none'
    polygoncheck.classList.remove('active');
    arbitrumcheck.style.display = 'none'
    arbitrumcheck.classList.remove('active');
    celocheck.style.display = 'none'
    celocheck.classList.remove('active');

    uparrow.style.display = 'block'
    downarrow.style.display = 'none'

    if(!optimismcheck.classList.contains('active')){
        etherimg.style.backgroundImage = 'url(https://app.uniswap.org/static/media/optimistic_ethereum.34412af2.svg)'
        optimismcheck.classList.add('active')
        optimismcheck.style.display = 'inline'
        tokenChainSelectlist.classList.remove('active');
        tokenChainSelectlist.style.display = 'none';
    }else{
        tokenChainSelectlist.classList.remove('active');
        tokenChainSelectlist.style.display = 'none';
    }
})

// 아비트럼체인 클릭시 함수
arbitrumchain.addEventListener('click',function(){
    ethercheck.style.display = 'none'
    ethercheck.classList.remove('active');
    polygoncheck.style.display = 'none'
    polygoncheck.classList.remove('active');
    optimismcheck.style.display = 'none'
    optimismcheck.classList.remove('active');
    celocheck.style.display = 'none'
    celocheck.classList.remove('active');

    uparrow.style.display = 'block'
    downarrow.style.display = 'none'

    if(!arbitrumcheck.classList.contains('active')){
        etherimg.style.backgroundImage = 'url(https://app.uniswap.org/static/media/arbitrum_logo.17ba9b2d.svg)'
        arbitrumcheck.classList.add('active')
        arbitrumcheck.style.display = 'inline'
        tokenChainSelectlist.classList.remove('active');
        tokenChainSelectlist.style.display = 'none';
    }else{
        tokenChainSelectlist.classList.remove('active');
        tokenChainSelectlist.style.display = 'none';
    }
})

// 셀로체인 클릭시 함수
celochain.addEventListener('click',function(){
    ethercheck.style.display = 'none'
    ethercheck.classList.remove('active');
    polygoncheck.style.display = 'none'
    polygoncheck.classList.remove('active');
    optimismcheck.style.display = 'none'
    optimismcheck.classList.remove('active');
    arbitrumcheck.style.display = 'none'
    arbitrumcheck.classList.remove('active');

    uparrow.style.display = 'block'
    downarrow.style.display = 'none'

    if(!celocheck.classList.contains('active')){
        etherimg.style.backgroundImage = 'url(https://app.uniswap.org/static/media/celo_logo.e95fad7b.svg)'
        celocheck.classList.add('active')
        celocheck.style.display = 'inline'
        tokenChainSelectlist.classList.remove('active');
        tokenChainSelectlist.style.display = 'none';
    }else{
        tokenChainSelectlist.classList.remove('active');
        tokenChainSelectlist.style.display = 'none';
    }
})
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

// 로컬스토리지 저장 내용 확인
console.log("user information : " + window.localStorage.getItem("UserInfo"));
console.log("join information : " + window.localStorage.getItem("JoinInfo"));
console.log("login information : " + window.localStorage.getItem("Login"));

// 개인 정보 설정

let nickChangeBtn = document.querySelector(".nickname-change");
let logoutBtn = document.querySelector(".logout");

// 로그인 후 마이 페이지 방문 시 표시
function loginInfo(){
    let loginValue = window.localStorage.getItem("Login");

    if(loginValue == null || loginValue == "null"){
        return;
    }else{
        let loginValue = window.localStorage.getItem("Login");

        let nickText = document.querySelector(".current-nick");
        
        nickText.innerHTML = "Current nickname : " + JSON.parse(loginValue).nick;
        
        let acountText = document.querySelector(".user-cash");
        
        acountText.innerHTML = JSON.parse(loginValue).dollar + " $";
        
        // 사이드바 개인 정보 표기
        let sideNickText = document.querySelector(".nickname");
        let sideAcountText = document.querySelector(".cash");
        let sideBitcoin = document.querySelector(".bitcoin");
        let sideEthereum = document.querySelector(".ethereum");


        sideNickText.innerHTML = "Nickname : " + JSON.parse(loginValue).nick;
        sideAcountText.innerHTML = "Cash : " + JSON.parse(loginValue).dollar + " $";
        sideBitcoin.innerHTML = "Bitcoin : " + JSON.parse(loginValue).bit;
        sideEthereum.innerHTML = "Ethereum : " + JSON.parse(loginValue).eth;
    }
}

loginInfo();

// 로그 아웃 버튼 설정
logoutBtn.addEventListener("click", function(){
    let loginValue = window.localStorage.getItem("Login");
    
    if(loginValue == null){
        return;
    }else{
        window.localStorage.setItem("Login", null);
    }
})

// 닉네임 정규식 검사 함수
function isNick(asValue) {
    let regExp = /^[a-zA-Z0-9]{1,10}$/g;    
	return regExp.test(asValue);
}

// 닉네임 형식 검사 함수
nickChangeBtn.addEventListener("click",function(){
    let userInfo = window.localStorage.getItem("UserInfo");
    let joinInfo = window.localStorage.getItem("JoinInfo");
    let userNick = document.querySelector(".change-nick").value;
    let nickText = document.querySelector(".nickname-same");
    

    if(userNick != 0){
        if(!isNick(userNick)){
            nickText.style.color = "red";
            nickText.innerHTML = "Incorrect. <br> Please match with the nickname format. <br> (Use 1 to 10 alphabets and numbers.)";
        }else{
            if(userInfo == null && joinInfo == null){
                // 로컬스토리지 내 데이터 없을 시
                nickText.style.color = "green";
                nickText.innerHTML = "Correct. <br> You can use this id.";
                changeNick();
            }else if(userInfo != null){
                // 유저 데이터 존재 시
                nickFilter(userInfo);
            }else{
                // 가입 신청 데이터 존재 시
                nickFilter(joinInfo);
            }
        }
    }    
})

// 닉네임 존재 유무 검사 함수
function nickFilter(infomation){
    let userNick = document.querySelector(".change-nick").value;
    let nickText = document.querySelector(".nickname-same");

    infomation = infomation.split("|");  // 로컬스토리지 데이터 배열화
    let infoFilter = [];   // 검사용 배열 생성

    infomation.forEach(function(i){
        infoFilter.push(JSON.parse(i).nick);
    });

    // 닉네임 존재 유무 확인
    let match = infoFilter.filter(function(i){
        return i == userNick;
    });

    if(match.length != 0){
        nickText.style.color = "red";
        nickText.innerHTML = "Incorrect. <br> The nickname has been already used.";
    }else{
        nickText.style.color = "green";
        nickText.innerHTML = "Correct. <br> You can use this nickname.";
        changeNick();
    }
}

// 설정된 닉네임 변경 함수
function changeNick(){
    let loginValue = window.localStorage.getItem("Login");
    let userInfo = window.localStorage.getItem("UserInfo");
    let userNick = document.querySelector(".change-nick").value;
    let currentNickText = document.querySelector(".current-nick");
    let sideNickText = document.querySelector(".nickname");
    
    currentNickText.innerHTML = "Current nickname : " + userNick;
    sideNickText.innerHTML = "Nickname : " + userNick;

    let _userInfo = userInfo.split("|");

    window.localStorage.setItem("Login", `{"id" : "${JSON.parse(loginValue).id}", "pw" : "${JSON.parse(loginValue).pw}", "nick" : "${userNick}", "dollar" : "${JSON.parse(loginValue).dollar}", "bit" : "${JSON.parse(loginValue).bit}", "eth" : "${JSON.parse(loginValue).eth}"}`);

    _userInfo.forEach(function(a,i){
        if(JSON.parse(loginValue).id == JSON.parse(a).id){

            _userInfo.splice(i,1);

            if(_userInfo.length == 0){
                window.localStorage.setItem("UserInfo", `{"id" : "${JSON.parse(loginValue).id}", "pw" : "${JSON.parse(loginValue).pw}", "nick" : "${userNick}", "dollar" : "${JSON.parse(loginValue).dollar}", "bit" : "${JSON.parse(loginValue).bit}", "eth" : "${JSON.parse(loginValue).eth}"}`);
            }else{
                userInfo = _userInfo.join("|");
                window.localStorage.setItem("UserInfo", userInfo + "|" + `{"id" : "${JSON.parse(loginValue).id}", "pw" : "${JSON.parse(loginValue).pw}", "nick" : "${userNick}", "dollar" : "${JSON.parse(loginValue).dollar}", "bit" : "${JSON.parse(loginValue).bit}", "eth" : "${JSON.parse(loginValue).eth}"}`);
            }
        }
    })
}

let userCash = document.querySelector(".user-cash");
let chargeBtn = document.querySelector(".acount-charge");

// 현금 충전 버튼 설정
chargeBtn.addEventListener("click", function(){
    let chargeDollars = document.querySelector(".charge-acount").value;
    let loginValue = window.localStorage.getItem("Login");
    let userInfo = window.localStorage.getItem("UserInfo");
    let userCash = document.querySelector(".user-cash");  
    let sideAcountText = document.querySelector(".cash");  

    let wantCharge = parseInt(chargeDollars);
    let beforeDollars = parseInt(JSON.parse(loginValue).dollar);

    if(chargeDollars.length == 0 || isNaN(chargeDollars) || wantCharge <= 0){
        return;
    }else{
            
        let chargeResult = wantCharge + beforeDollars
    
        let _userInfo = userInfo.split("|");
    
        _userInfo.forEach(function(a,i){
            if(JSON.parse(loginValue).id == JSON.parse(a).id){
                
                _userInfo.splice(i,1);
    
                if(_userInfo.length == 0){
                    window.localStorage.setItem("UserInfo", `{"id" : "${JSON.parse(loginValue).id}", "pw" : "${JSON.parse(loginValue).pw}", "nick" : "${JSON.parse(loginValue).nick}", "dollar" : "${chargeResult}", "bit" : "${JSON.parse(loginValue).bit}", "eth" : "${JSON.parse(loginValue).eth}"}`);
                }else{
                    userInfo = _userInfo.join("|");
                    window.localStorage.setItem("UserInfo", userInfo + "|" + `{"id" : "${JSON.parse(loginValue).id}", "pw" : "${JSON.parse(loginValue).pw}", "nick" : "${JSON.parse(loginValue).nick}", "dollar" : "${chargeResult}", "bit" : "${JSON.parse(loginValue).bit}", "eth" : "${JSON.parse(loginValue).eth}"}`);
                }
            }
            window.localStorage.setItem("Login", `{"id" : "${JSON.parse(loginValue).id}", "pw" : "${JSON.parse(loginValue).pw}", "nick" : "${JSON.parse(loginValue).nick}", "dollar" : "${chargeResult}", "bit" : "${JSON.parse(loginValue).bit}", "eth" : "${JSON.parse(loginValue).eth}"}`);
            
            userCash.innerHTML = chargeResult + " $";
            sideAcountText.innerHTML = "Cash : " + chargeResult + " $";
        })
    }
})

let withdrawBtn = document.querySelector(".acount-withdraw");

// 현금 인출 버튼 설정
withdrawBtn.addEventListener("click",function(){
    let chargeDollars = document.querySelector(".charge-acount").value;
    let loginValue = window.localStorage.getItem("Login");
    let userInfo = window.localStorage.getItem("UserInfo");
    let userCash = document.querySelector(".user-cash");  
    let sideAcountText = document.querySelector(".cash");  

    let wantWithdraw = parseInt(chargeDollars);
    let beforeDollars = parseInt(JSON.parse(loginValue).dollar);

    if(chargeDollars.length == 0 || isNaN(wantWithdraw) || wantWithdraw > beforeDollars || wantWithdraw <= 0){
        return;
    }else{
            
        let withdrawResult = beforeDollars - wantWithdraw;
    
        let _userInfo = userInfo.split("|");
    
        _userInfo.forEach(function(a,i){
            if(JSON.parse(loginValue).id == JSON.parse(a).id){
                
                _userInfo.splice(i,1);
    
                if(_userInfo.length == 0){
                    window.localStorage.setItem("UserInfo", `{"id" : "${JSON.parse(loginValue).id}", "pw" : "${JSON.parse(loginValue).pw}", "nick" : "${JSON.parse(loginValue).nick}", "dollar" : "${withdrawResult}", "bit" : "${JSON.parse(loginValue).bit}", "eth" : "${JSON.parse(loginValue).eth}"}`);
                }else{
                    userInfo = _userInfo.join("|");
                    window.localStorage.setItem("UserInfo", userInfo + "|" + `{"id" : "${JSON.parse(loginValue).id}", "pw" : "${JSON.parse(loginValue).pw}", "nick" : "${JSON.parse(loginValue).nick}", "dollar" : "${withdrawResult}", "bit" : "${JSON.parse(loginValue).bit}", "eth" : "${JSON.parse(loginValue).eth}"}`);
                }
            }
            window.localStorage.setItem("Login", `{"id" : "${JSON.parse(loginValue).id}", "pw" : "${JSON.parse(loginValue).pw}", "nick" : "${JSON.parse(loginValue).nick}", "dollar" : "${withdrawResult}", "bit" : "${JSON.parse(loginValue).bit}", "eth" : "${JSON.parse(loginValue).eth}"}`);
            
            userCash.innerHTML = withdrawResult + " $";
            sideAcountText.innerHTML = "Cash : " + withdrawResult + " $";
        })
    }
})
// legal & privacy Popup
let legalinpopup = document.querySelector('.legalinpopup');
let legalBtn = document.querySelector('.legalBtn');
let legalBox = document.querySelector('.legalContainer');
let home = document.querySelector('.Home');


legalinpopup.onclick = function(){
  legalBox.classList.add('active');
  console.log();
//   home.style.backgroundColor = "black";
  home.style.opacity = "0.4";
  document.body.style.overflow = "hidden";
}
legalBtn.onclick = function(){
  legalBox.classList.remove('active');
//   home.style.backgroundColor = "rgb(255,205,210)";
  home.style.opacity = "1";
  document.body.style.overflow = "auto";
}
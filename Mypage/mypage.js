// 로그인 사이드바 설정
function drawer(el, open = false){
    this.el = el;
    this.isOpen = open;
    
  
  Object.assign(this.el.style,{
    display : "block",
    position : "fixed",
    top : 0,
    bottom : 0,
    right : 0,
    width : "340px",
    paddingLeft : "30px",
    backgroundColor : "rgba(255,255,255,0.5)",
    transition : "1s",
    borderRadius: "10px"
  });
}
drawer.prototype.open = function(){
this.isOpen = true;
this.el.style.transform = "translate(0)";
}
drawer.prototype.close = function(){
this.isOpen = false;
this.el.style.transform = "translate(500px)";
}
const sideMenu = new drawer(document.querySelector('.drawer'));
sideMenu.close();
document.querySelector('.drawer-opener').onclick = function(){
if(!sideMenu.isOpen)sideMenu.open();
else sideMenu.close();
}

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

// 개인 정보 설정


let loginValue = window.localStorage.getItem("Login");
let nickChangeBtn = document.querySelector(".nickname-change");

// 로그인 후 마이 페이지 방문 시 표시
function loginInfo(){
    if(loginValue == null){
        return;
    }else{
        loginValue = loginValue.split("|");

        let nickText = document.querySelector(".current-nick");
    
        nickText.innerHTML = "Current nickname : " + JSON.parse(loginValue).nick;
    
        let acountText = document.querySelector(".user-cash");
    
        acountText.innerHTML = JSON.parse(loginValue).acount + " won";
    }
}

loginInfo();

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

function changeNick(){
    let userInfo = window.localStorage.getItem("UserInfo");
    let userNick = document.querySelector(".change-nick").value;
    let currentNickText = document.querySelector(".current-nick");
    
    currentNickText.innerHTML = "Current nickname : " + userNick;

    let _userInfo = userInfo.split("|");

    window.localStorage.setItem("Login", `{"id" : "${JSON.parse(loginValue).id}", "pw" : "${JSON.parse(loginValue).pw}", "nick" : "${userNick}", "acount" : ${JSON.parse(loginValue).acount}}`);

    _userInfo.forEach(function(a,i){
        if(JSON.parse(loginValue).id == JSON.parse(a).id){

            _userInfo.splice(i,1);

            if(_userInfo.length == 0){
                window.localStorage.setItem("UserInfo", `{"id" : "${JSON.parse(loginValue).id}", "pw" : "${JSON.parse(loginValue).pw}", "nick" : "${userNick}", "acount" : ${JSON.parse(loginValue).acount}}`);
            }else{
                userInfo = _userInfo.join("|");
                window.localStorage.setItem("UserInfo", userInfo + "|" + `{"id" : "${JSON.parse(loginValue).id}", "pw" : "${JSON.parse(loginValue).pw}", "nick" : "${userNick}", "acount" : ${JSON.parse(loginValue).acount}}`);
            }
            
            console.log(" 2 user information : " + window.localStorage.getItem("UserInfo"));
        }
    })

    console.log("login information : " + window.localStorage.getItem("Login"));
}

console.log("user information : " + window.localStorage.getItem("UserInfo"));
console.log("join information : " + window.localStorage.getItem("JoinInfo"));
console.log("login information : " + window.localStorage.getItem("Login"));
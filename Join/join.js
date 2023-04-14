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

// 가입 신청 설정

let idBtn = document.querySelector(".id-check");
let pwBtn = document.querySelector(".pw-check");
let pwCheckBtn = document.querySelector(".pw-samecheck");
let nickBtn = document.querySelector(".nickname-check");
let joinBtn = document.querySelector(".join-btn");
let isCorrect = [false, false, false];  // 작성 내용이 맞는지 확인
let checkArr = {};
let userInfo = window.localStorage.getItem("UserInfo");
let joinInfo = window.localStorage.getItem("JoinInfo");

// 아이디 정규식 검사 함수
function isId(asValue) {
    let regExp = /^[a-zA-Z0-9]{3,10}$/g;    
	return regExp.test(asValue);
}

// 아이디 형식 검사 및 중복 검사 함수
idBtn.addEventListener("click",function(){
    let userId = document.querySelector(".user-id").value;
    let idText = document.querySelector(".id-result");

    if(userId.length != 0){
        if(!isId(userId)){          
            idText.style.color = "red";
            idText.innerHTML = "Incorrect. <br> Please match with the id format. <br> (Use 3 to 10 alphabets and numbers.)";
            isCorrect[0] = false;
        }else{
            if(userInfo == null && joinInfo == null){
                // 로컬스토리지 내 데이터 없을 시
                idText.style.color = "green";
                idText.innerHTML = "Correct. <br> You can use this id.";
                isCorrect[0] = true;
                checkArr.id = userId;
            }else if(userInfo != null){
                // 유저 데이터 존재 시
                idFilter(userInfo);
            }else{
                // 가입 신청 데이터 존재 시
                idFilter(joinInfo);
            }
        }
    }
})

// 아이디 존재 유무 검사 함수
function idFilter(infomation){
    let userId = document.querySelector(".user-id").value;
    let idText = document.querySelector(".id-result");

    infomation = infomation.split("|");  // 로컬스토리지 데이터 배열화
    let infoFilter = [];   // 검사용 배열 생성

    infomation.forEach(function(i){
        infoFilter.push(JSON.parse(i).id);
    });

    // 아이디 존재 유무 확인
    let match = infoFilter.filter(function(i){
        return i == userId;
    });

    if(match.length != 0){
        idText.style.color = "red";
        idText.innerHTML = "Incorrect. <br> The id has been already used.";
        isCorrect[0] = false;
    }else{
        idText.style.color = "green";
        idText.innerHTML = "Correct. <br> You can use this id.";
        isCorrect[0] = true;
        checkArr.id = userId;
    }
}

// 비밀번호 정규식 검사 함수
function isPassword(asValue) {
    let regExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{5,10}$/;
    return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
}

// 비밀번호 형식 검사 함수
pwBtn.addEventListener("click",function(){
    let password = document.querySelector(".user-pw").value;
    let pwText = document.querySelector(".pw-result");

    if(password.length != 0){
        if(!isPassword(password)){            
            pwText.style.color = "red";
            pwText.innerHTML = "Incorrect. <br>Please match with the password format.<br> (Use 5 to 10 alphabets and numbers)";
        }else{
            pwText.style.color = "green";
            pwText.innerHTML = "Correct. <br>You can use this password.";             
        }
    }
})

// 비밀번호 재확인 함수
pwCheckBtn.addEventListener("click",function(){
    let password = document.querySelector(".user-pw").value;
    let pwCheck = document.querySelector(".user-pw-check").value;
    let pwText = document.querySelector(".pw-same");

    if(pwCheck.length != 0){
        if(password != pwCheck){            
            pwText.style.color = "red";
            pwText.innerHTML = "Incorrect. <br>Please match with upper password.";
            isCorrect[1] = false;
        }else{
            pwText.style.color = "green";
            pwText.innerHTML = "Correct.";
            isCorrect[1] = true;
            checkArr.pw = password;
        }
    }
})

// 닉네임 정규식 검사 함수
function isNick(asValue) {
    let regExp = /^[a-zA-Z0-9]{1,10}$/g;    
	return regExp.test(asValue);
}

// 닉네임 형식 검사 함수
nickBtn.addEventListener("click",function(){
    let userNick = document.querySelector(".user-nickname").value;
    let nickText = document.querySelector(".nickname-same");

    if(userNick.length != 0){
        if(!isNick(userNick)){
            nickText.style.color = "red";
            nickText.innerHTML = "Incorrect. <br> Please match with the nickname format. <br> (Use 1 to 10 alphabets and numbers.)";
            isCorrect[2] = false;
        }else{
            if(userInfo == null && joinInfo == null){
                // 로컬스토리지 내 데이터 없을 시
                nickText.style.color = "green";
                nickText.innerHTML = "Correct. <br> You can use this id.";
                isCorrect[2] = true;
                checkArr.nick = userNick;
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
    let userNick = document.querySelector(".user-nickname").value;
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
        isCorrect[2] = false;
    }else{
        nickText.style.color = "green";
        nickText.innerHTML = "Correct. <br> You can use this nickname.";
        isCorrect[2] = true;
        checkArr.nick = userNick;
    }
}

// 가입 신청 버튼
joinBtn.addEventListener("click",function(){
    if(isCorrect[0] && isCorrect[1] && isCorrect[2]){
        let inputs = document.querySelectorAll("input");

        if(inputs[0].value !== checkArr.id){
            alert("Id incorrect. Check your id again please.");
        }else if(inputs[1].value !== checkArr.pw || inputs[2].value !== checkArr.pw){
            alert("Password incorrect. Check your password again please.");
        }else if(inputs[3].value !== checkArr.nick){
            alert("Nickname incorrect. Check your nickname again please.");
        }else{
            if(joinInfo == null){
                window.localStorage.setItem("JoinInfo", `{"id" : "${inputs[0].value}", "pw" : "${inputs[1].value}", "nick" : "${inputs[3].value}"}`);
            }else{
                window.localStorage.setItem("JoinInfo", joinInfo + "|" + `{"id" : "${inputs[0].value}", "pw" : "${inputs[1].value}", "nick" : "${inputs[3].value}"}`);
            }
            console.log(window.localStorage.getItem("JoinInfo"));
            
            alert("Your subscription has been completed.\nPlease wait until it is approved.");
            location.href = "../Login/login.html";
        }
    }else{
        if(!isCorrect[0]){
            alert("Please match with the id format. \n(Use 3 to 10 alphabets and numbers.");
        }else if(!isCorrect[1]){
            alert("Please match with the password format.\n(Use 5 to 10 alphabets and numbers)");
        }else{
            alert("Please change nickname. The nickname has already been used.");
        }        
    }
})

// window.localStorage.clear();

console.log("user information : " + window.localStorage.getItem("UserInfo"));
console.log("join information : " + window.localStorage.getItem("JoinInfo"));
console.log("login information : " + window.localStorage.getItem("Login"));
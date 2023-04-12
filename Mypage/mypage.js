let loginValue = window.localStorage.getItem("Login");
let userInfo = window.localStorage.getItem("UserInfo");
let joinInfo = window.localStorage.getItem("JoinInfo");
let nickChangeBtn = document.querySelector(".nickname-change");

// 로그인 후 마이 페이지 방문 시 표시
function loginInfo(){
    if(loginValue == null){
        return;
    }else{
        loginValue = loginValue.split("|");

        let nickText = document.querySelector(".current-nick");
    
        nickText.innerHTML = "Current nickname" + JSON.parse(loginValue).nickText;
    
        let acountText = document.querySelector(".user-cash");
    
        acountText.innerHTML = JSON.parse(loginValue).acount + "won";
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
    let _userInfo = userInfo.split("|");
    JSON.parse(loginValue).nick = userNick;

    _userInfo.forEach(function(a,i){
        if(JSON.parse(loginValue).id == JSON.parse(a).id){
            a = loginValue;
            _userInfo.splice(i,1);
            userInfo = _userInfo.join("|");
            window.localStorage.setItem("UserInfo", userInfo + "|" + a);
        }
    })
}
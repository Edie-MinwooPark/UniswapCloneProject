let idBtn = document.querySelector(".id-check");
let pwBtn = document.querySelector(".pw-check");
let pwCheckBtn = document.querySelector(".pw-samecheck");
let nickBtn = document.querySelector(".nickname-check");
let joinBtn = document.querySelector(".join-btn");
let isCorrect = [false, false, false];  // 작성 내용이 맞는지 확인
let checkArr = {};

// 아이디 정규식 검사 함수
function isId(asValue) {
    let regExp = /^[a-z]+[a-z0-9]{2,9}$/g;    
	return regExp.test(asValue);
}

// 아이디 형식 검사 및 중복 검사 함수
idBtn.addEventListener("click",function(){
    let userId = document.querySelector(".user-id").value;
    let idText = document.querySelector(".id-result");
    if(userId.length != 0){
        console.log(userId.length);
        if(!isId(userId)){
            idText.style.color = "red";
            idText.innerHTML = "Incorrect. <br> Please match with the id format. <br> (Use 3 to 10 alphabets and numbers.)";
            isCorrect[0] = false;
        }else{
            idText.style.color = "green";
            idText.innerHTML = "Correct. <br> You can use this id.";
            isCorrect[0] = true;
            checkArr.id = userId;
        }
    }
})

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

// 닉네임 형식 검사 함수
nickBtn.addEventListener("click",function(){
    let userNick = document.querySelector(".user-nickname").value;
    isCorrect[2] = true;
    checkArr.nick = userNick;
    console.log(checkArr.nick);
})

// window.localStorage.clear();

// 가입 신청 버튼
joinBtn.addEventListener("click",function(){
    if(isCorrect[0] && isCorrect[1] && isCorrect[2]){
        let inputs = document.querySelectorAll("input");
        let value = window.localStorage.getItem("JoinInfo");
        
        if(inputs[0].value !== checkArr.id){
            alert("Id incorrect. Check your id again please.");
        }else if(inputs[1].value !== checkArr.pw || inputs[2].value !== checkArr.pw){
            alert("Password incorrect. Check your password again please.");
        }else if(inputs[3].value !== checkArr.nick){
            alert("Nickname incorrect. Check your nickname again please.");
        }else{
            if(window.localStorage.length == 0){
                window.localStorage.setItem("JoinInfo", `{"id" : "${inputs[0].value}", "pw" : "${inputs[1].value}", "nick" : "${inputs[3].value}"}`);
            }else{
                window.localStorage.setItem("JoinInfo", value + "|" + `{"id" : "${inputs[0].value}", "pw" : "${inputs[1].value}", "nick" : "${inputs[3].value}"}`);
            }
            console.log(window.localStorage.getItem("JoinInfo"));
            
            alert("Your subscription has been completed.\n Please wait until it is approved.");
        }
    }else{
        if(!isCorrect[0]){
            alert("Please match with the id format. \n (Use 3 to 10 alphabets and numbers.");
        }else if(!isCorrect[1]){
            alert("Please match with the password format.\n (Use 5 to 10 alphabets and numbers)");
        }else{
            alert("Please change nickname. The nickname has already been used.");
        }        
    }
})
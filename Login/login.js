let loginBtn = document.querySelector(".login-btn");


loginBtn.addEventListener("click", function(){
    let userId = document.querySelector(".user-id").value;
    let userPw = document.querySelector(".user-pw").value;
    let userValue = window.localStorage.getItem("UserInfo");
    let wrongText = document.querySelector(".wrong-letter");

    wrongText.innerHTML = "";

    if(userId === "admin" && userPw === "admin123"){
        // 관리자 접속
        alert("Login complete. \nGo to administrator page.");
        window.localStorage.setItem("Login", `{"id" : "${userId}", "pw" : "${userPw}", "nick" : "administor"}`);
        location.href = "../Admin/admin.html";
    }else{

        if(userValue == null){
            wrongText.innerHTML = "Id or password is not correct. <br> Please check id or password.";
            return;
        }else{
            userValue = userValue.split("|");
        }
    
        userValue.forEach(function(a){
            if(userId === JSON.parse(a).id && userPw === JSON.parse(a).pw){
                alert("Login complete. \nGo to my page.");
                window.localStorage.setItem("Login", a);
                location.href = "../Mypage/mypage.html";
                return;
            }else{
                wrongText.innerHTML = "Id or password is not correct. <br> Please check id or password.";
            }
        });
    }
})

// window.localStorage.clear();

console.log("user information : " + window.localStorage.getItem("UserInfo"));
console.log("join information : " + window.localStorage.getItem("JoinInfo"));
console.log("login information : " + window.localStorage.getItem("Login"));
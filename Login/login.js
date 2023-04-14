// 로그인 사이드 바 설정
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

// 로그인 설정

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
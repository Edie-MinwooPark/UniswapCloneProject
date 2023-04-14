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

// 관리자 설정



let listUpBtn = document.querySelector(".list-up");

// 가입 요청 리스트 소환
listUpBtn.addEventListener("click",function(){
    console.log(window.localStorage.getItem("JoinInfo"));
    render();
})

// 리스트의 테이블화
function render(){
    let joinValue = window.localStorage.getItem("JoinInfo");
    let list = document.querySelector(".join-request");
    console.log(typeof joinValue);  

    list.innerHTML = ``;  // ul 초기화
    
    if(joinValue == "null"){
        let _ul = document.createElement("ul");
        let _li = document.createElement("li");
        let _div1 = document.createElement("div");
        let _div2 = document.createElement("div");
        let _div3 = document.createElement("div");
        let _div4 = document.createElement("div");
        let _div5 = document.createElement("div");

        _div1.innerHTML = "No.";
        _div2.innerHTML = "Id";
        _div3.innerHTML = "Nickname";
        _div4.innerHTML = "Approve";
        _div5.innerHTML = "Reject";
        _li.append(_div1, _div2, _div3, _div4, _div5);
        _ul.append(_li);

        list.append(_ul);
        return;         // 가입 신청 데이터가 없을 경우 함수 종료
    }else{
        let _value = joinValue.split("|");

        let _ul = document.createElement("ul");
        let _li = document.createElement("li");
        let _div1 = document.createElement("div");
        let _div2 = document.createElement("div");
        let _div3 = document.createElement("div");
        let _div4 = document.createElement("div");
        let _div5 = document.createElement("div");

        _div1.innerHTML = "No.";
        _div2.innerHTML = "Id";
        _div3.innerHTML = "Nickname";
        _div4.innerHTML = "Approve";
        _div5.innerHTML = "Reject";
        _li.append(_div1, _div2, _div3, _div4, _div5);
        _ul.append(_li);
    
        _value.forEach(function(a,i){
            let _li = document.createElement("li");
            let _div1 = document.createElement("div");
            let _div2 = document.createElement("div");
            let _div3 = document.createElement("div");
            let _div4 = document.createElement("div");
            let _div5 = document.createElement("div");
            let _btn1 = document.createElement("button");
            let _btn2 = document.createElement("button");

            _btn1.innerHTML = "O";
            _btn2.innerHTML = "X";
            _div1.innerHTML = `${i+1}`;
            _div2.innerHTML = JSON.parse(a).id;
            _div3.innerHTML = JSON.parse(a).nick;
    
            _div4.append(_btn1);
            _div5.append(_btn2);
    
            // 가입 승인 (요청 리스트에서 제거 후 유저 리스트로 전달)
            _btn1.onclick = function(){
                let userValue = window.localStorage.getItem("UserInfo");

                if(userValue == null){
                    window.localStorage.setItem("UserInfo", `{"id" : "${JSON.parse(a).id}", "pw" : "${JSON.parse(a).pw}", "nick" : "${JSON.parse(a).nick}", "acount" : 0}`);
                }else{
                    window.localStorage.setItem("UserInfo", userValue + "|" + `{"id" : "${JSON.parse(a).id}", "pw" : "${JSON.parse(a).pw}", "nick" : "${JSON.parse(a).nick}", "acount" : 0}`);
                }
                
                _value.splice(i,1);
                console.log(_value);

                if(_value.length != 0){
                    window.localStorage.setItem("JoinInfo", _value.join("|"));
                }else{
                    window.localStorage.setItem("JoinInfo", null);
                }
                
                render();
            }
    
            // 가입 거절 (요청 리스트에서 제거만)
            _btn2.onclick = function(){
                _value.splice(i,1);
                
                if(_value.length == 0){
                    window.localStorage.setItem("JoinInfo", "null");
                }else{
                    window.localStorage.setItem("JoinInfo", _value.join("|"));
                }
                
                render();
            }
            _li.append(_div1, _div2, _div3, _div4, _div5);
            _ul.append(_li);
        });
    
        list.append(_ul);

    }
}

console.log("user information : " + window.localStorage.getItem("UserInfo"));
console.log("join information : " + window.localStorage.getItem("JoinInfo"));
console.log("login information : " + window.localStorage.getItem("Login"));
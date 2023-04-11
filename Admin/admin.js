let listUpBtn = document.querySelector(".list-up");

// 가입 요청 리스트 소환
listUpBtn.addEventListener("click",function(){
    render();
})

function render(){
    let value = window.localStorage.getItem("JoinInfo");
    value = value.split("|");

    let list = document.querySelector(".join-request");
    list.innerHTML = "";

    let _ul = document.createElement("ul");
    let _li = document.createElement("li");
    let _div1 = document.createElement("div");
    let _div2 = document.createElement("div");
    let _div3 = document.createElement("div");
    let _div4 = document.createElement("div");
    let _div5 = document.createElement("div");
    let _div6 = document.createElement("div");
    _div1.innerHTML = "No.";
    _div2.innerHTML = "Id";
    _div3.innerHTML = "Password";
    _div4.innerHTML = "Nickname";
    _div5.innerHTML = "Approve";
    _div6.innerHTML = "Reject";
    _li.append(_div1, _div2, _div3, _div4, _div5, _div6);
    _ul.append(_li);

    if(value[0] == ""){
        return;
    }

    value.forEach(function(a,i){
        let _li = document.createElement("li");
        let _div1 = document.createElement("div");
        let _div2 = document.createElement("div");
        let _div3 = document.createElement("div");
        let _div4 = document.createElement("div");
        let _div5 = document.createElement("div");
        let _div6 = document.createElement("div");
        let _btn1 = document.createElement("button");
        let _btn2 = document.createElement("button");
        _btn1.innerHTML = "O";
        _btn2.innerHTML = "X";
        _div1.innerHTML = `${i+1}`;
        _div2.innerHTML = JSON.parse(a).id;
        _div3.innerHTML = JSON.parse(a).pw;
        _div4.innerHTML = JSON.parse(a).nick;

        _div5.append(_btn1);
        _div6.append(_btn2);

        _btn1.onclick = function(){
            let userValue = window.localStorage.getItem("UserInfo");
            if(userValue == null){
                window.localStorage.setItem("UserInfo", `{"id" : "${value[i].id}", "pw" : "${value[i].pw}", "nick" : "${value[i].nick}"}`);
            }else{
                window.localStorage.setItem("UserInfo", userValue + "|" + `{"id" : "${value[i].id}", "pw" : "${value[i].pw}", "nick" : "${value[i].nick}"}`);
            }
            
            value.splice(i,1);
            window.localStorage.setItem("JoinInfo", value.join("|"));
            
            render();
        }

        _btn2.onclick = function(){
            value.splice(i,1);
            window.localStorage.setItem("JoinInfo", value.join("|"));
            
            render();
        }
        _li.append(_div1, _div2, _div3, _div4, _div5, _div6);
        _ul.append(_li);
    });

    list.append(_ul);
}
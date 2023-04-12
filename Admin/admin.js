let listUpBtn = document.querySelector(".list-up");

// 가입 요청 리스트 소환
listUpBtn.addEventListener("click",function(){
    render();
})

// 리스트의 테이블화
function render(){
    let value = window.localStorage.getItem("JoinInfo");
    let list = document.querySelector(".join-request");
    
    if(value == null){
        return;         // 가입 신청 데이터가 없을 경우 함수 종료
    }else{
        value = value.split("|");

        list.innerHTML = ``;  // ul 초기화
    
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
    
        value.forEach(function(a,i){
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
                    window.localStorage.setItem("UserInfo", `{"id" : "${value[i].id}", "pw" : "${value[i].pw}", "nick" : "${value[i].nick}"}`);
                }else{
                    window.localStorage.setItem("UserInfo", userValue + "|" + `{"id" : "${value[i].id}", "pw" : "${value[i].pw}", "nick" : "${value[i].nick}"}`);
                }
                
                value.splice(i,1);
                window.localStorage.setItem("JoinInfo", value.join("|"));
                
                render();
            }
    
            // 가입 거절 (요청 리스트에서 제거만)
            _btn2.onclick = function(){
                value.splice(i,1);
                window.localStorage.setItem("JoinInfo", value.join("|"));
                
                render();
            }
            _li.append(_div1, _div2, _div3, _div4, _div5);
            _ul.append(_li);
        });
    
        list.append(_ul);

        // pagination(1);
    }
}

// 페이지네이션
function pagination(currentPage){    
    let joinValue = window.localStorage.getItem("JoinInfo").split("|");
    let _ul = document.querySelector(".pagination");
    let list = document.querySelector(".join-request");
    
    let totalCount = joinValue.length;  // 전체 데이터 줄수
    if(totalCount <= 5) return;  // 전체 데이터 줄수가 5이하면 바로 함수 종료

    let countLimit = 5;   // 페이지당 데이터 줄수
    let totalPage = Math.ceil(totalCount/countLimit);  // 전체 페이지 수
    let pageCount = 5;    // 페이지 표기 수

    let pageGroup = Math.ceil(currentPage/pageCount);  // 현재 페이지의 그룹

    let groupLast = pageGroup * pageCount;  // 현재 선택한 페이지 그룹의 마지막 페이지
    if(groupLast > totalPage){
        groupLast = totalPage;
    }  // 그룹 마지막 페이지가 전체 페이지 수 보다 많을 경우 페이지 수를 맞춰준다.

    let groupFirst = groupLast - (pageCount - 1); // 선택한 페이지 그룹의 첫 페이지

    for (let i = groupFirst; i <= groupLast; i++) {
        let _li = document.createElement("li");
        _li.innerHTML += "<a href";
    }

}
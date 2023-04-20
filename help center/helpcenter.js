

// help center 부분

// 로컬스토리시 전역 선언
let add = document.querySelector(".add");
let pbox = document.querySelector(".pbox");
let pageNum = 0;

// // 페이지 네이션




// 작성 버튼 클릭 시 작성 창 등장
add.onclick = function(){
    box.style.display = "block";
    box.innerHTML = "";
    box2.innerHTML = "";

    let div01 = document.createElement("div");
    let label01 = document.createElement("label");
    let input01 = document.createElement("input");
    let div02 = document.createElement("div");
    let div03 = document.createElement("div");
    let text = document.createElement("textarea");
    let btn = document.createElement("button");
    let cen = document.createElement("button");

    btn.innerHTML = "등록";
    cen.innerHTML = "취소";
    btn.className = "add2";
    cen.className = "add2";
    div03.className = "buttonbox";
    label01.innerHTML = "작성자";

    div01.append(label01, input01);
    div02.append(text);
    div03.append(cen, btn)
    box.append(div01, div02, div03);
    text.className = "qna";
    btn.addEventListener("click", addlist);

    cen.onclick = function(){
        box.style.display = "none"
    }
}

// 작성 창에 내용 입력 시 게시판에 추가
function addlist(){
    let input = document.querySelector("input");
    let value = window.localStorage.getItem("list");
    let textarea = document.querySelector("textarea");
    if(window.localStorage.getItem("list") == null){
    window.localStorage.setItem("list", `{"index" : ${window.localStorage.length + 1}, "writer" : "${input.value}", "question" : "${textarea.value}"}`);
    }else{
    let index = window.localStorage.getItem("list").split("|").length + 1;
    window.localStorage.setItem("list", value + "|" + `{"index" : ${index}, "writer" : "${input.value}", "question" : "${textarea.value}"}`);
    }
    console.log(window.localStorage.getItem("list"));


    init()
    render(pageNum/10);
}

// 작성되면 그리는 함수
init();
function init(){
    console.log(window.localStorage.getItem("list"))
    if(window.localStorage.getItem("list") != null)
    {
        render(0);
    }else{
        list.innerHTML = "";
    }
}

function render(offset){
    // 한 페이지에 10개씩 보이게
    let _offset = offset *10;
    let rocal = window.localStorage.getItem("list");
    list.innerHTML = "";
    rocal = rocal.split("|");
    let _rocal = [...rocal]
    btns.innerHTML ="";

    // 글의 갯수가 10개 넘어가면 버튼이 하나씩 추가되게
    _rocal.forEach((e,i)=>{
        if(i % 10 == 0){
            let btn = document.createElement("button");
            btn.innerHTML = i / 10 + 1;
            btn.className = "pagebtn"
            btn.onclick = function(){
                pageNum = i;
                render(i/10)
                
            }
            btns.append(btn);
        }
    })
    _rocal = _rocal.slice(_offset,_offset + 10);

    let _ul = document.createElement("ul");
    let _li = document.createElement("li");
    let list01 = document.createElement("div");
    let list02 = document.createElement("div");
    let ind = document.createElement("div");
    let div = document.createElement("div")
    let div2 = document.createElement("div")

    ind.innerHTML = "번호"
    ind.className = "ind"
    list01.innerHTML = "작성자";
    list02.innerHTML = "문의사항";
    list02.className = "qe";
    div.innerHTML = "삭제";
    div.className = "bt"
    div2.innerHTML = "수정";
    div2.className = "bt"

    _li.append(ind, list01, list02, div, div2)
    _ul.append(_li)

    _rocal.forEach(function(i, index, item) {
        let _li = document.createElement("li");
        let list01 = document.createElement("div");
        let list02 = document.createElement("div");
        let ind = document.createElement("div");
        let del = document.createElement("button");
        let div = document.createElement("div")
        let c = document.createElement("button");
        let div2 = document.createElement("div")
        list01.innerHTML = JSON.parse(i).writer;
        list02.innerHTML = JSON.parse(i).question;
        list02.className = "qe";
        ind.innerHTML = index + 1 + pageNum; //삭제하면 번호 삭제되고 순서대로 재정렬
        // ind.innerHTML = JSON.parse(i).index; // 삭제하면 해당 인덱스만 제거됨
        ind.className = "ind"
        del.innerHTML = "삭제"
        c.innerHTML = "수정"
        div.append(del);
        div.className = "bt"
        div2.className = "bt"

        div2.append(c);

        del.onclick = function() {
            let value = window.localStorage.getItem("list");
            rocal.splice(index + pageNum,1);
            console.log(rocal);
            console.log(rocal.length);
            console.log(rocal.join("|"));
            let str = rocal.join("|")
            if(rocal.length == 0){
                window.localStorage.removeItem("list");
            }else{
                window.localStorage.setItem("list",str);
            }
            render(pageNum/10);
        }; 
        c.onclick = function(){
            console.log(index)
            let rocal = window.localStorage.getItem("list");
            rocal = rocal.split("|");
            console.log();
            let obj = JSON.parse(rocal[index +pageNum]);
            // add.onclick()
            box.style.display = "none"
            box2.style.display = "block"
            
            box2.innerHTML = ""
            let div01 = document.createElement("div");
            let div02 = document.createElement("div");
            let div03 = document.createElement("div");
            let label01 = document.createElement("label");
            let input = document.createElement("input");
            let text = document.createElement("textarea");
            let btn = document.createElement("button");
            let cen = document.createElement("button");

            btn.innerHTML = "등록";
            cen.innerHTML = "취소";
            div03.className = "buttonbox"
            btn.className = "add2";
            cen.className = "add2"
            input.className = "in";
            label01.innerHTML = "작성자";
            text.className = "in";
            text.className = "qna";

            div01.append(label01,input);
            div02.append(text);
            div03.append(cen, btn)
            box2.append(div01, div02, div03);
            btn.addEventListener("click", () => {
                obj.writer = input.value;
                obj.question = text.value;
                rocal[index + pageNum] = JSON.stringify(obj);
                let str = rocal.join("|")
                window.localStorage.setItem("list",str);
                box2.style.display = "none"
                render(pageNum/10)
                

            });
            cen.onclick = function(){
                box2.style.display = "none"
            }
        }
        

        _li.append(ind, list01, list02, div, div2)
        _ul.append(_li)
    });
    list.append(_ul);
}







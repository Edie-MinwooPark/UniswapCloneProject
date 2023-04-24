

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
    input01.className = "input01"

    // 로그인시 작성자를 닉네임으로 자동 변경
    input01.value = JSON.parse(loginValue).nick;

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
    let input = document.querySelector(".input01");
    let value = window.localStorage.getItem("list");
    let textarea = document.querySelector("textarea");
    if(window.localStorage.getItem("list") == null){
    window.localStorage.setItem("list", `{"index" : ${window.localStorage.length}, "writer" : "${input.value}", "question" : "${textarea.value}"}`);
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
                console.log(btn)
                console.log(pageNum);
                console.log(pageNum/10);
                console.log((pageNum-10)/10);
                
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
    _li.className = "bor"

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
    _li.className = "bor"


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

            if(rocal.length%10 == 0){
                console.log("1개")
                // location.reload();
                console.log(pageNum);
                console.log(pageNum/10);
                console.log((pageNum-10)/10);
                // render(pageNum/10)
                pageNum = pageNum-10;       
                render((pageNum-10)/10) 
                if(pageNum/10 == 0){
                location.reload();
                }
            }
            
            // console.log(rocal.length);
            // // if(rocal.length < ){
                // //     render(rocal.length/10)
                // //     console.log("10개개")
                // // }
                
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


// 헤더 추가

function drawer(el, open = false) {
    this.el = el;
    this.isOpen = open;
    this.closeButton = null;
  
    Object.assign(this.el.style, {
      display: "block",
      position: "fixed",
      top: 0,
      bottom: 0,
      right: 0,
      width: "340px",
      paddingLeft: "30px",
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      transition: "1s",
      borderRadius: "10px",
    });
    
    this.addCloseButton();
  }
  
  drawer.prototype.open = function () {
    this.isOpen = true;
    this.el.style.transform = "translate(0)";
  };
  
  drawer.prototype.close = function () {
    this.isOpen = false;
    this.el.style.transform = "translate(500px)";
  };
  
  drawer.prototype.addCloseButton = function () {
    // closeButton 프로퍼티 초기화
    this.closeButton = document.createElement("div");
    this.closeButton.innerText = ">>";
    Object.assign(this.closeButton.style, {
      position: "absolute",
      top: "27px",
      right: "335px",
      cursor: "pointer",
      fontSize: "1.5rem",
      fontWeight: "bold",
    });
  
    // closeButton을 드로어에 추가
    this.el.appendChild(this.closeButton);
  
    this.closeButton.addEventListener("click", () => {
      this.close();
    });
  };
  
  const sideMenu = new drawer(document.querySelector(".drawer"));
  sideMenu.close();
  
  document.querySelector(".drawer-opener").onclick = function () {
    if (!sideMenu.isOpen) sideMenu.open();
    else sideMenu.close();
  };
  
  
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
  bg.addEventListener('click',function(){
    popup.style.display = "none";    
  });
  
  
  
  const searchbox = document.querySelector('.searchBar');
  const searchContent = document.querySelector('.searchpopup');
  const dg = document.querySelector(".dg")
  
  searchbox.onclick = function(){
  if(getComputedStyle(searchContent).display == "block"){
    searchContent.style.display = "none";
  }else
    searchContent.style.display = "block";
  }
  
  dg.onclick = function(){
  searchContent.style.display = "none";
  
  }
  
  window.onload = function() {
  searchContent.style.display = "none";
  }
  
  let headeruparrow = document.querySelector('.header-up-arrow');
  let headerdownarrow = document.querySelector('.header-down-arrow');
  
  let arrowBox = document.querySelector('.arrowBox')
  
  
  // 헤더-체인변경 버튼 누르면  체인들 팝업되는 함수
  let headertokenChainSelectlist = document.querySelector('.header-token-chain-select-list');
  
  
  arrowBox.addEventListener('click',function(){
  
  
    if(!headertokenChainSelectlist.classList.contains('active')){
        headertokenChainSelectlist.classList.add('active');
        headertokenChainSelectlist.style.display = 'block';
        headeruparrow.style.display = 'none'
        headerdownarrow.style.display = 'block'
  
    }else{
        headertokenChainSelectlist.classList.remove('active');
        headertokenChainSelectlist.style.display = 'none';
        headeruparrow.style.display = 'block'
        headerdownarrow.style.display = 'none'
    } 
  });
// legal & privacy Popup
let legalinpopup = document.querySelector('.legalinpopup');
let legalBtn = document.querySelector('.legalBtn');
let legalBox = document.querySelector('.legalContainer');
let divhead = document.querySelector('.head');


legalinpopup.onclick = function(){
  legalBox.classList.add('active');
  divhead.style.backgroundColor = "white";
  document.body.style.backgroundColor = "white";
  divhead.style.opacity = "0.7";
  document.body.style.overflow = "hidden";
  console.log(legalBox);
}

legalBtn.onclick = function(){
  legalBox.classList.remove('active');
  divhead.style.backgroundColor = "rgb(255,205,210)";
  document.body.style.backgroundColor = "rgb(255,205,210)";
  divhead.style.opacity = "1";
  document.body.style.overflow = "auto";
}
// legal & privacy Popup
  
  
  
  
  
  
  // 체인 변경 리스트 버튼 누르면 코인 리스트 바뀌고 체크버튼 바뀌는 기능
  
  // 체인 리스트들 전역변수 선언
  let etherchain = document.querySelector('.etherchain');
  let polygonchain = document.querySelector('.polygonchain');
  let optimismchain = document.querySelector('.optimismchain');
  let arbitrumchain = document.querySelector('.arbitrumchain');
  let celochain = document.querySelector('.celochain');
  let headeretherchain = document.querySelector('.header-etherchain');
  let headerpolygonchain = document.querySelector('.header-polygonchain');
  let headeroptimismchain = document.querySelector('.header-optimismchain');
  let headerarbitrumchain = document.querySelector('.header-arbitrumchain');
  let headercelochain = document.querySelector('.header-celochain');
  let check = document.querySelector('.check');
  let headercheck = document.querySelector('.headercheck');
  let polygoncheck = document.querySelector('.polygoncheck');
  let optimismcheck = document.querySelector('.optimismcheck');
  let arbitrumcheck = document.querySelector('.arbitrumcheck');
  let celocheck = document.querySelector('.celocheck');
  let headerethercheck = document.querySelector('.header-ethercheck');
  let headerpolygoncheck = document.querySelector('.header-polygoncheck');
  let headeroptimismcheck = document.querySelector('.header-optimismcheck');
  let headerarbitrumcheck = document.querySelector('.header-arbitrumcheck');
  let headercelocheck = document.querySelector('.header-celocheck');
  let etherimg = document.querySelectorAll('.ether-img');
  let ethertext = document.querySelector('.ethertext');
  let headertokenChainSelectlistwrap = document.querySelector('.header-token-chain-select-list-wrap')
  let header_etherimg = document.querySelector('.header-ether-img');
  
  // 이더리움 체인 초기 체크되게 하는 식
  
  headerethercheck.classList.add('active');
  
  
  
  // 헤더 이더리움체인 클릭시 함수
  headeretherchain.addEventListener('click',function(){
  
  
    headerpolygoncheck.style.display = 'none'
    headerpolygoncheck.classList.remove('active');
    headeroptimismcheck.style.display = 'none'
    headeroptimismcheck.classList.remove('active');
    headerarbitrumcheck.style.display = 'none'
    headerarbitrumcheck.classList.remove('active');
    headercelocheck.style.display = 'none'
    headercelocheck.classList.remove('active');
  
    headeruparrow.style.display = 'block'
    headerdownarrow.style.display = 'none'
    if(headerethercheck.classList.contains('active')){
  
        headertokenChainSelectlist.classList.remove('active');
        headertokenChainSelectlist.style.display = 'none';
    }else{
        // 버튼에 이모티콘,이름 바꿔주기
        etherimg.forEach(i =>
            i.style.backgroundImage =  'url(data:image/png;base64,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)'
            );
        headerethercheck.classList.add('active');
        headerethercheck.style.display = 'inline'
  
        headertokenChainSelectlist.classList.remove('active');
        headertokenChainSelectlist.style.display = 'none';
    }
  })
  
  
  // 헤더 -폴리곤체인 클릭시 함수
  headerpolygonchain.addEventListener('click',function(){
    headerethercheck.style.display = 'none'
    headerethercheck.classList.remove('active');
    headeroptimismcheck.style.display = 'none'
    headeroptimismcheck.classList.remove('active');
    headerarbitrumcheck.style.display = 'none'
    headerarbitrumcheck.classList.remove('active');
    headercelocheck.style.display = 'none'
    headercelocheck.classList.remove('active');
  
  
    headeruparrow.style.display = 'block'
    headerdownarrow.style.display = 'none'
  
  
    if(!headerpolygoncheck.classList.contains('active')){
        // 버튼에 이모티콘, 이름 바꿔주기
        etherimg.forEach(i =>
            i.style.backgroundImage = 'url(https://app.uniswap.org/static/media/polygon-matic-logo.97ff139c.svg)'
            );
        headerpolygoncheck.classList.add('active')
        headerpolygoncheck.style.display = 'inline'
  
        headertokenChainSelectlist.classList.remove('active');
        headertokenChainSelectlist.style.display = 'none';
  
    }else{
        headertokenChainSelectlist.classList.remove('active');
        headertokenChainSelectlist.style.display = 'none';
  
    }
  })
  
  
  // 헤더-옵티미즘 체인 클릭시 함수
  
  
  headeroptimismchain.addEventListener('click',function(){
  
  
    headerethercheck.style.display = 'none'
    headerethercheck.classList.remove('active');
    headerpolygoncheck.style.display = 'none'
    headerpolygoncheck.classList.remove('active');
    headerarbitrumcheck.style.display = 'none'
    headerarbitrumcheck.classList.remove('active');
    headercelocheck.style.display = 'none'
    headercelocheck.classList.remove('active');
  
    headeruparrow.style.display = 'block'
    headerdownarrow.style.display = 'none'
  
  
    if(!headeroptimismcheck.classList.contains('active')){
        etherimg.forEach(i =>
            i.style.backgroundImage = 'url(https://app.uniswap.org/static/media/optimistic_ethereum.34412af2.svg)'
            );
  
        headeroptimismcheck.classList.add('active')
        headeroptimismcheck.style.display = 'inline'
        headertokenChainSelectlist.classList.remove('active');
        headertokenChainSelectlist.style.display = 'none';
  
    }else{
        headertokenChainSelectlist.classList.remove('active');
        headertokenChainSelectlist.style.display = 'none';
  
    }
  })
  
  
  
  //헤더- 아비트럼 클릭시 함수
  
  headerarbitrumchain.addEventListener('click',function(){
  
  
    headerethercheck.style.display = 'none'
    headerethercheck.classList.remove('active');
    headerpolygoncheck.style.display = 'none'
    headerpolygoncheck.classList.remove('active');
    headeroptimismcheck.style.display = 'none'
    headeroptimismcheck.classList.remove('active');
    headercelocheck.style.display = 'none'
    headercelocheck.classList.remove('active');
  
    headeruparrow.style.display = 'block'
    headerdownarrow.style.display = 'none'
  
  
    if(!headerarbitrumcheck.classList.contains('active')){
        etherimg.forEach(i =>
            i.style.backgroundImage = 'url(https://app.uniswap.org/static/media/arbitrum_logo.17ba9b2d.svg)'
            );
  
        headerarbitrumcheck.classList.add('active')
        headerarbitrumcheck.style.display = 'inline'
  
        headertokenChainSelectlist.classList.remove('active');
        headertokenChainSelectlist.style.display = 'none';
    }else{
  
        headertokenChainSelectlist.classList.remove('active');
        headertokenChainSelectlist.style.display = 'none';
    }
  })
  
  
  // 헤더  셀로체인 클릭시 함수
  headercelochain.addEventListener('click',function(){
  
  
    headerethercheck.style.display = 'none'
    headerethercheck.classList.remove('active');
    headerpolygoncheck.style.display = 'none'
    headerpolygoncheck.classList.remove('active');
    headeroptimismcheck.style.display = 'none'
    headeroptimismcheck.classList.remove('active');
    headerarbitrumcheck.style.display = 'none'
    headerarbitrumcheck.classList.remove('active');
  
    headeruparrow.style.display = 'block'
    headerdownarrow.style.display = 'none'
  
  
    if(!headercelocheck.classList.contains('active')){
        etherimg.forEach(i =>
            i.style.backgroundImage = 'url(https://app.uniswap.org/static/media/celo_logo.e95fad7b.svg)'
            );
  
        headercelocheck.classList.add('active')
        headercelocheck.style.display = 'inline'
  
        headertokenChainSelectlist.classList.remove('active');
        headertokenChainSelectlist.style.display = 'none';
    }else{
  
        headertokenChainSelectlist.classList.remove('active');
        headertokenChainSelectlist.style.display = 'none';
    }
  })
  
  // 체인 선택 팝업 백그라운드 클릭하면 사라지는 효과
  
  let bgg = document.getElementById('bgg');
  
  bgg.addEventListener('click',function(){
  headertokenChainSelectlist.classList.remove('active');
  headertokenChainSelectlist.style.display = 'none';
  searchContent.style.display = "none";
  
  });



// 로그인 유무에 따른 사이드바 표기

let loginValue = window.localStorage.getItem("Login");
let sideInfo = document.querySelector(".content");

function loginCheck(){
  if(loginValue == null || loginValue == "null"){
    return;
  }else{
    sideInfo.innerHTML = `<h3>Connect a wallet</h3>
    <div class="login">
        <ul>
            <li class="nickname">Nickname : ${JSON.parse(loginValue).nick}</li>
            <li class="cash">Cash : ${JSON.parse(loginValue).dollar} $</li>
            <li class="bitcoin">Bitcoin : ${JSON.parse(loginValue).bit}</li>
            <li class="ethereum">Ethereum : ${JSON.parse(loginValue).eth}</li>
            <li><a href="/Mypage/mypage.html">My page</a><a href="/index.html" class="logout">Log out</a></li>
        </ul>
    </div>`;

    let loginBox = document.querySelector(".login");
    loginBox.style.height = "180px";
    loginBox.style.paddingTop = "1px";
    loginBox.style.justifyContent = "none";
    loginBox.style.alignItems = "none";
    loginBox.style.cursor = "auto";
  }

  let logoutBtn = document.querySelector(".logout");

  logoutBtn.addEventListener("click", function(){
    let loginValue = window.localStorage.getItem("Login");
    
    if(loginValue == null){
        return;
    }else{
        window.localStorage.setItem("Login", null);
    }
  })
}

loginCheck();




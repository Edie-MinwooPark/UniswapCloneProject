// function drawer(el, open = false){
//   this.el = el;
//   this.isOpen = open;

// Object.assign(this.el.style,{
//   display : "block",
//   position : "fixed",
//   top : 0,
//   bottom : 0,
//   right : 0,
//   width : "340px",
//   paddingLeft : "30px",
//   backgroundColor : "rgba(255,255,255,0.5)",
//   transition : "1s",
//   borderRadius: "10px"
// });
// }
// drawer.prototype.open = function(){
//   this.isOpen = true;
//   this.el.style.transform = "translate(0)";
// }
// drawer.prototype.close = function(){
//   this.isOpen = false;
//   this.el.style.transform = "translate(500px)";
// }
// const sideMenu = new drawer(document.querySelector('.drawer'));
// sideMenu.close();
// document.querySelector('.drawer-opener').onclick = function(){
//   if(!sideMenu.isOpen)sideMenu.open();
//   else sideMenu.close();
// }
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
    right: "340px",
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
bg.onclick = function(){
  popup.style.display = "none";
}
// -------------------------------------------------------------------

// const searchbox = document.querySelector('.searchBar');
// const searchContent = document.querySelector('.searchpopup');
// const dg = document.querySelector(".dg")

// searchbox.onclick = function(){
//   if(getComputedStyle(searchContent).display == "block"){
//     searchContent.style.display = "none";
//   }else
//     searchContent.style.display = "block";
//   }
//   dg.onclick = function(){
//     searchContent.style.display = "none";
//   }
//   window.onbeforeunload = function() {
//     if (searchContent.style.display == "block") {
//       searchContent.style.display = "none";
//     }
//   }
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



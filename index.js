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
  backgroundColor : "rgba(255,255,255,0.4)",
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
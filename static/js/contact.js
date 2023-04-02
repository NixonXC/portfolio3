var menuList = document.getElementById("nav");
menuList.style.maxHeight = "0px";

function togglemenu(){
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "130px";
  }
  else {
    menuList.style.maxHeight = "0px";
  }
}
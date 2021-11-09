function openNav(){
  console.log('openNave called !!!!!!!');
  document.getElementById("mySidenav").style.width = "180px";
  document.getElementById("main").style.marginLeft = "180px";
}

function closeNav(){
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
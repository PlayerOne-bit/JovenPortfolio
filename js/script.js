const MENU = document.querySelector(".menu");
const SIDEBAR = document.querySelector(".sidebar");
const DARKEN = document.querySelector(".darken");

MENU.addEventListener('click', () => {
  SIDEBAR.classList.add("show");
  DARKEN.classList.add("show");
});

DARKEN.addEventListener('click', () => {
  SIDEBAR.classList.remove("show");
  DARKEN.classList.remove("show");
});

document.querySelectorAll(".navBtn").forEach(button=>{
  button.addEventListener('click',function(){
    const GETID = this.getAttribute('data-peek');
    const CHECK_ID = document.getElementById(GETID);
    if(CHECK_ID){
      CHECK_ID.scrollIntoView({
        behaviour: 'smooth'
      });
    }
  });
});
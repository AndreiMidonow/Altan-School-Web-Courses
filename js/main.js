const scrollController = {
  disabledScroll() {
    document.body.style.cssText = `
      overflow: hidden;
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
      padding-right: ${window.innerWidth - document.body.offsetWidth}px
    `;
  },
  enabledScroll() {
    document.body.style.cssText = ''; 
  },
}


const nav = document.querySelector('#nav');
const navbtn = document.querySelector('#nav-btn');
const navbtnimg = document.querySelector('#nav-btn-img');
navbtn.onclick = () => {
    if (nav.classList.toggle('open')){
        navbtnimg.src = "./img/NAV CLOSE.svg"
        scrollController.disabledScroll();
    } else {
        navbtnimg.src = "./img/NAV OPEN.svg"
        scrollController.enabledScroll(); 
    }
}

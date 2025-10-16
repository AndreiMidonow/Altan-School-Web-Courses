const nav = document.querySelector('#nav');
const navbtn = document.querySelector('#nav-btn');
const navbtnimg = document.querySelector('#nav-btn-img');
navbtn.onclick = () => {
    if (nav.classList.toggle('open')){
        navbtnimg.src = "./img/NAV CLOSE.svg"
    } else {
        navbtnimg.src = "./img/NAV OPEN.svg"
    }
}
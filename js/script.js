var card_title = document.querySelectorAll(".card_title");
var card_content = document.querySelectorAll(".card_content");
var search_bar = document.querySelector('#searchBar');
var body = document.querySelector('body');
var menuLg = document.querySelector('#menuLg');
var menuLgLayout = document.querySelector('#menulglayout');

var menuLgOption = document.querySelector('#menuLgOption');
var opBtn = document.querySelectorAll('.op-btn');
var opText = document.querySelector('#opText');

for (let i = 0; i < opBtn.length; i++) {
    opBtn[i].addEventListener('click', () => {
        const opStr = opBtn[i].innerText;
        opText.innerText = opStr;
        console.log(opBtn[i].innerText,'123');
        for(let i=0;i<opBtn.length;i++){
            opBtn[i].classList.remove('selected');
        }
        opBtn[i].classList.add('selected');
    });
}


function addCover() {
    
    menuLgLayout.classList.add('menu-lg-layout');
    menuLgLayout.classList.remove('menu-lg-option-layout');
    body.classList.add('cover_body');
    menuLg.style.zIndex = '999';
    window.event.cancelBubble = true;
    menuLgOption.style.display = 'none';
    header.style.position = 'static';
    window.scrollTo(top);

}
function addSelect() {
    menuLgLayout.classList.remove('menu-lg-layout');
    menuLgLayout.classList.add('menu-lg-option-layout');
    body.classList.add('cover_body');
    menuLg.style.zIndex = '999';
    menuLgOption.style.display = 'flex';
    window.event.cancelBubble = true;
    header.style.position = 'static';
    window.scrollTo(top);
}


function removeCover() {
    body.classList.remove('cover_body');
    menuLgLayout.classList.remove('menu-lg-layout');
    menuLgLayout.classList.remove('menu-lg-option-layout');

    menuLgOption.style.display = 'none';
}
for (let i = 0; i < card_title.length; i++) {
    card_title[i].addEventListener('click', () => {
        if (card_content[i].style.display == 'none') {
            card_content[i].style.display = 'block';

        }
        else {
            card_content[i].style.display = 'none';

        }
    });
}
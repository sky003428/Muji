const row = document.querySelector(".drag-row");
const col = document.querySelector(".drag-col");
const colArr = document.querySelectorAll(".drag-col");
let i = 0;
const imgFig = document.querySelector(".img-fig");
const rect = document.querySelector(".rect");
const ASPECT_RATIO = 1;
const objLength = document.querySelectorAll(".drag-col").length;
let cardPerRow = calcPR();


function calcPR() {
    if (body.clientWidth < 768) {
        return 1;
    } else {
        return 4;
    }
};

rect.style.height = rect.getBoundingClientRect().width / ASPECT_RATIO / cardPerRow + imgFig.getBoundingClientRect().height + "px";

let objWidth = col.getBoundingClientRect().width;



row.style.left = 0 + 'px';
let originX = 0;
let rowLeft;
let moveX;
let dragX = 0;
let dragDrag = 0;

window.addEventListener('resize', () => {
    objWidth = col.getBoundingClientRect().width;
    cardPerRow = calcPR();
    if (cardPerRow >= 4 && colArr.length - i < 4) {
        colArr[i].classList.remove("selected");        
        i = colArr.length - 4;
        colArr[i].classList.add("selected");   
    }
    rect.style.height = rect.getBoundingClientRect().width / ASPECT_RATIO / cardPerRow + imgFig.getBoundingClientRect().height + "px";

    //縮放後將第一個項目做row的left參照
    row.style.left = -colArr[i].offsetLeft + 'px';
});



function colSelect(slideNum) {
    // slideNum 往左滑=1,右滑-1
    colArr[i].classList.remove("selected");
    slideNum > 0 ? i++ : i--;
    colArr[i].classList.add("selected");
}


const mDown = (event) => {
    row.style.cursor = "grab";
    dragX = event.pageX;
    rowLeft = parseFloat(row.style.left);
    originX = event.pageX - rowLeft;

    window.addEventListener("mousemove", mMove);
    window.addEventListener("mouseup", mUp);
};
const mUp = (t) => {
    dragDrag = dragX - t.pageX;

    if (dragDrag > objWidth / 2.5 && i + cardPerRow < colArr.length) {
        // 往左滑
        row.style.left = rowLeft - objWidth + 'px';
        colSelect(1);
    }
    else if (dragDrag < -objWidth / 2.5 && rowLeft < -1) {
        // 往右滑
        row.style.left = rowLeft + objWidth + 'px';
        colSelect(-1)

    }
    else {
        row.style.left = rowLeft + 'px';

    }

    row.style.cursor = "pointer";

    window.removeEventListener("mousemove", mMove);
    window.removeEventListener("mouseup", mUp);
};
const mMove = (event) => {
    moveX = event.pageX - originX;
    row.style.left = moveX + 'px';
};

row.addEventListener("mousedown", mDown);

// 手機event
// const tDown = (event) => {
//     window.event.preventDefault();

//     dragX = event.targetTouches[0].pageX;
//     rowLeft = parseInt(row.style.left);

//     originX = event.targetTouches[0].pageX - rowLeft;

//     window.event.stopPropagation();
//     window.addEventListener("touchmove", tMove);

// };
// const tUp = (event) => {
//     window.removeEventListener("mousemove", tMove);
//     console.log(event);

//     if (dragDrag > objWidth / 3 && rowLeft > -(objWidth * (objLength - cardPerRow))) {
//         row.style.left = rowLeft - objWidth + 'px';

//     }
//     else if (dragDrag < -objWidth / 3 && rowLeft != 0) {
//         row.style.left = rowLeft + objWidth + 'px';


//     }
//     else {
//         row.style.left = rowLeft + 'px';
//     }
//     row.style.cursor = "unset";
// };
// const tMove = (event) => {
//     moveX = event.targetTouches[0].pageX - originX;
//     row.style.left = moveX + 'px';
//     dragDrag = dragX - event.targetTouches[0].pageX;
// };


// row.addEventListener("touchstart", tDown);

// window.addEventListener("touchend", tUp);
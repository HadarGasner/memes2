var gCanvas;
var gCtx;
var gIsHaveTxt = true;
var gRect
var gIsHidden = true;

function init() {
    gCanvas = document.getElementById('my-canvas')
    gCtx = gCanvas.getContext('2d')
    gCtx.rect(0, 0, gCanvas.width, gCanvas.height);
    gCtx.fillStyle = 'white'
    gCtx.fill()
    rennderCanvas()
    gRect = {
        xStart: 20,
        xWidth: gCanvas.width - 40,
        yStart: -50,// need to add to the line hight
        yHeight: 60
    }
}

function onChangeSelectedLineIdx() {

    changeSelectedLineIdx()
    console.log(1);
    rennderCanvas()
}

function rectBorderText() {

    var line = getMeme().lines[getMeme().selectedLineIdx]
    gCtx.lineWidth = '1'
    gCtx.rect(gRect.xStart, line.y + gRect.yStart, gRect.xWidth, gRect.yHeight)
    gCtx.stroke()


}

function rennderCanvas() {
    onClearCanvas()
    drawImg()

}
function onResizeText(add) {
    setTextSize(add);
    rennderCanvas()
}

function onChangeHeight(add) {
    setTextHeight(add);
    rennderCanvas()
}

function onChangeXPos(add) {
    setXPos(add);
    rennderCanvas()
}
function onDrawImg() {
    gIsHaveTxt = false
    drawImg()
    clearLines()

}

function drawImg() {

    setMemesImg()
    var meme = getMeme();
    var img = new Image()
    img.src = `meme-imgs/${meme.selectedImgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,xend,yend
        if (gIsHaveTxt) {
            ;
            drawText()
        } else {
            gIsHaveTxt = true
        }
    }
}


function drawText() {
    var meme = getMeme()
    lines = meme.lines
    lines.map(function (line, i) {
        gCtx.lineWidth = '2'
        gCtx.strokeStyle = 'black'
        if (meme.selectedLineIdx === i) gCtx.fillStyle = 'red'
        else gCtx.fillStyle = line.color
        gCtx.font = `${line.size}px impact`
        gCtx.textAlign = line.align
        gCtx.fillText(line.txt, line.x, line.y)
        gCtx.strokeText(line.txt, line.x, line.y)
    })
}

function onEraser() {
    console.log('eraser');
    eraseLastLine()
    rennderCanvas()
}

function onMakeNewLine() {
    creatLine()
}

function onChangeTxt(elInput, ev) {

    var text = elInput.value
    setNewTextLine(text)
    drawText()
    if (ev.key === 'Enter') {
        elInput.value = '';
    }
}

function onClearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
    gCtx.rect(0, 0, gCanvas.width, gCanvas.height);
    gCtx.fillStyle = 'white'
    gCtx.fill()
}

function onCanvas(ev) {

    var elEditor = document.querySelector(".canvas-editor")
    console.log(elEditor.style.visibility);
    if (gIsHidden) {
        elEditor.style.visibility = 'visible'
        gIsHidden = false
        return
    }

    var { offsetX, offsetY } = ev;
    lines = getMeme().lines
    if (lines.length) {
        lines.map(function (line, i) {
            if (offsetX > gRect.xStart && offsetX < gRect.xStart + gRect.xWidth && offsetY > line.y + gRect.yStart && offsetY < line.y + gRect.yStart + gRect.yHeight) {
                changeSelectedLineIdx(i)
                rennderCanvas()
            }
        });
    }
}
function onSaveMeme() {
    SaveMeme();
}

function onAbout() {
    var elModal = document.querySelector(".container-modal")
    elModal.style.visibility = 'visible'
}

function onCloseAbout(){
    var elModal = document.querySelector(".container-modal")
    elModal.style.visibility = 'hidden'
}
const KEY = 'IMAGE'
const KEYmemes = 'memse'
gHeight = [100, 350, 200];
gHeightIdx = 0;
var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: -1,
    lines: []
}

function setNewTextLine(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
}
function clearLines() {
    gMeme.lines = []
    gMeme.selectedLineIdx = -1
    gHeightIdx = 0;
}

function creatLine() {
    gMeme.selectedLineIdx = gMeme.lines.length

    var newLine = {
        txt: '',
        size: 40,
        align: 'left',
        color: 'white',
        x: 120,
        y: gHeight[gHeightIdx]
    }
    if (gHeightIdx < gHeight.length) gHeightIdx++
    else gMeme.selectedLineIdx
    gMeme.lines.push(newLine);

}

function eraseLastLine() {
    if (gMeme.lines.length) {
        gMeme.lines.pop();
        gMeme.selectedLineIdx--
        gHeightIdx--
    }
}

function changeSelectedLineIdx(isParam = 'false') {
    if (isParam !== 'false') {
        gMeme.selectedLineIdx = isParam
     }
    else {
        gMeme.selectedLineIdx++
        console.log();
        if (gMeme.selectedLineIdx >= gMeme.lines.length) {
            gMeme.selectedLineIdx = 0;
        }
        console.log(gMeme.selectedLineIdx);
    }
}


function setTextSize(add) {
    gMeme.lines[gMeme.selectedLineIdx].size += add
}
function setTextHeight(add) {
    gMeme.lines[gMeme.selectedLineIdx].y += add
}
function setXPos(add) {
    gMeme.lines[gMeme.selectedLineIdx].x += add
}

function getMeme() {
    return gMeme;
}



function setMemesImg() {
    var img = loadFromStorage(KEY)
    gMeme.selectedImgId = img.id
    return img.id
}

function SaveMeme() {
    var memes = loadFromStorage(KEYmemes);
    if (memes) {
        memes.push(gMeme)
        saveToStorage(KEYmemes, memes)
    }
    else saveToStorage(KEYmemes, [gMeme])
    console.log(memes);
}

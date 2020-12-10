const KEY = 'IMAGE'

//var gFilterImg

var gKeywords = { 'happy': 12, 'funny puk': 1 }
var gImgs = [{ id: 1, url: 'img/popo.jpg', keywords: ['happy'] }];
var gImgsKeywords = [['usa', 'people', 'one'], ['animel', 'dog', 'two'], ['people', 'dog', 'two', 'baby'], ['animel', 'cat', 'one'],
['baby', 'sea', 'people', 'one'], ['people', 'one']]

function getImgById(imgId) {
    var img = gImgs.find(function (img) {
        return imgId === img.id
    })
    return img
}

function setMemeImg(imgId) {
    var img = getImgById(imgId)
    saveToStorage(KEY, img)
}



function getImgs() {
    return gImgs
}

function createImgs() {
    imgs = [];
    for (var i = 1; i <= 6; i++) {
        imgs.push(createImg(i))

    }
    gImgs = imgs
}

function createImg(i) {
    return {
        id: i,
        url: `meme-imgs/${i}.jpg`,
        keywords: gImgsKeywords[i - 1]
    }
}

function setFilter(tag) {
    gFillter = tag
}

function filterImg() {
    createImgs()
    var imgs = gImgs.filter(function (img) {
        return img.keywords.some(function (tagImg) {
            return tagImg.includes(gFillter)
        });
    })
    gImgs = imgs;
    console.log(gImgs);
}



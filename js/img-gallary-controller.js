function onInit() {
    createImgs()
    renderImgs();
}

function renderImgs() {
    var imgs = getImgs();
    var strHtml = ``

    imgs.map(function (img) {
        strHtml += `<div class"img-contaner"> <img onclick="onPickImg(${img.id})" class="caverd-img" src="${img.url}"></div>`
    })

    var elGallery = document.querySelector('.gallery-contaner-grid');
    elGallery.innerHTML = strHtml;

}


function onPickImg(id) {
    setMemeImg(id)
    elPage = document.querySelector('.main-page');
    elPage.style.display = 'block'
    elPage = document.querySelector('.gallery-page');
    elPage.style.visibility = 'hidden'
    var elEditor = document.querySelector(".canvas-editor")
    elEditor.style.visibility = 'visible'
    rennderCanvas()
}




function onSearch() {
    var input = document.getElementById("search-tag")
    console.log(input.value);
    setFilter(input.value)
    filterImg()
    renderImgs()
}

function setFillter(fillter){
    console.log(fillter);
    setFilter(fillter)
    filterImg()
    renderImgs()
}
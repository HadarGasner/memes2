function onInit() {
    createImgs()
    renderImgs();
}

function renderImgs() {
    var imgs = getImgs();
    var strHtml = ``

    imgs.map(function (img) {
        strHtml += `<div class"img-contaner"> <img onclick="onOpenModal(${img.id})" class="caverd-img" src="${img.url}"></div>`
    })

    var elGallery = document.querySelector('.gallery-contaner-grid');
    elGallery.innerHTML = strHtml;

}

function onPickImg(id) {
    setMemeImg(id)
    document.querySelector('.modal').style.visibility = 'hidden'
    
}

function onOpenModal(id) {
    var img = getImgById(id)
    var elModal = document.querySelector('.modal')
    elModal.style.visibility = 'visible'
    elModal.querySelector('img').src = img.url;
    elModal.querySelector('.btn').innerHTML = `<button class="sure" onclick="onPickImg(${img.id})">sure</button>`

}

function onCloseModal() {
    document.querySelector('.modal').style.visibility = 'hidden'
}


function onSearch() {
    var input = document.getElementById("search-tag")
    console.log(input.value);
    setFilter(input.value)
    filterImg()
    renderImgs()
}
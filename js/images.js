
class DataImage {
    constructor(id, src, alt, title, user) {
        this.id = id;
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.user = user;
    }
};
const f_gridImg = (datosJson) => {
    // gridImg.innerHTML = '';  

    if (elementId('stg-grid') === null) handleSTGGRID();
    let gridImg = elementId('stg-grid');
    clickCount = clickCount + parseInt(datosJson.data.length);
    for (let res of datosJson.data) {
        let imgGrid = handleCrearImgComplete(res.images.original.url, res.title, res.title, res.id, 'imgGrid', res.username);
        gridImg.appendChild(imgGrid);

    }
    if (clickCount >= paginationTotalCount) ocultarVerMas(true);

};

const f_searchNotFound = (p_src, p_textNode) => {
    let divNotFound = handleCreateElement('div', 'img-notfound', 'img-notfound');
    let imagenGrid = handleCrearImg(p_src, 'Not Found', 'Not Found', 'imgNotFound', 'notFound', 'notfound')
    let pTag = handleCreateText('p', 'notFound', 'notFound', p_textNode);
    divNotFound.appendChild(imagenGrid);
    divNotFound.appendChild(pTag);
    return divNotFound;
};


const handleCrearImgComplete = (p_src, p_alt, p_title, p_id, p_data_target, p_user) => {
    let divGrid = handleCreateElement('div', 'stg-container-img', 'stgConImg' + p_id);
    let imagenGrid = handleCrearImg(p_src, p_alt, p_title, p_id, p_data_target, p_user);
    imagenGrid.addEventListener('mouseover', (e) => {
        handleCreateButtonFDO(divGrid, p_data_target, p_id);
        imagenGrid.classList.add("imgHover");
    });
    imagenGrid.addEventListener('mouseout', (e) => {
        let divCBID = 'stgConBtn' + p_id;
        removeElementId(divCBID);
        imagenGrid.classList.remove("imgHover");
    });

    divGrid.appendChild(imagenGrid);

 
    return divGrid;
};



/**********************DOWNLOAD**********************************/
const handleDownload = (e) => {

};


/*********************FAVORITOS***************************/
const handleFavorite = (e) => {
    const FAVORITO = 'FAV:';
    e.classList.toggle("btnactive");
    let id = e.id;
    let idEnd = id.substring(FAVORITO.length, id.length);
    let btnSTGActive = document.getElementById(id);
    if (btnSTGActive.classList[2] === "btnactive") {
        let imgData = document.getElementById(idEnd);
        let classDataImage = new DataImage(idEnd, imgData.src, imgData.alt, imgData.title, imgData.dataset.targetUsername);
        saveLocalStorage(classDataImage);
    } else {
        removeLocalStorage(idEnd);
    }

    // getFavorites('div-gallery', 'gallery');
};

/*************************************MODAL*********************/

/*********************BOTON OPEN***************************/
const handleOpen = (e) => {
    const OPEN = 'OPEN:';
    let v_key = e.id.substring(OPEN.length, e.id.length);
    let modalImg = getInfoFavorites(v_key);

    if (modalImg === null) {
        let imgModal = elementId(v_key);

        let dataImg = new DataImage(imgModal.id, imgModal.src, imgModal.alt, imgModal.title, imgModal.dataset.targetUsername);
        modalImg = dataImg;
    }
    handleModal(modalImg, 'modalImage');



};
const handleModal = (p_modalImg, p_data_target) => {
    let divmodal = handleCreateElement('div', 'modal', 'modal')
    let divmodalContent = handleCreateElement('div', 'modal-content', 'modal-content');
    let divmodalHeader = handleCreateElement('div', 'modalHeader', 'modalHeader');
    let modalBtnClose = handleCreateElement('button', ' btnModalClose', 'btnModalClose');
    modalBtnClose.addEventListener('click', () => {
        removeElementId('modal');
    });

    let divPrev = handleCreateElement('div', 'modal-btnprev', 'modal-btnprev');
    let divNext = handleCreateElement('div', 'modal-btnnext', 'modal-btnnext');
    let btnPrev = handleCreateElement('button', 'btn btnmodalprev', 'btnprev');
    btnPrev.innerHTML = '&lt;'
    divPrev.appendChild(btnPrev);
    let btnNext = handleCreateElement('button', 'btn btnmodalnext', 'btnnext');
    btnNext.innerHTML = '&gt;'
    divNext.appendChild(btnNext);
    /***********CREO LA IMAGEN COMPLETA***********/

    let divmodalImg = handleCreateElement('div', 'modalImg', 'modalImg');
    let ImgFav = handleCrearImg(p_modalImg.src, p_modalImg.alt, p_modalImg.title, p_modalImg.id, p_data_target, p_modalImg.user);
    divmodalHeader.appendChild(modalBtnClose);
    divmodalContent.appendChild(divmodalHeader);
    divmodalImg.appendChild(ImgFav);

    let divmodalCaption = handleCreateElement('div', 'modalCaption', 'modalCaption');
    let divMCText = handleCreateElement('div', 'modalCaption-text', 'modalCaption-text');
    let modalUser = handleCreateText('p', 'modalCaption-user', 'modalCaption-user', p_modalImg.user);
    let modalTitle = handleCreateText('p', 'modalCaption-title', 'modalCaption-title', p_modalImg.title);
    divMCText.appendChild(modalUser);
    divMCText.appendChild(modalTitle);
    let divMCButton = handleCreateElement('div', 'modalCaption-btn', 'MCB:'+p_modalImg.id);
    divMCButton.setAttribute('data-favorite-active','FAVOPEN:'+p_modalImg.id);
    let btnFavorite = handleCrearBtn('btn-principal btn-favorite', 'handleFavorite(this)', 'FAVOPEN:' + p_modalImg.id);
    let btnDownload = handleCrearBtn('btn-principal btn-download', 'handleDownload(this)', 'DOWNLOAD:' + p_modalImg.id);

    divMCButton.appendChild(btnFavorite);
    divMCButton.appendChild(btnDownload);
    divmodalCaption.appendChild(divMCText);
    divmodalCaption.appendChild(divMCButton);


    /**************************************/

    divmodalContent.appendChild(divPrev);
    divmodalContent.appendChild(divmodalImg);
    divmodalContent.appendChild(divNext);
    divmodalContent.appendChild(divmodalCaption);

    divmodal.appendChild(divmodalContent);

    contenedorPrincipal.appendChild(divmodal);

    document.getElementsByClassName("modal")[0].style.display = "flex";
    getBookmark(divMCButton, p_modalImg.id);

};

const saveLocalStorage = (data) => {
    localStorage.setItem(data.id, JSON.stringify(data));
};

const removeLocalStorage = (p_key) => {
    localStorage.removeItem(p_key);
};

const getBookmark = (p_key, p_id) => {
    
    let res = JSON.parse(localStorage.getItem(p_id));
    if (res !== null) {
        let favBtnID =  p_key.dataset.favoriteActive;            
        let btn = elementId(favBtnID);
         btn.classList.toggle("btnactive");
    }
};

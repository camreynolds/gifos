const getNumberOfPages = () => {
    let numItemPerPages = 12
    const allPages = Math.ceil(localStorage.length / numItemPerPages);
    return allPages
};



const createSectionFavorites = (favGifos) => {
    removeElementId('sec-create-gifos');
    let sectionTag = handleCreateElement('section', 'search-trending-gifos', 'search-trending-gifos');
    let imgGifosHeader = handleCrearImg('../images/icon-favoritos.svg', 'Favoritos', 'Favoritos', 'imgFavoritos', 'favorites', 'favorites');
    let h2Tag = handleCreateElement('h2', 'fav-title', 'fav-title');
    h2Tag.innerHTML = 'Favoritos';

    let divStgGrid = handleCreateElement('div', 'stg-grid', 'stg-grid-favorites');
    let divStgBtnVerMas = handleCreateElement('div', 'stg-btnvermas', 'stg-btnvermas-favorites');
    sectionTag.appendChild(imgGifosHeader);
    sectionTag.appendChild(h2Tag);
    sectionTag.appendChild(divStgGrid);
    sectionTag.appendChild(divStgBtnVerMas);


    let mainTag = document.getElementById('main-gifos');
    if (mainTag === null) {
        removeElementId('foo-gifos');
        mainTag = handleCreateElement('main', 'main-gifos', 'main-gifos');
        let sectionTGS = handleSectionTrendingGifosSlide();
        let footerTag = handleFooter();
        contenedorPrincipal.appendChild(mainTag);
        contenedorPrincipal.appendChild(sectionTGS);
        contenedorPrincipal.appendChild(footerTag);
        getTrendingGifos('div-gallery');
    }

    mainTag.innerHTML = '';
    mainTag.appendChild(sectionTag);
    if (localStorage.length === 0) {
        removeElementId('stg-grid-favorites');
        removeElementId('stg-btnvermas-favorites');
        let p_textNode = '"¡Guarda tu primer GIFO en Favoritos para que se muestre aquí!"';
        sectionTag.appendChild(f_searchNotFound('../images/icon-fav-sin-contenido.svg', p_textNode));
    } else {
        let divBtnTag = elementId('stg-btnvermas-favorites');
        let pagination = handleCreateBtnPag();
        divBtnTag.appendChild(pagination);
        getFavorites('stg-grid-favorites', 'imgGrid', 1);
    }
};

let handleMouseOver = (e) => {
    e.target.classList.toggle("btnHover");
};
let handleMouseOut = (e) => {
    e.target.classList.toggle("btnHover");
};

const handleCreateBtnPag = () => {
    let ulBtn = handleCreateElement('ul', 'ul-btn-pag', 'ul-btn-pag');
    ulBtn.setAttribute('data-target', 'cont-pagination');
    let cantBtn = getNumberOfPages();
    let liPrev = handleCreateElement('li', 'item-pag', 'item-pag');
    liPrev.setAttribute('data-target', 'item-pagination');
    let btnPrev = handleCreateElement('button', 'btn item-btn-pag', 'item-btn-page-prev');
    btnPrev.setAttribute('data-target', 'btn-pagination');
    btnPrev.innerHTML = '&lt';
    btnPrev.addEventListener('mouseover', handleMouseOver);
    btnPrev.addEventListener('mouseout', handleMouseOut);

    liPrev.appendChild(btnPrev);

    let liNext = handleCreateElement('li', 'item-pag', 'item-pag');
    liNext.setAttribute('data-target', 'item-pagination');
    let btnNext = handleCreateElement('button', 'btn item-btn-pag', 'item-btn-page-next');
    btnNext.setAttribute('data-target', 'btn-pagination');
    btnNext.innerHTML = '&gt';
    btnNext.addEventListener('mouseover', handleMouseOver);
    btnNext.addEventListener('mouseout', handleMouseOut);
    liPrev.appendChild(btnPrev);
    ulBtn.appendChild(liPrev);
    for (let i = 0; i < cantBtn; i++) {
        let liBtn = handleCreateElement('li', 'item-pag', 'item-pag');
        liBtn.setAttribute('data-target', 'item-pagination');
        let btnPage = handleCreateElement('button', 'btn item-btn-pag', 'item-btn-page-' + i);
        btnPage.setAttribute('data-target', 'btn-pagination');
        btnPage.innerHTML = i + 1;
        btnPage.addEventListener('mouseover', handleMouseOver);
        btnPage.addEventListener('mouseout', handleMouseOut);
        btnPage.addEventListener('click', (e) => {
            getFavorites('stg-grid-favorites', 'imgGrid', e.target.innerHTML);
        });
        liBtn.appendChild(btnPage);
        ulBtn.appendChild(liBtn);
    }
    liNext.appendChild(btnNext);
    ulBtn.appendChild(liNext);
    return ulBtn;
};


const f_gridImg_favorites = (datosJson) => {
    // gridImg.innerHTML = '';  
    let gridImg = elementId('stg-grid');
    clickCount = clickCount + parseInt(datosJson.data.length);

    for (let res of datosJson.data) {
        let _img = handleCrearImgComplete(res.images.original.url, res.title, res.title, res.id);
        gridImg.appendChild(_img);
    }
    if (clickCount >= paginationTotalCount) ocultarVerMas(true);

};
const numPerPages = 12;
const getFavorites = (p_id, p_data_target, p_index_position) => {
    let gridImg = elementId(p_id);
    gridImg.innerHTML = '';
    let idxPos = (p_index_position * numPerPages) - numPerPages;
    let lengthLS = (p_index_position * numPerPages) - 1; // localStorage.length;
    for (let k = idxPos; k <= lengthLS; k++) {
        let v_key = localStorage.key(k);
        if (v_key === null) break;

        let res = JSON.parse(localStorage.getItem(v_key));
        let addImg = handleCrearImgComplete(res.src, res.alt, res.title, res.id, p_data_target);
        gridImg.appendChild(addImg);

    }
};



const getInfoFavorites = (p_key) => {

    return JSON.parse(localStorage.getItem(p_key));
};
/*********************************************************/

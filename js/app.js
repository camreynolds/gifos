let contenedorPrincipal = document.querySelector('#contenedor-principal');

//Cuantos elementos se muestra por página
const pageLimit = 12;
//
let pageOffsetInc = 0;

let paginationTotalCount = 0;
let clickCount = 0;


const handleSectionGifosHeader = () => {
    let sectionTagGifosHeader = handleCreateElement('section', 'gifos-header', 'gifos-header');
    let h1GifosHeader = handleCreateElement('h1', 'gf-h1', 'gf-h1');
    let imgGifosHeader = handleCrearImg('../images/ilustra_header.svg', 'Ilustra Header', 'Ilustra Header', 'imgIlustra', 'ilustraHeader', 'IlustraHeader',0,'IlustraHeader');

    h1GifosHeader.innerHTML = 'Inspírate, busca, guarda, y crea los mejores';
    sectionTagGifosHeader.appendChild(h1GifosHeader);
    sectionTagGifosHeader.appendChild(imgGifosHeader);

    return sectionTagGifosHeader
};


const handleSectionSearchGifo = () => {
    let sectionTagSearchGifos = handleCreateElement('section', 'searchgifos', 'searchgifos');
    let divsgContainerSearch = handleCreateElement('div', 'sg-container-search', 'sg-container-search');
    let inputSearch = handleCreateElement('input', 'gifos-header-search', 'gifos-header-search');
    inputSearch.type = 'search';
    inputSearch.placeholder = 'Busca GIFOS y más';
    inputSearch.setAttribute('autocomplete', 'off');
    inputSearch.addEventListener('search', (e) => {
        if (e.target.value === '') {
            removeElementId('ul-autocomplete');
            removeElementId('sg-line-search');
        }

    });
    inputSearch.addEventListener('keyup', (e) => {
        if (e.which === 13 || e.keyCode === 13) {
            handleKeyPressIntro(e.target.value);
        } else {
            handleAutocompleteSearch(e.target.value);
        }
    });
    divsgContainerSearch.appendChild(inputSearch);
    sectionTagSearchGifos.appendChild(divsgContainerSearch);
    let h3TagSearchGifos = handleCreateText('h3', 'sg-h3', 'sg-h3', 'Trending');
    sectionTagSearchGifos.appendChild(h3TagSearchGifos);
    let divSgParrafo = handleCreateElement('div', 'sg-parrafo', 'sg-parrafo');
    sectionTagSearchGifos.appendChild(divSgParrafo);
    let pSGTag = handleCreateText('p', 'sg-p', 'sg-p', 'Reactions, Entertainment, Sports, Stickers, Artists');
    divSgParrafo.appendChild(pSGTag);
    let _divSgLine = handleCreateElement('div', 'sg-line', 'sg-line');
    sectionTagSearchGifos.appendChild(divSgParrafo);
    sectionTagSearchGifos.appendChild(_divSgLine);
    return sectionTagSearchGifos;
};

/********************INICIO SECTION TRENDING GIFO********************/
const handleSectionSearchTrendingGifo = () => {
    let sectionTag = handleCreateElement('section', 'search-trending-gifos', 'search-trending-gifos');
    let h2Tag = handleCreateElement('h2', 'stg-title', 'stg-title');
    sectionTag.appendChild(h2Tag);

    return sectionTag;
};

const handleSTGGRID = () => {
    let sectionTag = elementId('search-trending-gifos');
    let divStgGrid = handleCreateElement('div', 'stg-grid', 'stg-grid');
    let divStgBtnVerMas = handleCreateElement('div', 'stg-btnvermas', 'stg-btnvermas');
    let btnVerMas = handleCreateElement('button', 'btn btnvermas', 'btnvermas');
    btnVerMas.setAttribute('onclick', 'handlerVerMas()');
    btnVerMas.innerHTML = 'VER MÁS';
    divStgBtnVerMas.appendChild(btnVerMas);
    sectionTag.appendChild(divStgGrid);
    sectionTag.appendChild(divStgBtnVerMas);
};
/********************FIN SECTION TRENDING GIFO********************/
/********************INICIO SECTION TRENDING GIFO SLIDE********************/
const handleSectionTrendingGifosSlide = () => {
    let sectionTGS = handleCreateElement('section', 'sec-tgs', 'sec-tgs');
    let h3TGS = handleCreateText('h3', 'h3-tgs', 'h3-tgs', 'Trending GIFOS');
    let pTagTGS = handleCreateText('p', 'p-tgs', 'p-tgs', 'Mira los últimos GIFO de nuestra comunidad.');
    let divTGS = handleCreateElement('div', 'div-tgs', 'div-tgs');
    let divGallery = handleCreateElement('div', 'div-gallery', 'div-gallery');
    let btnPrev = handleCreateElement('button', 'btn btnprev', 'btnprev');
    btnPrev.setAttribute('data-action', 'slidePrev');
    btnPrev.innerHTML = '&lt;';
    let btnNext = handleCreateElement('button', 'btn btnnext', 'btnnext');
    btnNext.setAttribute('data-action', 'slideNext');
    btnNext.innerHTML = '&gt;';
    divTGS.appendChild(btnPrev);
    divTGS.appendChild(btnNext);
    divTGS.appendChild(divGallery);
    sectionTGS.appendChild(h3TGS);
    sectionTGS.appendChild(pTagTGS);
    sectionTGS.appendChild(divTGS);
    return sectionTGS;
};

/********************FIN SECTION TRENDING GIFO********************/
/********************INICIO FOOTER*******************************/
const handleFooter = () => {
    let footerTag = handleCreateElement('footer', 'foo-gifos', 'foo-gifos');
    let divTag=handleCreateElement('div','redsocial','redsocial');
    let pTag=handleCreateText('p','pcopy','pcopy','Compartir en:')
    const facebook=handleCreateText('a','a-facebook','a-facebook','');
    facebook.href='https://www.facebook.com/';
    facebook.target='_blank';
    const redsocialFace=handleCrearImg('../images/icon_facebook.svg','Facebook','Facebook','idface','facebook','facebook',0,'facebook');
    facebook.appendChild(redsocialFace);

    divTag.appendChild(pTag);
    divTag.appendChild(facebook);

    const twitter=handleCreateText('a','a-twitter','a-twitter','');
    twitter.href='https://twitter.com/';
    twitter.target='_blank';
    const redsocialTwitter=handleCrearImg('../images/icon-twitter.svg','Twitter','Twitter','idtwitter','twitter','twitter',0,'twitter');
    twitter.appendChild(redsocialTwitter);
    divTag.appendChild(twitter);

    const instagram=handleCreateText('a','a-instagram','a-instagram','');
    instagram.href='https://www.instagram.com/';
    instagram.target='_blank';
    const redsocialInstagram=handleCrearImg('../images/icon_instagram.svg','Instagram','Instagram','idinstagram','instagram','instagram',0,'instagram');
    instagram.appendChild(redsocialInstagram)
    divTag.appendChild(instagram);
    pTag=handleCreateText('p','pcopy','pcopy','© GIFOS 2020 All Rights Reserved.')
    footerTag.appendChild(divTag);
    footerTag.appendChild(pTag);
    return footerTag
};
/********************FIN FOOTER*********************************/



const handleCreateStartPage = () => {

contenedorPrincipal.innerHTML='';


    let headerTag = handleHeader();
    let mainTag = handleCreateElement('main', 'main-gifos', 'main-gifos');
    mainTag.appendChild(handleSectionGifosHeader());
    mainTag.appendChild(handleSectionSearchGifo());
    mainTag.appendChild(handleSectionSearchTrendingGifo());
    let sectionTGS = handleSectionTrendingGifosSlide();
    let footerTag = handleFooter();
    contenedorPrincipal.appendChild(headerTag);
    contenedorPrincipal.appendChild(mainTag);
    contenedorPrincipal.appendChild(sectionTGS);
    contenedorPrincipal.appendChild(footerTag);

    getTrendingGifos('div-gallery');

};


/********************************************************************************/
(() => {
    handleCreateStartPage();
})();

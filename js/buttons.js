const ocultarVerMas = (p_flag_ocultar) => {
    let btnSTG = elementId('stg-btnvermas');
    if (p_flag_ocultar) {
        btnSTG.style.visibility = 'hidden';
    } else {
        btnSTG.style.visibility = 'visible';
    }
};

const handlerVerMas = () => {
    pageOffsetInc = pageOffsetInc + pageLimit;
    let valuesSearch = document.getElementById('gifos-header-search').value;
    handlerSearchAsync(valuesSearch, pageOffsetInc);
};

const handleCreateButtonFDO = (divCont, p_data_target, p_id) => {
    let divCBID = 'stgConBtn' + p_id;
    removeElementId(divCBID);

    let divBtn = handleCreateElement('div', 'stg-container-btn', divCBID);
    divBtn.setAttribute('data-stgcont-btns', p_data_target + 'btn');
    divBtn.setAttribute('data-favorite-active', 'FAV:'+p_id);
    let btnFavorite = handleCrearBtn('btn-principal btn-favorite', 'handleFavorite(this)', 'FAV:' + p_id);
    let btnDownload = handleCrearBtn('btn-principal btn-download', 'handleDownload(this)', 'DOWNLOAD:' + p_id);
    btnDownload.setAttribute('data-download-gif', '');
    let btnOpen = handleCrearBtn('btn-principal btn-open', 'handleOpen(this)', 'OPEN:' + p_id);

    divBtn.appendChild(btnFavorite);
    divBtn.appendChild(btnDownload);
    divBtn.appendChild(btnOpen);
    divCont.appendChild(divBtn);
    getBookmark(divBtn, p_id);
};


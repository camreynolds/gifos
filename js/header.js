const handleNav = () => {
    let itemLI = ['MODO NOCTURNO', 'FAVORITOS', 'MIS GIFOS', 'BOTON'];
    let navHeader = handleCreateElement('nav', 'nav-gifos', 'nav-gifos');
    let menu = handleCrearItemLi(itemLI);
    navHeader.appendChild(menu);
    
    return navHeader;

}; 

const handleHeader = () => {
    let headerGifos = handleCreateElement('header', 'header-gifos', 'header-gifos');
    let divLogo = handleCreateElement('div', 'logo', 'logo');
    divLogo.addEventListener('click', (e) => {
        return handleCreateStartPage()
    });
    let divLogoTitle = handleCreateElement('div', 'logotitle', 'logotitle');
    let pGifos = handleCreateText('p', 'p-logo', 'p-logo', 'GIFOS');
    let navTag = handleNav();
    divLogoTitle.appendChild(pGifos);
    divLogo.appendChild(divLogoTitle);
    headerGifos.appendChild(divLogo);
    headerGifos.appendChild(navTag);
    return headerGifos;
};

const handleCrearItemLi = (arrayItem) => {
    let addul = handleCreateElement('ul', 'ul-gifos', 'ul-gifos');
    let lenArray = arrayItem.length;
    for (let i = 0; i < lenArray; i++) {
        let li = handleCreateElement('li', 'li-gifos', 'li-gifos');
        let a;
        if (i === lenArray - 1) {

            a = handleCreateElement('button', 'btn btn-create-gifos', 'btn-create-gifos');
            a.innerHTML = '+';
            a.addEventListener('click', () => {
                a.classList.toggle("activeGifos");
                handleCreateGIFOS();
            });

        } else {
            a = handleCreateText('a', 'a-gifos', 'a-gifos' + i, arrayItem[i]);
            a.href = '#';
            switch (i) {
                case 0:
                    a.addEventListener('click', (e)=>{
                        let bodydark=document.body.classList;
                        if(a.innerHTML==='MODO NOCTURNO'){
                            a.innerHTML='MODO DIURNO';
                            bodydark.remove('theme-dark');
                            bodydark.remove('theme-light');
                            bodydark.add('theme-dark');

                        }else{
                            a.innerHTML='MODO NOCTURNO';
                            bodydark.remove('theme-dark');
                            bodydark.remove('theme-light');
                            bodydark.add('theme-light');
                        }

                    });            
                    break;
                case 1:
                    
                    a.addEventListener('click', createSectionFavorites);            
                    break;

                default:
                    break;
            }
       /*      if (i===1){
                a.addEventListener('click', createSectionFavorites);
            } */
        }

        li.appendChild(a);
        addul.appendChild(li);
    }
    return addul;
};
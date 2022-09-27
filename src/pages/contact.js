function activateButton(itemClass){
    const activeButton=document.querySelector('.tab.active');

    if (activeButton) activeButton.classList.remove('active') ;

    const homeBtn=document.getElementsByClassName(itemClass)[0];
    homeBtn.classList.add('active');
}

function createSection(name, data){
    const section=document.createElement('section');
    section.classList.add('section');

    const title=document.createElement('h2');
    title.classList.add('section-title');
    title.textContent=name;
    section.appendChild(title);

    data.forEach((e)=>{
        const desc=document.createElement('p');
        desc.classList.add('section-description');
        desc.textContent=e;
        section.appendChild(desc);
    });

    return section;

}

function loadContent(){
    const main=document.getElementById('tab-content');
    main.classList.add('flex-layout');
    main.classList.remove('grid-layout');
    main.textContent='';
    activateButton('contact');

    const phones=createSection('Телефони:',[
        '0894211525',
        "+359894211525"
    ]);

    const address=createSection('address',
    ['some address']);

    main.appendChild(phones);
    main.appendChild(address);

}

export default loadContent;
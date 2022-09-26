function headerGenerator(itemClass, text){
    const header=document.createElement('header');
    header.classList.add(itemClass);

    
    const logo=document.createElement('h1');
    logo.textContent=text;

    header.appendChild(logo);
    
    return header;
}

function btnGenerator(itemClass,text){
    const btn=document.createElement('button');
    btn.classList.add(itemClass);

    const span=document.createElement('span');
    span.textContent=text;

    btn.appendChild(span);
    btn.classList.add('tab');

    return btn;
}

function navGeneraor(itemClass){
    const nav=document.createElement('nav');
    nav.classList.add(itemClass);

    const home=btnGenerator('home','home');
    const menu=btnGenerator('menu','menu');
    const contact=btnGenerator('contact','contact');

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);

    return nav;
}

function mainGenerator(itemClass){
    const main=document.createElement('main');
    main.classList.add(itemClass);
    
    return main;
}


function footerGenerator(itemClass,text){
    const footer=document.createElement('footer');
    footer.classList.add(itemClass);

    const h3=document.createElement('h3');
    h3.textContent=text;

    footer.appendChild.h3;

    return footer;
}

function onLoad(){
    const content=document.getElementById('content');

    const header=headerGenerator('header', 'Tams House');
    content.appendChild(header);

    const nav=navGeneraor('nav');
    content.appendChild(nav);

    const intoContext=mainGenerator("tab-content'");
    content.appendChild(intoContext);

    const footer=footerGenerator('footer', 'Copyright © 2022 DimitarGateshki');
    content.appendChild(footer);
}

export default onLoad;
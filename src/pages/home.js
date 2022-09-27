function aboutGenerator(){
    const about=document.createElement('section');
    about.classList.add('section');

    const title=document.createElement('h2');
    title.classList.add('section-title');
    title.textContent='About';

    about.appendChild(title);

    const desc=document.createElement('p');
    desc.classList.add('section-description');
    desc.textContent=
    "Tams House е авторски ресторант в сърцето на гр. Пловдив - кв. Капана. Създаден да демонстрира безкрайните възможности на творчеството, познанията и ароматите, Tams House се отличава с подчертана естетика и характерен стил. В съчетание с първокласно обслужване и лично отношение, всеки гост може да се наслади на бутиково изживяване с дъх на вино";

    about.appendChild(desc);
    return about;
}

function activateButton(itemClass){
    const activeButton=document.querySelector('.tab.active');

    if (activeButton) activeButton.classList.remove('active') ;

    const homeBtn=document.getElementsByClassName(itemClass)[0];
    homeBtn.classList.add('active');
}

function loadHome(){

    const m=document.getElementById('tab-content');
    m.classList.add('flex-layout');
    m.classList.remove('grid-layout');

    m.textContent='';

    const about=aboutGenerator();

    activateButton('home');
    m.appendChild(about);
}

export default loadHome;
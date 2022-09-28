function activateButton(itemClass){
    const activeButton=document.querySelector('.tab.active');

    if (activeButton) activeButton.classList.remove('active') ;

    const homeBtn=document.getElementsByClassName(itemClass)[0];
    homeBtn.classList.add('active');
}

function createFood(src,text,price,alt){

    const food=document.createElement('div');
    food.classList.add('food');
    const img=document.createElement('img');

    img.setAttribute('src',src);
    img.setAttribute('alt',alt);


    const description =document.createElement('div');
    description.classList.add('description');

    const name=document.createElement('h3');
    name.textContent=text;

    const foodPrice=document.createElement('h2');
    foodPrice.textContent=price;

    description.appendChild(name);
    description.appendChild(foodPrice);

    food.appendChild(img);
    food.appendChild(description);

    return food;
}


function loadMenu(){
    const content=document.getElementById('tab-content');
    content.classList.add('grid-layout');
    content.classList.remove('flex-layout');

    content.textContent= '';
    activateButton('menu');

    const foods=[
        createFood(
            './imgs/290000004_1376358192855226_3488743862809103377_n - Copy.jpg',
            'Пролетна паста',
            '17лв',
            'a'
        ),
    
        createFood(
            './imgs/290278212_3161830447479816_1473419019255415294_n.jpg',
            'Патешко магре',
            '25лв',
            'a'
        ),
        createFood(
            './imgs/290544357_1040772243464909_1853727914825713925_n.jpg',
            'Кракен',
            '35лв',
            'a'
        ),
        createFood(
            './imgs/290873136_1175100296668688_1681641588478369742_n.jpg',
            'Ризото',
            '17лв',
            'a'
        )

    ];

    foods.forEach((e)=>{
        content.appendChild(e);
        });
}

export default loadMenu;
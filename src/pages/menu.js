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


    const description =document.createElement('p');
    description.classList.add('description');

    const name=document.createElement('h3');
    name.textContent=text;

    const foodPrice=document.createElement('h2');
    foodPrice.textContent=price;

    description.appendChild(name);
    description.appendChild(foodPrice);

    food.appendChild(ing);
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

        )
    ];

    foods.forEach((food)=>{
        content.appendChild(food);
        });
}

export default loadMenu;
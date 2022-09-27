import onLoad from "./pages/start-page";
import loadHome from "./pages/home";
import loadContent from "./pages/contact";
import loadMenu from "./pages/menu";

function init(){
    onLoad();
    loadHome();
    setNavigation();
    
   
}

function setNavigation(){
    const home=document.getElementsByClassName('home')[0];
    const menu=document.getElementsByClassName('menu')[0];
    const contact=document.getElementsByClassName('contact')[0];

    home.addEventListener('click',loadHome);
    menu.addEventListener('click',loadMenu);
    contact.addEventListener('click',loadContent);


}

init();
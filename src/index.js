import pageLoad from './pageLoad'
import contact, { removeContent } from './contact'
import home from './home'
import menu from './menu'
import _ from 'lodash';
import './style.css';



pageLoad();

const tabs = document.querySelectorAll("#tab>li");
console.log(tabs)
console.log(tab.innerHTML);

tabs.f

tabs.forEach((tab)=>{

    tab.addEventListener("click",(e)=>{
        console.log(e.target.innerHTML);
        if(e.target.innerHTML==='Home'){

            removeContent();
            home();

        }else if(e.target.innerHTML=='Menu'){

            removeContent();
            menu();


        }else if(e.target.innerHTML==='Contact'){

            removeContent();
            contact();
        }
    })
})



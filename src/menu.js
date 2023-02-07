
import foodData from './data.json'


export default function home(){



    const mainImage=document.querySelector('.main-image');
    mainImage.appendChild(createDishCategory(foodData?.appetizers));
    mainImage.appendChild(createDishCategory(foodData?.main));
    mainImage.appendChild(createDishCategory(foodData?.desserts));
    mainImage.appendChild(createDishCategory(foodData?.drinks));

    mainImage.appendChild(conclusion());

    console.log(foodData?.appetizers);

    



}

let createCategory=(name)=>{

    const appetizers = document.createElement('div');
    appetizers.setAttribute("id",name+"_title");
    appetizers.setAttribute("class","dish_type");
    const categoryContentPara= document.createElement("p");
    const paragraph= document.createTextNode(name);
    categoryContentPara.innerHTML=paragraph.textContent;
    appetizers.appendChild(categoryContentPara);

    return appetizers;


}

let conclusion=()=>{

    const conclusion = document.createElement('div');
    conclusion.setAttribute("id","conclusion");
    conclusion.setAttribute("class","conclusion");
    const categoryContentPara= document.createElement("p");
    const paragraph= document.createTextNode("Bon Appétit");
    categoryContentPara.innerHTML=paragraph.textContent;
    conclusion.appendChild(categoryContentPara);

    return conclusion;
}

let createDishCategory=(item)=>{
    const itemCategoryContainer = document.createElement("div");
    itemCategoryContainer.setAttribute("id",item[0].category+"_container");
    const allCards=createDish(item);
    const title=createCategory(item[0].category);
    itemCategoryContainer.appendChild(title);
    itemCategoryContainer.appendChild(allCards);

    return itemCategoryContainer;

}

let createDish=(item)=>{




    const itemCategory = document.createElement("div");
    itemCategory.setAttribute("id",item[0].category);
    itemCategory.setAttribute("class","menu_holder");

    item.forEach((data)=>{


    const dish=document.createElement("div");
    dish.setAttribute("id",data.name);
    dish.setAttribute("class","dish_container");
    
    const dishPicContainer = document.createElement("div");
    dishPicContainer.setAttribute("class","dishPicContainer");

    const dishImage= document.createElement("img");
    dishImage.src=data.image;
    dishImage.alt=data.name;
    dishPicContainer.appendChild(dishImage)

    dish.appendChild(dishPicContainer);

    const disName= document.createElement("h5");
    disName.setAttribute("class","rbold");
    disName.innerHTML=data.name;

    dish.appendChild(disName);

    const dishDescPara= document.createElement("p");
    const paragraph= document.createTextNode(data.description);
    dishDescPara.innerHTML=paragraph.textContent;
    dish.appendChild(dishDescPara);

    const disPrice= document.createElement("h5");
    disPrice.setAttribute("class","rbold");
    disPrice.innerHTML="CAD " +data.rate;
    dish.appendChild(disPrice);

    itemCategory.appendChild(dish);
    })

    return itemCategory;
    


}
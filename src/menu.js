

// let foodData={

//     appetizers:[{
//         category:"Appetizer",
//         name:"Lobster",
//         image:"../src/images/lobster.jpg",
//         description: "This is not good, anyways we sell it",
//         rate:"15.60"
//     },{
//         category:"Appetizer",
//         name:"Raw Eggs",
//         image:"../src/images/eggs.jpg",
//         description: "Its not fresh, anyways we sell it and from chicken",
//         rate:"7.60"
//     },{
//         category:"Appetizer",
//         name:"Chicken Wings",
//         image:"../src/images/wings.jpg",
//         description: "Tastes yaakee, anyways we sell it",
//         rate:"11.60"
//     },
//     {
//         category:"Appetizer",
//         name:"Green Chillies",
//         image:"../src/images/hot.jpg",
//         description: "Only looks good, anyways we sell it",
//         rate:"10.99"
//     }],
//     main:[{
//         category:"Mains",
//         name:"Fried Rice",
//         image:"../src/images/friedRice.jpg",
//         description: "You can eat but we don't recommend it",
//         rate:"16.61"
//     },{
//         category:"Mains",
//         name:"Rice and Chicken Curry",
//         image:"../src/images/curryRice.jpg",
//         description: "Its left over food, anyways we sell it",
//         rate:"14.60"
//     },{
//         category:"Mains",
//         name:"Salad",
//         image:"../src/images/salad.jpg",
//         description: "They says it's healthy, we say its not in our restaurant",
//         rate:"19.60"
//     },
//     {
//         category:"Mains",
//         name:"Biriyani",
//         image:"../src/images/biriyani.jpg",
//         description: "The only tasty and fresh food in our restaurant",
//         rate:"14.99"
//     },{
//         category:"Mains",
//         name:"Veg Thali",
//         image:"../src/images/thali.jpg",
//         description: "good and cheap food. for non vegetarians only",
//         rate:"19.60"
//     },
//     {
//         category:"Mains",
//         name:"No Name",
//         image:"../src/images/leftover.jpg",
//         description: "made from left over foods. may be stinks",
//         rate:"18.00"
//     }],
//     desserts:[{
//         category:"Dessert",
//         name:"Salt cake",
//         image:"../src/images/cake.jpg",
//         description: "This cake is made out of sea salt and pepper",
//         rate:"5.99"
//     },{
//         category:"Dessert",
//         name:"Pudding",
//         image:"../src/images/pudding.jpg",
//         description: "Its a pudding without sugar. good for kids who likes water",
//         rate:"6.99"
//     },{
//         category:"Dessert",
//         name:"Ice cream",
//         image:"../src/images/iceCream.jpg",
//         description: "Its made of snow. creative stuff from us",
//         rate:"4.99"
//     },
//     {
//         category:"Dessert",
//         name:"Indian Tea",
//         image:"../src/images/chai.jpg",
//         description: "Best and cheap. we are experts in making tea",
//         rate:"2.99"
//     }],
//     drinks:[{
//         category:"Drinks",
//         name:"Lemon water",
//         image:"../src/images/lemon.jpg",
//         description: "Lemon mixed in tap water. tastes like lemon but not water",
//         rate:"3.99"
//     },{
//         category:"Drinks",
//         name:"Water",
//         image:"../src/images/water.jpg",
//         description:"We take tap water and filter them and sell them for very less price",
//         rate:"1.99"
//     },{
//         category:"Drinks",
//         name:"Hot water",
//         image:"../src/images/hotwater.jpg",
//         description: "We take tap water and heat them and sell them for very less price",
//         rate:"1.99"
//     },
//     {
//         category:"Drinks",
//         name:"Soda",
//         image:"../src/images/soda.jpg",
//         description: "We don't make it, we buy it to sell it and also very cheap",
//         rate:"4.99"
//     }]



// }

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
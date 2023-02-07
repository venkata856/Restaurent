export default function contact(){


   const mainImage=document.querySelector('.main-image');

   const contactHead= document.createElement("div");
   contactHead.setAttribute('id','contactus');

   const headName = document.createElement("p");
   headName.appendChild(document.createTextNode("Contact Us"));
   contactHead.appendChild(headName);

   mainImage.appendChild(contactHead);


    const chefContent= document.createElement("div");
    chefContent.setAttribute('id','chefcontact');

    const chefName = document.createElement("p");
    chefName.appendChild(document.createTextNode("Bongulo Bogga"));
    chefContent.appendChild(chefName);

    const chefTitle = document.createElement("p");
    chefTitle.appendChild(document.createTextNode("Chef"));
    chefContent.appendChild(chefTitle);

    const chefPhone = document.createElement("p");
    chefPhone.appendChild(document.createTextNode("(616) 616 616"));
    chefContent.appendChild(chefPhone);

    const chefEmail = document.createElement("p");
    chefEmail.appendChild(document.createTextNode("bendakaya@thokka.com"));
    chefContent.appendChild(chefEmail);


    mainImage.appendChild(chefContent);




    const lineCook= document.createElement("div");
    lineCook.setAttribute('id','lineChefContact');

    const lineCookName = document.createElement("p");
    lineCookName.appendChild(document.createTextNode("Ravanna"));
    lineCook.appendChild(lineCookName);

    const lineCookTitle = document.createElement("p");
    lineCookTitle.appendChild(document.createTextNode("Line cook"));
    lineCook.appendChild(lineCookTitle);

    const lineCookPhone = document.createElement("p");
    lineCookPhone.appendChild(document.createTextNode("(616) 616 616"));
    lineCook.appendChild(lineCookPhone);

    const lineCookEmail = document.createElement("p");
    lineCookEmail.appendChild(document.createTextNode("berrakaya@thokka.com"));
    lineCook.appendChild(lineCookEmail);


    mainImage.appendChild(lineCook);


    const cleaner= document.createElement("div");
    cleaner.setAttribute('id','cleanerContact');

    const cleanerName = document.createElement("p");
    cleanerName.appendChild(document.createTextNode("Padma Rao"));
    cleaner.appendChild(cleanerName);

    const cleanerTitle = document.createElement("p");
    cleanerTitle.appendChild(document.createTextNode("Cleaner"));
    cleaner.appendChild(cleanerTitle);

    const cleanerPhone = document.createElement("p");
    cleanerPhone.appendChild(document.createTextNode("(616) 616 616"));
    cleaner.appendChild(cleanerPhone);

    const cleanerEmail = document.createElement("p");
    cleanerEmail.appendChild(document.createTextNode("sorakaya@thokka.com"));
    cleaner.appendChild(cleanerEmail);


    mainImage.appendChild(cleaner);


    const cashier= document.createElement("div");
    cashier.setAttribute('id','cashierContact');

    const cashierName = document.createElement("p");
    cashierName.appendChild(document.createTextNode("Jump Jilani"));
    cashier.appendChild(cashierName);

    const cashierTitle = document.createElement("p");
    cashierTitle.appendChild(document.createTextNode("Cashier"));
    cashier.appendChild(cashierTitle);

    const cashierPhone = document.createElement("p");
    cashierPhone.appendChild(document.createTextNode("(616) 616 616"));
    cashier.appendChild(cashierPhone);

    const cashierEmail = document.createElement("p");
    cashierEmail.appendChild(document.createTextNode("kakarakaya@thokka.com"));
    cashier.appendChild(cashierEmail);


    mainImage.appendChild(cashier);



}

export function removeContent(){

    const imageSection = document.querySelector(".main-image");

    while(imageSection.hasChildNodes()){
  
      imageSection.removeChild(imageSection.firstChild);
    }

}
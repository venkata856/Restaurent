
export default function home(){



    const mainImage=document.querySelector('.main-image');

    const mainImageHeader= document.createElement("h6");
    mainImageHeader.setAttribute("id","info");

    mainImageHeader.textContent='Are you hungry!! we suggest best Restaurant which is close to our Restaurant';
    mainImage.appendChild(mainImageHeader);
    const mainImageImage= document.createElement("img");
    mainImageImage.setAttribute("id","chef-image");
    mainImageImage.src='.././src/padma.jpeg';
    mainImageImage.alt="chicken";
    
    

    const chefContent= document.createElement("div");
    chefContent.setAttribute('id','chef');
    chefContent.appendChild(mainImageImage);

    const chefContentPara= document.createElement("p");
    const paragraph= document.createTextNode("our chef is not that great, but he cooks amazing food .. how? simple he copies recipes from youtube and cooks them for people, somehow it works and people likes his food.");
    chefContentPara.appendChild(paragraph);
    chefContent.appendChild(chefContentPara);
    mainImage.appendChild(chefContent);



    const hoursInfo = document.createElement("div");
    hoursInfo.setAttribute("id","hours");

    const hoursHeader= document.createElement("h6");
    hoursHeader.textContent='Hours';
    hoursInfo.appendChild(hoursHeader);

    const hoursMon= document.createElement("p");
    hoursMon.appendChild(document.createTextNode("Monday: 9am - 10pm"));
    const hoursTue= document.createElement("p");
    hoursTue.appendChild(document.createTextNode("Tuesday: 9am - 10pm"));
    const hoursWed= document.createElement("p");
    hoursWed.appendChild(document.createTextNode("Wednesday: 9am - 10pm"));
    const hoursThu= document.createElement("p");
    hoursThu.appendChild(document.createTextNode("Thursday: 9am - 10pm"));
    const hoursFri= document.createElement("p");
    hoursFri.appendChild(document.createTextNode("Friday: 9am - 10pm"));
    const hoursSat= document.createElement("p");
    hoursSat.appendChild(document.createTextNode("Saturday: 9am - 10pm"));
    const hoursSun= document.createElement("p");
    hoursSun.appendChild(document.createTextNode("Sunday: 9am - 10pm"));

    hoursInfo.appendChild(hoursMon);
    hoursInfo.appendChild(hoursTue);
    hoursInfo.appendChild(hoursWed);
    hoursInfo.appendChild(hoursThu);
    hoursInfo.appendChild(hoursFri);
    hoursInfo.appendChild(hoursSat);
    hoursInfo.appendChild(hoursSun);

    const locationInfo = document.createElement("div");
    locationInfo.setAttribute("id","location");

    const locationHeader= document.createElement("h6");
    locationHeader.textContent='Location';
    locationInfo.appendChild(locationHeader);

    const location= document.createElement("p");
    location.appendChild(document.createTextNode("122 Bewarse Street, Pacific Ocean"));

    locationInfo.appendChild(location);
    mainImage.appendChild(hoursInfo);

    mainImage.appendChild(locationInfo);

}

function loadContent(){
    const mainDiv = document.createElement("div")
    const textDiv = document.createElement("p")
    const inputDiv = document.createElement("input")

    textDiv.textContent = "What are you craving today";
    inputDiv.placeholder = "search what to eat today";

    textDiv.classList.add("text");
    mainDiv.classList.add("main");

    mainDiv.appendChild(textDiv)
    mainDiv.appendChild(inputDiv)

    return mainDiv;
}

function loadAboutUs(){
    const aboutUs = document.createElement("div")
    const headerDiv = document.createElement("p");
    const line = document.createElement("div");
    const aboutContent = document.createElement("div");
    
    headerDiv.textContent = "About Us";
    aboutContent.textContent = "Welcome to Kfastfood! Our website is your virtual gateway into our world of culinary delights, where every click brings you closer to an unforgettable dining experience. Dive into the rich history and passion behind [Restaurant Name], learning about our founder's culinary journey, the inspiration behind our dishes, and the values that drive us. Explore our meticulously crafted menu, from tantalizing appetizers to mouthwatering entrees, catering to every palate, whether you're a meat lover, seafood enthusiast, or dedicated vegan. Reserve your table effortlessly, plan your special occasions, and stay updated on our latest promotions and events by subscribing to our newsletter. Discover our private dining options for your next celebration or corporate gathering. Connect with us through email or social media for any inquiries or feedback. And most importantly, visit us in person to experience [Restaurant Name] firsthand, where every meal is a celebration of flavor, passion, and hospitality. We can't wait to welcome you through our doors and treat you to an exceptional culinary journey!";
    
    headerDiv.classList.add("aboutHeader")
    aboutContent.classList.add("aboouText")
    line.classList.add("line")
    
    aboutUs.appendChild(headerDiv)
    aboutUs.appendChild(line);
    aboutUs.appendChild(aboutContent);

    return aboutUs;
}

function loadMenu(){
    const menuDiv = document.createElement("div");
    const menuHeader = document.createElement("div");
    const breakFastDIv = document.createElement("div");
    const breakFastText = document.createElement("p");
    const juiceDiv = document.createElement("div")
    const juiceText = document.createElement("span")
    const juicePrice = document.createElement("span")

    menuHeader.textContent = "Kfastood Menu";
    breakFastText.textContent = "Breakfast";
    juiceText.textContent = "juice";
    juicePrice.textContent ="$50";
    
    menuHeader.classList.add("brake-header");
    breakFastText.classList.add("brake-text");
    juiceDiv.classList.add("juice-details")
    juiceText.classList.add("juice");

    juiceDiv.appendChild(juiceText)
    juiceDiv.appendChild(juicePrice)

    breakFastDIv.appendChild(breakFastText);
    breakFastDIv.appendChild(juiceDiv)

    menuDiv.appendChild(menuHeader);
    menuDiv.appendChild(breakFastDIv);

    return menuDiv;
}
export {
    loadContent,
    loadAboutUs,
    loadMenu
  };
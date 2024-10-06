import './style.css'
import food from './foodcover.jpg'
import {loadContent, loadAboutUs, loadMenu} from './load.js'

const contenDiv = document.getElementById("content")
const homeBtn = document.getElementById("home")
const aboutBtn = document.getElementById("about")
const menuBtn = document.getElementById("menu")

//event listeners
// console.log(contenDiv)
contenDiv.appendChild(loadContent())
homeBtn.addEventListener("click", () => {
    contenDiv.innerHTML = "";
    contenDiv.style.alignItems = "center";
    contenDiv.style.backgroundImage = `url(${food})`;
    contenDiv.style.backgroundSize = "cover";
    contenDiv.appendChild(loadContent());
});

aboutBtn.addEventListener("click", () => {
    contenDiv.innerHTML = "";
    contenDiv.style.alignItems = "initial";
    contenDiv.style.background = "#f5f5f5";
    contenDiv.appendChild(loadAboutUs());
});

menuBtn.addEventListener("click", () => {
    contenDiv.innerHTML = "";
    contenDiv.style.alignItems = "initial";
    contenDiv.style.background = "#f5f5f5";
    contenDiv.appendChild(loadMenu());
});


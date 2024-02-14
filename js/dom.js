// console.log("Hola")

// let texto = "Hola Amigo, espero estes muy bien";

// const hablar = (texto)=>{
//     speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
// }

// hablar(texto);

//INTRODUCCION DOM

// console.log(document);

// console.log(document.head);

// console.log(document.body);

// console.log(document.characterSet);

// console.log(document.links);

// console.log(document.styleSheets);

// setTimeout(() => {
//     console.log(document.getSelection().toString());
// }, 3000);

// document.write("<h2>Hola mundo desde el DOM</h2>")

// console.log(document.getElementsByTagName("li"));

// console.log(document.getElementsByClassName("card"));

// console.log(document.getElementsByName("nombre"));

// console.log(document.getElementById("menu"));

// //Los metodos anteriores han sido remplezados por query selector

// console.log(document.querySelector("#menu"))

// console.log(document.querySelector(".card"))

// console.log(document.querySelectorAll("a").length)

// document.querySelectorAll("a").forEach(el => console.log(el));

// console.log(document.querySelectorAll(".card")[1])

// console.log(document.querySelectorAll("#menu li"))

// console.log(document.documentElement.lang);

// console.log(document.documentElement.getAttribute("lang"));

// console.log(document.querySelector(".link-dom").href);

// console.log(document.querySelector(".link-dom").getAttribute("href"));

// document.documentElement.lang = "es";

// console.log(document.documentElement.getAttribute("lang"));

// document.documentElement.setAttribute("lang", "es-MX")

//El simbolo del dolar antes de la variabe indica que es una variable del DOM
// const $linkDOM = document.querySelector(".link-dom");

// $linkDOM.setAttribute("target", "_blank")
// $linkDOM.setAttribute("rel", "noopener")
// $linkDOM.setAttribute("href", "https://www.xvideos.com/");
// console.log($linkDOM.hasAttribute("rel"));
// $linkDOM.removeAttribute("rel");
// console.log($linkDOM.hasAttribute("rel"));

// //Data-Attributes

// console.log($linkDOM.getAttribute("data-description"));

// console.log($linkDOM.dataset);

// console.log($linkDOM.dataset.description);

// $linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento")

// console.log($linkDOM.dataset.description)

// $linkDOM.dataset.description = "Suscribete a mi canal y comparte";

// console.log($linkDOM.dataset.description)

// console.log($linkDOM.hasAttribute("data-id"));

// console.log($linkDOM.removeAttribute("data-id"));

// console.log($linkDOM.hasAttribute("data-id"));

// const $linkDOM = document.querySelector(".link-dom");

// console.log($linkDOM.style);

// console.log($linkDOM.getAttribute("style"));

// console.log($linkDOM.style.backgroundColor);

// console.log($linkDOM.style.color);

// console.log(getComputedStyle($linkDOM).getPropertyValue("color"))

// $linkDOM.style.setProperty("text-decoration", "none");

// $linkDOM.style.setProperty("display", "block");

// $linkDOM.style.width = "50%";

// $linkDOM.style.textAlign = "center";

// $linkDOM.style.marginLeft = "auto";

// $linkDOM.style.marginRight = "auto";

// $linkDOM.style.padding = "1rem";

// $linkDOM.style.borderRadius = "1rem";

// // console.log($linkDOM.style);


// console.log($linkDOM.getAttribute("style"));

// // console.log(getComputedStyle($linkDOM));

// //Variables CSS - Custom properties

// const $html = document.documentElement,
//     $body = document.body;

//     console.log($html)

// let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
//     varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

// console.log(varDarkColor, varYellowColor);

// $body.style.backgroundColor = varDarkColor;

// $body.style.color = varYellowColor;

// $html.style.setProperty("--dark-color", "#1111");

// varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

// $body.style.setProperty("background-color", varDarkColor);

const $card = document.querySelector(".card");

console.log($card);
console.log($card.className);
console.log($card.classList);


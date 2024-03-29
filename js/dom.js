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

// const $card = document.querySelector(".card");

// console.log($card);
// console.log($card.className);
// console.log($card.classList);
// console.log($card.classList.contains("rotate-45"));
// $card.classList.add("rotate-45");
// console.log($card.classList.contains("rotate-45"));
// $card.classList.remove("rotate-45");
// $card.classList.toggle("rotate-45");
// $card.classList.replace("rotate-45","rotate-135");
// $card.classList.add("opacity-80","sepia");

// const $whatisDOM = document.getElementById("que-es");

// let text = `
// <p>
// El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
// API para documentos HTML y XML.
// </p>
// <p>
// Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
// </p>
// <p>
//     <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
// </p>
// `;

// console.log($whatisDOM.textContent);

// $whatisDOM.innerText = text;
// $whatisDOM.textContent = text;//inserta solo texto
// $whatisDOM.innerHTML = text;//inserta contenido html
// $whatisDOM.outerHTML = text;//inserta el contenido html sin el Id

// const $cards = document.querySelector(".cards");

// console.log($cards);
// console.log($cards.children[2]);
// console.log($cards.parentElement);
// console.log($cards.parentNode);
// console.log($cards.firstElementChild);
// console.log($cards.lastElementChild);
// console.log($cards.previousElementSibling);
// console.log($cards.nextElementSibling);
// console.log($cards.children[3].closest("section"));

// const $figure = document.createElement("figure"),
// $image = document.createElement("img"),
// $figcaption = document.createElement("figcaption"),
// $figcaptionText = document.createTextNode("RandomDinamico"),
// $cards = document.querySelector(".cards");

// $figure2 = document.createElement("figure");

// $image.setAttribute("src", "https://picsum.photos/200/300?random=10");

// $image.setAttribute("alt", "animals");

// $figure.classList.add("card");

// $figcaption.appendChild($figcaptionText);

// $figure.appendChild($image);

// $figure.appendChild($figcaption);

// $cards.appendChild($figure);

// $figure2.innerHTML = `
// <img src="https://picsum.photos/200/300?random=7"alt="Animals">
// <figcaption>Random uno mas</figcaption>
// `;

// $figure2.classList.add("card");

// $cards.appendChild($figure2);

// const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
//     $ul = document.createElement("ul");

//     document.write("<h3> Estaciones del año </h3>");


//     document.body.appendChild($ul);

//     estaciones.forEach(el => {
//         const $li = document.createElement("li");
//         $li.textContent = el;           
//         $ul.appendChild($li);
//     });

//     const continentes = ["Africa", "America", "Asia", "Europa", "Oceania"],
//         $ul2 = document.createElement("ul");

//     document.write("<h3>Continentes del Mundo</h3>");

//     document.body.appendChild($ul2);

    
//     continentes.forEach(el => $ul2.innerHTML += `<li>${el}</li>`);
// //NOTA: SIEMPRE USAR LOS FRAGMENTOS. ES MAS EFECTIVO
// const meses = [
//         'Enero',
//         'Febrero',
//         'Marzo',
//         'Abril',
//         'Mayo',
//         'Junio',
//         'Julio',
//         'Agosto',
//         'Septiembre',
//         'Octubre',
//         'Noviembre',
//         'Diciembre'
// ],
//  $ul3 = document.createElement("ul"),
//  $fragment = document.createDocumentFragment();

// meses.forEach((el) =>  {
//     const $li = document.createElement("li");
//     $li.textContent = el;
//     $fragment.appendChild($li);
// });

// $document.write("<h3>Meses del Año</h3>");
// $ul3.appendChild($fragment);
// document.body.appendChild($ul3);

// const $cards = document.querySelector(".cards"),
//     $template = document.getElementById("template-card").content,
//     $fragment = document.createDocumentFragment(),
//     cardContent = [
//         {
//             title: "Tecnología",
//             img: "https://picsum.photos/seed/technology/200"
//         },
//         {
//             title: "Animales",
//             img: "https://picsum.photos/seed/animals/200"
//         },
//         {
//             title: "Arquitectura",
//             img: "https://picsum.photos/seed/architecture/200"
//         },
//         {
//             title: "Gente",
//             img: "https://picsum.photos/seed/people/200"
//         },
//         {
//             title: "Naturaleza",
//             img: "https://picsum.photos/seed/nature/200"
//         },
//     ];

//     cardContent.forEach(el => {

//         $template.querySelector("img").setAttribute("src", el.img);
//         $template.querySelector("img").setAttribute("alt", el.title);
//         $template.querySelector("figcaption").textContent= el.title;

//         let $clone = document.importNode($template, true);

//         $fragment.appendChild($clone);
    
// });

// $cards.appendChild($fragment);

const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure");

    $newCard.innerHTML = `
    <img src="https://picsum.photos/id/237/200/300" alt="Random">
    <figcaption>Random 10</figcaption>
    `;

$newCard.classList.add("card");

$cards.replaceChild($newCard, $cards.children[2]);


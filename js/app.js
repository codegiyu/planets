
const planets = [
    {
        "name": "Mercury",
        "diameter": 4879,
        "color": "grey",
    },
    
    {
        "name": "Venus",
        "diameter": 12104,
        "color": "yellow",
    },
    
    {
        "name": "Earth",
        "diameter": 12752,
        "color": "green",
    },
    
    {
        "name": "Mars",
        "diameter": 6779,
        "color": "pink",
    },
    
    {
        "name": "Jupiter",
        "diameter": 139822,
        "color": "yellow",
    },
    
    {
        "name": "Saturn",
        "diameter": 116464,
        "color": "orange",
    },
    
    {
        "name": "Uranus",
        "diameter": 50724,
        "color": "grey",
    },
    
    {
        "name": "Neptune",
        "diameter": 49244,
        "color": "blue",
    },
];

let axis1 = document.querySelector('#axis-1');
let axis2 = document.querySelector('#axis-2');
let axis3 = document.querySelector('#axis-3');
let axis4 = document.querySelector('#axis-4');
let axis5 = document.querySelector('#axis-5');
let axis6 = document.querySelector('#axis-6');
let axis7 = document.querySelector('#axis-7');
let axis8 = document.querySelector('#axis-8');

let axes = [axis1, axis2, axis3, axis4, axis5, axis6, axis7, axis8];
let positions = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eight"];

for (let i = 0; i < planets.length; i++) {
    let planet = `<div class="${planets[i].name} planet rounded-circle d-flex bg-primary position-absolute" 
    style="background: linear-gradient(97deg, ${planets[i].color} 0%, ${planets[i].color} 50%, #333 50%,  black 100%);" 
    data-aos="zoom-in" data-aos-delay="${i * 250}"
    data-bs-toggle="tooltip" data-bs-placement="top" data-bs-html="true" title="<h2><b>${planets[i].name}</b></h2><p> is the ${positions[i]} planet from the sun. It is <b>${planets[i].diameter}</b> miles wide and is <b>${planets[i].color}</b> in color.</p>"></div>`;

    axes[i].innerHTML += planet;
};

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
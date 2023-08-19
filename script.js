
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { nameFirst, nameSecond, nameThird, classes, races, placeName, placeNameTwo, placeType, colours } from './constants.js'

let catElement = document.getElementById("cat");
let catclassElement = document.getElementById("catclass");
let catraceElement = document.getElementById("catrace");
let canvas = document.getElementById("cat-canvas").getContext("2d");
let queue = []


let cat = makeCat()
console.log(cat)

if (cat.origin[2].trim() == 'Desert') 
queue.push("images/backgrounds/Desert.png")
if (cat.origin[2].trim() == 'Swamp') 
queue.push("images/backgrounds/Swamp.png")
if (cat.origin[2].trim() == 'Lake') 
queue.push("images/backgrounds/Lake.png")
if (cat.origin[2].trim() == 'Meadow') 
queue.push("images/backgrounds/Meadow.png")
if (cat.origin[2].trim() == 'Castle') 
queue.push("images/backgrounds/Castle.png")
if (cat.origin[2].trim() == 'Islands') 
queue.push("images/backgrounds/Islands.png")
if (cat.origin[2].trim() == 'Plains') 
queue.push("images/backgrounds/Plains.png")
if (cat.origin[2].trim() == 'Village') 
queue.push("images/backgrounds/Village.png")
if (cat.origin[2].trim() == 'City') 
queue.push("images/backgrounds/City.png")
if (cat.origin[2].trim() == 'Forest') 
queue.push("images/backgrounds/Forest.png")
if (cat.origin[2].trim() == 'Mountains') 
queue.push("images/backgrounds/Mountains.png")

queue.push("images/shadow.png")

if (cat.colour == 'White') 
queue.push("images/body/skin_01.png")
if (cat.colour == 'Orange') 
queue.push("images/body/skin_02.png")
if (cat.colour == 'Brown') 
queue.push("images/body/skin_03.png")
if (cat.colour == 'Black') 
queue.push("images/body/skin_04.png")

queue.push(`images/body/spot_${randomNumber(15) + 1}.png`)
queue.push("images/body/outline.png")
queue.push(`images/body/eye_colour_${randomNumber(9) + 1}.png`)
queue.push(`images/body/eye_shape_${randomNumber(10) + 1}.png`)
queue.push("images/body/mouth.png")
queue.push(`images/body/mouth_add_0${randomNumber(4) + 1}.png`)

queue[0]

if (cat.race == 'Fairy') 
queue.push("images/races//Fairy.png")
if (cat.race == 'Lynx') 
queue.push("images/races//Lynx.png")
if (cat.race == 'Vulcan') 
queue.push("images/races//Vulcan.png")
if (cat.race == 'Goblin') 
queue.push("images/races//Goblin.png")
if (cat.race == 'Vampire') 
queue.push("images/races//Vampire.png")
if (cat.race == 'Elf' && cat.colour == 'White')
queue.push("images/races//Elf_white.png")
if (cat.race == 'Elf' && cat.colour == 'Orange')
queue.push("images/races//Elf_orange.png")
if (cat.race == 'Elf' && cat.colour == 'Brown')
queue.push("images/races//Elf_brown.png")
if (cat.race == 'Elf' && cat.colour == 'Black')
queue.push("images/races//Elf_black.png")


if (cat.class == 'Mage') 
queue.push("images/classes//Mage.png")
if (cat.class == 'Berserker') 
queue.push("images/classes//Berserker.png")

queue.push("images/frame.png")

drawImage()

catElement.innerText = cat.name[0] + cat.name[1] + cat.name[2] + ' of the ' + cat.origin[0] + cat.origin[1] + cat.origin[2];
catclassElement.innerText = 'Class: ' + cat.class;
catraceElement.innerText = 'Race: ' + cat.race



function makeCat() {
    // let personalities = ['sassy', 'shy', 'sweet', 'grumpy']
    let finalCat = {
        name: [
            nameFirst[randomNumber(74)],
            nameSecond[randomNumber(12)],
            nameThird[randomNumber(76)]
        ],
            // nameFirst[randomNumber(71)] + nameSecond[randomNumber(12)] + nameThird[randomNumber(74)],
        class: classes[randomNumber(10)],
        race: races[randomNumber(8)],
        colour: colours[randomNumber(4)],
        origin: [
            placeName[randomNumber(32)],
            placeNameTwo[randomNumber(22)],
            ' ' + placeType[randomNumber(11)]
        ]
        
        // placeName[randomNumber(27)]+ placeNameTwo[randomNumber(22)] + ' ' + placeType[randomNumber(11)],
    }
    if (finalCat.race == 'Vulcan') {
        finalCat.name[0] = nameFirst[randomNumber(8)]
    }
    if (finalCat.race == 'Mercat') {
        finalCat.origin[2] = ' ' + placeType[randomNumber(3)]
    }
    return finalCat;
}

async function drawImage() {
    let max = queue.length
    for (let i = 0; i <= max; i++) {
        await new Promise(function (resolve) {
            let image = new Image()
            image.src = queue[i]
            image.onload = () => {
                canvas.drawImage(image, 0, 0)
                resolve()
            }
        });
      }

}

function randomNumber(max) {
    return Math.floor(Math.random() * max);
}

new cursoreffects.fairyDustCursor({
    colors: ["#d8a0ff", "#b996ff", "#ffd7e5"],
  });


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXMAK8q4eDi3XsHJWn1_wvywp6B042R4I",
  authDomain: "fantasy-cat-generator.firebaseapp.com",
  projectId: "fantasy-cat-generator",
  storageBucket: "fantasy-cat-generator.appspot.com",
  messagingSenderId: "206567743551",
  appId: "1:206567743551:web:263d99027d6b9a7688588a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
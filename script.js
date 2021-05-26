//Változók
let szam = 30; //Szám
let szoveg = "Ez egy minta szoveg."; //Szoveg
let logikai = true; //Logikai

// Konstans
const konstans = 10;

// Elágazások
if (szam < 20) {
  console.log("A szám kisebb 20-nál.");
} else if (szam == 20) {
  console.log("A szám egyenlő 20-szal");
} else {
  console.log("A szám nagyobb 20-nál.");
}

// Ciklusok
for (let i = 0; i < 10; i++) {
  //console.log(i);
}

// DOM manipuláció
let fejlec = document.getElementById("fejlec");

fejlec.innerText = "<b>Hello Javascript!</b>";
//fejlec.innerHTML = "<b><i>Hello Italic Bold Javascript!</i></b>";

let btnColor = document.querySelector(".btn");
// CSS módosítása
btnColor.className = "btn btn-danger w-100";

// Függvények, eljárások:
// A függvények olyan kódrészletek, melyeket azért hozunk létre, mert valamilyen feladatot,
// működést végrehajtó kódrészletet szeretnénk újra felhasználhatóvá tenni.
// getRandom: Olyan függvény, ami 2 érték között generál véletlen számot
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function gombKezelo() {
  let red = getRandom(0, 256);
  let blue = getRandom(0, 256);
  let green = getRandom(0, 256);
  btnColor.style =
    "background-color: rgb(" + red + "," + green + "," + blue + ");";
}

// Események kezelése
btnColor.addEventListener("click", gombKezelo);

let btnImage = document.querySelector(".btn-success");

let count = 0;

function insertImage() {
  let image = document.createElement("img");
  image.src = "./img/psycho2.jpg";
  image.style = "width: 400px";

  let jumbotron = document.querySelector(".jumbotron");
  jumbotron.appendChild(image);
  count++;
}

btnImage.addEventListener("click", insertImage);

function deleteChild() {
  if (count > 0) {
    let jumbotron = document.querySelector(".jumbotron");
    let lastChild = jumbotron.lastChild;
    jumbotron.removeChild(jumbotron.lastChild);
    count--;
  }
}

let btnDelete = document.querySelector(".btn-info");
btnDelete.addEventListener("click", deleteChild);


let btnShow = document.querySelector(".btn-warning");

function showText(){
  let textBox = document.querySelector("#input");
  let text = textBox.value;

  alert(text);
}

btnShow.addEventListener("click", showText);
import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ['El perro', 'Mi dinosaurio', 'El cartero', 'Mi pájaro'];
  let action = ['se comió', 'meó', 'aplastó', 'rompió'];
  let what = ['mis deberes', 'mi móvil', 'el coche'];
  let when = ['antes de clase', 'mientras dormía', 'mientras hacía ejercicio', 'durante la comida', 'mientras hacía la compra'];
  let resultado = "";

  let randomNum = (array) => {
    let numero = Math.floor(Math.random() * array.length);
    return numero;
  }

  resultado = who[randomNum(who)] + " " + action[randomNum(action)] + " " + what[randomNum(what)] + " " + when[randomNum(when)] + ".";
  document.querySelector("#excusa").innerHTML = resultado;
};


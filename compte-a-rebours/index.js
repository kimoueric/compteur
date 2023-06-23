const theMinute = document.querySelector("input");
const btnStart = document.querySelector("button");

let timeurId;
let secondes_defaut = 59;

btnStart.addEventListener("click", (e) => {
  if (timeurId) {
    clearTimeout(timeurId);
  }
  let inputvalue = Number.parseInt(theMinute.value, 10);

  if (isNaN(inputvalue) || inputvalue <= 0) {
    
    alert("Veuillez entrer une valeur numérique valide supérieure à zéro.");
    return;
  }
  

  timeur(inputvalue, secondes_defaut, function (laseconde, laminute) {
    if (!isNaN(laseconde)) {
      if (laseconde < 10) laseconde = "0" + laseconde;
      document.querySelector(".secondes").textContent = laseconde;
    }
    if (!isNaN(laminute)) {
      if (laminute < 10) laminute = "0" + laminute;
      document.querySelector(".minutes").textContent = laminute;
    }
  });
});

const timeur = (minutes, secondes, cb) => {
  timeurId = setTimeout(() => {
    if (secondes > 0) {
      secondes--;
      cb(secondes, minutes);
      timeur(minutes, secondes, cb);
    } else {
      if (minutes > 0) {
        minutes--;
        secondes = 6;
      } else {
        return;
      }
      cb(secondes, minutes);
      timeur(minutes, secondes, cb);
    }
  }, 1000);
};

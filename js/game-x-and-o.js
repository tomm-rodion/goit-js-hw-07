const content = document.querySelector(".content");
const btnRestart = document.querySelector(".js-restart");
let player = "X";
let userX = [];
let userO = [];

const win = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
function createMarkup() {
  let markup = "";
  for (let i = 1; i <= 9; i++) {
    markup += `<div class="item" data-id="${i}"></div>`;
  }
  return markup;
}

content.insertAdjacentHTML("beforeend", createMarkup());

content.addEventListener("click", onClick);
btnRestart.addEventListener("click", onRestart);

function onClick(evt) {
  if (!evt.target.textContent) {
    evt.target.textContent = player;
    player = player === "X" ? "0" : "X";
    if (evt.target.textContent === "X") {
      userX.push(Number(evt.target.dataset.id));
      if (userX.length >= 3) {
        searchWinner();
      }
    } else {
      userO.push(Number(evt.target.dataset.id));
      if (userO.length >= 3) {
        searchWinner();
      }
    }
  } else {
    alert("Change!");
  }
}

function searchWinner() {
  let totalWinComb = [];
  let totalWinCombO = [];

  ///for1
  for (let i = 0; i < win.length; i++) {
    totalWinComb = [];
    totalWinCombO = [];
    ///for2
    for (let j = 0; j <= userX.length; j++) {
      console.log("for2");
      if (win[i].includes(userX[j])) {
        totalWinComb.push(userX[j]);
      }
    }
    if (totalWinComb.length === 3) {
      alert("The winner has been found XXX!!!)");
      break;
    }

    for (let w = 0; w <= userO.length; w++) {
      console.log("for3");
      if (win[i].includes(userO[w])) {
        totalWinCombO.push(userO[w]);
      }
    }
    if (totalWinCombO.length === 3) {
      alert("The winner has been found OOO!!!)");
      break;
    }
  }
}

function onRestart() {
  content.innerHTML = createMarkup();
  player = "X";
}

console.log("X", userX);
console.log("O", userO);

//   if (res.length === 3) {
//     console.log(final);
// };

//  win.forEach((item) => {
//    for (let i = 0; i <= userX.length; i++) {
//      let res = item.reduce((acc, el) => {
//        if (userX.includes(el)) {
//          acc.push(el);
//          console.log(acc);
//        }
//        return acc;
//      }, []);
//      console.log(res);
//    }
//  });

//  if (
//       win[i].includes(userX[0]) &&
//       win[i].includes(userX[1]) &&
//       win[i].includes(userX[2])
//     ) {
//       alert("переможця знайдено, Вітаю містер Х");
//       break;
//     }

const rengDeyisen = document.querySelector(".rengDeyisen");
// console.log(rengDeyisen);
const evveleQayit = document.querySelector(".evveleQayit");
const birDuyme = document.querySelector(".birDuyme");
rengDeyisen.addEventListener("click", function () {
  console.log(box1.classList);
  box1.classList.add("circle");
  console.log(box1.classList);
});

// box1.addEventListener("click", function () {
//   console.log("salam");
//   box1.style.backgroundColor = "red";
// });

evveleQayit.addEventListener("click", function () {
  box1.classList.remove("circle");
});
let mode = true;
birDuyme.addEventListener("click", function () {
  console.log(box1.className);
  // box1.classList.add("circle");
  // 1 variant
  //   if (box1.className.includes("circle")) {
  //     box1.classList.remove("circle");
  //   } else {
  //     box1.classList.add("circle");
  //   }
  // 2 variant
  //   if (mode == true) {
  //     box1.classList.add("circle");
  //     mode = false;
  //   } else {
  //     box1.classList.remove("circle");
  //     mode = true;
  //   }

  // 3 variant
  //   box1.classList.toggle("circle");
});

// console.log("azerbaycan".includes("a"));

const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");

box1.addEventListener("click", function () {
  box1.style.backgroundColor = "green";
});

box2.addEventListener("click", function () {
  box2.style.backgroundColor = "green";
});

box3.addEventListener("click", function () {
  box3.style.backgroundColor = "green";
});

const bigBox = document.querySelector(".bigBox").children;
console.log(bigBox);

// for (let i = 0; i < bigBox.length; i++) {
//   console.log(bigBox[i]);
// }

for (let box of bigBox) {
  //   console.log(box);s
  box.addEventListener("click", function () {
    console.log(box.innerText);

    for (let box of bigBox) {
      box.style.backgroundColor = "gray";
    }
    box.style.backgroundColor = "green";
  });
}

// rengi deyis
// 2 duyme ile deyis
// toql et
// 7 dene qutunu rengini deyis
// 7 qutudan 1ni secende digerleri boz olsun

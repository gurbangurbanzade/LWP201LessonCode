// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 5000);

// console.log(3);

// console.log("start");

// // login
// // posts
// // create post
// const serverStatus = false;
// const login = (username, password, succesFn, errorFn) => {
//   setTimeout(() => {
//     if (serverStatus) {
//       succesFn({ username: username });
//     } else {
//       errorFn("Server not found 404");
//     }
//   }, 2000);
// };

// // const user = login("gurban", "1234");

// // console.log(user);

// const posts = (username, callback) => {
//   setTimeout(() => {
//     callback(["post1", "post2", "post3"]);
//   }, 2000);
// };

// login(
//   "gurban",
//   "1234",
//   (user) => {
//     console.log("istifadeci:", user.username);
//     posts(user.username, (data) => {
//       console.log(data);
//     });
//   },
//   (data) => {
//     console.log(data);
//   }
// );

// console.log("end");

// callback promise async await

// const btnGoster = document.querySelector(".btnGoster");

// btnGoster.addEventListener("click", dataGetir);

// dataGetir();

fetch("https://restcountries.com/v3.1/name/aze")
  .then((response) => response.json())
  .then((data) => {
    console.log("olkenin adi", data[0].name.common);
    console.log("olkenin paytaxt", data[0].capital[0]);
    console.log("olkenin qonsu", data[0].borders);
    data[0].borders.forEach((element) => {
      console.log(element);
    });

    const card = document.querySelector(".cardI");
    // const flagBox = document.querySelector(".flagBox img");

    // const olkeninPaytaxt = document.querySelector(".olkeninPaytaxt");
    // const olkeniEhali = document.querySelector(".olkeniEhali");

    // olkeninAdi.innerText = data[0].name.common;
    // olkeninPaytaxt.innerText = data[0].capital[0];
    // olkeniEhali.innerText = data[0].population;
    // flagBox.src = data[0].flags.svg;
    card.innerHTML = `
  <div class="card" style="width: 18rem;">
  <img src=${data[0].flags.svg} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data[0].name.common}</h5>
    <p class="card-text">${data[0].name.nativeName.aze.official}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>

  `;
  });

// const inputCst = document.querySelector(".inputCst");

// const inputSurname = document.querySelector(".inputSurname");
// // inputCst.addEventListener("keypress", function (e) {
// //   console.log("eventimiz-" + e.type);
// //   //   console.log(e.target);
// // });

// // inputCst.addEventListener("keyup", function (e) {
// //   console.log("eventimiz-" + e.type);
// //   //   console.log(e.target);
// // });

// // inputCst.addEventListener("cut", function (e) {
// //   console.log("eventimiz-" + e.type);
// //   //   console.log(e.target);
// // });

// // inputCst.addEventListener("paste", function (e) {
// //   console.log("eventimiz-" + e.type);
// //   //   console.log(e.target);
// // });

// // inputCst.addEventListener("focus", function (e) {
// //   console.log("eventimiz-" + e.type);
// //   //   console.log(e.target);
// // });

// // inputCst.addEventListener("blur", function (e) {
// //   console.log("eventimiz-" + e.type);
// //   //   console.log(e.target);
// // });

// // inputCst.addEventListener("keydown", function (e) {
// //   console.log("eventimiz-" + e.type);
// //   //   console.log(e.target);
// // });

// // inputCst.addEventListener("input", function (e) {
// //   console.log("eventimiz-" + e.type);
// //   //   console.log(e.target);
// // });

// // function getEvent(e) {
// //   console.log("eventimiz-" + e);
// //   console.log(e.target);
// //   //   console.log("hello");
// // }

// // getEvent();

// // let x=5

// const formCst = document.querySelector(".formCst");

// const addBtn = document.querySelector(".addBtn");

// console.log(JSON.parse(localStorage.getItem("arr")));
// let arr = [];

// if (JSON.parse(localStorage.getItem("arr")) !== null) {
//   arr = JSON.parse(localStorage.getItem("arr"));
// }

// // let arr = [];
// formCst.addEventListener("submit", function (e) {
//   let obj = {
//     name: "",
//     surname: "",
//     age: 5,
//   };

//   obj.name = inputCst.value;
//   obj.surname = inputSurname.value;
//   console.log(obj);

//   arr.push(obj);
//   console.log(arr);

//   localStorage.setItem("arr", JSON.stringify(arr));

//   console.log(JSON.parse(localStorage.getItem("arr")));

//   let testData = JSON.parse(localStorage.getItem("arr"));
//   console.log(typeof testData[0].age);

//   e.preventDefault();
// });

// // console.log(inputCst.value);

// // localStorage.setItem("name", "qurban");
// // localStorage.setItem("surname", "qurbanzada");
// // localStorage.setItem("name", "kenan");

// // console.log(localStorage.getItem("name"));
// // console.log(localStorage.getItem("surname"));

// // sessionStorage.setItem("name", "qurban");
// // sessionStorage.setItem("surname", "qurbanzada");

// // console.log(sessionStorage.getItem("name"));
// // console.log(sessionStorage.getItem("surname"));

// // localStorage.clear();

const cstInput = document.querySelector(".cstInput");
const surname = document.querySelector(".surname");
const addBtn = document.querySelector(".addBtn");
const users = document.querySelector(".users");
const cstForm = document.querySelector(".cstForm");
// cstInput.addEventListener("keydown", function (e) {
//   console.log("eventimiz", e.type);
// });
// cstInput.addEventListener("keyup", function (e) {
//   console.log("eventimiz", e.type);
// });

// cstInput.addEventListener("focus", function (e) {
//   console.log("eventimiz", e.type);
// });

// cstInput.addEventListener("blur", function (e) {
//   console.log("eventimiz", e.type);
// });

// cstInput.addEventListener("paste", function (e) {
//   console.log("eventimiz", e.type);
// });

// cstInput.addEventListener("cut", function (e) {
//   console.log("eventimiz", e.type);
// });

// cstInput.addEventListener("keydown", function (e) {
//   console.log("eventimiz", e.type);
// });

// cstInput.addEventListener("input", function (e) {
//   console.log("eventimiz", e.type);
// });
let arr = [];

if (JSON.parse(localStorage.getItem("dataBase")) !== null) {
  arr = JSON.parse(localStorage.getItem("dataBase"));
}
cstForm.addEventListener("submit", function (e) {
  let obj = {
    name: "",
    surname: "",
  };
  console.log("name", cstInput.value);
  console.log("surname", surname.value);

  obj.name = cstInput.value;
  obj.surname = surname.value;
  arr.push(obj);
  localStorage.setItem("dataBase", JSON.stringify(arr));
  e.preventDefault();
});
// localStorage.setItem("name", "qurban");
// localStorage.setItem("surname", "qurbanzada");
// localStorage.setItem("name2", "namiq");

// const obj = {
//   name: "",
//   surname: "",
// };
// obj.name = "qurban";
// obj.surname = "qurbanzade";
// console.log(obj);
// arr.push(obj);
// console.log("arr", arr);

// // obj.name = "namiq";
// // obj.surname = "abasov";
// console.log(obj);
// arr.push(obj);
// console.log("arr", arr);
// localStorage.setItem("arr", JSON.stringify(arr));
// console.log(JSON.parse(localStorage.getItem("arr")));
// // console.log(localStorage.getItem("name2"));

// localStorage.clear();

// // console.log("---------------------");
// // let a = 5;
// // console.log(a);
// // a = 8;
// // console.log(a);
// // obj.name = "namiq";
// // console.log(obj.name);
// // obj.name = "qurban";
// // console.log(obj.name);
users.addEventListener("click", function () {
  console.log(JSON.parse(localStorage.getItem("dataBase")));
});

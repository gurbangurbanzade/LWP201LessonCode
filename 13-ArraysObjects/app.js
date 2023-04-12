// let telebe1 = "Ramal";
// let telebe2 = "Letafet";
// let telebe3 = "Araz";

// // let telebeSiyahisi = [telebe1, telebe2, telebe3];
// // let telebeSiyahisi = ["Ramal", "Letafet", "Araz"];

// // console.log(telebeSiyahisi);
// // console.log(telebeSiyahisi[1]);
// // telebeSiyahisi.length = 5;
// // console.log(telebeSiyahisi.length);

// // telebeSiyahisi[1] = "Subhan";
// // telebeSiyahisi[3] = "Necef";
// // telebeSiyahisi[4] = "Namiq";
// // telebeSiyahisi[5] = "Kubra";
// // let telebeSiyahisi = ["Ramal", "Letafet", "Araz", ["1995", "1993", 2001]];
// // console.log(telebeSiyahisi);
// // console.log(telebeSiyahisi[3]);
// // console.log(telebeSiyahisi[3][1]);
// // console.log(telebeSiyahisi[3][1][2]);

// let telebeSiyahisi = ["Ramal", "Letafet", "Araz", "Necef", "Subhan"];

// // for (let i = 0; i < telebeSiyahisi.length; i++) {
// //   console.log(telebeSiyahisi[i], i);
// // }

// telebeSiyahisi.push("Mursel");
// telebeSiyahisi.push(5);
// telebeSiyahisi.pop();
// telebeSiyahisi.shift();
// telebeSiyahisi.unshift("Hesen");

// console.log(telebeSiyahisi);

// let telebeSiyahisi = ["Ramal", 2002, "Memmzade", "Letafet", "Araz"];
// let telebeTevelludu = [1992, 1993];
// let Hobbiler = ["futbol", "domino"];

let telebe2 = {
  ad: "Kubra",
  soyad: "Ceferzade",
  dogumIli: 2000,
  evli: false,
  hobbies: ["kod yazmaq"],
  uniData: {
    girisBali: 519,
    kurs: 5,
    ixtisas: "RIM",
  },
};

// console.log(telebe1.ad);
// console.log(telebe1.soyad);
// console.log(telebe1["dogumIli"]);
// console.log(telebe1.hobbies);
// console.log(telebe1.hobbies[1]);

// console.log(telebe2.ad);
// console.log(telebe2.soyad);
// console.log(telebe2["dogumIli"]);

let telebeSiyahisi = [
  {
    ad: "Ramal",
    soyad: "Memmedzade",
    dogumIli: 2002,
    evli: false,
    hobbies: ["futbol", "bodyBil", "domino", "idman"],
    uniData: {
      girisBali: 306,
      kurs: 4,
      ixtisa: "RIM",
    },
  },

  {
    ad: "Kubra",
    soyad: "Ceferzade",
    dogumIli: 2000,
    evli: false,
    hobbies: ["kod yazmaq"],
    uniData: {
      girisBali: 519,
      kurs: 5,
      ixtisas: "RIM",
    },
  },
  {
    ad: "Ramal",
    soyad: "Memmedzade",
    dogumIli: 2002,
    evli: false,
    hobbies: ["futbol", "bodyBil", "domino", "idman"],
    uniData: {
      girisBali: 306,
      kurs: 4,
      ixtisa: "RIM",
    },
  },
  {
    ad: "Kubra",
    soyad: "Ceferzade",
    dogumIli: 2000,
    evli: false,
    hobbies: ["kod yazmaq"],
    uniData: {
      girisBali: 519,
      kurs: 5,
      ixtisas: "RIM",
    },
  },
];

console.log(telebeSiyahisi);

// for (let i = 0; i < telebeSiyahisi.length; i++) {
//   console.log(telebeSiyahisi[i]);
// }

// for (let telebe of telebeSiyahisi) {
//   //   console.log(telebe);
// }

// for (let telebeIndeksi in telebeSiyahisi) {
//   console.log(telebeIndeksi);
// }

let telebe1 = {
  ad: "Ramal",
  soyad: "Memmedzade",
  dogumIli: 2002,
  evli: false,
  hobbies: ["futbol", "bodyBil", "domino", "idman"],
  uniData: {
    girisBali: 306,
    kurs: 4,
    ixtisa: "RIM",
  },
};

for (let data in telebe1) {
  console.log(telebe1[data]);
}

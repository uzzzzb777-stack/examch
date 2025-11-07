// const userName = prompt("Ismingizni kiriting:");
// const userAge = prompt("Yoshingizni kiriting:");

// console.log(`Foydalanuvchi: ${userName}, Yoshi: ${userAge}`);

// alert(`Salom, ${userName}! Siz ${userAge} yoshdasiz.`);

// if (userAge >= 18) {
//     alert("Siz voyaga yetgansiz.");
// } else {
//     alert("Siz hali voyaga yetmagansiz.");
// }

// const user = {
//     name: userName,
//     age: Number(userAge),
//     isAdult: userAge >= 18
// };

// let name = prompt("Ismingizni kiriting:").trim();
// let birthYear = Number(prompt("Tug‘ilgan yilingizni kiriting:"));

// let currentYear = new Date().getFullYear();

// let age = currentYear - birthYear;

// let userID = Math.floor(Math.random() * 10000);


// let upperName = name.toUpperCase();


// let category;
// if (age < 12) {
//     category = "bola";
// } else if (age < 18) {
//     category = "o‘smir";
// } else if (age < 60) {
//     category = "siz chiriyapsiz";
// } else {
//     category = "siz chirigansiz";
// }


// alert(
//     `Salom, ${upperName}!\nSizning yoshingiz: ${age} yosh.\nToifangiz: ${category}.\nID raqamingiz: ${userID}`
// );




let name = prompt("Ismingizni kiriting:").trim().toUpperCase();
let city = prompt("Yashayotgan shahringizni kiriting:").trim();
let birthYear = prompt("Tug'ilgan yilingizni kiriting:").trim();


let currentYear = new Date().getFullYear();
let age = currentYear - Number(birthYear);


let id = Math.floor(Math.random() * 10000) + 1; 
let randomScore = Math.floor(Math.random() * 100) + 1; 


if (name && city && birthYear && !isNaN(age)) {

let user = {
    name: name,
    city: city,
    age: age,
    id: id,
};


    console.log("=== Foydalanuvchi ma'lumotlari ===");
    console.log(`Ism:, ${user.name}`);
    console.log("Shahar:", user.city);
    console.log("Yosh:", user.age);
    console.log("ID:", user.id);
    console.log("Tasodifiy ball:", randomScore);
} else {
    console.log("Iltimos, barcha ma'lumotlarni to'g'ri kiriting!");
}
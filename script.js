let celsius = 20;
let fahrenheit = (celsius * 9/5) + 32;

console.log("Температура в цельсіях: " + celsius + "°C");
console.log("Температура у фаренгейтах: " + fahrenheit + "°F");


let daysInMonth = 30;
let hoursInMonth = daysInMonth * 24;
let minutesInMonth = hoursInMonth * 60;
console.log("Кількість днів у місяці: " + daysInMonth);
console.log("Кількість годин у місяці: " + hoursInMonth);
console.log("Кількість хвилин у місяці: " + minutesInMonth);

let health = 100;
let energy = 150;
health -= 60;
energy -= 80;  

console.log("Рівень здоров'я: " + health);
console.log("Рівень енергії: " + energy);

let totalAmount = 906;
let znijka = totalAmount * 0.10;
let totalcina = totalAmount - znijka;

console.log("Сума покупки до знижки: " + totalAmount + " грн");
console.log("Сума з урахуванням знижки: " + totalcina + " грн");

let floatNumber = 9.99;
let roundedNumber = Math.floor(floatNumber);

console.log("Число з плаваючою комою: " + floatNumber);
console.log("Округлене число: " + roundedNumber);

let numberString = "123.45";
let Number1 = parseFloat(numberString);

console.log("Рядок: " + numberString);
console.log("Число з плаваючою комою: " + Number1);

let strNumber = "42";
let intNumber = parseInt(strNumber);

console.log(intNumber);

let number = 16;
let sqrtResult = Math.sqrt(number);

console.log(sqrtResult);

let intValue = 42;
let strValue = "123";
let parsedNumber = parseInt(strValue);
let stringFromInt = intValue.toString();
console.log(parsedNumber);
console.log(stringFromInt);
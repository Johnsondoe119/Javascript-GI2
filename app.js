// Very Easy

function randomNumber(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

console.log(randomNumber(175, 200))

// Easy

let John = [firstname = "Johnson", lastName = "Doe", age = 24];
let Success = [firstname2 = "Success", lastName2 = "Obama", age2 = 22];
let Aishah = [firstname = "Aishah", lastName = "Isom", age = 23];



console.log("hey my name is",  firstname2,  lastName2,  "and I am", + age2, "years old" );



// Medium


// alert("Pick a Number!!!");



// let asmd = prompt("Pick a Number");



// switch (asmd) {
//     case '1':
//     result = "January";
//     break;
//     case "2":
//     result = "Feburary";
//     break;
//     case "3":
//     result = "March";
//     break;
//     case "4":
//     result = "April";
//     break;
//     case "5":
//     result = "May";
//     break;
//     case "6":
//     result ="June";
//     break;
//     case "7":
//     result = "July";
//     break;
//     case "8":
//     result = "August";
//     break;
//     case "9":
//     result = "September";
//     break;
//     case "10":
//     result = "October";
//     break;
//     case "11":
//     result = "November";
//     break;
//     case "12":
//     result = "December";
//     break;
// }

//     if (asmd < 13){
//         document.write(result);
//         console.log(result);
//     } else {
//         document.write("Invalid Number");
//         console.log("Invalid Number");
//     };



// Hard

let tomHeight = 9;
let tomWeight = 8;

let jerryHeight = 10;
let jerryWeight = 45;

let tomBmi = tomWeight / (tomHeight * tomHeight);
let jerryBmi = jerryWeight / (jerryHeight * jerryHeight);

// console.log("Is Toms BMI higher than Jerrys?", +tomBmi > jerryBmi);
// console.log("Is Jerrys BMI higher than Tom?", +tomBmi < jerryBmi);

function compareBmi (tomBmi, jerryBmi) {
    if (tomBmi > jerryBmi){
        console.log("Is Toms BMI higher than Jerrys?", +tomBmi > jerryBmi);
    } else {
        console.log("Is Jerrys BMI higher than Tom?", +tomBmi < jerryBmi);
    };
};
// console.log(compareBmi(tomBmi, jerryBmi));
compareBmi(tomBmi, jerryBmi);
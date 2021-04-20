// 1. Print Exponential Values
 function needHolidays(a,b) {
    if(typeof a==="number"){
        if(typeof b==="number"){
            console.log("A and B are both numbers")
        }
    }
 };

 needHolidays(30, 7);

//  Second bullet point
function leaNumbers(x, y) {
    for (i=1 ; i <= y; i++) {
        console.log(x ** i)
    }
}
leaNumbers(3,5);
leaNumbers(2,8);


// 2. Fruits
let myFFruit = "Maracuja";
function printFavoriteFruit() {
    myFFruit = "Passionfruit";
}
// printFavoriteFruit();
console.log("My favorite fruit is: " + myFFruit);

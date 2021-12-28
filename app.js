//                                   Variables  ===== "var"

/* variable ese use hote hn 
   aur variables value k liye use hote hn
   k koi bhi value varibles me rakh skte hn 
*/

var a = "hello";
var b = "World";
// document.write(a + b)

//  Variables likhne ka sai tarika
// Camel case or snack case

var firstName = "Abdur Rehman ";
var last_name = "Ahmed";
// document.write(firstName + last_name)


/*  variables ka ek bar keyword likhe k bht sare variable k naam de
    k baad me variables k name se use kr sakte hn coma dal dal k.. 
*/


var first_name, last_name, sur_name;
first_name = "abdur rehman ";
last_name = "ahmed ";
sur_name = "khan ";

// document.write(first_name + last_name + sur_name)

//                                  Let or Const Variables


/*  Let name ke variable me ye different hai k ye jab ek naam se declare ho jata hai
    to dubara ussi name se let naam k variable ko declare nhi kr skte han value update
    kr skte hen var ki trhn baki sab var wale variable ki trhn hi let kam krta hai...
*/


let first = "hello";
first = "world";
// let first = "papa";   // ye smjhane k liye ussi name se declare kiya hai...
// document.write(first)


//              Const Variable ====> const stant for constant variable


/*  const variable jab ek bar declare ho jata hai to usko na ussi naam se declare kr skte hen
    na hi uski value ko update kr skte hen
*/

const first_value = "hello world";
//first_value = "hellooo"; // aur na hi value ko update kr skte hen..
// const first_value ="Hello duniya" // ye smjhane k liye k ussi name se declare nhi kr skte 
// document.write(first_value)

//                            Data Type In JavaScript


/*  Agr koi value jo boolean hai aur hm string me denge to string
    smjhi jaegi aur arry obj ko obj hi smjh raha hai koi khas nh h OK
*/


var x = "hello"; // ======> String
x = 20; // ====> Number
x = true // boolean true or false dono boolean
x = undefined; // undefined set value
x = null; // null meaning k kuch nh h value me
x = ['HTML', 'CSS', 'JS']   // Array
x = {
    name: "yahhhoooo",
    country: "pakistan"
}   //  Object
//document.write(x)
//document.write("<br />")
//document.write(typeof x)  // javascript ka 'in-built' function hai typeof


//                                  Arithmetic Operators


/*
    + ===> Addition                  ye jama ka kam krta hai
    - ===> Subtraction               ye mainas ka kam krta hai
    * ===> Multiplication            ye multiply ka kam krta hai (mtlb zarab dene ka)
    ** ===> Exponentiation           ye power bn jati hai jo nmbr k upr likhi hui hoti hai
    / ===> Division                  ye divide ka kam krti hai 
    % ===> Modulus (Remainder)       ye divide ke bad jo value bachti hai uska kam krti hai
    ++ ===> Increment                ye jo bhi value hoti hai usme plus 1 krti hai
    -- ===> Decrement                ye jo bhi value hoti hai usme se mainas 1 kr deti hai
*/

var ab, ad, result;
ab = 2;
ad = 3;
// result = document.write("Ye addition value hai " + (ab + ad) + "<br />")
// result = document.write("ye subtraction value hai " + (ab - ad) + "<br />")
// result = document.write("ye multiply valur hai " + (ab * ad)+ "<br />")
// result = document.write("ye power value hai " + (ab ** ad) + "<br />")
// result = document.write("ye divide value hai " + (ab / ad) + "<br />")
// result = document.write("ye modulus value hai " + (ab % ad) + "<br />")
// result = document.write("ye increment value hai " + (++ab) + "<br />")
// result = document.write("ye decrement value hai " + (--ab) + "<br />")


//                                 Assignment Operators


/*     
    Operaters                 Example                       Same as
       =                      x = y                         x = y
       +=                     x += y                        x = x + y
       -=                     x -= y                        x = x - y
       *=                     x *= y                        x = x * y
       /=                     x /= y                        x = x / y
       %=                     x %= y                        x = x % y
       **=                    x **= y                       x = x ** y
 */

var value_one, value_two, result_value;
value_one = 2;
value_two = 10;
// result_value = document.write((value_one += value_two) + "<br />")
// result_value = document.write((value_one -= value_two) + "<br />")
// result_value = document.write((value_one *= value_two) + "<br />")
// result_value = document.write((value_one /= value_two) + "<br />")
// result_value = document.write((value_one %= value_two) + "<br />")
// result_value = document.write((value_one **= value_two) + "<br />")


//                      Google Chrome Console


/*
        console.time()
        console.log()
        console.error()
        console.warn()
        colosole.table()
        console.clear()
        console.timeEnd()
*/
var abc = "hello world";

// console.time("Testing..........!!")
// console.error(['hello', 'world', 'for', 'pakistan']);
// console.error(['hello', 'world', 'for', 'pakistan']);
// console.error(['hello', 'world', 'for', 'pakistan']);
// console.error(['hello', 'world', 'for', 'pakistan']);
// console.error(['hello', 'world', 'for', 'pakistan']);
// console.error(['hello', 'world', 'for', 'pakistan']);
// console.error(['hello', 'world', 'for', 'pakistan']);
// console.error(['hello', 'world', 'for', 'pakistan']);

// console.timeEnd("Testing..........!!")

//                                 Comparison Operators
// console.log(50 === 30)
// console.log(60 !== 60);

//                  If Statement 

if (20 != 20) {
    alert("Value is Grater")
}

//                               Logical Operators


var age = 20;
// if (age >= 19 && age <= 18){
//     console.log("nhi chalegi")
// }
// console.log(age >= 19 && age <= 18);


// if (age >= 20 || age < 18) {
//     console.log("chalegi")
// }

//                            If Else Statement
/*  
    Ye code is liye comment kiya hai k aage coding kr sken nh to bar bar chalta rahega
*/


// var Name_User = prompt("Enter Your Name")
// var Genger = prompt("Enter Your gender")
// if(Genger == "Female"){
//     console.log(`Welcome Miss ${Name_User}`);
// }
// else if(Name_User == "" && Genger == ""){
//     console.log("Plz Fill Requirment");
// }
// else{
//     console.log(`Welcome Sir ${Name_User}`);
// }


//                           If Else If Statement

// var per = prompt("Enter Percentage..");

// if (per >= 80 && per <= 100) {
//     console.log('Topper');
// }
// else if (per >= 60 && per < 80) {
//     console.log('Second');
// }
// else if (per >= 45 && per < 60) {
//     console.log('Third');
// }
// else if (per >= 33 && per < 45) {
//     console.log("Just pass");
// }
// else if (per < 33) {
//     console.log('fail');
// }
// else {
//     console.log('invalid percentage');
// }

//                               Conditional Ternary Operator

// var num = prompt("value");
// (num <= 100) ? console.log("ye value match hogyi 100 k andar . ") : (num <= 500) ? console.log("Ye value match ho gyi 500 k andar . ") : console.log("ye value sai hai")


//                                    Switch Case

// var day = +prompt("Enter Your Day In Number..!")

// switch (day) {
//     case 0:
//         console.log("Today Is Monday...");
//         break;
//     case 1:
//         console.log("Today Is Tuesday...");
//         break;
//     case 2:
//         console.log("Today Is Wednesday...");
//         break;
//     case 3:
//         console.log("Today Is Thursday...");
//         break;
//     case 4:
//         console.log("Todat Is Friday...");
//         break;
//     case 5:
//         console.log("Today Is Saturday...");
//         break;
//     case 6:
//         console.log("Today Is Sunday...");
//         break;
//     default:
//         console.log("Enter Your Vaild Day Number In 0 to 6...!");
//         break;
// }


//                          Switch Case with Comparsion Operatior..


// var age = +prompt("Enter Your Age..")
// switch (true) {
//     case (age >= 20 && age <= 25):
//         console.log("You Are Adult..");
//         break;
//     case (age >= 25 && age <= 30):
//         console.log("You are Young..");
//         break;
//     default:
//         console.log("You are Kid...!");
//         break;
// } 

//                            Confirm Box

// var box = confirm("Aur You Connect With Our Website..?")

// if (box) {
//     alert("Thanks for you connect our website")
// }
// else {
//     alert("Sorry try again later....!")
// }


//                                     Functions


/*
    Ham Function ka use is liye karte hen k code kam ho jese k agr hme ek hi code jo k bar bar 
    use karna hai to hm us code ko function me likh denge aur phr use call kr lenge Function ko
    bnane k liye uska keyword ata hai pehle 'function' aur phr function ka nam round bracket phr curly 
    braket me jo coding krni ho kr te hn jo statement bi kehte hn aur signal naam hai to lower case aur name
    agr bara hai to camel case ya phr snack case...

*/

function abcd() {
    console.log("Hello World");
}
function zyx() {
    console.log("Hello Duniyaa....!!");
}

/*
ye function ko hm ne declear kr diya hai mtlb define hue hn use kahin nh hue
mtlb ye k function bna k rakh diya hai...
*/

// abcd();
// zyx();

//  Ye function call ho gye 


//                               Functions with Parameters 

function full_Name(fname, lname) {
    console.log("FullName Is : " + fname + lname);
}

// full_Name('abdur rehman ', 'Ahmed');
// full_Name("Suleman ", "Khan");

//  adding

function sum(a, b) {
    console.log(a + b);
}

// sum(70, 15);

//  Subtraction

function subtrac(a, b) {
    console.log(a - b);
}

// subtrac(50, 30)


//                    function with parameters in default value

function qwe(fn = "khan", ln = "bro") {
    console.log(fn, ln);
}

// qwe()


//              Functions with Return Value

/*
        calculation nikali hai with the hepl of return value of function
*/


function sum_subject(math, eng, urdu) {
    var calculate_of_value = math + eng + urdu;
    return calculate_of_value;
}
function percentage_of_subject(val) {
    var per = val / 400 * 100;
    console.log(per);
}
var total = sum_subject(50, 30, 50);
// percentage_of_subject(total);
// console.log(total);

//                           Global & Local Variable

var abcc = "hello world";           // Global variable jo puri js me kahin bi mil skta hai

function mno() {
    var zxy = "Hello Guyss.......!!"        // local variable jo sirf function me hi milega function k bahir nh milega
    console.log(zxy);
    console.log(abcc);
}
// mno()
// console.log(zxy);

//                              Events

function clicking() {
    console.log("i am clicking......");
}

//                                         While Loop...

/*
    Loop me pehle initialzation hota hai phr condition
    check hoti hai aur last me increment ya decrement
*/
// var a = 1;
// while (a <= 10) {
//     document.write("Hello World <br />");
//     a = a + 1
// }

//                           While Loop With HTML Tags....

// var a = 1;
// document.write("<ul>")
// while (a <= 10) {
//     document.write("<li>" + "Hello World" + "</li>");
//     a = a + 1
// }
// document.write("</ul>")

//                             While Loop With Number

// var a = 1;
// while (a <= 10) {
//     document.write(a + ") Hello World <br />");
//     a = a + 1
// }

//              Decrement While Loop

// var a = 10;
// while (a >= 1) {
//     document.write(a + " ==>> Hello World <br />");
//     a = a - 1
// }



//                            Do While Loop

/*
    do while loop me ye faraq hai k ye pehli bar me chal jata h 
    dusri bar me condition check krta hai aur koi faraq nahi hai 
*/

// var a = 1;
// do {
//     document.write(a + " Hello EveryOnee.....!! <br>")
//     a++
// } while (a <= 10);
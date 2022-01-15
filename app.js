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


//                                   For Loop 
/*
        for loop zydatar developer use krte hn ku k code shot hai iska 
        aur ye kam ese krta hai k pehle initialization hota hai phr condition
        check hoti hai aur statement print hoti hai statement print hone k baad 
        increment ya decerement check hoti hai phr wapis condition ki tarf jata hai statement 
        print hone k bd condition check nh hoti...
*/

// for (var i = 1; i <= 10; i++) {
//     console.log("i am for loop");
// }

// for(var i=1;i<=15;i++){
//     console.log("i am looppiiinnggg.....!!");
// }

//                                  Break & Continue

/*
        ye continue ki example hai agr continue lgaya to loop ne direct condition
        pe le gya neche ki statement print ni ki
*/

for (var i = 1; i <= 10; i++) {
    if (i === 5) {
        // document.write("Number # : " + i + "<br>")
        continue;
    }
    // document.write("No # : " + i + "<br>")
}

/*
        ye break ki example hai loop ko break lag jata hai aur ruk jata hai
        out of loop
*/

for (var i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    // document.write("ye hai break ====> " + i + "<br>")
}

//                         Find Even & Odd Numbers with Loops   

//                                      Even

/*
        loop se even number nikalen hen simple formula se 
*/


// document.write("Even Number <br><br>")

for (var i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        // document.write(i + "<br>");
        // document.write("<br>")
    }
}

//              Odd

// document.write("Odd Number <br><br><br>")
for (var i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
        // document.write(i + "<br>")
        // document.write("<br>")
    }
}

//                                 Nested Loop

for (var i = 1; i <= 100; i += 10) {
    for (var j = i; j < i + 10; j++) {
        // document.write(j + " ")
    }
    // document.write("<br>")
}


//                        Nested Loop With More Example


// document.write("Example One <br><br>")
for (var i = 1; i <= 5; i++) {
    for (var j = 1; j <= i; j++) {
        // document.write(j + " ")
    }
    // document.write("<br>")
}

// document.write("<br> Example Two <br><br>")

for (var i = 1; i <= 5; i++) {
    for (var j = 1; j <= i; j++) {
        // document.write(i + " ")
    }
    // document.write("<br>")
}

// document.write("<br> Example Three <br><br>")

for (var i = 5; i >= 1; i--) {
    for (var j = 1; j <= i; j++) {
        // document.write(j + " ")
    }
    // document.write("<br>")
}

// document.write("<br> Example Four <br><br>")

for (var i = 5; i >= 1; i--) {
    for (var j = i; j >= 1; j--) {
        //   document.write(j + " ")
    }
    // document.write("<br>")
}

// document.write("<br> Example Five <br><br>")

for (var i = 5; i >= 1; i--) {
    for (var j = 1; j <= i; j++) {
        // document.write(i+" ")
    }
    // document.write("<br>")
}


//                                  13-01-2022

//                               pratice for loop

for (var i = 5; i >= 1; i--) {
    for (var o = i; o >= 1; o--) {
        // document.write(o);
    }
    // document.write("<br />");
}

//                                     Arrays...!    


/*
        array likhne ka tarika aur array ko index se target krte hen aur ye k array 
        ka index 0 se shuru hota hai array me jitni chahiye value dal skte hen aur array me 
        koi bhi kisam ka data dal skte hn number boolean string xyz sb
*/

var ary = [10, 20, 30, 40, 50, 60]
// document.write(ary)

//          array ko index se target


var ary = [10, 20, 30, 40, 50, 60]

// document.write(ary[0]+"<br />")
// document.write(ary[3])


//                                       array pr loop chalana  

var ary = [10, 20, 30, 40, 50, 60]

for (var t = 0; t <= 5; t++) {
    // document.write(ary[t] +"<br />")
}


//                       Array pr loop aur Sum bhi kra raha hun har number ko


var ary = [10, 20, 30, 40, 50, 60]
var sum_add = 0;

for (var t = 0; t <= 5; t++) {
    // document.write(ary[t] +"<br />")
    // sum_add = sum_add + ary[t]
}

// document.write("Total number Of : " + sum_add)

//                                       15-01-2022

//                              Array ko Method k zariye bnana          

/*
    Array bnane ka dusra tarika is me jo round bracket hen to us me hm koi number de den to 
    wo smjhega k us me utni hi value aengi
*/

var ary = new Array(20, 30, 40);
// console.log(ary[1])

//  is me hm array define kr k phr neche value dal skte hen aur agr hm agr ek bech me value na 
// dalen to wo empty le ga

var arry = new Array();
arry[0] = "khan";
arry[1] = "sohel";
arry[3] = "kaka";
// console.log(arry);

//     Array pr loop chala kr value get krne ka kam kr raha h jo prompt k zariye value le raha hai0 

var arry = new Array(3);
for (var g = 0; g < 3; g++) {
    // arry[g] = prompt("Enter 3 value who different every time ... ")
    // if (arry[g] === "") {
    //     alert("plz enter some value")
    // }
}

// ye array ko print krne ka kam kr raha hai 

// document.write("<ul>")
for (var p = 0; p < 3; p++) {
    // document.write("<li>" + arry[p] + "</li>")
}
// document.write("</ul>")


//                            Multidimensional Arrays

var multi_array = [
    ['hammad', 10, 'matric', 'lahore'],
    ['maaz', 12, 'first year', 'islamabad'],
    ['kamran', 15, 'i.com', 'peshawar'],
    ['arkam', 16, 'bba', 'karachi']
];

// document.write("<table border='1px' cellspacing='0'>")

for (var o = 0; o <= 3; o++) {
    // document.write("<tr>")
    for (var i = 0; i <= 3; i++) {
        // document.write("<td>" + multi_array[o][i] + "</td>")
    }
    // document.write("</tr>")
}

// document.write("</table>")

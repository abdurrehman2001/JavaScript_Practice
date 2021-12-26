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

// var per = prompt("val");

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

//--------------------------------Question 9------------------------------------------//
//f)

// var number=+prompt("Write a number")

// if(number%2===0){
//     console.log(`This is an even number`)

// }else {
//     console.log(`This is a odd number`);
    
// }
//g)

// var score=+prompt("Write your score here to see your grade")

// if(score>=70){
//     console.log(`${score} ,your grade is A`)

// }else if(score>=60){
//     console.log(`${score} ,your grade is B`)

// }else if(score>=50){
//     console.log(`${score} ,your grade is C`)

// }else if(score>=40){
//     console.log(`${score} ,your grade is D`)

// }else{
//     console.log(`${score} ,your grade is E`)

// }

//h)



// function leapYear(year)    
// {

//     if(year%4===0){
// console.log(`${year}, This is a leap year`)
//     }
//     else if(year%400===0){
//         console.log(`${year}, This is a leap year`)
//     }else {
//         console.log(`${year}, This is not a leap year`)

//     }
// }leapYear(2019)


// i) 

// var num1=+prompt("Enter a number")
// var num2=+prompt("Enter a number")
// var num3=+prompt("Enter a number")
// if(num1>num2 && num1>num3){
// console.log(`${num1},This is the largest number.`)
// }else if(num2>num1 && num2>num3){
//     console.log(`${num2},This is the largest one.`)
// }else if(num3>num1 && num3>num2){
//     console.log(`${num3},This is the largest one.`)

// }else{
//     console.log(`This is not the largest one.`)

// }

//j)

// var price=+prompt("Enter price here to discount")
// var discprice=(price/100*10)
// var discprice2=(price/100*20)

// if(price<50){

//     console.log(`$${price},u got no discount.`)

// }else if(price>=50 && price<=100){

//     console.log(`Orignal price $${price}and now price $${price-discprice},u got 10% discount.`)
// }else if(price>=100){

//     console.log(`Original price $${price}and now price $${price-discprice2},u got 20% discount`)}

///Q 10/////

//a)

// function sum(num1,num2) {
//     console.log(num1+num2)
//     return sum
// }sum(4,6)

// //b)

// function temp(celcius) {
//     console.log(`F=${celcius*9/5+32}`);
    
    
// }temp(23)

//c)

// function prime(num) {
   
//     if (num%1===0 && num%2===0) {
//         console.log(false);
        
//     } else {
//         console.log(true);
        
//     }
// }prime(7)

//d)

// function string(myNam) {
//     return myNam.split("").reverse().join("");
// }
// console.log(string("SAIMA"))

//e)
 

// const factorial = function(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// };


// console.log(factorial(5)); 
// console.log(factorial(8)); 

//f)

// function greet() {
//     console.log("Hello!world");
    
    
// }
// greet()


//g)


// function greet(anyname)
// {
//     console.log(`Hello!,${anyname}`);
    
// }
// greet("saima")


//h)

// function sum(num1,num2) {
//     var sumNum=(num1+num2)
//     console.log(`The sum of given numbers is ${sumNum}`)
//     return sumNum
// }
// sum(5,6)

//i)

// const RandomNumber = function() {
//     return Math.floor(Math.random() * 100)+1;
// };


// console.log(RandomNumber()); 


// //j)

// function votingAge(age) {
//     var age=prompt("Enter your age")
//     if(age>=18){
//         console.log(`You are ready to give vote`)
//         return true
//     }else{

//         console.log(`You are not eligible for voting`)
//     }
   
// }votingAge()
               //OR////

// const canVote = function(age) {
//     return age >= 18;
// };


// console.log(canVote(70)); 
// console.log(canVote(16)); 



//k)

//------------------------Q #11----------------------------//



//a)
// const square= (num1) => num1*num1
// console.log(square(4))


//b)
//  const EvenNumbers=(arr)=>arr.filter (arr=>arr%2===0);
// const arr=[1,2,3,4,5,6,7,8,9,10];
// const even=EvenNumbers(arr);
// console.log(even)

//c)

// const result=(string1,string2)=>string1+string2
// console.log(result("Saima"+" "," "+ "Imran"));

//d)

// const maxvalue=(num)=> Math.max(...num);
// console.log(maxvalue([1,2,3,4,5,6,7]));

//e)

// const sum=(arr)=>arr.reduce((a,b)=>a+b,0);
// console.log(sum([2,3,4,5,6]));

//f)

// const mynam=()=>("Hello world!");
//     console.log(mynam());

//g)

// const squr=(num)=>num*num
// console.log(squr(7));

//h)

// const num=(a,b)=>

//    { if (a-b>0) {
//         return true
//     } else {
//         return false
//     }}

// console.log(num(4,3));

//i)

// const rndm=()=>Math.floor
// (Math.random()*50)+1;
// console.log(rndm());

//j)
// const mint=(num)=>(num*60)
// console.log(mint(2),`sec`);

//----------------------------Q# 12-----------------------------------------//


//a)

// (function () {
//     console.log("Hello");
    
// })();

//b)

// (function (num1,num2) {
//     console.log(num1+num2);
// })(5,6);

//c)

// const num=[23,14,66,0,2,4];
// (function (){
//    num.sort((a,b)=>a-b);
//    console.log(num)
// }

// )()

//d)

// (function () {
//     console.log(`Hello,Saima!`);
    
    
// })()

//e)

// const check= function(number) {
//     if (number % 2 === 0) {
//         console.log(`${number} is even`);
//     } else {
//         console.log(`${number} is odd`);
//     }
// };

// check(6); 

//f)
 
//  const oddNumbers=(arr)=> arr.filter (arr=>arr%2!==0);
// const arr=[1,2,3,4,5,6,7,8,9,10];
// const odd=oddNumbers(arr);
// console.log(odd);


//g)

// const factorial = function(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// };


// console.log(factorial(5)); 
// console.log(factorial(6)); 


//h)
// setTimeout(function() {
//     console.log("Time's up!");
// },20000);

//i)

// const sum=(arr)=>arr.reduce((a,b)=>a+b);
// console.log(sum([1,2,3,4,5,6,7]));

//j)

// (function(age) {
//     if (age >= 18) {
//         console.log(`${age}: Eligible to vote`);
//     } else {
//         console.log(`${age}: Not eligible to vote`);}
// })(2);

//--------------------------------End-----------------------------------------//
console.log('hello javascript');
// javascript is dynamically typed language
// typescript is a superset of javascript
// node --watch filename
console.log('good morning');

myname = "omkar";

console.log(myname);

age = 20;

console.log(age);

console.log(typeof age);

isLoggedIn = true;
isloggedin = true;

console.log( typeof isLoggedIn);
console.log( typeof isloggedin);

if(age<=18){
    console.log('Eligible for DL');
}
else{
    console.log('Not Eligible for DL')
}
 
process.stdout.write('same line 1 ');
process.stdout.write('same line 2\n');

// wap to check a no is divisible by 7 and 11

num = 59;

if(num%7==0 && num%11==0){
    console.log('divisible by both');
}
else if(num%7==0 && num%11!=0){
console.log('divisible by only 7')
}
else if(num%7!==0 && num%11==0){
console.log('divisible by only 11')
}
else{
    console.log('kisi se nhi divisible')
}
console.log(222 === '222');
console.log(222 == '222');

console.log(4^2);
console.log(25**0.5);


let name = "omkar";
let hobby = "coding";
console.log(`My name is ${name} and my hobby is ${hobby}`)
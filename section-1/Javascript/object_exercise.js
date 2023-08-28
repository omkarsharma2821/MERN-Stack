const smartphoneList = [
    { brand : 'Redmi', model : 'Note 11', price : 14000, colors : ['white', 'blue'] },
    { brand : 'Samsung', model : 'M31', price : 12000, colors : ['white', 'blue', 'black'] },
    { brand : 'Realme', model : '8', price : 13000, colors : ['black', 'yellow'] },
    { brand : 'Oppo', model : 'F19', price : 17000, colors : ['blue', 'black', 'red'] },
    { brand : 'Vivo', model : 'V20', price : 20000, colors : ['black', 'red', 'green'] }
];

// wap a program to create an array of 

const brands = smartphoneList.map((phone) => {return phone.brand}); //phone have object data type
console.log(brands);

const colors = smartphoneList.map((color) => {return color.colors[0]}); //color is object data type and it is parameter
console.log(colors);

const prices = smartphoneList.filter((phone) => {return phone.price<15000}); 
console.log(prices);

let search = 'samsung';
const match = smartphoneList.filter((phone) => {return phone.brand.toLowerCase() === search.toLowerCase()}); 
console.log(match);
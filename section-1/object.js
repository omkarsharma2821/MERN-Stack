const user = {
    name : 'Raju',
    email : 'raju@gmail.com',
    age : 56
};
console.log(user);
console.log(user.age);
console.log(user.email);

console.log(user['name']);

user.address = 'Lucknow';
user.age = 57;
console.log(user);

const smartphone = {
    brand : 'Redmi',
    model : 'Note 11',
    price : 1800,
    colors : ['white', 'blue']
};

console.log(smartphone.colors);
console.log(smartphone.colors[1]);
smartphone.colors.push('purple');
console.log(smartphone.colors)

const smartphoneList = [
    { brand : 'Redmi', model : 'Note 11', price : 18000, colors : ['white', 'blue'] },
    { brand : 'Samsung', model : 'M31', price : 19000, colors : ['white', 'blue', 'black'] },
    { brand : 'Realme', model : '8', price : 15000, colors : ['black', 'yellow'] },
    { brand : 'Oppo', model : 'F19', price : 17000, colors : ['blue', 'black', 'red'] },
    { brand : 'Vivo', model : 'V20', price : 20000, colors : ['black', 'red', 'green'] },
];
console.log(smartphoneList[0]);

console.log(smartphoneList[0].colors[1]);
smartphoneList[0].model = 'note 9';
console.log(smartphoneList[0]);


// WAP to get first name from an array of full names
const full_Names = ['Sachine Tendulakr', 
'Suresh Raina',
'Ravindra Jadeja',
'Rohit Sharma'
];

const first_names = full_Names.map( (full_Names) => {return full_Names.split(' ')[0]});
console.log("First Name :" , first_names);

console.log("<------------------------------------------------------------------>");

// WAP to filter name having length greater than 4.

const names = ['Sachin','Suresh','Ravindra','Rohit Sharma','ram','Tinku','riya'];
const filter_names = names.filter( (names) => {return names.length>4});
console.log("Names having lenght > 4 : " , filter_names);

const full_name_array = [
    {name : 'Sachine Tendulkar', profession : 'cricketer', citizen : 'indian'},
    {name : 'Suresh Raina', profession : 'cricketer', citizen : 'indian'},
    {name : 'Ravindra jadeja', profession : 'cricketer', citizen : 'indian'},
    {name : 'Rohit Sharma', profession : 'cricketer', citizen : 'indian'},
    {name : 'Yuvraj singh', profession : 'cricketer', citizen : 'indian'}
];
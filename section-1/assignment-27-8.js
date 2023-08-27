// approach 1 
const full_Names = ['Sachine Tendulakr', 
'Suresh Raina',
'Ravindra Jadeja',
'Rohit Sharma'
];

const first_names = full_Names.map( (full_Names) => {return full_Names.split(' ')[0]});
console.log("First Name :" , first_names);

// approch 2

const full_name_array = [
    {name : 'Sachine Tendulkar', profession : 'cricketer', citizen : 'indian'},
    {name : 'Suresh Raina', profession : 'cricketer', citizen : 'indian'},
    {name : 'Ravindra jadeja', profession : 'cricketer', citizen : 'indian'},
    {name : 'Rohit Sharma', profession : 'cricketer', citizen : 'indian'},
    {name : 'Yuvraj singh', profession : 'cricketer', citizen : 'indian'}
];
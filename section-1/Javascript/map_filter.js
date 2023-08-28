const nums = [2,5,20,8,3,4,7];

const ans = nums.map( (n) => {return n**2});  //call back function

// console.log(ans);

const ans2 = nums.filter((a) => {return a%2==0});
// console.log(ans2)

const prices = [625,100,77,384,274,405,899,1230];
const ans3 = prices.filter( (p) => {return p<500 && p>200});
// console.log(ans3);

const ans4 = prices.map( (p) => {return p+p*0.1 });
console.log(ans4);

const full_name_array = [
    {name : 'Sachine Tendulkar', profession : 'cricketer', citizen : 'indian'},
    {name : 'Suresh Raina', profession : 'cricketer', citizen : 'indian'},
    {name : 'Ravindra jadeja', profession : 'cricketer', citizen : 'indian'},
    {name : 'Rohit Sharma', profession : 'cricketer', citizen : 'indian'},
    {name : 'Yuvraj singh', profession : 'cricketer', citizen : 'indian'}
];

const firstWordsNested = [];
for(const full_name of full_name_array ){
        const firstWord = full_name.split(' ')[0];
        firstWordsNested.push(firstWord);
}
          
          console.log("First words (nested):", firstWordsNested);

// const First_names = user.map( (n) => {return user.name.split(' ')[0]});
// console.log(First_names);
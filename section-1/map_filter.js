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


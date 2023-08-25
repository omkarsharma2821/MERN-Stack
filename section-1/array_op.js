const nums = [23,24,225,2,5,2,5,1];
for(let i =0; i<nums.length; i++)
{
    console.log(nums[i]);
}

console.log('--------------------');

for(let i of nums)
{
    console.log(i);
}



// wap to print even 


for (let i=0; i<nums.length; i++)
    if(nums[i]%2===0){
    console.log(nums[i])}


const names = ['raju','ramu','bikram']

for (let i = 0; i<names.length; i++)
{
    console.log(names[i].toUpperCase());
}
// using function keyword
function addnum(a,b){
 var c = a+b;
console.log(c)
}
addnum(23,5);

// console.log(c)


// using function keyword and assignment operator

const getPercent = function(m1,m2,m3,m4=70)
{
    console.log(m1,m2,m3,m4)  // undefined rhega m4
    let total = m1+m2+m3+m4;
    let percent = total/4;
    console.log(percent);

    return percent;
}
 const result = getPercent(78,78,78,85);
 console.log(result);

//  arrow funtion

const fact = (n) =>{
    let f=1;
    for(let i=2; i<=n; i++)
    {
        f=f*i;
    }
    return f;
}

console.log(fact(5));
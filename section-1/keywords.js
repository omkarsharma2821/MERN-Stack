n  = 34;
let newMes = 'hehehe';

if(n%2 ===0){
    // local hai lekin globally access hai
    message = 'nice';
    // let message nhi print hoga bcoz local ho gya
    // let newMessage = 'wow';
    const pi = 3.14;

    // pi = 345.543;
    console.log('even');  
}
else{
    console.log('odd');
}

console.log(message);
// console.log(newMessage);
console.log(newMes);
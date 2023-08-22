a = 0;
b = 1;
c = 0;
for(let i = 0; i <= 10; i++)
{
    console.log(c);
    a = b; 
    b = c;
    c = a+b;
}

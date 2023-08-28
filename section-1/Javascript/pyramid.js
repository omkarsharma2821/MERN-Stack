// print space

i = 1;
n = 5;
space = n-i;
while(space){
    // console.log(space);
    // process.stdout.write(' ');
    document.write("&nbsp");
    space = space - 1;
}

// print 2nd triangle

j = 1;
while(j<=1)
{
    // process.stdout.write('*');
    document.write("* ");
    j = j+1;
}



// print 3rd triangle
start = i-1;
while(start){
console.log(start);
start = start - 1;
}

console.log("/n");
i = i+1;
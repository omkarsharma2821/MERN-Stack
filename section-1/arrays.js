const movies = ['KGf', 'RRR', 'fastx', 'tubelight', 'dil','barbie'];

console.log(movies.length);

console.log(movies[4]);
console.log(movies[5]);

console.log(movies.at(-2)); // also work for string
console.log(movies.slice(2,5));

// adding

movies.push('dangal');
movies.unshift('chachi 420');

console.log(movies);

// removing

movies.pop(); // remove from end
movies.shift(); // remove from start

console.log(movies);

movies.splice(3, 2);

console.log(movies);


let nums = [34 , 12, 65, 18, 89, 23, 29];
movies.splice(3,3);
console.log(nums);
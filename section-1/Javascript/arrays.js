const movies = ['KGf', 'RRR', 'fastx', 'tubelight', 'dil','barbie'];

console.log(movies.length);

console.log(movies[4]);
console.log(movies[5]);

console.log(movies.at(-2)); // also work for string
console.log(movies.slice(2,5));

// adding

// movies.push('dangal');
movies.unshift('chachi 420');

console.log(movies);

// removing

movies.pop(); // remove from end
movies.shift(); // remove from start

console.log(movies);

movies.splice(2, 3);

console.log(movies);


let nums = [34 , 12, 65, 18, 89, 23, 29];
nums.splice(3,3);
console.log(nums);

console.log(...movies); //spread operator included in ES6
console.log(['first', ...movies, 'last']); // add new element in the array without modifying the original array 

console.log([...movies.slice(0,2), movies.at(-2)]);
/*
In this little assignment you are given a string of space separated numbers, 
and have to return the highest and lowest number.

*/
const highAndLow=numbers=>{
const nums=numbers.split(' ')
return `${Math.max(...nums)} ${Math.min(...nums)}
`
}

console.log(highAndLow('1 2 3 4 5'))
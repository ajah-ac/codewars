function isogram(word){
const newset=[...new Set(word)]
return word===newset.join("")
}
console.log(isogram('Dermatoglyphics'))
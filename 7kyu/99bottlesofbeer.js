/*Complete the function that returns the lyrics for the song 99 Bottles of Beer as an array of strings: each line should be a separate element - see the example at the bottom.

Note: in order to avoid hardcoded solutions, the size of your code is limited to 1000 characters
*/
const sing = function () {
  let sentence = [];
  for (let i = 99; i >= 0; i--) {
    if (i === 0) {
      sentence.push(`No more bottles of beer on the wall, no more bottles of beer.`)
      sentence.push(`Go to the store and buy some more, 99 bottles of beer on the wall.`)
    } else if (i === 1) {
      sentence.push(`1 bottle of beer on the wall, 1 bottle of beer.`)
      sentence.push(`Take one down and pass it around, no more bottles of beer on the wall.`)
    } else {
      sentence.push(`${i} bottles of beer on the wall, ${i} bottles of beer.`)
      sentence.push(`Take one down and pass it around, ${i - 1} ${i - 1 === 1 ? 'bottle' : 'bottles'} of beer on the wall.`);
    }
  }
  return sentence;
};


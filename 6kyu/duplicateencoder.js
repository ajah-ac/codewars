/*The goal of this exercise is to convert a string to a new string where each character in the new string is
 "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("  */
const duplicateEncode=str=> {
  const string = str.toLowerCase();
  const obj = {};

  for (const char of string) {
    obj[char] = (obj[char] || 0) + 1;
  }

  return string.split('').map(char => obj[char] > 1 ? ')' : '(').join('');
}

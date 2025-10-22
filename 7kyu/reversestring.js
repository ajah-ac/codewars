/*Unfortunately, there's no a .reverse() method for the JavaScript String object.

Your task is to extend JavaScript String object, so you can reverse strings just like this:

'Hello, World!'.reverse();
The method should return:

'!dlroW ,olleH' */
String.prototype.reverse=function(){
  const y= [...this]
  const x=[]
while(y.length>0)
  x.push(y.pop())
  return x.join('')
}
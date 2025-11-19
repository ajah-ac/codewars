/*Write a function that sums squares of numbers in list that may contain more lists
Example:

var l = [1,2,3]
SumSquares(l) == 14
summ
var l = [[1,2],3]
SumSquares(l) == 14

var l = [[[[[[[[[1]]]]]]]]]
SumSquares(l) == 1

var l = [10,[[10],10],[10]]
SumSquares(l) == 400
Note: your solution must NOT modify the original list */
function SumSquares(l){
    return l.flat(Infinity).map(num=>num**2).reduce((a,c)=>a+c,0)
}
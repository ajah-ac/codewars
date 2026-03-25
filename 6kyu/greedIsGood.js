/* Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
Each of 5 dice can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
Note: your solution must not modify the input array. */function score( dice ) {
  const dices=dice.reduce((a,c)=>{
    a[c]=(a[c] ||0)+1
    return a
  },{})
  const x=[]
  for(let die in dices){
    const count=dices[die]
    if(count>=3){
      switch(die){
          case '1':
          x.push(1000)
          break;
        case '2':
          x.push(200)
          break;
        case '3':
          x.push(300)
          ;break
          case '4':
          x.push(400)
          break;
        case '5':
          x.push(500)
          break;
        case '6':
          x.push(600)
          break;
      }
      const remainder=count-3;
      if(die==='1')x.push(100*remainder)
       if(die==='5')x.push(50*remainder)

  
    }
    
    else {  
      if(die==='1')x.push( dices[die]*100)
       if(die==='5')x.push(dices[die]*50)}   
}
  
return x.reduce((a,c)=>a+c,0)
  
}
console.log(score([1,3,3,4,3,5]))
const processData=data=>{
        let y=[]
for(let x of data){
   y.push(x[0]-x[1])
}
return y.reduce((a,b)=>a *b,1)
}
console.log(processData([[2, 5], [3, 4], [8, 7]]));
//, 3, `For [[2, 5], [3, 4], [8, 7]]`
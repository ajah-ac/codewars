const firstNonConsecutive =arr=> {
    const x=[];
  for(let i=1;i<arr.length;i++)
    if(arr[i]-arr[i-1]!==1 && arr[1]-arr[i+1]!==1)
      x.push(arr[i]) 

 return x.length===0?null:x[0]
}
console.log(firstNonConsecutive([1,2,3,4,6]))
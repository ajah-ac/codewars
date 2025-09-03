const duplicateCount=text=>{
  text=text.toLowerCase()
  const maps= new Map()
  
  for(let char of text){
    maps.set(char,(maps.get(char)||0)+1)
  }
  let x=[];
  for(let [key,count] of maps){
    if(count>1)
      x.push(key)
  }
  return x.length
}


const x=new Promise((resolve,reject)=>{
  resolve=true
  if(!resolve)
    console.log('resolved successfulyy')
  else
    console.log('rejected')
}
)
x.then
const generatePairs=n=> {
  const z=[]
  for(let i=0;i<=n;i++)
  for(let j=i;j<=n;j++)
    z.push([i,j])
return z
}
console.log(generatorPairs())
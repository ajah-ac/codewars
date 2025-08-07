function openOrSenior(data){
return data.map(y=>{ return y =(y[0]>=55 && (y[1] >7))?'Senior':'Open'}) 
}
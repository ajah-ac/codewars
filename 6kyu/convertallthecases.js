function camel(word){

word=word.replace(/[_-]/g,' ')
    let x=''
    for(let i=0;i<word.length;i++)
    {
        if(word[i-1]!==' ')
          x+=word[i]  ;
        else 
            { x+=(word[i]).toUpperCase()}
    }
return x.split(' ').join('')
}
console.log(camel('some-lisp_name'))
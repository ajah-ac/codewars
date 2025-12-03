/*
You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Examples:*/function longestConsec(strarr, k) {
let y=''
  for(let i=0;i<=strarr.length-k;i++){
    const x=strarr.slice(i,i+k).join('')
if(y.length<x.length)
  y=x
    }
return y}
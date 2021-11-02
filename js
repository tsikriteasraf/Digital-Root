function digital_root(n) {
  let temp=n.toString().split("");
  let sum=[];
  for(j=0;j<temp.length;j++){
  sum.push(parseInt(temp[j]));
  }  
  console.log(sum);
  let res=[];
  let i=1;
    res[0]=sum.reduce((a,b)=>a+b,0);
      while(res[i-1].toString().length>1){
        res[i]=res[i-1].toString().split("").reduce((a,b)=>parseInt(a)+parseInt(b),0);
        i++;
      }
        return res[res.length-1]; 
      }
      
      let digitalRoot=digital_root(166747576457);
console.log(digitalRoot);

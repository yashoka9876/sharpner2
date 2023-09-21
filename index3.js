N=2;
K=3;


function fun(str){
    let s='';
    let i=0;
    let j=0;
    while(j!=str.length){
        let p=j;
        if(p!=0){
            s+=str[p-1]
            if(s.length==K){
                return s;
            }
            p--;
        }
        s+=str[j];
    }
}


console.log(fun("abc"));










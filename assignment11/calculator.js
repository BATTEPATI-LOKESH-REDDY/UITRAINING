const calculator=new Object();
calculator={
    add:function(a,b){
        console.log(a+b);
    },
    sub:function(a,b){
        console.log(a-b);
    },
    mul:function(a,b){
        console.log(a*b);
    },
    divison:function(a,b){
        console.log(a/b);
    }


}
a=10;
b=3;
calculator.add(a,b);
calculator.sub(a,b);
calculator.mul(a,b);
calculator.divison(a,b);
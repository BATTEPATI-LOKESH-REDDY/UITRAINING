
        //play with variables
        console.log(1+2);
        console.log("apple"+"orange");
        console.log(1+2+"apple");
        console.log("apple"+1+2);
        console.log(1+true);
        console.log(0==false);
        console.log(1===true);
        console.log(2=="2");

        //play with arrays
        const crtArray=["ravi","lokesh","bhuvana","virat","ragu","kamalesh","naveen","sathi","ram","srikanth","ninjin"];
        crtArray.pop();
        
    
        console.log(crtArray);
        console.log(crtArray.length);
        crtArray.unshift("vaishnavi");
        console.log(crtArray);
        crtArray.sort();
        console.log(crtArray);
        ranArray=[]
        count=0;
        for(;;){
            b=Math.floor(Math.random()*1000);
            if(!(ranArray.includes(b))){
                ranArray.push(b);
                count=count+1;
                
            }
            if(count==11){
                break;
            }
        }
        console.log(ranArray);
        
        clnArray=[]
        for(i=0;i<crtArray.length;i++){
            clnArray.push(crtArray[i].toUpperCase());
            console.log(clnArray[i]+"-"+ranArray[i]);
        }
        //playing with fucntions
        function numbers(a,b){
            for(i=a;i<=b;i++)console.log(i);
        }
        function padTo2Digits(num) {
            return num.toString().padStart(2, '0');
          }
        function todayDate(){
            var today = new Date();
            var DD = today.getDate();
            var MM= padTo2Digits(today.getMonth()+1);
            var YY = padTo2Digits(today.getFullYear());
    
            console.log(DD+"/"+MM+"/"+YY);
        
    }
        function celtofar(c){
            console.log("celsius to farenheat:"+((c*1.8)+32));

        }
        function avgofnum(x){
            sum=0
            for(i=0;i<x.length;i++){
                sum=sum+x[i];
            }
            console.log("average of array:"+(sum/x.length));
        
        }
        function StringRev(name1){
            s=""
            for(i=name1.length-1;i>=0;i--){
                s+=name1[i];
                

            }
            console.log("Reverse of a string:"+s);

        }
        numbers(1,100);
        todayDate();
        celtofar(30);
        var x=[1,2,3,4,5]
        avgofnum(x);
        name1="lokesh"
        StringRev(name1);


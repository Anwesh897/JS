
///First Approach
/*function upperCase(n){
   
    /*console.log(n.split('')[1]);
    console.log(n.split('')[2]);
    console.log(n.split('')[3].charAt(0).toUpperCase());
    console.log(n.split('')[4]);
    console.log(n.split('')[5]);*/


   /* var stepFirst_1 = n.split('')[0].charAt(0).toUpperCase();      //to capitalize the first character
    var stepFirst_2 = n.split('').slice(1,-10).join('');              ///first word before space  right to left
    var concatenate_1 = stepFirst_1+stepFirst_2;    ///(slice(x,y)  y counting is from reverse 
    //console.log(concatenate_1);                   /////untill '' black space is reached) then stop
     
    var stepSecond_1 = n.split('')[3].charAt(0).toUpperCase();      /////identifying word after space to execute this operation
    var stapSecond_2 = n.split('').slice(4,-6).join('');             ////slice the letter which is being caplitalized
    var concatenate_2 = stepSecond_1+stapSecond_2;
    //console.log(concatenate_2);

    var stepThird_1 = n.split('')[7].charAt(0).toUpperCase();    ////special case if the caplitalising letter is the last word
    var stepThird_2 = n.split('').slice(8).join('');             ///// slice (x,y) has to be slice(x) where
    var concatenate_3 = stepThird_1+stepThird_2;                   //// x is the slicing letter which is being caplitalized
    //console.log(concatenate_3);

    console.log(concatenate_1+concatenate_2+concatenate_3);      ///concatenate all the results from steps.
}
upperCase('do not gentle');*/


//Second Approach identifying spaces in string
/*function space(n){
    for(i=0;i<=n.split('').length;i++){
        if(n.split('')[i] == ''){
            var storage_1 = n.split('')[i+1].charAt(0).toupperCase();
            var storage_2 = n.split('').slice(i+2,-)
        }
    }
}
console.log(space('a b c d'));*/



///Third Approach
/*function capital(n){
    
    function beforeSpace(){
        for(i=0;i<=n.split('').length;i++){
            if(n.split('')[i] == ' '){      ///if space detected loop reverse untill another space is found  'STEP_1'
                for(j=1;j<n.split('').length;j++){
                    if(n.split('')[i-j] == ''){  /// STEP_2 after another space is found print 'STEP_2 to STEP_1'
                        for(k=0;k<=n.split('')[i][i-j];k++){
                            console.log(n.split('')[k]);
                        }
                    }
                    //console.log(n.split('')[i-j]);
                }
                //console.log(n.split('')[i-2].split());
                //console.log(n.split('')[i-1].split());
            }
            
        }
    }beforeSpace();
    /*function afterSpace(){
        for(i=0;i<=n.split('').length;i++){
            if(n.split('')[i] == ' '){break;}
                console.log(n.split('')[i+1]);
                console.log(n.split('')[i+2]);
                console.log(n.split('')[i+3]);
            //}
        }
    }afterSpace();*/
    
        
    
    
//}
//console.log(capital('do not'));*/


///Fourth approach

/*function caplital(n){
    function beforeSpace(){
        for(i=0;i<n.split('').length;i++){
            if(n.split('')[i] == ' '){       ////if space is found in array reverse loop untill another space is found..!
              for(j=0;j<n.split('').length;j--){
                  if(n.split('')[j] == ' '){
                      for(k=0;k<n.split('').length;k++){
                          if(n.split('')[j]<n.split[i]){
                              console.log(n.split('')[j]);
                              j++;
                          }
                      }
                  }
              }          
            }
        }
    }beforeSpace();
    
    
}
caplital('do not go');*/



///Fifth Approach
/*function capital(n){
    for(i=0;i<n.split('').length;i++){
        if(n.split('')[i] == ' ' /*|| n.split('')[i] == n.split('')[i])*///){
            /*return n.split('')[i+1].toUpperCase().split();
        }
    }

}
console.log(capital('do not go'));*/


//Sixth Approach
/*function capital(n){
    for(i=0;i<n.split('').length;i++){
        if(n.split('')[i] == ' '){
            console.log(n.split('')[i+1]);
        }
    }
}
capital('do not go');*/




//////All Approach failed
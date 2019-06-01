//First approach
/*function combination(){
    var n = document.getElementById('input').value;   ////alteration from here
    var para = document.createElement('p');
    var node = document.createTextNode(n.split('').slice(0,1).toString());
    para.appendChild(node);
    var element = document.getElementById('id01');
    element.appendChild(para);
    var para_1 = document.createElement('p');
    var node_1 = document.createTextNode(n.split('').slice(0,2).toString());
    para_1.appendChild(node_1);
    var element_1 = document.getElementById('id01');
    element_1.appendChild(para_1);                   ///// till here
    /*console.log(n.split('').slice(0,1).toString()); 
    console.log(n.split('').slice(0,2).toString());
    console.log(n.split('').slice(0,3).toString());
    console.log(n.split('').slice(1,2).toString());
    console.log(n.split('').slice(1,3).toString());
    console.log(n.split('').slice(2,3).toString());*/
//}
//combination('dog');

//Second approach too loop thru console.log();
/*function combination(){
    /*var n= document.getElementById('input').value;          /////alteration from here
    function append_1(){
        for(i=1;i<=n.split('').length;i++){
            var para_i = document.createElement('p');
            var node_i = document.createTextNode(n.split('').slice(0,i).toString());
            para_i.appendChild(node_i);
            var element_i = document.getElementById('id01');
            element_i.appendChild(para_i);
        }
    }append_1();
    function append_2(){
        for(i=2;i<=n.split('').length;i++){
            var para_i = document.createElement('p');
            var node_i = document.createTextNode(n.split('').slice(1,i).toString());
            para_i.appendChild(node_i);
            var element_i = document.getElementById('id01');
            element_i.appendChild(para_i);
        }
    }append_2();
    function append_3(){
        for(i=3;i<=n.split('').length;i++){
            var para_i = document.createElement('p');
            var node_i = document.createTextNode(n.split('').slice(2,i).toString());
            para_i.appendChild(node_i);
            var element_i = document.getElementById('id01');
            element_i.appendChild(para_i);
        }
    }append_3();   */                                           /////////    till here
    /*function step_1(){     //here changing element is 'i'
        for(i=1;i<=n.split('').length;i++){
            console.log(n.split('').slice(0,i).toString());
        }
    }step_1();
    function step_2(){    //as the function goes by 'i' increases and also slice(x,y) 'x' increases 'x' depends on step no.
        for(i=2;i<=n.split('').length;i++){
            console.log(n.split('').slice(1,i).toString());
        }
    }step_2();
    function step_3(){
        for(i=3;i<=n.split('').length;i++){
            console.log(n.split('').slice(2,i).toString());
        }
    }step_3();*/
    
//}
//combination('dog');


//Third approach too loop thru the function()       //Actual program//
function combination(){
    var n = document.getElementById('input').value;
    if(n.split('').length > 200){
        alert('Word limit exceeded..!');
    }
    else{
    for(i=1;i<=n.split('').length;i++){
        function append_i(){
            for(j=1;j<=n.split('').length;j++){
                var para_j = document.createElement('p');
                var node_j = document.createTextNode(n.split('').slice(i-1,j).toString());
                para_j.appendChild(node_j);
                var element_j = document.getElementById('id01');
                element_j.appendChild(para_j);
            }
        }append_i();
    }
}
    /*for(i=1;i<=n.split('').length;i++){
        function step_i(){
            for(j=1;j<=n.split('').length;j++){
                console.log(n.split('').slice(i-1,j).toString());
            }
        }step_i()
    }*/
}
//combination('dog');



//Fourth approach too print the above in a browser
/*function combination(){
    var n = document.getElementById('input').value;    ///problem is unable to print all the possible combination
    for(i=1;i<=n.split('').length;i++){                /// need to use append method to do it
        function step_i(){
            for(j=1;j<=n.split('').length;j++){
                document.getElementById('id01').innerHTML=n.split('').slice(i-1,j).toString();

            }
        }step_i()
    }
}


//Append method testing
function append(){
    var para=document.createElement('p');    ///as i go on clicking the button the 'p' element is created with text embeded as ' This is append'
    var node=document.createTextNode(document.getElementById('id01').innerHTML=n.split('').slice(j-1,i).toString());
    para.appendChild(node);
    var element=document.getElementById('id01');
    element.appendChild(para);
}append();*/






/*function combination(){ 
   var n=document.getElementById('input').value;
   for(j=1;j<=n.split('').length;j++){
   function step_j(){
       for(i=1;i<=n.split('').length;i++){
          //document.getElementById('id01').innerHTML=n.split('').slice(j-1,i).toString();
          var para = document.createElement('p');
          var node = document.createTextNode(document.getElementById('id01').innerHTML=n.split('').slice(j-1,i).toString());
          para.appendChild(node);
          var element = document.getElementById('id01');
          element.appendChild(para);
       }
   }step_j();
}
}*/


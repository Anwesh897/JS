function rev(){
    var n = document.getElementById('input').value;
   // x=x+'';
   if(n.split('').length > 180){
       alert('Word limit exceeded..!');
   }
   else{
    document.getElementById('id01').innerHTML=n.split('').reverse().join('');
   }
   
}




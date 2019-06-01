function palindrome(){
    var n= document.getElementById('input').value;
    function makeArray(n){
        n=n.split('').map(function(v){
            return v.toLowerCase();
        });
        
        return n;
    }
    function reverseArray(n){
        n=n.split('').reverse().map(function(v){
            return v.toLowerCase();
        });
        return n
    }
    for(i=0;i<makeArray.length;i++){
        if(makeArray(n)[i] == reverseArray(n)[i]){
            console.log(document.getElementById('id01').innerHTML='palindrome');
        }
        else{
            console.log(document.getElementById('id01').innerHTML='not a palindrome');
        }
    }
}

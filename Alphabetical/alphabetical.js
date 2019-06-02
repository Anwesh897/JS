function alphabetical(){
    var n = document.getElementById('input').value;
    document.getElementById('id01').innerHTML=n.split('').sort().join('');
}alphabetical();

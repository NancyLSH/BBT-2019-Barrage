$(document).ready(function(){
console.log("hhh")
$.post("http://111.230.183.100/barrage/record.php",function(res){
    for(i=0;i<res.length;i++){
        console.log(res[i][0])
    }
})    
})

function open_close()
{
    src = document.getElementById("barrage_button").getAttribute("src");
    if(src == './picture/5-1.png'){
        document.getElementById("barrage_button").src='./picture/5-2.png'
    }else{
        document.getElementById("barrage_button").src='./picture/5-1.png'
    }
   // button.src="./picture/5-1.png"?button.src="./picture/5-2.png": button.src="./picture/5-1.png"     
}
function input(){
    var text = $("#textinput").val();
    
}
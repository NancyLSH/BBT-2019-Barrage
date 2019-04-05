

function open_close()
{
    src = document.getElementById("barrage_button").getAttribute("src");
    if(src == './picture/5-1.png'){
        document.getElementById("barrage_button").src='./picture/5-2.png';
        $(".barrage").css("visibility","hidden");
    }else{
        document.getElementById("barrage_button").src='./picture/5-1.png';
        $(".barrage").css("visibility","visible");
    }
   // button.src="./picture/5-1.png"?button.src="./picture/5-2.png": button.src="./picture/5-1.png"     
}

function messaction(ppp) {
    ppp.addClass("changmessage");
}

function messstop(ppp) {
    ppp.remove();
}

function pushtext(){
    var message=$("#textinput").val();
    if(message.length>0){
        $(".barrage").append("<div class='barragetext'>"+message+"</div>");
        $("#textinput").val("");
        var ppp= $(".barragetext").last();        
        setTimeout(function(){
            messaction(ppp);
        },0);
        setTimeout(function(){
            messstop(ppp);
        },8000);
    }
};


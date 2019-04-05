var socket = new WebSocket("ws://echo.websocket.org")
//const socket = new WebSocket('ws://localhost:80');
var message = $("#textinput").val()
var username = "username"

socket.onopen = function () {
    console.log("WebSocket is open now.");
};

function btn() {
    var message = $("#textinput").val();
    if (message.length > 0) {
        socket.send({
            "username": username,
            "message": message
        });
        socket.onmessage = function (data) {
            if (data.errcode == 0) {                //成功发送
                mesend();
            } if(data.errcode == 1) {                //未登录用户
                $("#textinput").val("");
                alert("您还未登录噢")
            }if(data.errcode == 2){                //敏感词过滤
                $("#textinput").val("");
                alert("想清楚再发")
            }
        }
    } else {
        alert("donnt have message")
    }
};

socket.onmessage = function(data){
    var name = data.username
    var mess = data.message
    $("#com_part").append("<p class='head name'>" + name + "</p>" + "<p class='introtext comm'>" + mess +"</p>")
}
function open_close() {
    src = document.getElementById("barrage_button").getAttribute("src");
    if (src == './picture/5-1.png') {
        document.getElementById("barrage_button").src = './picture/5-2.png';
        $(".barrage").css("visibility", "hidden");
    } else {
        document.getElementById("barrage_button").src = './picture/5-1.png';
        $(".barrage").css("visibility", "visible");
    }
    // button.src="./picture/5-1.png"?button.src="./picture/5-2.png": button.src="./picture/5-1.png"     
}

function messaction(ppp) {
    ppp.addClass("changmessage");
}

function messstop(ppp) {
    ppp.remove();
}

function mesend() {
    $(".barrage").append("<div class='barragetext'>" + message + "</div>");
    $("#textinput").val("");
    var ppp = $(".barragetext").last();
    setTimeout(function () {
        messaction(ppp);
    }, 0);
    setTimeout(function () {
        messstop(ppp);
    }, 8000);
}
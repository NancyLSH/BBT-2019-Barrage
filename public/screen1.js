var usrid;
$.ajax({
    url:"http://111.230.183.100/barrage/username.php",
    type:"get",
    data:"",
    dataType:"json",
    xhrFields: {
        withCredentials: true
    },
    crossDomain: true,
    contentType: "application/x-www-form-urlencoded",
        success:function(res){
        var usrname = res.data.username;
        var usrid = res.data.userID;              //ID传不出去很难受
    },
    error:function(res){
        console.log(res.msg)
    }
})

function height(t, e, n) {
    if (t == 1) {
        e.css("height", window.innerHeight * n)
    } else {
        e.css("width", window.innerWidth * n)
    }
}

function display(e, n) {
    if (n == 1) {
        e.css("display", "none")
    }
    if (n == 2) {
        e.css("display", "flex")
    }
    if (n == 3) {
        e.css("display", "block")
    }
}

$(document).ready(function () {
    height(1, $(".background"), 0.33)
    height(1, $(".barrage"), 0.27)
    height(1, $(".line"), 0.02)
    height(1, $(".circle"), 0.02)
    
	var	Img = $("#barrage_button");
    var onOff = true;
    Img.click(function(){
		if(onOff){
            Img.attr('src','./public/picture/5-2.png');
            $(".barrage").css("visibility", "hidden");
			onOff = false;	
		}else{
            Img.attr('src','./public/picture/5-1.png');
            $(".barrage").css("visibility", "visible");
            onOff = true;	
        }
    })
    $("#choose").click(function(){
        display($(".select"),3)
        var bkh = $(".background").css("height")
        $(".select").css("height",bkh)
        $(".container").css("z-index", "-3")
    })

})

//websocket模块

var wsServer = 'ws://111.230.183.100:9501';
var socket = new WebSocket(wsServer);

socket.onopen = function () {
    console.log("WebSocket is open now.");
};

socket.onmessage = function (data) {
    console.log(data)                        //???
    console.log(JSON.parse(data.data).data)
    mesend(JSON.parse(data.data).data, type,m)
}

//发送弹幕模块

var type = 3
var m = 9

function btn(e) {
    //  e.preventDefault()
    var message = $("#textinput").val();
    if (message.length > 0) {
        var data = {"record":message,"userID":usrid}
        socket.send(JSON.stringify(data))
        console.log("send")
    } else {
        console.log("don't have message.")
    }
};

function messaction(ppp) {
    ppp.addClass("movetext");
    $(".movetext").css("order", Math.floor(Math.random() * 5));
}

function messstop(ppp) {
    ppp.remove();
}

function mesend(message,n,m) {
    console.log(m)
    col = "#eeeeee";
    switch(m){
        case 1:col = "#e51c23";
        break;
        case 2:col = "#ff8c00";
        break;
        case 3:col = "#ffeb3b";
        break;
        case 4:col = "#009688";
        break;
        case 5:col = "#259b24";
        break;
        case 6:col = "#5677fc";
        break;
        case 7:col =  "#3f51b5";
        break;
        case 8:col = "#9c27b0";
        break;
        case 9:col = "#eeeeee";
        break;
        default:col = "#eeeeee";
        break;
    }
    $(".barrage").append("<div style='color:" + col + ";' class = 'barragetext'>" + message + "</div>");
    $("#textinput").val("");
    $("#textinput_b").val("");
    var ppp = $(".barragetext").last();               
    if (n == 3) {
        setTimeout(function () {
            messaction(ppp);
        }, -2);
        setTimeout(function () {
            messstop(ppp);
        }, 8000);
    }
    if (n == 1) {
        setTimeout(function () {
            ppp.addClass("uptext")
            ppp.addClass("flex")
        }, -2);
        setTimeout(function () {
            messstop(ppp);
        }, 8000);
    }
    if (n == 2) {
        setTimeout(function () {
            ppp.addClass("downtext")
            ppp.addClass("flex")
        }, -2);
        setTimeout(function () {
            messstop(ppp);
        }, 8000);
    }
}


//改变颜色和位置
var colorid = ["red", "yellow", "orange", "green1", "green2", "blue1", "blue2", "purple", "white"];
var imgurl = ["url(./public/picture/4-5.png)", "url(./public/picture/4-7.png)",
    "url(./public/picture/4-6.png)", "url(./public/picture/4-8.png)",
    "url(./public/picture/4-9.png)", "url(./public/picture/4-10.png)",
    "url(./public/picture/4-11.png)", "url(./public/picture/4-12.png)",
    "url(./public/picture/4-13.png)"
];

function changeimg() {
    for (var i in colorid) {
        // console.log(colorid[i]);
        document.getElementById(colorid[i]).style.backgroundImage = imgurl[i];
        // console.log(imgurl[i]);
    }
}

function color(e, u) {
    e.css("background-image", "url(" + u + ")");
}

function changeindex() {
    $(".select").css("display","none")
    $(".container").css("z-index", "0")
}
$(function () {
    $("#red").click(function () {
        m=1;
        changeimg();
        color($(".red"), "./public/picture/7-7.png");
        changeindex()
    });
    $("#orange").click(function () {
        m=2;
        changeimg();
        color($("#orange"), "./public/picture/7-4.png");
        changeindex()
    })
    $("#yellow").click(function () {
        m=3;
        changeimg();
        color($('#yellow'), "./public/picture/7-12.png");
        changeindex()
    })
    $("#green1").click(function () {
        m=4;
        changeimg();
        color($("#green1"), "./public/picture/7-10.png");
        changeindex()
    })
    $("#green2").click(function () {
        m=5;
        changeimg();
        color($("#green2"), "./public/picture/7-8.png");
        changeindex()
    })
    $("#blue1").click(function () {
        m=6;
        changeimg();
        color($("#blue1"), "./public/picture/7-9.png");
        changeindex()
    })
    $("#blue2").click(function () {
        m=7;
        changeimg();
        color($("#blue2"), "./public/picture/7-11.png");
        changeindex()
    })
    $("#purple").click(function () {
        m=8
        changeimg();
        color($("#purple"), "./public/picture/7-6.png");
        changeindex()
    })
    $("#white").click(function () {
        m=9;
        changeimg();
        color($("#white"), "./public/picture/7-5.png");
        changeindex()
    })
    $("#up").click(function () {
        type = 1
        $(".barragetext").addClass("flex")
        $(".barragetext").addClass("uptext")
        $(".barragetext").removeClass("downtext")
        $(".barrage").css("flex-direction", "column")
        color($("#up"), "./public/picture/7-1.png")
        $("#down").css("background-image", "url(./public/picture/4-3.png)")
        $("#move").css("background-image", "url(./public/picture/4-4.png)")
        changeindex()
    })
    $("#down").click(function () {
        type = 2
        $(".barrage").css("flex-direction", "column-reverse")
        $(".barragetext").addClass("downtext")
        $(".barragetext").addClass("flex")
        $(".barragetext").removeClass("uptext")
        color($("#down"), "./public/picture/7-2.png")
        $("#move").css("background-image", "url(./public/picture/4-4.png)")
        $("#up").css("background-image", "url(./public/picture/4-2.png)")
        changeindex()
    })
    $("#move").click(function () {
        type = 3
        $(".barrage").css("flex-direction", "column")
        $(".barragetext").removeClass("downtext")
        $(".barragetext").removeClass("uptext")
        $(".barragetext").removeClass("flex")
        color($("#move"), "./public/picture/7-3.png")
        $("#up").css("background-image", "url(./public/picture/4-2.png)")
        $("#down").css("background-image", "url(./public/picture/4-3.png)")
        changeindex()
    })
})
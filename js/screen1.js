var socket = new WebSocket("ws://localhost:8080")
message = $("#textinput").val()
message_ = $("#textinput_b").val()
var type = 3

function height(t, e, n) {
    if (t == 1) {
        e.css("height", document.body.clientHeight * n)
    } else {
        e.css("width", document.body.clientWidth * n)
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
    height(1, $(".background"), 0.42)
    height(2, $(".return"), 0.25)
    height(1, $(".return"), 0.4 * 0.23)
    height(1, $(".barrage"), 0.27)
    height(1, $(".pause"), 0.30 * 0.25)
    height(1, $(".line"), 0.02)
    height(1, $(".circle"), 0.02)
    $(".pause").css("width", document.body.clientHeight * 0.26 * 0.23)
})

window.onorientationchange = function () {
    switch (window.orientation) {
        case -90:
        case 90:
            display($(".select"), 3)
            $(".select").css("visibility", "hidden")
            display($(".intro"), 1)
            display($("#push"), 1)
            display($(".comment"), 1)
            display($(".fullscreen"), 1)
            $("#long").after("<input type='text' id='textinput_b' class='kuang img_background1 kuang_b' placeholder='    发个友善的弹幕哈皮一下吧~'>" +
                "<input type='button' id='button_b' class='button img_background1' style='width:55px;' onclick='btn_b()'>");
            display($(".buttom"), 2)
            $("#button_b").css("margin-right", "0")
            $("#textinput_b").css("margin-left", "0")
            $(".title").css("margin-right", "-3%")
            height(1, $(".background"), 1)
            height(1,$(".barrage"),0.75)
            $(".return").css("margin-left", "-3%")
            break;
        case 0:
        case 180:
            $("#textinput_b").remove()
            $("#button_b").remove()
            $("#button_b").remove()
            display($(".select"), 1)
            display($(".intro"), 2)
            display($(".comment"), 3)
            display($("#push"), 2)
            display($(".fullscreen"), 3)
            $(".title").css("margin-right", "12%")
            height(1, $(".background"), 0.42)
            height(1, $(".barrage"), 0.27)
            $(".return").css("margin-left", "3%")
            //alert("我想竖了")
            break;
    }
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
    ppp.addClass("movetext");
    $(".movetext").css("order", Math.floor(Math.random() * 5));
}

function messstop(ppp) {
    ppp.remove();
}

function mesend(message,n) {
    $(".barrage").append("<div class='barragetext'>" + message + "</div>");
    $("#textinput").val("");
    $("#textinput_b").val("");
    var ppp = $(".barragetext").last();
    if(n == 3){
    setTimeout(function () {
        messaction(ppp);
    }, -2);
    setTimeout(function () {
        messstop(ppp);
    }, 8000);
    }if(n == 1){
        setTimeout(function () {
            ppp.addClass("uptext")
            ppp.addClass("flex")
        }, -2);
        setTimeout(function () {
            messstop(ppp);
        }, 8000);    
    }if(n == 2){
        setTimeout(function () {
            ppp.addClass("downtext")
            ppp.addClass("flex")
        }, -2);
        setTimeout(function () {
            messstop(ppp);
        }, 8000);    
    }
}




socket.onopen = function () {
    console.log("WebSocket is open now.");
};

function btn_b() {
  //  alert(type)
    var message_ = $("#textinput_b").val();
    if (message_.length > 0) {
        //     socket.send({
        //         "username": username,
        //         "message": message,
        //     });

        // socket.onmessage = function (data) {
        // if (data.errcode == 0) { //成功发送
        mesend(message_,type)
       // alert("发送成功")
        // }
        // if (data.errcode == 1) { //未登录用户
        // $("#textinput").val("");
        // alert("您还未登录噢")
        // } else { //敏感词过滤
        // $("#textinput").val("");
        // alert("想清楚再发")
        // }
        // }
    } else {
        alert("donnt have message")
    }
}

function btn() {
    //alert(type)
    var message = $("#textinput").val();
    if (message.length > 0) {
        //     socket.send({
        //         "username": username,
        //         "message": message,
        //     });

        // socket.onmessage = function (data) {
        // if (data.errcode == 0) { //成功发送
        mesend(message,type)
       // alert("发送成功")
        // }
        // if (data.errcode == 1) { //未登录用户
        // $("#textinput").val("");
        // alert("您还未登录噢")
        // } else { //敏感词过滤
        // $("#textinput").val("");
        // alert("想清楚再发")

        // }
        // }
    } else {
        alert("donnt have message")
    }
};

socket.onmessage = function (data) {
    var name = data.username
    var mess = data.message
    var time = data.time
    var id = data.id
    $(".contain").append("<div id='com_usr" + id + "' class='com_usr'>" + "<input type='image' class='imghead' src='./picture/画板5-头像组.png' style='width:100px;'></div>")
    $("#com_sur" + id).append("<div id='com_part" + id + "' class='com_part'>" + "<p class='head name'>" + name + "</p>" + "<p class='introtext comm'>" + mess + "</p>" +
        "<p class='time'>" + time + "</p></div>")
}

function color(e, u) {
    e.css("background-image", "url(" + u + ")");
}

$(function () {
    $("#choose").click(function () {
        $(".select").css("visibility", "visible")
        $(".container").css("z-index", "-3")
    });

    $("#red").click(function () {
        $(".barrage").css("color", "#e51c23");
        color($(".red"), "./picture/画板7-选中红.png");
        $("#yellow").css("background-image", "url(./picture/画板4-黄.png)");
        $("#green1").css("background-image", "url(./picture/画板4-青.png)");
        $("#green2").css("background-image", "url(./picture/画板4-绿.png)");
        $("#blue1").css("background-image", "url(./picture/画板4-靛.png)");
        $("#blue2").css("background-image", "url(./picture/画板4-蓝.png)");
        $("#purple").css("background-image", "url(./picture/画板4-紫.png)");
        $("#white").css("background-image", "url(./picture/画板4-白.png)");
        $("#orange").css("background-image", "url(./picture/画板4-橙.png)");
        $(".select").css("visibility", "hidden")
        $(".container").css("z-index", "0")
    });
    $("#orange").click(function () {
        $(".barrage").css("color", "#ff8c00");
        color($("#orange"), "./picture/画板7-选中橙.png");
        $("#yellow").css("background-image", "url(./picture/画板4-黄.png)");
        $("#green1").css("background-image", "url(./picture/画板4-青.png)");
        $("#green2").css("background-image", "url(./picture/画板4-绿.png)");
        $("#blue1").css("background-image", "url(./picture/画板4-靛.png)");
        $("#blue2").css("background-image", "url(./picture/画板4-蓝.png)");
        $("#purple").css("background-image", "url(./picture/画板4-紫.png)");
        $("#white").css("background-image", "url(./picture/画板4-白.png)");
        $("#red").css("background-image", "url(./picture/画板4-红.png)");
        $(".select").css("visibility", "hidden")
        $(".container").css("z-index", "0")
    })
    $("#yellow").click(function () {
        $(".barrage").css("color", "#ffeb3b");
        color($("#yellow"), "./picture/画板7-选中黄.png");
        $("#green1").css("background-image", "url(./picture/画板4-青.png)");
        $("#green2").css("background-image", "url(./picture/画板4-绿.png)");
        $("#blue1").css("background-image", "url(./picture/画板4-靛.png)");
        $("#blue2").css("background-image", "url(./picture/画板4-蓝.png)");
        $("#purple").css("background-image", "url(./picture/画板4-紫.png)");
        $("#white").css("background-image", "url(./picture/画板4-白.png)");
        $("#orange").css("background-image", "url(./picture/画板4-橙.png)");
        $("#red").css("background-image", "url(./picture/画板4-红.png)");
        $(".select").css("visibility", "hidden")
        $(".container").css("z-index", "0")
    })
    $("#green1").click(function () {
        $(".barrage").css("color", "#009688");
        color($("#green1"), "./picture/画板7-选中青.png");
        $("#green2").css("background-image", "url(./picture/画板4-绿.png)");
        $("#blue1").css("background-image", "url(./picture/画板4-靛.png)");
        $("#blue2").css("background-image", "url(./picture/画板4-蓝.png)");
        $("#purple").css("background-image", "url(./picture/画板4-紫.png)");
        $("#white").css("background-image", "url(./picture/画板4-白.png)");
        $("#orange").css("background-image", "url(./picture/画板4-橙.png)");
        $("#red").css("background-image", "url(./picture/画板4-红.png)");
        $("#yellow").css("background-image", "url(./picture/画板4-黄.png)");
        $(".select").css("visibility", "hidden")
        $(".container").css("z-index", "0")
    })
    $("#green2").click(function () {
        $(".barrage").css("color", "#259b24");
        color($("#green2"), "./picture/画板7-选中绿.png");
        $("#blue1").css("background-image", "url(./picture/画板4-靛.png)");
        $("#blue2").css("background-image", "url(./picture/画板4-蓝.png)");
        $("#purple").css("background-image", "url(./picture/画板4-紫.png)");
        $("#white").css("background-image", "url(./picture/画板4-白.png)");
        $("#orange").css("background-image", "url(./picture/画板4-橙.png)");
        $("#red").css("background-image", "url(./picture/画板4-红.png)");
        $("#yellow").css("background-image", "url(./picture/画板4-黄.png)");
        $("#green1").css("background-image", "url(./picture/画板4-青.png)");
        $(".select").css("visibility", "hidden")
        $(".container").css("z-index", "0")
    })
    $("#blue1").click(function () {
        $(".barrage").css("color", "#5677fc");
        color($("#blue1"), "./picture/画板7-选中靛.png");
        $("#blue2").css("background-image", "url(./picture/画板4-蓝.png)");
        $("#purple").css("background-image", "url(./picture/画板4-紫.png)");
        $("#white").css("background-image", "url(./picture/画板4-白.png)");
        $("#orange").css("background-image", "url(./picture/画板4-橙.png)");
        $("#red").css("background-image", "url(./picture/画板4-红.png)");
        $("#yellow").css("background-image", "url(./picture/画板4-黄.png)");
        $("#green1").css("background-image", "url(./picture/画板4-青.png)");
        $("#green2").css("background-image", "url(./picture/画板4-绿.png)");
        $(".select").css("visibility", "hidden")
        $(".container").css("z-index", "0")
    })
    $("#blue2").click(function () {
        $(".barrage").css("color", "#3f51b5");
        color($("#blue2"), "./picture/画板7-选中蓝.png");
        $("#purple").css("background-image", "url(./picture/画板4-紫.png)");
        $("#white").css("background-image", "url(./picture/画板4-白.png)");
        $("#orange").css("background-image", "url(./picture/画板4-橙.png)");
        $("#red").css("background-image", "url(./picture/画板4-红.png)");
        $("#yellow").css("background-image", "url(./picture/画板4-黄.png)");
        $("#green1").css("background-image", "url(./picture/画板4-青.png)");
        $("#green2").css("background-image", "url(./picture/画板4-绿.png)");
        $("#blue1").css("background-image", "url(./picture/画板4-靛.png)");
        $(".select").css("visibility", "hidden")
        $(".container").css("z-index", "0")
    })
    $("#purple").click(function () {
        $(".barrage").css("color", "#9c27b0");
        color($("#purple"), "./picture/画板7-选中紫.png");
        $("#white").css("background-image", "url(./picture/画板4-白.png)");
        $("#orange").css("background-image", "url(./picture/画板4-橙.png)");
        $("#red").css("background-image", "url(./picture/画板4-红.png)");
        $("#yellow").css("background-image", "url(./picture/画板4-黄.png)");
        $("#green1").css("background-image", "url(./picture/画板4-青.png)");
        $("#green2").css("background-image", "url(./picture/画板4-绿.png)");
        $("#blue1").css("background-image", "url(./picture/画板4-靛.png)");
        $("#blue2").css("background-image", "url(./picture/画板4-蓝.png)");
        $(".select").css("visibility", "hidden")
        $(".container").css("z-index", "0")
    })
    $("#white").click(function () {
        $(".barrage").css("color", "#eeeeee");
        color($("#white"), "./picture/画板7-选中白.png");
        $("#orange").css("background-image", "url(./picture/画板4-橙.png)");
        $("#red").css("background-image", "url(./picture/画板4-红.png)");
        $("#yellow").css("background-image", "url(./picture/画板4-黄.png)");
        $("#green1").css("background-image", "url(./picture/画板4-青.png)");
        $("#green2").css("background-image", "url(./picture/画板4-绿.png)");
        $("#blue1").css("background-image", "url(./picture/画板4-靛.png)");
        $("#blue2").css("background-image", "url(./picture/画板4-蓝.png)");
        $("#purple").css("background-image", "url(./picture/画板4-紫.png)");
        $(".select").css("visibility", "hidden")
        $(".container").css("z-index", "0")
    })
    $("#up").click(function () {
        type = 1
        $(".barragetext").addClass("flex")
        $(".barragetext").addClass("uptext")
        $(".barragetext").removeClass("downtext")
        $(".barrage").css("flex-direction", "column")
        color($("#up"), "./picture/画板7-选中弹幕上方效果.png")
        $("#down").css("background-image", "url(./picture/画板4-弹幕下方效果.png)")
        $("#move").css("background-image", "url(./picture/画板4-弹幕滚动效果.png)")
        $(".select").css("visibility", "hidden")
        $(".container").css("z-index", "0")
     //   alert(type)
    })
    $("#down").click(function () {
        type = 2
        $(".barrage").css("flex-direction", "column-reverse")
        $(".barragetext").addClass("downtext")
        $(".barragetext").addClass("flex")
        $(".barragetext").removeClass("uptext")
        color($("#down"), "./picture/画板7-选中弹幕下方效果.png")
        $("#move").css("background-image", "url(./picture/画板4-弹幕滚动效果.png)")
        $("#up").css("background-image", "url(./picture/画板4-弹幕上方效果.png)")
        $(".select").css("visibility", "hidden")
        $(".container").css("z-index", "0")
      //  alert(type)
    })
    $("#move").click(function () {
        type = 3
        $(".barrage").css("flex-direction", "column")
        $(".barragetext").removeClass("downtext")
        $(".barragetext").removeClass("uptext")
        $(".barragetext").removeClass("flex")
        color($("#move"), "./picture/画板7-选中弹幕滚动效果.png")
        $("#up").css("background-image", "url(./picture/画板4-弹幕上方效果.png)")
        $("#down").css("background-image", "url(./picture/画板4-弹幕下方效果.png)")
        $(".select").css("visibility", "hidden")
        $(".container").css("z-index", "0")
       // alert(type)
    })
})
//alert(type)

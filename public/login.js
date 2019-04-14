
function btn() {
    $(".signup").css("display","none");
    $(".signin").css("display","block");
}
function btn_(){
    $(".signin").css("display","none");
    $(".signup").css("display","block");
}
$(function(){
    $("#signin").click(function(e){
        e.preventDefault()
        var name = $("#name").val();
        var pwd = $("#password").val();
        $.ajax({
            url:"http://111.230.183.100/barrage/login.php",
            type:"post",
            data:{"username":name,"password":pwd},
            dataType:"json",
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            contentType: "application/x-www-form-urlencoded",
        success:function(data){
            if(data.errcode != 0){
                $(".errmsg").html("");
                $(".errmsg").css("display","block");
                $(".errmsg").append(data.msg);
            }else{
                window.location.href = ("http://134.175.124.192/BBT-2019-Barrage/index.html");
            }
        }})
    })

    $("#signup").click(function(e){
        e.preventDefault();
        var name = $("#siname").val()
        var pwd = $("#sipwd").val()
        var agpwd = $("#agpwd").val()
        $.ajax({
            url:"http://111.230.183.100/barrage/register.php",
            type:"post",
            data:{"username":name,"password":pwd,"checkpwd":agpwd},
            dataType:"json",
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            contentType: "application/x-www-form-urlencoded",
        success:function(data){
            if(data.errcode != 0){
                $(".errmsg").html("");
                $(".errmsg").css("display","block");
                $(".errmsg").append(data.msg);
            }else{
                window.location.href = ("http://134.175.124.192/BBT-2019-Barrage/index.html");
            }
        }})    
    })    
})

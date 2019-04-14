var width = window.innerWidth;
var height = window.innerHeight;
function btn() {
    $(".signup").css("display","none");
    $(".signin").css("display","block");
    $(".sign").css("-webkit-box-shadow","none")
    $(".login").css("-webkit-box-shadow"," 0 0 11px rgba(44, 44, 44, 0.781)");
}
function btn_(){
    $(".signin").css("display","none");
    $(".signup").css("display","block");
    $(".login").css("-webkit-box-shadow","none")
    $(".sign").css("-webkit-box-shadow"," 0 0 11px rgba(44, 44, 44, 0.781)");
}
$(function(){
    $(".contain").css("height",height*0.32)
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

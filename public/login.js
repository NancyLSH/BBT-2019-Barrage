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
        $.post("http://111.230.183.100/barrage/register.php",{"username":name,"password":pwd},function (data) { 
            if(data.errcode != 0){
                $(".errmsg").html("");
                $(".errmsg").css("display","block");
                $(".errmsg").append(data.msg);
            }else{
                window.location("http://localhost:8080/BBT-2019-Barrage/index.html");
            }
         })
    })
    $("#signup").click(function(e){
        e.preventDefault();
        var name = $("#siname").val()
        var pwd = $("#sipwd").val()
        var agpwd = $("#agpwd").val()
        $.post("http://111.230.183.100/barrage/register.php",{"username":name,"password":pwd,"checkpwd":agpwd},function(data){
            if(data.errcode != 0){
                $(".errmsg").html("");
                $(".errmsg").css("display","block");
                $(".errmsg").append(data.msg);
            }else{
                window.location("http://localhost:8080/BBT-2019-Barrage/index.html")
            }
        })
    })    
})

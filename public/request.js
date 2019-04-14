$(document).ready(function(){
console.log("hhh")
$.get("http://111.230.183.100/barrage/record.php",function(res){
    for(i=0;i<res.length;i++){
        console.log(res[i]["time"])
        $("#contain").append("<div id='" + res[i]["id"] + "' class='com_usr flex'>" + "<input type='image' class='imghead' src='./public/picture/5-15.png' style='width:35%'></div>")
        $("#" + res[i]["id"]).append("<div class='column flex' id='com_part'>" + "<p class='head name'>" + res[i]["username"] + "</p>" + "<p class='introtext comm'>" + res[i]["record"] + "</p>"+
        "<p class='time'>" + res[i]["time"] + "</p></div>" )
    }
})
$("#query").click(function(){
    var key = $("#query_input").val();
    $.post("http://111.230.183.100/barrage/keySearch.php",{"key":key},function(res){
        for(i=0;i<res.length;i++){
            $("#contain").append("<div id=" + res[i]["id"] + "class='com_usr'>" + "<input type='image' class='imghead' src='./public/picture/5-15.png' style='width:100px;'></div>")
            $("#" + res[i]["id"]).append("<div class='com_part'>" + "<p class='head name'>" + res[i]["username"] + "</p>" + "<p class='introtext comm'>" + res[i]["record"] + "</p>"+
            "<p class='time'>" + res[i]["time"] + "</p></div>" )
        }
        })
})   
})






let op = "";
let temp = "";

$(document).ready(function(){
    $(".in").click(function(e){
        if(e.target.value == "+" || e.target.value == "-" || e.target.value == "X" || e.target.value == "/"){
            operation(e.target.value);
        }
        else if(e.target.value == "="){
            cal();
        }
        else{
            $("#output").text($("#output").text() + e.target.value);
        }
    })
    function operation(o){
        op = o;
        temp = $("#output").text();
        $("#output").text("");
        $("#minioutput").text(temp + op);
    }
    function cal(){
        $("#minioutput").text($("#minioutput").text() + $("#output").text() + "=");
        switch(op){
            case "+":
                $("#output").text(parseFloat(temp) + parseFloat($("#output").text()));
                break;
            case "-":
                $("#output").text(parseFloat(temp) - parseFloat($("#output").text()));
                break;
            case "*":
                $("#output").text(parseFloat(temp) * parseFloat($("#output").text()));
                break;
            case "/":
                $("#output").text(parseFloat(temp) / parseFloat($("#output").text()));
                break;
        }
    }
    $(".cls").click(function(e){
        if(e.target.innerText == "CS"){
            $("#output").text("");
            $("#minioutput").text("");
        }
        else{
            $("#output").text($("#output").text().slice(0,($("#output").text().length - 1)));
        }
    });
})


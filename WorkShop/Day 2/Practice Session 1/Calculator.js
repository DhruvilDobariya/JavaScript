function add(n){
    document.getElementById("output").innerHTML += n;
}
function operation(a){
    first = document.getElementById("output").innerHTML;
    document.getElementById("output").innerHTML = "";
    miniScreen(first);
    temp = a;
    miniScreen(temp);
    
}
function cal(){
    second = document.getElementById("output").innerHTML;
    miniScreen(second);
    miniScreen("=");
    switch(temp){
        case '+':
            document.getElementById("output").innerHTML = parseFloat(first) + parseFloat(second);
            break;
        case '-':
            document.getElementById("output").innerHTML = parseFloat(first) - parseFloat(second);
            break;
        case '*':
            document.getElementById("output").innerHTML = parseFloat(first) * parseFloat(second);
            break;
        case '/':
            document.getElementById("output").innerHTML = parseFloat(first) / parseFloat(second);
            break;
    }
}
function screen(s){
    if(s == "CS"){
        document.getElementById("output").innerHTML = "";
        document.getElementById("minioutput").innerHTML = "";
    }
    else{
        document.getElementById("output").innerHTML = document.getElementById("output").innerHTML.substring(0,document.getElementById("output").innerHTML.length - 1);
    }
}
function miniScreen(m){
    document.getElementById("minioutput").innerHTML += m;
}
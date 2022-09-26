function myFunction(e){
    var x = e.target
    if(x.value != ""){
        x.classList.add("is-valid");
        x.classList.remove("is-invalid");
    }
    else{
        x.classList.add("is-invalid");
        x.classList.remove("is-valid");
    }
}
function submit(){

}
let id = ""
let Student = ""
$(document).ready(function(){ 
    getAllStudent();
    $("#submit").click(function(){
        if($(this).text() == "Submit"){
            postStudent();
        }
        else{
            putStudent(id);
        }
    })
    $("tbody").on("click",".delete",function(){
        deleteStudent($(this).parent().siblings().eq(1).text());
    })
    $("tbody").on("click",".edit",function(){
        Student = this;
        id = $(this).parent().siblings().eq(1).text();
        $($(".input")).each(function(i,value){
            $(value).val($(Student).parent().siblings().eq(i+2).text());     
        })
        $("#submit").text("Edit")
    })
})

function getAllStudent(){
    $.ajax({
        type : "GET",
        url : "http://localhost:8000/students",
        data : {},
        datatype : "json",
        header : {
        }
    }).done(function(json){
        $(json).each(function(i,value){
            $("tbody").append('<tr><th scope="row" class="no">'+(i+1)+'</th><td>'+value._id+'</td><td>'+value.Name+'</td><td>'+value.RollNo+'</td><td>'+value.Email+'</td><td>'+value.ContactNo+'</td><td class="d-flex justify-content-center"><button class="btn btn-success mx-2 edit"><i class="fas fa-user-edit"></i></button><button class="btn btn-danger mx-2 delete"><i class="fas fa-trash-alt"></i></i></button></td></tr>');
        })
    })
}

function getStudentById(id){
    console.log(id)
    $.ajax({
        type : "GET",
        url : "http://localhost:8000/student/" + id,
        data : {},
        datatype : "json",
        header : {
        }
    }).done(function(json){
        console.log(json)
    })
}

function postStudent(){
    $.ajax({
        url:"http://localhost:8000/students",
        data: JSON.stringify({
            Name : $(".input").eq(0).val(),
            RollNo : $(".input").eq(1).val(),
            Email : $(".input").eq(2).val(),
            ContactNo : $(".input").eq(3).val()
        }),
        contentType: 'application/json', // When we use post and put mathod then we give contextType : 'application/json'.
        type:"POST",
        dataType: "html"
    }).done(function(res){
        console.log(res);
        $("#form").trigger("reset");
        $(".input").eq(0).focus();
        $("tbody").html("");
        getAllStudent();
    })
}

function putStudent(id){
    $.ajax({
        type: "PUT",
        url: "http://localhost:8000/student/" + id,
        data : JSON.stringify({
            Name : $(".input").eq(0).val(),
            RollNo : $(".input").eq(1).val(),
            Email : $(".input").eq(2).val(),
            ContactNo : $(".input").eq(3).val()
        }),
        contentType: "application/json",
        dataType: "html"
    }).done(function(res){
        console.log(res);
        $("#form").trigger("reset");
        $("#submit").text("Submit");
        $(".input").eq(0).focus();
        $("tbody").html("");
        getAllStudent();
    })
}

function deleteStudent(id){
    $.ajax({
        type : "DELETE",
        url : "http://localhost:8000/student/" + id,
        data : {},
        datatype : "json",
        header : {
        }
    }).done(function(){
        $("tbody").html("");
        getAllStudent();
    })
}

student = [];
a = "";
$(document).ready(function(){
    $("#submit").click(function(){
        if($("#submit").text() == "Submit"){
            let i = 0;
            $(".form-control").each(function(){
                student[i] = $(this).val();
                $(this).val("");
                i++;
            });
            $("tbody").append('<tr><th scope="row" class="no">'+($(".no").length+1)+'</th><td>'+student[0]+'</td><td>'+student[1]+'</td><td class="d-flex justify-content-center"><button class="btn btn-success mx-2 edit"><i class="fas fa-user-edit"></i></button><button class="btn btn-danger mx-2 delete"><i class="fas fa-trash-alt"></i></button></td></tr>');
        }
        else{
            let i = 1;
            $(".form-control").each(function(){
                student[i] = $(this).val();
                $(this).val("");
                i++;
            });
            i = 0;
            a.each(function(){
                if(i < 3){
                    $(this).text(student[i]);
                }
                else{
                    $(this).html(student[i]);
                }
                i++;
            });
            alert("Edited Successfully!");
            $("#submit").text("Submit");
        }
    });
    $("tbody").on("click",".delete",function(){
        $(this).parent().parent().hide();
    });
    $("tbody").on("click",".edit",function(){
        $("#submit").text("Edit");
        a = $(this).parent().parent().children();
        let i = 0;
        a.each(function(){
            if(i < 3){
                student[i] = $(this).text();
            }
            else{
                student[i] = $(this).html();
            }
            i++;
        });
        i = 1;
        $(".form-control").each(function(){
            $(this).val(student[i]);
            i++;
        });
    });
});
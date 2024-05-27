$(document).ready(function(){


    $('.btn-eliminar').on('click', function(e){
e.preventDefault();
if(confirm("Estas seguro que desea eliminar este pokemon")){
$("#form-delete").submit();
}
    });

    $('#btn-eliminar1').hasClass('btn-eliminar').on('click', function(e){
        e.preventDefault();
        if(confirm("Estas seguro que desea eliminar esta region")){
        $("#form-delete1").submit();
        }
            });

            $('#btn-eliminar2').on('click', function(e){
                e.preventDefault();
                if(confirm("Estas seguro que desea eliminar este pokemon")){
                $("#form-delete2").submit();
                }
                    });
})
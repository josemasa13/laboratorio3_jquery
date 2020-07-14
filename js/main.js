$("#todoCreator").on('click', function(e){
    e.preventDefault();
    var todoText = $("#todoText").val();
    $("#todoContainer").append('<input type = "checkbox" name="todo">' + todoText + '<br>');
})

$('#todoMarker').on('click', function(e){
    e.preventDefault();
    var todos = $('input[name="todo"]');
    todos.each(function(){
        $( this ).prop('checked',true);
    });
})

$('#todoCleaner').on('click', function(e){
    e.preventDefault();
    var todos = $('input[name="todo"]')
    todos.each(function(){
        $( this ).prop('checked',false);
    });
})

$('#todoEraser').on('click', function(e){
    e.preventDefault();
    $( "#todoContainer" ).html("");
})

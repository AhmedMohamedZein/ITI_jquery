var remove = $(".remove");
var done = $(".done");

var done_button = '<button type="button" class="done">&#10004;</button>';
var del_button = '<button type="button" class="remove"> &#10006;</button>';

function del () {
    $(this).parent().remove();
}

function doneTask () {
    $(this).parent().find("span").css({"background-color":"#285430"});
}


done.one('click', doneTask);
remove.one('click', del);
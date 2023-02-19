// var remove = $(".remove");
// var done = $(".done");
var add = $("#Add");
var getContainer = $(".tasks-container") ;

function del () {
    $(this).parent().remove();
}

function doneTask () {
    $(this).parent().find("span").css({"background-color":"#285430"});
}

function add_task () {
    getContainer = $(".tasks-container") ;
    var getText = $('input[alt="addTask"]').val();
    var text = `<span>${getText}</span>`;
    var done_button = '<button type="button" class="done">&#10004;</button>';
    var del_button = '<button type="button" class="remove"> &#10006;</button>';
    
    getContainer.append('<div></div>'); 
    var lastAppendedChild = getContainer.children().last();

    lastAppendedChild.append(text);
    lastAppendedChild.append(done_button);
    lastAppendedChild.append(del_button);
    
}

// Delegation, fire this event on the elements that have .done class and .remove class
getContainer.on('click','.done', doneTask);
getContainer.on('click','.remove', del);

add.on('click', add_task);
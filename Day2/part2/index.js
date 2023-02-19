$( "#draggable" ).draggable();

$( "#droppable" ).droppable({
    drop: function( event, ui ) {
      $( this )
        .parent()
        .find( "#draggable" ).fadeOut(2000);
    }
  });
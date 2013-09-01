window.addEventListener('load', eventWindowLoaded, false);
var undo_element = $('path[class="colorable"]')[0];
var undo_to_color = "white";	
function eventWindowLoaded() {
   add_coloring_book_events();
}
function add_coloring_book_events() {
    $('path[class="colorable"]').bind("click", function(event) {
	event.preventDefault();
	undo_element = this;
	undo_to_color = $(this).attr("fill");
	$('#undo_redo').attr("value", "Atras");
	color_chosen = $("#color_chosen").html();
        $(this).attr("fill", color_chosen); 
    });
    $('.color_choice').bind("click", function(event) {
       color_chosen = $(this).attr("id");
       $("#color_chosen").html(color_chosen); 
    });
    $('#reset_image').bind("click", function(event) {
	$('path[class="colorable"]').attr("fill", "white");
	$('#undo_redo').attr("value", "Atras");
	undo_element = $('path[class="colorable"]')[0];
	undo_to_color = "white";
    });
    $('#undo_redo').bind("click", function(event) {
	existing_color = $(undo_element).attr("fill");
	$(undo_element).attr("fill", undo_to_color);
	undo_to_color = existing_color;
	if ($(this).attr("value") == "Atras") {
	    $(this).attr("value", "Adelante");
	} else {
	    $(this).attr("value", "Atras");
	}
    });
}

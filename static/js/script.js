
$("h1 i").click(function(){
	$(".slide").slideToggle();
});

document.getElementById("task_input").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            document.getElementById("task_form").submit();
        }
    });

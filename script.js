(function($) {

    $(document).ready(function() {

		var sendButton = $("#button");
		
		var list = $("<ul id='lista'></ul>");
		
		sendButton.on("click", function(){
			
			$.ajax({
			url: "https://jsonplaceholder.typicode.com/users",
			method: "GET",
			success: function(data, status, jqXHR){
				$.each(data, function(i, obj){
					var name = "<li><span class='name'>"+obj.name+", </span><span class='userName'>"+obj.username+", </span><span class='email'>"+obj.email+"</span></li>";
					list.append(name);
				});
				
			},
			error: function(jqXHR, status, errorThrow){
				console.log("error");
			},
			complete: function(jqXHR, status){
				console.log("status: "+status);
			},
		});
			
		});
		
		$("body").append(list);
		


    });

})(jQuery);
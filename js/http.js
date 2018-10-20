// get & post with ajax
var http = (function (){
	return {
		get: function(){
			$.ajax({
				type: 'GET',
				url: '/json',
				contentType: "application/json; charset=utf-8",
				success: function(data) {			
					console.log('http get',data);
				},
			});
		},
		post: function(data){
			$.ajax({
				type: 'POST',
				url: '/',
				contentType: "application/json; charset=utf-8",
				dataType: 'json',
				data: JSON.stringify(data),
				success: function(data) {			
					console.log('http post',data);
				},
			});	
		}
	};
})();
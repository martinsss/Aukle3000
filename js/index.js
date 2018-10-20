


$(".n-find").click(function(){
	let $this = $(this), region = $(".n-region").val()
		, begindate = $(".n-date [name='beginningDate']").val()
		, begintime = $(".n-date [name='beginningTime']").val()
		, enddate = $(".n-date [name='endingDate']").val()
		, endtime = $(".n-date [name='endingTime']").val()
		, child_count = $(".n-child-count").val(), animal = $(".n-animal").val()
		, post = {region:region, begindate:begindate, begintime:begintime, enddate:enddate, endtime:endtime, 
			child_count:child_count, animal:animal};
	console.log("post", post);
	http.post(post);
});



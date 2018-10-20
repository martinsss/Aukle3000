


$(".n-find").click(function(){
	let $this = $(this), region = $(".n-region").val()
		, begindate = $(".n-begindate [name='beginningDate']").val()
		, begintime = $(".n-begindate [name='beginningTime']").val()
		, enddate = $(".n-begindate [name='endingDate']").val()
		, endtime = $(".n-begindate [name='endingTime']").val()
		, child_count = $(".n-child-count").val(), animal = $(".n-animal").val()
		, post = {region:region, begindate:begindate, begintime:begintime, enddate:enddate, endtime:endtime, 
			child_count:child_count, animal:animal};
	console.log("post", post);
	http.post(post);
});



d3.select('#animline')
	.on('click', function(){
	 	d3.select('#line').attr('class','animate');
	 	setTimeout(function(){d3.select('#line').attr('class','')}, 2000)
	})


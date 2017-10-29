d3.select('#animline')
	.on('click', function(){
	 	d3.select('#line').attr('class','animate');
	 	setTimeout(function(){d3.select('#line').attr('class','')}, 2000)
	})

d3.select('#animcirc')
	.on('click', function(){
	 	d3.select('#circle').attr('class','animate')
	 	setTimeout(function(){d3.select('#circle').attr('class','')}, 6000)
	})

d3.select('#animtick')
	.on('click', function(){
	 	d3.select('#tick').attr('class','animate')
	 	setTimeout(function(){d3.select('#tick').attr('class','')}, 2000)
	})

d3.select('#animnetwork')
	.on('click', function(){
	 	d3.select('#line1').attr('class','animate')
	 	d3.select('#line2').attr('class','animate')
	 	d3.select('#line3').attr('class','animate')
	 	setTimeout(function(){d3.select('#line1').attr('class','')}, 6000)
	 	setTimeout(function(){d3.select('#line2').attr('class','')}, 6000)
	 	setTimeout(function(){d3.select('#line3').attr('class','')}, 6000)
	})

d3.select('#animgraph')
	.on('click', function(){
	 	d3.select('#curve').attr('class','animate')
	 	setTimeout(function(){d3.select('#curve').attr('class','')}, 10000)
	})

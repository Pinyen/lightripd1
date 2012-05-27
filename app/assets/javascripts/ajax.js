(function($){
	$(document).ready(function(){
		$('#step3').click(function(){
			alert("Handler for .click() called.");
			$.ajax({
				type: 'GET',
				data: { attr1: $( "#amount" ).val(),
				 attr2: $( "#amount2" ).val(),
				 attr3: $( "#amount3" ).val(),
				 attr4: $( "#amount4" ).val(),
				 attr5: $( "#amount5" ).val()
				},
				//$( "#amount" ).html(),
				url: "http://localhost:3000/step3",
				datatype: 'json',
				success: function(data, textSatus){
					alert("ajax success");
					$(".firstpage").hide();//處裡消掉的東西
					$(".menu").hide();//嵌入body裡面會不會比較好
					$("#mySchedule").show();
					$("#buttonFrame").show();
					//$("li.block:even").append()
					//$('li.block:odd').append("<a href=javascript:lightbox('hahaha')>"+data['test']+"</a>");
					$('li.block:odd').append("<a href=javascript:lightbox('hahaha')>"+data+"</a>");
					console.log(data);
				}
			}
			);
		});
	});
})(jQuery);

(function($){
	$(document).ready(function(){
		$('#intro').click(function(){
			alert("Handler for .click() called.");
			$.ajax({
				type: 'GET',
				data: { attr1: $( "#amount" ).val(),
				 attr2: $( "#amount2" ).val(),
				 attr3: $( "#amount3" ).val(),
				 attr4: $( "#amount4" ).val(),
				 attr5: $( "#amount5" ).val()
				},
				//$( "#amount" ).html(),
				url: "http://localhost:3000/test_smart",
				datatype: 'json',
				success: function(data, textSatus){
					alert("ajax success");
					$(".firstpage").hide();//處裡消掉的東西
					$(".menu").hide();//嵌入body裡面會不會比較好
					$("#mySchedule").show();
					$("#buttonFrame").show();
					//$("li.block:even").append()
					//$('li.block:odd').append("<a href=javascript:lightbox('hahaha')>"+data['test']+"</a>");
					$('li.block:odd').append("<a href=javascript:lightbox('hahaha')>"+data+"</a>");
					console.log(data);
				}
			}
			);
		});
	});
})(jQuery);


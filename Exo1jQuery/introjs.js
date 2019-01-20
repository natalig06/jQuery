	function changement(){ 		
			$(".col50 ul").toggleClass("notype");
		}
	function changementTwo(){
			$(".col50 ul").toggleClass("notype"); 												
			$(".col100 ul").toggleClass("notype nopad");
		}
		       var str; 
		       var lorem = $(".division>p").text(); 
	function superfonction(){ 
			      console.log($("#testeur").val()); 
			            str = $("#testeur").val(); 
			switch (true){ 
				      case ((/(\boui\b)|(\bo\b)/i).test(str)): 
					  $(".division").addClass("bgvert"); 
					  console.log('bgvert');
					  break;
				      case ((/(\bnon\b)|(\bn\b)/i).test(str)): 
	             	  $(".division").addClass("bgred"); 
					  console.log('bgred'); 
					  break;
				      case ((/^[a-zA-Z0-9]{10,20}$/i).test(str)): 
					  $(".division>p").text(str); 
					  $(".division").removeClass("bgred");
					  $(".division").removeClass("bgvert");
					  console.log(lorem);
					  break;
				      case ((/[A-Z]{1}.{0,7}[0-9]{1}/).test(str)):
					  $("#extlink").text(str); 
					  $("#extlink").attr("href","https://fr.wikipedia.org/wiki/"+str); 
					  console.log("Test regex");
					  break;
			default:
					  $(".division").removeClass("bgred"); 
					  $(".division").removeClass("bgvert"); 
					  $(".division>p").text(lorem); 
					  break;
			} 
		}
$("#w3").attr("href","http://w3schools.com"); 
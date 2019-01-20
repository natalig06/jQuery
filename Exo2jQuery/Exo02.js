$( document ).ready(function() {
	    		$("#bloc1").on({	
	    			mouseenter:function(){
	    			$(this).removeClass("vert").addClass("bleu");	
	    		},mouseleave:function(){
	    			$(this).removeClass("bleu").addClass("vert");}
	    		});
	    		$("#champ1").on("keyup",(function(){
	    			 $("#para1").text($("#champ1").val());
	    		}));
	    		$(".bloc2").hover(function(){
	    			if ($.isNumeric($(this).text())) {	
	    				if ($(this).text()%2 == 0) {
	    					$(this).addClass("vert");
	    				}else{				
	    					$(this).addClass("rouge");
	    					}
	    				}else {
	    					$(this).addClass("bleu");
	    				}
	    			},function(){	
	    				$(this).removeClass("rouge vert bleu");
	    			});
	    		$("#btn").on("click",(function(){	
	    		var $tab = $(".bloc2");
	    		for(let i = 0; i < $tab.length; i++){	
		    		if ($.isNumeric($tab.eq(i).text())) {
		    			if ($tab.eq(i).text() % 2 == 0) {
		    				$("#result").html($("#result").html()+$tab.eq(i).text()+" = "+"Pair "+" <br> ");
		    			}
		    			else{
		    				$("#result").html( $("#result").html() +  $tab.eq(i).text() + " = " + "Impair " +  " <br> ");
		    			}
		    		}	
		    			else{
		    			$("#result").html($("#result").html()+  $tab.eq(i).text() + " = " + "chaine de caracteres " + " <br> ");
		    		}	
	    		}
	    		$("#btn").off();
	    	}));		

	    	});


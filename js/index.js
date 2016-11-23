// var leftsro = new IScroll("#left");
// var rightsro = new IScroll("#right")
;(function($){

	$("#foot").on("click","span",function(e){
		e.preventDefault();
		$(this).addClass("on").siblings().removeClass();
		var id = $(this).attr("data");
		//alert(id)
		$(id).css({
			"display" : "block"
		}).siblings().css({
			"display" : "none"
		})
	})
	
 
$(".gonglue").on("click","a",function(e){
		e.preventDefault();
	}).on("tap","a",function(){
		var that=$(this).attr("href");
		var id=$(this).attr("id");
		Handover(that,"#s1");
		Handover(that,"#s2");
		Handover(that,"#s3");
	})
	function Handover(that,ele){
		if(that==ele){
			$(ele).css({
				"display":"block"
			}).siblings().css({
				"display" : "none"
			})
		}
	}
	

	$("#s1").on("click","a",function(e){
				e.preventDefault();
			}).on("tap","a",function(e){
				var href = $(this).attr("href"); 
				var i=$(this).index();
		        $("#s1 nav>a").eq(i).addClass("as").siblings().removeClass("as");
		        $(".gongjiao").eq(i).css({
		        	"display":"block"
		        }).siblings().css({
				    "display" : "none"
			   })
		
		   }) 

	$("#s2").on("click","a",function(e){
				e.preventDefault();
			}).on("tap","a",function(e){
				var href = $(this).attr("href"); 
				var i=$(this).index();
		        $("#s2 nav>a").eq(i).addClass("as").siblings().removeClass("as");
		        $(".chiwan").eq(i).css({
		        	"display":"block"
		        }).siblings().css({
				    "display":"none"
			   })
		
		   }) 
			
   /*$("#box1 ul").hide();
      $("#box1 p").on("click",function(){
      	var src=$(this).find("img").attr("src")
         $(this).next("ul").show();
      	 
		/* $(this).next().slideDown().parent().siblings().find(".uls").slideUp() })*/
  
  $("p").on("click",function(){
  
        if($(this).next().is(":hidden")){
            $(this).find("em").removeClass("em").addClass("bg");
            $(this).next().show();
        }
        else{
            $(this).next().hide();
            $(this).find("em").removeClass("bg").addClass("em");
        }

        
    })
 $(".chang_img").on("click",function(){
 	$("#box3").hide();
    $("#box4").hide();
    $("#jiudian").show();
 });
 $("#dianji1").on("tap",function(e){
	
	$("#ditu1").show().siblings().hide();
		
}) 
 $("#dianji2").on("tap",function(e){
	
	$("#ditu2").show().siblings().hide();
		
}) 
$("#dianji3").on("tap",function(e){
	
	$("#ditu3").show().siblings().hide();
		
}) 
$(".dian").on("tap",function(){
	$("#jiudian").show();
	$("#ditu1").hide();
})
$(".dian2").on("tap",function(){
	$("#jiudian").show();
	$("#ditu2").hide();
})
$(".he").on("tap",function(){
	$("#s2").show();
	$("#s3").hide();
})
$(".center").on("tap","em",function(){
  
        if($(this).next().is(":hidden")){
         
            $(this).next().show();
        }
        else{
            $(this).next().hide();
            
        }

        
    })
})(Zepto);


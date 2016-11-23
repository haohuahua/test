;(function($){
	xuanran();
  function xuanran(){
 			$.ajax({
				url:"data.json",
				type:"get",
				datatype:"json",
				success:function(opt){
					pingjie(opt);
				}
				
             })
 			function pingjie(obj){
				$.each(obj.data,function(i,ele){
					var str="<a href='#s"+(i+1)+"'><img src="+ele.img+"></a>";
					$("#dong").append(str);
     				
				})
			}
 	}

   xuanran2();
  function xuanran2(){
 			$.ajax({
				url:"data.json",
				type:"get",
				datatype:"json",
				success:function(opt){
					pingjie2(opt);

				}
				
             })
 			function pingjie2(obj){
 				// console.log(obj.data[0].em)
				/*$.each(obj.data,function(i,ele){*/
					for(var i=0;i<obj.tab.length;i++){
                        var str="<div>"+
					"<em><img src='"+obj.tab[i].em+"'></em>"+
					"<b><img src='"+obj.tab[i].c+"'></b>"+
					"</div>";
					 $(".center").append(str);	
					}
					/*var str="<div>"+
					"<p><img src='"+ele[i].p+"'></p>"+
					"<b><img src='"+ele[i].b+"'></b>"+
					"</div>";*/
				
					
     				
				/*})*/
			}
 	}


})(Zepto);
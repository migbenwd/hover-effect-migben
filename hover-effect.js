jQuery(function($){
	
		var itemprox = document.querySelectorAll(".item-product.migben");
		var toty = itemprox.length;
		
		if ( toty > 0)
			
	{
		btn_ws = "<div class='flip-card-back'><div><div class='topetop'></div><p class='descrix'></p><a href='#'>Ver Más</a></div></div>"; 
		$(btn_ws).appendTo(".item-product");
		var elements = document.querySelectorAll(".flip-card-back a");
		var elements_p = document.querySelectorAll(".flip-card-back p");
		$('.item-product.migben').find('a:first').each(function(index, element) 
		{
			var texto_a = this.innerText;
			var hrefio = this.href;
			elements_p[index].innerHTML = texto_a;
			elements[index].href = hrefio;
		});
	
		
		let style = `<style>
		
		.topetop
		{
			margin-top:20%;
		}
		
		.descrix {
		   margin-top: 55px;
			position: absolute;
			width: 100%;
			height: 100%;
			color: white;
			font-size: 21px;
			margin-bottom: 22px;
		}
		.list-col-item {
		  background-color: transparent;
		  height:400px;
		  perspective: 200px;
		}
		.item-product {
		  position: relative;
		  height: 80%;
		  transition: transform 0.4s;
		  transform-style: preserve-3d;
		  
		}
		.list-col-item:hover .item-product {
		  transform: rotateY(180deg);
		}
		.item-product a
		{
		  position: absolute;
		  width: 100%;
		  height: 100%;
		  -webkit-backface-visibility: hidden;
		  backface-visibility: hidden;
		}

		
		.item-product h2
		{
		  margin-top:4px;
		}
		

		.flip-card-back
		{
		  position: absolute;
		  width: 100%;
		  height: 100%;
		  -webkit-backface-visibility: hidden;
		  backface-visibility: hidden;
		}
		.flip-card-back {
		  background-color:black;
		  color: white;
		  transform: rotateY(180deg);
		  text-align:center;
		}
		.flip-card-back a:hover
		{
			background:#000000;
			color:white;
			border: 1px solid white;
		}
		.flip-card-back a
		{
			position: relative;
			color: white;
			width: 99%;
			background: #ffd80a;
			padding: 7%;
			top: 115px;
			font-size: 25px;
			border-radius: 11px;  
		}
		

		@media (max-width: 480px) 
		{
			.list-col-item 
			{
				height:400px;
			}
			
			.list-col-item img
			{
				width:350px;
				height:340px;
			}

			
		}		
		
		
		
		
		</style>
		`;
			
		document.head.insertAdjacentHTML("beforeend", style);	
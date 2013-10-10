(function(){
  
  $(document).ready(function(){
  
       $('#search').click(function(){
                           var isbn = $('#input').val();
                           var html = '';
						   $('#put_here').html();
                                     
                             $.getJSON("https://www.googleapis.com/books/v1/volumes?q="+ isbn + "&key=AIzaSyApOf-hpK40eylVFgRUEEEFrvc9ohPKfOI", 
                                function(data) {                               
                                    
								$.each(data.items, function(i,name){
									
										$.each(data.items[i].volumeInfo, function(key,value){
											if ( key === 'industryIdentifiers' ) {
											   $.each(data.items[i].volumeInfo.industryIdentifiers, function(name,data_val){
													html = '<tr><td><b>'+key+'  '+data_val.type+'</b></td><td><i>'+data_val.identifier+'</i></td></tr>';
													$('#put_here').append(html);
												});
											} else if ( key === 'title' ) {
												html = '<tr><td colspan="2"><hr style="width: 100%;"></td></tr><tr><td><b>'+key+'</b></td><td><i>'+value+'</i></td></tr>';
												$('#put_here').append(html);
											} else {
												html = '<tr><td><b>'+key+'</b></td><td><i>'+value+'</i></td></tr>';
												$('#put_here').append(html);
											}                                    
											
										});
									
								});
                    
            });
        
       });
  
  });
  
})(jQuery);
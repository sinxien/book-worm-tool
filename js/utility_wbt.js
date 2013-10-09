(function(){
  
  $(document).ready(function(){
  
       $('#search').click(function(){
                           var isbn = $('#input').val();
//                           var api = $('#api').val();
                           var html = '';
                                     
                             $.getJSON("https://www.googleapis.com/books/v1/volumes?q="+ isbn + "&key=AIzaSyApOf-hpK40eylVFgRUEEEFrvc9ohPKfOI", 
                                function(data) {                               
                                    
                                $.each(data.items[0].volumeInfo, function(key,value){
                                    if ( key === 'industryIdentifiers' ) {
                                       $.each(data.items[0].volumeInfo.industryIdentifiers, function(name,data_val){
                                            html = '<tr><td><b>'+key+' -> '+data_val.type+'</b></td><td><i>'+data_val.identifier+'</i></td></tr>';
                                            $('#put_here').append(html);
                                        });
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
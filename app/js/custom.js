$(document).on('click','#loadArea',function(e){
    e.preventDefault();
    var content = $(this).data('content') || 0;
    $("#content").load("trips.html",{action:"getContent", content:content});
});
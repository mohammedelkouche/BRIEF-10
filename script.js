
// $(document).ready() 
// This is to prevent any jQuery code from running before the document is finished loading (is ready).

$(document).ready(function(){

    // jQuery methods go here...
    // jQuery AJAX Methods

    $.getJSON("phones.json",function(data){
        var info_data = data.phones ;
        console.log(info_data)
        var pushdata = "" ;
        $.each(info_data,function(key,value){
            console.log(value)
            pushdata += '<tr>';
            pushdata += '<td>'+value.ID+'</td>';
            pushdata += '<td>'+value.désignation+'</td>';
            pushdata += '<td>'+value.prix+'</td>';
            pushdata += '<td>'+value.catégorie+'</td>';
            pushdata += '<td>'+value.disponibilité+'</td>';
            pushdata += `<td><li>${value.fournisseur.Raison}</li><li>${value.Adresse}</li><td>`;

            pushdata += '</tr>';
        });
        $('#table').append(pushdata);
    });
})
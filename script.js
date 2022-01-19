
// $(document).ready() 
// This is to prevent any jQuery code from running before the document is finished loading (is ready).

$(document).ready(function(){

    // jQuery methods go here...
    // jQuery AJAX Methods

    // $.getJSON("phones.json",function(data){
    //     var info_data = data.phones ;
    //     console.log(info_data)
    //     var pushdata = "" ;
    //     $.each(info_data,function(key,value){
    //         console.log(key)
    //         pushdata += '<tr>';
    //         pushdata += '<td>'+value.ID+'</td>';
    //         pushdata += '<td>'+value.désignation+'</td>';
    //         pushdata += '<td>'+value.prix+'</td>';
    //         pushdata += '<td>'+value.catégorie+'</td>';
    //         pushdata += '<td>'+value.disponibilité+'</td>';
    //         pushdata += '<td><li>'+value.fournisseur.Raison+'</li>'+'<li>'+value.fournisseur.Adresse+'</li><td>';

    //         pushdata += '</tr>';
    //     });
    //     $('#table_body').append(pushdata);
    // });


    
    $.getJSON("phones.json",function(data){
        var info_data = data.phones ;
        console.log(info_data)
        var pushdata = "" ;
        $.each(info_data,function(key,value){
                    pushdata += `<tr>
                    <td>${value.ID}</td>
                    <td>${value.désignation}</td>
                    <td>${value.prix}</td>
                    <td>${value.catégorie}</td>
                    <td>${value.disponibilité}</td>
                    <td><li>${value.fournisseur.Raison}</li><li>${value.fournisseur.Adresse}</li><td>
                    </tr>`

                    /*
                    if we use append pushdata in table_body old and new lobjet

                                        $('#table_body').append(pushdata);

                    witsh we stock in pushdata will be added to the table_body 
                    so we should place outside "each" or we use innerHTML  inside each 
                    */


                    // table_body.innerHTML = pushdata ;


        });
        // $('#table_body').append(pushdata);
        table_body.innerHTML = pushdata ;


    });


         
})
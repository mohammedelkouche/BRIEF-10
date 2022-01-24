
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

            // syntax 1

            // pushdata += '<tr>';
            // pushdata += '<td>'+value.ID+'</td>';
            // pushdata += '<td>'+value.désignation+'</td>';
            // pushdata += '<td>'+value.prix+'</td>';
            // pushdata += '<td>'+value.catégorie+'</td>';
            // pushdata += '<td>'+value.disponibilité+'</td>';
            // pushdata += '<td>'+'<li>'+value.fournisseur.Raison+'</li>'+'<li>'+value.fournisseur.Adresse+'</li>'+'<td>';
            // pushdata += '</tr>';
           
            var ul = document.createElement("ul");
            $.each(value.disponibilité,function(key,element){
                var li = document.createElement("li");
                li.innerHTML=element ;
                ul.appendChild(li);
            })

            // syntax 2
           

                    pushdata += 
                    `<tr>
                        <td>${value.ID}</td>
                        <td>${value.désignation}</td>
                        <td>${value.prix}</td>
                        <td>${value.catégorie}</td>
                        <td>${ul.innerHTML}</td>
                        <td><li>${value.fournisseur.Raison}</li><li>${value.fournisseur.Adresse}</li></td>
                    </tr>`

                /*
                    if we use append pushdata in table_body old and new lobjet

                        $('#table_body').append(pushdata);

                    witsh we stock in pushdata will be added to the table_body 
                    so we should place outside "each" or we use innerHTML  inside each . 
                */
            table_body.innerHTML = pushdata ;

        });
        
        // $('#table_body').append(pushdata);
        // table_body.innerHTML = pushdata ;

    });

        // filter by search

    $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#table_body tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });


    //     thead = document.querySelector("th")
    //     console.log(thead)
    //     thead.innerHTML += `
    //     <select >
    //     <option >asc</option>
    //     <option >desc</option>
    //     <option >num</option>
    //     </select>
    //   `
       
        // sort
    
    $("th").each(function(column){
        // column: is the index of each th
            console.log(column)
        /* i will use the hover in and hover out using hover
        event so we use to function 
        */

        $(this).hover(function(){
        /* .data( key, value )
        key
        Type: String
        A string naming the piece of data to set.
        value
        Type: Anything
        The new data value; this can be any Javascript type except */
        // .attr() : définit un attribut et sa valeur ou simplement récupère sa valeur

            $(this).data("type",$(this).attr("class"));
            // console.log(this) 
            $(this).addClass("clickable"); 
        },function(){
            $(this).removeClass("clickable"); 
        });

        $(this).click(function(){
        // $(this).addEventListener('click',function count(){
            // console.log(count)

            var type = $(this).data("type");

            // find and select are the tr element witshes is child of tbody

            var records = $("table").find("tbody > tr"); 
            records.sort(function(a,b){
                
            
                // The :eq() selector selects an element with a specific index number.
                // .text() : remplace le texte de la page

                var value1 = $(a).children("td").eq(column).text();
                var value2 = $(b).children("td").eq(column).text();
                if(type == "nbr"){
                    value1 *= 1 ;
                    value2 *= 1 ;

                }
                    return(value1<value2) ? -1 : (value1>value2 ? 1 : 0)

                // }
                // else{
                    // return(value1>value2) ? -1 : (value1<value2 ? 1 : 0)

                // }

                // if(value1.toUpperCase()< value2.toUpperCase()){
                //     return -1;
                // }
                // else if (value1.toUpperCase() > value2.toUpperCase()){
                //     return 1;
                // }    
                // else{
                //     return 0;
                // }

                
            })
            $.each(records,function(index , row){
                    $("tbody").append(row);
            })
        })
    })     



         
})
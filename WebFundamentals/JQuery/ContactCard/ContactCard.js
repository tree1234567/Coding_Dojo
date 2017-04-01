
$(document).ready(function(){
    $(document).on("click", ".ContactCard", function(){
        $(this).children().toggle();
    });
    console.log("Loaded")
    $("button").on("click",function(){
        var CardArray=[];
        //for loop basically
        $(".Input").each(function(){
            CardArray.push($(this).val())
        })
        var Pushhtml = "<div class='ContactCard'>";
        Pushhtml+='<p>'+ CardArray[0]+ CardArray[1]+'</p>';
        Pushhtml+= '<p>Click For More Details</p>';
        Pushhtml+= '<p>'+CardArray[2]+'</p>';
        Pushhtml+= '</div>';
        $("#Wrapper").append(Pushhtml);           
    })
})
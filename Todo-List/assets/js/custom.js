console.log("JS veikia");

/*
$("li").click(function(){
   //if li is gray
//    console.log(console.log($(this).css("color")));
   if($(this).css("color") === "rgb(128, 128, 128)"){
       //turn it black
       $(this).css({
        color: "black",
        textDecoration: "none"});
    }    
    
    //else
    else {
         //turn it gray
        $(this).css({
            color: "gray",
            textDecoration: "line-through"
        });    
    }
});

*/


$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//click on x to delete todo

$("ul").on("click", "span",function(event){
    $(this).parent().fadeOut(500,function(){
       $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span>x</span> " + todoText + "</li>")
    }
});
$(document).ready(function(){
    let num;
    num = 0;
    $(".boxBottom h4").click(function(){
        num += 1;
        if(num == 1){
            $("*").css("font-family", "Franklin Gothic Book")
            $("#layout1").slideUp("slow")
            $("#layout1").addClass("hide")
            $("#layout2").slideDown("slow")
            $("#layout2").removeClass("hide")
            console.log(num, $("*").css("font-family"))
        }
        else{
            num = 0;
            alert("Thats all i have. still working on more:)")
            $("#layout2").slideUp("slow")
            $("#layout2").addClass("hide")
            $("#layout1").slideDown("slow")
            $("#layout1").removeClass("hide")
            console.log(num, $("*").css("font-family"))
        }
    })
});
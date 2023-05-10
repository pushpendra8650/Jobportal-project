$(".card").on("click",function(){
$(".detail").addClass("active")
})

$(".close-detail").on("click",function(){
    $(".detail").removeclass("active")
})

$(".menu-bar").on("click",function(){
    $(".sidebar").addClass("active")
})

$(".logo").on("click",function(){
    $(".sidebar").removeclass("active")
})


alert("hello sir");
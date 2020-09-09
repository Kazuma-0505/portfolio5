$('.flow-list__answer').css('display','none');
$('.flow-list__question').on('click', function() {
    // $(this).next().slideToggle();
var $answer =$(this).next('.flow-list__answer');

    if($($answer).css('display') == 'none'){
        $answer.slideDown('300');
        $(this).find('span').replaceWith('<span class="fas fa-angle-up"></span>');
    }
    else {
        $answer.slideUp('300');
        $(this).find('span').replaceWith('<span class="fas fa-angle-down"></span>');

    }
})
// $(function() {
//     $('.flow-list__question').click(function(){
//         $(".flow-list__answer").slideToggle(); 
//     });

//     for (let i = 0; i < parentManu.length; i++) {
        
//     }
  
// })


// jQuery(function ($) {
//     $(".flow-list__answer").css("display", "none")

//     $(".flow-list__question").click(function () {
//         $(".flow-list__question").not(this).removeClass("open");
//         $(".flow-list__question").not(this).next().slideUp(300);
//         $(this).toggleClass("open");
//         $(this).next().slideToggle(300);
//     });
// });



// const parentManu = document.querySelectorAll(".flow-list > li > h3");
// for (let i = 0; i < parentManu.length; i++) {
//     parentManu[i].addEventListener("click", function() {
//         this.nextElementSibling.classList.toggle("active");
        
//     })
// }
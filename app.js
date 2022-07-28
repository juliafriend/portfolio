$( () => {    
/////Function to print message to DOM when "projects" is clicked/////
const $newDiv = $('<div>').attr('id', 'alert')
$('#flexbox2').append($newDiv)

$('.navlinks').click(function () {
    alert("You are leaving my portfolio page")
// $newDiv.text('warning, you are leaving home page');
});
// $('#navbar').click(function(){
//   alert("user leaving page");
// })



// $("p").click(function(){
//     alert("The paragraph was clicked.");
//   });
/////

const $button = $('#button');
const addMessage = () => {
    $('body').append("Thank you for visiting! Check back soon for updated content");
}
$button.on('click', addMessage);

//////////Carousel//////////
let currentImgIndex = 0
let numOfImages = $('.carousel-imgs').children().length - 1
$('.next').on('click', () => {
    $('.carousel-imgs').children().eq(currentImgIndex).css('display', 'none')
    if(currentImgIndex < numOfImages) {
        currentImgIndex ++
       } else {
        currentImgIndex = 0
       }
    $('.carousel-imgs').children().eq(currentImgIndex).css('display', 'block')
})
$('.previous').on('click', () => {
    $('.carousel-imgs').children().eq(currentImgIndex).css('display', 'none')
    if(currentImgIndex > 0) {
        currentImgIndex--
    } else {
        currentImgIndex = numOfImages
    }
    $('.carousel-imgs').children().eq(currentImgIndex).css('display', 'block')
})

  });
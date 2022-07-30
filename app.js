$( () => {    
/////color change on navbar/////

$('.navbar').on('click', () => {
    $('.navbar').css("background-color", "rgb(220, 165, 175)");
  });


/////////Button to like page//////
const $button = $('#button');
const buttonMessage = () => {
    $('#feedback').append("a visitor clicked the button!").hide();
}
$button.on('click', buttonMessage);

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
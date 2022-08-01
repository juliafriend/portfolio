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
//keeps track of what img is currently showing
let numOfImages = $('.carousel-imgs').children().length - 1
//tells you how many images you will be cycling through (shows what the highest index will be)
$('.next').on('click', () => {
    $('.carousel-imgs').children().eq(currentImgIndex).css('display', 'none')
    //this will select the img that's currently showing, and then hide it
    if(currentImgIndex < numOfImages) {
        currentImgIndex ++
        //this cycles through the pictures 1 by 1 and once you get to last one (the highest index), goes back to 0
       } else {
        currentImgIndex = 0
       }
    $('.carousel-imgs').children().eq(currentImgIndex).css('display', 'block')
})
$('.previous').on('click', () => {
    $('.carousel-imgs').children().eq(currentImgIndex).css('display', 'none')
    if(currentImgIndex > 0) {
        currentImgIndex--
        //decrementing the index
    } else {
        currentImgIndex = numOfImages
        //once you hit 0, it goes back to the pic with the highest index
    }
    $('.carousel-imgs').children().eq(currentImgIndex).css('display', 'block')
})

/////Dog Game////
/////////////////
const player = {
        bankAccount: 0,
        amountCookies: 0,
        amountSundaes: 0
    }
let tasks = [
    {
        task: 'walk a dog',
        price: 0,
        profit: 5,
    }, {
        task: 'puppy-sit',
        price: 0,
        profit: 10,

    }, {
        task: 'buy cookies',
        price: 5,
        profit: 0,
    }, {
        task: 'buy vanilla sundae',
        price: 10,
        profit: 0,
    }, ]

  
    const $balance = $('<div>').attr('id', 'balance')
    const $h3B = $('<h3>').text(`CURRENT BALANCE:`).appendTo($balance)
    $('#Lena').append($balance)

    let $cash =$('<h3>').attr('id','cash').appendTo($h3B).fadeOut(3000)
    
    let profitRate = 5
//////
    const $treat = $('<div>').attr('id', 'treat')
    const $h3T = $('<h3>').text(`COOKIES FOR LENA:`).appendTo($treat)
    $('#Lena').append($treat)

    let $treats =$('<h3>').attr('id','amount').appendTo($h3T).fadeOut(3000)

    let amountRate = 1
//////
    const $sundae = $('<div>').attr('id', 'sundae')
    const $h3S = $('<h3>').text(`SUNDAES FOR LENA:`).appendTo($sundae)
    $('#Lena').append($sundae)

    let $sundaes =$('<h3>').attr('id','amount1').appendTo($h3S).fadeOut(3000)

    let amountRate1 = 1
// FUNCTIONS
const walkDog = () => {
player.bankAccount += 5
$('#cash').text(`$${player.bankAccount}`).fadeIn()
profitRate = 5
}

const puppysit = () => {
    player.bankAccount += 10
    $('#cash').text(`$${player.bankAccount}`).fadeIn()
    profitRate = 10
}

const buyCookies = () => {
    player.bankAccount -= 5
    player.amountCookies += 1
    $('#cash').text(`$${player.bankAccount}`).fadeIn()
    $('#amount').text(`You purchased ${player.amountCookies}`).fadeIn()
    amountRate = 1        
}
const buySundae = () => {
    player.bankAccount -= 10
    player.amountSundaes += 1
    $('#cash').text(`$${player.bankAccount}`).fadeIn()
    $('#amount1').text(`You purchased ${player.amountSundaes} `).fadeIn()
    amountRate = 1  
}

    $('#walk').on('click', walkDog)
    $('#puppysit').on('click', puppysit)
    $('#cookies').on('click', buyCookies)
    $('#sundaes').on('click', buySundae)

  });
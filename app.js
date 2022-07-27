$( () => {
  
const $button = $('#button');
    
const addMessage = () => {
    $('body').append("Thank you for visiting! Check back soon for updated content");
}
$button.on('click', addMessage);



// $("p").click(function(){
//     alert("The paragraph was clicked.");
//   });


  });
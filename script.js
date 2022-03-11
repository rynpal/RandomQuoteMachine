//random quote index function
const randomQuoteIndex = (obj) => {
  return Math.floor(Math.random() * Object.keys(obj).length);
};

const colors = ['#ffeeee', '#eef1ff', 'eefcff', 'fcffee', 'fffaee', '#ffeef8', '#fbeeff', '#eefff8', '#eeffee', '#fff5ee'];

//random color index function
const randomColorIndex = () => {
  return Math.floor(Math.random() * colors.length);
};
let colorIndex = null;

//render quote and color to DOM
const render = () => {
//change background color
  let prevColorIndex = colorIndex;
  colorIndex = randomColorIndex();

  if (prevColorIndex == colorIndex) {
    colorIndex = randomColorIndex();
  }
  
$('body').animate({ backgroundColor: colors[colorIndex] }, 'slow');

//change quote
  $('#quote-container').fadeOut('slow',function () {

    $.get("https://type.fit/api/quotes",function (data) {
      let index = data[randomQuoteIndex(data)]
      $('#text').text(index.text);
      if(index.author == null){
      $('#author').text('Unknown')
      } else {
      $('#author').text(index.author);
      }
    },"JSON")
    
  }).fadeIn('slow');
};

//render on document open
$(document).ready(function () {
  render();
});

//html styling/functionality
$('#quote-box').addClass('mx-auto');
$('#quote-container').addClass('d-flex flex-column justify-content-center align-items-center text-center');
$('#text').css('padding', '10px').addClass('fst-italic fs-2');
$('#author').css('padding', '5px').addClass('fs-4');
$('#button-container').addClass('d-flex flex-row justify-content-center align-items-center');

$('button').addClass('btn btn-success text-uppercase').
on('click', render);

$('a').addClass('btn btn-primary').
css('margin', '10px').
attr('href', 'https://twitter.com/intent/tweet', 'target', '_top');
$('i').addClass('bi bi-twitter');
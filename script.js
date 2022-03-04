//random quote index function
const randomQuoteIndex = () => {
  return Math.floor(Math.random() * Object.keys(quotes).length);
};

const colors = ['#ffeeee', '#eef1ff', 'eefcff', 'fcffee', 'fffaee', '#ffeef8', '#fbeeff', '#eefff8', '#eeffee', '#fff5ee'];

//random color index function
const randomColorIndex = () => {
  return Math.floor(Math.random() * colors.length);
};
let newIndex = null;
let colorIndex = null;

//render quote and color to DOM
const render = () => {
  let oldIndex = newIndex;
  let prevColorIndex = colorIndex;

  newIndex = randomQuoteIndex();
  colorIndex = randomColorIndex();

  if (oldIndex == newIndex || prevColorIndex == colorIndex) {
    newIndex = randomQuoteIndex();
    colorIndex = randomColorIndex();
  }

  $('#quote-container').fadeOut(function () {
    $('#text').text(quotes[newIndex][0]);
    $('#author').text('- ' + quotes[newIndex][1]);
  }).fadeIn();

  $('body').animate({ backgroundColor: colors[colorIndex] }, 'slow');
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

//quotes
const quotes = {
  0: ['God does not need your good works, but your neighbor does.', 'Martin Luther'],
  1: ['To know that God knows everything about me and yet loves me is indeed my ultimate consolation.', 'R.C. Sproul'],
  2: ['God is most glorified in us when we are most satisfied in Him.', 'John Piper'],
  3: ['I believe in Christianity as I believe that the sun has risen: not only because I see it, but because by it I see everything else.', 'C.S. Lewis'],
  4: ['Morality may keep you out of jail, but it takes the blood of Jesus Christ to keep you out of hell.', 'Charles Spurgeon'],
  5: ['Thou hast made us for Thyself, O Lord, and our heart is restless until it finds its rest in Thee.', 'Augustine of Hippo'],
  6: ['I can safely say, on the authority of all that is revealed in the Word of God, that any man or woman on this earth who is bored and turned off by worship is not ready for heaven.', 'A.W. Tozer'],
  7: ['Convictions are not merely beliefs we hold; they are those beliefs that hold us in their grip.', 'Albert Mohler'],
  8: ['The concept of substitution lies at the heart of both sin and salvation. For the essence of sin is man substituting himself for God, while the essence of salvation is God substituting himself for man.', 'John Stott'],
  9: ["Christ did not die for any upon condition, if they do believe; but He died for all God's elect, that they should believe.", 'John Owen'] };

// const quotes = $.get("https://type.fit/api/quotes");
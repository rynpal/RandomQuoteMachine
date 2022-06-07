//render on document open
$(document).ready(function () {
  render();
});

//random quote index function
const randomQuoteIndex = (obj) => {
  return Math.floor(Math.random() * Object.keys(obj).length);
};

const colors = [
  "#ffeeee",
  "#eef1ff",
  "eefcff",
  "fcffee",
  "fffaee",
  "#ffeef8",
  "#fbeeff",
  "#eefff8",
  "#eeffee",
  "#fff5ee",
];

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

  $("body").animate({ backgroundColor: colors[colorIndex] }, "slow");

  //change quote
  $("#quote-container")
    .fadeOut("slow", function () {
      $.get(
        "https://type.fit/api/quotes",
        function (data) {
          let index = data[randomQuoteIndex(data)];
          $("#text").text(index.text);
          if (index.author == null) {
            $("#author").text("Unknown");
          } else {
            $("#author").text(index.author);
          }
        },
        "JSON"
      );
    })
    .delay(600)
    .fadeIn("slow");
};

//add button click functionality
$("button").on("click", render);

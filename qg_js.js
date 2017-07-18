$(document).ready(function() {
function getNewQuote() {
  $.ajax({
    url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
    jsonp: 'jsonp',
    cache: false,
    success: function(data) {
      var post = data.shift();
      $("#quoteTitle").empty();
      $("#quoteDisplay").empty();
      $("#quoteTitle").append(post.title);
      $("#quoteDisplay").append(post.content);
    }
  });
}
function changeBackground() {
  var backgrounds = ["navy", "blue", "aqua", "teal", "olive", "green", "lime", "orange", "red", "maroon", "fuchsia", "purple"];
  var randomBG = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  $("html").css('background-color',randomBG);}
  $('#click').click(function () {changeBackground()});

function tweetQuote() {

}

getNewQuote();
changeBackground();


$('#newQuote').on('click', function(e) {
  e.preventDefault();
  changeBackground();
  getNewQuote();
});
$("#shareQuote").on("click", function() {
  var quote = document.getElementById('quoteDisplay').innerHTML;
  var plessQuote = quote.replace("<p>", "");
  var plessQuote2 = plessQuote.replace("</p>", "");
  window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent("''" + plessQuote2 + "''"));
});
})

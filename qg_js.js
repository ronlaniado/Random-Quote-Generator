$(document).ready(function() {
  console.log("Hey fam");
function getNewQuote() {
  $.ajax({
    url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
    jsonp: 'jsonp',
    cache: 'false',
    success: function(data) {
      var post = data.shift();
      $("#quoteTitle").append(post.title);
      $("#quoteDisplay").append(post.content);
    }
  });
}
getNewQuote();
//$("#newQuote").click(getNewQuote());
})

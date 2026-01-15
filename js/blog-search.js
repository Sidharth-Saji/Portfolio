function filterBlogs() {
  var input = document.getElementById("blogSearch");
  var filter = input.value.toLowerCase();
  var posts = document.getElementsByClassName("blog-post");

  for (var i = 0; i < posts.length; i++) {
    posts[i].style.display =
      posts[i].innerText.toLowerCase().indexOf(filter) > -1
      ? ""
      : "none";
  }
}

function showPage(pageNumber) {
  // Hide all blog posts
  $('.blog-post').hide();

  // Show selected page
  $('.page-' + pageNumber).show();

  // Update active pagination state
  $('.pagination li').removeClass('active');
  $('.pagination li:nth-child(' + pageNumber + ')').addClass('active');
}

// Default: show page 1 on load
$(document).ready(function () {
  showPage(1);
});
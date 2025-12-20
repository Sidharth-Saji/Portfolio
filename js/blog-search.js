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
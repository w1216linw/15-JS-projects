// classList - shows/gets all classes
// console.log(links.classList);

// contains - checks classList for specific class
// console.log(links.classList.contains("links"));

// add - add class
// links.classList.add("show-links");

// remove - remove class
// links.classList.remove("show-links");

// toggle - toggles class
// links.classList.add("show-links")

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener('click', function() {
  // console.log(links.classList);
  // console.log(links.classList.contains("links"));

  // if(links.classList.contains("show-links")){
  //   links.classList.remove("show-links");
  // } else {
  //   links.classList.add("show-links");
  // }

   links.classList.toggle('show-links');
});
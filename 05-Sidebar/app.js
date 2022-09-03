const closeBtn = document.querySelector('.close-btn');
const toggleBtn = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', function() {

  // See if sidebar contain class name show-sidebar
  // true remove
  // false add
  // if(sidebar.classList.contains('show-sidebar')) {
  //   sidebar.classList.remove('show-sidebar');
  // } else {
  //   sidebar.classList.add('show-sidebar');
  // }
  sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', function() {
  sidebar.classList.remove('show-sidebar');
})
const btnContainer = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about')
const articles = document.querySelectorAll('.content')

about.addEventListener('click', (e) => {
  // console.log(e.target.dataset.id)
  const id = e.target.dataset.id;
  console.log(id);
  if(id) {
    //remove active from all buttons
    btnContainer.forEach( (btn) => {
      btn.classList.remove('active');
    })
    //active target button
    e.target.classList.add('active');

    //hide all article
    //active target article
    const article = document.getElementById(id);
    articles.forEach( (obj) => {
      obj.classList.remove('active');
    })
    article.classList.add('active')
  }
})


// btnContainer.forEach((btn) => {
//   btn.addEventListener('click', (e) => {
//     console.log(e.currentTarget);
//     if(btn.classList.contains('active')) {
//       btn.classList.remove('active');
//     } else {
//       btn.classList.add('active');
//     }
//   })
// })
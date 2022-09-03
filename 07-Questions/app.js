
// method 1
//traversing the dom
// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn){
//   btn.addEventListener('click', function(e){
//     //          current btn  -> parent of btn -> parent of parent of btn
//     //console.log(e.currentTarget.parentElement.parentElement);

//     const question = e.currentTarget.parentElement.parentElement;

//     //remove show-text of other question
//     btns.forEach(function(obj){
//       const objQ = obj.parentElement.parentElement;
//       if(objQ !== question){
//       objQ.classList.remove('show-text');
//       }
//     });

//     question.classList.toggle('show-text');
//   });
// });

//method 2
//using selectors inside the element
const questions = document.querySelectorAll('.question');

questions.forEach(function(question) {
  const btn = question.querySelector('.question-btn');
  btn.addEventListener('click', function(){
    
    //remove show-text of other question
    questions.forEach(function (obj){
      if(obj !== question){
        obj.classList.remove('show-text');
      };
    });

    question.classList.toggle('show-text');
  })
})

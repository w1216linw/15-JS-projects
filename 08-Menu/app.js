//model
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "dinner",
    price: 13.99,
    img: "images/item-2.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "images/item-3.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "images/item-4.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "images/item-5.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "images/item-6.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "images/item-7.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "images/item-8.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "images/item-9.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Steak Dinner",
    category: "dinner",
    price: 36.99,
    img: "images/item-10.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  }
];

const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container');


//View
//load items
window.addEventListener('DOMContentLoaded', function(){
  displayMenuItem(menu);
  displayMenuBttons();
});


//display menu button by category have in database
const displayMenuBttons = () => {

  ///reduce method. select only one time of each categories
  const categories = menu.reduce(function(values, item){
    // console.log(values);
    //values => array => contained unique category
    if(!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  },['all']);

  ///put categories into html form
  const categoryBtns = categories.map(function(category){
    return `<button class="filter-btn" type="button" data-tool-tip="${category}">${category}</button>`
  }).join('');

  container.innerHTML = categoryBtns;
  ///after put in add inside a container, selected the buttons just created
  const filterBtns = container.querySelectorAll('.filter-btn');
  //filter items and giving each btn event listener
  filterBtns.forEach(function(btn){
    btn.addEventListener('click', function(e){
    // console.log(e.currentTarget.dataset.toolTip);
    //get the category that selected
    const category = e.currentTarget.dataset.toolTip;
    //get the items in menu that match the selected category in an array
    const menuCategory = menu.filter(function (menuItem) {
      if(category === menuItem.category){
        return menuItem;
      }
    });
    //check if category is all or other, display it.
    if(category === 'all'){
      displayMenuItem(menu);
    }else{
      displayMenuItem(menuCategory);
    }
    });
  });
}


// arrow function version
const displayMenuItem = menuItems => {
  let displayMenu = menuItems.map(function(item) {
    // console.log(item)
    return `<article class="menu-item">
            <img src="${item.img}" class="photo" alt="${item.title}">
            <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">${item.desc}</p>
              </div>
          </article>`;
        })
        displayMenu = displayMenu.join('');
        sectionCenter.innerHTML = displayMenu;
}


//function
//display menu items
// function displayMenuItem(menuItems) {
//   let displayMenu = menuItems.map(function(item) {
//     // console.log(item)
//     return `<article class="menu-item">
//             <img src="${item.img}" class="photo" alt="${item.title}">
//             <div class="item-info">
//               <header>
//                 <h4>${item.title}</h4>
//                 <h4 class="price">$${item.price}</h4>
//               </header>
//               <p class="item-text">${item.desc}</p>
//             </div>
//           </article>`;
//   })
//   displayMenu = displayMenu.join('');
//   sectionCenter.innerHTML = displayMenu;
// }
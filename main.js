




document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const all = document.querySelectorAll('.item_wrap');
    const womens = document.querySelectorAll('.women');
    const mens = document.querySelectorAll('.men');
    const kids = document.querySelectorAll('.kid');
  
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(tab => {
          tab.classList.remove('active', 'bg-rose-800'); // Remove active state
        });
        tab.classList.add('active', 'bg-rose-800'); // Add active state
  
        const tabval = tab.getAttribute('data-tabs');
  
        all.forEach(item => {
          item.style.display = 'none';
        });
        if (tabval === 'women') {
          womens.forEach(item => {
            item.style.display = 'block';
          });
        } else if (tabval === 'men') {
          mens.forEach(item => {
            item.style.display = 'block';
          });
        } else if (tabval === 'kid') {
          kids.forEach(item => {
            item.style.display = 'block';
          });
        } else {
          all.forEach(item => {
            item.style.display = 'block';
          });
        }
      });
    });
  
    // Button click effect
    const buttons = document.querySelectorAll('.add-cart');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        button.classList.add('scale-105');
        setTimeout(() => {
          button.classList.remove('scale-105');
        }, 200); // Reset scaling after 200ms
      });
    });
  
    // Fade-in effect with Intersection Observer
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });
  
    document.querySelectorAll('.fade-in').forEach(element => {
      observer.observe(element);
    });
  });
  

//   const cartIcon=document.querySelector('#cart-icon');
//   const cart=document.querySelector('.cart');
//   const closeCart= document.querySelector('#cart-close');
//   cartIcon.addEventListener('click', (e) => {
//     e.preventDefault();
//     window.location.href = 'cart.html'; // Redirect to cart page
//   });
//   closeCart.addEventListener("click", () => {
//     cart.classList.remove("active");
//   });
  
//   // Start when the document is ready
//   if (document.readyState == "loading") {
//     document.addEventListener("DOMContentLoaded", start);
//   } else {
//     start();
//   }
//   function start(){
//     addEvent();
//   }

//   function update(){
//     addEvent();
//     updatedTotal();
//   }
//   //events
//   function addEvent(){
//     let removeBtn=document.querySelectorAll('.remove');
//     console.log(removeBtn);
//     removeBtn.forEach((btn)=>{
//         btn.addEventListener('click', removeItem);
//     });

//     let cartQuantity=document.querySelectorAll('.quantity');
//     console.log(cartQuantity);
//     cartQuantity.forEach((btn)=>{
//         btn.addEventListener('click', quantityItem);
//     });

//     // let addCart=document.querySelectorAll('.add-cart');
//     // console.log(addCart);
//     // addCart.forEach((btn)=>{
//     //     btn.addEventListener('click', addCartItem);
//     // });
//     const addCartButtons = document.querySelectorAll('.add-cart');
//   addCartButtons.forEach(button => {
//     button.addEventListener('click', addCartItem);
//   });

//     let buyBtn=document.querySelectorAll('.btn-buy');
//     buyBtn.forEach((btn)=>{
//         btn.addEventListener('click', buyItems);
//     });
//   }

 
// //   let itemsAdded=[];
// let itemsAdded = JSON.parse(localStorage.getItem('cartItems')) || [];
//   function addCartItem(){
//     let product=this.parentElement;
//     let title=product.querySelector('.product-name');
//     let price=product.querySelector('.product-price');
//     let img=product.querySelector('.product-img')

//     let addNewItem={title,price,img};

//     //controlling already exist items
//     if(itemsAdded.find((item) => item.title == addNewItem.title)){
//         alert('Already added to your cart!!!');
//     }
//     else{
//         itemsAdded.push(addNewItem);
//         localStorage.setItem('cartItems', JSON.stringify(itemsAdded));
//     }

//     //Add products to cart 
//     let CartComponents=CartComponent(title, price, img);
//     let newDiv=document.createElement("div");
//     newDiv.innerHTML= CartComponents;
//     const cartContent=cart.querySelector('.cart-content');
//     cartContent.appendChild(newDiv);

//     update();
//   }

//   //remove
//   function removeItem(){
//     this.parentElement.remove();
//     itemsAdded=itemsAdded.filter((item)=>item.title!= this.parentElement.querySelector('.cart-product-title').innerHTML);

//     update();
//   }

//   //quantity
//   function quantityItem(){
//     if(isNaN(this.value) || this.value<1){
//         this.value=1;
//     }
//     else{
//         this.value=Math.floor(this.value);
//     }

//     update();
//   }

//   //checkout
//   function buyItems(){
//     if(itemsAdded.length<=0){
//         alert('No items added Please add items to cart!');
//     }
//     else{
//         const cartContent=cart.querySelector('.cart-content');
//         cartContent.innerHTML='';
//         alert('Order successfully purchased');
//         itemsAdded=[];
//         update();
//     }
//   }

//   //updated total
//   function updatedTotal(){
//     let carBoxes= document.querySelectorAll('.cart-box');
//     const totalElement=cart.querySelector('.total-price');
//     let total=0;
//     cartBoxes.forEach((cartBox)=> {
//         let priceElt=cartBox.querySelector('.cart-price');
//         let price =parseFloat(priceElt.innerHTML.replace('$', ''));
//         let quantity=cartBox.querySelector('.quantity');
//         total+=price*quantity;
//     });
//     total =total.toFixed(1); // keep 1 digit decimal point

//     totalElement.innerHTML='$'+total;
//   }




// // for the cart display
// //   function CartComponent(title, price, img){
// //     return `  <div class="cart-box">
// //               <img src="${img}" alt="" class="cart-img">
// //               <div class="detail-box">
// //                 <div class="title">${title}
// //                 </div>
// //                 <div class="price">${price}</div>
// //                 <input type="number" value="1" class="quantity">
// //               </div>
// //               <i class="fa-solid fa-trash remove" ></i>
// //             </div>`;
// //   }



document.addEventListener('DOMContentLoaded', () => {
  const cartIcon = document.querySelector('#cart-icon');
  const closeCart = document.querySelector('#nav-close');

  if (cartIcon) {
    cartIcon.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'cart.html'; 
    });
  }

  if (closeCart) {
    closeCart.addEventListener('click', () => {
      window.location.href = 'index.html'; 
    });
  }

  start(); 
});

function start() {
  addEvent();
  loadCartFromLocalStorage();
}

function addEvent() {
  const addCartButtons = document.querySelectorAll('.add-cart');
  addCartButtons.forEach(button => {
    button.addEventListener('click', addCartItem);
  });

  const buyBtn = document.querySelectorAll('.btn-buy');
  buyBtn.forEach((btn) => {
    btn.addEventListener('click', buyItems);
  });

  document.querySelectorAll('.remove').forEach(button => {
    button.addEventListener('click', removeItem);
  });

  document.querySelectorAll('.quantity').forEach(input => {
    input.addEventListener('change', quantityItem);
  });
}

function loadCartFromLocalStorage() {
  const cartContent = document.querySelector('.cart-content');
  const items = JSON.parse(localStorage.getItem('cartItems')) || [];
  itemsAdded = items;

  cartContent.innerHTML = ''; 
  items.forEach((item) => {
    const cartItem = CartComponent(item.title, item.price, item.imgSrc);
    const newDiv = document.createElement("div");
    newDiv.innerHTML = cartItem;
    cartContent.appendChild(newDiv);
  });

  addEvent(); 
  update(); 
}

let itemsAdded = JSON.parse(localStorage.getItem('cartItems')) || [];

function addCartItem() {
  let product = this.parentElement;
  let title = product.querySelector('.product-name').innerText;
  let price = product.querySelector('.product-price').innerText;
  let imgSrc = product.querySelector('.product-img').src;

  let addNewItem = { title, price, imgSrc };


  if (itemsAdded.find((item) => item.title === addNewItem.title)) {
    alert('Already added to your cart!');
    return;
  } else {
    itemsAdded.push(addNewItem);
    localStorage.setItem('cartItems', JSON.stringify(itemsAdded));
  }


  const CartComponents = CartComponent(title, price, imgSrc);
  const newDiv = document.createElement("div");
  newDiv.innerHTML = CartComponents;
  const cartContent = document.querySelector('.cart-content');
  cartContent.appendChild(newDiv);

  addEvent(); 
  update();
}
function removeItem() {
  const cartItem = this.closest('.cart-box'); 
  const titleToRemove = cartItem.querySelector('.cart-product-title').innerText;

  cartItem.remove();

  itemsAdded = itemsAdded.filter((item) => item.title !== titleToRemove);
  localStorage.setItem('cartItems', JSON.stringify(itemsAdded));

  update(); 
}

function quantityItem() {
  if (isNaN(this.value) || this.value < 1) {
    this.value = 1;
  } else {
    this.value = Math.floor(this.value);
  }

  update(); 
}

function buyItems() {
  if (itemsAdded.length <= 0) {
    alert('No items added. Please add items to cart!');
  } else {
    const cartContent = document.querySelector('.cart-content');
    cartContent.innerHTML = '';
    alert('Order successfully purchased');
    itemsAdded = [];
    localStorage.setItem('cartItems', JSON.stringify([]));
    update(); 
  }
}

function updatedTotal() {
  const cartBoxes = document.querySelectorAll('.cart-box');
  const totalElement = document.querySelector('.total-price');
  let total = 0;

  cartBoxes.forEach((cartBox) => {
    const priceElt = cartBox.querySelector('.cart-price');
    const price = parseFloat(priceElt.innerHTML.replace('$', ''));
    const quantity = parseInt(cartBox.querySelector('.quantity').value, 10);
    total += price * quantity;
  });

  total = total.toFixed(1); // keep 1 digit decimal point
  totalElement.innerHTML = '$' + total;
}

function CartComponent(title, price, imgSrc) {
  return `
    <div class="flex items-center p-4 bg-gray-100 rounded-lg shadow-md mb-4 cart-box">
      <img src="${imgSrc}" alt="${title}" class="w-16 h-16 object-cover rounded-lg mr-4 cart-img">
      <div class="flex-1">
        <div class="text-lg font-semibold cart-product-title">${title}</div>
        <div class="text-gray-600 text-sm cart-price">${price}</div>
      </div>
      <div class='flex flex-row ml-5'>
      <input type="number" value="1" class="mt-2 w-20 p-2 border rounded-lg quantity">
      <button class="ml-4 text-red-500 hover:text-red-700 remove">
        <i class="fa-solid fa-trash"></i>
      </button>
      </div>
    </div>
  `;
}

function updateCartItemCount() {
  const totalItemsElement = document.querySelector('.total-items');
  if (totalItemsElement) {
    totalItemsElement.textContent = itemsAdded.length;
  }
}

function update() {
  updatedTotal(); 
  updateCartItemCount();
}



const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const closeIcons = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav__link');
const cartAdmin = document.getElementById('cart-admin');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.add('hidden');
    cartAdmin.classList.add('hidden');
    closeIcons.classList.add('hidden');
    hamburger.classList.remove('hidden');
  });
});

closeIcons.addEventListener('click', () => {
  navMenu.classList.add('hidden');
  cartAdmin.classList.add('hidden');
  closeIcons.classList.add('hidden');
  hamburger.classList.remove('hidden');
});

hamburger.addEventListener('click', () => {
  navMenu.classList.remove('hidden');
  cartAdmin.classList.remove('hidden');
  closeIcons.classList.remove('hidden');
  hamburger.classList.add('hidden');
});
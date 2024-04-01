const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const cartBtn = document.querySelector('.cart-btn');
const checkBtn = document.querySelector('.checkout-btn');
const delBtn = document.querySelector('.delete');
const cartContainer = document.querySelector('.cart-container');
const popup = document.querySelector('.popup');
const products = document.querySelector('.product');
const head = document.querySelector('.head');
const heads = document.querySelector('.heads');
const fullImg = document.querySelector('.full-image');
const flexImg = document.querySelectorAll('.flex-img');
const subBtn = document.querySelector('.sub-btn');
const addBtn = document.querySelector('.add-btn');
const getBtn = document.querySelector('.get-btn');
const exitBtn = document.querySelector('#exit-btn');
const prevBtn = document.querySelector('#prev-btn');
const prevImg = document.querySelector('.preview-img');
const nextBtn = document.querySelector('#next-btn');
const popupImg = document.querySelectorAll('.popup-img');

openBtn.addEventListener('click', function () {
  document.querySelector('.nav-menu').style.display = 'block';
  popup.style.opacity = 0.4;
  document.querySelector('.product-text').style.opacity = 0.4;
  heads.style.opacity = 0.4;
});

closeBtn.addEventListener('click', function () {
  document.querySelector('.nav-menu').style.display = 'none';
  popup.style.opacity = 1;
  document.querySelector('.product-text').style.opacity = 1;
  heads.style.opacity = 1;
});

cartBtn.addEventListener('click', function () {
  cartContainer.classList.toggle('showcase');
});

flexImg.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    products.classList.add('blur');
    head.classList.add('blur');
    heads.classList.add('blur');
    popup.classList.add('show');
    const img = e.currentTarget.dataset.id;
    console.log(img);
    prevImg.style.width = '45%';
    prevImg.style.left = '30%';
    prevImg.style.right = '50%';
    prevImg.style.position = 'relative';
    prevImg.style.borderRadius = '0.5rem';
    if (!flexImg === img) {
      prevImg.src = 'images/image-product-1.jpg';
    } else {
      prevImg.src = `images/image-product-${img}.jpg`;
    }
  });
});

exitBtn.addEventListener('click', function () {
  products.classList.remove('blur');
  head.classList.remove('blur');
  heads.classList.remove('blur');
  popup.classList.remove('show');
});

let currentImg = 0;

prevBtn.addEventListener('click', function () {
  currentImg--;
  if (currentImg < 1) {
    currentImg = 4;
  }
  prevImg.src = `images/image-product-${currentImg}.jpg`;
});

nextBtn.addEventListener('click', function () {
  currentImg++;
  if (currentImg > 4) {
    currentImg = 1;
  }
  prevImg.src = `images/image-product-${currentImg}.jpg`;
});

let currentItem = 0;
addBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > 4) {
    alert("You're very rich oh!");
  }
  document.querySelector('.cart-num').textContent = currentItem;
});

subBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 1) {
    currentItem = 0;
    alert("You're really broke, go and hustle joor!!");
  }
  document.querySelector('.cart-num').textContent = currentItem;
});

delBtn.addEventListener('click', function () {
  document.querySelector('.cart-img').classList.add('hidden');
  delBtn.classList.add('hidden');
  document.querySelector('.cart-msg').classList.add('show');
  document.querySelector('.details').classList.add('hidden');
  document.querySelector('.added').classList.add('text');
  document.querySelector('.note').style.display = 'none';
  document.querySelector('.checkout-btn').style.display = 'none';
});

getBtn.addEventListener('click', function () {
  if (document.querySelector('.added').classList.contains('text')) {
    document.querySelector('.cart-img').classList.remove('hidden');
    document.querySelector('.details').classList.remove('hidden');
    delBtn.classList.remove('hidden');
    document.querySelector('.added').classList.remove('text');
    document.querySelector('.cart-msg').classList.remove('show');
    document.querySelector('.note').style.display = 'block';
    document.querySelector('.checkout-btn').style.display = 'block';
  }
});

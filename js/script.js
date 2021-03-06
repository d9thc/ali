window.addEventListener('DOMContentLoaded', () => {

  const cartWrapper = document.querySelector('.cart__wrapper'),
    cart = document.querySelector('.cart'),
    close = document.querySelector('.cart__close'),
    open = document.querySelector('#cart'),
    goodsBtn = document.querySelectorAll('.goods__btn'),
    confirm = document.querySelector('.confirm'),
    products = document.querySelectorAll('.goods__item'),
    badge = document.querySelector('.nav__badge'),
    totalCost = document.querySelector('.cart__total > span'),
    titles = document.querySelectorAll('.goods__title');
      
  function openCart() {
    cart.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
  //Скрываем корзину
  function closeCart() {
    cart.style.display = 'none';
    document.body.style.overflow = '';
  }
  //Окно корзины
  open.addEventListener('click', openCart);
  close.addEventListener('click', closeCart);
    
  goodsBtn.forEach(function(btn, i) {
    btn.addEventListener('click', () => {
      let item = products[i].cloneNode(true),
        trigger = item.querySelector('button'),
        removeBtn = document.createElement('div'),
        empty = cartWrapper.querySelector('.empty');

        trigger.remove();
           
        removeBtn.classList.add('goods__item-remove');
        removeBtn.innerHTML = '&times';
        item.appendChild(removeBtn);

        cartWrapper.appendChild(item);
        if(empty) {
          empty.remove();
        }
    });
  });

  function sliceTitle() {
    titles.forEach(function(item) {
      if (item.textContent.length < 70) {
          return;
      } else {
         const str = item.textContent.slice(0, 71) + '...';
          //const str = `${item.textContent.slice(0, 71)}...`;
          item.textContent = str;
      }
  }
    sliceTitle();


});
  
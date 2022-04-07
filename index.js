import { burgerAction } from "./scripts/burger-action/burger.js";
import { armSlider } from "./scripts/sliders/armSlider.js";
import { reviewSlider } from "./scripts/sliders/reviewSlider.js";

burgerAction()
armSlider()
reviewSlider()




const root = document.querySelector('#root');

const header = document.createElement('header');
header.classList.add('header');
root.append('header');

const divHeaderWrapper = document.createElement('div');
divHeaderWrapper.classList.add('header__wrapper');
divHeaderWrapper.classList.add('weapper');
header.append(divHeaderWrapper);

const divHeaderUp = document.createElement('div');
divHeaderUp.classList.add('header-up');
divHeaderWrapper.append(divHeaderUp);

const divBurgerMenu = document.createElement('div');
divBurgerMenu.classList.add('burger-menu');
divHeaderUp.append(divBurgerMenu);

const divFirstBar = document.createElement('div');
divFirstBar.classList.add('first__bar');
divBurgerMenu.append(divFirstBar);

const divSecondBar = document.createElement('div');
divSecondBar.classList.add('second__bar');
divBurgerMenu.append(divSecondBar);

const divThirdBar = document.createElement('div');
divThirdBar.classList.add('third__bar');
divBurgerMenu.append(divThirdBar);

const divHeaderTitle = document.createElement('h2');
divHeaderTitle.classList.add('header__title')
divHeaderUp.append(divHeaderTitle)

const headerTitleImg = document.createElement('img')
img.src = './assets/img/header/logo.svg' 
img.alt = 'logo.svg'
headerTitleImg.classList.add('title-img')
divHeaderTitle.append(headerTitleImg)

const headerTitleDiscription = document.createElement('span')
headerTitleDiscription.classList.add('title-discription')
headerTitleDiscription.textContent = 'КРЕСЛА SAMURAI'
divHeaderTitle.append(headerTitleDiscription)

const divHeaderCart = document.createElement('div');
divHeaderCart.classList.add('tel__cart')
divHeaderUp.append(divHeaderCart)

const headerCartImg = document.createElement('img')
img.src = './assets/img/header/shopping-cart.png' 
img.alt = 'shopping-cart.png'
headerCartImg.classList.add('tel__cart-img')
divHeaderCart.append(headerCartImg)

const spanHeaderCart = document.createElement('span')
spanHeaderCart.classList.add('cart-add')
spanHeaderCart.textContent = '+1'
divHeaderCart.append(spanHeaderCart)

const divHeaderSearching = document.createElement('p');
divHeaderSearching.classList.add('header__searching')
divHeaderUp.append(divHeaderSearching)

const headerSearchingImg = document.createElement('img')
img.src = './assets/img/header/loupe.png' 
img.alt = 'loupe.png'
headerSearchingImg.classList.add('searching-img')
divHeaderSearching.append(headerSearchingImg)

const headerSearchingInput = document.createElement('input')
headerSearchingInput.classList.add('header__searching-input')
divHeaderSearching.append(headerSearchingInput)

const divHeaderNumber = document.createElement('div');
divHeaderNumber.classList.add('header__number')
divHeaderUp.append(divHeaderNumber)

const numberPhone = document.createElement('a')
numberPhone.classList.add('header__phone')
divHeaderNumber.append(numberPhone)

const headerNumberImg = document.createElement('img')
img.src = './assets/img/header/tel.png' 
img.alt = 'tel.png'
headerNumberImg.classList.add('phone-img')
divHeaderNumber.append(headerNumberImg)

const divHeaderPhone = document.createElement('div')
divHeaderPhone.classList.add('number')
divHeaderPhone.textContent = '+7 495 221-06-75'
divHeaderNumber.append(divHeaderPhone)

const headerButton = document.querySelector('button')
headerButton.classList.add('header__call')
headerButton.textContent = 'Заказать звонок'
divHeaderUp.append(headerButton)

const divHeaderDown = document.createElement('div')
divHeaderDown.classList.add('header-down')
divHeaderWrapper.append(divHeaderDown)

const divHeaderList = document.createElement('ul')
divHeaderList.classList.add('header__list')
divHeaderDown.append(divHeaderList)

const divHeaderKatalog = document.createElement('li')
divHeaderKatalog.classList.add('header__btn')
divHeaderKatalog.textContent = 'Каталог'
divHeaderList.append(divHeaderKatalog)

const KatalogImg = document.createElement('img')
img.src = './assets/img/header/catalog.png'
img.alt = 'catalog.png'
divHeaderKatalog.append(KatalogImg)


const divHeaderProduct = document.createElement('li')
divHeaderProduct.classList.add('header__calling')
divHeaderKatalog.textContent = 'О продукте'
divHeaderList.append(divHeaderProduct)

const divHeaderReviews = document.createElement('li')
divHeaderReviews.classList.add('header__calling')
divHeaderKatalog.textContent = 'Отзовы'
divHeaderList.append(divHeaderReviews)

const divHeaderDilivery = document.createElement('li')
divHeaderDilivery.classList.add('header__calling')
divHeaderKatalog.textContent = 'Доствака и оплата'
divHeaderList.append(divHeaderDilivery)

const divHeaderСontacts = document.createElement('li')
divHeaderСontacts.classList.add('header__calling')
divHeaderKatalog.textContent = 'Контакты'
divHeaderList.append(divHeaderСontacts)

const divHeaderCartCalling = document.createElement('div')
divHeaderCartCalling.classList.add('header__calling')
divHeaderCartCalling.classList.add('header__cart')
divHeaderDown.append(divHeaderCartCalling)

const shoppingCart = document.createElement('img')
img.src = './assets/img/header/shopping-cart.png'
img.alt = shopping-cart.png
shoppingCart.classList.add('cart-img')
divHeaderCartCalling.append(shoppingCart)


const spanCardNone = document.createElement('span')
spanCardNone.classList.add('card__none')
spanCardNone.textContent = 'Моя корзина'
divHeaderCartCalling.append(spanCardNone)

const spanCardAdd = document.createElement('span')
spanCardAdd.classList.add('cart-add')
spanCardAdd.textContent = '+1'
divHeaderCartCalling.append(spanCardAdd)
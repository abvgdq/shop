import { burgerAction } from "./scripts/burger-action/burger.js";
import { armSlider } from "./scripts/sliders/armSlider.js";
import { reviewSlider } from "./scripts/sliders/reviewSlider.js";
import { ArmSelect } from "./scripts/Selectt/Selectt.js";
import { Main } from "./scripts/pages/main/Main.js"
import { ArmChairs } from "./scripts/pages/main/Main.js";
import { ShopReviews } from "./scripts/pages/main/Main.js";
import { ArmInfo } from "./scripts/pages/main/Main.js";


// const root = document.querySelector('#root');

// const header = document.createElement('header');
// header.classList.add('header');

// const divHeaderWrapper = document.createElement('div');
// divHeaderWrapper.classList.add('header__wrapper');
// divHeaderWrapper.classList.add('weapper');
// header.append(divHeaderWrapper);

// const divHeaderUp = document.createElement('div');
// divHeaderUp.classList.add('header-up');
// divHeaderWrapper.append(divHeaderUp);

// const divBurgerMenu = document.createElement('div');
// divBurgerMenu.classList.add('burger-menu');
// divHeaderUp.append(divBurgerMenu);

// const divFirstBar = document.createElement('div');
// divFirstBar.classList.add('first__bar');
// divBurgerMenu.append(divFirstBar);

// const divSecondBar = document.createElement('div');
// divSecondBar.classList.add('second__bar');
// divBurgerMenu.append(divSecondBar);

// const divThirdBar = document.createElement('div');
// divThirdBar.classList.add('third__bar');
// divBurgerMenu.append(divThirdBar);

// const divHeaderTitle = document.createElement('h2');
// divHeaderTitle.classList.add('header__title')
// divHeaderUp.append(divHeaderTitle)

// const headerTitleImg = document.createElement('img')
// headerTitleImg.src = './assets/img/header/logo.svg' 
// headerTitleImg.alt = 'logo.svg'
// headerTitleImg.classList.add('title-img')
// divHeaderTitle.append(headerTitleImg)

// const headerTitleDiscription = document.createElement('span')
// headerTitleDiscription.classList.add('title-discription')
// headerTitleDiscription.textContent = 'КРЕСЛА SAMURAI'
// divHeaderTitle.append(headerTitleDiscription)

// const divHeaderCart = document.createElement('div');
// divHeaderCart.classList.add('tel__cart')
// divHeaderUp.append(divHeaderCart)

// const headerCartImg = document.createElement('img')
// headerCartImg.src = './assets/img/header/shopping-cart.png' 
// headerCartImg.alt = 'shopping-cart.png'
// headerCartImg.classList.add('tel__cart-img')
// divHeaderCart.append(headerCartImg)

// const spanHeaderCart = document.createElement('span')
// spanHeaderCart.classList.add('cart-add')
// spanHeaderCart.textContent = '+1'
// divHeaderCart.append(spanHeaderCart)

// const divHeaderSearching = document.createElement('p');
// divHeaderSearching.classList.add('header__searching')
// divHeaderUp.append(divHeaderSearching)

// const headerSearchingImg = document.createElement('img')
// headerSearchingImg.src = './assets/img/header/loupe.png' 
// headerSearchingImg.alt = 'loupe.png'
// headerSearchingImg.classList.add('searching-img')
// divHeaderSearching.append(headerSearchingImg)

// const headerSearchingInput = document.createElement('input')
// headerSearchingInput.classList.add('header__searching-input')
// divHeaderSearching.append(headerSearchingInput)

// const divHeaderNumber = document.createElement('div');
// divHeaderNumber.classList.add('header__number')
// divHeaderUp.append(divHeaderNumber)

// const numberPhone = document.createElement('a')
// numberPhone.classList.add('header__phone')
// divHeaderNumber.append(numberPhone)

// const headerNumberImg = document.createElement('img')
// headerNumberImg.src = './assets/img/header/tel.png' 
// headerNumberImg.alt = 'tel.png'
// headerNumberImg.classList.add('phone-img')
// divHeaderNumber.append(headerNumberImg)

// const divHeaderPhone = document.createElement('div')
// divHeaderPhone.classList.add('number')
// divHeaderPhone.textContent = '+7 495 221-06-75'
// divHeaderNumber.append(divHeaderPhone)

// const headerButton = document.querySelector('button')
// headerButton.classList.add('header__call')
// headerButton.textContent = 'Заказать звонок'
// divHeaderUp.append(headerButton)

// const divHeaderDown = document.createElement('div')
// divHeaderDown.classList.add('header-down')
// divHeaderWrapper.append(divHeaderDown)

// const divHeaderList = document.createElement('ul')
// divHeaderList.classList.add('header__list')
// divHeaderDown.append(divHeaderList)

// const divHeaderKatalog = document.createElement('li')
// divHeaderKatalog.classList.add('header__btn')
// divHeaderKatalog.textContent = 'Каталог'
// divHeaderList.append(divHeaderKatalog)

// const KatalogImg = document.createElement('img')
// KatalogImg.src = './assets/img/header/catalog.png'
// KatalogImg.alt = 'catalog.png'
// divHeaderKatalog.append(KatalogImg)


// const divHeaderProduct = document.createElement('li')
// divHeaderProduct.classList.add('header__calling')
// divHeaderKatalog.textContent = 'О продукте'
// divHeaderList.append(divHeaderProduct)

// const divHeaderReviews = document.createElement('li')
// divHeaderReviews.classList.add('header__calling')
// divHeaderKatalog.textContent = 'Отзовы'
// divHeaderList.append(divHeaderReviews)

// const divHeaderDilivery = document.createElement('li')
// divHeaderDilivery.classList.add('header__calling')
// divHeaderKatalog.textContent = 'Доствака и оплата'
// divHeaderList.append(divHeaderDilivery)

// const divHeaderСontacts = document.createElement('li')
// divHeaderСontacts.classList.add('header__calling')
// divHeaderKatalog.textContent = 'Контакты'
// divHeaderList.append(divHeaderСontacts)

// const divHeaderCartCalling = document.createElement('div')
// divHeaderCartCalling.classList.add('header__calling')
// divHeaderCartCalling.classList.add('header__cart')
// divHeaderDown.append(divHeaderCartCalling)

// const shoppingCart = document.createElement('img')
// shoppingCart.src = './assets/img/header/shopping-cart.png'
// shoppingCart.alt = 'shopping-cart.png'
// shoppingCart.classList.add('cart-img')
// divHeaderCartCalling.append(shoppingCart)


// const spanCardNone = document.createElement('span')
// spanCardNone.classList.add('card__none')
// spanCardNone.textContent = 'Моя корзина'
// divHeaderCartCalling.append(spanCardNone)

// const spanCardAdd = document.createElement('span')
// spanCardAdd.classList.add('cart-add')
// spanCardAdd.textContent = '+1'
// divHeaderCartCalling.append(spanCardAdd)
// root.append(header);




// const arr5 = [1, 2, 3, 4, 5];


// Array.prototype.myMap = function(func) {
//     const newArr = []
//     for(let i=0; i<this.length; i++){
//         newArr.push(func(this[i], i)) 
//     }
//     return newArr
// }

// console.log(arr5.myMap(item => item * 2));

// Array.prototype.myFilter = function(func) {
//     const newArr = []
//      for(let i=0; i<this.length; i++){
//          const resault = func(this[i], i) 
//         if(resault){
//             newArr.push(this[i])
//         } 
//      }
//         return newArr
// }

// console.log(arr.myFilter(item => item % 2))

// const root = document.querySelector('#root')





const MainComponent = {
    render: () => {
        return Main();
    }
}
const Page1Component = {
    render: () => {
        return ArmChairs();
    }
}
const Page2Component = {
    render: () => {
        return ArmInfo();
    }

}
const Page3Component = {
    render: () => {
        return ShopReviews();
    }

}

const ErrorComponent = {
    render: () => {
        return `
       Error
        `;
    }

}

const routes = [
    { path: '/', component: MainComponent, },
    { path: '/page1', component: Page1Component, },
    { path: '/page2', component: Page2Component, },
    { path: '/page3', component: Page3Component, },
]

const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';
const findComponentByPath = (path, routes) => routes.find(r => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined;
const router = () => {
    const path = parseLocation();
    const { component = ErrorComponent } = findComponentByPath(path, routes) || {};
    document.querySelector('#app').innerHTML = component.render();
    burgerAction();
    armSlider();
    reviewSlider();
    ArmSelect();
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);


// const arr = [4, 3, 4, 5, 5, 6, 3, 7, 7, 6, 6, 1]

// function unicNum () {
//     const obj = {}
//     for (let i = 0; i < arr.length; i++){
//         if(obj[arr[i]] === undefined){
//             obj[arr[i]] = 1 
//         }else {
//             obj[arr[i]] += 1
//         }
//     }
//     return +Object.keys(obj).filter(item => obj[item] === 1)[0]
// }

// console.log(unicNum(arr))









// const infCurry = (a) => {
//     let sum = a;
//     const cur = b => {
//         if(b) {
//             sum += b
//             return cur;
//         } else {
//             return sum;
//         }
//     }

//     return cur
// }

// console.log(infCurry(1)(2)(3)())
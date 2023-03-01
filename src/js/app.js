import { settings, select, classNames } from './settings.js';
import Home from './components/Home.js';
import Contact from './components/contact.js';
import Product from './components/product.js';

const app = {
  initData: function () {
    const thisApp = this;

    thisApp.data = {};

    const url = settings.db.url + '/' + settings.db.products;

    fetch(url)
      .then(function (rawResponse) {
        return rawResponse.json();
      })
      .then(function (parsedResponse) {
        //console.log('parsedResponse', parsedResponse);

        thisApp.data.products = parsedResponse;
        thisApp.initProducts();
      });
    //console.log('thisApp.data', JSON.stringify(thisApp.data));
  },

  initPages: function () {
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.navLinks.links);

    const idFromHash = window.location.hash.replace('#/', '');

    let pageMatchingHash = thisApp.pages[0].id;

    for (let page of thisApp.pages) {
      if (page.id == idFromHash) {
        pageMatchingHash = page.id;
        break;
      }
    }

    thisApp.activatePage(pageMatchingHash);

    for (let link of thisApp.navLinks) {
      link.addEventListener('click', function (event) {
        const clickedElement = this;
        event.preventDefault();

        const id = clickedElement.getAttribute('href').replace('#', '');

        thisApp.activatePage(id);

        window.location.hash = '#/' + id;
      });
    }
  },

  activatePage: function (pageId) {
    const thisApp = this;

    for (let page of thisApp.pages) {
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }

    for (let link of thisApp.navLinks) {
      link.classList.toggle(classNames.nav.active, link.getAttribute('href') == '#' + pageId);
    }
  },

  initProducts: function () {
    const thisApp = this;

    new Product(thisApp.data.products);
    
    console.log('thisApp.data.products', thisApp.data.products);
  },

  initHome: function () {
    const thisApp = this;

    thisApp.homeElem = document.querySelector(select.containerOf.home);
    thisApp.homePage = new Home(thisApp.homeElem);
    

  },

  initContact: function () {
    const thisApp = this;

    thisApp.contactElem = document.querySelector(select.containerOf.contact);
    thisApp.contactPage = new Contact(thisApp.contactElem);
  },

  // initProductPage: function () {
  //   const thisApp = this;

  //   thisApp.productPageElem = document.querySelector(select.containerOf.productPage);
  //   thisApp.productPage = new Product(thisApp.productPageElem);
  // },

  init: function () {
    const thisApp = this;

    thisApp.initData();
    thisApp.initPages();
    thisApp.initHome();
    thisApp.initContact();
    // thisApp.initProductPage();
  },
};

app.init();

function navBarScroll () {
  const navBar = document.querySelector('nav');

  window.addEventListener('scroll', function () {
    if(window.pageYOffset > 100) {
      navBar.classList.add('bg-dark');
    } else {
      navBar.classList.remove('bg-dark');
    }
  });
}

navBarScroll();


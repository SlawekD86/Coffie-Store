import { select, templates } from '../settings.js';
import utils from '../utils.js';

class Product {
  constructor(data) {
    const thisProduct = this;

    thisProduct.render(data);
  }

  render(data){
    const thisProduct = this;
        
    const generatedHTML = templates.productWidget({
      products: data
    });
    const generatedDom = utils.createDOMFromHTML(generatedHTML);
    const generatedDomHome = utils.createDOMFromHTML(generatedHTML);
    const productWrapper = document.querySelector(select.containerOf.productPage);
    const homeProductWrapper = document.querySelector(select.containerOf.homeProduct);

    productWrapper.appendChild(generatedDom);
    homeProductWrapper.appendChild(generatedDomHome);

    thisProduct.dom = {};
  }
}

export default Product;
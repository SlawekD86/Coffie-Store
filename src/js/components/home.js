import { select, templates } from '../settings.js';
import utils from '../utils.js';


class Home {
  constructor() {
    const thisHome = this;

    thisHome.render();
  }

  render(){
    const thisHome = this;
        
    const generatedHTML = templates.homeWidget();
    const generatedDom = utils.createDOMFromHTML(generatedHTML);
    const homeWrapper = document.querySelector(select.containerOf.home);

    homeWrapper.appendChild(generatedDom);

    thisHome.dom = {};

    
    const titles = ['Home of Original Tastes', 'Real Venezuela, Real Coffee', 'Taste Real Venezuela'];

    const randomTitle = titles[Math.floor(Math.random() * titles.length)];

    const mainTitle = document.querySelector('.main-title');
    mainTitle.textContent = randomTitle;

  }
}

export default Home;
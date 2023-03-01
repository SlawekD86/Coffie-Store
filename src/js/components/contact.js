import { select, templates } from '../settings.js';
import utils from '../utils.js';

class Contact {
  constructor(element) {
    const thisContact = this;

    thisContact.render(element);
  }

  render(element){
    const thisContact = this;
        
    const generatedHTML = templates.contactWidget();
    const generatedDom = utils.createDOMFromHTML(generatedHTML);
    const contactWrapper = document.querySelector(select.containerOf.contact);

    contactWrapper.appendChild(generatedDom);

    thisContact.dom = {
      wrapper: element,
      Submitbutton: element.querySelector(select.containerOf.Submitbutton),
    };

    thisContact.dom.inputs = {
      name: element.querySelector(select.containerOf.input.name),
      title: element.querySelector(select.containerOf.input.title),
      message: element.querySelector(select.containerOf.input.message),
    };
  }

  

  initActions(){
    
  }
  
}

export default Contact;
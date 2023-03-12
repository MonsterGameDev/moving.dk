import HomeSection from './components/home/home.js';

import ShowCaseSection from './components/showcase/showcase.js'
import ContactForm from './components/contact/contact.js';

const homeSection = new HomeSection();
homeSection.render();

const showCaseSection = new ShowCaseSection();
showCaseSection.render();

const contactSection = new ContactForm();
contactSection.render();




import HomeSection from './components/home/home.js';
import ShowCaseSection from './components/showcase/showcase.js'
import ContactForm from './components/contact/contact.js';
import './web-components/testimonial-image-circle.js'
import Testimonials from './components/testimonials/testimonials.js';

const homeSection = new HomeSection();
homeSection.render();

const showCaseSection = new ShowCaseSection();
showCaseSection.render();

const testimonialsSection = new Testimonials();
testimonialsSection.render();

const contactSection = new ContactForm();
contactSection.render();



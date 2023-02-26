import './testemonials.scss';

class Testimonials {
    render = () => {
        const body = document.querySelector('body');
        const testimonialsSection = document.createElement('section');
        testimonialsSection.classList.add('testimonials');

        const heading = document.createElement('h1');
        heading.classList.add('testimonials__header');
        heading.innerHTML = "Testimonials";
        testimonialsSection.appendChild(heading);


        body.appendChild(testimonialsSection);

    }

}

export default Testimonials;
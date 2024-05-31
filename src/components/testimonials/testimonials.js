import './testemonials.scss';
import './../../web-components/testimonial-image-circle.js';

import * as profileImages from './../../img/profile-images/'

class Testimonials {
  constructor() { }

  render() {
    const body = document.querySelector('body');

    const testimonialSection = document.createElement('section');
    testimonialSection.classList.add('testimonial-section');

    testimonialSection.innerHTML = `
    <h2>Vores Kunder</h2>
    <div class="testimonial-list">
      <ph-testimonial-image-circle id="first">
        <span slot="image-label">Lisbet Haas</span>
        <span slot="testimonial-heading">God oplevelse</span>
        Det var en dejlig oplevelse at se moving.dk arbejde. De var effektive, venlige og virkelig dygtige til at pakke bilen.
        </ph-testimonial-image-circle>
      <ph-testimonial-image-circle id="second">
        <span slot="image-label">Rasmus Schultze</span>
        <span slot="testimonial-heading">Fantastisk</span>
        Rare flyttemænd og en fremragende pris. Tak for et godt stykke arbejde! Det bliver ikke sidste gang i hører fra mig  
        </ph-testimonial-image-circle>
      <ph-testimonial-image-circle id="third">
        <span slot="image-label">Sean Murphey</span>
        <span slot="testimonial-heading">Mange tak</span>
        Kan virkelig anbefale Moving DK.   
        </ph-testimonial-image-circle>
      <ph-testimonial-image-circle id="fourth">
        <span slot="image-label">Marie-Louise Rosted </span>
        <span slot="testimonial-heading">Skal du flytte</span>
        Disse gutter flyttede for os i sommer. Super folk!!    
        </ph-testimonial-image-circle>
    </div>
        `;


    body.appendChild(testimonialSection);

    const testimonial_1 = document.getElementById('first');
    testimonial_1.config = {
      profileImage: profileImages.default.PROFILE_PIC_1,
    }
    const testimonial_2 = document.getElementById('second');
    testimonial_2.config = {
      profileImage: profileImages.default.PROFILE_RASMUS,
    }
    const testimonial_3 = document.getElementById('third');
    testimonial_3.config = {
      profileImage: profileImages.default.PROFILE_SEAN,
    }
    const testimonial_4 = document.getElementById('fourth');
    testimonial_4.config = {
      profileImage: profileImages.default.PROFILE_ML,
    }
  }

}

export default Testimonials;
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
        <span slot="image-label">Per Høyer</span>
        <span slot="testimonial-heading">Lot of niceness</span>
        This is the default slot-text. This is the default slot-text. This is the default slot-text. This is the default slot-text. This is the default slot-text. 
      </ph-testimonial-image-circle>
      <ph-testimonial-image-circle id="second">
        <span slot="image-label">Alexei</span>
        <span slot="testimonial-heading">Lot of niceness</span>
        This is the default slot-text. This is the default slot-text. This is the default slot-text. This is the default slot-text. This is the default slot-text. 
      </ph-testimonial-image-circle>
      <ph-testimonial-image-circle id="third">
        <span slot="image-label">Lea Høyer</span>
        <span slot="testimonial-heading">Lot of niceness</span>
        This is the default slot-text. This is the default slot-text. This is the default slot-text. This is the default slot-text. This is the default slot-text. 
      </ph-testimonial-image-circle>
      <ph-testimonial-image-circle id="fourth">
        <span slot="image-label">Cecilie Stensnæs </span>
        <span slot="testimonial-heading">Lot of niceness</span>
        This is the default slot-text. This is the default slot-text. This is the default slot-text. This is the default slot-text. This is the default slot-text. 
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
      profileImage: profileImages.default.PROFILE_PIC_2,
    }
    const testimonial_3 = document.getElementById('third');
    testimonial_3.config = {
      profileImage: profileImages.default.PROFILE_PIC_3,
    }
    const testimonial_4 = document.getElementById('fourth');
    testimonial_4.config = {
      profileImage: profileImages.default.PROFILE_PIC_4,
    }
  }

}

export default Testimonials;
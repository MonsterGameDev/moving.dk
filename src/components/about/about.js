import './about.scss';
class AboutSection {
    constructor() {
        this.aboutSection;
        this.aboutHeading;
        this.aboutText;
        this.col1;
        this.col1Heading;
        this.col1Text;
        this.col2;
        this.col2Heading;
        this.col2Text;
        this.col3;
        this.col3Heading;
        this.col3Text;
    }

    render() {
        const body = document.querySelector('body');
        this.aboutSection = document.createElement('section');
        this.aboutSection.classList.add('about-section')
        this.aboutSection.innerHTML = `
        <h2>About us</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div class="columns">
          <div class="col fade-in">
            <h3>Lorem, ipsum.</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
              maiores fuga eos provident voluptas perferendis.
            </p>
          </div>
          <div class="col fade-in">
            <h3>A, illo!</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus minima quo beatae eius blanditiis officiis.
            </p>
          </div>
          <div class="col fade-in">
            <h3>Repudiandae, error?</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
              quasi quis doloribus quia illum laudantium.
            </p>
          </div>
        </div>
        `;

        body.appendChild(this.aboutSection);

        const faders = document.querySelectorAll('.fade-in');

        const aboutOptions = {
            threshold: 1.0,
            rootMargin: '0px 0px -100px 0px'
        }

        const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    entry.target.classList.add('appear');
                    appearOnScroll.unobserve(entry.target);
                }
            });
        }, aboutOptions);

        faders.forEach(fader => {
            appearOnScroll.observe(fader);
        });
    }


}

export default AboutSection;
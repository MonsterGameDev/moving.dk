import './fixed-cta-box.scss';

class FixedCtaBox {
    constructor() {
        this.ctabox;
    }

    render() {
        const body = document.querySelector('body');
        this.ctabox = document.createElement('div');
        this.ctabox.classList.add('fixed-box')

        body.appendChild(this.ctabox);
        this.ctabox.addEventListener('click', () => window.scrollTo(0, document.body.scrollHeight));
    }
}

export default FixedCtaBox;
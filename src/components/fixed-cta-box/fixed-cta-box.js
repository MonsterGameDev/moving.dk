import './fixed-cta-box.scss';

class FixedCtaBox {
    constructor() {
        this.ctabox;
    }

    render() {
        const body = document.querySelector('body');
        this.ctabox = document.createElement('div');
        this.ctabox.classList.add('fixed-box')
        this.ctabox.innerHTML = `
        <h3>Kontakt</h3>
        `;

        body.appendChild(this.ctabox);
    }
}

export default FixedCtaBox;
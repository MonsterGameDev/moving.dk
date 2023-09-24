
import './contact.scss';
class ContactForm {
    constructor() {
        this.contactSection;
        this.body = document.querySelector('body');

    }

    render() {
        this.contactSection = document.createElement('section');
        this.contactSection.classList.add('contact-section');
        //     <div class="form-container">
        //         <h2>Kontakt</h2>
        //         <div class="form-text">
        //         </div>
        //         <form>
        //         <div class="field-container">
        //             <label for="customer-name">Navn:</label>
        //             <input type="text" id="customer-name" name="customer-name" />
        //         </div>
        //         <div class="field-container">
        //             <label for="customer-phone">Telefon:</label>
        //             <input type="text" id="customer-name" name="customer-phone" />
        //         </div>
        //         <div class="field-container">
        //             <label for="customer-email">Email:</label>
        //             <input type="text" id="customer-email" name="customer-email" />
        //         </div>
        //         <div class="field-container">
        //             <label for="customer-comment">Beskrivelse:</label>
        //             <textarea id="customer-email" name="customer-email"></textarea>
        //         </div>
        //         <div class="cta">
        //             <button class="submit">Send</button>
        //             <button class="reset">Slet</button>
        //         </div>
        //         </form>
        //     </div>
        // `;
        this.contactSection.innerHTML = `
        <div id="contact-info">
            <div id="contact-info-content">
            <div id="logo"></div>
  
            <div class="divider"></div>
            <div id="text-content">
                <div id="data">
                    <span>Moving DK</span>
                    <span>Alexei Semenov Egholm</span>
                    <span>Tlf.: 26 44 56 00</span>
                    <span>E-mail: weare@moving.dk</span>
                    <span>Cvr.: 42432369</span>
                </div>
                <div id="social-links">
                    <span id="fb"><i class="fa-brands fa-facebook-f"></i></span>
                    <span id="insta"><i class="fa-brands fa-instagram"></i></span>
                </div>
            </div>
            </div>
        </div>
        `;
        this.body.appendChild(this.contactSection);

        this.fldName = document.getElementById('customer-name')
        this.fldEmail = document.getElementById('customer-phone')
        this.fldPhone = document.getElementById('customer-email')
        this.btnSubmit = document.querySelector('.submit');

        this.setupUIEvents();
        // this.setupForm();
    }

    setupUIEvents() {
        document.getElementById('fb').addEventListener('click', () => location.href = 'https://www.facebook.com/moving.dk');

    }

    setupForm() {
        document.querySelector('.submit').addEventListener('click', (e) => {
            e.preventDefault;
            window.open('mailto:test@example.com?subject=subject&body=body');
        });

        this.validateForm();
    }

    validateForm() {
        let valid = false;
        document.querySelectorAll('input').forEach(fld => {
            fld.addEventListener('blur', () => {

                valid = (
                    this.fldName.value.length >= 2 && (
                        this.fldEmail.value.length >= 2 ||
                        this.fldPhone.value.length >= 8
                    )
                );

                valid
                    ? this.btnSubmit.removeAttribute('disabled')
                    : this.btnSubmit.setAttribute('disabled', 'disabled')
            })
        });
    }



}

export default ContactForm;
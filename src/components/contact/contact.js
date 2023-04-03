
import './contact.scss';
class ContactForm {
    constructor() {
        this.contactSection;
        this.body = document.querySelector('body');
    }

    render() {
        this.contactSection = document.createElement('section');
        this.contactSection.classList.add('contact-section');
        // this.contactSection.innerHTML = `
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
        <style>
            .contact-section {
                
            }
        </style>
        `;
        this.body.appendChild(this.contactSection);
    }


}

export default ContactForm;
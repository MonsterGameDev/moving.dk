import * as Images from './../../img';
class RowOfPictures extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <style>
            :host {
                border: 2px solid blue;
                position: relative;
            }
            .row-of-pictures {
                width: 100%;
                height: 30vh;
                display: flex;
                flex-direction: row;
                background-image: linear-gradient(to bottom, rgba(255,0,0,0), rgba(255,0,0,1));
                
            }
            .picrow {
                width: 33.3%;
                height: 100%;
               
                
            }
             .pic1 {
                background-size:cover;
                background-position: 50%;
                opacity: 0;
            }
            .picrow.pic2 {
                background-color: black;
                opacity: 0;
            }
            .picrow.pic3 {
                background-color: crimson;
                background-position: 30%;
                opacity: 0;
            }
        </style>
        <section class="row-of-pictures">
            <div class="picrow pic1">1</div>
            <div class="picrow pic2">2</div>
            <div class="picrow pic3">3</div>
        </section>
        `;

        this.pic1 = this.shadowRoot.querySelector('.pic1');
        this.pic3 = this.shadowRoot.querySelector('.pic3');
    }

    connectedCallback() {
        this.pic1.style.backgroundImage = `url(${Images.default.FlytteMaendPicRow})`;
        this.pic3.style.backgroundImage = `url(${Images.default.UngtParPicRow})`;
    }


}

customElements.define('ph-row-of-pictures', RowOfPictures);
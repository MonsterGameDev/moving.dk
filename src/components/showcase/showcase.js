import './showcase.scss';
import * as IMAGES from './../../img'
class ShowCaseSection {
    constructor() {
        this.showcaseSection;
    }
    render() {
        const body = document.querySelector('body');

        this.showcaseSection = document.createElement('section');
        this.showcaseSection.classList.add('showcase-section');
        this.showcaseSection.innerHTML = `
            <div>x</div>
            <h2 class="section-header">Services</h2>
            <div class="row montage">
                <div class="image-container col1"></div>
                <div class="image-text col2">
                    <article>
                        <h3>Møbelmontage</h3>
                        <div class="text-content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, iusto aperiam. Quod amet ipsam necessitatibus consequatur quas fugiat saepe natus nulla eos voluptatum, recusandae harum ipsa deleniti iure doloremque, enim veritatis. Facere commodi obcaecati, praesentium minima consequuntur itaque expedita illo?
                        </div>
                    </article>
                </div>
            </div>
            <div class="row koersel">
                <div class="image-text col1">
                    <article>
                        <h3>Kørsel af Flyttelæs</h3>
                        <div class="text-content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, iusto aperiam. Quod amet ipsam necessitatibus consequatur quas fugiat saepe natus nulla eos voluptatum, recusandae harum ipsa deleniti iure doloremque, enim veritatis. Facere commodi obcaecati, praesentium minima consequuntur itaque expedita illo?
                        </div>
                    </article>
                </div>
                <div class="image-container col2"></div>
            </div>
            <div class="row flytning">
                <div class="image-container col1"></div>
                <div class="image-text col2">
                    <article>
                        <h3>Flytning</h3>
                        <div class="text-content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, iusto aperiam. Quod amet ipsam necessitatibus consequatur quas fugiat saepe natus nulla eos voluptatum, recusandae harum ipsa deleniti iure doloremque, enim veritatis. Facere commodi obcaecati, praesentium minima consequuntur itaque expedita illo?
                        </div>
                    </article>
                </div>
            </div>
            <div class="row besigtigelse">
                <div class="image-text col1">
                    <article>
                        <h3>Gratis Besigtigelse</h3>
                        <div class="text-content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, iusto aperiam. Quod amet ipsam necessitatibus consequatur quas fugiat saepe natus nulla eos voluptatum, recusandae harum ipsa deleniti iure doloremque, enim veritatis. Facere commodi obcaecati, praesentium minima consequuntur itaque expedita illo?
                        </div>
                    </article>
                </div>
                <div class="image-container col2"></div>
            </div>
            <div class="row kasser">
                <div class="image-container col1"></div>
                <div class="image-text col2">
                    <article>
                        <h3>Lån af Flyttekasser</h3>
                        <div class="text-content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, iusto aperiam. Quod amet ipsam necessitatibus consequatur quas fugiat saepe natus nulla eos voluptatum, recusandae harum ipsa deleniti iure doloremque, enim veritatis. Facere commodi obcaecati, praesentium minima consequuntur itaque expedita illo?
                        </div>
                    </article>
                </div>
            </div>
            <div class="row opbevaring">
                <div class="image-text col1">
                    <article>
                        <h3>Opbevaring</h3>
                        <div class="text-content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, iusto aperiam. Quod amet ipsam necessitatibus consequatur quas fugiat saepe natus nulla eos voluptatum, recusandae harum ipsa deleniti iure doloremque, enim veritatis. Facere commodi obcaecati, praesentium minima consequuntur itaque expedita illo?
                        </div>
                    </article>
                </div>
                <div class="image-container col2"></div>
            </div>
        `;

        body.appendChild(this.showcaseSection);

        this._showCaseSlideIn();

    }

    _showCaseSlideIn() {
        const showCaseSlideInOptions = {
            threshold: 0.5,
        }

        let observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    entry.target.querySelector('.col1').classList.add('showcase-slide-in');
                    entry.target.querySelector('.col2').classList.add('showcase-slide-in');
                    // document.querySelector('.col1').classList.add('showcase-slide-in');
                    // document.querySelector('.col2').classList.add('showcase-slide-in');
                }
            })
        }, showCaseSlideInOptions);

        observer.observe(document.querySelector('.montage'));
        observer.observe(document.querySelector('.koersel'));
        observer.observe(document.querySelector('.flytning'));
        observer.observe(document.querySelector('.besigtigelse'));
        observer.observe(document.querySelector('.kasser'));
        observer.observe(document.querySelector('.opbevaring'));
    }
}

export default ShowCaseSection;
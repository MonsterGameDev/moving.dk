import './galleri.scss';
import galleri, * as galleriImages from './../../img/galleri/'

class Galleri {
    constructor() { }

    render() {
        const body = document.querySelector('body');

        const galleriSection = document.createElement('section');
        galleriSection.classList.add('galleri-section');

        galleriSection.innerHTML = `
        <h2>Galleri</h2>
        <div class="galleri-image-list">
            <img id="g-pic1" class="galleri-image">
            <img id="g-pic2" class="galleri-image">
            <img id="g-pic3" class="galleri-image">
            <img id="g-pic4" class="galleri-image">
            <img id="g-pic5" class="galleri-image">
            <img id="g-pic6" class="galleri-image">
            <img id="g-pic7" class="galleri-image">
            <img id="g-pic8" class="galleri-image">
            <img id="g-pic9" class="galleri-image">
            <img id="g-pic10" class="galleri-image">
        </div>     
        `;

        body.appendChild(galleriSection);

        document.getElementById('g-pic1').src = galleri.GALLERI_1;
        document.getElementById('g-pic2').src = galleri.GALLERI_2;
        document.getElementById('g-pic3').src = galleri.GALLERI_3;
        document.getElementById('g-pic4').src = galleri.GALLERI_4;
        document.getElementById('g-pic5').src = galleri.GALLERI_5;
        document.getElementById('g-pic6').src = galleri.GALLERI_6;
        document.getElementById('g-pic7').src = galleri.GALLERI_7;
        document.getElementById('g-pic8').src = galleri.GALLERI_8;
        document.getElementById('g-pic9').src = galleri.GALLERI_9;
        document.getElementById('g-pic10').src = galleri.GALLERI_10;
    }
}

export default Galleri;
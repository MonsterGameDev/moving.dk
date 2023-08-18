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
            <h2 class="section-header">Services</h2>
            <div class="row montage">
                <div class="image-container col1"></div>
                <div class="image-text col2">
                    <article>
                        <h3>Møbelmontage <i>Fra 995,-</i></h3>
                        <div class="text-content">
                        Magasiner og sociale medier bugner med inspiration til hvordan din 2-værelses Københavnerlejlighed kan komme til at se ud efter en tur i Ikea, men der kan være langt fra idé til handling når man har 10 tommelfingre og i øvrigt kun råder over en halvflad cykel.<br><br> Overlad derfor trygt din montageopgave til Moving DK, din montør og transportør med det nødvendige grej og mange års erfaring. Vi kan både afhente, levere og samle dine møbler samt bortskaffe emballage, let og bekvemt.
                        </div>
                    </article>
                </div>
            </div>
            <div class="row koersel">
                <div class="image-text col1">
                    <article>
                        <h3>Kørsel af Flyttelæs <i>Fra 1.995,-</i></h3>
                        <div class="text-content">
                        Ser du et uudnyttet potentiale i din familie og dine venner, og mener at de er skabt til mere end bare hygge og byture, bør du overveje denne løsning når du skal flytte, hvis du ellers er klar til at tage konsekvenserne. Det er ikke sikkert at de kommer til at hjælpe dig med noget igen foreløbig, til gengæld kan du spare nogle penge og risikere at få en sjov dag med motion og flyttepizza.<br><br> I bærer ud og ind, vi stiller chauffør, bil, udstyr, flyttetæpper og ekspertise til rådighed, pakker forsvarligt og sørger for at det kommer sikkert frem.
                        </div>
                    </article>
                </div>
                <div class="image-container col2"></div>
            </div>
            <div class="row flytning">
                <div class="image-container col1"></div>
                <div class="image-text col2">
                    <article>
                        <h3>Privatflytning <i>Fra 3.995,-</i></h3>
                        <div class="text-content">
                        Vælger du at prioritere din tid og dine kræfter på andet end at slæbe kasser og unhandy møbler på snævre Københavnertrapper, er det her den oplagte løsning for dig. <br><br>Vi tilbyder alt fra simple pakker med flyttebil med 2 flyttemænd til mindre opgaver, til totalentreprise med nedpakning, opbevaring, udpakning, møbelmontage, møbellift, flyttelastbil med op til 33 pallepladser, opgaver der strækker sig over flere dage, det er nærmest kun fantasien der sætter grænser. Vi løser det.
                        </div>
                    </article>
                </div>
            </div>
            <div class="row kasser">
                <div class="image-text col2">
                    <article>
                    <h3>Erhvervsflytning <i>Efter aftale</i></h3>
                        <div class="text-content">
                        Denne type opgave kræver typisk nøje planlægning og ekspertise, for ikke at bremse arbejdsgangen unødigt. <br><br>Vi kan både være jeres seriøse partner ved mindre interne rokeringer eller transportopgaver, lokalt eller internationalt, men også garantere en tryg proces når det kommer til koordinering og gennemførelse af flytteopgaver i alle størrelser.<br><br> Her tilbyder vi naturligvis også montage når møbler skal samles eller adskilles, lamper og tavler skal ophænges eller nedtages.
                        </div>
                    </article>
                </div>
                <div class="image-container col1"></div>
            </div>


            <div class="row besigtigelse">
                <div class="image-container col2"></div>
                <div class="image-text col1">
                    <article>
                        <h3>Gratis Besigtigelse</h3>
                        <div class="text-content">
                        Ønsker du et tilbud på din opgave, er det ofte en god idé at vi foretager en besigtigelse for at kunne lave en udregning som giver mening for alle.<br><br> Vi kommer gerne efter aftale og beregner et tilbud inden for 48 timer – det koster ingenting. Vælger du at acceptere tilbuddet, stiller vi gerne flyttekasser til rådighed, også ganske gratis. <br><br> Du skal blot betale for levering og afhentning, så slipper du for at bøvle med unødige, gentagne ture til byggemarkedet og ender med i de fleste tilfælde ikke kun at spare tid og besvær, men også penge.
                        </div>
                    </article>
                </div>
            </div>
           
            <div class="row opbevaring">
                <div class="image-text col1">
                    <article>
                        <h3>Opbevaring</h3>
                        <div class="text-content">
                        Vi oplever ofte et behov for midlertidig opbevaring ifm. flytning. <br><br>Vælger du os som din flyttepartner, kan vi dække det behov uden beregning i op til 30 dage på vores varme og tørre lager i Storkøbenhavn.<br><br> Ønsker du dit gods opbevaret i en længere periode, så løser vi det også til en fordelagtig pris.
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
        const observerOptions = {
            threshold: 0.2,
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
        }, observerOptions);

        observer.observe(document.querySelector('.montage'));
        observer.observe(document.querySelector('.koersel'));
        observer.observe(document.querySelector('.flytning'));
        observer.observe(document.querySelector('.besigtigelse'));
        observer.observe(document.querySelector('.kasser'));
        observer.observe(document.querySelector('.opbevaring'));
    }
}

export default ShowCaseSection;
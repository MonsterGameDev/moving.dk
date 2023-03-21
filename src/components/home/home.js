//import HomeBackground from './../../img/2a.jpg';
import './home.scss';
import IMAGES from './../../img/index.js'

class HomeSection {
    keyframes = [
        { transform: "scale(0)" },
        { transform: "scale(1)" },
    ];
    options = {
        duration: 1000,
        iterations: 1,
        delay: 1000,
        fill: 'backwards',
        easing: 'cubic-bezier(0,.78,.61,1.86)',
    };
    opacityKFs = [
        { opacity: 0 }, { opacity: 1 }
    ];
    punshlineHeadingOptions = {
        delay: 1500,
        duration: 1000,
        iterations: 1,
        fill: 'backwards',
    };
    punshlineOptions = {
        duration: 500,
        fill: "backwards",
        iterations: 1,
    }

    puhchlineHeading = 'Vi tilbyder:';
    punchlineTexts = [
        'Møbelmontage',
        'Kørsel af flyttelæs',
        'Flytning',
        'Gratis besigtigelse',
        'Gratis udlån af flyttekasser',
        'Opbevaring'
    ];

    logoKFs =
        [
            {
                transform: "scale(0) rotateX(0deg)",
                opacity: 0
            },
            {
                transform: "scale(1) rotateX(720deg)"
            }
        ]

    logoAnimationOptions = {
        delay: 3500,
        duration: 1000,
        easeing: "ease-out",
        fill: "backwards"
    }

    constructor() {
        this.picrow;
        this.bg;
        this.landscapeScroll;

    }

    render() {
        const body = document.querySelector('body');

        const homeSection = document.createElement('section');
        homeSection.classList.add('home-section');
        homeSection.setAttribute('id', 'home-section');

        const header = document.createElement('header')
        header.classList.add('header');


        const grayBox = document.createElement('div');
        grayBox.classList.add('gray-box');


        const listHeading = document.createElement('span');
        listHeading.innerHTML = this.puhchlineHeading;
        listHeading.classList.add('punshline-heading');
        grayBox.appendChild(listHeading);

        const punshlineContainer = document.createElement('div');
        punshlineContainer.classList.add('punshline-container');

        let animationDelay = 1800
        this.punchlineTexts.forEach((heading, i) => {
            const punshline = document.createElement('span');
            punshline.classList.add('punshline');
            punshline.innerHTML = this.punchlineTexts[i];
            punshlineContainer.appendChild(punshline);

            animationDelay += 300;
            let animationsOptions = {
                ...this.punshlineOptions,
                delay: animationDelay
            };

            punshline.animate(this.opacityKFs, animationsOptions);

        });

        grayBox.appendChild(punshlineContainer);

        const logo = document.createElement('img');
        logo.src = IMAGES.Logo;
        logo.classList.add('logo')
        logo.animate(this.logoKFs, this.logoAnimationOptions);
        grayBox.appendChild(logo);


        header.appendChild(grayBox);

        listHeading.animate(this.opacityKFs, this.punshlineHeadingOptions);

        homeSection.appendChild(header);

        this.picRow = document.createElement('section');
        this.picRow.classList.add('pics-section');

        const picCell1 = document.createElement('div');
        picCell1.classList.add('picrow');
        picCell1.classList.add('pic1');
        picCell1.classList.add('fromLeft');
        this.picRow.appendChild(picCell1);

        const picCell2 = document.createElement('div');
        picCell2.classList.add('picrow');
        picCell2.classList.add('pic2');
        picCell2.classList.add('fadeTextboxIn');
        picCell2.innerHTML = `
        <div class="pic2-header">Tillid, Tryghed og Professionalisme</div>
        <div class="pic2-text">Tre vigtige ord når du lægger dine ejendele i hænderne på en fremmed.<br /> Vi passer på dine ting som var de vore egne, håndterer dem professionelt og sikkert! <br /><br />Hele vejen fra deres gamle til deres nye hjem</div> 
        `;
        this.picRow.appendChild(picCell2);

        const picCell3 = document.createElement('div');
        picCell3.classList.add('picrow');
        picCell3.classList.add('pic3');
        picCell3.classList.add('fromRight');
        this.picRow.appendChild(picCell3);

        homeSection.appendChild(this.picRow);

        body.appendChild(homeSection)

        grayBox.animate(this.keyframes, this.options);

        // Intersection Observer PicRow
        this.picRowIntersection();

        // Scroll
        this.bg = document.getElementById('home-section');
        this.landscapeScroll = () => this.bg.style.backgroundSize = 190 - +window.scrollY / 12 + '%';
        this.setUpScrollevents();



        screen.orientation.addEventListener('change', this.setUpScrollevents.bind(this));



    }

    picRowIntersection() {
        let options = {
            threshold: 1.0,
            rootMargin: '0px 0px -100px 0px'
        };

        let observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    document.querySelector('.fromLeft').classList.add('done');
                    document.querySelector('.fromRight').classList.add('done');
                    document.querySelector('.fadeTextboxIn').classList.add('done');
                    // document.querySelector('.gray-box').animate([{ transform: 'scale(1)' }, { transform: 'scale(0)' }], {
                    //     duration: 1000,
                    //     iterations: 1,
                    //     fill: 'forwards'
                    // });
                }
            })
        }, options);
        observer.observe(document.querySelector('.pics-section'));
    }



    setUpScrollevents() {
        switch (screen.orientation.type) {
            case 'landscape-primary':
            case 'landscape-secondary': {
                this.bg.style.backgroundSize = '190%';
                window.addEventListener('scroll', this.landscapeScroll)
                break;
            } default: {
                window.removeEventListener('scroll', this.landscapeScroll);
                this.bg.style.backgroundSize = 'cover';
                break;
            }
        }



    }


}

export default HomeSection;
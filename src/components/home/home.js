//import HomeBackground from './../../img/2a.jpg';
import './home.scss';
import LOGO from './../../img/moving-dk-logo.png'

class HomeSection {

    keyframes = [
        { transform: "scaleX(0) scaleY(0)" },
        { transform: "scaleX(1) scaleY(1)" },
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

    render() {
        const body = document.querySelector('body');

        const homeSection = document.createElement('section');
        homeSection.classList.add('home-section');

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
        logo.src = LOGO;
        logo.classList.add('logo')
        logo.animate(this.logoKFs, this.logoAnimationOptions);
        grayBox.appendChild(logo);


        homeSection.appendChild(grayBox);
        grayBox.animate(this.keyframes, this.options);
        listHeading.animate(this.opacityKFs, this.punshlineHeadingOptions);

        body.appendChild(homeSection);

    }


}

export default HomeSection;
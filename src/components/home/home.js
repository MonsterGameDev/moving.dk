import HomeBackground from './../../img/2a.jpg';
import './home.scss';

class HomeSection {
    render() {
        const body = document.querySelector('body');

        const homeSection = document.createElement('section');
        homeSection.classList.add('home-section');
        const heading = document.createElement('h1');
        heading.innerHTML = "Moving  DK";
        homeSection.appendChild(heading);
        const homeBackground = document.createElement('img');
        homeBackground.src = HomeBackground;
        homeSection.appendChild(homeBackground);

        body.appendChild(homeSection);


    }
}

export default HomeSection;
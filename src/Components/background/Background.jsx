import React from 'react';
import './Background.css';
import video1 from '../../assets/video1.mp4'
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
// test
const Background = ({ playStatus, heroCount }) => {
    let backgroundImage;
    
    if (playStatus) {
        return (
            <video className='background' autoPlay loop muted>
                <source src={video1} type='video/mp4'/>
            </video>
        );
    } else {
        if (heroCount === 0) {
            backgroundImage = image1;
        } else if (heroCount === 1) {
            backgroundImage = image2;
        } else if (heroCount === 2) {
            backgroundImage = image3;
        }

        return <img src={backgroundImage} className='background' alt='background'/>;
    }
};

export default Background;

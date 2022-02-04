import React from "react";
import headshot from '../../assets/images/profile.jpg';

function Home() {
    return (
        <div>
            <h1>Hi, I'm Reza Mahmoudian</h1>
            <img src={headshot} className='my-2 center' alt='headshot' />
            <h2>Full Stack Developer</h2>
        </div>
    );
};

export default Home;
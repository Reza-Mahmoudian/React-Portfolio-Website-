import React from 'react';
import headshot from '../../assets/images/profile.jpg';

function About() {
    return (
        <section className='my-5'>
            {/* <img src={headshot} className='my-2' alt='headshot' /> */}
            <h1 id='about'>Who I am</h1>
            
            <p>
     highly motivated learner and eager to face with problems.I'm an enthusiastic, responsible and hard working developer. Being worked for different projects helped me to adopt to the changes quickly and made me a mature team worker. I am able to work well both in a team environment as well as using own initiative. I am able to work well under pressure and adhere to strict deadlines.
    </p>
    <p>
      When I started to include coding skills in my curriculum, I realized that I wanted to be the one to find innovative and effective solutions to real-world problems.
    </p>
    <p>
      I currently work with JavaScript frameworks, and I'm hoping to grow and evolve by developing my skills using databases, back-end technologies, and many more.
    </p>
    <p>
      I'm really excited to take the leap with the right organization and to start building!
    </p>

        </section>
    );
}

export default About;
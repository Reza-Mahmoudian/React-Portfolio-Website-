import React from 'react';
import Project from '../Project';
// import projects from './projects';


function Portfolio(props) {
  
    return (
        <section>
            <h1 id='portfolio'>My Work</h1>
            <Project />
            
            {/* <div className="flex-row">
              {projects.map((project) => (
                <Project project={project} key={project.id}>
                  <img src={require(`../../assets/images/${project.image}`)} alt={project.title}/>
                 </Project>
              ))}
            </div> */}
        </section>
    );
}

export default Portfolio;
import React from "react";
import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/button';

function Project() {

  const projects = [
    {
      id: 'project-booksearcher',
      url: 'https://peaceful-tor-40781.herokuapp.com/',
      github: 'https://github.com/Reza-Mahmoudian/Book-Searcher',
      title: 'Booksearcher',
      tech: 'MongoDB/Apollo-Server-Express/Mongoose/GraphQL/JavaScript',
      image: 'https://user-images.githubusercontent.com/39717428/151239960-459efc35-3b31-4d0d-be4f-05b0ce094853.png'
    },
    {
      id: 'project-reduxshop',
      url: 'https://qcent-e-shoppe.herokuapp.com/',
      github: 'https://github.com/Reza-Mahmoudian/redux-shop',
      title: 'Reduxshop',
      tech: 'Reactjs/MongoDB/Apollo-Server-Express/Mongoose/GraphQL/JavaScript',
      image: 'project-reduxshop.png'
    },
   
];

    return (
      <div className="flex-row card">
        {projects.map((info) => (
          <div>
            <Card className="text-center" bg="secondary">
                <Card.Img variant="top" src={require(`../../assets/images/${info.image}`)} alt={info.title}/>
                  <Card.Body>
                    <Card.Title>{info.title}</Card.Title>
                    <p>{info.tech}</p>
                      <div className="d-grid gap-2">
                        <Button variant="dark" size="lg" href={info.link}>Github Repository </Button>
                        <Button variant="dark" size="lg" href={info.deploy}>Deployed Site</Button>
                    </div>
                  </Card.Body>
              </Card>
          </div>
        ))}      
      </div>
    )
}

export default Project;
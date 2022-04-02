import React from 'react'
import './index.css'
import {Projects} from '../../assets/data/project'
import { Card, Button } from 'react-bootstrap';

const Experience = () => {
    return (
        <div className="experience">
            {Projects.map((project) => (
                <Card  key={project.image} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={project.image}/>
                    <Card.Body>
                        <Card.Title>{project.title}</Card.Title>
                        <Card.Text>
                            {project.subtitle}
                        </Card.Text>
                        <Card.Text>
                            {project.description}
                        </Card.Text>
                        <Button variant="primary" href={project.link} target="_blank">Go To Project</Button>
                    </Card.Body>
                </Card>

            ))}
      </div>
    )
}
export default Experience;
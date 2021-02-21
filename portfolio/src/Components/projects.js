import react from 'react';
import projects from '../Constants/projects.json'
import ProjectCard from './ProjectCard'

function Projects(props) {
    return (
        <section className="container container-gray" id='projects'>
            <h1 className="title">Recent Projects</h1>
            <h3 className="subtitle">A few examples of projects I have enjoyed working on.</h3>
            <div className="row row-project">
                    {
                        projects.map((project) =>
                            <ProjectCard {...project} />
                        )}
            </div>
        </section>
    )
}

export default Projects;

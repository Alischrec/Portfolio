import React from 'react';

function ProjectCard(props) {
    return (
        <div class="col-md-4 col-sm-6">
            <div class="project-card">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.description}</p>
                <img src={props.image} alt="city" class="card-image" />
                <div class="link-container">
                    <a class="btn btn-primary" href={props.deployed} target="_blank">See it
                            Live</a>
                    <a class="btn btn-primary" href={props.repo} target="_blank">View
                            Code</a>
                </div>
            </div>
        </div>
    )
}

function Example() {
    const projects = [{
        title: 'projectName',
        description: 'description'
        // and so on
    }]
    return (
        <div>
            {
                projects.map((project) =>
                    <ProjectCard {...project} />
                )}
        </div>
    )
}
import React from 'react';


export default function ProjectCard(props) {
    return (
        <div class="col-md-4 col-sm-6">
            <div class="project-card">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.description}</p>
                <img src={props.image} alt={props.alt} class="card-image" />
                <div class="link-container">
                    <a class="btn btn-primary" href={props.deployed} target="_blank" rel="noreferrer">See it
                            Live</a>
                    <a class="btn btn-primary" href={props.repo} target="_blank" rel="noreferrer">View
                            Code</a>
                </div>
            </div>
        </div>
    )
}

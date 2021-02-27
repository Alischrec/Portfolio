import React from 'react';


export default function ProjectCard(props) {
    return (
        <div className="col-md-6 col-lg-4 col-sm-6">
            <div className="project-card">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <img src={props.image} alt={props.alt} className="card-image" />
                <br></br>
                <div className="link-container">
                    <a className="btn btn-primary" href={props.deployed} target="_blank" rel="noreferrer">See it
                            Live</a>
                    <a className="btn btn-primary" href={props.repo} target="_blank" rel="noreferrer">View
                            Code</a>
                </div>
            </div>
        </div>
    )
}

import react from 'react';

function Projects(props) {
    return (
        <section className="container container-gray" id='projects'>
            <h1 className="title">Recent Projects</h1>
            <h3 className="subtitle">A few examples of projects I have enjoyed working on.</h3>
            <div className="row row-project">

                <div className="col-md-4 col-sm-6">
                    <div className="project-card">
                        <h5 className="card-title">Dumbbells & Donuts</h5>
                        <p className="card-text">Clean and easy workout and nutrition tracking.</p>
                        <img src="/images/project1.gif" alt="Gif of Alisons first interractive UI
                    project. This is a workout/nutrition web-app." className="card-image" />
                        <div className="link-container">
                            <a className="btn btn-primary" href="https://alischrec.github.io/Dumbbells_and_Donuts/"
                                target="_blank">See
                            it Live</a>
                            <a className="btn btn-primary" href="https://github.com/Alischrec/Dumbbells_and_Donuts"
                                target="_blank">View
                            Code</a>
                        </div>

                    </div>
                </div>

                <div className="col-md-4 col-sm-6">
                    <div className="project-card">
                        <h5 className="card-title">Coding Quiz</h5>
                        <p className="card-text">Stylish and functional coding quiz.</p>
                        <img src="/images/codequiz.gif" height="128" alt="Gif of Alisons coding quiz github
                    project." className="card-image" />
                        <div className="link-container">
                            <a className="btn btn-primary" href="https://alischrec.github.io/WebAPIs_Hwk04/" target="_blank">See
                            it
                            Live</a>
                            <a className="btn btn-primary" href="https://github.com/Alischrec/WebAPIs_Hwk04"
                                target="_blank">View
                            Code</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-sm-6">
                    <div className="project-card">
                        <h5 className="card-title">Password Generator</h5>
                        <p className="card-text">Generate a password based on selected criteria.</p>
                        <img src="/images/passgen.gif" alt="Gif of Alisons password generator Github
                    project." className="card-image" />

                        <div className="link-container">
                            <a className="btn btn-primary" href="https://alischrec.github.io/PasswordGenerator_Hwk03/"
                                target="_blank">See it Live</a>
                            <a className="btn btn-primary" href="https://github.com/Alischrec/PasswordGenerator_Hwk03"
                                target="_blank">View
                            Code</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6">
                    <div className="project-card">
                        <h5 className="card-title">Day Planner</h5>
                        <p className="card-text">Easy online hourly planner.</p>
                        <img src="/images/planner.gif" alt="Gif of Alisons day planner Github project."
                            className="card-image" />
                        <div className="link-container">
                            <a className="btn btn-primary" href="https://alischrec.github.io/DayPlanner_Hwk05/"
                                target="_blank">See it
                            Live</a>
                            <a className="btn btn-primary" href="https://github.com/Alischrec/DayPlanner_Hwk05"
                                target="_blank">View
                            Code</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6">
                    <div className="project-card">
                        <h5 className="card-title">Weather API</h5>
                        <p className="card-text">Simple weather trackeker by city.</p>
                        <img src="/images/weather.gif" height="128" alt="city" className="card-image" />

                        <div className="link-container">
                            <a className="btn btn-primary" href="https://alischrec.github.io/WeatherDashboard_Hwk06/"
                                target="_blank">See it
                            Live</a>
                            <a className="btn btn-primary" href="https://github.com/Alischrec/WeatherDashboard_Hwk06"
                                target="_blank">View
                            Code</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-sm-6">
                    <div className="project-card">
                        <h5 className="card-title">Naughty or Nice</h5>
                        <p className="card-text">Holiday gift list tracker.</p>
                        <img src="/images/project2.gif" alt="city" className="card-image" />
                        <div className="link-container">
                            <a className="btn btn-primary" href="https://evening-springs-93825.herokuapp.com"
                                target="_blank">See it
                            Live</a>
                            <a className="btn btn-primary" href="https://github.com/NirmalaAbothu/Naughty_or_Nice"
                                target="_blank">View
                            Code</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6">

                </div>
            </div>
        </section>
    )
}

export default Projects;

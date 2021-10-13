import react from 'react';

function Technologies(props) {
    return (
            <section className=" skill-container" id='technologies'>
        <div className="row">
            <div className="col-md-10 offset-md-1">
                <div className="row text-center">

                    <div className="col">
                        <div className="skill-bar-title">
                            <i className="fab fa-html5 fa-3x"></i>
                            <p>HTML5</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="skill-bar-title">
                            <i className="fab fa-css3-alt fa-3x"></i>
                            <p>CSS3</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="skill-bar-title">
                            <i className="fab fa-js-square fa-3x"></i>
                            <p>JavaScript</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="skill-bar-title">
                            <i className="fab fa-sass fa-3x"></i>
                            <p>SASS</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="skill-bar-title">
                            <i className="fab fa-npm fa-3x"></i>
                            <p>NPM</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="skill-bar-title">
                            <i className="fab fa-node fa-3x"></i>
                            <p>NodeJS</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="skill-bar-title">
                            <i className="fab fa-react fa-3x"></i>
                            <p>React</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="skill-bar-title">
                            <i className="fab fa-angular fa-3x"></i>
                            <p>Angular</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="skill-bar-title">
                            <i className="fab fa-git fa-3x"></i>
                            <p>Git</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    )
}

export default Technologies;

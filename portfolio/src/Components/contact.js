import react from 'react';

function Contact(props) {
    return (
        <section className="container" id='contact'>
            <div className="card text-white bg-dark mb-3 start-project-card">
                <div className="card-body card-flex contact ">
                    <h3 className="intro subtitle contact-me-subtitle">Contact Me</h3>
                    <h3 className="intro subtitle">
                        <a href="https://www.instagram.com/alischrec" className="social-icon"><i
                            className="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/alison-schreckengast/" className="social-icon" target='_blank'><i
                            className="fab fa-linkedin"></i></a>
                        <a href="https://github.com/Alischrec" className="social-icon" target='_blank'><i
                            className="fab fa-github"></i></a>
                        <a href="mailto:alischreck@gmail.com" className="social-icon" target='_blank'><i
                            className="fas fa-envelope"></i></a>
                        <a href="./assets/images/resume.pdf" className="social-icon" target='_blank'><i
                            className="far fa-file"></i></a>

                    </h3>
                </div>
            </div>
        </section>
    )
}

export default Contact;
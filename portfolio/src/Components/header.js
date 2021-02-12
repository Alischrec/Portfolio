import react from 'react';

function Header(props) {
    return (
        <section className="container">
            <img src="/images/headshot.jpg" className="headshot" alt="headshot image" />
            <h1 className="title">Web Developer & Support Specialist</h1>
            <h3 className="subtitle" id="element"></h3>
            <img src="/images/canva.png" className="hero img-fluid" alt="image of computer and other technologies" />
        </section>
    )
}

export default Header;
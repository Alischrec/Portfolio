import react from 'react';
import { Image } from 'react-bootstrap';

function Header(props) {
    return (
        <section className="container">
            <Image src="/images/headshot.jpg" className="headshot" alt="headshot" />
            <h1 className="title">Web Developer & Support Specialist</h1>
            <h3 className="subtitle" id="element"></h3>
            <Image src="/images/canva.png" className="hero img-fluid" alt="computer and other technologies" />
        </section>
    )
}

export default Header;
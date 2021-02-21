import react from 'react';
import { Image } from 'react-bootstrap';
// import TypeIt from "typeit";

function Header(props) {
    // new TypeIt("#element", {
    //     strings: "I write code with a focus on an easy to use UX.",
    //   }).go();
    return (
        <section className="container">
            <Image src="/images/headshot.jpg" className="headshot" alt="headshot" />
            <h1 className="title">Web Developer & Support Specialist</h1>
            <p className="subtitle" id="element"></p>
            <Image src="/images/canva.png" className="hero img-fluid" alt="computer and other technologies" />
        </section>
    )
}

export default Header;
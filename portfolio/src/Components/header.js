import react from 'react';
import { Image } from 'react-bootstrap';
import TypeIt from "typeit-react";

function Header(props) {
    return (
        <section className="container">
            <Image src="/images/headshot.jpg" className="headshot" alt="headshot" />
            <div className='center'>
                <h1 className="title">Web Developer & Technical Support Specialist</h1>
                <TypeIt className="subtitle"
                    options={{
                        strings: ["I write code with a focus on an easy to use UX."],
                        speed: 50,
                        waitUntilVisible: true
                    }} />
            </div>
            <Image src="/images/canva.png" className="hero img-fluid" alt="computer and other technologies" />
        </section>
    )
}

export default Header;
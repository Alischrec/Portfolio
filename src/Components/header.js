import react from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import TypeIt from "typeit-react";

function Header(props) {
    return (
        <Container>
            <Container>
                <Row>
                    <Col md={4} className='justify-content-center' style={{display:'flex'}}>
                        <Image src="/images/headshot.jpg" className="headshot" alt="headshot" />
                    </Col>
                    <Col style={{display:'flex'}} md={8} className='justify-content-center'>
                        <div className='center'>
                            <h1 className="title">Web Developer & Technical Support Specialist</h1>
                            <br></br>
                            <TypeIt className="subtitle"
                                options={{
                                    strings: ["I write code with a focus on an easy to use UI."],
                                    speed: 50,
                                    waitUntilVisible: true
                                }} />
                        </div>
                    </Col>
                </Row>
            </Container>
            <Image src="/images/canva.png" className="hero img-fluid" alt="computer and other technologies" />
        </Container>
    )
}

export default Header;
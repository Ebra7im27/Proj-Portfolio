import React, { useEffect } from 'react'
import './Projects.css'
import Proj1 from '../../assets/proj1.png'
import Proj2 from '../../assets/proj2.png'
import Proj3 from '../../assets/proj3.png'
import Proj4 from '../../assets/proj4.png'
import Proj5 from '../../assets/proj5.png'
import { Card, Row, Col, Container } from 'react-bootstrap'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false, 
        })
        window.addEventListener('scroll', () => {
            AOS.refresh()
        })
        
        return () => {
            window.removeEventListener('scroll', () => {
                AOS.refresh()
            })
        }
    }, [])

    return (
        <Container id='Projects'>
            <h1 className='Projectsh1' data-aos="fade-up">My Projects</h1>
            <Row className="g-3 mb-3">
                <Col xs={12} sm={4} data-aos="fade-up">
                    <Card className="mx-auto cardP" style={{ position: 'relative' }}>
                        <a target='_blank' href='https://ebra7im27.github.io/Modern-Cars/' className='card'>
                            <Card.Img variant="top" src={Proj1} alt="Project1" />
                            <p className="textOverlay"><span className='text-danger'>Modern Cars</span> &nbsp;&nbsp;HTML, CSS, No Responsive</p>
                        </a>
                    </Card>
                </Col>
                <Col xs={12} sm={4} data-aos="fade-up">
                    <Card className="mx-auto cardP" style={{ position: 'relative' }}>
                        <a target='_blank' href='https://ebra7im27.github.io/Apple/' className='card'>
                            <Card.Img variant="top" src={Proj2} alt="Project2" />
                            <p className="textOverlay"><span className='text-danger'>Apple</span>&nbsp;&nbsp;-&nbsp;&nbsp;HTML5, CSS3, No Responsive</p>
                        </a>
                    </Card>
                </Col>
                <Col xs={12} sm={4} data-aos="fade-up">
                    <Card className="mx-auto cardP" style={{ position: 'relative' }}>
                        <a target='_blank' href='https://ebra7im27.github.io/adidas-Egypt/' className='card'>
                            <Card.Img variant="top" src={Proj3} alt="Project3" />
                            <p className="textOverlay"><span className='text-danger'>adidas</span>&nbsp;&nbsp;-&nbsp;&nbsp;HTML5, CSS3, Bootstrap</p>
                        </a>
                    </Card>
                </Col>
                <Col xs={12} sm={4} data-aos="fade-up">
                    <Card className="mx-auto cardP mt-4" style={{ position: 'relative' }}>
                        <a target='_blank' href='https://ebra7im27.github.io/Fluency-Quest/' className='card'>
                            <Card.Img variant="top" src={Proj4} alt="Project4" />
                            <p className="textOverlay"><span className='text-danger'>Fluency-Quest</span>&nbsp;&nbsp;&nbsp;HTML5, CSS3, Bootstrap, js</p>
                        </a>
                    </Card>
                </Col>
                <Col xs={12} sm={4} data-aos="fade-up">
                    <Card className="mx-auto cardP mt-4" style={{ position: 'relative' }}>
                        <a target='_blank' href='https://ebrahimelngar-app.surge.sh/' className='card'>
                            <Card.Img variant="top" src={Proj5} alt="Project5" />
                            <p className="textOverlay"><span className='text-danger'>My Portfolio</span>&nbsp;&nbsp;HTML5, CSS3, Bootstrap, js, React.js</p>
                        </a>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default Projects

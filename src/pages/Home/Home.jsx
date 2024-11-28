import React, { useEffect } from 'react'
import './Home.css'
import HomePhoto from '../../assets/HomePhoto.jpg'
import { Container } from 'react-bootstrap'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        })
    }, [])

    return (
        <div className="card mb-3 SecHome" style={{ maxWidth: "100%", maxHeight: "100%" }}>
            <Container>
                <div className="row g-0" id='#'>
                    <div className="col-md-8">
                        <div className="card-body content" data-aos="fade-up">
                            <h2 data-aos="fade-up">Hello !</h2>
                            <p data-aos="fade-up">I'm <span id='name'>Ebrahim Elngar</span></p>
                            <p data-aos="fade-up">Front-End Developer Specialized in Building Responsive and Interactive Websites</p>
                            <div className="buttons">
                                <button data-aos="fade-up"><a href='#Contact'>Contact Me</a></button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 borderPhoto mt-5">
                        <img
                            src={HomePhoto}
                            className="img-fluid rounded-start img-ani"
                            alt="HomePhoto-about"
                            data-aos="zoom-in"
                        />
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default Home
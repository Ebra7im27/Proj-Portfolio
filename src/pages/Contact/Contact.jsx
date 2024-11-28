import './Contact.css'
import React, { useEffect } from 'react'
import ContactPhoto from '../../assets/Contact.jpg'
import { Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,  // تفعيل الأنيميشن في كل مرة عند التمرير
        });
        
        window.addEventListener('scroll', () => {
            AOS.refresh();  // تحديث التأثيرات عند التمرير
        });
        
        return () => {
            window.removeEventListener('scroll', () => {
                AOS.refresh();
            });
        };
    }, []);

    return (
        <div className="card mb-3 SecCon" style={{ maxWidth: "100%", maxHeight: "100%" }}>
            <Container>
                <div className="row g-0" id='Contact'>
                    <div className="col-md-4 borderPhoto mt-5">
                        <img
                            src={ContactPhoto}
                            className="img-fluid rounded-start"
                            alt="ContactPhoto-about"
                            data-aos="zoom-in"
                        />
                    </div>

                    <div className="col-md-8">
                        <div className="card-body ContentMe">
                            <h2 data-aos="fade-up">Contact</h2>
                            <p className='fs-6 fw-bold' data-aos="fade-up">Name</p>
                            <InputGroup className="mb-3" data-aos="fade-up">
                                <Form.Control placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
                            </InputGroup>
                            
                            <p className='fs-6 fw-bold' data-aos="fade-up">Email address</p>
                            <InputGroup className="mb-3" data-aos="fade-up">
                                <Form.Control type="email" placeholder="Enter your email" aria-label="email" aria-describedby="basic-addon1" />
                            </InputGroup>
                            
                            <p className='fs-6 fw-bold' data-aos="fade-up">Message</p>
                            <InputGroup data-aos="fade-up">
                                <Form.Control as="textarea" placeholder="Write your message here" style={{ height: '150px' }} />
                            </InputGroup>
                            
                            <Button variant="primary" size="xxl" className="w-100 mt-3" data-aos="fade-up">
                                Send Message
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default Contact;

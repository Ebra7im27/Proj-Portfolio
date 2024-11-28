import "./Skills.css"
import HTMl from '../../assets/HTML.jpg'
import CSS from '../../assets/CSS.jpg'
import JS from '../../assets/JS.jpg'
import Re from '../../assets/React.png'
import React, { useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { Container } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Skills() {
    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 1000,
            once: false,  // This allows animations to trigger on every scroll
        });

        // Update AOS on scroll
        window.addEventListener('scroll', () => {
            AOS.refresh();
        });

        return () => {
            window.removeEventListener('scroll', () => {
                AOS.refresh();
            });
        };
    }, []);

    return (
        <Container>
            <h1 id='skills' className="Skillsh1" data-aos="fade-up">Web Development Skills</h1>
            <Swiper
                data-aos="fade-up"
                rewind={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={HTMl} className="logo-lang" alt="HTML-Photo" />
                    <span className="bold-text">HTML</span>
                    <p className="info-lang">Structuring web content.</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={CSS} className="logo-lang" alt="CSS-Photo" />
                    <span className="bold-text">CSS</span>
                    <p className="info-lang">Styling web interfaces.</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={JS} className="logo-lang" alt="JS-Photo" />
                    <span className="bold-text">JS</span>
                    <p className="info-lang">Adding interactivity.</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Re} className="logo-lang ReactLogo" alt="Re-Photo" />
                    <span className="bold-text">React</span>
                    <p className="info-lang">Building UIs with React.</p>
                </SwiperSlide>
            </Swiper>
        </Container>
    );
}

import { Container } from 'react-bootstrap'
import './Footer.css'
import React from 'react'

function Footer() {
    return (
        <footer>
            <Container>
                <div className='copyright'>
                    <a href='https://ebrahimelngar-app.surge.sh/'>©2024 Ebrahim Elngar | All Rights Reserved</a>
                </div>
            </Container>

        </footer>
    )
}
export default Footer
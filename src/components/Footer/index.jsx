import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import logo from '../../assets/footer-logo.svg';
import bg from './footer-bg.png';
import appstore from '../../assets/app-store.svg';
import googleplay from '../../assets/google-play.svg';

// Social Icons
import socialTwitter from '../../assets/social/twitter.svg';
import socialFacebook from '../../assets/social/facebook.svg';
import socialLinkedin from '../../assets/social/linkedin.svg';
import socialGithub from '../../assets/social/github.svg';
import socialVectory from '../../assets/social/vector.svg';
import socialBall from '../../assets/social/ball.svg';

const Footer = () => {
    const data = {
        menu: [
            {
                name: 'Overview',
                url: '/overview',
            },
            {
                name: 'Features',
                url: '/features',
            },
            {
                name: 'Pricing',
                url: '/pricing',
            },
            {
                name: 'Careers',
                url: '/careers',
            },
            {
                name: 'Help',
                url: '/help',
            },
            {
                name: 'Privacy',
                url: '/privacy',
            },
        ],
        social: [
            {
                name: 'Twitter',
                icon: socialTwitter,
                url: 'https://twitter.com/',
            },
            {
                name: 'Facebook',
                icon: socialFacebook,
                url: 'https://facebook.com/',
            },
            {
                name: 'Linkedin',
                icon: socialLinkedin,
                url: 'https://linkedin.com/',
            },
            {
                name: 'Github',
                icon: socialGithub,
                url: 'https://github.com/',
            },
            {
                name: 'Vectory',
                icon: socialVectory,
                url: 'https://github.com/',
            },
            {
                name: 'socialBall',
                icon: socialBall,
                url: 'https://twitter.com/',
            },
        ]
    }
  return (
    <footer className='footer position-relative pt-6 pb-5'>
        <img src={bg} className="footer__shape img-fluid" alt="Footer BG" />
        <Container>
            <Row className='mb-5 gy-4 justify-content-center'>
                <Col lg="6">
                    <div className="footer-widget text-center">
                        <div className="mb-4">
                            <div className="mb-3 mb-lg-4 mb-xl-5">
                                <img src={logo} className="img-fluid"/>
                            </div>
                            <div className="fs-md fs-md-2xl">First non-custodial multi chain Wallet to offer NFC Payment, stake and buy crypto assets..No KYC needed!</div>
                        </div>

                        <div className="get-the-app mb-lg-5">
                            <h5 className='fw-bold mb-4 text-dark fs-4xl'>Get the app</h5>
                            <div className="d-inline-flex gap-3">
                                <Link to={'/'}><img className='img-fluid' src={googleplay} alt="Google Play Store"/></Link>
                                <Link to={'/'}><img className='img-fluid' src={appstore} alt="App Store"/></Link>
                            </div>
                        </div>

                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    {data && data.menu && 
                        <div className="footer-widget">
                            <ul className="list-inline d-flex flex-wrap justify-content-center fs-md fs-lg-xl gap-2 gap-lg-4">
                                {data.menu.map((item, i) => (
                                    <li key={i} className='list-inline-item'><Link to={item.url} className='link-dark text-black fw-medium'>{item.name} </Link></li>
                                ))}
                            </ul>
                        </div> 
                        }
                    </Col>
            </Row>
        </Container>
        
        <hr className='my-4'/>

        <Container>
            <Row className='gy-4 flex-md-row-reverse text-center text-md-start'>
                {data && data.social &&
                <Col md="auto">
                    <ul className="list-inline mb-0 d-inline-flex flex-wrap gap-2 gap-lg-3">
                        {data.social.map((item, i) =>(
                        <li key={i} className="list-inline-item"><Link to={item.url}><img src={item.icon}  alt={item.name}/></Link></li>
                        ))}
                    </ul>
                </Col>}
                <Col><div className="fw-regular">© 2022 Blithe Inc. All rights reserved.</div></Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer
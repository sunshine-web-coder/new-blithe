import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Feature1 from '../../assets/1.svg';
import Feature2 from '../../assets/2.svg';
import Feature3 from '../../assets/3.svg';

const Features = () => {
    const data = [
        {
            banner: {
                url: Feature1
            },
            content: {
                heading: "Non-custodial Wallet: Secure & Reliable",
                body: "Buy, store, and swap assets anytime, anywhere. NO KYC!",
            },
            button: {
                name: "Download app",
                icon: <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.2931 1.70711C13.9026 1.31658 13.9026 0.683417 14.2931 0.292893C14.6837 -0.0976311 15.3168 -0.0976311 15.7074 0.292893L21.7073 6.29289C22.0979 6.68342 22.0979 7.31658 21.7073 7.70711L15.7074 13.7071C15.3168 14.0976 14.6837 14.0976 14.2931 13.7071C13.9026 13.3166 13.9026 12.6834 14.2931 12.2929L18.586 7.99998H1.01103C0.452653 7.99998 0 7.55227 0 6.99998C0 6.4477 0.452653 5.99998 1.01103 5.99998H18.586L14.2931 1.70711Z" fill="#FB9B04"/></svg>,
                url: "https://play.google.com/store/apps/details?id=com.blithe.wallet.blithewallet"
            }
        },
        {
            right: true,
            banner: {
                url: Feature2
            },
            content: {
                heading: "Explore the Blithe Ecosystem",
                body: "The Blithe Ecosystem presents many possibilities in DeFi, including",
            },
            button: {
                name: "Read More",
                icon: <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.2931 1.70711C13.9026 1.31658 13.9026 0.683417 14.2931 0.292893C14.6837 -0.0976311 15.3168 -0.0976311 15.7074 0.292893L21.7073 6.29289C22.0979 6.68342 22.0979 7.31658 21.7073 7.70711L15.7074 13.7071C15.3168 14.0976 14.6837 14.0976 14.2931 13.7071C13.9026 13.3166 13.9026 12.6834 14.2931 12.2929L18.586 7.99998H1.01103C0.452653 7.99998 0 7.55227 0 6.99998C0 6.4477 0.452653 5.99998 1.01103 5.99998H18.586L14.2931 1.70711Z" fill="#FB9B04"/></svg>,
                url: "https://medium.com/@blithewallet"
            }
        },
        {
            banner: {
                url: Feature3
            },
            content: {
                heading: "Buy the Blithe Token (BLT), Get rewarded!",
                body: "You get huge incentives when you buy and spend our utility/unique exchange token",
            },
            button: {
                name: "Buy Presale",
                icon: <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.2931 1.70711C13.9026 1.31658 13.9026 0.683417 14.2931 0.292893C14.6837 -0.0976311 15.3168 -0.0976311 15.7074 0.292893L21.7073 6.29289C22.0979 6.68342 22.0979 7.31658 21.7073 7.70711L15.7074 13.7071C15.3168 14.0976 14.6837 14.0976 14.2931 13.7071C13.9026 13.3166 13.9026 12.6834 14.2931 12.2929L18.586 7.99998H1.01103C0.452653 7.99998 0 7.55227 0 6.99998C0 6.4477 0.452653 5.99998 1.01103 5.99998H18.586L14.2931 1.70711Z" fill="#FB9B04"/></svg>,
                url: "/slug"
            }
        },
    ]
  return (
    <section className="features py-6 py-lg-10">
        <Container>
        <Row className="align-items-end gy-5 gx-3 gx-lg-8">
            {data && data.map((item, i) =>(
                <Col key={i} lg="4" >
                    <div className='features__item'>
                            {item.banner &&  <div className="mb-3 mb-lg-5">
                            <img src={item.banner.url}  className="img-fluid w-100" alt="Image"/>
                            </div> }
                            <div className="content-area">
                                {item.content && item.content.heading && <h2 className="fs-3xl fs-lg-4xl fw-bold ls-xxs text-dark mb-3 mb-lg-4">{item.content.heading}</h2>}
                                {item.content && item.content.body && <p className="fs-sm-xl mb-3 mb-lg-4">{item.content.body}</p>}
                                {item.button && item.content.body && <a href={item.button.url} className="btn btn-primary">{item.button.name}</a>}
                            </div>
                    </div>
                </Col>
            ))}
            </Row>
        </Container>
    </section>
  )
}

export default Features
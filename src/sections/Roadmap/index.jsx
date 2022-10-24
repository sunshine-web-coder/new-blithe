import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import bg from '../../assets/roadmap-bg.jpg';
import { motion } from "framer-motion";

const Roadmap = () => {


  return (
    <motion.section className='roadmap py-5 py-lg-7 py-xl-10' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', }} 
        initial="roadmapOffscreen"
        whileInView="roadmapOnscreen"
        viewport={{ once: true, amount: 0.5 }}>

        <Container>
            <Col sm="12">
                <div className="roadmap-header text-center mb-4 mb-lg-5">
                    <h2 className='fs-2xl fs-lg-4xl text-black fw-bold'>Roadmap</h2>
                </div>
            </Col>

            <div className="row g-0 ">
                <div className="col-md-6 offset-md-6">
                    <div className="roadmap__item pt-6">
                        <h4 className="roadmap__item-title fs-xl fs-sm-3xl fw-bold text-dark">
                            <div>Q4 2022</div>
                        <motion.div className="roadmap__item-title-line" 
                                variants={{ 
                                    roadmapOffscreen: { 
                                        opacity: 0, width: '0%' 
                                    },
                                    roadmapOnscreen: { 
                                        opacity: 1, width: '100%', transition: { delay: 0.4, transition: 2} 
                                    }
                                }}
                            >
                            </motion.div>
                        </h4>
                        <div className="roadmap__item-content">
                            <ul className="list-unstyled mb-0 fs-sm fs-sm-lg lh-lg">
                                <li>• Cross-chain swap/exchange</li>
                                <li>• Listing on CEX</li>
                                <li>• Massive marketing</li>
                                <li>• Catex staking partnership</li>
                                <li>• Fiat pool exchange</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row g-0 ">
                <div className="col-md-6 text-md-end">
                    <div className="roadmap__item left">
                        <h4 className="roadmap__item-title fs-xl fs-sm-3xl fw-bold text-dark">
                            <div>Q1 2023</div>
                        <motion.div className="roadmap__item-title-line" 
                                variants={{ 
                                    roadmapOffscreen: { 
                                        opacity: 0, width: '0%' 
                                    },
                                    roadmapOnscreen: { 
                                        opacity: 1, width: '100%', transition: { delay: 0.7, transition: 2} 
                                    }
                                }}>
                            </motion.div>
                        </h4>
                        <div className="roadmap__item-content">
                            <ul className="list-unstyled mb-0 fs-sm fs-sm-lg lh-lg">
                                <li>• 20+ blockchains integrated</li>
                                <li>• Blithe widget</li>
                                <li>• NFT integration</li>
                                <li>• NFC payment integration</li>
                                <li>• Touch ID and Face ID login</li>
                                <li>• In-wallet DApp browser launch</li>
                                <li>• Send using QR code</li>
                                <li>• Chrome extension launch for our wallet</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row g-0 ">
                <div className="col-md offset-md-6">
                    <div className="roadmap__item pb-6">
                        <h4 className="roadmap__item-title fs-xl fs-sm-3xl fw-bold text-dark"><div>Q4 2022</div>
                            <motion.div className="roadmap__item-title-line" 
                                variants={{ 
                                    roadmapOffscreen: { 
                                        opacity: 0, width: '0%' 
                                    },
                                    roadmapOnscreen: { 
                                        opacity: 1, width: '100%', transition: { delay: 1, transition: 2} 
                                    }
                                }}>
                                </motion.div>
                        </h4>
                        <div className="roadmap__item-content">
                            <ul className="list-unstyled mb-0 fs-sm fs-sm-lg lh-lg">
                                <li>• Cross-chain swap/exchange</li>
                                <li>• Listing on CEX</li>
                                <li>• Massive marketing</li>
                                <li>• Catex staking partnership</li>
                                <li>• Fiat pool exchange</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
  
        </Container>
    </motion.section>
  )
}

export default Roadmap
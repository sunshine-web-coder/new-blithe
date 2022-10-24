import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ImmutaleX  from './assets/ImmutableX.svg';
import Compound  from './assets/Compound.svg';
import Bitcoin  from './assets/Bitcoin.svg';
import BinanceSmartChain  from './assets/BinanceSmartChain.svg';
import Decentraland  from './assets/Decentraland.svg';
import Ethereum  from './assets/Ethereum.svg';
import Celo  from './assets/Celo.svg';
import Cardano  from './assets/Cardano.svg';
import Pancakeswap  from './assets/Pancakeswap.svg';
import Ens  from './assets/Ens.svg';
import AnchorProtocol  from './assets/AnchorProtocol.svg';
import Kadena  from './assets/Kadena.svg';
import SushiSwap  from './assets/SushiSwap.svg';
import Serum  from './assets/Serum.svg';
import Curve  from './assets/Curve.svg';
import ShibaInu  from './assets/ShibaInu.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/free-mode";

const Integration = () => {
    const data = {

        list: [
            { icon: ImmutaleX, },
            { icon: Compound, },
            { icon: Bitcoin, },
            { icon: BinanceSmartChain, },
            { icon: Decentraland, },
            { icon: Ethereum, },
            { icon: Celo, },
            { icon: Cardano, },

            { icon: Pancakeswap, },
            { icon: Ens, },
            { icon: AnchorProtocol, },
            { icon: Kadena, },
            { icon: SushiSwap, },
            { icon: Serum, },
            { icon: Curve, },
            { icon: ShibaInu, },
        ]
    }
  return (
    <section className='integration text-center py-5 py-lg-7'>
        <Container>
            <Row className="justify-content-center">
                <Col sm="12" md="10" lg="8" xl="9">
                    <div className="integration-header mb-5 mb-lg-6 px-xl-6 mx-xl-6">
                        <h4 className="fs-4xl fs-lg-6xl mb-3 text-dark fw-bold">DApp Store & Aggregator</h4>
                        <p className='fs-lg0 '>Send and Recieve NFTs from Opensea, Rarible, many more supported marketplaces. Discover more blockchain applications in our dApp store and enhance your experience on Blithe Wallet.</p>
                    </div>
                </Col>
            </Row>
        </Container>


        
        {data && data.list &&
        
        <div className="integration-slider">
            <Swiper
            spaceBetween={50}
            slidesPerView={14}
            breakpoints={{
              0: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 7,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 8,
                spaceBetween: 50,
              },
              1200: {
                slidesPerView: 10,
                spaceBetween: 50,
              },
              1400: {
                slidesPerView: 14,
                spaceBetween: 50,
              },
            }}
            loop={true}
            freeMode={true}
            autoplay={{
              delay: 1200,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay]}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                {data.list.map((item, i) =>(
                <SwiperSlide key={i}><img  className='img-fluid' src={item.icon} alt="Icon" /></SwiperSlide>
                ))}
            </Swiper>
        </div>
        }
    </section>
  )
}

export default Integration
import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.svg';
import {FiMenu} from 'react-icons/fi';
import { Link  } from "react-router-dom";

import { motion, useScroll, useSpring } from "framer-motion";

const Header = () => {
    const [isSticky, setIsSticky] = React.useState(false);
    const [isOpen, setIsOpen] = useState(false)
    const mobileMenuRef = React.useRef(null);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 20,
      damping: 5,
      restDelta: 0.001
    });

    const variants = {
        open: { 
            opacity: 1, y: 0,
            type:"spring", 
            ease:"easeInOut", 
            duration: 0.8,
            visibility: 'visible'
        },
        closed: { 
            opacity: 0, y: "-10%", visibility: 'hidden'
        },
      }

    React.useEffect(() =>{
        window.addEventListener('scroll', () => {
            if(window.scrollY > 80){
                setIsSticky(true);
            } else{
                setIsSticky(false)
            }
        });
    })


    const data = {
        navmenu: [
            {
                name: "Assets",
                slug: '#assets',
            },
            {
                name: "Staking",
                slug: '#Staking',
            },
            {
                name: "Documentation",
                slug: 'https://blithe.gitbook.io/blithe-wallet-whitepaper',
            },
            {
                name: "NFTs",
                slug: '#NFTs',
                soonText: "Soon"
            },
            {
                name: "DApp Browser",
                slug: '#DAppBrowser',
                soonText: "Soon"
            },
        ]
    }
  return (
    <header className={`header ${isOpen ? "header__mobile-open" : ""} ${isSticky ? 'is-sticky' : ''}`}>
        <Navbar bg="transparent" expand="lg" className='py-3'>
        <Container>
            <Navbar.Brand href="/">
                <img src={logo} alt="theme logo"/>
            </Navbar.Brand>
            <span className="header-toggler d-lg-none fs-2xl" onClick={() => setIsOpen(isOpen => !isOpen)}>
                    <FiMenu />
            </span>
            <Navbar.Collapse>
                {data && data.navmenu &&
                <Nav className="me-auto">
                    {data.navmenu.map((item, i) =>(
                        <Nav.Link key={i} href={item.slug}>{item.name} <span>{item.soonText}</span></Nav.Link>
                    ))}
                </Nav>
                }
            <Nav>
                <Nav.Link className='p-0 d-block' target="_blank" href="https://t.me/blithewallet"><span className='btn btn-warning'>Join Us</span></Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        <motion.div className='header__progress' style={{ scaleX }} />
        
        <motion.div ref={mobileMenuRef} className="header-mobile d-lg-none"
            animate={isOpen ? "open" : "closed"}
            variants={variants}
        >
            {data && data.navmenu &&
            <ul className="list-unstyled">
                {data.navmenu.map((item, i) =>(
                    <li key={i}><a href={item.slug} className="text-muted fs-sm">{item.name} <span className='I78yn'>{item.soonText}</span></a></li>
                ))}
                <a target="_blank" href="https://t.me/blithewallet">
                    <span className='btn btn-warning rounded-pill w-100'>Join Us</span>
                </a>
            </ul>
            }
        </motion.div>
    </header>
  )
}

export default Header
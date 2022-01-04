import React, { useEffect, useState } from 'react'
import { HomeOptionsIcon, SDlogo, SDlogoSmall } from '../../Assets/SVGIcons'
import "./homeheader.css"

function HomeHeader() {

    const [scrollPosition, setScrollPosition] = useState(0);

  

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className={scrollPosition<=800?"home-header-container":"home-header-container-hidden"}>

            <div className="home-header-logo-container">

                <div className="home-header-logo-normal">
                    <SDlogo />
                </div>

                <div className="home-header-logo-responsive">
                    <SDlogoSmall />
                </div>

            </div>

            <div className="home-header-logo-responsive" style={{ cursor: "pointer" }}>
                <HomeOptionsIcon />
            </div>



            <ul className="home-header-menulist">

                <li>Home</li>

                <li>About</li>

                <li>Service</li>

                <li>Downloads</li>

                <li><button>Contact Me</button></li>

            </ul>

        </div>
    )
}

export default HomeHeader

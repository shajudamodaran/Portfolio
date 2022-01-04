import React from 'react'
import './homepage.css'
import HomeHeader from '../../Components/HomeHeader/HomeHeader'
import { BoyIcon, CallIcon, DiscoverIcon, FacebookIcon, FrontEnd, MailIcon, TwitterIcon } from '../../Assets/SVGIcons'
import HomeServicecard from '../../Components/Cards/HomeServiceCard/HomeServicecard'
import { HomeServiceList, WorkFlowList } from '../../Constants/constants'
import WorkFlowCard from '../../Components/Cards/WorkflowCard/WorkFlowCard'

function Homepage() {



    return (
        <div style={{ overflow: "auto" }}>
            <HomeHeader />

            <div className="full-length-page-main">
                <div className="hoem-details">
                    <span className="homepage-caption">HI THERE 👋 I'M</span>
                    <span className="home-page-name">Shaju</span>
                    <span className="home-page-name">Damodaran</span>
                    <span className="homepage-caption2">FRONTEND DEVELOPER <FrontEnd /></span>
                    <p className="homepage-caption-paragraph">
                        I’m a professional UI/UX designer with<br />
                        front end development skills...
                    </p>
                </div>

                <div className="home-illustration">
                    <BoyIcon />
                </div>
            </div>

            <div className="full-length-page">

                <div className="homepage-profile-container">
                    <div className="homepage-profile-left">

                        <div className="profile-image-container">
                            <img src="https://firebasestorage.googleapis.com/v0/b/athercreations.appspot.com/o/myimage.jpg?alt=media&token=00f731b1-751d-4d8c-9971-cd7f2cb5de47" alt="" />
                        </div>


                    </div>
                    <div className="homepage-profile-right">


                        <span className="homepage-question">Who I am ?</span>
                        <span className="homepage-tittle">About Me</span>
                        <p className="homepage-profile-paragraph">
                            I’m Oluwakemi Adeleke, a professional and talented Product Designer with front end development skills. I am passionate about leveraging my diverse backgrounds to decipher challenging problems and create delightful experiences. I honed my skills at web development, technical writing, product design and SEO analytics.<br /><br />

                            I develop websites with HTML, CSS and JavaScript. I have top skills in using design softwares like Figma, Adobe XD, Invision and PhotoShop; with prototype tools like Framer and Protopie. <br /><br />

                            Being a diligent, hardworking and result oriented lady, I always work towards achieving best result on each project I lay my hands on.
                        </p>

                        <button>View CV</button>


                    </div>
                </div>

            </div>

            <div className="full-length-page">

                <div className="homepage-servive-container">

                    <span className="homepage-question">What i do ?</span>
                    <span className="homepage-tittle">My Services</span>


                    <div className="service-cards-container">

                        {
                            HomeServiceList.length > 0 ?

                                HomeServiceList.map((obj, key) => {
                                    return (
                                        <HomeServicecard key={key} data={obj} />
                                    )
                                })

                                : null
                        }


                    </div>


                </div>

            </div>

            <div className="full-length-page">

                <div className="homepage-servive-container">

                    <span className="homepage-question">Work Flow</span>
                    <span className="homepage-tittle">My Work Progress</span>


                    <div className="workflow-cards-container">


                        {
                            WorkFlowList?.map((obj, key) => {
                                return (
                                    <WorkFlowCard key={key} data={obj} />
                                )
                            })
                        }


                    </div>




                </div>

            </div>


            <div className="full-length-page">

                <div className="homepage-servive-container">

                    <span className="homepage-question">Contact Me</span>
                    <span className="homepage-tittle">Get In Touch</span>


                    <div className="contact-me-container">

                        <div className="contact-details">
                            <ul>
                                <li>
                                    <div className="round-icon-container"><MailIcon /></div>
                                    <span>Shajudamodaran7725@gmail.com</span>
                                </li>
                                <li>
                                    <div className="round-icon-container"><CallIcon /></div>
                                    <span>+91 9074810177</span>
                                </li>

                                <li>
                                    <div className="round-icon-container"><TwitterIcon /></div>
                                    <span>twitter.com/ShajuDamodaran</span>
                                </li>

                                <li>
                                    <div className="round-icon-container"><FacebookIcon /></div>
                                    <span>facebook.com/shaju.damodarn</span>
                                </li>
                            </ul>
                        </div>

                        <div className="contact-form">


                            <div className="email-phone-container">
                                <input className="contact-form-input" placeholder="Full Name" type="text" name="" id="" style={{ width: "100%" }} />
                            </div>
                            
                            <div className="email-phone-container" style={{ width: "100%" }}>
                                <input className="contact-form-input-email-phone" placeholder="Email" type="text" name="" id="" />
                                <input className="contact-form-input-email-phone" placeholder="Phone Number" type="text" name="" id="" />
                            </div>

                            <div className="email-phone-container">
                               <textarea rows="8" placeholder="Enter message" className="contact-form-textarea"/>
                            </div>

                            <div className="contact-form-submit-container">
                            <button className="contact-form-submit">Send</button>
                            </div>

                           

                        </div>


                    </div>




                </div>

            </div>


        </div>
    )
}

export default Homepage

import {} from 'react'
import './footer.css'
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { TiSocialYoutube } from "react-icons/ti";


function Footer() {
  return (
    <div>
        <div className='container-fluid footer_section py-3'>
            <div className='container '> 
                    <div className='row py-5'>
                         <div className='col-lg-6'>
                         <img className='img-fluid logo' src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png'/>
                         </div>
                         <div className='col-lg-6'>

                         </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-3 py-2'>
                            <p className='fw-bolder m-0 py-1'>About Zomato</p>
                            <ul className='list-unstyled '>
                                <li>Who We Are</li>
                                <li>Blog</li>
                                <li>Work With Us</li>
                                <li>Investor Relations</li>
                                <li>Report Fraud</li>
                                <li>Press Kit</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div className='col-lg-2 py-2'>
                            <p className='fw-bolder m-0 py-1'>Zomaverse</p>
                            <ul className='list-unstyled '>
                                <li>Zomato</li>
                                <li>Blinkit</li>
                                <li>Feeding India</li>
                                <li>Feeling India</li>
                                <li>Hyper Pure</li>
                                <li>Zomato Land</li>
                                <li>Weather Union</li>
                            </ul>
                        </div>
                        <div className='col-lg-3 py-2'>
                            <p className=' fw-bolder m-0 py-1'>For Restaurants</p>
                            <ul className='list-unstyled '>
                                <li>Partner With Us</li>
                                <li>Apps For You</li>
                                
                            </ul>
                        </div>
                        <div className='col-lg-2 py-2'>
                            <p className=' fw-bolder m-0 py-1'>Learn More</p>
                            <ul className='list-unstyled '>
                                <li>Privacy</li>
                                <li>Security</li>
                                <li>Terms</li>
                                <li>SiteMap</li>
                                
                            </ul>
                        </div>
                        <div className='col-lg-2 py-2'>
                            <p className=' fw-bolder m-0 py-1'>Social links</p>
                            <ul className='list-unstyled '>
                                <div className='d-flex gap-2'>

                                <FaFacebook/>
                                <MdEmail/>
                                <FaWhatsapp/>
                                <TiSocialYoutube/>
                                </div>
                               <div className='py-2 mt-2'>
                                <img  className="img-fluid store" src='https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png'/>
                               </div>
                               <div>
                                <img  className="img-fluid store" src='https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png'/>
                               </div>
                            </ul>
                        </div>
                    </div>
                    <hr/>
                    <div className='row sub_footer'>
                        <div className='col-lg-12'>
                            <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.</p>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
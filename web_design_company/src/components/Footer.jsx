import footer from "../assets/footer.png"
import icon from "../assets/icon.png"

import icon1 from "../assets/face.png"
import icon2 from "../assets/in.png"
import icon3 from "../assets/instagram.png"

function Footer() {
    return ( 
        <footer>
            <img src={footer} className="footer-img"/>
            <div className="footer-content">
                <div className="first-section">
                    <img src={icon} className="icon"/>
                    <h1 className="logo">CAD</h1>
                    <p className="small-text">Creat a Dream</p>
                    <p className="copy-write">© 2023 CAD. All rights reserved</p>
                </div>
                <div className="second-section">
                    <div className="section">
                        <h2>ORDER WEBSITE</h2>
                        <p>Framework <br /> Online store <br /> Business card site <br /> Corporate website <br /> Landing Page</p>
                    </div>
                    <div className="section">
                        <h2>Marketing</h2>
                        <p>Framework <br /> Online store <br /> Business card site <br /> Corporate website <br /> Landing Page</p>
                    </div>
                    <div className="section">
                        <h2>SERVICES</h2>
                        <p>Framework <br /> Online store <br /> Business card site <br /> Corporate website <br /> Landing Page</p>
                    </div>
                    <div className="section">
                        <h2>OUR CONTACTS</h2>
                        <p>Schedule: <br /> Mon-Fri: 09:00 - 21:00 <br /> Sat-Sun: 10:00 - 18:00 <br /><br /> SOCIAL NETWORKS</p>
                        <img src={icon1} alt="" className="social" />
                        <img src={icon2}alt="" className="social" />
                        <img src={icon3}alt="" className="social" />
                    </div>
                </div>
                {/* <div className="third-section">
                </div> */}
            </div>
        </footer>
     );
}

export default Footer;
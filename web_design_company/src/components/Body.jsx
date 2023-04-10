import computer from "../assets/Computer_img.png"
import protfolio_bg from "../assets/protfolio/Effects.png"

import whyWe from "../assets/why_we.png"

import icon1 from "../assets/bg-icon1.png"
import icon2 from "../assets/bg-icon2.png"

import person1 from "../assets/team/person1.png"
import person2 from "../assets/team/person2.png"

import infos from "../card_infos"
import services_infos from "../services_infos"
import protfolio_imgs from "../protfolio_imgs"
import clients_infos from "../clients_infos"

function Body() {
    return ( 
        <>
            <div className="section1">
                <p className="title">web development studio</p>
                <div className="cards">
                {infos.map((card) => {
                        const styles ={
                            "background-color" : card.color
                        }
                        return <div style={styles} className="card">{card.name}</div>
                        
                    })}
                </div>
                <p className="para1">“ We are a experienced team of professionals for whom website development is not just a job, but a favorite thing. Each project is a separate story that we live with our client. We delve into the roots of the company, study its pros and cons.”</p>
                <p className="heading">WEBSITE <span className="red">DEVELOPMENT</span> </p>
                <button className="btn"><a>To GET THE CONSULTATION</a></button>
                <p className="heading heading2">WEBSITE <span className="red">DESIGN</span></p>
                <button className="btn btn2"><a href="">To GET THE CONSULTATION</a></button>
                <img src={computer} alt="" className="computer" />
            </div>
            <div className="section2">
                <img src={whyWe} className="section2-img"/>
                <h1 className="section2-heading">WHY WE</h1>
                <div className="box"></div>
                <p className="section2-para">We are a experienced team of professionals for whom website development is not just a job, but a favorite thing. Each project is a separate story that we live with our client. We delve into the roots of the company, study its pros and cons. And only after that we begin to create what is really necessary for a successful existence.</p>
                <img src={icon2} className="icon1"/>
                <img src={person2} className="person-img " />
                <p className="section2-img-para">
                    We are a experienced team of professionals for whom website development is not just a job, but a favorite thing.
                </p>
                <img src={person1} className="person-img person-img2"/>
                <p className="section2-img-para ">
                    We are a experienced team of professionals for whom website development is not just a job, but a favorite thing.
                </p>
            </div>
            <div className="section3">
                <h1 className="section2-heading section3-heading">OUR SERVICES</h1>
                <div className="box"></div>
                <img src={icon1} className="icon2"/>
                <div className="services">
                    {services_infos.map((service) => {
                        return <div className="service">
                            <p className="service-title">{service.title}</p>
                            <img src={service.img} alt="" className="service-img"/>
                        </div>
                    })}
                </div>
                <div className="boxes">
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                </div>

            </div>
            <div className="section4">
                <img src={protfolio_bg} className="protfolio-bg"/>
                <h1 className="section2-heading section4-heading">OUR PORTFOLIO</h1>
                <div className="box"></div>
                <div className="protfolio-imgs">
                    {protfolio_imgs.map((img) => {
                        return <img src={img} className="protfolio-img" />
                    })}
                    <button className="protfolio-btn"><a href="">To GET THE CONSULTATION</a></button>

                </div>
            </div>
            <div className="section5">
                <h1 className="section2-heading section5-heading">OUR CLIENTS</h1>
                <div className="box"></div>
                <div className="clients">
                    {
                        clients_infos.map((client) => {
                            return <div className="client">
                                <img src={client} alt="" />
                            </div>
                        })
                    }
                </div>
            </div>
        </>
     );
}

export default Body;
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import './Feature.css'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons';
import FAQ from './FAQ';



const Feature = () => {
    const navigate = useNavigate()

   const  building = () =>{
       navigate("/quickbooks")
    }
  return (
    <div className="container-fluid" style={{backgroundColor:"#f0f0f0"}}>
    <Row >
      <Col lg={1}></Col>
      <Col style={{marginTop:"100px"}} lg={4}>
        <p>WEBSITE BUILDER</p>
        <h1>Create a website for free</h1> <br />
         <h3>Design and simplicity are at the core of our website builder. Easily create, customize, 
            and promote a stunning website that's search engine ready all 
            on your own with the power of Mailchimp’s platform.</h3> <br />
     <button style={{padding:"10px 20px", backgroundColor:"yellow", borderRadius:"20px/50%"}} onClick={building}>Start Building For Free</button>
      </Col>
     
      
      <Col lg={7}>
     
      <img className="img-fluid" style={{width:"780px", height:"550px"}} src="https://eep.io/images/yzco4xsimv0y/1jLvkI1ssXliXkyATh9h5D/0817e3e4d11f8b81d76d990d5bb81704/21_Website-Builder_AUI.png?w=1520&fm=avif&q=60" alt="" />
      </Col>
     
    </Row>
    
    <div className='container-fluid'>
    <Row>
        <Col lg={2}></Col>
        <Col lg={8}>
        <h1 style={{marginTop:"100px", textAlign: "center"}} >Brilliant web design, simplified</h1>
        <p style={{justifyContent:"center", alignItems:"flex-end", fontWeight:"50px", fontSize:"25px", textAlign: "center"}}>Our website builder helps bring your unique vision to life—no design or code experience required. 
            Create a customizable, mobile-optimized website within the hour. 
            All you need to start is a domain name and a vision for your website. 
            If you're building a small business website, online store, or otherwise, Mailchimp can simplify the process.</p>
        </Col>

   </Row>
    </div>
    <div>
        <Row>
            <Col lg={1}></Col>
            <Col lg={5}>
            <img  className="img-fluid" style={{width:"850px", height:"650px"}} src="https://eep.io/images/yzco4xsimv0y/3psDMongeHHj0eseGdep8X/f75a8b7bb6b5e990769d5018ded74ef2/22_Website-Builder_AUI.png?w=1600&q=70" alt="" />
            </Col>
            <Col lg={1}></Col>
            <Col style={{marginTop:"180px"}} lg={4}>
            <h3>Curate your look and feel</h3> <br />
            <p style={{justifyContent:"center", fontWeight:"50px", fontSize:"20px"}}> It's easy to build a beautiful site by applying one of our pre-designed color palettes and themes in just a few clicks. 
                Ease-of-use is at the forefront of our website builder. 
                You can even tailor your color palette to your brand for a professional-looking website template.</p>
                <br /> 
                <button style={{padding:"10px 20px", backgroundColor:"white", borderRadius:"20px/50%"}}>Start Styling</button>

            </Col>
        </Row>
    </div>
    <div>
        <Row>
            <Col lg={1}></Col>
            <Col lg={5}>
            <img  className="img-fluid" style={{width:"850px", height:"650px"}} src="https://eep.io/images/yzco4xsimv0y/2vHzjvfslXINcJcnPF2sBH/e2997a1625cd5afc7816bf179b6a0f5c/23_Website-Builder_AUI.png?w=1600&q=70" alt="" />
            </Col>
            <Col lg={1}></Col>
            <Col style={{marginTop:"180px"}} lg={4}>
            <h3>Customize your new website layout</h3> <br />
            <p style={{justifyContent:"center", fontWeight:"50px", fontSize:"20px"}}> Mailchimp's website builder has pre-built, 
                professional layouts for every section, 
                so you can quickly change the structure of your site as much as you like without any coding knowledge.</p>
                <br /> 
                <button style={{padding:"10px 20px", backgroundColor:"white", borderRadius:"20px/50%"}}>Start building your own website</button>

            </Col>
        </Row>
    </div>
    <div>
        <Row>
            <Col lg={1}></Col>
            <Col lg={5}>
            <video width="650" height="550" autoPlay controls={false} loop>
        <source src="https://eep.io/videos/yzco4xsimv0y/7c69CTvu0leeYtaOvlN4jq/04a9e6c7ae715fd02a406ebd5666b0cd/25_Website-Builder_AUI_LM_TH_2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
            </Col>
            <Col lg={1}></Col>
            <Col style={{marginTop:"180px"}} lg={4}>
            <h3>See your edits in real time</h3> <br />
            <p style={{justifyContent:"center", fontWeight:"50px", fontSize:"20px"}}> Edit, add a section, resize images, 
                and undo it all right from the page—so you don’t have to leave the editor to make changes. 
                We've made building your own website as easy as possible so that you can integrate your business successfully.</p>
                <br /> 
                <button style={{padding:"10px 20px", backgroundColor:"white", borderRadius:"20px/50%"}}>Start refining</button>

            </Col>
        </Row>
    </div>
    <div className='container-fluid'>
    <Row>
        <Col lg={3}></Col>
        <Col lg={7}>
        <h1 style={{marginTop:"100px", textAlign: "center"}} >Promote your site and build an audience with our all-in-one platform</h1>
        <p style={{justifyContent:"center", alignItems:"flex-end", fontWeight:"25px", fontSize:"25px", textAlign: "center"}}>We help you establish your brand, 
            look like a pro, and rise the ranks of search engines 
            using our easy-to-use website builder. Customize your website on a no-code platform so that you don't need to hire anyone else to help.</p>
        </Col>

   </Row>
    </div>
    <div className='container-fluid'>
    <Row>
        <Col lg={3}></Col>
        <Col lg={7}>
        <h1 style={{marginTop:"100px", textAlign: "center"}} >Reach more people with your Mailchimp website</h1>
        <p style={{justifyContent:"center", alignItems:"flex-end", fontWeight:"25px", fontSize:"25px", textAlign: "center"}}>Grow and engage a bigger,
             higher quality customer base with intelligent tools that speak to an interested audience when they’re most willing to listen.</p>
        </Col>

   </Row>
    </div>
    <div >
    <Row>
        <Col lg={2}></Col>
        <Col lg={3}>
        <h3 style={{marginTop:"50px", textAlign: "center"}} >Built-In Forms</h3>
        <p style={{justifyContent:"center", alignItems:"flex-end", fontWeight:"25px", fontSize:"16px", textAlign: "center"}}>
Capture the attention of your website visitors with a custom pop-up form.</p>
    <p style={{justifyContent:"center", alignItems:"flex-end", fontWeight:"25px", fontSize:"16px", textAlign: "center", textDecoration:"underline", marginTop:"-20px"}}>Learn more</p>
        </Col>
        <Col lg={3}>
        <h3 style={{marginTop:"50px", textAlign: "center"}} >Behavioral Targeting</h3>
        <p style={{justifyContent:"center", alignItems:"flex-end", fontWeight:"25px", fontSize:"16px", textAlign: "center"}}>
            Send personalized emails to visitors based on how they interact with your site.</p>
            <p style={{justifyContent:"center", alignItems:"flex-end", fontWeight:"25px", fontSize:"16px", textAlign: "center", textDecoration:"underline", marginTop:"-20px"}}>Learn more</p>

        </Col>
        
        <Col lg={3}>
        <h3 style={{marginTop:"50px", textAlign: "center"}} >Reports And Analytics</h3>
        <p style={{justifyContent:"center", alignItems:"flex-end", fontWeight:"25px", fontSize:"16px", textAlign: "center"}}>
            Use free reports to track the performance of your pages and refine as you go.</p>
            <p style={{justifyContent:"center", alignItems:"flex-end", fontWeight:"25px", fontSize:"16px", textAlign: "center", textDecoration:"underline", marginTop:"-20px"}}>Learn more</p>

        </Col>
       </Row>
    </div>
    <div className='container-fluid'>
    <Row>
        <Col lg={5}></Col>
       
        <Col lg={5}>
            <img  className="img-fluid" style={{width:"300px", height:"400px", marginTop:"50px"}} src="https://eep.io/images/yzco4xsimv0y/4K5y0q5W6gnczlpoTux24H/7100eb6cb5d3529e5c37ed575463e114/Websites-fill-v2-min.png?w=375&q=70://eep.io/images/yzco4xsimv0y/3psDMongeHHj0eseGdep8X/f75a8b7bb6b5e990769d5018ded74ef2/22_Website-Builder_AUI.png?w=1600&q=70" alt="" />
            </Col>
              
   </Row>
    </div>
    <div className='container-fluid'>
    <Row>
        <Col lg={2}></Col>
       
        <Col lg={8}>
        <h1 style={{textAlign:"center"}}>With Mailchimp, you can create and publish a stunning website in under an hour.</h1>
            </Col>
              
   </Row>
    </div>
    <div className='container-fluid'>
    <Row>
        <Col lg={2}></Col>
       
        <Col lg={10}>
            <img  className="img-fluid" style={{width:"950px", height:"650px", marginTop:"50px"}} src="https://eep.io/images/yzco4xsimv0y/5qA55qc6kma5aJigUbqXmV/846b84eee21f53b35c77bd12dd618149/Websites-Editor-Social-Proof.png?w=980&q=70://eep.io/images/yzco4xsimv0y/4K5y0q5W6gnczlpoTux24H/7100eb6cb5d3529e5c37ed575463e114/Websites-fill-v2-min.png?w=375&q=70://eep.io/images/yzco4xsimv0y/3psDMongeHHj0eseGdep8X/f75a8b7bb6b5e990769d5018ded74ef2/22_Website-Builder_AUI.png?w=1600&q=70" alt="" />
            </Col>
              
   </Row>
    </div>
    <div className='container-fluid'>
    <Row>
        <Col lg={2}></Col>
       
        <Col lg={8}>
        <h2 style={{textAlign:"center", marginTop:"80px"}}>“As a brand new startup, we used Mailchimp's website builder to get our story and 
            business online quickly and easily. 
            This intuitive builder makes trying out new ideas and adding updates straightforward and uncomplicated.”</h2>
            <p style={{textAlign:"center"}}>Dr. Julie Durnan, Founder of The Ginger Agency</p>
            </Col>
              
   </Row>
    </div>
    <div>
        <Row>
            <Col lg={1}></Col>
            <Col lg={5}>
            <img  className="img-fluid" style={{width:"850px", height:"650px"}} src="https://eep.io/images/yzco4xsimv0y/2ewurCGaai01QOo0c24QAq/dc5c8ae42584033c0851f19894ee1251/ILLO_Hero_Transactional-Sending_Receiving-1520.png?w=1600&q=70://eep.io/images/yzco4xsimv0y/2vHzjvfslXINcJcnPF2sBH/e2997a1625cd5afc7816bf179b6a0f5c/23_Website-Builder_AUI.png?w=1600&q=70" alt="" />
            </Col>
            <Col lg={1}></Col>
            <Col style={{marginTop:"180px"}} lg={4}>
            <h3>Decide if Mailchimp is right for you</h3> <br />
            <p style={{justifyContent:"center", fontWeight:"50px", fontSize:"20px"}}> Check out how our website builder tools stack up against the competition.</p>
                <br /> 
                <button style={{padding:"10px 20px", backgroundColor:"white", borderRadius:"20px/50%"}}>See How We Rate</button>

            </Col>
        </Row>
    </div>
    <div>
            <Row>
                <Col lg={1}></Col>
                <Col lg={5}>
                    <h1 style={{ marginTop: "250px" }}>Explore all the ways you can build a more effective website</h1>
                </Col>
                <Col lg={1}></Col>
                <Col style={{ marginTop: "180px" }} lg={4}>
                    <p className='list-item' style={{ justifyContent: "center", fontWeight: "500", fontSize: "15px", borderBottom: "solid", color: "black" }}>
                        <span className="list-text">How to Make a Website: A Guide for Building Your Website</span> 
                        <span style={{marginLeft:"50px"}} className="bi bi-arrow-right-circle-fill arrow-icon"></span>
                    </p>
                    <p className='list-item' style={{ justifyContent: "center", fontWeight: "500", fontSize: "15px", borderBottom: "solid", color: "black" }}>
                        <span className="list-text">Website Design Tips for Non-Designers</span> 
                        <span style={{marginLeft:"185px"}} className="bi bi-arrow-right-circle-fill arrow-icon"></span>
                    </p>
                    <p className='list-item' style={{ justifyContent: "center", fontWeight: "500", fontSize: "15px", borderBottom: "solid", color: "black" }}>
                        <span className="list-text">A Checklist for Better Website SEO</span> 
                        <span style={{marginLeft:"217px"}} className="bi bi-arrow-right-circle-fill arrow-icon"></span>
                    </p>
                    <p className='list-item' style={{ justifyContent: "center", fontWeight: "500", fontSize: "15px", borderBottom: "solid", color: "black" }}>
                        <span className="list-text">How to Create a Homepage That Drives Clicks</span> 
                        <span style={{marginLeft:"140px"}} className="bi bi-arrow-right-circle-fill arrow-icon"></span>
                    </p>
                </Col>
            </Row>
        </div>
        <div className='container-fluid'>
            <Row>
               <Col lg={3}><h1 style={{textAlign:"center", marginTop:"200px"}}>FAQs</h1></Col> 
               <Col lg={1}></Col>
               <Col lg={7}> 
               {/* <h1 className='FaqList'>Can you build a website on Mailchimp?<FontAwesomeIcon icon={faCirclePlus}/></h1>  */}
               <FAQ/>
               </Col>
            </Row>

        </div>
  </div>
  )
}

export default Feature;
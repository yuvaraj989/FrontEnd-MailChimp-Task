import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGlobe, faComments, faPalette, faCogs, faChartLine, faUsers, faRobot, faPenFancy, faList, faDog, faSearch, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

export const navItems = [
  { id: 1, title: "Solutions and Services", path: "/" },
  { id: 2, title: "Resources", path: "/resources" },
  { id: 3, title: "Switch to Mailchimp", path: "/switch-to-mailchimp" },
  { id: 4, title: "Pricing", path: "/pricing" },
];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoginHovered, setIsLoginHovered] = useState(false);
  const [isSignUpHovered, setIsSignUpHovered] = useState(false);
  const [isLogoActive, setIsLogoActive] = useState(false);

  const handleNavItemClick = (item) => {
    if (item.title === "Switch to Mailchimp" || item.title === "Pricing") {
      setActiveItem(null);
      setIsExpanded(false);
      return;
    }
    if (activeItem?.id === item.id) {
      setIsExpanded(!isExpanded);
    } else {
      setActiveItem(item);
      setIsExpanded(true);
    }
  };

  const handleLoginHover = () => {
    setIsLoginHovered(!isLoginHovered);
  };

  const handleSignUpHover = () => {
    setIsSignUpHovered(!isSignUpHovered);
  };

  const handleLogoClick = () => {
    setIsLogoActive(!isLogoActive);
  };

  const renderColumns = (item) => {
    if (!isExpanded) return null;
    switch (item.title) {
        case "Solutions and Services":
        return (
          <div className="columns">
            <div className="column-item">
              
              <Link to="/email-marketing"><FontAwesomeIcon icon={faEnvelope} className='icons-nav' />Email marketing</Link>
              <p>Send personalized emails that convert</p>
             
              <Link to="/websites"> <FontAwesomeIcon icon={faGlobe} className='icons-nav' />Websites</Link>
              <p>Create your branded web presence</p>
              
              <Link to="/social-media-marketing"><FontAwesomeIcon icon={faComments} className='icons-nav' />Social media marketing</Link>
              <p>Amplify the conversation across multiple channels</p>
              
              <Link to="/templates"><FontAwesomeIcon icon={faPalette} className='icons-nav' />Templates</Link>
              <p>Customize pre-designed layouts</p>
            </div>
            <div className="column-item">
              
              <Link to="/marketing-automation"><FontAwesomeIcon icon={faCogs} className='icons-nav' />Marketing automation</Link>
              <p>Deliver the right message at the right time</p>
              
              <Link to="/reporting-analytics"><FontAwesomeIcon icon={faChartLine} className='icons-nav' />Reporting & analytics</Link>
              <p>Track sales & campaign performance</p>
              
              <Link to="/audience-management"><FontAwesomeIcon icon={faUsers} className='icons-nav' />Audience management</Link>
              <p>Target and segment customers</p>
            </div>
            <div className="column-item">
              
              <Link to="/ai-marketing-tools"><FontAwesomeIcon icon={faRobot} className='icons-nav' />AI marketing tools</Link>
              <p>Say hello to your AI growth assistant</p>
              
              <Link to="/content-creation-tools"><FontAwesomeIcon icon={faPenFancy} className='icons-nav' />Content Creation Tools</Link>
              <p>Build content that captivates and converts</p>
              
              <Link to="/see-all-features"><FontAwesomeIcon icon={faList} className='icons-nav' />See all features</Link>
              <p>See all our product offerings in one place</p>
            </div>
          </div>
        );
        
        case "Resources":
            return (
              <div className="columns">
                <div className="column-item">
                  <Link to="/e-commerce">E-commerce</Link>
                  <Link to="/digital-content">Digital content</Link>
                  <Link to="/marketing-automations">Marketing automations</Link>
                  <Link to="/audience-management">Audience management</Link>
                  <Link to="/websites">Websites</Link>
                  <Link to="/email-marketing">Email marketing</Link>
                  <Link to="/social-media">Social media</Link>
                </div>
                <div className="column-item">
                  <Link to="/podcasts">Podcasts</Link>
                  <Link to="/series">Series</Link>
                  <Link to="/films">Films</Link>
                </div>
                <div className="column-item">
                  <Link to="/marketing-api">Marketing API</Link>
                  <Link to="/transactional-api">Transactional API</Link>
                  <Link to="/release-notes">Release notes</Link>
                  <Link to="/transactional-email">Transactional email</Link>
                </div>
              </div>
            );
       
      default:
        return null;
    }
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
       
        <div className={`logo-container ${isLogoActive ? 'active' : ''}`} onClick={handleLogoClick}>
          <FontAwesomeIcon icon={faDog} size="2x" />
          <h6> InTUIT <br /> mailchimp</h6>
        </div>
        <div className="nav-items">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="nav-item"
              onClick={() => handleNavItemClick(item)}
            >
{item.title} {activeItem?.id === item.id && isExpanded && item.title !== "Switch to Mailchimp" && item.title !== "Pricing" 
  ? <FontAwesomeIcon icon={faChevronUp}  className="icon-space" /> 
  : (item.title !== "Switch to Mailchimp" && item.title !== "Pricing" ? <FontAwesomeIcon icon={faChevronDown}  className="icon-space" /> : '')}
            </div>
          ))}
        </div>
        <div className="left-section">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <div className="language-selector">
            <FontAwesomeIcon icon={faGlobe} className="globe-icon" />
            <select>
              <option value="en">EN</option>
              <option value="sp">SP</option>
              <option value="Fr">FR</option>
              <option value="PR">PR</option>
              <option value="Ve">VN</option>
              {/* Add other language options here */}
            </select>
          </div>
          <div className="sales-contact">
            Sales: <a style={{textDecoration:"none", color:"black"}} href="tel:+18003155939">+1 (800) 315-5939</a>
          </div>
        </div>
        <div className="right-section">
          <div
            className={`nav-item ${isLoginHovered ? 'hovered' : ''}`}
            onMouseEnter={handleLoginHover}
            onMouseLeave={handleLoginHover}
          >
            
            <button style={{backgroundColor:"white", padding:"5px 20px", borderRadius:"20px/50%"}}>Log In</button>
          </div>
          <div
            className={`nav-item ${isSignUpHovered ? 'hovered' : ''}`}
            onMouseEnter={handleSignUpHover}
            onMouseLeave={handleSignUpHover}
          >
            
            <button style={{backgroundColor:"yellow", padding:"5px 20px", borderRadius:"20px/50%"}}>Sign Up</button>
          </div>
        </div>
      </nav>
      <div className="content">
        {activeItem && renderColumns(activeItem)}
      </div>
    </div>
  );
};

export default Navbar;

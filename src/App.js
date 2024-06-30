import './App.css';
import Title from './Components/Title';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Quickbook from './Components/Quickbook'
import Mailchimp from './Components/Mailchimp'
import Navbar from './Components/Navabr/Navbar';
import Feature from './Components/Feature';

const Home = () => <div><h2>Home Page</h2></div>;
const Services = () => <div><h2>Services Page</h2></div>;
const Products = () => <div><h2>Products Page</h2></div>;
const ContactUs = () => <div><h2>Contact Us Page</h2></div>;
const EmailMarketing = () => <div><h2>Email Marketing Page</h2></div>;
const Websites = () => <div><h2>Websites Page</h2></div>;
const SocialMediaMarketing = () => <div><h2>Social Media Marketing Page</h2></div>;
const Templates = () => <div><h2>Templates Page</h2></div>;
const MarketingAutomation = () => <div><h2>Marketing Automation Page</h2></div>;
const ReportingAnalytics = () => <div><h2>Reporting & Analytics Page</h2></div>;
const AudienceManagement = () => <div><h2>Audience Management Page</h2></div>;
const AIMarketingTools = () => <div><h2>AI Marketing Tools Page</h2></div>;
const ContentCreationTools = () => <div><h2>Content Creation Tools Page</h2></div>;
const SeeAllFeatures = () => <div><h2>See All Features Page</h2></div>;


function App() {
  return (
    <>
  <Router>
 
      <Routes>
        <Route path="/" element={<Title />} />
        <Route path="/quickbooks" element={<Quickbook />} />
        <Route path="/mailchimp" element={<Mailchimp />} />
        <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/email-marketing" element={<EmailMarketing />} />
            <Route path="/websites" element={<Websites />} />
            <Route path="/social-media-marketing" element={<SocialMediaMarketing />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/marketing-automation" element={<MarketingAutomation />} />
            <Route path="/reporting-analytics" element={<ReportingAnalytics />} />
            <Route path="/audience-management" element={<AudienceManagement />} />
            <Route path="/ai-marketing-tools" element={<AIMarketingTools />} />
            <Route path="/content-creation-tools" element={<ContentCreationTools />} />
            <Route path="/see-all-features" element={<SeeAllFeatures />} />
      </Routes>
       <Navbar/>
     <Feature/>
    </Router>
   
   
    </>
      

   
  );
}

export default App;

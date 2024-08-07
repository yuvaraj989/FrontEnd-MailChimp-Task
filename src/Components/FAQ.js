import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './FAQ.css'; // Make sure to import your CSS file

const FAQ = () => {
    const faqs = [
        { question: "Can you build a website on Mailchimp?", answer: "Yes, you can build a website using Mailchimp. Our website builder is free to use and can help you create an attractive site for your business or online store. All sites are responsive and mobile-optimized, so you can ensure visitors have a positive experience with your brand. You can even add appointment scheduling to create and manage appointments and use built-in marketing tools to boost traffic and sales." },
        { question: "Which website builder is best for Mailchimp?", answer: "Ultimately, the best website builder is one that meets your specific business needs. With Mailchimp, you can build your website and promote it using one single marketing platform for free." },
        { question: "What is a website builder?", answer: "A website builder is a tool that allows you to create a website regardless of your experience. Many website builders use drag-and-drop functions, allowing you to customize your site any way you like. While there are several builders to choose from, Mailchimp provides you with exclusive features, including" },
        { question: "How to integrate Mailchimp with a website?", answer: "In addition to helping you build a website, we also provide intelligent marketing tools to ensure it attracts the right audience. From built-in signup and pop-up forms that engage visitors to behavioral targeting, growing your customer base has never been easier. If you already have an existing website, you can integrate Mailchimp by heading over to the Integrations page and clicking Manage under the Integrations tab." },
        { question: "How to build a business website?", answer: "To build a business website with Mailchimp, you have to first map out your site and determine the structure. You can create as many pages as you want with our website builder. Here are a few important pages to include: We provide you with a wide range of customizable themes, fonts, and color palettes to make this process easy. Once you’re done building and optimizing your site, you can publish it." },
        { question: "How long does it take to build a website?", answer: "With Mailchimp, you can build and publish a website in under an hour. Whether you’re a busy business owner or bustling entrepreneur, our free web builder provides you the tools to create a stunning website in no time. Even if you don’t have coding or design experience under your belt, you can grow your business and online presence with a well-made, professional site." },
        { question: "How can I build my own website?", answer: "You can build your own website using our customizable website builder. Choose from several pre-designed themes to begin the design process. Then, change the layout to create a website unique to your brand. Plus, you can see all your edits in real time and don’t need design or coding experience. You’ll also have access to millions of high-quality stock photos, so you don’t have to spend hours taking the perfect photo and uploading it to your site." },
    ];

    const FAQItem = ({ question, answer }) => {
        const [isOpen, setIsOpen] = useState(false);

        const toggleFAQ = () => {
            setIsOpen(!isOpen);
        };

        return (
            <div className="faq-item" onClick={toggleFAQ}>
                <div className="faq-question">
                    <span>{question}</span>
                    <span className={`bi ${isOpen ? 'bi-dash-circle-fill faq-icon faq-icon-open' : 'bi-plus-circle-fill faq-icon'}`}></span>
                </div>
                <div className={`faq-answer ${isOpen ? 'faq-answer-visible' : 'faq-answer-hidden'}`}>
                    {answer}
                </div>
            </div>
        );
    };

    return (
        <div className="faq-container">
            {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
        </div>
    );
};

export default FAQ;

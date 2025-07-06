// import React from 'react'
// import footerLogo  from "../assets/news/footer-logo.png"

// import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white py-10 px-4">
//       {/* Top Section */}
//       <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
//         {/* Left Side - Logo and Nav */}
//         <div className="md:w-1/2 w-full">
//           <img src={footerLogo} alt="Logo" className="mb-5 w-36" />
//           <ul className="flex flex-col md:flex-row gap-4">
//             <li><a href="#home" className="hover:text-primary">Home</a></li>
//             <li><a href="#services" className="hover:text-primary">Services</a></li>
//             <li><a href="#about" className="hover:text-primary">About Us</a></li>
//             <li><a href="#contact" className="hover:text-primary">Contact</a></li>
//           </ul>
//         </div>

//         {/* Right Side - Newsletter */}
//         <div className="md:w-1/2 w-full ">
//           <p className="mb-4">
//             Subscribe to our newsletter to receive the latest updates, news, and offers!
//           </p>
//           <div className="flex border-amber-50">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full px-4 py-2 rounded-l-md text-white"
//             />
//             <button className="bg-primary px-6 py-2 rounded-r-md hover:bg-primary-dark">
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-6">
//         {/* Left Side - Privacy Links */}
//         <ul className="flex gap-6 mb-4 md:mb-0">
//           <li><a href="#privacy" className="hover:text-primary">Privacy Policy</a></li>
//           <li><a href="#terms" className="hover:text-primary">Terms of Service</a></li>
//         </ul>

//         {/* Right Side - Social Icons */}
//         <div className="flex gap-6">
//           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
//             <FaFacebook size={24} />
//           </a>
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
//             <FaTwitter size={24} />
//           </a>
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
//             <FaInstagram size={24} />
//           </a>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer


import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { MdLocationOn, MdPhone, MdAccessTime } from 'react-icons/md';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLeft>
          <BookImageContainer>
            <BookImage src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Book Stack" />
          </BookImageContainer>
          <NewsletterForm>
            <h4>Subscribe to our newsletter</h4>
            <p>Receive the latest updates, news, and exclusive offers!</p>
            <InputGroup>
              <Input type="email" placeholder="Enter your email" className='text-black' />
              <SubscribeButton>Subscribe</SubscribeButton>
            </InputGroup>
          </NewsletterForm>
        </FooterLeft>

        <FooterRight>
          <FooterSection>
            <h4>Quick Links</h4>
            <FooterLink href="#">Home</FooterLink>
            <FooterLink href="#">Books</FooterLink>
            <FooterLink href="#">Categories</FooterLink>
            <FooterLink href="#">New Releases</FooterLink>
            <FooterLink href="#">Best Sellers</FooterLink>
          </FooterSection>

          <FooterSection>
            <h4>Customer Service</h4>
            <FooterLink href="#">Contact Us</FooterLink>
            <FooterLink href="#">FAQs</FooterLink>
            <FooterLink href="#">Shipping Policy</FooterLink>
            <FooterLink href="#">Returns & Refunds</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
          </FooterSection>

          <FooterSection>
            <h4>Store Information</h4>
            <InfoItem>
              <MdLocationOn className="icon" />
              <span>123 Book Street, Literary City, LC 12345</span>
            </InfoItem>
            <InfoItem>
              <MdPhone className="icon" />
              <span>(123) 456-7890</span>
            </InfoItem>
            <InfoItem>
              <MdAccessTime className="icon" />
              <span>Mon-Fri: 9AM - 6PM</span>
            </InfoItem>
          </FooterSection>
        </FooterRight>
      </FooterContent>

      <FooterBottom>
        <SocialIcons>
          <SocialIcon href="#"><FaFacebook /></SocialIcon>
          <SocialIcon href="#"><FaTwitter /></SocialIcon>
          <SocialIcon href="#"><FaInstagram /></SocialIcon>
          <SocialIcon href="#"><FaLinkedin /></SocialIcon>
          <SocialIcon href="#"><FaEnvelope /></SocialIcon>
        </SocialIcons>

        <Copyright>
          &copy; {new Date().getFullYear()} BookStore App. All Rights Reserved.
        </Copyright>
      </FooterBottom>
    </FooterContainer>
  );
};

// Styled Components
const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #2c3e50 0%, #1a252f 100%);
  color: #ecf0f1;
  padding: 3rem 2rem 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const FooterContent = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  gap: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const FooterLeft = styled.div`
  flex: 1;
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const BookImageContainer = styled.div`
  width: 180px;
  height: 240px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 200px;
  }
`;

const BookImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${BookImageContainer}:hover & {
    transform: scale(1.05);
  }
`;

const NewsletterForm = styled.div`
  flex: 1;

  h4 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    color: #fff;
  }

  p {
    font-size: 0.9rem;
    color: #bdc3c7;
    margin-bottom: 1rem;
  }
`;

const InputGroup = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 0.8rem;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  background: rgba(255, 255, 255, 0.9);

  &:focus {
    outline: 2px solid #3498db;
  }
`;

const SubscribeButton = styled.button`
  padding: 0 1.5rem;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #2980b9;
  }
`;

const FooterRight = styled.div`
  flex: 2;
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const FooterSection = styled.div`
  h4 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    color: #fff;
    position: relative;
    padding-bottom: 0.5rem;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 40px;
      height: 2px;
      background: #3498db;
    }
  }
`;

const FooterLink = styled.a`
  display: block;
  color: #bdc3c7;
  text-decoration: none;
  margin-bottom: 0.6rem;
  font-size: 0.9rem;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #3498db;
    transform: translateX(5px);
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.8rem;
  font-size: 0.9rem;
  color: #bdc3c7;

  .icon {
    color: #3498db;
    font-size: 1.1rem;
    flex-shrink: 0;
  }
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 1.5rem auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-top: 1.5rem;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  color: #ecf0f1;
  background: rgba(255, 255, 255, 0.1);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: #3498db;
    transform: translateY(-3px);
  }
`;

const Copyright = styled.p`
  font-size: 0.8rem;
  color: #7f8c8d;
  text-align: center;
`;

export default Footer;
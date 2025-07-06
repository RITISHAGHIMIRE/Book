// 📁 Register.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaUser, FaLock, FaGoogle, FaEnvelope, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration submitted:', { name, email, password });
  };

  return (
    <AuthContainer>
      <AuthCard>
        <UserIcon>
          <FaUserCircle size={28} />
        </UserIcon>
        <AuthTitle>Create Your Account</AuthTitle>
        
        <AuthForm onSubmit={handleSubmit}>
          <InputGroup>
            <InputIcon>
              <FaUser />
            </InputIcon>
            <Input 
              type="text" 
              placeholder="Full Name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </InputGroup>
          
          <InputGroup>
            <InputIcon>
              <FaEnvelope />
            </InputIcon>
            <Input 
              type="email" 
              placeholder="Email Address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputGroup>
          
          <InputGroup>
            <InputIcon>
              <FaLock />
            </InputIcon>
            <Input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputGroup>
          
          <InputGroup>
            <InputIcon>
              <FaLock />
            </InputIcon>
            <Input 
              type="password" 
              placeholder="Confirm Password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </InputGroup>
          
          <Terms>
            <Checkbox type="checkbox" id="terms" required />
            <Label htmlFor="terms">I agree to the <TermsLink href="#">Terms & Conditions</TermsLink></Label>
          </Terms>
          
          <SubmitButton type="submit">Register</SubmitButton>
          
          <Divider>or sign up with</Divider>
          
          <GoogleButton type="button">
            <FaGoogle /> Sign up with Google
          </GoogleButton>
          
        <LoginLink>
  Already have an account? <Link to="/login">Login</Link>
</LoginLink>
        </AuthForm>
      </AuthCard>
      
      <Footer>©2025 Book Store. All rights reserved.</Footer>
    </AuthContainer>
  );
};

// ✅ Styled Components

const AuthContainer = styled.div`
  min-height: 100vh;
  background: #f4f6f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AuthCard = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 420px;
`;

const UserIcon = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  color: #3498db;
`;

const AuthTitle = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
`;

const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  background: #ecf0f1;
  border-radius: 6px;
  padding: 0.5rem 1rem;
`;

const InputIcon = styled.div`
  color: #7f8c8d;
  margin-right: 0.5rem;
`;

const Input = styled.input`
  border: none;
  background: transparent;
  outline: none;
  flex: 1;
  font-size: 1rem;
`;

const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: #7f8c8d;
`;

const Terms = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  margin: 0.5rem 0;
`;

const TermsLink = styled.a`
  color: #3498db;
  text-decoration: none;
  margin-left: 4px;
  transition: color 0.3s ease;
  
  &:hover {
    color: #2980b9;
    text-decoration: underline;
  }
`;

const SubmitButton = styled.button`
  padding: 0.8rem;
  background: #3498db;
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background: #2980b9;
  }
`;

const Divider = styled.div`
  text-align: center;
  color: #bdc3c7;
  font-size: 0.9rem;
`;

const GoogleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem;
  border: 1px solid #dcdde1;
  background: white;
  border-radius: 6px;
  color: #2c3e50;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  
  &:hover {
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
`;

const LoginLink = styled.div`
  margin-top: 1rem;
  color: #7f8c8d;
  font-size: 0.9rem;
  text-align: center;
  
  a {
    color: #3498db;
    text-decoration: none;
    font-weight: 500;
    
    &:hover {
      color: #2980b9;
      text-decoration: underline;
    }
  }
`;

const Footer = styled.footer`
  margin-top: 2rem;
  color: #95a5a6;
  font-size: 0.8rem;
`;

export default Register;

import React, { useState } from 'react';
import styled from 'styled-components';
import { FaUser, FaLock, FaGoogle, FaEnvelope, FaUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // You'll need to install axios
import { toast } from 'react-toastify'; // For notifications
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the terms';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Replace with your actual API endpoint
      const response = await axios.post('https://your-api-endpoint.com/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password
      });
      
      toast.success('Registration successful!');
      navigate('/login'); // Redirect to login after successful registration
    } catch (error) {
      let errorMessage = 'Registration failed';
      if (error.response) {
        // Handle different error statuses
        if (error.response.status === 409) {
          errorMessage = 'Email already exists';
        } else {
          errorMessage = error.response.data.message || errorMessage;
        }
      }
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignUp = () => {
    // Implement Google OAuth integration here
    console.log('Google sign up clicked');
  };

  return (
    <AuthContainer>
      <AuthCard>
        <UserIcon>
          <FaUserCircle size={28} />
        </UserIcon>
        <AuthTitle>Create Your Account</AuthTitle>
        
        <AuthForm onSubmit={handleSubmit}>
          <InputGroup error={errors.name}>
            <InputIcon>
              <FaUser />
            </InputIcon>
            <Input 
              type="text" 
              name="name"
              placeholder="Full Name" 
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <ErrorText>{errors.name}</ErrorText>}
          </InputGroup>
          
          <InputGroup error={errors.email}>
            <InputIcon>
              <FaEnvelope />
            </InputIcon>
            <Input 
              type="email" 
              name="email"
              placeholder="Email Address" 
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <ErrorText>{errors.email}</ErrorText>}
          </InputGroup>
          
          <InputGroup error={errors.password}>
            <InputIcon>
              <FaLock />
            </InputIcon>
            <Input 
              type="password" 
              name="password"
              placeholder="Password" 
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <ErrorText>{errors.password}</ErrorText>}
          </InputGroup>
          
          <InputGroup error={errors.confirmPassword}>
            <InputIcon>
              <FaLock />
            </InputIcon>
            <Input 
              type="password" 
              name="confirmPassword"
              placeholder="Confirm Password" 
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <ErrorText>{errors.confirmPassword}</ErrorText>}
          </InputGroup>
          
          <Terms>
            <Checkbox 
              type="checkbox" 
              id="terms" 
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
            />
            <Label htmlFor="terms">I agree to the <TermsLink href="#">Terms & Conditions</TermsLink></Label>
            {errors.agreeTerms && <ErrorText>{errors.agreeTerms}</ErrorText>}
          </Terms>
          
          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Registering...' : 'Register'}
          </SubmitButton>
          
          <Divider>or sign up with</Divider>
          
          <GoogleButton type="button" onClick={handleGoogleSignUp}>
            <FaGoogle /> Sign up with Google
          </GoogleButton>
          
          <LoginLink>
            Already have an account? <Link to="/login">Login</Link>
          </LoginLink>
        </AuthForm>
      </AuthCard>
      <ToastContainer position="bottom-right" autoClose={5000} />
      <Footer>©2025 Book Store. All rights reserved.</Footer>
    </AuthContainer>

  );
};

// Additional styled component for error messages
const ErrorText = styled.span`
  color: #e74c3c;
  font-size: 0.8rem;
  margin-top: 0.25rem;
  display: block;
`;

// Update InputGroup to show error state
const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #ecf0f1;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  border: ${props => props.error ? '1px solid #e74c3c' : '1px solid transparent'};
`;

// ... (keep all your other styled components the same)

export default Register;
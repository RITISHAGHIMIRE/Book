import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaGoogle, FaEnvelope, FaExclamationCircle } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email';
    }
    if (!formData.password) newErrors.password = 'Password required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate('/dashboard');
    } catch (err) {
      setSubmitError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LoginContainer>
      <LoginCard>
        <UserIcon>
          <FaUser />
        </UserIcon>
        
        <LoginHeader>
          <h2>Welcome Back</h2>
          <p>Login to continue</p>
        </LoginHeader>

        {submitError && (
          <ErrorMessage>
            <FaExclamationCircle /> {submitError}
          </ErrorMessage>
        )}

        <LoginForm onSubmit={handleSubmit} noValidate>
          <FormGroup>
            <InputWrapper hasError={!!errors.email}>
              <InputIcon>
                <FaEnvelope />
              </InputIcon>
              <Input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                hasError={!!errors.email}
              />
            </InputWrapper>
            {errors.email && <ErrorText>{errors.email}</ErrorText>}
          </FormGroup>

          <FormGroup>
            <InputWrapper hasError={!!errors.password}>
              <InputIcon>
                <FaLock />
              </InputIcon>
              <Input
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                hasError={!!errors.password}
              />
            </InputWrapper>
            {errors.password && <ErrorText>{errors.password}</ErrorText>}
          </FormGroup>

          <OptionsRow>
            <RememberMe>
              <Checkbox
                name="rememberMe"
                type="checkbox"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <span>Remember me</span>
            </RememberMe>
            <ForgotLink to="/forgot-password">Forgot password?</ForgotLink>
          </OptionsRow>

          <SubmitButton type="submit" disabled={isLoading}>
            {isLoading ? <Spinner /> : 'Login'}
          </SubmitButton>

          <Divider>or</Divider>

          <GoogleButton type="button">
            <FaGoogle /> Continue with Google
          </GoogleButton>

          <RegisterLink>
            Don't have an account? <Link to="/register">Sign up</Link>
          </RegisterLink>
        </LoginForm>
      </LoginCard>
    </LoginContainer>
  );
};

// Animations
const spin = keyframes`
  to { transform: rotate(360deg); }
`;

// Styled Components
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: auto;
  padding: 1rem;
`;

const LoginCard = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  margin-top: 2rem;

  @media (max-width: 480px) {
    padding: 1.5rem;
    margin-top: 1rem;
    max-width: 90%;
  }
`;

const UserIcon = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #3498db 0%, #2c81ba 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -40px auto 1rem;
  box-shadow: 0 4px 10px rgba(52, 152, 219, 0.3);
`;

const LoginHeader = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;

  h2 {
    color: #2c3e50;
    font-size: 1.5rem;
    margin: 0.5rem 0 0.25rem;
  }

  p {
    color: #7f8c8d;
    font-size: 0.9rem;
    margin: 0;
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const InputWrapper = styled.div`
  position: relative;
  border: 1px solid ${props => props.hasError ? '#e74c3c' : '#e0e0e0'};
  border-radius: 8px;
  background: ${props => props.hasError ? '#fff8f8' : 'white'};
  transition: all 0.2s ease;

  &:focus-within {
    border-color: ${props => props.hasError ? '#e74c3c' : '#3498db'};
    box-shadow: 0 0 0 2px ${props => props.hasError ? 'rgba(231, 76, 60, 0.1)' : 'rgba(52, 152, 219, 0.1)'};
  }
`;

const InputIcon = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.hasError ? '#e74c3c' : '#7f8c8d'};
  font-size: 0.9rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 36px;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  background: transparent;

  &:focus {
    outline: none;
  }
`;

const ErrorText = styled.span`
  color: #e74c3c;
  font-size: 0.8rem;
  padding-left: 0.5rem;
`;

const OptionsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
`;

const RememberMe = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #2c3e50;
  cursor: pointer;
`;

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  accent-color: #3498db;
`;

const ForgotLink = styled(Link)`
  color: #3498db;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  background: linear-gradient(135deg, #3498db 0%, #2c81ba 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #2c81ba 0%, #2980b9 100%);
  }

  &:disabled {
    background: #bdc3c7;
    cursor: not-allowed;
  }
`;

const Spinner = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: ${spin} 1s linear infinite;
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  color: #95a5a6;
  font-size: 0.85rem;
  margin: 0.2rem 0;

  &::before, &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #eee;
  }

  &::before {
    margin-right: 0.8rem;
  }

  &::after {
    margin-left: 0.8rem;
  }
`;

const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.8rem;
  background: white;
  color: #2c3e50;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f8f9fa;
  }
`;

const RegisterLink = styled.div`
  text-align: center;
  font-size: 0.85rem;
  color: #7f8c8d;

  a {
    color: #3498db;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  background: #fff8f8;
  padding: 0.7rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 1px solid #ffdede;
`;

export default Login;
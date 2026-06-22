import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaPaperPlane } from 'react-icons/fa';

const Section = styled.section`
  padding: 80px 5%;
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled(motion.h2)`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #06b6d4, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Desc = styled(motion.p)`
  color: rgba(255,255,255,0.5);
  font-size: 1.1rem;
  max-width: 500px;
  margin: 0 auto 3rem;
  line-height: 1.7;
`;

const FormContainer = styled(motion.form)`
  max-width: 600px;
  margin: 0 auto 4rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: rgba(255,255,255,0.7);
  font-weight: 500;
`;

const Input = styled.input`
  padding: 1rem 1.2rem;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  font-family: inherit;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: #a855f7;
  }
`;

const TextArea = styled.textarea`
  padding: 1rem 1.2rem;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  font-family: inherit;
  font-size: 1rem;
  outline: none;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: #a855f7;
  }
`;

const SubmitBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #7c3aed, #06b6d4);
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  border-radius: 14px;
  border: none;
  cursor: pointer;
  transition: opacity 0.25s ease, transform 0.25s ease;
  margin-top: 1rem;

  &:hover:not(:disabled) {
    opacity: 0.85;
    transform: translateY(-3px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const StatusMessage = styled.p<{ success?: boolean }>`
  font-size: 0.95rem;
  margin-top: -0.5rem;
  color: ${({ success }) => (success ? '#10b981' : '#f43f5e')};
  font-weight: 500;
`;

const SocialRow = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const SocialCard = styled(motion.a)<{ color: string }>`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.8rem 1.5rem;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  color: rgba(255,255,255,0.7);
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.25s ease;

  svg { font-size: 1.1rem; color: ${({ color }) => color}; }

  &:hover {
    border-color: ${({ color }) => color};
    color: #fff;
    transform: translateY(-3px);
    background: rgba(255,255,255,0.07);
  }
`;

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Using FormSubmit API for direct email forwarding without backend
      const res = await fetch("https://formsubmit.co/ajax/priyakatariya2007@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000); 
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <Section id="contact">
      <Title
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Get In Touch
      </Title>
      <Desc
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        Have a question or want to work together? Send me a message and I'll get back to you directly on my email!
      </Desc>

      <FormContainer
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {/* Anti-spam and styling configurations for FormSubmit */}
        <input type="hidden" name="_subject" value="New Portfolio Contact Message!" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="text" name="_honey" style={{ display: 'none' }} />

        <InputGroup>
          <Label>Name</Label>
          <Input type="text" name="name" required placeholder="Your Name" />
        </InputGroup>
        
        <InputGroup>
          <Label>Email Address</Label>
          <Input type="email" name="email" required placeholder="your.email@example.com" />
        </InputGroup>
        
        <InputGroup>
          <Label>Message</Label>
          <TextArea name="message" required placeholder="Hello Priya, I'd like to discuss..." />
        </InputGroup>

        {status === 'success' && <StatusMessage success>Message sent successfully! I'll be in touch soon.</StatusMessage>}
        {status === 'error' && <StatusMessage>Oops! Something went wrong. Please try again or email directly.</StatusMessage>}

        <SubmitBtn type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Sending...' : <><FaPaperPlane /> Send Message</>}
        </SubmitBtn>
      </FormContainer>

      <SocialRow
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <SocialCard href="mailto:priyakatariya2007@gmail.com" color="#06b6d4">
          <FaEnvelope /> priyakatariya2007@gmail.com
        </SocialCard>
        <SocialCard href="https://linkedin.com/in/priya-27a522333" target="_blank" rel="noopener noreferrer" color="#0077b5">
          <FaLinkedin /> LinkedIn
        </SocialCard>
        <SocialCard href="https://github.com/priyakatariya" target="_blank" rel="noopener noreferrer" color="#f0f6fc">
          <FaGithub /> GitHub
        </SocialCard>
        <SocialCard href="tel:+918865020721" color="#10b981">
          <FaPhone /> +91-886-5020-721
        </SocialCard>
      </SocialRow>
    </Section>
  );
};

export default Contact;

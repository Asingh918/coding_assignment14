import styled from 'styled-components';

const FooterSection = styled.footer`
  background: #0a0a0a;
  border-top: 1px solid #2a2a2a;
  padding: 2rem;
  text-align: center;
`;

const FooterText = styled.p`
  color: #9ca3af;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const FooterLink = styled.a`
  color: #4f46e5;
  font-size: 0.9rem;
  transition: color 0.3s ease;

  &:hover {
    color: #7c3aed;
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <FooterText>
        © 2026 Arshpreet Singh — Built with React, TypeScript & Docker
      </FooterText>
      <FooterLinks>
        <FooterLink
          href="https://github.com/Asingh918"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </FooterLink>
        <FooterLink href="#hero">Back to Top</FooterLink>
        <FooterLink href="#work">My Work</FooterLink>
        <FooterLink href="#skills">Skills</FooterLink>
      </FooterLinks>
    </FooterSection>
  );
};

export default Footer;
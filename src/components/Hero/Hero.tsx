import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem 2rem;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%);
  text-align: center;
`;

const HeroContent = styled.div`
  animation: ${fadeIn} 1s ease forwards;
  max-width: 800px;
`;

const Greeting = styled.p`
  color: #4f46e5;
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1rem;
  letter-spacing: 3px;
  text-transform: uppercase;
`;

const Name = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #ffffff, #4f46e5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #9ca3af;
  font-weight: 400;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #9ca3af;
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.8;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const PrimaryButton = styled.a`
  background: #4f46e5;
  color: white;
  padding: 0.875rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: #4338ca;
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled.a`
  border: 2px solid #4f46e5;
  color: #4f46e5;
  padding: 0.875rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: #4f46e5;
    color: white;
    transform: translateY(-2px);
  }
`;

const TagsRow = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const Tag = styled.span`
  background: #1a1a2e;
  border: 1px solid #4f46e5;
  color: #4f46e5;
  padding: 0.3rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
`;

const Hero = () => {
  return (
    <HeroSection id="hero">
      <HeroContent>
        <Greeting>Welcome to my portfolio</Greeting>
        <Name>Arshpreet Singh</Name>
        <Title>Full Stack Developer Student</Title>
        <Title>Red River College Polytechnic</Title>
        <TagsRow>
          <Tag>React</Tag>
          <Tag>TypeScript</Tag>
          <Tag>Docker</Tag>
          <Tag>Node.js</Tag>
        </TagsRow>
        <Description>
          IT student passionate about building clean, tested, and well-documented
          web applications. Currently studying Business Systems Build and Testing
          at Red River College.
        </Description>
        <ButtonGroup>
          <PrimaryButton href="#work">View My Work</PrimaryButton>
          <SecondaryButton href="#skills">My Skills</SecondaryButton>
        </ButtonGroup>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
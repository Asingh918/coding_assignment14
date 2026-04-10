import styled from 'styled-components';

const WorkSection = styled.section`
  padding: 5rem 2rem;
  background: #0a0a0a;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #ffffff, #4f46e5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: #9ca3af;
  margin-bottom: 3rem;
  font-size: 1.1rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.div`
  background: #1a1a1a;
  border: 1px solid #2a2a2a;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: #4f46e5;
    box-shadow: 0 20px 40px rgba(79, 70, 229, 0.2);
  }
`;

const ProjectImage = styled.div<{ bg: string }>`
  height: 200px;
  background: ${(props) => props.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #ffffff;
`;

const ProjectDescription = styled.p`
  color: #9ca3af;
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 1rem;
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: #2a2a2a;
  color: #4f46e5;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  border: 1px solid #4f46e5;
`;

const ProjectLink = styled.a`
  display: inline-block;
  background: #4f46e5;
  color: white;
  padding: 0.6rem 1.5rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: #4338ca;
    transform: translateY(-2px);
  }
`;

const projects = [
  {
    title: 'NexusUI Component Library',
    description:
      'A reusable React component library built with TypeScript and Storybook. Includes Button, Card, Dropdown, Table, Label, RadioButton, HeroImage, Img, and Text components with full documentation.',
    image: '🎨',
    bg: 'linear-gradient(135deg, #1a1a2e, #4f46e5)',
    tech: ['React', 'TypeScript', 'Storybook', 'Styled Components', 'Jest'],
    link: 'https://github.com/Asingh918/my-ui-library',
  },
  {
    title: 'UI Garden Build Checks',
    description:
      'Extended the NexusUI component library with automated code quality checks. Added Husky pre-commit hooks, ESLint, Prettier, and GitHub Actions CI/CD pipeline with Docker deployment.',
    image: '🛡️',
    bg: 'linear-gradient(135deg, #1a1a2e, #7c3aed)',
    tech: ['Husky', 'ESLint', 'Prettier', 'GitHub Actions', 'Docker'],
    link: 'https://github.com/Asingh918/coding_assignment13',
  },
  {
    title: 'Portfolio Website',
    description:
      'A personal portfolio website built with React and TypeScript showcasing my projects, skills, and developer setup. Dockerized and served with Nginx on port 5575.',
    image: '🚀',
    bg: 'linear-gradient(135deg, #1a1a2e, #06b6d4)',
    tech: ['React', 'TypeScript', 'Docker', 'Nginx', 'Styled Components'],
    link: 'https://github.com/Asingh918/coding_assignment14',
  },
];

const Work = () => {
  return (
    <WorkSection id="work">
      <SectionTitle>My Work</SectionTitle>
      <SectionSubtitle>Projects I have built during my program</SectionSubtitle>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectImage bg={project.bg}>{project.image}</ProjectImage>
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechTags>
                {project.tech.map((tech, i) => (
                  <TechTag key={i}>{tech}</TechTag>
                ))}
              </TechTags>
              <ProjectLink
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub →
              </ProjectLink>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </WorkSection>
  );
};

export default Work;
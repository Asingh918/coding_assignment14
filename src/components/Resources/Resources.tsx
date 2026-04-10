import styled from 'styled-components';

const ResourcesSection = styled.section`
  padding: 5rem 2rem;
  background: #0a0a0a;
`;

const Inner = styled.div`
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
`;

const ResourceCard = styled.a`
  background: #1a1a1a;
  border: 1px solid #2a2a2a;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: #4f46e5;
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(79, 70, 229, 0.2);
  }
`;

const ResourceIcon = styled.div`
  font-size: 2.5rem;
  min-width: 50px;
  text-align: center;
`;

const ResourceInfo = styled.div`
  flex: 1;
`;

const ResourceTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const ResourceSummary = styled.p`
  color: #9ca3af;
  font-size: 0.85rem;
  line-height: 1.6;
`;

const ResourceLink = styled.span`
  color: #4f46e5;
  font-size: 0.8rem;
  margin-top: 0.5rem;
  display: block;
`;

const resources = [
  {
    icon: '⚛️',
    title: 'React Documentation',
    summary: 'Official React docs for learning components, hooks, and state management.',
    link: 'https://react.dev',
  },
  {
    icon: '📘',
    title: 'TypeScript Handbook',
    summary: 'Complete guide to TypeScript types, interfaces, and advanced features.',
    link: 'https://www.typescriptlang.org/docs',
  },
  {
    icon: '🐳',
    title: 'Docker Documentation',
    summary: 'Learn how to build, ship, and run containers with Docker.',
    link: 'https://docs.docker.com',
  },
  {
    icon: '🌿',
    title: 'Git Documentation',
    summary: 'Official Git docs for version control, branching, and collaboration.',
    link: 'https://git-scm.com/doc',
  },
  {
    icon: '🎨',
    title: 'Styled Components',
    summary: 'Visual CSS-in-JS styling for React components with theming support.',
    link: 'https://styled-components.com/docs',
  },
  {
    icon: '📖',
    title: 'MDN Web Docs',
    summary: 'Comprehensive reference for HTML, CSS, and JavaScript web standards.',
    link: 'https://developer.mozilla.org',
  },
  {
    icon: '🧪',
    title: 'Jest Documentation',
    summary: 'JavaScript testing framework for unit and integration tests.',
    link: 'https://jestjs.io/docs/getting-started',
  },
  {
    icon: '⚡',
    title: 'Vite Documentation',
    summary: 'Next generation frontend tooling for fast development builds.',
    link: 'https://vitejs.dev/guide',
  },
];

const Resources = () => {
  return (
    <ResourcesSection id="resources">
      <Inner>
        <SectionTitle>Resources</SectionTitle>
        <SectionSubtitle>
          Helpful tools and references I use every day
        </SectionSubtitle>
        <Grid>
          {resources.map((resource, index) => (
            <ResourceCard
              key={index}
              href={resource.link}
              target="_blank"
              rel="noreferrer"
            >
              <ResourceIcon>{resource.icon}</ResourceIcon>
              <ResourceInfo>
                <ResourceTitle>{resource.title}</ResourceTitle>
                <ResourceSummary>{resource.summary}</ResourceSummary>
                <ResourceLink>{resource.link}</ResourceLink>
              </ResourceInfo>
            </ResourceCard>
          ))}
        </Grid>
      </Inner>
    </ResourcesSection>
  );
};

export default Resources;
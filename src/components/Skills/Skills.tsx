import styled from 'styled-components';

const SkillsSection = styled.section`
  padding: 5rem 2rem;
  background: #111111;
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
  gap: 2rem;
`;

const CategoryCard = styled.div`
  background: #1a1a1a;
  border: 1px solid #2a2a2a;
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: #4f46e5;
    transform: translateY(-3px);
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #4f46e5;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const SkillBadge = styled.span`
  background: #2a2a2a;
  color: #ffffff;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  border: 1px solid #3a3a3a;
  transition: all 0.3s ease;

  &:hover {
    border-color: #4f46e5;
    color: #4f46e5;
  }
`;

const skills = [
  {
    icon: '💻',
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SQL'],
  },
  {
    icon: '⚛️',
    category: 'Frameworks & Libraries',
    items: ['React', 'Styled Components', 'Node.js', 'Storybook'],
  },
  {
    icon: '🛠️',
    category: 'Tools',
    items: ['VS Code', 'Git', 'GitHub', 'Docker', 'Nginx', 'npm'],
  },
  {
    icon: '🧪',
    category: 'Testing & Quality',
    items: ['Jest', 'React Testing Library', 'ESLint', 'Prettier', 'Husky'],
  },
  {
    icon: '⚙️',
    category: 'CI/CD & DevOps',
    items: ['GitHub Actions', 'Docker', 'Vite', 'Linux'],
  },
  {
    icon: '📚',
    category: 'Currently Learning',
    items: ['Next.js', 'PostgreSQL', 'REST APIs', 'Agile/Scrum'],
  },
];

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <Inner>
        <SectionTitle>Skills</SectionTitle>
        <SectionSubtitle>Technologies and tools I have worked with</SectionSubtitle>
        <Grid>
          {skills.map((group, index) => (
            <CategoryCard key={index}>
              <CategoryTitle>
                {group.icon} {group.category}
              </CategoryTitle>
              <SkillsList>
                {group.items.map((skill, i) => (
                  <SkillBadge key={i}>{skill}</SkillBadge>
                ))}
              </SkillsList>
            </CategoryCard>
          ))}
        </Grid>
      </Inner>
    </SkillsSection>
  );
};

export default Skills;

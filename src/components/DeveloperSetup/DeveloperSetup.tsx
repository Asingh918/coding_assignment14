import styled from 'styled-components';

const SetupSection = styled.section`
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const SetupCard = styled.div`
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

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const CardIcon = styled.div`
  font-size: 2rem;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #ffffff;
`;

const ItemList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Item = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: #9ca3af;
  font-size: 0.95rem;
  line-height: 1.5;
`;

const Dot = styled.span`
  color: #4f46e5;
  font-size: 1.2rem;
  margin-top: -2px;
`;

const CodeBlock = styled.div`
  background: #0a0a0a;
  border: 1px solid #2a2a2a;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #06b6d4;
`;

const DeveloperSetup = () => {
  return (
    <SetupSection id="setup">
      <Inner>
        <SectionTitle>Developer Setup</SectionTitle>
        <SectionSubtitle>
          My preferred development environment and tools
        </SectionSubtitle>
        <Grid>
          <SetupCard>
            <CardHeader>
              <CardIcon>💻</CardIcon>
              <CardTitle>VS Code Setup</CardTitle>
            </CardHeader>
            <ItemList>
              <Item>
                <Dot>▹</Dot>
                ES7+ React/Redux/React-Native snippets
              </Item>
              <Item>
                <Dot>▹</Dot>
                Prettier - Code formatter
              </Item>
              <Item>
                <Dot>▹</Dot>
                ESLint
              </Item>
              <Item>
                <Dot>▹</Dot>
                Docker extension
              </Item>
              <Item>
                <Dot>▹</Dot>
                GitLens — Git supercharged
              </Item>
              <Item>
                <Dot>▹</Dot>
                Auto Rename Tag
              </Item>
              <Item>
                <Dot>▹</Dot>
                Thunder Client (API testing)
              </Item>
            </ItemList>
          </SetupCard>

          <SetupCard>
            <CardHeader>
              <CardIcon>🖥️</CardIcon>
              <CardTitle>Terminal Setup</CardTitle>
            </CardHeader>
            <ItemList>
              <Item>
                <Dot>▹</Dot>
                Git Bash on Windows
              </Item>
              <Item>
                <Dot>▹</Dot>
                VS Code integrated terminal
              </Item>
              <Item>
                <Dot>▹</Dot>
                Node.js v18+ installed
              </Item>
              <Item>
                <Dot>▹</Dot>
                npm package manager
              </Item>
              <Item>
                <Dot>▹</Dot>
                Docker Desktop for containers
              </Item>
            </ItemList>
            <CodeBlock>
              $ node --version{'\n'}
              v18.x.x{'\n'}
              $ npm --version{'\n'}
              9.x.x{'\n'}
              $ docker --version{'\n'}
              Docker 24.x.x
            </CodeBlock>
          </SetupCard>

          <SetupCard>
            <CardHeader>
              <CardIcon>🔤</CardIcon>
              <CardTitle>Preferred Editor Font</CardTitle>
            </CardHeader>
            <ItemList>
              <Item>
                <Dot>▹</Dot>
                Font: Fira Code
              </Item>
              <Item>
                <Dot>▹</Dot>
                Font Size: 14px
              </Item>
              <Item>
                <Dot>▹</Dot>
                Line Height: 1.6
              </Item>
              <Item>
                <Dot>▹</Dot>
                Font Ligatures: Enabled
              </Item>
              <Item>
                <Dot>▹</Dot>
                Tab Size: 2 spaces
              </Item>
              <Item>
                <Dot>▹</Dot>
                Theme: One Dark Pro
              </Item>
              <Item>
                <Dot>▹</Dot>
                Word Wrap: On
              </Item>
            </ItemList>
          </SetupCard>
        </Grid>
      </Inner>
    </SetupSection>
  );
};

export default DeveloperSetup;
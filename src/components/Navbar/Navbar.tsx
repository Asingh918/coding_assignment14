import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #2a2a2a;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #4f46e5;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
`;

const NavLink = styled.a`
  color: #9ca3af;
  font-size: 0.95rem;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #4f46e5;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo>Arshpreet Singh</Logo>
      <NavLinks>
        <li>
          <NavLink href="#hero">Home</NavLink>
        </li>
        <li>
          <NavLink href="#work">Work</NavLink>
        </li>
        <li>
          <NavLink href="#skills">Skills</NavLink>
        </li>
        <li>
          <NavLink href="#resources">Resources</NavLink>
        </li>
        <li>
          <NavLink href="#setup">Setup</NavLink>
        </li>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;

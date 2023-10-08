import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const NavLink = styled.a`
  font-size: 1.3rem;  /* Increase the font-size here */
  color: #FFFFFF;
  text-decoration: none;
  transition: color 0.3s ease;
  &:hover {
    color: #0050a3;
  }
`;

function Navigation() {
  return (
    <Nav>
      <Link href="/" passHref>
        <NavLink>Home</NavLink>
      </Link>
      <Link href="/#navigation-publications" passHref>
        <NavLink>Publications</NavLink>
      </Link>
      <Link href="/updates" passHref>
        <NavLink>Updates</NavLink>
      </Link>
    </Nav>
  );
}

export default Navigation;

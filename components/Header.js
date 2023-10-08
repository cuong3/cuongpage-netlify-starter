import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem 5%;
  background: #333;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: white;
`;

function Header() {
  return (
    <HeaderWrapper>
      <nav>
        {/* Add your navigation links here */}
      </nav>
    </HeaderWrapper>
  );
}

export default Header;
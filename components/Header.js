import styled from 'styled-components';
import Navigation from './Navigation';

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem 5%;
  background: #2AAA8A;
`;

function Header() {
  return (
    <HeaderWrapper>
      <Navigation />
    </HeaderWrapper>
  );
}

export default Header;
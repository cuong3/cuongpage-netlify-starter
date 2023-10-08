import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 5%;
`;

function Layout({ children }) {
  return (
    <div>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}

export default Layout;
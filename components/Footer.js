import styled from 'styled-components';

const FooterWrapper = styled.footer`
  padding: 1rem 5%;
  background: #222;
  color: white;
  text-align: center;
`;

function Footer() {
  return (
    <FooterWrapper>
      <p>&copy; 2023 Cuong Nguyen. All rights reserved.</p>
    </FooterWrapper>
  );
}

export default Footer;
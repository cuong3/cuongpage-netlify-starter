import '@styles/globals.css'
import GlobalStyle from '../styles/GlobalStyles';

function Application({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default Application

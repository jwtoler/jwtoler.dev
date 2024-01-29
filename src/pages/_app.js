import 'tailwindcss/tailwind.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

import '../globals.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;

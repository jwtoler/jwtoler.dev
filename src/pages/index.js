import dynamic from 'next/dynamic';

import Page from '../components/Layout/Page';
import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Resume from '../components/Resume';
import { siteMetaData } from '../data/siteData';

const Header = dynamic(() => import('../components/Header'), {ssr: false});

const Home = () => {
  const { description, title } = siteMetaData;

  return (
    <Page description={description} title={title}>
      <Header />
      <Hero />
      <About />
      <button
  type="button"
  onClick={() => {
    throw new Error("Sentry Frontend Error");
  }}
>
  Throw error
</button>
      <Resume />
      <Contact />
    </Page>
  );
};

export default Home;

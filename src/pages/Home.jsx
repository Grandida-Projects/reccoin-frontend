

import Hero from '../components/homepage_components/HeroSection'
import { EarnReccoinReward } from '../components/homepage_components/earnReccoin';
import LatestNews from '../components/homepage_components/LatestNews.jsx';
import About from '../components/homepage_components/about';
import Faq from '../components/homepage_components/faq';
import howItWorks from '../components/homepage_components/howItWorks'
import Recycling from '../components/homepage_components/Recycling';
// import CompanyRegPage from './CompanyRegPage';

const Home = () => {
  return (
    <>
      <Hero /> 
      <EarnReccoinReward />
      <About />
      <Recycling/>
      <howItWorks />
      <LatestNews />
      <Faq />
    </>
  );
};
export default Home;

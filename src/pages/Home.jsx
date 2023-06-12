import Hero from '../components/homepage_components/HeroSection';
import { EarnReccoinReward } from '../components/homepage_components/earnReccoin';
import LatestNews from '../components/homepage_components/LatestNews.jsx';
import About from '../components/homepage_components/about';
import Faq from '../components/homepage_components/faq';
import Recycling from '../components/homepage_components/Recycling';
import HowItWorks from '../components/homepage_components/howItWorks';
import ReccoinAsaService from '../components/homepage_components/ReccoinAsaService';
import HomeFooter from '../components/homepage_components/HomeFooter';
import Header from '../components/navigation/Header';
import Footer from '../components/footer';
import Subscribe from '../components/homepage_components/Subcribe';
import AboutUsAndEarnRecoin from '../components/about_us_components/AboutUsAndEarnRecoin';

const Home = () => {
  return (
    <div>
      <Header />
        <Hero />
        <ReccoinAsaService />
        <AboutUsAndEarnRecoin/>
        <Recycling />
        <HowItWorks />
        <LatestNews />
        <Subscribe/>
        <Faq />
        <HomeFooter />
      <Footer />
    </div>
  );
};
export default Home;

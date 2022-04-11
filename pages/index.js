import Head from 'next/head';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import SectionOne from '../components/SectionOne/SectionOne';
import SectionTwo from '../components/SectionTwo/SectionTwo';
import SectionThree from '../components/SectionThree/SectionThree';
import GalleriesSection from '../components/GalleriesSection/GalleriesSection';
import SectionFour from '../components/SectionFour/SectionFour';
import SectionFive from '../components/SectionFive/SectionFive';
import StayInTouchSection
  from '../components/StayInTouchSection/StayInTouchSection';
import Footer from '../components/Footer';

export default function Home () {
  return (
    <div className="home">
      <Head>
        <title>Real Estate Landing Page</title>
      </Head>
      <Header />
      <Banner />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <GalleriesSection />
      <SectionFour />
      <SectionFive />
      <StayInTouchSection />
      <Footer />

    </div>
  );
}

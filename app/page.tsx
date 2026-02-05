'use client';
import { WixMediaImage } from '@app/components/Image/WixMediaImage';
import { Banner } from './components/Banner/Banner';
import { CardSmall } from './components/Cards/CardSmall';
import testIds from '@app/utils/test-ids';
import { useEffect } from 'react';
import { dropConfetti } from './utils/confetti';
import { AditionaInformation, Locations, Confirmation } from './components/Home';

const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      dropConfetti();
    }, 1000);
  }, []);

  return (
    <div className="mx-auto relative px-4 sm:px-8 md:px-20 py-5">
      {/* Banner */}
      <Banner
        header={'Te invitamos a la fiesta de'}
        footer={'Sábado 28 de marzo de 2026'}
      />
      <div className="full-width h-2 sm:h-5 mt-0 sm:mt-10  "></div>
      <Confirmation />
      <Locations />
      <AditionaInformation />
    </div>
  );
};

export default Home;

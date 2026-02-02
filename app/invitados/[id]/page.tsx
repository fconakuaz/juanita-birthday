'use client';
import { Banner } from '@app/components/Banner/Banner';
import { FormConfirmation } from '@app/components/Form/FormConfirmation';
import { useEffect } from 'react';
import { dropConfetti } from '@app/utils/confetti';
import { useWeddingGuestStore } from '@app/store/guest.store';
import LoadingBox from '@app/components/Loader/Loader';
import { AditionaInformation, Locations } from '@app/components/Home';

export default function New({ params }: any) {
  const { id } = params;
  const { getWeddingGuest, weddingGuest } = useWeddingGuestStore(
    (state) => state
  );
  useEffect(() => {
    getWeddingGuest(id);
    setTimeout(() => {
      dropConfetti();
    }, 1000);
  }, []);

  return (
    <div className="mx-auto relative px-4 sm:px-8 md:px-20 py-5">
      <Banner
        header={'Te invitamos a la fiesta de'}
        footer={'17 de enero de 2026'}
      />
      {/* Form invitation */}
      {weddingGuest?.id !== null ? <FormConfirmation /> : <LoadingBox />}
      <Locations />
      <AditionaInformation />
    </div>
  );
}

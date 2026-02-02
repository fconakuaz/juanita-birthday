import { FC } from 'react';
import { WixMediaImage } from '@app/components/Image/WixMediaImage';

export const AditionaInformation: FC = (): any => {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:mt-12 mb-1 sm:gap-1">
        <div className="w-full">
          <div className="h-[250px] sm:h-[380px] relative">
            <WixMediaImage
              media={
                'https://images.unsplash.com/photo-1687771454203-97d0b08bbeb2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
              objectFit="cover"
              sizes="50vw"
              disableZoom={true}
            />
          </div>
          <div className="border-y-4 border-blue-site p-4 sm:p-8 sm:w-full relative bg-white sm:ml- sm:mt-[-20px]">
            <h3 className="text-lg sm:text-xl md:text-[22px] font-site">
              {'Aviso importante'}
            </h3>
            <p className="mb-6 mt-4 text-xs sm:text-sm">
              No se ofrecerá alcohol adicional, no obstante si deseas disfrutar
              de tu bebida favorita, la puedes traer sin problema. Apreciamos tu
              comprensión y estamos felices de que nos acompañes a celebrar el
              cumpleaños de Luz.
              <br />
              <br />
              ¡Muchas gracias por celebrar el cumpleaños de Luz con nosotros!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

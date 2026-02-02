import { FC } from 'react';
import Countdown from './Countdown';

interface Props {
  header: string;
  footer: string;
}

export const Banner: FC<Props> = ({ header, footer }): any => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center w-full max-w-6xl mx-auto p-4 sm:p-8 gap-8">
      {/* Left Side: Image */}
      <div className="w-full sm:w-1/2 flex justify-center sm:justify-end">
        <img
          src="https://res.cloudinary.com/zencommerce/image/upload/v1770071177/juanita_evsgu7.jpg"
          alt="Juanita"
          className="rounded-[20px] w-auto h-auto max-h-[300px] sm:max-h-[550px] shadow-lg"
          style={{ objectFit: 'contain' }}
        />
      </div>

      {/* Right Side: Text & Countdown */}
      <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-start text-center sm:text-left text-blue-site">
        <h2 className="text-xl sm:text-3xl font-site mb-2">{header}</h2>

        <p className="text-[50px] sm:text-[80px] leading-tight rouge-script-regular mb-4">
          Juanita
        </p>

        <h5 className="text-lg sm:text-2xl font-site mb-0">{footer}</h5>
        <h5 className="text-lg sm:text-2xl font-site mb-6">2:00 pm</h5>

        <div className="w-full border-t border-blue-site/30 my-4"></div>

        <h3 className="text-lg sm:text-xl font-site mb-4">
          Tiempo faltante para la fiesta
        </h3>

        <Countdown
          date="2026-03-08T14:00:00"
          className="!mx-auto sm:!mx-0 sm:!ml-[-13px]"
        />
      </div>
    </div>
  );
};

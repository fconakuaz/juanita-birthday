import { FC } from 'react';

export const Confirmation: FC = () => {
  return (
    <>
      <h1
        className="text-center font-site pt-5 sm:pt-5 mt-2 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0 text-xl sm:text-2xl md:text-[28px]"
        style={{
          color: '#8d3952',
          lineHeight: '1.2',
          marginBottom: '-20px',
        }}
      >
        No olvides confirmar tu asistencia
        <br />
        antes del 28 de febrero
      </h1>
      <div className="text-center mt-6 sm:mt-10 mb-10 sm:mb-24">
        <p
          className="text-lg sm:text-xl md:text-2xl mb-2"
          style={{ color: '#8d3952' }}
        >
          A los números:
        </p>
        <div
          className="flex flex-row flex-wrap justify-center items-center gap-2 sm:gap-4 text-center font-bold text-lg sm:text-xl"
          style={{ color: '#8d3952' }}
        >
          <a
            href="https://wa.me/522281213774"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Luz: 228 121 3774
          </a>
          <span>|</span>
          <a
            href="https://wa.me/522281597338"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Niza: 228 159 7338
          </a>
          <span>|</span>
          <a
            href="https://wa.me/522281510160"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Inés: 228 151 0160
          </a>
        </div>
      </div>
    </>
  );
};

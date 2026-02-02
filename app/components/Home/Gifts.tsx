import { FC } from 'react';
import { WixMediaImage } from '@app/components/Image/WixMediaImage';

export const Gifts: FC = (): any => {
  return (
    <>
      <h1
        className="text-center font-site pt-5 mt-5 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0"
        style={{
          color: 'rgb(112 184 214 / var(--tw-bg-opacity))',
          fontSize: '28px',
          lineHeight: '30px',
          marginBottom: '-20px',
        }}
      >
        Regalos y Contribuciones
      </h1>
      <div className="flex mt-12 sm:mt-10 sm:gap-12 flex-col sm:flex-row">
        <div className="basis-1/2">
          <div className="h-[370px] sm:h-[470px] relative">
            <WixMediaImage
              media="https://as2.ftcdn.net/v2/jpg/03/63/65/55/1000_F_363655595_XDCAJP2NCCnyH0TjZanEMYBNEpDcsUiG.jpg"
              objectFit="cover"
              sizes="100vw"
              disableZoom={true}
            />
          </div>
          <div className="border-y-4 border-blue-site p-8 sm:w-80 relative bg-gray-800 sm:ml-52 sm:mt-[-360px]">
            <h3 className="text-2xl font-site">Regalos en efectivo</h3>
            <p className="my-6 text-sm">
              Si consideras hacer un regalo a Luz, preferimos una contribución
              en efectivo; cualquier aporte es bien recibido para celebrar su
              cumpleaños. Puedes entregar tu gentil aporte en el sobre que
              facilitaremos en la fiesta y depositarlo en la urna en el salón.
              Agradecemos tu apoyo y generosidad en este momento tan especial.
              ¡Muchas gracias!
            </p>
          </div>
        </div>
        <div className="basis-1/2">
          <div className="h-[370px] sm:h-[470px] relative">
            <WixMediaImage
              media="https://as1.ftcdn.net/v2/jpg/06/19/27/72/1000_F_619277215_vzMAOqD8spQUSxKXTGsOYTbZnyK37TvK.jpg"
              objectFit="cover"
              sizes="50vw"
              disableZoom={true}
            />
          </div>
          <div className="border-y-4 border-blue-site p-8 pr-5  sm:w-60 relative bg-gray-800 sm:ml-40 sm:mt-[-360px]">
            <h3 className="text-2xl font-site">Mesa de regalos </h3>
            <p className="my-6 text-sm">
              Si prefieres obsequiarnos algo especial, tenemos una mesa de
              regalos en Liverpool. <br />
              <br />
              Número de evento
              <br />
              <a
                href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51276526?_ga=2.157739197.662679997.1712031580-586885373.1711241359" // Reemplaza esto con la URL a la que deseas dirigir
                title="Click aquí para abrir mesa de regalos"
                target="_blank" // Asegura que el enlace se abra en una nueva pestaña
                rel="noopener noreferrer" // Mejora la seguridad y el rendimiento
                style={{
                  fontWeight: 'bolder',
                  fontSize: '22px',
                  color: '#70b8d6',
                  textDecoration: 'underline', // Opcional, para remover el subrayado predeterminado de los enlaces
                }}
              >
                51276526
              </a>
              <br />
              <br />
              Agradecemos de corazón tu consideración. ¡Gracias por celebrar con
              nosotros!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

import { FC } from 'react';
import { CardSmall } from '@app/components/Cards/CardSmall';
import testIds from '@app/utils/test-ids';

export const Locations: FC = (): any => {
  return (
    <>
      <h1
        className="text-center font-site pt-5 mt-5 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0 text-xl sm:text-2xl md:text-[28px]"
        style={{
          color: '#8d3952',
          lineHeight: '1.2',
          marginBottom: '-20px',
        }}
      >
        Ubicación del evento
      </h1>
      <div
        className="flex mt-8 sm:mt-10 flex-col sm:flex-row gap-6 sm:gap-12"
        data-testid={testIds.HOME_PAGE.HIGHLIGHTS}
      >
        <CardSmall
          title="Fiesta de cumpleaños"
          subtitle="sábado 8 de marzo de 2026 - 2:00 pm"
          description={
            <>
              Mártires del 28 de Agosto 77, <br />
              Presa de San Bruno, <br />
              91028 Xalapa-Enríquez, Ver.
            </>
          }
          image="https://images.unsplash.com/photo-1723744909898-4a1ce8922699?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          url="https://maps.app.goo.gl/Dm1qCea8g2XiTuxK7"
          urlLabel="Ver ubicación"
        />
        <CardSmall
          title="¿Necesitas ayuda?"
          subtitle="Contáctanos"
          description={
            <>
              Contáctanos por Whatsapp: <br />
              <a
                href="https://wa.me/522281213774"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '18px',
                  color: '#8d3952',
                  fontWeight: 'bolder',
                }}
              >
                +52 1 228 121 3774
              </a>
            </>
          }
          image="https://as1.ftcdn.net/v2/jpg/01/63/90/90/1000_F_163909099_yWrKeZtloyzdQTg2y8XEy5XFj4dKSLvG.jpg"
          url="https://wa.me/522281213774"
          urlLabel="Contactar"
        />
      </div>
    </>
  );
};

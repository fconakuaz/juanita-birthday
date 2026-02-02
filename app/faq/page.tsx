import { getWixClient } from '@app/hooks/useWixClientServer';
import { WixMediaImage } from '@app/components/Image/WixMediaImage';
import testIds from '@app/utils/test-ids';
import { itemsFAQ } from './data';
export default async function Projects() {
  return (
    <div className="relative ">
      <div className="w-full h-[400px] relative" style={{ paddingTop: '18px' }}>
        <WixMediaImage
          media="https://res.cloudinary.com/zencommerce/image/upload/v1711077879/240_F_688010633_DJarHO4pGU9MvU3iUCkvJekUhdIfLlTe_cz4rsn.jpg"
          alt="projects"
          sizes="100vw"
          objectFit="cover"
          disableZoom={true}
        />
      </div>
      <div className="max-w-7xl mx-auto mt-[-120px] relative bg-gray-900 px-8 sm:px-20">
        <h1
          className="text-center pt-10 py-8 font-site mb-0 pb-0"
          style={{ color: 'rgb(112, 184, 214)' }}
        >
          Preguntas frecuentes
        </h1>
        <p className="pt-2 max-w-3xl text-sm text-center mx-auto ">
          Aquí encontraras las preguntas más frecuentes que podrías tener al
          asistir a la fiesta.
        </p>
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 grid-flow-row mt-10"
          data-testid={testIds.PROJECTS_PAGE.PROJECT_LIST}
        >
          {itemsFAQ!.map((item, index) => (
            <div
              key={index}
              className="p-4 relative"
              data-testid={testIds.PROJECTS_PAGE.PROJECT_ITEM_CONTAINER}
            >
              <div className="sm:w-[370px] h-[320px] relative">
                {/* <img src={item.data!.cover} alt={item.data!.title} /> */}
                <WixMediaImage
                  media={item.data!.cover}
                  alt="projects"
                  sizes="100%"
                  objectFit="contain"
                  disableZoom={true}
                />
              </div>
              <div className="bg-gray-800 sm:mt-[-50px] border-t-4 relative mx-6 px-2 pt-3 border-blue-site text-center">
                <h2 className="mb-3 font-site">{item.data!.title}</h2>
                <p className="text-sm mb-6">{item.data!.short_description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

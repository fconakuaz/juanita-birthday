import { FC } from 'react';
import { WixMediaImage } from '@app/components/Image/WixMediaImage';
import { StaticImageData } from 'next/image';

interface Props {
  title: string;
  subtitle: string;
  description: any;
  image: string | undefined;
  url: string | undefined;
  urlLabel: string;
}

export const CardSmall: FC<Props> = ({
  title,
  subtitle,
  description,
  url,
  image,
  urlLabel,
}): any => {
  return (
    <div className="w-full sm:basis-1/2 mb-8 sm:mb-0">
      <div className="h-[250px] sm:h-[380px] relative">
        <WixMediaImage
          media={image}
          objectFit="cover"
          sizes="100vw"
          disableZoom={true}
        />
      </div>
      <div className="border-y-4 border-blue-site p-4 sm:p-8 w-full sm:w-60 relative bg-gray-800 sm:ml- sm:mt-[-120px] sm:mt-[-150px] mx-auto sm:mx-0">
        <h3 className="text-xl sm:text-2xl font-site">{title}</h3>
        <p className="mb-0 mt-2 sm:mt-4 font-bold text-sm sm:text-base">
          {' '}
          {subtitle}
        </p>
        <p className="mb-4 sm:mb-6 mt-2 sm:mt-4 text-xs sm:text-sm">
          {description}
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-site py-2 sm:py-6 font-site text-sm sm:text-base block"
        >
          {urlLabel}
        </a>
      </div>
    </div>
  );
};

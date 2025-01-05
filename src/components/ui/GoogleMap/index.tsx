import { Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';
interface AddressProps {
  city: string;
  address: string;
  phone: string;
  email: string;
}
interface GoogleMapProps {
  iframeUrl: string;
  customClassName: string;
  address: AddressProps;
}
const GoogleMap: React.FC<GoogleMapProps> = ({ iframeUrl, customClassName, address }) => {
  return (
    <div className={`flex w-full flex-col gap-l laptop:gap-2xl ${customClassName}`}>
      {/* <div className="rounded-m" dangerouslySetInnerHTML={{ __html: iframe }}></div> */}
      <iframe
        className="min-h-[240px] w-full rounded-m border-none tablet:min-h-[360px] laptop:h-[480px]"
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src={iframeUrl}
      ></iframe>
      <div className="flex flex-col gap-s laptop:gap-m">
        <span className="body-bold laptop:headline-bold">{address.city}</span>
        <div className="flex gap-m subtitle-regular laptop:gap-l laptop:body-regular">
          <MapPin />
          <span>{address.address}</span>
        </div>
        <div className="flex gap-m subtitle-regular laptop:gap-l laptop:body-regular">
          <Phone />
          <span>{address.phone}</span>
        </div>
        <div className="flex gap-m subtitle-regular laptop:gap-l laptop:body-regular">
          <Mail />
          <span>{address.email}</span>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;

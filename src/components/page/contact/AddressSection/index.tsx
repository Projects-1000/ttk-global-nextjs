import React from 'react';
import SectionCard from '@/components/ui/Card/SectionCard';
import GoogleMap from '@/components/ui/GoogleMap';
import Address from '@/components/ui/Address';

const AddressSection = () => {
  const addresses = [
    {
      iframeUrl: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d964.1663139250966!2d106.75173548316761!3d10.781122096440411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317525dea7b1dbc9%3A0x2966024d7dc3dece!2zMjYgxJAuIDUxLUJUVCwgUGjGsOG7nW5nIELDrG5oIFRyxrBuZyBUw6J5LCBRdeG6rW4gMiwgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1737473611265!5m2!1svi!2s`,
      customClassName: 'google-map-section',
      address: {
        city: 'Hồ Chí Minh',
        address: '26 Đường 51-BTT, Bình Trưng Tây, Quận 2, Thủ Đức',
        phone: '055 907 5545',
        email: 'contact@ttkglobalventures.com'
      }
    },
    {
      iframeUrl: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.1677980558597!2d-106.9574783239333!3d44.79776887107087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5335fabc2a6d206b%3A0x1887ab0668b2495c!2s30%20N%20Gould%20St%20Suite%20R%2C%20Sheridan%2C%20WY%2082801%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1737473673288!5m2!1svi!2s`,
      customClassName: 'google-map-section',
      address: {
        city: 'United States',
        address: '30 N Gould St Ste R Sheridan, Wyoming 82801',
        phone: '+(84) 123 456 7890',
        email: 'contact@ttkglobalventures.com'
      }
    }
  ];

  return (
    <SectionCard customClass="container" title={<AddressSectionTitle />}>
      <div className="grid grid-cols-1 gap-4xl laptop:grid-cols-2">
        {addresses.map((data, index) => (
          <div className="flex w-full flex-col gap-l laptop:gap-2xl" key={index}>
            <GoogleMap iframeUrl={data.iframeUrl} />
            <Address address={data.address} />
          </div>
        ))}
      </div>
    </SectionCard>
  );
};

const AddressSectionTitle = () => (
  <span className="uppercase">
    <span className="text-secondary-label">Chi nhánh </span>
    <span> văn phòng</span>
  </span>
);

export default AddressSection;

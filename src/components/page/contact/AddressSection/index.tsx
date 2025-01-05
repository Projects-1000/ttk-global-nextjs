import React from 'react';
import SectionCard from '@/components/ui/Card/SectionCard';
import GoogleMap from '@/components/ui/GoogleMap';

const AddressSection = () => {
  const addresses = [
    {
      iframeUrl: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.39578606976!2d106.74947867583846!3d10.780968259108317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317525dea7b1dbc9%3A0x2966024d7dc3dece!2zMjYgxJAuIDUxLUJUVCwgUGjGsOG7nW5nIELDrG5oIFRyxrBuZyBUw6J5LCBRdeG6rW4gMiwgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1736052722140!5m2!1svi!2s`,
      customClassName: 'google-map-section',
      address: {
        city: 'Ho Chi Minh City',
        address: '123 Nguyen Hue Boulevard, District 1',
        phone: '+84 28 1234 5678',
        email: 'info@company.com'
      }
    },
    {
      iframeUrl: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4734195093297!2d106.68287667576396!3d10.774111159093254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752930f2c058bb%3A0x3478f11b73e0c3ea!2zTmFtZSBDaXR5IFNxdWFyZSwgTmFtZSBTdHJlZXQsIFNvbWV3aGVyZQ!5e0!3m2!1sen!2sus!4v1736050874510!5m2!1sen!2sus" `,
      customClassName: 'google-map-section',
      address: {
        city: 'Hanoi',
        address: '456 Ba Dinh District, Hanoi',
        phone: '+84 24 5678 1234',
        email: 'hanoi@company.com'
      }
    }
  ];

  return (
    <SectionCard customClass="container" title={<AddressSectionTitle />}>
      <div className="grid grid-cols-1 gap-4xl laptop:grid-cols-2">
        {addresses.map((data, index) => (
          <GoogleMap key={index} {...data} />
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

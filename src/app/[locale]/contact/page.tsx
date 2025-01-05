import AddressSection from '@/components/page/contact/AddressSection';
import LarkScheduleSection from '@/components/page/contact/LarkScheduleSection';

const Contact = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <LarkScheduleSection />
      <AddressSection />
    </div>
  );
};

export default Contact;

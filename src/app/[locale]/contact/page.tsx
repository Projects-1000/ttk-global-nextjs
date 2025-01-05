import AddressSection from '@/components/page/contact/AddressSection';
import LarkScheduleSection from '@/components/page/contact/LarkScheduleSection';
import { TtkFrame } from '@/assets/TtkFrame';

const Contact = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center">
      <div className="absolute right-0 top-0 -z-10 max-w-[1440px] translate-x-[0] translate-y-[-30%] scale-[0.6] opacity-50 mobile:max-tablet:hidden">
        <TtkFrame />
      </div>
      <LarkScheduleSection />
      <AddressSection />
    </div>
  );
};

export default Contact;

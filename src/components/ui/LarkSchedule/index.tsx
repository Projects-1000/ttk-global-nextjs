// import './index.scss';
import '@/styles/scss/_helper.scss';
import Image from 'next/image';
import larkLogo from '@/assets/howitwork/larkschedule/lark-logo.png';
type LarkSchedule = {
  isHeading?: boolean;
  isBorder?: boolean;
};
const LarkSchedule: React.FC<LarkSchedule> = ({ isHeading = false, isBorder = false }) => {
  const larkSchedule = `<div class="scheduler-inline-widget" data-url="https://ttkenable.larksuite.com/scheduler/embed/24d2aff55ef7aadf" style="width:100%;height:626px;"></div>
<script type="text/javascript" src="https://ttkenable.larksuite.com/scheduler/embed/scheduler-widget.js" async></script>`;

  return (
    <div className="w-full">
      {isHeading && <LarkScheduleHeading />}
      <div className="taplet:container taplet:max-w-[1440px]">
        <div
          className={`mobile:max-tablet:border-gradient-stroke-1 w-full rounded-m bg-blue-50/20 mobile:max-tablet:p-xl mobile:max-tablet:backdrop-blur-md ${isBorder && 'border-gradient-stroke-1 rounded-m bg-blue-50/20 p-xl backdrop-blur-md'}`}
          dangerouslySetInnerHTML={{ __html: larkSchedule }}
        ></div>
      </div>
    </div>
  );
};
const LarkScheduleHeading = () => {
  return (
    <div className="w-[100vw] p-2xl mobile:max-tablet:px-0 laptop:p-4xl">
      <Image
        alt="lark-schedule-logo"
        src={larkLogo}
        width={0}
        height={0}
        sizes="100vw"
        className="h-[24px] w-[91px] object-contain object-center laptop:h-4xl laptop:w-[152px]"
      />
    </div>
  );
};
export default LarkSchedule;

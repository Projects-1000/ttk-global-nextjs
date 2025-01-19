// import './index.scss';
import '@/styles/scss/_helper.scss';
import Image from 'next/image';
import larkLogo from '@/assets/howitwork/larkschedule/lark-logo.png';
const LarkSchedule: React.FC<{ isHeading?: boolean }> = ({ isHeading = false }) => {
  const larkSchedule = `<div class="scheduler-inline-widget" data-url="https://ttkenable.larksuite.com/scheduler/embed/24d2aff55ef7aadf" style="width:100%;height:626px;"></div>
<script type="text/javascript" src="https://ttkenable.larksuite.com/scheduler/embed/scheduler-widget.js" async></script>`;

  return (
    <div className="w-full">
      {isHeading && <LarkScheduleHeading />}
      <div className="min-w-full" dangerouslySetInnerHTML={{ __html: larkSchedule }}></div>
      {/* <iframe
        src="https://ttkenable.larksuite.com/scheduler/embed/24d2aff55ef7aadf"
        className="lark-container h-[626px] w-full bg-blue-10"
      ></iframe>
      <script
        type="text/javascript"
        src="https://ttkenable.larksuite.com/scheduler/embed/scheduler-widget.js"
        async
      ></script> */}
    </div>
  );
};
const LarkScheduleHeading = () => {
  return (
    <div className="py-xl laptop:p-4xl">
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

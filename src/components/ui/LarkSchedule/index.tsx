// import './index.scss';
import '@/styles/scss/_helper.scss';

const LarkSchedule = () => {
  const larkSchedule = `<div class="scheduler-inline-widget" data-url="https://ttkenable.larksuite.com/scheduler/embed/24d2aff55ef7aadf" style="width:100%;height:626px;"></div>
<script type="text/javascript" src="https://ttkenable.larksuite.com/scheduler/embed/scheduler-widget.js" async></script>`;

  return (
    <div className="border-gradient-stroke-1-mobile-padding w-full rounded-m bg-blue-50/20 p-2xs backdrop-blur-md laptop:p-xl">
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

export default LarkSchedule;

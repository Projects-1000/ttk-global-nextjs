// import './index.scss';
const LarkSchedule = () => {
  const larkSchedule = `<div class="scheduler-inline-widget" data-url="https://ttkenable.larksuite.com/scheduler/embed/24d2aff55ef7aadf" style="width:100%;height:626px;"></div>
<script type="text/javascript" src="https://ttkenable.larksuite.com/scheduler/embed/scheduler-widget.js" async></script>`;

  return (
    <div className="w-full rounded-m bg-blue-10 p-xl">
      <div dangerouslySetInnerHTML={{ __html: larkSchedule }}></div>
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

import { YellowVector } from '@/assets/yellow-vector';
import './index.scss';
const About = () => {
  return (
    <div className="relative flex items-center justify-center overflow-hidden p-[120px]">
      <div className="absolute right-[-50%] top-[10px] z-0 overflow-hidden">
        <YellowVector />
      </div>
      <div className="z-10 flex flex-col items-center justify-center gap-3xl">
        <h1 className="h1-bold">
          VỀ <span className="text-secondary-label">TTK GLOBAL VENTURES</span>
        </h1>
        <span className="body-regular max-w-[480px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu dignissim nibh. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
        </span>
        <div className="grid grid-cols-3">
          <div className="flex items-center justify-center p-4xl pr-0">
            <div className="flex w-full flex-col items-center justify-center gap-l border-b-0 border-l-0 border-r-[1px] border-t-0 border-solid border-blue-200 pr-4xl text-center">
              <h1 className="h1-bold text-blue-500">200+</h1>
              <span className="headline-bold"> Đối tác thành công</span>
            </div>
          </div>
          <div className="flex items-center justify-center p-4xl pr-0">
            <div className="flex w-full flex-col items-center justify-center gap-l border-b-0 border-l-0 border-r-[1px] border-t-0 border-solid border-blue-200 pr-4xl text-center">
              <h1 className="h1-bold text-blue-500">50.000</h1>
              <span className="headline-bold"> Doanh thu trung bình của mỗi gian hàng tính theo USD</span>
            </div>
          </div>
          <div className="flex items-center justify-center p-4xl">
            <div className="flex flex-col items-center justify-center gap-l text-center">
              <h1 className="h1-bold text-blue-500">24/7</h1>
              <span className="headline-bold"> Hệ thống vận hành không ngừng trên Amazon</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import Benefit from '@/components/page/howitwork/Benefit';
import DemoSection from '@/components/page/howitwork/Demo';
import FAQ from '@/components/page/howitwork/FAQ';
import HowItWorkHero from '@/components/page/howitwork/Hero';
import ProcessSection from '@/components/page/howitwork/ProcessSection';
import ProjectCounting from '@/components/page/howitwork/ProjectCounting';

const HowItWork = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <HowItWorkHero />
      <ProjectCounting />
      <ProcessSection />
      {/* <DemoSection /> */}
      <Benefit />
      <FAQ />
    </div>
  );
};

export default HowItWork;
